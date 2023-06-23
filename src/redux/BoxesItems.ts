import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../constants/types";

const initialState: Item[] = [];

const BoxesItems = createSlice({
  name: "boxesItems",
  initialState,
  reducers: {
    removeItemFromBoxesItems: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    addItemToBoxesItems: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      state.push(newItem);
    },
  },
});

export const { removeItemFromBoxesItems, addItemToBoxesItems } =
  BoxesItems.actions;
export default BoxesItems.reducer;
