import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WeatherDisplay = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ecaedecc253a5fc299cbe2b06e20bba5`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <div>
      <h1>Météo pour {city}</h1>
      {weatherData && (
        <div>
          <p>Coordonnées : {weatherData.coord.lon}, {weatherData.coord.lat}</p>
          <p>Météo : {weatherData.weather[0].main}</p>
          <p>Description : {weatherData.weather[0].description}</p>
          <p>Température : {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Température minimale : {Math.round(weatherData.main.temp_min - 273.15)}°C</p>
          <p>Température maximale : {Math.round(weatherData.main.temp_max - 273.15)}°C</p>
          <p>Pression : {weatherData.main.pressure} hPa</p>
          <p>Humidité : {weatherData.main.humidity}%</p>
          <p>Visibilité : {weatherData.visibility} m</p>
          <p>Vitesse du vent : {weatherData.wind.speed} m/s</p>
          <p>Direction du vent : {weatherData.wind.deg}°</p>
          <p>Nuages : {weatherData.clouds.all}%</p>
          <p>Date et heure de la mesure : {new Date(weatherData.dt * 1000).toLocaleString()}</p>
          <p>Pays : {weatherData.sys.country}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
