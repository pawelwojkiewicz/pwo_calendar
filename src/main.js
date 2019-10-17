import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueI18n from 'vue-i18n'
import store from './store';
import './registerServiceWorker';
import VueResource from 'vue-resource';
import PasswordHash from 'password-hash';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.use(VueResource, PasswordHash, VueI18n);


library.add(faUser, faEnvelope, faLock, faGithub);


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;



new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');


const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }
  
  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages, // set locale messages
  })




