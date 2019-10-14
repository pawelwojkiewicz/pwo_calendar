<template>
    <footer class="footer">
        <span class="footer__copyright">
            Designed and Implemented by 
            <a href="https://github.com/pawelwojkiewicz" target="_blank" class="footer__link">
               <font-awesome-icon class="footer__icon" :icon="['fab', 'github']" />
               pawel_wojkiewicz
            </a>
        </span>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss">
    .footer {
        position: absolute;
        bottom: 15px;
        width: 100%;
        font-size: 14px;
        transform: translateX(-50%);
        left: 50%;
        &__copyright {
            display: block;
            text-align: center;
        }
        &__link {
            margin-top: 5px;
            justify-content: center;
            display: flex;
            align-items: center;
            color: #21a5b6;
        }
        &__icon {
            margin-right: 5px;
        }
    }

</style>