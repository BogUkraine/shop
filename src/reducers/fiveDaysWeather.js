const initialState = [];

export default function fiveDaysWeather(state = initialState, action) {
	switch(action.type){
		case('EXAMPLE'): {
			return action.data
		}
		default: {
			return state;
		}
	}
}