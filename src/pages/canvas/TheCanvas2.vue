<template>
  <div>
    <h1>Canvas 2</h1>
    <SceneController/>
    <canvas id="c"></canvas>
  </div>
</template>

<script>
import {initAndBuildThree} from '@/ThreeJS/canvas/Canvas2.js';
import SceneController from "@/components/SceneController.vue";

export default {
  components: {SceneController},
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