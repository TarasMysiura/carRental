import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAdverts,
} from './advertsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsInitialState = {
  items: [],
  // currentPage: 1,
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        handlePending(state);
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
