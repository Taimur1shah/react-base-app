import logo from './logo.svg';
import './App.css';
import Room from './Room';
import Parent from './Parent';
import { useState } from 'react';


function App(props) {
   let[number,setNumber] = useState(45)

  return <div >Hi from App.js Parent component {props.name} and age {props.age}
    <div >Hi from App.js Child component</div>
    <div><Room></Room></div>
    <div><Parent num={number}></Parent></div>
    <button onClick={()=>{setNumber(++number)}}>Update Number</button>
  </div>
}

export default App;
