export default defineNuxtRouteMiddleware((to, from) => {
  // const { isAdmin, isAuthenticated } = useAuthUser();
  // const isAdmin = useAdmin();
  // const isAuthenticated = useAuthenticated();

  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());

  console.log('to', to);
  console.log('from', from);

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }

  if (!isAdmin.value) {
    return navigateTo('/');
  }
});
