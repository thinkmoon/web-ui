import{_ as d}from"./PostList.1201ebdf.mjs";import{a as g,B as T,x,D as A,v,r as E,o as y,b as B,f as i,w as C,m as h,t as c,u as p,T as b,A as w}from"./entry.57877bd8.mjs";import{u as l}from"./asyncData.f2bf29dd.mjs";import"./TimeUtils.0064a35d.mjs";const P=g({__name:"[pageIndex]",async setup(L){let t,n;const m=T(),s=x();Number(s.params.pageIndex);const[{data:u},{data:_}]=([t,n]=A(()=>Promise.all([l("tag",()=>b.getTag({name:s.params.name}),"$GbK67nOY82"),l("post",()=>w.getListByTag({name:s.params.name}),"$vQsqaCTJpb")])),t=await t,n(),t),r=v(_.value);return r.forEach(a=>{if(a.fields instanceof Array){const o={};a.fields.forEach(e=>{o[e.name]=e.value}),a.fields=o}}),(a,o)=>{const e=E("Title"),f=d;return y(),B("div",null,[i(e,null,{default:C(()=>[h('\u6807\u7B7E" '+c(p(u)[0].name)+'"\u4E0B\u7684\u6587\u7AE0 | '+c(p(m).TITLE),1)]),_:1}),i(f,{"post-list":r},null,8,["post-list"])])}}});export{P as default};
