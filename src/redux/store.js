import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice
    },
})