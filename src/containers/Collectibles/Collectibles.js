import React from 'react'
import Cards from './Cards'
import { collectibles1, collectibles2 } from '../../constants'

const Collectibles = () => {
    return (
        <div className="px-4 lg:px-8 pb-4">
            <Cards data={collectibles1} title="New and Nontable" />
            <Cards data={collectibles2} title="Cameo Pass spotlight" />
        </div>
    )
}

export default Collectibles
