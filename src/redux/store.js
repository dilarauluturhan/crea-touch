import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice
    },
})