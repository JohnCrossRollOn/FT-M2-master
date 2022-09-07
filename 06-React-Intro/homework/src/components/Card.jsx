import React from 'react';
import Style from './Card.module.css';

export default function Card({max,min,name,img,onClose}) {
  return <div className={Style.Card}>
    <div className={Style.top}>
      <button 
      onClick={onClose} 
      className={Style.button}
      >x</button>
      
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" className={Style.img}/>
    <div className={Style.TextContent}>
      <p className={Style.text}>Max: {max}</p>
      <p className={Style.text}>Min: {min}</p>
      <p className={Style.text}>{name}</p>
    </div>
  </div>
};