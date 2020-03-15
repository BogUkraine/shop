const initialState = {
	city: 'London',
	contryCode: 'uk',
};

export default function fiveDaysWeather(state = initialState, action) {
	switch(action.type){
		case('USER_LOCATION_FETCHED'): {
			return action.payload;
		}
		case('GET_LOCATION_FROM_LOCAL_STORAGE'): {
			return JSON.parse(localStorage.location);
		}
		default: {
			return state;
		}
	}
}