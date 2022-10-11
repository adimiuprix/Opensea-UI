import React, { useState, useContext, useRef, useEffect } from 'react'
import { AppContext } from '../../Context/Context'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional

import { wallets } from '../../constants'
import { MdOutlineAccountBalanceWallet, MdAccountCircle } from 'react-icons/md'

const Wallet = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { setBgNavbar } = useContext(AppContext)
    console.log(isOpen)

    const walletRef = useRef(null)

    const onClickOutside = () => {
        setIsOpen(false)
        document.body.classList.remove('overflow-y-hidden')
    }
    const toggleOpenWallet = () => {
        setIsOpen((prev) => !prev)
        setBgNavbar((prev) => !prev)
        document.body.classList.toggle('overflow-y-hidden')
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (walletRef.current && !walletRef.current.contains(e.target)) {
                onClickOutside()
            }
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.addEventListener('click', handleClickOutside, true)
        }
    }, [isOpen])

    return (
        <div className="flex items-center px-4 h-full  relative z-[99]">
            <div onClick={toggleOpenWallet} className=" relative">
                <MdOutlineAccountBalanceWallet className="w-[32px] h-[32px] text-primary-dark dark:text-primary-light cursor-pointer hover:opacity-75" />
            </div>
            <div
                className={`${
                    isOpen
                        ? 'h-screen w-full top-[72px] left-0 fixed backdrop-blur-sm brightness-50'
                        : ''
                }`}
            />
            <aside
                ref={walletRef}
                className={`${
                    isOpen ? 'translate-x-0 duration-300' : 'translate-x-full'
                } fixed bg-primary-light dark:bg-primary-dark w-[400px] h-screen shadow-lg top-[72px] right-0`}
            >
                <div className=" w-full">
                    <div className="flex items-center p-5 border-b dark:border-gray-600">
                        <MdAccountCircle className="h-[24px] w-[24px] mr-2 opacity-80" />
                        <h4 className="font-semibold ">My Wallet</h4>
                    </div>
                    <p className="px-5 py-4">
                        If you don't have a{' '}
                        <Tippy
                            placement="bottom"
                            content="A crypto wallet is an application or hardware device
                        that allows individuals to store and retrieve digital
                        items. yet, you can select a provider and create one
                        now."
                        >
                            <a href="/" className="font-semibold text-primary">
                                wallet{' '}
                            </a>
                        </Tippy>
                        yet, you can select a provider and create one now.
                    </p>
                    <div className="px-5 pt-2">
                        <ul className="divide-y dark:divide-gray-600 border dark:border-gray-600 first:rounded-t-xl last:rounded-b-xl">
                            {wallets.map(({ label, icon, to, brand }) => (
                                <li
                                    key={label}
                                    className="w-full first:rounded-t-xl  hover:shadow-auto "
                                >
                                    <a
                                        href="/"
                                        className=" flex flex-auto p-4 items-center"
                                    >
                                        <img
                                            src={icon}
                                            className="w-[24px] h-[24px] mr-3"
                                            alt=""
                                        />
                                        <span className="text-sm font-semibold flex-1">
                                            {label}
                                        </span>
                                        {brand && (
                                            <span
                                                className={`p-2 leading-4  text-sm rounded-lg ${
                                                    brand === 'Popular'
                                                        ? 'bg-primary text-primary-light'
                                                        : 'bg-gray-100 dark:bg-gray-400 text-muted-dark dark:text-secondary-light'
                                                }
                                             `}
                                            >
                                                {brand}
                                            </span>
                                        )}
                                    </a>
                                </li>
                            ))}
                            <li className="w-full flex justify-center last:rounded-b-xl hover:shadow-auto hover:bg-secondary-light">
                                <button className="font-semibold p-4 items-center">
                                    Show more options
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Wallet
