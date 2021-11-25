import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
/*
const API_KEY = '123';
const UUID = 'a19bd368-5bfa-4a64-9aa6-a88ef8c2e135';
const ROOT_URL = 'https://api.faraway.cam/v1/';
const CORS_PROXY_URL_PREFIX = 'https://api.codetabs.com/v1/proxy/?quest=';
*/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photourlhi: logo
    };
  }

  componentDidMount() {
    fetch('https://api.codetabs.com/v1/proxy/?quest=https://api.faraway.cam/v1/uuid/'+this.getUuidFromUrl()+'?API_KEY=123')
    .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        photourlhi: responseJson.photourlhi,
      });

      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getUuidFromUrl(){
    if (window.location.search.charAt(0) === '?'){
      return window.location.search.substring(1);
    }else{
      return 'a19bd368-5bfa-4a64-9aa6-a88ef8c2e135';
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.photourlhi} 
            className={(this.state.photourlhi === logo) ? "App-logo" : "App-view"} 
            alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
