import WeatherDisplay from "../components/WeatherDisplay";
import { useParams } from "react-router-dom";

function MeteoVille () {
    const { ville } = useParams();
    return (
        <div>
            <center>
                <h1>Résultat de recherche: {ville.charAt(0).toUpperCase() + ville.slice(1)}</h1>
            </center>
            <WeatherDisplay ville={ville.toLowerCase()}></WeatherDisplay>
        </div>
    );
}
export default MeteoVille;
