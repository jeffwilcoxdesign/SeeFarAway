/* eslint-disable no-useless-constructor */
import React from 'react';
import compassBg from './img/compass_design_2.png';
//import './App.css';

class Compass extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(props) {

    return (
      <div className="Compass">
          {console.log('Compass props: ',this.props)}
          
          <img src={compassBg} alt="compass background" />
      </div>
    );
  }
}

export default Compass;
