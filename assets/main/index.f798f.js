window.__require=function t(e,n,r){function o(i,l){if(!n[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var a="function"==typeof __require&&__require;if(!l&&a)return a(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var f=n[i]={exports:{}};e[i][0].call(f.exports,function(t){return o(e[i][1][t]||t)},f,f.exports,t,e,n,r)}return n[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)o(r[i]);return o}({HelloWorld:[function(t,e){"use strict";cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(){}}),cc._RF.pop()},{}],Test:[function(t,e,n){"use strict";cc._RF.push(e,"82f057xXIZEqoq4gO24ulpc","Test");var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=this&&this.__decorate||function(t,e,n,r){var o,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(i=(c<3?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function i(t){try{u(r.next(t))}catch(e){c(e)}}function l(t){try{u(r.throw(t))}catch(e){c(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,l)}u((r=r.apply(t,e||[])).next())})},l=this&&this.__generator||function(t,e){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function l(t){return function(e){return u([t,e])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(l){c=[6,l],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var u=cc._decorator,a=u.ccclass,f=u.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return o(e,t),e.prototype.start=function(){},e.prototype.connect=function(){return i(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return[4,window.connectdata()];case 1:return t.sent(),[2]}})})},c([f(cc.Label)],e.prototype,"label",void 0),c([f],e.prototype,"text",void 0),c([a],e)}(cc.Component);n.default=s,cc._RF.pop()},{}]},{},["HelloWorld","Test"]);