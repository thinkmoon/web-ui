<template>
  <el-container class="app-container">
    <el-container>
      <el-header class="admin-header">
        <ClientOnly>
          <el-menu
            :collapse="false"
            :default-active="defaultActive"
            active-text-color="#409eff"
            mode="horizontal"
            unique-opened
            @select="select"
          >
            <el-menu-item index="/admin">
              主页
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                文章
              </template>
              <el-menu-item index="/admin/editor">
                新增文章
              </el-menu-item>
              <el-menu-item index="/admin/post-list">
                文章列表
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </ClientOnly>
      </el-header>
      <el-scrollbar>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/admin' }">
              管理端
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/admin/post">文章</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <NuxtChild />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
});

const route = useRoute();
const defaultActive = route.path;

function select(url) {
  location.href = url;
}
</script>
<style lang="less" scoped>
.app-container {
  .admin-header {
    display: flex;
    padding: 0;

    :deep(.el-menu) {
      width: 100%;
    }
  }

  .el-main {
    padding: 8px 16px;

    .el-breadcrumb {
      margin-bottom: 8px;
    }
  }
}
</style>
