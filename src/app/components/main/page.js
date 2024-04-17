import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import mainImg from "../../../../assets/jobBoard.jpg";
import styles from "../main/main.module.css";

const page = () => {
  return (
    <div className={styles.mainLayout}>
      <div>
        <Navbar />
      </div>
      <div className={styles.mainDiv}>
        <div>
          <h1 className={styles.aboutUs}>
            Finding a job and hiring staff, made easy.
          </h1>
        </div>
        <Image
          src={mainImg}
          width={650}
          style={{ borderRadius: "20px" }}
          alt="logo"
        />
      </div>
      {/* <div>
        <h1>For Employers:</h1>
        <span>
          Whether you're a multinational corporation or a local startup, finding
          the right talent is crucial for your organization's success. With
          Talent Hire, you gain access to a diverse pool of qualified
          professionals across various industries and disciplines. Our advanced
          matching algorithms and comprehensive candidate profiles ensure that
          you can quickly identify the best candidates for your job openings.
          Say goodbye to endless hours of sifting through resumes and let Talent
          Hire simplify your hiring process.
        </span>
        <h1>For Job Seekers:</h1>
        <span>
          Are you ready to take the next step in your career journey? Talent
          Hire is here to help. Our platform offers a wide range of job
          opportunities from leading companies around the world. Whether you're
          seeking a challenging new role, exploring a different industry, or
          advancing your career, Talent Hire provides the tools and resources
          you need to succeed. Upload your resume, create a profile, and let
          employers come to you. Your dream job may be just a click away. At
          Talent Hire, we believe in the power of talent to transform businesses
          and change lives. Join us on our mission to build a brighter future,
          one career opportunity at a time. Ready to unlock your full potential?
          Sign up for Talent Hire today and discover the possibilities.
        </span>
      </div> */}
    </div>
  );
};

export default page;
