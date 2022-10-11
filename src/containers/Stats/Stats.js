import React, { useState, useContext } from 'react'
import { AppContext } from '../../Context/Context'
import { collections } from '../../constants'
import Table from './Table'

import { MdKeyboardArrowDown } from 'react-icons/md'

const Stats = () => {
    const [isActive, setIsActive] = useState('Trending')
    const [views, setViews] = useState(false)
    const { collectionsApi } = useContext(AppContext)

    const getCollections = (from, to) => {
        return collectionsApi.slice(from, to)
    }

    return (
        <div className="px-4 lg:px-8 pb-6">
            <div className="flex items-center justify-between border-b dark:border-b-gray-600">
                <div className="flex gap-8 md:-mb-2 font-semibold text-xl md:text-2xl">
                    <h1
                        onClick={() => setIsActive('Trending')}
                        className={`${
                            isActive === 'Trending'
                                ? 'text-secondary-dark dark:text-secondary-light '
                                : 'text-muted-dark'
                        } cursor-pointer relative pb-4 hover:text-primary-dark dark:hover:text-primary-light`}
                    >
                        Trending
                        <span
                            className={`${
                                isActive === 'Trending'
                                    ? 'translate-x duration-500'
                                    : 'hidden translate-100'
                            } w-full absolute left-0 bottom-0 border-b-2 border-b-gray-900 dark:border-b-white`}
                        />
                    </h1>

                    <h1
                        onClick={() => setIsActive('Top')}
                        className={`${
                            isActive === 'Top'
                                ? 'text-secondary-dark dark:text-secondary-light'
                                : 'text-muted-dark'
                        } cursor-pointer relative pb-4 hover:text-primary-dark dark:hover:text-primary-light`}
                    >
                        Top
                        <span
                            className={`${
                                isActive === 'Top'
                                    ? 'translate-x duration-500'
                                    : 'hidden translate-100'
                            } w-full absolute left-0 bottom-0 border-b-2 dark:border-b-white border-b-gray-900 `}
                        />
                    </h1>
                </div>
                <div className="flex items-center gap-5 mb-2 relative">
                    <button
                        type="button"
                        disabled={isActive === 'Top' ? false : true}
                        onClick={() => setViews((prev) => !prev)}
                        className="flex items-center relative dark:outline-gray-600 font-semibold bg-transparent rounded-lg pl-3 pr-2 md:px-6 py-[6px] md:py-3 text-sm md:text-base hover:shadow-lg disabled:opacity-50 disabled:hover:shadow-none outline outline-gray-200  hover:outline-gray-300 dark:hover:outline-gray-400 cursor-pointer"
                    >
                        <span className="text-primary-dark dark:text-primary-light">
                            24H
                        </span>
                        <MdKeyboardArrowDown className="ml-0 md:ml-1 w-5 md:w-6 h-5 md:h-6 text-muted-dark dark:text-muted-light" />
                        {views && (
                            <div className="top-[50px] left-0 right-0 absolute  rounded-lg bg-primary-light dark:bg-primary-dark shadow-lg trasition-all duration-300">
                                <ul className="w-full divide-y dark:divide-gray-700">
                                    {[
                                        '1H',
                                        '6H',
                                        '24H',
                                        '7D',
                                        '30D',
                                        'All',
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="p-4 text-sm hover:shadow-auto text-primary-dark dark:text-primary-light"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={() => {}}
                        className="flex items-center font-semibold text-sm md:text-base bg-transparent rounded-lg px-3 md:px-6 py-[6px] md:py-3 hover:shadow-lg outline outline-gray-200 dark:outline-gray-600  hover:outline-gray-300 dark:hover:outline-gray-400 cursor-pointe"
                    >
                        <span className="text-primary-dark dark:text-primary-light">
                            View All
                        </span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {isActive === 'Trending' ? (
                    <>
                        <div className="col-span-1 mr-0 lg:mr-10">
                            <Table data={getCollections(0, 5)} />
                        </div>

                        <div className="hidden lg:grid ml-0 lg:ml-10">
                            <Table data={getCollections(2, 7)} num={6} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-span-1 mr-0 lg:mr-10">
                            <Table data={collections} top />
                        </div>

                        <div className="hidden lg:grid ml-0 lg:ml-10">
                            <Table data={getCollections(3, 8)} top num={6} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Stats
