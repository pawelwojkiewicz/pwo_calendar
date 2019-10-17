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
</style>