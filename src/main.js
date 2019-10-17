import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueResource from 'vue-resource';
import PasswordHash from 'password-hash';
import vSelect from 'vue-select'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import i18n from './i18n'
Vue.component('v-select', vSelect)
library.add(faUser, faEnvelope, faLock, faGithub);

Vue.use(VueResource, PasswordHash,);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false; 






new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');