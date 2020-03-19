import React from 'react';
import getIcon from '../../functions/getIcon';

const Conditions = ({currentWeather}) => {
    return (
        <div className="weather__conditions">
            <i className={
                'weather__icon ' + 
                getIcon(currentWeather.sys,
                    currentWeather.weather[0].main, currentWeather.timezone)
                }>
            </i>
            <p className="weather__name">{currentWeather.weather[0].main}, {currentWeather.weather[0].description}</p>
        </div>
    )
}

export default Conditions;
