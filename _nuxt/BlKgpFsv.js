import{a as O,_ as z,b as k,c as $,u as V,d as C}from"./BeHKcKKN.js";import{l as f,c as l,e as c,f as t,h as s,w as r,k as n,E as A,J as D,K as x,d as j,L as I,I as h,M as N,N as b,n as u,F as T,O as U,t as S,H as y,P as v,g as w}from"./DdH3fkNF.js";import"./Bhjrkl7B.js";import"./Cw3F2ftI.js";const E={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},G={},J={class:"min-h-[80vh] lg:max-h-[60vh] flex items-center md:justify-between w-full flex-col-reverse lg:flex-row text-center lg:text-left gap-4"},P={class:"md:p-14 lg:p-16 h-full flex flex-col justify-around flex-1"},F=t("h1",{class:"text-5xl font-bold sm:text-7xl"},[n(" Your favorite "),t("span",{class:"text-primary"},"Vue"),n(" & "),t("span",{class:"text-yellow-400"},"UnJS"),n(" resource ")],-1),M=t("p",{class:"text-lg mt-4"},"You just don't know it yet",-1),H={class:"flex gap-2 justify-center lg:justify-start pt-8"},L={class:"flex justify-center md:justify-end flex-1 pt-8 lg:p-16 lg:pr-4 relative"},Y=t("div",{class:"absolute bg-primary inset-0 top-8 lg:inset-auto dark:bg-primary/60 md:w-96 lg:w-96 lg:h-96 blur-3xl lg:p-16 lg:pr-4 rounded-full"},null,-1),K=["src"];function R(e,o){const a=z;return l(),c("section",J,[t("section",P,[t("div",null,[F,M,t("div",H,[s(a,{size:"xl",icon:"i-heroicons-rocket-launch"},{default:r(()=>[n("Go to blog")]),_:1}),s(a,{color:"gray",variant:"outline",size:"xl",icon:"i-heroicons-document-arrow-down"},{default:r(()=>[n("Explore templates")]),_:1})])])]),t("section",L,[Y,t("img",{src:"avatar"in e?e.avatar:A(O),alt:"Avatar",class:"w-72 md:w-96 lg:w-96 lg:h-96 object-cover drop-shadow-2xl"},null,8,K)])])}const q=f(G,[["render",R]]),_=D(x.ui.strategy,x.ui.divider,E),Q=j({components:{UIcon:k,UAvatar:$},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>_.default.size,validator(e){return Object.keys(_.border.size.horizontal).includes(e)||Object.keys(_.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:a}=V("divider",I(e,"ui"),_),d=h(()=>N(b(o.value.wrapper.base,o.value.wrapper[e.orientation]),e.class)),i=h(()=>b(o.value.container.base,o.value.container[e.orientation])),p=h(()=>b(o.value.border.base,o.value.border[e.orientation],o.value.border.size[e.orientation][e.size],o.value.border.type[e.type]));return{ui:o,attrs:a,wrapperClass:d,containerClass:i,borderClass:p}}});function W(e,o,a,d,i,p){const m=k,g=$;return l(),c("div",v({class:e.wrapperClass},e.attrs),[t("div",{class:u(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(l(),c(T,{key:0},[t("div",{class:u(e.containerClass)},[U(e.$slots,"default",{},()=>[e.label?(l(),c("span",{key:0,class:u(e.ui.label)},S(e.label),3)):e.icon?(l(),y(m,{key:1,name:e.icon,class:u(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(l(),y(g,v({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):w("",!0)])],2),t("div",{class:u(e.borderClass)},null,2)],64)):w("",!0)],16)}const B=f(Q,[["render",W]]),X={class:"py-8 lg:py-16 flex flex-col items-center"},Z={class:"text-3xl font-bold lg:text-5xl text-center"},ee=j({__name:"PageSection",props:{title:{},type:{}},setup(e){return(o,a)=>(l(),c("section",X,[t("h2",Z,S(o.title),1),t("section",{class:u(["py-8",{"max-w-xl":o.type==="column","grid grid-cols-3 gap-4":o.type==="grid"}])},[U(o.$slots,"default")],2)]))}}),te={},oe={class:"py-8"};function se(e,o){const a=B,d=C;return l(),c("section",null,[s(a),t("footer",oe,[s(d,null,{default:r(()=>[n(" The footer ")]),_:1})])])}const ne=f(te,[["render",se]]),ae={},re=t("p",{class:"text-lg"},[n(" The goal of this place is to be the ultimate resource for web developers seeking to learn and refine their skills using technologies around the "),t("span",{class:"text-primary font-bold"},"Vue"),n(" and "),t("span",{class:"text-yellow-400 font-bold"},"UnJS"),n(" ecosystems. ")],-1),le=t("p",{class:"text-lg"}," I’m always open to new projects and collaborations. Let’s work together to create something amazing. ",-1),ie={class:"flex justify-center pt-4"};function ce(e,o){const a=q,d=B,i=ee,p=z,m=C,g=ne;return l(),c("main",null,[s(m,null,{default:r(()=>[s(a),s(d),s(i,{title:"Embracing Modern technologies",type:"column"},{default:r(()=>[re]),_:1}),s(i,{title:"Guides and tutorials",type:"column"},{default:r(()=>[n(" Guides and tutorials ")]),_:1}),s(i,{title:"Digital products",type:"column"},{default:r(()=>[n(" Digital products ")]),_:1}),s(i,{title:"Blog",type:"column"},{default:r(()=>[n(" Blog ")]),_:1}),s(i,{title:"Get in touch",type:"column"},{default:r(()=>[le,t("div",ie,[s(p,{size:"xl",icon:"i-heroicons-rocket-launch"},{default:r(()=>[n(" Contact me ")]),_:1})])]),_:1})]),_:1}),s(g)])}const fe=f(ae,[["render",ce]]);export{fe as default};
