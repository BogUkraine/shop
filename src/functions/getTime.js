const getTime = (time) => {
    let hours = (time % 86400) / 3600

    return `${hours}:00`;
}

export default getTime;