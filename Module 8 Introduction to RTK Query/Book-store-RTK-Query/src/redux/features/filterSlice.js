import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  featured: false,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchBooks: (state, action) => {
      state.search = action.payload;
    },
    filterBooks: (state, action) => {
      state.featured = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { searchBooks, filterBooks } = filterSlice.actions;
