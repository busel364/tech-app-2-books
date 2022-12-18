import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomObj } from "../utils/types";

const defState = {
    cardMainSide: true,
    cardData: {
        cardNumber: '',
        cardUntil: '',
        cardName: '',
    }
}


const cardSlicer = createSlice({
    initialState: defState,
    name: 'card',
    reducers: {
        turnAround(state) {
            state.cardMainSide = !state.cardMainSide;
        },
        saveData(state, action: PayloadAction<CustomObj>) {
            state.cardData.cardName = action.payload.cardName;
            state.cardData.cardNumber = action.payload.cardNumber;
            state.cardData.cardUntil = action.payload.cardUntil;
        }
    }
});

export const { turnAround, saveData } = cardSlicer.actions;
export default cardSlicer.reducer; 