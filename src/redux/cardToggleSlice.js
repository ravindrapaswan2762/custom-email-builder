import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCard: "pageAttribute",
  isColumnPopedUp: false,
};

const cardToggleSlice = createSlice({
  name: 'cardToggle',
  initialState,
  reducers: {
    onWidgetClick: (state, action) => {
      console.log("action.payload: ", action.payload)
      state.selectedCard = action.payload;
    },
    setColumnPopUp: (state, action) => {
      console.log("setColumnPopUp: ", action.payload)
      state.isColumnPopedUp = action.payload
    }

    
  },
});

export const { onWidgetClick, setColumnPopUp} = cardToggleSlice.actions;
export default cardToggleSlice.reducer;
