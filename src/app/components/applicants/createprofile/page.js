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
import { addCreateProfile } from "@/app/redux/applicant/createProfileSlice";

const CreateProfile = () => {
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

  const handleUploadChange = async (info) => {
    const file = await info?.fileList[0]?.originFileObj;
    console.log(file, "file uploaded");
    const fileSize = info?.fileList[0]?.originFileObj?.size;
    console.log(fileSize);
    if (fileSize > 5242880) {
      Toastify({
        text: "File Size Exceeded. Maximum File Upload is 5mb!!!",
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      setSizeExceeded(true);
    } else {
      setCreateProfileApplicant((prevState) => ({
        ...prevState,
        uploadCV: file,
      }));
    }
  };

  const addProfileInfo = () => {
    console.log(createProfileApplicant, "profile applicant with cv");
    const { uploadCV } = createProfileApplicant;
    if (uploadCV === null) {
      Toastify({
        text: "Please Upload CV!!!",
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
    } else {
      dispatch(addCreateProfile(createProfileApplicant));
      Toastify({
        text: "Profile Created Successfully!!!",
        className: "info",
        style: {
          background: "green",
        },
      }).showToast();
      router.push("/components/applicants/jobsearch");
    }
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

          <Form.Item
            label="Upload CV"
            rules={[
              {
                required: true,
                message: "Please Upload CV!!",
              },
            ]}
          >
            <Upload
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleUploadChange}
              beforeUpload={() => false}
              showUploadList={sizeExceede ? false : true}
              multiple={false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
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
