import{a as I,I as E,ap as N,J as k,E as A,h as C,o as i,b as B,j as g,w as l,i as r,u as e,c as x,K as h,T,q as u,t as v,A as b,y as w}from"./entry.37edf189.js";import{_ as L}from"./PostList.8170b323.js";import{u as V}from"./asyncData.9e0d96fa.js";import{p as $}from"./BaiduSite.ac6b9783.js";import"./TimeUtils.1d0e3883.js";const D={class:"page-content"},R={class:"post-container"},j={class:"pagination-div"},q=I({__name:"[pageIndex]",async setup(J){let a,d;const y=E(),c=N(),t=c.params.pageIndex,{data:p}=([a,d]=k(()=>V("res",()=>b.getList({current:t}))),a=await a,d(),a),m=A(p.value.records);return m.forEach(s=>{var _;if(s.fields instanceof Array){const o={};(_=s.fields)==null||_.forEach(n=>{o[n.name]=n.value}),s.fields=o}}),p.value.total,$(`/page/${c.params.pageIndex}`),(s,_)=>{const o=T,n=L,f=C("el-link");return i(),B("div",D,[g(o,null,{default:l(()=>[u("\u7B2C"+v(e(c).params.pageIndex)+"\u9875 | "+v(e(y).TITLE),1)]),_:1}),r("div",R,[g(n,{"post-list":m},null,8,["post-list"]),r("div",j,[r("div",null,[Number(e(t))!==1?(i(),x(f,{key:0,href:`/page/${Number(e(t))-1}`,type:"primary"},{default:l(()=>[u(" \u4E0A\u4E00\u9875 ")]),_:1},8,["href"])):h("",!0)]),r("div",null,[Number(e(t))!==e(p).pages?(i(),x(f,{key:0,href:`/page/${Number(e(t))+1}`,type:"primary"},{default:l(()=>[u(" \u4E0B\u4E00\u9875 ")]),_:1},8,["href"])):h("",!0)])])])])}}});const F=w(q,[["__scopeId","data-v-1f06a56e"]]);export{F as default};
