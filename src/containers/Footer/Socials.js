import React from 'react'
import { socials } from '../../constants'

const Socials = () => {
    return (
        <div>
            <h1 className="text-primary-light font-semibold text-xl lg:text-start text-center">
                Join the community
            </h1>
            <div className="flex items-center flex-wrap justify-center ">
                {socials.map((icon, i) => (
                    <span
                        key={i + 1}
                        className="flex items-center justify-center rounded-lg bg-primary dark:bg-secondary-dark [&>*]:w-[24px] [&>*]:h-[24px] w-[54px] h-[54px] p-2 mt-4 mr-4 text-primary-light dark:text-gray-200 cursor-pointer hover:bg-primary-hover "
                    >
                        {icon}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Socials
