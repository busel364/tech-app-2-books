import React from 'react'
import WishListPage from './WishListPage';

const WishListBlock = () => {

    return (
        <div className='mt-5 container wishListContainer'>
            <h1 className='pt-5 text-center'>Wish List</h1>
            <WishListPage />
        </div>
    )
}

export default WishListBlock