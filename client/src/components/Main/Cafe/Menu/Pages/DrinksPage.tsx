import React from 'react'
import { Link } from 'react-router-dom'
import { Drinks } from '../../../../../utils/types'

interface Props {
    item: Drinks
}

const DrinksPage = ({ item }: Props) => {
    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>{item.title}</h1>
            <div className='my-3 pb-5 shopItemPage container'>
                <div className='row'>
                    <div className='col-3'>
                        <img className='shopItemPageImg ms-5 mt-5'
                            src={item.image}
                            alt={item.title}
                            title={item.title} />
                    </div>
                    <div className='ms-3 my-5 col'>
                        <p>{item.description}</p>
                        <p><b>Ingredients: </b>{item.ingredients.map(item => <li key={item}>{item}</li>)}</p>
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

export default DrinksPage