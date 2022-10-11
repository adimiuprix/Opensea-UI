import React from 'react'
import { navLinks } from '../../constants'

const NavLinks = () => {
    return (
        <>
            {navLinks
                .filter((link) => link.label !== 'Languages')
                .map((link) => (
                    <div key={link.label}>
                        <div className="px-3 text-left md:cursor-pointer group relative">
                            <a
                                href={link.to}
                                className="hover:opacity-90 px-4 "
                            >
                                <li className="font-semibold ">{link.label}</li>
                            </a>

                            {link.submenu && (
                                <div className="hidden absolute  group-hover:md:block hover:md:block min-w-[220px] max-h-screen duration-1000">
                                    <ul className="bg-white dark:bg-primary-dark shadow-2xl flex-col w-full  rounded-lg divide-y">
                                        {link.subLinks.map((item) => (
                                            <li
                                                key={item.title}
                                                className="flex p-4 hover:shadow-lg"
                                            >
                                                <a
                                                    href="/"
                                                    className="flex items-center "
                                                >
                                                    {item.icon && (
                                                        <img
                                                            className="w-6 h-6 mr-3"
                                                            src={item.icon}
                                                            alt=""
                                                        />
                                                    )}
                                                    <span className="font-semibold text-primary-dark dark:text-primary-light w-full">
                                                        {item.title}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
        </>
    )
}

export default NavLinks
