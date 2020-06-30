import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const defaultState = {
  itemsInTheBasket: 1,
}

const App = () => {

  const [ itemsInTheBasket, setItemsInTheBasket ] = useState(defaultState.itemsInTheBasket);

  return (
    <div className="App">
      <Header 
        itemsInTheBasket = { itemsInTheBasket }
        />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
