<template>
  <div>
    <h1>Canvas 1</h1>
    <canvas id="c"></canvas>
  </div>
</template>

<script>
import {initAndBuildThree} from '@/ThreeJS/Introduction/A_UnCudeSimple.js';

export default {
  mounted() {
    const canvas = this.$el.querySelector('#c');
    const container = canvas.parentElement;
    initAndBuildThree(container);
  },
  methods: {},
  beforeUnmount() {

  }
}
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}

div {
  display: flex;
  flex-direction: column;
}

</style>