import{g as O,B as U,b as B,y as G,x as H}from"./index.1b6e845e.js";import{d as $,e as C,r as z,c as j,o as K,b4 as M,bE as q,ab as L,aV as Q,b8 as R,a5 as W,bA as X,bI as Y,C as Z,F as f,aH as e,aG as t,u as a,B as h,aJ as d,aD as E,aK as k,b5 as ee,bG as te,bJ as ae}from"./arco.ef2238db.js";/* empty css                *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css              */import{_ as oe}from"./Edit.vue_vue_type_script_setup_true_lang.19eea1fb.js";import"./chart.ba8df0e9.js";import"./vue.f27dce51.js";const ne={class:"container"},se={class:"container-header"},le={class:"action-btns"},ie={class:"container-main"},v=0,ke=$({__name:"index",setup(ue){const c=O(),_=C(!1),g=C(),s=z({limit:20,page:1,name:void 0,code:void 0,status:0}),r=z({page:{page:1,limit:20,total:0},results:[]}),w=j(()=>({total:r.page.total,current:r.page.page,pageSize:r.page.limit,showTotal:!0,showJumper:!0,showPageSize:!0,pageSizeOptions:[20,50,100,200,300,500]}));K(()=>{U()});const u=async()=>{_.value=!0;try{const n=await B.postForm("/api/admin/role/list",G(s));r.page=n.page,r.results=n.results}finally{_.value=!1}};u();const D=()=>{g.value.show()},V=n=>{g.value.showEdit(n)},x=async n=>{const l=[];n.forEach(m=>{l.push(m.id)}),await B.post("/api/admin/role/update_sort",l),await u()},S=n=>{s.page=n,u()},T=n=>{s.limit=n,u()};return(n,l)=>{const m=M,p=ee,y=te,A=q,I=L,b=Q,P=R,J=W,i=ae,F=X,N=Y;return h(),Z("div",ne,[f("div",se,[e(P,{model:a(s),layout:"inline",size:a(c).table.size},{default:t(()=>[e(p,null,{default:t(()=>[e(m,{modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=o=>a(s).name=o),placeholder:"\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(m,{modelValue:a(s).code,"onUpdate:modelValue":l[1]||(l[1]=o=>a(s).code=o),placeholder:"\u89D2\u8272\u7F16\u7801"},null,8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(A,{modelValue:a(s).status,"onUpdate:modelValue":l[2]||(l[2]=o=>a(s).status=o),placeholder:"\u72B6\u6001","allow-clear":"",onChange:u},{default:t(()=>[e(y,{value:0,label:"\u6B63\u5E38"}),e(y,{value:1,label:"\u7981\u7528"})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(b,{type:"primary","html-type":"submit",onClick:u},{icon:t(()=>[e(I)]),default:t(()=>[d(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1},8,["model","size"]),f("div",le,[e(b,{type:"primary",size:a(c).table.size,onClick:D},{icon:t(()=>[e(J)]),default:t(()=>[d(" \u65B0\u589E ")]),_:1},8,["size"])])]),f("div",ie,[e(N,{loading:a(_),data:a(r).results,size:a(c).table.size,bordered:a(c).table.bordered,pagination:a(w),"sticky-header":!0,style:{height:"100%"},"column-resizable":"",draggable:{type:"handle",width:40},"row-key":"id",onChange:x,onPageChange:S,onPageSizeChange:T},{columns:t(()=>[e(i,{title:"\u7F16\u53F7","data-index":"id"}),e(i,{title:"\u540D\u79F0","data-index":"name"}),e(i,{title:"\u89D2\u8272\u7F16\u7801","data-index":"code"}),e(i,{title:"\u7C7B\u578B","data-index":"name"},{cell:t(({record:o})=>[o.type===v?(h(),E(F,{key:0,color:"blue"},{default:t(()=>[d("\u7CFB\u7EDF")]),_:1})):(h(),E(F,{key:1},{default:t(()=>[d("\u81EA\u5B9A\u4E49")]),_:1}))]),_:1}),e(i,{title:"\u5907\u6CE8","data-index":"remark"}),e(i,{title:"\u72B6\u6001","data-index":"status"},{cell:t(({record:o})=>[d(k(o.status===0?"\u6B63\u5E38":"\u7981\u7528"),1)]),_:1}),e(i,{title:"\u521B\u5EFA\u65F6\u95F4","data-index":"createTime"},{cell:t(({record:o})=>[d(k(("useFormatDate"in n?n.useFormatDate:a(H))(o.createTime)),1)]),_:1}),e(i,{title:"\u64CD\u4F5C"},{cell:t(({record:o})=>[e(b,{type:"primary",size:a(c).table.size,disabled:o.type===v,onClick:de=>V(o.id)},{default:t(()=>[d("\u7F16\u8F91")]),_:2},1032,["size","disabled","onClick"])]),_:1})]),_:1},8,["loading","data","size","bordered","pagination"])]),e(oe,{ref_key:"edit",ref:g,onOk:u},null,512)])}}});export{ke as default};
