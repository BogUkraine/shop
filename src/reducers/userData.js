const initialState = {
	location: {
		lat: '51.509865',
		lon: '-0.118092',
	},
	city: 'London',
	isError: false,
};

export default function userData(state = initialState, action) {
	switch(action.type){
		case('USER_LOCATION_FETCHED'): {
			return action.payload;
		}
		case('SET_USER_LOCATION'): {
			return {...state, ...action.payload};
		}
		case('SET_ERROR'): {
			return {...state, ...action.payload, isError: true};
		}
		case('CLOSE_MODAL'): {
			return {...state, ...action.payload}
		}
		default: {
			return state;
		}
	}
}