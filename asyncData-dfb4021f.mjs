var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var p=(e,n,a)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,D=(e,n)=>{for(var a in n||(n={}))C.call(n,a)&&p(e,a,n[a]);if(m)for(var a of m(n))P.call(n,a)&&p(e,a,n[a]);return e};import{v as x,x as O,y as g,z,A as _,B,D as A,E}from"./entry-33d20d1c.mjs";const M=()=>null;function H(e,n,a={}){var d,o,h,y,v;if(typeof e!="string")throw new TypeError("asyncData key must be a string");if(typeof n!="function")throw new TypeError("asyncData handler must be a function");a=D({server:!0,default:M},a),a.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),a.lazy=(o=(d=a.lazy)!=null?d:a.defer)!=null?o:!1,a.initialCache=(h=a.initialCache)!=null?h:!0;const r=x(),i=A();if(i&&!i._nuxtOnBeforeMountCbs){const f=i._nuxtOnBeforeMountCbs=[];i&&(O(()=>{f.forEach(s=>{s()}),f.splice(0,f.length)}),g(()=>f.splice(0,f.length)))}const l=()=>a.initialCache&&r.payload.data[e]!==void 0,t={data:z((y=r.payload.data[e])!=null?y:a.default()),pending:_(!l()),error:_((v=r.payload._errors[e])!=null?v:null)};t.refresh=(f={})=>r._asyncDataPromises[e]?r._asyncDataPromises[e]:f._initial&&l()?r.payload.data[e]:(t.pending.value=!0,r._asyncDataPromises[e]=Promise.resolve(n(r)).then(s=>{a.transform&&(s=a.transform(s)),a.pick&&(s=R(s,a.pick)),t.data.value=s,t.error.value=null}).catch(s=>{t.error.value=s,t.data.value=E(a.default())}).finally(()=>{t.pending.value=!1,r.payload.data[e]=t.data.value,t.error.value&&(r.payload._errors[e]=!0),delete r._asyncDataPromises[e]}),r._asyncDataPromises[e]);const c=()=>t.refresh({_initial:!0}),w=a.server!==!1&&r.payload.serverRendered;{w&&r.isHydrating&&e in r.payload.data?t.pending.value=!1:i&&r.payload.serverRendered&&(r.isHydrating||a.lazy)?i._nuxtOnBeforeMountCbs.push(c):c(),a.watch&&B(a.watch,()=>t.refresh());const f=r.hook("app:data:refresh",s=>{if(!s||s.includes(e))return t.refresh()});i&&g(f)}const u=Promise.resolve(r._asyncDataPromises[e]).then(()=>t);return Object.assign(u,t),u}function R(e,n){const a={};for(const r of n)a[r]=e[r];return a}export{H as u};
