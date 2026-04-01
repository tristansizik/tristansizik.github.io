import './App.css';
import jsonData from '../playlistexample.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { CurlUtilities } from './CurlUtilities';

// const express = require('express');

var srcUrl = `${jsonData.external_urls.spotify}`;

var addEmbed = srcUrl.slice(0, srcUrl.indexOf("/playlist")) + "/embed" + srcUrl.slice(srcUrl.indexOf("/playlist"), srcUrl.length);

var urlArray = [];

function AboutMe() {
  const [url, setUrl] = useState(addEmbed);
  const [urlIndex, setURLIndex] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(true);

  // useEffect(() => {
  //   // populateUrlArray();
  //   // setIsAuthorized(localStorage.getItem('is_authorized'));
  //   // const boolVal = false;
  //   // window.localStorage.setItem('is_authorized', boolVal);
  //   curlRequestAccessToken();
  //   curlGetPlaylists();
  // }, []); // The empty array ensures this effect runs only once on mount


  function nextClick() {
    if (urlArray.length == 0) {
      curlRequestAccessToken();
      curlGetPlaylists();
    } else {
      if (urlIndex == urlArray.length - 1) {
        setURLIndex(0);
      } else {
        setURLIndex(urlIndex + 1);
      }
      srcUrl = urlArray[urlIndex];
      addEmbed = formatURL(srcUrl);

      setUrl(addEmbed);
      { console.log(url) }
    }
  }

  function backClick() {
    if( urlArray.length == 0 ) {
      curlRequestAccessToken();
      curlGetPlaylists();
    } else {
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
  }

  async function curlAuthorizeUser() {

    const generateRandomString = (length) => {
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const values = crypto.getRandomValues(new Uint8Array(length));
      return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    }
    const codeVerifier = generateRandomString(64);
    const sha256 = async (plain) => {
      const encoder = new TextEncoder()
      const data = encoder.encode(plain)
      return window.crypto.subtle.digest('SHA-256', data)
    }
    const base64encode = (input) => {
      return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    }
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    const clientId = '9b5356f0c64141f685a85ad3aa78936e';
    const redirectUri = 'http://127.0.0.1:5173';

    const scope = 'playlist-read-private';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    // generated in the previous step
    const boolVal = true;
    window.localStorage.setItem('code_verifier', codeVerifier);
    // window.localStorage.setItem('is_authorized', boolVal);

    const params = {
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
    
  }

  async function curlRequestAccessToken() {
    console.log("I'm in curlRequestAccessToken");
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    // stored in the previous step
    const codeVerifier = localStorage.getItem('code_verifier');
    const redirectUri = 'http://127.0.0.1:5173';
    const clientId = '9b5356f0c64141f685a85ad3aa78936e';

    const url = "https://accounts.spotify.com/api/token";
    const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    localStorage.setItem('access_token', response.access_token);
  }

  async function curlGetPlaylists() {
    console.log("I'm in curlGetPlaylists");
    console.log(`Access Token: ${localStorage.getItem("access_token")}`);

    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
      'Authorization': `Bearer  ${localStorage.getItem("access_token")}`
      }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      populateArray(data);
  }

  function populateArray(jsonData) {

    jsonData.items.forEach(item => {
      console.log(item.name);
      if(item.name.includes("TM")) {
        urlArray.push(item.external_urls.spotify);
      }
    });
    console.log(urlArray[3]);
  }
  

  

  function formatURL(url) {
    console.log("Formatting URL:", url);
    return url.slice(0, url.indexOf("/playlist")) + "/embed" + url.slice(url.indexOf("/playlist"), url.length);
  }

//   function populateUrlArray() {
//     console.log("Entered populateUrlArray function");

//   Object.keys(jsonData.external_urls).forEach(key => {
//     console.log(`Key: ${key}, Value: ${jsonData.external_urls[key]}`);
//     urlArray.push(jsonData.external_urls[key])
//   });
  
// }

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
      {isAuthorized && (<button onClick={backClick}>
        Previous Playlist
      </button>)}
      {isAuthorized && (<button onClick={nextClick}>
        Next Playlist
      </button>)}
      {/* <button onClick={CurlUtilities.curlRequestAccessToken}> */}
      {/* <button onClick={curlRequestAccessToken}>
        Get Access Token
      </button>
      <button onClick={curlGetPlaylists}>
        GetPlaylists
      </button> */}
      {/* <button onClick={CurlUtilities.curlAuthorizeUser}> */}
      {isAuthorized && (<button onClick={curlAuthorizeUser}>
        Authorize user button
      </button>)}
      
    </>
  )
}

export default AboutMe
