import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/db";
import mongoose from "mongoose";
import { FavouriteJobs } from "../../../../../model/favouriteJobs";

export const DELETE = async (req, { params }) => {
  console.log(params?.favJobId, "job id in backend fav");
  try {
    if (params?.favJobId) {
      const generatedId = {
        _id: params?.favJobId,
      };
      await mongoose.connect(dbConnection);
      const passedId = await FavouriteJobs.findOneAndDelete(generatedId);
      return NextResponse.json(passedId, { success: true }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      "Id Not Found",
      { success: false },
      { status: 404 }
    );
  }
};
