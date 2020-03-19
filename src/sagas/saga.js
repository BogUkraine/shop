//import { delay } from 'redux-saga';
import { takeLatest, all, delay } from 'redux-saga/effects';

import currentWeatherByCoordinates from './currentWeather';
import fiveDaysWeatherByCoordinates from './fiveDaysWeather';
import currentWeatherByCity from './currentWeatherByCity';
import fiveDaysWeatherByCity from './fiveDaysWeatherByCity';
import userData from './userData';

function* fetchUserData() {
    yield takeLatest('FETCH_USER_LOCATION', userData);
}

function* fetchCurrentWeatherByCoordinatesWatcher() {
    yield takeLatest('FETCH_CURRENT_WEATHER', currentWeatherByCoordinates);
}

function* fetchFiveDaysWeatherByCoordinatesWatcher() {
    yield takeLatest('FETCH_FIVE_DAYS_WEATHER', fiveDaysWeatherByCoordinates);
}

function* fetchCurrentWeatherByCityWatcher() {
    yield takeLatest('FETCH_CURRENT_WEATHER_BY_CITY', currentWeatherByCity);
}

function* fetchFiveDaysWeatherByCityWatcher() {
    yield takeLatest('FETCH_FIVE_DAYS_WEATHER_BY_CITY', fiveDaysWeatherByCity);
}

export default function* rootSaga() {
    yield all([
        fetchUserData(),
        fetchCurrentWeatherByCoordinatesWatcher(),
        fetchFiveDaysWeatherByCoordinatesWatcher(),
        fetchCurrentWeatherByCityWatcher(),
        fetchFiveDaysWeatherByCityWatcher(),
    ]);
}