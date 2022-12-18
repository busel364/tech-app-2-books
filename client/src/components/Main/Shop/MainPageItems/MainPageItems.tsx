import React from 'react'
import { useAppSelector } from '../../../../app/hooks';
import MainPageItem from './MainPageItem';

const MainPageItems = () => {
    const author = useAppSelector(state => state.shop.author);
    const books = useAppSelector(state => state.books.defBooks);
    return (
        <div className=' shopMainContainer mt-5 col-9 ms-5 '>
            <p className='text-center'>Books</p>
            <div className='row'>
                {books.filter(item => {
                    if (author === '') {
                        return item;
                    }
                    const checked = item.author.slice(0, author.length);
                    return checked.toLocaleLowerCase() === author.toLocaleLowerCase() ? item : null;
                }).map(item => <MainPageItem item={item} key={item.ISBN} />) || <p>books not found</p>}
            </div>
        </div>
    )
}

export default MainPageItems