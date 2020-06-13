import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import React, { useState, useEffect,useReducer } from "react";
import valueContext from './valueContext';

// Sending down value through paretn to child, canot be sent directly to child

function App() {
  //let [number, setNumber] = useState(45);
  let value =useState(45);
  return (
    <valueContext.Provider value={value}>
      <div>
      Hello World
      <Parent></Parent>
      
     {/* <Parent num={number}></Parent> */}
      {/*<button onClick={() => {setNumber(++number)}}>Update Numer</button>)*/}
      
    </div>


    </valueContext.Provider>
    
  );
}

export default App;
