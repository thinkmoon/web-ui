import{T as d}from"./components.a2eb6537.js";import{_ as g}from"./PostList.b5b5e80e.js";import{a as T,bB as x,b9 as A,r as E,b as y,j as p,w as B,u as n,o as h,t as b,x as m}from"./entry.341899e4.js";import{u as c}from"./asyncData.b1cdd12b.js";import{u as v}from"./config.456ca25b.js";import{T as w}from"./TagApi.44ca2ef0.js";import{A as C}from"./ArticleApi.0860bb12.js";import"./composables.4be30cc4.js";import"./TimeUtils.03fb4e8a.js";import"./RequestAdapter.8739745f.js";import"./cookie.7f879e01.js";const F=T({__name:"[pageIndex]",async setup(L){let t,r;const u=v(),o=x();Number(o.params.pageIndex);const[{data:l},{data:f}]=([t,r]=A(()=>Promise.all([c("tag",()=>w.getTag({name:o.params.name})),c("post",()=>C.getListByTag({name:o.params.name}))])),t=await t,r(),t),i=E(f.value);return i.forEach(a=>{if(a.fields instanceof Array){const s={};a.fields.forEach(e=>{s[e.name]=e.value}),a.fields=s}}),(a,s)=>{const e=d,_=g;return h(),y("div",null,[p(e,null,{default:B(()=>[b('\u6807\u7B7E" '+m(n(l)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+m(n(u).TITLE),1)]),_:1}),p(_,{"post-list":n(i)},null,8,["post-list"])])}}});export{F as default};
