const dataConvert = (value) => {
    const time = (new Date(value*1000))
    .toLocaleTimeString();

    return time;
}

export default dataConvert;