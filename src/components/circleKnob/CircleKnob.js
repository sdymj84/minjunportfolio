import React from "react";
import styles from "./CircleKnob.module.scss";

const CircleKnob = (props) => {
  const { id, isEnabled, handleClick } = props;

  return (
    <div className={styles.container}>
      <div className={styles.graduation_off} />
      <div className={styles.graduation_on} />
      <div
        className={`${styles.circle_knob} ${isEnabled && styles.active}`}
        onClick={() => handleClick(id)}
      >
        <div className={styles.lever}></div>
      </div>
    </div>
  );
};

export default CircleKnob;
