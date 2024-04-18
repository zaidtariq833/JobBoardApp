import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  id: null,
  jobPosted: [],
  job: {},
  jobExpired: [],
  jobActive: [],
  filterJobs: [],
  jobSearch: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addNewJob = createAsyncThunk("NewJobs/addNewJob", async (data) => {
  console.log(data, "data received");
  const response = await axios.post(
    "http://localhost:3000/components/employer/api/jobsposted",
    data
  );
  console.log(data, "data of job");
  console.log(response, "response of data");
  return response.data;
});

export const getAllJobs = createAsyncThunk("NewJobs/getAllJobs", async () => {
  const response = await axios.get(
    "http://localhost:3000/components/employer/api/jobsposted"
  );
  console.log(response.data, "response get");
  return response.data;
});

export const getExpiredJobs = createAsyncThunk(
  "NewJobs/getExpiredJobs",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/components/employer/api/jobsposted"
    );

    const date = new Date();
    console.log(response.data, "response data in expiry jobs");
    const getExpiryJobs = response.data.filter(
      (deadline) => date > new Date(deadline?.applicationDeadline)
    );
    console.log(getExpiredJobs, "get expired job");
    return getExpiryJobs;
  }
);

export const getActiveJobs = createAsyncThunk(
  "NewJobs/getActiveJobs",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/components/employer/api/jobsposted"
    );

    const date = new Date();
    const getCurrentJobs = response.data.filter(
      (deadline) => new Date(deadline?.applicationDeadline) > date
    );
    console.log(getCurrentJobs, "get active job");
    return getCurrentJobs;
  }
);

export const getSingleJob = createAsyncThunk(
  "NewJobs/getSingleJob",
  async (id) => {
    console.log(id, "response check for id get");
    const response = await axios.get(
      `http://localhost:3000/components/employer/api/jobsposted/${id}`
    );
    return response.data;
  }
);

export const updateJob = createAsyncThunk(
  "NewJobs/updateJob",
  async (id, data) => {
    console.log(id, data, "data needs to be updated with values");
    const { editJobId, newJobPost } = id;
    console.log(newJobPost, "data updated in updateslice");
    console.log(editJobId, "edit job");
    const response = await axios.put(
      `http://localhost:3000/components/employer/api/jobsposted/${editJobId}`,
      newJobPost
    );
    return response.data;
  }
);

export const deleteJob = createAsyncThunk("NewJobs/deleteJob", async (id) => {
  console.log(id, "id for deletion");
  const response = axios.delete(
    `http://localhost:3000/components/employer/api/jobsposted/${id}`
  );
  return response.data;
});

const jobsPostedSlice = createSlice({
  name: "NewJobs",
  initialState,
  reducers: {
    addJobs: (state, action) => {
      state.job = action.payload;
      const jobObj = state.job;
      state.jobPosted.push(jobObj);
    },
    jobSearching: (state, action) => {
      console.log(action.payload, "searched keyword");
      const data = action.payload;
      state.jobSearch = data;
      const searchTerm = state.jobSearch;
      console.log(searchTerm, "search term in redux");
      const filteredJobs = state.jobPosted.filter(
        (job) =>
          job?.jobTitle == searchTerm ||
          job?.company == searchTerm ||
          job?.salary == searchTerm ||
          job?.location == searchTerm
      );
      state.filterJobs = filteredJobs;
    },
    reset: (state) => {
      state.job = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewJob.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(addNewJob.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(addNewJob.fulfilled, (state, action) => {
      console.log(action.payload, "action payloading in job post")
      state.job = action.payload;
      const jobObj = state.job;
      state.jobPosted.push(jobObj);
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(getAllJobs.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(getAllJobs.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    });
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
      const data = action.payload;
      state.jobPosted = data;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getExpiredJobs.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(getExpiredJobs.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getExpiredJobs.fulfilled, (state, action) => {
      const data = action.payload;
      state.jobExpired = data;
      const date = new Date();
      const allJobs = state.jobExpired;
      allJobs.filter(
        (deadline) => date > new Date(deadline?.applicationDeadline)
      );
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getActiveJobs.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(getActiveJobs.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getActiveJobs.fulfilled, (state, action) => {
      const data = action.payload;
      state.jobActive = data;
      const date = new Date();
      const allJobs = state.jobActive;
      allJobs.filter(
        (deadline) => new Date(deadline?.applicationDeadline) > date
      );
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getSingleJob.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(getSingleJob.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getSingleJob.fulfilled, (state, action) => {
      const data = action.payload;
      state.id = data;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(updateJob.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(updateJob.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(updateJob.fulfilled, (state, action) => {
      const data = action.payload;
      state.id = data;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(deleteJob.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(deleteJob.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deleteJob.fulfilled, (state, action) => {
      const data = action.payload;
      const updatedState = state.jobPosted.filter(
        (dataRemove) => dataRemove._id !== data
      );
      state.jobPosted = updatedState;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { addJobs, jobSearching, reset } = jobsPostedSlice.actions;
export default jobsPostedSlice.reducer;
