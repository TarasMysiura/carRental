import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = { items: [] };

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    setFavorite(state, actions) {
      state.items = actions.payload;
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;
export const favoriteSliceReducer = favoriteSlice.reducer;
