import React from 'react'
import { categories } from '../../constants'

const Category = () => {
    return (
        <div className="px-4 lg:px-8 pt-6 pb-20">
            <div className="mb-6">
                <h1 className="text-primary-dark dark:text-primary-light font-semibold text-2xl">
                    Browse by category
                </h1>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {categories.map((item) => (
                    <div
                        key={item.label}
                        className="rounded-b-xl  shadow-lg w-full group"
                    >
                        <a href="/">
                            <div>
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="flex justify-center items-center bg-primary-light dark:bg-secondary-dark dark:group-hover:bg-zinc-700 lg:p-4 p-5  rounded-b-xl ">
                                <span className="text-primary-dark dark:text-primary-light font-semibold lg:text-xl text-base">
                                    {item.label}
                                </span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
