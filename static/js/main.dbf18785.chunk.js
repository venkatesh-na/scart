(this.webpackJsonpscart=this.webpackJsonpscart||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),o=n.n(r),a=(n(11),n(6)),s=n(3),l=n(5),d=[{id:1,title:"Samsung Galaxy S7",price:599.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",amount:1},{id:2,title:"google pixel ",price:499.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",amount:1},{id:3,title:"Xiaomi Redmi Note 2",price:699.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",amount:1}],u=n(0),j=i.a.createContext(),h=function(e){var t=e.children,n=Object(c.useState)(d),i=Object(l.a)(n,2),r=i[0],o=i[1];return Object(u.jsx)(j.Provider,{value:{product:r,handleRemove:function(e){o(r.filter((function(t){return t.id.toString()!==e.target.id})))},handleClear:function(){o([])},handleIncrement:function(e){o(r.map((function(t){var n=t.amount,c=t.id,i=t.img,r=t.price,o=t.title;return c===e?{amount:n+1,id:c,img:i,price:r,title:o}:Object(s.a)({},t)})))},handleDecrement:function(e,t){console.log(e,t),1===t?(console.log("amount is zero"),o(r.filter((function(t){return t.id!==e})))):o(r.map((function(t){var n=t.amount,c=t.id,i=t.img,r=t.price,o=t.title;return c===e?{amount:n-1,id:c,img:i,price:r,title:o}:Object(s.a)({},t)})))}},children:t})},m=function(){return Object(c.useContext)(j)},b=function(){var e=m().product;return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Cart"}),Object(u.jsxs)("a",{href:"/",children:[Object(u.jsx)("span",{children:e.reduce((function(e,t){return e+t.amount}),0)}),Object(u.jsx)(a.a,{})]})]})},p=function(){var e=m(),t=e.product,n=e.handleRemove,c=e.handleIncrement,i=e.handleDecrement;return console.log(t),Object(u.jsxs)("section",{className:"cart-container",children:[Object(u.jsx)("h2",{children:"your Bag"}),Object(u.jsx)("div",{className:"item-container",children:t.map((function(e){var t=e.amount,r=e.id,o=e.img,a=e.price,s=e.title;return Object(u.jsxs)("article",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"img-container",children:Object(u.jsx)("img",{src:o,alt:"phone"})}),Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("h3",{children:s}),Object(u.jsxs)("p",{children:["$",a]}),Object(u.jsx)("button",{id:r,onClick:n,className:"remove",children:"remove"})]})]}),Object(u.jsxs)("div",{className:"btn-container",children:[Object(u.jsx)("button",{onClick:function(){return c(r)},children:"+"}),Object(u.jsx)("p",{children:t}),Object(u.jsx)("button",{onClick:function(){return i(r,t)},children:"-"})]})]},r)}))})]})},O=function(){var e=m(),t=e.handleClear,n=e.product;return Object(u.jsxs)("section",{className:"sub-total",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Total"}),Object(u.jsxs)("h4",{children:["$",n.reduce((function(e,t){return e+t.price*t.amount}),0)]})]}),Object(u.jsx)("button",{onClick:t,children:"CLEAR CART"})]})};n(13);var x=function(){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(p,{}),Object(u.jsx)(O,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{children:Object(u.jsx)(x,{})})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.dbf18785.chunk.js.map