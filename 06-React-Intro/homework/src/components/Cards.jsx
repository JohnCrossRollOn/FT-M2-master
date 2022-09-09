import React from 'react';
import Card from './Card';

export default function Cards(props) {
  return <>
    {props.cities.map(
      city=><Card 
      max = {city.main.temp_max}
      min = {city.main.temp_min}
      name = {city.name}
      img = {city.weather[0].icon}
      onClose = {props.onClose}
      key = {city.id}
      id = {city.id}
      />
    )}
  </>
};