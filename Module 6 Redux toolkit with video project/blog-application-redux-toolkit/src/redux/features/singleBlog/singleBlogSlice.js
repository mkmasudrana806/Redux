import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./singleBlogAPI";

// initial state
const initialState = {
  blog: {},
  loading: false,
  isError: false,
  error: "",
};

// blog async thunk
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

// blog slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.error = action.error.message;
        state.isError = true;
        state.loading = false;
        state.blog = {};
      });
  },
});

// export reducer
export default blogSlice.reducer;
