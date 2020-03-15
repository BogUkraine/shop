import React from 'react';
import dataConvert from '../functions/dataConvert';

const SunPosition = (props) => {
    return(
        <div className="weather__sun sun">
            <p className="sun__sunrise">Sunrise at {dataConvert(props.currentWeather.sys.sunrise)} AM</p>
            <p className="sun__sunset">Sunset at {dataConvert(props.currentWeather.sys.sunset)} PM</p>
        </div>
    )
}

export default SunPosition;