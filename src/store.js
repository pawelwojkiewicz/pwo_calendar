import Vue from 'vue';
import Vuex from 'vuex';
import router from './router'
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //snippets
    pl: {
      userPlaceholder: 'nazwa użytkownika',
      passwordPlaceholder: 'hasło',
      repeatPasswordPlaceholder: 'powtórz hasło',
      logIn: 'Zaloguj się',
      email: 'e-mail',
      register: 'Zarejestruj się',
      loginFormError: 'Wprowadziłeś zły login lub hasło. Spróbuj ponownie!',
      registerText: 'Nie masz jeszcze konta?',
      loginText: 'Masz już konto?',
      requiredUser: 'nazwa użytkownika jest wymagana',
      invalidUser: 'użytkownik o podanej nazwie już istnieje',
      requiredEmail: 'email jest wymagany',
      requiredPassword: 'hasło jest wymagane',
      requiredRePassword: 'ponowne hasło jest wymagane',
      invalidPassword: 'hasła nie są takie same',
      alertRegistration : 'Rejestracja przebiegła pomyślnie! Możesz się zalogować!'
    },
    //Form Validation
    invalidInput: {
      username: false,
      password: false,
      repassword: false,
      differentpasswords: false,
      sameusername: false,
    },
    user : {
      username: '',
      password: '',
      repassword: '',
    },
    users: [],
    registrationComplete: false,
    loginFail: false,
    loggedUsername: ''

  },
  mutations: {
    register: (state) => {
      state.invalidInput.username = (state.user.username === '');
      state.invalidInput.password = (state.user.password === '');
      state.invalidInput.repassword = (state.user.repassword === '');
      state.invalidInput.differentpasswords = (state.user.repassword !== state.user.password)
      let sameUserName = false;
      if(state.users !== null) {
        Object.keys(state.users).forEach(key => {
          if(state.users[key].username === state.user.username) sameUserName = true;
       }) 
       state.invalidInput.sameusername = sameUserName;
      }
    },
    login: (state) => {
      if(state.users === null) {
        return;
      } else {
        Object.keys(state.users).forEach(key => {
          if(state.user.username === state.users[key].username && state.user.password === state.users[key].password ) {
            router.push({ path: '/' })
            state.loginFail = false;
          } else {
            state.loginFail = true;
          } 
        })
      } 
    },
    logout: (state) => {
      state.loginFail = false;
    },
    clearInputs: (state) => {
      state.user.username = '';
      state.user.password = '';
      state.user.repassword = '';
    }
  },
  actions: {
    register (context) {
        context.commit('register');
        if(!context.state.invalidInput.username 
          && !context.state.invalidInput.password 
          && !context.state.invalidInput.repassword 
          && !context.state.invalidInput.differentpasswords
          && !context.state.invalidInput.sameusername) {
            Vue.http.patch(`https://pwo-calendar.firebaseio.com/users/${context.state.user.username}.json`, context.state.user).then(function (data) { 
              });
          router.push({ path: 'login' })
          context.state.user.username = '';
          context.state.user.password = '';
          context.state.loginFail = false;
          context.state.registrationComplete = true;
          setTimeout(function(){
            context.state.registrationComplete = false;
          }, 2500);
        
        }
    },
    getUsers (context) {
      Vue.http.get(`https://pwo-calendar.firebaseio.com/users.json`).then(data => data.json()).then((data) => {
        context.state.users = data;
      });
    }
  },
});
