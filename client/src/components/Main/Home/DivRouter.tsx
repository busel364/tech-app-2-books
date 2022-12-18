import React from 'react'
import { Link } from 'react-router-dom'

const DivRouter = () => {
    return (
        <div className='container-fluid row row-cols-3 divRouter mt-5 pt-5 px-0 mx-0'>
            <div>
                <img className=' divRouterBook'
                    src={require('../../../utils/imgs/sticker.webp')}
                    alt='book' />
            </div>
            <div className='col text-center'>
                <p >Enjoy reading with us</p>
                <Link to={'menu'} className='routerButtons mx-3 p-2'>Cafe menu</Link>
                <Link to={'shop'} className='routerButtons mx-3 p-2'>Book Shop</Link>
            </div>
            <div>
                <img className=' divRouterCup offset-5'
                    src='https://cdn.shopify.com/s/files/1/0311/4398/5197/files/front-teacup_300x.png?v=1614756072' alt='cupOfTea' />
            </div>
        </div>
    )
}

export default DivRouter