"use strict";(self.webpackChunknext_info=self.webpackChunknext_info||[]).push([[138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},o="How We Monetize",s={unversionedId:"how-we-make-search-better/how-we-monetize",id:"how-we-make-search-better/how-we-monetize",title:"How We Monetize",description:"Phoebe will cost money to implement, maintain, and scale. How will Phoebe monetize itself in a sustainable way? At the moment we have three primary methods in mind:",source:"@site/docs/how-we-make-search-better/40-how-we-monetize.md",sourceDirName:"how-we-make-search-better",slug:"/how-we-make-search-better/how-we-monetize",permalink:"/docs/how-we-make-search-better/how-we-monetize",draft:!1,editUrl:"https://github.com/Next-Search/next-search.github.io/blob/main/docs/how-we-make-search-better/40-how-we-monetize.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Trust Network",permalink:"/docs/how-we-make-search-better/the-trust-network"},next:{title:"Overview",permalink:"/docs/appendixes/overview"}},l={},u=[{value:"Attention-Based Revenue",id:"attention-based-revenue",level:3},{value:"Site Submissions",id:"site-submissions",level:3},{value:"Research Grade Querying",id:"research-grade-querying",level:3},{value:"Ads?",id:"ads",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-we-monetize"},"How We Monetize"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Phoebe")," will cost money to implement, maintain, and scale. How will ",(0,i.kt)("em",{parentName:"p"},"Phoebe")," monetize itself in a sustainable way? At the moment we have three primary methods in mind:"),(0,i.kt)("h3",{id:"attention-based-revenue"},"Attention-Based Revenue"),(0,i.kt)("p",null,"That is, we are interested in the revenues available through the ",(0,i.kt)("a",{parentName:"p",href:"https://basicattentiontoken.org/"},"Basic Attention Token")," ","(","BAT",")",", ",(0,i.kt)("a",{parentName:"p",href:"https://coil.com"},"Coil"),", and similar services. We believe this means of monetization will be rapidly expanding in the next few years as advertising revenues decline."),(0,i.kt)("h3",{id:"site-submissions"},"Site Submissions"),(0,i.kt)("p",null,"Requesting a site be added to the index will be free but adding a large number of sites will cost a nominal fee."),(0,i.kt)("p",null,'{% hint style="info" %}\nNominal can mean a lot of things to different people. Our current thought is $1 per URL above a limited free number of sites ',"(","which automatically reload after a period of time",")",". This would be adjusted appropriately based on local currencies.\n{% endhint %}"),(0,i.kt)("h3",{id:"research-grade-querying"},"Research Grade Querying"),(0,i.kt)("p",null,"One of the current limitations of search engines is their inability to handle extremely complicated queries. This is understandable as the computational cost for such queries is quite high. We believe there is room for a credits system in which researchers could perform intensive queries on indexing servers dedicated to this purpose for a small fee."),(0,i.kt)("p",null,'{% hint style="info" %}\n',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Web_Worm"},"World Wide Web Worm")," supported regular expression queries, while computationally intensive we'd love to make these available at a research grade querying level.\n{% endhint %}"),(0,i.kt)("p",null,'{% hint style="info" %}\nResearchers could use the openly available data to perform similar queries but the querying service provided by ',(0,i.kt)("em",{parentName:"p"},"Phoebe")," would not require the sort of advanced data analysis expertise nor software that is required to perform the query using currently available open data. We believe we can offer an affordable and friendly querying system which individuals will utilize for its simplicitly and productivity.\n{% endhint %}"),(0,i.kt)("h3",{id:"ads"},"Ads?"),(0,i.kt)("p",null,"We could also look at using privacy respecting ads on the site itself, we would like to avoid this avenue if at all possible ","(","and we believe it is",")"," to ensure that user's have complete confidence that the results they are seeing are natural and not paid placements."),(0,i.kt)("p",null,'{% hint style="info" %}\nIf we had to implement such ad placements we would ensure that they were clearly/markedly offset from natural results so that there could be no confusion regarding which results were natural and which paid.\n{% endhint %}'))}d.isMDXComponent=!0}}]);