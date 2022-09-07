import React from 'react';

export default function SearchBar(props) {
  return <div>
    <input type="text" name="search" id="search" placeholder="Search your city"/>
    <button onClick={()=>{props.onSearch(document.getElementById("search").value)}}>Buscar</button> 
  </div>
};