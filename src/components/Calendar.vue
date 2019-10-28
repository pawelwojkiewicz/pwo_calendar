<template>
    <div class="calendar" v-touch:swipe.left="nextMonth" v-touch:swipe.right="prevMonth">
        <ul class="calendar__week-list">
            <li class="calendar__week-list-element" v-for="(day,index) in days" :key="index">
                {{$t(`${day}`)}}
            </li>
        </ul>
    
        <ul class="calendar__month-list">
            <li class="calendar__month-list-element calendar__month-list-element--empty" :class="{'calendar__month-list-element--white' : !nightMode}" v-for="(day,index) in firstDays" :key="'siema'+ index"></li>
            <li class="calendar__month-list-element" @click="openModal(day)" v-for="(day,index) in moment.daysInMonth()" :key="index+'day'" :class="{'calendar__month-list-element--today': day === today && checkCurrentDay, 'calendar__month-list-element--today-white' : !nightMode &&  day === today && checkCurrentDay, 'calendar__month-list-element--white' : !nightMode}">
                <span class="calendar__month-list-text">{{day}}</span>
                <ul class="calendar__element-list">
                    <li class="calendar__element-list-item" :class="{'calendar__element-list-item--checked':  task.checkedTask} " v-for="(task,i) in allTasks(day)" :key="i">
                        {{task.text}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import moment from 'moment';
import { watch } from 'fs';

export default {
    data() {
        return {
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
            defaultMoment: new moment(),
        };
    },

    computed: {
        ...mapState([
            'moment',
            'calendarTasks',
            'modalDay',
            'borderColor',
            'nightMode'
        ]),

        today() {
            return this.defaultMoment.get('date');
        },
        currentMonth() {
            return this.defaultMoment.format('M');
        },
        currentYear() {
            return this.defaultMoment.format('YYYY');
        },
        currentDate() {
            return this.moment.get('date');
        },
        firstDays() {
            if (localStorage.getItem('lang') === 'en') {
                const firstDay = moment(this.moment).subtract((this.currentDate), 'days');
                return firstDay.weekday();
            }
            const firstDay = moment(this.moment).subtract((this.currentDate - 1), 'days');
            return firstDay.weekday();
        },
        checkCurrentDay() {
            if (this.currentMonth === this.moment.format('M') && this.currentYear === this.moment.format('YYYY')) {
                return true;
            }
        },

    },
    methods: {
        ...mapMutations([
            'nextMonth',
            'prevMonth',
        ]),
        ...mapActions([
            'getAllTasks',
        ]),
        openModal(day) {
            this.$store.commit('openModal');
            this.$store.state.modalDay = day;
            document.body.classList.add('no-scroll');
            document.documentElement.classList.add('no-scroll');
        },
        calendarBox(day) {
            return `${day}-${this.moment.format('M-Y')}`;
        },
        allTasks(day) {
            if (typeof this.calendarTasks[this.calendarBox(day)] !== 'undefined') {
                return this.calendarTasks[this.calendarBox(day)].tasklist;
            }
            return [];
        },
    },
    
    created() {
        this.getAllTasks();
    },
};
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
        max-width: 1400px;
        margin: 0 auto;
        &-element {
            overflow: hidden;
            font-weight: 700;
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
            &--today-white {
                background: rgb(243, 246, 248);
            }
            &--white {
                border: 1px solid #d6d6d6;
                border-top: none;
                border-right: none;
                &:hover {
                    background: rgb(243, 246, 248);
                }
                &:nth-child(-n+7) {
                    border-top: 1px solid #d6d6d6;
                }
                &:last-child {
                    border-right: 1px solid #d6d6d6;
                }
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
    &__element-list {
        list-style: none;
        font-weight: 500;
        font-size: 9px;
        font-family: 'Roboto', sans-serif;
        padding: 0;
        text-align: left;
        padding-top: 20px;
        overflow: hidden;
        &-item {
            color: #fff;
            background: #bd5959;
            margin: 1px 2px;
            padding: 1.5px;
            border-radius: 3px;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
            &--checked {
                text-decoration: line-through;
                opacity: 0.7;
                background: #607d8b
            }
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
        &__element-list {
            font-size: 13px;
            padding-top: 26px;
            &-item {
                margin: 3px;
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
                height: 180px;
                width: calc(100%/7 - 4px);
                border: 1px solid #333333;
                margin: 1px;
                &--white {
                    border: 1px solid #d6d6d6;
                }
            }
        }
        &__container {
            max-width: 1260px;
            margin: 0 auto;
        }
        &__element-list {
            &-item {
                -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
                box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
                font-size: 14px;
                padding: 3px 5px;
                margin: 4px 3px;
            }
        }
    }
}
</style>
