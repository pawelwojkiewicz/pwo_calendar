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
    },
  },
};
</script>

<style lang="scss" scoped>
    .overlay {
        z-index: 1000;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        top: 0;
    }

</style>
