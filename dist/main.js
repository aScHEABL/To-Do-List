(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&family=Noto+Sans+TC&family=Roboto&display=swap);"]),i.push([e.id,':root {\n    --dark-grey: #1d2025;\n    --blue-grey-900: #0f172a;\n    --blue-grey-800: #1e293b;\n    --blue-grey-700: #334155;\n    --blue-grey-600: #475569;\n    --blue-grey-500: #64748b;\n    --blue-grey-400: #94a3b8;\n    --blue-grey-300: #cbd5e1;\n    --blue-grey-200: #e2e8f0;\n    --blue-grey-100: #f1f5f9;\n    --blue-grey-50: #f8fafc;\n    --chartreuse: #b9efa4;\n    --turquoise: #17e0cd;\n    --camel: #efc9a4;\n    --pink: #f59cba;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: \'Roboto\', sans-serif;\n}\n\n/* inbox panel */\n\n.inbox-content {\n    width: 100vw;\n}\n\n.inbox-bg-overlay {\n    height: 100vh;\n    width: 100%;\n    background-color: var(--dark-grey);\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    grid-template-rows: 1.2fr 8.8fr;\n    grid-template-areas: \n    "header header"\n    "sidebar content";\n}\n\n.inbox-header {\n    background-color: var(--blue-grey-700);\n    width: 100%;\n    grid-area: header;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding-left: 16px;\n}\n\n.inbox-header .header-img {\n    filter: invert();\n    padding-left: 1%;\n}\n\n.inbox-header .header-h1 {\n    color: var(--blue-grey-200);\n    font-size: 36px;\n    height: 40%;\n}\n\n.inbox-sidebar {\n    background-color: var(--blue-grey-800);\n    grid-area: sidebar;\n    display: grid;\n    grid-template-rows: 3fr 7fr;\n}\n\n.upcoming-events-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.upcoming-events-div button {\n    display: flex;\n    width: 85%;\n    background-color: var(--blue-grey-800);\n    color: var(--blue-grey-200);\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    padding: 6px 16px 6px 16px;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: row-reverse;\n    gap: 8px;\n    cursor: pointer;\n}\n\n.upcoming-events-div button:hover, .upcoming-events-div button:active {\n    background-color: var(--blue-grey-900);\n}\n\n.upcoming-events-div button .icon {\n    filter: invert();\n    width: 24px;\n    height: 24px;\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var b=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:b,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="",t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),n()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"50a34058fa25017e49ba.png",m=t.p+"af424dbc16415b70c5ce.png",v=t.p+"b305278e8e3cd67c6646.png",h=t.p+"bbf302d312f0abd41d16.png",y=t.p+"95e36205b7e788ef277e.png";!function(){console.log("This is the inbox panel");const e=document.body,n=document.createElement("div");n.classList.add("inbox-content"),e.append(n);const t=document.createElement("div");t.classList.add("inbox-bg-overlay"),n.append(t);const r=document.createElement("header");r.classList.add("inbox-header"),t.append(r);const o=document.createElement("h1"),a=document.createElement("img");a.src=g,o.classList.add("header-h1"),o.textContent="To Do List",a.classList.add("header-img"),r.append(a,o);const i=document.createElement("sidebar");i.classList.add("inbox-sidebar"),t.append(i);const c=document.createElement("div");c.classList.add("upcoming-events-div"),i.append(c);const s=["Inbox","Today","This week","This month"],d=s.map((()=>document.createElement("button"))),l=s.map((()=>document.createElement("img"))),p=[m,v,h,y];for(let e=0;e<4;e++)d[e].textContent=s[e],l[e].src=p[e],l[e].classList.add("icon"),d[e].append(l[e]);d.forEach((e=>c.append(e)))}()})()})();