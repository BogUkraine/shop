import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const inputRef = React.createRef();
    const handleIconClick = () => {
        inputRef.current.focus();
    }

    return (
        <div className="header">
            <div className="logo">Weather</div>
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