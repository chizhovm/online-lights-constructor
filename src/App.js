import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import pictures from './components/pictures';

const userState = {
  itemsInTheBasket: 1,
  workSection: {
    class: 'Standart',
    power: 59,
    luminousIntensity: 3459,
    numberOfLamps: 7.5,
    lampPower: 40,
    warranty: 3,
    assembly: 'Да',
    price: 2594
  },
  lightsTypeArray: [
    {type: 'Теплый', checked: true, picture: pictures.warmLight},
    {type: 'Дневной', checked: false, picture: pictures.dayLight},
    {type: 'Холодный', checked: false, picture: pictures.coldLight}
  ]
}

const headerState = {
  headerMenuClassList: 'headerMenuList',
  headerLinkArray: [ 'Обучающее видео', 'Оформление заказа', 'Оплата', 'Доставка',
    'Гарантия', 'Возврат', 'Контакты', 'Партнерам'
  ],
};

const footerState = {
  footerLinkArray : [
    {itemName:'Вариант кухни'}, {itemName: 'Размеры'}, {itemName:'Сенсор'}, {itemName:'Питающий кабель'},
    {itemName:'Блок питания'},  {itemName:'Цвет свечения'},  {itemName:'Монтаж'},  {itemName:'Корзина'}
  ].map((el, index) => {
    if(index === 5) {
      el.active = true;
      el.selected = true;
      el.classlist = 'footerListItem footerListItemSelected footerListItemActive';
    } else {
      el.active = false;
      el.selected = false;
      el.classlist = 'footerListItem';
    }
    return el;
  }),
};

const App = () => {
  const [ itemsInTheBasket ] = useState(userState.itemsInTheBasket);
  const [ headerMenuClassList, setHeaderMenuClassList ] = useState(headerState.headerMenuClassList);
  const [ headerLinkArray ] = useState(headerState.headerLinkArray);
  const [ footerLinkArray, setFooterLinkArray ] = useState(footerState.footerLinkArray);
  const [ workSection ] = useState(userState.workSection);
  const [ lightsTypes, setLightsTypes ] = useState(userState.lightsTypeArray);

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

  const lightsTypeHandler = (lightsTypeArray, itemIndex) => {
    const newLightsTypeArray = lightsTypeArray.map((el, index) => {
      if (index === itemIndex) el.checked = true;
      else el.checked = false;
      return el;
    })
    return setLightsTypes(newLightsTypeArray);
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
        workSection = { workSection }
        lightsTypes = { lightsTypes } 
        lightsTypeHandler = { lightsTypeHandler }
      />
      <Footer
        footerLinkArray = { footerLinkArray }
        footerMenuHandler = { footerMenuHandler }
      />
    </div>
  );
}

export default App;
