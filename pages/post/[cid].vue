<template>
  <div class="">
    <Title>{{ data.title }} | {{ config.TITLE }}</Title>
    <div class="article-content">
      <v-md-preview :text="content" />
      <ins class="adsbygoogle"
           data-ad-client="ca-pub-3208634444966567"
           data-ad-format="fluid"
           data-ad-layout="in-article"
           data-ad-slot="2621880404"
           style="display:block; text-align:center;width: 100%"
      ></ins>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import PostApi from '~/api/PostApi';
import {useRoute} from 'vue-router';

const config = useRuntimeConfig();
const route = useRoute();
const url = `https://www.thinkmoon.cn/post/${route.params.cid}`;

const {data} = await useAsyncData('article', () => PostApi.getDetail({cid: route.params.cid}));
if (data.value.fields instanceof Array) {
  const fields = {};
  data.value.fields.forEach((i) => {
    fields[i.name] = i.value;
  });
  data.value.fields = fields;
}
const copyRight = `> 版权声明: 本文首发于[指尖魔法屋-${data.value.title}](${url}),转载或引用必须申明原指尖魔法屋来源及源地址！`;
const content = computed(() => `# ${data.value.title} \r\n ${data.value.text} \r\n ${copyRight}`);
if (process.server) {
  axios.post('http://data.zz.baidu.com/urls?site=https://www.thinkmoon.cn&token=CKLtHWl6TKYOJw39', url).then((res) => {
    console.log('推送成功:', url);
  }).catch((err) => {
    console.error('推送失败:', url);
  });
}

useMeta({
  meta: [
    {name: 'keywords', content: data.value.tag.map((i) => i.name).join(',') || config.KEYWORDS},
    {name: 'description', content: data.value.fields.desc || config.DESCRIPTION},
  ],
});
</script>

<style lang="less" scoped>
.article-content {
  margin: auto;
  background: #fff;
}

@media (max-width: 1024px) {
  .article-content {
    width: 100%;
  }
}
</style>
