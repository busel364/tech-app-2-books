import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defState = {
    author: '',
}


const shopSlice = createSlice({
    initialState:defState,
    name:'shop',
    reducers:{
        authorChanger(state, action:PayloadAction<string>){
            state.author = action.payload
        },
    }
})


export const {authorChanger} = shopSlice.actions;
export default shopSlice.reducer;