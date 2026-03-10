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
      <button onClick={handleClick}>
        Change Playlist
      </button>
    </>
  )
}

export default AboutMe
