/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={522:(t,r,n)=>{n.d(r,{A:()=>c});var e=n(354),o=n.n(e),i=n(314),a=n.n(i)()(o());a.push([t.id,'@charset "UTF-8";\n\nbody{\n    background: rgb(20, 20, 97);\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nh1{\n    text-align: center;\n    color: black;\n    margin: 40px 0;\n}\n\nsection{\n    background-color: white;\n    width: 751px;\n}\n\n.senha-gerada{\n    font-size: 2em;\n    color: rgb(20, 20, 97);\n    margin: 40px 0;\n}\n\nlabel{\n    padding: 10px;\n}\n\ninput[type="checkbox"]{\n    width: 25px;\n    height: 25px;\n    padding: 3px 5px;\n}\n\nbutton{\n    display: block;\n    margin: 50px auto;\n    font-size: 1em;\n}',"",{version:3,sources:["webpack://./Front-End/src/assets/css/style.css"],names:[],mappings:"AAAA,gBAAgB;;AAEhB;IACI,2BAA2B;IAC3B,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,cAAc;AAClB",sourcesContent:['@charset "UTF-8";\r\n\r\nbody{\r\n    background: rgb(20, 20, 97);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    color: black;\r\n    margin: 40px 0;\r\n}\r\n\r\nsection{\r\n    background-color: white;\r\n    width: 751px;\r\n}\r\n\r\n.senha-gerada{\r\n    font-size: 2em;\r\n    color: rgb(20, 20, 97);\r\n    margin: 40px 0;\r\n}\r\n\r\nlabel{\r\n    padding: 10px;\r\n}\r\n\r\ninput[type="checkbox"]{\r\n    width: 25px;\r\n    height: 25px;\r\n    padding: 3px 5px;\r\n}\r\n\r\nbutton{\r\n    display: block;\r\n    margin: 50px auto;\r\n    font-size: 1em;\r\n}'],sourceRoot:""}]);const c=a},314:t=>{t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var n="",e=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),e&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=t(r),e&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(t,n,e,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:t=>{t.exports=function(t){var r=t[1],n=t[3];if(!n)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},72:t=>{var r=[];function n(t){for(var n=-1,e=0;e<r.length;e++)if(r[e].identifier===t){n=e;break}return n}function e(t,e){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=e.base?u[0]+e.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)r[p].references++,r[p].updater(h);else{var d=o(h,e);e.byIndex=c,r.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(t,r){var n=r.domAPI(r);return n.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;n.update(t=r)}else n.remove()}}t.exports=function(t,o){var i=e(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);r[c].references--}for(var u=e(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=u}}},659:t=>{var r={};t.exports=function(t,n){var e=function(t){if(void 0===r[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}r[t]=n}return r[t]}(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},540:t=>{t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},56:(t,r,n)=>{t.exports=function(t){var r=n.nc;r&&t.setAttribute("nonce",r)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(n){!function(t,r,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,o&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,t,r.options)}(r,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},113:t=>{t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return t[e](i,i.exports,n),i.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),n.nc=void 0;var e=n(72),o=n.n(e),i=n(825),a=n.n(i),c=n(659),u=n.n(c),s=n(56),l=n.n(s),f=n(540),p=n.n(f),h=n(113),d=n.n(h),y=n(522),v={};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function m(){m=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,o=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var i=r&&r.prototype instanceof A?r:A,a=Object.create(i.prototype),c=new T(e||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function A(){}function b(){}function x(){}var w={};s(w,a,(function(){return this}));var C=Object.getPrototypeOf,E=C&&C(C(_([])));E&&E!==n&&e.call(E,a)&&(w=E);var I=x.prototype=A.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function B(t,r){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==g(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,n,e){var o=p;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=j(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=f(r,n,e);if("normal"===s.type){if(o=e.done?y:h,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=y,e.method="throw",e.arg=s.arg)}}}function j(r,n){var e=n.method,o=r.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,j(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=f(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function n(){for(;++o<r.length;)if(e.call(r,o))return n.value=r[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(g(r)+" is not iterable")}return b.prototype=x,o(I,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(I),t},r.awrap=function(t){return{__await:t}},L(B.prototype),s(B.prototype,c,(function(){return this})),r.AsyncIterator=B,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new B(l(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(I),s(I,u,"Generator"),s(I,a,(function(){return this})),s(I,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=_,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function o(e,o){return c.type="throw",c.arg=r,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;S(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:_(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}function A(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?r(u):Promise.resolve(u).then(e,o)}function b(){var t;return t=m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,r){setTimeout((function(){console.log("Hey, sou a promise"),t()}),2e3)}));case 2:console.log("Terminou");case 3:case"end":return t.stop()}}),t)})),b=function(){var r=this,n=arguments;return new Promise((function(e,o){var i=t.apply(r,n);function a(t){A(i,e,o,a,c,"next",t)}function c(t){A(i,e,o,a,c,"throw",t)}a(void 0)}))},b.apply(this,arguments)}v.styleTagTransform=d(),v.setAttributes=l(),v.insert=u().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(y.A,v),y.A&&y.A.locals&&y.A.locals,function(){b.apply(this,arguments)}()})();
//# sourceMappingURL=bundle.js.map