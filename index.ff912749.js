import{a as y,I as g,J as x,h as _,o as a,b as c,j as r,w as n,F as C,k as h,u as i,T as k,q as l,t as o,c as T,y as b}from"./entry.37edf189.js";import{u as v}from"./asyncData.9e0d96fa.js";import{C as w}from"./CategoryApi.3ef6f028.js";const B={class:"page-content"},A=y({__name:"index",async setup(I){let e,s;const u=g(),{data:p}=([e,s]=x(()=>v("category",()=>w.getCategory())),e=await e,s(),e);return(D,E)=>{const m=k,d=_("el-link"),f=_("el-tag");return a(),c("div",B,[r(m,null,{default:n(()=>[l("\u6240\u6709\u5206\u7C7B | "+o(i(u).TITLE),1)]),_:1}),(a(!0),c(C,null,h(i(p),t=>(a(),T(f,{key:t.mid,type:"info",class:"category-list"},{default:n(()=>[r(d,{href:`/category/${t.name}/1`,type:"info"},{default:n(()=>[l(o(t.name)+"("+o(t.count)+") ",1)]),_:2},1032,["href"])]),_:2},1024))),128))])}}});const V=b(A,[["__scopeId","data-v-38bcea0b"]]);export{V as default};
