import React from 'react';

const Slider = (props) => {
  console.log(props.lightsTypes)
  const image = props.lightsTypes.find((el) => {
    console.log(el);
    return el.checked === true;
  });
  console.log(image);
  return (
    <div className = 'sliderSection'>
      <img src = { image.picture } alt = { image.type }/>
    </div>
  );
}

export default Slider;