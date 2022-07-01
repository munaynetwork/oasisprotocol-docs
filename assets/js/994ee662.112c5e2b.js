"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1932],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={description:"Staking and Delegation on the Oasis Network is a wonderful way to hold your ROSE tokens. A few key resources to get started!"},l="Staking and Delegating",d={unversionedId:"manage-tokens/staking-and-delegating",id:"manage-tokens/staking-and-delegating",title:"Staking and Delegating",description:"Staking and Delegation on the Oasis Network is a wonderful way to hold your ROSE tokens. A few key resources to get started!",source:"@site/docs/general/manage-tokens/staking-and-delegating.md",sourceDirName:"manage-tokens",slug:"/manage-tokens/staking-and-delegating",permalink:"/general/manage-tokens/staking-and-delegating",draft:!1,editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/manage-tokens/staking-and-delegating.md",tags:[],version:"current",lastUpdatedAt:1656660481,formattedLastUpdatedAt:"7/1/2022",frontMatter:{description:"Staking and Delegation on the Oasis Network is a wonderful way to hold your ROSE tokens. A few key resources to get started!"},sidebar:"docs",previous:{title:"Terminology",permalink:"/general/manage-tokens/terminology"},next:{title:"Oasis Wallets",permalink:"/general/manage-tokens/oasis-wallets/"}},c={},p=[{value:"Rewards and Tokenomics",id:"rewards-and-tokenomics",level:2},{value:"How to Stake and Delegate",id:"how-to-stake-and-delegate",level:2},{value:"Tools to use for Staking and Delegation",id:"tools-to-use-for-staking-and-delegation",level:3},{value:"Verify your Staking and Delegations",id:"verify-your-staking-and-delegations",level:3},{value:"Run your own Node",id:"run-your-own-node",level:3}],u={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staking-and-delegating"},"Staking and Delegating"),(0,r.kt)("h2",{id:"rewards-and-tokenomics"},"Rewards and Tokenomics"),(0,r.kt)("p",null,"Staking rewards vary over the course of the Network. In the first four years rewards will range between 20-2% over time. More ",(0,r.kt)("a",{parentName:"p",href:"/oasis-network-primer/token-metrics-and-distribution#staking-incentives"},"here"),"."),(0,r.kt)("h2",{id:"how-to-stake-and-delegate"},"How to Stake and Delegate"),(0,r.kt)("p",null,"The Oasis Network is supported by an amazing community of validators and infrastructure providers. Many provide services to help you set up your own validator node and/or make delegation easy."),(0,r.kt)("h3",{id:"tools-to-use-for-staking-and-delegation"},"Tools to use for Staking and Delegation"),(0,r.kt)("p",null,"In addition to using the ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/"},"Oasis CLI")," for generating the ",(0,r.kt)("inlineCode",{parentName:"p"},"staking.AddEscrow")," transaction, there is a number of wallets and custodians that support staking and delegation on the Oasis Network. Those include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/general/manage-tokens/oasis-wallets/web"},"Oasis Wallet - Web")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/general/manage-tokens/oasis-wallets/browser-extension"},"Oasis Wallet - Browser Extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/general/manage-tokens/staking-and-delegating#rewards-and-tokenonomics"},"Copper.co")," (custodian)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://anchorage.com"},"Anchorage")," (custodian)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://finoa.io"},"Finoa")," (custodian)")),(0,r.kt)("p",null,"You can obtain the list of active validators including their fee and contact information at the Oasis block explorers such as the ",(0,r.kt)("a",{parentName:"p",href:"https://www.oasisscan.com/validators"},"Oasis Scan")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://oasismonitor.com/validators"},"Oasis Monitor"),". The wallets will also obtain that list from one of the block explorers so you can easily browse through the validators and select the one that you prefer."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some validators prefer anonymity and they do not list their name or any contact information. In this case only their entity's Oasis address is shown."))),(0,r.kt)("p",null,"You can stop staking and reclaim your tokens at any time. This can be done with a CLI tool or any of the wallets mentioned above. After sending the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"staking.ReclaimEscrow")," transaction, your tokens will, to ensure the network security and robustness, enter the ",(0,r.kt)("strong",{parentName:"p"},"debonding period")," defined in the ",(0,r.kt)("a",{parentName:"p",href:"/general/oasis-network/network-parameters"},"genesis")," document. Currently, this period is 336 epochs (around 14 days) and no staking rewards are earned for the duration of this period. Afterwards your ROSE will be free to use."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Staking your ROSE is a different transaction than sending them!")," When you stake your tokens (",(0,r.kt)("inlineCode",{parentName:"p"},"staking.Escrow")," transaction), you can reclaim them at any time. Sending your tokens (",(0,r.kt)("inlineCode",{parentName:"p"},"staking.Transfer")," transaction) on the other hand means that the ",(0,r.kt)("strong",{parentName:"p"},"receiver will own the tokens and there is no way of retrieving that tokens back by yourself"),"."),(0,r.kt)("p",{parentName:"div"},"If you happen to send your tokens to the validator instead of staking them, try contacting the validator via email or other channels listed on the block explorers and kindly ask them to send the tokens back to you. Know that it is completely up to them to send the tokens back and there is no other mechanism of doing it."))),(0,r.kt)("h3",{id:"verify-your-staking-and-delegations"},"Verify your Staking and Delegations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"https://www.oasisscan.com"},"Oasis Scan block explorer")," and verify your Staking (Escrow) by entering your ",(0,r.kt)("inlineCode",{parentName:"li"},"oasis1"),' wallet address. Check the "Amount" column in the "Escrow Active" section to see all your active ROSE delegations.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account details of entered oasis1 address in Oasis Scan",src:n(162).Z,width:"2460",height:"1426"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alternatively, you can use the ",(0,r.kt)("a",{parentName:"li",href:"https://wallet.oasisprotocol.org"},"Oasis Web Wallet"),", to verify the status of your delegations.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account details of searched oasis1 address in Official Web Wallet",src:n(4129).Z,width:"3828",height:"1888"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You don't need to open your wallet, you can just search your ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis1")," address."))),(0,r.kt)("h3",{id:"run-your-own-node"},"Run your own Node"),(0,r.kt)("p",null,"If you're interested in running your own node and become a validator you can get started ",(0,r.kt)("a",{parentName:"p",href:"/general/run-a-node/node-operator-overview"},"here"),". Be sure to ",(0,r.kt)("a",{parentName:"p",href:"/general/oasis-network/connect-with-us#social-media-channels"},"join the ",(0,r.kt)("strong",{parentName:"a"},"#node-operators")," channel on Discord and sign up for the node operator mailing list"),"!"))}m.isMDXComponent=!0},162:function(e,t,n){t.Z=n.p+"assets/images/oasisscan_account_details-bd8029bbdbc2c40a8e77d88b2d1704a3.png"},4129:function(e,t,n){t.Z=n.p+"assets/images/active_delegations-a55b62fb3daf033480420b6e0992b796.png"}}]);