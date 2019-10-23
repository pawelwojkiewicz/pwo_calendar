import Vue from 'vue';
import './registerServiceWorker';
import VueResource from 'vue-resource';
import PasswordHash from 'password-hash';
import vSelect from 'vue-select';
import VueMoment from 'vue-moment';
import Vue2TouchEvents from 'vue2-touch-events';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser, faEnvelope, faLock, faChevronLeft, faChevronRight, faTimes, faPlus, faCheck
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';
import store from './store';
import router from './router';
import App from './App.vue';
import i18n from './i18n';

Vue.component('v-select', vSelect);
library.add(faUser, faEnvelope, faLock, faGithub, faChevronLeft, faChevronRight, faTimes, faPlus, faCheck);

Vue.use(VueResource);
Vue.use(VueMoment, { moment });
Vue.use(Vue2TouchEvents);
Vue.use(PasswordHash);


Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
