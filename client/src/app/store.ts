import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authorsReducer from '../reducers/authorsReducer';
import bookSeatReducer from '../reducers/bookSeatReducer';
import booksReducer from '../reducers/booksReducer';
import cardReducer from '../reducers/cardReducer';
import checkOutReducer from '../reducers/checkOutReducer';
import loginReducer from '../reducers/loginReducer';
import menuReducer from '../reducers/menuReducer';
import shopReducer from '../reducers/shopReducer';
import wishListReducer from '../reducers/wishListReducer';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    authors: authorsReducer,
    shop: shopReducer,
    wishList: wishListReducer,
    menu: menuReducer,
    booking: bookSeatReducer,
    checkOut: checkOutReducer,
    card: cardReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
