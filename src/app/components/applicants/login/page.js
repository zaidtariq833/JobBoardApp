"use client";
import React, { useState } from "react";
import styles from "../../employer/logIn/login.module.css";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import logo from "../../../../../assets/talenthirelogo.png";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [applicantLogin, setApplicantLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setApplicantLogin({
      ...applicantLogin,
      [name]: value,
    });
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.loginEmploy}>Login(Applicant)</h1>
      <Image src={logo} className={styles.loginText} alt="logo" />
      <div className={styles.loginDiv}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={addNewJobs}
          autoComplete="off"
        >
          <Form.Item label="Email" style={{ color: "#fff" }}>
            <Input
              value={applicantLogin?.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Password" className={styles.labels}>
            <Input.Password
              value={applicantLogin?.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter Password"
            />
          </Form.Item>
        </Form>
        <div className={styles.buttons}>
          <Button className={styles.loggedIn} htmlType="submit">
            Login
          </Button>
        </div>
        <span>
          Not a member? &nbsp;{" "}
          <span
            className={styles.signUpBtn}
            onClick={() => router.push("/components/applicants/signup")}
          >
            Sign Up
          </span>
        </span>
      </div>
    </div>
  );
};

export default page;
