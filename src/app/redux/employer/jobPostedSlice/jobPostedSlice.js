import { createAsyncThunk } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  jobPosted: [],
  job: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const jobsPostedSlice = createSlice({
  name: "jobsPosted",
  initialState,
  reducers: {
    addJobs: (state, action) => {
      state.job = action.payload;
      const jobObj = state.job;
      state.jobPosted.push(jobObj);
    },
  },

  // getJobs: () => {},
  // expiredJobs: () => {},
});

export const { addJobs } = jobsPostedSlice.actions;
export default jobsPostedSlice.reducer;
