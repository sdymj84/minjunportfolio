import React from "react";
import styles from "./SquareSwitch.module.scss";

const SquareSwitch = (props) => {
  const { id, isEnabled, handleClick } = props;
  return (
    <div className={styles.container}>
      <div
        className={`${styles.square_switch} ${isEnabled && styles.active}`}
        onClick={() => handleClick(id)}
      ></div>
    </div>
  );
};

export default SquareSwitch;
