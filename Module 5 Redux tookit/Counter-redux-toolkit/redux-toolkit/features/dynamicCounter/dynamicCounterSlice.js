// import createSlice from redux toolkit
const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  count: 0,
};

// create a slice
//note: createSlice return a reducer.
const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

// exports reducer and actions
// note: createSlice return an actions intelligently. here export actions as named exports
module.exports =dynamicCounterSlice.reducer;
module.exports.dynamicCounterActions = dynamicCounterSlice.actions;
