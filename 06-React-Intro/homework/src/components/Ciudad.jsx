import React from "react";
import Style from "./Ciudad.module.css";

const Ciudad = ({city}) => {
return city?<div className={Style.container}>
    <div className={Style.ciudad}>
        <a href={`http://maps.google.com/?q=${city.coord.lat},${city.coord.lon}`} target="_blank" rel="noreferrer">
            <h2 className={Style.title}>
                {city.name+", "+city.sys.country}<img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="icon" className={Style.img}/>
            </h2>
        </a>
    </div>
    <div className={Style.info}>
        <div className={Style.text}>Temperature: {city.main.temp} ºC</div>
        <div className={Style.text}>Max: {city.main.temp} ºC</div>
        <div className={Style.text}>Min: {city.main.temp} ºC</div>
        <div className={Style.text}>Feels-Like: {city.main.temp_max} ºC</div>
        <div className={Style.text}>Humidity: {city.main.temp_min}%</div>
        <div className={Style.text}>Weather: {city.weather[0].description}</div>
        <div className={Style.text}>Wind: {city.wind.speed} km/h</div>
        <div className={Style.text}>Cloud quantity: {city.clouds.all}</div>
        <div className={Style.text}>Longitude: {city.coord.lon}º</div>
        <div className={Style.text}>Latitude: {city.coord.lat}º</div>
    </div>
</div>:<div className={Style.error}>404 - No pa, eso no existe. Sorry about that :P - 404</div>
}
export default Ciudad;