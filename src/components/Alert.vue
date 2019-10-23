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
        Logo,
    },
};
</script>

<style lang="scss">
.alert {
    font-weight: bold;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    background: #b7e6c2;
    border: 1px solid #c3e6cb;
    font-size: 16px;
    position: absolute;
    left: 50%;
    font-size: 14px;
    transform: translateX(-50%);
    top: 0;
    padding: 10px 0;
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
        top: 7px;
        border-radius: 13px;
        padding: 10px;
        width: auto;
        min-width: 300px;
    }
    .alert-fade-enter,
    .alert-fade-leave-active {
        top: -100px;
    }
}
</style>
