import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdVerified,
} from 'react-icons/md'

import 'swiper/css'
import 'swiper/css/navigation'

const Cards = ({ data, title }) => {
    const swiperRef = useRef(null)

    return (
        <div className="py-4 w-full">
            <div className="flex justify-start mb-6 ">
                <h1 className="text-2xl font-semibold text-primary-dark dark:text-primary-light ">
                    {title}
                </h1>
            </div>

            <div className="relative w-full">
                <button
                    id="previousButton"
                    type="button"
                    className="prev absolute top-1/2 translate-y-[-50%] left-2 lg:-left-6 w-[44px] h-[44px] z-20 bg-black-rgba lg:bg-primary-light lg:dark:bg-secondary-dark shadow-lg rounded-full cursor-pointer "
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                    <MdKeyboardArrowLeft className="w-full h-full text-secondary-light lg:text-secondary-dark dark:text-secondary-light " />
                </button>
                <button
                    id="nextButton"
                    type="button"
                    className="next absolute top-1/2 translate-y-[-50%] right-2 lg:-right-6 w-[44px] h-[44px] z-20 bg-black-rgba lg:bg-primary-light lg:dark:bg-secondary-dark shadow-lg rounded-full cursor-pointer"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                    <MdKeyboardArrowRight className="w-full h-full text-secondary-light lg:text-secondary-dark dark:text-secondary-light" />
                </button>
                <Swiper
                    ref={swiperRef}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            spaceBetween: 12,
                        },

                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                            spaceBetween: 12,
                        },
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        prevEl: 'prev',
                        nextEl: 'next',
                    }}
                    modules={[Navigation]}
                    className="relative m-5"
                >
                    {data.map((item) => (
                        <SwiperSlide
                            key={item.name}
                            className="flex justify-center w-full rounded-xl mb-4 shadow-md hover:shadow-lg"
                        >
                            <div className="w-full h-full group">
                                <a href="/">
                                    <div className="relative z-0">
                                        <img
                                            alt=""
                                            sizes="100vw"
                                            src={item.banner}
                                            className="rounded-t-xl object-cover w-full h-[300px] md:h-[260px] lg:h-[222px]  "
                                        />
                                    </div>
                                    <div className="flex items-center justify-start bg-primary-light dark:bg-secondary-dark p-4 rounded-xl -mt-6 dark:group-hover:bg-zinc-700">
                                        <div className="mr-4 h-[74px] w-[74px] z-[99]">
                                            <img
                                                src={item.logo}
                                                alt=""
                                                className="w-full object-cover rounded-xl border-4 border-white bg-primary-light dark:bg-primary-dark dark:border-gray-700 dark:group-hover:border-gray-100 shadow-auto "
                                            />
                                        </div>
                                        <span className="flex justify-start items-center ">
                                            <h4
                                                className="font-semibold truncate mr-2 text-primary-dark dark:text-primary-light whitespace-normal overflow-hidden  text-ellipsis "
                                                style={{
                                                    width: '100%',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: '1',
                                                    WebkitBoxOrient: 'vertical',
                                                }}
                                            >
                                                {item.name}
                                            </h4>
                                            <MdVerified className="w-5 h-5 text-blue-500" />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Cards
