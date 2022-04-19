<template>
  <div class="editor-wrapper">
    <div class="flex-1"></div>
    <div class="editor-container">
      <el-input class="title-input" v-model="article.title"></el-input>
      <v-md-editor v-model="article.text" mode="edit" height="560px" @save="saveArticle" :disabled-menus="[]"
        @upload-image="handleUploadImage"></v-md-editor>
    </div>
    <div class="flex-2 right">
      <section>
        <span class="title">文章分类</span>
        <div class="content">
          <el-select v-model="article.category_id" key="category">
            <el-option v-for="item of categoryList" :value="item.mid" :key="item.mid" :label="item.name">{{ item.name }}
            </el-option>
          </el-select>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  keepalive: true
});
</script>
<script lang="ts">
import PostApi from '~/api/PostApi';
import AttachmentApi from '~/api/AttachmentApi';
import * as qiniu from "qiniu-js";
import dayjs from 'dayjs';
import CategoryApi from '~/api/CategoryApi';

export default defineComponent({
  data() {
    return {
      article: {
        title: '',
        text: '',
        category_id: '',
      },
      categoryList: []
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
    this.getCategory();
  },
  methods: {
    getCategory() {
      CategoryApi.getCategory()
        .then(res => {
          this.categoryList = res;
        })
    },
    saveArticle() {
      let op = this.$route.query.cid ? 'update' : 'add'
      if (!this.article.category_id) {
        return this.$message.error('请选择文章分类')
      }
      PostApi[op](this.article).then(() => {
        this.$message.success('保存成功');
        location.href = '/admin/post-list';
      }).catch(err => {
        this.$message.error('保存失败');
        console.error(err);
      });
    },
    handleUploadImage(event, insertImage, files) {
      console.log(arguments)
      AttachmentApi.getUploadToken()
        .then((token: string) => {
          let key = dayjs().format('YYYY-MM-DD/HH-mm-ss')
          const observable = qiniu.upload(files[0], key, token)
          const subscription = observable.subscribe(null, null, (res) => {
            console.log(res);
            insertImage({
              url: `https://blog.cdn.thinkmoon.cn/${res.key}`,
            });
          })
        })
    }
  }
})
</script>
<style lang="less">
.editor-wrapper {
  display: flex;

  >.right {
    margin: 42px 14px;

    .title {
      margin: 6px;
    }

    .content {
      margin: 6px;
    }
  }
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

