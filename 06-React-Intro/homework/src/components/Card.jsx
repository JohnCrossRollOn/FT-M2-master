import React from 'react';

export default function Card({max,min,name,img,onClose}) {
  return <div>
    <p>Max: {max}</p>
    <p>Min: {min}</p>
    <p>Name: {name}</p>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon"/>
    <button onClick={onClose}>X</button>
  </div>
};