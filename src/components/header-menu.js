import React, { useState } from 'react';

const HeaderMenu = (props) => {

  const [ classList, setClassList ] = useState('headerMenu');
  
  const revertClassList = () => {
    setClassList(classList === 'headerMenu' ? 'headerMenu headerMenuActive' : 'headerMenu');
    props.setHeaderMenuClassList(props.headerMenuClassList === 'headerMenuList' ? 'headerMenuList headerMenuListActive' : 'headerMenuList');
  };
  
  return (
    <div className = { classList } onClick={() => revertClassList()}></div>
  );
}

export default HeaderMenu;