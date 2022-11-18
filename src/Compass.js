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

          { /*console.log('Compass rotationVal: ',this.props.rotationVal)*/ }
          <img src={arrowMrk} className="Compass-asset" alt="arrow mark" style={{ rotate:this.props.trueheading+'deg' }} />
          <img src={compassBg} className="Compass-asset" alt="compass background" style={{ rotate:(this.props.gyro.alpha)+'deg', zIndex:1 }} />
          { /*<img src={compassBg} className="Compass-asset" alt="compass background" style={{ rotate:(this.props.rotationVal/10)+'deg', zIndex:1 }} />*/ }
          <img src={circleImg} className="Compass-asset" alt="circle" />
      </div>
    );
  }
}

export default Compass;
