import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65428722ad8044116ed3889a.mockapi.io/api/advert';
const per_page = 12;

const url = new URL(axios.defaults.baseURL);
url.searchParams.append('completed', false);
url.searchParams.append('page', 1);
url.searchParams.append('limit', per_page);


export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (currentPage, thunkAPI) => {
    url.searchParams.set('page', currentPage)
    try {

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
