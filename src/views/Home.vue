<template>
    <div class="home" :class="{'home--padding': menuToggler}">
        <Alert v-show="loginComplete">
            <slot>
                {{$t("alertLogin")}}<span class="home__user">{{user.username}}!</span>
            </slot>
        </Alert>
        <transition name="modal-trans">
            <Modal v-if="modal"></Modal>
        </transition>
        <Menu>
        </Menu>
        <Header>
        </Header>
        <Calendar></Calendar>
        <transition name="fade" mode="out-in">
            <Overlay v-if="overlay"></Overlay>
        </transition>

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
import Overlay from '@/components/Overlay.vue';
import Button from '@/components/Button.vue';

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
    Modal,
    Overlay,
    Button, 
  },
  created() {
    localStorage.setItem('user', this.loggedUsername);
  },
  computed: {
    ...mapState([
      'user',
      'pl',
      'loginComplete',
      'modal',
      'overlay',
      'menuToggler',
      'loggedUsername',

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
    created() {
        const user = localStorage.getItem('user');
        this.$store.state.loggedUsername = user;
    }
};
</script>

<style lang="scss" scoped>
.home {
    &__footer {
        position: relative;
        bottom: auto;
        margin: 40px 0 10px 0;
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
        transition: .3s;
        &--padding {
            padding-right: 350px;
        }
        &__footer {
            margin-top: 100px;
        }
    }
}
</style>
