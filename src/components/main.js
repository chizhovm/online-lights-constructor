import React from 'react';

const Main = (props) => {

  const li = props.headerLinkArray.map((el) => {
    return (
      <li key={el} className = 'headerMenuListItem'>
        <p>{ el }</p>
      </li> 
    );
  });

  console.log(props.activeConstructorItem)

  return <div className ='App-main'>
 
    <ul className = { props.headerMenuClassList }>
      { li }
    </ul>

    <props.activeConstructorItem
      workSection = { props.workSection }
      lightsTypes = { props.lightsTypes }
      lightsTypeHandler = { props.lightsTypeHandler }
    />
  </div>
};

export default Main;