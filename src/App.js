import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

const API_KEY = '123';
const UUID = 'a19bd368-5bfa-4a64-9aa6-a88ef8c2e135';
const ROOT_URL = 'https://api.faraway.cam/v1/';
const CORS_PROXY_URL_PREFIX = 'https://api.codetabs.com/v1/proxy/?quest=';



const JSON_DATA = grabJsonFromApiAsync();
// need to add a promise for handling photo url loading...

//console.log(JSON_DATA.photourl);



function App() {
  return (
    <div className="App">
      <header className="App-header">
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

function grabJsonFromApiAsync() {
  return fetch('https://api.codetabs.com/v1/proxy/?quest=https://api.faraway.cam/v1/uuid/a19bd368-5bfa-4a64-9aa6-a88ef8c2e135?API_KEY=123')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);// lets look...
    console.log(responseJson.photourlhi);
/*
    // time to start preloading the image data...
    //photourl
    this.setState({
      content: responseJson.photourlhi,
    });
*/
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

export default App;
