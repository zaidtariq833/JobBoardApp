"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import styles from "../../employer/postNewJob/postNewJob.module.css";
import { addNewJob } from "@/app/redux/employer/jobPostedSlice/jobPostedSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { DatePicker, Space } from "antd";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import JoditEditor from "jodit-react";
import { UploadOutlined } from "@ant-design/icons";
import stylesCreateProfile from "./createprofile.module.css";

const CreateProfile = () => {
  const { isSuccess } = useSelector((state) => state.jobPost);
  const dispatch = useDispatch();
  const router = useRouter();
  const [sizeExceede, setSizeExceeded] = useState(false);
  const [createProfileApplicant, setCreateProfileApplicant] = useState({
    name: "",
    email: "",
    education: "",
    industry: "",
    role: "",
    uploadCV: null,
  });

  const clearFields = () => {
    setCreateProfileApplicant({
      name: "",
      email: "",
      education: "",
      industry: "",
      role: "",
      uploadCV: null,
    });
  };

  const handleChange = (name, value) => {
    setCreateProfileApplicant({
      ...createProfileApplicant,
      [name]: value,
    });
  };

  const handleUploadChange = (info) => {
    const file = info?.fileList[0]?.originFileObj;
    console.log(file, "file uploaded");
    if (info?.fileList[0]?.originFileObj?.size > 189440) {
      setSizeExceeded(true);
      setCreateProfileApplicant({
        ...createProfileApplicant,
        uploadCV: null,
      });
      console.log(createProfileApplicant, "create profile in if");
      Toastify({
        text: "File Size Exceeded. Maximum File Upload is 5mb!!!",
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      return false;
    } else {
      setCreateProfileApplicant((prevState) => ({
        ...prevState,
        uploadCV: file,
      }));
    }
  };

  const addProfileInfo = () => {
    // const { applicationDeadline, salary } = createProfileApplicant;
    // const currentDate = new Date();
    // if (salary < 0) {
    //   Toastify({
    //     text: "Please Select Salary Greater than 0!!!",
    //     className: "info",
    //     style: {
    //       background: "red",
    //     },
    //   }).showToast();
    //   return;
    // }
    // if (currentDate > applicationDeadline) {
    //   Toastify({
    //     text: "Please Select Correct Format of Date!!!",
    //     className: "info",
    //     style: {
    //       background: "red",
    //     },
    //   }).showToast();
    //   return;
    // } else {
    //   dispatch(addNewJob(createProfileApplicant));
    //   clearFields();
    //   Toastify({
    //     text: "Form Submitted Successfully!!!",
    //     className: "info",
    //     style: {
    //       background: "linear-gradient(to right, #00b09b, #96c93d)",
    //     },
    //   }).showToast();
    //   if (isSuccess) {
    //     router.push("/components/employer/jobsPosted");
    //   }
    // }
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
            label="Name"
            rules={[
              {
                required: true,
                message: "Please fill Name field!",
              },
            ]}
          >
            <Input
              value={createProfileApplicant.company}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Email">
            <Input
              value={createProfileApplicant.companyWebsite}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Education"
            rules={[
              {
                required: true,
                message: "Please fill designation field!",
              },
            ]}
          >
            <Input
              value={createProfileApplicant.experience}
              onChange={(e) => handleChange("education", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Industry"
            rules={[
              {
                required: true,
                message: "Please fill job title field!!",
              },
            ]}
          >
            <Input
              value={createProfileApplicant.location}
              onChange={(e) => handleChange("industry", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Role">
            <Input
              value={createProfileApplicant?.qualifications}
              onChange={(e) => handleChange("role", e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Upload CV">
            <Upload
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleUploadChange}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
              <span
                className={sizeExceede ? "ant-upload-list-item" : ""}
              ></span>
            </Upload>
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
