<template>
  <div id="app" :style="{background: background, color: color}">
     <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapState} from 'vuex';
export default {
  created() {
    this.$moment.locale(localStorage.getItem('lang') || 'pl');
  },
   computed: {
      ...mapState([
            'background',
            'color'
        ]),
    },
};

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
@import "vue-select/src/scss/vue-select.scss";
body {
  background: rgb(70, 70, 70);
  height: 100%;
   font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  box-sizing: border-box;
}

.nightmode {
  &--disabled {
    background: #fff;
  }
}

html,
body {
 &.no-scroll {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

input,
button {
   font-family: 'Montserrat', sans-serif;
   
}


input {
  color: inherit;
}
button {
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid #464646;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px #464646 inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
