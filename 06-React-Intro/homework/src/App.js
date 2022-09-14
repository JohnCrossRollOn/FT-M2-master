import React, {useState} from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import Style from './App.module.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad';
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
      setCities((oldCities) => [response.data, ...oldCities])}
    )
  };
  
  const onClose = (id) => {setCities((oldCities) => oldCities.filter((city) => city.id!==id))};

  const [cities, setCities] = useState([]);

  const getFromList = (ciudadId) => {
    return cities.filter(c => c.id === ciudadId)[0]
  }
  const CiudadWrapper = () => {
    let params = useParams();
    return <Ciudad city={getFromList(parseInt(params.ciudadId))} />
  }
  

  return (<>
      <div className={Style.Top}>
        <Nav/>
        <SearchBar className={Style.SearchBar} onSearch={onSearch} setSearchFailed={setSearchFailed} searchStatus={searchFailed}/>
      </div>
    <Routes>
      <Route path='/' strict element={<div className={Style.multiCard}><Cards cities={cities} onClose={onClose}/></div>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route strict path='/ciudad/:ciudadId' element={<CiudadWrapper/>} />
    </Routes>
    <hr />
  </>
  );
}

export default App;
