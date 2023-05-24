import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const SearchForm = () => {
    const [city, setCity] = useState('')


    return (
        <div>
            <div className='searchVille'>
                <input
                    type='text'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Entrez la ville'
                    className='search'
                />
                <Link to={`ville/${city}`}>
                    <button type='submit'>recherche</button>
                </Link>
            </div>

            {weatherData && (
                <div>
                    <p>
                        Coordonnées : {weatherData.coord.lon}, {weatherData.coord.lat}
                    </p>
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
                    <p>
                        Date et heure de la mesure :{' '}
                        {new Date(weatherData.dt * 1000).toLocaleString()}
                    </p>
                    <p>Pays : {weatherData.sys.country}</p>
                </div>
            )}
        </div>
    )
}

export default SearchForm
