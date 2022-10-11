import React, { useState } from 'react'
import { MdModeNight } from 'react-icons/md'

const NightMode = ({ styles }) => {
    const [isDarkmode, setIsDarkmode] = useState(false)
    const toggleDarkMode = () => {
        window.document.documentElement.classList.toggle('dark')
        setIsDarkmode((prev) => !prev)
    }
    return (
        <>
            <div
                onClick={toggleDarkMode}
                className="flex flex-auto items-center w-full p-4 cursor-pointer"
            >
                <div className="text-primary-dark dark:text-primary-light mr-3">
                    <MdModeNight
                        className={`${
                            styles ? styles : 'w-[18px] h-[18px]'
                        } rotate-45`}
                    />
                </div>
                <h2 className="flex flex-1 font-semibold text-primary-dark dark:text-primary-light relative">
                    Night Mode
                </h2>
                <span
                    className={` flex items-center relative w-[48px] h-[24px] rounded-full ${
                        isDarkmode ? 'bg-primary' : 'bg-gray-400'
                    }`}
                >
                    <span
                        className={`${
                            isDarkmode ? 'translate-x-[24px] ' : 'translate-x-0'
                        } duration-300 left-1 w-[16px] h-[16px] bg-primary-light rounded-full absolute`}
                    ></span>
                </span>
            </div>
        </>
    )
}

export default NightMode
