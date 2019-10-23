<template>
    <ul class="task-list">
        <li class="task-list__element" v-for="(taskItem,index) in taskList" :key="'task-item' + index">
            <input type="checkbox" class="task-list__checkbox">
            <input type="text" class="task-list__input" placeholder="Wpisz notatkę..." v-model="taskItem.text">
            <font-awesome-icon icon="times" class="task-list__icon" @click="deleteTask(taskItem)" />
        </li>

    </ul>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'TaskList',
  computed: {
    ...mapState([
      'taskList',
      'modalId',
    ]),
  },
  methods: {
    deleteTask(taskItem) {
      console.log(taskItem);
      this.taskList.splice(this.taskList.indexOf(taskItem), 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
    padding: 0;
    max-height: 340px;
    overflow: auto;
    list-style: none;
    &__element {
        position: relative;
        color: #333;
        display: flex;
        align-items: center;
    }
    &__input {
        background: transparent;
        border: none;
        width: 100%;
        border-bottom: 1px solid transparent;
        padding: 10px 0;
        transition: .3s;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        resize: none;
        line-height: 18px;
        border-radius: 0;
        &:focus {
            outline: none;
            padding: 10px 0;
            border-bottom: 2px solid #21a5b6;
        }
        &::placeholder {
            color: rgba(255, 255, 255, 0.425);
            font-size: 18px;
        }
    }
    &__icon {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
}

@media screen and (min-width: 768px) {
    .task-list {
        max-height: 100%;
    }
}
</style>
