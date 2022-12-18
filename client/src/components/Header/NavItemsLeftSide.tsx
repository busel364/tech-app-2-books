import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    item: {
        name: string
        , route: string
    },
    index: number
}

const NavItemsLeftSide = ({ item, index }: Props) => {

    let className = 'linkNavItems col-2 mx-3 pe-3'
    if (index === 2) {
        className = 'linkNavItems mx-2'
    }

    return (item.name === 'Cafe' ?
        <div className={`headerShop`}>
            < Link className={`headerShop`} to={item.route} >
                {item.name}
            </Link >
            <div className='divHeaderShop'>
                <Link className='linkNavItems' to={'book_seat'}>
                    <li className='my-2 ms-3'>
                        Book a seat
                    </li>
                </Link>
                <Link to={'menu'} className='linkNavItems'>
                    <li className='my-2 ms-3'>
                        Menu
                    </li>
                </Link>
            </div>
        </div>
        : < Link className={`${className}`} to={item.route} >
            {item.name}
        </Link >
    )
}

export default NavItemsLeftSide