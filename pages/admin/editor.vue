<template>
  <div class="editor-wrapper">
    <div class="flex-1" />
    <div class="editor-container">
      <el-input
        v-model="article.title"
        class="title-input"
      />
      <v-md-editor
        v-model="article.text"
        mode="edit"
        height="560px"
        :disabled-menus="[]"
        @save="saveArticle"
        @upload-image="handleUploadImage"
      />
      <div class="custom-options">
        <template
          v-for="(custom,index) in article.fields"
          :key="custom.name"
        >
          <span>{{ custom.name }}</span>
          <el-input
            v-model="article.fields[index].value"
            type="textarea"
            class="input-with-select"
            placeholder="请输入"
          />
        </template>
      </div>
    </div>
    <div class="flex-2 right">
      <section>
        <span class="title">文章分类</span>
        <div class="content">
          <ClientOnly>
            <el-select
              key="category"
              v-model="article.category_id"
            >
              <el-option
                v-for="item of categoryList"
                :key="item.mid"
                :label="item.name"
                :value="item.mid"
              >
                {{ item.name }}
              </el-option>
            </el-select>
          </ClientOnly>
        </div>
      </section>
      <section>
        <span class="title">文章标签</span>
        <div class="content">
          <ClientOnly>
            <el-select
              key="category"
              v-model="article.selectedTag"
              filterable
              multiple
            >
              <el-option
                v-for="item of tagList"
                :key="item.tid"
                :label="item.name"
                :value="item.tid"
              >
                {{ item.name }}
              </el-option>
            </el-select>
          </ClientOnly>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  keepalive: true,
});
</script>
<script lang="ts">
import ArticleApi from '~/api/ArticleApi';
import AttachmentApi from '~/api/AttachmentApi';
import * as qiniu from 'qiniu-js';
import dayjs from 'dayjs';
import CategoryApi from '~/api/CategoryApi';
import TagApi from '~/api/TagApi';

const fields = [
  {
    name: 'thumb',
    value: '',
  },
  {
    name: 'desc',
    value: '',
  },
];
export default defineComponent({
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
      categoryList: [],
      tagList: [],
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
        if (!this.article.fields.length) {
          this.article.fields = fields;
        }
      });
    } else {
      this.data = {};
      this.article.fields = fields;
    }
    this.getCategory();
    this.getTag();
  },
  methods: {
    getTag() {
      TagApi.getTag()
        .then((res) => {
          this.tagList = res;
        });
    },
    getCategory() {
      CategoryApi.getCategory()
        .then((res) => {
          this.categoryList = res;
        });
    },
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

  > .right {
    margin: 42px 14px;

    .title {
      margin: 6px;
    }

    .content {
      margin: 6px;
    }
  }
}

.custom-options {
  > span {
    margin: 4px 0;
    display: flex;
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

.custom-options > .el-input-group {
  margin: 6px 0 0 0;
}
</style>

