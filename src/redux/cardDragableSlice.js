import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeWidgetId: null,
  activeWidgetName: "",
  showDropingArea: false,
  droppedItems: [], // This will store the dropped items
};

const cardDragableSlice = createSlice({
  name: "cardDragable",
  initialState,
  reducers: {
    setActiveWidget: (state, action) => {
      state.activeWidgetId = action.payload;
    },
    setShowDropingArea: (state, action) => {
      state.showDropingArea = action.payload;
    },
    setActiveWidgetName: (state, action) => {
      console.log("activeWidgetName: ", action.payload)
      state.activeWidgetName = action.payload;
    },
    setDroppedItems: (state, action) => {
      state.droppedItems = [...state.droppedItems, action.payload];
      console.log("updated dropedItems: ", state.droppedItems);
    },


  },
});

export const { setActiveWidget, setShowDropingArea, setActiveWidgetName, setDroppedItems } =
  cardDragableSlice.actions;
export default cardDragableSlice.reducer;


