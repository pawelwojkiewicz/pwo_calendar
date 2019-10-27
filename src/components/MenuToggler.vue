<template>
    <button @click="openToggler" :class="{'is-active' : menuToggler}" class="hamburger hamburger--collapse" type="button">
        <BadgeTask></BadgeTask>
          <span class="hamburger-box">
            <span class="hamburger-inner" :class="{'hamburger-inner--black' : !nightMode}"></span>
          </span>
        </button>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import BadgeTask from '@/components/BadgeTask.vue';

export default {
    name: 'MenuToggler',
    components: {
        BadgeTask
    },
    computed: {
        ...mapState([
            'menuToggler',
            'nightMode'
        ]),
    },

    methods: {
        openToggler() {
            this.$store.commit('openToggler');
            const body = document.querySelector('body');
            const html = document.querySelector('html');
            if (this.menuToggler === true) {
                body.classList.add('no-scroll');
                html.classList.add('no-scroll');
            } else {
                body.classList.remove('no-scroll');
                html.classList.remove('no-scroll');
            }

        }
    }
};
</script>

<style lang="scss" scoped>
@import "node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";
.hamburger {
    z-index: 100;
    position: absolute;
    right: 0px;
    left: auto;
    &:focus {
        border: none;
        outline: none;
    }
    &:hover {
        opacity: 1;
    }
    &.is-active {
        opacity: 1;
        z-index: 3000;
        .hamburger-inner {
            background-color: #fff;
            &:before,
            &:after {
                background-color: #fff;
            }
             &--black {
             background-color: rgb(92, 92, 92);
            &:before,
            &:after {
                 background-color: rgb(92, 92, 92);
            }
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
        &--black {
             background-color: rgb(92, 92, 92);;
            &:before,
            &:after {
                 background-color: rgb(92, 92, 92);;
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .hamburger {
        position: fixed;
    }
}
</style>
