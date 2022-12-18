import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Author } from "../utils/types";

const defaultState = {
    defAuthors: [] as Author[],
    highlightedAuthors: [] as Author[]
}

const authorsSlice = createSlice({
    initialState:defaultState,
    name:'authors',
    reducers:{
        putDefAuthors(state,action:PayloadAction<Author[]>){
            state.defAuthors=[...state.defAuthors,...action.payload];
        },
        putHighlightedAuthors(state,action:PayloadAction<Author[]>){
            state.highlightedAuthors=[...state.highlightedAuthors,...action.payload];
        }
    }
})


export const {putDefAuthors, putHighlightedAuthors} = authorsSlice.actions;
export default authorsSlice.reducer;