import React from 'react'
import LeftBarSelect from './LeftBar/LeftBarSelect'
import MainPageItems from './MainPageItems/MainPageItems'

const ShopMainPage = () => {

    return (
        <div className='container-fluid mt-5 row row-cols-2 mx-0 p-0'>
            <LeftBarSelect/>
            <MainPageItems/>
        </div>
    )
}

export default ShopMainPage