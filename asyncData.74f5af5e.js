import{by as k,f as p,bz as w,aA as B,aI as C,b3 as M,u as z,an as E}from"./entry.04b8489a.js";const A=()=>null;function I(...i){var _,D,v,g,b,P,x;const u=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(u);let[t,f,a={}]=i;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=(_=a.server)!=null?_:!0,a.default=(D=a.default)!=null?D:A,a.lazy=(v=a.lazy)!=null?v:!1,a.immediate=(g=a.immediate)!=null?g:!0;const e=k(),d=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],y=()=>d()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:p((x=(P=d())!=null?P:(b=a.default)==null?void 0:b.call(a))!=null?x:null),pending:p(!y()),error:p(e.payload._errors[t]?w(e.payload._errors[t]):null)});const r={...e._asyncData[t]};r.refresh=r.execute=(s={})=>{if(e._asyncDataPromises[t]){if(s.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(s._initial&&y())return d();r.pending.value=!0;const o=new Promise((n,c)=>{try{n(f(e))}catch(l){c(l)}}).then(n=>{if(o.cancelled)return e._asyncDataPromises[t];a.transform&&(n=a.transform(n)),a.pick&&(n=H(n,a.pick)),r.data.value=n,r.error.value=null}).catch(n=>{var c,l;if(o.cancelled)return e._asyncDataPromises[t];r.error.value=n,r.data.value=z((l=(c=a.default)==null?void 0:c.call(a))!=null?l:null)}).finally(()=>{o.cancelled||(r.pending.value=!1,e.payload.data[t]=r.data.value,r.error.value&&(e.payload._errors[t]=w(r.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=o,e._asyncDataPromises[t]};const h=()=>r.refresh({_initial:!0}),O=a.server!==!1&&e.payload.serverRendered;{const s=E();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(B(()=>{n.forEach(c=>{c()}),n.splice(0,n.length)}),C(()=>n.splice(0,n.length)))}O&&e.isHydrating&&y()?r.pending.value=!1:s&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?s._nuxtOnBeforeMountCbs.push(h):a.immediate&&h(),a.watch&&M(a.watch,()=>r.refresh());const o=e.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});s&&C(o)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function H(i,u){const t={};for(const f of u)t[f]=i[f];return t}export{I as u};
