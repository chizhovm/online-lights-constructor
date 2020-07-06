import React, { useState } from 'react';
import './App.scss';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import pictures from './components/pictures';
import KichenVariant from './components/kitchens-variant';
import Measurements from './components/measurements';
import Sensor from './components/sensor';
import PowerCable from './components/power-cable';
import PowerSupply from './components/power-supply';
import GlowColor from './components/glow-color';
import Assembly from './components/assembly';
import Basket from './components/basket';

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
    {type: 'Теплый', checked: true, picturesArray: pictures.warmLight},
    {type: 'Дневной', checked: false, picturesArray: pictures.dayLight},
    {type: 'Холодный', checked: false, picturesArray: pictures.coldLight}
  ]
}

const headerState = {
  headerMenuClassList: 'headerMenuList',
  headerLinkArray: [ 'Обучающее видео', 'Оформление заказа', 'Оплата', 'Доставка',
    'Гарантия', 'Возврат', 'Контакты', 'Партнерам'
  ],
};

const appState = {
  constructorItemsArray : [
    {itemName:'Вариант кухни', itemValue: KichenVariant}, {itemName: 'Размеры', itemValue:  Measurements},
    {itemName:'Сенсор', itemValue:  Sensor}, {itemName:'Питающий кабель', itemValue:  PowerCable},
    {itemName:'Блок питания', itemValue:  PowerSupply},  {itemName:'Цвет свечения', itemValue:  GlowColor},
    {itemName:'Монтаж', itemValue:  Assembly},  {itemName:'Корзина', itemValue:  Basket}
  ].map((el, index) => {
    if(index === 0) {
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
  const [ constructorItemsArray, setConstructorItemsArray ] = useState(appState.constructorItemsArray);
  const [activeConstructorItem, setActiveConstructorItem] = useState(0);
  const [ workSection ] = useState(userState.workSection);
  const [ lightsTypes, setLightsTypes ] = useState(userState.lightsTypeArray);

  const footerMenuHandler = (linkArray, itemIndex) => {
    linkArray[itemIndex].selected = true;
    linkArray[itemIndex].classlist = 'footerListItem footerListItemSelected';
    setConstructorItemsArray(linkArray.map((el, index) => {
      if (index === itemIndex) {
        setActiveConstructorItem(itemIndex);
        el.active = true;
        el.classlist = 'footerListItem footerListItemSelected footerListItemActive';
      } else if(!el.selected) el.classlist = 'footerListItem'
      else {
        el.active = false;
        el.classlist = 'footerListItem footerListItemSelected';
      }
      return el;
    }));
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
        activeConstructorItem = {constructorItemsArray[activeConstructorItem].itemValue }

      />
      <Footer
        constructorItemsArray = { constructorItemsArray }
        footerMenuHandler = { footerMenuHandler }
      />
    </div>
  );
}

export default App;
