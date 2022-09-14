import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Card.module.css';

export default function Card(props) {
  return <div className={Style.Card}>
    <div className={Style.top}>
      <button onClick={()=>props.onClose(props.id)} className={Style.button}>x</button>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="icon" className={Style.img}/>
    <div className={Style.TextContent}>
      <p className={Style.text}>Max: {props.max}</p>
      <p className={Style.text}>Min: {props.min}</p>
      <NavLink className={Style.cityName} to={`/ciudad/${props.id}`}>
        <p>{props.name}</p>
      </NavLink>
    </div>
  </div>
  
  
};