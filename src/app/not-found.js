"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./notFoundPage.module.css";
// import ErrorPage from "../../assets/404-error.jpeg";

const NotFound = () => {
  const pathname = usePathname();
  const path = pathname.replace("/", "");
  return (
    <div className={styles.notFoundDiv}>
      <h1 className={styles.notFound}>{path} page doesn't exist</h1>
      {/* <img src={ErrorPage} /> */}
    </div>
  );
};

export default NotFound;
