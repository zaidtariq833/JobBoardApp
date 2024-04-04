"use client";
import React, { useState } from "react";
import styles from "../logIn/login.module.css";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import logo from "../../../../../assets/talenthirelogo.png";
import { useRouter } from "next/navigation";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const page = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const loginEmployer = () => {
    const { email, password } = login;
    if (email == "" || password == "") {
      Toastify({
        text: "Please Enter required Credentials!!!",
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      return;
    }
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.loginEmploy}>Login(Employer)</h1>
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
          onFinish={loginEmployer}
          autoComplete="off"
        >
          <Form.Item label="Email" style={{ color: "#fff" }}>
            <Input
              value={login?.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              placeholder="Enter Email..."
            />
          </Form.Item>

          <Form.Item label="Password" className={styles.labels}>
            <Input.Password
              value={login?.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter Password"
              required
            />
          </Form.Item>
          <div className={styles.buttons}>
            <Button className={styles.loggedIn} htmlType="submit">
              Login
            </Button>
          </div>
        </Form>
        <span>
          Not a member? &nbsp;
          <span
            className={styles.signUpBtn}
            onClick={() => router.push("/components/employer/signUp")}
          >
            Sign Up
          </span>
        </span>
      </div>
    </div>
  );
};

export default page;
