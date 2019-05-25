import React from "react";
import BreakAlert from "./components/BreakAlert";
import { Wall } from "./components/Wall.js";
import MemeGenerator from "./MemeGenerator";

function App() {
  return (
    <div className="App">
      <BreakAlert />
      <Wall />
      <MemeGenerator />
    </div>
  );
}

export default App;
