import{E as g,_ as v,d as w,l as h,s as V,G as b,H as B,n as C,r as l,o as x,c as T,f as t,w as n,e as y,i as m,t as S}from"./entry-c8821fd3.mjs";class k{static login(o){return g({method:"post",url:"/user/login",data:o})}}const F=w({setup(d,{expose:o}){o();const _=h(),{$message:e}=V(),r=b("auth");r.value&&B({path:"/admin"});const u=C({account:"",password:""});function i(){k.login(u).then(s=>{r.value=s,window.location.href="/admin"}).catch(()=>{e.error("\u767B\u5F55\u5931\u8D25")})}const a={config:_,$message:e,auth:r,form:u,onSubmit:i};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),N={class:"app-container"},D={class:"login-dialog"},E=m(" \u767B\u5F55 ");function U(d,o,_,e,r,u){const i=l("Title"),a=l("el-input"),s=l("el-form-item"),p=l("el-button"),f=l("el-form");return x(),T("div",N,[t(i,null,{default:n(()=>[m("\u767B\u5F55 | "+S(e.config.TITLE),1)]),_:1}),y("div",D,[t(f,{model:e.form},{default:n(()=>[t(s,{label:"\u8D26\u53F7"},{default:n(()=>[t(a,{modelValue:e.form.account,"onUpdate:modelValue":o[0]||(o[0]=c=>e.form.account=c)},null,8,["modelValue"])]),_:1}),t(s,{label:"\u5BC6\u7801"},{default:n(()=>[t(a,{modelValue:e.form.password,"onUpdate:modelValue":o[1]||(o[1]=c=>e.form.password=c),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(s,null,{default:n(()=>[t(p,{type:"primary",onClick:e.onSubmit},{default:n(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])])])}var I=v(F,[["render",U],["__scopeId","data-v-2779d010"]]);export{I as default};
