<template>
  <div>
    <NuxtLayout name="admin">
      <template #header>
        <q-header elevated class="bg-primary text-white">
          <q-toolbar>
            <q-toolbar-title> Vue & Nuxt Mastery Admin </q-toolbar-title>
          </q-toolbar>
        </q-header>
      </template>
      <div class="q-my-xl text-center">
        <!-- <div class="text-h4">레이아웃 재정의</div> -->
        <PageTitle title="레이아웃 재정의" />
        <!-- <p class="q-mt-sm text-grey-8">
          Admin Layout 실습을 위한 페이지 입니다.
        </p> -->
        <PageDescription
          description="Admin Layout 실습을 위한 페이지 입니다."
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Override Page',
  layout: false,
});
</script>

<style scoped></style>
