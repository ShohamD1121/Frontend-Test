import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import itemsReducer from "../redux/Items";

// Configure the Redux store
const store = configureStore({
  reducer: {
    items: itemsReducer,
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
