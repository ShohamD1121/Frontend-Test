import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    addToTotalPrice: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
    subtractFromTotalPrice: (state, action: PayloadAction<number>) => {
      return state - action.payload;
    },
  },
});

export const { addToTotalPrice, subtractFromTotalPrice } =
  totalPriceSlice.actions;
export default totalPriceSlice.reducer;
