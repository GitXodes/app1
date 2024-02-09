import logo from './logo.svg';
import './App.css';
import Button from "./Button";

// (() => alert("APP Loaded..."))();

function App({data_alt, allt}) {
  const a = {data_alt}
  console.log(a)

  function counter () {
    console.log(allt);
  }
  counter();

  return (
    <div className="App">
      <header className="App-header">
        <p> Data : {data_alt}</p>
        <p> Counter:</p>
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
      </header>
    </div>
  );
}

export default App;
