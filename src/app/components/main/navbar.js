import React from "react";
import Link from "next/link";
import styles from "../employer/layoutNavbar.module.css";
import mainStyles from "../main/main.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import stylesLogo from "../../components/employer/layoutNavbar.module.css";
import logo from "../../../../assets/talenthirelogo.png";

const Navbar = ({ children }) => {
  const router = useRouter();

  const handleRoute = (url) => {
    router.push(`/components/${url}`);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <Image className={stylesLogo.logo} src={logo}  alt = "logo"/>
        </Link>
        <ul className={styles.navLinks}>
          <li className={mainStyles.loginStyles}>
            <span
              onClick={() => handleRoute("employer/logIn")}
              style={{ color: "#000" }}
              className={mainStyles.link}
            >
              LOGIN AS EMPLOYER
            </span>
          </li>
          <li className={mainStyles.loginStyles}>
            <span
              onClick={() => handleRoute("applicants/login")}
              className={mainStyles.link}
              style={{ color: "#000" }}
            >
              LOGIN AS APPLICANT
            </span>
          </li>
        </ul>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
