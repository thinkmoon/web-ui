import{_ as m,d as v,l as C,j as f,m as w,G as E,H as x,r as i,o as D,c as g,f as l,w as h,i as B,t as _,e as F,P as y}from"./entry-f3276c89.mjs";import{u as $}from"./asyncData-51376d1e.mjs";const T=v({async setup(p,{expose:u}){u();let a,t;const o=C(),n=f(),s=`https://www.thinkmoon.cn/post/${n.params.cid}`,{data:e}=([a,t]=w(()=>$("article",()=>y.getDetail({cid:n.params.cid}))),a=await a,t(),a);console.log(e.value);let c=`> \u7248\u6743\u58F0\u660E: \u672C\u6587\u9996\u53D1\u4E8E[\u6307\u5C16\u9B54\u6CD5\u5C4B-${e.value.title}](${s}),\u8F6C\u8F7D\u6216\u5F15\u7528\u5FC5\u987B\u7533\u660E\u539F\u6307\u5C16\u9B54\u6CD5\u5C4B\u6765\u6E90\u53CA\u6E90\u5730\u5740\uFF01`;const d=E(()=>`# ${e.value.title} \r
 ${e.value.text} \r
 ${c}`);x({meta:[{name:"keywords",content:e.value.tag||o.KEYWORDS},{name:"description",content:e.value.desc||o.DESCRIPTION}]});const r={config:o,route:n,url:s,data:e,copyRight:c,content:d};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),R={class:"app-container"},S={class:"article-content"};function k(p,u,a,t,o,n){const s=i("Title"),e=i("v-md-preview");return D(),g("div",R,[l(s,null,{default:h(()=>[B(_(t.data.title)+" | "+_(t.config.TITLE),1)]),_:1}),F("div",S,[l(e,{text:t.content},null,8,["text"])])])}var N=m(T,[["render",k],["__scopeId","data-v-605881e7"]]);export{N as default};
