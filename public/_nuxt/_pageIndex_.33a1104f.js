import{_ as g}from"./PostList.bb3c466b.js";import{a as y,bI as C,bH as x,ba as A,K as E,r as h,o as b,b as v,f as i,w as T,m as k,t as l,u as p,C as w,A as B}from"./entry.e3538746.js";import{u}from"./asyncData.d1ca910b.js";import"./index.1b59fe6a.js";import"./index.97ab3f63.js";import"./TimeUtils.221956b4.js";const $=y({__name:"[pageIndex]",async setup(I){let t,n;const m=C(),o=x(),r={total:0,current:0};r.current=Number(o.params.pageIndex);const[{data:_},{data:f}]=([t,n]=A(()=>Promise.all([u("category",()=>w.getCategory({name:o.params.name}),"$EkkhNl6e4o"),u("post",()=>B.getList({...r,category:o.params.name}),"$sWFld4Glrr")])),t=await t,n(),t),c=E(f.value.records);return c.forEach(e=>{if(e.fields instanceof Array){const s={};e.fields.forEach(a=>{s[a.name]=a.value}),e.fields=s}}),(e,s)=>{const a=h("Title"),d=g;return b(),v("div",null,[i(a,null,{default:T(()=>[k('\u5206\u7C7B"'+l(p(_)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+l(p(m).TITLE),1)]),_:1}),i(d,{"post-list":c},null,8,["post-list"])])}}});export{$ as default};
