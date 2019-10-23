<template>
    <div class="menu" :class="{'menu__open' : menuToggler}">
        <LangChanger class="menu__lang-changer"></LangChanger>
          <span>Witaj {{loggedUsername}}</span>

        <router-link @click.native="logoutComplete" class="menu__logout-btn btn btn--wide" tag="button" to="/login"> {{$t("logOut")}} </router-link>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import LangChanger from '@/components/LangChanger.vue';

export default {
  name: 'Menu',
  components: {
    LangChanger,
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
    z-index: 2000;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);
    transition: .3s;
    &__open {
        transform: translateX(0);
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
}

@media screen and (min-width: 768px) {
    .menu {
        width: 350px;
        -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.75);
        background: rgba(43, 43, 43, 0.87);
    }
}
</style>
