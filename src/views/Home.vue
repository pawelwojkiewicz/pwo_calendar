<template>
    <div>
        a tutaj mamy Calendar
        <router-link to="/login">Wyloguj się</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="scss" scoped>
    .btn {
        background: black;
       a {
           color: #fff;
       }
    }
</style>