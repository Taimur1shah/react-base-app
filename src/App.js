import logo from './logo.svg';
import './App.css';


function App(props) {
  return <div >Hi from App.js Parent component {props.name} and age {props.age}
    <div >Hi from App.js Child component</div>
  </div>
}

export default App;
