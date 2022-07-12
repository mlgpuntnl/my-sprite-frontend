<script setup lang="ts">
  import Editor from './views/Editor.vue'
</script>

<template>
  <Editor />
</template>

<style>
/** GLOBAL STYLING */
:root {
  --primary: #3700B3;
  --secondary: #03DAC6;
  --background: #121212;
  --surface: #FFFFFF14;
  --error: #CF6679;
  --on-primary: #000000;
  --on-secondary: #000000;
  --on-background: #ffffff;
  --on-surface: #ffffff;
  --on-error: #000000;
  --op-high: 0.87;
  --op-mid: 0.60;
  --op-disabled: 0.38;
  --font-text: sans-serif;
}
body {
  background-color: var(--background);
  color: var(--on-background);
  font-family: var(--font-text);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
