import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import ShopItemPage from './ShopItemPage'
import ShopMainPage from './ShopMainPage'

const ShopMain = () => {
    const books = useAppSelector(state => state.books.defBooks);
    
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<ShopMainPage />} />
                {books.map(item => <Route
                    key={item.ISBN}
                    path={item.title.split(' ').join('')}
                    element={<ShopItemPage item={item} />} />)}
            </Routes>
        </div>
    )
}

export default ShopMain