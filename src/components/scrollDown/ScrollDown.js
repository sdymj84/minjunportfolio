import React from "react";
import styles from "./ScrollDown.module.scss";

const ScrollDown = (props) => {
  const { style } = props;
  return (
    <div style={style} className={styles.scroll_button}>
      <div className={styles.arrow}></div>
      <div className={styles.arrow2}></div>
    </div>
  );
};

export default ScrollDown;
