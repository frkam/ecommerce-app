"use strict";(self.webpackChunkeccomerce_app=self.webpackChunkeccomerce_app||[]).push([[341,927],{5302:function(e,n,t){t.d(n,{z:function(){return a}});t(2791);var s=t(3504),c=t(184),a=function(e){var n=e.children,t=e.\u0441lickHandler,a=(e.size,e.className),r=e.type,i=e.disabled,l=e.link,o=void 0!==l&&l,d=e.linkTo,x="bg-accent h-10 rounded w-[8.4rem] text-white  ".concat(a||""," ").concat(i?"bg-disabled":"");return o?(0,c.jsx)(s.OL,{to:d,className:"".concat(x," flex items-center justify-center"),children:n}):(0,c.jsx)("button",{type:r,onClick:t,className:x,disabled:i,children:n})}},1347:function(e,n,t){t.d(n,{c:function(){return a}});t(2791);var s=t(3504),c=t(184),a=function(e){var n=e.children,t=e.link;return(0,c.jsx)("div",{className:"lg:h-[17.8rem] h-32 bg-primary xl:px-5",children:(0,c.jsxs)("div",{className:"flex flex-col justify-center h-full max-w-8xl ml-2 tn:ml-5 xl:mx-auto",children:[(0,c.jsx)("h1",{className:"font-josefin-sans text-4xl text-text font-bold capitalize",children:n}),(0,c.jsxs)("div",{className:"font-lato font-medium",children:[(0,c.jsx)(s.OL,{to:"/",children:"Home"}),(0,c.jsxs)(s.OL,{className:"text-accent ml-1 capitalize",to:"/".concat(t),children:[". ",n]})]})]})})}},9503:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var s=t(5302),c=t(1347),a=t.p+"static/media/404.d31f3adba27185b56aed.png",r=t(184),i=function(){return(0,r.jsxs)("section",{children:[(0,r.jsx)(c.c,{children:"Not Found"}),(0,r.jsxs)("div",{className:"main-container flex flex-col items-center",children:[(0,r.jsx)("img",{alt:"The page you requested was not found",src:a}),(0,r.jsx)(s.z,{className:"font-josefin-sans",link:!0,linkTo:"/",children:"Back to home"})]})]})}},4456:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var s=t(1347),c=t(2791),a=t(6871),r=t(4917),i=t(9467),l=t(9503),o=t(4373),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},x=t(184),u=function(e){var n=e.rating,t=+(n-+Math.floor(n)).toFixed(2);t=t>.5?1:t<.5?0:.5;for(var s=Math.floor(n)+t,a=[],r=0;r<5;r++)s>=1?(a.push((0,x.jsx)(o.M2b,{className:"text-stars-filled"})),s-=1):.5===s?(a.push((0,x.jsx)(o.bSE,{className:"text-stars-filled"})),s-=.5):a.push((0,x.jsx)(o.OTA,{className:"text-stars-outlined"}));return(0,x.jsx)(c.Fragment,{children:a.map((function(e){return(0,x.jsx)(c.Fragment,{children:e},d())}))})},f=t(3504),h=function(){var e=(0,a.UO)().category,n=(0,r.TL)();(0,c.useEffect)((function(){n((0,i.p)(e))}),[]);var t=(0,r.CG)((function(e){return e.products})),o=t.products,h=t.isLoading,m=null===e||void 0===e?void 0:e.replaceAll("-"," ");return(0,x.jsxs)(x.Fragment,{children:[h&&(0,x.jsx)("div",{children:"Loading...."}),!h&&0===o.products.length&&(0,x.jsx)(l.default,{}),!h&&o.products.length>0&&(0,x.jsxs)("section",{children:[(0,x.jsx)(s.c,{link:"shop/".concat(e),children:m}),(0,x.jsx)("div",{className:"main-container flex flex-col gap-y-[1.75rem]",children:null===o||void 0===o?void 0:o.products.map((function(e){var n=(e.price-e.price*e.discountPercentage*.01).toFixed(2);return(0,x.jsxs)("div",{className:"flex shadow-card p-4",children:[(0,x.jsx)("img",{src:e.thumbnail,alt:e.title,className:"sm:w-72 sm:h-48 w-48 h-24 mr-7 rounded-sm"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(f.OL,{to:e.id.toString(),children:[(0,x.jsx)("h3",{className:"text-text font-josefin-sans text-lg font-bold",children:e.title}),(0,x.jsx)("p",{className:"font-lato text-text-sub-dark-700 mb-2",children:e.description})]}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsxs)("div",{className:"font-josefin-sans pr-4",children:[(0,x.jsxs)("span",{className:"text-text pr-2",children:[n,"$"]}),(0,x.jsxs)("span",{className:"line-through text-accent",children:[e.price,"$"]})]}),(0,x.jsx)("span",{className:"flex",children:(0,x.jsx)(u,{rating:e.rating})})]})]})]},d())}))})]})]})}}}]);
//# sourceMappingURL=341.e5484429.chunk.js.map