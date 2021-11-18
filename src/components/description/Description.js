import React from 'react'
import styles from "./Description.module.scss";

const Description = (props) => {
  const { project } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{project?.title}</div>
      <div className={styles.timeframe}>{project?.timeframe}</div>
      <ul className={styles.bulletpoints}>
        {project?.bulletpoints?.map((bp, i) => (
          <li key={i}>{bp}</li>
        ))}
      </ul>
    </div>
  )
}

export default Description
