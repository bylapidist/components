import{j as e,a as r,F as u,T as a}from"./index-e6495e8c.js";import{M as b,S as f,C as o,a as i,A as g}from"./index-be65c165.js";import{B as y,P as t,S as s,T as h,D as p,a as v,b as k,c as T,d as S,e as w,f as D,g as q,h as z,W as x,i as M,j as _,k as P,l as j,m as C}from"./Button.stories-8994cbcb.js";import{u as m}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-35e73371.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-73280096.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-63c5b610.js";import"./index-6dc55776.js";import"./index.es-3605f319.js";import"./index-4d501b15.js";import"./index-7fa5ffa5.js";import"./index-10e8f0ab.js";function Y(l={}){const{wrapper:d}=Object.assign({},m(),l.components);return d?e(d,Object.assign({},l,{children:e(c,{})})):c();function c(){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",code:"code",h3:"h3"},m(),l.components);return r(u,{children:[e(b,{of:y}),`
`,e(n.h1,{id:"button",children:"Button"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:[`A primitive for invoking actions. They should not be used to navigate to new pages or anchors on the current page - use
a `,e(n.a,{href:"?path=/docs/typography-link--documentation",children:"Link"})," in these scenarios instead."]}),`
`]}),`
`,e(n.h2,{id:"example",children:"Example"}),`
`,e(f,{dark:!0}),`
`,e(n.h2,{id:"controlling-level",children:"Controlling level"}),`
`,r(n.p,{children:["The ",e(n.code,{children:"level"})," prop controls the button appearance. There are four available levels, defined as ",e(n.code,{children:"primary"}),", ",e(n.code,{children:"secondary"}),`,
`,e(n.code,{children:"tertiary"})," and ",e(n.code,{children:"danger"}),"."]}),`
`,e(n.h3,{id:"primary",children:"Primary"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"primary"})," level should be used as the main call to action within a page or button group."]}),`
`]}),`
`,e(o,{children:e(i,{of:t})}),`
`,e(n.h3,{id:"secondary",children:"Secondary"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"secondary"})," level should be used as a secondary call to action within a page or button group."]}),`
`]}),`
`,e(o,{children:e(i,{of:s})}),`
`,e(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"tertiary"})," level should be used as any button that is not a call to action or destructive."]}),`
`]}),`
`,e(o,{children:e(i,{of:h})}),`
`,e(n.h3,{id:"danger",children:"Danger"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"danger"})," level should be used for triggering any destructive action."]}),`
`]}),`
`,e(o,{children:e(i,{of:p})}),`
`,e(n.h2,{id:"controlling-size",children:"Controlling size"}),`
`,r(n.p,{children:["The ",e(n.code,{children:"size"})," prop controls button size. There are three available sizes, defined as ",e(n.code,{children:"small"}),", ",e(n.code,{children:"medium"})," and ",e(n.code,{children:"large"}),"."]}),`
`,e(n.h3,{id:"small",children:"Small"}),`
`,r(n.blockquote,{children:[`
`,e(n.p,{children:"Use the small size for toolbars or where space is constrained."}),`
`]}),`
`,e(o,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(i,{of:v}),e(i,{of:k}),e(i,{of:T}),e(i,{of:S})]})}),`
`,e(n.h3,{id:"medium",children:"Medium"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["Use the ",e(n.code,{children:"medium"})," size for most forms, modals, and primary actions within a section of a page."]}),`
`]}),`
`,e(o,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(i,{of:t}),e(i,{of:s}),e(i,{of:h}),e(i,{of:p})]})}),`
`,e(n.h3,{id:"large",children:"Large"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["Use the ",e(n.code,{children:"large"})," size within a hero banner, or as the main action on the page."]}),`
`]}),`
`,e(o,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(i,{of:w}),e(i,{of:D}),e(i,{of:q}),e(i,{of:z})]})}),`
`,e(n.h2,{id:"icons",children:"Icons"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["We use the ",e(n.code,{children:"@fortawesome/fontawesome-svg-core"})," library for icon support."]}),`
`]}),`
`,e(o,{children:e(i,{of:x})}),`
`,e(n.h2,{id:"disabled",children:"Disabled"}),`
`,r(n.blockquote,{children:[`
`,e(n.p,{children:"Where possible, avoid using disabled buttons as they are invisible to screen readers and present accessibility concerns."}),`
`]}),`
`,e(o,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(i,{of:M}),e(i,{of:_}),e(i,{of:P}),e(i,{of:j})]})}),`
`,e(n.h2,{id:"block-mode",children:"Block mode"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The button is by default set to ",e(n.code,{children:"inline-flex"}),` and will be sized according to its contents. On small screens or where
only one option is available to the user, e.g. within a modal, then we may use the `,e(n.code,{children:"block"})," prop to set it to full width."]}),`
`]}),`
`,e(o,{children:e(i,{of:C})}),`
`,e(n.h2,{id:"props",children:"Props"}),`
`,e(g,{})]})}}export{Y as default};
//# sourceMappingURL=Button-37441392.js.map
