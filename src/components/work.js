import React from 'react';
import DataSection from './dataSection';
import InfoSection from './infoSection';

const Work = (props) => {
  return (
    <div className = 'workSection'>
      <DataSection
        workSection = { props.workSection }
      />
      <InfoSection 
        setInfoWindowTextClasslist = { props.setInfoWindowTextClasslist }
      />
    </div>
  );
}

export default Work;