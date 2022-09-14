import logo from './logo.svg';
import './App.css';
import Room from './Room';


function App(props) {
  return <div >Hi from App.js Parent component {props.name} and age {props.age}
    <div >Hi from App.js Child component</div>
    <div><Room></Room></div>
  </div>
}

export default App;
