import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import images from '../images/images';
import isNight from '../functions/isNight';

import Conditions from './Conditions';
import Temperature from './Temperature';
import Wind from './Wind';
import SunPosition from './SunPosition';
import Chart from './Chart';

const Home = () => {
    const { currentWeather, fiveDaysWeather, userLocation } = useSelector(state => ({
        userLocation: state.userData.city || JSON.parse(localStorage.location).city || 'London',
        currentWeather: state.currentWeather,
        fiveDaysWeather: state.fiveDaysWeather,
    }), shallowEqual);
    const dispatch = useDispatch();
    const [ backgroundImage, setBackgroundImage ] = useState(images[8].src);
    const location = {
        city: JSON.parse(localStorage.location).city || 'London',
        countryCode: JSON.parse(localStorage.location).countryCode || 'uk',
    };
    
    useEffect(() => {
        if(!localStorage.location) {
            dispatch({type: 'FETCH_USER_LOCATION'});
        }
        else {
            dispatch({type: 'FETCH_CURRENT_WEATHER', location});
            dispatch({type: 'FETCH_FIVE_DAYS_WEATHER', location});            
        }
    }, []);

    useEffect(() => {
        console.log('is night?', isNight(currentWeather.sys.sunrise, currentWeather.sys.sunset));
        const image = images.find((item) => item.description === currentWeather.weather[0].main) || {src: ''};
        setBackgroundImage(image.src)
    }, [currentWeather.weather[0].main]);

    return (
        <div className="home" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="home__container container">
                <div className="container__item">
                    <h2 className="container__title">Current weather in {userLocation}</h2>
                    <div className="container__weather weather">
                        <div className="weather__item">
                            <Conditions currentWeather={currentWeather}/>
                            <Temperature currentWeather={currentWeather}/>
                            <Wind currentWeather={currentWeather}/>
                            <SunPosition currentWeather={currentWeather}/>
                        </div>
                    </div>
                </div>
                <div className="container__item">
                    <Chart weather={fiveDaysWeather}/>
                </div>
                <div className="container__item container__item--big">
                    <div className="container__title">Five days weather in {userLocation}</div>
                    <div className="container__weather weather">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

//add sounds