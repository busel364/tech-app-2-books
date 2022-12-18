import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const PaymentData = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telNum, setTelNum] = useState('');
    const [address, setAddress] = useState('');
    const [postcode, setPostcode] = useState('');


    return (
        <div className='my-5 py-5 shopItemPage bookSeat container text-center'>
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
                        <input placeholder='Your Address' type={'text'} className='mx-3' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        <input placeholder='Your Postcode' type={'text'} className='mx-3' value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                    </label>
                </div>
            </form>
            <div className='row text-center my-5 pt-5 '>
                <div className='col-7'></div>
                <Link className='col-2 mx-3 shopItemPageLink' to={'/payment'}>Back</Link>
                <Link className='col-2 mx-3 shopItemPageLink' to={'/payment/card'}>Next</Link>
            </div>
        </div>
    )
}

export default PaymentData