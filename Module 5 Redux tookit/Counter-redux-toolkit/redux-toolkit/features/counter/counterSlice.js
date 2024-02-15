// import createSlice from redux toolkit
const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  count: 0,
};

// create a slice
//note: createSlice return a reducer.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

// exports reducer and actions
// note: createSlice return an actions intelligently. here export actions as named exports
module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;