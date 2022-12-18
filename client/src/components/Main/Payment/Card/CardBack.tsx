import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { turnAround } from '../../../../reducers/cardReducer';

const CardBack = () => {
    const dispatch = useAppDispatch();
    const [cvv, setCvv] = useState('');

    return (
        <div className='col py-5 my-5 cardBackground'>
            <div className='card cardBack mb-5'>
                <div className=''>
                    <div className='magnite'></div>
                    <div className='mt-3'>
                        <input
                            placeholder='CVV'
                            value={cvv}
                            onChange={(e) => {
                                if (e.target.value.length <= 4 && !isNaN(Number(e.target.value))) {
                                    setCvv(e.target.value.trim());
                                }
                            }}
                            type={'password'} />
                    </div>
                </div>
            </div>
            <div className='row text-center mt-5 pt-5 me-4 cardMainButton '>
                <div className="col"></div>
                <button className='col-2 mx-3 shopItemPageLink' onClick={() => dispatch(turnAround())}>Back</button>
                <Link className='col-2 mx-3 shopItemPageLink' to={'/payment/data'}>Pay</Link>
            </div>

        </div>
    )
}

export default CardBack