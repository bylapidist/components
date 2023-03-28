import{j as ma,c as va,a as yt}from"./index-1dbe3cd0.js";import{p}from"./index-4d501b15.js";import{R as Ya}from"./index-f1f749bf.js";import{B as kt}from"./index-ae7b567c.js";import{T as xt}from"./index-fb736324.js";function da(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?da(Object(t),!0).forEach(function(n){O(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):da(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Oe(e){return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Oe(e)}function wt(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function pa(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function At(e,a,t){return a&&pa(e.prototype,a),t&&pa(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Ze(e,a){return St(e)||Et(e,a)||Ua(e,a)||_t()}function le(e){return Ot(e)||Pt(e)||Ua(e)||It()}function Ot(e){if(Array.isArray(e))return De(e)}function St(e){if(Array.isArray(e))return e}function Pt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Et(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],r=!0,i=!1,o,s;try{for(t=t.call(e);!(r=(o=t.next()).done)&&(n.push(o.value),!(a&&n.length===a));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(i)throw s}}return n}}function Ua(e,a){if(e){if(typeof e=="string")return De(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return De(e,a)}}function De(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function It(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ba=function(){},ea={},Wa={},Ba=null,Ha={mark:ba,measure:ba};try{typeof window<"u"&&(ea=window),typeof document<"u"&&(Wa=document),typeof MutationObserver<"u"&&(Ba=MutationObserver),typeof performance<"u"&&(Ha=performance)}catch{}var Ct=ea.navigator||{},ga=Ct.userAgent,ha=ga===void 0?"":ga,D=ea,h=Wa,ya=Ba,me=Ha;D.document;var R=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ga=~ha.indexOf("MSIE")||~ha.indexOf("Trident/"),ve,de,pe,be,ge,T="___FONT_AWESOME___",$e=16,Xa="fa",Va="svg-inline--fa",G="data-fa-i2svg",Ye="data-fa-pseudo-element",Nt="data-fa-pseudo-element-pending",aa="data-prefix",ta="data-icon",ka="fontawesome-i2svg",Tt="async",Mt=["HTML","HEAD","STYLE","SCRIPT"],qa=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",na=[g,y];function fe(e){return new Proxy(e,{get:function(t,n){return n in t?t[n]:t[g]}})}var ne=fe((ve={},O(ve,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(ve,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ve)),re=fe((de={},O(de,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(de,y,{solid:"fass",regular:"fasr",light:"fasl"}),de)),ie=fe((pe={},O(pe,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(pe,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pe)),Lt=fe((be={},O(be,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(be,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),be)),Rt=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ka="fa-layers-text",Ft=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jt=fe((ge={},O(ge,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(ge,y,{900:"fass",400:"fasr",300:"fasl"}),ge)),Qa=[1,2,3,4,5,6,7,8,9,10],zt=Qa.concat([11,12,13,14,15,16,17,18,19,20]),Dt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oe=new Set;Object.keys(re[g]).map(oe.add.bind(oe));Object.keys(re[y]).map(oe.add.bind(oe));var $t=[].concat(na,le(oe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Qa.map(function(e){return"".concat(e,"x")})).concat(zt.map(function(e){return"w-".concat(e)})),ae=D.FontAwesomeConfig||{};function Yt(e){var a=h.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function Ut(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(h&&typeof h.querySelector=="function"){var Wt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wt.forEach(function(e){var a=Ze(e,2),t=a[0],n=a[1],r=Ut(Yt(t));r!=null&&(ae[n]=r)})}var Ja={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xa,replacementClass:Va,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ae.familyPrefix&&(ae.cssPrefix=ae.familyPrefix);var J=c(c({},Ja),ae);J.autoReplaceSvg||(J.observeMutations=!1);var v={};Object.keys(Ja).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(t){J[e]=t,te.forEach(function(n){return n(v)})},get:function(){return J[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(a){J.cssPrefix=a,te.forEach(function(t){return t(v)})},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=v;var te=[];function Bt(e){return te.push(e),function(){te.splice(te.indexOf(e),1)}}var j=$e,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ht(e){if(!(!e||!R)){var a=h.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=h.head.childNodes,n=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return h.head.insertBefore(a,n),e}}var Gt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function se(){for(var e=12,a="";e-- >0;)a+=Gt[Math.random()*62|0];return a}function Z(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function ra(e){return e.classList?Z(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Za(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xt(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(Za(e[t]),'" ')},"").trim()}function _e(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function ia(e){return e.size!==N.size||e.x!==N.x||e.y!==N.y||e.rotate!==N.rotate||e.flipX||e.flipY}function Vt(e){var a=e.transform,t=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function qt(e){var a=e.transform,t=e.width,n=t===void 0?$e:t,r=e.height,i=r===void 0?$e:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ga?l+="translate(".concat(a.x/j-n/2,"em, ").concat(a.y/j-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(a.x/j,"em), calc(-50% + ").concat(a.y/j,"em)) "):l+="translate(".concat(a.x/j,"em, ").concat(a.y/j,"em) "),l+="scale(".concat(a.size/j*(a.flipX?-1:1),", ").concat(a.size/j*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Kt=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function et(){var e=Xa,a=Va,t=v.cssPrefix,n=v.replacementClass,r=Kt;if(t!==e||n!==a){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(n))}return r}var xa=!1;function Le(){v.autoAddCss&&!xa&&(Ht(et()),xa=!0)}var Qt={mixout:function(){return{dom:{css:et,insertCss:Le}}},hooks:function(){return{beforeDOMElementCreation:function(){Le()},beforeI2svg:function(){Le()}}}},M=D||{};M[T]||(M[T]={});M[T].styles||(M[T].styles={});M[T].hooks||(M[T].hooks={});M[T].shims||(M[T].shims=[]);var C=M[T],at=[],Jt=function e(){h.removeEventListener("DOMContentLoaded",e),Se=1,at.map(function(a){return a()})},Se=!1;R&&(Se=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),Se||h.addEventListener("DOMContentLoaded",Jt));function Zt(e){R&&(Se?setTimeout(e,0):at.push(e))}function ue(e){var a=e.tag,t=e.attributes,n=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Za(e):"<".concat(a," ").concat(Xt(n),">").concat(i.map(ue).join(""),"</").concat(a,">")}function wa(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var en=function(a,t){return function(n,r,i,o){return a.call(t,n,r,i,o)}},Re=function(a,t,n,r){var i=Object.keys(a),o=i.length,s=r!==void 0?en(t,r):t,l,u,f;for(n===void 0?(l=1,f=a[i[0]]):(l=0,f=n);l<o;l++)u=i[l],f=s(f,a[u],u,a);return f};function an(e){for(var a=[],t=0,n=e.length;t<n;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var i=e.charCodeAt(t++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),t--)}else a.push(r)}return a}function Ue(e){var a=an(e);return a.length===1?a[0].toString(16):null}function tn(e,a){var t=e.length,n=e.charCodeAt(a),r;return n>=55296&&n<=56319&&t>a+1&&(r=e.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Aa(e){return Object.keys(e).reduce(function(a,t){var n=e[t],r=!!n.icon;return r?a[n.iconName]=n.icon:a[t]=n,a},{})}function We(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,i=Aa(a);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(e,Aa(a)):C.styles[e]=c(c({},C.styles[e]||{}),i),e==="fas"&&We("fa",a)}var he,ye,ke,V=C.styles,nn=C.shims,rn=(he={},O(he,g,Object.values(ie[g])),O(he,y,Object.values(ie[y])),he),oa=null,tt={},nt={},rt={},it={},ot={},on=(ye={},O(ye,g,Object.keys(ne[g])),O(ye,y,Object.keys(ne[y])),ye);function sn(e){return~$t.indexOf(e)}function ln(e,a){var t=a.split("-"),n=t[0],r=t.slice(1).join("-");return n===e&&r!==""&&!sn(r)?r:null}var st=function(){var a=function(i){return Re(V,function(o,s,l){return o[l]=Re(s,i,{}),o},{})};tt=a(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),nt=a(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ot=a(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in V||v.autoFetchSvg,n=Re(nn,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});rt=n.names,it=n.unicodes,oa=Ce(v.styleDefault,{family:v.familyDefault})};Bt(function(e){oa=Ce(e.styleDefault,{family:v.familyDefault})});st();function sa(e,a){return(tt[e]||{})[a]}function fn(e,a){return(nt[e]||{})[a]}function H(e,a){return(ot[e]||{})[a]}function lt(e){return rt[e]||{prefix:null,iconName:null}}function un(e){var a=it[e],t=sa("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function $(){return oa}var la=function(){return{prefix:null,iconName:null,rest:[]}};function Ce(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,n=t===void 0?g:t,r=ne[n][e],i=re[n][e]||re[n][r],o=e in C.styles?e:null;return i||o||null}var Oa=(ke={},O(ke,g,Object.keys(ie[g])),O(ke,y,Object.keys(ie[y])),ke);function Ne(e){var a,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=(a={},O(a,g,"".concat(v.cssPrefix,"-").concat(g)),O(a,y,"".concat(v.cssPrefix,"-").concat(y)),a),o=null,s=g;(e.includes(i[g])||e.some(function(u){return Oa[g].includes(u)}))&&(s=g),(e.includes(i[y])||e.some(function(u){return Oa[y].includes(u)}))&&(s=y);var l=e.reduce(function(u,f){var m=ln(v.cssPrefix,f);if(V[f]?(f=rn[s].includes(f)?Lt[s][f]:f,o=f,u.prefix=f):on[s].indexOf(f)>-1?(o=f,u.prefix=Ce(f,{family:s})):m?u.iconName=m:f!==v.replacementClass&&f!==i[g]&&f!==i[y]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var d=o==="fa"?lt(u.iconName):{},b=H(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||b||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!V.far&&V.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},la());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===y&&(V.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=H(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=$()||"fas"),l}var cn=function(){function e(){wt(this,e),this.definitions={}}return At(e,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=c(c({},t.definitions[s]||{}),o[s]),We(s,o[s]);var l=ie[g][s];l&&We(l,o[s]),st()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];t[s]||(t[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(t[s][m]=u)}),t[s][l]=u}),t}}]),e}(),Sa=[],q={},Q={},mn=Object.keys(Q);function vn(e,a){var t=a.mixoutsTo;return Sa=e,q={},Object.keys(Q).forEach(function(n){mn.indexOf(n)===-1&&delete Q[n]}),Sa.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),Oe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}n.provides&&n.provides(Q)}),t}function Be(e,a){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var i=q[e]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(n))}),a}function X(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];var r=q[e]||[];r.forEach(function(i){i.apply(null,t)})}function L(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[e]?Q[e].apply(null,a):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||$();if(a)return a=H(t,a)||a,wa(ft.definitions,t,a)||wa(C.styles,t,a)}var ft=new cn,dn=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,X("noAuto")},pn={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(X("beforeI2svg",a),L("pseudoElements2svg",a),L("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Zt(function(){gn({autoReplaceSvgRoot:t}),X("watch",a)})}},bn={icon:function(a){if(a===null)return null;if(Oe(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:H(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=Ce(a[0]);return{prefix:n,iconName:H(n,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(v.cssPrefix,"-"))>-1||a.match(Rt))){var r=Ne(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:H(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=$();return{prefix:i,iconName:H(i,a)||a}}}},_={noAuto:dn,config:v,dom:pn,parse:bn,library:ft,findIconDefinition:He,toHtml:ue},gn=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,n=t===void 0?h:t;(Object.keys(C.styles).length>0||v.autoFetchSvg)&&R&&v.autoReplaceSvg&&_.dom.i2svg({node:n})};function Te(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ue(n)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var n=h.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function hn(e){var a=e.children,t=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ia(o)&&t.found&&!n.found){var s=t.width,l=t.height,u={x:s/l/2,y:.5};r.style=_e(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function yn(e){var a=e.prefix,t=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(a,"-").concat(v.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:n}]}]}function fa(e){var a=e.icons,t=a.main,n=a.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,m=e.extra,d=e.watchable,b=d===void 0?!1:d,w=n.found?n:t,P=w.width,k=w.height,E=r==="fak",x=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),A={children:[],attributes:c(c({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(k)})},I=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/k*16*.0625,"em")}:{};b&&(A.attributes[G]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||se())},children:[l]}),delete A.attributes.title);var S=c(c({},A),{},{prefix:r,iconName:i,main:t,mask:n,maskId:u,transform:o,symbol:s,styles:c(c({},I),m.styles)}),U=n.found&&t.found?L("generateAbstractMask",S)||{children:[],attributes:{}}:L("generateAbstractIcon",S)||{children:[],attributes:{}},W=U.children,Me=U.attributes;return S.children=W,S.attributes=Me,s?yn(S):hn(S)}function Pa(e){var a=e.content,t=e.width,n=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[G]="");var f=c({},o.styles);ia(r)&&(f.transform=qt({transform:r,startCentered:!0,width:t,height:n}),f["-webkit-transform"]=f.transform);var m=_e(f);m.length>0&&(u.style=m);var d=[];return d.push({tag:"span",attributes:u,children:[a]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function kn(e){var a=e.content,t=e.title,n=e.extra,r=c(c(c({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),i=_e(n.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var Fe=C.styles;function Ge(e){var a=e[0],t=e[1],n=e.slice(4),r=Ze(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:t,icon:o}}var xn={found:!1,width:512,height:512};function wn(e,a){!qa&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function Xe(e,a){var t=a;return a==="fa"&&v.styleDefault!==null&&(a=$()),new Promise(function(n,r){if(L("missingIconAbstract"),t==="fa"){var i=lt(e)||{};e=i.iconName||e,a=i.prefix||a}if(e&&a&&Fe[a]&&Fe[a][e]){var o=Fe[a][e];return n(Ge(o))}wn(e,a),n(c(c({},xn),{},{icon:v.showMissingIcons&&e?L("missingIconAbstract")||{}:{}}))})}var Ea=function(){},Ve=v.measurePerformance&&me&&me.mark&&me.measure?me:{mark:Ea,measure:Ea},ee='FA "6.4.0"',An=function(a){return Ve.mark("".concat(ee," ").concat(a," begins")),function(){return ut(a)}},ut=function(a){Ve.mark("".concat(ee," ").concat(a," ends")),Ve.measure("".concat(ee," ").concat(a),"".concat(ee," ").concat(a," begins"),"".concat(ee," ").concat(a," ends"))},ua={begin:An,end:ut},we=function(){};function Ia(e){var a=e.getAttribute?e.getAttribute(G):null;return typeof a=="string"}function On(e){var a=e.getAttribute?e.getAttribute(aa):null,t=e.getAttribute?e.getAttribute(ta):null;return a&&t}function Sn(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Pn(){if(v.autoReplaceSvg===!0)return Ae.replace;var e=Ae[v.autoReplaceSvg];return e||Ae.replace}function En(e){return h.createElementNS("http://www.w3.org/2000/svg",e)}function In(e){return h.createElement(e)}function ct(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,n=t===void 0?e.tag==="svg"?En:In:t;if(typeof e=="string")return h.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(ct(o,{ceFn:n}))}),r}function _n(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Ae={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(r){t.parentNode.insertBefore(ct(r),t)}),t.getAttribute(G)===null&&v.keepOriginalSource){var n=h.createComment(_n(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(a){var t=a[0],n=a[1];if(~ra(t).indexOf(v.replacementClass))return Ae.replace(a);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return ue(s)}).join(`
`);t.setAttribute(G,""),t.innerHTML=o}};function _a(e){e()}function mt(e,a){var t=typeof a=="function"?a:we;if(e.length===0)t();else{var n=_a;v.mutateApproach===Tt&&(n=D.requestAnimationFrame||_a),n(function(){var r=Pn(),i=ua.begin("mutate");e.map(r),i(),t()})}}var ca=!1;function vt(){ca=!0}function qe(){ca=!1}var Pe=null;function Ca(e){if(ya&&v.observeMutations){var a=e.treeCallback,t=a===void 0?we:a,n=e.nodeCallback,r=n===void 0?we:n,i=e.pseudoElementsCallback,o=i===void 0?we:i,s=e.observeMutationsRoot,l=s===void 0?h:s;Pe=new ya(function(u){if(!ca){var f=$();Z(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ia(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ia(m.target)&&~Dt.indexOf(m.attributeName))if(m.attributeName==="class"&&On(m.target)){var d=Ne(ra(m.target)),b=d.prefix,w=d.iconName;m.target.setAttribute(aa,b||f),w&&m.target.setAttribute(ta,w)}else Sn(m.target)&&r(m.target)})}}),R&&Pe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Cn(){Pe&&Pe.disconnect()}function Nn(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),t}function Tn(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=Ne(ra(e));return r.prefix||(r.prefix=$()),a&&t&&(r.prefix=a,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=fn(r.prefix,e.innerText)||sa(r.prefix,Ue(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Mn(e){var a=Z(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),t=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return v.autoA11y&&(t?a["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(n||se()):(a["aria-hidden"]="true",a.focusable="false")),a}function Ln(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Na(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Tn(e),n=t.iconName,r=t.prefix,i=t.rest,o=Mn(e),s=Be("parseNodeAttributes",{},e),l=a.styleParser?Nn(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Rn=C.styles;function dt(e){var a=v.autoReplaceSvg==="nest"?Na(e,{styleParser:!1}):Na(e);return~a.extra.classes.indexOf(Ka)?L("generateLayersText",e,a):L("generateSvgReplacementMutation",e,a)}var Y=new Set;na.map(function(e){Y.add("fa-".concat(e))});Object.keys(ne[g]).map(Y.add.bind(Y));Object.keys(ne[y]).map(Y.add.bind(Y));Y=le(Y);function Ta(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var t=h.documentElement.classList,n=function(m){return t.add("".concat(ka,"-").concat(m))},r=function(m){return t.remove("".concat(ka,"-").concat(m))},i=v.autoFetchSvg?Y:na.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Rn));i.includes("fa")||i.push("fa");var o=[".".concat(Ka,":not([").concat(G,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=ua.begin("onTree"),u=s.reduce(function(f,m){try{var d=dt(m);d&&f.push(d)}catch(b){qa||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,m){Promise.all(u).then(function(d){mt(d,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),l(),f()})}).catch(function(d){l(),m(d)})})}function Fn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dt(e).then(function(t){t&&mt([t],a)})}function jn(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:He(a||{}),r=t.mask;return r&&(r=(r||{}).icon?r:He(r||{})),e(n,c(c({},t),{},{mask:r}))}}var zn=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?N:n,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,u=t.maskId,f=u===void 0?null:u,m=t.title,d=m===void 0?null:m,b=t.titleId,w=b===void 0?null:b,P=t.classes,k=P===void 0?[]:P,E=t.attributes,x=E===void 0?{}:E,A=t.styles,I=A===void 0?{}:A;if(a){var S=a.prefix,U=a.iconName,W=a.icon;return Te(c({type:"icon"},a),function(){return X("beforeDOMElementCreation",{iconDefinition:a,params:t}),v.autoA11y&&(d?x["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(w||se()):(x["aria-hidden"]="true",x.focusable="false")),fa({icons:{main:Ge(W),mask:l?Ge(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:U,transform:c(c({},N),r),symbol:o,title:d,maskId:f,titleId:w,extra:{attributes:x,styles:I,classes:k}})})}},Dn={mixout:function(){return{icon:jn(zn)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ta,t.nodeCallback=Fn,t}}},provides:function(a){a.i2svg=function(t){var n=t.node,r=n===void 0?h:n,i=t.callback,o=i===void 0?function(){}:i;return Ta(r,o)},a.generateSvgReplacementMutation=function(t,n){var r=n.iconName,i=n.title,o=n.titleId,s=n.prefix,l=n.transform,u=n.symbol,f=n.mask,m=n.maskId,d=n.extra;return new Promise(function(b,w){Promise.all([Xe(r,s),f.iconName?Xe(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var k=Ze(P,2),E=k[0],x=k[1];b([t,fa({icons:{main:E,mask:x},prefix:s,iconName:r,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:d,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=_e(s);l.length>0&&(r.style=l);var u;return ia(o)&&(u=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},$n={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return Te({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:t,params:n});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(le(i)).join(" ")},children:o}]})}}}},Yn={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,f=n.styles,m=f===void 0?{}:f;return Te({type:"counter",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:n}),kn({content:t.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(le(s))}})})}}}},Un={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?N:r,o=n.title,s=o===void 0?null:o,l=n.classes,u=l===void 0?[]:l,f=n.attributes,m=f===void 0?{}:f,d=n.styles,b=d===void 0?{}:d;return Te({type:"text",content:t},function(){return X("beforeDOMElementCreation",{content:t,params:n}),Pa({content:t,transform:c(c({},N),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(le(u))}})})}}},provides:function(a){a.generateLayersText=function(t,n){var r=n.title,i=n.transform,o=n.extra,s=null,l=null;if(Ga){var u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();s=f.width/u,l=f.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Pa({content:t.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Wn=new RegExp('"',"ug"),Ma=[1105920,1112319];function Bn(e){var a=e.replace(Wn,""),t=tn(a,0),n=t>=Ma[0]&&t<=Ma[1],r=a.length===2?a[0]===a[1]:!1;return{value:Ue(r?a[0]:a),isSecondary:n||r}}function La(e,a){var t="".concat(Nt).concat(a.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(t)!==null)return n();var i=Z(e.children),o=i.filter(function(W){return W.getAttribute(Ye)===a})[0],s=D.getComputedStyle(e,a),l=s.getPropertyValue("font-family").match(Ft),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),n();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?y:g,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?re[d][l[2].toLowerCase()]:jt[d][u],w=Bn(m),P=w.value,k=w.isSecondary,E=l[0].startsWith("FontAwesome"),x=sa(b,P),A=x;if(E){var I=un(P);I.iconName&&I.prefix&&(x=I.iconName,b=I.prefix)}if(x&&!k&&(!o||o.getAttribute(aa)!==b||o.getAttribute(ta)!==A)){e.setAttribute(t,A),o&&e.removeChild(o);var S=Ln(),U=S.extra;U.attributes[Ye]=a,Xe(x,b).then(function(W){var Me=fa(c(c({},S),{},{icons:{main:W,mask:la()},prefix:b,iconName:A,extra:U,watchable:!0})),F=h.createElement("svg");a==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=Me.map(function(ht){return ue(ht)}).join(`
`),e.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function Hn(e){return Promise.all([La(e,"::before"),La(e,"::after")])}function Gn(e){return e.parentNode!==document.head&&!~Mt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ye)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ra(e){if(R)return new Promise(function(a,t){var n=Z(e.querySelectorAll("*")).filter(Gn).map(Hn),r=ua.begin("searchPseudoElements");vt(),Promise.all(n).then(function(){r(),qe(),a()}).catch(function(){r(),qe(),t()})})}var Xn={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ra,t}}},provides:function(a){a.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?h:n;v.searchPseudoElements&&Ra(r)}}},Fa=!1,Vn={mixout:function(){return{dom:{unwatch:function(){vt(),Fa=!0}}}},hooks:function(){return{bootstrap:function(){Ca(Be("mutationObserverCallbacks",{}))},noAuto:function(){Cn()},watch:function(t){var n=t.observeMutationsRoot;Fa?qe():Ca(Be("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ja=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)},qn={mixout:function(){return{parse:{transform:function(t){return ja(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=ja(r)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:d};return{tag:"g",attributes:c({},b.outer),children:[{tag:"g",attributes:c({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),b.path)}]}]}}}},je={x:0,y:0,width:"100%",height:"100%"};function za(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function Kn(e){return e.tag==="g"?e.children:[e]}var Qn={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),i=r?Ne(r.split(" ").map(function(o){return o.trim()})):la();return i.prefix||(i.prefix=$()),t.mask=i,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var n=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,u=i.width,f=i.icon,m=o.width,d=o.icon,b=Vt({transform:l,containerWidth:m,iconWidth:u}),w={tag:"rect",attributes:c(c({},je),{},{fill:"white"})},P=f.children?{children:f.children.map(za)}:{},k={tag:"g",attributes:c({},b.inner),children:[za(c({tag:f.tag,attributes:c(c({},f.attributes),b.path)},P))]},E={tag:"g",attributes:c({},b.outer),children:[k]},x="mask-".concat(s||se()),A="clip-".concat(s||se()),I={tag:"mask",attributes:c(c({},je),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,E]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Kn(d)},I]};return n.push(S,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},je)}),{children:n,attributes:r}}}},Jn={provides:function(a){var t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Zn={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},er=[Qt,Dn,$n,Yn,Un,Xn,Vn,qn,Qn,Jn,Zn];vn(er,{mixoutsTo:_});_.noAuto;_.config;_.library;_.dom;var Ke=_.parse;_.findIconDefinition;_.toHtml;var ar=_.icon;_.layer;_.text;_.counter;function Da(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function z(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Da(Object(t),!0).forEach(function(n){K(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Da(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ee(e){return Ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ee(e)}function K(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function tr(e,a){if(e==null)return{};var t={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++)r=n[i],!(a.indexOf(r)>=0)&&(t[r]=e[r]);return t}function nr(e,a){if(e==null)return{};var t=tr(e,a),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Qe(e){return rr(e)||ir(e)||or(e)||sr()}function rr(e){if(Array.isArray(e))return Je(e)}function ir(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function or(e,a){if(e){if(typeof e=="string")return Je(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Je(e,a)}}function Je(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function sr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(e){var a,t=e.beat,n=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,f=e.spinReverse,m=e.pulse,d=e.fixedWidth,b=e.inverse,w=e.border,P=e.listItem,k=e.flip,E=e.size,x=e.rotation,A=e.pull,I=(a={"fa-beat":t,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":m,"fa-fw":d,"fa-inverse":b,"fa-border":w,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},K(a,"fa-".concat(E),typeof E<"u"&&E!==null),K(a,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),K(a,"fa-pull-".concat(A),typeof A<"u"&&A!==null),K(a,"fa-swap-opacity",e.swapOpacity),a);return Object.keys(I).map(function(S){return I[S]?S:null}).filter(function(S){return S})}function fr(e){return e=e-0,e===e}function pt(e){return fr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(a,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ur=["style"];function cr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function mr(e){return e.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,t){var n=t.indexOf(":"),r=pt(t.slice(0,n)),i=t.slice(n+1).trim();return r.startsWith("webkit")?a[cr(r)]=i:a[r]=i,a},{})}function bt(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var n=(a.children||[]).map(function(l){return bt(e,l)}),r=Object.keys(a.attributes||{}).reduce(function(l,u){var f=a.attributes[u];switch(u){case"class":l.attrs.className=f,delete a.attributes.class;break;case"style":l.attrs.style=mr(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[pt(u)]=f}return l},{attrs:{}}),i=t.style,o=i===void 0?{}:i,s=nr(t,ur);return r.attrs.style=z(z({},r.attrs.style),o),e.apply(void 0,[a.tag,z(z({},r.attrs),s)].concat(Qe(n)))}var gt=!1;try{gt=!0}catch{}function vr(){if(!gt&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $a(e){if(e&&Ee(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ke.icon)return Ke.icon(e);if(e===null)return null;if(e&&Ee(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ze(e,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?K({},e,a):{}}var ce=Ya.forwardRef(function(e,a){var t=e.icon,n=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,u=$a(t),f=ze("classes",[].concat(Qe(lr(e)),Qe(i.split(" ")))),m=ze("transform",typeof e.transform=="string"?Ke.transform(e.transform):e.transform),d=ze("mask",$a(n)),b=ar(u,z(z(z(z({},f),m),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!b)return vr("Could not find icon",u),null;var w=b.abstract,P={ref:a};return Object.keys(e).forEach(function(k){ce.defaultProps.hasOwnProperty(k)||(P[k]=e[k])}),dr(w[0],P)});ce.displayName="FontAwesomeIcon";ce.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};ce.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var dr=bt.bind(null,Ya.createElement);const pr="_block_1psvv_113",br="_inner_1psvv_118",xe={this:"_this_1psvv_78","level-primary":"_level-primary_1psvv_102",block:pr,inner:br,"level-secondary":"_level-secondary_1psvv_137","level-tertiary":"_level-tertiary_1psvv_145","level-danger":"_level-danger_1psvv_153"},Ie=({className:e,as:a="button",testId:t="Button",level:n="primary",size:r="medium",block:i=!1,icon:o,children:s,...l})=>ma(xt,{as:a,"data-testid":t,size:r,weight:"medium",className:va(xe.this,{[xe.block]:i},e),...l,children:yt(kt,{as:"span",gutter:r,elevation:"medium","data-testid":`${t}-inner`,className:va(xe.inner,xe[`level-${n}`]),children:[o&&ma(ce,{icon:o}),s]})});Ie.displayName="Button";const wr=Ie;try{Ie.displayName="Button",Ie.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"button"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},testId:{defaultValue:{value:"Button"},description:"",name:"testId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},level:{defaultValue:{value:"primary"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"medium"'},{value:'"large"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{wr as B};
//# sourceMappingURL=index-10ca8e92.js.map
