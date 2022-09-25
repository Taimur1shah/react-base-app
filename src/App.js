import logo from './logo.svg';
import './App.css';
import Room from './Room';
import Parent from './Parent';
import { useState } from 'react';
import ValueContext from './ValueContext';


  function App(props){
    let[number,setNumber] = useState(45)  
  let value = 81;
  
  return (
  <ValueContext.Provider value = {value}>
  
    <div>Hello World from App.Js Hi from App.js Parent component: {props.name} and age {props.age}
        <div><Parent num={number}></Parent></div>
    <button onClick={()=>{setNumber(++number)}}>Update Number</button>
    </div>
  </ValueContext.Provider>
  );
  }

export default App;
