<template>
    <div class="overlay" @click="closeMenu">

    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'Overlay',
  methods: {
    closeMenu() {
      this.$store.commit('closeMenu');
      document.body.classList.remove('no-scroll');
     document.documentElement.classList.remove('no-scroll');
    },
  },
};
</script>

<style lang="scss" scoped>
    .overlay {
      overflow: auto;
        z-index: 1500;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        top: 0;
    }

</style>
