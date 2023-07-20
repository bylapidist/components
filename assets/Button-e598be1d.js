import{j as e,T as i}from"./index-b440fc87.js";import{M as j,b as p,C as r,d as n,A as m}from"./index-db3d90be.js";import{B as u,P as d,S as t,T as c,D as h,a as b,b as f,c as g,d as y,e as v,f as k,g as T,h as w,W as D,i as S,j as q,k as z,l as M,m as _}from"./Button.stories-cac3ac7e.js";import{u as x}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e2688585.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-7aeb35c0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-63c5b610.js";import"./index-30dfbc5a.js";import"./index.es-68eea02d.js";import"./index-8d47fad6.js";import"./index-ebb0059e.js";import"./index-8d58e70c.js";function Q(o={}){const{wrapper:a}=Object.assign({},x(),o.components);return a?e.jsx(a,Object.assign({},o,{children:e.jsx(l,{})})):l();function l(){const s=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",code:"code",h3:"h3"},x(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:u}),`
`,e.jsx(s.h1,{id:"button",children:"Button"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[`A primitive for invoking actions. They should not be used to navigate to new pages or anchors on the current page - use
a `,e.jsx(s.a,{href:"?path=/docs/typography-link--documentation",children:"Link"})," in these scenarios instead."]}),`
`]}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{dark:!0}),`
`,e.jsx(s.h2,{id:"controlling-level",children:"Controlling level"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"level"})," prop controls the button appearance. There are four available levels, defined as ",e.jsx(s.code,{children:"primary"}),", ",e.jsx(s.code,{children:"secondary"}),`,
`,e.jsx(s.code,{children:"tertiary"})," and ",e.jsx(s.code,{children:"danger"}),"."]}),`
`,e.jsx(s.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"primary"})," level should be used as the main call to action within a page or button group."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:d})}),`
`,e.jsx(s.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"secondary"})," level should be used as a secondary call to action within a page or button group."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:t})}),`
`,e.jsx(s.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"tertiary"})," level should be used as any button that is not a call to action or destructive."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:c})}),`
`,e.jsx(s.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"danger"})," level should be used for triggering any destructive action."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:h})}),`
`,e.jsx(s.h2,{id:"controlling-size",children:"Controlling size"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop controls button size. There are three available sizes, defined as ",e.jsx(s.code,{children:"small"}),", ",e.jsx(s.code,{children:"medium"})," and ",e.jsx(s.code,{children:"large"}),"."]}),`
`,e.jsx(s.h3,{id:"small",children:"Small"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Use the small size for toolbars or where space is constrained."}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:b}),e.jsx(n,{of:f}),e.jsx(n,{of:g}),e.jsx(n,{of:y})]})}),`
`,e.jsx(s.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"medium"})," size for most forms, modals, and primary actions within a section of a page."]}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:d}),e.jsx(n,{of:t}),e.jsx(n,{of:c}),e.jsx(n,{of:h})]})}),`
`,e.jsx(s.h3,{id:"large",children:"Large"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"large"})," size within a hero banner, or as the main action on the page."]}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:v}),e.jsx(n,{of:k}),e.jsx(n,{of:T}),e.jsx(n,{of:w})]})}),`
`,e.jsx(s.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["We use the ",e.jsx(s.code,{children:"@fortawesome/fontawesome-svg-core"})," library for icon support."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:D})}),`
`,e.jsx(s.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Where possible, avoid using disabled buttons as they are invisible to screen readers and present accessibility concerns."}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:S}),e.jsx(n,{of:q}),e.jsx(n,{of:z}),e.jsx(n,{of:M})]})}),`
`,e.jsx(s.h2,{id:"block-mode",children:"Block mode"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The button is by default set to ",e.jsx(s.code,{children:"inline-flex"}),` and will be sized according to its contents. On small screens or where
only one option is available to the user, e.g. within a modal, then we may use the `,e.jsx(s.code,{children:"block"})," prop to set it to full width."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:_})}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(m,{})]})}}export{Q as default};
//# sourceMappingURL=Button-e598be1d.js.map