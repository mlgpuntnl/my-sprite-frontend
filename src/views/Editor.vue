<script setup lang="ts">
import EditorHeader from '../components/editor/EditorHeader.vue';
import EditorTools from '../components/editor/EditorTools.vue';
import EditorCanvas from '../components/editor/EditorCanvas.vue';
import EditorLayers from '../components/editor/EditorLayers.vue';
import EditorFooter from '../components/editor/EditorFooter.vue';
</script>

<template>
  <div id="editor">
    <EditorHeader />
    <EditorTools />
    <EditorCanvas />
    <EditorLayers />
    <EditorFooter />
  </div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style scoped>
  #editor {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 200px auto 300px;
    grid-template-rows: 50px auto 50px;
    grid-template-areas: 
      "header header header"
      "tools canvas layers"
      "footer footer footer";
  }
</style>