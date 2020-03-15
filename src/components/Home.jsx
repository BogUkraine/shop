import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import images from '../images/images';

const Home = () => {
    const { currentWeather, fiveDaysWeather, userLocation } = useSelector(state => ({
        userLocation: state.userData.city || 'London',
        currentWeather: state.currentWeather,
        fiveDaysWeather: state.fiveDaysWeather,
    }), shallowEqual);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!localStorage.getItem('location')) {
            dispatch({type: 'FETCH_USER_LOCATION'});
        }
        else {
            dispatch({type: 'FETCH_CURRENT_WEATHER', location: {
                city: JSON.parse(localStorage.location).city || 'London',
                countryCode: JSON.parse(localStorage.location).countryCode || 'uk',
            }});
            dispatch({type: 'FETCH_FIVE_DAYS_WEATHER', location: {
                city: JSON.parse(localStorage.location).city || 'London',
                countryCode: JSON.parse(localStorage.location).countryCode || 'uk',
            }});            
        }
    }, [])

    return (
        <div className="home" style={{backgroundImage: `url(${images[1].src})`}}>
            <div className="home__container container">
                <div className="container__item">
                    <div className="container__title">Current weather in {userLocation}</div>
                    <div className="container__weather weather">

                    </div>
                </div>
                <div className="container__item"></div>
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