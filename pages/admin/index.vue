<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <!-- <div class="text-h4">Admin Page</div> -->
      <PageTitle title="Admin Page" />
      <!-- <p class="q-mt-sm text-grey-8">Admin Layout 실습을 위한 페이지 입니다.</p> -->
      <PageDescription description="Admin Layout 실습을 위한 페이지 입니다." />
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Admin Page',
  layout: 'admin',
  // middleware: ['admin-only'],
});
</script>

<style scoped></style>
