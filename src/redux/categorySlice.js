import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// başlangıç durumu temsili
// başlangıçta kategoriler hakkında bilgim yok
// bu yüzden array'de saklamak istiyorum
const initialState = {
    categories: []
}

// veri çekme işlemlerini gerçekleştirmek için
export const getCategories = createAsyncThunk('category', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;
})

// kategorileri düzenlemek için
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    }
})

export default categorySlice.reducer