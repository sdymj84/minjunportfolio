import React, { useState } from "react";
import ProjectKnobs from "./projectKnobs/ProjectKnobs";
import styles from "./ProjectBody.module.scss";
import FeatureSwitches from "./featureSwitches/FeatureSwitches";
import ProjectContent from "./projectContent/ProjectContent";
import { projects, features } from "../data/data";

const ProjectBody = () => {
  const [enabledId, setEnabledId] = useState(null);
  const [selected, setSelected] = useState(null);
  const handleClick = (id) => {
    setEnabledId((prev) => (id === prev ? null : id));
    setSelected((prev) =>
      id === prev?.id
        ? null
        : [...projects, ...features].find((p) => p.id === id)
    );
  };

  const commonProps = {
    enabledId,
    handleClick,
  };
  return (
    <div className={styles.container}>
      <div className={styles.switches}>
        <ProjectKnobs {...commonProps} projects={projects} />
        <FeatureSwitches {...commonProps} features={features} />
      </div>
      <ProjectContent project={selected} />
    </div>
  );
};

export default ProjectBody;
