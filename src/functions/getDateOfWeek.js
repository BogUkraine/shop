const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const getDateOfWeek = (time) => {
    return daysOfWeek[new Date(time).getDay()];
}

export default getDateOfWeek;