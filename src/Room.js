import logo from './logo.svg';
import { useState } from 'react';



function Room() {
    let [isLit,setLit] = useState(false);
    let [age ,setAge] = useState(23);

    function updateLit(){
      console.log("Toggle Light Button Clicked")
      setLit(!isLit)
    }

    const updateAge = () =>{
      console.log("Age Increase Button Clicked")
      setAge(++age)
    }

  
  return <div>This room is {isLit ? "Lighhtened" : "dark"} <br/>age is {age}
  <br/>
  <br/>
 
  <br/>
  <button onClick={updateLit}>Toggle Light</button>  <br/>
  <button onClick={updateAge}>Increase Age</button>  <br/>
  <button onClick={() =>{
      console.log("Decrease age Button Clicked")
      setAge(--age)
    }}>Decrease Age</button>  <br/>
   </div>
}



export default Room;