import React from 'react';
import kelvinToCelcium from '../../functions/temperature';

const Temperature = (props) => {
    return (
        <div className="weather__item temperature">
            <p className="temperature__actual">Temperature: {kelvinToCelcium(props.currentWeather.main.temp)}&#176;C</p>
            <p className="temperature__feels">Feels like: {kelvinToCelcium(props.currentWeather.main.feels_like)}&#176;C</p>
            <p className="temperature__min">Min in city: {kelvinToCelcium(props.currentWeather.main.temp_min)}&#176;C</p>
            <p className="temperature__max">Max in city: {kelvinToCelcium(props.currentWeather.main.temp_max)}&#176;C</p>
        </div>                
    )
}

export default Temperature;
