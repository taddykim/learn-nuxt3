<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageAuthTitle title="Login" />
      <PageAuthDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['guest-only'],
});
const handleLoginSuccess = async () => {
  // const { isAdmin } = useAuthUser();
  // const isAdmin = useAdmin();
  const { isAdmin } = storeToRefs(useAuthStore());
  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>

<style></style>
