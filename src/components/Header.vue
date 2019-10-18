<template>
    <div class="header">
        <Container class="header__container">
        <Button class="header__btn"  @click.native="prevMonth">
            <slot><font-awesome-icon class="header__btn-icon header__btn-icon--left " icon="chevron-left" /></slot>
            <span class="header__btn-text">{{$t("prevMonth")}}</span>
        </Button>
        <div class="header__date">
            <span class="header__date-text"> {{ currentDate | moment("MMMM") }} </span>
        </div>
        <Button class="header__btn" @click.native="nextMonth" >
            <span class="header__btn-text">{{$t("nextMonth")}}</span>
            <slot><font-awesome-icon class="header__btn-icon header__btn-icon--right" icon="chevron-right" /></slot>
        </Button>
        <MenuToggler></MenuToggler>
        </Container>
    </div>
</template>

<script>
import moment from 'moment'
import Button from '@/components/Button.vue';
import MenuToggler from '@/components/MenuToggler.vue';
import Container from '@/components/Container.vue';
    export default {
        name: 'Header',
        components: {
            Button,
            MenuToggler,
            Container
        },
        data() {
            return {
                currentDate: this.$moment(),
            }
        },
            watch: {
    '$i18n.locale': function (newLanguage) {
        this.$set(this.currentDate, this.currentDate.locale(newLanguage))
    },
  },
        methods: {
            prevMonth() {
            
                this.$set(this.currentDate, this.currentDate.subtract(1, 'months'))
                    console.log(this.currentDate.format('MMMM'))
            },
             nextMonth() {
                
                this.$set(this.currentDate, this.currentDate.add(1, 'months'))
                  console.log(this.currentDate.format('MMMM'))
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        background: #2f2f2f;
        padding: 20px 0 20px 10px;
        box-sizing: border-box;
        &__btn {
            padding: 0;
            background: transparent;
            color: #21a5b6;
            &-text {
                display: none;
            }
        }
        &__date {
           margin: 0 30px;
        }
        &__container {
        display: flex;
        width: 100%;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
        }
    }

    @media screen and (min-width: 1024px) {
        .header {
            &__container {
                top: auto;
                left: auto;
                position: relative;
                transform: none;
                justify-content: center;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .header {
            &__container {
                width: 1200px;
                justify-content: space-between;
            }
            &__date {
                font-size: 20px;
                margin: 0 50px;
            }
            &__btn {
                padding: 20px;
                display: flex;
                font-size: 16px;
                justify-content: center;
                align-items: center;
                color: #fff;
                background: #21a5b6;
                position: relative;
                &-text  {
                    display: inline-block;
                }
                &-icon {
                    &--left {
                        margin-right: 8px;
                    }
                    &--right {
                          margin-left: 8px;
                    }
                }
            }
        }
    }
</style>