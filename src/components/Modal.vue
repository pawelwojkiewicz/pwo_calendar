<template>
    <div class="modal" :class="{'modal--white' : !nightMode}">
        <button @click="closeModal" class="modal__close" :class="{'modal__close--white' : !nightMode}"><font-awesome-icon icon="times" /></button>
        <div class="modal__content">
            <span class="modal__title">
                                              {{modalDay}} {{ moment | moment('MMMM YYYY') }}
                                    </span>
            <button @click="addTask" class="modal__add-task-btn">
                                    <font-awesome-icon icon="plus" class="modal__add-task-icon" />
                                    {{$t("addtask")}}
                                    </button>
            <TaskList v-show="ready"></TaskList>
            <div class="modal__spinner">
                <Spinner v-show="!ready"></Spinner>
            </div>
            <Button class="modal__btn" @click.native="post">
                                <span class="modal__btn-text" :class="{'modal__btn-text--hide' : success}">
                                    {{$t("saveNotes")}}
                                </span>
                                <span class="modal__btn-text" :class="{'modal__btn-text--success' : !success}">
                                    {{$t("savedNotes")}}
                                    <font-awesome-icon icon="check" class="modal__btn-icon" />
                                </span>
                                </Button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import TaskList from '@/components/TaskList.vue';
import Button from '@/components/Button.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'Modal',
  components: {
    TaskList,
    Button,
    Spinner,
  },
  computed: {
    ...mapState([
      'modalDay',
      'moment',
      'user',
      'loggedUsername',
      'modalId',
      'taskList',
      'ready',
      'success',
      'nightMode',
    ]),
  },
  methods: {
    ...mapMutations([
      'addTask',
    ]),
    ...mapActions([
      'get',
    ]),
    post() {
      this.$store.dispatch('post');
      setTimeout(() => {
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
      }, 1000);
    },

    closeModal() {
      this.$store.commit('closeModal');
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    },
  },
  created() {
    this.$store.state.modalId = `${this.modalDay}-${this.moment.format('M-Y')}`;
    this.get();
  },

};
</script>

<style lang="scss" scoped>
.modal {
    overflow: scroll;
    padding-top: 10px;
    z-index: 3000;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    background: #5d5d5d;
    -webkit-box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.75);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    &--white {
        background: #ffffff;
    }
    &__close {
        background: transparent;
        border: none;
        box-shadow: none;
        position: absolute;
        right: 10px;
        top: 10px;
        width: auto;
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        &:focus {
            outline: none;
        }
        &--white {
            color: #5f5f5f;
        }
    }
    &__content {
        padding: 45px 10px 10px 10px;
    }
    &__title {
        display: block;
        text-align: center;
        font-size: 22px;
        text-transform: capitalize;
        margin-top: 5px;
        &:after {
            content: '';
            display: block;
            background: #21a5b6;
            width: 100px;
            height: 3px;
            margin: 10px auto;
        }
    }
    &__btn {
        position: absolute;
        width: calc(100% - 20px);
        bottom: 20px;
        height: 55px;
        font-size: 16px;
        overflow: hidden;
        &-icon {
            margin-left: 5px;
        }
        &-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: .2s;
            &--hide {
                transform: translate(-50%, -250%);
            }
            &--success {
                transform: translate(-50%, 150%);
            }
        }
    }
    &__add-task-btn {
        background: transparent;
        border: none;
        margin-top: 10px;
        display: flex;
        align-items: center;
        padding: 0;
        font-size: 14px;
        cursor: pointer;
        color: inherit;
    }
    &__add-task-icon {
        margin-right: 10px;
        font-size: 20px;
        color: #21a5b6;
    }
    &__spinner {
        display: flex;
        width: 100%;
        justify-content: center;
    }
}

@media screen and (min-width: 768px) {
    .modal {
        width: 600px;
        min-height: 500px;
        height: auto;
        overflow: hidden;
        padding-bottom: 80px;
        &__title {
            font-size: 30px;
        }
        &__content {
            padding-top: 10px;
        }
        &__close {
            padding-right: 15px;
            padding-top: 15px;
        }
    }
}

@media screen and (min-width: 1200px) {
    .modal {
        &__btn {
            width: 270px;
            right: 10px;
            left: auto;
            transform: none;
            margin-left: 0;
        }
    }
}
</style>
