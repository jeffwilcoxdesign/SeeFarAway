import React from 'react';
import logo from './logo.svg';
import './App.css';
import {setupGyro} from "./gyro/class.js";
import $ from 'jquery';
import {debounce} from 'jquery';
import Compass from "./Compass.js";

/*
const API_KEY = '123';
const UUID = 'a19bd368-5bfa-4a64-9aa6-a88ef8c2e135';
const ROOT_URL = 'https://api.faraway.cam/v1/';
const CORS_PROXY_URL_PREFIX = 'https://api.codetabs.com/v1/proxy/?quest=';
*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.myButtonRef = React.createRef();

    this.state = {
      photourlhi: logo,
      gyro: {},
      initalized: false,
    };
  }

  componentDidMount() {
    fetch('https://api.codetabs.com/v1/proxy/?quest=https://api.faraway.cam/v1/uuid/'+this.getUuidFromUrl()+'?API_KEY=123')
    .then((response) => response.json())
    .then((responseJson) => {
      
      this.setState({
        photourlhi: responseJson.photourlhi,
        gyro: {},
        initalized: false,
      });

      // create setupGyro instance for requesting permission to device event data
      new setupGyro(this.myButtonRef.current, this.dataHandler.bind(this));

      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getUuidFromUrl() {
    if (window.location.search.charAt(0) === '?'){
      return window.location.search.substring(1);
    }else{
      return 'a19bd368-5bfa-4a64-9aa6-a88ef8c2e135';
    }
  }

  dataHandler(event) {
    const { alpha, beta, gamma } = event.rotationRate;
    //console.log(event);// yo data!!!

    // re-render child component as gyro state data changes every 300ms
    //debounce(300, function(e) {
      this.setState({
        gyro: { alpha, beta, gamma },
        photourlhi: this.state.photourlhi,
        initalized: true,
      });
    //});
    
  }

  render() {
    function initHandler(e){
      // hanle ui click response
      this.setState({
        gyro: {},
        photourlhi: this.state.photourlhi,
        initalized: true,
      });
    }
  
    return (
      <div className="App">
        <header className="App-header">

          {(this.state.photourlhi !== logo && this.state.initalized === false) 
          ? <button type="button" ref={this.myButtonRef} onClick={initHandler.bind(this)} >
              You recieved a SeeFarAway vision.<br/>Tap here to view.
            </button> 
          : <></>}

          {console.log('this.state.gyro: ',this.state.gyro)}
          <Compass {...this.state} />

          <img src={this.state.photourlhi} 
            className={(this.state.photourlhi === logo) ? "App-logo" : "App-view"} 
            alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
