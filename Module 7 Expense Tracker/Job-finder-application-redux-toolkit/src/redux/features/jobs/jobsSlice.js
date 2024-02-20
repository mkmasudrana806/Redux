import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJob, getAllJobs, getJob, removeJob, updateJob } from "./jobsAPI";

// initial state
const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  singleJob: {},
  filters: {
    sort: "",
    search: "",
    type: "",
  },
};

// fetch all jobs async thunk
export const fetchAllJobs = createAsyncThunk("jobs/fetchAllJobs", async () => {
  const jobs = await getAllJobs();
  return jobs;
});

// add a job
export const addJob = createAsyncThunk("jobs/addJob", async (data) => {
  const addedJob = await createJob(data);
  return addedJob;
});

// get a job
export const getSingleJob = createAsyncThunk(
  "jobs/getSingleJob",
  async (id) => {
    const job = await getJob(id);
    return job;
  }
);

// edit a job
export const editJob = createAsyncThunk(
  "jobs/editJob",
  async ({ id, data }) => {
    const updatedJob = await updateJob(id, data);
    return updatedJob;
  }
);

// delete a job
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id) => {
  await removeJob(id);
  return id;
});

// jobs slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    clearSingleJob: (state, action) => {
      state.singleJob = {};
    },
    filterJob: (state, action) => {
      state.filters.type = action.payload;
    },
    searchJob: (state, action) => {
      state.filters.search = action.payload;
    },
    sortJob: (state, action) => {
      state.filters.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error.message;
      })
      // edit a job
      .addCase(editJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs?.map((job) => {
          if (job.id === action.payload.id) {
            return { ...job, ...action.payload };
          } else return job;
        });
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error.message;
      })
      // delete a job
      .addCase(deleteJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs?.filter((job) => job.id !== action.payload);
        console.log(state.jobs.length);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error.message;
      })
      // delete a job
      .addCase(getSingleJob.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSingleJob.fulfilled, (state, action) => {
        state.singleJob = action.payload;
        state.isLoading = false;
      })
      .addCase(getSingleJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = {};
        state.error = action.error.message;
      });
  },
});

// export reducer and actions
export default jobsSlice.reducer;
export const { clearSingleJob, filterJob, searchJob, sortJob } =
  jobsSlice.actions;
