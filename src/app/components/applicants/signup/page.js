"use client";
import React, { useState } from "react";
import styles from "../../employer/logIn/login.module.css";
import { Button, Form, Input, Space, Switch, TreeSelect } from "antd";
import Image from "next/image";
import logo from "../../../../../assets/talenthirelogo.png";
import { useRouter } from "next/navigation";

const page = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const router = useRouter();
  const [applicantLogin, setApplicantLogin] = useState({
    username: "",
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
      <h1 className={styles.loginEmploy}>Sign Up(Applicant)</h1>
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
          <Form.Item label="Username" style={{ color: "#fff" }}>
            <Input
              value={applicantLogin?.username}
              onChange={(e) => handleChange("username", e.target.value)}
              required
              placeholder="Enter Username..."
            />
          </Form.Item>
          <Form.Item label="Email" style={{ color: "#fff" }}>
            <Input
              value={applicantLogin?.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              placeholder="Enter Email..."
            />
          </Form.Item>

          <Form.Item label="Password" className={styles.labels}>
            <Input.Password
              value={applicantLogin?.password}
              onChange={(e) => handleChange("password", e.target.value)}
              required
              placeholder="Enter Password..."
            />
          </Form.Item>
        </Form>
        <Space direction="vertical">
          <Switch
            checkedChildren="Enable Emails"
            unCheckedChildren="Don't Enable Email"
            checked={treeLine}
            onChange={() => setTreeLine(!treeLine)}
            style={{ marginBottom: "20px" }}
          />
        </Space>
        <div className={styles.buttons}>
          <Button className={styles.loggedIn} htmlType="submit">
            Sign Up
          </Button>
        </div>
        <span>
          Already a Member? &nbsp;
          <span
            className={styles.signUpBtn}
            onClick={() => router.push("/components/applicants/login")}
          >
            Login
          </span>
        </span>
      </div>
    </div>
  );
};

export default page;
