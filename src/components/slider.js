import React, { useState } from 'react';

const Slider = (props) => {

  const image = props.lightsTypes.find((el) => {
    return el.checked === true;
  });

  const [ activePicture, setActivePicture ] = useState(0); 

  const picturesHandler = (itemIndex) => {
    setActivePicture(itemIndex);
  };

  const sliderNav = new Array(props.lightsTypes[0].picturesArray.length).fill(0).map(
    (el, index) => {
      const classlist = (index ===  activePicture) ?  'sliderNavDefault sliderNavActive' : 'sliderNavDefault';
      return (
      <p key = { `sliderNav${index}` } className = {classlist } onClick = {() => picturesHandler(index) }></p>
    )}
  );
 
  return (  
    <div className = 'sliderSection'>
      <div className = 'sliderWrapper'>
        <div className = 'slider'>
          <div className = 'imageWrapper'>
            <img src = { image.picturesArray[activePicture] } alt = { image.type }/>
          </div>
        </div>
      </div>
      <div className = 'sliderNavWrapper'>
        <div className = 'sliderNav'>
          { sliderNav }
        </div>
      </div>
    </div>
  );
}

export default Slider;