const { createSlice } = require("@reduxjs/toolkit");

const favoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
};

const initialState = {
    favorites: favoritesFromLocalStorage(),
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;