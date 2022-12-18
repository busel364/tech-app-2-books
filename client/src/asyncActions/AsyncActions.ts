import { AppDispatch } from "../app/store"
import { putDefAuthors, putHighlightedAuthors } from "../reducers/authorsReducer"
import { putDefBooks, putHighlightedBooks } from "../reducers/booksReducer"

import { putDesserts, putDrinks } from "../reducers/menuReducer"
import { base_url } from "../utils/consts"

export const fetchBooksAndAuthors = () => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url}/data`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(data => JSON.parse(data))
            .then(data => {
                dispatch(putDefBooks(data.books));
                dispatch(putHighlightedBooks(data.highlightedBooks));
                dispatch(putDefAuthors(data.authors));
                dispatch(putHighlightedAuthors(data.highlightedAuthors));

            })
    }
}

export const fetchMenu = () => {
    return (dispatch: AppDispatch) => {
        fetch(`${base_url}/dataMenu`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(data => JSON.parse(data))
            .then(data => {
                dispatch(putDrinks(data.drinks));
                dispatch(putDesserts(data.desserts));
            })
    }
}

