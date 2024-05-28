<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Master Class 웹은 Nuxt3로 만들어졌습니다
      </p>
      <!-- <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      /> -->
      <div class="column">
        <router-link to="/">RouterLink Home</router-link>
        <router-link to="https://youtube.com/@gymcoding"
          >RouterLink Youtube</router-link
        >
        <br />
        <NuxtLink prefetched-class="bg-yellow" to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://youtube.com/@gymcoding"
          >NuxtLink Youtube</NuxtLink
        >
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped></style>
