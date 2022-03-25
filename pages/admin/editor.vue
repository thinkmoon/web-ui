<template>
  <div class="editor-container">
    <el-input class="title-input" v-model="data.title"></el-input>
    <v-md-editor v-model="data.text" height="560px" @save="saveArticle"></v-md-editor>
  </div>
</template>
<script lang="ts" setup>
import PostApi from '~/api/PostApi';
import { useRoute } from 'vue-router';

definePageMeta({
  keepalive: true
});

let data = ref({});
const route = useRoute();

onActivated(() => {
  console.log('onActivated');
  if (route.query.cid) {
    PostApi.getDetail({ cid: route.query.cid }).then(res => {
      console.log(res);
      data.value = res;
    });
  } else {
    data.value = {};
  }
});


function saveArticle() {
  let params = {
    cid: Number(route.query.cid),
    title: data.value.title,
    text: data.value.text
  };
  PostApi.update(params).then(() => {
  });
}
</script>
<style lang="less">
.editor-container {
  display: flex;
  flex-direction: column;
  .title-input {
    margin: 6px 0;
  }
  .left,
  .right {
    flex: 1;
    text-align: left;
  }

  .left textarea {
    height: 560px;
  }

  #write {
    min-height: 560px;
    box-sizing: border-box;
  }
}
</style>

