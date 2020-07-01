import React, { useState } from 'react';

const Footer = (props) => {

  const li = props.footerLinkArray.map((el, index) => {
    return (
      <li key={ el.itemName } className = { el.classlist } onClick = { () => props.footerMenuHandler(props.footerLinkArray, index) }>
        <p>{ el.itemName }</p>
      </li>
    );
  });

  return <div className = 'App-footer'>
    <ul className = 'footerList'>
      { li }
    </ul>
  </div>  
}

export default Footer;