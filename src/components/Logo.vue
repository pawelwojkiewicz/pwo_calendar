<template>
    <div class="logo">
        <img src="@/assets/logo/logo.png" class="logo__img">
    </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss">
    .logo {
        &--big {
            width: 80px;
            margin-bottom: 10px;
        }
        &--small {
            width:30px;
            margin-right: 5px;
        }
        &__img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    @media screen and (min-width: 480px) {
        .logo {
            &--big {
                margin-bottom: 0;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .logo {
            &--big {
                width: 100px;
                margin-bottom: 20px;
            }
        }
    }

</style>
