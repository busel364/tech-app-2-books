import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { authorChanger } from '../../../../reducers/shopReducer';
import SortBy from './SortBy';

const LeftBarSelect = () => {

    const dispatch = useAppDispatch();
    const authors = useAppSelector(state => state.authors.defAuthors)
    const [isClicked, setIsClicked] = useState(false);
    const [value, setValue] = useState('');
    let symbol = isClicked ? '-' : '+';

    return (
        <div className='leftBar col-2 mt-5 ms-5'>
            <div>
                <p onClick={() => setIsClicked(prev => !prev)}>
                    Filter by author {symbol}
                </p>
                {isClicked ? (
                    <label>
                        <input list='authorsList' value={value} onChange={(e) => {
                            setValue(e.target.value.trim());
                            dispatch(authorChanger(e.target.value.trim()));
                        }} />
                        <datalist id='authorsList' >
                            {authors.map(item => <option key={item.name}>{item.name}</option>)}
                        </datalist>
                    </label>)
                    : null}
            </div>
            <SortBy/>
        </div>
    )
}

export default LeftBarSelect