import{a as e,n as t,r as n,t as r}from"./jsx-runtime-CcMoaKX1.js";import{r as i,t as a}from"./demo-D6uYajSR.js";var o=t(),s=e(i(),1),c=r(),l=e=>{let t=(0,o.c)(11),{bool:n,onChange:r,disabled:i}=e,a=i===void 0?!1:i,l;t[0]!==n||t[1]!==r?(l=()=>{r(!n)},t[0]=n,t[1]=r,t[2]=l):l=t[2];let u=l,d;t[3]===n?d=t[4]:(d=(0,s.default)(`wa-switch`,{"wa-checked":n}),t[3]=n,t[4]=d);let f;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,c.jsx)(`span`,{className:`wa-span`}),t[5]=f):f=t[5];let p;return t[6]!==n||t[7]!==a||t[8]!==u||t[9]!==d?(p=(0,c.jsx)(`div`,{children:(0,c.jsx)(`button`,{className:d,onClick:u,disabled:a,role:`switch`,"aria-checked":n,children:f})}),t[6]=n,t[7]=a,t[8]=u,t[9]=d,t[10]=p):p=t[10],p},u=e(n(),1),d=()=>{let e=(0,o.c)(3),t=e=>{i(e)},[n,r]=(0,u.useState)(!1),i=r,a;return e[0]!==n||e[1]!==t?(a=(0,c.jsx)(`div`,{children:(0,c.jsx)(l,{bool:n,onChange:t})}),e[0]=n,e[1]=t,e[2]=a):a=e[2],a},f=`import Switch from "../lib/switch";\r
import { useState } from 'react';\r
const SwitchDemo = () => {\r
    const onChange = (bool: boolean) => {\r
        setBool(bool)\r
    }\r
    const [bool, setBool] = useState<boolean>(false);\r
    return (\r
        <div>\r
            <Switch bool={bool} onChange={onChange} />\r
        </div>\r
\r
    )\r
}\r
\r
export default SwitchDemo;`,p=()=>{let e=(0,o.c)(4),t=e=>{i(e)},[n,r]=(0,u.useState)(!1),i=r,[a]=(0,u.useState)(!0),s;return e[0]!==n||e[1]!==a||e[2]!==t?(s=(0,c.jsx)(`div`,{children:(0,c.jsx)(l,{bool:n,onChange:t,disabled:a})}),e[0]=n,e[1]=a,e[2]=t,e[3]=s):s=e[3],s},m=`import Switch from "../lib/switch";\r
import { useState } from 'react';\r
const SwitchDemo = () => {\r
    const onChange = (bool: boolean) => {\r
        setBool(bool)\r
    }\r
    const [bool, setBool] = useState(false);\r
    const [disabled , _setDisabled] = useState(true);\r
    return (\r
        <div>\r
            <Switch bool={bool} onChange={onChange} disabled ={disabled} />\r
        </div>\r
\r
    )\r
}\r
\r
export default SwitchDemo;`;function h(){let e=(0,o.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h1`,{children:`Switch 组件示例`}),(0,c.jsx)(a,{title:`常规用法`,component:d,codeString:f}),(0,c.jsx)(a,{title:`支持 disabled`,component:p,codeString:m})]}),e[0]=t):t=e[0],t}export{h as default};