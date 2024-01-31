<template>
  <div class="columnContainer">
    <h1>Espace Evaluation</h1>
    <canvas id="c"></canvas>
  </div>
</template>

<script>
import {initAndBuildThree} from '@/ThreeJS/evaluation/OpenEvaluation';

export default {
  components: {},
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

</style>