import{E as g,_ as v,d as V,l as b,s as h,G as w,H as C,n as x,r as l,o as B,c as T,f as t,w as n,e as y,i as m,t as S}from"./entry-b3d792ef.mjs";class k{static login(o){return g({method:"post",url:"/user/login",data:o})}}const N=V({setup(d,{expose:o}){o();const _=b(),{$message:e}=h(),r=w("auth");r.value&&C({path:"/admin"});const u=x({account:"",password:""});function c(){k.login(u).then(s=>{r.value=s}).catch(()=>{})}const a={config:_,$message:e,auth:r,form:u,onSubmit:c};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),E={class:"app-container"},F={class:"login-dialog"},U=m(" \u767B\u5F55 ");function A(d,o,_,e,r,u){const c=l("Title"),a=l("el-input"),s=l("el-form-item"),p=l("el-button"),f=l("el-form");return B(),T("div",E,[t(c,null,{default:n(()=>[m("\u767B\u5F55 | "+S(e.config.TITLE),1)]),_:1}),y("div",F,[t(f,{model:e.form},{default:n(()=>[t(s,{label:"\u8D26\u53F7"},{default:n(()=>[t(a,{modelValue:e.form.account,"onUpdate:modelValue":o[0]||(o[0]=i=>e.form.account=i)},null,8,["modelValue"])]),_:1}),t(s,{label:"\u5BC6\u7801"},{default:n(()=>[t(a,{modelValue:e.form.password,"onUpdate:modelValue":o[1]||(o[1]=i=>e.form.password=i),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(s,null,{default:n(()=>[t(p,{type:"primary",onClick:e.onSubmit},{default:n(()=>[U]),_:1})]),_:1})]),_:1},8,["model"])])])}var I=v(N,[["render",A],["__scopeId","data-v-4d49af88"]]);export{I as default};
