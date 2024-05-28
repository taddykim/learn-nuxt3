<template>
  <!-- <q-page padding> -->
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" alt="" />
    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
  <!-- </q-page> -->
</template>

<script setup lang="ts">
// defineProps({
//   thumbnail: {
//     type: String,
//     default: '',
//     // default: 'https://i.ibb.co/XbsPPmQ/image.png',
//   },
//   title: String,
//   subtitle: String,
// });
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}

defineProps<Props>();

// defineEmits(['click'])
defineEmits<{
  click: [];
}>();
</script>
