const initialState = [];

export default function fiveDaysWeather(state = initialState, action) {
	switch(action.type){
		case('FIVE_DAYS_WEATHER_IS_FETCHED'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}