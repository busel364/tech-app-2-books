import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import PaymentsItems from './PaymentsItems';

const PaymentPage = () => {

    const books = useAppSelector(state => state.checkOut)
    const [totalSum, setTotalSum] = useState('');

    useEffect(() => {
        const sum = books.reduce((accum, current) => accum += current.price.value, 0);
        setTotalSum(sum.toFixed(2));
    }, [books])

    return books.length > 0 ? (
        <div className='divPaymentPage'>
            {books.map(item => <PaymentsItems item={item} key={item.ISBN} />)}
            <p><b>Total sum: </b>{totalSum} EUR</p>
            <div className='row text-center my-3 py-5 '>
                <div className='col-7'></div>
                <Link className='col-2 mx-3 shopItemPageLink' to={'/check_out'}>Back</Link>
                <Link className='col-2 mx-3 shopItemPageLink' to={'data'}>Next</Link>
            </div>
        </div>
    ) : (
        <div className='mt-5 wishListIsEmpty text-center'>
            <p className='pt-5'>Something went wrong...</p>
        </div>
    )
}

export default PaymentPage