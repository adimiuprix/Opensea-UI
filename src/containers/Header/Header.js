import React from 'react'
import { bgHeaderLight } from '../../constants'
import Slider from './Slider'

const Header = () => {
    return (
        <div className="w-full pt-[72px]">
            <div
                className="w-full bg-no-repeat bg-cover -mt-[72px] pt-[72px] pb-[34px]"
                style={{
                    backgroundImage: `url(${bgHeaderLight})`,
                    backgroundPosition: '50% 50%',
                }}
            >
                <div className="flex flex-col items-center">
                    <h1 className="flex justify-center flex-wrap px-5 my-8 text-center font-bold text-3xl text-primary-dark dark:text-secondary-light">
                        Explore, collect, and sell NFTs
                    </h1>
                    <div className="px-4 lg:px-8 w-full">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
