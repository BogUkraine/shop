import React from 'react';
import icons from '../functions/iconsArray';
import isNight from '../functions/isNight';

const Conditions = (props) => {
    let isDark = isNight(props.currentWeather.sys.sunrise, props.currentWeather.sys.sunset);
    const getIcon = (night) => {
        if(night) {
            switch(props.currentWeather.weather[0].main) {
                case('Clear'): {
                    return icons.clearNight;
                }
                case('Clouds'): {
                    return icons.cloudNight;
                }
                default: {
                    return icons.clear;
                }
            }
        }
        else {
            switch(props.currentWeather.weather[0].main) {
                case('Clear'): {
                    return icons.clear;
                }
                case('Clouds'): {
                    return icons.cloudSun;
                }
                default: {
                    return icons.clear;
                }
            }
        }
    }

    return (
        <div className="weather__conditions">
            <i className={'weather__icon ' + getIcon(isDark)}></i>
            <p className="weather__name">{props.currentWeather.weather[0].main}, {props.currentWeather.weather[0].description}</p>
        </div>
    )
}

export default Conditions;
