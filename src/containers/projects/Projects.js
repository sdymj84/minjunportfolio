import React from "react";
import OceanWave from "../../components/oceanWave/OceanWave";
import HeaderTitle from "./HeaderTitle";
import ProjectBody from "./projectBody/ProjectBody";

const Projects = () => {
  return (
    <div className="page_container">
      <HeaderTitle />
      <OceanWave />
      <ProjectBody />
    </div>
  );
};

export default Projects;
