import{a as f,ap as k,h as o,o as d,b as i,i as _,j as e,w as t,u as y,q as u,at as C,y as h,r as B,au as D,W as V,p as w}from"./entry.37edf189.js";import{_ as I}from"./Footer.02486664.js";const N={class:"top-menu"},A={class:"left"},M={class:"right"},S=f({__name:"DefaultMenu",setup(p){var a;const n=k(),r=(a=n==null?void 0:n.path)!=null?a:"/";function s(c){location.href=c}return(c,l)=>{const v=o("el-link"),m=o("el-menu-item"),x=C,g=o("el-menu"),$=o("IconUser"),b=o("el-icon");return d(),i("div",N,[_("div",A,[e(v,{href:"/"},{default:t(()=>[u(" \u6307\u5C16\u9B54\u6CD5\u5C4B ")]),_:1})]),e(g,{"default-active":y(r),mode:"horizontal",onSelect:s},{default:t(()=>[e(m,{index:"/page/1"},{default:t(()=>[u(" \u9996\u9875 ")]),_:1}),e(m,{index:"/category"},{default:t(()=>[e(x,{to:"/category"},{default:t(()=>[u(" \u5206\u7C7B ")]),_:1})]),_:1}),e(m,{index:"/tag"},{default:t(()=>[e(x,{to:"/tag"},{default:t(()=>[u(" \u6807\u7B7E ")]),_:1})]),_:1})]),_:1},8,["default-active"]),_("div",M,[e(v,{underline:!1,href:"/admin"},{default:t(()=>[e(b,{size:26,class:"pointer"},{default:t(()=>[e($)]),_:1})]),_:1})])])}}});const U=h(S,[["__scopeId","data-v-14586f58"]]),z={class:"section"},E=f({__name:"Search",setup(p){const n=B("");return(r,s)=>{const a=o("el-button"),c=o("el-input");return d(),i("div",z,[e(c,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value=l),class:"input-with-select",placeholder:"\u7AD9\u5185\u641C\u7D22"},{append:t(()=>[e(a,{icon:y(D)},null,8,["icon"])]),_:1},8,["modelValue"])])}}}),j={},q={class:"section"},F=_("ins",{class:"adsbygoogle","data-ad-client":"ca-pub-3208634444966567","data-ad-format":"auto","data-ad-slot":"2184618903","data-full-width-responsive":"true",style:{display:"block"}},null,-1),G=[F];function L(p,n){return d(),i("div",q,G)}const O=h(j,[["render",L]]),R={class:"app-container"},T={class:"layout"},W={class:"main-content"},H={class:"page-section"},J=f({__name:"default",setup(p){return(n,r)=>{const s=U,a=o("el-backtop"),c=w,l=I;return d(),i("div",null,[_("div",null,[e(s),_("div",R,[_("div",T,[_("div",W,[V(n.$slots,"default",{},void 0,!0)]),_("div",H,[e(E),e(O)])])]),e(c,null,{default:t(()=>[e(a,{bottom:100})]),_:1})]),e(l)])}}});const Q=h(J,[["__scopeId","data-v-934978de"]]);export{Q as default};
