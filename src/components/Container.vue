<template>
      <div class="container">
          <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Container'
    }
</script>

<style lang="scss">
        .container {
            padding: 100px 10px 0 10px;
        }
        @media screen and (min-width: 480px) {
            .container {
                padding: 0px 10px 10px 10px;
            }
        }
        @media screen and (min-width: 768px) {
            .container {
                padding-top: 150px;
                width: 80%;
                margin: 0 auto;
            }
        }
        @media screen and (min-width: 1024px) {
            .container {
                width: 100%;
                position: absolute;
                transform: translate(-50%,-50%);
                left: 50%;
                top: 50%;
                padding-top: 0;
                max-width: 400px;
            }
        }
    

</style>