"use client";
import React, { useEffect } from "react";
// import HeaderEmployer from "../headerEmployer/page";
import styles from "../jobsActive/jobsActive.module.css";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import jobsForPosting from "../../employer/jobsPosted/jobsPosted.module.css";
import Loader from "../../loader";
import {
  deleteJob,
  getActiveJobs,
} from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";

const JobsActive = () => {
  const dispatch = useDispatch();
  const { jobActive, isLoading, jobPosted } = useSelector(
    (state) => state.jobPost
  );

  const deleteActiveJob = (id) => {
    dispatch(deleteJob(id));
  };

  useEffect(() => {
    dispatch(getActiveJobs());
  }, [dispatch, jobPosted]);

  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Jobs Active</h1>
      </div>
      <div>
        {isLoading ? (
          <div className={jobsForPosting.loader}>
            <Loader />
          </div>
        ) : (
          <>
            {jobActive?.length == 0 ? (
              <div className={styles.noJobAvailable}>
                <h1 style={{ color: "black" }}>No Jobs are Activated</h1>
              </div>
            ) : (
              <>
                <div className={styles.jobsPostedCard}>
                  {jobActive.map((active) => (
                    <Card
                      title="React Developer"
                      extra={
                        <div className={styles.iconsStatus}>
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
                            Active
                          </span>
                          <div className={styles.icons}>
                            <span>
                              <Link
                                href={`/components/employer/postNewJob/${active?._id}`}
                              >
                                <EditOutlined className={styles.editIcon} />
                              </Link>
                            </span>
                            <span onClick={() => deleteActiveJob(active?._id)}>
                              <DeleteOutlined className={styles.deleteIcon} />
                            </span>
                          </div>
                        </div>
                      }
                      style={{
                        width: 350,
                      }}
                      key={active._id} // Added key prop for optimization
                    >
                      <div className={styles.jobTitle}>
                        <h3>Company:</h3>
                        <span>{active?.company}</span>
                      </div>
                      <div className={styles.jobTitle}>
                        <h3>Job Title:</h3>
                        <span>{active?.jobTitle}</span>
                      </div>
                      <div className={styles.salary}>
                        <h3>Salary:</h3>
                        <span>{active?.salary}</span>
                      </div>
                      <div className={styles.salary}>
                        <h3>Experience:</h3>
                        <span>{active?.experience}</span>
                      </div>
                      {/* <div className={styles.description}>
              <h3>Description:</h3>
              {active?.description?.length <= 200 ? (
                <span>{active?.description}</span>
              ) : (
                <>
                  {active?.description?.substring(0, 200)}
                  <a href="#" style={{ color: "blue", marginLeft: "10px" }}>
                    See More
                  </a>
                </>
              )}
            </div> */}
                    </Card>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobsActive;
