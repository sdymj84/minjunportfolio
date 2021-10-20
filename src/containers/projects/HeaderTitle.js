import React from "react";
import styles from "./Projects.module.css";

const HeaderTitle = () => {
  return (
    <div className={styles.header_title}>
      <div className={styles.header1}>
        <div className={styles.avatar_image}>
          <img src="https://picsum.photos/150" alt="avatar" />
        </div>
        <div className={styles.header_inner_text}>
          <div>
            <span className="font1">Hi,</span>
            <span className="font4">my name is</span>
          </div>
          <div>
            <span className="font1">MINJUN</span>
            <span className="font4">and I'm a</span>
          </div>
          <div>
            <span className="font3">full stack developer</span>
          </div>
        </div>
      </div>
      <div className="font2">Welcome to my portfolio!</div>
    </div>
  );
};

export default HeaderTitle;
