const FahrenheitToCelsius = ({ fahrenheit }) => {
    const celsius = fahrenheit - 273.15
    return (
        <p className="center-align"><img src="/weather.svg" alt={celsius} />Température : {celsius.toFixed(1)}°C</p>
    );
}
export default FahrenheitToCelsius;
