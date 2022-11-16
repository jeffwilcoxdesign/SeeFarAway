/* eslint-disable no-useless-constructor */
import React from 'react';
import arrowMrk from './img/arrow_marker.png';
import compassBg from './img/compass_design_2.png';
import circleImg from './img/circle_big.png';
import './Compass.css';

class Compass extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(props) {

    return (
      <div className="Compass">
          {/*console.log('Compass props: ',this.props)*/}
          {console.log('Compass alpha: ',this.props.alpha)}



          <img src={arrowMrk} className="Compass-asset" alt="arrow mark" />
          <img src={compassBg} className="Compass-asset" alt="compass background" style={{rotate:this.props.alpha+'deg'}} />
          <img src={circleImg} className="Compass-asset" alt="circle" />
      </div>
    );
  }
}

export default Compass;
