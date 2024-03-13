import { NextResponse } from "next/server";
import { dbConnection } from "@/utils/db";
import mongoose from "mongoose";
import { JobsPosted } from "../../../../model/jobPost";

export const GET = async () => {
  let data = [];
  await mongoose.connect(dbConnection);
  data = await JobsPosted.find();
  return NextResponse.json(data, { success: true }, { status: 200 });
};