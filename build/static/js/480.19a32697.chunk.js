"use strict";(self.webpackChunkeccomerce_app=self.webpackChunkeccomerce_app||[]).push([[480,927],{5302:function(e,t,n){n.d(t,{z:function(){return i}});n(2791);var s=n(3504),c=n(184),i=function(e){var t=e.children,n=e.\u0441lickHandler,i=(e.size,e.className),l=e.type,r=e.disabled,a=e.link,o=void 0!==a&&a,d=e.linkTo,u="bg-accent h-10 rounded w-[8.4rem] text-white ".concat(i||""," ").concat(r?"bg-disabled":"");return o&&d?(0,c.jsx)(s.OL,{to:d,className:"".concat(u," flex items-center justify-center"),children:t}):(0,c.jsx)("button",{type:l,onClick:n,className:u,disabled:r,children:t})}},1347:function(e,t,n){n.d(t,{c:function(){return i}});n(2791);var s=n(3504),c=n(184),i=function(e){var t=e.children,n=e.breadCrumbs;return(0,c.jsx)("div",{className:"lg:h-[17.8rem] h-32 bg-primary xl:px-5",children:(0,c.jsxs)("div",{className:"flex flex-col justify-center h-full max-w-8xl ml-2 tn:ml-5 xl:mx-auto",children:[(0,c.jsx)("h1",{className:"font-josefin-sans text-4xl text-text font-bold capitalize",children:t}),(0,c.jsxs)("div",{className:"font-lato font-medium",children:[(0,c.jsx)(s.OL,{to:"/",children:"Home"}),n&&n.map((function(e,t,n){return(0,c.jsxs)(s.OL,{className:"ml-1 capitalize ".concat(t+1===n.length?"text-accent":""),to:"/".concat(e.link),children:[". ",e.title]},e.title)}))]})]})})}},2461:function(e,t,n){n.d(t,{T:function(){return l}});var s=n(2791),c=n(4373),i=n(184),l=function(e){var t=e.rating,n=Number((t-Number(Math.floor(t))).toFixed(2));n=n>.5?1:n<.5?0:.5;for(var l=Math.floor(t)+n,r=[],a=0;a<5;a++)l>=1?(r.push((0,i.jsx)(c.M2b,{className:"text-stars-filled"})),l-=1):.5===l?(r.push((0,i.jsx)(c.bSE,{className:"text-stars-filled"})),l-=.5):r.push((0,i.jsx)(c.OTA,{className:"text-stars-outlined"}));return(0,i.jsx)(s.Fragment,{children:r.map((function(e,t){return(0,i.jsx)(s.Fragment,{children:e},t)}))})}},3121:function(e,t,n){n.d(t,{i:function(){return r}});var s=n(1978),c=n(1281),i=n(2815),l=n(184),r=function(e){var t=e.images,n=e.imageStyle,r=e.slideStyle,a=e.swiperStyle,o=e.maxSlides,d=(0,s.L)();return(0,l.jsx)(i.tq,{slidesPerView:function(e){return e>1024?o:e<1024&&e>500?2:1}(d),modules:[c.W_],navigation:!0,className:"w-full select-none ".concat(a),children:t.map((function(e){return(0,l.jsx)(i.o5,{className:"h-full ".concat(r),children:(0,l.jsx)("img",{src:e,alt:"productImage",className:n})},e)}))})}},9503:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var s=n(5302),c=n(1347),i=n.p+"static/media/404.d31f3adba27185b56aed.png",l=n(184),r=function(){return(0,l.jsxs)("section",{children:[(0,l.jsx)(c.c,{children:"Not Found"}),(0,l.jsxs)("div",{className:"main-container flex flex-col items-center",children:[(0,l.jsx)("img",{alt:"The page you requested was not found",src:i}),(0,l.jsx)(s.z,{className:"font-josefin-sans",link:!0,linkTo:"/",children:"Back to home"})]})]})}},8167:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(1347),c=n(9503),i=n(2791),l=n(6871),r=n(7314),a=n(2278),o=n(2982),d=n(885),u=n(3121),m=n(2892),x=n(6910),f=n(9126),h=n(3504),j=n(8325),p=n(2461),g=n(184),v=function(e){var t=e.products,n=(0,x.F_)(m.I),s=(0,d.Z)(n,1)[0],c=(0,a.TL)(),l=new Array(t.length).fill(!1,0,t.length),r=(0,i.useState)(l),v=(0,d.Z)(r,2),N=v[0],b=v[1];return(0,g.jsx)(i.Fragment,{children:t.map((function(e,t){var n=(e.price-e.price*e.discountPercentage*.01).toFixed(2);return(0,g.jsxs)("div",{className:"flex flex-col tn1:flex-row shadow-card p-4 items-start ".concat(N[t]?"!flex-col":"tn1:h-56"),children:[!N[t]&&(0,g.jsx)("img",{src:e.thumbnail,alt:e.title,className:"sm:w-72 sm:h-full tn1:w-48 tn1:h-full rounded-sm mb-5 w-full h-1/2 mx-auto tn1:mx-0 tn1:mr-7 tn1:mb-0 select-none"}),N[t]&&(0,g.jsx)(u.i,{images:e.images,imageStyle:"w-[30rem] h-full",swiperStyle:"mb-4 h-64",maxSlides:3}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(h.OL,{to:e.id.toString(),children:[(0,g.jsx)("h3",{className:"text-text font-josefin-sans text-lg font-bold transition-[color] hover:text-accent w-fit",children:e.title}),(0,g.jsx)("p",{className:"font-lato text-text-sub-dark-700 transition-[color] hover:text-accent mb-2",children:e.description})]}),(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsxs)("div",{className:" pr-4",children:[(0,g.jsxs)("span",{className:"price pr-2",children:[n,"$"]}),(0,g.jsxs)("span",{className:"price-without-discount",children:[e.price,"$"]})]}),(0,g.jsx)("span",{className:"flex",children:(0,g.jsx)(p.T,{rating:e.rating})})]}),(0,g.jsxs)("div",{className:"flex text-text text-xl gap-2 mt-8",children:[(0,g.jsx)("button",{className:"shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center",onClick:function(){return c((0,j.d)({data:{id:e.id,title:e.title,price:e.price,image:e.thumbnail},itemID:e.id.toString(),email:s.email}))},children:(0,g.jsx)(f.UZs,{})}),e.images.length>2&&(0,g.jsx)("button",{className:"shadow-controlCircle w-9 h-9 rounded-full flex items-center justify-center ".concat(N[t]?"text-accent":""),onClick:function(){return function(e){b((function(t){return[].concat((0,o.Z)(l.slice(0,e)),[!t[e]],(0,o.Z)(l.slice(e+1)))}))}(t)},children:(0,g.jsx)(f.dVI,{})})]})]})]},e.id)}))})},N=function(){var e=(0,l.UO)().category,t=null===e||void 0===e?void 0:e.replaceAll("-"," "),n=(0,a.TL)();(0,i.useEffect)((function(){n((0,r.p)(e))}),[e,n]);var o=(0,a.CG)((function(e){return e.products})),d=o.products,u=o.isLoading;return(0,g.jsxs)(g.Fragment,{children:[u&&(0,g.jsx)("div",{children:"Loading...."}),!u&&0===d.products.length&&(0,g.jsx)(c.default,{}),!u&&d.products.length>0&&(0,g.jsxs)("section",{children:[(0,g.jsx)(s.c,{breadCrumbs:[{title:"categories",link:"categories"},{title:t,link:"shop/".concat(e)}],children:t}),(0,g.jsx)("div",{className:"main-container flex flex-col gap-y-[1.75rem]",children:(0,g.jsx)(v,{products:d.products})})]})]})}}}]);
//# sourceMappingURL=480.19a32697.chunk.js.map