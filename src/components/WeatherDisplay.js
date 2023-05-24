import { useEffect, useState } from "react";
import axios from "axios";
import FahrenheitToCelsius from "./FahrenheitToCelsius";
import backGrounds from "../data/animations.json"

const WeatherDisplay = ({ ville }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const apiKey = "4961f48689760d647f370de1feca07cc"

    useEffect(() => {
        const getData = () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&appid=${apiKey}`, {
            })
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => {
                    setError(err.response.status)
                })
        };

        getData();
    }, [ville]);

    if(error === 404) return (<center>Ville non trouvée</center>)
    if(error && error !== 404) return (<center>Une erreur est survenue</center>)

    if(!data.main) return (<center>Chargement...</center>)

    const conditionMeteorologiqueApi = data.weather[0].main
    const conditionMeteorologique = backGrounds.find((element) => element.name === conditionMeteorologiqueApi)

    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${conditionMeteorologique.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backdropFilter: "blur(25px)"}} className="container-meteo rounded-border">
            <h1 style={{marginBottom: "3%"}}>Ville de {ville}</h1>
            <div>
                <FahrenheitToCelsius fahrenheit={data.main.temp}/>
                <p className="center-align"><img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Temps" />Temps : {data.weather[0].description}</p>
                <p className="center-align"><img src="/water-drop.svg" alt="Humidite" />Humidité : {data.main.humidity}%</p>
                <p className="center-align"><img src="/Pressure.svg" alt="Pression" />Pression : {data.main.pressure} hPa</p>
                <p className="center-align"><img src="/wind.svg" alt="Vitesse" />Vitesse du vent : {data.wind.speed} m/s</p>
            </div>
            <div>
                <p> Météo prise le {new Date().toLocaleDateString()} à {new Date().toLocaleTimeString()} </p>
            </div>
        </div>
    )

}
export default WeatherDisplay
