<template>
    <transition name="alert-fade" mode="out-in">
    <div class="alert">
        <Logo class="logo--small"></Logo>
        <span class="alert__text">
            <slot></slot>
        </span>
    </div>
    </transition>
</template>

<script>
import Logo from '@/components/Logo.vue';
    export default {
        name: 'Alert',
        components: {
            Logo
        }
    }
</script>

<style lang="scss">
 .alert {
     display: flex;
     align-items: center;
     width: 100%;
     text-align: center;
    background:#d4edda;
    border: 1px solid #c3e6cb;
    margin-bottom: 40px;
    font-size: 16px;
    position: absolute;
     left: 50%;
     font-size: 14px;
    transform: translateX(-50%);
    top: 7px;
    padding: 20px;
    border-radius: 13px;
    &__text {
     
        display: block;
        color: #155724;
        }
    }
    .alert-fade-enter-active,
.alert-fade-leave-active {
  transition-duration: 0.5s;
  transition-property: top;
  transition-timing-function: ease;

}

.alert-fade-enter,
.alert-fade-leave-active {
    top: -100px;
}

@media screen and (min-width: 768px) {
    .alert {
        width: auto;
    }
}
</style>