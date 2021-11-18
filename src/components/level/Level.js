import React from "react";
import styles from "./Level.module.scss";
import PropTypes from "prop-types";

const Level = (props) => {
  const { score, title } = props;
  const top = 120 - score * 1.2 + "px";

  return (
    <div className={styles.container} style={{ "--top": top }}>
      <div className={styles.level}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={`${styles.measure}`} />
        <div className={styles.color_gauge} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

Level.propTypes = {
  score: PropTypes.number.isRequired,
};

Level.defaultProps = {
  score: 0,
};

export default Level;
