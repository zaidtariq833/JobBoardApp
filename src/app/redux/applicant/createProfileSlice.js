import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  profile: {},
  profiles: [],
  profileLoading: false,
  isSuccess: false,
  isError: false,
};

export const addCreateProfile = createAsyncThunk(
  "createProfile/addProfile",
  async (data) => {
    console.log(data, "data received");
    const response = await axios.post(
      "http://localhost:3000/components/applicants/api/createprofileapplicant",
      data
    );
    console.log(data, "data of fav job");
    console.log(response, "response of fav data");
    return response.data;
  }
);

export const getCreateProfile = createAsyncThunk(
  "createProfile/getProfile",
  async () => {
    const response = await axios.get(
      "http://localhost:3000/components/applicants/api/createprofileapplicant"
    );
    return response.data;
  }
);

const createProfileSlice = createSlice({
  name: "createProfile",
  initialState,
  reducers: {
    addProfileApplicant: (state, action) => {
      state.profile = action.payload;
    },
    reset: (state) => {
      state.profile = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCreateProfile.pending, (state) => {
      state.profileLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(addCreateProfile.rejected, (state) => {
      state.profileLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(addCreateProfile.fulfilled, (state, action) => {
      console.log(action.payload, "action payload of create");
      const data = action.payload;
      state.profile = data;
      state.profileLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(getCreateProfile.pending, (state) => {
      state.profileLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getCreateProfile.rejected, (state) => {
      state.profileLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
    builder.addCase(getCreateProfile.fulfilled, (state, action) => {
      const data = action.payload;
      state.profile = data;
      state.profileLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    // builder.addCase(getFavouriteJobs.pending, (state) => {
    //   state.isError = false;
    //   state.profileLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getFavouriteJobs.rejected, (state) => {
    //   state.isError = true;
    //   state.profileLoading = false;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getFavouriteJobs.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.favourites = data;
    //   state.isSuccess = true;
    //   state.profileLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(getExpiredJobs.pending, (state) => {
    //   state.isError = false;
    //   state.profileLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getExpiredJobs.rejected, (state) => {
    //   state.isError = true;
    //   state.profileLoading = false;
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
    //   state.profileLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(getActiveJobs.pending, (state) => {
    //   state.isError = false;
    //   state.profileLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getActiveJobs.rejected, (state) => {
    //   state.isError = true;
    //   state.profileLoading = false;
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
    //   state.profileLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(getSingleJob.pending, (state) => {
    //   state.isError = false;
    //   state.profileLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(getSingleJob.rejected, (state) => {
    //   state.isError = true;
    //   state.profileLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(getSingleJob.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.id = data;
    //   state.isSuccess = true;
    //   state.profileLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(updateJob.pending, (state) => {
    //   state.isError = false;
    //   state.profileLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(updateJob.rejected, (state) => {
    //   state.isError = true;
    //   state.profileLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(updateJob.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   state.id = data;
    //   state.isSuccess = true;
    //   state.profileLoading = false;
    //   state.isError = false;
    // });
    // builder.addCase(deleteFavouriteJobs.pending, (state) => {
    //   state.isError = false;
    //   state.profileLoading = true;
    //   state.isSuccess = false;
    // });
    // builder.addCase(deleteFavouriteJobs.rejected, (state) => {
    //   state.isError = true;
    //   state.profileLoading = false;
    //   state.isSuccess = true;
    // });
    // builder.addCase(deleteFavouriteJobs.fulfilled, (state, action) => {
    //   const data = action.payload;
    //   console.log(data, "data for fav jobs");
    //   const updatedState = state.favourites.filter(
    //     (dataRemove) => dataRemove._id !== data?._id
    //   );
    //   console.log(updatedState, "updated state for fav jobs");
    //   state.favourites = updatedState;
    //   state.isSuccess = true;
    //   state.profileLoading = false;
    //   state.isError = false;
    // });
  },
});

export const { addProfileApplicant } = createProfileSlice.actions;
export default createProfileSlice.reducer;
