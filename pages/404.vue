<template>
  <div class="app-container"></div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware() {
    return navigateTo('/page/1');
  }
})
</script>

<style></style>
