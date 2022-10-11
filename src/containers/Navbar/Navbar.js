import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context'

import { FiSearch } from 'react-icons/fi'
import NavLinks from './NavLinks'
import Wallet from './Wallet'
import Account from './Account'
import Sidebar from './Sidebar'
import { logo, logoText } from '../../constants'

const Navbar = () => {
    const { bgNavbar } = useContext(AppContext)

    return (
        <div
            className={`fixed top-0 left-0 w-full h-[72px] text-gray-900 dark:text-gray-100 z-[120] ${
                bgNavbar
                    ? 'bg-primary-light dark:bg-gray-900 border-b border-b-gray-200 dark:border-b-gray-800 transition-all duration-100'
                    : 'bg-transparent'
            }`}
        >
            <div className="h-full w-full px-4 lg:px-8 ">
                <nav className="h-full flex items-center justify-between -mr-[16px]">
                    <div className="flex lg:pr-[48px] pr-[32px] ">
                        <a href="/" className="flex items-center relative">
                            <img
                                src={logo}
                                alt=""
                                className="w-[40px] h-[40px] rounded-full mr-2"
                            />
                            {logoText}
                        </a>
                    </div>

                    <div className="h-[45px] w-full px-2 mr-[32px] hidden sm:flex items-center rounded-[12px] bg-gray-50 hover:bg-primary-light focus:bg-primary-light text-muted-dark dark:text-muted-light relative hover:shadow-sm">
                        <FiSearch />
                        <input
                            type="text"
                            className="w-full bg-transparent 
                        text-primary-dark dark:text-primary-light
                        px-2  focus:outline-0 
                        placeholder:text-muted-dark dark:placeholder:text-muted-light "
                            placeholder="Search items, collections, and accounts"
                        />
                    </div>
                    <ul className="flex flex-shrink-0 relative items-center h-full">
                        <div className="hidden xl:flex ">
                            <NavLinks />
                        </div>
                        <div className="hidden lg:flex items-center relative justify-between h-full">
                            <Account />
                            <Wallet />
                        </div>
                        <div className="flex xl:hidden items-center relative">
                            <button className="px-4 flex sm:hidden">
                                <FiSearch className="w-[28px] h-[28px] text-primary-dark dark:text-primary-light cursor-pointer hover:opacity-75" />
                            </button>
                            <Sidebar />
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
