const isNight = (sunrise, sunset, timezone, time = Math.floor(Date.now() / 1000)) => {
    const sunriseTime = sunrise % 86400;
    const sunsetTime = sunset % 86400;

    if(time % 86400 < sunriseTime) return true;
    else if (time % 86400 > sunsetTime) return true;
    else return false;
}

export default isNight;
