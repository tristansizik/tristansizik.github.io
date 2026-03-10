import { useState } from 'react'
import './App.css';
import Home from './Home.jsx';
import Blog from './Blog.jsx';
import AboutMe from './AboutMe.jsx';
import Playlists from './Playlists.jsx';
import { SocialIcon } from 'react-social-icons'


const Pages = Object.freeze({
  HOME: Symbol("home"),
  ABOUTME: Symbol("aboutme"),
  BLOG: Symbol("blog"),
  PLAYLISTS: Symbol("playlists"),
});



function App() {
  const [homeBool, setHomeBool] = useState(Pages.HOME);
  
  function handleHomeClick() {
      setHomeBool(Pages.HOME);
      console.log("Entered Home function");
  }
  function handleAboutMeClick() {
      setHomeBool(Pages.ABOUTME);
      console.log("Entered About Me function");
  }
  function handleBlogClick() {
      setHomeBool(Pages.BLOG);
      console.log("Entered Blog case");
  }
  function handlePlaylistClick() {
      setHomeBool(Pages.PLAYLISTS);
      console.log("Entered Playlists case");
  }

  return (
    <>
      <header>
        <div className="navdiv">
          <div className="">
            <button>Blog</button>
          </div>
          <nav className="navbar">
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleAboutMeClick}>About Me</button>
            <button onClick={handleBlogClick}>Blog</button>
            <button onClick={handlePlaylistClick}>Playlists</button>
          </nav>
        </div>
      </header>

      { (homeBool === Pages.HOME)  && (<Home />) }
      { (homeBool === Pages.ABOUTME)  && (<AboutMe />)}
      { (homeBool === Pages.BLOG)  && (<Blog />) }
      { (homeBool === Pages.PLAYLISTS)  && (<Playlists />) }
      
      <footer>
        <div>
          <SocialIcon url="https://www.instagram.com/treee.stone/" bgColor='black'/>
          <SocialIcon url="https://pinterest.com/treeestone" bgColor='black'/>
          <SocialIcon url="https://substack.com/@morecoffeee" bgColor='black'/>
        </div>
      </footer>
    </>
  )
}

export default App
