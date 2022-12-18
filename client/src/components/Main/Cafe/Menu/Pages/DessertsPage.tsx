import React from 'react'
import { Link } from 'react-router-dom'
import { Desserts } from '../../../../../utils/types'

interface Props {
    item: Desserts
}

const DessertsPage = ({ item }: Props) => {
    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>{item.name}</h1>
            <div className='my-3 pb-5 shopItemPage container'>
                <div className='row'>
                        <img className='col-3 shopItemPageImg ms-5 mt-5'
                            src={item.img}
                            alt={item.name}
                            title={item.name} />
                    <div className='ms-3 my-5 col'>
                        <p>{item.description}</p>
                        <div className='row'>
                            <p className='col-5'><b>Price: </b>{`${item.price.displayValue} ${item.price.currency}`}</p>
                        </div>
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-7'></div>
                    <Link to={'/menu'} className='shopItemPageLink col-lg-2 col-md-6 mx-2'>Return to Menu</Link>
                    <Link to={'/book_seat'} className='shopItemPageLink col-lg-2 col-md-6 mx-2'>Book a Seat</Link>
                </div>
            </div>
        </div>
    )
}

export default DessertsPage