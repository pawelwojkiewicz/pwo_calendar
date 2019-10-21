<template>
    <button @click="openToggler" :class="{'is-active' : menuToggler}" class="hamburger hamburger--collapse" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
</template>

<script>
    import { mapMutations, mapState, mapActions } from 'vuex';
    export default {
        name: 'MenuToggler',
         computed: {
          ...mapState([
            'menuToggler'
          ]),
        },
         methods: {
          ...mapMutations([
            'openToggler',
          ]),
        },
    }
</script>

<style lang="scss" scoped>
    @import "node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

    .hamburger {
      
      position: absolute;
      right: 0;
      &:focus {
        border: none;
        outline: none;
      }
      &:hover {
        opacity: 1;
      }
      &.is-active {
        opacity: 1;
        z-index: 2000;
        .hamburger-inner {
           background-color: #fff;
        &:before,
        &:after {
          background-color: #fff;
        }
        }
        &:hover {
          opacity: 1;
        }
      }
      &-inner {
        background-color: #fff;
        &:before,
        &:after {
          background-color: #fff;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      .hamburger {
        position: fixed;
      }
    }
</style>