"use client";
import React from "react";
import Link from "next/link";
import styles from "../../../app/components/employer/layoutNavbar.module.css";
import { usePathname } from "next/navigation";
import Login from "../applicants/login/page";
import Image from "next/image";
import SignUp from "../applicants/signup/page";
import logo from "../../../../assets/talenthirelogo.png";
import { LogoutOutlined } from "@ant-design/icons";

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
            <Link href="/">
              <Image className={styles.logo} src={logo} alt="logo" />
            </Link>
            <ul className={styles.navLinks}>
              <li className={styles.text}>
                <Link href="/components/applicants/jobsearch">JOBS SEARCH</Link>
              </li>
              <li className={styles.text}>
                <Link href="/components/applicants/jobsapplied">
                  JOBS APPLIED
                </Link>
              </li>
              <li className={styles.text}>
                <Link href="/components/applicants/favourites">FAVOURITES</Link>
              </li>
              <li className={styles.text}>
                <Link href="/components/applicants/createprofile">
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
