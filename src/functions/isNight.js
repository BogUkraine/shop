const isNight = (sunrise, sunset) => {
    const currentTime = Math.floor(Date.now() / 1000);
    if(currentTime <= sunrise) return true;
    else if(currentTime > sunset) return true;
    else return false;
}

export default isNight;