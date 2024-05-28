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
console.log('Hello Nuxt3!!!');
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
