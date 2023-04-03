import{j as e,a as r,F as u,T as a}from"./index-1dbe3cd0.js";import{M as f,S as b,C as i,a as o,A as g}from"./index-5f1a0c59.js";import{B as y,P as t,S as s,T as h,D as p,a as v,b as k,c as T,d as S,e as w,f as D,g as q,h as z,W as M,i as x,j as _,k as P,l as j,m as C}from"./Button.stories-3543e027.js";import{u as m}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-05f626e2.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-ac32a2f8.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-10ca8e92.js";import"./index-4d501b15.js";import"./index-ae7b567c.js";import"./index-fb736324.js";function R(l={}){const{wrapper:c}=Object.assign({},m(),l.components);return c?e(c,Object.assign({},l,{children:e(d,{})})):d();function d(){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",code:"code",h3:"h3"},m(),l.components);return r(u,{children:[e(f,{of:y}),`
`,e(n.h1,{children:"Button"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:[`A primitive for invoking actions. They should not be used to navigate to new pages or anchors on the current page - use
a `,e(n.a,{href:"?path=/docs/typography-link--documentation",children:"Link"})," in these scenarios instead."]}),`
`]}),`
`,e(n.h2,{children:"Example"}),`
`,e(b,{dark:!0}),`
`,e(n.h2,{children:"Controlling level"}),`
`,r(n.p,{children:["The ",e(n.code,{children:"level"})," prop controls the button appearance. There are four available levels, defined as ",e(n.code,{children:"primary"}),", ",e(n.code,{children:"secondary"}),`,
`,e(n.code,{children:"tertiary"})," and ",e(n.code,{children:"danger"}),"."]}),`
`,e(n.h3,{children:"Primary"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"primary"})," level should be used as the main call to action within a page or button group."]}),`
`]}),`
`,e(i,{children:e(o,{of:t})}),`
`,e(n.h3,{children:"Secondary"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"secondary"})," level should be used as a secondary call to action within a page or button group."]}),`
`]}),`
`,e(i,{children:e(o,{of:s})}),`
`,e(n.h3,{children:"Tertiary"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"tertiary"})," level should be used as any button that is not a call to action or destructive."]}),`
`]}),`
`,e(i,{children:e(o,{of:h})}),`
`,e(n.h3,{children:"Danger"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The ",e(n.code,{children:"danger"})," level should be used for triggering any destructive action."]}),`
`]}),`
`,e(i,{children:e(o,{of:p})}),`
`,e(n.h2,{children:"Controlling size"}),`
`,r(n.p,{children:["The ",e(n.code,{children:"size"})," prop controls button size. There are three available sizes, defined as ",e(n.code,{children:"small"}),", ",e(n.code,{children:"medium"})," and ",e(n.code,{children:"large"}),"."]}),`
`,e(n.h3,{children:"Small"}),`
`,r(n.blockquote,{children:[`
`,e(n.p,{children:"Use the small size for toolbars or where space is constrained."}),`
`]}),`
`,e(i,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(o,{of:v}),e(o,{of:k}),e(o,{of:T}),e(o,{of:S})]})}),`
`,e(n.h3,{children:"Medium"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["Use the ",e(n.code,{children:"medium"})," size for most forms, modals, and primary actions within a section of a page."]}),`
`]}),`
`,e(i,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(o,{of:t}),e(o,{of:s}),e(o,{of:h}),e(o,{of:p})]})}),`
`,e(n.h3,{children:"Large"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["Use the ",e(n.code,{children:"large"})," size within a hero banner, or as the main action on the page."]}),`
`]}),`
`,e(i,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(o,{of:w}),e(o,{of:D}),e(o,{of:q}),e(o,{of:z})]})}),`
`,e(n.h2,{children:"Icons"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["We use the ",e(n.code,{children:"@fortawesome/fontawesome-svg-core"})," library for icon support."]}),`
`]}),`
`,e(i,{children:e(o,{of:M})}),`
`,e(n.h2,{children:"Disabled"}),`
`,r(n.blockquote,{children:[`
`,e(n.p,{children:"Where possible, avoid using disabled buttons as they are invisible to screen readers and present accessibility concerns."}),`
`]}),`
`,e(i,{children:r(a,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e(o,{of:x}),e(o,{of:_}),e(o,{of:P}),e(o,{of:j})]})}),`
`,e(n.h2,{children:"Block mode"}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:["The button is by default set to ",e(n.code,{children:"inline-flex"}),` and will be sized according to its contents. On small screens or where
only one option is available to the user, e.g. within a modal, then we may use the `,e(n.code,{children:"block"})," prop to set it to full width."]}),`
`]}),`
`,e(i,{children:e(o,{of:C})}),`
`,e(n.h2,{children:"Props"}),`
`,e(g,{})]})}}export{R as default};
//# sourceMappingURL=Button-abf96da8.js.map
