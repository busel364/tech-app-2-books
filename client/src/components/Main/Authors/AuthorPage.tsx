import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { Author } from '../../../utils/types'
import MainPageItem from '../Shop/MainPageItems/MainPageItem'

interface Props {
    item: Author
}

const AuthorPage = ({ item }: Props) => {

    const books = useAppSelector(state => state.books.defBooks);

    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>{item.name}</h1>
            <div className='mt-3 shopItemPage container '>
                <div className='row'>
                    <div className='col-3'>
                        <img className='shopItemPageImg ms-3 mt-5'
                            src={item.image}
                            alt={item.name}
                            title={item.name} />
                    </div>
                    <div className='my-5 col'>
                        <p>{item.biography}</p>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to={'/authors'} className='linkAuthors'>Return to Authors</Link>
                </div>
                <div className='mt-5'>
                    <p className='text-center'><b>Books by {item.name}</b></p>
                    <div className='row'>
                        {books.filter(value => item.name === value.author).map((value) => <MainPageItem item={value} key={value.ISBN} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorPage