<template>
  <div class="editor-wrapper">
    <div class="flex-1"></div>
    <div class="editor-container">
      <el-input class="title-input" v-model="article.title"></el-input>
      <v-md-editor
        v-model="article.text"
        mode="edit"
        height="560px"
        @save="saveArticle"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
      ></v-md-editor>
    </div>
    <div class="flex-2"></div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  keepalive: true
});
</script>
<script lang="ts">
import PostApi from '~/api/PostApi';

export default defineComponent({
  data() {
    return {
      article: {
        title: '',
        text: ''
      }
    }
  },
  activated() {
    if (this.$route.query.cid) {
      PostApi.getDetail({ cid: this.$route.query.cid }).then(res => {
        this.article = res;
      });
    } else {
      this.data = {};
    }
  },
  methods: {
    saveArticle() {
      let params = {
        cid: Number(this.$route.query.cid),
        title: this.article.title,
        text: this.article.text
      };
      PostApi.update(params).then(() => {
        this.$message.success('保存成功')
        this.$router.back();
      });
    },
    handleUploadImage() {

    }
  }
})
</script>
<style lang="less">
.editor-wrapper {
  display: flex;
}
.editor-container {
  display: flex;
  flex: 4;
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

