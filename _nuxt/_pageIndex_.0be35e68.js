import{a as g,I as y,G as x,J as A,E as C,o as E,b as T,j as i,w as h,T as v,q as w,t as p,u,A as B}from"./entry.37edf189.js";import{_ as I}from"./PostList.8170b323.js";import{u as l}from"./asyncData.9e0d96fa.js";import{C as L}from"./CategoryApi.3ef6f028.js";import"./TimeUtils.1d0e3883.js";const V=g({__name:"[pageIndex]",async setup(D){let t,n;const m=y(),s=x(),r={total:0,current:0};r.current=Number(s.params.pageIndex);const[{data:_},{data:f}]=([t,n]=A(()=>Promise.all([l("category",()=>L.getCategory({name:s.params.name})),l("post",()=>B.getList({...r,category:s.params.name}))])),t=await t,n(),t),c=C(f.value.records);return c.forEach(e=>{if(e.fields instanceof Array){const o={};e.fields.forEach(a=>{o[a.name]=a.value}),e.fields=o}}),(e,o)=>{const a=v,d=I;return E(),T("div",null,[i(a,null,{default:h(()=>[w('\u5206\u7C7B"'+p(u(_)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+p(u(m).TITLE),1)]),_:1}),i(d,{"post-list":c},null,8,["post-list"])])}}});export{V as default};
