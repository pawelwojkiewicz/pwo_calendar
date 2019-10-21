<template>
    <div class="home">
        <Alert v-show="loginComplete">
            <slot>
                {{$t("alertLogin")}}<span class="home__user">{{user.username}}!</span>
            </slot>
        </Alert>
        <transition name="modal-trans">
            <Modal v-if="modal"></Modal>
        </transition>
        <Menu>
            <slot>
                <LangChanger class="menu__lang-changer "></LangChanger>
            </slot>
        </Menu>
        <Header>
             <slot>
                <LangChanger class="home__lang-changer"></LangChanger>
            </slot>
        </Header>
        <Calendar></Calendar>
    
        <Footer class="home__footer footer--small"></Footer>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Alert from '@/components/Alert.vue';
import Footer from '@/components/Footer.vue';
import LangChanger from '@/components/LangChanger.vue';
import Logo from '@/components/Logo.vue';
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';
import Menu from '@/components/Menu.vue';
import Calendar from '@/components/Calendar.vue';
import Modal from '@/components/Modal.vue';

export default {
    name: 'Home',
    components: {
        Alert,
        Footer,
        LangChanger,
        Logo,
        Header,
        Container,
        Menu,
        Calendar,
        Modal
    },
    computed: {
        ...mapState([
            'user',
            'pl',
            'loginComplete',
            'modal'

        ]),
    },
    methods: {
        ...mapActions([
            'logoutComplete',
        ]),
        ...mapMutations([
            'openModal',
        ]),
    },
};
</script>

<style lang="scss" scoped>
.home {
    &__footer {
        position: relative;
        bottom: auto;
        margin: 40px 0 10px 0;
    }
    &__lang-changer {
      display: none;
    }
}

.modal-trans-enter-active,
.modal-trans-leave-active {
    transition: opacity .5s, width .5s, height .5s, min-height .5s;
}

.modal-trans-enter,
.modal-trans-leave-to {
    opacity: 0;
    width: 1%;
    height: 1%;
    min-height: 1%;
}

@media screen and (min-width: 768px) {
    .home {
        &__footer {
            position: absolute;
            bottom: 15px;
        }
    }
}

@media screen and (min-width: 1024px) {
    .home {
        &__footer {
            position: relative;
            margin: 60px 0 10px 0;
        }
    }
}

@media screen and (min-width: 1200px) {
    .home {
        &__footer {
            margin-top: 100px;
        }
        &__lang-changer {
          display: block;
          position: fixed;
          top: 33px;
          right: 65px;
        }
    }
}
</style>
