"use client";
import React, { useEffect, useState } from "react";
import styles from "../../employer/jobsPosted/jobsPosted.module.css";
import { Card, Form, Input, Button } from "antd";
import {
  getAllJobs,
  jobSearching,
} from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { addFavouriteJob } from "@/app/redux/applicant/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Loader from "../../loader";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { Pagination } from "antd";
import globals from "../../../page.module.css";
import moment from "moment";
import {
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import innerStyles from "../../applicants/jobsearch/[jobInfo]/info.module.css";

const JobsSearch = ({ params }) => {
  console.log(params, "parameters");
  const { isLoading, jobPosted, filterJobs } = useSelector(
    (state) => state.jobPost
  );
  console.log(filterJobs, "filtered jobs in compo");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(12);
  const [searchingJob, setSearchingJob] = useState("");
  const [iconClicked, setIconClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const jobPostedCopy = [...jobPosted];
  const updateNewlyJobs = jobPostedCopy.reverse();
  const currentJobs = updateNewlyJobs.slice(indexOfFirstJob, indexOfLastJob);
  const date = new Date();
  const dispatch = useDispatch();

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

  const applyJob = (job) => {};

  const addToFavourites = (job) => {
    dispatch(addFavouriteJob(job));
    Toastify({
      text: "Job added to favourites!!!",
      className: "info",
      style: {
        background: "green",
      },
    }).showToast();
    setIconClicked(true);
  };

  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Search Jobs</h1>
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
                <>
                  <Card
                    title={job?.jobTitle}
                    extra={
                      <div className={styles.icons}>
                        {isHover === job?._id && (
                          <>
                            <span
                              onClick={() => addToFavourites(job)}
                              className={innerStyles.favourites}
                            >
                              {/* {iconClicked ? (
                                <>
                                  <span>Added To Favourites!</span>
                                  {console.log(iconClicked, "added")}
                                </>
                              ) : (
                                <span>Add To Favourites?</span>
                              )} */}
                            </span>
                          </>
                        )}
                        <span
                          onMouseEnter={() => setIsHover(true)}
                          onMouseLeave={() => setIsHover(false)}
                        >
                          <Link
                            href={`/components/employer/postNewJob/${job?._id}`}
                          >
                            <HeartOutlined
                              className={
                                iconClicked
                                  ? `${styles.clickedIcon}`
                                  : `${styles.unclickIcon}`
                              }
                            />
                          </Link>
                        </span>
                        {/* <span onClick={() => deleteActiveJob(active?._id)}>
                          <DeleteOutlined className={styles.deleteIcon} />
                        </span> */}
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
                </>
              ))}
            </div>
          ) : (
            <div className={styles.jobsPostedCard}>
              {currentJobs?.map((job) => (
                <Card
                  onClick={() => addToFavourites(job)}
                  title={job?.jobTitle}
                  key={job?._id}
                  extra={
                    <div className={styles.icons}>
                      {isHover === job?._id && (
                        <>
                          <span onClick={() => addToFavourites(job)}>
                            {iconClicked && isHover === job?._id && (
                              <>
                                <span className={innerStyles.favourites}>
                                  Added To Favourites!
                                </span>
                              </>
                            )}
                          </span>
                        </>
                      )}
                      <span
                        onMouseEnter={() => setIsHover(job?._id)}
                        onMouseLeave={() => setIsHover(null)}
                      >
                        {/* <Link
                          href={`/components/employer/jobsPosted/${job?._id}`}
                        > */}
                        <HeartOutlined className={styles.editIcon} />
                        {/* </Link> */}
                      </span>
                      {/* <span onClick={() => deleteActiveJob(active?._id)}>
                          <DeleteOutlined className={styles.deleteIcon} />
                        </span> */}
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
                  <div className={globals.btnGrp}>
                    <Link
                      style={{
                        backgroundColor: "#000080",
                        color: "#fff",
                        padding: "5px",
                        borderRadius: "7px",
                      }}
                      key={job?._id}
                      href={`/components/employer/jobsPosted/${job?._id}`}
                    >
                      View Job
                    </Link>
                    <Button>Report</Button>
                  </div>
                </Card>
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

export default JobsSearch;
