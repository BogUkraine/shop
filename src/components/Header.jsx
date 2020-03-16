import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import weather from '../images/weather1.png';

const Header = () => {
    const inputRef = React.createRef();
    const handleIconClick = () => {
        inputRef.current.focus();
    };
    const dispatch = useDispatch();

    document.addEventListener('keypress', (event) => {
        if(event.target === inputRef.current && event.key === 'Enter') {
            dispatch({type: 'FETCH_CURRENT_WEATHER_BY_CITY', city: inputRef.current.value});
            dispatch({type: 'FETCH_FIVE_DAYS_WEATHER_BY_CITY', city: inputRef.current.value});
        }
    })


    return (
        <div className="header">
            <div className="logo"><img src={weather} alt="weather" className="logo__image"/></div>
            <nav className="header__nav">
                <NavLink to="/" className="header__link">Home</NavLink>
                <NavLink to="/" className="header__link">Map</NavLink>
                <NavLink to="/" className="header__link">Settings</NavLink>
            </nav>
            <div className="header__search">
                <input type="text" name="search" className="header__field" placeholder="find your city"
                    ref={inputRef}/>
                <i className="fas fa-search" onClick={handleIconClick}></i>
            </div>
        </div>
    )
}

export default Header;