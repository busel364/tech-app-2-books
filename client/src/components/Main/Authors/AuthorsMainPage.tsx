import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import AuthorMainDIv from './AuthorMainDIv'

const AuthorsMainPage = () => {

    const authors = useAppSelector(state=>state.authors.defAuthors)

    return (
        <div className='mt-5 container authorsMainPage'>
            <h1 className='text-center mt-5'>Authors</h1>
            <div className='row'>
                {authors.map(item=><AuthorMainDIv key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default AuthorsMainPage