"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../../../app/components/employer/layoutNavbar.module.css";
import { usePathname } from "next/navigation";
import Login from "../applicants/login/page";
import Image from "next/image";
import SignUp from "../applicants/signup/page";
import logo from "../../../../assets/talenthirelogo.png";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCreateProfile } from "@/app/redux/applicant/createProfileSlice";

const LayoutNavbar = ({ children }) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  console.log(pathname, "path");
  const { profile } = useSelector((state) => state.createProfileApp);
  console.log(profile, "profile checking");

  useEffect(() => {
    dispatch(getCreateProfile());
  }, []);

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
              {profile.length > 0 ? (
                <li className={styles.text}>
                  <Link href="/components/applicants/createprofile">
                    EDIT PROFILE
                  </Link>
                </li>
              ) : (
                <li className={styles.text}>
                  <Link href="/components/applicants/createprofile">
                    CREATE PROFILE
                  </Link>
                </li>
              )}
            </ul>
            <Link href={`/`} className={styles.logoutBtn}>
              <LogoutOutlined className={styles.iconLogout} />
              <p className={styles.logoutTxt}>Logout</p>
              <span>{profile[0]?.email}</span>
            </Link>
            <h1> {profile?.email}</h1>
          </div>
          {children}
        </nav>
      )}
    </>
  );
};

export default LayoutNavbar;
