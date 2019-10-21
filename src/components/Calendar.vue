<template>
    <div class="calendar">
        <div class="calendar__container">
        <ul class="calendar__week-list">
            <li class="calendar__week-list-element" v-for="(day,index) in days" :key="index">
                {{$t(`${day}`)}}
            </li>
        </ul>
        <ul class="calendar__month-list">
            <!-- <li class="calendar__month-list-element" v-for="(day,index) in daysInMonth" :key="index">
                {{day}}
               
            </li> -->
        </ul>
        </div>
        </div>
</template>

<script>
    
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
        &__container {
            max-width: 1260px;
            margin: 0 auto;
        }
    }
</style>