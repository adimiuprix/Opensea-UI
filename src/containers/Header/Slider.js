import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { collections } from '../../constants'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper'

const Header = () => {
    const swiperRef = useRef(null)
    return (
        <div className="h-full w-full relative">
            <button
                id="previousButton"
                type="button"
                className="prev absolute top-1/2 translate-y-[-50%] left-2 lg:-left-6 w-[48px] h-[48px] z-20 bg-primary-light dark:bg-primary-dark shadow-md rounded-full cursor-pointer"
                onClick={() => swiperRef.current.swiper.slidePrev()}
            >
                <MdKeyboardArrowLeft className="w-full h-full text-secondary-dark dark:text-secondary-light" />
            </button>
            <button
                id="nextButton"
                type="button"
                className="next absolute top-1/2 translate-y-[-50%] right-2 lg:-right-6 w-[48px] h-[48px] z-20 bg-primary-light dark:bg-primary-dark shadow-md rounded-full cursor-pointer"
                onClick={() => swiperRef.current.swiper.slideNext()}
            >
                <MdKeyboardArrowRight className="w-full h-full text-secondary-dark dark:text-secondary-light" />
            </button>
            <Swiper
                ref={swiperRef}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10,
                    },
                    540: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 15,
                    },
                    680: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 12,
                    },
                }}
                loop={true}
                autoplay={true}
                loopFillGroupWithBlank={true}
                navigation={{
                    prevEl: 'prev',
                    nextEl: 'next',
                }}
                modules={[Autoplay, Navigation]}
            >
                {collections.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex justify-center w-full"
                    >
                        <li
                            className={`flex relative  rounded-2xl group  overflow-hidden`}
                        >
                            <a href="/" className="w-full">
                                <img
                                    alt=""
                                    src={item.image}
                                    className="rounded-2xl group-hover:scale-110 object-cover w-full transitio-all duration-300 "
                                />
                                <div className="absolute flex flex-col gap-1 max-h-full  bottom-5 left-5 z-10 [&>*]:text-primary-light [&>*]dark:text-primary-dark">
                                    <h4 className="font-semibold truncate">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm">
                                        {item.floor}: {item.currency}
                                    </p>
                                </div>
                                <div className="absolute top-0 right-0 bg-gradient-to-t from-black opacity-50  w-full h-full rounded-2xl"></div>
                            </a>
                        </li>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Header
