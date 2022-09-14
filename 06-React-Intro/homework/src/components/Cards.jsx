import React from 'react';
import Card from './Card';

export default function Cards(props) {
  return <>
    {props.cities.length>0?props.cities.map(
      city=><Card 
      max = {city.main.temp_max}
      min = {city.main.temp_min}
      name = {city.name}
      img = {city.weather[0].icon}
      onClose = {props.onClose}
      key = {city.id}
      id = {city.id}
      />
    ):<span style={{color: "white", margin: "10px"}}>You should try searching for a continent/country/city in the searchBar!</span>}
  </>
};