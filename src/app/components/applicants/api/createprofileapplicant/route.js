import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/db";
import mongoose from "mongoose";
import { CreateProfileApp } from "../../../../model/createProfileApplicant";

export const POST = async (req, res) => {
  try {
    const createProfileData = await req.json();
    console.log(createProfileData, "create profile data");
    await mongoose.connect(dbConnection);
    const schemaCreateProfileApplicantJobs = new CreateProfileApp(
      createProfileData
    );
    console.log(schemaCreateProfileApplicantJobs, "console data of scema");
    const saveProfileAppInfo = schemaCreateProfileApplicantJobs.save();
    console.log(saveProfileAppInfo, "save profile info");
    return NextResponse.json(
      saveProfileAppInfo,
      { status: 200 },
      { success: true }
    );
  } catch (error) {
    return NextResponse.json(
      "Error Saving Profile Data",
      { success: false },
      { status: 400 }
    );
  }
};

export const GET = async () => {
  try {
    await mongoose.connect(dbConnection);
    const getFavJobs = await CreateProfileApp.find();
    console.log(getFavJobs, "get profile det")
    return NextResponse.json(getFavJobs, { status: 200 }, { success: true });
  } catch (error) {
    return NextResponse.json(
      "Error getting data from db",
      { Status: 400 },
      { success: false }
    );
  }
};
