import{l as v,I as _,J as b,d as y,K as k,L as g,M as w,N as $,c as n,H as h,w as m,e as i,n as l,O as u,g as c,P as C,Q as P,h as j,f as t,t as p,v as N}from"./Ddi04aUC.js";import{u as S}from"./Ys7ZMwxj.js";import{_ as B}from"./CIfl60Hu.js";import{q as O}from"./CTlNeLi-.js";const V={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},q=_(b.ui.strategy,b.ui.card,V),x=y({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:a}=S("card",k(e,"ui"),q),r=g(()=>w($(s.value.base,s.value.rounded,s.value.divide,s.value.ring,s.value.shadow,s.value.background),e.class));return{ui:s,attrs:a,cardClass:r}}});function z(e,s,a,r,o,d){return n(),h(P(e.$attrs.onSubmit?"form":e.as),C({class:e.cardClass},e.attrs),{default:m(()=>[e.$slots.header?(n(),i("div",{key:0,class:l([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[u(e.$slots,"header")],2)):c("",!0),e.$slots.default?(n(),i("div",{key:1,class:l([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[u(e.$slots,"default")],2)):c("",!0),e.$slots.footer?(n(),i("div",{key:2,class:l([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[u(e.$slots,"footer")],2)):c("",!0)]),_:3},16,["class"])}const A=v(x,[["render",z]]),D={class:"flex h-full flex-col items-center md:flex-row md:justify-between md:gap-8"},I={class:"flex h-60 w-full items-center md:h-40 md:w-1/3 lg:h-60 lg:w-2/5"},J=["src","alt"],L={class:"md:w-2/3 lg:w-3/5"},M={class:"mb-3 text-2xl font-semibold text-primary lg:transition-all"},R={class:"mb-3 text-base leading-relaxed dark:text-gray-200 xl:text-lg"},U={class:"mb-3 block capitalize text-yellow-500 dark:text-yellow-400"},F=y({__name:"PostCard",props:{post:{}},setup(e){return(s,a)=>{const r=A,o=B;return n(),h(o,{to:{path:s.post._path},class:"group block w-full border border-transparent transition-all no-underline"},{default:m(()=>[j(r,{class:"group-hover:border-primary group-hover:bg-primary/20"},{default:m(()=>[t("div",D,[t("figure",I,[t("img",{class:"h-full w-full rounded-[2rem] object-cover object-center p-4",src:s.post.img,alt:s.post.title},null,8,J)]),t("div",L,[t("h3",M,p(s.post.title),1),t("p",R,p(s.post.description),1),t("span",U,"#"+p(s.post.category),1)])])]),_:1})]),_:1},8,["to"])}}}),G=async()=>{const{slug:e}=N().params,s=await O("blog").sort({id:-1}).find(),a=g(()=>s.find(o=>o.slug===e[0])),r=g(()=>s.filter(o=>{var d,f;return o.category===((d=a.value)==null?void 0:d.category)&&o.slug!==((f=a.value)==null?void 0:f.slug)}));return{posts:s,currentPost:a,similarPosts:r}};export{F as _,G as u};
