(this["webpackJsonpgithub-pages"]=this["webpackJsonpgithub-pages"]||[]).push([[0],{211:function(e,t,a){e.exports=a(295)},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),c=a.n(i),l=a(81),s=a(68),o=a(155),u=a(7);var b=function(){return r.a.createElement("div",null," test about ")};var p,m,d,O,j,f,y,h,g,w,E,v,_,k,x,z,I,S,P,M,N,A,B,D,q,W,C,L,H,K,Q,G,J,R,T,$,F,U,V,X,Y,Z,ee,te,ae,ne,re,ie,ce,le,se,oe,ue,be,pe,me,de,Oe,je,fe,ye=function(){return r.a.createElement("div",null," test home ")},he=a(154),ge=a.n(he),we=a(21),Ee=Object(we.appSchema)({version:1,tables:[Object(we.tableSchema)({name:"parts",columns:[{name:"name",type:"string"},{name:"sku",type:"string",isIndexed:!0}]}),Object(we.tableSchema)({name:"set_memberships",columns:[{name:"part_id",type:"string",isIndexed:!0},{name:"set_id",type:"string",isIndexed:!0},{name:"part_quantity",type:"number"}]}),Object(we.tableSchema)({name:"sets",columns:[{name:"sku",type:"string",isIndexed:!0},{name:"classification",type:"string"},{name:"biome",type:"string"},{name:"cost",type:"number"},{name:"painted_cost",type:"number",isOptional:!0}]}),Object(we.tableSchema)({name:"set_images",columns:[{name:"number",type:"string"},{name:"set_id",type:"string",isIndexed:!0}]}),Object(we.tableSchema)({name:"lists",columns:[{name:"name",type:"string"}]}),Object(we.tableSchema)({name:"list_items",columns:[{name:"list_id",type:"string",isIndexed:!0},{name:"set_id",type:"string",isIndexed:!0},{name:"quantity",type:"number"},{name:"is_painted",type:"boolean",isOptional:!0}]})]}),ve=a(18),_e=a(37),ke=a(16),xe=a(50),ze=a(49),Ie=a(12),Se=(a(87),a(13)),Pe=(p=Object(Se.field)("name"),m=Object(Se.field)("sku"),d=Object(Se.children)("set_memberships"),g=h=function(e){Object(xe.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(_e.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(ve.a)(e,"name",j,Object(ke.a)(e)),Object(ve.a)(e,"sku",f,Object(ke.a)(e)),Object(ve.a)(e,"setMemberships",y,Object(ke.a)(e)),e}return a}(we.Model),h.table="parts",h.associations={set_memberships:{type:"has_many",foreignKey:"part_id"}},O=g,j=Object(Ie.a)(O.prototype,"name",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=Object(Ie.a)(O.prototype,"sku",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=Object(Ie.a)(O.prototype,"setMemberships",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O),Me=(w=Object(Se.field)("part_quantity"),E=Object(Se.relation)("parts","part_id"),v=Object(Se.relation)("sets","set_id"),S=I=function(e){Object(xe.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(_e.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(ve.a)(e,"partQuantity",k,Object(ke.a)(e)),Object(ve.a)(e,"part",x,Object(ke.a)(e)),Object(ve.a)(e,"set",z,Object(ke.a)(e)),e}return a}(we.Model),I.table="set_memberships",I.associations={parts:{type:"belongs_to",key:"part_id"},sets:{type:"belongs_to",key:"set_id"}},_=S,k=Object(Ie.a)(_.prototype,"partQuantity",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=Object(Ie.a)(_.prototype,"part",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=Object(Ie.a)(_.prototype,"set",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_),Ne=(P=Object(Se.field)("sku"),M=Object(Se.field)("classification"),N=Object(Se.field)("biome"),A=Object(Se.field)("cost"),B=Object(Se.field)("painted_cost"),D=Object(Se.children)("set_memberships"),q=Object(Se.children)("set_images"),T=R=function(e){Object(xe.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(_e.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(ve.a)(e,"sku",C,Object(ke.a)(e)),Object(ve.a)(e,"classification",L,Object(ke.a)(e)),Object(ve.a)(e,"biome",H,Object(ke.a)(e)),Object(ve.a)(e,"cost",K,Object(ke.a)(e)),Object(ve.a)(e,"paintedCost",Q,Object(ke.a)(e)),Object(ve.a)(e,"setMemberships",G,Object(ke.a)(e)),Object(ve.a)(e,"setImages",J,Object(ke.a)(e)),e}return a}(we.Model),R.table="sets",R.associations={set_memberships:{type:"has_many",foreignKey:"set_id"},set_images:{type:"has_many",foreignKey:"set_id"}},W=T,C=Object(Ie.a)(W.prototype,"sku",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=Object(Ie.a)(W.prototype,"classification",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=Object(Ie.a)(W.prototype,"biome",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=Object(Ie.a)(W.prototype,"cost",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=Object(Ie.a)(W.prototype,"paintedCost",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=Object(Ie.a)(W.prototype,"setMemberships",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=Object(Ie.a)(W.prototype,"setImages",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W),Ae=a(52),Be=a.n(Ae),De=a(32),qe=a(96),We=a(204),Ce=a(84),Le=($=Object(Se.field)("name"),F=Object(Se.children)("list_items"),Z=Y=function(e){Object(xe.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(_e.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(ve.a)(e,"name",V,Object(ke.a)(e)),Object(ve.a)(e,"items",X,Object(ke.a)(e)),e}return Object(qe.a)(a,[{key:"setName",value:function(){var e=Object(De.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.update((function(e){e.name=t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addItem",value:function(){var e=Object(De.a)(Be.a.mark((function e(t,a,n){var r=this;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.collections.get("list_items").create((function(e){e.list.set(r),e.set.set(t),e.quantity=a,e.isPainted=n}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"markAsDeleted",value:function(){var e=Object(De.a)(Be.a.mark((function e(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.items.destroyAllPermanently();case 2:return e.next=4,Object(We.a)(Object(Ce.a)(a.prototype),"markAsDeleted",this).call(this);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(we.Model),Y.table="lists",Y.associations={list_items:{type:"has_many",foreignKey:"list_id"}},U=Z,V=Object(Ie.a)(U.prototype,"name",[$],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=Object(Ie.a)(U.prototype,"items",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(Ie.a)(U.prototype,"setName",[Se.action],Object.getOwnPropertyDescriptor(U.prototype,"setName"),U.prototype),Object(Ie.a)(U.prototype,"addItem",[Se.action],Object.getOwnPropertyDescriptor(U.prototype,"addItem"),U.prototype),U),He=(ee=Object(Se.field)("quantity"),te=Object(Se.field)("is_painted"),ae=Object(Se.relation)("lists","list_id"),ne=Object(Se.relation)("sets","set_id"),ue=oe=function(e){Object(xe.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(_e.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(ve.a)(e,"quantity",ie,Object(ke.a)(e)),Object(ve.a)(e,"isPainted",ce,Object(ke.a)(e)),Object(ve.a)(e,"list",le,Object(ke.a)(e)),Object(ve.a)(e,"set",se,Object(ke.a)(e)),e}return Object(qe.a)(a,[{key:"setQuantity",value:function(){var e=Object(De.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.update((function(e){e.quantity=t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setIsPainted",value:function(){var e=Object(De.a)(Be.a.mark((function e(t){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.update((function(e){e.isPainted=t}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),a}(we.Model),oe.table="list_items",oe.associations={lists:{type:"belongs_to",key:"list_id"}},re=ue,ie=Object(Ie.a)(re.prototype,"quantity",[ee],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ce=Object(Ie.a)(re.prototype,"isPainted",[te],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),le=Object(Ie.a)(re.prototype,"list",[ae],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),se=Object(Ie.a)(re.prototype,"set",[ne],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(Ie.a)(re.prototype,"setQuantity",[Se.action],Object.getOwnPropertyDescriptor(re.prototype,"setQuantity"),re.prototype),Object(Ie.a)(re.prototype,"setIsPainted",[Se.action],Object.getOwnPropertyDescriptor(re.prototype,"setIsPainted"),re.prototype),re),Ke=(be=Object(Se.field)("number"),pe=Object(Se.relation)("sets","set_id"),fe=je=function(e){Object(xe.a)(a,e);var t=Object(ze.a)(a);function a(){var e;Object(_e.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(ve.a)(e,"number",de,Object(ke.a)(e)),Object(ve.a)(e,"set",Oe,Object(ke.a)(e)),e}return a}(we.Model),je.table="set_images",je.associations={sets:{type:"belongs_to",key:"set_id"}},me=fe,de=Object(Ie.a)(me.prototype,"number",[be],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oe=Object(Ie.a)(me.prototype,"set",[pe],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),me),Qe=a(189),Ge=new(a.n(Qe).a)({dbName:"WildlandsKickstarterDb",schema:Ee,useWebWorker:!1,useIncrementalIndexedDB:!0}),Je=new we.Database({adapter:Ge,modelClasses:[Pe,Me,Ne,Ke,Le,He],actionsEnabled:!0});var Re=function(){return r.a.createElement(ge.a,{database:Je},r.a.createElement("div",null," test wildlands "))},Te=a(22),$e=[{subPage:"wildlands",name:"Wildlands",component:r.a.createElement(Re,null)}];function Fe(){var e=Object(Te.f)();return r.a.createElement(Te.c,null,$e.map((function(t,a){return r.a.createElement(Te.a,{path:"".concat(e.path,"/").concat(t.subPage)},t.component)})),r.a.createElement(Te.a,{path:e.path},"Select a project"))}var Ue=a(335),Ve=a(76),Xe=a(346),Ye=a(336),Ze=a(337),et=a(340),tt=a(143),at=a(339),nt=a(192),rt=a.n(nt),it=a(193),ct=a.n(it),lt=a(194),st=a.n(lt),ot=a(203),ut=a(111),bt=a(347),pt=a(333),mt=a(334),dt=a(190),Ot=a.n(dt),jt=a(191),ft=a.n(jt);var yt=function(e){var t=e.icon,a=e.primary,n=e.to,i=e.open,c=Object(ot.a)(e,["icon","primary","to","open"]),l=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(ut.b,Object.assign({to:n,ref:t},e))}))}),[n]);return r.a.createElement("li",null,r.a.createElement(bt.a,Object.assign({button:!0,component:l},c),t?r.a.createElement(pt.a,null,t):null,r.a.createElement(mt.a,{primary:a}),null!=i?i?r.a.createElement(Ot.a,null):r.a.createElement(ft.a,null):null))},ht=a(341),gt=a(200),wt=a.n(gt),Et=a(199),vt=a.n(Et),_t=a(201),kt=a.n(_t),xt=a(198),zt=a.n(xt),It=a(195),St=a.n(It),Pt=a(196),Mt=a.n(Pt),Nt=a(197),At=a.n(Nt),Bt=a(299),Dt=a(338),qt=a(342),Wt=Object(Ue.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},nestedList:{paddingLeft:e.spacing(6)}}}));var Ct=function(){var e=Wt(),t=Object(Ve.a)(),a=r.a.useState(!0),n=Object(s.a)(a,2),i=n[0],c=n[1],o=r.a.useState(!1),p=Object(s.a)(o,2),m=p[0],d=p[1];return r.a.createElement(ut.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(Ye.a,{position:"fixed",className:Object(u.a)(e.appBar,Object(l.a)({},e.appBarShift,i))},r.a.createElement(Ze.a,null,r.a.createElement(Dt.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(u.a)(e.menuButton,i&&e.hide)},r.a.createElement(rt.a,null)),r.a.createElement(tt.a,{variant:"h6",noWrap:!0},"toppulous"))),r.a.createElement(Xe.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(Dt.a,{onClick:function(){c(!1)}},"ltr"===t.direction?r.a.createElement(ct.a,null):r.a.createElement(st.a,null))),r.a.createElement(at.a,null),r.a.createElement(et.a,null,r.a.createElement(yt,{to:"/",primary:"Home",icon:r.a.createElement(St.a,null)}),r.a.createElement(yt,{to:"/about",primary:"About",icon:r.a.createElement(Mt.a,null)}),r.a.createElement(yt,{to:"/projects",primary:"Projects",icon:r.a.createElement(At.a,null),open:m,onClick:function(){d((function(e){return!e}))}}),r.a.createElement(ht.a,{component:"li",in:m,timeout:"auto",unmountOnExit:!0},r.a.createElement(et.a,{disablePadding:!0},$e.map((function(t,a){return r.a.createElement(yt,{to:"/projects/".concat(t.subPage),primary:t.name,className:e.nestedList})}))))),r.a.createElement(at.a,null),r.a.createElement(qt.a,{variant:"text",fullWidth:!0},r.a.createElement(Bt.a,{"aria-label":"GitHub",href:"https://github.com/toppulous"},r.a.createElement(zt.a,null)),r.a.createElement(Bt.a,{"aria-label":"Linkedin",href:"https://www.linkedin.com/in/toppulous/"},r.a.createElement(vt.a,null)),r.a.createElement(Bt.a,{"aria-label":"Instagram",href:"https://www.instagram.com/toppulous/"},r.a.createElement(wt.a,null)),r.a.createElement(Bt.a,{"aria-label":"Twitter",href:"https://twitter.com/toppulous"},r.a.createElement(kt.a,null))),r.a.createElement(at.a,null)),r.a.createElement("main",{className:Object(u.a)(e.content,Object(l.a)({},e.contentShift,i))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(Te.c,null,r.a.createElement(Te.a,{path:"/about"},r.a.createElement(b,null)),r.a.createElement(Te.a,{path:"/projects"},r.a.createElement(Fe,null)),r.a.createElement(Te.a,{path:"/"},r.a.createElement(ye,null))))))},Lt=a(343),Ht=a(202),Kt=a(344),Qt=a(345);var Gt=function(){var e=Object(Lt.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(Ht.a)({palette:{type:e?"dark":"light"}})}),[e]);return r.a.createElement(Kt.a,{theme:t},r.a.createElement(Qt.a,null),r.a.createElement(Ct,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.c31c44b9.chunk.js.map