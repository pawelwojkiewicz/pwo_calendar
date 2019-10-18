<template>
    <div class="calendar">
        <ul class="calendar__week-list">
            <li class="calendar__week-list-element" v-for="(day,index) in days" :key="index">
                {{$t(`${day}`)}}
            </li>
        </ul>

         

   
                    
        </div>
</template>

<script>
const moment = require('moment');

    export default {
        data() {
            return {
                days: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'], 
            
            }
        }
     
       
    }
    
</script>

<style lang="scss" scoped>
    .calendar {
        &__week-list{
            display: flex;
            justify-content: space-between;
            list-style: none;
            padding: 0;
            &-element {
                 font-weight: bold;
                color:#21a5b6;
                width: 14.28%;
                padding: 10px 0;
                font-size: 12px;
                 text-align: center;
            }
        }
    }
</style>