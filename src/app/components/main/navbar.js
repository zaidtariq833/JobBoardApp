import React from "react";
import Link from "next/link";
// import styles from "../employer/layoutNavbar.module.css";
import mainStyles from "../main/main.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import stylesLogo from "../../components/employer/layoutNavbar.module.css";
import logo from "../../../../assets/talenthirelogo.png";
import navbarStyles from "../main/navbar.module.css";

const Navbar = ({ children }) => {
  const router = useRouter();

  const handleRoute = (url) => {
    router.push(`/components/${url}`);
  };
  return (
    <nav>
      <div className= {navbarStyles.mainBlock}>
        <Link href="/">
          <Image className = {navbarStyles.imageStyling} width={300} src={logo} alt="logo" />
        </Link>
        <ul className={navbarStyles.lists}>
          <li>
            <span
              onClick={() => handleRoute("employer/logIn")}
            >
              LOGIN AS EMPLOYER
            </span>
          </li>
          <li>
            <span
              onClick={() => handleRoute("applicants/login")}
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
