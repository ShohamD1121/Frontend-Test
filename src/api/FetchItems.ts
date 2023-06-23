import { createAsyncThunk } from "@reduxjs/toolkit";

// array of all the valid product_id's
const product_ids = [
  "apple",
  "carrot",
  "melon",
  "pear",
  "lemon",
  "orange",
  "salad",
];

// This Function fetches all of the items from the api one by one.
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const items = [];
  for (const product_id of product_ids) {
    const response = await fetch(
      `https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/${product_id}`
    );
    const item = await response.json();
    items.push(item);
  }
  return items;
});
