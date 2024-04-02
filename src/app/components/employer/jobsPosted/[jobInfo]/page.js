"use client";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./jobInfo.module.css";
import jobActive from "../../jobsActive/jobsActive.module.css";
import { getSingleJob } from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";
import stylesJob from "../jobsPosted.module.css";
import Loader from "@/app/components/loader";
import moment from "moment";

const JobInfo = ({ params }) => {
  const date = new Date();
  const dispatch = useDispatch();
  const { jobInfo } = params;
  const { id, isLoading } = useSelector((state) => state.jobPost);
  const singleJob = id;
  const checkValidationDate = date > new Date(singleJob?.applicationDeadline);
  useEffect(() => {
    dispatch(getSingleJob(jobInfo));
  }, []);

  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Jobs Posted</h1>
      </div>
      {isLoading ? (
        <div className={stylesJob.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.jobInformation}>
          <Card
            title={singleJob?.jobTitle}
            extra={
              <span
                className={
                  checkValidationDate ? stylesJob.expired : stylesJob.active
                }
              >
                {checkValidationDate ? "Expired" : "Active"}
              </span>
            }
            style={{
              width: "50%",
              // marginTop: "30px"
              height: "400px",
              overflowY: "auto",
            }}
          >
            <div className={jobActive.jobTitle}>
              <h3>Company:</h3>
              <span>{singleJob?.company}</span>
            </div>
            <div className={styles.jobTitle}>
              <h3>Company's Website:</h3>
              <a href={singleJob?.companyWebsite} target="_blank">
                {singleJob?.companyWebsite}
              </a>
            </div>
            <div className={jobActive.jobTitle}>
              <h3>Job Title:</h3>
              <span>{singleJob?.jobTitle}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Salary:</h3>
              <span>Rs.{singleJob?.salary}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Experience:</h3>
              <span>{singleJob?.experience}</span>
            </div>
            <div className={jobActive.description}>
              <h3>Description:</h3>
              <span>{singleJob?.description}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Location:</h3>
              <span>{singleJob?.location}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Timings:</h3>
              <span>{singleJob?.timings}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Job Type:</h3>
              <span>{singleJob?.jobType}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Educational Qualifications:</h3>
              <span>{singleJob?.qualifications}</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Posted:</h3>
              <span>23/03/2024</span>
            </div>
            <div className={jobActive.salary}>
              <h3>Application Deadline:</h3>
              <span>
                {moment(singleJob?.applicationDeadline).format("MMM Do, YY")}
              </span>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default JobInfo;
