<template>
    <button type="button" class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button'
    }
</script>

<style lang="scss">
    .btn {
        white-space: nowrap;
        background: #21a5b6;
        padding: 20px 30px;
        border-radius: 0;
        text-align: center;
        border: none;
        font-size: 18px;
        &:hover {
            cursor: pointer;
            background: #369fad;
        }
        &--wide {
            width: 100%;
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