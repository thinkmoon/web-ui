import{_ as b}from"./PostList-28088b19.mjs";import{_ as k,d as E,m as C,k as B,n as A,q as L,r as x,o as _,c as T,f as h,w as i,e as n,i as v,s as y,j as d,t as I,P as w}from"./entry-0ad12262.mjs";import{u as P}from"./asyncData-7d5e3c39.mjs";const V=E({__name:"[pageIndex]",async setup(N,{expose:p}){p();let a,e;const l=C(),r=B(),o={total:0,current:0},s=r.params.pageIndex;o.current=Number(s);const{data:t}=([a,e]=A(()=>P("res",()=>w.getList({current:s}))),a=await a,e(),a),u=L(t.value.records);u.forEach(c=>{if(c.fields instanceof Array){const m={};c.fields.forEach(g=>{m[g.name]=g.value}),c.fields=m}}),o.total=t.value.total;const f={config:l,route:r,pageData:o,pageIndex:s,data:t,postList:u};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),D={class:"page-content"},S={class:"post-container"},j={class:"pagination-div"},R=d(" \u4E0A\u4E00\u9875 "),q=d(" \u4E0B\u4E00\u9875 ");function O(N,p,a,e,l,r){const o=x("Title"),s=b,t=x("el-link");return _(),T("div",D,[h(o,null,{default:i(()=>[d("\u7B2C"+I(e.route.params.pageIndex)+"\u9875 | "+I(e.config.TITLE),1)]),_:1}),n("div",S,[h(s,{"post-list":e.postList},null,8,["post-list"]),n("div",j,[n("div",null,[Number(e.pageIndex)!==1?(_(),v(t,{key:0,href:`/page/${Number(e.pageIndex)-1}`,type:"primary"},{default:i(()=>[R]),_:1},8,["href"])):y("",!0)]),n("div",null,[Number(e.pageIndex)!==e.data.pages?(_(),v(t,{key:0,href:`/page/${Number(e.pageIndex)+1}`,type:"primary"},{default:i(()=>[q]),_:1},8,["href"])):y("",!0)])])])])}var H=k(V,[["render",O],["__scopeId","data-v-5cb61f34"]]);export{H as default};
