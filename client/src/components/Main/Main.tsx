import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WishListBlock from './WishList/WishListBlock'
import AuthorsMain from './Authors/AuthorsMain'
import Home from './Home/Home'
import ShopMain from './Shop/ShopMain'
import MenuMain from './Cafe/Menu/MenuMain'
import BookSeat from './Cafe/BookSeat/BookSeat'
import CheckOutBlock from './CheckOut/CheckOutBlock'
import PaymentMain from './Payment/PaymentMain'
import CafeBlock from './Cafe/CafeBlock'
import Contact from './Contact/Contact'
import Register from './Login/Register'
import PersonalAreaMain from './Login/PersonalAreaMain'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<Home />} />
                <Route
                    path='shop/*'
                    element={<ShopMain />} />
                <Route
                    path='authors/*'
                    element={<AuthorsMain />} />
                <Route
                    path='wish_list'
                    element={<WishListBlock />} />
                <Route
                    path='menu/*'
                    element={<MenuMain />} />
                <Route
                    path='book_seat'
                    element={<BookSeat />} />
                <Route
                    path='check_out'
                    element={<CheckOutBlock />} />
                <Route
                    path='payment/*'
                    element={<PaymentMain />} />
                <Route
                    path='cafe'
                    element={<CafeBlock />} />
                <Route
                    path='contact'
                    element={<Contact />} />
                <Route
                    path='personal_area/*'
                    element={<PersonalAreaMain />} />
                <Route
                    path='register'
                    element={<Register />} />
            </Routes>
        </div>
    )
}

export default Main