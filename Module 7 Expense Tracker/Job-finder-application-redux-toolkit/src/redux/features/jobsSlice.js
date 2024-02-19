import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// jobs slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {},
});

// export reducer and actions
export default jobsSlice.reducer;
// export const {} = jobsSlice.actions;
