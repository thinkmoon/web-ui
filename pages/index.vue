<template>
  <Title>{{ config.TITLE }}</Title>
  <div class="app-container">
    <div class="shadow center-read">
      <div class="title">{{ config.TITLE }}</div>
      <div class="read">
        <el-link href="/page/1" :underline="false">
          <el-button size="large">开始阅读</el-button>
        </el-link>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

definePageMeta({
  layout: false,
});

</script>

<style lang="less" scoped>
.app-container {
  background-image: url("./assets/img/background.jpg");
  background-position: center;
  height: 100vh;
  background-size: cover;
  .center-read {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      font-size: 36px;
      color: #fff;
    }
    .read {
      margin-top: 24px;
      /deep/ .el-button,
      .el-link {
        font-weight: bold;
        background-color: transparent;
        color: #fff;
      }
    }
  }
}
</style>
