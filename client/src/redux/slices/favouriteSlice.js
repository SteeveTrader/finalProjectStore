import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from '../../API/instance';

const initialState = {
  favourites: [],
  cardStates: {},
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourite(state, action) {
      state.favourites = action.payload;
      action.payload.forEach((id) => {
        state.cardStates[id] = true;
      });
    },
    addFavourite(state, action) {
      const { id } = action.payload;
      state.favourites.push(action.payload.id);
      state.cardStates[id] = true;
    },
    removeFavourite(state, action) {
    // eslint-disable-next-line no-underscore-dangle
      const { id } = action.payload;
      const newStateFavourites = state.favourites.filter((item) => item !== action.payload.id);
      state.favourites = newStateFavourites;
      state.cardStates[id] = false;
    },
    resetCardStates(state) {
      state.cardStates = {};
      state.favourites = [];
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
  setFavourite,
  resetCardStates,
} = favouriteSlice.actions;

export const updateFavourites = (favourites) => async (dispatch, getState) => {
  try {
    const state = getState();
    const { authorization } = state;
    if (authorization && authorization.token) {
      const { data } = await instance.put('/customers', { favourite: state.favourites.favourites });
      const { favourite } = data;
      setFavourite(data.favourite);// eslint-disable-line no-use-before-define
    }
  } catch (error) {
    console.log('%cError push review:', 'color: red; font-weight: bold;', error);
  }
};

export default favouriteSlice.reducer;
