import React, { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "./lf20_jgu9ymr2.json";

import styles from "./SettingsBar.module.css";

export function SettingsBar() {
  const [isStopped, setIsStopped] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      <span>
        <Lottie
          options={defaultOptions}
          isPaused={isPaused}
          isStopped={isStopped}
        />
      </span>
      <span className={styles.buttons}>
        <button onClick={() => setIsStopped(true)}>Stop</button>
        <button onClick={() => setIsStopped(false)}>Play</button>
        <button onClick={() => setIsPaused(!isPaused)}>Pause/play</button>
      </span>
    </div>
  );
}
