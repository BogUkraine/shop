import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const getUserLocation = (url) => {
    return axios.get(url)
    .then( (response) => {
        console.log('location', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* userData() {
    const data = yield call(
    getUserLocation, 
    'http://ip-api.com/json');
    if(data.status === 'success') {
        localStorage.setItem('location',
            JSON.stringify({'city': data.city, 'countryCode': data.countryCode}));
        yield put({ type: "USER_LOCATION_FETCHED", payload: data});
        yield put({ type: "FETCH_CURRENT_WEATHER", location: data});
        yield put({ type: "FETCH_FIVE_DAYS_WEATHER", location: data});
    }
    else {
        yield put({ type: "USER_LOCATION_FETCHED", payload: data});
        yield put({ type: "FETCH_CURRENT_WEATHER", location: {city: 'London', coutryCode: 'uk'}});
        yield put({ type: "FETCH_FIVE_DAYS_WEATHER", location: {city: 'London', coutryCode: 'uk'}});
    }
}