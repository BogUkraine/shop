const initialState = {
	weather: [{
		main: 'Clear',
		description: 'Clear',
	}],
	main: {
		temp: 280,
		feels_like: 280,
		humidity: 75,
		pressure: 1000,
	}
};

export default function currentWeather(state = initialState, action) {
	switch(action.type){
		case('CURRENT_WEATHER_IS_FETCHED'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}