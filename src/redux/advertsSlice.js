import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adverts: [],
};

const advertsSlice = createSlice({
  name: 'adverds',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.adverts = [...state.adverts, action.payload];
    },

    removeContact: (state, action) => {
      state.adverts = state.adverts.filter(
        advert => advert.id !== action.payload
      );
    },
  },
});

export const { addAdvert, removeAdvert } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;

export const getAdverds = state => state.adverds.adverds;
