<template>
    <div class="menu" :style="{background: menuBackground}" :class="{'menu__open' : menuToggler}">
        <div class="menu__content">
            <div class="menu__toolbar">
                <Switcher></Switcher>
                <LangChanger class="menu__lang-changer"></LangChanger>
            </div>
    
            <span class="menu__user">{{$t("hello")}}, {{loggedUsername}}!</span>
            <span class="menu__date-day">{{defaultMoment.format('dddd,')}}</span>
            <span class="menu__date-month">{{defaultMoment.format('D MMMM')}}</span>
            <span class="menu__tasks-title">{{$t("tasksfortoday")}}:</span>
            <span class="menu__tasks-title--empty" v-show="emptyTask">{{$t("emptytasks")}}</span>
            <ul class="menu__tasks">
                <li class="menu__tasks-element" v-for="(todayTask,index) in todayTasks" :class="{'menu__tasks-element--checked' : todayTask.checkedTask}" :key="index+ 'menu-item'"  >{{todayTask.text}}</li>
            </ul>
            <router-link @click.native="logoutComplete" class="menu__logout-btn btn btn--wide" tag="button" to="/login"> {{$t("logOut")}} </router-link>
        </div>
    
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import LangChanger from '@/components/LangChanger.vue';
import Switcher from '@/components/Switcher.vue';
import moment from 'moment';

export default {
    name: 'Menu',
    components: {
        LangChanger,
        Switcher
    },
    data() {
        return {
            defaultMoment: new moment()
        }
    },
    computed: {
        ...mapState([
            'menuToggler',
            'users',
            'loggedUsername',
            'todayTasksId',
            'todayTasks',
            'emptyTask', 
            'menuBackground'
        ]),

    },
    methods: {
        ...mapActions([
            'logoutComplete',
            'getTodayTasks'
        ]),

    },
     watch: {
    '$i18n.locale': function (newLanguage) {
      this.defaultMoment.locale(newLanguage);
    },
  },
   created() {
        this.$store.state.todayTasksId = `${this.defaultMoment.format('D-M-Y')}`;
        this.getTodayTasks()
    },
};
</script>

<style lang="scss" scoped>
.menu {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 3000;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);
    transition: transform .3s;
    &__open {
        transform: translateX(0);
        overflow: auto;
    }
    &__toolbar {
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.09);
        margin-bottom: 25px;
        padding: 10px;
    }
    &__content {
        padding: 65px 15px 0px 15px
    }
    &__lang-changer {
        top: 78px;
        height: 38px;
    }
    &__logout-btn {
       margin: 30px 0;
       width: 100%;
    }
    &__user {
        font-size: 20px;
    }
    &__date-day {
        font-size: 30px;
        display: block;
        margin-top: 20px;
        text-transform: capitalize;
    }
    &__date-month {
        font-size: 30px;
        display: block;
    }
    &__tasks-title {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        margin-top: 30px;
        display: block;
        &--empty {
            font-weight: 300;
            font-size: 15px;
            margin-top: 10px;
            display: block;
        }
    }
    &__tasks {
        list-style: none;
        padding: 0;
        margin: 0;
        padding: 10px 0 0 0px;
        &-element {
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            padding: 6px 5px 6px 5px;
            font-size: 14px;
            height: 20px;
            margin: 4px 0;
            background: #bd5959;
            border-radius: 3px;
            &--checked {
                text-decoration: line-through;
                opacity: 0.7;
                background:#607d8b
            }
        }
    }
}

@media screen and (min-width: 480px) {
    .menu {
        &__content {
            padding-top: 50px;
        }
        &__logout-btn {
            position: relative;
            bottom: auto;
            width: 100%;
            margin: 20px 0 20px 0;
        }
        &__toolbar {
            margin: 20px 0 40px 0;
        }
    }
}

@media screen and (min-width: 768px) {
    .menu {
        width: 350px;
        -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
        background: rgba(43, 43, 43, 0.87);
        &__logout-btn {
            position: absolute;
            bottom: 20px;
            width: 90%;
            margin-left: 5%;
        }
        &__tasks-element {
            margin: 8px 0;
            padding: 10px;
            font-size: 15px;
        }
    }
}

@media screen and (min-width: 1200px) {
    .menu {
        &__content {
            padding-top: 80px;
        }
        &__user {
            font-size: 25px;
        }
        &__date-day,
        &__date-month {
            font-size: 32px;
        }
        &__tasks-title {
            margin-top: 50px;
        }
    }
}
</style>
