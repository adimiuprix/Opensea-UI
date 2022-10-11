import React from 'react'
import { MdVerified } from 'react-icons/md'

const Table = ({ data, num, top }) => {
    const toK = (num) => {
        return Math.abs(num) > 999
            ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
            : Math.sign(num) * Math.abs(num)
    }
    return (
        <div className="mt-4 ">
            <div className="flex justify-between py-4 px-2 font-semibold text-xs text-muted-dark dark:text-muted-light ">
                <h4 className="flex items-center w-3/5">COLLECTION</h4>
                <h4 className="hidden xl:flex items-center justify-end w-1/5">
                    FLOOR PRICE
                </h4>
                <h4 className="flex items-center justify-end w-1/5">VOLUME</h4>
            </div>
            <div className=" ">
                <ul>
                    {data.slice(0, 5).map((item, index) => (
                        <li
                            key={index}
                            className="hover:bg-secondary-light dark:hover:bg-secondary-dark px-2 py-3 rounded-lg cursor-pointer"
                        >
                            <a
                                href="/"
                                className="flex items-center justify-between w-full "
                            >
                                <div className="flex items-center w-4/5 xl:w-3/5">
                                    <span className="font-semibold text-muted-dark dark:text-muted-light text-xl w-[23px] mr-3">
                                        {index + (num ? num : 1)}
                                    </span>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="h-[52px] w-[52px] md:h-[68px] md:w-[68px] rounded-lg mr-3"
                                    />
                                    <div>
                                        <span className="flex items-center">
                                            <h4
                                                className="text-primary-dark dark:text-primary-light font-semibold text-sm md:text-base whitespace-normal overflow-hidden  text-ellipsis "
                                                style={{
                                                    width: '100%',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: '1',
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                            >
                                                {item.name}
                                            </h4>
                                            {item.floor % 2 === 0 && (
                                                <MdVerified className="ml-1 text-blue-500 w-4 h-4" />
                                            )}
                                        </span>
                                        <h4 className="flex xl:hidden text-muted-dark dark:text-muted-light font-semibold text-xs md:text-sm mt-1">
                                            <p className="font-normal mr-1">
                                                Floor:
                                            </p>
                                            {item.floor} {item.currency}
                                        </h4>
                                    </div>
                                </div>

                                <span
                                    className="hidden xl:flex items-center justify-end w-1/5
                                text-primary-dark dark:text-primary-light font-semibold 
                                "
                                >
                                    {item.floor} {item.currency}
                                </span>
                                <span
                                    className="flex flex-col items-end justify-end w-1/5
                                text-primary-dark dark:text-primary-light font-semibold text-sm md:text-base"
                                >
                                    <p className="text-end">
                                        {toK(item.volume)} {item.currency}
                                    </p>
                                    {top && (
                                        <p
                                            className={`${
                                                item.change > 0
                                                    ? 'text-green-500'
                                                    : 'text-red-500'
                                            }`}
                                        >
                                            {item.change > 0 ? '+' : ''}{' '}
                                            {item.change}%
                                        </p>
                                    )}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Table
