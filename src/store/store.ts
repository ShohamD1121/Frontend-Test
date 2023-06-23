import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import DropBoxItemsReducer from "../redux/DropBoxItems";
import BoxesItemsReducer from "../redux/BoxesItems";

// Configure the Redux store
const store = configureStore({
  reducer: {
    dropBoxItems: DropBoxItemsReducer,
    boxesItems: BoxesItemsReducer,
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
