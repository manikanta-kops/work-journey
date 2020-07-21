import Utils from './Utils';

export const DEFAULT = {
  LOCALE: 'en-IN',
};

export const KEYWORDS = {
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',
};

export const LOCALE = Utils.getLocale() || DEFAULT.LOCALE;
