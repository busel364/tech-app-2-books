import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../utils/types";


const defState = [] as Book[];

const wishListSlice = createSlice({
    initialState: defState,
    name: 'wishList',
    reducers: {
        addToWishList(state, action: PayloadAction<Book>) {
            const i = state.findIndex(item => item.ISBN === action.payload.ISBN)
            if (i === -1) {
                state.push(action.payload);
            }
        },
        removeFromWishList(state, action: PayloadAction<Book>) {
            const i = state.findIndex(item => item.ISBN === action.payload.ISBN)
            state.splice(i, 1);
        },
        removeAllFromWishList(state) {
            return [] as Book[];
        }
    }
})

export const { addToWishList, removeFromWishList, removeAllFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;