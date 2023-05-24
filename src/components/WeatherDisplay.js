import { useEffect, useState } from "react";
import axios from "axios";
import FahrenheitToCelsius from "./FahrenheitToCelsius";

const WeatherDisplay = ({ ville }) => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getData()
    }, [ville]);

    const getData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&appid=4961f48689760d647f370de1feca07cc`, {
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    if(!data.main) return (<center>Chargement...</center>)

    return (
        <div className="container-meteo rounded-border">
            <h1 style={{marginBottom: "3%"}}>Ville de {ville}</h1>
            <div>
                <FahrenheitToCelsius fahrenheit={data.main.temp}/>
                <p className="center-align"><img src="/weather.svg" alt="Temps" />Temps : {data.weather[0].description}</p>
                <p className="center-align"><img src="/water-drop.svg" alt="Humidite" />Humidité : {data.main.humidity}%</p>
                <p className="center-align"><img src="/Pressure.svg" alt="Pression" />Pression : {data.main.pressure} hPa</p>
                <p className="center-align"><img src="/wind.svg" alt="Vitesse" />Vitesse du vent : {data.wind.speed} m/s</p>
            </div>
        </div>
    )

}
export default WeatherDisplay
