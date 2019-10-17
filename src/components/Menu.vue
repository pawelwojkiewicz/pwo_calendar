<template>
    <div class="menu" :class="{'menu__open' : menuToggler}">
        <slot>

        </slot>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
    export default {
        name: 'Menu',
          computed: {
          ...mapState([
            'menuToggler'
          ]),
        },
    }
</script>

<style lang="scss" scoped>
    .menu {
        position: absolute;
        top:0;
        right: 0;
        background: black;
        width:100%;
        height: 100vh;
        transform: translateX(100%);
        transition: .3s;
        &__open {
            transform: translateX(0);
        }
        &__lang-changer{
            top: 78px;
        }
    }
</style>