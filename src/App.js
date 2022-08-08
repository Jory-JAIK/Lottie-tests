import React, { useState } from "react";
import { DiamondAnimation } from "./components/DiamondAnimation/DiamondAnimation";
import "./app.css";

function App() {
  const [isStopped, setIsStopped] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div className="container">
      <span className="animation">
        <DiamondAnimation isPaused={isPaused} isStopped={isStopped} />
      </span>
      <span className="buttons">
        <button onClick={() => setIsStopped(true)}>Stop</button>
        <button onClick={() => setIsStopped(false)}>Play</button>
        <button onClick={() => setIsPaused(!isPaused)}>Pause</button>
      </span>
    </div>
  );
}

export default App;
