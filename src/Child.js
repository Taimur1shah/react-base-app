import React, { useContext } from 'react';
import logo from './logo.svg';
import ValueContext from './ValueContext';


function Child(props) {
  let value = useContext(ValueContext)
  return (
  <div >
    from Child.js using ValueContext: {value} <br/>
    Child number: {props.num}
  </div>
);
  }

export default Child;
