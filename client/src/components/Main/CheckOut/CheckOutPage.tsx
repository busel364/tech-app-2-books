import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import CheckOutItem from './CheckOutItem'
import CheckOutPageButtons from './CheckOutPageButtons'

const CheckOutPage = () => {

    const books = useAppSelector(state => state.checkOut)

    return (books.length > 0 ? (
        <div className='row'>
            {books.map(item => <CheckOutItem item={item} key={item.ISBN} />)}
            <CheckOutPageButtons />
        </div>
    ) : (
        <div className='mt-5 wishListIsEmpty text-center'>
            <p className='pt-5'>Your cart is empty, please push some books to see here</p>
        </div>
    )

    )
}

export default CheckOutPage