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
        userLocation: state.userData,
        currentWeather: state.currentWeather,
        fiveDaysWeather: state.fiveDaysWeather,
    }), shallowEqual);

    const dispatch = useDispatch();
    const [ backgroundImage, setBackgroundImage ] = useState(images[8].src);
    let [ lon, setLon ] = useState('51.509865');
    let [ lat, setLat ] = useState('-0.118092');

    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_WEATHER',
            userData: {
                location: {
                    lon: lon,
                    lat: lat,
                }
            }
        });
        dispatch({
            type: 'FETCH_FIVE_DAYS_WEATHER',
            userData: {
                location: {
                    lon: lon,
                    lat: lat,
                }
            }
        });
            
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }, [lon, lat, dispatch]);

    useEffect(() => {
        console.log('is night?', isNight(currentWeather.sys.sunrise, currentWeather.sys.sunset));
        const image = images.find((item) => item.description === currentWeather.weather[0].main) || {src: ''};
        setBackgroundImage(image.src)
    }, [currentWeather]);

    return (
        <div className="home" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="home__container container">
                <div className="container__item">
                    <h2 className="container__title">Current weather in {userLocation.city}</h2>
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
                    <div className="container__title">Five days weather in {userLocation.city}</div>
                    <div className="container__weather weather">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

//add sounds