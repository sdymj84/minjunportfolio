import React from "react";
import SquareSwitch from "../../../../components/squareSwitch/SquareSwitch";
import styles from "./FeatureSwitches.module.scss";

const FeatureSwitches = (props) => {
  const { features, ...rest } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>FEATURES</div>
      <div className={styles.switches}>
        {features.map((feature) => (
          <SquareSwitch
            key={feature.id}
            id={feature.id}
            isEnabled={feature.id === rest.enabledId}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSwitches;
