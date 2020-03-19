const initialState = {
	list: [{
		dt: '1584630000',
		coord: {
			lon: 30.52,
			lat: 50.43
		},
		weather: [{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01n"
		}],
		base: "stations",
		main: {
			temp: 271.82,
			feels_like: 265.86,
			temp_min:270.15,
			temp_max:273.15,
			pressure: 1027,
			humidity: 46
		},
		visibility: 10000,
		wind: {
			speed: 4,
			deg: 320
		},
		clouds: {
			all: 0
		},
		dt_txt: "2020-03-19 03:00:00",
		sys: {
			type: 1,
			id: 8903,
			country: "UA",
			sunrise: 1584245474,
			sunset: 1584288145
		},
		timezone: 7200,
		id: 703448, 
		name: "Kyiv",
		cod: 200,
		}],
		city: {
			sunrise: 1584245474,
			sunset: 1584288145
		}
};

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