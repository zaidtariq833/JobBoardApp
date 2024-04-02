"use client";
import React, { useEffect } from "react";
import styles from "../jobsExpired/jobsExpired.module.css";
import { Card } from "antd";
import { getExpiredJobs } from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loader";
import { Pagination } from "antd";
import stylesFromJobPost from "../jobsPosted/jobsPosted.module.css";
import stylesJobActive from "../jobsActive/jobsActive.module.css";

const JobsExpired = () => {
  const dispatch = useDispatch();
  const { isLoading, jobExpired } = useSelector((state) => state.jobPost);
  useEffect(() => {
    dispatch(getExpiredJobs());
  }, []);
  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Jobs Expired</h1>
      </div>
      {isLoading ? (
        <>
          <div className={stylesFromJobPost.loader}>
            <Loader />
          </div>
        </>
      ) : (
        <>
          {jobExpired.length == 0 ? (
            <div className={stylesJobActive.noJobAvailable}>
              <h1 style={{ color: "black" }}>No Expired Jobs Available</h1>
            </div>
          ) : (
            <>
              <div>
                <div className={styles.jobsPostedCard}>
                  {jobExpired?.map((job) => {
                    return (
                      <Card
                        title={job?.jobTitle}
                        extra={
                          <span
                            style={{
                              color: "red",
                              backgroundColor: "pink",
                              fontWeight: "bold",
                              padding: "5px",
                              border: "5px solid red",
                              borderRadius: "10px",
                            }}
                          >
                            Expired
                          </span>
                        }
                        style={{
                          width: 300,
                        }}
                        className={stylesFromJobPost.cardStyles}
                        key={job.id} // Add key prop for each iteration
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
                        {/* Uncomment if needed
                      <div className={styles.description}>
                        <h3>Description:</h3>
                        {job?.description?.length > 200 ? (
                          <>
                            {job?.description?.substring(0, 200)}
                            <a
                              href="#"
                              style={{ color: "blue", marginLeft: "10px" }}
                            >
                              See More
                            </a>
                          </>
                        ) : (
                          <span>{job?.description}</span>
                        )}
                      </div>
                      */}
                      </Card>
                    );
                  })}
                </div>
              </div>
              {!isLoading && jobExpired?.length > 12 && (
                <Pagination
                  defaultCurrent={1}
                  total={50}
                  className={stylesFromJobPost.pagination}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default JobsExpired;
