import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { removeFromCart } from '../../../reducers/checkOutReducer'
import { Book } from '../../../utils/types'

interface Props {
    item: Book
}

const CheckOutItem = ({ item }: Props) => {

    const dispatch = useAppDispatch();

    return (
        <div className='col-3 m-4 mainPageItem wishListItem'>
            <Link to={`/shop/${item.title.split(' ').join('')}`} className='col-3 m-4 wishListItem'>
                <div className='mainPageItemImgBg mb-4 '>
                    <img
                        className='mainPageItemImg'
                        src={item.image}
                        alt={item.title} />
                </div>
            </Link>
            <p><b>Title:</b> {item.title}</p>
            <p><b>Author: </b><Link className='linkToAuthor' to={`/authors/${item.author.split(' ').join('')}`}>{item.author}</Link></p>
            <p><b>Price:</b> {`${item.price.displayValue} ${item.price.currency}`}</p>
            <div className='row text-center'>
                <button className='cafeLibraryButtons checkOutRemoveButton mb-5 w-50'
                    onClick={() => {
                        dispatch(removeFromCart(item));
                    }}>Remove</button>
            </div>
        </div>
    )
}

export default CheckOutItem