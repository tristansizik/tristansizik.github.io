import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';

var updateMe = "I'm Default";


function App() {
  const [count, setCount] = useState(0)
  const [generateBool, setGenerateBool] = useState("state1")

  function ExampleOfDOMGen() {
    console.log(generateBool);
    if (generateBool === "state1") {
      setGenerateBool("state2");
      updateMe = <p className="newP">Hi</p>;
    } 
    else if ( generateBool === "state2") {
      setGenerateBool("state3");
      updateMe = <p className="newP2">I'm a p dom</p>;
    }
    else if ( generateBool === "state3") {
      setGenerateBool("state1");
      updateMe = <p className="newP3">And I'm in state 3</p>;
    }
  }

  return (
    <>
      <header>
        <h1>I'm a header</h1>
      </header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button onClick={ExampleOfDOMGen}>
          Click Me To Toggle More DOMs
        </button>
      </div>

      {updateMe}
      
      <footer>
        <h1>
        I'm a footer</h1>
      </footer>
    </>
  )
}

export default App
