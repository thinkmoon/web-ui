import { defineNuxtConfig } from 'nuxt';
import viteCompression from 'vite-plugin-compression';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import runtimeConfig from './runtime.config';

const lifecycle = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  publicRuntimeConfig: runtimeConfig,
  meta: {
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'keywords', content: runtimeConfig.KEYWORDS.join()},
      {name: 'description', content: runtimeConfig.DESCRIPTION},
    ],
    script: [
      {
        async: true,
        src: '/ads.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  css: ['assets/css/index.less'],
  // build
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus', '@popperjs/core', '@vueuse/core', 'lodash-unified', '@element-plus/icons-vue', '@floating-ui/dom'] : [],
  },
  experimental: {externalVue: false},
  vite: {
    plugins: [
      AutoImport({
        dts: true,
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          })],
      }),
      Components({
        dts: true,
        resolvers: [
          ElementPlusResolver({
            ssr: true
          }),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      viteCompression()
    ],
  }
});
