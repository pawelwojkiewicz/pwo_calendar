import Vue from 'vue';
import Vuex from 'vuex';
import router from './router'

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
    registrationComplete: false

  },
  mutations: {
    register: (state) => {
      state.invalidInput.username = (state.user.username === '');
      state.invalidInput.password = (state.user.password === '');
      state.invalidInput.repassword = (state.user.repassword === '');
       if(state.user.repassword !== state.user.password) {
        state.invalidInput.differentpasswords = true;
       } else {
         state.invalidInput.differentpasswords = false;
       }
    }
  },
  actions: {
    register (context) {
        context.commit('register');
        if(!context.state.invalidInput.username && !context.state.invalidInput.password && !context.state.invalidInput.repassword && !context.state.invalidInput.differentpasswords) {
          router.push({ path: 'login' })
          context.state.registrationComplete = true;
        }
    }




  },
});
