import React from "react";
import styles from "./ProjectKnobs.module.scss";
import CircleKnob from "../../../../components/circleKnob/CircleKnob";

const ProjectKnobs = (props) => {
  const { projects, ...rest } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>PROJECTS</div>
      <div className={styles.knobs}>
        {projects.map((project) => (
          <CircleKnob
            key={project.id}
            id={project.id}
            isEnabled={project.id === rest.enabledId}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectKnobs;
