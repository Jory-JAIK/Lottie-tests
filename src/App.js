import React, { useState } from "react";
import Graph from "./components/Graph";
import DiamondAnimation from "./components/DiamondAnimation";
import SettingsBar from "./components/SettingsBar";
import Check from "./components/Check";

import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="container">
        <span>
          <Graph />
        </span>
        <span>
          <SettingsBar />
        </span>
        <span>
          <DiamondAnimation />
        </span>
      </div>
      <div className="checkContainer">
        <button onClick={() => setChecked(true)}>Click me to Check!</button>
      </div>
      {checked && (
        <div className="check">
          <Check />
        </div>
      )}
    </>
  );
}

export default App;
