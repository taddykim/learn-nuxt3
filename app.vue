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
const title = ref('Vue & Nuxt Master Class');
const description = ref(
  '짐코딩과 함께 Vue3 기본부터 실전, 활용! 그리고 Nuxt Framework까지 함께 배워봐요!',
);
// useHead({
//   title,
//   meta: [{ name: 'description', content: description }],
// });
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
});
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
</style>
