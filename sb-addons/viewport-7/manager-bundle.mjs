try{
var ae=Object.create;var H=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var he=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var R=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,s)=>(typeof require<"u"?require:t)[s]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var M=(e,t)=>()=>(e&&(t=e(e=0)),t);var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var me=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of pe(t))!ue.call(e,p)&&p!==s&&H(e,p,{get:()=>t[p],enumerable:!(o=le(t,p))||o.enumerable});return e};var ce=(e,t,s)=>(s=e!=null?ae(he(e)):{},me(t||!e||!e.__esModule?H(s,"default",{value:e,enumerable:!0}):s,e));var c=M(()=>{});var f=M(()=>{});var g=M(()=>{});var te=de((ee,V)=>{c();f();g();(function(e){if(typeof ee=="object"&&typeof V<"u")V.exports=e();else if(typeof define=="function"&&define.amd)define([],e);else{var t;typeof window<"u"||typeof window<"u"?t=window:typeof self<"u"?t=self:t=this,t.memoizerific=e()}})(function(){var e,t,s;return function o(p,m,h){function r(n,y){if(!m[n]){if(!p[n]){var u=typeof R=="function"&&R;if(!y&&u)return u(n,!0);if(i)return i(n,!0);var b=new Error("Cannot find module '"+n+"'");throw b.code="MODULE_NOT_FOUND",b}var l=m[n]={exports:{}};p[n][0].call(l.exports,function(a){var d=p[n][1][a];return r(d||a)},l,l.exports,o,p,m,h)}return m[n].exports}for(var i=typeof R=="function"&&R,x=0;x<h.length;x++)r(h[x]);return r}({1:[function(o,p,m){p.exports=function(h){if(typeof Map!="function"||h){var r=o("./similar");return new r}else return new Map}},{"./similar":2}],2:[function(o,p,m){function h(){return this.list=[],this.lastItem=void 0,this.size=0,this}h.prototype.get=function(r){var i;if(this.lastItem&&this.isEqual(this.lastItem.key,r))return this.lastItem.val;if(i=this.indexOf(r),i>=0)return this.lastItem=this.list[i],this.list[i].val},h.prototype.set=function(r,i){var x;return this.lastItem&&this.isEqual(this.lastItem.key,r)?(this.lastItem.val=i,this):(x=this.indexOf(r),x>=0?(this.lastItem=this.list[x],this.list[x].val=i,this):(this.lastItem={key:r,val:i},this.list.push(this.lastItem),this.size++,this))},h.prototype.delete=function(r){var i;if(this.lastItem&&this.isEqual(this.lastItem.key,r)&&(this.lastItem=void 0),i=this.indexOf(r),i>=0)return this.size--,this.list.splice(i,1)[0]},h.prototype.has=function(r){var i;return this.lastItem&&this.isEqual(this.lastItem.key,r)?!0:(i=this.indexOf(r),i>=0?(this.lastItem=this.list[i],!0):!1)},h.prototype.forEach=function(r,i){var x;for(x=0;x<this.size;x++)r.call(i||this,this.list[x].val,this.list[x].key,this)},h.prototype.indexOf=function(r){var i;for(i=0;i<this.size;i++)if(this.isEqual(this.list[i].key,r))return i;return-1},h.prototype.isEqual=function(r,i){return r===i||r!==r&&i!==i},p.exports=h},{}],3:[function(o,p,m){var h=o("map-or-similar");p.exports=function(n){var y=new h(!1),u=[];return function(b){var l=function(){var a=y,d,C,I=arguments.length-1,k=Array(I+1),_=!0,T;if((l.numArgs||l.numArgs===0)&&l.numArgs!==I+1)throw new Error("Memoizerific functions should always be called with the same number of arguments");for(T=0;T<I;T++){if(k[T]={cacheItem:a,arg:arguments[T]},a.has(arguments[T])){a=a.get(arguments[T]);continue}_=!1,d=new h(!1),a.set(arguments[T],d),a=d}return _&&(a.has(arguments[I])?C=a.get(arguments[I]):_=!1),_||(C=b.apply(null,arguments),a.set(arguments[I],C)),n>0&&(k[I]={cacheItem:a,arg:arguments[I]},_?r(u,k):u.push(k),u.length>n&&i(u.shift())),l.wasMemoized=_,l.numArgs=I+1,C};return l.limit=n,l.wasMemoized=!1,l.cache=y,l.lru=u,l}};function r(n,y){var u=n.length,b=y.length,l,a,d;for(a=0;a<u;a++){for(l=!0,d=0;d<b;d++)if(!x(n[a][d].arg,y[d].arg)){l=!1;break}if(l)break}n.push(n.splice(a,1)[0])}function i(n){var y=n.length,u=n[y-1],b,l;for(u.cacheItem.delete(u.arg),l=y-2;l>=0&&(u=n[l],b=u.cacheItem.get(u.arg),!b||!b.size);l--)u.cacheItem.delete(u.arg)}function x(n,y){return n===y||n!==n&&y!==y}},{"map-or-similar":1}]},{},[3])(3)})});c();f();g();c();f();g();c();f();g();var w="storybook/viewport",q="viewport",Ne=`${w}/update`,Ve=`${w}/configure`,Be=`${w}/setStoryDefaultViewport`,ze=`${w}/viewportChanged`,W=(e,t)=>e.indexOf(t),fe=(e,t)=>{let s=W(e,t);return s===e.length-1?e[0]:e[s+1]},ge=(e,t)=>{let s=W(e,t);return s<1?e[e.length-1]:e[s-1]},F=async(e,t,s)=>{await e.setAddonShortcut(w,{label:"Previous viewport",defaultShortcut:["shift","V"],actionName:"previous",action:()=>{let{selected:o,isRotated:p}=e.getAddonState(w);t({selected:ge(s,o),isRotated:p})}}),await e.setAddonShortcut(w,{label:"Next viewport",defaultShortcut:["V"],actionName:"next",action:()=>{let{selected:o,isRotated:p}=e.getAddonState(w);t({selected:fe(s,o),isRotated:p})}}),await e.setAddonShortcut(w,{label:"Reset viewport",defaultShortcut:["alt","V"],actionName:"reset",action:()=>{let{isRotated:o}=e.getAddonState(w);t({selected:"reset",isRotated:o})}})};c();f();g();var G={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};c();f();g();var S=__REACT__,{Children:$e,Component:je,Fragment:Y,Profiler:Xe,PureComponent:Ke,StrictMode:Ze,Suspense:Je,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Qe,cloneElement:et,createContext:tt,createElement:U,createFactory:it,createRef:rt,forwardRef:ot,isValidElement:nt,lazy:st,memo:$,useCallback:at,useContext:lt,useDebugValue:pt,useEffect:L,useImperativeHandle:ht,useLayoutEffect:ut,useMemo:dt,useReducer:mt,useRef:j,useState:X,version:ct}=__REACT__;c();f();g();var yt=__STORYBOOKAPI__,{ActiveTabs:bt,Consumer:wt,ManagerContext:St,Provider:It,addons:N,combineParameters:Tt,controlOrMetaKey:vt,controlOrMetaSymbol:Ot,eventMatchesShortcut:Et,eventToShortcut:_t,isMacLike:Pt,isShortcutTaken:Rt,keyToSymbol:At,merge:Ct,mockChannel:kt,optionOrAltSymbol:Lt,shortcutMatchesShortcut:Mt,shortcutToHumanString:Nt,types:K,useAddonState:Z,useArgTypes:Vt,useArgs:Bt,useChannel:zt,useGlobalTypes:Dt,useGlobals:Ht,useParameter:J,useSharedState:qt,useStoryPrepared:Wt,useStorybookApi:Q,useStorybookState:Ft}=__STORYBOOKAPI__;var D=ce(te(),1);c();f();g();var Jt=__STORYBOOKTHEMING__,{CacheProvider:Qt,ClassNames:ei,Global:ie,ThemeProvider:ti,background:ii,color:ri,convert:oi,create:ni,createCache:si,createGlobal:ai,createReset:li,css:pi,darken:hi,ensure:ui,ignoreSsrWarning:di,isPropValid:mi,jsx:ci,keyframes:fi,lighten:gi,styled:A,themes:xi,typography:yi,useTheme:bi,withTheme:re}=__STORYBOOKTHEMING__;c();f();g();var vi=__STORYBOOKCOMPONENTS__,{A:Oi,ActionBar:Ei,AddonPanel:_i,Badge:Pi,Bar:Ri,Blockquote:Ai,Button:Ci,Code:ki,DL:Li,Div:Mi,DocumentWrapper:Ni,ErrorFormatter:Vi,FlexBar:Bi,Form:zi,H1:Di,H2:Hi,H3:qi,H4:Wi,H5:Fi,H6:Gi,HR:Yi,IconButton:B,IconButtonSkeleton:Ui,Icons:z,Img:$i,LI:ji,Link:Xi,ListItem:Ki,Loader:Zi,OL:Ji,P:Qi,Placeholder:er,Pre:tr,ResetWrapper:ir,ScrollArea:rr,Separator:or,Spaced:nr,Span:sr,StorybookIcon:ar,StorybookLogo:lr,Symbols:pr,SyntaxHighlighter:hr,TT:ur,TabBar:dr,TabButton:mr,TabWrapper:cr,Table:fr,Tabs:gr,TabsState:xr,TooltipLinkList:oe,TooltipMessage:yr,TooltipNote:br,UL:wr,WithTooltip:ne,WithTooltipPure:Sr,Zoom:Ir,codeCommon:Tr,components:vr,createCopyToClipboardFunction:Or,getStoryHref:Er,icons:_r,interleaveSeparators:Pr,nameSpaceClassNames:Rr,resetComponents:Ar,withReset:Cr}=__STORYBOOKCOMPONENTS__;var ye=(0,D.default)(50)(e=>[...be,...Object.entries(e).map(([t,{name:s,...o}])=>({...o,id:t,title:s}))]),P={id:"reset",title:"Reset viewport",styles:null,type:"other"},be=[P],we=(0,D.default)(50)((e,t,s,o,p)=>e.map(m=>{switch(m.id){case P.id:if(t.id===m.id)return null;default:return{...m,onClick:()=>{s({...o,selected:m.id}),p()}}}}).filter(Boolean)),Se="storybook-preview-wrapper",Ie=({width:e,height:t,...s})=>({...s,height:e,width:t}),Te=A.div(()=>({display:"inline-flex"})),se=A.div(({theme:e})=>({display:"inline-block",textDecoration:"none",padding:10,fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:"1",height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent"})),ve=A(B)(()=>({display:"inline-flex",alignItems:"center"})),Oe=A.div(({theme:e})=>({fontSize:e.typography.size.s2-1,marginLeft:10})),Ee=(e,t,s)=>{if(t===null)return null;let o=typeof t=="function"?t(e):t;return s?Ie(o):o},_e=$(re(({theme:e})=>{let{viewports:t=G,defaultOrientation:s="portrait",defaultViewport:o=P.id,disable:p}=J(q,{}),[m,h]=Z(w,{selected:o,isRotated:s==="landscape"}),r=ye(t),i=Q(),[x,n]=X(!1);r.find(d=>d.id===o)||console.warn(`Cannot find "defaultViewport" of "${o}" in addon-viewport configs, please check the "viewports" setting in the configuration.`),L(()=>{F(i,h,Object.keys(t))},[t]),L(()=>{h({selected:o||(t[m.selected]?m.selected:P.id),isRotated:m.isRotated})},[o]);let{selected:y,isRotated:u}=m,b=r.find(d=>d.id===y)||r.find(d=>d.id===o)||r.find(d=>d.default)||P,l=j(),a=Ee(l.current,b.styles,u);return L(()=>{l.current=a},[b]),p||Object.entries(t).length===0?null:S.createElement(Y,null,S.createElement(ne,{placement:"top",tooltip:({onHide:d})=>S.createElement(oe,{links:we(r,b,h,m,d)}),closeOnOutsideClick:!0,onVisibleChange:n},S.createElement(ve,{key:"viewport",title:"Change the size of the preview",active:x||!!a,onDoubleClick:()=>{h({...m,selected:P.id})}},S.createElement(z,{icon:"grow"}),a?S.createElement(Oe,null,u?`${b.title} (L)`:`${b.title} (P)`):null)),a?S.createElement(Te,null,S.createElement(ie,{styles:{['iframe[data-is-storybook="true"]']:{margin:"auto",transition:"width .3s, height .3s",position:"relative",border:"1px solid black",boxShadow:"0 0 100px 100vw rgba(0,0,0,0.5)",...a},[`#${Se}`]:{padding:e.layoutMargin,alignContent:"center",alignItems:"center",justifyContent:"center",justifyItems:"center",overflow:"auto",display:"grid",gridTemplateColumns:"100%",gridTemplateRows:"100%"}}}),S.createElement(se,{title:"Viewport width"},a.width.replace("px","")),S.createElement(B,{key:"viewport-rotate",title:"Rotate viewport",onClick:()=>{h({...m,isRotated:!u})}},S.createElement(z,{icon:"transfer"})),S.createElement(se,{title:"Viewport height"},a.height.replace("px",""))):null)}));N.register(w,()=>{N.add(w,{title:"viewport / media-queries",id:"viewport",type:K.TOOL,match:({viewMode:e})=>e==="story",render:()=>U(_e,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
