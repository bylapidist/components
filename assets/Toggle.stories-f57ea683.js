import{j as r}from"./jsx-runtime-ffb262ed.js";import{c as P,T as Fe}from"./index-e567f2cb.js";import{r as x}from"./index-76fb7be0.js";import{F as Ie}from"./index.es-22a86092.js";import{a as Ce,b as Ne}from"./index-a1a37b41.js";import{T as Ve}from"./index-5606fc7d.js";import{B as we}from"./index-717cc57d.js";const Be="_inner_ujus9_119",Oe="_toggled_ujus9_142",Ge="_disabled_ujus9_178",Ae="_checkbox_ujus9_185",s={this:"_this_ujus9_99",inner:Be,toggled:Oe,"level-primary":"_level-primary_ujus9_145","level-secondary":"_level-secondary_ujus9_153","level-tertiary":"_level-tertiary_ujus9_161","level-danger":"_level-danger_ujus9_169",disabled:Ge,checkbox:Ae},_=({className:l,as:De="label",testId:j="Toggle",level:ke="primary",size:D="medium",onToggle:Me=()=>null,disabled:k,children:ze,...Pe})=>{const[S,Le]=x.useState(!1),M=x.useId(),z=x.useId(),qe=()=>{Le(!S),Me()};return r.jsx(Ve,{as:De,"data-testid":j,size:D,weight:"medium",className:P(s.this,{[s.disabled]:k},l),htmlFor:M,...Pe,children:r.jsxs(we,{as:"span",gutter:D,elevation:S?"large":"medium","data-testid":`${j}-inner`,className:P(s.inner,s[`level-${ke}`],{[s.toggled]:S}),children:[r.jsx("input",{className:s.checkbox,id:M,"aria-describedby":z,onClick:qe,disabled:k,type:"checkbox"}),r.jsx(Ie,{icon:S?Ce:Ne}),r.jsx("span",{id:z,children:ze})]})})};_.displayName="Toggle";const je=_;try{_.displayName="Toggle",_.__docgenInfo={description:"",displayName:"Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"label"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},testId:{defaultValue:{value:"Toggle"},description:"",name:"testId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},level:{defaultValue:{value:"primary"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"medium"'},{value:'"large"'}]}},onToggle:{defaultValue:{value:"() => null"},description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Ee={title:"Inputs/Toggle",component:je,decorators:[l=>r.jsx(Fe,{children:l()})]},e={as:"label",testId:"Toggle",level:"primary",size:"medium",disabled:!1,children:"Toggle Me"},a=l=>r.jsx(je,{...l}),u=a.bind({});u.args={...e,size:"small"};const o=a.bind({});o.args={...e,size:"medium"};const t=a.bind({});t.args={...e,size:"large"};const i=a.bind({});i.args={...e,disabled:!0};const d=a.bind({});d.args={...e,level:"secondary",size:"small"};const v=a.bind({});v.args={...e,level:"secondary",size:"medium"};const c=a.bind({});c.args={...e,level:"secondary",size:"large"};const n=a.bind({});n.args={...e,level:"secondary",disabled:!0};const m=a.bind({});m.args={...e,level:"tertiary",size:"small"};const g=a.bind({});g.args={...e,level:"tertiary",size:"medium"};const p=a.bind({});p.args={...e,level:"tertiary",size:"large"};const f=a.bind({});f.args={...e,level:"tertiary",disabled:!0};const y=a.bind({});y.args={...e,level:"danger",size:"small"};const b=a.bind({});b.args={...e,level:"danger",size:"medium"};const T=a.bind({});T.args={...e,level:"danger",size:"large"};const h=a.bind({});h.args={...e,level:"danger",disabled:!0};var L,q,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:"args => <Toggle {...args} />",...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var I,C,N;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Toggle {...args} />",...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var V,w,B;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:"args => <Toggle {...args} />",...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var O,G,A;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Toggle {...args} />",...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var E,$,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:"args => <Toggle {...args} />",...(R=($=d.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var X,H,J;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:"args => <Toggle {...args} />",...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:"args => <Toggle {...args} />",...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,Y,Z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:"args => <Toggle {...args} />",...(Z=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <Toggle {...args} />",...(re=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,se,ue;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:"args => <Toggle {...args} />",...(ue=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var oe,te,ie;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <Toggle {...args} />",...(ie=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,ve,ce;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:"args => <Toggle {...args} />",...(ce=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:ce.source}}};var ne,me,ge;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <Toggle {...args} />",...(ge=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var pe,fe,ye;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:"args => <Toggle {...args} />",...(ye=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var be,Te,he;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:"args => <Toggle {...args} />",...(he=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var Se,_e,xe;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:"args => <Toggle {...args} />",...(xe=(_e=h.parameters)==null?void 0:_e.docs)==null?void 0:xe.source}}};const $e=["PrimarySmall","PrimaryMedium","PrimaryLarge","PrimaryDisabled","SecondarySmall","SecondaryMedium","SecondaryLarge","SecondaryDisabled","TertiarySmall","TertiaryMedium","TertiaryLarge","TertiaryDisabled","DangerSmall","DangerMedium","DangerLarge","DangerDisabled"],We=Object.freeze(Object.defineProperty({__proto__:null,DangerDisabled:h,DangerLarge:T,DangerMedium:b,DangerSmall:y,PrimaryDisabled:i,PrimaryLarge:t,PrimaryMedium:o,PrimarySmall:u,SecondaryDisabled:n,SecondaryLarge:c,SecondaryMedium:v,SecondarySmall:d,TertiaryDisabled:f,TertiaryLarge:p,TertiaryMedium:g,TertiarySmall:m,__namedExportsOrder:$e,default:Ee},Symbol.toStringTag,{value:"Module"}));export{b as D,o as P,v as S,We as T,g as a,u as b,d as c,m as d,y as e,t as f,c as g,p as h,T as i,i as j,n as k,f as l,h as m};
//# sourceMappingURL=Toggle.stories-f57ea683.js.map
