import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/cart-slice';

const store = configureStore({
    reducer:{
    cart: cartSlice
    }
});


export default store;