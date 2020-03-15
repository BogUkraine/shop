import { combineReducers } from 'redux';

import currentWeather from './currentWeather';
import fiveDaysWeather from './fiveDaysWeather';
import userData from './userData';

export default combineReducers({
    currentWeather,
    fiveDaysWeather,
    userData,
})