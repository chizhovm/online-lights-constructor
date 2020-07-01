import React from 'react';

const Main = (props) => {

  const li = props.headerLinkArray.map((el) => {
    return (
      <li key={el} className = 'headerMenuListItem'>
        <p>{ el }</p>
      </li> 
    );
  });

  return <div className ='App-main'>
    <ul className = { props.headerMenuClassList }>
      { li }
    </ul>
  </div>
};

export default Main;