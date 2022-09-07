import React from 'react';
import Style from './SearchBar.module.css';

export default function SearchBar(props) {
  return <div className={Style.SearchBar}>
    <div className={Style.buscador}>
      <input type="text" name="search" id="search" placeholder="Search your city" className={Style.input}/>
      <button onClick={()=>{props.onSearch(document.getElementById("search").value)}} className={Style.button}>Search</button>
    </div>
    <p className={Style.texto}>
    &lt;Weather React App Homework/&gt;
    </p>
    
  </div>
};