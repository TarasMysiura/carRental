import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://65428722ad8044116ed3889a.mockapi.io/api/';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/advert`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


// export const fetchAddContactsThunk = createAsyncThunk(
//   'contacts/fetchAddContactsThunk',
//   async (newContact, thunkAPI) => {
//     try {
//       const data = await fetchAddContacts(newContact);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchDelContactsThunk = createAsyncThunk(
//   'contacts/fetchDelContactsThunk',
//   async (contactId, thunkAPI) => {
//     try {
//       const data = await fetchDelContacts(contactId);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
