<template>
  <svg v-bind:style="styles" class="spinner spinner--circle" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
  </svg>
</template>
<script>
export default {
  name: 'Spinner',
  props: {
    size: {
      default: '40px',
    },
  },
  computed: {
    styles() {
      return {
        width: this.size,
        height: this.size,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
  $offset: 187;
  $duration: 1.4s;
  .spinner {
          margin: 0 auto;
    width: 100%;
    position: absolute;
    transform:translateY(-50%);
    top: 50%;
    animation: circle-rotator $duration linear infinite;
    * {
      line-height: 0;
      box-sizing: border-box;
    }
  }
  @keyframes circle-rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }
  .path {
    stroke-dasharray: $offset;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
            circle-dash $duration ease-in-out infinite,
            circle-colors ($duration*4) ease-in-out infinite;
  }
  @keyframes circle-colors {
    0% {
      stroke: #ffffff;
    }
    25% {
      stroke: #21a5b6;
    }
    50% {
      stroke: #21a5b6;
    }
    75% {
      stroke: #ffffff;
    }
    100% {
      stroke: #21a5b6;
    }
  }
  @keyframes circle-dash {
    0% {
      stroke-dashoffset: $offset;
    }
    50% {
      stroke-dashoffset: $offset/4;
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: $offset;
      transform:rotate(450deg);
    }
  }
</style>
