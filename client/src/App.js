import React, { useState } from "react";
import { Wall } from "./components/Wall.js";
import { Menu, Icon } from "antd";
import MemeGenerator from "./MemeGenerator";
import BreakAlert from "./components/BreakAlert";

function App() {
  const [currentView, setCurrentView] = useState("wall");

  const changeView = event => {
    setCurrentView(event.key);
  };

  return (
    <div className="App">
      <BreakAlert />
      <Menu
        onClick={changeView}
        selectedKeys={[currentView]}
        mode="horizontal"
        style={{ display: "flex" }}
      >
        <Menu.Item key="wall" style={{ width: "50%", textAlign: "center" }}>
          <Icon type="container" />
          Wall
        </Menu.Item>
        <Menu.Item key="memes" style={{ width: "50%", textAlign: "center" }}>
          <Icon type="snippets" />
          Memes
        </Menu.Item>
      </Menu>
      {currentView === "wall" ? <Wall /> : <MemeGenerator />}
    </div>
  );
}

export default App;
