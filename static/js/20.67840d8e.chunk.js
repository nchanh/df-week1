"use strict";(self.webpackChunkweek1=self.webpackChunkweek1||[]).push([[20],{936:function(r,n,e){e.d(n,{Z:function(){return d}});var c=e(885),t=e(2791),s=e(7689),a=e(5725),i=e(2746),u=e(2158),o=e(184);var d=function(r){var n=r.products,e=r.numberProducts,d=void 0===e?16:e,l=(0,s.s0)(),m=(0,t.useState)(-1),v=(0,c.Z)(m,2),f=v[0],h=v[1],x=function(r){return"category-product__detail__info"+(f===r?" active":"")},_=(0,u.S)(),p=(0,i.$R)(_.width);return(0,o.jsx)(a.X2,{className:"category-product mx-0",children:n&&n.map((function(r,n){var e="category-product__detail";return p&&(e+=n%2===0?" ps-4":" pe-4"),d>n&&(0,o.jsxs)(a.JX,{sm:"6",md:"6",lg:"3",onMouseOver:function(){return h(n)},onMouseOut:function(){return h(-1)},onClick:function(){return n=r.id,l("/product/".concat(n)),void(0,i.k3)();var n},className:e,children:[(0,o.jsx)("img",{src:r.images[0].url,alt:r.title}),(0,o.jsxs)("div",{className:x(n),children:[(0,o.jsx)("h3",{children:r.brand}),(0,o.jsx)("h4",{children:r.title}),(0,o.jsxs)("p",{children:["$",r.price]})]})]},n)}))})}},3020:function(r,n,e){e.r(n),e.d(n,{default:function(){return h}});var c=e(885),t=e(2791),s=e(6731),a=e(5725),i=e(9015),u=e(184),o=[{id:22,src:i.Z.CLOTHES_1},{id:23,src:i.Z.CLOTHES_2},{id:21,src:i.Z.CLOTHES_3}],d=[i.Z.BANNER,i.Z.BANNER_CLOTHES,i.Z.BANNER_TEAM];var l=function(){var r=(0,t.useState)(i.Z.BANNER),n=(0,c.Z)(r,2),e=n[0],l=n[1];(0,t.useEffect)((function(){var r=0,n=setInterval((function(){l(d[r]),r=++r>2?0:r}),5e3);return function(){clearInterval(n)}}),[]);var m=o.map((function(r,n){var e="banner__clothes__".concat(n),c="clothes ".concat(r.id),t=n>=2?12:6;return(0,u.jsx)(a.JX,{sm:t,md:t,lg:"4",className:e,children:(0,u.jsx)(s.rU,{to:"/product/"+r.id,children:(0,u.jsx)("img",{src:r.src,alt:c})})},r.id)}));return(0,u.jsxs)("div",{className:"banner",children:[(0,u.jsx)("img",{className:"banner__main",src:e,alt:"home-banner"}),(0,u.jsx)(a.X2,{className:"banner__clothes mx-0",children:m})]})},m=e(9434),v=e(936);var f=function(){var r=(0,m.v9)((function(r){return r.product.products}));return(0,u.jsxs)("div",{className:"product-recommend",children:[(0,u.jsx)("h4",{className:"product-recommend__title",children:"RECOMMEND PRODUCTS TO YOU"}),(0,u.jsx)(v.Z,{products:r,numberProducts:"16"})]})};var h=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{}),(0,u.jsx)(f,{})]})}}}]);
//# sourceMappingURL=20.67840d8e.chunk.js.map