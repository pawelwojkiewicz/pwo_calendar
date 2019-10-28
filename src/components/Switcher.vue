<template>
    <div class="switcher">
        <font-awesome-icon class="switcher__icon" :class="{'switcher__icon--active': nightMode}" icon="moon" />
        <label class="switcher__label">
                        <input type="checkbox" :checked="!nightMode" class="switcher__checkbox" @click="toggleNightMode()">
                        <span class="switcher__slider" :class="{'switcher__slider--black' : !nightMode}"></span>
            </label>
        <font-awesome-icon class="switcher__icon" :class="{'switcher__icon--active': !nightMode}" icon="sun" />
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
    name: 'Switcher',
    computed: {
        ...mapState([
            'nightMode'
        ]),
    },
    methods: {
        ...mapActions([
            'toggleNightMode',
        ]),
    },
    mounted() {
        this.toggleNightMode(localStorage.getItem('nightmode'))
    },
    watch: {
        nightMode: function (val) {
            if(val) {
                document.body.classList.remove('nightmode--disabled')
            } else {
                document.body.classList.add('nightmode--disabled')
            }
    },
    },
}
</script>

<style lang="scss" scoped>
.switcher {
    &__icon {
        color: #7b7b7b;
        &--active {
            color: #21a5b6;
        }
    }
    &__label {
        margin: 0 10px;
        position: relative;
        display: inline-block;
        width: 55px;
        height: 20px;
    }
    &__checkbox {
        opacity: 0;
        width: 0;
        height: 0;
    }
    &__slider {
        border-radius: 34px;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        -webkit-transition: .4s;
        transition: .4s;
        &:before {
            border-radius: 50%;
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 0px;
            bottom: -3px;
            background-color: #21a5b6;
            -webkit-transition: .4s;
            transition: .4s;
        }
    }
    &__checkbox:checked+&__slider {
        background-color: #21a5b6;
    }
    &__checkbox:focus+&__slider {
        box-shadow: 0 0 1px #2196F3;
    }
    &__checkbox:checked+&__slider:before {
        -webkit-transform: translateX(30px);
        -ms-transform: translateX(30px);
        transform: translateX(30px);
        background-color: #fff;
    }
    &__checkbox:checked+&__slider--black:before {
        background-color: rgb(92, 92, 92);
    }
}
</style>