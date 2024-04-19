"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";

const modalCreateProfile = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
    router.push(`/components/applicants/createprofile`);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Create Profile"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ textAlign: "center" }}
      >
        <h2 style={{ color: "#6da0e7" }}>
          Create your profile to browse and apply through your favourite jobs
          &nbsp;
          <span style={{ color: "red", fontSize: "30px" }}>&#x2766;</span>
        </h2>
      </Modal>
    </>
  );
};
export default modalCreateProfile;
