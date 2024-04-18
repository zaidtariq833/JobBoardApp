import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  id: null,
  favourites: [],
  favourite: {},
  favouriteJobLoading: false,
  isSuccess: false,
  isError: false,
};

export const addFavouriteJob = createAsyncThunk(
  "NewFavJob/addFavJob",
  async (data) => {
    console.log(data, "data received");
    const response = await axios.post(
      "http://localhost:3000/components/applicants/api/favouritejobs",
      data
    );
    console.log(data, "data of fav job");
    console.log(response, "response of data in anything");
    return response.data;
  }
);

export const getFavouriteJobs = createAsyncThunk(
  "NewFavJob/getFavJobs",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/components/applicants/api/favouritejobs"
    );
    console.log(response, "response of all data favourite get");
    return response.data;
  }
);

export const deleteFavouriteJobs = createAsyncThunk(
  "NewFavJob/deleteFavJob",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/components/applicants/api/favouritejobs/${id}`
    );
    return response.data;
  }
);

const favouriteJobsSlice = createSlice({
  name: "NewFavJob",
  initialState,
  reducers: {
    // addJobs: (state, action) => {
    //   state.job = action.payload;
    //   const jobObj = state.job;
    //   state.jobPosted.push(jobObj);
    // },
    // jobSearching: (state, action) => {
    //   console.log(action.payload, "searched keyword");
    //   const data = action.payload;
    //   state.jobSearch = data;
    //   const searchTerm = state.jobSearch;
    //   console.log(searchTerm, "search term in redux");
    //   const filteredJobs = state.jobPosted.filter(
    //     (job) =>
    //       job?.jobTitle == searchTerm ||
    //       job?.company == searchTerm ||
    //       job?.salary == searchTerm ||
    //       job?.location == searchTerm
    //   );
    //   state.filterJobs = filteredJobs;
    // },
    reset: (state) => {
      state.favourite = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addFavouriteJob.pending, (state) => {
      state.favouriteJobLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(addFavouriteJob.rejected, (state) => {
      state.favouriteJobLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(addFavouriteJob.fulfilled, (state, action) => {
      state.favourite = action.payload;
      const favouriteObj = state.favourite;
      state.favourites.push(favouriteObj);
      state.favouriteJobLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(getFavouriteJobs.pending, (state) => {
      state.isError = false;
      state.favouriteJobLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(getFavouriteJobs.rejected, (state) => {
      state.isError = true;
      state.favouriteJobLoading = false;
      state.isSuccess = false;
    });
    builder.addCase(getFavouriteJobs.fulfilled, (state, action) => {
      const data = action.payload;
      state.favourites = data;
      state.isSuccess = true;
      state.favouriteJobLoading = false;
      state.isError = false;
    });
    // builder.addCase(getExpiredJobs.pending, (state) => {
    //   state.isError = false;
    //   state.favouriteJobLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getExpiredJobs.rejected, (state) => {
    //   state.isError = true;
    //   state.favouriteJobLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(getExpiredJobs.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.jobExpired = data;
    //   const date = new Date();
    //   const allJobs = state.jobExpired;
    //   allJobs.filter(
    //     (deadline) => date > new Date(deadline?.applicationDeadline)
    //   );
    //   state.isSuccess = true;
    //   state.favouriteJobLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(getActiveJobs.pending, (state) => {
    //   state.isError = false;
    //   state.favouriteJobLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getActiveJobs.rejected, (state) => {
    //   state.isError = true;
    //   state.favouriteJobLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(getActiveJobs.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.jobActive = data;
    //   const date = new Date();
    //   const allJobs = state.jobActive;
    //   allJobs.filter(
    //     (deadline) => new Date(deadline?.applicationDeadline) > date
    //   );
    //   state.isSuccess = true;
    //   state.favouriteJobLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(getSingleJob.pending, (state) => {
    //   state.isError = false;
    //   state.favouriteJobLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getSingleJob.rejected, (state) => {
    //   state.isError = true;
    //   state.favouriteJobLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(getSingleJob.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.id = data;
    //   state.isSuccess = true;
    //   state.favouriteJobLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(updateJob.pending, (state) => {
    //   state.isError = false;
    //   state.favouriteJobLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(updateJob.rejected, (state) => {
    //   state.isError = true;
    //   state.favouriteJobLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(updateJob.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.id = data;
    //   state.isSuccess = true;
    //   state.favouriteJobLoading = false;
    //   state.isError = false;
    // });
    builder.addCase(deleteFavouriteJobs.pending, (state) => {
      state.isError = false;
      state.favouriteJobLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(deleteFavouriteJobs.rejected, (state) => {
      state.isError = true;
      state.favouriteJobLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deleteFavouriteJobs.fulfilled, (state, action) => {
      const data = action.payload;
      console.log(data, "data for fav jobs");
      const updatedState = state.favourites.filter(
        (dataRemove) => dataRemove._id !== data?._id
      );
      console.log(updatedState, "updated state for fav jobs");
      state.favourites = updatedState;
      state.isSuccess = true;
      state.favouriteJobLoading = false;
      state.isError = false;
    });
  },
});

export const { addFavJob, jobSearching } = favouriteJobsSlice.actions;
export default favouriteJobsSlice.reducer;
