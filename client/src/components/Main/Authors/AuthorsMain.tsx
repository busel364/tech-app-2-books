import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import AuthorPage from './AuthorPage'
import AuthorsMainPage from './AuthorsMainPage'

const AuthorsMain = () => {

    const authors = useAppSelector(state => state.authors.defAuthors)

    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<AuthorsMainPage />} />
                {authors.map(item => <Route
                    key={item.id}
                    path={item.name.split(' ').join('')}
                    element={<AuthorPage item={item} />} />)}
            </Routes>
        </div>
    )
}

export default AuthorsMain