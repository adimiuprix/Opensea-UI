import React from 'react'

import Socials from './Socials'
import { logoWhite, footerLinks } from '../../constants'

const Footer = () => {
    return (
        <div className="w-full flex justify-center relative bg-[#1868b7] dark:bg-[#04111d]">
            <div className="flex flex-col lg:w-[90%] w-[85%] pt-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 pb-14">
                    <div className="w-full text-primary-light lg:text-start text-center">
                        <h4 className="font-semibold text-xl mb-2">
                            Stay in the loop
                        </h4>
                        <p className="mb-4">
                            Join our mailing list to stay in the loop with our
                            newest feature releases, NFT drops, and tips and
                            tricks for navigating OpenSea.
                        </p>
                        <form className="flex lg:justify-start justify-center items-center w-full">
                            <input
                                type="email"
                                className="w-full p-3 pl-4 rounded-xl text-primary-dark bg-primary-light outline-gray-300 hover:outline-gray-400  "
                                placeholder="Your email address"
                            />
                            <button className="px-6 py-3 ml-4 min-w-fit bg-primary rounded-xl font-semibold leading-relaxed hover:bg-primary-hover hover:scale-x-95">
                                Sign up
                            </button>
                        </form>
                    </div>
                    <div className="flex lg:justify-end justify-center">
                        <Socials />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col border-t border-t-white-rgba ">
                    <div className="lg:w-[25%] w-full pt-14 flex flex-col lg:justify-start lg:items-start items-center lg:text-left text-center text-primary-light">
                        <span className="w-[44px] h-[44px] mb-2">
                            <img
                                src={logoWhite}
                                alt=""
                                className="w-full h-full "
                            />
                        </span>
                        <h1 className="font-semibold text-xl mb-2 text-left">
                            OpenSea
                        </h1>
                        <p>
                            The world’s first and largest digital marketplace
                            for crypto collectibles and non-fungible tokens
                            (NFTs). Buy, sell, and discover exclusive digital
                            items.
                        </p>
                    </div>
                    <div className="lg:w-[75%] w-full pt-14 lg:pl-[72px] pl-0 flex items-start justify-around flex-wrap">
                        {footerLinks.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:items-start items-center text-primary-light md:w-[20%] w-[50%] mb-10"
                            >
                                <h4 className="font-semibold my-4">
                                    {item.head}
                                </h4>
                                <ul>
                                    {item.sublinks.map((link, index) => (
                                        <li
                                            key={index}
                                            className="text-sm mt-3 md:text-left text-center hover:scale-x-105"
                                        >
                                            <a href="/">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                                {item.extra && (
                                    <div className="">
                                        {item.extra.map((extra, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col md:items-start items-center text-primary-light"
                                            >
                                                <h4 className="font-semibold mt-14 mb-4">
                                                    {extra.head}
                                                </h4>
                                                <ul>
                                                    {extra.sublinks.map(
                                                        (link, index) => (
                                                            <li
                                                                key={index}
                                                                className="text-sm mt-3 md:text-left text-center hover:scale-x-105"
                                                            >
                                                                <a href="/">
                                                                    {link}
                                                                </a>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center py-5 border-t border-t-white-rgba">
                    <div className="text-xs text-primary-light my-3">
                        © 2018 - 2022 Ozone Networks, Inc
                    </div>
                    <div className="flex gap-4 text-xs text-primary-light md:my-3 mt-0">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
