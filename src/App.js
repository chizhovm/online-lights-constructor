import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const userState = {
  itemsInTheBasket: 1,
}

const appState = {
  headerMenuClassList: 'headerMenuList',
  headerLinkArray: [ 'Обучающее видео', 'Оформление заказа', 'Оплата', 'Доставка',
    'Гарантия', 'Возврат', 'Контакты', 'Партнерам'
  ],
  footerLinkArray : [
    {itemName:'Вариант кухни'}, {itemName: 'Размеры'}, {itemName:'Сенсор'}, {itemName:'Питающий кабель'},
    {itemName:'Блок питания'},  {itemName:'Цвет свечения'},  {itemName:'Монтаж'},  {itemName:'Корзина'}
  ].map(el => {
    el.active = false;
    el.selected = false;
    el.classlist = 'footerListItem';
    return el;
  }),
};

const App = () => {
  const [ itemsInTheBasket ] = useState(userState.itemsInTheBasket);
  const [ headerMenuClassList, setHeaderMenuClassList ] = useState(appState.headerMenuClassList);
  const [ headerLinkArray ] = useState(appState.headerLinkArray);
  const [ footerLinkArray, setFooterLinkArray ] = useState(appState.footerLinkArray);

  const footerMenuHandler = (linkArray, itemIndex) => {
    linkArray[itemIndex].selected = true;
    linkArray[itemIndex].classlist = 'footerListItem footerListItemSelected';
    setFooterLinkArray(linkArray.map((el, index) => {
      if (index === itemIndex) {
        el.active = true;
        el.classlist = 'footerListItem footerListItemSelected footerListItemActive';
      } else if(!el.selected) el.classlist = 'footerListItem'
      else {
        el.active = false;
        el.classlist = 'footerListItem footerListItemSelected';
      }
      return el;
    }));
    console.log(footerLinkArray);
  };

  return (
    <div className="App">
      <Header 
        itemsInTheBasket = { itemsInTheBasket }
        headerMenuClassList = { headerMenuClassList }
        setHeaderMenuClassList = { setHeaderMenuClassList }
        />
      <Main 
        headerMenuClassList = { headerMenuClassList }
        headerLinkArray = { headerLinkArray }
      />
      <Footer
        footerLinkArray = { footerLinkArray }
        footerMenuHandler = { footerMenuHandler }
      />
    </div>
  );
}

export default App;
