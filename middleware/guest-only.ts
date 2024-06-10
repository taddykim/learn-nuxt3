export default defineNuxtRouteMiddleware((to, from) => {
  console.log('to', to);
  console.log('from', from);
  // const { isAuthenticated } = useAuthUser();
  // const isAuthenticated = useAuthenticated();
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (isAuthenticated.value) {
    if (process.server) return navigateTo('/');
    return abortNavigation();
  }
});
