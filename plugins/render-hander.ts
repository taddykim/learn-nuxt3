export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:rendered', (renderContext) => {
    console.log('app:rendered');
  });
  nuxtApp.hook('app:beforeMount', (vueApp) => {
    console.log('app:beforeMount');
  });
  nuxtApp.hook('app:mounted', (vueApp) => {
    console.log('app:mounted');
  });
});
