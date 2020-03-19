import React from 'react';
import getIcon from '../../functions/getIcon';
import kelvinToCelcium from '../../functions/temperature';
import convertPressure from '../../functions/pressure';
import getDateOfWeek from '../../functions/getDateOfWeek';

const HomeChartItems = ({weather, time, timezone}) => {
    return weather.map((item, index) => {
        return (
            <div className="home-chart__item" key={index}>
                <div className="home-chart__wrapper">
                    <div className="home-chart__conditions">
                        <i className={'weather__icon ' + getIcon(time, item.weather[0].main, timezone, item.dt)}></i>
                        <p className="home-chart__description">{item.weather[0].description}</p>
                    </div>
                    <div className="home-chart__data">
                        <p className="home-chart__temperature">Temperature: {kelvinToCelcium(item.main.temp)}&#176;C</p>
                        <p className="home-chart__temperature">Wind speed: {item.wind.speed} m/s</p>
                        <p className="home-chart__temperature">Humidity: {item.main.humidity}%</p>
                        <p className="home-chart__temperature">Pressure: {convertPressure(item.main.pressure)} mm</p>
                    </div>
                </div>
                <div className="home-chart__time">
                    {getDateOfWeek(item.dt_txt)} {item.dt_txt.substr(11, 5)} - {(+item.dt_txt.substr(11, 2)) === 21 
                        ? '00' 
                        : +item.dt_txt.substr(11, 2) + 3}:00
                </div>
            </div>
        )
    })
}

const HomeChart = ({ weather, time }) => {
    const oneDayWeather = weather.list.filter((item, index) => {
        if(index < 8)   return item;
    });

    return(
        <div className="weather__chart home-chart">
            <HomeChartItems weather={oneDayWeather} time={time} timezone={weather.city.timezone}/>
        </div>
    )
}

export default HomeChart;