import React, { useState } from "react";
import ProjectKnobs from "./projectKnobs/ProjectKnobs";
import styles from "./ProjectBody.module.scss";
import FeatureSwitches from "./featureSwitches/FeatureSwitches";

const projects = [
  {
    id: 1,
    name: "Haystax Platform",
    icon: "",
  },
  {
    id: 2,
    name: "JellyTree",
    icon: "",
  },
  {
    id: 3,
    name: "Apart",
    icon: "",
  },
];

const features = [
  {
    id: 4,
    name: "Mapbox",
    icon: "",
  },
  {
    id: 5,
    name: "Modals",
    icon: "",
  },
  {
    id: 6,
    name: "Graphic",
    icon: "",
  },
];

const ProjectBody = () => {
  const [enabledId, setEnabledId] = useState(null);
  const handleClick = (id) => {
    setEnabledId(prev => id === prev ? null : id);
  };

  const commonProps = {
    enabledId,
    handleClick,
  };
  return (
    <div className={styles.container}>
      <ProjectKnobs {...commonProps} projects={projects} />
      <FeatureSwitches {...commonProps} features={features} />
    </div>
  );
};

export default ProjectBody;
