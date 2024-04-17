const mongoose = require("mongoose");

const FavouriteJobsSchema = new mongoose.Schema({
  company: String,
  companyWebsite: String,
  jobTitle: String,
  salary: Number,
  experience: String,
  description: String,
  location: String,
  timings: String,
  jobType: String,
  qualifications: String,
  jobPosted: String,
  applicationDeadline: String,
});

export const FavouriteJobs =
  mongoose.models.favouritejobs ||
  mongoose.model("favouritejobs", FavouriteJobsSchema);
