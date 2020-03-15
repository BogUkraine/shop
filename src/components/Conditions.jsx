import React from 'react';

const Conditions = (props) => {
    return (
        <div className="weather__conditions">
            <i className={'weather__icon ' + props.icons.clear}></i>
            <p className="weather__name">{props.currentWeather.weather[0].main}</p>
        </div>
    )
}

export default Conditions;
