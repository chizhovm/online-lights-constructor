import React from 'react';

const LightsConstructorSection = (props) => {

  const lightsTypes = props.lightsTypes.map((el, index) => {
    const checkboxClasslist = el.checked ? 'lightsTypesCheckbox' : 'lightsTypesCheckbox lightsTypesCheckboxHidden';
    return <div className = 'lightsTypes' key = { el.type } onClick = { () => props.lightsTypeHandler(props.lightsTypes, index) } >
      <div className = { checkboxClasslist }>
        <p>✓</p>
      </div>
      <div className = 'lightsTypesName'>
        <p>{ el.type }</p>
      </div>
    </div>;
  });

  return (
    <div className = 'lightsConstructorSection'>
      {lightsTypes}
    </div>
  );
}

export default LightsConstructorSection;