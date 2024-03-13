import React from "react";
import styles from "./jobsPosted.module.css";
import { Card } from "antd";
import Link from "next/link";
import axios from "axios";

const JobsPosted = async () => {
  return (
    <div>
      <div>
        <h1 className={styles.jobs_posted}>Jobs Posted</h1>
      </div>
      <div>
        <div className={styles.jobsPostedCard}>
          <Card
            title= "abc"
            key= "123"
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
              ></span>
            }
            style={{
              width: 300,
            }}
          >
            <div className={styles.jobTitle}>
              <h3>Company:</h3>
              <span></span>
            </div>
            <div className={styles.jobTitle}>
              <h3>Job Title:</h3>
              <span></span>
            </div>
            <div className={styles.salary}>
              <h3>Salary:</h3>
              <span></span>
            </div>
            <div className={styles.salary}>
              <h3>Experience:</h3>
              <span></span>
            </div>
            <div className={styles.description}>
              <h3>Description:</h3>
              {/* {job.description.length <= 200 ? (
                <span>{job.description}</span>
              ) : (
                <>
                  {job.description.substring(0, 200)}
                  <Link
                    style={{ color: "blue", marginLeft: "10px" }}
                    href={`/components/employer/jobsPosted/${job.id}`}
                  >
                    See More
                  </Link>
                </>
              )} */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobsPosted;
