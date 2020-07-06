import React from 'react';
import DataSection from './data-section';
import InfoSection from './info-section';
import LightsConstructorSection from './lights-constructor-section';

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