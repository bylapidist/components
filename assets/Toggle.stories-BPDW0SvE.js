import{j as a,c as D,T as Pe}from"./index-6q5c3n2i.js";import{r as _}from"./index-BwDkhjyp.js";import{F as qe}from"./index.es-DdZmTMGA.js";import{b as we,c as Ie}from"./index-NDe4qRHw.js";import{T as Me}from"./index-BlMHUP4e.js";import{B as ke}from"./index-Ds9VkG4C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D3ylJrlI.js";const Le="_inner_ujus9_119",Ce="_toggled_ujus9_142",Ve="_disabled_ujus9_178",Ee="_checkbox_ujus9_185",r={this:"_this_ujus9_99",inner:Le,toggled:Ce,"level-primary":"_level-primary_ujus9_145","level-secondary":"_level-secondary_ujus9_153","level-tertiary":"_level-tertiary_ujus9_161","level-danger":"_level-danger_ujus9_169",disabled:Ve,checkbox:Ee},z=({className:b,as:he="label",testId:h="Toggle",level:xe="primary",size:x="medium",onToggle:Ae=()=>null,disabled:A,children:je,...Re})=>{const[s,De]=_.useState(!1),j=_.useId(),R=_.useId(),Ne=()=>{De(!s),Ae()};return a.jsx(Me,{as:he,"data-testid":h,size:x,weight:"medium",className:D(r.this,{[r.disabled]:A},b),htmlFor:j,...Re,children:a.jsxs(ke,{as:"span",gutter:x,elevation:s?"large":"medium","data-testid":`${h}-inner`,className:D(r.inner,r[`level-${xe}`],{[r.toggled]:s}),children:[a.jsx("input",{className:r.checkbox,id:j,"aria-describedby":R,onClick:Ne,disabled:A,type:"checkbox"}),a.jsx(qe,{icon:s?we:Ie}),a.jsx("span",{id:R,children:je})]})})};z.displayName="Toggle";const Fe=z;z.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'label'",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Toggle'",computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""},level:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => null",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Qe={title:"Inputs/Toggle",component:Fe,decorators:[b=>a.jsx(Pe,{children:b()})]},e={as:"label",testId:"Toggle",level:"primary",size:"medium",disabled:!1,children:"Toggle Me"},l={args:{...e,size:"small"}},t={args:{...e,size:"medium"}},n={args:{...e,size:"large"}},o={args:{...e,disabled:!0}},i={args:{...e,level:"secondary",size:"small"}},d={args:{...e,level:"secondary",size:"medium"}},c={args:{...e,level:"secondary",size:"large"}},m={args:{...e,level:"secondary",disabled:!0}},u={args:{...e,level:"tertiary",size:"small"}},g={args:{...e,level:"tertiary",size:"medium"}},p={args:{...e,level:"tertiary",size:"large"}},y={args:{...e,level:"tertiary",disabled:!0}},v={args:{...e,level:"danger",size:"small"}},f={args:{...e,level:"danger",size:"medium"}},S={args:{...e,level:"danger",size:"large"}},T={args:{...e,level:"danger",disabled:!0}};var N,P,q;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var w,I,M;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'medium'
  }
}`,...(M=(I=t.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var k,L,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'large'
  }
}`,...(C=(L=n.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var V,E,F;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,$,X;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'secondary',
    size: 'small'
  }
}`,...(X=($=i.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var J,O,G;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'secondary',
    size: 'medium'
  }
}`,...(G=(O=d.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,K,Q;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'secondary',
    size: 'large'
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'secondary',
    disabled: true
  }
}`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,re;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'tertiary',
    size: 'small'
  }
}`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,le;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'tertiary',
    size: 'medium'
  }
}`,...(le=(se=g.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var te,ne,oe;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'tertiary',
    size: 'large'
  }
}`,...(oe=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,de,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'tertiary',
    disabled: true
  }
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ue,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'danger',
    size: 'small'
  }
}`,...(ge=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var pe,ye,ve;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'danger',
    size: 'medium'
  }
}`,...(ve=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Se,Te;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'danger',
    size: 'large'
  }
}`,...(Te=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var be,_e,ze;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    level: 'danger',
    disabled: true
  }
}`,...(ze=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};const Ue=["PrimarySmall","PrimaryMedium","PrimaryLarge","PrimaryDisabled","SecondarySmall","SecondaryMedium","SecondaryLarge","SecondaryDisabled","TertiarySmall","TertiaryMedium","TertiaryLarge","TertiaryDisabled","DangerSmall","DangerMedium","DangerLarge","DangerDisabled"];export{T as DangerDisabled,S as DangerLarge,f as DangerMedium,v as DangerSmall,o as PrimaryDisabled,n as PrimaryLarge,t as PrimaryMedium,l as PrimarySmall,m as SecondaryDisabled,c as SecondaryLarge,d as SecondaryMedium,i as SecondarySmall,y as TertiaryDisabled,p as TertiaryLarge,g as TertiaryMedium,u as TertiarySmall,Ue as __namedExportsOrder,Qe as default};
