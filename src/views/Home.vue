<template>
    <div class="home">
     
        <Alert v-show="loginComplete">
            <slot>
                  {{$t("alertLogin")}}<span class="home__user">{{user.username}}!</span>
            </slot>
        </Alert>
        <Menu>
          <slot>
            <LangChanger class="menu__lang-changer"></LangChanger>
          </slot>
        </Menu>
        <Header>
        </Header>
        <Footer></Footer>
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

export default {
  name: 'Home',
  components: {
    Alert,
    Footer,
    LangChanger,
    Logo,
    Header,
    Container,
    Menu
  },
  computed: {
    ...mapState([
      'user',
      'pl',
      'loginComplete',

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
    .home {
       
    }
</style>
