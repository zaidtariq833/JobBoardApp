"use client";
import React, { useRef, useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import styles from "../postNewJob/postNewJob.module.css";
import { addNewJob } from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { DatePicker, Space } from "antd";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import JoditEditor from "jodit-react";
import { UploadOutlined } from "@ant-design/icons";

const CreateProfile = () => {
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
    jobPosted: new Date(),
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
    });
  };

  const handleChange = (name, value) => {
    setNewJobPost({
      ...newJobPost,
      [name]: value,
    });
    console.log(newJobPost, "new job postings");
  };

  const addProfileInfo = () => {
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

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    accept: "image/jpeg,image/png,image/webp",
    onChange(info) {
      console.log(info, "information");
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        Toastify({
          text: "Logo Uploaded!!!",
          className: "info",
          style: {
            background: "red",
          },
        }).showToast();
      } else if (info.file.status === "error") {
        Toastify({
          text: "Cannot Upload Logo!!!",
          className: "info",
          style: {
            background: "red",
          },
        }).showToast();
      }
    },
  };

  return (
    <div>
      <div className={styles.jobPostForm}>
        <h1 className={styles.jobPostHeading}>CREATE PROFILE</h1>
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
          onFinish={addProfileInfo}
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
            label="Designation"
            rules={[
              {
                required: true,
                message: "Please fill designation field!",
              },
            ]}
          >
            <Input
              value={newJobPost.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
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

          <Form.Item label="Qualifications">
            <Input
              value={newJobPost?.qualifications}
              onChange={(e) => handleChange("qualifications", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Company's logo">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Joined Date">
            <Space direction="vertical" size={12}>
              <Input
                value={newJobPost?.qualifications}
                onChange={(e) => handleChange("qualifications", e.target.value)}
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
                Create Profile
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

export default CreateProfile;
