<template>
  <div>
    <DefaultMenu></DefaultMenu>
    <div class="app-container">
      <slot></slot>
    </div>
    <Footer></Footer>
    <ClientOnly><el-backtop :bottom="100"></el-backtop></ClientOnly>
  </div>
</template>
<script lang="ts" setup>
</script>

<style lang="less" scoped>
</style>