import{E as d,R as w,v as y,S as D,B as H,s as g,d as S,U as _,V as b,W as p}from"./Bt3Ww_Np.js";import q from"./Cdcnjmo4.js";import x from"./Co9IiAvr.js";import"./pzazJFvy.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./BdYZoD3z.js";import"./DQmA5XuM.js";import"./B5mrZmGu.js";const a=(s,u=y())=>{const e=d(s),f=g();w(()=>d(s),(n=e)=>{if(!u.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>H(t))},{immediate:!0})},$=S({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(s){const{contentHead:u}=g().public.content,e=_(),{tag:f,excerpt:m,path:n,query:t,head:r}=s,c=r===void 0?u:r,l={...t||{},path:n||(t==null?void 0:t.path)||b(y().path),find:"one"},v=(o,i)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return p(x,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:m,...this.$attrs})}:({data:o})=>(c&&a(o),p(q,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||p("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||p("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),J=$;export{J as default};
