import React from "react";
import styles from "./OceanWave.module.css";

const OceanWave = () => {
  return (
    <div className={styles.ocean}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  );
};

export default OceanWave;
