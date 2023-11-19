import type { PluginsInjections } from '@/types/plugins';

declare module '#app' {
    interface NuxtApp extends PluginsInjections {}
  }
  
  declare module 'nuxt/dist/app/nuxt' {
    interface NuxtApp extends PluginsInjections {}
  }
  
  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends PluginsInjections {}
  }