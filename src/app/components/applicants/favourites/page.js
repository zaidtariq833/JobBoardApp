"use client";
import React, { useEffect } from "react";
// import HeaderEmployer from "../headerEmployer/page";
import styles from "../../employer/jobsActive/jobsActive.module.css";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import jobsForPosting from "../../employer/jobsPosted/jobsPosted.module.css";
import globals from "../../../page.module.css";
import Loader from "../../loader";
import {
  deleteJob,
  getActiveJobs,
} from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import {
  deleteFavouriteJobs,
  getFavouriteJobs,
} from "@/app/redux/applicant/favouritesSlice";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Link from "next/link";

const Favourites = () => {
  const dispatch = useDispatch();
  const { jobActive, isLoading, jobPosted } = useSelector(
    (state) => state.jobPost
  );
  const { favourites, favouriteJobLoading } = useSelector(
    (state) => state.favouriteJob
  );

  console.log(favourites, "jobs favourite");

  const deleteFavJob = (id) => {
    dispatch(deleteFavouriteJobs(id));
  };

  useEffect(() => {
    dispatch(getActiveJobs());
  }, [dispatch, jobPosted]);

  useEffect(() => {
    dispatch(getFavouriteJobs());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Favourites</h1>
      </div>
      <div>
        {isLoading ? (
          <div className={jobsForPosting.loader}>
            <Loader />
          </div>
        ) : (
          <>
            {favourites?.length == 0 ? (
              <div className={styles.noJobAvailable}>
                <h1 style={{ color: "black" }}>
                  You have no favourite jobs available
                </h1>
              </div>
            ) : (
              <>
                <div className={styles.jobsPostedCard}>
                  {favourites.map((active) => (
                    <Link
                      href={`/components/applicants/favourites`}
                      className={globals.link}
                    >
                      <Card
                        title={active?.jobTitle}
                        extra={
                          <div className={styles.iconsStatus}>
                            <div className={styles.icons}>
                              <span onClick={() => deleteFavJob(active?._id)}>
                                <DeleteOutlined className={styles.deleteIcon} />
                              </span>
                            </div>
                          </div>
                        }
                        style={{
                          width: 350,
                        }}
                        key={active?._id}
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
                      </Card>
                    </Link>
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

export default Favourites;
