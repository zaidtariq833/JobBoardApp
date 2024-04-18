const mongoose = require("mongoose");

const createProfileApplicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  industry: String,
  role: String,
  //   uploadCV: {
  //     uid: String,
  //     name: String,
  //     size: Number,
  //     type: String,
  //   },
});

export const CreateProfileApp =
  mongoose.models.createprofileapplicant ||
  mongoose.model("createprofileapplicant", createProfileApplicantSchema);
