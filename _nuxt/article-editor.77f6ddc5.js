import{a as k,r as g,o,b as u,e as l,f as i,u as C,F as m,h,w as n,i as E,V as A,A as y,T,C as U,j as D,k as F,t as _,c as v,l as V}from"./entry.a0eab25d.js";const $={class:"editor-wrapper"},L=l("div",{class:"flex-1"},null,-1),q={class:"editor-container"},w={class:"custom-options"},I={class:"flex-2 right"},Y=l("span",{class:"title"},"\u6587\u7AE0\u5206\u7C7B",-1),M={class:"content"},N=l("span",{class:"title"},"\u6587\u7AE0\u6807\u7B7E",-1),S={class:"content"},b=[{name:"thumb",value:""},{name:"desc",value:""}],j=k({components:{"v-md-editor":A},data(){return{article:{title:"",text:"",category_id:"",tag:[],selectedTag:[],fields:[]},categoryList:[],tagList:[]}},activated(){this.$route.query.cid?y.getDetail({cid:this.$route.query.cid}).then(s=>{this.article={...this.article,...s},this.article.selectedTag=this.article.tag.map(e=>e.tid),this.article.fields.length||(this.article.fields=b)}):(this.data={},this.article.fields=b),this.getCategory(),this.getTag()},methods:{getTag(){T.getTag().then(s=>{this.tagList=s})},getCategory(){U.getCategory().then(s=>{this.categoryList=s})},saveArticle(){const s=this.$route.query.cid?"update":"add";if(!this.article.category_id)return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u5206\u7C7B");if(!this.article.fields.length)return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E");y[s](this.article).then(()=>{this.$message.success("\u4FDD\u5B58\u6210\u529F"),location.href="/admin/post-list"}).catch(e=>{this.$message.error("\u4FDD\u5B58\u5931\u8D25"),console.error(e)})},handleUploadImage(s,e,a){console.log(arguments),D.getUploadToken().then(r=>{const d=F().format("YYYY-MM-DD/HH-mm-ss");qiniu.upload(a[0],d,r).subscribe(null,null,c=>{e({url:`https://blog.cdn.thinkmoon.cn/${c.key}`})})})}}}),O=k({...j,__name:"article-editor",setup(s){return(e,a)=>{const r=g("el-input"),d=g("el-option"),p=g("el-select"),c=E;return o(),u("div",$,[L,l("div",q,[i(r,{modelValue:e.article.title,"onUpdate:modelValue":a[0]||(a[0]=t=>e.article.title=t),class:"title-input"},null,8,["modelValue"]),i(C(A),{modelValue:e.article.text,"onUpdate:modelValue":a[1]||(a[1]=t=>e.article.text=t),mode:"edit",height:"560px","disabled-menus":[],onSave:e.saveArticle,onUploadImage:e.handleUploadImage},null,8,["modelValue","onSave","onUploadImage"]),l("div",w,[(o(!0),u(m,null,h(e.article.fields,(t,f)=>(o(),u(m,{key:t.name},[l("span",null,_(t.name),1),i(r,{modelValue:e.article.fields[f].value,"onUpdate:modelValue":B=>e.article.fields[f].value=B,type:"textarea",class:"input-with-select",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])],64))),128))])]),l("div",I,[l("section",null,[Y,l("div",M,[i(c,null,{default:n(()=>[i(p,{key:"category",modelValue:e.article.category_id,"onUpdate:modelValue":a[2]||(a[2]=t=>e.article.category_id=t)},{default:n(()=>[(o(!0),u(m,null,h(e.categoryList,t=>(o(),v(d,{key:t.mid,label:t.name,value:t.mid},{default:n(()=>[V(_(t.name),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])]),l("section",null,[N,l("div",S,[i(c,null,{default:n(()=>[i(p,{key:"category",modelValue:e.article.selectedTag,"onUpdate:modelValue":a[3]||(a[3]=t=>e.article.selectedTag=t),filterable:"",multiple:""},{default:n(()=>[(o(!0),u(m,null,h(e.tagList,t=>(o(),v(d,{key:t.tid,label:t.name,value:t.tid},{default:n(()=>[V(_(t.name),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])])])])}}});export{O as default};
