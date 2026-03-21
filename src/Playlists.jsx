import './App.css';
import jsonData from '../playlistexample.json';
import { useState } from 'react';
import { useEffect } from 'react';

var srcUrl = `${jsonData.external_urls.spotify}`;

var addEmbed = srcUrl.slice(0, srcUrl.indexOf("/playlist")) + "/embed" + srcUrl.slice(srcUrl.indexOf("/playlist"), srcUrl.length);

var urlArray = [];

function AboutMe() {
  const [url, setUrl] = useState(addEmbed);
  const [urlIndex, setURLIndex] = useState(0);

  useEffect(() => {
    populateUrlArray();
  }, []); // The empty array ensures this effect runs only once on mount


  function nextClick() {
    if( urlIndex == urlArray.length - 1) {
      setURLIndex(0);
    } else {
      setURLIndex(urlIndex + 1);
    }

    srcUrl = urlArray[urlIndex];
    addEmbed = formatURL(srcUrl);

    setUrl(addEmbed);
    {console.log(url)}
  }

  function backClick() {

    if( urlIndex == 0) {
      setURLIndex(urlArray.length - 1);
    } else {
      setURLIndex(urlIndex - 1);
    }
    srcUrl = urlArray[urlIndex];
    addEmbed = formatURL(srcUrl);

    setUrl(addEmbed);
    {console.log(url)}
  }

  function formatURL(url) {
    console.log("Formatting URL:", url);
    return url.slice(0, url.indexOf("/playlist")) + "/embed" + url.slice(url.indexOf("/playlist"), url.length);
  }

  function populateUrlArray() {
    console.log("Entered populateUrlArray function");

  Object.keys(jsonData.external_urls).forEach(key => {
    console.log(`Key: ${key}, Value: ${jsonData.external_urls[key]}`);
    urlArray.push(jsonData.external_urls[key])
  });
  
}

  return (
    <>
    <h1>MY CRATES</h1>
    <p> Did I mention that I LOVE making playlists? There's so much amazing music out there, I love digging around to find new songs, artists from all over the world, 
      and sharing them with others. It all started with my dad and his massive music collection. He would have an overflowing case in the console of his truck.
      Leather. Worn in. But full of burnt CDs him and his buddies would make for eachother. I would always be grooving to the music he played. So many different genres,
      I was fascinated.
    </p>
      <div className="card">
        
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
      <button onClick={nextClick}>
        Next Playlist
      </button>
      <button onClick={backClick}>
        Previous Playlist
      </button>
      
    </>
  )
}

export default AboutMe
