import DropBoxItemsReducer from "../redux/DropBoxItems";
import BoxesItemsReducer from "../redux/BoxesItems";
import ItemListReducer from "../redux/ItemList";
import TotalPriceReducer from "../redux/TotalPrice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Configure the Redux store
const store = configureStore({
  reducer: {
    dropBoxItems: DropBoxItemsReducer,
    boxesItems: BoxesItemsReducer,
    itemList: ItemListReducer,
    totalPrice: TotalPriceReducer,
  },
  //middleware for the Redux store, disabling the serializable check for unnecessary warnings.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Create a typed dispatch hook
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
