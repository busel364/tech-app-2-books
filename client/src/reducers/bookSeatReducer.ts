import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Booking } from "../utils/types"

const defState = {
    firstName: '',
    lastName: '',
    telNum:'',
    date:''
}

const bookSeatSlice = createSlice({
    initialState:defState,
    name:'bookSeat',
    reducers:{
        putInfoAboutBooking(state,action:PayloadAction<Booking>){
            return action.payload;
        }
    }
})


export const {putInfoAboutBooking} = bookSeatSlice.actions;
export default bookSeatSlice.reducer;