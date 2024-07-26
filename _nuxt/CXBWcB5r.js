import{_ as B,a as I,u as U,b as R,c as H,d as M}from"./DhDo33Ro.js";import{l as L,J as O,K as x,d as P,L as N,I as h,M as V,N as v,c as a,e as n,f as t,n as d,F as y,O as f,t as c,H as p,P as q,g,w as o,Q as E,h as i,E as z,G as Q,k as b}from"./Bt3Ww_Np.js";import F from"./D9dFdeg8.js";import"./DxAsgcKr.js";const G={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},J={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},_=O(x.ui.strategy,x.ui.divider,J),T=P({components:{UIcon:B,UAvatar:I},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>_.default.size,validator(e){return Object.keys(_.border.size.horizontal).includes(e)||Object.keys(_.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:u}=U("divider",N(e,"ui"),_),l=h(()=>V(v(s.value.wrapper.base,s.value.wrapper[e.orientation]),e.class)),m=h(()=>v(s.value.container.base,s.value.container[e.orientation])),r=h(()=>v(s.value.border.base,s.value.border[e.orientation],s.value.border.size[e.orientation][e.size],s.value.border.type[e.type]));return{ui:s,attrs:u,wrapperClass:l,containerClass:m,borderClass:r}}});function W(e,s,u,l,m,r){const w=B,k=I;return a(),n("div",q({class:e.wrapperClass},e.attrs),[t("div",{class:d(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(a(),n(y,{key:0},[t("div",{class:d(e.containerClass)},[f(e.$slots,"default",{},()=>[e.label?(a(),n("span",{key:0,class:d(e.ui.label)},c(e.label),3)):e.icon?(a(),p(w,{key:1,name:e.icon,class:d(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(a(),p(k,q({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):g("",!0)])],2),t("div",{class:d(e.borderClass)},null,2)],64)):g("",!0)],16)}const K=L(T,[["render",W]]),X={class:"py-8 lg:py-16 flex flex-col items-center"},Y={class:"text-4xl font-bold sm:text-5xl"},Z=P({__name:"PageSection",props:{title:{},type:{}},setup(e){return(s,u)=>(a(),n("section",X,[t("h2",Y,c(s.title),1),t("section",{class:d(["py-8",{"max-w-xl":s.type==="column","grid grid-cols-3 gap-4":s.type==="grid"}])},[f(s.$slots,"default")],2)]))}}),ee=O(x.ui.strategy,x.ui.card,G),te=P({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:u}=U("card",N(e,"ui"),ee),l=h(()=>V(v(s.value.base,s.value.rounded,s.value.divide,s.value.ring,s.value.shadow,s.value.background),e.class));return{ui:s,attrs:u,cardClass:l}}});function se(e,s,u,l,m,r){return a(),p(E(e.$attrs.onSubmit?"form":e.as),q({class:e.cardClass},e.attrs),{default:o(()=>[e.$slots.header?(a(),n("div",{key:0,class:d([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[f(e.$slots,"header")],2)):g("",!0),e.$slots.default?(a(),n("div",{key:1,class:d([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[f(e.$slots,"default")],2)):g("",!0),e.$slots.footer?(a(),n("div",{key:2,class:d([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[f(e.$slots,"footer")],2)):g("",!0)]),_:3},16,["class"])}const oe=L(te,[["render",se]]),ae="https://res.cloudinary.com/rafamed-dev/image/upload/v1717713407/avatar_nbru5d.png",ie=[{id:1,title:"Custom Software Development",description:"Tailored solutions to meet your unique business needs.",icon:"i-heroicons-building-storefront"},{id:2,title:"Web Development",description:"Responsive, user-friendly websites and web applications.",icon:"i-heroicons-globe-americas-solid"},{id:3,title:"Mobile App Development",description:"Seamless mobile experiences for iOS and Android.",icon:"i-heroicons-device-phone-mobile"}],ne=[{id:1,title:"Project 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",stack:["Nuxt (Vue)","Prisma","PostgreSQL"]},{id:2,title:"Project 2",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",stack:["Nuxt (Vue)","Prisma","PostgreSQL"]},{id:3,title:"Project 3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",stack:["Nuxt (Vue)","Prisma","PostgreSQL"]}],re={},le={class:"min-h-[60vh] flex items-center md:justify-between w-full flex-col md:flex-row gap-4"},de=t("section",{class:"md:p-14 lg:p-16 h-full flex-1"},[t("h1",{class:"text-5xl font-bold sm:text-7xl"},[b(" Innovative Software "),t("span",{class:"text-primary"},"Solutions")]),t("p",{class:"text-lg mt-4"},"Crafting custom software to elevate your business")],-1),ue={class:"flex justify-center md:justify-end flex-1 md:p-14 lg:p-16 md:pr-4"},ce=["src"],pe=t("p",{class:"text-lg"},[b(" Hi, I’m Rafael, a passionate software developer dedicated to bringing your ideas to life through cutting-edge technology and innovative solutions. "),t("br"),b(" I also write about modern technologies and how you can use them in real-life projects. ")],-1),me={class:"flex gap-2 w-full items-center"},fe={class:"font-bold"},ge={class:"flex gap-2 w-full flex-col"},be={class:"font-bold"},_e={class:"flex justify-between gap-2"},he=t("h2",{class:"text-4xl font-bold sm:text-5xl"},"Recent blog posts",-1),ve={class:"grid grid-cols-1 max-w-lg mx-auto gap-4 py-8"},ye=t("h3",{class:"font-bold"},"Blog post title",-1),xe=t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",-1),we=t("h3",{class:"font-bold"},"Blog post title",-1),ke=t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",-1),$e=t("h3",{class:"font-bold"},"Blog post title",-1),Ce=t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",-1),Se=t("h3",{class:"font-bold"},"Blog post title",-1),je=t("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Quisquam, voluptates.",-1),ze={class:"py-8"},Qe=t("h2",{class:"text-4xl font-bold sm:text-5xl"},"Get in touch",-1),qe={class:"py-8 max-w-lg mx-auto"},Le=t("p",{class:"text-lg"}," I’m always open to new projects and collaborations. Let’s work together to create something amazing. ",-1);function Pe(e,s){const u=K,l=Z,m=F,r=oe,w=M,k=H,D=R;return a(),n("main",null,[i(D,null,{default:o(()=>[t("section",le,[de,t("section",ue,[t("img",{src:"avatar"in e?e.avatar:z(ae),alt:"Avatar",class:"w-56 h-56 md:h-72 md:w-72 lg:w-96 lg:h-96 object-cover"},null,8,ce)])]),i(u),i(l,{title:"About me",type:"column"},{default:o(()=>[pe]),_:1}),i(l,{title:"What do I offer?",type:"grid"},{default:o(()=>[(a(!0),n(y,null,Q("services"in e?e.services:z(ie),({id:$,title:C,description:S,icon:j})=>(a(),p(r,{key:$},{header:o(()=>[t("div",me,[i(m,{name:j,class:"text-primary text-4xl"},null,8,["name"]),t("h3",fe,c(C),1)])]),default:o(()=>[t("p",null,c(S),1)]),_:2},1024))),128))]),_:1}),i(l,{title:"Here's some of my work",type:"grid"},{default:o(()=>[(a(!0),n(y,null,Q("projects"in e?e.projects:z(ne),({id:$,title:C,description:S,stack:j})=>(a(),p(r,{key:$},{footer:o(()=>[t("div",ge,[t("h3",be,c(C),1),t("div",_e,[(a(!0),n(y,null,Q(j,A=>(a(),p(w,{key:A,color:"primary",variant:"outline"},{default:o(()=>[b(c(A),1)]),_:2},1024))),128))])])]),default:o(()=>[t("p",null,c(S),1)]),_:2},1024))),128))]),_:1}),t("section",null,[he,t("section",ve,[i(r,null,{header:o(()=>[ye]),default:o(()=>[xe]),_:1}),i(r,null,{header:o(()=>[we]),default:o(()=>[ke]),_:1}),i(r,null,{header:o(()=>[$e]),default:o(()=>[Ce]),_:1}),i(r,null,{header:o(()=>[Se]),default:o(()=>[je]),_:1})])]),t("section",ze,[Qe,t("section",qe,[Le,i(k,{color:"primary",variant:"outline",class:"mt-4"},{default:o(()=>[b(" Contact me ")]),_:1})])])]),_:1})])}const Oe=L(re,[["render",Pe]]);export{Oe as default};
