import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:4000/api/products');
    console.log(data);
    dispatch(setProducts(data));
  } catch (error) {
    console.log('Error loading products:', error);
  }
};

export default productsSlice.reducer;
