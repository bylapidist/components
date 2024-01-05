import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as x,b as j,C as r,d as n,A as p}from"./index-JofP9GUq.js";import{T as o}from"./index-PFWdNOIg.js";import{B as m,P as a,S as l,T as d,D as t,a as u,b,c as f,d as g,e as y,f as v,g as k,h as T,W as w,i as D,j as S,k as q,l as z,m as M}from"./Button.stories-UMyhQzJ4.js";import{useMDXComponents as h}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-R_rvQohJ.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MI7UZ4bI.js";import"./index-PPLHz8o0.js";import"./index-DkSEpATG.js";import"./index-QQnMcri1.js";import"./index.es-mkP0U3fZ.js";import"./index-tvtfaFq4.js";import"./index-rDMclScH.js";import"./index-8_PpO9Jk.js";function c(i){const s=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",code:"code",h3:"h3"},h(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:m}),`
`,e.jsx(s.h1,{id:"button",children:"Button"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[`A primitive for invoking actions. They should not be used to navigate to new pages or anchors on the current page - use
a `,e.jsx(s.a,{href:"?path=/docs/typography-link--documentation",children:"Link"})," in these scenarios instead."]}),`
`]}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(j,{dark:!0}),`
`,e.jsx(s.h2,{id:"controlling-level",children:"Controlling level"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"level"})," prop controls the button appearance. There are four available levels, defined as ",e.jsx(s.code,{children:"primary"}),", ",e.jsx(s.code,{children:"secondary"}),`,
`,e.jsx(s.code,{children:"tertiary"})," and ",e.jsx(s.code,{children:"danger"}),"."]}),`
`,e.jsx(s.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"primary"})," level should be used as the main call to action within a page or button group."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:a})}),`
`,e.jsx(s.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"secondary"})," level should be used as a secondary call to action within a page or button group."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:l})}),`
`,e.jsx(s.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"tertiary"})," level should be used as any button that is not a call to action or destructive."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:d})}),`
`,e.jsx(s.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"danger"})," level should be used for triggering any destructive action."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:t})}),`
`,e.jsx(s.h2,{id:"controlling-size",children:"Controlling size"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop controls button size. There are three available sizes, defined as ",e.jsx(s.code,{children:"small"}),", ",e.jsx(s.code,{children:"medium"})," and ",e.jsx(s.code,{children:"large"}),"."]}),`
`,e.jsx(s.h3,{id:"small",children:"Small"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Use the small size for toolbars or where space is constrained."}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(o,{style:{display:"flex",gridGap:"var(--size-2)"},children:[e.jsx(n,{of:u}),e.jsx(n,{of:b}),e.jsx(n,{of:f}),e.jsx(n,{of:g})]})}),`
`,e.jsx(s.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"medium"})," size for most forms, modals, and primary actions within a section of a page."]}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(o,{style:{display:"flex",gridGap:"var(--size-2)"},children:[e.jsx(n,{of:a}),e.jsx(n,{of:l}),e.jsx(n,{of:d}),e.jsx(n,{of:t})]})}),`
`,e.jsx(s.h3,{id:"large",children:"Large"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"large"})," size within a hero banner, or as the main action on the page."]}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(o,{style:{display:"flex",gridGap:"var(--size-2)"},children:[e.jsx(n,{of:y}),e.jsx(n,{of:v}),e.jsx(n,{of:k}),e.jsx(n,{of:T})]})}),`
`,e.jsx(s.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["We use the ",e.jsx(s.code,{children:"@fortawesome/fontawesome-svg-core"})," library for icon support."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:w})}),`
`,e.jsx(s.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Where possible, avoid using disabled buttons as they are invisible to screen readers and present accessibility concerns."}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(o,{style:{display:"flex",gridGap:"var(--size-2)"},children:[e.jsx(n,{of:D}),e.jsx(n,{of:S}),e.jsx(n,{of:q}),e.jsx(n,{of:z})]})}),`
`,e.jsx(s.h2,{id:"block-mode",children:"Block mode"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The button is by default set to ",e.jsx(s.code,{children:"inline-flex"}),` and will be sized according to its contents. On small screens or where
only one option is available to the user, e.g. within a modal, then we may use the `,e.jsx(s.code,{children:"block"})," prop to set it to full width."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:M})}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(p,{})]})}function Q(i={}){const{wrapper:s}=Object.assign({},h(),i.components);return s?e.jsx(s,Object.assign({},i,{children:e.jsx(c,i)})):c(i)}export{Q as default};
