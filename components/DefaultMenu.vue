<template>
  <div class="top-menu">
    <el-menu
      :default-active="defaultActive"
      mode="horizontal"
      @select="select"
    >
      <el-menu-item index="/">
        指尖魔法屋
      </el-menu-item>
      <el-menu-item index="/category">
        <NuxtLink to="/category">
          分类
        </NuxtLink>
      </el-menu-item>
      <el-menu-item index="/tag">
        <NuxtLink to="/tag">
          标签
        </NuxtLink>
      </el-menu-item>
    </el-menu>
    <div class="right">
      <el-link
        :underline="false"
        href="/login"
      >
        <el-icon
          :size="26"
          class="pointer"
        >
          <icon-User />
        </el-icon>
      </el-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useRoute} from 'vue-router';

const route = useRoute();
const defaultActive = route.path;

function select(url) {
  location.href = url;
}
</script>
<style lang="less" scoped>
a {
  text-decoration:none
}
.top-menu {
  width: 100vw;
  z-index: 3;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  .el-menu {
    flex: 1;
    border: none;
  }
}
</style>
