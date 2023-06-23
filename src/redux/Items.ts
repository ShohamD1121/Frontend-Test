import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../constants/types";

const initialState: Item[] = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      return action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
