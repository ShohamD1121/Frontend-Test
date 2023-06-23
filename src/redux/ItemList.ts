import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// reason for naming it amount ==> According to Api accepts { id : string , amount : number}
export interface ItemList {
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
    // Update Quantity of a specific item of the list, so the Box's progressbar true quantity value will be multiplied by the price
    updateQuantityOfItem: (state, action: PayloadAction<ItemList>) => {
      const updatedItem = action.payload;
      const itemToUpdate = state.find((item) => item.id === updatedItem.id);
      if (itemToUpdate) {
        itemToUpdate.amount = updatedItem.amount;
      }
      return state;
    },
  },
});

export const {
  addItemToItemList,
  removeItemFromItemList,
  updateQuantityOfItem,
} = itemListSlice.actions;
export default itemListSlice.reducer;
