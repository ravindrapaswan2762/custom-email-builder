import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCard: "pageAttribute",
};

const cardToggleSlice = createSlice({
  name: 'cardToggle',
  initialState,
  reducers: {
    onWidgetClick: (state, action) => {
      console.log("action.payload: ", action.payload)
      state.selectedCard = action.payload;
    },
    
  },
});

export const { onWidgetClick } = cardToggleSlice.actions;
export default cardToggleSlice.reducer;
