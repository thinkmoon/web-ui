import{_ as x}from"./PostList-9b2b8ea3.mjs";import{_ as T,d as v,l as y,j as E,m as A,n as h,r as B,o as C,c as L,f as m,w as P,i as w,t as f,P as b}from"./entry-271802af.mjs";import{u as d}from"./asyncData-0e1ef12c.mjs";import{T as D}from"./TagApi-af957ea4.mjs";const I=v({async setup(g,{expose:r}){r();let e,t;const c=y(),a=E(),s={total:0,current:0};s.current=Number(a.params.pageIndex);const[{data:o},{data:i}]=([e,t]=A(()=>Promise.all([d("tag",()=>D.getTag({name:a.params.name})),d("post",()=>b.getListByTag({name:a.params.name}))])),e=await e,t(),e),p=h(i.value);p.forEach(n=>{if(n.fields instanceof Array){const l={};n.fields.forEach(u=>{l[u.name]=u.value}),n.fields=l}});const _={config:c,route:a,pageData:s,tag:o,post:i,postList:p};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}});function N(g,r,e,t,c,a){const s=B("Title"),o=x;return C(),L("div",null,[m(s,null,{default:P(()=>[w('\u6807\u7B7E" '+f(t.tag[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+f(t.config.TITLE),1)]),_:1}),m(o,{"post-list":t.postList},null,8,["post-list"])])}var V=T(I,[["render",N]]);export{V as default};
