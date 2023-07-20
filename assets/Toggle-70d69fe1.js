import{j as e,T as i}from"./index-b440fc87.js";import{M as j,b as p,C as r,d as n,A as m}from"./index-db3d90be.js";import{T as g,P as d,S as c,a as t,D as h,b as u,c as f,d as y,e as b,f as v,g as T,h as k,i as D,j as S,k as z,l as q,m as M}from"./Toggle.stories-a52ad4ce.js";import{u as x}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e2688585.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-7aeb35c0.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index.es-68eea02d.js";import"./index-8d47fad6.js";import"./index-63c5b610.js";import"./index-8d58e70c.js";import"./index-ebb0059e.js";function J(o={}){const{wrapper:l}=Object.assign({},x(),o.components);return l?e.jsx(l,Object.assign({},o,{children:e.jsx(a,{})})):a();function a(){const s=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",code:"code",h3:"h3"},x(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:g}),`
`,e.jsx(s.h1,{id:"toggle",children:"Toggle"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[`A primitive for toggling between two states. They are functionally an individual checkbox under the hood, but styled more like
a `,e.jsx(s.a,{href:"?path=/docs/inputs-toggle--documentation",children:"Button"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{dark:!0}),`
`,e.jsx(s.h2,{id:"controlling-level",children:"Controlling level"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"level"})," prop controls the toggle appearance. There are four available levels, defined as ",e.jsx(s.code,{children:"primary"}),", ",e.jsx(s.code,{children:"secondary"}),`,
`,e.jsx(s.code,{children:"tertiary"})," and ",e.jsx(s.code,{children:"danger"}),"."]}),`
`,e.jsx(s.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"primary"})," level should be used as the main call to action within a page or toggle group."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:d})}),`
`,e.jsx(s.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"secondary"})," level should be used as a secondary call to action within a page or toggle group."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:c})}),`
`,e.jsx(s.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"tertiary"})," level should be used as any toggle that is not a call to action or destructive."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:t})}),`
`,e.jsx(s.h3,{id:"danger",children:"Danger"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"danger"})," level should be used for toggling any destructive action."]}),`
`]}),`
`,e.jsx(r,{children:e.jsx(n,{of:h})}),`
`,e.jsx(s.h2,{id:"controlling-size",children:"Controlling size"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop controls toggle size. There are three available sizes, defined as ",e.jsx(s.code,{children:"small"}),", ",e.jsx(s.code,{children:"medium"})," and ",e.jsx(s.code,{children:"large"}),"."]}),`
`,e.jsx(s.h3,{id:"small",children:"Small"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Use the small size for toolbars or where space is constrained."}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:u}),e.jsx(n,{of:f}),e.jsx(n,{of:y}),e.jsx(n,{of:b})]})}),`
`,e.jsx(s.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"medium"})," size for most forms, modals, and primary actions within a section of a page."]}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:d}),e.jsx(n,{of:c}),e.jsx(n,{of:t}),e.jsx(n,{of:h})]})}),`
`,e.jsx(s.h3,{id:"large",children:"Large"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"large"})," size within a hero banner, or as the main action on the page."]}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:v}),e.jsx(n,{of:T}),e.jsx(n,{of:k}),e.jsx(n,{of:D})]})}),`
`,e.jsx(s.h2,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Where possible, avoid using disabled toggles as they are invisible to screen readers and present accessibility concerns."}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i,{style:{display:"flex",gridGap:"var(--size__2)"},children:[e.jsx(n,{of:S}),e.jsx(n,{of:z}),e.jsx(n,{of:q}),e.jsx(n,{of:M})]})}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(m,{})]})}}export{J as default};
//# sourceMappingURL=Toggle-70d69fe1.js.map