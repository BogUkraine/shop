const dataConvert = (value) => {
    const time = (new Date(value*1000))
    .toLocaleTimeString()
    .substr(0, 4);
    return time
}

export default dataConvert;