import{_ as p,d as c,l as _,U as f,b as a,c as h,e as t,w as s,m as w,f as u,o as V}from"./entry-16671c3d.mjs";const b=c({data(){return{form:{account:"",password:""}}},methods:{onSubmit(){const e=_();f.login(this.form).then(o=>{e.auth=o,localStorage.setItem("token",o),this.$router.push("/admin")}).catch(o=>{this.$message.error("\u767B\u5F55\u9519\u8BEF")})}}}),B={class:"app-container"},g=u("\u767B\u5F55"),C={class:"login-dialog"},$=u("\u767B\u5F55");function k(e,o,v,F,U,S){const d=a("Title"),r=a("el-input"),n=a("el-form-item"),m=a("el-button"),i=a("el-form");return V(),h("div",B,[t(d,null,{default:s(()=>[g]),_:1}),w("div",C,[t(i,{model:e.form,"label-width":"120px"},{default:s(()=>[t(n,{label:"\u8D26\u53F7"},{default:s(()=>[t(r,{modelValue:e.form.account,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.account=l)},null,8,["modelValue"])]),_:1}),t(n,{label:"\u5BC6\u7801"},{default:s(()=>[t(r,{modelValue:e.form.password,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.password=l),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(n,null,{default:s(()=>[t(m,{type:"primary",onClick:e.onSubmit},{default:s(()=>[$]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])])])}var N=p(b,[["render",k],["__scopeId","data-v-2d45ae16"]]);export{N as default};
