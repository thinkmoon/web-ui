<template>
  <div class="editor-wrapper">
    <div class="editor-container">
      <el-input
        v-model="article.title"
        class="title-input"
      />
      <v-md-editor
        v-model="article.text"
        mode="editable"
        height="620px"
        :disabled-menus="[]"
        @save="saveArticle"
        @upload-image="handleUploadImage"
      />
    </div>
    <EditorRight :article="article" :category-list="categoryList" :tag-list="tagList"/>
  </div>
</template>
<script lang="ts" setup>
import EditorRight from "~/components/admin/EditorRight.vue";

definePageMeta({
  keepalive: true,
});
</script>
<script lang="ts">
import ArticleApi from '~/api/ArticleApi';
import AttachmentApi from '~/api/AttachmentApi';
import dayjs from 'dayjs';
import VMdEditor from "~/components/MdEditor";
import { useArticle } from "~/store/article";


export default defineComponent({
  components:{
    'v-md-editor': VMdEditor
  },
  data() {
    return {
      article: {
        title: '',
        text: '',
        category_id: '',
        tag: [],
        selectedTag: [],
        fields: [],
      },
    };
  },
  activated() {
    if (this.$route.query.cid) {
      ArticleApi.getDetail({ cid: this.$route.query.cid }).then((res) => {
        this.article = {
          ...this.article,
          ...res,
        };
        this.article.selectedTag = this.article.tag.map(item => item.tid);
        const articleStore = useArticle();
        articleStore.setArticle(this.article);
      });
    } else {
      this.data = {};
    }
  },
  methods: {
    saveArticle() {
      const op = this.$route.query.cid ? 'update' : 'add';
      if (!this.article.category_id) {
        return this.$message.error('请选择文章分类');
      }
      if (!this.article.fields.length) {
        return this.$message.error('请选择文章标签');
      }
      ArticleApi[op](this.article).then(() => {
        this.$message.success('保存成功');
        location.href = '/admin/post-list';
      }).catch((err) => {
        this.$message.error('保存失败');
        console.error(err);
      });
    },
    handleUploadImage(event, insertImage, files) {
      console.log(arguments);
      AttachmentApi.getUploadToken()
        .then((token: string) => {
          const key = dayjs().format('YYYY-MM-DD/HH-mm-ss');
          const observable = qiniu.upload(files[0], key, token);
          observable.subscribe(null, null, (res) => {
            insertImage({
              url: `https://blog.cdn.thinkmoon.cn/${res.key}`,
            });
          });
        });
    },
  },
});
</script>
<style lang="less">
.editor-wrapper {
  display: flex;
  position: relative;
}

.editor-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  .title-input {
    margin: 6px 0;
  }

  .left textarea {
    height: 560px;
  }

  #write {
    min-height: 620px;
    box-sizing: border-box;
  }
}

.custom-options > .el-input-group {
  margin: 6px 0 0 0;
}
</style>

