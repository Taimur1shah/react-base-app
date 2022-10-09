import { type } from '@testing-library/user-event/dist/type';
import React, { useContext,useReducer } from 'react';
import numberReducer from './numberReducer';



function Child2() {
  let [state,dispatch] = useReducer(numberReducer,52)

  return (
  <div >
    Child 2 using Reducer {state}
    <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
  </div>
);
  }

export default Child2;
