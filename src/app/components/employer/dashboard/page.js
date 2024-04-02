"use client";
import React, { useEffect } from "react";
import "./dashboard.css";
import Loader from "../../loader";
import styles from "../jobsPosted/jobsPosted.module.css";
import LayoutNavbar from "../layout";
import {
  getActiveJobs,
  getAllJobs,
  getExpiredJobs,
} from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { jobPosted, jobExpired, jobActive, isLoading } = useSelector(
    (state) => state.jobPost
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        await Promise.all([
          dispatch(getAllJobs()),
          dispatch(getExpiredJobs()),
          dispatch(getActiveJobs()),
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : (
          <>
            <h1 className="main_text">Hello Zaid, What're you doing today?</h1>
            <div className="employer_status">
              <div className="banner_card">
                <h2 className="jobs_info">
                  Total Jobs Posted: {jobPosted.length}
                </h2>
              </div>
              <div className="banner_card">
                <h2 className="jobs_info">Jobs Expired: {jobExpired.length}</h2>
              </div>
              <div className="banner_card">
                <h2 className="jobs_info">Jobs Active: {jobActive.length}</h2>
              </div>
              <div className="banner_card">
                <h2 className="jobs_info">Total Candidates Hired: 0</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
