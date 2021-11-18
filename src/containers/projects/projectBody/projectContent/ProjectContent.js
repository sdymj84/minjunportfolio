import React from "react";
import styles from "./ProjectContent.module.scss";
import Description from "../../../../components/description/Description";
import VideoContainer from "../../../../components/videoContainer/VideoContainer";
import SkillLevels from "../skillLevels/SkillLevels";
import SlideImageContainer from "../../../../components/slideImageContainer/SlideImageContainer";

const ProjectContent = (props) => {
  const { project } = props;

  const renderMedia = () => {
    const types = {
      video: <VideoContainer project={project} />,
      image: <SlideImageContainer project={project} />
    }
    return types[project?.mediaType || "video"];
    // return project?.mediaType ? (
    //   types[project.mediaType]
    // ) : (
    //   <div style={{ width: "100%" }}></div>
    // );
  }
  return (
    <>
      <div
        className={`${styles.content} ${
          project ? styles.visible : styles.hidden
        }`}
      >
        {renderMedia()}
        <Description project={project} />
      </div>
      <SkillLevels project={project} />
    </>
  );
};

export default ProjectContent;
