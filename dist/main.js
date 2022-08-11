(()=>{"use strict";var e,n,r,t,o,a,i,d,c,s,u,l,p,b,f={426:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&family=Noto+Sans+TC&family=Roboto&display=swap);"]),i.push([e.id,':root {\n    --dark-grey: #1d2025;\n    --blue-grey-900: #0f172a;\n    --blue-grey-800: #1e293b;\n    --blue-grey-700: #334155;\n    --blue-grey-600: #475569;\n    --blue-grey-500: #64748b;\n    --blue-grey-400: #94a3b8;\n    --blue-grey-300: #cbd5e1;\n    --blue-grey-200: #e2e8f0;\n    --blue-grey-100: #f1f5f9;\n    --blue-grey-50: #f8fafc;\n    --chartreuse: #b9efa4;\n    --green: #cceebf;\n    --turquoise: #17e0cd;\n    --camel: #efc9a4;\n    --pink: #f59cba;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: \'Roboto\', sans-serif;\n}\n\n/* inbox panel */\n\n.inbox-content {\n    width: 100vw;\n}\n\n.inbox-bg-overlay {\n    height: 100vh;\n    width: 100%;\n    background-color: var(--dark-grey);\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    grid-template-rows: 1.2fr 8.8fr;\n    grid-template-areas: \n    "header header"\n    "sidebar main";\n}\n\n.inbox-header {\n    background-color: var(--blue-grey-700);\n    width: 100%;\n    grid-area: header;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding-left: 16px;\n}\n\n.inbox-header .header-logo {\n    filter: invert();\n    padding-left: 1%;\n}\n\n.inbox-header .header-h1 {\n    color: var(--blue-grey-200);\n    font-size: 36px;\n    height: 40%;\n}\n\n.inbox-sidebar {\n    background-color: var(--blue-grey-800);\n    grid-area: sidebar;\n    display: grid;\n    grid-template-rows: 3fr 7fr;\n}\n\n.upcoming-events-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.upcoming-events-div .sidebar-date-button {\n    display: flex;\n    width: 85%;\n    background-color: var(--blue-grey-800);\n    color: var(--blue-grey-200);\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    padding: 6px 16px 6px 16px;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n}\n\n.upcoming-events-div button:hover, .upcoming-events-div button:active {\n    background-color: var(--blue-grey-900);\n}\n\n.icon {\n    filter: invert();\n    width: 24px;\n    height: 24px;\n}\n\n.sidebar-project-div {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 40px);\n    row-gap: 8px;\n}\n\n.sidebar-project-div .sidebar-project-h2 {\n    color: var(--blue-grey-200);\n    padding: 6px 24px 6px 24px;\n    font-size: 24px;\n}\n\n.sidebar-project-div .sidebar-project-button {\n    display: flex;\n    width: 85%;\n    background-color: var(--blue-grey-800);\n    color: var(--blue-grey-200);\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    padding: 6px 16px 6px 16px;\n    position: relative;\n    left: 8px;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n}\n\n.sidebar-project-div .sidebar-project-button:hover,\n .sidebar-project-div .sidebar-project-button:active {\n    background-color: var(--blue-grey-900);\n}\n\nmain {\n    grid-area: main;\n    padding: 5% 10% 0% 10%;\n    display: grid;\n    grid-template-rows: 5% repeat(auto-fit, 40px);\n    row-gap: 16px;\n}\n\n.list-title-h1 {\n    color: var(--blue-grey-200);\n}\n\n.add-task-button {\n    display: flex;\n    background-color: var(--chartreuse);\n    color: var(--blue-grey-800);\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.add-task-button:hover, .add-task-button:active {\n    background-color: var(--green);\n}\n\n.add-task-icon {\n    width: 24px;\n    height: 24px;\n}',""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=t.base?c[0]+t.base:c[0],u=a[s]||0,l="".concat(s," ").concat(u);a[s]=u+1;var p=r(l),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(b);else{var f=o(b,t);t.byIndex=d,n.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=r(a[i]);n[d].references--}for(var c=t(e,o),s=0;s<a.length;s++){var u=r(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},g={};function v(e){var n=g[e];if(void 0!==n)return n.exports;var r=g[e]={id:e,exports:{}};return f[e](r,r.exports,v),r.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var r in n)v.o(n,r)&&!v.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.p="",v.nc=void 0,e=v(379),n=v.n(e),r=v(795),t=v.n(r),o=v(569),a=v.n(o),i=v(565),d=v.n(i),c=v(216),s=v.n(c),u=v(589),l=v.n(u),p=v(426),(b={}).styleTagTransform=l(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=t(),b.insertStyleElement=s(),n()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals,v.p,v.p,v.p,v.p,v.p,console.log("This is the inbox panel"),document.querySelector("[data-inbox-content]"),document.querySelector("[data-bg-overlay]"),document.querySelector("[data-inbox-header]"),document.querySelector("[data-header-logo]"),document.querySelector("[data-header-h1]"),document.querySelector("[data-inbox-sidebar]"),document.querySelector("[data-upcoming-events-div]"),document.querySelectorAll("[data-sidebar-button]"),document.querySelector("main"),document.querySelector("[data-sidebar-project-div]"),document.querySelector("[data-sidebar-project-h2]"),document.querySelector("#sidebar-add-project-button"),document.querySelector("[data-sidebar-add-project-icon]"),document.querySelector("[data-list-title-h1]"),document.querySelector("[data-add-task-button]"),document.querySelector("[data-add-task-icon]"),sidebarDateButtonArray.forEach((e=>{e.addEventListener("click",(e=>{}))}))})();