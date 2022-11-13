/* eslint-disable no-useless-constructor */
import React from 'react';
import logo from './logo.svg';
//import './App.css';

class Compass extends React.Component {
  constructor(props) {
    super(props);
    console.log('Compass props: ',props);
  }

  render(props) {
  
    return (
      <div className="Compass">
          {'hello compass props: '+this.props.toString()}
          <img src={logo} alt="logo" />
      </div>
    );
  }
}

export default Compass;
