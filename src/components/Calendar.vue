<template>
    <div class="calendar" v-touch:swipe.left="nextMonth" v-touch:swipe.right="prevMonth">
        <ul class="calendar__week-list">
            <li class="calendar__week-list-element" v-for="(day,index) in days" :key="index">
                {{$t(`${day}`)}}
            </li>
        </ul>
        <ul class="calendar__month-list">
            <li class="calendar__month-list-element calendar__month-list-element--empty"  v-for="(day,index) in firstDays" :key="'siema'+ index"></li>
            <li class="calendar__month-list-element" @click="openModal(day)" v-for="(day,index) in moment.daysInMonth()" :key="index+'day'" :class="{'calendar__month-list-element--today': day === today && currentMonth===moment.format('MMMM') && currentYear===moment.format('YYYY')   }">
                <span class="calendar__month-list-text">{{day}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import moment from 'moment'
export default {
    data() {
        return {
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            defaultMoment: new moment()
        }
    },
    
    computed: {
        ...mapState([
            'moment',
        ]),
       
        today() {
            return this.defaultMoment.get('date')
        },
        currentMonth() {
            return this.defaultMoment.format('MMMM')
        },
         currentYear() {
            return this.defaultMoment.format('YYYY')
        },
         currentDate() {
            return this.moment.get('date');
        },
        firstDays() {
             const firstDay = moment(this.moment).subtract((this.currentDate), 'days');
             return firstDay.weekday();
        
        },
    },
    methods: {
        ...mapMutations([
            'nextMonth',
            'prevMonth'
        ]),
        openModal(day) {
            this.$store.commit('openModal');
            this.$store.state.modalDay = day;
        }
    }



}
</script>

<style lang="scss" scoped>
.calendar {
    &__week-list {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        max-width: 1240px;
        margin: 0 auto;
        &-element {
            color: #21a5b6;
            font-weight: 700;
            width: 14.28%;
            padding: 10px 0;
            font-size: 12px;
            text-align: center;
        }
    }
    &__month-list {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        padding: 0;
        flex-wrap: wrap;
        max-width: 1240px;
        margin: 0 auto;
        &-element {
            overflow: hidden;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
            position: relative;
            width: calc(100%/7 - 1px);
            text-align: center;
            height: 90px;
            border: 1px solid #333333;
            border-right: none;
            border-top: none;
            &:last-child {
                border-right: 1px solid #333333;
            }
            &:nth-child(-n+7) {
                border-top: 1px solid #333333;
            }
            &:hover {
                background: #2f2f2f75;
            }
            &--empty {
                &:hover {
                    background: transparent;
                    cursor: not-allowed;
                }
            }
            &--today {
                background: #333333;
            }
        }
        &-text {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 10px;
            font-size: 12px;
        }
    }
}

@media screen and (min-width: 768px) {
    .calendar {
        &__week-list {
            &-element {
                padding: 20px 0;
                font-size: 14px;
            }
        }
        &__month-list {
            &-element {
                height: 145px;
            }
            &-text {
                font-size: 14px;
                margin-top: 5px;
            }
        }
    }
}

@media screen and (min-width: 1024px) {
    .calendar {
        &__month-list {
            &-element {
                height: 120px;
            }
        }
    }
}

@media screen and (min-width: 1200px) {
    .calendar {
        &__month-list {
            &-element {
                height: 160px;
                width: calc(100%/7 - 4px);
                border: 1px solid #333333;
                margin: 1px;
            }
        }
    }
}
</style>