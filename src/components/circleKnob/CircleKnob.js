import React from "react";
import styles from "./CircleKnob.module.scss";

const CircleKnob = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div>
      <div className={styles.graduation_off} />
      <div className={styles.graduation_on} />
      <div
        className={`${styles.circle_knob} ${enabled && styles.active}`}
        onClick={() => setEnabled((prev) => !prev)}
      >
        <div className={styles.lever}></div>
      </div>
    </div>
  );
};

export default CircleKnob;
