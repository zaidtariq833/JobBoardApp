"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../app/components/employer/layoutNavbar.module.css";
import { usePathname } from "next/navigation";
import Login from "../applicants/login/page";
import Image from "next/image";
import SignUp from "../applicants/signup/page";

const LayoutNavbar = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname, "path");
  return (
    <>
      {pathname === "/components/applicants/login" ||
      pathname === "/components/applicants/signup" ? (
        <>
          {pathname === "/components/applicants/login" ? <Login /> : <SignUp />}
        </>
      ) : (
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <Link href="/jobsearch">
              <Image className={styles.logo} src={logo} alt="logo" />
            </Link>
            <ul className={styles.navLinks}>
              <li>
                <Link href="/components/applicant/jobsapplied">JOBS APPLIED</Link>
              </li>
              <li>
                <Link href="/components/applicant/favourites">
                  FAVOURITES
                </Link>
              </li>
              <li>
                <Link href="/components/employer/jobsActive">FAVOURITES</Link>
              </li>
              <li>
                <Link href="/components/employer/totalCandidatesHired">
                  TOTAL CANDIDATES HIRED
                </Link>
              </li>
              <li>
                <Link href="/components/employer/postNewJob">
                  POST A NEW JOB
                </Link>
              </li>
            </ul>
          </div>
          {children}
        </nav>
      )}
    </>
  );
};

export default LayoutNavbar;
