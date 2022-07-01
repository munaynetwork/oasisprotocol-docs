"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9190],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?s.createElement(g,i(i({ref:t},c),{},{components:n})):s.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var s=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={},l="ADR 0012: Runtime Message Results",u={unversionedId:"0012-runtime-message-results",id:"0012-runtime-message-results",title:"ADR 0012: Runtime Message Results",description:"Component",source:"@site/external/adrs/0012-runtime-message-results.md",sourceDirName:".",slug:"/0012-runtime-message-results",permalink:"/adrs/0012-runtime-message-results",draft:!1,tags:[],version:"current",lastUpdatedAt:1654784293,formattedLastUpdatedAt:"6/9/2022",frontMatter:{},sidebar:"adrs",previous:{title:"ADR 0011: Incoming Runtime Messages",permalink:"/adrs/0011-incoming-runtime-messages"},next:{title:"ADR 0013: Runtime Upgrade Improvements",permalink:"/adrs/0013-runtime-upgrades"}},c={},d=[{value:"Component",id:"component",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Message Execution Results",id:"message-execution-results",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Alternatives considered",id:"alternatives-considered",level:3}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-0012-runtime-message-results"},"ADR 0012: Runtime Message Results"),(0,r.kt)("h2",{id:"component"},"Component"),(0,r.kt)("p",null,"Oasis Core"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2021-12-04: Initial version"),(0,r.kt)("li",{parentName:"ul"},"2021-12-10: Extend the implementation section"),(0,r.kt)("li",{parentName:"ul"},"2022-01-27: Update the concrete result types")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Currently, the results of emitted runtime messages are ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent"),"s, which\nonly provide information whether the message execution was successful or not.\nFor various use-cases additional information about message results would be\nuseful."),(0,r.kt)("p",null,"One of such is supporting staking by runtimes. Currently, a runtime can emit an\n",(0,r.kt)("inlineCode",{parentName:"p"},"AddEscrow")," message, but is unaware of the actual amount of shares it obtained\nas a result of the added escrow. For some use-cases (e.g. runtime staking user\ndeposited funds) this information is crucial for accounting."),(0,r.kt)("p",null,"Similarly, for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReclaimEscrow"),", the runtime doesn't have the direct information\nat which epoch the stake gets debonded."),(0,r.kt)("p",null,"The only way to currently obtain this data is to subscribe to consensus events,\nsomething which runtime doesn't have access to."),(0,r.kt)("p",null,"Adding results to ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent")," solves both of the mentioned use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"for ",(0,r.kt)("inlineCode",{parentName:"p"},"AddEscrow")," the result should contain amount of shares obtained with the\nescrow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReclaimEscrow")," the result should contain the amount of shares and epoch\nat which the stake gets debonded"))),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,"Implement support for arbitrary result data in ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent")," runtime message\nresults."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Result field is added to ",(0,r.kt)("inlineCode",{parentName:"li"},"roothash.MessageEvent")," struct:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'// MessageEvent is a runtime message processed event.\ntype MessageEvent struct {\n        Module string `json:"module,omitempty"`\n        Code   uint32 `json:"code,omitempty"`\n        Index  uint32 `json:"index,omitempty"`\n\n        // Result contains message execution results for successfully executed messages.\n        Result cbor.RawMessage `json:"result,omitempty"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," field is runtime message specific and is present only when the\nmessage execution was successful (",(0,r.kt)("inlineCode",{parentName:"p"},"Code")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"errors.CodeNoError"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExecuteMessage")," method in ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageSubscriber")," interface is updated to include\na response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"// MessageSubscriber is a message subscriber interface.\ntype MessageSubscriber interface {\n        // ExecuteMessage executes a given message.\n        ExecuteMessage(ctx *Context, kind, msg interface{}) (interface{}, error)\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Publish")," method of the ",(0,r.kt)("inlineCode",{parentName:"li"},"MessageDispatcher")," interface is updated to include\nthe response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"// MessageDispatcher is a message dispatcher interface.\ntype MessageDispatcher interface {\n        // Publish publishes a message of a given kind by dispatching to all subscribers.\n        // Subscribers can return a result, but at most one subscriber should return a\n        // non-nil result to any published message. Panics in case more than one subscriber\n        // returns a non-nil result.\n        //\n        // In case there are no subscribers ErrNoSubscribers is returned.\n        Publish(ctx *Context, kind, msg interface{}) (interface{}, error)\n}\n")),(0,r.kt)("p",null,"In case the ",(0,r.kt)("inlineCode",{parentName:"p"},"Publish")," ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," the Roothash backend propagates the\nresult to the emitted ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvent"),"."),(0,r.kt)("p",null,"With these changes the runtime is able to obtain message execution results via\n",(0,r.kt)("inlineCode",{parentName:"p"},"MessageEvents")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"RoundResults"),"."),(0,r.kt)("h3",{id:"message-execution-results"},"Message Execution Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddEscrow")," message execution result is the ",(0,r.kt)("inlineCode",{parentName:"li"},"AddEscrowResult"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type AddEscrowResult struct {\n        Owner     Address           `json:"owner"`\n        Escrow    Address           `json:"escrow"`\n        Amount    quantity.Quantity `json:"amount"`\n        NewShares quantity.Quantity `json:"new_shares"`\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReclaimEscrow")," message execution result is the\n",(0,r.kt)("inlineCode",{parentName:"li"},"ReclaimEscrowResult"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type ReclaimEscrowResult struct {\n        Owner           Address           `json:"owner"`\n        Escrow          Address           `json:"escrow"`\n        Amount          quantity.Quantity `json:"amount"`\n        DebondingShares quantity.Quantity `json:"debonding_shares"`\n        RemainingShares quantity.Quantity `json:"remaining_shares"`\n        DebondEndTime   beacon.EpochTime  `json:"debond_end_time"`\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transfer")," message execution result is the ",(0,r.kt)("inlineCode",{parentName:"li"},"TransferResult"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type TransferResult struct {\n        From   Address           `json:"from"`\n        To     Address           `json:"to"`\n        Amount quantity.Quantity `json:"amount"`\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Withdraw")," message execution result is the ",(0,r.kt)("inlineCode",{parentName:"li"},"WithdrawResult"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'type WithdrawResult struct {\n        Owner        Address           `json:"owner"`\n        Beneficiary  Address           `json:"beneficiary"`\n        Allowance    quantity.Quantity `json:"allowance"`\n        AmountChange quantity.Quantity `json:"amount_change"`\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UpdateRuntime")," message execution result is the registry ",(0,r.kt)("inlineCode",{parentName:"li"},"Runtime")," descriptor.")),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("h3",{id:"positive"},"Positive"),(0,r.kt)("p",null,"All the functionality for runtimes to support staking is implemented."),(0,r.kt)("h3",{id:"negative"},"Negative"),(0,r.kt)("p",null,"Requires breaking changes."),(0,r.kt)("h3",{id:"neutral"},"Neutral"),(0,r.kt)("h3",{id:"alternatives-considered"},"Alternatives considered"),(0,r.kt)("p",null,"Add support to runtimes for subscribing to consensus events. A more heavyweight\nsolution, that can still be implemented in future if desired. Decided against it\ndue to simplicity of the message events solution for the present use cases."))}p.isMDXComponent=!0}}]);