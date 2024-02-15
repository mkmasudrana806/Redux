const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// intial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// create thunk slice
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts; // it return a promise.
  // this promise we can catch inside extrareducers as events
  // manually no need to handle error here. handle error inside extrareducers
  // promise can have three case:
  //1. pending 2. fullfill 3. rejected
});

// posts slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.posts = [];
    });
  },
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
