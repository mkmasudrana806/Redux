import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

// initial state
const initialState = {
  blogs: [],
  loading: false,
  isError: false,
  error: "",
};

// blogs async thunk function
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

// blogs slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    updateLikesCountLocally: (state, action) => {
      const blog = state.blogs.find((blog) => blog.id === action.payload);
      if (blog) blog.likes++;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
        state.error = action.error?.message;
        state.blogs = [];
      });
  },
});

// exports reducer as default. here no action. here only extra reducers
export default blogsSlice.reducer;
export const { updateLikesCountLocally } = blogsSlice.actions;
