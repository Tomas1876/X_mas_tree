import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Tree from './pages/Tree';

function App() {
  const [number, setNumber] = useState();
  const [mode, setMode] = useState();
  const changeNumber = (number) => {
    setNumber({
      number: number
    });
    setMode('tree');
  }
  console.log(number);
  console.log(mode);
  return (
    <div className="App">
      <Header />
      {mode == 'tree' ? (<Tree number={number} />) :
        (<Home changeNumber={changeNumber} />)}
    </div>
  );
}

export default App;
