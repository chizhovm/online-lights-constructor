import React from 'react';

const DataSection = (props) => {
  return (
    <div className = 'dataSection'>
      <p>Класс:</p>
      <button><b>{props.workSection.class}</b></button>
      <p>Потребляемая<br/>мощность:</p>
      <p className = 'dataParagraph'>{props.workSection.power} Вт.</p>
      <p>Сила света</p>
      <p className = 'dataParagraph'>{props.workSection.luminousIntensity} Люмен = {props.workSection.numberOfLamps} ламп<br/>накаливания по {props.workSection.lampPower} Вт.</p>
      <p>Гарантия:</p>
      <p className = 'dataParagraph'>{props.workSection.warranty} года</p>
      <p>Монтаж:</p>
      <p className = 'dataParagraph'>{props.workSection.assembly}</p>
      <p>Итого сумма:</p>
      <p className = 'dataParagraph'>{props.workSection.price} рублей</p>
    </div>
  );
}

export default DataSection;