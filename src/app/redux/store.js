import jobPostReducer from "./employer/jobPostedSlice/jobPostedSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
  },
});
