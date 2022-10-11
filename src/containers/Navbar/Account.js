import React from 'react'
import { accountMenu } from '../../constants'

import { MdOutlineAccountCircle } from 'react-icons/md'
import NightMode from './NightMode'

const Account = () => {
    return (
        <div className="group h-full relative z-[99]">
            <a href="/login" className="flex items-center px-4 h-full">
                <MdOutlineAccountCircle className="w-[32px] h-[32px] text-primary-dark dark:text-primary-light hover:opacity-75" />
            </a>
            <div className="hidden group-hover:md:block absolute bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg min-w-[240px] max-h-screen top-[72px] right-0">
                <ul className="flex flex-col divide-y dark:divide-gray-600 overflow-auto ">
                    {accountMenu.map(({ label, icon, to }) => (
                        <li
                            key={label}
                            className="p-4 hover:shadow-auto cursor-pointer"
                        >
                            <a href="/" className="flex items-center w-full ">
                                <span className="text-primary-dark dark:text-secondary-light size mr-3">
                                    {icon}
                                </span>
                                <span className="font-semibold text-primary-dark dark:text-secondary-light ">
                                    {label}
                                </span>
                            </a>
                        </li>
                    ))}
                    <li className="hover:shadow-auto">
                        <NightMode />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Account
