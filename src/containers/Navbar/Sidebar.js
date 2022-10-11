import React, { useState, useContext, useRef, useEffect } from 'react'
import { AppContext } from '../../Context/Context'

import {
    MdOutlineMenu,
    MdClose,
    MdChevronRight,
    MdChevronLeft,
    MdCheck,
} from 'react-icons/md'
import { Button } from '../../components/index'
import NightMode from './NightMode'
import { navLinks, socials } from '../../constants'

const styles =
    'w-[32px] h-[32px] text-primary-dark dark:text-primary-light cursor-pointer hover:opacity-75 duration-300'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [subMenu, setSubMenu] = useState('')
    const { bgNavbar, setBgNavbar } = useContext(AppContext)
    const sideBarRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)

        setBgNavbar((prev) => !prev)

        document.body.classList.toggle('overflow-y-hidden')
    }

    const onClickOutside = () => {
        setIsOpen(false)
        document.body.classList.remove('overflow-y-hidden')
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
                onClickOutside()
            }
        }
        document.addEventListener('click', handleClickOutside, true)
    })

    return (
        <div>
            <div onClick={toggleMenu} className="px-4 ">
                {isOpen ? (
                    <MdClose className={styles} />
                ) : (
                    <MdOutlineMenu className={styles} />
                )}
            </div>
            <div
                className={`${
                    isOpen
                        ? 'h-screen w-full top-[72px] left-0 fixed backdrop-blur-sm brightness-50'
                        : ''
                }`}
            />
            <aside
                ref={sideBarRef}
                className={`${
                    isOpen ? 'translate-x-0 duration-300' : 'translate-x-full'
                } fixed bg-primary-light dark:bg-primary-dark  w-full md:w-[400px] shadow-lg top-[72px] right-0 z-[99] `}
                style={{ height: 'calc(100% - 72px)' }}
            >
                <div className="flex flex-col h-full grow relative">
                    <ul
                        className="flex flex-col overflow-auto "
                        style={{ flex: '1 0 0%' }}
                    >
                        {navLinks
                            .filter((_link, i) => i !== navLinks.length - 1)
                            .map(({ label, icon, subLinks }) => (
                                <div key={label}>
                                    <li
                                        onClick={() =>
                                            subMenu !== label
                                                ? setSubMenu(label)
                                                : setSubMenu('')
                                        }
                                        className="flex items-center h-[72px] px-4 [&>*]:text-primary-dark [&>*]:dark:text-primary-light cursor-pointer hover:opacity-75 "
                                    >
                                        <span className="[&>*]:w-[30px] [&>*]:h-[30px] mr-2">
                                            {icon}
                                        </span>
                                        <h4 className="font-semibold flex-1">
                                            {label}
                                        </h4>
                                        <span className="flex">
                                            {label === 'Languages' && 'en'}{' '}
                                            <MdChevronRight className="w-[24px] h-[24px]" />
                                        </span>
                                    </li>
                                    <div
                                        className={`${
                                            subMenu === label
                                                ? 'block'
                                                : 'hidden'
                                        } absolute top-0 right-0 w-full bg-primary-light dark:bg-primary-dark z-10 bottom-[80px] overflow-auto`}
                                    >
                                        <span
                                            onClick={() => setSubMenu('')}
                                            className="flex items-center p-4 border-b dark:border-b-gray-600 [&>*]:text-primary-dark [&>*]:dark:text-primary-light cursor-pointer hover:opacity-75"
                                        >
                                            <MdChevronLeft className="h-[24px] w-[24px]" />
                                            <h4 className="font-semibold">
                                                {label}
                                            </h4>
                                        </span>
                                        <ul>
                                            {subLinks.map((item, i) => (
                                                <li
                                                    key={i + 1}
                                                    className="flex h-[72px] px-4 pt-4 &>*]:text-primary-dark [&>*]:dark:text-primary-light cursor-pointer"
                                                >
                                                    <a
                                                        href="/"
                                                        className="flex flex-auto items-center "
                                                    >
                                                        {item.icon && (
                                                            <img
                                                                className="w-6 h-6 mr-3"
                                                                src={item.icon}
                                                                alt=""
                                                            />
                                                        )}
                                                        <h4 className="font-semibold w-full">
                                                            {item.title}
                                                        </h4>
                                                        {item.title ===
                                                            'English' && (
                                                            <MdCheck className="w-[24px] h-[24px]" />
                                                        )}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        <li className="hover:opacity-75">
                            <NightMode styles="w-[30px] h-[30px]" />
                        </li>
                        <li className="p-4 mt-auto md:m-0">
                            <Button
                                label="Connect wallet"
                                full="w-full md:w-auto"
                            />
                        </li>
                    </ul>

                    <div className="flex items-center justify-center w-full h-[80px] border-t dark:border-gray-600 bottom-0">
                        <div className="flex  gap-4">
                            {socials.map((icon, i) => (
                                <div key={i}>
                                    {i !== socials.length - 1 && (
                                        <span className="[&>*]:w-[24px] [&>*]:h-[24px] p-2 text-gray-400 dark:text-gray-400 opacity-90 cursor-pointer">
                                            {icon}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
