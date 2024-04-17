import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/db";
import mongoose from "mongoose";
import { FavouriteJobs } from "../../../../model/favouriteJobs";

export const POST = async (req, res) => {
  try {
    const jobPostedData = await req.json();
    console.log(jobPostedData, "job favourite data");
    await mongoose.connect(dbConnection);
    const schemaFavouriteJobs = new FavouriteJobs(jobPostedData);
    const saveFavouriteJobs = schemaFavouriteJobs.save();
    return NextResponse.json(
      saveFavouriteJobs,
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
    const getFavJobs = await FavouriteJobs.find();
    return NextResponse.json(getFavJobs, { status: 200 }, { success: true });
  } catch (error) {
    return NextResponse.json(
      "Error getting data from db",
      { Status: 400 },
      { success: false }
    );
  }
};
