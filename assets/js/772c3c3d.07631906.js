"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[4975],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),h=r,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},90:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={},d="Sentry Node Architecture",l={unversionedId:"run-a-node/set-up-your-node/sentry-node-architecture",id:"run-a-node/set-up-your-node/sentry-node-architecture",title:"Sentry Node Architecture",description:"This guide provides instructions for a deployment using the Sentry node architecture to protect validator nodes from being directly exposed on the public network.",source:"@site/docs/general/run-a-node/set-up-your-node/sentry-node-architecture.md",sourceDirName:"run-a-node/set-up-your-node",slug:"/run-a-node/set-up-your-node/sentry-node-architecture",permalink:"/general/run-a-node/set-up-your-node/sentry-node-architecture",draft:!1,editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/run-a-node/set-up-your-node/sentry-node-architecture.md",tags:[],version:"current",lastUpdatedAt:1656660481,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Governance",permalink:"/general/run-a-node/set-up-your-node/governance"},next:{title:"Advanced",permalink:"/general/run-a-node/advanced/"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring the Oasis Sentry Node",id:"configuring-the-oasis-sentry-node",level:2},{value:"Initializing Sentry Node",id:"initializing-sentry-node",level:3},{value:"Configuring Sentry Node",id:"configuring-sentry-node",level:3},{value:"Configuring the Oasis Validator Node",id:"configuring-the-oasis-validator-node",level:2},{value:"Initializing Validator Node",id:"initializing-validator-node",level:3},{value:"Configuring the Validator Node",id:"configuring-the-validator-node",level:3}],c={toc:u};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sentry-node-architecture"},"Sentry Node Architecture"),(0,o.kt)("p",null,"This guide provides instructions for a deployment using the Sentry node architecture to protect validator nodes from being directly exposed on the public network."),(0,o.kt)("p",null,"This guide assumes a setup where an Oasis validator node is only accessible over a private network, with sentry nodes having access to it. The guide does not cover setting this infrastructure up. Knowledge of ",(0,o.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454"},"Tendermint's Sentry Node architecture")," is assumed as well."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is only an example of a Sentry node deployment, and we take no responsibility for mistakes contained therein. Make sure you understand what you are doing."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before following this guide, make sure you've read the ",(0,o.kt)("a",{parentName:"p",href:"/general/run-a-node/prerequisites/oasis-node"},"Prerequisites")," and ",(0,o.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-validator"},"Running a Node on the Network")," guides and created your Entity."),(0,o.kt)("h2",{id:"configuring-the-oasis-sentry-node"},"Configuring the Oasis Sentry Node"),(0,o.kt)("h3",{id:"initializing-sentry-node"},"Initializing Sentry Node"),(0,o.kt)("p",null,"Sentry node identity keys can be initialized with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node identity init --datadir /serverdir/node\n")),(0,o.kt)("h3",{id:"configuring-sentry-node"},"Configuring Sentry Node"),(0,o.kt)("p",null,"An Oasis node can be configured to run as a sentry node by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker.sentry.enabled")," flag. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tendermint.sentry.upstream_address")," flag can be used to configure a list of nodes that will be protected by the sentry node."),(0,o.kt)("p",null,"An example of full ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," configuration of a sentry node is below."),(0,o.kt)("p",null,"Before using this configuration you should collect the following information to replace the  variables present in the configuration file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ external_address }}"),": This is the external IP on which sentry node will be reachable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ seed_node_address }}"),": This the seed node address of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"ID@IP:port"),". You can find the current Oasis Seed Node address in the ",(0,o.kt)("a",{parentName:"p",href:"/general/oasis-network/network-parameters"},"Network Parameters"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ validator_tendermint_id }}"),": This is the Tendermint ID (address) of the Oasis validator node that will be protected by the sentry node. This address can be obtained by running:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node identity tendermint show-node-address --datadir /serverdir/node\n")),(0,o.kt)("p",{parentName:"li"},"on the validator node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ validator_private_address }}"),": This is the (presumably) private address on which validator should be reachable from the sentry node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ validator_sentry_client_grpc_public_key }}"),": This is the public TLS key of the Oasis validator node that will be protected by the sentry node. This public key can be obtained by running:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," oasis-node identity show-sentry-client-pubkey --datadir /serverdir/node\n")),(0,o.kt)("p",{parentName:"li"},"on the validator node. Note that the above command is only available in ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," from version 20.8.1 onward."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'##\n# Oasis Sentry Node Configuration\n#\n# This file\'s configurations are derived from the command line args found in the\n# root command of the oasis-node binary. For more information execute:\n#\n#     oasis-node --help\n#\n# Settings on the command line that are separated by a dot all belong to the\n# same nested object. So "--foo.bar.baz hello" would translate to:\n#\n#     foo:\n#       bar:\n#         baz: hello\n##\n\n# Set this to where you wish to store node data. The node artifacts\n# should also be located in this directory (for us this is /serverdir/node)\ndatadir: /serverdir/node\n\n# Logging.\n#\n# Per-module log levels are defined below. If you prefer just one unified log\n# level, you can use:\n#\n# log:\n#   level: debug\nlog:\n  level:\n    # Per-module log levels. Longest prefix match will be taken. Fallback to\n    # "default", if no match.\n    default: debug\n    tendermint: warn\n    tendermint/context: error\n  format: JSON\n  # By default logs are output to stdout. If you\'re running this in docker keep\n  # the default\n  #file: /var/log/oasis-node.log\n\n# Path to the genesis file for the current version of the network.\ngenesis:\n  file: /serverdir/etc/genesis.json\n\n# Worker configuration.\nworker:\n  sentry:\n    # Enable sentry node.\n    enabled: true\n    # Port used by validator nodes to query sentry node for registry\n    # information.\n    # IMPORTANT: Only validator nodes protected by the sentry node should have\n    # access to this port. This port should not be exposed on the public\n    # network.\n    control:\n      port: 9009\n      authorized_pubkey:\n        - {{ validator_sentry_client_grpc_public_key }}\n\n# Tendermint backend configuration.\nconsensus:\n  tendermint:\n    abci:\n      prune:\n        strategy: keep_n\n        # Keep ~1 hour of data since block production is ~1 block every 6 seconds.\n        # (3600/6 = 600)\n        num_kept: 600\n    core:\n      listen_address: tcp://0.0.0.0:26656\n      external_address: tcp://{{ external_address }}:26656\n  \n    # List of seed nodes to connect to.\n    # NOTE: You can add additional seed nodes to this list if you want.\n    p2p:\n      seed:\n        - "{{ seed_node_address }}"\n  \n    sentry:\n      upstream_address:\n        - "{{ validator_tendermint_id }}@{{ validator_private_address }}:26656"\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Multiple sentry nodes can be provisioned following the above steps."))),(0,o.kt)("h2",{id:"configuring-the-oasis-validator-node"},"Configuring the Oasis Validator Node"),(0,o.kt)("p",null,"In this setup the Oasis validator node should not be exposed directly on the public network. The Oasis validator only needs to be able to connect to its sentry nodes, preferably via a private network."),(0,o.kt)("h3",{id:"initializing-validator-node"},"Initializing Validator Node"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your validator node is already registered and running in a non-sentry setup, this step can be skipped as the Oasis validator will update its address in the Registry automatically once we redeploy it with new configuration."))),(0,o.kt)("p",null,"When you are ",(0,o.kt)("a",{parentName:"p",href:"/general/run-a-node/set-up-your-node/run-validator#initializing-a-node"},"initializing a validator node"),", you should use the sentry node's external address and Consensus ID in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node.consensus_address")," flag. If you are running multiple sentry nodes, you can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"node.consensus_address")," flag multiple times."),(0,o.kt)("p",null,"To initialize a validator node with 2 sentry nodes, run the following commands from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/localhostdir/node")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export SENTRY1_CONSENSUS_ID=<YOUR_SENTRY1_CONSENSUS_ID_B64>\nexport SENTRY1_STATIC_IP=<YOUR_SENTRY1_STATIC_IP>\nexport SENTRY2_CONSENSUS_ID=<YOUR_SENTRY2_CONSENSUS_ID_B64>\nexport SENTRY2_STATIC_IP=<YOUR_SENTRY2_STATIC_IP>\noasis-node registry node init \\\n  --signer.backend file \\\n  --signer.dir /localhostdir/entity \\\n  --node.consensus_address $SENTRY1_CONSENSUS_ID@$SENTRY1_STATIC_IP:26656 \\\n  --node.consensus_address $SENTRY2_CONSENSUS_ID@$SENTRY2_STATIC_IP:26656 \\\n  --node.is_self_signed \\\n  --node.role validator\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_CONSENSUS_ID"),": This is the Consensus ID of the sentry node in base64 format. This ID can be obtained from ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus_pub.pem"),":"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sed -n 2p /serverdir/node/consensus_pub.pem\n")),(0,o.kt)("p",{parentName:"div"},"on the sentry node."))),(0,o.kt)("h3",{id:"configuring-the-validator-node"},"Configuring the Validator Node"),(0,o.kt)("p",null,"There are some configuration changes needed for the Oasis validator node to enable proxying through its sentry node. Most of these flags should be familiar from the Tendermint sentry node architecture."),(0,o.kt)("p",null,"Since the validator node will not have an external address, the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.core.external_address")," flag should be skipped. Similarly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.p2p.seed")," flag can be skipped, as the ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," won't be directly connecting to any of the seed nodes."),(0,o.kt)("p",null,"Tendermint Peer Exchange should be disabled on the validator with the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.p2p.disable_peer_exchange")," flag."),(0,o.kt)("p",null,"Sentry nodes can also be configured as Tendermint Persistent-Peers with the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.p2p.persistent_peer")," flag."),(0,o.kt)("p",null,"In addition to the familiar Tendermint setup above, the node needs to be configured to query sentry nodes for external addresses every time the validator preforms a re-registration. This is configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker.sentry.address")," flag."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"worker.sentry.address")," flag is of format: ",(0,o.kt)("inlineCode",{parentName:"p"},"<pubkey>@ip:port")," where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<pubkey>"),": Is the sentry node's TLS public key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ip:port"),": Is the (private) address of the sentry node's control endpoint.")),(0,o.kt)("p",null,"Putting it all together, an example configuration of a validator node in the sentry node architecture is given below."),(0,o.kt)("p",null,"Before using this configuration you should collect the following information to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ var_name }}")," variables present in the configuration file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ sentry_node_private_ip }}"),": This is the private IP address of the sentry node over which sentry node should be accessible to the validator.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ sentry_node_grpc_public_key }}"),": This is the sentry node's control endpoint TLS public key. This ID can be obtained by running:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," oasis-node identity show-tls-pubkey --datadir /serverdir/node\n")),(0,o.kt)("p",{parentName:"li"},"on the sentry node. Note that the above command is only available in ",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-node")," from version 20.8.1 onward.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"{{ sentry_node_tendermint_id }}"),": This is the Tendermint ID (address) of the sentry node that will be configured as a Persistent Peer. This ID can be obtained by running:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node identity tendermint show-node-address --datadir /serverdir/node\n")),(0,o.kt)("p",{parentName:"li"},"on the sentry node."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'##\n# Oasis Node Configuration\n#\n# This file\'s configurations are derived from the command line args found in\n# the root command of the oasis-node binary. For more information execute:\n#\n#     oasis-node --help\n#\n# Settings on the command line that are separated by a dot all belong to the\n# same nested object. So "--foo.bar.baz hello" would translate to:\n#\n#     foo:\n#       bar:\n#         baz: hello\n##\n\n# Set this to where you wish to store node data. The node artifacts\n# should also be located in this directory (for us this is /serverdir/node)\ndatadir: /serverdir/node\n\n# Logging.\n#\n# Per-module log levels are defined below. If you prefer just one unified log\n# level, you can use:\n#\n# log:\n#   level: debug\nlog:\n  level:\n    # Per-module log levels. Longest prefix match will be taken. Fallback to\n    # "default", if no match.\n    default: debug\n    tendermint: warn\n    tendermint/context: error\n  format: JSON\n  # By default logs are output to stdout. If you\'re running this in docker keep\n  # the default\n  #file: /var/log/oasis-node.log\n\n# Path to the genesis file for the current version of the network.\ngenesis:\n  file: /serverdir/etc/genesis.json\n\n# Worker configuration.\nworker:\n  registration:\n    # In order for the node to register itself the entity.json of the entity\n    # used to provision the node must be available on the node.\n    entity: /serverdir/node/entity/entity.json\n  sentry:\n    address:\n      - "{{ sentry_node_grpc_public_key }}@{{ sentry_node_private_ip }}:9009"\n\n# Consensus backend.\nconsensus:\n  # Setting this to true will mean that the node you\'re deploying will attempt\n  # to register as a validator.\n  validator: True\n\n  # Tendermint backend configuration.\n  tendermint:\n    abci:\n      prune:\n        strategy: keep_n\n        # Keep ~7 days of data since block production is ~1 block every 6 seconds.\n        # (7*24*3600/6 = 100800)\n        num_kept: 100800\n    core:\n      listen_address: tcp://0.0.0.0:26656\n    p2p:\n      persistent_peer:\n        - "{{ sentry_node_tendermint_id }}@{{ sentry_node_private_ip }}:26656"\n      disable_peer_exchange: True\n')))}h.isMDXComponent=!0}}]);