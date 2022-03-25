<template>
  <el-container class="app-container">
    <el-menu router
             :default-active="defaultActive"
             :collapse="false"
             unique-opened
             active-text-color="#409eff"
    >
      <el-menu-item index="/admin">
        管理总览
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>文章</template>
        <el-menu-item index="/admin/post-list">文章列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>评论</template>
        <el-menu-item index="/admin/comment" disabled>评论列表</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/admin/system" disabled>
        系统设置
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-header class="admin-header">
        指尖魔法屋
      </el-header>
      <el-scrollbar>
        <el-main>
          <NuxtChild/>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: "admin",
  middleware: ["auth"]
})

let defaultActive = '/admin/post-list';
</script>
<style lang="less" scoped>
.app-container {
  .el-header {
    background-color: #b3c0d1;
    display: flex;
  }
}
</style>
