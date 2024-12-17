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
      console.log("activeWidgetName: ", action.payload);
      state.activeWidgetName = action.payload;
    },
    setDroppedItems: (state, action) => {
      state.droppedItems = [...state.droppedItems, action.payload];
      console.log("updated dropedItems: ", state.droppedItems);
    },
    deleteDroppedItemById: (state, action) => {
      console.log("deleteDroppedItemById called", state.droppedItems);
      const idToDelete = action.payload;
      state.droppedItems = state.droppedItems.filter(
        (item) => item.id !== idToDelete
      );
      console.log("Item deleted, updated droppedItems: ", state.droppedItems);
    },


  },
});

export const { setActiveWidget, setShowDropingArea, setActiveWidgetName, setDroppedItems, deleteDroppedItemById } =
  cardDragableSlice.actions;
export default cardDragableSlice.reducer;


