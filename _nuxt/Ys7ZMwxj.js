import{aw as w,y as h,L as c,ax as i,I as f,l as k,J as g,d as v,K as C,M as _,N as A,c as I,H as $,w as z,O,P as N,Q as S}from"./Ddi04aUC.js";function j(r,e){const a={...r};for(const t of e)delete a[t];return a}function M(r,e,a){typeof e=="string"&&(e=e.split(".").map(o=>{const n=Number(o);return isNaN(n)?o:n}));let t=r;for(const o of e){if(t==null)return a;t=t[o]}return t!==void 0?t:a}const B=(r,e,a,t,o=!1)=>{const n=w(),l=h(),y=c(()=>{var d;const s=i(e),x=i(a),p=i(t);return f((s==null?void 0:s.strategy)||((d=l.ui)==null?void 0:d.strategy),p?{wrapper:p}:{},s||{},o?M(l.ui,r,{}):{},x||{})}),m=c(()=>j(n,["class"]));return{ui:y,attrs:m}},b={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},u={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"},arrow:{...b,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}};({...u,option:{...u.option},arrow:{...b}});const F={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"},J=f(g.ui.strategy,g.ui.container,F),K=v({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(r){const{ui:e,attrs:a}=B("container",C(r,"ui"),J),t=c(()=>_(A(e.value.base,e.value.padding,e.value.constrained),r.class));return{ui:e,attrs:a,containerClass:t}}});function P(r,e,a,t,o,n){return I(),$(S(r.as),N({class:r.containerClass},r.attrs),{default:z(()=>[O(r.$slots,"default")]),_:3},16,["class"])}const q=k(K,[["render",P]]);export{q as _,b as a,B as u};
