import { defineStore } from 'pinia';
import { reactive } from "vue";

export const useArticle = defineStore('article', () => {
  const article = reactive({
    category_id: '',
    selectedTag: [],
    fields: [
      {
        name: 'thumb',
        value: '',
        rows: 2,
      },
      {
        name: 'desc',
        value: '',
        rows: 6,
      },
    ]
  });

  function setArticle(data){
    console.log(data)
    if (this.article.fields.length) {
      article.fields = data.fields;
    }
    article.category_id = data.category_id;
    article.selectedTag = data.selectedTag;
  }
  return { article,setArticle };
});
