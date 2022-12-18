import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../utils/types";


const defaultState = {
    defBooks: [] as Book[],
    highlightedBooks: [] as Book[]
}

const bookSlice = createSlice({
    initialState: defaultState,
    name: 'books',
    reducers: {
        putDefBooks(state, action: PayloadAction<Book[]>) {
            state.defBooks = [...state.defBooks, ...action.payload];
        },
        putHighlightedBooks(state, action: PayloadAction<Book[]>) {
            state.highlightedBooks = [...state.highlightedBooks, ...action.payload];
        },
        sortByPrice(state, action: PayloadAction<string>) {
            if (action.payload === '1') {
                state.defBooks.sort((a, b) => a.price.value - b.price.value)
            }
            if (action.payload === '2') {
                state.defBooks.sort((a, b) => b.price.value - a.price.value)
            }
        },
        sortByName(state, action: PayloadAction<string>) {
            if (action.payload === '1') {
                state.defBooks.sort((a, b) => a.title > b.title ? 1 : -1)
            }
            if (action.payload === '2') {
                state.defBooks.sort((a, b) => a.title > b.title ? -1 : 1)
            }
        }
    }
})


export const { putDefBooks, putHighlightedBooks, sortByPrice,sortByName } = bookSlice.actions;
export default bookSlice.reducer;