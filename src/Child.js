import React, { useContext } from 'react';
import logo from './logo.svg';
import ValueContext from './ValueContext';


function Child(props) {
  let value = useContext(ValueContext)
  let updateValue = value[1];
  return (
  <div >
    Child number: {props.num}<br/>
    from Child.js using ValueContext: {value[0]} <br/>
    <button onClick={()=>{updateValue(++value[0]) }}>Update Value</button>
  </div>
);
  }

export default Child;
