<template>
    <div class="lang-changer">
        <v-select v-model="$i18n.locale" :clearable="false" :searchable="false" :options="['pl', 'en']"></v-select>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([
      'moment',
    ]),
  },
  watch: {
    '$i18n.locale': function (newLanguage) {
      this.moment.locale(newLanguage);
      localStorage.setItem('lang', newLanguage);
    },
  },
  created() {
    this.moment.locale(localStorage.getItem('lang'));
  },
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
.lang-changer {
    width: 55px;
    &__select {
        background: transparent;
        border: none;
        text-transform: uppercase;
        color: #fff;
        &:after {
            color: #fff;
        }
        &:focus {
            outline: none;
        }
        option {
            background: #464646;
            color: #fff;
        }
    }
    &--absolute {
        position: absolute;
        right: 10px;
        top: 10px;
        height: 55px;
        .vs__actions {
            top: 20px;
        }
    }
}

.v-select {
    height: 100%;
}


.vs--unsearchable {
    .vs__dropdown-toggle {
        height: 100%;
        border: none;
    }

}
.vs__open-indicator {
  fill: #21a5b6;
}
.vs--single {
  .vs__selected {
  border: none;
  width: 100%;
  color: inherit;
  height: 100%;
  text-transform: uppercase;
}
}

.vs__actions {
    position: absolute;
    right: -4px;
    top: 12px;
}

.vs__dropdown-menu {
  background: transparent;
  width: 100%;
  min-width: auto;
  left: 4px;
  li {
    width: 100%;
    color: inherit;
    text-transform: uppercase;
  }
}
.vs__dropdown-option {
      padding: 3px 3px 3px 10px;
}
</style>
