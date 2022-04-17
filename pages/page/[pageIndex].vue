<template>
  <div class="page-content">
    <Title>第{{ route.params.pageIndex }}页 | {{ config.TITLE }}</Title>
    <div class="post-container">
      <PostList :post-list="postList"></PostList>
      <div class="pagination-div">
        <div>
          <el-link :href="`/page/${Number(pageIndex) - 1}`" type="primary" v-if="Number(pageIndex) !== 1">上一页</el-link>
        </div>
        <div>
          <el-link :href="`/page/${Number(pageIndex) + 1}`" type="primary" v-if="Number(pageIndex) !== data.pages">下一页
          </el-link>
        </div>
      </div>
    </div>
    <div class="page-section">
      <Search></Search>
      <Announcement></Announcement>
    </div>  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import PostApi from '~/api/PostApi';
import { useRoute, useRouter } from 'vue-router';
import Search from '~~/components/section/Search.vue';
import Announcement from '~~/components/section/Announcement.vue';

const config = useRuntimeConfig();
const route = useRoute();
let pageData = {
  total: 0,
  current: 0,
};
let pageIndex = route.params.pageIndex;
pageData.current = Number(pageIndex);
const { data } = await useAsyncData('res', () => PostApi.getList({ current: pageIndex }));

let postList = reactive(data.value.records);
postList.forEach(item => {
  if (item.fields instanceof Array) {
    let fields = {}
    item.fields.forEach(i => {
      fields[i.name] = i.value
    })
    item.fields = fields;
  }
})
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
  padding-bottom: 20px;
  width: 70%;
  display: flex;

  .post-container {
    flex: 1;
  }

  .page-section {
    width: 300px;
    padding: 20px;
  }
}

@media (max-width: 1024px) {
  .page-content {
    width: 90%;

    .blog-posts {
      width: 100%;

      .posts-default-content .right,
      .post-author {
        display: none;
      }
    }

    .page-section {
      display: none;
    }
  }
}

.pagination-div {
  display: flex;
  justify-content: space-between;
}

</style>
