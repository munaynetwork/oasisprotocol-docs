"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4502],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5797:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Setup",p={unversionedId:"usage/setup",id:"usage/setup",title:"Setup",description:"Oasis Core Ledger is currently only supported on x86_64 Linux and macOS systems.",source:"@site/external/oasis-core-ledger/docs/usage/setup.md",sourceDirName:"usage",slug:"/usage/setup",permalink:"/oasis-core-ledger/usage/setup",draft:!1,tags:[],version:"current",lastUpdatedAt:1648153797,formattedLastUpdatedAt:"3/24/2022",frontMatter:{},sidebar:"oasisSdk",previous:{title:"Oasis Core Ledger Documentation",permalink:"/oasis-core-ledger/"},next:{title:"Obtaining Account Address",permalink:"/oasis-core-ledger/usage/address"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Oasis Core Ledger CLI",id:"oasis-core-ledger-cli",level:3},{value:"Ledger Signer Plugin",id:"ledger-signer-plugin",level:3},{value:"Downloading a Binary Release",id:"downloading-a-binary-release",level:2},{value:"Building From Source",id:"building-from-source",level:2},{value:"Adding <code>oasis-core-ledger</code> Binary to <code>PATH</code>",id:"adding-oasis-core-ledger-binary-to-path",level:2},{value:"Remembering Path to <code>ledger-signer</code> Plugin",id:"remembering-path-to-ledger-signer-plugin",level:2},{value:"Installing Oasis App on Your Ledger Wallet",id:"installing-oasis-app-on-your-ledger-wallet",level:2}],c={toc:m};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup"},"Setup"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Oasis Core Ledger is currently only supported on x86_64 Linux and macOS systems."))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"oasis-core-ledger-cli"},"Oasis Core Ledger CLI"),(0,i.kt)("p",null,"There are no special requirements for running the Oasis Core Ledger CLI."),(0,i.kt)("h3",{id:"ledger-signer-plugin"},"Ledger Signer Plugin"),(0,i.kt)("p",null,"You will need an appropriate version Oasis Node CLI installed your system."),(0,i.kt)("p",null,"For more details, see the ",(0,i.kt)("a",{parentName:"p",href:"/general/run-a-node/prerequisites/oasis-node"},"Oasis Node")," documentation in the general\n",(0,i.kt)("a",{parentName:"p",href:"/"},"Oasis Docs"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, there are no binary releases of the Oasis Node CLI for macOS systems."),(0,i.kt)("p",{parentName:"div"},"To be able to use the Ledger signer plugin on a macOS system, you will need to\n",(0,i.kt)("a",{parentName:"p",href:"/general/run-a-node/prerequisites/oasis-node#building-from-source"},"build the Oasis Node CLI from source"),"."))),(0,i.kt)("h2",{id:"downloading-a-binary-release"},"Downloading a Binary Release"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core-ledger/releases"},"Oasis Core Ledger's GitHub Releases page")," and download the latest\nversion."),(0,i.kt)("h2",{id:"building-from-source"},"Building From Source"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO: Link to Development docs once they exist.")),(0,i.kt)("h2",{id:"adding-oasis-core-ledger-binary-to-path"},"Adding ",(0,i.kt)("inlineCode",{parentName:"h2"},"oasis-core-ledger")," Binary to ",(0,i.kt)("inlineCode",{parentName:"h2"},"PATH")),(0,i.kt)("p",null,"To install the ",(0,i.kt)("inlineCode",{parentName:"p"},"oasis-core-ledger")," binary for the current user, copy/symlink it\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.local/bin"),"."),(0,i.kt)("p",null,"To install the ",(0,i.kt)("inlineCode",{parentName:"p"},"oasis-core-ledger")," binary for all users of the system, copy it\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),"."),(0,i.kt)("h2",{id:"remembering-path-to-ledger-signer-plugin"},"Remembering Path to ",(0,i.kt)("inlineCode",{parentName:"h2"},"ledger-signer")," Plugin"),(0,i.kt)("p",null,"For convenience, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"LEDGER_SIGNER_PATH")," to the location of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ledger-signer")," binary, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'LEDGER_SIGNER_PATH="$HOME/oasis_core_ledger_1.0.0_linux_amd64/ledger-signer"\n')),(0,i.kt)("h2",{id:"installing-oasis-app-on-your-ledger-wallet"},"Installing Oasis App on Your Ledger Wallet"),(0,i.kt)("p",null,"The recommended way to install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-oasis"},"Oasis app")," on your Ledger wallet is to\ninstall it via ",(0,i.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live/"},"Ledger Live"),"'s Manager."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, you will have enable ",(0,i.kt)("em",{parentName:"p"},"Developer mode")," by going to\n",(0,i.kt)("em",{parentName:"p"},"Settings -> Experimental features"),", to be able to find the Oasis app in\nLedger Live's Manager."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To be able to install the current version (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LedgerHQ/app-oasis/releases/tag/v2.3.2"},"version 2.3.2"),") of the Oasis app,\nthe firmware on your Ledger wallet needs to be up-to-date:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"At least ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360010446000-Ledger-Nano-S-firmware-release-notes"},"version 2.1.0")," released on Nov 30, 2021 on a\nNano S device."),(0,i.kt)("li",{parentName:"ul"},"At least ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360014980580-Ledger-Nano-X-firmware-release-notes"},"version 2.0.0")," released on Oct 21, 2021 on a\nNano X device.")),(0,i.kt)("p",{parentName:"div"},"Follow Ledger's instructions for updating the firmware on your Ledger wallet:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware"},"Nano S")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800"},"Nano X"))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To find the Oasis app in the Ledger Live app store, go to the App catalog\nsearch bar and type in ",(0,i.kt)("em",{parentName:"p"},"Oasis"),"."),(0,i.kt)("p",{parentName:"div"},"You may see both the ",(0,i.kt)("em",{parentName:"p"},"Oasis")," app and the ",(0,i.kt)("em",{parentName:"p"},"OasisVal")," app come up in the search\nresults. You need to use the standard ",(0,i.kt)("em",{parentName:"p"},"Oasis")," app."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Oasis app in Ledger Live",src:a(6932).Z,width:"2090",height:"1448"})))),(0,i.kt)("p",null,"Once installed, the Oasis app will use the generated mnemonic stored on the\nLedger wallet to generate the private & public key pairs for your accounts."))}u.isMDXComponent=!0},6932:function(e,t,a){t.Z=a.p+"assets/images/ledger-live-manager-oasis-c2e03e9ceb8fe81107faa3b8a175f837.png"}}]);