import './App.css';
import jsonData from '../playlistexample.json';

// var srcUrl = `${jsonData.external_urls.spotify}`;

// var addEmbed = srcUrl.slice(0, srcUrl.indexOf("/playlist")) + "/embed" + srcUrl.slice(srcUrl.indexOf("/playlist"), srcUrl.length);


// https://open.spotify.com/embed/playlist/6x5vz9JnYBZi4p6vL22ljh?utm_source=generator
// https://open.spotify.com/embed/playlist/42ANCvPObJwPIm8TGwHjNI?utm_source=generator

var embedVar = <iframe data-testid="embed-iframe" 
      style={{borderRadius: '12px'}} 
      // src={addEmbed}
      src="https://open.spotify.com/embed/playlist/6x5vz9JnYBZi4p6vL22ljh?utm_source=generator"
      width="100%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe>;

function AboutMe() {
  // const [url, setUrl] = useState("https://open.spotify.com/embed/playlist/6x5vz9JnYBZi4p6vL22ljh?utm_source=generator");

  // function handleClick() {
  //   srcUrl = `${jsonData.external_urls.spotify2}`;
  //   setUrl("https://open.spotify.com/embed/playlist/42ANCvPObJwPIm8TGwHjNI?utm_source=generator");
  // // {console.log(addEmbed)}
  // //   embedVar = <iframe data-testid="embed-iframe" 
  // //     style={{borderRadius: '12px'}} 
  // //     src="https://open.spotify.com/embed/playlist/42ANCvPObJwPIm8TGwHjNI?utm_source=generator"
  // //     width="100%" 
  // //     height="352" 
  // //     frameBorder="0" 
  // //     allowFullScreen="" 
  // //     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  // //     // loading="lazy"
  // //     >

  //     // </iframe>;
  // }

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
        {embedVar}
      {/* <iframe data-testid="embed-iframe" 
      style={{borderRadius: '12px'}} 
      key={url}
      src={url}
      width="100%" 
      height="352" 
      frameBorder="0" 
      allowFullScreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"></iframe> */}
      </div>
      {/* <button onClick={handleClick}>
        Change Playlist
      </button> */}
      {/* {console.log(jsonData.external_urls.spotify)} */}
      {/* {console.log(addEmbed)} */}
    </>
      
  )
}

export default AboutMe
