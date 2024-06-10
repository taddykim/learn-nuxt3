<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <!-- <div class="text-h4">About</div> -->
      <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Master Class 웹은 Nuxt3로 만들어졌습니다"
      />
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
        <div class="q-tutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useDate('counter')</div>
          <div>
            counter: {{ counter }}
            <q-btn
              label="counter"
              color="primary"
              dense
              no-caps
              @click="counter++"
            />
          </div>
          <div>
            sameCounter: {{ sameCounter }}
            <q-btn
              label="sameCounter"
              color="primary"
              dense
              no-caps
              @click="sameCounter++"
            />
          </div>
          <div>
            <q-btn label="clear" @click="clearNuxtState('counter')" />
          </div>
        </div>

        <div class="q-tutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useCounterStore()</div>
          <div>count: {{ count }}</div>
          <div>doubleCount: {{ doubleCount }}</div>
          <div>
            <q-btn label="increment" @click="counterStore.increment()" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const counter = useState<number>('counter', () => 1);
const sameCounter = useState<number>('counter');

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>

<style scoped></style>
