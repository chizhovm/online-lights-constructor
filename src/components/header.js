import React from 'react';
import Logo from './logo';
import BasketItem from './basket-item';
import HeaderMenu from './header-menu';

const Header = (props) => {
  return (
    <div className = 'App-header'>
      <Logo />
      <BasketItem
        itemsInTheBasket = { props.itemsInTheBasket }
      />
      <HeaderMenu 
        headerMenuClassList = { props.headerMenuClassList }
        setHeaderMenuClassList = { props.setHeaderMenuClassList }
      />
    </div>
  );
}

export default Header;