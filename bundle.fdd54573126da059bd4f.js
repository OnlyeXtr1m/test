!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],c=e.base?i[0]+e.base:i[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,e),references:1}),r.push(l)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(n,e){var t,r,o;if(e.singleton){var i=h++;t=m||(m=u(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(n,e),u=0;u<t.length;u++){var l=s(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n    background-color: #2196F3;\r\n    padding: 15px;\r\n}\r\n\r\n.down-text {\r\n    color: white;\r\n    padding-top: 20px;\r\n}\r\n\r\n.floating-btn {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    right: 50px;\r\n}\r\n\r\n.modal {\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    margin: 100px auto;\r\n    overflow-y: auto;\r\n    background: white;\r\n}\r\n\r\n.modal > h1 {\r\n    text-align: center;\r\n}\r\n\r\n.modal-content {\r\n    padding: 1rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #sidebar {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 180px;\r\n        height: 100%;\r\n        padding-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * Content CSS\r\n */\r\n@media (min-width: 768px) {\r\n    #content {\r\n        margin-left: 180px;\r\n    }\r\n}\r\n\r\n@media (max-height: 700px) {\r\n    #all-button {\r\n        display: none;\r\n    }\r\n}",""]),e.default=o},function(n,e,t){"use strict";t.r(e);class r{static create(n){return fetch("https://questions-form-only.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(e=>(n.id=e.name,n)).then(o).then(r.renderList)}static fetch(n){return n?fetch("https://questions-form-only.firebaseio.com/questions.json?auth="+n).then(n=>n.json()).then(n=>n.error?`<p class='error'>${n.error}</p>`:n?Object.keys(n).map(e=>({...n[e],id:e})):[]):Promise.resolve("<p class='error'>У вас нет токена</p>")}static renderList(){const n=i(),e=n.length?n.map(a).join(""):'<div class="mui--text-headline">Вопросов еще нет</div>';document.getElementById("list").innerHTML=e}static listToHTML(n){return n.length?`<ol>${n.map(n=>`<li>${n.text}</li>`).join("")}</ol>`:"<p>Пожеланий пока нет</p>"}}function o(n){const e=i();e.push(n),localStorage.setItem("questions",JSON.stringify(e))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(n){return`\n    <div class="mui--text-black-54">\n        ${new Date(n.date).toLocaleDateString()}\n        ${new Date(n.date).toLocaleTimeString()}\n    </div>\n    <div>${n.text}</div>\n    <br>\n    `}function s(n){return n.length>=10}function c(n,e){const t=document.createElement("div");t.classList.add("modal");const r=`\n    <h1>${n}</h1>\n    <div class="modal-content">${e}</div>\n    `;t.innerHTML=r,mui.overlay("on",t)}t(1);const u=document.getElementById("form"),l=u.querySelector("#question-input"),d=u.querySelector("#submit"),f=u.querySelector("#all-button");function p(n){n.preventDefault();(function(n,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_I6m35nv1BwaCJGabb-n-M264iMy7FJw",{method:"POST",body:JSON.stringify({email:n,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>n.idToken)})(n.target.querySelector("#email").value,n.target.querySelector("#password").value).then(r.fetch).then(m)}function m(n){"string"==typeof n?c("Ошибка",n):c("Пожелания",r.listToHTML(n))}u.addEventListener("submit",(function(n){if(n.preventDefault(),s(l.value)){const n={text:l.value.trim(),date:(new Date).toJSON()};d.disabled=!0,r.create(n).then(()=>{l.value="",l.className="",d.disabled=!1})}})),f.addEventListener("click",(function(){c("Авторизация",'\n         <form class="mui-form" id="auth-form">\n                <div class="mui-textfield mui-textfield--float-label">\n                    <input type="email" id="email" required>\n                    <label for="email">Email</label>\n                </div>\n                <div class="mui-textfield mui-textfield--float-label">\n                    <input type="password" id="password" required>\n                    <label for="password">Пароль</label>\n                </div>\n                <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary" >Войти</button>\n            </form>\n    '),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),l.addEventListener("input",()=>{d.disabled=!s(l.value)})}]);