// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@formkit/nuxt'],
    formkit: {
        // Experimental support for auto loading (see note):
        autoImport: true
    },
    css: ['@/assets/styles/global.scss', '@/assets/styles/reset.scss', '@/assets/fonts/fonts.css', '@/assets/styles/formkit.scss', 'vue-toastification/dist/index.css'],
    runtimeConfig: {
        public: {
            apiUrl: 'localhost:3333'
        }
    }
});
