import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Desserts, MenuState, ObjOfDrinks } from "../utils/types";

const defState:MenuState = {
    drinks: {
        coldDrinks: [],
        hotDrinks: []
    },
    desserts: []
}

const menuSlice = createSlice({
    initialState: defState,
    name: 'menu',
    reducers: {
        putDrinks(state, action: PayloadAction<ObjOfDrinks>) {
            state.drinks = action.payload;
        },
        putDesserts(state, action: PayloadAction<Desserts[]>) {
            state.desserts = action.payload;
        }
    }
})


export const {putDesserts,putDrinks} = menuSlice.actions;
export default menuSlice.reducer;