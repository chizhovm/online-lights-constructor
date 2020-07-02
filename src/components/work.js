import React from 'react';
import DataSection from './dataSection';
import InfoSection from './infoSection';
import LightsConstructorSection from './lightsConstructorSection';

const Work = (props) => {
  return (
    <div className = 'workSection'>
      <DataSection
        workSection = { props.workSection }
      />
      <InfoSection 
        setInfoWindowTextClasslist = { props.setInfoWindowTextClasslist }
      />
      <LightsConstructorSection 
      lightsTypes = { props.lightsTypes } 
      lightsTypeHandler = { props.lightsTypeHandler }
      />
    </div>
  );
}

export default Work;