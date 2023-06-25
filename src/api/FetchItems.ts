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

// This Function fetches all of the items from the api concurrently
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const fetchPromises = product_ids.map(async (product_id) => {
    const response = await fetch(
      `https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/${product_id}`
    );
    return response.json();
  });

  return Promise.all(fetchPromises);
});
