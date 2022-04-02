<template>
  <div class="top-menu">
    <el-menu mode="horizontal" router>
      <el-menu-item index="/">指尖魔法屋</el-menu-item>
      <el-menu-item index="/category">分类</el-menu-item>
      <el-menu-item index="/tag">标签</el-menu-item>
    </el-menu>
    <div class="right">
      <el-link href="/login" :underline="false">
        <el-icon :size="26" class="pointer">
          <icon-User />
        </el-icon>
      </el-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
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