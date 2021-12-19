import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TreePage from './pages/TreePage';

function App() {
  const [number, setNumber] = useState();
  const [mode, setMode] = useState();
  const changeNumber = (number) => {
    setNumber({
      number: number
    });
    setMode('TREE');
  }
  const removeRow = () => {
    setNumber({
      number: number--
    })
  }
  const backHome = () => {
    setMode('HOME');
  }

  console.log(number);
  console.log(mode);
  return (
    <>
      <Header />
      {mode == 'TREE' ? (<TreePage number={number} onClick={backHome} />) :
        (<HomePage changeNumber={changeNumber} />)}
    </>
  );
}

export default App;
