import logo from './logo.svg';
import Child from './Child'


function Parent(props) {
  return <div > Parent from Parent.js
    <Child num={props.num}></Child>
  </div>
}

export default Parent;
