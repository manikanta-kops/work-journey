import Utils from './Utils';

export const DEFAULT = {
  LOCALE: 'en-IN',
};

export const KEYWORDS = {
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
  GO_HOME: 'goHome',
};

export const ROUTER_CONFIG = {
  skills: {
    frames: 5,
  },
  education: {
    frames: 1,
  },
  experience: {
    frames: 4,
  },
  intrests: {
    frames: 6,
  },
};

export const LOCALE = Utils.getLocale() || DEFAULT.LOCALE;
