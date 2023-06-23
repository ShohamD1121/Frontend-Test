import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemList {
  id: string;
  amount: number;
}

const initialState: ItemList[] = [];

const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    addItemToItemList: (state, action: PayloadAction<ItemList>) => {
      const newItem = action.payload;
      state.push(newItem);
    },
    removeItemFromItemList: (state, action: PayloadAction<string>) => {
      const itemName = action.payload;
      return state.filter((item) => item.id !== itemName);
    },
  },
});

export const { addItemToItemList, removeItemFromItemList } =
  itemListSlice.actions;
export default itemListSlice.reducer;
