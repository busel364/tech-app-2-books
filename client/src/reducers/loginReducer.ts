import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "../utils/types";

const defaultState = {
    token: null as string | null,
    user: null as UserProfile | null,
}


const loginPageSlice = createSlice({
    name: 'loginPage',
    initialState: defaultState,
    reducers: {
        logIn: (state, action: PayloadAction<UserProfile>) => {
            state.user = action.payload;
        },
        logOut(state, action) {
            state.user = null;
        },
        putToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        deleteToken: (state) => {
            state.token = null;
        },

    }
})

export const { logIn, logOut, deleteToken, putToken } = loginPageSlice.actions;
export default loginPageSlice.reducer