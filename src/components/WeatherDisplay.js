import { useEffect, useState } from "react";
import axios from "axios";

function WeatherDisplay ({ ville }) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getData()
    })
    
    const getData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=paris&lang=fr&appid=4961f48689760d647f370de1feca07cc`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}
export default WeatherDisplay
