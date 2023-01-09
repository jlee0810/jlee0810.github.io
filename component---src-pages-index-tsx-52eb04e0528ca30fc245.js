"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{2978:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});var n={};r.r(n),r.d(n,{exclude:function(){return F},extract:function(){return w},parse:function(){return k},parseUrl:function(){return Z},pick:function(){return I},stringify:function(){return v},stringifyUrl:function(){return j}});var o=r(7294);const a="%[a-f0-9]{2}",i=new RegExp("("+a+")|([^%]+?)","gi"),s=new RegExp("("+a+")+","gi");function l(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],l(r),l(n))}function c(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let r=1;r<t.length;r++)t=(e=l(t,r).join("")).match(i)||[];return e}}function u(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=s.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=c(r[0]);e!==r[0]&&(t[r[0]]=e)}r=s.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function p(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function d(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const f=Symbol("encodeFragmentIdentifier");function g(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function y(e,t){return t.decode?u(e):e}function x(e){return Array.isArray(e)?e.sort():"object"==typeof e?x(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function h(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function w(e){const t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function k(e,t){g((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&y(r,e).includes(e.arrayFormatSeparator);r=a?y(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>y(t,e))):null===r?r:y(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?y(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>y(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=p(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:y(i,t),r(y(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=b(r,t);else n[o]=b(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=x(r):e[t]=r,e}),Object.create(null))}function v(e,t){if(!e)return"";g((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[m(t,e),"[",o,"]"].join("")]:[...r,[m(t,e),"[",m(o,e),"]=",m(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[m(t,e),"[]"].join("")]:[...r,[m(t,e),"[]=",m(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[m(t,e),":list="].join("")]:[...r,[m(t,e),":list=",m(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,e),t,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,m(t,e)]:[...r,[m(t,e),"=",m(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?m(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":o.reduce(n(r),[]).join("&"):m(r,t)+"="+m(o,t)})).filter((e=>e.length>0)).join("&")}function Z(e,t){t={decode:!0,...t};let[r,n]=p(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:k(w(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:y(n,t)}:{}}}function j(e,t){t={encode:!0,strict:!0,[f]:!0,...t};const r=h(e.url).split("?")[0]||"";let n=v({...k(w(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[f]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function I(e,t,r){r={parseFragmentIdentifier:!0,[f]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=Z(e,r);return j({url:n,query:d(o,t),fragmentIdentifier:a},r)}function F(e,t,r){return I(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var O=n,E=r(6450),S=r(4316),C=r(1883),R=r(917);const A=(0,S.Z)("div",{target:"e1kn8q5k1"})({name:"d6qj2j",styles:"display:flex;flex-wrap:wrap;width:768px;margin:50px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),N=(0,S.Z)((e=>{let{active:t,...r}=e;return(0,R.tZ)(C.rU,r)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:15px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var U=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,R.tZ)(A,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,R.tZ)(N,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},$=r(3723);const z=(0,S.Z)($.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var L=function(e){let{profileImage:t}=e;return(0,R.tZ)(z,{image:t,alt:"Profile Image"})};const q=(0,S.Z)("div",{target:"e160b013"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),P=(0,S.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),M=(0,S.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),D=(0,S.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var _=function(e){let{profileImage:t}=e;return(0,R.tZ)(q,null,(0,R.tZ)(P,null,(0,R.tZ)(L,{profileImage:t}),(0,R.tZ)("div",null,(0,R.tZ)(M,null,"Nice to Meet You,"),(0,R.tZ)(D,null,"I'm Eric Lee."))))},B=r(7462);var T=function(e,t){const r=(0,o.useRef)(null),n=(0,o.useRef)(null),{0:a,1:i}=(0,o.useState)(1),s=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,o.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>i(1)),[e]),(0,o.useEffect)((()=>{10*a>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,10*a)}};const G=(0,S.Z)(C.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),K=(0,S.Z)($.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),Y=(0,S.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),H=(0,S.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),J=(0,S.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),Q=(0,S.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),V=(0,S.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),W=(0,S.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var X=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,R.tZ)(G,{to:i},(0,R.tZ)(K,{image:a,alt:"Post Item Image"}),(0,R.tZ)(Y,null,(0,R.tZ)(H,null,t),(0,R.tZ)(J,null,r),(0,R.tZ)(Q,null,n.map((e=>(0,R.tZ)(V,{key:e},e)))),(0,R.tZ)(W,null,o)))};const ee=(0,S.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var te=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:o}=T(t,r);return(0,R.tZ)(ee,{ref:n},o.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,R.tZ)(X,(0,B.Z)({},n,{link:r,key:t}))})))};var re=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:s},publicURL:l}}}=e;const c=O.parse(t),u="string"==typeof c.category&&c.category?c.category:"All",p=(0,o.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,R.tZ)(E.Z,{title:r,description:n,url:a,image:l},(0,R.tZ)(_,{profileImage:s}),(0,R.tZ)(U,{selectedCategory:u,categoryList:p}),(0,R.tZ)(te,{selectedCategory:u,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-52eb04e0528ca30fc245.js.map