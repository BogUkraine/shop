import React from 'react';
import convertPressure from '../functions/pressure';

const Wind = (props) => {
    return(
        <div className="weather__item wind">
            <p className="wind__speed">Wind speed: {props.currentWeather.wind.speed} m/s</p>
            <p className="wind__clouds">Clouds: {props.currentWeather.clouds.all}%</p>
            <p className="wind__humidity">Humidity: {props.currentWeather.main.humidity}%</p>
            <p className="wind__feels">Pressure: {convertPressure(props.currentWeather.main.pressure)} mm</p>
        </div>
    )
}

export default Wind;