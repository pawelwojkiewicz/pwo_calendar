<template>
    <div class="home">
        <Alert v-show="loginComplete">
            <slot>
                {{pl.alertLogin}} <span class="home__user">{{user.username}}!</span>
            </slot>
        </Alert>
        WITAJ {{user.username}}!!! <br>
        <router-link @click.native="logoutComplete" to="/login">Wyloguj się</router-link>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import Alert from '@/components/Alert.vue';

    export default {
        name: 'Home',
        components: {
            Alert
        },
        computed: {
               ...mapState([
               'user',
               'pl',
               'loginComplete'
           ])
        },
        methods: {
             ...mapActions([
               'logoutComplete'
           ]),
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        &__user {
            font-weight: 600;
        }
    }
</style>