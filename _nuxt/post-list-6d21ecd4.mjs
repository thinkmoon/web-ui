var z=Object.defineProperty,$=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))D.call(t,a)&&u(e,a,t[a]);if(p)for(var a of p(t))F.call(t,a)&&u(e,a,t[a]);return e},c=(e,t)=>$(e,w(t));import{_ as v,d as _,P as E,r,o as P,c as S,f as i,w as o,i as g,t as s,e as f}from"./entry-f3276c89.mjs";const k=_({data(){return{tableData:[],pagination:{total:0,index:0,size:10}}},created(){this.loadData()},methods:{addPost(){this.$router.push("/admin/editor")},loadData(){E.getList({current:this.pagination.index,size:this.pagination.size}).then(e=>{this.tableData=e.records,this.tableData.forEach(t=>{if(t.fields instanceof Array){let a={};t.fields.forEach(d=>{a[d.name]=d.value}),t.fields=a}}),this.pagination.index=e.current,this.pagination.total=e.total})},handleSizeChange(e){this.pagination.size=e,this.loadData()},handleCurrentChange(e){this.pagination.index=e,this.loadData()},handleEdit(e,t){this.$router.push(`/admin/editor?cid=${t.cid}`)}}}),B=_(c(h({},k),{setup(e,{expose:t}){t();const a={};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}));function x(e,t,a,d,y,A){const l=r("el-table-column"),m=r("el-link"),C=r("el-table"),b=r("el-pagination");return P(),S("div",null,[i(C,{data:e.tableData,height:"960",stripe:""},{default:o(()=>[i(l,{prop:"cid",label:"\u5E8F\u53F7",width:"80",align:"center"}),i(l,{prop:"title",label:"\u6807\u9898",width:"320"},{default:o(n=>[i(m,{onClick:N=>e.handleEdit(n.$index,n.row)},{default:o(()=>[g(s(n.row.title),1)]),_:2},1032,["onClick"])]),_:1}),i(l,{prop:"desc",label:"\u6458\u8981",width:"500"},{default:o(n=>[g(s(n.row.fields.desc),1)]),_:1}),i(l,{prop:"created",label:"\u521B\u5EFA\u65F6\u95F4"},{default:o(n=>[f("span",null,s(e.$filters.time(n.row.created*1e3)),1)]),_:1}),i(l,{prop:"modified",label:"\u66F4\u65B0\u65F6\u95F4"},{default:o(n=>[f("span",null,s(e.$filters.time(n.row.modified*1e3)),1)]),_:1})]),_:1},8,["data"]),i(b,{currentPage:e.pagination.index,"onUpdate:currentPage":t[0]||(t[0]=n=>e.pagination.index=n),"page-sizes":[10,20,30,40],"page-size":e.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"])])}var L=v(B,[["render",x]]);export{L as default};
