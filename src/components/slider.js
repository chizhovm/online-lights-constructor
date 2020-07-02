import React from 'react';

const Slider = (props) => {

  const image = props.lightsTypes.find((el) => {
    return el.checked === true;
  });
 
  return (
    <div className = 'sliderSection'>
      <img src = { image.picture } alt = { image.type }/>
    </div>
  );
}

export default Slider;