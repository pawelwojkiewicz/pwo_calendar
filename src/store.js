import Vue from 'vue';
import Vuex from 'vuex';

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
    }
  },
  mutations: {

  },
  actions: {

  },
});
