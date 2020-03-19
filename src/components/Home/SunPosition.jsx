import React from 'react';
import dataConvert from '../../functions/dataConvert';

const SunPosition = ({currentWeather}) => {
    return(
        <div className="weather__item sun">
            <p className="sun__now">Current time: {dataConvert(new Date() / 1000, currentWeather.timezone)}</p>
            <p className="sun__sunrise">Sunrise at {dataConvert(currentWeather.sys.sunrise, currentWeather.timezone)}</p>
            <p className="sun__sunset">Sunset at {dataConvert(currentWeather.sys.sunset, currentWeather.timezone)}</p>
        </div>
    )
}

export default SunPosition;