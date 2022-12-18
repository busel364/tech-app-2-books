import React from 'react'
import { Link } from 'react-router-dom'

const CafeLibrary = () => {
    return (
        <div className='my-5 container-fluid cafeLibrary'>
            <div className='row my-3'>
                <img
                    className='my-5 pt-3 col-lg-6 col-sm-12'
                    src='https://img.restoclub.ru/uploads/place/4/3/c/4/43c48debc06afcf0f43bed5862203c10_w1200_h630.jpg'
                    alt='cafeLibraryImg' />
                <div className='my-5 pt-2 col-lg-6 col-sm-12'>
                    <p >We invite you to our library cafe which will gladly brighten up your time with exciting books, hot drinks and delicious desserts.</p>
                    <div className='text-center mt-5'>
                        <Link to={'contact'} className='cafeLibraryButtons me-5'>Book a Seat</Link>
                        <Link to={'menu'} className='cafeLibraryButtons'>Check the Menu</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CafeLibrary