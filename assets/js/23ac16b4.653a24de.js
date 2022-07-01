"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1156],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Random Beacon",p={unversionedId:"consensus/services/beacon",id:"consensus/services/beacon",title:"Random Beacon",description:"The random beacon service is responsible for providing a source of unbiased",source:"@site/external/oasis-core/docs/consensus/services/beacon.md",sourceDirName:"consensus/services",slug:"/consensus/services/beacon",permalink:"/oasis-core/consensus/services/beacon",draft:!1,tags:[],version:"current",lastUpdatedAt:1655201825,formattedLastUpdatedAt:"6/14/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Epoch Time",permalink:"/oasis-core/consensus/services/epochtime"},next:{title:"Staking",permalink:"/oasis-core/consensus/services/staking"}},c={},u=[{value:"Operation",id:"operation",level:2},{value:"Commit Phase",id:"commit-phase",level:3},{value:"Reveal Phase",id:"reveal-phase",level:3},{value:"Complete (Transition Wait) Phase",id:"complete-transition-wait-phase",level:3},{value:"Methods",id:"methods",level:2},{value:"PVSS Commit",id:"pvss-commit",level:3},{value:"PVSS Reveal",id:"pvss-reveal",level:3},{value:"Consensus Parameters",id:"consensus-parameters",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"random-beacon"},"Random Beacon"),(0,r.kt)("p",null,"The random beacon service is responsible for providing a source of unbiased\nrandomness on each epoch. It uses a commit-reveal scheme backed by a PVSS scheme\nsuch that as long as the threshold of participants is met, and one participant\nis honest, secure entropy will be generated."),(0,r.kt)("p",null,"The service interface definition lives in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/beacon/api"},(0,r.kt)("inlineCode",{parentName:"a"},"go/beacon/api")),". It defines the\nsupported queries and transactions. For more information you can also check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/oasisprotocol/oasis-core/go/beacon/api?tab=doc"},"consensus service API documentation")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/adrs/blob/main/0007-improved-random-beacon.md"},"beacon ADR specification"),"."),(0,r.kt)("h2",{id:"operation"},"Operation"),(0,r.kt)("p",null,"Each node generates and maintains a long term elliptic curve point and scalar\npair (public/private key pair), the point (public key) of which is included in\nthe node descriptor stored by the ",(0,r.kt)("a",{parentName:"p",href:"/oasis-core/consensus/services/registry"},"registry service"),". In the initial\nimplementation, the curve is P-256."),(0,r.kt)("p",null,"The beacon generation process is split into three sequential stages.  Any\nfailures in the ",(0,r.kt)("em",{parentName:"p"},"Commit")," and ",(0,r.kt)("em",{parentName:"p"},"Reveal")," phases result in a failed protocol round,\nand the generation process will restart after disqualifying participants who\nhave induced the failure."),(0,r.kt)("h3",{id:"commit-phase"},"Commit Phase"),(0,r.kt)("p",null,"Upon epoch transition or a prior failed round the commit phase is initiated and\nthe consensus service will select ",(0,r.kt)("inlineCode",{parentName:"p"},"particpants")," nodes from the current validator\nset (in order of descending stake) to serve as entropy contributors."),(0,r.kt)("p",null,"The beacon state is (re)-initialized, and an event is broadcast to signal to the\nparticipants that they should generate and submit their encrypted shares via a\n",(0,r.kt)("inlineCode",{parentName:"p"},"beacon.SCRAPECommit")," transaction."),(0,r.kt)("p",null,"Each commit phase lasts exactly ",(0,r.kt)("inlineCode",{parentName:"p"},"commit_interval")," blocks, at the end of which,\nthe round will be closed to further commits."),(0,r.kt)("p",null,"At the end of the commit phase, the protocol state is evaluated to ensure that\n",(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," of nodes have published encrypted shares, and if an insufficient\nnumber of nodes have published them, the round is considered to have failed."),(0,r.kt)("p",null,"The following behaviors are currently candidates for a node being marked as\nmalicious/non-particpatory and subject to exclusion from future rounds and\nslashing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not submitting a commitment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Malformed commitments (corrupted/fails to validate/etc).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attempting to alter an existing commitment for a given epoch/round."))),(0,r.kt)("h3",{id:"reveal-phase"},"Reveal Phase"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit_interval")," has passed, assuming that a sufficient number of\ncommits have been received, the consensus service transitions into the reveal\nphase and broadcasts an event to signal to the participants that they should\nreveal the decrypted values of the encrypted shares received from other\nparticipants via a ",(0,r.kt)("inlineCode",{parentName:"p"},"beacon.PVSSReveal")," transaction."),(0,r.kt)("p",null,"Each reveal phase lasts exactly ",(0,r.kt)("inlineCode",{parentName:"p"},"reveal_interval")," blocks, at the end of which,\nthe round will be closed to further reveals."),(0,r.kt)("p",null,"At the end of the reveal phase, the protocol state is evaluated to ensure that\n",(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," nodes have published decrypted shares, and if an insufficient number\nof nodes have published in either case, the round is considered to have failed."),(0,r.kt)("p",null,"The following behaviors are currently candidates for a node being marked as\nmalicious/non-participatory and subject to exclusion from future rounds and\nslashing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not submitting a reveal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Malformed commitments (corrupted/fails to validate/etc).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attempting to alter an existing reveal for a given Epoch/Round."))),(0,r.kt)("h3",{id:"complete-transition-wait-phase"},"Complete (Transition Wait) Phase"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"reveal_interval")," has passed, assuming that a sufficient number of\nreveals have been received, the beacon service recovers the final entropy output\n(the hash of the secret shared by each participant) and transitions into the\ncomplete (transition wait) phase and broadcasting an event to signal to\nparticipants the completion of the round."),(0,r.kt)("p",null,"No meaningful protocol activity happens once a round has successfully completed,\nbeyond the scheduling of the next epoch transition."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"The following sections describe the methods supported by the consensus beacon\nservice. Note that the methods can only be called by validators and only when\nthey are the block proposer."),(0,r.kt)("h3",{id:"pvss-commit"},"PVSS Commit"),(0,r.kt)("p",null,"Submits a PVSS commit."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method name:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"beacon.PVSSCommit\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type PVSSCommit struct {\n    Epoch EpochTime `json:"epoch"`\n    Round uint64    `json:"round"`\n\n    Commit *pvss.Commit `json:"commit,omitempty"`\n}\n')),(0,r.kt)("h3",{id:"pvss-reveal"},"PVSS Reveal"),(0,r.kt)("p",null,"Submits a PVSS reveal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method name:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"beacon.PVSSReveal\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type PVSSReveal struct {\n    Epoch EpochTime `json:"epoch"`\n    Round uint64    `json:"round"`\n\n    Reveal *pvss.Reveal `json:"reveal,omitempty"`\n}\n')),(0,r.kt)("h2",{id:"consensus-parameters"},"Consensus Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"participants")," is the number of participants to be selected for each beacon\ngeneration protocol round.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," is the minimum number of participants which must successfully\ncontribute entropy for the final output to be considered valid. This is also\nthe minimum number of participants that are required to reconstruct a PVSS\nsecret from the corresponding decrypted shares.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"commit_interval")," is the duration of the ",(0,r.kt)("em",{parentName:"p"},"Commit")," phase, in blocks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reveal_interval")," is the duration of the ",(0,r.kt)("em",{parentName:"p"},"Reveal")," phase, in blocks.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"transition_delay")," is the duration of the post ",(0,r.kt)("em",{parentName:"p"},"Reveal")," phase delay, in\nblocks."))))}d.isMDXComponent=!0}}]);