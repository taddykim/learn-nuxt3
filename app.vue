<template>
  <!-- <div>Hello Nuxt3!</div> -->
  <NuxtLayout>
    <NuxtPage />
    <!-- <NuxtPage :page-key="(route) => route.fullPath" /> -->
    <!-- <NuxtPage page-key="static" /> -->
    <!-- <RouterView /> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
// console.log('Hello Nuxt3!!!');
// const nuxtApp = useNuxtApp();
// console.log('nuxtApp: ', nuxtApp);

// vue application instance
// nuxtApp.vueApp.component();
// nuxtApp.vueApp.directive();
// nuxtApp.vueApp.use();

// provide 활용
// nuxtApp.provide('hello', (msg: string) => `Hello ${msg}`);
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
