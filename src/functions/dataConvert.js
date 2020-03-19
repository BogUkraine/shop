const dataConvert = (time, timezone) => {
    const hours = Math.floor(((time / 3600) % 24) + (timezone / 3600));
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    return hours + ':' + minutes + ':' + seconds;
}

export default dataConvert;