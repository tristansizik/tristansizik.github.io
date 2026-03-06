import './App.css';
import jsonData from '../playlistexample.json';
import { useState } from 'react'

var srcUrl = `${jsonData.external_urls.spotify}`;

var addEmbed = srcUrl.slice(0, srcUrl.indexOf("/playlist")) + "/embed" + srcUrl.slice(srcUrl.indexOf("/playlist"), srcUrl.length);

function AboutMe() {
  const [url, setUrl] = useState(addEmbed);

  function handleClick() {
    srcUrl = `${jsonData.external_urls.spotify2}`;
    addEmbed = srcUrl.slice(0, srcUrl.indexOf("/playlist")) + "/embed" + srcUrl.slice(srcUrl.indexOf("/playlist"), srcUrl.length);

    setUrl(addEmbed);
    {console.log(url)}
  }

  return (
    <>
      <div className="card">
        <div className="photo">
          <p> Im gonna be a picture soon</p>
        </div>
        <div className="description">
          <h1>About Me</h1>
          <p>Hi, I'm Tristan! A full time engineer who likes to play around with
          different hobbies. I love to learn. It's so frustrating, and also so 
          rewarding. My current hobbies include, but aren't limited to: learning React, 
          learning Spanish, spreading the good word of Dune: Uprising, and making
          music! 
          </p>
        </div>
      <iframe data-testid="embed-iframe" 
      style={{borderRadius: '12px'}} 
      key={url}
      src={url}
      width="100%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>
      </div>
      <button onClick={handleClick}>
        Change Playlist
      </button>
    </>
      
  )
}

export default AboutMe
