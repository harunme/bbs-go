import{_ as G,I as H,x as P,w as $,b as f,y as S,z as k,A as v}from"./index.1b6e845e.js";import{bA as j,bk as J,bB as K,bU as q,aV as M,bC as Q,bD as W,C as d,aL as g,aI as C,aD as r,B as a,F as t,aG as s,aJ as i,aE as _,aH as o,aK as l,u as I,bV as X,ba as Y,bb as Z}from"./arco.ef2238db.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./chart.ba8df0e9.js";import"./vue.f27dce51.js";const b=u=>(Y("data-v-f3a8e80b"),u=u(),Z(),u),ee={class:"topics"},te={class:"topic-status"},se={class:"topic-header"},ae=["src"],ne={class:"topic-head-info"},ie={class:"nickname"},oe={class:"topic-metas"},ce={class:"meta-item"},re=b(()=>t("span",null,"ID:",-1)),me={class:"meta-item"},de=b(()=>t("span",null,"\u65F6\u95F4:",-1)),le={class:"meta-item"},_e=b(()=>t("span",null,"\u67E5\u770B:",-1)),ue={class:"meta-item"},ye=b(()=>t("span",null,"\u70B9\u8D5E:",-1)),he={class:"meta-item"},pe=b(()=>t("span",null,"\u8BC4\u8BBA:",-1)),fe={key:0,class:"topic-summary"},ke={key:1,class:"topic-summary"},ve={class:"topic-image-list"},ge={class:"topic-footer"},be={class:"topic-tags"},we={class:"topic-actions"},Le={__name:"TopicList",props:{results:{type:Array,default(){return[]}}},emits:["change"],setup(u,{emit:D}){const p=D,O=async n=>{try{await f.form("/api/admin/topic/delete",S({id:n})),k("\u5220\u9664\u6210\u529F"),p("change")}catch(m){v(m)}},U=async n=>{try{await f.form("/api/admin/topic/undelete",S({id:n})),k("\u53D6\u6D88\u5220\u9664\u6210\u529F"),p("change")}catch(m){v(m)}},B=async n=>{try{await f.form("/api/admin/topic/recommend",S({id:n})),k("\u63A8\u8350\u6210\u529F"),p("change")}catch(m){v(m)}},T=async n=>{try{await f.delete(`/api/admin/topic/recommend?id=${n}`),k("\u53D6\u6D88\u63A8\u8350\u6210\u529F"),p("change")}catch(m){v(m)}},F=async n=>{try{await f.form("/api/admin/topic/audit",S({id:n})),k("\u5BA1\u6838\u6210\u529F"),p("change")}catch(m){v(m)}},z=n=>{};return(n,m)=>{const w=j,R=H,V=J,N=K,A=X,L=q,y=M,h=Q,E=W;return a(),d("div",ee,[u.results&&u.results.length?(a(!0),d(g,{key:0},C(u.results,e=>(a(),d("div",{key:e.id,class:"topic-item"},[t("div",te,[e.recommend?(a(),r(w,{key:0,color:"green"},{default:s(()=>[i("\u5DF2\u63A8\u8350")]),_:1})):_("",!0),e.status===1?(a(),r(w,{key:1,color:"red"},{default:s(()=>[i("\u5DF2\u5220\u9664")]),_:1})):_("",!0)]),t("div",se,[o(V,{size:40},{default:s(()=>[e.user.avatar?(a(),d("img",{key:0,src:e.user.avatar},null,8,ae)):(a(),r(R,{key:1}))]),_:2},1024),t("div",ne,[t("div",ie,l(e.user.nickname),1),t("div",oe,[t("div",ce,[re,t("span",null,l(e.id),1)]),t("div",me,[de,t("span",null,l(("useFormatDate"in n?n.useFormatDate:I(P))(e.createTime)),1)]),t("div",le,[_e,t("span",null,l(e.viewCount),1)]),t("div",ue,[ye,t("span",null,l(e.likeCount),1)]),t("div",he,[pe,t("span",null,l(e.commentCount),1)])])])]),e.type===0&&e.summary?(a(),d("div",fe,l(e.summary),1)):_("",!0),e.type===1&&e.content?(a(),d("div",ke,l(e.content),1)):_("",!0),e.imageList&&e.imageList.length?(a(),r(A,{key:2,infinite:""},{default:s(()=>[t("div",ve,[(a(!0),d(g,null,C(e.imageList,(c,x)=>(a(),r(N,{key:x,width:"150",height:"150",class:"image-item","show-loader":"",src:c.url,fit:"cover"},null,8,["src"]))),128))])]),_:2},1024)):_("",!0),t("div",ge,[t("div",be,[e.node?(a(),r(w,{key:0,color:"green",size:"mini"},{default:s(()=>[i(l(e.node.name),1)]),_:2},1024)):_("",!0),e.tags&&e.tags.length?(a(!0),d(g,{key:1},C(e.tags,c=>(a(),r(w,{key:c.id,size:"mini"},{default:s(()=>[i("#\xA0"+l(c.name),1)]),_:2},1024))),128)):_("",!0)]),t("div",we,[e.status===0?(a(),d(g,{key:0},[o(L,{class:"action-item",href:("useSiteURL"in n?n.useSiteURL:I($))("/topic/"+e.id),target:"_blank"},{default:s(()=>[i("\u67E5\u770B\u8BE6\u60C5")]),_:2},1032,["href"]),o(L,{class:"action-item",onClick:c=>z(e.id)},{default:s(()=>[i(" \u67E5\u770B\u8BC4\u8BBA ")]),_:2},1032,["onClick"]),e.recommend?(a(),r(h,{key:0,content:"\u662F\u5426\u786E\u5B9A\u53D6\u6D88\u63A8\u8350\uFF1F",onOk:c=>T(e.id)},{default:s(()=>[o(y,{class:"action-item",size:"mini",type:"primary"},{default:s(()=>[i("\u53D6\u6D88\u63A8\u8350")]),_:1})]),_:2},1032,["onOk"])):!e.recommend&&e.status===0?(a(),r(h,{key:1,content:"\u662F\u5426\u786E\u5B9A\u63A8\u8350\uFF1F",onOk:c=>B(e.id)},{default:s(()=>[o(y,{class:"action-item",size:"mini",type:"primary"},{default:s(()=>[i("\u63A8\u8350")]),_:1})]),_:2},1032,["onOk"])):_("",!0),o(h,{content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",onOk:c=>O(e.id)},{default:s(()=>[o(y,{class:"action-item",size:"mini",type:"primary"},{default:s(()=>[i("\u5220\u9664")]),_:1})]),_:2},1032,["onOk"])],64)):e.status===1?(a(),r(h,{key:1,content:"\u662F\u5426\u786E\u5B9A\u53D6\u6D88\u5220\u9664\uFF1F",onOk:c=>U(e.id)},{default:s(()=>[o(y,{class:"action-item",size:"mini",type:"primary"},{default:s(()=>[i("\u53D6\u6D88\u5220\u9664")]),_:1})]),_:2},1032,["onOk"])):e.status===2?(a(),d(g,{key:2},[o(L,{class:"action-item",href:("useSiteURL"in n?n.useSiteURL:I($))("/topic/"+e.id),target:"_blank"},{default:s(()=>[i("\u67E5\u770B\u8BE6\u60C5")]),_:2},1032,["href"]),o(L,{class:"action-item",onClick:c=>z(e.id)},{default:s(()=>[i("\u67E5\u770B\u8BC4\u8BBA")]),_:2},1032,["onClick"]),o(h,{content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",onOk:c=>O(e.id)},{default:s(()=>[o(y,{class:"action-item",size:"mini",type:"primary"},{default:s(()=>[i("\u5220\u9664")]),_:1})]),_:2},1032,["onOk"]),o(h,{content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",onOk:c=>F(e.id)},{default:s(()=>[o(y,{class:"action-item",size:"mini",type:"primary"},{default:s(()=>[i("\u5BA1\u6838\u901A\u8FC7")]),_:1})]),_:2},1032,["onOk"])],64)):_("",!0)])])]))),128)):(a(),r(E,{key:1}))])}}},Te=G(Le,[["__scopeId","data-v-f3a8e80b"]]);export{Te as default};
