import React from 'react';
import dataConvert from '../functions/dataConvert';

const SunPosition = (props) => {
    return(
        <div className="weather__item sun">
            <p className="sun__now">Current time: {(new Date()).toLocaleTimeString()}</p>
            <p className="sun__sunrise">Sunrise at {dataConvert(props.currentWeather.sys.sunrise)}</p>
            <p className="sun__sunset">Sunset at {dataConvert(props.currentWeather.sys.sunset)}</p>
        </div>
    )
}

export default SunPosition;