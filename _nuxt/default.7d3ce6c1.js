import{a as g,bG as C,p as o,o as u,b as d,i as s,j as e,w as t,t as i,u as m,bI as k,y as h,f as w,bJ as B,L as D,aP as P}from"./entry.49b52dd6.js";import{_ as V}from"./client-only.416f2ec8.js";import{_ as G}from"./Footer.2b13685a.js";import{u as I}from"./composables.dc8c6803.js";import"./config.cd635be5.js";const N={class:"top-menu"},R={class:"left"},z={class:"right"},A=g({__name:"DefaultMenu",setup(r){var _;const n=C(),p=(_=n==null?void 0:n.path)!=null?_:"/";function c(a){location.href=a}return(a,l)=>{const v=o("el-link"),f=o("el-menu-item"),y=k,x=o("el-menu"),b=o("IconUser"),$=o("el-icon");return u(),d("div",N,[s("div",R,[e(v,{href:"/"},{default:t(()=>[i(" \u6307\u5C16\u9B54\u6CD5\u5C4B ")]),_:1})]),e(x,{"default-active":m(p),mode:"horizontal",onSelect:c},{default:t(()=>[e(f,{index:"/page/1"},{default:t(()=>[i(" \u9996\u9875 ")]),_:1}),e(f,{index:"/category"},{default:t(()=>[e(y,{to:"/category"},{default:t(()=>[i(" \u5206\u7C7B ")]),_:1})]),_:1}),e(f,{index:"/tag"},{default:t(()=>[e(y,{to:"/tag"},{default:t(()=>[i(" \u6807\u7B7E ")]),_:1})]),_:1})]),_:1},8,["default-active"]),s("div",z,[e(v,{underline:!1,href:"/admin"},{default:t(()=>[e($,{size:26,class:"pointer"},{default:t(()=>[e(b)]),_:1})]),_:1})])])}}});const E=h(A,[["__scopeId","data-v-14586f58"]]),J={class:"section"},M=g({__name:"Search",setup(r){const n=w("");return(p,c)=>{const _=o("el-button"),a=o("el-input");return u(),d("div",J,[e(a,{modelValue:m(n),"onUpdate:modelValue":c[0]||(c[0]=l=>D(n)?n.value=l:null),class:"input-with-select",placeholder:"\u7AD9\u5185\u641C\u7D22"},{append:t(()=>[e(_,{icon:m(B)},null,8,["icon"])]),_:1},8,["modelValue"])])}}}),S={},U={class:"section"},j=s("ins",{class:"adsbygoogle","data-ad-client":"ca-pub-3208634444966567","data-ad-format":"auto","data-ad-slot":"2184618903","data-full-width-responsive":"true",style:{display:"block"}},null,-1),K=[j];function L(r,n){return u(),d("div",U,K)}const T=h(S,[["render",L]]),X={class:"app-container"},F={class:"layout"},H={class:"main-content"},O={class:"page-section"},q=g({__name:"default",setup(r){return I({script:[{async:!0,src:"/sence.js",crossorigin:"anonymous"},{async:!0,src:"https://fundingchoicesmessages.google.com/i/pub-3208634444966567?ers=1",nonce:"vcvsX_7R-_sJtK2gpysclg"},{nonce:"vcvsX_7R-_sJtK2gpysclg",children:`(function () {
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
    })();`}]}),(n,p)=>{const c=E,_=o("el-backtop"),a=V,l=G;return u(),d("div",null,[s("div",null,[e(c),s("div",X,[s("div",F,[s("div",H,[P(n.$slots,"default",{},void 0,!0)]),s("div",O,[e(M),e(T)])])]),e(a,null,{default:t(()=>[e(_,{bottom:100})]),_:1})]),e(l)])}}});const te=h(q,[["__scopeId","data-v-174802d4"]]);export{te as default};
