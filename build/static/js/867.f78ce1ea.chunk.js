"use strict";(self.webpackChunkeccomerce_app=self.webpackChunkeccomerce_app||[]).push([[867],{5302:function(e,s,a){a.d(s,{z:function(){return c}});a(2791);var t=a(3504),r=a(184),c=function(e){var s=e.children,a=e.\u0441lickHandler,c=(e.size,e.className),n=e.type,i=e.disabled,l=e.link,o=void 0!==l&&l,m=e.linkTo,u="bg-accent h-10 rounded w-[8.4rem] text-white ".concat(c||""," ").concat(i?"bg-disabled":"");return o?(0,r.jsx)(t.OL,{to:m,className:"".concat(u," flex items-center justify-center"),children:s}):(0,r.jsx)("button",{type:n,onClick:a,className:u,disabled:i,children:s})}},1347:function(e,s,a){a.d(s,{c:function(){return c}});a(2791);var t=a(3504),r=a(184),c=function(e){var s=e.children,a=e.breadCrumbs;return(0,r.jsx)("div",{className:"lg:h-[17.8rem] h-32 bg-primary xl:px-5",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center h-full max-w-8xl ml-2 tn:ml-5 xl:mx-auto",children:[(0,r.jsx)("h1",{className:"font-josefin-sans text-4xl text-text font-bold capitalize",children:s}),(0,r.jsxs)("div",{className:"font-lato font-medium",children:[(0,r.jsx)(t.OL,{to:"/",children:"Home"}),a&&a.map((function(e,s,a){return(0,r.jsxs)(t.OL,{className:"ml-1 capitalize ".concat(s+1===a.length?"text-accent":""),to:"/".concat(e.link),children:[". ",e.title]},e.title)}))]})]})})}},1147:function(e,s,a){a.r(s),a.d(s,{default:function(){return p}});var t=a(1347),r=a.p+"static/media/contact_help.f8c917d77b8054092416.png",c=a(5302),n=a(5705),i=a(577),l=a(1724),o=a(2147),m=a(184),u=(0,l.Ry)({name:(0,l.Z_)().required("Name is required").min(3,"Name is too short").max(30,"Name is too long"),email:(0,l.Z_)().email("This must be an email").required("Password is required"),subject:(0,l.Z_)().min(12,"Subject is too short").max(200,"Subject is too long").required("Subject is required"),message:(0,l.Z_)().min(25,"Message is too short").required("Message is required")}),d={name:"",email:"",subject:"",message:""},x=function(){var e=function(e,s){return s||e?s&&e?"input--error":!s&&e?"input--successfull":void 0:"input--ok"};return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:"contact-header",children:"Get In Touch"}),(0,m.jsx)("p",{className:"max-w-[34.375rem] contact-text mt-5",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam."}),(0,m.jsx)(n.J9,{initialValues:d,onSubmit:function(e,s){var a=s.resetForm;!function(e){var s=(0,o.cW)(e,"support-messages");i.Am.promise(s,{pending:"Your message is being sent...",success:"Your message was sent",error:"Your message wasn't sent"})}(e),a()},validationSchema:u,validateOnBlur:!0,children:function(s){var a=s.errors,t=s.touched,r=s.isValid,i=s.dirty,l=s.values;return(0,m.jsxs)(n.l0,{className:"mt-10 max-w-[34.375rem]",children:[(0,m.jsxs)("div",{className:"mb-5 flex tn:flex-row flex-col gap-y-5 tn:gap-y-0 tn:gap-x-6",children:[(0,m.jsxs)("div",{className:"input-error-container",children:[(0,m.jsx)(n.gN,{id:"name",name:"name",placeholder:"Your Name*",value:l.name,className:"input ".concat(e(t.name,a.name)),required:!0}),(0,m.jsx)(n.Bc,{name:"name",component:"span",className:"input-error-msg"})]}),(0,m.jsxs)("div",{className:"input-error-container",children:[(0,m.jsx)(n.gN,{id:"email",name:"email",placeholder:"Your Email*",value:l.email,className:"input ".concat(e(t.email,a.email)),required:!0}),(0,m.jsx)(n.Bc,{name:"email",component:"span",className:"input-error-msg"})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"input-error-container",children:[(0,m.jsx)(n.gN,{id:"subject",name:"subject",placeholder:"Subject*",value:l.subject,className:"input ".concat(e(t.subject,a.subject)),required:!0}),(0,m.jsx)(n.Bc,{name:"subject",component:"span",className:"input-error-msg"})]}),(0,m.jsxs)("div",{className:"input-error-container mt-5",children:[(0,m.jsx)(n.gN,{id:"message",as:"textarea",name:"message",placeholder:"Type Your Message*",required:!0,value:l.message,className:"contact-textarea ".concat(e(t.message,a.message))}),(0,m.jsx)(n.Bc,{name:"message",component:"span",className:"input-error-msg"})]})]}),(0,m.jsx)(c.z,{className:"mt-4 font-josefin-sans",type:"submit",disabled:!(i&&r),children:"Send Mail"})]})}})]})},p=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)(t.c,{breadCrumbs:[{title:"contact",link:"contact"}],children:"Contact Us"}),(0,m.jsxs)("section",{className:"main-container flex flex-col",children:[(0,m.jsxs)("div",{className:"flex sm:flex-row flex-col gap-x-14 xl:gap-x-28 mb-[7.5rem] xl:gap-y-0 gap-y-9",children:[(0,m.jsxs)("div",{className:"xl:max-w-[34.375rem] flex-1",children:[(0,m.jsx)("h1",{className:"contact-header",children:"Information About us"}),(0,m.jsx)("p",{className:"contact-text mt-3",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam."}),(0,m.jsxs)("div",{className:"flex mt-[70px] gap-x-3",children:[(0,m.jsx)("div",{className:"contact-color-sm bg-color-circles-violet"}),(0,m.jsx)("div",{className:"contact-color-sm bg-color-circles-pink"}),(0,m.jsx)("div",{className:"contact-color-sm bg-color-circles-turquoise"})]})]}),(0,m.jsxs)("div",{className:"flex-1 flex flex-col lg:items-start md:items-center items-start",children:[(0,m.jsx)("h1",{className:"contact-header",children:"Contact Way"}),(0,m.jsxs)("div",{className:"grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-1 tn:grid-cols-2 tn:grid-rows-2 grid-cols-1 gap-3 sm:gap-6 xl:gap-12 mt-7",children:[(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{className:"tn1:contact-color-lg contact-color-sm bg-color-circles-violet mt-3 md:mt-0"}),(0,m.jsxs)("div",{className:"tn1:ml-4 ml-2",children:[(0,m.jsx)("a",{className:"contact-text block",href:"tel:877-67-88-99",children:"Tel: 877-67-88-99"}),(0,m.jsx)("a",{className:"contact-text block",href:"email:shop@store.com",children:"E-Mail: shop@store.com"})]})]}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{className:"tn1:contact-color-lg contact-color-sm bg-color-circles-pink mt-3 md:mt-0"}),(0,m.jsxs)("div",{className:"tn1:ml-4 ml-2",children:[(0,m.jsx)("p",{className:"contact-text",children:"Support Forum"}),(0,m.jsx)("p",{className:"contact-text",children:"For over 24hr"})]})]}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{className:"tn1:contact-color-lg contact-color-sm bg-color-circles-orange mt-3 md:mt-0"}),(0,m.jsxs)("div",{className:"tn1:ml-4 ml-2",children:[(0,m.jsx)("p",{className:"contact-text",children:"20 Margaret st, London"}),(0,m.jsx)("p",{className:"contact-text",children:"Great britain, 3NM98-LK"})]})]}),(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{className:"tn1:contact-color-lg contact-color-sm bg-color-circles-green mt-3 md:mt-0"}),(0,m.jsxs)("div",{className:"tn1:ml-4 ml-2",children:[(0,m.jsx)("p",{className:"contact-text",children:"Free standard shipping"}),(0,m.jsx)("p",{className:"contact-text",children:"on all orders."})]})]})]})]})]}),(0,m.jsxs)("div",{className:"flex md:flex-row flex-col lg:gap-y-0 gap-y-4 items-center",children:[(0,m.jsx)(x,{}),(0,m.jsx)("img",{src:r,alt:"contact_img",className:"md:max-w-[50%]"})]})]})]})}},2147:function(e,s,a){a.d(s,{cW:function(){return x},y1:function(){return u},zB:function(){return d}});var t=a(1413),r=a(5861),c=a(7757),n=a.n(c),i=a(255),l=a(9062),o=a(2892),m=a(577),u=function(){var e=(0,r.Z)(n().mark((function e(s){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Xb)(o.I,s.email,s.password);case 3:d({email:s.email,password:s.password}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"Firebase: Error (auth/email-already-in-use)."===e.t0.message&&m.Am.error("This email is already used",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(s){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(n().mark((function e(s){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.e5)(o.I,s.email,s.password);case 3:return a=e.sent,e.abrupt("return",a.user);case 7:if(e.prev=7,e.t0=e.catch(0),"Firebase: Error (auth/wrong-password)."!==e.t0.message){e.next=12;break}throw m.Am.error("You entered wrong password",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),new Error(e.t0.message);case 12:if("Firebase: Error (auth/user-not-found)."!==e.t0.message){e.next=15;break}throw m.Am.error("The user with this email was not found",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),new Error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(n().mark((function e(s,a){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.ET)((0,l.hJ)(o.db,"".concat(a)),(0,t.Z)({},s));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error(e.t0)));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s,a){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=867.f78ce1ea.chunk.js.map