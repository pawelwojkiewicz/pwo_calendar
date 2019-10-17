<template>
    <div class="header">
        <Container class="header__container">
        <Button class="header__btn">
            <slot><font-awesome-icon class="header__btn-icon" icon="chevron-left" /></slot>
            <span class="header__btn-text">{{$t("prevMonth")}}</span>
        </Button>
        <div class="header__date">
            <span class="header__date-text">Styczeń 2017</span>
        </div>
        <Button class="header__btn">
            <span class="header__btn-text">{{$t("nextMonth")}}</span>
            <slot><font-awesome-icon class="header__btn-icon" icon="chevron-right" /></slot>
        </Button>
        <MenuToggler></MenuToggler>
        </Container>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import MenuToggler from '@/components/MenuToggler.vue';
import Container from '@/components/Container.vue';
    export default {
        name: 'Header',
        components: {
            Button,
            MenuToggler,
            Container
        },

    }
</script>

<style lang="scss" scoped>
    .header {
        padding: 20px 10px;
        width: 100%;
        background: #2f2f2f;
        &__btn-text {
            display: none;
        }
        &__btn {
            padding: 0;
            background: transparent;
            color: #21a5b6;
        }
        &__date {
           margin: 0 30px;
        }
        &__container {
        display: flex;
        width: 100%;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0;
        }
       
    }

    @media screen and (min-width: 768px) {
        .header {
            &__btn-text {
                display: inline-block;
            }
        }
    }
</style>