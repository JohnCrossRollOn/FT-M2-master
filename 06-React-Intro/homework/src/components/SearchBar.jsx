import React, { useState } from 'react';
import Style from './SearchBar.module.css';
import Error from './error.jsx';
export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const clean = ()=>{
    setSearchInput('');
  }
  const Search = () => {props.onSearch(searchInput);
  clean()
  }
  const enter = (event) => {
    if (event.key=='Enter') {
      Search()
    }
  }

  return <div className={Style.buscador}>
      {props.searchStatus?<Error value={'error'}></Error>:null}
      <input autoFocus onKeyDown={enter} value={searchInput} onChange={(event)=>{props.setSearchFailed(false);setSearchInput(event.target.value)}} type="text" name="search" id="search" placeholder="Search your city" className={Style.input}/>
      <button onClick={()=>{Search()}} className={Style.button}>Search</button>
      
    </div>
};