import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../constants/types";

const initialState: Item[] = [];

const DropBoxItems = createSlice({
  name: "dropBoxItems",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      return action.payload;
    },
    removeItemFromDropBoxItems: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    addItemToDropBoxItems: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      state.push(newItem);
    },
  },
});

export const { setItems, addItemToDropBoxItems, removeItemFromDropBoxItems } =
  DropBoxItems.actions;
export default DropBoxItems.reducer;
