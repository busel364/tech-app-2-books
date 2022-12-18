import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './Card/Card'
import PaymentBlock from './PaymentBlock'
import PaymentData from './PaymentData'

const PaymentMain = () => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<PaymentBlock />} />
                <Route
                    path='data'
                    element={<PaymentData />} />
                    <Route
                    path='card'
                    element={<Card/>}/>
            </Routes>
        </div>
    )
}

export default PaymentMain