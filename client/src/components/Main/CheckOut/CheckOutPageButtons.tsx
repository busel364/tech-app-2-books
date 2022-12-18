import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { removeAllFromCart } from '../../../reducers/checkOutReducer';

const CheckOutPageButtons = () => {

    const dispatch = useAppDispatch();

  return (
    <div className='row mb-5 '>
        <div className='col-5'></div>
        <button className='col-lg-3 col-sm-12 mx-3 shopItemPageButton checkOutPageButtons'
        onClick={()=>{
            dispatch(removeAllFromCart())
        }}>Remove all</button>
        <Link to={'/payment'} className='col-lg-3 col-sm-12 mx-3 shopItemPageLink checkOutPageButtons'>Checkout</Link>
    </div>
  )
}

export default CheckOutPageButtons