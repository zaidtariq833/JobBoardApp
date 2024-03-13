import React from "react";
import Link from "next/link";
import styles from "../employer/layoutNavbar.module.css";

const LayoutNavbar = ({ children }) => {
  return (
    <nav className = {styles.navbar}>
      <div className= {styles.container}>
        <Link href="/">
          <h1 className= {styles.logo}> TALENT-HIRE </h1>
        </Link>
        <ul className= {styles.navLinks}>
          <li>
            <Link href="/components/employer/jobsPosted">JOBS POSTED</Link>
          </li>
          <li>
            <Link href="/components/employer/jobsExpired">JOBS EXPIRED</Link>
          </li>
          <li>
            <Link href="/components/employer/jobsActive">JOBS ACTIVE</Link>
          </li>
          <li>
            <Link href="/components/employer/totalCandidatesHired">
              TOTAL CANDIDATES HIRED
            </Link>
          </li>
          <li>
            <Link href="/components/employer/postNewJob">POST A NEW JOB</Link>
          </li>
        </ul>
      </div>
      {children}
    </nav>
  );
};

export default LayoutNavbar;
