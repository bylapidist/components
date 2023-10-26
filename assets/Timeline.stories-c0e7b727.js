import{j as e,T as k}from"./index-48faf0e0.js";import{c as L}from"./index-a1a37b41.js";import{B as i}from"./index-daf9f96b.js";import{L as M}from"./index-514cee8b.js";import{T as d}from"./index-faf79eaa.js";const q="_item_p8304_99",F="_meta_p8304_99",o={item:q,meta:F},s=({className:l,testId:x="Timeline",size:u="medium",items:w,...j})=>e.jsx(d,{as:"ol",size:u,className:l,"data-testid":x,...j,children:w.map(a=>e.jsxs(i,{as:"li",className:o.item,gutterY:u,children:[e.jsxs(i,{gutterY:u,children:[a.from," – ",a.to]}),e.jsxs(i,{className:o.meta,gutterY:u,children:[e.jsx(d,{size:u,weight:"medium",children:a.title}),e.jsx(i,{children:e.jsx(M,{className:o.urlTitle,href:a.url,size:u,icon:L,target:"_blank",rel:"noopener noreferrer",children:a.urlTitle})})]})]},`${a.urlTitle}-${a.title}`))});s.displayName="Timeline";const _=s;try{s.displayName="Timeline",s.__docgenInfo={description:"",displayName:"Timeline",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},testId:{defaultValue:{value:"Timeline"},description:"",name:"testId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"medium"'},{value:'"large"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const N={title:"Primitives/Timeline",component:_,decorators:[l=>e.jsx(k,{children:l()})]},n={items:[{urlTitle:"LendInvest",title:"Senior Software Engineer",from:"Apr 2021",to:"Present",url:"https://www.lendinvest.com/"},{urlTitle:"Golden Charter",title:"Frontend Software Developer",from:"Feb 2020",to:"Apr 2021",url:"https://www.goldencharter.co.uk/"}],testId:"Timeline",size:"medium"},m=l=>e.jsx(_,{...l}),t=m.bind({});t.args={...n,size:"small"};const r=m.bind({});r.args={...n,size:"medium"};const v=m.bind({});v.args={...n,size:"large"};var c,p,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Timeline {...args} />",...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Timeline {...args} />",...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var T,y,S;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:"args => <Timeline {...args} />",...(S=(y=v.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const z=["SmallSize","MediumSize","LargeSize"],A=Object.freeze(Object.defineProperty({__proto__:null,LargeSize:v,MediumSize:r,SmallSize:t,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{v as L,r as M,t as S,A as T};
//# sourceMappingURL=Timeline.stories-c0e7b727.js.map
