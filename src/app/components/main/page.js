import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import mainImg from "../../../../assets/jobBoard.jpg";
import styles from "../main/main.module.css";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.mainDiv}>
        <Image src={mainImg} width={650} style={{ borderRadius: "20px" }}  alt = "logo"/>
        <div>
          <h1 className={styles.aboutUs}>ABOUT US:</h1>
          <span className={styles.aboutUsContent}>
            Welcome to Talent Hire, your premier platform for connecting skilled
            professionals with top-notch opportunities. At Talent Hire, we
            understand the pivotal role that talent plays in driving success for
            businesses and individuals alike. Our mission is to bridge the gap
            between talent and opportunity, empowering both employers and job
            seekers to achieve their goals efficiently and effectively. At
            Talent Hire, we pride ourselves on our commitment to excellence,
            innovation, and integrity. Our platform is designed to streamline
            the hiring process, making it easier for employers to find the
            perfect candidates and for job seekers to discover exciting career
            prospects.
          </span>
        </div>
      </div>
      <div>
        <h1 className={styles.aboutUs}>For Employers:</h1>
        <span className={styles.aboutUsContent}>
          Whether you're a multinational corporation or a local startup, finding
          the right talent is crucial for your organization's success. With
          Talent Hire, you gain access to a diverse pool of qualified
          professionals across various industries and disciplines. Our advanced
          matching algorithms and comprehensive candidate profiles ensure that
          you can quickly identify the best candidates for your job openings.
          Say goodbye to endless hours of sifting through resumes and let Talent
          Hire simplify your hiring process.
        </span>
        <h1 className={styles.aboutUs}>For Job Seekers:</h1>
        <span className={styles.aboutUsContent}>
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
      </div>
    </>
  );
};

export default page;
