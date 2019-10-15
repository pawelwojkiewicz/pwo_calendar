<template>
     <transition name="form-error-fade" mode="out-in">
        <span class="error">
            <slot></slot>
        </span>
     </transition>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
    export default {
        name: 'FormError',
    }
</script>

<style lang="scss" scoped>
    .error {
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            color: #ff5d5d;
            font-size: 13px;
            display: block;
            width: 100%;
            text-align: center;
            bottom: -21px;
    }
    .form-error-fade-enter-active,
.form-error-fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;

}

.form-error-fade-enter,
.form-error-fade-leave-active {
   opacity: 0;
}

</style>