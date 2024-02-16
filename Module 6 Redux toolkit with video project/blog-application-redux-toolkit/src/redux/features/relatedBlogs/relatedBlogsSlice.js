import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";

// initial state
const initialState = {
  relatedBlogs: [],
  loading: false,
  isError: false,
  error: "",
};

// relatedBlogs async thunk function
export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlogs/fetchRelatedBlogs",
  async ({ tags, id }) => {
    const relatedBlogs = await getRelatedBlogs(tags, id);
    return relatedBlogs;
  }
);

// relatedBlogs slice
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.relatedBlogs = action.payload;
        state.loading = false;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
        state.error = action.error?.message;
        state.relatedBlogs = [];
      });
  },
});

// exports reducer as default. here no action. here only extra reducers
export default relatedBlogsSlice.reducer;
