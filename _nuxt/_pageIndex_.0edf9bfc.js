import{T as g}from"./components.bf3e1317.js";import{_ as y}from"./PostList.f4f45e70.js";import{a as A,C,bc as x,r as E,b as T,k as i,w as h,u as r,o as v,m as w,t as m}from"./entry.a4e2a0a3.js";import{u}from"./asyncData.4bdd4e99.js";import{u as B}from"./config.62c248f9.js";import{C as L}from"./CategoryApi.819bd113.js";import{A as b}from"./ArticleApi.b5312855.js";import"./composables.8750476a.js";import"./TimeUtils.dee93a10.js";import"./RequestAdapter.9216c8df.js";import"./cookie.bb3576d1.js";const G=A({__name:"[pageIndex]",async setup(k){let t,n;const l=B(),o=C(),c={total:0,current:0};c.current=Number(o.params.pageIndex);const[{data:f},{data:_}]=([t,n]=x(()=>Promise.all([u("category",()=>L.getCategory({name:o.params.name})),u("post",()=>b.getList({...c,category:o.params.name}))])),t=await t,n(),t),p=E(_.value.records);return p.forEach(e=>{if(e.fields instanceof Array){const s={};e.fields.forEach(a=>{s[a.name]=a.value}),e.fields=s}}),(e,s)=>{const a=g,d=y;return v(),T("div",null,[i(a,null,{default:h(()=>[w('\u5206\u7C7B"'+m(r(f)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+m(r(l).TITLE),1)]),_:1}),i(d,{"post-list":r(p)},null,8,["post-list"])])}}});export{G as default};
