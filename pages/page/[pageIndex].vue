<template>
  <div class="page-content">
    <Title>第{{ route.params.pageIndex }}页 | {{ config.TITLE }}</Title>
    <div class="blog-posts">
      <div v-for="item in postList" :key="item.cid" class="content-box">
        <div class="posts-default-img">
          <a :href="`/post/${item.cid}`" :title="item.title">
            <div class="overlay" />
            <el-image v-if="item.thumb" :src="item.thumb" fit="cover" lazy></el-image>
          </a>
        </div>
        <div class="posts-default-box">
          <div class="posts-default-title">
            <div v-if="item.tag" class="post-entry-categories">
              <el-tag
                v-for="tagItem in item.tag.split(',')"
                :key="tagItem"
                rel="tag"
                class="post-tag"
              >{{ tagItem }}</el-tag>
            </div>
            <el-link
              :href="`/post/${item.cid}`"
              :underline="false"
              class="post-title"
            >{{ item.title }}</el-link>
          </div>
          <div class="posts-default-content">
            <div class="posts-text">{{ item.desc }}</div>
            <div class="posts-default-info">
              <div class="post-author">
                <img
                  style="border-radius:50% "
                  src="https://blog.cdn.thinkmoon.cn/%E5%81%B7%E6%98%9F%E4%B9%9D%E6%9C%88%E5%A4%A9%E5%A4%B4%E5%83%8F.jpeg"
                  height="16"
                  width="16"
                />
                <el-link href="https://thinkmoon.github.io" target="_blank">醉月思</el-link>
              </div>
              <div class="ico-cat">
                <i class="el-icon-folder-opened" />
                <a>{{ item.category }}</a>
              </div>
              <div class="ico-time">
                <i class="el-icon-time" />
                <a>{{ '2019-11-08' }}</a>
              </div>
              <div class="ico-eye">
                <i class="el-icon-view" /> 138,666
              </div>
              <div class="ico-like">
                <i class="el-icon-star-off" /> 114
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-div">
        <div>
          <el-link
            :href="`/page/${Number(pageIndex) - 1}`"
            type="primary"
            v-if="Number(pageIndex) !== 1"
          >上一页</el-link>
        </div>
        <div>
          <el-link
            :href="`/page/${Number(pageIndex) + 1}`"
            type="primary"
            v-if="Number(pageIndex) !== data.pages"
          >下一页</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import PostApi from '~/api/PostApi';
import { useRoute, useRouter } from 'vue-router';

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
let pageData = {
  total: 0,
  current: 0,
};
let pageIndex = route.params.pageIndex;
pageData.current = Number(pageIndex);
const { data } = await useAsyncData('res', () => PostApi.getList({ current: pageIndex }));

let postList = data.value.records;
pageData.total = data.value.total;
if (process.server) {
  let url = `https://www.thinkmoon.cn/page/${route.params.pageIndex}`;
  axios.post('http://data.zz.baidu.com/urls?site=https://www.thinkmoon.cn&token=CKLtHWl6TKYOJw39', url).then(res => {
    console.log('推送成功:', url);
  }).catch(err => {
    console.error('推送失败:', url);
  });
}
</script>

<style lang="less" scoped>
.page-content {
  margin: auto;
  width: 60%;

  .blog-posts {
    width: 70%;
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
}
@media (max-width: 1024px) {
  .page-content {
    width: 90%;
    .blog-posts {
      width: 100%;
    }
  }
}
.pagination-div {
  display: flex;
  justify-content: space-between;
}

.posts-default-info {
  margin-top: 6px;
  display: flex;
  align-content: center;
  align-items: center;

  div {
    margin: 0 2px;
  }

  a {
    line-height: 14px;
  }
}
</style>
