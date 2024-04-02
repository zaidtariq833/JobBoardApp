import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/db";
import mongoose from "mongoose";
import { JobsPosted } from "../../../../model/jobPost";

export const POST = async (req, res) => {
  try {
    const jobPostedData = await req.json();
    await mongoose.connect(dbConnection);
    const schemaJobs = new JobsPosted(jobPostedData);
    const saveJobsPosted = schemaJobs.save();
    return NextResponse.json(
      saveJobsPosted,
      { status: 200 },
      { success: true }
    );
  } catch (error) {
    return NextResponse.json(
      "Error Saving Data",
      { success: false },
      { status: 400 }
    );
  }
};

export const GET = async () => {
  try {
    await mongoose.connect(dbConnection);
    const getAllJobs = await JobsPosted.find();
    return NextResponse.json(getAllJobs, { status: 200 }, { success: true });
  } catch (error) {
    return NextResponse.json(
      "Error getting data from db",
      { Status: 400 },
      { success: false }
    );
  }
};
