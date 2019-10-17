<template>
    <div class="lang-changer">
        <v-select v-model="$i18n.locale" :clearable="false" :searchable="false" :options="['pl', 'en']"></v-select>
     </div>

</template>

<script>
export default {
  watch: {
    '$i18n.locale': function (newLanguage) {
      localStorage.setItem('lang', newLanguage);
    },
  },
};
</script>

<style lang="scss" scoped>
    .lang-changer {
        position: absolute;
        right: 10px;
        top: 10px;
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
    }

</style>
