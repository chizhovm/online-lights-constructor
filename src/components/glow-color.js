import React, {useState} from 'react';
import Slider from './slider';
import Work from './work';
import InfoWindowText from '../textResourse/info-window-text';

const glowColorState = {
  infoWindowText: {
    classlist: 'infoWindow hidden'
  }
}

const returnButton = '< Вернуться';


const GlowColor = (props) => {

  const [ infoWindowTextClasslist, setInfoWindowTextClasslist ] = useState(glowColorState.infoWindowText.classlist);

  return (
    <div className = 'constructorItem'>
      <Slider 
        lightsTypes = { props.lightsTypes }
      />
      <Work
        workSection = { props.workSection }
        setInfoWindowTextClasslist = { setInfoWindowTextClasslist }
        lightsTypes = { props.lightsTypes } 
        lightsTypeHandler = { props.lightsTypeHandler }
      />
      <div className = { infoWindowTextClasslist } >
        <button className = 'returnButton' onClick = {() => setInfoWindowTextClasslist('infoWindow hidden')}>{ returnButton }</button>
        <InfoWindowText />
      </div>
    </div>
  );
}

export default GlowColor;