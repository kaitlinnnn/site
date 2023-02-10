import{c as C,h as ie,a as G}from"./render.f90e5da0.js";import{e as T,c as f,h as p,i as J,l as D,p as Z,g as L,a as le,r as y,b as I,o as V,d as O,n as ee,f as j,j as B,w,k as H,m as re,_ as te,q as ne,s as ae,t as W,u as A,v as se,x as ue,y as ce,z as de,A as fe,B as F,C as E,D as K}from"./index.0b8fe137.js";import{c as U,g as ve}from"./dom.07bcfd55.js";var he=C({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:n}}=L(),t=J(D,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;Z(le,!0);const o=f(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>p("div",{class:"q-page-container",style:o.value},ie(u.default))}});function me(){const e=y(!I.value);return e.value===!1&&V(()=>{e.value=!0}),e}const oe=typeof ResizeObserver!="undefined",X=oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var M=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let n=null,t,o={width:-1,height:-1};function a(s){s===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:r}=t;(s!==o.width||r!==o.height)&&(o={width:s,height:r},u("resize",o))}}const{proxy:v}=L();if(oe===!0){let s;const r=h=>{t=v.$el.parentNode,t?(s=new ResizeObserver(a),s.observe(t),c()):h!==!0&&j(()=>{r(!0)})};return V(()=>{r()}),O(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),ee}else{let h=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,B.passive),r=void 0)},g=function(){h(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",a,B.passive),c())};const s=me();let r;return V(()=>{j(()=>{t=v.$el,t&&g()})}),O(h),v.trigger=a,()=>{if(s.value===!0)return p("object",{style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:g})}}}}),ge=C({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:n}){const{proxy:{$q:t}}=L(),o=J(D,T);if(o===T)return console.error("QFooter needs to be child of QLayout"),T;const a=y(parseInt(e.heightHint,10)),c=y(!0),v=y(I.value===!0||o.isContainer.value===!0?0:window.innerHeight),s=f(()=>e.reveal===!0||o.view.value.indexOf("F")>-1||t.platform.is.ios&&o.isContainer.value===!0),r=f(()=>o.isContainer.value===!0?o.containerHeight.value:v.value),h=f(()=>{if(e.modelValue!==!0)return 0;if(s.value===!0)return c.value===!0?a.value:0;const i=o.scroll.value.position+r.value+a.value-o.height.value;return i>0?i:0}),g=f(()=>e.modelValue!==!0||s.value===!0&&c.value!==!0),_=f(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),m=f(()=>"q-footer q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(g.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(s.value!==!0?" hidden":""):"")),S=f(()=>{const i=o.rows.value.bottom,d={};return i[0]==="l"&&o.left.space===!0&&(d[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(d[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),d});function b(i,d){o.update("footer",i,d)}function x(i,d){i.value!==d&&(i.value=d)}function q({height:i}){x(a,i),b("size",i)}function $(){if(e.reveal!==!0)return;const{direction:i,position:d,inflectionPoint:z}=o.scroll.value;x(c,i==="up"||d-z<100||o.height.value-r.value-d-a.value<300)}function R(i){_.value===!0&&x(c,!0),n("focusin",i)}w(()=>e.modelValue,i=>{b("space",i),x(c,!0),o.animate()}),w(h,i=>{b("offset",i)}),w(()=>e.reveal,i=>{i===!1&&x(c,e.modelValue)}),w(c,i=>{o.animate(),n("reveal",i)}),w([a,o.scroll,o.height],$),w(()=>t.screen.height,i=>{o.isContainer.value!==!0&&x(v,i)});const l={};return o.instances.footer=l,e.modelValue===!0&&b("size",a.value),b("space",e.modelValue),b("offset",h.value),O(()=>{o.instances.footer===l&&(o.instances.footer=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const i=G(u.default,[p(M,{debounce:0,onResize:q})]);return e.elevated===!0&&i.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),p("footer",{class:m.value,style:S.value,onFocusin:R},i)}}});const pe=[null,document,document.body,document.scrollingElement,document.documentElement];function be(e,u){let n=ve(u);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return pe.includes(n)?window:n}function ye(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function we(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let P;function k(){if(P!==void 0)return P;const e=document.createElement("p"),u=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(u,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),u.appendChild(e),document.body.appendChild(u);const n=e.offsetWidth;u.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=u.clientWidth),u.remove(),P=n-t,P}const{passive:Y}=B,_e=["both","horizontal","vertical"];var xe=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_e.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,a;w(()=>e.scrollTarget,()=>{s(),v()});function c(){t!==null&&t();const g=Math.max(0,ye(o)),_=we(o),m={top:g-n.position.top,left:_-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const S=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:g,left:_},n.directionChanged=n.direction!==S,n.delta=m,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),u("scroll",{...n})}function v(){o=be(a,e.scrollTarget),o.addEventListener("scroll",r,Y),r(!0)}function s(){o!==void 0&&(o.removeEventListener("scroll",r,Y),o=void 0)}function r(g){if(g===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[_,m]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{m(_),t=null}}}const{proxy:h}=L();return w(()=>h.$q.lang.rtl,c),V(()=>{a=h.$el.parentNode,v()}),O(()=>{t!==null&&t(),s()}),Object.assign(h,{trigger:r,getPosition:()=>n}),ee}}),ze=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:n}){const{proxy:{$q:t}}=L(),o=y(null),a=y(t.screen.height),c=y(e.container===!0?0:t.screen.width),v=y({position:0,direction:"down",inflectionPoint:0}),s=y(0),r=y(I.value===!0?0:k()),h=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),_=f(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),m=f(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function S(l){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};v.value=i,e.onScroll!==void 0&&n("scroll",i)}}function b(l){const{height:i,width:d}=l;let z=!1;a.value!==i&&(z=!0,a.value=i,e.onScrollHeight!==void 0&&n("scrollHeight",i),q()),c.value!==d&&(z=!0,c.value=d),z===!0&&e.onResize!==void 0&&n("resize",l)}function x({height:l}){s.value!==l&&(s.value=l,q())}function q(){if(e.container===!0){const l=a.value>s.value?k():0;r.value!==l&&(r.value=l)}}let $=null;const R={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:a,containerHeight:s,scrollbarWidth:r,totalWidth:f(()=>c.value+r.value),rows:f(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:v,animate(){$!==null?clearTimeout($):document.body.classList.add("q-body--layout-animate"),$=setTimeout(()=>{$=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,i,d){R[l][i]=d}};if(Z(D,R),k()>0){let d=function(){l=null,i.classList.remove("hide-scrollbar")},z=function(){if(l===null){if(i.scrollHeight>t.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(d,300)},Q=function(N){l!==null&&N==="remove"&&(clearTimeout(l),d()),window[`${N}EventListener`]("resize",z)},l=null;const i=document.body;w(()=>e.container!==!0?"add":"remove",Q),e.container!==!0&&Q("add"),re(()=>{Q("remove")})}return()=>{const l=G(u.default,[p(xe,{onScroll:S}),p(M,{onResize:b})]),i=p("div",{class:h.value,style:g.value,ref:e.container===!0?void 0:o,tabindex:-1},l);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:o},[p(M,{onResize:x}),p("div",{class:"absolute-full",style:_.value},[p("div",{class:"scroll",style:m.value},[i])])]):i}}}),Se="/assets/start.674197e3.png";const $e={name:"SystemTaskbar",data(){return{time:this.getTime()}},mounted(){setInterval(()=>{this.time=this.getTime()},5e3)},methods:{getTime(){const e=new Date;let u=e.getHours();u<10&&(u=`0${u}`);let n=e.getMinutes();return n<10&&(n=`0${n}`),`${u}:${n}`}}},Te=e=>(ue("data-v-b2bd1078"),e=e(),ce(),e),Ce=Te(()=>W("img",{src:Se,alt:"Start"},null,-1)),Le=[Ce],qe={class:"q-pr-sm q-pt-xs"};function Re(e,u,n,t,o,a){return ne(),ae("div",{class:A(`${e.$options.name} w-full flex text-white font-tahoma`),style:{display:"flex","justify-content":"space-between"}},[W("div",{class:A(`${e.$options.name}__start`)},Le,2),W("div",qe,se(o.time),1)],2)}var He=te($e,[["render",Re],["__scopeId","data-v-b2bd1078"]]);const Ee=de({name:"MainLayout",setup(){return{}},components:{SystemTaskbar:He}});function Pe(e,u,n,t,o,a){const c=K("router-view"),v=K("SystemTaskbar");return ne(),fe(ze,{view:"hHh lpR fFf"},{default:F(()=>[E(he,null,{default:F(()=>[E(c)]),_:1}),E(ge,null,{default:F(()=>[E(v)]),_:1})]),_:1})}var Fe=te(Ee,[["render",Pe]]);export{Fe as default};
