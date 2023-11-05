import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = { items: [] };

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    setFavorite(state, actions) {
      if(!state.items.some(actions.payload)){
        state.items.push(actions.payload);
      }
      console.log('state.items: ', state.items);
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;
export const favoriteSliceReducer = favoriteSlice.reducer;
