<template>
    <div class="header">
        <Container class="header__container">
            <Button class="header__btn" @click.native="prevMonth">
                    <slot><font-awesome-icon class="header__btn-icon header__btn-icon--left " icon="chevron-left" /></slot>
                    <span class="header__btn-text">{{$t("prevMonth")}}</span>
                </Button>
            <div class="header__date">
                <span class="header__date-text"> {{ moment | moment("MMMM YYYY") }} </span>
            </div>
            <Button class="header__btn" @click.native="nextMonth">
                    <span class="header__btn-text">{{$t("nextMonth")}}</span>
                    <slot><font-awesome-icon class="header__btn-icon header__btn-icon--right" icon="chevron-right" /></slot>
                </Button>
            <MenuToggler></MenuToggler>
        </Container>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import moment from 'moment';
import Button from '@/components/Button.vue';
import MenuToggler from '@/components/MenuToggler.vue';
import Container from '@/components/Container.vue';
import Calendar from '@/components/Calendar.vue';

export default {
  name: 'Header',
  components: {
    Button,
    MenuToggler,
    Container,
    Calendar,
  },
  computed: {
    ...mapState([
      'moment',
    ]),
  },
  methods: {
    ...mapMutations([
      'prevMonth',
      'nextMonth',
    ]),
  },


};
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
        width: 180px;
        text-align: center;
        text-transform: capitalize;
    }
    &__container {
        display: flex;
        width: 70%;
        align-items: center;
        max-width: 1200px;
        padding: 0;
    }
}

@media screen and (min-width: 768px) {
    .header {
        &__container {
            width: 100%;
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
        padding: 20px 90px;
        &__container {

            max-width: 1240px;
            justify-content: space-between;
        }
        &__date {
            font-size: 20px;
            margin: 0 50px;
        }
        &__btn {
            width: 220px;
            padding: 20px;
            display: flex;
            font-size: 16px;
            justify-content: center;
            align-items: center;
            color: #fff;
            background: #21a5b6;
            position: relative;
            &-text {
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
