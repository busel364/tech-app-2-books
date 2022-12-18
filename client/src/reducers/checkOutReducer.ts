import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../utils/types";

const defState = [] as Book[];

const checkOutSlice = createSlice({
    initialState: defState,
    name: 'checkOut',
    reducers: {
        addToCart(state, action: PayloadAction<Book>) {
            const i = state.findIndex(item => item.ISBN === action.payload.ISBN)
            if (i === -1) {
                state.push(action.payload);
            }
        },
        removeFromCart(state, action: PayloadAction<Book>) {
            const i = state.findIndex(item => item.ISBN === action.payload.ISBN)
            state.splice(i, 1);
        },
        removeAllFromCart(state) {
            return [] as Book[];
        }
    }
})

export const { addToCart,removeAllFromCart,removeFromCart } = checkOutSlice.actions;
export default checkOutSlice.reducer;