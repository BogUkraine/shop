import React from 'react';
import kelvinToCelcium from '../functions/temperature';

const Temperature = (props) => {
    return (
        <div className="weather__temperature temperature">
            <p className="temperature__actual">Temperature: {kelvinToCelcium(props.currentWeather.main.temp)}&#176;C</p>
            <p className="temperature__feels">Feels like: {kelvinToCelcium(props.currentWeather.main.feels_like)}&#176;C</p>
            <p className="temperature__humidity">Humidity: {props.currentWeather.main.humidity}%</p>
            <p className="temperature__feels">Pressure: {props.currentWeather.main.pressure} hPa</p>
        </div>                
    )
}

export default Temperature;
