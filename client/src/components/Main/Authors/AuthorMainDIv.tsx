import React from 'react'
import { Link } from 'react-router-dom'
import { Author } from '../../../utils/types'

interface Props {
    item: Author
}

const AuthorMainDIv = ({ item }: Props) => {
    return (
        <Link to={`/authors/${item.name.split(' ').join('')}`} className='mx-4 ms-4 my-4 mainPageItem authorMainDiv '>
            <p className='authorMainDivp text-center'>{item.name}</p>
            <div className='mainPageItemImgBg mb-4 '>
                <img
                    className='mainPageItemImg authorMainDivImg'
                    src={item.image}
                    alt={item.name}
                    title={item.name} />
            </div>
        </Link>
    )
}

export default AuthorMainDIv