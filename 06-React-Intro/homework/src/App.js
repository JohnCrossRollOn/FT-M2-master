import React, {useState} from 'react';
import Style from './App.module.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from "axios";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [searchFailed, setSearchFailed] = useState(false);
  const onSearch = (ciudad) => {
    setSearchFailed(false);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .catch(()=>{setSearchFailed(true)})
    .then((response)=>{
      onClose(response.data.id);
      setCities((oldCities) => [response.data, ...oldCities])})
  };
  
  const onClose = (id) => {setCities((oldCities) => oldCities.filter((city) => city.id!==id))};

  const [cities, setCities] = useState([]);

  return (
    <div className={Style.app}>
      <SearchBar className={Style.SearchBar} onSearch={onSearch} setSearchFailed={setSearchFailed} searchStatus={searchFailed}/>
      <div className={Style.multiCard}>
        <Cards cities={cities} onClose={onClose}/>
      </div>
      <hr />
    </div>
  );
}

export default App;
