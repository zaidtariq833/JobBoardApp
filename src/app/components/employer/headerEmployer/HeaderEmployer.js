import React from "react";
import Link from "next/link";
import "../headerEmployer/headerEmployer.css";

const HeaderEmployer = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <h1 className="logo"> TALENT-HIRE </h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/jobsPosted">JOBS POSTED</Link>
          </li>
          <li>
            <Link href="/jobsExpired">JOBS EXPIRED</Link>
          </li>
          <li>
            <Link href="/jobsActive">JOBS ACTIVE</Link>
          </li>
          <li>
            <Link href="/totalCandidatesHired">TOTAL CANDIDATES HIRED</Link>
          </li>
          <li>
            <Link href="/postAnewJob">POST A NEW JOB</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderEmployer;
