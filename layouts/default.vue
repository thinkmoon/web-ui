<template>
  <div>
    <DefaultMenu />
    <div class="app-container">
      <slot />
    </div>
    <ClientOnly>
      <el-backtop :bottom="100" />
    </ClientOnly>
  </div>
  <Footer />
</template>
<script lang="ts" setup>
</script>

<style lang="less" scoped>
</style>
