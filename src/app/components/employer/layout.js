"use client";
import React from "react";
import Link from "next/link";
import styles from "../employer/layoutNavbar.module.css";
import { usePathname } from "next/navigation";
import Login from "../employer/logIn/page";
import Image from "next/image";
import logo from "../../../../assets/talenthirelogo.png";
import SignUp from "../employer/signUp/page";
import { LogoutOutlined } from "@ant-design/icons";

const LayoutNavbar = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/components/employer/logIn" ||
      pathname === "/components/employer/signUp" ? (
        <>
          {pathname === "/components/employer/logIn" ? <Login /> : <SignUp />}
        </>
      ) : (
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <Link href="/">
              <Image className={styles.logo} src={logo} alt="logo" />
            </Link>
            <ul className={styles.navLinks}>
              {pathname === "/components/employer/dashboard" ? (
                ""
              ) : (
                <li>
                  <Link
                    className={styles.text}
                    href="/components/employer/dashboard"
                  >
                    DASHBOARD
                  </Link>
                </li>
              )}

              <li>
                <Link
                  href="/components/employer/jobsPosted"
                  className={styles.text}
                >
                  JOBS POSTED
                </Link>
              </li>
              <li>
                <Link
                  href="/components/employer/jobsExpired"
                  className={styles.text}
                >
                  JOBS EXPIRED
                </Link>
              </li>
              <li>
                <Link
                  href="/components/employer/jobsActive"
                  className={styles.text}
                >
                  JOBS ACTIVE
                </Link>
              </li>
              <li>
                <Link
                  href="/components/employer/totalCandidatesHired"
                  className={styles.text}
                >
                  TOTAL CANDIDATES HIRED
                </Link>
              </li>
              <li>
                <Link
                  href="/components/employer/postNewJob"
                  className={styles.text}
                >
                  POST A NEW JOB
                </Link>
              </li>
              <li>
                <Link
                  href="/components/employer/createprofile"
                  className={styles.text}
                >
                  CREATE PROFILE
                </Link>
              </li>
            </ul>

            <Link href={`/`} className={styles.logoutBtn}>
              <LogoutOutlined className={styles.iconLogout} />
              <p className={styles.logoutTxt}>Logout</p>
            </Link>
          </div>
          {children}
        </nav>
      )}
    </>
  );
};

export default LayoutNavbar;
