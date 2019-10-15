<template>
    <div>
        WITAJ {{user.username}}!!! <br>
        <router-link @click.native="logout" to="/login">Wyloguj się</router-link>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
    export default {
        name: 'Home',
          computed: {
                 ...mapState([
                 'user',
             ])
          },
          methods: {
               ...mapMutations([
                 'logout'
             ]),
          }
    }
</script>

<style lang="scss" scoped>
    
</style>