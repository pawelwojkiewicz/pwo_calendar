import Vue from 'vue';
import Vuex from 'vuex';
import PasswordHash from 'password-hash';
import router from './router';
import moment from 'moment'


Vue.use(Vuex, PasswordHash);
export default new Vuex.Store({
    state: {
        // Form Validation
        invalidInput: {
            username: false,
            password: false,
            repassword: false,
            differentpasswords: false,
            sameusername: false,
        },
        // V-model
        user: {
            username: '',
            password: '',
            repassword: '',
        },
        // Registered Users
        users: [],

        // LogIn and LogOut Alerts
        registrationComplete: false,
        loginComplete: false,
        loginFail: false,
        logoutComplete: false,

        // Logged Username
        loggedUsername: '',

        //Open Hamburger Menu
        menuToggler: false,
        moment: moment(),
        modalDay: '',
        modal: false,
        overlay: false
    },


    mutations: {
        nextMonth: (state) => {
            state.moment = moment(state.moment.add(1, 'M'))
        },
        prevMonth: (state) => {
            state.moment = moment(state.moment.subtract(1, 'M'))
        },
        // Registration
        validateUser: (state) => {
            state.invalidInput.username = (state.user.username === '');
            state.invalidInput.password = (state.user.password === '');
            state.invalidInput.repassword = (state.user.repassword === '');
            state.invalidInput.differentpasswords = (state.user.repassword !== state.user.password);
        },
        sameusername(state, value) {
            state.invalidInput.sameusername = value;
        },
        setPassword(state, password) {
            state.user.password = password;
            state.user.repassword = password;
        },
        clearLoginForm(state) {
            state.user.username = '';
            state.user.password = '';
            state.loginFail = false;
        },
        registrationComplete(state, value) {
            state.registrationComplete = value;
        },

        // Login
        loginFail(state, value) {
            state.loginFail = value;
        },
        loginComplete(state, value) {
            state.loginComplete = value;
        },


        // Logout
        logoutCompleteAlert(state, value) {
            state.logoutComplete = value;
        },
        logoutComplete(state) {
            state.loginFail = false;
            state.user.username = '';
            state.user.password = '';
            state.logoutComplete = true;
        },

        // Clear Inputs
        clearInputs: (state) => {
            state.user.username = '';
            state.user.password = '';
            state.user.repassword = '';
            state.invalidInput.username = false;
            state.invalidInput.password = false;
            state.invalidInput.repassword = false;
            state.loginFail = false;
        },
        openToggler: (state) => {
            state.menuToggler = !state.menuToggler
            state.overlay = !state.overlay
        },
        openModal: (state) => {
            state.modal = true;
            state.overlay = true;
        },
        closeModal: (state) => {
            state.modal = false
            state.overlay = false
        },
        closeMenu: (state) => {
            state.menuToggler = false;
            state.overlay = false;
            state.modal = false;
        }
    },

    actions: {
        // Register
        register({ state, commit }) {
            commit('validateUser');
            if (state.users === null || state.user.username === '' || state.user.username === null) {
                return;
            }
            Vue.http.get(`https://pwo-calendar.firebaseio.com/users/${state.user.username}.json`).then(data => data.json()).then((data) => {
                if (data !== null) {
                    commit('sameusername', true);
                    return;
                }
                commit('sameusername', false);
            });
            if (!state.invalidInput.username &&
                !state.invalidInput.password &&
                !state.invalidInput.repassword &&
                !state.invalidInput.differentpasswords &&
                !state.invalidInput.sameusername) {
                const passwordHash = require('password-hash');
                const hashedPassword = passwordHash.generate(`${state.user.password}`);
                commit('setPassword', hashedPassword);
                Vue.http.patch(`https://pwo-calendar.firebaseio.com/users/${state.user.username}.json`, state.user).then((data) => {});
                router.push({ path: 'login' });
                commit('clearLoginForm');
                commit('registrationComplete', true);
                setTimeout(() => {
                    commit('registrationComplete', false);
                }, 2500);
            }
        },

        // Login
        login({ state, commit, dispatch }) {
            if (state.users === null || state.user.username === '' || state.user.username === null) {
                commit('loginFail', true);
                return;
            }
            Vue.http.get(`https://pwo-calendar.firebaseio.com/users/${state.user.username}.json`).then(data => data.json()).then((data) => {
                if (data === null) {
                    commit('loginFail', true);
                    return;
                }
                state.users = data;
                const passwordHash = require('password-hash');
                if (state.user.username === state.users.username && passwordHash.verify(`${state.user.password}`, state.users.password)) {
                    router.push({ path: '/' });
                    dispatch('loginCompleteAlert');
                } else {
                    commit('loginFail', true);
                }
            });
        },
        // Login Complete Alert
        loginCompleteAlert({ commit }) {
            commit('loginComplete', true);
            setTimeout(() => {
                commit('loginComplete', false);
            }, 2500);
        },
        // Logout Complete
        logoutComplete({ commit }) {
            commit('logoutCompleteAlert', true);
            commit('logoutComplete');
            setTimeout(() => {
                commit('logoutCompleteAlert', false);
            }, 2500);
        },
    },
});