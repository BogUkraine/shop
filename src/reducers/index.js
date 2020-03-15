import { combineReducers } from 'redux';

import currentWeather from './currentWeather';
import fiveDaysWeather from './fiveDaysWeather';

export default combineReducers({
    currentWeather,
    fiveDaysWeather
})