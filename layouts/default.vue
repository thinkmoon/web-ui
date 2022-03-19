<template>
  <div>
    <DefaultMenu></DefaultMenu>
    <div class="app-container">
      <slot></slot>
    </div>
    <Footer></Footer>
    <el-backtop :bottom="100" v-if="isCustom"></el-backtop>
  </div>
</template>
<script lang="ts" setup>
const isCustom = !process.server
</script>

<style lang="less" scoped>
</style>