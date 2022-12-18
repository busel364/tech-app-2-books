import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../../../../utils/types'

interface Props {
    item: Book
}

const MainPageItem = ({ item }: Props) => {
    return (

        <Link to={`/shop/${item.title.split(' ').join('')}`} className='col-3 my-4 mainPageItem'>
            <div className='mainPageItemImgBg mb-4 '>
                <img
                    className='mainPageItemImg'
                    src={item.image}
                    alt={item.title} 
                    title={item.title}/>
            </div>
            <p><b>Title:</b> {item.title}</p>
            <p><b>Author:</b> {item.author}</p>
            <p><b>Price:</b> {`${item.price.displayValue} ${item.price.currency}`}</p>
        </Link>
    )
}

export default MainPageItem