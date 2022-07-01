"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2565],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1564:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7294),i=r(6010),o=r(9960),a=r(3438),c=r(3919),s=r(5999),u="cardContainer_fWXF",l="cardTitle_rnsV",d="cardDescription_PWke";function p(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function f(e){var t=e.href,r=e.icon,o=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:a},a))}function m(e){var t=e.item,r=(0,a.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,r=e.item,i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:i,title:r.label,description:null==o?void 0:o.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}},9268:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),i=r(6010),o=r(3438),a=r(1564);function c(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(a.Z,{key:t,item:e}))})))}},1860:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(9268),c=r(3438),s=["components"],u={},l="Prerequisites",d={unversionedId:"run-a-node/prerequisites/README",id:"run-a-node/prerequisites/README",title:"Prerequisites",description:"This sections lists hardware and software prerequisites for running an Oasis node.",source:"@site/docs/general/run-a-node/prerequisites/README.mdx",sourceDirName:"run-a-node/prerequisites",slug:"/run-a-node/prerequisites/",permalink:"/general/run-a-node/prerequisites/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/run-a-node/prerequisites/README.mdx",tags:[],version:"current",lastUpdatedAt:1656660481,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/general/run-a-node/node-operator-overview"},next:{title:"Hardware Requirements",permalink:"/general/run-a-node/prerequisites/hardware-recommendations"}},p={},f=[],m={toc:f};function y(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This sections lists hardware and software prerequisites for running an Oasis node."),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);