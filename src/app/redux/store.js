import jobPostReducer from "./employer/jobPostedSlice/jobPostedSlice";
import favouriteJobReducer from "./applicant/favouritesSlice";
import createProfileApplicantReducer from "./applicant/createProfileSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    jobPost: jobPostReducer,
    favouriteJob: favouriteJobReducer,
    createProfileApp: createProfileApplicantReducer,
  },
});
