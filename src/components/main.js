import React, { useState } from 'react';
import Slider from './slider';
import Work from './work';
import InfoWindowText from '../textResourse/info-window-text'
import GlowColor from './glow-color';

// const mainState = {
//   infoWindowText: {
//     classlist: 'infoWindow hidden'
//   }
// }

// const returnButton = '< Вернуться';

const Main = (props) => {

  // const [ infoWindowTextClasslist, setInfoWindowTextClasslist ] = useState(mainState.infoWindowText.classlist);

  const li = props.headerLinkArray.map((el) => {
    return (
      <li key={el} className = 'headerMenuListItem'>
        <p>{ el }</p>
      </li> 
    );
  });

  return <div className ='App-main'>
    {/* <Slider 
      lightsTypes = { props.lightsTypes }
    />
    <Work
      workSection = { props.workSection }
      setInfoWindowTextClasslist = { setInfoWindowTextClasslist }
      lightsTypes = { props.lightsTypes } 
    /> */}
    <ul className = { props.headerMenuClassList }>
      { li }
    </ul>
    {/* <div className = { infoWindowTextClasslist } >
      <button className = 'returnButton' onClick = {() => setInfoWindowTextClasslist('infoWindow hidden')}>{ returnButton }</button>
      <InfoWindowText />
    </div> */}

    <GlowColor
      workSection = { props.workSection }
      lightsTypes = { props.lightsTypes }
      lightsTypeHandler = { props.lightsTypeHandler }
      
    />
  </div>
};

export default Main;