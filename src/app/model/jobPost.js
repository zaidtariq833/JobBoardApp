const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema({
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

export const JobsPosted =
  mongoose.models.jobPost || mongoose.model("jobPost", JobPostSchema);