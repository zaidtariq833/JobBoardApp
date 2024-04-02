import { JobsPosted } from "@/app/model/jobPost";
import { dbConnection } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const generateId = {
      _id: params.jobId,
    };
    await mongoose.connect(dbConnection);
    const getDataFromDB = await JobsPosted.findById(generateId);
    return NextResponse.json(getDataFromDB, { success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Error in getting id",
      { status: 400 },
      { success: false }
    );
  }
};

export const PUT = async (req, { params }) => {
  try {
    const data = await req.json();
    console.log(data, "data which came");
    const generateId = {
      _id: params.jobId,
    };
    console.log(generateId, "generated id");
    await mongoose.connect(dbConnection);
    const updateData = await JobsPosted.findOneAndUpdate(generateId, data);
    return NextResponse.json(updateData, { success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      "Error Updating Data",
      { success: false },
      { status: 400 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  try {
    if (params.jobId) {
      const generatedId = {
        _id: params?.jobId,
      };
      await mongoose.connect(dbConnection);
      const passedId = await JobsPosted.findOneAndDelete(generatedId);
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
