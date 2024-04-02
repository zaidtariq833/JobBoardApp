import React from "react";
import styles from "../components/loader.module.css";

const loader = () => {
  return (
    <div>
      <span className={styles.loader}></span>
    </div>
  );
};

export default loader;
