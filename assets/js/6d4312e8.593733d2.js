"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6584],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1564:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),o=a(9960),s=a(3438),i=a(3919),l=a(5999),c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){var t=e.href,a=e.children;return n.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",c)},a)}function f(e){var t=e.href,a=e.icon,o=e.title,s=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:o},a," ",o),s&&n.createElement("p",{className:(0,r.Z)("text--truncate",p),title:s},s))}function m(e){var t=e.item,a=(0,s.Wl)(t);return a?n.createElement(f,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t,a=e.item,r=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(f,{href:a.href,icon:r,title:a.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}},9268:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),o=a(3438),s=a(1564);function i(e){var t=e.items,a=e.className;return n.createElement("section",{className:(0,r.Z)("row",a)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(s.Z,{key:t,item:e}))})))}},8452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(9268),i=a(3438),l=["components"],c={description:"This document provides an overview of how to use the official Oasis Wallets: a non-custodial web wallet and a non-custodial browser extension that connect to the Oasis Network."},u="Oasis Wallets",p={unversionedId:"manage-tokens/oasis-wallets/README",id:"manage-tokens/oasis-wallets/README",title:"Oasis Wallets",description:"This document provides an overview of how to use the official Oasis Wallets: a non-custodial web wallet and a non-custodial browser extension that connect to the Oasis Network.",source:"@site/docs/general/manage-tokens/oasis-wallets/README.mdx",sourceDirName:"manage-tokens/oasis-wallets",slug:"/manage-tokens/oasis-wallets/",permalink:"/general/manage-tokens/oasis-wallets/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/manage-tokens/oasis-wallets/README.mdx",tags:[],version:"current",lastUpdatedAt:1656660481,formattedLastUpdatedAt:"7/1/2022",frontMatter:{description:"This document provides an overview of how to use the official Oasis Wallets: a non-custodial web wallet and a non-custodial browser extension that connect to the Oasis Network."},sidebar:"docs",previous:{title:"Staking and Delegating",permalink:"/general/manage-tokens/staking-and-delegating"},next:{title:"Web",permalink:"/general/manage-tokens/oasis-wallets/web"}},d={},f=[{value:"<strong>What are the official Oasis Wallets?</strong>",id:"what-are-the-official-oasis-wallets",level:2},{value:"Where to find the official Oasis Wallets?",id:"where-to-find-the-official-oasis-wallets",level:2},{value:"<strong>Wallet features</strong>",id:"wallet-features",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],m={toc:f};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oasis-wallets"},"Oasis Wallets"),(0,o.kt)("h2",{id:"what-are-the-official-oasis-wallets"},(0,o.kt)("strong",{parentName:"h2"},"What are the official Oasis Wallets?")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://oasisprotocol.org"},"Oasis Foundation")," supports two first-party non-custodial wallets, a ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.oasisprotocol.org"},"web wallet")," named ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-wallet-web/"},"Oasis Wallet -Web")," and a browser extension wallet named Oasis Wallet - Browser Extension. Both seamlessly connect to the ",(0,o.kt)("a",{parentName:"p",href:"/general/oasis-network/overview"},"Oasis Network")," and makes it easy to hold, send, and receive ROSE tokens."),(0,o.kt)("p",null,"These products are fully open source, built from the ground up by Oasis community developers, with funding from the Oasis Foundation\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/community/discussions/13"},"ROSE Bloom Grants Program"),". Both have also gone through multiple internal audits from the Oasis Foundation and ",(0,o.kt)("a",{parentName:"p",href:"https://oasislabs.com"},"Oasis Labs")," teams and are currently going through an external audit as well."),(0,o.kt)("h2",{id:"where-to-find-the-official-oasis-wallets"},"Where to find the official Oasis Wallets?"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-wallet-web/"},"Oasis Wallet - Web")," can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.oasisprotocol.org"},"wallet.oasisprotocol.org"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-wallet-ext"},"Oasis Wallet - Browser Extension")," can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/oasis-wallet/ppdadbejkmjnefldpcdjhnkpbjkikoip"},"Chrome Web Store"),"."),(0,o.kt)("h2",{id:"wallet-features"},(0,o.kt)("strong",{parentName:"h2"},"Wallet features")),(0,o.kt)("p",null,"The Oasis Wallets currently support the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating a new wallet (with a user friendly mnemonic recovery phrase)"),(0,o.kt)("li",{parentName:"ul"},"Accessing an existing wallet using a mnemonic recovery phrase, private key, or a ",(0,o.kt)("a",{parentName:"li",href:"https://www.ledger.com"},"Ledger")," device"),(0,o.kt)("li",{parentName:"ul"},"Viewing transaction history"),(0,o.kt)("li",{parentName:"ul"},"Submitting new transactions"),(0,o.kt)("li",{parentName:"ul"},"Managing multiple accounts"),(0,o.kt)("li",{parentName:"ul"},"Toggling between light mode and dark mode (Web variant)"),(0,o.kt)("li",{parentName:"ul"},"Selecting a language for the UI (currently, English and French fort the Web variant, English and Chinese for the Browser Extension variant)"),(0,o.kt)("li",{parentName:"ul"},"Staking and receiving staking rewards"),(0,o.kt)("li",{parentName:"ul"},"Easily switching between different Oasis Wallets that use the same ",(0,o.kt)("a",{parentName:"li",href:"/adrs/0008-standard-account-key-generation"},"ADR 0008")," standard account key generation process")),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("p",null,"This has moved to a separate ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/faq"},"FAQ section"),"."),(0,o.kt)(s.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);