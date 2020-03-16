const initialState = {
	location: {
		lat: '51.509865',
		lon: '-0.118092',
	},
	city: 'London'
};

export default function userData(state = initialState, action) {
	switch(action.type){
		case('USER_LOCATION_FETCHED'): {
			return action.payload;
		}
		case('SET_USER_LOCATION'): {
			console.log('action.payload', action.payload);
			return {...state, ...action.payload};
		}
		default: {
			return state;
		}
	}
}