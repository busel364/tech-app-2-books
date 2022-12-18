import React, { useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks';
import { putInfoAboutBooking } from '../../../../reducers/bookSeatReducer';
import { Booking } from '../../../../utils/types';
import DisplayBooking from './DisplayBooking';


interface Props {
    item: Booking
}

const BookSeatForm = ({ item }: Props) => {

    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState(item.firstName);
    const [lastName, setLastName] = useState(item.lastName);
    const [date, setDate] = useState(item.date);
    const [telNum, setTelNum] = useState(item.telNum);
    const [isClicked, setIsClicked] = useState(false);

    return (!isClicked ?
        <form className='col-lg-5 col-sm-12 py-5 mb-5'>
            <div>
                <label>
                    <input placeholder='First Name' type={'text'} className='mx-3' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    <input placeholder='Last Name' type={'text'} className='mx-3' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    <input placeholder='Your Tel.Number' type={'text'} className='mx-3' value={telNum} onChange={(e) => setTelNum(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    <input type={'datetime-local'} className='mx-3' value={date} onChange={(e) => setDate(e.target.value)} />
                    <p>Chose date and time</p>
                </label>
            </div>
            <button className='col-5 py-1 bookSeatButton'
                onClick={() => {
                    if (date && firstName && lastName && telNum) {
                        dispatch(putInfoAboutBooking({ date, firstName, lastName, telNum }))
                        setIsClicked(true)
                    }
                }}>Save</button>
        </form> : <DisplayBooking item={item} />
    )
}

export default BookSeatForm