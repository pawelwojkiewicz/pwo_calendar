<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'Form'
    }
</script>

<style lang="scss">
    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__group {
            position: relative;
            width: 100%;
            margin: 10px 0;
        }
        &__icon {
            position: absolute;
            left: 0;
            top: 50%;
            transform:translateY(-50%);
            color: #21a5b6;
        }
        &__input {
            font-size: 18px;
            width: 100%;
            background: transparent;
            border: none;
               border-bottom: 1px solid #3a3a3a;
            padding: 10px 0;
            text-align: center;
            transition: .3s;
            &:focus {
                outline: none;
                border-bottom: 1px solid #21a5b6;
            }
            &::placeholder {
                font-size: 18px;
            }
        }
         &__bottom {
                margin-top: 20px;
               text-align: center;
            &-link {
                color: #21a5b6;
                text-decoration: underline;
            }
       }
    }

</style>