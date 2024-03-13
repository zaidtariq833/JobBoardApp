"use client";
import React, { useEffect, useState } from "react";
// import HeaderEmployer from "../headerEmployer/page";
import { Button, Form, Input, InputNumber, Select } from "antd";
import styles from "./postNewJob.module.css";
import { addJobs } from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch } from "react-redux";

const PostNewJob = () => {
  const dispatch = useDispatch();
  const [wordsRemaining, setWordsRemaining] = useState("");
  const [italic, setItalic] = useState("");
  const [bold, setBold] = useState("");
  const [newJobPost, setNewJobPost] = useState({
    company: "",
    companyURL: "",
    jobTitle: "",
    salary: 0,
    experience: "",
    description: "",
    location: "",
    timings: "",
    jobType: "",
    qualifications: "",
    jobStatus: "",
  });

  const clearFields = () => {
    setNewJobPost({
      company: "",
      companyURL: "",
      jobTitle: "",
      salary: 0,
      experience: "",
      description: "",
      location: "",
      timings: "",
      jobType: "",
      qualifications: "",
      jobStatus: "",
    });
  };

  useEffect(() => {
    setWordsRemaining(newJobPost.description.length);
  }, [newJobPost.description]);

  const handleChange = (name, value) => {
    setNewJobPost({
      ...newJobPost,
      [name]: value,
    });
  };

  const addNewJob = (e) => {
    e.preventDefault();
    dispatch(addJobs(newJobPost));
    clearFields();
  };

  const italicWord = (bold) => {
    const italic = window.getSelection(bold);
    const highlightText = italic.toString();
    setItalic(<i>{highlightText}</i>);
  };

  return (
    <div>
      {/* <HeaderEmployer /> */}
      <div className={styles.jobPostForm}>
        <h1 className={styles.jobPostHeading}>New Job Post</h1>
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
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Company"
            rules={[
              {
                required: true,
                message: "Please fill company name field!",
              },
            ]}
          >
            <Input
              value={newJobPost.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Company's Url">
            <Input
              value={newJobPost.companyURL}
              onChange={(e) => handleChange("companyURL", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Job Title"
            rules={[
              {
                required: true,
                message: "Please fill job title field!!",
              },
            ]}
          >
            <Input
              value={newJobPost.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Salary"
            rules={[
              {
                required: true,
                message: "Please fill salary field!",
              },
            ]}
          >
            <InputNumber
              value={newJobPost.salary}
              onChange={(value) => handleChange("salary", value)}
            />
          </Form.Item>

          <Form.Item
            label="Experience"
            rules={[
              {
                required: true,
                message: "Please fill experience field!",
              },
            ]}
          >
            <Input
              value={newJobPost.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />
          </Form.Item>
          
          <Form.Item
            label="Description"
            rules={[
              {
                required: true,
                message: "Please fill description field!",
              },
            ]}
          >
            <Input.TextArea
              maxLength={1000}
              value={newJobPost.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            {wordsRemaining} /1000
            <b onClick={() => italicWord(newJobPost.description)}>Bold</b>
            <i>italic</i>
          </Form.Item>

          <Form.Item
            label="Location"
            rules={[
              {
                required: true,
                message: "Please fill job title field!!",
              },
            ]}
          >
            <Input
              value={newJobPost.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Timings">
            <Input
              value={newJobPost.timings}
              onChange={(e) => handleChange("timings", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Job Type">
            <Input
              value={newJobPost.jobType}
              onChange={(e) => handleChange("jobType", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Qualifications">
            <Input
              value={newJobPost.qualifications}
              onChange={(e) => handleChange("qualifications", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Job Status">
            <Input
              value={newJobPost.jobStatus}
              onChange={(e) => handleChange("jobStatus", e.target.value)}
            />
          </Form.Item>
          <div className={styles.btnsJobPost}>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className={styles.clrPost}
                onClick={(e) => {
                  addNewJob(e);
                }}
              >
                Post Job
              </Button>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button onClick={clearFields} type="primary" htmlType="submit">
                Clear All Fields
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PostNewJob;
