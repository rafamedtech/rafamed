import{l as k,K as _,L as h,d as y,M as w,N as i,O as C,P as $,c as d,H as v,w as m,e as l,n as u,J as c,g as p,Q as P,R as j,h as N,f as o,t as g,v as S}from"./C7k0mO_c.js";import{u as B}from"./m-6KhuqW.js";import{_ as O}from"./BimPukpA.js";import{q as R}from"./CJS32Tcv.js";const V={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},q=_(h.ui.strategy,h.ui.card,V),z=y({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:t}=B("card",w(e,"ui"),q),a=i(()=>C($(s.value.base,s.value.rounded,s.value.divide,s.value.ring,s.value.shadow,s.value.background),e.class));return{ui:s,attrs:t,cardClass:a}}});function A(e,s,t,a,n,r){return d(),v(j(e.$attrs.onSubmit?"form":e.as),P({class:e.cardClass},e.attrs),{default:m(()=>[e.$slots.header?(d(),l("div",{key:0,class:u([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[c(e.$slots,"header")],2)):p("",!0),e.$slots.default?(d(),l("div",{key:1,class:u([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[c(e.$slots,"default")],2)):p("",!0),e.$slots.footer?(d(),l("div",{key:2,class:u([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[c(e.$slots,"footer")],2)):p("",!0)]),_:3},16,["class"])}const D=k(z,[["render",A]]),J={class:"flex h-full flex-col items-center md:flex-row md:justify-between md:gap-8"},L={class:"flex h-60 w-full items-center md:h-40 md:w-1/3 lg:h-60 lg:w-2/5"},M=["src","alt"],U={class:"md:w-2/3 lg:w-3/5"},x={class:"mb-3 text-2xl font-semibold dark:text-gray-200 group-hover:text-primary"},E={class:"mb-3 text-base leading-relaxed dark:text-gray-200"},H={class:"mb-3 block capitalize text-yellow-500 dark:text-yellow-400"},G=y({__name:"PostCard",props:{post:{}},setup(e){return(s,t)=>{const a=D,n=O;return d(),v(n,{to:{path:s.post._path},class:"group block w-full border hover:scale-[.97] transition border-transparent no-underline"},{default:m(()=>[N(a,{class:"group-hover:border-primary group-hover:shadow group-hover:shadow-primary"},{default:m(()=>[o("div",J,[o("figure",L,[o("img",{class:"h-full w-full rounded-[2rem] object-cover object-center p-4",src:s.post.img,alt:s.post.title},null,8,M)]),o("div",U,[o("h3",x,g(s.post.title),1),o("p",E,g(s.post.description),1),o("span",H,"#"+g(s.post.category),1)])])]),_:1})]),_:1},8,["to"])}}}),T=async()=>{const{slug:e}=S().params,s=await R("blog").sort({id:-1}).find(),t=i(()=>s.slice(0,3)),a=i(()=>s.find(r=>r.slug===e[0])),n=i(()=>s.filter(r=>{var f,b;return r.category===((f=a.value)==null?void 0:f.category)&&r.slug!==((b=a.value)==null?void 0:b.slug)}));return{posts:s,currentPost:a,similarPosts:n,latestPosts:t}};export{G as _,D as a,T as u};