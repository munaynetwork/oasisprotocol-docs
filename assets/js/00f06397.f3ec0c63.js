"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3041],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6837:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={description:"An overview of Oasis Network Architecture and Key Technological Benefits"},l="Overview of the Oasis Network",c={unversionedId:"oasis-network/overview",id:"oasis-network/overview",title:"Overview of the Oasis Network",description:"An overview of Oasis Network Architecture and Key Technological Benefits",source:"@site/docs/general/oasis-network/overview.md",sourceDirName:"oasis-network",slug:"/oasis-network/overview",permalink:"/general/oasis-network/overview",draft:!1,editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/oasis-network/overview.md",tags:[],version:"current",lastUpdatedAt:1656660481,formattedLastUpdatedAt:"7/1/2022",frontMatter:{description:"An overview of Oasis Network Architecture and Key Technological Benefits"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/general/"},next:{title:"Network Parameters",permalink:"/general/oasis-network/network-parameters"}},p={},u=[{value:"Technology Highlights",id:"technology-highlights",level:2},{value:"Benefits of the Oasis Network Technology Stack",id:"benefits-of-the-oasis-network-technology-stack",level:2},{value:"Scalability",id:"scalability",level:3},{value:"Privacy-First",id:"privacy-first",level:3},{value:"Versatility",id:"versatility",level:3}],d={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview-of-the-oasis-network"},"Overview of the Oasis Network"),(0,o.kt)("p",null,"The Oasis Network is a Layer 1 decentralized blockchain network designed to be uniquely scalable, privacy-first and versatile."),(0,o.kt)("p",null,"The Network has two main architectural components, the Consensus Layer and the ParaTime Layer."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Consensus Layer")," is a scalable, high-throughput, secure, proof-of-stake consensus run by a decentralized set of validator nodes."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"ParaTime Layer")," hosts many parallel runtimes (ParaTimes), each representing a replicated compute environment with shared state.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Oasis architectural design including ParaTime and Consensus Layers",src:a(1066).Z,width:"700",height:"310"})),(0,o.kt)("h2",{id:"technology-highlights"},"Technology Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Separates consensus and execution into two layers")," \u2014 the Consensus Layer and The ParaTime Layer \u2014 for better scalability and increased versatility.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Separation of consensus and execution allows ",(0,o.kt)("strong",{parentName:"p"},"multiple ParaTimes to process transactions in parallel"),", meaning complex workloads processed on one ParaTime won\u2019t slow down faster, simpler transactions on another.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ParaTime Layer is entirely decentralized, allowing ",(0,o.kt)("strong",{parentName:"p"},"anyone to develop and build their own ParaTime"),". Each ParaTime can be developed in isolation to meet the needs of a specific application, such as confidential compute, open or closed committees, and more.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The network\u2019s sophisticated discrepancy detection makes Oasis ",(0,o.kt)("strong",{parentName:"p"},"more efficient than sharding and parachains")," \u2014 requiring a smaller replication factor for the same level of security.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The network has broad support for confidential computing technology"),". The Oasis Eth/WASI Runtime is an open source example of a confidential ParaTime that uses secure enclaves to keep data private while being processed."))),(0,o.kt)("h2",{id:"benefits-of-the-oasis-network-technology-stack"},"Benefits of the Oasis Network Technology Stack"),(0,o.kt)("h3",{id:"scalability"},"Scalability"),(0,o.kt)("p",null,"The Oasis Network\u2019s impressive scalability is achieved through a cutting-edge set of features that provide faster transaction speeds and higher throughput than other networks. The top-tier performance of the network is largely due to its separation of compute and consensus operations into the Consensus Layer and ParaTime Layer. This separation allows multiple ParaTimes to process transactions in parallel, meaning complex workloads processed on one ParaTime won\u2019t slow down faster, simpler transactions on another. Plus, the network\u2019s sophisticated discrepancy detection makes Oasis more efficient than sharding and parachains \u2014 requiring a smaller replication factor for the same level of security."),(0,o.kt)("h3",{id:"privacy-first"},"Privacy-First"),(0,o.kt)("p",null,"The Oasis Network designed the first ever confidential ParaTime with support for confidential smart contracts. In a confidential ParaTime, nodes are required to use a type of secure computing technology called a TEE (Trusted Execution Environment.) TEEs act as a hypothetical black box for smart contract execution in a confidential ParaTime. Encrypted data goes into the black box along with the smart contract, data is decrypted, processed by the smart contract, and then encrypted before it is sent out of the TEE. This process ensures that data remains confidential, and is never leaked to the node operator or application developer"),(0,o.kt)("p",null,"The Oasis Eth/WASI Runtime is an open source example of a confidential ParaTime that uses Intel SGX. Other secure compute technology, such as ZKP, HE, or other secure enclaves, can also be used. In the future we hope to support additional computation techniques such as secure multi-party compute, federated learning and more."),(0,o.kt)("p",null,"Confidentiality unlocks a range of new use cases on blockchain by allowing personal or sensitive data, such as their social security number, bank statements, health information to be used by apps on the Oasis Network \u2014 something incredibly risky on other Layer 1 networks."),(0,o.kt)("h3",{id:"versatility"},"Versatility"),(0,o.kt)("p",null,"Designed to support the next generation of blockchain applications, the Oasis Network is incredibly versatile, agile, and customizable. Namely, each ParaTime can be developed in isolation to meet the needs of a specific application. ParaTimes committees can be made large or small, open or closed, allowing for faster or more secure execution depending on the requirements of a particular use case. Nodes can be required to have specific hardware, such as Secure Enclaves in a confidential ParaTime. Each ParaTime can similarly run different Runtime VMs (ParaTime Engines) such as EVM backwards compatible engine, Rust based smart contract language, or a Data tokenization engine. Finally to support enterprise and developer use cases, ParaTimes can be made Permissioned or Permissionless \u2014 allowing consortiums to have their own closed ParaTime, or communities to have full decentralized open ParaTimes."),(0,o.kt)("p",null,"The versatility of the ParaTime Layer allows the Oasis Network to expand and grow to address a broad set of new and exciting use cases, while still maintaining the same core ledger and consensus layer."))}h.isMDXComponent=!0},1066:function(e,t,a){t.Z=a.p+"assets/images/technology_scalability-c55141c8d0a13269dd55ce074305cdac.svg"}}]);