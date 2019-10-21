<template>
    <div class="modal">
        <button @click="closeModal" class="modal__close"><font-awesome-icon icon="times" /></button>
        <div class="modal__content">
            <span class="modal__title">
                      {{modalDay}} {{ moment | moment('MMMM YYYY') }}   
                </span>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
    name: 'Modal',
    computed: {
        ...mapState([
            'modalDay',
            'moment'
        ]),
    },
     methods: {
         ...mapMutations([
            'closeModal',
        ]),
    },
}
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
    &__close {
        padding-right: 10px;
        padding-top: 10px;
        background: transparent;
        display: flex;
        justify-content: flex-end;
        border: none;
        box-shadow: none;
        color: #fff;
        position: absolute;
        width: 100%;
        font-size: 30px;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
    &__title {
        display: block;
        text-align: center;
        font-size: 30px;
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
}

@media screen and (min-width: 768px) {
    .modal {
        width: 600px;
        min-height: 600px;
        height: auto;
        overflow: hidden;
    }
}




</style>