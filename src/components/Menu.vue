<template>
    <div class="menu" :class="{'menu__open' : menuToggler}">
        <div class="menu__content">
            <LangChanger class="menu__lang-changer"></LangChanger>
            <span class="menu__user">Witaj, {{loggedUsername}}!</span>
            <span class="menu__date-day">{{defaultMoment.format('dddd,')}}</span>
            <span class="menu__date-month">{{defaultMoment.format('D MMMM')}}</span>
            <span class="menu__tasks-title">Zadania na dziś:</span>
            <ul class="menu__tasks">
                <li class="menu__tasks-element">Pranie</li>
                <li class="menu__tasks-element">Sprzątanie</li>
                <li class="menu__tasks-element">Sprzątanie</li>
                <li class="menu__tasks-element">Sprzątanie</li>
            </ul>
            <router-link @click.native="logoutComplete" class="menu__logout-btn btn btn--wide" tag="button" to="/login"> {{$t("logOut")}} </router-link>
        </div>
    
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import LangChanger from '@/components/LangChanger.vue';
import moment from 'moment';

export default {
    name: 'Menu',
    components: {
        LangChanger,
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
        ]),

    },
    methods: {
        ...mapActions([
            'logoutComplete',
        ]),

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
    transition: .3s;
    &__open {
        transform: translateX(0);
    }
    &__content {
        padding: 80px 15px 0px 15px
    }
    &__lang-changer {
        top: 78px;
    }
    &__logout-btn {
        position: absolute;
        bottom: 20px;
        width: 90%;
        left: 0;
        margin-left: 5%;
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
    }
    &__tasks {
        list-style: none;
        padding: 0;
        margin: 0;
        padding: 10px 0 0 0px;
        &-element {
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            padding: 3px 3px 3px 5px;
            background: #000;
            font-size: 14px;
            margin: 3px 0;
            background: #bd5959;
            border-radius: 3px;
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
