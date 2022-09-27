import viteCompression from 'vite-plugin-compression';
import runtimeConfig from './runtime.config';

export default defineNuxtConfig({
  app: {
    cdnURL: 'https://thinkmoon.github.io/thinkblog/',
  },
  publicRuntimeConfig: runtimeConfig,
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: runtimeConfig.KEYWORDS.join() },
      { name: 'description', content: runtimeConfig.DESCRIPTION },
    ],
    script: [
      {
        src: 'https://cdn.staticfile.org/qiniu-js/3.4.1/qiniu.min.js',
      },
      {
        async: true,
        src: '/ads.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  hooks: {
    "vite:extendConfig"(
      clientConfig,
      { isClient }
    ) {
      if (isClient) {
        console.log("允许")
        // clientConfig.build.rollupOptions.output.manualChunks = (id) => {
        //   let pkgName = 'other';
        //   const pkgMatch = id.match(/(pages|components|node_modules)\/(.*?)(\/|\.|$)/);
        //   if (pkgMatch?.length >= 3) {
        //     pkgName = pkgMatch[2] || pkgName
        //   }
        //   return pkgName
        // }
      }else{
        console.log("不允许")
      }
    }
  },
  css: ['assets/css/index.less'],
  vite: {
    plugins: [viteCompression()],
    build: {
      rollupOptions: {
        output: {
          // manualChunks(id) {
          //   let pkgName = 'other';
          //   const pkgMatch = id.match(/(pages|components|node_modules)\/(.*?)(\/|\.|$)/);
          //   if (pkgMatch?.length >= 3) {
          //     pkgName = pkgMatch[2] || pkgName
          //   }
          //   return pkgName
          // }
        },
      }
    }
  }
});
