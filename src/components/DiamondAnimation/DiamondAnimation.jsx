import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../Lottie/lf20_skp5fcoi.json";

export function DiamondAnimation({ isStopped, isPaused }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie
        options={defaultOptions}
        isPaused={isPaused}
        isStopped={isStopped}
      />
    </>
  );
}
