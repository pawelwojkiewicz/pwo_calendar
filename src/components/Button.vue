<template>
    <button type="button" class="btn" :class="{'btn--is-success' : success}">
        <slot></slot>
    </button>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  name: 'Button',
   computed: {
    ...mapState([
      'success'
    ]),
  },

};
</script>

<style lang="scss">
    .btn {
        white-space: nowrap;
        background: #21a5b6;
        padding: 20px 30px;
        border-radius: 4px;
        text-align: center;
        border: none;
        font-size: 18px;
        transition: .3s;
        &:hover {
            cursor: pointer;
            background: #369fad;
        }
        &:focus {
            outline: none;
        }
        &--wide {
            width: 100%;
        }
        &--is-success {
            background: #4caf50;
            &:hover {
                  background: #4caf50;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .btn {
            &--wide {
                width: 300px;
            }
        }
    }

     @media screen and (min-width: 1260px) {
        .btn {
            &--wide {
                width: 100%;
            }
        }
    }

</style>
