<template>
  <div id="canvas">
    <div class="reset" @click="resetEditors">Reset</div>
    <div id="layer-holder">
      <canvas v-for="layer in layers.slice().reverse()" :key="layer.id" :id="layer.id"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore()      

    const resetEditors = () => {
      store.dispatch('resetEditor')
    } 
    
    return {
      resetEditors,
      layers: computed(() => store.state.editor.layers),
    }
  }
}
</script>

<style scoped>
  #canvas {
    grid-area: canvas;
    padding: 50px 100px;
    position: relative;
  }
  #canvas .reset {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>