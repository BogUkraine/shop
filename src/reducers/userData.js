const initialState = [];

export default function fiveDaysWeather(state = initialState, action) {
	switch(action.type){
		case('USER_LOCATION_FETCHED'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}