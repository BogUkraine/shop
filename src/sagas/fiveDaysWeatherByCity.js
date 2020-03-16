import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const getCurrentData = (url) => {
    return axios.get(url)
    .then( (response) => {
        console.log('five days data', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fiveDaysWeatherByCity({city}) {
    const data = yield call(
    getCurrentData, 
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=f5bd87baf248f1fabb4c782d4856430f`);
    yield put({ type: "FIVE_DAYS_WEATHER_IS_FETCHED", payload: data});
}