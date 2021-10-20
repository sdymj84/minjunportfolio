import React from "react";
import styles from "./Navbar.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div>PROJECTS</div>
        <div>ABOUT</div>
        <div>RESUME</div>
      </div>
      <div className={styles.social_contacts}>
        <FaGithub size="1.5em" />
        <FaLinkedin size="1.5em" />
        <MdEmail size="1.5em" />
      </div>
    </div>
  );
};

export default Navbar;
