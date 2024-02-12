import React from "react";
import HeaderEmployer from "../HeaderEmployer";
import styles from "../jobsActive/jobsActive.module.css";
import { Card, Space } from "antd";

const JobsActive = () => {
  document.title = "Jobs Active";
  const data = `We are seeking a talented and experienced React Developer to
    join our team. As a React Developer, you will be responsible
    for developing user`;
  console.log(data.length, "data length");
  return (
    <div>
      <HeaderEmployer />
      <div>
        <h1 className={styles.jobs_posted}>Jobs Active</h1>
      </div>
      <div>
        <div className={styles.jobsPostedCard}>
          <Card
            title="React Developer"
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
                Active
              </span>
            }
            style={{
              width: 300,
            }}
          >
            <div className={styles.jobTitle}>
              <h3>Company:</h3>
              <span>WeUno Technologies</span>
            </div>
            <div className={styles.jobTitle}>
              <h3>Job Title:</h3>
              <span>React Developer</span>
            </div>
            <div className={styles.salary}>
              <h3>Salary:</h3>
              <span>Rs.50,000</span>
            </div>
            <div className={styles.salary}>
              <h3>Experience:</h3>
              <span>2 yrs</span>
            </div>
            <div className={styles.description}>
              <h3>Description:</h3>
              {data.substring(0, 200)}
              <a href="#" style={{ color: "blue", marginLeft: "10px" }}>
                See More
              </a>
            </div>
          </Card>
          <Card
            title="React Developer"
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
                Active
              </span>
            }
            style={{
              width: 300,
            }}
          >
            <div className={styles.jobTitle}>
              <h3>Company:</h3>
              <span>WeUno Technologies</span>
            </div>
            <div className={styles.jobTitle}>
              <h3>Job Title:</h3>
              <span>React Developer</span>
            </div>
            <div className={styles.salary}>
              <h3>Salary:</h3>
              <span>Rs.50,000</span>
            </div>
            <div className={styles.salary}>
              <h3>Experience:</h3>
              <span>2 yrs</span>
            </div>
            <div className={styles.description}>
              <h3>Description:</h3>
              {data.substring(0, 200)}
              <a href="#" style={{ color: "blue", marginLeft: "10px" }}>
                See More
              </a>
            </div>
          </Card>
          <Card
            title="React Developer"
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
                Active
              </span>
            }
            style={{
              width: 300,
            }}
          >
            <div className={styles.jobTitle}>
              <h3>Company:</h3>
              <span>WeUno Technologies</span>
            </div>
            <div className={styles.jobTitle}>
              <h3>Job Title:</h3>
              <span>React Developer</span>
            </div>
            <div className={styles.salary}>
              <h3>Salary:</h3>
              <span>Rs.50,000</span>
            </div>
            <div className={styles.salary}>
              <h3>Experience:</h3>
              <span>2 yrs</span>
            </div>
            <div className={styles.description}>
              <h3>Description:</h3>
              {data.length <= 200 ? (
                <span>{data}</span>
              ) : (
                <>
                  {data.substring(0, 200)}
                  <a href="#" style={{ color: "blue", marginLeft: "10px" }}>
                    See More
                  </a>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobsActive;
