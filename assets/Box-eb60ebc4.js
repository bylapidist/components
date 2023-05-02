import{j as e}from"./index-7b9c9cf8.js";import{M as c,S as l,C as o,a as s,A as h}from"./index-d760905b.js";import{B as a,N as x,S as j,M as u,L as g,a as m,b as p,c as v,d as b}from"./Box.stories-f2e67b38.js";import{u as d}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-e033fa9a.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-73280096.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-2be0596f.js";import"./index-f04bfafc.js";function z(t={}){const{wrapper:r}=Object.assign({},d(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",code:"code",h3:"h3"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"box",children:"Box"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`A primitive for controlling gutters and elevation. Use boxes to establish a consistent approach to constructing more
complicated components, ensuring their paddings and shadows are aligned with the theme. This can be used as a wrapping element
for compound components and its prop API included to give the component gutter and shadow support.`}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{dark:!0}),`
`,e.jsx(n.h2,{id:"controlling-gutter",children:"Controlling gutter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"gutter"}),", ",e.jsx(n.code,{children:"gutterX"}),", and ",e.jsx(n.code,{children:"gutterY"}),` props controls the padding of the box. There are four available gutters,
defined as `,e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", and ",e.jsx(n.code,{children:"large"}),"."]}),`
`,e.jsx(n.h3,{id:"none",children:"None"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"gutter"}),", ",e.jsx(n.code,{children:"gutterX"})," or ",e.jsx(n.code,{children:"gutterY"})," to ",e.jsx(n.code,{children:"none"})," sets the gutter to ",e.jsx(n.code,{children:"var(--size__0)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:x})}),`
`,e.jsx(n.h3,{id:"small",children:"Small"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"gutter"}),", ",e.jsx(n.code,{children:"gutterX"})," or ",e.jsx(n.code,{children:"gutterY"})," to ",e.jsx(n.code,{children:"small"})," sets the gutter to ",e.jsx(n.code,{children:"var(--size__1)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:j})}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"gutter"}),", ",e.jsx(n.code,{children:"gutterX"})," or ",e.jsx(n.code,{children:"gutterY"})," to ",e.jsx(n.code,{children:"medium"})," sets the gutter to ",e.jsx(n.code,{children:"var(--size__2)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:u})}),`
`,e.jsx(n.h3,{id:"large",children:"Large"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"gutter"}),", ",e.jsx(n.code,{children:"gutterX"})," or ",e.jsx(n.code,{children:"gutterY"})," to ",e.jsx(n.code,{children:"large"})," sets the gutter to ",e.jsx(n.code,{children:"var(--size__3)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:g})}),`
`,e.jsx(n.h2,{id:"controlling-elevation",children:"Controlling elevation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"elevation"}),` props controls shadow of the box. There are four available elevations,
defined as `,e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", and ",e.jsx(n.code,{children:"large"}),"."]}),`
`,e.jsx(n.h3,{id:"none-1",children:"None"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"elevation"}),", to ",e.jsx(n.code,{children:"none"})," sets the elevation to ",e.jsx(n.code,{children:"var(--elevation__none)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:m})}),`
`,e.jsx(n.h3,{id:"small-1",children:"Small"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"elevation"}),", to ",e.jsx(n.code,{children:"small"})," sets the elevation to ",e.jsx(n.code,{children:"var(--elevation__lower)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:p})}),`
`,e.jsx(n.h3,{id:"medium-1",children:"Medium"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"elevation"}),", to ",e.jsx(n.code,{children:"medium"})," sets the elevation to ",e.jsx(n.code,{children:"var(--elevation__higher)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:v})}),`
`,e.jsx(n.h3,{id:"large-1",children:"Large"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Setting ",e.jsx(n.code,{children:"elevation"}),", to ",e.jsx(n.code,{children:"large"})," sets the elevation to ",e.jsx(n.code,{children:"var(--elevation__highest)"})]}),`
`]}),`
`,e.jsx(o,{children:e.jsx(s,{of:b})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(h,{})]})}}export{z as default};
//# sourceMappingURL=Box-eb60ebc4.js.map
