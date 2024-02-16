import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios/axios";

// initial state
const initialState = {
  loading: false,
  isError: false,
};

// likes async thunk and API called as well
export const incrementlikesCount = createAsyncThunk(
  "likes/incrementlikesCount",
  async ({ id, likes }) => {
    await axios.patch(`/blogs/${id}`, { likes: likes + 1 });
    return 1;
  }
);

// likes slice
const likesSlice = createSlice({
  name: "likes",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(incrementlikesCount.pending, (state, action) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(incrementlikesCount.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(incrementlikesCount.rejected, (state, action) => {
        state.isError = true;
        state.loading = false;
      });
  },
});

// export reducer
export default likesSlice.reducer;
