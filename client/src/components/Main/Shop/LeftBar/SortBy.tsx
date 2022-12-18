import React, { useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks';
import { sortByName, sortByPrice } from '../../../../reducers/booksReducer';

const SortBy = () => {

    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useAppDispatch();

    return (
        <div>
            <p onClick={() => setIsClicked(prev => !prev)}>Sort by:</p>
            {isClicked ? <div>
                <select onChange={(e) => dispatch(sortByPrice((e.target.value)))}>
                    <option disabled selected>Price</option>
                    <option value="1">low to expensive</option>
                    <option value="2">expensive to low</option>
                </select>
                <select onChange={(e) => dispatch(sortByName((e.target.value)))}>
                    <option disabled selected>Title</option>
                    <option value="1">A-Z</option>
                    <option value="2">Z-A</option>
                </select>
            </div> : null}
        </div>
    )
}

export default SortBy