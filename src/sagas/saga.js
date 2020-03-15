//import { delay } from 'redux-saga';
import { takeLatest, all } from 'redux-saga/effects';

import currentWeather from './currentWeather';

function* fetchCurrentWeatherWatcher() {
    yield takeLatest('FETCH_CURRENT_WEATHER', currentWeather);
}

export default function* rootSaga() {
    yield all([
        fetchCurrentWeatherWatcher(),
    ]);
}