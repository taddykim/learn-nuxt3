<template>
  <q-page padding>
    <!-- <div class="text-h2">Learn Nuxt 3</div> -->
    <div class="q-my-xl text-center">
      <!-- <div class="text-h4"></div> -->
      <PageTitle title="All Courses" />
      <!-- <p class="q-mt-sm text-grey-8">웹 개발 입문부터 실전까지 학습해보세요!</p> -->
      <PageDescription description="웹 개발 입문부터 실전까지 학습해보세요!" />
    </div>
    <div class="row q-col-qutter-lg">
      <!-- <div v-for="n in 3" :key="n" class="col-12 col-md-4 col-sm-6"> -->
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <!-- <NuxtLink v-slot="{ navigate }" custom :to="`/course/${courseSlug}`"> -->
        <NuxtLink v-slot="{ navigate }" custom :to="path">
          <course-card
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
            @click="navigate"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
console.log('index.vue', process.server);
</script>

<script setup lang="ts">
const { courses } = useCourses();
</script>

<style scoped></style>
