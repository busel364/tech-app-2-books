import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addToCart } from '../../../reducers/checkOutReducer'
import { addToWishList } from '../../../reducers/wishListReducer'
import { Book } from '../../../utils/types'
import MainPageItem from './MainPageItems/MainPageItem'

interface Props {
    item: Book
}

const ShopItemPage = ({ item }: Props) => {

    const dispatch = useAppDispatch();
    const authors = useAppSelector(state => state.authors.defAuthors)
    const author = authors.find(value => value.name === item.author)
    const books = useAppSelector(state => state.books.defBooks)
    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>{item.title}</h1>
            <div className='mt-3 shopItemPage container'>
                <div className='row'>
                    <div className='col-3'>
                        <img className='shopItemPageImg ms-5 mt-5'
                            src={item.image}
                            alt={item.title}
                            title={item.title} />
                    </div>
                    <div className='ms-3 my-5 col'>
                        <p><b>Author: </b><Link className='linkToAuthor' to={`/authors/${item.author.split(' ').join('')}`}>{item.author}</Link></p>
                        <p><b>ISBN:</b> {item.ISBN}</p>
                        <p>{item.summary}</p>
                        <p className='col-3'><b>Price: </b>{`${item.price.displayValue} ${item.price.currency}`}</p>
                        <div className='row'>
                            <Link to={'/shop'} className='shopItemPageLink col-3 mx-2'>Return to Shop</Link>
                            <button className='col-3 mx-3 shopItemPageButton'
                                onClick={() => dispatch(addToWishList(item))}
                            >Add to Wishlist</button>
                            <Link to={'/check_out'} className='col-3 mx-3 shopItemPageLink'
                                onClick={() => {
                                    dispatch(addToCart(item));
                                }}>
                                Checkout</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-center'><b>More Books by {author?.name}</b></p>
                    <div className='row'>
                        {books.filter(value => item.author === value.author && value.ISBN !== item.ISBN).map((value) => <MainPageItem item={value} key={value.ISBN} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItemPage