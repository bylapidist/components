import{j as n,c as j,T as A}from"./index-6q5c3n2i.js";import{T as P}from"./index-BlMHUP4e.js";import{B as I}from"./index-Ds9VkG4C.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const E="_children_w27d6_118",o={this:"_this_w27d6_99",children:E,"level-primary":"_level-primary_w27d6_121","level-secondary":"_level-secondary_w27d6_126","level-tertiary":"_level-tertiary_w27d6_131","level-danger":"_level-danger_w27d6_136"},i=({className:e,as:N="span",testId:S="Tag",level:x="primary",children:q,...D})=>n.jsx(P,{as:N,className:j(o.this,o[`level-${x}`],e),"data-testid":S,size:"small",weight:"medium",...D,children:n.jsx(I,{className:o.children,gutterX:"medium",gutterY:"small",elevation:"small",children:q})});i.displayName="Tag";const w=i;i.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'span'",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Tag'",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},level:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},namespace:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Status/Tag",component:w,decorators:[e=>n.jsx(A,{children:e()})]},l={as:"span",testId:"Tag",level:"primary"},d=e=>n.jsx(w,{...e,children:"v1.0.0"}),r={render:d,args:{...l}},a={render:d,args:{...l,level:"secondary"}},s={render:d,args:{...l,level:"tertiary"}},t={render:d,args:{...l,level:"danger"}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...defaultArgs
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...defaultArgs,
    level: 'secondary'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,T,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...defaultArgs,
    level: 'tertiary'
  }
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var _,R,h;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: DefaultTemplate,
  args: {
    ...defaultArgs,
    level: 'danger'
  }
}`,...(h=(R=t.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};const F=["Primary","Secondary","Tertiary","Danger"];export{t as Danger,r as Primary,a as Secondary,s as Tertiary,F as __namedExportsOrder,z as default};
