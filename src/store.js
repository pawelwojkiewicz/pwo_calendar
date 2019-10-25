import Vue from 'vue';
import Vuex from 'vuex';
import PasswordHash from 'password-hash';
import moment from 'moment';
import router from './router';


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

    // Open Hamburger Menu
    menuToggler: false,
    moment: moment(),
    modalDay: '',
    modal: false,
    overlay: false,
    taskList: [],
    modalId: '',
    taskListModal: [],
    ready: false,
    calendarTasks: [],
    success: false,
    nightMode: true,
    todayTasksId: '',
    todayTasks: '',
    emptyTask: false,
    background : '#464646',
    headerBackground : '#2f2f2f',
    color: '#fff',
    menuBackground : 'rgba(29, 29, 29, 0.7)',
    badgeQuantity: '',
    checkboxChecked: false
  },


  mutations: {
    nextMonth: (state) => {
      state.moment = moment(state.moment.add(1, 'M'));
      
    },
    prevMonth: (state) => {
      state.moment = moment(state.moment.subtract(1, 'M'));
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
      state.menuToggler = false;
      state.overlay = false;
      state.calendarTasks = []
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
      state.menuToggler = !state.menuToggler;
      state.overlay = !state.overlay;
    },
    openModal: (state) => {
      state.modal = true;
      state.overlay = true;
    },
    closeModal: (state) => {
      state.modal = false;
      state.overlay = false;
    },
    closeMenu: (state) => {
      state.menuToggler = false;
      state.overlay = false;
      state.modal = false;
    },
    addTask: (state) => {
      state.taskList.push({ text: '' });
    },
    buttonSuccess: (state, value) => {
      state.success = value;
    },
    buttonNormal: (value) => {
      state.success = value
    },
    changeMode: (state) => {
      state.nightMode = !state.nightMode
      
    },
    nightModeEnabled: (state) => {
      state.nightMode = true;
      state.background = '#464646'
        state.headerBackground = '#2f2f2f'
        state.color = '#fff';
        state.menuBackground =  'rgba(29, 29, 29, 0.7)'
    },

    nightModeDisabled: (state) => {
      state.nightMode = false;
      state.color = 'rgb(92, 92, 92)';
      state.background = '#ffffff'
      state.headerBackground = '#f3f6f8'
      state.menuBackground =  'rgba(255, 255, 255, 0.91)'
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
      if (!state.invalidInput.username
                && !state.invalidInput.password
                && !state.invalidInput.repassword
                && !state.invalidInput.differentpasswords
                && !state.invalidInput.sameusername) {
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
      localStorage.setItem('user', state.user.username);

      Vue.http.get(`https://pwo-calendar.firebaseio.com/users/${this.state.user.username}.json`).then(data => data.json()).then((data) => {
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
    loginCompleteAlert({ state, commit }) {
      commit('loginComplete', true);
      setTimeout(() => {
        commit('loginComplete', false);
      }, 2500);

    },
    // Logout Complete
    logoutComplete({ commit }) {
      commit('logoutCompleteAlert', true);
      commit('logoutComplete');
      localStorage.removeItem('user');
      setTimeout(() => {
        commit('logoutCompleteAlert', false);
      }, 2500);
    },
    post({ state,commit ,dispatch}) {
      commit('buttonSuccess',false)
      Vue.http.patch(`https://pwo-calendar.firebaseio.com/users/${state.loggedUsername}/tasks/${state.modalId}.json`, { tasklist: state.taskList }).then((data) => {
        dispatch('getAllTasks');
        dispatch('getTodayTasks');
       
    });
    commit('buttonSuccess',true)
    setTimeout(() => {
      commit('buttonSuccess',false)
      commit('closeModal')
    }, 1000);
    },
    get({state}) {
      state.ready = false;
      Vue.http.get(`https://pwo-calendar.firebaseio.com/users/${state.loggedUsername}/tasks/${state.modalId}.json`).then(data => data.json()).then((data) => {
        if(data===null ) {
          state.taskList = []
        } else {
          state.taskList = data.tasklist;
        }
        state.ready = true;
    });
    },
    getAllTasks({state}) {
      state.ready = false;
      Vue.http.get(`https://pwo-calendar.firebaseio.com/users/${state.loggedUsername}.json`).then(data => data.json()).then(function (data) {
          if(data.tasks === undefined) {
            state.calendarTasks = []
          } else {
            state.calendarTasks = data.tasks;
          }
      // if(data === 'undefined' || data === null ) {
          //   return [];
          // } else {
          //   state.calendarTasks = data.tasks;
          // }
        
        });
        state.ready = true;
    },
    getTodayTasks({state}) {
      state.ready = false;
      Vue.http.get(`https://pwo-calendar.firebaseio.com/users/${state.loggedUsername}/tasks/${state.todayTasksId}.json`).then(data => data.json()).then(function (data) {
          if(data === null) { 
            state.todayTasks = []
            state.emptyTask = true;
          } else {
            state.todayTasks = data.tasklist;
            state.emptyTask = false;
            state.badgeQuantity = state.todayTasks.length
            console.log(state.badgeQuantity)
          }
        });
        state.ready = true;
    },
    toggleNightMode({commit,state},nightMode) {
      if(typeof nightMode === "undefined") {
        nightMode = !state.nightMode
      }
      else if(typeof nightMode === 'string') {
        nightMode = ("true" === nightMode) ? true : false;
      }
      if(nightMode) {
        commit('nightModeEnabled')
        
      } else {
        commit('nightModeDisabled')
      }
      localStorage.setItem('nightmode', nightMode);
    }
  },
});
