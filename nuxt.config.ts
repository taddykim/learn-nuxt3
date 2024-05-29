// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ['nuxt-quasar-ui'],
  quasar: {
    /* */
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['usei18n'],
      },
    ],
  },
});
