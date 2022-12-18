import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import WishListItem from './WishListItem';

const WishListPage = () => {

    const books = useAppSelector(state => state.wishList);

    return books.length > 0 ? (
        <div className='row'>
            {books.map(item => <WishListItem item={item} key={item.ISBN} />)}
        </div>
    ) : (
        <div className='mt-5 wishListIsEmpty text-center'>
            <p className='pt-5'>Your wish list is empty, please push some books to see here</p>
        </div>
    )
}

export default WishListPage