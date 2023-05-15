import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import addressesReducer from '../reducers/addressesSlice';
import productsReducer from '../reducers/productsSlice';
import tagsReducer from '../reducers/tagsSlice';
import categoriesReducer from '../reducers/categoriesSlice';
import cartsReducer from '../reducers/cartsSlice';
import orderItemReducer from '../reducers/orderItemSlice';
import invoiceReducer from '../reducers/invoiceSlice';

export const store = configureStore({
    reducer: {
        auth:  authReducer,
        addresses: addressesReducer,
        products: productsReducer,
        tags: tagsReducer,
        categories: categoriesReducer,
        carts: cartsReducer,
        orderItem: orderItemReducer,
        invoice: invoiceReducer
    }
});