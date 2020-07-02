import React, { useState } from 'react';
import Slider from './slider';
import Work from './work';
import InfoWindowText from '../textResourse/infoWindowText'

const mainState = {
  infoWindowText: {
    classlist: 'infoWindow infoWindowHidden'
  }
}

const returnButton = '< Вернуться';

const Main = (props) => {

  const [ infoWindowTextClasslist, setInfoWindowTextClasslist ] = useState(mainState.infoWindowText.classlist);

  const li = props.headerLinkArray.map((el) => {
    return (
      <li key={el} className = 'headerMenuListItem'>
        <p>{ el }</p>
      </li> 
    );
  });

  return <div className ='App-main'>
    <Slider 
      lightsTypes = { props.lightsTypes }
    />
    <Work
      workSection = { props.workSection }
      setInfoWindowTextClasslist = { setInfoWindowTextClasslist }
      lightsTypes = { props.lightsTypes } 
      lightsTypeHandler = { props.lightsTypeHandler }
    />
    <ul className = { props.headerMenuClassList }>
      { li }
    </ul>
    <div className = { infoWindowTextClasslist } >
      <button className = 'returnButton' onClick = {() => setInfoWindowTextClasslist('infoWindow infoWindowHidden')}>{ returnButton }</button>
      <InfoWindowText />
    </div>
  </div>
};

export default Main;