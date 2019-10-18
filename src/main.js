import Vue from 'vue';
import './registerServiceWorker';
import VueResource from 'vue-resource';
import PasswordHash from 'password-hash';
import vSelect from 'vue-select';
import VueMoment from 'vue-moment'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import router from './router';
import App from './App.vue';
import i18n from './i18n';
import moment from 'moment'

Vue.component('v-select', vSelect);
library.add(faUser, faEnvelope, faLock, faGithub, faChevronLeft, faChevronRight);

Vue.use(VueResource, PasswordHash,);

Vue.use(VueMoment,{moment})

Vue.component('font-awesome-icon', FontAwesomeIcon);





Vue.config.productionTip = false;


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');


