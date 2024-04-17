import jobPostReducer from "./employer/jobPostedSlice/jobPostedSlice";
import favouriteJobReducer from "./applicant/favouritesSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    favouriteJob: favouriteJobReducer,
  },
});
