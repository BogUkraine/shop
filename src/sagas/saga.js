//import { delay } from 'redux-saga';
import { takeLatest, all } from 'redux-saga/effects';

import currentWeather from './currentWeather';
import fiveDaysWeather from './fiveDaysWeather';
import userData from './userData';

function* fetchUserData() {
    yield takeLatest('FETCH_USER_LOCATION', userData);
}

function* fetchCurrentWeatherWatcher() {
    yield takeLatest('FETCH_CURRENT_WEATHER', currentWeather);
}

function* fetchFiveDaysWeatherWatcher() {
    yield takeLatest('FETCH_FIVE_DAYS_WEATHER', fiveDaysWeather);
}

export default function* rootSaga() {
    yield all([
        fetchUserData(),
        fetchCurrentWeatherWatcher(),
        fetchFiveDaysWeatherWatcher(),
    ]);
}