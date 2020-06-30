import React from 'react';
import Logo from './logo';
import Basket from './basket';
import HeaderMenu from './header-menu';

const Header = (props) => {
  return (
    <div className = 'App-header'>
      <Logo />
      <Basket
      itemsInTheBasket = { props.itemsInTheBasket }
      />
      <HeaderMenu />
    </div>
  );
}

export default Header;