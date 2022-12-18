import React from 'react'
import { Link } from 'react-router-dom'
import { Desserts } from '../../../../utils/types'

interface Props {
    item: Desserts
}

const DisplayDesserts = ({ item }: Props) => {

    return (
        <div className='row displayDrinks pt-4 text-center'>
            <Link className='col-3 text-start linkDrinks' to={`/menu/${item.name.split(' ').join('')}`}>{item.name}</Link>
            <div className='col-7'></div>
            <p className='col-2'>{item.price.displayValue} {item.price.currency}</p>
        </div>
    )
}

export default DisplayDesserts