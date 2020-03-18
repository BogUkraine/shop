import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const getCurrentData = (url) => {
    return axios.get(url)
    .then( (response) => {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
        return {"cod":"404","message":"city is not found"}
    });
}

export default function* fiveDaysWeatherByCity({city}) {
    const data = yield call(
    getCurrentData, 
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=f5bd87baf248f1fabb4c782d4856430f`);
    if(data.cod !== '404') {
        yield put({ type: "FIVE_DAYS_WEATHER_IS_FETCHED", payload: data});
    }
    else {
        yield put({ type: "SET_ERROR", payload: data});
    }
}