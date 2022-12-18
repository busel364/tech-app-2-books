import React from 'react'
import { Link } from 'react-router-dom'

const FooterMain = () => {
    return (
        <div className=' container-fluid ms-0 footerBlock pt-5 row'>
            <div className='col ms-5'>
                <Link to={'contact'} className='footerLink'>Contact</Link>
            </div>
            <div className='col ms-5'>
                <Link to={'shop'} className='footerLink'>Shop</Link>
            </div>
            <div className='col ms-5'>
                <div>
                    <Link to={'book_seat'} className='footerLink'>Book a seat</Link>
                </div>
                <div className='mt-4'>
                    <Link to={'menu'} className='footerLink'>Menu</Link>
                </div>
            </div>
            <div className='col ms-5'>
                <Link to={'contact'} className='footerLink'>Sponsors</Link>
            </div>
            <div className='col-12 text-end mt-5 '>
                <p className='footerP'>Prod by <Link to={'contact'} className='footerLink'>Vladislav Busel</Link></p>
            </div>
        </div>
    )
}

export default FooterMain