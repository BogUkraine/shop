import React, {useState} from 'react';

import images from '../images/images';

const Home = () => {
    let [index, setIndex] = useState(0);

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

/*
http://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&APPID=f5bd87baf248f1fabb4c782d4856430f

{"coord":{"lon":30.52,"lat":50.43},
"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],
"base":"stations",
"main":{"temp":272.1,"feels_like":265.39,"temp_min":270.93,"temp_max":273.15,"pressure":1018,"humidity":80},
"visibility":4600,"wind":{"speed":6,"deg":320},
"clouds":{"all":75},"dt":1584226725,
"sys":{"type":1,"id":8903,"country":"UA","sunrise":1584245474,"sunset":1584288145},
"timezone":7200,"id":703448,"name":"Kyiv","cod":200}
*/
//add sounds