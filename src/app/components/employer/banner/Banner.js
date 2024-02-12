import React, { useEffect } from "react";
import "./banner.css";
import { Input } from "antd";
import HeaderEmployer from "../headerEmployer/HeaderEmployer";
import { Line } from "react-chartjs-2";

const Banner = () => {
  const employeeInfo = {
    totalJobs: 70,
    jobsExpired: 20,
    jobsActive: 30,
    totalCandidatesHired: 65,
  };
  return (
    <>
      <HeaderEmployer />
      <div>
        <h1 className="main_text">Hello Zaid, What're you doing today?</h1>
        {/* <Input placeholder="Search Jobs You Posted" className="input_search" /> */}
        <div className="employer_status">
          <div className="banner_card">
            <h2 className="jobs_info">
              Total Jobs Posted: {employeeInfo.totalJobs}
            </h2>
          </div>
          <div className="banner_card">
            <h2 className="jobs_info">
              Jobs Expired: {employeeInfo.jobsExpired}
            </h2>
          </div>
          <div className="banner_card">
            <h2 className="jobs_info">
              Jobs Active: {employeeInfo.jobsActive}
            </h2>
          </div>
          <div className="banner_card">
            <h2 className="jobs_info">
              Total Candidates Hired: {employeeInfo.totalCandidatesHired}
            </h2>
          </div>
        </div>
        {/* <Line data={employeeInfo} /> */}
      </div>
    </>
  );
};

export default Banner;
