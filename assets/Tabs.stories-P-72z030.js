import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{c as i,T as P}from"./index-VJLTAasT.js";import{R as A}from"./index-4g5l5LRQ.js";import{B as p}from"./index-o1DlYkt9.js";import{T as D}from"./index-DaVMXFMm.js";import{L as I}from"./index-ufCLlMlm.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index.es-LmOBF5N0.js";import"./index-tvtfaFq4.js";const G="_inner_1kzwn_103",R="_link_1kzwn_115",$="_active_1kzwn_119",o={this:"_this_1kzwn_99",inner:G,link:R,active:$},n=({className:a,as:N="div",testId:v="Tabs",size:f="medium",links:z=[],onChangeTab:g,...B})=>{const[M,V]=A.useState(void 0),F=l=>{typeof g=="function"&&(V(l),g(l))};return e.jsx(D,{as:N,"data-testid":v,size:f,weight:"medium",className:i(o.this,a),...B,children:e.jsx(p,{as:"ul",gutter:"medium",elevation:"large",roundness:"small","data-testid":`${v}-list`,className:i(o.inner),children:z.map((l,c)=>e.jsx(p,{"data-testid":`${v}-item`,as:"li",roundness:"small",className:i({[o.active]:c===M}),children:e.jsx(I,{"data-testid":`${v}-link`,size:f,onClick:()=>F(c),className:i(o.link),...l,children:e.jsx(p,{gutter:"medium",children:l.children})})},c))})})};n.displayName="Tabs";const C=n;try{n.displayName="Tabs",n.__docgenInfo={description:"",displayName:"Tabs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},testId:{defaultValue:{value:"Tabs"},description:"",name:"testId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"none"'},{value:'"medium"'},{value:'"large"'}]}},links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"(LinkProps & BaseProps)[]"}},onChangeTab:{defaultValue:null,description:"",name:"onChangeTab",required:!1,type:{name:"((activeTab: number) => void)"}}}}}catch{}const Y={title:"Primitives/Tabs",component:C,decorators:[a=>e.jsx(P,{children:a()})]},d={as:"div",testId:"Tabs",size:"medium",links:[{testId:"Link1",href:"javascript:void",children:"Home"},{testId:"Link2",href:"javascript:void",children:"About"},{testId:"Link3",href:"javascript:void",children:"Blog"},{testId:"Link4",href:"javascript:void",children:"Contact"}],onChangeTab:()=>{}},m=a=>e.jsx(C,{...a}),u=m.bind({});u.args={...d,onChangeTab:void 0};const t=m.bind({});t.args={...d,size:"small"};const s=m.bind({});s.args={...d,size:"medium"};const r=m.bind({});r.args={...d,size:"large"};var h,b,T;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Tabs {...args} />",...(T=(b=u.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var y,k,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"args => <Tabs {...args} />",...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var x,j,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Tabs {...args} />",...(L=(j=s.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var S,w,q;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Tabs {...args} />",...(q=(w=r.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const Z=["Basic","Small","Medium","Large"];export{u as Basic,r as Large,s as Medium,t as Small,Z as __namedExportsOrder,Y as default};
