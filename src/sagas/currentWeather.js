import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const getCurrentData = (url) => {
    return axios.get(url)
    .then( (response) => {
        console.log('current data', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* addUser() {
    const data = yield call(
    getCurrentData, 
    'http://localhost:3210/addUserhttp://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&APPID=f5bd87baf248f1fabb4c782d4856430f');
    yield put({ type: "CURRENT_WEATHER_IS_FETCHED", data: data});
}