<<<<<<< HEAD
import React from "react";
import BreakAlert from "./components/BreakAlert";
import { Wall } from "./components/Wall.js";
import MemeGenerator from "./MemeGenerator";
=======
import React, { useState } from 'react';
import { Wall } from './components/Wall.js';
import { Menu, Icon } from 'antd';
import MemeGenerator from './MemeGenerator';
>>>>>>> textarea

function App() {
const [currentView, setCurrentView] = useState('wall');

const changeView = (event) => {
  setCurrentView(event.key);
}

  return (
    <div className="App">
<<<<<<< HEAD
      <BreakAlert />
      <Wall />
      <MemeGenerator />
=======
     <Menu onClick={changeView} selectedKeys={[currentView]} mode="horizontal" style= {{ display: 'flex' }}>
                <Menu.Item key="wall" style={{ width: '20%', minWidth: 150, textAlign: 'center' }}>
                <Icon type="container" />
                    Wall
                </Menu.Item>
                <Menu.Item key="memes" style={{ width: '20%', minWidth: 150, textAlign: 'center' }}>
                <Icon type="snippets" />
                    Memes
                </Menu.Item>
            </Menu>
      {currentView === 'wall' ? <Wall/> : <MemeGenerator/>}
>>>>>>> textarea
    </div>
  );
}

export default App;
