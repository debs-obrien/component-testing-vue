<script setup lang="ts">
  defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>
<style>
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
</style>
