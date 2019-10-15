<template>
    <transition name="alert-fade" mode="out-in">
    <div class="alert">
        <span class="alert__text">
            <slot></slot>
        </span>
    </div>
    </transition>
</template>

<script>
    export default {
        name: 'Alert'
    }
</script>

<style lang="scss">
 .alert {
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
    top: 0;
    &__text {
        padding: 20px;
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
    top: -50px;
}

@media screen and (min-width: 768px) {
    .alert {
        width: auto;
    }
}
</style>