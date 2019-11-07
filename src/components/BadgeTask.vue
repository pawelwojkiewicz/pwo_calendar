<template>
    <div class="badge">
        <span class="badge__text">{{badgeQuantity}}</span>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
    name: 'BadgeTask',
      computed: {
        ...mapState([
            'badgeQuantity'
        ]),
    },
}
</script>

<style lang="scss" scoped>
.badge {
    z-index: 3000;
    position: absolute;
      top: -12px;
        right: -6px; 
        left: auto;
    background: #bd5958;
    color: #fff;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    &__text {
        font-weight: bold;
        font-size: 12px;
    }
}
</style>