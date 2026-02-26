import { useState } from 'react'
import './App.css';
import Home from './Home.jsx';
import MyBlogPage from './MyBlogPage.jsx';

function App() {
  const [homeBool, setHomeBool] = useState(false);

  function handleHomeClick() {
    
    if(homeBool === false) {
      setHomeBool(true);
      console.log("entered false if condition");
    } else if (homeBool === true){
      setHomeBool(false);
      console.log("entered true if condition");
    }
    
  }

  return (
    <>
      <header>
        <h1>I'm a Header Header Header</h1>
        <div className="navdiv">
          <nav className="navbar">
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleHomeClick}>About Me</button>
            <button>Blog</button>
          </nav>
          <div className="">
            <button>Blog</button>
          </div>
        </div>
      </header>

      {homeBool && <Home />}
      {!homeBool && <MyBlogPage/>}

      <footer>
        <h1>
          I'm a footer
        </h1>
      </footer>
    </>
  )
}

export default App
