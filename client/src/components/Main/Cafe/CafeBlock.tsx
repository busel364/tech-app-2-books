import React from 'react'
import { dataCafeImg } from '../../../utils/consts';
import CafeImgs from './CafeImgs';

const CafeBlock = () => {
    
    return (
        <div className='my-5 py-5 shopItemPage bookSeat container text-center'>
            <h1 className=''>Cafe</h1>
            <div className='row'>
                {dataCafeImg.map((item, index)=> <CafeImgs item={item} index={index} key={item}/>)}
            </div>
        </div>
    )
}

export default CafeBlock