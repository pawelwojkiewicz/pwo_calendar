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
        }
    }
    .vs--unsearchable .vs__search {
      position: absolute;
      opacity: 0;
    }
    .vs__open-indicator {
      fill :#21a5b6!important;
    }
    .vs__dropdown-menu {
      background: transparent!important;
      width: 55px!important;
      li {
        background: transparent;
      }
    }
    .vs__dropdown-toggle {
      border: none!important;
    }
    .vs__selected {
      color: inherit!important;
    }
    .vs__dropdown-menu {
      color: inherit!important;
    }

    .vs__dropdown-option {
       color: inherit!important;
    }

</style>
