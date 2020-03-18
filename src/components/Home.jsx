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
    const { currentWeather, fiveDaysWeather, userData } = useSelector(state => ({
        userData: state.userData,
        currentWeather: state.currentWeather,
        fiveDaysWeather: state.fiveDaysWeather
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
                    <h2 className="container__title">Current weather in {userData.city}</h2>
                    <div className="container__weather weather">
                        <div className="weather__items">
                            <Conditions currentWeather={currentWeather}/>
                            <Temperature currentWeather={currentWeather} />
                            <Wind currentWeather={currentWeather} />
                            <SunPosition currentWeather={currentWeather} />
                        </div>
                    </div>
                </div>
                <div className="container__item">
                    <h2 className="container__title">24 hours weather</h2>
                    <Chart weather={fiveDaysWeather}/>
                </div>
                <div className="container__item container__item--big">
                    <h2 className="container__title">Five days weather</h2>
                    <div className="container__weather weather">

                    </div>
                </div>
            </div>
            <div className="modal" style={{display: userData.isError ? 'block' : 'none'}}>
                <div className="modal__overlay" onClick={() => dispatch({type: 'CLOSE_MODAL', payload: {isError: false}})}>
                    <div className="modal__window">
                        <div className="modal__title">Something went wrong</div>
                        <div className="modal__text">{userData.message}, make sure you have written place right or try to find another place.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

//add sounds