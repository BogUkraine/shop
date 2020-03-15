import React, { useState, useEffect } from 'react';

import images from '../images/images';

const Home = () => {
    let [index, setIndex] = useState(0);
    
    // useEffect(() => {

    // })

    return (
        <div className="home" style={{backgroundImage: `url(${images[index].src})`}} onClick={() => setIndex(index++)}>
            <div className="home__container container">
                <div className="container__item"></div>
                <div className="container__item"></div>
                <div className="container__item container__item--big"></div>
            </div>
        </div>
    )
}

export default Home;

//add sounds