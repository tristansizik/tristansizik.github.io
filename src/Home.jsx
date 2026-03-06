import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import {Spotify} from 'react-spotify-embed';

var updateMe = "I'm Default";

const States = Object.freeze({
  STATE1: Symbol("state1"),
  STATE2: Symbol("state2"),
  STATE3: Symbol("state3"),
});

function Home() {
  const [count, setCount] = useState(0)
  const [generateBool, setGenerateBool] = useState(States.STATE1);

  function ExampleOfDOMGen() {
    console.log("Entered Example Function");

    if (generateBool === States.STATE1) {
      setGenerateBool(States.STATE2);
      updateMe = <p className="newP">{"Hello There"}</p>;
    }
    else if (generateBool === States.STATE2) {
      setGenerateBool(States.STATE3);
      updateMe = <p className="newP2">{"I'm a p dom"}</p>;
    }
    else if (generateBool === States.STATE3) {
      setGenerateBool(States.STATE1);
      updateMe = <p className="newP3">{"So Long"}</p>;
    }

  }

  return (
    <>
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
      </>
  )
}

export default Home
