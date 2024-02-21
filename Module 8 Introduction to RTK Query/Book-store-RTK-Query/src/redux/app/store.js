import { configureStore } from "@reduxjs/toolkit";
import { booksAPI } from "../features/APISlice";
import filtersReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    // reducer for each feature like books: booksReducer
    [booksAPI.reducerPath]: booksAPI.reducer,
    // add more reducer here dynamically
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware),
});
