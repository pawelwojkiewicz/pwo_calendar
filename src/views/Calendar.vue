<template>
    <div>
        a tutaj mamy Calendar
        <button class="btn">
             <router-link to="/">Wyloguj się</router-link>
        </button> 
       
    </div>
</template>

<script>
    export default {
        name: 'Calendar'
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