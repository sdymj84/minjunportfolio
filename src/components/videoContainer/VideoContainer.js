import React from "react";
import styles from "./VideoContainer.module.scss";

const VideoContainer = (props) => {
  const { project } = props;
  return (
    <div className={styles.container}>
      <iframe
        width="560"
        height="315"
        title="jellytree"
        src={project?.src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
