import{T as g}from"./components.c971b924.js";import{_ as y}from"./PostList.2047db77.js";import{a as x,z as A,bw as C,b7 as E,r as T,b as h,j as p,w,u as r,o as b,t as v,x as m}from"./entry.04b8489a.js";import{u}from"./asyncData.74f5af5e.js";import{C as B}from"./CategoryApi.c43c4d37.js";import{A as L}from"./ArticleApi.66c7c86f.js";import"./composables.a3465510.js";import"./TimeUtils.68fa12fc.js";import"./dayjs.min.32192c3f.js";import"./RequestAdapter.c0a9b808.js";import"./cookie.1d99ea04.js";const G=x({__name:"[pageIndex]",async setup(D){let t,n;const l=A(),o=C(),i={total:0,current:0};i.current=Number(o.params.pageIndex);const[{data:_},{data:f}]=([t,n]=E(()=>Promise.all([u("category",()=>B.getCategory({name:o.params.name})),u("post",()=>L.getList({...i,category:o.params.name}))])),t=await t,n(),t),c=T(f.value.records);return c.forEach(e=>{if(e.fields instanceof Array){const s={};e.fields.forEach(a=>{s[a.name]=a.value}),e.fields=s}}),(e,s)=>{const a=g,d=y;return b(),h("div",null,[p(a,null,{default:w(()=>[v('\u5206\u7C7B"'+m(r(_)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+m(r(l).TITLE),1)]),_:1}),p(d,{"post-list":r(c)},null,8,["post-list"])])}}});export{G as default};
