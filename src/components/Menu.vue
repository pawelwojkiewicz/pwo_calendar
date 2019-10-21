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
        position: fixed;
        z-index: 2000;
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

    @media screen and (min-width: 768px) {
        .menu {
            width: 400px;
            z-index: 1000;
        }
    }
</style>