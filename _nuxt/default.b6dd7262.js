import{a as g,bG as k,i as o,o as i,b as d,j as s,k as e,w as t,m as l,u as m,bI as C,y as h,f as w,bJ as B,P as D,aS as P}from"./entry.a4e2a0a3.js";import{_ as V}from"./client-only.e8d6c171.js";import{_ as G}from"./Footer.106e625e.js";import{u as I}from"./composables.8750476a.js";import"./config.62c248f9.js";const N={class:"top-menu"},R={class:"left"},S={class:"right"},z=g({__name:"DefaultMenu",setup(r){var _;const n=k(),p=(_=n==null?void 0:n.path)!=null?_:"/";function c(a){location.href=a}return(a,u)=>{const v=o("el-link"),f=o("el-menu-item"),y=C,b=o("el-menu"),x=o("IconUser"),$=o("el-icon");return i(),d("div",N,[s("div",R,[e(v,{href:"/"},{default:t(()=>[l(" \u6307\u5C16\u9B54\u6CD5\u5C4B ")]),_:1})]),e(b,{"default-active":m(p),mode:"horizontal",onSelect:c},{default:t(()=>[e(f,{index:"/page/1"},{default:t(()=>[l(" \u9996\u9875 ")]),_:1}),e(f,{index:"/category"},{default:t(()=>[e(y,{to:"/category"},{default:t(()=>[l(" \u5206\u7C7B ")]),_:1})]),_:1}),e(f,{index:"/tag"},{default:t(()=>[e(y,{to:"/tag"},{default:t(()=>[l(" \u6807\u7B7E ")]),_:1})]),_:1})]),_:1},8,["default-active"]),s("div",S,[e(v,{underline:!1,href:"/admin"},{default:t(()=>[e($,{size:26,class:"pointer"},{default:t(()=>[e(x)]),_:1}),l(" \u767B\u5F55 ")]),_:1})])])}}});const A=h(z,[["__scopeId","data-v-d5b6cf87"]]),E={class:"section"},J=g({__name:"Search",setup(r){const n=w("");return(p,c)=>{const _=o("el-button"),a=o("el-input");return i(),d("div",E,[e(a,{modelValue:m(n),"onUpdate:modelValue":c[0]||(c[0]=u=>D(n)?n.value=u:null),class:"input-with-select",placeholder:"\u7AD9\u5185\u641C\u7D22"},{append:t(()=>[e(_,{icon:m(B)},null,8,["icon"])]),_:1},8,["modelValue"])])}}}),M={},U={class:"section"},j=s("ins",{class:"adsbygoogle","data-ad-client":"ca-pub-3208634444966567","data-ad-format":"auto","data-ad-slot":"2184618903","data-full-width-responsive":"true",style:{display:"block"}},null,-1),F=[j];function K(r,n){return i(),d("div",U,F)}const T=h(M,[["render",K]]),X={class:"app-container"},H={class:"layout"},L={class:"main-content"},O={class:"page-section"},q=g({__name:"default",setup(r){return I({script:[{async:!0,src:"/sence.js",crossorigin:"anonymous"},{async:!0,src:"https://fundingchoicesmessages.google.com/i/pub-3208634444966567?ers=1",nonce:"vcvsX_7R-_sJtK2gpysclg"},{nonce:"vcvsX_7R-_sJtK2gpysclg",children:`(function () {
      function signalGooglefcPresent() {
        if (!window.frames['googlefcPresent']) {
          if (document.body) {
            const iframe = document.createElement('iframe');
            iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
            iframe.style.display = 'none';
            iframe.name = 'googlefcPresent';
            document.body.appendChild(iframe);
          } else {
            setTimeout(signalGooglefcPresent, 0);
          }
        }
      }

      signalGooglefcPresent();
    })();`}]}),(n,p)=>{const c=A,_=o("el-backtop"),a=V,u=G;return i(),d("div",null,[s("div",null,[e(c),s("div",X,[s("div",H,[s("div",L,[P(n.$slots,"default",{},void 0,!0)]),s("div",O,[e(J),e(T)])])]),e(a,null,{default:t(()=>[e(_,{bottom:100})]),_:1})]),e(u)])}}});const te=h(q,[["__scopeId","data-v-ef656d3b"]]);export{te as default};
