import { configureStore } from '@reduxjs/toolkit';


import cardToggleSlice from './redux/cardToggleSlice'

export const store = configureStore({
  reducer: {
    cardToggle: cardToggleSlice, 
  },
});

export default store;
