import React from 'react'
import CheckOutPage from './CheckOutPage'

const CheckOutBlock = () => {
    return (
        <div className='mt-5 container wishListContainer'>
            <h1 className='pt-5 text-center'>Your Cart</h1>
            <CheckOutPage/>
        </div>
    )
}

export default CheckOutBlock