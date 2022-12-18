import React, {useState} from 'react'
import { useAppSelector } from '../../../../app/hooks';
import HighlightedAuthor from './HighlightedAuthor';

const HighlightedAuthors = () => {
    const highlightedAuthors = useAppSelector(state => state.authors.highlightedAuthors);
    const [count, setCount] = useState(0);

    const handleChanger = () => {
        if (count >= highlightedAuthors.length - 1) {
            setCount(0);
        } else {
            setCount(prev => prev + 1);
        }
    }

    setTimeout(handleChanger, 20000);

    return (
        <div className='row container-fluid highlightedBooks my-5'>
            <p className='mt-3'>Highlighted Authors</p>
            {highlightedAuthors.filter((value, index) => index === count).map((item) => <HighlightedAuthor changer={handleChanger}item={item} key={item.id} />)}
        </div>
    )
}

export default HighlightedAuthors