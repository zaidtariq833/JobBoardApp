"use client";
import React, { useRef, useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import styles from "./postNewJob.module.css";
import { addNewJob } from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { DatePicker, Space } from "antd";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import JoditEditor from "jodit-react";

const PostNewJob = () => {
  const { isSuccess } = useSelector((state) => state.jobPost);
  const editor = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const [newJobPost, setNewJobPost] = useState({
    company: "",
    companyWebsite: "",
    jobTitle: "",
    salary: 0,
    experience: "",
    description: "",
    location: "",
    timings: "",
    jobType: "",
    qualifications: "",
    applicationDeadline: null,
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
      applicationDeadline: null,
      jobPosted: null,
    });
  };

  const handleChange = (name, value) => {
    setNewJobPost({
      ...newJobPost,
      [name]: value,
    });
    console.log(newJobPost, "new job postings");
  };

  const addNewJobs = () => {
    const { applicationDeadline, salary } = newJobPost;
    const currentDate = new Date();
    if (salary < 0) {
      Toastify({
        text: "Please Select Salary Greater than 0!!!",
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      return;
    }
    if (currentDate > applicationDeadline) {
      Toastify({
        text: "Please Select Correct Format of Date!!!",
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      return;
    } else {
      dispatch(addNewJob(newJobPost));
      clearFields();
      Toastify({
        text: "Form Submitted Successfully!!!",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      if (isSuccess) {
        router.push("/components/employer/jobsPosted");
      }
    }
  };

  return (
    <div>
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
          onFinish={addNewJobs}
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
              value={newJobPost.companyWebsite}
              onChange={(e) => handleChange("companyWebsite", e.target.value)}
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
            <JoditEditor
              ref={editor}
              value={newJobPost.description}
              tabIndex={1}
              onChange={(value) => handleChange("description", value)}
              required
            />
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
              value={newJobPost?.qualifications}
              onChange={(e) => handleChange("qualifications", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Application Deadline">
            <Space direction="vertical" size={12}>
              <DatePicker
                onChange={(value) => handleChange("applicationDeadline", value)}
              />
            </Space>
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
