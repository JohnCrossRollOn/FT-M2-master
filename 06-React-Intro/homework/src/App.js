import React from 'react';
import Style from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className={Style.app}>
      <SearchBar className={Style.SearchBar} 
      onSearch={(ciudad) => alert(ciudad)}
      />
      <div className={Style.singleCard}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <div className={Style.multiCard}>
        <Cards
          cities={data}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
