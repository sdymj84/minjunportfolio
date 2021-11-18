import React from "react";
import Level from "../../../../components/level/Level";
import styles from "./SkillLevels.module.scss";

const SkillLevels = (props) => {
  const { project } = props;
  return (
    <div
      className={`${styles.container} ${
        project?.skills ? styles.visible : styles.hidden
      }`}
    >
      {project?.skills?.map((skill, i) => (
        <Level key={i} score={skill.score} title={skill.name} />
      ))}
    </div>
  );
};

export default SkillLevels;
