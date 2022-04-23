<template>
  <div>
    <Title>分类"{{ category.name }}"下的文章 | {{ config.TITLE }}</Title>
    <PostList :post-list="postList" />
  </div>
</template>

<script lang="ts" setup>
import CategoryApi from '~/api/CategoryApi';
import {useRoute} from 'vue-router';
import PostApi from '~/api/PostApi';

const config = useRuntimeConfig();
const route = useRoute();
const pageData = {
  total: 0,
  current: 0,
};
pageData.current = Number(route.params.pageIndex);
const [{data: category}, {data: post}] = await Promise.all([
  useAsyncData('category', () => CategoryApi.getDetail(route.params.mid)),
  useAsyncData('post', () => PostApi.getList(pageData)),
]);
const postList = reactive(post.value.records);
postList.forEach((item) => {
  if (item.fields instanceof Array) {
    const fields = {};
    item.fields.forEach((i) => {
      fields[i.name] = i.value;
    });
    item.fields = fields;
  }
});

</script>

<style scoped>

</style>
