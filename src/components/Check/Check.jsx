import React from "react";
import "@dotlottie/player-component";

//Add use event listener that triggers callback to reset state and whatnot
export function Check({ callback }) {
  return (
    <dotlottie-player
      src="https://assets4.lottiefiles.com/dotlotties/dlf10_umyyp8ip.lottie"
      autoplay
      loop
      style={{ height: "100%", width: "100%" }}
    />
  );
}
