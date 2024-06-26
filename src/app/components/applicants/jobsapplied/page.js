"use client";
import React, { useEffect, useState } from "react";
import styles from "../../employer/jobsPosted/jobsPosted.module.css";
import { Card, Form, Input } from "antd";
import {
  getAllJobs,
  jobSearching,
} from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Loader from "../../loader";
import { Pagination } from "antd";
import globals from "../../../page.module.css";
import moment from "moment";
import HeartOutlined from "@ant-design/icons";
import { getCreateProfile } from "@/app/redux/applicant/createProfileSlice";

const JobsApplied = ({ params }) => {
  console.log(params, "parameters");
  const { isLoading, jobPosted, filterJobs } = useSelector(
    (state) => state.jobPost
  );
  console.log(filterJobs, "filtered jobs in compo");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(12);
  const [searchingJob, setSearchingJob] = useState("");
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const jobPostedCopy = [...jobPosted];
  const updateNewlyJobs = jobPostedCopy.reverse();
  const currentJobs = updateNewlyJobs.slice(indexOfFirstJob, indexOfLastJob);
  const date = new Date();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.createProfileApp);
  console.log(profile, "profile updated");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);


  const searchJob = (val) => {
    console.log(val, "searched job");
    dispatch(jobSearching(val));
    setSearchingJob(val);
  };

  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Jobs Applied</h1>
      </div>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <>
          <div className={styles.inputStyle}>
            <input
              type="text"
              value={searchingJob}
              name="searchingJob"
              onChange={(e) => searchJob(e.target.value)}
              className={styles.inputs}
              placeholder="Search for your favourite job..."
            />
          </div>
          {console.log(filterJobs, "filter jobs")}
          {searchingJob !== "" ? (
            <div className={styles.jobsPostedCard}>
              {filterJobs?.map((job) => (
                <Link
                  key={job?._id}
                  className={globals.link}
                  href={`/components/employer/jobsPosted/${job?._id}`}
                >
                  <Card
                    title={job?.jobTitle}
                    extra={
                      <div className={styles.icons}>
                        <span onClick={() => deleteActiveJob(active?._id)}>
                          <HeartOutlined className={styles.deleteIcon} />
                        </span>
                      </div>
                    }
                    style={{
                      width: 300,
                    }}
                    className={styles.cardStyles}
                  >
                    <div className={styles.jobTitle}>
                      <h3>Company:</h3>
                      <span>{job?.company}</span>
                    </div>
                    <div className={styles.jobTitle}>
                      <h3>Job Title:</h3>
                      <span>{job?.jobTitle}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3>Salary:</h3>
                      <span>{job?.salary}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3>Experience:</h3>
                      <span>{job?.experience}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3 style={{ whiteSpace: "nowrap" }}>Job Posted:</h3>
                      <span>{moment(job?.jobPosted).format("MMM Do, YY")}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3 style={{ whiteSpace: "nowrap" }}>Job Expiry:</h3>
                      <span>
                        {moment(job?.applicationDeadline).format("MMM Do, YY")}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.jobsPostedCard}>
              {currentJobs?.map((job) => (
                <Link
                  className={globals.link}
                  href={`/components/employer/jobsPosted/${job?._id}`}
                >
                  <Card
                    title={job?.jobTitle}
                    key={job?._id}
                    extra={
                      <span
                        className={
                          date > new Date(job?.applicationDeadline)
                            ? `${styles.expired}`
                            : `${styles.active}`
                        }
                      >
                        {date > new Date(job?.applicationDeadline)
                          ? "Expired"
                          : "Active"}
                      </span>
                    }
                    style={{
                      width: 300,
                    }}
                    className={styles.cardStyles}
                  >
                    <div className={styles.jobTitle}>
                      <h3>Company:</h3>
                      <span>{job?.company}</span>
                    </div>
                    <div className={styles.jobTitle}>
                      <h3>Job Title:</h3>
                      <span>{job?.jobTitle}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3>Salary:</h3>
                      <span>{job?.salary}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3>Experience:</h3>
                      <span>{job?.experience}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3 style={{ whiteSpace: "nowrap" }}>Job Posted:</h3>
                      <span>{moment(job?.jobPosted).format("MMM Do, YY")}</span>
                    </div>
                    <div className={styles.salary}>
                      <h3 style={{ whiteSpace: "nowrap" }}>Job Expiry:</h3>
                      <span>
                        {moment(job?.applicationDeadline).format("MMM Do, YY")}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
      {!isLoading && jobPosted?.length > 12 && (
        <div className={styles.pagination}>
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={jobPosted.length}
            pageSize={jobsPerPage}
          />
          {console.log(jobsPerPage, "current")}
        </div>
      )}
    </div>
  );
};

export default JobsApplied;
