import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Header from "./Header";

// (() => alert("APP Loaded..."))();

function App() {

  function counter () {
    console.log("counter");
  }
  counter();

  return (
    <div className="App">

      <Header/>
      <div className="App-header">
        <Button className="button_class" name="Click it !!!" border='4px solid blue'/>
        <Button name="Don't Click it !" border='2px solid blue'/>
        <Button name={"Fuck it !"} border='2px solid teal' fontSize='20px'/>
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
    </div>
  );
}

export default App;
