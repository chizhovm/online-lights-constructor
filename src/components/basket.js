import React from 'react';

const Basket = (props) => {
  return <div className = 'basket'>
      <div className = 'itemsInTheBasket'>
        <p>
          { props.itemsInTheBasket }
        </p>
      </div>
  </div>
}

export default Basket;