import React, { useState } from 'react'
import { Booking } from '../../../../utils/types'
import BookSeatForm from './BookSeatForm'

interface Props {
    item: Booking
}

const DisplayBooking = ({ item }: Props) => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        isClicked ? (<BookSeatForm item={item}/>) : (<div className='col-lg-5 col-sm-12 py-5 mb-5 displayBooking'>
            <p>Your booking</p>
            <p>{item.date}</p>
            <p>{item.lastName} {item.firstName}</p>
            <p>{item.telNum}</p>
            <button 
            onClick={()=>setIsClicked(true)}
            className='col-5 py-1 bookSeatButton'>Change</button>
        </div>)
    )
}

export default DisplayBooking