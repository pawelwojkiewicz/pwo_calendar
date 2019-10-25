<template>
    <ul class="task-list">
        <li class="task-list__element" v-for="(taskItem,index) in taskList" :key="'task-item' + index">
            <input class="inp-cbx" :id="'task-item' + index" type="checkbox" style="display: none;" />
            <label class="cbx" :for="'task-item' + index">
                    <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
            </label>
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
        overflow: unset;
    }
}

.cbx {
  margin: auto;
  margin-right: 10px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
}
.cbx span:first-child svg {
  position: absolute;
  top: 4px;
  left: 3px;
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #21a5b6;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.cbx:hover span:first-child {
  border-color: #21a5b6;
}

.inp-cbx:checked + .cbx span:first-child {
  background:#21a5b6;
  border-color: #21a5b6;
  animation: wave 0.4s ease;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}




</style>
