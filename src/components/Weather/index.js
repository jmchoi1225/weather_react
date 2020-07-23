import React, { useState, useEffect } from "react";

const API_WEATHER = 'http://localhost:8888/weather-service/weathers?cityName='

const Weather = (props) => {
  const { cityName } = props.match.params;

  const [city, setCity] = useState(cityName);
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    fetch(API_WEATHER + city)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  },[])
  
  return(
    <div>
      <h1>City : {city}</h1>
      { weather!=null &&
        <div>
          <h3>Weather : {weather.weather[0].main}</h3>
          <p>Description : {weather.weather[0].description}</p>
          <p>Temperature : {(weather.main.temp-273.15).toFixed(2)}</p>
        </div>
      }
    </div>
  );
};
export default Weather;