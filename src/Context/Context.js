import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [collectionsApi, setCollections] = useState([])
    const [bgNavbar, setBgNavbar] = useState(false)
    // console.log(bgNavbar)

    // An Issue
    // Alway set false when scrollY <=30
    //
    const changeBackground = () => {
        if (window.scrollY >= 30) {
            setBgNavbar(true)
        } else {
            setBgNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, [])

    useEffect(() => {
        const getData = async () => {
            const options = {
                method: 'GET',
                url: 'https://api.opensea.io/api/v1/collections',
                params: { offset: '0', limit: '300' },
                headers: { accept: 'application/json' },
            }
            const currency = ['ETH', 'SOL']

            try {
                const { data } = await axios.request(options)
                const items = data.collections
                    .filter(
                        (item) =>
                            item.name &&
                            item.image_url &&
                            item.banner_image_url,
                    )
                    .map((item) => {
                        return {
                            name: item.name,
                            image: item.image_url,
                            banner: item.banner_image_url,
                            // Generate fake data
                            currency:
                                currency[
                                    Math.floor(Math.random() * currency.length)
                                ],
                            floor: Math.floor(Math.random() * (100 - 10)) + 10,
                            volume:
                                Math.floor(Math.random() * (1000 - 10)) + 10,
                            change:
                                Math.ceil(Math.random() * 99) *
                                (Math.round(Math.random()) ? 1 : -1),
                        }
                    })

                setCollections(items)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    return (
        <AppContext.Provider
            value={{
                collectionsApi,
                bgNavbar,
                setBgNavbar,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
