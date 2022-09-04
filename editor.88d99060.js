import{a as A,r as c,o,b as u,e as l,f as i,F as m,h,w as n,i as C,A as v,T,C as U,j as D,k as E,l as F,t as _,c as V,m as b}from"./entry.bfc284b2.js";const $={class:"editor-wrapper"},L=l("div",{class:"flex-1"},null,-1),w={class:"editor-container"},I={class:"custom-options"},Y={class:"flex-2 right"},q=l("span",{class:"title"},"\u6587\u7AE0\u5206\u7C7B",-1),N={class:"content"},S=l("span",{class:"title"},"\u6587\u7AE0\u6807\u7B7E",-1),j={class:"content"},k=[{name:"thumb",value:""},{name:"desc",value:""}],H=A({data(){return{article:{title:"",text:"",category_id:"",tag:[],selectedTag:[],fields:[]},categoryList:[],tagList:[]}},activated(){this.$route.query.cid?v.getDetail({cid:this.$route.query.cid}).then(s=>{this.article={...this.article,...s},this.article.selectedTag=this.article.tag.map(e=>e.tid),this.article.fields.length||(this.article.fields=k)}):(this.data={},this.article.fields=k),this.getCategory(),this.getTag()},methods:{getTag(){T.getTag().then(s=>{this.tagList=s})},getCategory(){U.getCategory().then(s=>{this.categoryList=s})},saveArticle(){const s=this.$route.query.cid?"update":"add";if(!this.article.category_id)return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u5206\u7C7B");if(!this.article.fields.length)return this.$message.error("\u8BF7\u9009\u62E9\u6587\u7AE0\u6807\u7B7E");v[s](this.article).then(()=>{this.$message.success("\u4FDD\u5B58\u6210\u529F"),location.href="/admin/post-list"}).catch(e=>{this.$message.error("\u4FDD\u5B58\u5931\u8D25"),console.error(e)})},handleUploadImage(s,e,a){console.log(arguments),D.getUploadToken().then(r=>{const p=E().format("YYYY-MM-DD/HH-mm-ss");F(a[0],p,r).subscribe(null,null,d=>{e({url:`https://blog.cdn.thinkmoon.cn/${d.key}`})})})}}}),O=A({...H,__name:"editor",setup(s){return(e,a)=>{const r=c("el-input"),p=c("v-md-editor"),g=c("el-option"),d=c("el-select"),f=C;return o(),u("div",$,[L,l("div",w,[i(r,{modelValue:e.article.title,"onUpdate:modelValue":a[0]||(a[0]=t=>e.article.title=t),class:"title-input"},null,8,["modelValue"]),i(p,{modelValue:e.article.text,"onUpdate:modelValue":a[1]||(a[1]=t=>e.article.text=t),mode:"edit",height:"560px","disabled-menus":[],onSave:e.saveArticle,onUploadImage:e.handleUploadImage},null,8,["modelValue","onSave","onUploadImage"]),l("div",I,[(o(!0),u(m,null,h(e.article.fields,(t,y)=>(o(),u(m,{key:t.name},[l("span",null,_(t.name),1),i(r,{modelValue:e.article.fields[y].value,"onUpdate:modelValue":B=>e.article.fields[y].value=B,type:"textarea",class:"input-with-select",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onUpdate:modelValue"])],64))),128))])]),l("div",Y,[l("section",null,[q,l("div",N,[i(f,null,{default:n(()=>[i(d,{key:"category",modelValue:e.article.category_id,"onUpdate:modelValue":a[2]||(a[2]=t=>e.article.category_id=t)},{default:n(()=>[(o(!0),u(m,null,h(e.categoryList,t=>(o(),V(g,{key:t.mid,label:t.name,value:t.mid},{default:n(()=>[b(_(t.name),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])]),l("section",null,[S,l("div",j,[i(f,null,{default:n(()=>[i(d,{key:"category",modelValue:e.article.selectedTag,"onUpdate:modelValue":a[3]||(a[3]=t=>e.article.selectedTag=t),filterable:"",multiple:""},{default:n(()=>[(o(!0),u(m,null,h(e.tagList,t=>(o(),V(g,{key:t.tid,label:t.name,value:t.tid},{default:n(()=>[b(_(t.name),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})])])])])}}});export{O as default};
