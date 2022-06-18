<template>
  <div>
    <DefaultMenu />
    <div class="app-container">
      <div class="layout">
        <div class="main-content">
          <slot />
        </div>
        <div class="page-section">
          <Search />
          <GoogleAd />
        </div>
      </div>
    </div>
    <ClientOnly>
      <el-backtop :bottom="100" />
    </ClientOnly>
  </div>
  <Footer />
</template>
<script lang="ts" setup>
import Search from '~~/components/section/Search.vue';
import GoogleAd from '~/components/section/GoogleAd.vue';</script>

<style lang="less" scoped>
.layout {
  margin: auto;
  padding-bottom: 20px;
  width: 70%;
  display: flex;

  .main-content {
    flex: 1;
  }

  .page-section {
    width: 300px;
    padding: 20px;
  }
}
@media (max-aspect-ratio: 14/9) {
  .layout {
    width: 90%;
  }
}
@media (max-aspect-ratio: 10/9) {
  .layout {
    flex-direction: column;
    > .page-section {
      width: auto;
    }
  }
}
</style>
