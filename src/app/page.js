"use client";
import React from "react";
import Banner from "./components/employer/banner/Banner";
import JobsPosted from "./components/employer/headerEmployer/jobsPosted/JobsPosted";
import JobsExpired from "./components/employer/headerEmployer/jobsExpired/JobsExpired";
import JobsActive from "./components/employer/headerEmployer/jobsActive/JobsActive";

const page = () => {
  return (
    <>
      {/* <Banner /> */}
      {/* employer components */}
      {/* <JobsPosted /> */}
      <JobsActive />
      {/* applicant components */}
    </>
  );
};

export default page;
