import{_ as y,d as C,l as h,m as x,r as o,o as s,c as l,f as p,w as r,i as u,t as d,F as k,g as v,h as T,C as w}from"./entry-f3276c89.mjs";import{u as B}from"./asyncData-51376d1e.mjs";const A=C({async setup(f,{expose:c}){c();let e,t;const _=h(),{data:i}=([e,t]=x(()=>B("category",()=>w.getCategory())),e=await e,t(),e),a={config:_,data:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),S={class:"page-content"};function $(f,c,e,t,_,i){const a=o("Title"),m=o("el-link"),g=o("el-tag");return s(),l("div",S,[p(a,null,{default:r(()=>[u("\u6240\u6709\u5206\u7C7B | "+d(t.config.TITLE),1)]),_:1}),(s(!0),l(k,null,v(t.data,n=>(s(),T(g,{type:"info",key:n.mid,class:"category-list"},{default:r(()=>[p(m,{type:"info",href:`/category/${n.mid}/1`},{default:r(()=>[u(d(n.name),1)]),_:2},1032,["href"])]),_:2},1024))),128))])}var E=y(A,[["render",$],["__scopeId","data-v-c8f52fea"]]);export{E as default};
