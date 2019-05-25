import React from 'react';
import MemeGenerator from './MemeGenerator.js';
import { Wall } from './components/Wall.js'

function App() {
  return (
    <div className="App">
      <Wall></Wall>
      <MemeGenerator/>
    </div>
  );
}

export default App;
