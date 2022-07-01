"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[9085],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},632:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=t(7462),s=t(3366),o=(t(7294),t(3905)),r=["components"],i={},c="List Accounts",l={unversionedId:"manage-tokens/advanced/oasis-cli-tools/list-accounts",id:"manage-tokens/advanced/oasis-cli-tools/list-accounts",title:"List Accounts",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections.",source:"@site/docs/general/manage-tokens/advanced/oasis-cli-tools/list-accounts.md",sourceDirName:"manage-tokens/advanced/oasis-cli-tools",slug:"/manage-tokens/advanced/oasis-cli-tools/list-accounts",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/list-accounts",draft:!1,editUrl:"https://github.com/oasisprotocol/docs.oasis.dev/edit/main/docs/general/manage-tokens/advanced/oasis-cli-tools/list-accounts.md",tags:[],version:"current",lastUpdatedAt:1656660481,formattedLastUpdatedAt:"7/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Common Staking Info",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},next:{title:"Get Account Info",permalink:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info"}},u={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"list-accounts"},"List Accounts"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example assumes you have read and followed the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections."))),(0,o.kt)("p",null,"To list all staking accounts with positive balance, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake list -a $ADDR\n")),(0,o.kt)("p",null,"This will list all accounts' addresses, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"oasis1qqqfalz4xars9nxn0mjy8fcf9quqg8ml0szm5ped\noasis1qqqd4wrmk8z9p3hz0vyc6zy3khx3gqnckywyg2s5\noasis1qqqul8678xs9tnj74x54k8ch2qdh7jveeswqf67j\noasis1qqzrcyed78mkxmt9qpv3pemsugknnhvnpv8v5vc3\noasis1qqz0qcmy932p69493qdkszcf9emgl55azys3xr8f\noasis1qq95xthkg20ra6ue8zyngqkkm92xqkvrms88axkj\noasis1qq9meupznk90d4lgluvcaqa27ggs55dscc6msc33\noasis1qq9acq6v5knfmatc9fvuwyzlexs0f7j3uvarusu6\noasis1qqxqlpfslwuuh5342qnstymyutancj7csucxv2ec\noasis1qqxmp9lggptm0pt23za7g5cfg2hzspezcumw7c3j\noasis1qq89qxh538sunk6p2fca487pfsy0ncxk9q4xf2un\noasis1qq8hgj2yzssawtpfqr8utj6d57k9zvx3wc989kqm\noasis1qq8atykwecy3p5rnspkweapzz847exaqwyv80wgx\noasis1qqgv5rxl4w27l89rf4j5dv8392kh42wt35yn0as6\noasis1qqg0h3mt7klha4w2kxjvsktv5ke6suuwpg8rvpdh\noasis1qqf3ctyg49tnwclksxun3dzhrv4zuww7hu7w3cul\noasis1qqfasfrrx2tae50kcy8mcclhp0kqymswsqnqytyg\noasis1qq2rlaz3yjfk8gtdhnrfkrz5rrxjnnrzeq7mst0r\n\n... output trimmed ...\n")),(0,o.kt)("p",null,"For more information on account's address format, see the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/terminology#address"},"Terminology")," doc."))}m.isMDXComponent=!0}}]);