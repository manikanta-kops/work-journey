const getAllUrlParameters = (unwantedKeys = []) => {
  const URL = window.location.hash;
  URL[1] = URL.split('?');
  const allParams = {};
  if (URL) {
    const getParams = URL.split('&');
    getParams.forEach((param) => {
      const [key, value] = param.split('=');
      if (unwantedKeys.indexOf(key) === -1) {
        allParams[key] = decodeURIComponent(value);
      }
    });
  }
  return allParams;
};

const getUrlParameter = (name, url = window.location.href) => {
  const formattedName = name.replace(/[[\]]/g, '\\$&');
  let regex = `[?&]${formattedName}(=([^&#]*)|&|#|$)`;
  regex = new RegExp(regex);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const logTheError = ({ from, error = '', type = '' }) => {
  console.warn(from, error, type);
};

const isAndroid = () => navigator.userAgent.match(/Android/i);

const isIOS = () => (
  navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
);

const isMobile = () => isAndroid() || isIOS();

const isSmallScreen = () => isMobile() || window.innerWidth <= 767;

const getLocale = () => {
  const localeParam = String(getUrlParameter('locale')).toLowerCase();
  if (/[\w]{2}-[\w]{2}/gi.test(localeParam)) {
    const [part1, part2] = localeParam.split('-');
    return `${part1}-${part2.toUpperCase()}`;
  }
  return '';
};

export default {
  getUrlParameter,
  getAllUrlParameters,
  logTheError,
  getLocale,
  isMobile,
  isSmallScreen,
};
