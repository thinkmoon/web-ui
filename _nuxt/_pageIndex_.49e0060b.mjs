import{d,y as g,s as T,z as x,n as A,r as y,o as E,c as v,b as r,w as B,j as C,t as i,p as l,B as p,D as h,T as b,A as w}from"./entry.1e417f44.mjs";const I=d({__name:"[pageIndex]",async setup(L){let e,o;const u=g(),s=T();Number(s.params.pageIndex);const[{data:m},{data:_}]=([e,o]=x(()=>Promise.all([p("tag",()=>b.getTag({name:s.params.name}),"$GbK67nOY82"),p("post",()=>w.getListByTag({name:s.params.name}),"$vQsqaCTJpb")])),e=await e,o(),e),c=A(_.value);return c.forEach(a=>{if(a.fields instanceof Array){const n={};a.fields.forEach(t=>{n[t.name]=t.value}),a.fields=n}}),(a,n)=>{const t=y("Title"),f=h;return E(),v("div",null,[r(t,null,{default:B(()=>[C('\u6807\u7B7E" '+i(l(m)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+i(l(u).TITLE),1)]),_:1}),r(f,{"post-list":c},null,8,["post-list"])])}}});export{I as default};
