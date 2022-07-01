"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[530],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4212:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={},l="Local Network Runner",u={unversionedId:"development-setup/oasis-net-runner",id:"development-setup/oasis-net-runner",title:"Local Network Runner",description:"In order to make development easier (and also to facilitate automated E2E",source:"@site/external/oasis-core/docs/development-setup/oasis-net-runner.md",sourceDirName:"development-setup",slug:"/development-setup/oasis-net-runner",permalink:"/oasis-core/development-setup/oasis-net-runner",draft:!1,tags:[],version:"current",lastUpdatedAt:1655201825,formattedLastUpdatedAt:"6/14/2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Running Tests",permalink:"/oasis-core/development-setup/running-tests"},next:{title:"Single Validator Node Network",permalink:"/oasis-core/development-setup/single-validator-node-network"}},p={},d=[{value:"Unsafe Non-SGX Environment",id:"unsafe-non-sgx-environment",level:2},{value:"SGX Environment",id:"sgx-environment",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"User Namespace Permission Issues",id:"user-namespace-permission-issues",level:3}],c={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-network-runner"},"Local Network Runner"),(0,a.kt)("p",null,"In order to make development easier (and also to facilitate automated E2E\ntests), the Oasis Core repository provides a utility called ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-net-runner"),"\nthat enables developers to quickly set up local networks."),(0,a.kt)("p",null,"Before proceeding, make sure to look at the ",(0,a.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/prerequisites"},"prerequisites")," required for running\nan Oasis Core environment followed by ",(0,a.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/building"},"build instructions")," for the respective\nenvironment (non-SGX or SGX). The following sections assume that you have\nsuccessfully completed the required build steps."),(0,a.kt)("h2",{id:"unsafe-non-sgx-environment"},"Unsafe Non-SGX Environment"),(0,a.kt)("p",null,"To start a simple Oasis network as defined by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/go/oasis-net-runner/fixtures/default.go"},"the default network fixture"),"\nrunning the ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-keyvalue")," test runtime, do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./go/oasis-net-runner/oasis-net-runner \\\n  --fixture.default.node.binary go/oasis-node/oasis-node \\\n  --fixture.default.runtime.binary target/default/debug/simple-keyvalue \\\n  --fixture.default.runtime.loader target/default/debug/oasis-core-runtime-loader \\\n  --fixture.default.keymanager.binary target/default/debug/simple-keymanager\n")),(0,a.kt)("p",null,"Wait for the network to start, there should be messages about nodes being\nstarted and at the end the following message should appear:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'level=info module=oasis/net-runner caller=oasis.go:319 ts=2019-10-03T10:47:30.776566482Z msg="network started"\nlevel=info module=net-runner caller=root.go:145 ts=2019-10-03T10:47:30.77662061Z msg="client node socket available" path=/tmp/oasis-net-runner530668299/net-runner/network/client-0/internal.sock\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-keyvalue")," runtime implements a key-value hash map in the enclave\nand supports reading, writing, and fetching string values associated with the\ngiven key. To learn how to create your own runtime, see the sources of the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/tree/master/tests/runtimes/simple-keyvalue"},"simple-keyvalue example")," and ",(0,a.kt)("a",{parentName:"p",href:"/oasis-sdk/runtime/getting-started"},"Building a runtime")," chapter in the Oasis SDK."),(0,a.kt)("p",null,"Finally, to test Oasis node, we will run a test client written specifically\nfor the ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-keyvalue")," runtime. The client sends a few keys with associated\nvalues and fetches them back over RPC defined in the runtime's API. Execute the\nclient as follows (substituting the socket path from your log output) in a\ndifferent terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./target/default/debug/simple-keyvalue-client \\\n  --runtime-id 8000000000000000000000000000000000000000000000000000000000000000 \\\n  --node-address unix:/tmp/oasis-net-runner530668299/net-runner/network/client-0/internal.sock\n")),(0,a.kt)("p",null,"By default, Oasis node is configured with a 30-second epoch, so you may\ninitially need to wait for the first epoch to pass before the test client will\nmake any progress. For more information on writing your own client, see the\n",(0,a.kt)("a",{parentName:"p",href:"/oasis-sdk"},"Oasis SDK"),"."),(0,a.kt)("h2",{id:"sgx-environment"},"SGX Environment"),(0,a.kt)("p",null,"To run an Oasis node under SGX follow the same steps as for non-SGX, except the\n",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-net-runner")," invocation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./go/oasis-net-runner/oasis-net-runner \\\n  --fixture.default.tee_hardware intel-sgx \\\n  --fixture.default.node.binary go/oasis-node/oasis-node \\\n  --fixture.default.runtime.binary target/sgx/x86_64-fortanix-unknown-sgx/debug/simple-keyvalue.sgxs \\\n  --fixture.default.runtime.loader target/default/debug/oasis-core-runtime-loader \\\n  --fixture.default.keymanager.binary target/sgx/x86_64-fortanix-unknown-sgx/debug/simple-keymanager.sgxs\n")),(0,a.kt)("h2",{id:"common-issues"},"Common Issues"),(0,a.kt)("p",null,"If the above does not appear to work (e.g., when you run the client, it appears\nto hang and not make any progress) usually the best place to start debugging is\nlooking at the various node logs which are stored under a directory starting\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/oasis-net-runner")," (unless overriden via ",(0,a.kt)("inlineCode",{parentName:"p"},"--basedir")," options)."),(0,a.kt)("p",null,"Specifically look at ",(0,a.kt)("inlineCode",{parentName:"p"},"node.log")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," files located in directories\nfor each of the nodes comprising the local network."),(0,a.kt)("h3",{id:"user-namespace-permission-issues"},"User Namespace Permission Issues"),(0,a.kt)("p",null,"The Oasis Core compute nodes use ",(0,a.kt)("a",{parentName:"p",href:"/oasis-core/runtime/#runtimes"},"sandboxing")," to execute runtime binaries and\nthe sandbox implementation requires that the process is able to create\nnon-privileged user namespaces."),(0,a.kt)("p",null,"In case this is not available, the following error message may appear in\n",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," of any compute or key manager nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bwrap: No permissions to creating new namespace, likely because the kernel does\nnot allow non-privileged user namespaces. On e.g. debian this can be enabled\nwith 'sysctl kernel.unprivileged_userns_clone=1'\n")),(0,a.kt)("p",null,"In this case do as indicated in the message and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sysctl kernel.unprivileged_userns_clone=1\n")),(0,a.kt)("p",null,"This could also happen if you are running in a Docker container without\nspecifying additional options at startup. See the ",(0,a.kt)("a",{parentName:"p",href:"/oasis-core/development-setup/prerequisites#using-the-development-docker-image"},"Using the Development Docker\nImage")," section for details."))}m.isMDXComponent=!0}}]);