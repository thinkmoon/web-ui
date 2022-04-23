<template>
  <div class="blog-posts">
    <div
        v-for="item in postList"
        :key="item.cid"
        class="content-box"
    >
      <div class="posts-default-img">
        <a
            :href="`/post/${item.cid}`"
            :title="item.title"
        >
          <div class="overlay"/>
          <el-image
              v-if="item.fields.thumb"
              :src="item.fields.thumb"
              fit="cover"
              lazy
          />
        </a>
      </div>
      <div class="posts-default-box">
        <div class="posts-default-title">
          <div
              v-if="item.tag"
              class="post-entry-categories"
          >
            <el-tag
                v-for="tagItem in item.tag"
                :key="tagItem"
                class="post-tag"
                rel="tag"
            >
              <el-link
                  :href="`/tag/${tagItem.tid}/1`"
                  type="primary"
              >
                {{ tagItem.name }}
              </el-link>
            </el-tag>
          </div>
          <el-link
              :href="`/post/${item.cid}`"
              :underline="false"
              class="post-title"
          >
            {{ item.title }}
          </el-link>
        </div>
        <div class="posts-default-content">
          <div class="posts-text">
            {{ item.fields.desc }}
          </div>
          <div class="posts-default-info">
            <div class="left">
              <div class="post-author">
                <img
                    height="16"
                    src="https://blog.cdn.thinkmoon.cn/%E5%81%B7%E6%98%9F%E4%B9%9D%E6%9C%88%E5%A4%A9%E5%A4%B4%E5%83%8F.jpeg"
                    style="border-radius:50% "
                    width="16"
                >
                <el-link
                    href="https://www.thinkmoon.cn"
                    target="_blank"
                >
                  醉月思
                </el-link>
              </div>
              <div class="ico-warp">
                <el-icon>
                  <icon-FolderOpened/>
                </el-icon>
                <el-link :href="`/category/${item.category_id}/1`">
                  {{ item.category }}
                </el-link>
              </div>
              <div class="ico-warp">
                <el-icon>
                  <icon-Calendar />
                </el-icon>
                <a>{{ $filters.time(item.created * 1000) }}</a>
              </div>
            </div>
            <div class="right">
              <div class="ico-warp">
                <el-icon>
                  <icon-View />
                </el-icon>
                <span>{{ item.views }}</span>
              </div>
              <div class="ico-warp">
                <el-icon>
                  <icon-Star />
                </el-icon>
                <span>{{ item.likes }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  postList: Array,
});
</script>
<style lang="less">
.blog-posts {
  text-align: left;
}

.content-box {
  margin: 20px 0;
  padding: 20px;
  background: #fff;

  .el-image {
    height: 256px;
    width: 100%;
  }

  .post-title {
    font-size: 24px;
    color: #000;

    &:hover {
      color: var(--el-link-default-active-color);
    }
  }

  .posts-text {
    color: #606266;
    font-size: 14px;
  }

  .post-tag {
    margin: 4px 6px;
  }
}
.posts-default-info {
  margin-top: 6px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  color: #909399;

  .ico-warp {
    display: flex;
    align-items: center;

    & :deep(.el-icon) {
      margin-right: 4px;
    }
  }

  >div {
    display: flex;
  }

  .post-author {
    display: flex;
    align-items: center;
  }

  div {
    margin: 0 2px;
  }

  a {
    line-height: 14px;
  }
}
</style>
