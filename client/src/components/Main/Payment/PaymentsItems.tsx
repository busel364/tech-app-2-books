import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../../../utils/types'

interface Props {
    item: Book
}

const PaymentsItems = ({ item }: Props) => {
    return (
        <div className='col-10 offset-1 row mainPageItem my-5'>
            <Link to={`/shop/${item.title.split(' ').join('')}`} className='col-2 my-4 paymentsItemLink'>
                <div className=' mainPageItemImgBg paymentsItemImgBg '>
                    <img
                        className='mainPageItemImg paymentsItemImg'
                        src={item.image}
                        alt={item.title}
                        title={item.title} />
                </div>
            </Link>
            <div className='col pt-5 mx-5'>
                <p><b>Title:</b> {item.title}</p>
                <p><b>Author: </b><Link className='linkToAuthor' to={`/authors/${item.author.split(' ').join('')}`}>{item.author}</Link></p>
            </div>
            <p className='col pt-5 text-end'>{item.price.displayValue} {item.price.currency}</p>
            <div></div>
        </div>
    )
}

export default PaymentsItems