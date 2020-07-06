import React from 'react';

const BasketItem = (props) => {
  return <div className = 'basket-item'>
      <div className = 'itemsInTheBasket'>
        <p>
          { props.itemsInTheBasket }
        </p>
      </div>
  </div>
}

export default BasketItem;