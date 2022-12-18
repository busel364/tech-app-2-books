import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { addToCart } from '../../../reducers/checkOutReducer'
import { removeFromWishList } from '../../../reducers/wishListReducer'
import { Book } from '../../../utils/types'

interface Props {
    item: Book
}

const WishListItem = ({ item }: Props) => {

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
            <button className='cafeLibraryButtons mb-5 mx-5'
                onClick={() => {
                    dispatch(addToCart(item));
                    dispatch(removeFromWishList(item))
                }}>Add to cart</button>

        </div>
    )
}

export default WishListItem