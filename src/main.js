import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import { registerApp } from './helpers/Observer';

import './assets/scss/main.scss';

Vue.config.productionTip = false;

const appInstance = new Vue({
  router,
  store,
  i18n: i18n.i18n,
  render: (h) => h(App),
});
registerApp(appInstance);
appInstance.$mount('#app');
