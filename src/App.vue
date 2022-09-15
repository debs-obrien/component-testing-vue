<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from "./components/HelloWorld.vue";
  import Count from "./components/Count.vue";
  import Title from "./components/Title.vue";
  import Card from "./components/Card.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://playwright.dev" target="_blank">
      <img
        src="./assets/playwright-logo.svg"
        class="logo vue"
        alt="Playwright logo"
      />
    </a>
  </div>

  <Title msg="Vite + Playwright" />
  <Card>
    <Count />
  </Card>
  <HelloWorld />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
