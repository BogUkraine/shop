import icons from './iconsArray';
import isNight from './isNight';

const getIcon = (time, main, timezone, futureTime) => {
    let isDark = isNight(time.sunrise, time.sunset, timezone, futureTime);
    if(isDark) {
        switch(main) {
            case('Clear'): {
                return icons.clearNight;
            }
            case('Clouds'): {
                return icons.cloudNight;
            }
            case('Rain'): {
                return icons.rain;
            }
            default: {
                return icons.clear;
            }
        }
    }
    else {
        switch(main) {
            case('Clear'): {
                return icons.clear;
            }
            case('Clouds'): {
                return icons.cloudSun;
            }
            case('Rain'): {
                return icons.rain;
            }
            default: {
                return icons.clear;
            }
        }
    }
}

export default getIcon;