import React from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./JobInfo.module.css";
import jobActive from "../../jobsActive/jobsActive.module.css";
import axios from "axios";

const JobInfo = async ({ params }) => {
  console.log(params.jobInfo, "parameter in job info");
  const getSingleJob = async (id) => {
    const singleJob = await axios.get(
      `http://localhost:3001/components/employer/api/singleJob/${id}`
    );

    return singleJob;
  };

  const individualJob = await getSingleJob(params.jobInfo);
  console.log(individualJob, "individuals");
  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Jobs Posted</h1>
      </div>
      {individualJob.data.map((singleJob) => {
        return (
          <div className={styles.jobInformation}>
            <Card
              title={singleJob.jobTitle}
              extra={
                <span
                  style={{
                    color: "green",
                    backgroundColor: "lightgreen",
                    fontWeight: "bold",
                    padding: "5px",
                    border: "5px solid green",
                    borderRadius: "10px",
                  }}
                >
                  {singleJob.jobStatus}
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
                <span>{singleJob.company}</span>
              </div>
              <div className={styles.jobTitle}>
                <h3>Company's Website:</h3>
                <a href="https://www.weuno.com/" target="_blank">
                  {singleJob.company}
                </a>
              </div>
              <div className={jobActive.jobTitle}>
                <h3>Job Title:</h3>
                <span>{singleJob.title}</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Salary:</h3>
                <span>Rs.{singleJob.salary}</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Experience:</h3>
                <span>{singleJob.experience}</span>
              </div>
              <div className={jobActive.description}>
                <h3>Description:</h3>
                <span>{singleJob.experience}</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Location:</h3>
                <span>{singleJob.location}</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Timings:</h3>
                <span>9 a.m - 5 p.m</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Job Type:</h3>
                <span>Full Time</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Educational Qualifications:</h3>
                <span>Bachelor's / Master's</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Posted:</h3>
                <span>12/09/2024</span>
              </div>
              <div className={jobActive.salary}>
                <h3>Application Deadline:</h3>
                <span>12/09/2024</span>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default JobInfo;
