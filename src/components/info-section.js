import React from 'react';

const InfoSection = (props) => {
  return (
    <div className = 'infoSection'>
      <button className = 'infoButton' onClick = { () => props.setInfoWindowTextClasslist( 'infoWindow active' )}>
        <h3>i</h3>
      </button>
      <div className = 'infoText'>
        <p>Выберите цвет свечения</p>
      </div>
    </div>
  );
}

export default InfoSection;