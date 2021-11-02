import { format } from 'date-fns';
import theme from './theme';

const numberWithCommas = x => {
    if (+x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return '';
}

const getImageFromUrl = url => {
    if (typeof url === 'string') {
        return url.substring(url.lastIndexOf('/') + 1);
    }

    return '';
}

const debounceFn = fn => {
    let timer;
    return event => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn, 400, event);
    }
}

const sizeSwitcher = breakpoint => ({
    sm: 500,
    md: 700,
    lg: 900,
    xl: 1300,
}[breakpoint]);

const breakpointsArray = breakpoints =>
    Object.entries(breakpoints).map(([k,v]) => ({key: k, value: v}));

const calculateImageWidth = () => {
    const clientWidth = document.body.clientWidth;
    const { breakpoints } = theme;
    const breakpoint =
        breakpointsArray(breakpoints)
        .reverse()
        .find(bp => bp.value < clientWidth) || { key: 'sm'};

    return sizeSwitcher(breakpoint.key);
}

const dateFormatter = date => {
    if (date && typeof date.getMonth === 'function') {
        return format(date, 'dd MMM yyyy');
    }

    return '';
};

const apiUrl = 'https://run.mocky.io/v3/8dac4388-ce28-4406-95bb-91aec813168d';
const imgixUrl = 'https://ruben-plum.imgix.net/';

export {
    numberWithCommas,
    getImageFromUrl,
    debounceFn,
    calculateImageWidth,
    dateFormatter,
    apiUrl,
    imgixUrl,
};
