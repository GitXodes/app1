import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";

// (() => alert("APP Loaded..."))();
// window.onload = () => {
//   document.querySelector(".foot").style.transform = "rotate(360deg)";
// }
function App() {
  const [rotation, SetRotationState] = useState(0);

  function counter () {
    console.log("counter");
  }

  function twister() {
    // document.querySelector(".foot").classList.toggle("rotated") //.style.transform = "rotate(360deg)";
    SetRotationState(rotation + 360);
  }
  counter();

  return (
    <div className="App">

      <Header/>
      <div className="App-header">
        <Button className="button_class" name="Click it !!!" border='4px solid blue'/>
        <Button name="Don't Click it !" border='2px solid blue'/>
        <Button twister={twister} name="Twist it !" border='2px solid teal' fontSize='20px'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <Footer rotation={rotation}/>
    </div>
  );
}

export default App;
