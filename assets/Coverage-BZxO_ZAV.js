import{n as e,r as t,t as n}from"./jsx-runtime-DAs1UGHr.js";import{t as r}from"./react-BnRWbv_O.js";import{t as i}from"./react-dom-DMFVqbGW.js";var a=t(r(),1);function o(e,t){let n=(0,a.useRef)(t);(0,a.useEffect)(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function s(e){return Object.freeze({__version:1,map:e})}function c(e,t){return Object.freeze({...e,...t})}var l=(0,a.createContext)(null);function u(){let e=(0,a.use)(l);if(e==null)throw Error(`No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>`);return e}i();function d(e){function t(t,n){let{instance:r,context:i}=e(t).current;(0,a.useImperativeHandle)(n,()=>r);let{children:o}=t;return o==null?null:a.createElement(l,{value:i},o)}return(0,a.forwardRef)(t)}function f(e){function t(t,n){let{instance:r}=e(t).current;return(0,a.useImperativeHandle)(n,()=>r),null}return(0,a.forwardRef)(t)}function p(e,t){let n=(0,a.useRef)(void 0);(0,a.useEffect)(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function m(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}var h=e(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(e,(function(e){var t=`1.9.4`;function n(e){var t,n,r,i;for(n=1,r=arguments.length;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function S(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var C=window.requestAnimationFrame||b(`RequestAnimationFrame`)||S,w=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function T(e,t,n){if(n&&C===S)e.call(t);else return C.call(window,i(e,t))}function E(e){e&&w.call(window,e)}var D={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:w,requestAnimFrame:T,cancelAnimFrame:E};function O(){}O.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(ee(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},O.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},O.mergeOptions=function(e){return n(this.prototype.options,e),this},O.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function ee(e){if(!(typeof L>`u`||!L||!L.Mixin)){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var k={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e];return}if(typeof t!=`function`){console.warn(`wrong listener type: `+typeof t);return}var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};k.addEventListener=k.on,k.removeEventListener=k.clearAllEventListeners=k.off,k.addOneTimeEventListener=k.once,k.fireEvent=k.fire,k.hasEventListeners=k.listens;var te=O.extend(k);function A(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var ne=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};A.prototype={clone:function(){return new A(this.x,this.y)},add:function(e){return this.clone()._add(j(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(j(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new A(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new A(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ne(this.x),this.y=ne(this.y),this},distanceTo:function(e){e=j(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=j(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=j(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function j(e,t,n){return e instanceof A?e:_(e)?new A(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new A(e.x,e.y):new A(e,t,n)}function M(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}M.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof A||typeof e[0]==`number`||`x`in e)t=n=j(e);else if(e=N(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return j((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return j(this.min.x,this.max.y)},getTopRight:function(){return j(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof A?j(e):N(e),e instanceof M?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=N(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=N(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return N(j(t.x-r,t.y-i),j(n.x+r,n.y+i))},equals:function(e){return e?(e=N(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function N(e,t){return!e||e instanceof M?e:new M(e,t)}function P(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}P.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof I)r=e,i=e;else if(e instanceof P){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(R(e)||F(e)):this;return!t&&!n?(this._southWest=new I(r.lat,r.lng),this._northEast=new I(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new P(new I(t.lat-r,t.lng-i),new I(n.lat+r,n.lng+i))},getCenter:function(){return new I((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new I(this.getNorth(),this.getWest())},getSouthEast:function(){return new I(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof I||`lat`in e?R(e):F(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof P?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=F(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=F(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=F(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function F(e,t){return e instanceof P?e:new P(e,t)}function I(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}I.prototype={equals:function(e,t){return e?(e=R(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return ie.distance(this,R(e))},wrap:function(){return ie.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return F([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new I(this.lat,this.lng,this.alt)}};function R(e,t,n){return e instanceof I?e:_(e)&&typeof e[0]!=`object`?e.length===3?new I(e[0],e[1],e[2]):e.length===2?new I(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new I(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new I(e,t,n)}var re={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new M(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new I(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new P(new I(a.lat-r,a.lng-i),new I(o.lat-r,o.lng-i))}},ie=n({},re,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),ae=6378137,z={R:ae,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new A(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new I((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=ae*Math.PI;return new M([-e,-e],[e,e])})()};function oe(e,t,n,r){if(_(e)){this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3];return}this._a=e,this._b=t,this._c=n,this._d=r}oe.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new A((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function se(e,t,n,r){return new oe(e,t,n,r)}var ce=n({},ie,{code:`EPSG:3857`,projection:z,transformation:function(){var e=.5/(Math.PI*z.R);return se(e,.5,-e,.5)}()}),le=n({},ce,{code:`EPSG:900913`});function ue(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function B(e,t){var n=``,r,i,a,o,s,c;for(r=0,a=e.length;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?W.svg?`z`:`x`:``}return n||`M0 0`}var V=document.documentElement.style,de=`ActiveXObject`in window,fe=de&&!document.addEventListener,pe=`msLaunchUri`in navigator&&!(`documentMode`in document),H=Ge(`webkit`),me=Ge(`android`),he=Ge(`android 2`)||Ge(`android 3`),ge=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),_e=me&&Ge(`Google`)&&ge<537&&!(`AudioNode`in window),ve=!!window.opera,ye=!pe&&Ge(`chrome`),be=Ge(`gecko`)&&!H&&!ve&&!de,U=!ye&&Ge(`safari`),xe=Ge(`phantom`),Se=`OTransition`in V,Ce=navigator.platform.indexOf(`Win`)===0,we=de&&`transition`in V,Te=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!he,Ee=`MozPerspective`in V,De=!window.L_DISABLE_3D&&(we||Te||Ee)&&!Se&&!xe,Oe=typeof orientation<`u`||Ge(`mobile`),ke=Oe&&H,Ae=Oe&&Te,je=!window.PointerEvent&&window.MSPointerEvent,Me=!!(window.PointerEvent||je),Ne=`ontouchstart`in window||!!window.TouchEvent,Pe=!window.L_NO_TOUCH&&(Ne||Me),Fe=Oe&&ve,Ie=Oe&&be,Le=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Re=function(){var e=!1;try{var t=Object.defineProperty({},`passive`,{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),ze=function(){return!!document.createElement(`canvas`).getContext}(),Be=!!(document.createElementNS&&ue(`svg`).createSVGRect),Ve=!!Be&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),He=!Be&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),Ue=navigator.platform.indexOf(`Mac`)===0,We=navigator.platform.indexOf(`Linux`)===0;function Ge(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var W={ie:de,ielt9:fe,edge:pe,webkit:H,android:me,android23:he,androidStock:_e,opera:ve,chrome:ye,gecko:be,safari:U,phantom:xe,opera12:Se,win:Ce,ie3d:we,webkit3d:Te,gecko3d:Ee,any3d:De,mobile:Oe,mobileWebkit:ke,mobileWebkit3d:Ae,msPointer:je,pointer:Me,touch:Pe,touchNative:Ne,mobileOpera:Fe,mobileGecko:Ie,retina:Le,passiveEvents:Re,canvas:ze,svg:Be,vml:He,inlineSvg:Ve,mac:Ue,linux:We},Ke=W.msPointer?`MSPointerDown`:`pointerdown`,qe=W.msPointer?`MSPointerMove`:`pointermove`,Je=W.msPointer?`MSPointerUp`:`pointerup`,Ye=W.msPointer?`MSPointerCancel`:`pointercancel`,Xe={touchstart:Ke,touchmove:qe,touchend:Je,touchcancel:Ye},Ze={touchstart:st,touchmove:ot,touchend:ot,touchcancel:ot},Qe={},$e=!1;function et(e,t,n){return t===`touchstart`&&at(),Ze[t]?(n=Ze[t].bind(this,n),e.addEventListener(Xe[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function tt(e,t,n){if(!Xe[t]){console.warn(`wrong event specified:`,t);return}e.removeEventListener(Xe[t],n,!1)}function nt(e){Qe[e.pointerId]=e}function rt(e){Qe[e.pointerId]&&(Qe[e.pointerId]=e)}function it(e){delete Qe[e.pointerId]}function at(){$e||=(document.addEventListener(Ke,nt,!0),document.addEventListener(qe,rt,!0),document.addEventListener(Je,it,!0),document.addEventListener(Ye,it,!0),!0)}function ot(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],Qe)t.touches.push(Qe[n]);t.changedTouches=[t],e(t)}}function st(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&Q(t),ot(e,t)}function ct(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var lt=200;function ut(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1){r=e.detail;return}if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=Xt(e);if(!(i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})&&!i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement}))){var a=Date.now();a-n<=lt?(r++,r===2&&t(ct(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function dt(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var ft=Tt([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),pt=Tt([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),mt=pt===`webkitTransition`||pt===`OTransition`?pt+`End`:`transitionend`;function ht(e){return typeof e==`string`?document.getElementById(e):e}function gt(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function G(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function K(e){var t=e.parentNode;t&&t.removeChild(e)}function _t(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function vt(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function yt(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function bt(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=St(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function q(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!bt(e,t)){var a=St(e);xt(e,(a?a+` `:``)+t)}}function J(e,t){e.classList===void 0?xt(e,d((` `+St(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function xt(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function St(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function Ct(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&wt(e,t)}function wt(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function Tt(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function Et(e,t,n){var r=t||new A(0,0);e.style[ft]=(W.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function Y(e,t){e._leaflet_pos=t,W.any3d?Et(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function Dt(e){return e._leaflet_pos||new A(0,0)}var Ot,kt,At;if(`onselectstart`in document)Ot=function(){X(window,`selectstart`,Q)},kt=function(){Z(window,`selectstart`,Q)};else{var jt=Tt([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Ot=function(){if(jt){var e=document.documentElement.style;At=e[jt],e[jt]=`none`}},kt=function(){jt&&(document.documentElement.style[jt]=At,At=void 0)}}function Mt(){X(window,`dragstart`,Q)}function Nt(){Z(window,`dragstart`,Q)}var Pt,Ft;function It(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Lt(),Pt=e,Ft=e.style.outlineStyle,e.style.outlineStyle=`none`,X(window,`keydown`,Lt))}function Lt(){Pt&&(Pt.style.outlineStyle=Ft,Pt=void 0,Ft=void 0,Z(window,`keydown`,Lt))}function Rt(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function zt(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var Bt={__proto__:null,TRANSFORM:ft,TRANSITION:pt,TRANSITION_END:mt,get:ht,getStyle:gt,create:G,remove:K,empty:_t,toFront:vt,toBack:yt,hasClass:bt,addClass:q,removeClass:J,setClass:xt,getClass:St,setOpacity:Ct,testProp:Tt,setTransform:Et,setPosition:Y,getPosition:Dt,get disableTextSelection(){return Ot},get enableTextSelection(){return kt},disableImageDrag:Mt,enableImageDrag:Nt,preventOutline:It,restoreOutline:Lt,getSizedParentNode:Rt,getScale:zt};function X(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)Wt(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)Wt(e,t[a],n,r)}return this}var Vt=`_leaflet_events`;function Z(e,t,n,r){if(arguments.length===1)Ht(e),delete e[Vt];else if(t&&typeof t==`object`)for(var i in t)Gt(e,i,t[i],n);else if(t=f(t),arguments.length===2)Ht(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)Gt(e,t[a],n,r);return this}function Ht(e,t){for(var n in e[Vt]){var r=n.split(/\d/)[0];(!t||t(r))&&Gt(e,r,null,null,n)}}var Ut={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function Wt(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[Vt]&&e[Vt][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!W.touchNative&&W.pointer&&t.indexOf(`touch`)===0?a=et(e,t,a):W.touch&&t===`dblclick`?a=ut(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Ut[t]||t,a,W.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,en(e,t)&&s(t)},e.addEventListener(Ut[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[Vt]=e[Vt]||{},e[Vt][i]=a}function Gt(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[Vt]&&e[Vt][i];if(!a)return this;!W.touchNative&&W.pointer&&t.indexOf(`touch`)===0?tt(e,t,a):W.touch&&t===`dblclick`?dt(e,a):`removeEventListener`in e?e.removeEventListener(Ut[t]||t,a,!1):e.detachEvent(`on`+t,a),e[Vt][i]=null}function Kt(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function qt(e){return Wt(e,`wheel`,Kt),this}function Jt(e){return X(e,`mousedown touchstart dblclick contextmenu`,Kt),e._leaflet_disable_click=!0,this}function Q(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function Yt(e){return Q(e),Kt(e),this}function Xt(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function Zt(e,t){if(!t)return new A(e.clientX,e.clientY);var n=zt(t),r=n.boundingClientRect;return new A((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var Qt=W.linux&&W.chrome?window.devicePixelRatio:W.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function $t(e){return W.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/Qt:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function en(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var tn={__proto__:null,on:X,off:Z,stopPropagation:Kt,disableScrollPropagation:qt,disableClickPropagation:Jt,preventDefault:Q,stop:Yt,getPropagationPath:Xt,getMousePosition:Zt,getWheelDelta:$t,isExternalTarget:en,addListener:X,removeListener:Z},nn=te.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Dt(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),Y(this._el,n),this.fire(`step`)},_complete:function(){E(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),$=te.extend({options:{crs:ce,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(R(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=pt&&W.any3d&&!W.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),X(this._proxy,mt,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(R(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=W.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=W.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof A?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():F(e);var n=j(t.paddingTopLeft||t.padding||[0,0]),r=j(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=F(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=j(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new nn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){q(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!W.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=R(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,S=n.duration?1e3*n.duration:1e3*x*.8;function C(){var n=(Date.now()-b)/S,a=y(n)*x;n<=1?(this._flyToFrame=T(C,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),C.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=F(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,F(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=j(t.paddingTopLeft||t.padding||[0,0]),r=j(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=N([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new I(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),K(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(E(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)K(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=G(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new P(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=F(e),n=j(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=N(this.project(s,r),this.project(o,r)).getSize(),u=W.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new A(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new M(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(R(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(j(e),t)},layerPointToLatLng:function(e){var t=j(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(R(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(R(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(F(e))},distance:function(e,t){return this.options.crs.distance(R(e),R(t))},containerPointToLayerPoint:function(e){return j(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return j(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(j(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(R(e)))},mouseEventToContainerPoint:function(e){return Zt(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=ht(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);X(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&W.any3d,q(e,`leaflet-container`+(W.touch?` leaflet-touch`:``)+(W.retina?` leaflet-retina`:``)+(W.ielt9?` leaflet-oldie`:``)+(W.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=gt(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),Y(this._mapPane,new A(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(q(e.markerPane,`leaflet-zoom-hide`),q(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){Y(this._mapPane,new A(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){Y(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?Z:X;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),W.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!en(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&It(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&Q(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return Dt(this._mapPane)||new A(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return N([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new M(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new M(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=N(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new A(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=W.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){J(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=G(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=ft,n=this._proxy.style[t];Et(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){K(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();Et(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(T(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,q(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&J(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function rn(e,t){return new $(e,t)}var an=O.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return q(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map?(K(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),this._map=null,this):this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),on=function(e){return new an(e)};$.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=G(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=G(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)K(this._controlCorners[e]);K(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var sn=an.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:+(r<n)}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return an.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){q(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(q(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):J(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return J(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=G(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),Jt(t),qt(t);var r=this._section=G(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),X(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=G(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),X(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){Q(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=G(`div`,e+`-base`,r),this._separator=G(`div`,e+`-separator`,r),this._overlaysList=G(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;_t(this._baseLayersList),_t(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=+!r.overlay;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),X(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,X(e,`click`,Q),this.expand();var t=this;setTimeout(function(){Z(e,`click`,Q),t._preventClick=!1})}}),cn=function(e,t,n){return new sn(e,t,n)},ln=an.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=G(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=G(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),Jt(a),X(a,`click`,Yt),X(a,`click`,i,this),X(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;J(this._zoomInButton,t),J(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(q(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(q(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});$.mergeOptions({zoomControl:!0}),$.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ln,this.addControl(this.zoomControl))});var un=function(e){return new ln(e)},dn=an.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=G(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=G(`div`,t,n)),e.imperial&&(this._iScale=G(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),fn=function(e){return new dn(e)},pn=an.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(W.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=G(`div`,`leaflet-control-attribution`),Jt(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});$.mergeOptions({attributionControl:!0}),$.addInitHook(function(){this.options.attributionControl&&new pn().addTo(this)}),an.Layers=sn,an.Zoom=ln,an.Scale=dn,an.Attribution=pn,on.layers=cn,on.zoom=un,on.scale=fn,on.attribution=function(e){return new pn(e)};var mn=O.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});mn.addTo=function(e,t){return e.addHandler(t,this),this};var hn={Events:k},gn=W.touch?`touchstart mousedown`:`mousedown`,_n=te.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(X(this._dragStartTarget,gn,this._onDown,this),!0)},disable:function(){this._enabled&&(_n._dragging===this&&this.finishDrag(!0),Z(this._dragStartTarget,gn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!bt(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1){_n._dragging===this&&this.finishDrag();return}if(!(_n._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(_n._dragging=this,this._preventOutline&&It(this._element),Mt(),Ot(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=Rt(this._element);this._startPoint=new A(t.clientX,t.clientY),this._startPos=Dt(this._element),this._parentScale=zt(n);var r=e.type===`mousedown`;X(document,r?`mousemove`:`touchmove`,this._onMove,this),X(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1){this._moved=!0;return}var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new A(t.clientX,t.clientY)._subtract(this._startPoint);!n.x&&!n.y||Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,Q(e),this._moved||(this.fire(`dragstart`),this._moved=!0,q(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),q(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition())}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),Y(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){J(document.body,`leaflet-dragging`),this._lastTarget&&=(J(this._lastTarget,`leaflet-drag-target`),null),Z(document,`mousemove touchmove`,this._onMove,this),Z(document,`mouseup touchend touchcancel`,this._onUp,this),Nt(),kt();var t=this._moved&&this._moving;this._moving=!1,_n._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function vn(e,t,n){var r,i=[1,4,2,8],a,o,s,c,l,u,d,f;for(a=0,u=e.length;a<u;a++)e[a]._code=jn(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=An(l,c,d,t,n),f._code=jn(f,t),r.push(f)):(l._code&d&&(f=An(l,c,d,t,n),f._code=jn(f,t),r.push(f)),r.push(c));e=r}return e}function yn(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Pn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=R([0,0]),f=F(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=bn(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=R(e[n]);m.push(t.project(R([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(j(u));return R([g.lat+d.lat,g.lng+d.lng])}function bn(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=R(e[i]);t+=a.lat,n+=a.lng,r++}return R([t/r,n/r])}var xn={__proto__:null,clipPolygon:vn,polygonCenter:yn,centroid:bn};function Sn(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=Dn(e,n),e=Tn(e,n),e}function Cn(e,t,n){return Math.sqrt(Nn(e,t,n,!0))}function wn(e,t,n){return Nn(e,t,n)}function Tn(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,En(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function En(e,t,n,r,i){var a=0,o,s,c;for(s=r+1;s<=i-1;s++)c=Nn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,En(e,t,n,r,o),En(e,t,n,o,i))}function Dn(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)Mn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var On;function kn(e,t,n,r,i){var a=r?On:jn(e,n),o=jn(t,n),s,c,l;for(On=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=An(e,t,s,n,i),l=jn(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function An(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new A(l,u,i)}function jn(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function Mn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function Nn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new A(i,a)}function Pn(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function Fn(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Pn(e)}function In(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Pn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=R([0,0]),d=F(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=bn(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=R(e[n]);p.push(t.project(R([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(j(l));return R([h.lat+u.lat,h.lng+u.lng])}var Ln={__proto__:null,simplify:Sn,pointToSegmentDistance:Cn,closestPointOnSegment:wn,clipSegment:kn,_getEdgeIntersection:An,_getBitCode:jn,_sqClosestPointOnSegment:Nn,isFlat:Pn,_flat:Fn,polylineCenter:In},Rn={project:function(e){return new A(e.lng,e.lat)},unproject:function(e){return new I(e.y,e.x)},bounds:new M([-180,-90],[180,90])},zn={R:6378137,R_MINOR:6356752.314245179,bounds:new M([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new A(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new I(o*t,e.x*t/n)}},Bn={__proto__:null,LonLat:Rn,Mercator:zn,SphericalMercator:z},Vn=n({},ie,{code:`EPSG:3395`,projection:zn,transformation:function(){var e=.5/(Math.PI*zn.R);return se(e,.5,-e,.5)}()}),Hn=n({},ie,{code:`EPSG:4326`,projection:Rn,transformation:se(1/180,1,-1/180,.5)}),Un=n({},re,{projection:Rn,transformation:se(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});re.Earth=ie,re.EPSG3395=Vn,re.EPSG3857=ce,re.EPSG900913=le,re.EPSG4326=Hn,re.Simple=Un;var Wn=te.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});$.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]?this:(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e),this)},removeLayer:function(e){var t=o(e);return this._layers[t]?(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null,this):this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Gn=Wn.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),Kn=function(e,t){return new Gn(e,t)},qn=Gn.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),Gn.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),Gn.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new P;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),Jn=function(e,t){return new qn(e,t)},Yn=O.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=j(r),a=j(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return W.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function Xn(e){return new Yn(e)}var Zn=Yn.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof Zn.imagePath!=`string`&&(Zn.imagePath=this._detectIconPath()),(this.options.imagePath||Zn.imagePath)+Yn.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=G(`div`,`leaflet-default-icon-path`,document.body),t=gt(e,`background-image`)||gt(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),Qn=mn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new _n(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),q(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&J(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=Dt(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=N(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=j((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),Y(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=T(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=Dt(t._icon),i=t._map.layerPointToLatLng(r);n&&Y(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){E(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),$n=Wn.extend({options:{icon:new Zn,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=R(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=R(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),q(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&X(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(q(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Z(this._icon,`focus`,this._panOnFocus,this),K(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&K(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&Y(this._icon,e),this._shadow&&Y(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(q(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),Qn)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Qn(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&Ct(this._icon,e),this._shadow&&Ct(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?j(t.iconSize):j(0,0),r=t.iconAnchor?j(t.iconAnchor):j(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function er(e,t){return new $n(e,t)}var tr=Wn.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),nr=tr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=R(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=R(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return tr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new M(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function rr(e,t){return new nr(e,t)}var ir=nr.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=R(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new P(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:tr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===ie.distance){var i=Math.PI/180,a=this._mRadius/ie.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function ar(e,t,n){return new ir(e,t,n)}var or=tr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=Nn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return In(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=R(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new P,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Pn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Pn(e),r=0,i=e.length;r<i;r++)n?(t[r]=R(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new M;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new A(e,e);this._rawPxBounds&&(this._pxBounds=new M([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof I,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}var t=this._parts,n,r,i,a,o,s,c;for(n=0,i=0,a=this._rings.length;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=kn(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=Sn(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if(!(!t&&r===0)&&Cn(e,s[i],s[r])<=c)return!0;return!1}});function sr(e,t){return new or(e,t)}or._flat=Fn;var cr=or.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return yn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=or.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof I&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){or.prototype._setLatLngs.call(this,e),Pn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Pn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new A(t,t);if(e=new M(e.min.subtract(n),e.max.add(n)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(e))){if(this.options.noClip){this._parts=this._rings;return}for(var r=0,i=this._rings.length,a;r<i;r++)a=vn(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||or.prototype._containsPoint.call(this,e,!0)}});function lr(e,t){return new cr(e,t)}var ur=qn.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=dr(e,a);return o?(o.feature=vr(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function dr(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||pr,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),fr(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(fr(a,e,s,t));return new qn(i);case`LineString`:case`MultiLineString`:return c=mr(r,n.type===`LineString`?0:1,o),new or(c,t);case`Polygon`:case`MultiPolygon`:return c=mr(r,n.type===`Polygon`?1:2,o),new cr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=dr({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new qn(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=dr(n.features[l],t);f&&i.push(f)}return new qn(i);default:throw Error(`Invalid GeoJSON object.`)}}function fr(e,t,n,r){return e?e(t,n):new $n(n,r&&r.markersInheritOptions&&r)}function pr(e){return new I(e[1],e[0],e[2])}function mr(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?mr(e[i],t-1,n):(n||pr)(e[i]),r.push(o);return r}function hr(e,t){return e=R(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function gr(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?gr(e[a],Pn(e[a])?0:t-1,n,r):hr(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function _r(e,t){return e.feature?n({},e.feature,{geometry:t}):vr(t)}function vr(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var yr={toGeoJSON:function(e){return _r(this,{type:`Point`,coordinates:hr(this.getLatLng(),e)})}};$n.include(yr),ir.include(yr),nr.include(yr),or.include({toGeoJSON:function(e){var t=!Pn(this._latlngs),n=gr(this._latlngs,+!!t,!1,e);return _r(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),cr.include({toGeoJSON:function(e){var t=!Pn(this._latlngs),n=t&&!Pn(this._latlngs[0]),r=gr(this._latlngs,n?2:+!!t,!0,e);return t||(r=[r]),_r(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),Gn.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),_r(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=vr(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?_r(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function br(e,t){return new ur(e,t)}var xr=br,Sr=Wn.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=F(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(q(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){K(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&vt(this._image),this},bringToBack:function(){return this._map&&yt(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=F(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:G(`img`);if(q(t,`leaflet-image-layer`),this._zoomAnimated&&q(t,`leaflet-zoom-animated`),this.options.className&&q(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e){this._url=t.src;return}t.src=this._url,t.alt=this.options.alt},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;Et(this._image,n,t)},_reset:function(){var e=this._image,t=new M(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();Y(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){Ct(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),Cr=function(e,t,n){return new Sr(e,t,n)},wr=Sr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:G(`video`);if(q(t,`leaflet-image-layer`),this._zoomAnimated&&q(t,`leaflet-zoom-animated`),this.options.className&&q(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=G(`source`);s.src=this._url[o],t.appendChild(s)}}});function Tr(e,t,n){return new wr(e,t,n)}var Er=Sr.extend({_initImage:function(){var e=this._image=this._url;q(e,`leaflet-image-layer`),this._zoomAnimated&&q(e,`leaflet-zoom-animated`),this.options.className&&q(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Dr(e,t,n){return new Er(e,t,n)}var Or=Wn.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof I||_(e))?(this._latlng=R(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&Ct(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&Ct(this._container,1),this.bringToFront(),this.options.interactive&&(q(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(Ct(this._container,0),this._removeTimeout=setTimeout(i(K,void 0,this._container),200)):K(this._container),this.options.interactive&&(J(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=R(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&vt(this._container),this},bringToBack:function(){return this._map&&yt(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof qn){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e)if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`);return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=j(this.options.offset),n=this._getAnchor();this._zoomAnimated?Y(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});$.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),Wn.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var kr=Or.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,Or.prototype.openOn.call(this,e)},onAdd:function(e){Or.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof tr||this._source.on(`preclick`,Kt))},onRemove:function(e){Or.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof tr||this._source.off(`preclick`,Kt))},getEvents:function(){var e=Or.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=G(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=G(`div`,e+`-content-wrapper`,t);if(this._contentNode=G(`div`,e+`-content`,n),Jt(t),qt(this._contentNode),X(t,`contextmenu`,Kt),this._tipContainer=G(`div`,e+`-tip-container`,t),this._tip=G(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=G(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,X(r,`click`,function(e){Q(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,q(e,a)):J(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();Y(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var e=this._map,t=parseInt(gt(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new A(this._containerLeft,-n-this._containerBottom);i._add(Dt(this._container));var a=e.layerPointToContainerPoint(i),o=j(this.options.autoPanPadding),s=j(this.options.autoPanPaddingTopLeft||o),c=j(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}},_getAnchor:function(){return j(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Ar=function(e,t){return new kr(e,t)};$.mergeOptions({closePopupOnClick:!0}),$.include({openPopup:function(e,t,n){return this._initOverlay(kr,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),Wn.include({bindPopup:function(e,t){return this._popup=this._initOverlay(kr,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof qn||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(!(!this._popup||!this._map)){Yt(e);var t=e.layer||e.target;if(this._popup._source===t&&!(t instanceof tr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng);return}this._popup._source=t,this.openPopup(e.latlng)}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var jr=Or.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){Or.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){Or.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=Or.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){this._contentNode=this._container=G(`div`,`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`)),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=j(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(j(t,n,!0)).add(u).add(d),J(i,`leaflet-tooltip-right`),J(i,`leaflet-tooltip-left`),J(i,`leaflet-tooltip-top`),J(i,`leaflet-tooltip-bottom`),q(i,`leaflet-tooltip-`+s),Y(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&Ct(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return j(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Mr=function(e,t){return new jr(e,t)};$.include({openTooltip:function(e,t,n){return this._initOverlay(jr,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),Wn.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(jr,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(!(!e&&this._tooltipHandlersAdded)){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof qn||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(X(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),X(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)});return}this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var Nr=Yn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(_t(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=j(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function Pr(e){return new Nr(e)}Yn.Default=Zn;var Fr=Wn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:W.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),K(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(vt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(yt(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof A?e:new A(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!W.ielt9){Ct(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(!(!i.current||!i.loaded)){var a=Math.min(1,(e-i.loaded)/200);Ct(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=G(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(K(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=G(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom){this._removeAllTiles();return}for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)K(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new A(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r?this._retainParent(i,a,o,r):!1)},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new A(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];if(c&&c.active){c.retain=!0;continue}else c&&c.loaded&&(c.retain=!0);n+1<r&&this._retainChildren(i,a,n+1,r)}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();W.any3d?Et(e.el,i,r):Y(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new M(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new M(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new A(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1){this._setView(e,n);return}for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new A(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return F(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new P(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new A(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(K(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){q(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,W.ielt9&&this.options.opacity<1&&Ct(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&T(i(this._tileReady,this,e,null,a)),Y(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(Ct(n.el,0),E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(q(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),W.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new A(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new M(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Ir(e){return new Fr(e)}var Lr=Fr.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&W.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return X(n,`load`,i(this._tileOnLoad,this,t,n)),X(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:W.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){W.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;K(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Fr.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Fr.prototype._tileReady.call(this,e,t,n)}});function Rr(e,t){return new Lr(e,t)}var zr=Lr.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&W.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Lr.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=N(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Hn?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Lr.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Br(e,t){return new zr(e,t)}Lr.WMS=zr,Rr.wms=Br;var Vr=Wn.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),q(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));W.any3d?Et(this._container,a,n):Y(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new M(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Hr=Vr.extend({options:{tolerance:0},getEvents:function(){var e=Vr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Vr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);X(e,`mousemove`,this._onMouseMove,this),X(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),X(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,K(this._container),Z(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Vr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=W.retina?2:1;Y(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,W.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){Vr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){var t=e.options.dashArray.split(/[, ]+/),n=[],r,i;for(i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new M,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(!(!this._drawing||e._empty())){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(!(e.type===`click`||e.type===`preclick`)||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(J(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(q(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Ur(e){return W.canvas?new Hr(e):null}var Wr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),Gr={_initContainer:function(){this._container=G(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(Vr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Wr(`shape`);q(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Wr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;K(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Wr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Wr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){vt(e._container)},_bringToBack:function(e){yt(e._container)}},Kr=W.vml?Wr:ue,qr=Vr.extend({_initContainer:function(){this._container=Kr(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=Kr(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){K(this._container),Z(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Vr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),Y(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=Kr(`path`);e.options.className&&q(t,e.options.className),e.options.interactive&&q(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){K(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,B(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){vt(e._path)},_bringToBack:function(e){yt(e._path)}});W.vml&&qr.include(Gr);function Jr(e){return W.svg||W.vml?new qr(e):null}$.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Ur(e)||Jr(e)}});var Yr=cr.extend({initialize:function(e,t){cr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=F(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function Xr(e,t){return new Yr(e,t)}qr.create=Kr,qr.pointsToPath=B,ur.geometryToLayer=dr,ur.coordsToLatLng=pr,ur.coordsToLatLngs=mr,ur.latLngToCoords=hr,ur.latLngsToCoords=gr,ur.getFeature=_r,ur.asFeature=vr,$.mergeOptions({boxZoom:!0});var Zr=mn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){X(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){Z(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){K(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ot(),Mt(),this._startPoint=this._map.mouseEventToContainerPoint(e),X(document,{contextmenu:Yt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=G(`div`,`leaflet-zoom-box`,this._container),q(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new M(this._point,this._startPoint),n=t.getSize();Y(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(K(this._box),J(this._container,`leaflet-crosshair`)),kt(),Nt(),Z(document,{contextmenu:Yt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if(!(e.which!==1&&e.button!==1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new P(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});$.addInitHook(`addHandler`,`boxZoom`,Zr),$.mergeOptions({doubleClickZoom:!0});var Qr=mn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});$.addInitHook(`addHandler`,`doubleClickZoom`,Qr),$.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var $r=mn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new _n(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}q(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){J(this._map._container,`leaflet-grab`),J(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=F(this._map.options.maxBounds);this._offsetLimit=N(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2);this._initialWorldOffset=this._map.latLngToLayerPoint([0,0]).subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),T(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});$.addInitHook(`addHandler`,`dragging`,$r),$.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ei=mn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),X(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Z(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){var t=this._panKeys={},n=this.keyCodes,r,i;for(r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){var t=this._zoomKeys={},n=this.keyCodes,r,i;for(r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){X(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){Z(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress)if(r=this._panKeys[t],e.shiftKey&&(r=j(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(j(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;Yt(e)}}});$.addInitHook(`addHandler`,`keyboard`,ei),$.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ti=mn.extend({addHooks:function(){X(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){Z(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=$t(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),Yt(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});$.addInitHook(`addHandler`,`scrollWheelZoom`,ti);var ni=600;$.mergeOptions({tapHold:W.touchNative&&W.safari&&W.mobile,tapTolerance:15});var ri=mn.extend({addHooks:function(){X(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){Z(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new A(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(X(document,`touchend`,Q),X(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),ni),X(document,`touchend touchcancel contextmenu`,this._cancel,this),X(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){Z(document,`touchend`,Q),Z(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),Z(document,`touchend touchcancel contextmenu`,this._cancel,this),Z(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new A(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});$.addInitHook(`addHandler`,`tapHold`,ri),$.mergeOptions({touchZoom:W.touch,bounceAtZoomLimits:!0});var ii=mn.extend({addHooks:function(){q(this._map._container,`leaflet-touch-zoom`),X(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){J(this._map._container,`leaflet-touch-zoom`),Z(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),X(document,`touchmove`,this._onTouchMove,this),X(document,`touchend touchcancel`,this._onTouchEnd,this),Q(e)}},_onTouchMove:function(e){if(!(!e.touches||e.touches.length!==2||!this._zooming)){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),E(this._animRequest),this._animRequest=T(i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0),this,!0),Q(e)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,E(this._animRequest),Z(document,`touchmove`,this._onTouchMove,this),Z(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});$.addInitHook(`addHandler`,`touchZoom`,ii),$.BoxZoom=Zr,$.DoubleClickZoom=Qr,$.Drag=$r,$.Keyboard=ei,$.ScrollWheelZoom=ti,$.TapHold=ri,$.TouchZoom=ii,e.Bounds=M,e.Browser=W,e.CRS=re,e.Canvas=Hr,e.Circle=ir,e.CircleMarker=nr,e.Class=O,e.Control=an,e.DivIcon=Nr,e.DivOverlay=Or,e.DomEvent=tn,e.DomUtil=Bt,e.Draggable=_n,e.Evented=te,e.FeatureGroup=qn,e.GeoJSON=ur,e.GridLayer=Fr,e.Handler=mn,e.Icon=Yn,e.ImageOverlay=Sr,e.LatLng=I,e.LatLngBounds=P,e.Layer=Wn,e.LayerGroup=Gn,e.LineUtil=Ln,e.Map=$,e.Marker=$n,e.Mixin=hn,e.Path=tr,e.Point=A,e.PolyUtil=xn,e.Polygon=cr,e.Polyline=or,e.Popup=kr,e.PosAnimation=nn,e.Projection=Bn,e.Rectangle=Yr,e.Renderer=Vr,e.SVG=qr,e.SVGOverlay=Er,e.TileLayer=Lr,e.Tooltip=jr,e.Transformation=oe,e.Util=D,e.VideoOverlay=wr,e.bind=i,e.bounds=N,e.canvas=Ur,e.circle=ar,e.circleMarker=rr,e.control=on,e.divIcon=Pr,e.extend=n,e.featureGroup=Jn,e.geoJSON=br,e.geoJson=xr,e.gridLayer=Ir,e.icon=Xn,e.imageOverlay=Cr,e.latLng=R,e.latLngBounds=F,e.layerGroup=Kn,e.map=rn,e.marker=er,e.point=j,e.polygon=lr,e.polyline=sr,e.popup=Ar,e.rectangle=Xr,e.setOptions=p,e.stamp=o,e.svg=Jr,e.svgOverlay=Dr,e.tileLayer=Rr,e.tooltip=Mr,e.transformation=se,e.version=t,e.videoOverlay=Tr;var ai=window.L;e.noConflict=function(){return window.L=ai,this},window.L=e}))}));function g(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function _(e,t){return t==null?function(t,n){let r=(0,a.useRef)(void 0);return r.current||=e(t,n),r}:function(n,r){let i=(0,a.useRef)(void 0);i.current||=e(n,r);let o=(0,a.useRef)(n),{instance:s}=i.current;return(0,a.useEffect)(function(){o.current!==n&&(t(s,n,o.current),o.current=n)},[s,n,t]),i}}function v(e,t){(0,a.useEffect)(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function y(e){return function(t){let n=u(),r=e(m(t,n),n);return o(n.map,t.attribution),p(r.current,t.eventHandlers),v(r.current,n),r}}function b(e,t){let n=(0,a.useRef)(void 0);(0,a.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}function x(e){return function(t){let n=u(),r=e(m(t,n),n);return p(r.current,t.eventHandlers),v(r.current,n),b(r.current,t),r}}function S(e,t){return d(y(_(e,t)))}function C(e,t){return d(x(_(e,t)))}function w(e,t){return f(y(_(e,t)))}function T(e,t,n){let{opacity:r,zIndex:i}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),i!=null&&i!==n.zIndex&&e.setZIndex(i)}function E(){return u().map}function D(e){let t=E();return(0,a.useEffect)(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}var O=h();function ee({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:o,placeholder:c,style:u,whenReady:d,zoom:f,...p},m){let[h]=(0,a.useState)({className:i,id:o,style:u}),[g,_]=(0,a.useState)(null),v=(0,a.useRef)(void 0);(0,a.useImperativeHandle)(m,()=>g?.map??null,[g]);let y=(0,a.useCallback)(r=>{if(r!==null&&!v.current){let i=new O.Map(r,p);v.current=i,n!=null&&f!=null?i.setView(n,f):e!=null&&i.fitBounds(e,t),d!=null&&i.whenReady(d),_(s(i))}},[]);(0,a.useEffect)(()=>()=>{g?.map.remove()},[g]);let b=g?a.createElement(l,{value:g},r):c??null;return a.createElement(`div`,{...h,ref:y},b)}var k=(0,a.forwardRef)(ee),te=S(function({position:e,...t},n){let r=new O.Marker(e,t);return g(r,c(n,{overlayContainer:r}))},function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),t.icon!=null&&t.icon!==n.icon&&e.setIcon(t.icon),t.zIndexOffset!=null&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),t.opacity!=null&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),e.dragging!=null&&t.draggable!==n.draggable&&(t.draggable===!0?e.dragging.enable():e.dragging.disable())}),A=C(function({positions:e,...t},n){let r=new O.Polygon(e,t);return g(r,c(n,{overlayContainer:r}))},function(e,t,n){t.positions!==n.positions&&e.setLatLngs(t.positions)}),ne=w(function({url:e,...t},n){return g(new O.TileLayer(e,m(t,n)),n)},function(e,t,n){T(e,t,n);let{url:r}=t;r!=null&&r!==n.url&&e.setUrl(r)}),j=n();function M({isOpen:e,onClose:t,result:n}){return!e||!n?null:(0,j.jsx)(`div`,{className:`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4`,children:(0,j.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in`,children:[(0,j.jsx)(`button`,{onClick:t,className:`absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors`,children:(0,j.jsx)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})}),(0,j.jsxs)(`div`,{className:`text-center`,children:[(0,j.jsx)(`div`,{className:`text-6xl mb-4`,children:n.success?`🎉`:`📍`}),(0,j.jsx)(`h3`,{className:`text-2xl font-bold mb-4 ${n.success?`text-green-700`:`text-red-700`}`,children:n.success?`¡Tienes Cobertura!`:`Sin Cobertura`}),(0,j.jsx)(`p`,{className:`text-lg mb-6 ${n.success?`text-green-600`:`text-red-600`}`,children:n.message}),!n.success&&(0,j.jsx)(`div`,{className:`bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-left`,children:(0,j.jsx)(`p`,{className:`text-blue-700 text-sm font-medium`,children:`¡No te preocupes! Contacta a un asesor para encontrar la mejor solución para ti.`})}),(0,j.jsx)(`button`,{onClick:()=>{let e=n.success?`Hola, tengo cobertura y quiero contratar`:`Hola, quiero saber cuando tendré cobertura en mi zona`;window.open(`https://wa.me/51957321287?text=${encodeURIComponent(e)}`,`_blank`)},className:`w-full bg-chiclin-blue-base hover:bg-chiclin-blue-light text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200`,children:n.success?`Contratar Ahora`:`Contactar Asesor`})]})]})})}var N=(0,a.memo)(M);function P({onSearch:e}){let[t,n]=(0,a.useState)(``),[r,i]=(0,a.useState)(``),[o,s]=(0,a.useState)(!1);return(0,j.jsx)(`div`,{className:`absolute top-4 right-4 z-[1000] w-72`,children:(0,j.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-2xl overflow-hidden`,children:[(0,j.jsxs)(`button`,{onClick:()=>s(!o),className:`w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2`,children:[(0,j.jsx)(`span`,{children:`Buscar por coordenadas`}),(0,j.jsx)(`svg`,{className:`w-4 h-4 transition-transform duration-200 ${o?`rotate-180`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 9l-7 7-7-7`})})]}),o&&(0,j.jsx)(`div`,{className:`p-4 bg-gray-50 border-t border-gray-200 animate-fade-in`,children:(0,j.jsxs)(`div`,{className:`space-y-3`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`label`,{className:`block text-xs font-semibold text-gray-600 mb-1`,children:`Coordenadas (latitud, longitud)`}),(0,j.jsx)(`input`,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`-8.013263, -79.064294`,className:`w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chiclin-blue-base focus:border-transparent`})]}),r&&(0,j.jsx)(`p`,{className:`text-red-500 text-xs bg-red-50 p-2 rounded-lg`,children:r}),(0,j.jsx)(`button`,{onClick:()=>{let n=t.split(/[,\s]+/).filter(e=>e.trim()!==``);if(n.length<2){i(`Por favor ingresa coordenadas en formato: latitud, longitud (ej: -8.013263, -79.064294)`);return}let r=parseFloat(n[0]),a=parseFloat(n[1]);if(isNaN(r)||isNaN(a)){i(`Por favor ingresa coordenadas válidas`);return}if(r<-90||r>90){i(`Latitud debe estar entre -90 y 90`);return}if(a<-180||a>180){i(`Longitud debe estar entre -180 y 180`);return}i(``),e(r,a)},className:`w-full bg-chiclin-yellow hover:bg-yellow-400 text-chiclin-blue-dark font-bold py-2 px-4 rounded-lg text-sm transition-colors duration-200`,children:`Buscar Coordenadas`})]})})]})})}var F=(0,a.memo)(P),I=`{
  "type": "MultiPolygon",
  "coordinates": [
    [
      [
        [-79.063533, -8.011324],
        [-79.070294, -8.013876],
        [-79.070649, -8.012944],
        [-79.071143, -8.013474],
        [-79.070935, -8.014331],
        [-79.071341, -8.014737],
        [-79.071695, -8.015497],
        [-79.071262, -8.015525],
        [-79.071035, -8.015993],
        [-79.072156, -8.016357],
        [-79.072547, -8.016436],
        [-79.07311, -8.017261],
        [-79.075917, -8.023515],
        [-79.076206, -8.024331],
        [-79.075264, -8.023948],
        [-79.07546, -8.024762],
        [-79.074618, -8.025351],
        [-79.073693, -8.027933],
        [-79.071014, -8.02704],
        [-79.070101, -8.029785],
        [-79.072235, -8.030485],
        [-79.07266, -8.029343],
        [-79.073314, -8.029061],
        [-79.072825, -8.029921],
        [-79.073988, -8.030381],
        [-79.074576, -8.029968],
        [-79.073945, -8.030987],
        [-79.073031, -8.030644],
        [-79.072378, -8.030693],
        [-79.072234, -8.031239],
        [-79.071413, -8.030994],
        [-79.071085, -8.031886],
        [-79.07244, -8.032358],
        [-79.072279, -8.032962],
        [-79.070562, -8.033346],
        [-79.070991, -8.033562],
        [-79.070562, -8.035367],
        [-79.074079, -8.03811],
        [-79.072567, -8.040232],
        [-79.070451, -8.039702],
        [-79.067115, -8.038576],
        [-79.064789, -8.037032],
        [-79.064477, -8.03785],
        [-79.061824, -8.036727],
        [-79.059722, -8.03603],
        [-79.060148, -8.033748],
        [-79.059171, -8.033372],
        [-79.058942, -8.034115],
        [-79.057916, -8.033566],
        [-79.057803, -8.03386],
        [-79.05669, -8.033429],
        [-79.057399, -8.031358],
        [-79.056029, -8.030851],
        [-79.057463, -8.031091],
        [-79.057835, -8.029841],
        [-79.058806, -8.030149],
        [-79.059711, -8.027249],
        [-79.060562, -8.024949],
        [-79.059605, -8.024768],
        [-79.059805, -8.023786],
        [-79.061136, -8.019896],
        [-79.062318, -8.020239],
        [-79.062482, -8.019747],
        [-79.061429, -8.01944],
        [-79.06245, -8.019665],
        [-79.062581, -8.019331],
        [-79.061543, -8.018966],
        [-79.062628, -8.019173],
        [-79.064016, -8.01548],
        [-79.06219, -8.014723],
        [-79.063924, -8.014285],
        [-79.063952, -8.014086],
        [-79.063422, -8.014054],
        [-79.063465, -8.013807],
        [-79.062878, -8.013706],
        [-79.063545, -8.013672],
        [-79.063935, -8.012617],
        [-79.063118, -8.012308],
        [-79.063533, -8.011324]
      ]
    ],
    [
      [
        [-79.061243, -8.042743],
        [-79.062527, -8.043735],
        [-79.063246, -8.042939],
        [-79.063655, -8.04326],
        [-79.06302, -8.044237],
        [-79.062273, -8.044936],
        [-79.06295, -8.044126],
        [-79.062527, -8.043846],
        [-79.061511, -8.045131],
        [-79.060453, -8.044615],
        [-79.060518, -8.044354],
        [-79.059552, -8.043863],
        [-79.060075, -8.042347],
        [-79.061109, -8.042706],
        [-79.061512, -8.041629],
        [-79.061243, -8.042743]
      ]
    ],
    [
      [
        [-79.063703, -8.041858],
        [-79.064329, -8.041063],
        [-79.065389, -8.041858],
        [-79.066062, -8.041074],
        [-79.067787, -8.04253],
        [-79.068547, -8.041714],
        [-79.06656, -8.044158],
        [-79.068909, -8.046322],
        [-79.069629, -8.045475],
        [-79.072073, -8.047546],
        [-79.072792, -8.046779],
        [-79.076934, -8.050248],
        [-79.077667, -8.049455],
        [-79.078455, -8.050154],
        [-79.079106, -8.049441],
        [-79.079935, -8.0501],
        [-79.08022, -8.049804],
        [-79.079649, -8.049415],
        [-79.079582, -8.04924],
        [-79.080967, -8.050087],
        [-79.080328, -8.049858],
        [-79.080111, -8.050194],
        [-79.080844, -8.050746],
        [-79.08155, -8.049925],
        [-79.080315, -8.048823],
        [-79.080885, -8.048084],
        [-79.081496, -8.048191],
        [-79.081958, -8.048971],
        [-79.081673, -8.049267],
        [-79.081944, -8.049562],
        [-79.082433, -8.049307],
        [-79.08208, -8.048568],
        [-79.082487, -8.049213],
        [-79.082691, -8.049132],
        [-79.083221, -8.049993],
        [-79.083574, -8.049764],
        [-79.083383, -8.049361],
        [-79.084633, -8.048702],
        [-79.084334, -8.048971],
        [-79.08451, -8.04928],
        [-79.084809, -8.049226],
        [-79.085529, -8.05049],
        [-79.081388, -8.052695],
        [-79.080912, -8.052345],
        [-79.081265, -8.052157],
        [-79.081089, -8.051754],
        [-79.081768, -8.05131],
        [-79.081632, -8.050961],
        [-79.080736, -8.051445],
        [-79.08136, -8.050974],
        [-79.081143, -8.050598],
        [-79.080152, -8.051646],
        [-79.079296, -8.051055],
        [-79.077219, -8.053394],
        [-79.078224, -8.054268],
        [-79.080315, -8.053206],
        [-79.081007, -8.053838],
        [-79.080369, -8.054658],
        [-79.077558, -8.057925],
        [-79.079989, -8.060036],
        [-79.080681, -8.05931],
        [-79.079867, -8.058557],
        [-79.082053, -8.056043],
        [-79.082786, -8.056715],
        [-79.083221, -8.056258],
        [-79.083995, -8.057064],
        [-79.083709, -8.057495],
        [-79.085312, -8.058879],
        [-79.084578, -8.05974],
        [-79.08542, -8.060425],
        [-79.081917, -8.064593],
        [-79.081143, -8.065212],
        [-79.081605, -8.065736],
        [-79.078957, -8.067148],
        [-79.079391, -8.06903],
        [-79.079475, -8.068975],
        [-79.079894, -8.071012],
        [-79.076272, -8.073973],
        [-79.075795, -8.072786],
        [-79.074738, -8.073566],
        [-79.074374, -8.072529],
        [-79.075405, -8.071783],
        [-79.074617, -8.069758],
        [-79.073664, -8.069192],
        [-79.070582, -8.067847],
        [-79.066404, -8.065966],
        [-79.063675, -8.064691],
        [-79.062399, -8.064131],
        [-79.068067, -8.061041],
        [-79.067534, -8.060015],
        [-79.072461, -8.05744],
        [-79.067384, -8.047767],
        [-79.067157, -8.047828],
        [-79.066818, -8.047411],
        [-79.066644, -8.047316],
        [-79.062595, -8.043787],
        [-79.06327, -8.042998],
        [-79.06219, -8.04208],
        [-79.063703, -8.041858]
      ]
    ],
    [
      [
        [-79.057761, -8.047294],
        [-79.058705, -8.047544],
        [-79.059624, -8.04787],
        [-79.059192, -8.049591],
        [-79.058786, -8.04976],
        [-79.056757, -8.050571],
        [-79.056704, -8.050093],
        [-79.056843, -8.049308],
        [-79.057234, -8.049436],
        [-79.057761, -8.047294]
      ]
    ],
    [
      [
        [-79.055677, -8.051986],
        [-79.051682, -8.050741],
        [-79.049697, -8.050037],
        [-79.049223, -8.050872],
        [-79.048808, -8.050638],
        [-79.048744, -8.050585],
        [-79.048036, -8.049792],
        [-79.047883, -8.049922],
        [-79.047726, -8.049632],
        [-79.047655, -8.049423],
        [-79.047623, -8.049146],
        [-79.047587, -8.049045],
        [-79.047527, -8.048946],
        [-79.047392, -8.048822],
        [-79.047115, -8.048804],
        [-79.046938, -8.048758],
        [-79.046926, -8.048666],
        [-79.046895, -8.048558],
        [-79.046609, -8.048042],
        [-79.046072, -8.048148],
        [-79.045976, -8.047998],
        [-79.045756, -8.047636],
        [-79.045456, -8.047016],
        [-79.044675, -8.047441],
        [-79.044527, -8.047511],
        [-79.044405, -8.047543],
        [-79.044346, -8.047545],
        [-79.044266, -8.04754],
        [-79.044196, -8.047505],
        [-79.044124, -8.047429],
        [-79.043969, -8.04714],
        [-79.043995, -8.047122],
        [-79.044153, -8.047414],
        [-79.044209, -8.047477],
        [-79.044271, -8.047513],
        [-79.044435, -8.047509],
        [-79.044659, -8.047418],
        [-79.044339, -8.046789],
        [-79.044362, -8.046776],
        [-79.044671, -8.047394],
        [-79.045051, -8.047184],
        [-79.044729, -8.046526],
        [-79.044778, -8.046119],
        [-79.045008, -8.046036],
        [-79.045472, -8.04697],
        [-79.045889, -8.046791],
        [-79.045494, -8.046041],
        [-79.045524, -8.046027],
        [-79.045928, -8.04677],
        [-79.046297, -8.04658],
        [-79.045958, -8.045978],
        [-79.045998, -8.045961],
        [-79.046084, -8.046129],
        [-79.047351, -8.045505],
        [-79.047268, -8.04536],
        [-79.047298, -8.045341],
        [-79.047394, -8.045479],
        [-79.047915, -8.045042],
        [-79.047935, -8.045071],
        [-79.047421, -8.045518],
        [-79.0476, -8.045853],
        [-79.047995, -8.045564],
        [-79.04832, -8.04517],
        [-79.048678, -8.045442],
        [-79.04898, -8.044841],
        [-79.0491, -8.044733],
        [-79.050397, -8.045147],
        [-79.050735, -8.044473],
        [-79.050792, -8.044487],
        [-79.05046, -8.045147],
        [-79.050921, -8.045321],
        [-79.052052, -8.04558],
        [-79.052284, -8.045846],
        [-79.052656, -8.046004],
        [-79.053515, -8.046392],
        [-79.053261, -8.046932],
        [-79.053782, -8.04714],
        [-79.053188, -8.048298],
        [-79.054403, -8.048751],
        [-79.05465, -8.047982],
        [-79.055335, -8.04819],
        [-79.055088, -8.048941],
        [-79.056477, -8.049402],
        [-79.055677, -8.051986]
      ]
    ],
    [
      [
        [-79.05566, -8.052027],
        [-79.053837, -8.057378],
        [-79.052853, -8.0605],
        [-79.052717, -8.060942],
        [-79.049169, -8.059788],
        [-79.048833, -8.061423],
        [-79.046019, -8.060741],
        [-79.045418, -8.060521],
        [-79.045061, -8.060432],
        [-79.044259, -8.060075],
        [-79.044203, -8.060207],
        [-79.041959, -8.059039],
        [-79.041278, -8.0586],
        [-79.041334, -8.058168],
        [-79.041149, -8.05806],
        [-79.041175, -8.058035],
        [-79.042188, -8.058582],
        [-79.042284, -8.058424],
        [-79.042305, -8.058254],
        [-79.04229, -8.058085],
        [-79.04224, -8.057926],
        [-79.042177, -8.057778],
        [-79.04219, -8.05776],
        [-79.042207, -8.05776],
        [-79.042274, -8.05791],
        [-79.042293, -8.057951],
        [-79.042326, -8.058089],
        [-79.042342, -8.05825],
        [-79.042328, -8.058387],
        [-79.04231, -8.058456],
        [-79.042219, -8.058603],
        [-79.043122, -8.059065],
        [-79.04316, -8.059027],
        [-79.043219, -8.058997],
        [-79.043276, -8.058983],
        [-79.043354, -8.058989],
        [-79.043658, -8.059072],
        [-79.044003, -8.059164],
        [-79.044119, -8.059191],
        [-79.044157, -8.059223],
        [-79.044674, -8.058428],
        [-79.04405, -8.058156],
        [-79.044031, -8.058138],
        [-79.044021, -8.058122],
        [-79.044015, -8.058102],
        [-79.044016, -8.058089],
        [-79.044028, -8.058057],
        [-79.044051, -8.058001],
        [-79.044129, -8.057862],
        [-79.044381, -8.057443],
        [-79.044588, -8.057456],
        [-79.044718, -8.056947],
        [-79.045435, -8.055564],
        [-79.045992, -8.055769],
        [-79.04608, -8.055745],
        [-79.046813, -8.056002],
        [-79.046316, -8.056534],
        [-79.045875, -8.057248],
        [-79.046172, -8.057327],
        [-79.046535, -8.05746],
        [-79.046752, -8.057046],
        [-79.047103, -8.056429],
        [-79.047342, -8.056016],
        [-79.047704, -8.055321],
        [-79.048325, -8.055699],
        [-79.04874, -8.055064],
        [-79.048151, -8.054641],
        [-79.048089, -8.054678],
        [-79.048018, -8.055047],
        [-79.047993, -8.055063],
        [-79.047971, -8.05504],
        [-79.048047, -8.054677],
        [-79.048011, -8.05467],
        [-79.047979, -8.05466],
        [-79.047803, -8.054544],
        [-79.04782, -8.054531],
        [-79.047863, -8.054441],
        [-79.047875, -8.054389],
        [-79.047874, -8.054262],
        [-79.047865, -8.054092],
        [-79.047849, -8.053941],
        [-79.047814, -8.053789],
        [-79.047705, -8.053532],
        [-79.047691, -8.053355],
        [-79.047775, -8.053258],
        [-79.047398, -8.053003],
        [-79.047119, -8.053347],
        [-79.046962, -8.053603],
        [-79.046748, -8.054061],
        [-79.046658, -8.054233],
        [-79.046629, -8.054272],
        [-79.046601, -8.054261],
        [-79.046606, -8.054243],
        [-79.046953, -8.053532],
        [-79.047031, -8.053404],
        [-79.047157, -8.053231],
        [-79.047371, -8.052974],
        [-79.047046, -8.052751],
        [-79.046743, -8.05312],
        [-79.04672, -8.053127],
        [-79.046706, -8.053112],
        [-79.046711, -8.053093],
        [-79.047011, -8.05273],
        [-79.046294, -8.05228],
        [-79.04653, -8.051972],
        [-79.046239, -8.051793],
        [-79.046258, -8.051763],
        [-79.046554, -8.051947],
        [-79.046598, -8.051863],
        [-79.046777, -8.051623],
        [-79.046965, -8.051387],
        [-79.047209, -8.051528],
        [-79.04742, -8.051109],
        [-79.047651, -8.050741],
        [-79.047632, -8.050577],
        [-79.046919, -8.050708],
        [-79.046877, -8.050661],
        [-79.046795, -8.050248],
        [-79.046714, -8.050268],
        [-79.046666, -8.050253],
        [-79.046622, -8.050215],
        [-79.046422, -8.049895],
        [-79.046359, -8.049796],
        [-79.046268, -8.049679],
        [-79.046297, -8.049657],
        [-79.046365, -8.049734],
        [-79.046492, -8.049925],
        [-79.046734, -8.049791],
        [-79.046823, -8.049755],
        [-79.04686, -8.049742],
        [-79.047099, -8.049703],
        [-79.047177, -8.050138],
        [-79.047607, -8.050043],
        [-79.047657, -8.050429],
        [-79.047702, -8.050739],
        [-79.048078, -8.050951],
        [-79.048228, -8.050689],
        [-79.048271, -8.050711],
        [-79.048129, -8.050972],
        [-79.048914, -8.0514],
        [-79.049009, -8.051509],
        [-79.049103, -8.051681],
        [-79.049466, -8.051961],
        [-79.050385, -8.05026],
        [-79.05566, -8.052027]
      ]
    ],
    [
      [
        [-79.0538, -8.058498],
        [-79.054804, -8.058814],
        [-79.057481, -8.059645],
        [-79.057607, -8.059216],
        [-79.055828, -8.058654],
        [-79.05584, -8.058611],
        [-79.056189, -8.05872],
        [-79.056349, -8.058215],
        [-79.057254, -8.058491],
        [-79.057844, -8.058676],
        [-79.057936, -8.058753],
        [-79.058448, -8.058505],
        [-79.058817, -8.059317],
        [-79.059248, -8.060294],
        [-79.061501, -8.065381],
        [-79.057157, -8.063952],
        [-79.055508, -8.063203],
        [-79.054429, -8.062917],
        [-79.054856, -8.061673],
        [-79.053916, -8.061371],
        [-79.054018, -8.060951],
        [-79.053064, -8.060671],
        [-79.0538, -8.058498]
      ]
    ],
    [
      [
        [-79.054429, -8.062892],
        [-79.053852, -8.062729],
        [-79.053595, -8.063575],
        [-79.053529, -8.063569],
        [-79.053779, -8.06271],
        [-79.048823, -8.061466],
        [-79.049178, -8.059788],
        [-79.052712, -8.060931],
        [-79.052829, -8.060599],
        [-79.054019, -8.060951],
        [-79.053902, -8.061384],
        [-79.054852, -8.061671],
        [-79.054429, -8.062892]
      ]
    ],
    [
      [
        [-79.076284, -8.074024],
        [-79.06936, -8.076159],
        [-79.069194, -8.076117],
        [-79.066558, -8.07695],
        [-79.064678, -8.07777],
        [-79.059578, -8.079758],
        [-79.059762, -8.080014],
        [-79.059722, -8.080038],
        [-79.059559, -8.079788],
        [-79.058964, -8.080043],
        [-79.059199, -8.079271],
        [-79.058733, -8.079097],
        [-79.058776, -8.078945],
        [-79.059285, -8.079123],
        [-79.059443, -8.078716],
        [-79.05899, -8.078534],
        [-79.059553, -8.07692],
        [-79.060044, -8.077072],
        [-79.060164, -8.076711],
        [-79.059296, -8.076406],
        [-79.059382, -8.076231],
        [-79.059844, -8.076067],
        [-79.065476, -8.073728],
        [-79.067159, -8.073078],
        [-79.067296, -8.073485],
        [-79.071389, -8.071848],
        [-79.071235, -8.071482],
        [-79.072001, -8.071107],
        [-79.071893, -8.07075],
        [-79.072848, -8.070349],
        [-79.073047, -8.070804],
        [-79.073542, -8.070438],
        [-79.073065, -8.068957],
        [-79.074551, -8.069724],
        [-79.076284, -8.074024]
      ]
    ],
    [
      [
        [-79.073054, -8.068878],
        [-79.074681, -8.069809],
        [-79.076307, -8.074035],
        [-79.066422, -8.077029],
        [-79.059061, -8.080006],
        [-79.055296, -8.081452],
        [-79.060289, -8.068016],
        [-79.061294, -8.065362],
        [-79.061425, -8.065206],
        [-79.061626, -8.065189],
        [-79.062078, -8.063998],
        [-79.073054, -8.068878]
      ]
    ],
    [
      [
        [-79.022986, -8.080565],
        [-79.022991, -8.081253],
        [-79.019546, -8.080726],
        [-79.017978, -8.080299],
        [-79.017088, -8.080031],
        [-79.017029, -8.08053],
        [-79.016956, -8.080519],
        [-79.017022, -8.080002],
        [-79.016192, -8.079777],
        [-79.016072, -8.080362],
        [-79.016006, -8.080349],
        [-79.016121, -8.07976],
        [-79.015275, -8.079515],
        [-79.015107, -8.08023],
        [-79.015051, -8.080219],
        [-79.015216, -8.079492],
        [-79.014141, -8.079194],
        [-79.014224, -8.078461],
        [-79.015027, -8.078616],
        [-79.015156, -8.077916],
        [-79.01612, -8.078069],
        [-79.016282, -8.077003],
        [-79.01742, -8.077205],
        [-79.017478, -8.076793],
        [-79.018059, -8.076899],
        [-79.017816, -8.078338],
        [-79.019847, -8.07861],
        [-79.020089, -8.077226],
        [-79.020494, -8.074397],
        [-79.024922, -8.075885],
        [-79.025102, -8.076383],
        [-79.024918, -8.078016],
        [-79.02334, -8.077782],
        [-79.022986, -8.080565]
      ]
    ]
  ]
}
`,R=`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>COBERTURA2.0</name>
    <description/>
    <Style id="line-0097A7-1200-nodesc-normal">
      <LineStyle>
        <color>ffa79700</color>
        <width>1.2</width>
      </LineStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Style id="line-0097A7-1200-nodesc-highlight">
      <LineStyle>
        <color>ffa79700</color>
        <width>1.8</width>
      </LineStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <StyleMap id="line-0097A7-1200-nodesc">
      <Pair>
        <key>normal</key>
        <styleUrl>#line-0097A7-1200-nodesc-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#line-0097A7-1200-nodesc-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Style id="poly-0097A7-1200-76-nodesc-normal">
      <LineStyle>
        <color>ffa79700</color>
        <width>1.2</width>
      </LineStyle>
      <PolyStyle>
        <color>4ca79700</color>
        <fill>1</fill>
        <outline>1</outline>
      </PolyStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <Style id="poly-0097A7-1200-76-nodesc-highlight">
      <LineStyle>
        <color>ffa79700</color>
        <width>1.8</width>
      </LineStyle>
      <PolyStyle>
        <color>4ca79700</color>
        <fill>1</fill>
        <outline>1</outline>
      </PolyStyle>
      <BalloonStyle>
        <text><![CDATA[<h3>$[name]</h3>]]></text>
      </BalloonStyle>
    </Style>
    <StyleMap id="poly-0097A7-1200-76-nodesc">
      <Pair>
        <key>normal</key>
        <styleUrl>#poly-0097A7-1200-76-nodesc-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#poly-0097A7-1200-76-nodesc-highlight</styleUrl>
      </Pair>
    </StyleMap>
    <Folder>
      <name>COBERTURA</name>
      <Placemark>
        <name>EL MILAGRO</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.063533,-8.011324,0
                -79.070294,-8.013876,0
                -79.070649,-8.012944,0
                -79.071143,-8.013474,0
                -79.070935,-8.014331,0
                -79.071341,-8.014737,0
                -79.071695,-8.015497,0
                -79.071262,-8.015525,0
                -79.071035,-8.015993,0
                -79.072156,-8.016357,0
                -79.072547,-8.016436,0
                -79.07311,-8.017261,0
                -79.075917,-8.023515,0
                -79.076206,-8.024331,0
                -79.075264,-8.023948,0
                -79.07546,-8.024762,0
                -79.074618,-8.025351,0
                -79.073693,-8.027933,0
                -79.071014,-8.02704,0
                -79.070101,-8.029785,0
                -79.072235,-8.030485,0
                -79.07266,-8.029343,0
                -79.073314,-8.029061,0
                -79.072825,-8.029921,0
                -79.073988,-8.030381,0
                -79.074576,-8.029968,0
                -79.073945,-8.030987,0
                -79.073031,-8.030644,0
                -79.072378,-8.030693,0
                -79.072234,-8.031239,0
                -79.071413,-8.030994,0
                -79.071085,-8.031886,0
                -79.07244,-8.032358,0
                -79.072279,-8.032962,0
                -79.070562,-8.033346,0
                -79.070991,-8.033562,0
                -79.070562,-8.035367,0
                -79.074079,-8.03811,0
                -79.072567,-8.040232,0
                -79.070451,-8.039702,0
                -79.067115,-8.038576,0
                -79.064789,-8.037032,0
                -79.064477,-8.03785,0
                -79.061824,-8.036727,0
                -79.059722,-8.03603,0
                -79.060148,-8.033748,0
                -79.059171,-8.033372,0
                -79.058942,-8.034115,0
                -79.057916,-8.033566,0
                -79.057803,-8.03386,0
                -79.05669,-8.033429,0
                -79.057399,-8.031358,0
                -79.056029,-8.030851,0
                -79.057463,-8.031091,0
                -79.057835,-8.029841,0
                -79.058806,-8.030149,0
                -79.059711,-8.027249,0
                -79.060562,-8.024949,0
                -79.059605,-8.024768,0
                -79.059805,-8.023786,0
                -79.061136,-8.019896,0
                -79.062318,-8.020239,0
                -79.062482,-8.019747,0
                -79.061429,-8.01944,0
                -79.06245,-8.019665,0
                -79.062581,-8.019331,0
                -79.061543,-8.018966,0
                -79.062628,-8.019173,0
                -79.064016,-8.01548,0
                -79.06219,-8.014723,0
                -79.063924,-8.014285,0
                -79.063952,-8.014086,0
                -79.063422,-8.014054,0
                -79.063465,-8.013807,0
                -79.062878,-8.013706,0
                -79.063545,-8.013672,0
                -79.063935,-8.012617,0
                -79.063118,-8.012308,0
                -79.063533,-8.011324,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Ruta sin título</name>
        <styleUrl>#line-0097A7-1200-nodesc</styleUrl>
        <LineString>
          <tessellate>1</tessellate>
          <coordinates>
            -79.075198,-8.041063,0
            -79.073718,-8.040713,0
            -79.074299,-8.040843,0
            -79.074431,-8.040327,0
            -79.074287,-8.040938,0
            -79.074299,-8.040814,0
          </coordinates>
        </LineString>
      </Placemark>
      <Placemark>
        <name>Ruta sin título</name>
        <styleUrl>#line-0097A7-1200-nodesc</styleUrl>
        <LineString>
          <tessellate>1</tessellate>
          <coordinates>
            -79.060069,-8.038522,0
            -79.061197,-8.038918,0
            -79.060033,-8.03872,0
            -79.058941,-8.041854,0
          </coordinates>
        </LineString>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.061243,-8.042743,0
                -79.062527,-8.043735,0
                -79.063246,-8.042939,0
                -79.063655,-8.04326,0
                -79.06302,-8.044237,0
                -79.062273,-8.044936,0
                -79.06295,-8.044126,0
                -79.062527,-8.043846,0
                -79.061511,-8.045131,0
                -79.060453,-8.044615,0
                -79.060518,-8.044354,0
                -79.059552,-8.043863,0
                -79.060075,-8.042347,0
                -79.061109,-8.042706,0
                -79.061512,-8.041629,0
                -79.061243,-8.042743,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.063703,-8.041858,0
                -79.064329,-8.041063,0
                -79.065389,-8.041858,0
                -79.066062,-8.041074,0
                -79.067787,-8.04253,0
                -79.068547,-8.041714,0
                -79.06656,-8.044158,0
                -79.068909,-8.046322,0
                -79.069629,-8.045475,0
                -79.072073,-8.047546,0
                -79.072792,-8.046779,0
                -79.076934,-8.050248,0
                -79.077667,-8.049455,0
                -79.078455,-8.050154,0
                -79.079106,-8.049441,0
                -79.079935,-8.0501,0
                -79.08022,-8.049804,0
                -79.079649,-8.049415,0
                -79.079582,-8.04924,0
                -79.080967,-8.050087,0
                -79.080328,-8.049858,0
                -79.080111,-8.050194,0
                -79.080844,-8.050746,0
                -79.08155,-8.049925,0
                -79.080315,-8.048823,0
                -79.080885,-8.048084,0
                -79.081496,-8.048191,0
                -79.081958,-8.048971,0
                -79.081673,-8.049267,0
                -79.081944,-8.049562,0
                -79.082433,-8.049307,0
                -79.08208,-8.048568,0
                -79.082487,-8.049213,0
                -79.082691,-8.049132,0
                -79.083221,-8.049993,0
                -79.083574,-8.049764,0
                -79.083383,-8.049361,0
                -79.084633,-8.048702,0
                -79.084334,-8.048971,0
                -79.08451,-8.04928,0
                -79.084809,-8.049226,0
                -79.085529,-8.05049,0
                -79.081388,-8.052695,0
                -79.080912,-8.052345,0
                -79.081265,-8.052157,0
                -79.081089,-8.051754,0
                -79.081768,-8.05131,0
                -79.081632,-8.050961,0
                -79.080736,-8.051445,0
                -79.08136,-8.050974,0
                -79.081143,-8.050598,0
                -79.080152,-8.051646,0
                -79.079296,-8.051055,0
                -79.077219,-8.053394,0
                -79.078224,-8.054268,0
                -79.080315,-8.053206,0
                -79.081007,-8.053838,0
                -79.080369,-8.054658,0
                -79.077558,-8.057925,0
                -79.079989,-8.060036,0
                -79.080681,-8.05931,0
                -79.079867,-8.058557,0
                -79.082053,-8.056043,0
                -79.082786,-8.056715,0
                -79.083221,-8.056258,0
                -79.083995,-8.057064,0
                -79.083709,-8.057495,0
                -79.085312,-8.058879,0
                -79.084578,-8.05974,0
                -79.08542,-8.060425,0
                -79.081917,-8.064593,0
                -79.081143,-8.065212,0
                -79.081605,-8.065736,0
                -79.078957,-8.067148,0
                -79.079391,-8.06903,0
                -79.079475,-8.068975,0
                -79.079894,-8.071012,0
                -79.076272,-8.073973,0
                -79.075795,-8.072786,0
                -79.074738,-8.073566,0
                -79.074374,-8.072529,0
                -79.075405,-8.071783,0
                -79.074617,-8.069758,0
                -79.073664,-8.069192,0
                -79.070582,-8.067847,0
                -79.066404,-8.065966,0
                -79.063675,-8.064691,0
                -79.062399,-8.064131,0
                -79.068067,-8.061041,0
                -79.067534,-8.060015,0
                -79.072461,-8.05744,0
                -79.067384,-8.047767,0
                -79.067157,-8.047828,0
                -79.066818,-8.047411,0
                -79.066644,-8.047316,0
                -79.062595,-8.043787,0
                -79.06327,-8.042998,0
                -79.06219,-8.04208,0
                -79.063703,-8.041858,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.057761,-8.047294,0
                -79.058705,-8.047544,0
                -79.059624,-8.04787,0
                -79.059192,-8.049591,0
                -79.058786,-8.04976,0
                -79.056757,-8.050571,0
                -79.056704,-8.050093,0
                -79.056843,-8.049308,0
                -79.057234,-8.049436,0
                -79.057761,-8.047294,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.055677,-8.051986,0
                -79.051682,-8.050741,0
                -79.049697,-8.050037,0
                -79.049223,-8.050872,0
                -79.048808,-8.050638,0
                -79.048744,-8.050585,0
                -79.048036,-8.049792,0
                -79.047883,-8.049922,0
                -79.047726,-8.049632,0
                -79.047655,-8.049423,0
                -79.047623,-8.049146,0
                -79.047587,-8.049045,0
                -79.047527,-8.048946,0
                -79.047392,-8.048822,0
                -79.047115,-8.048804,0
                -79.046938,-8.048758,0
                -79.046926,-8.048666,0
                -79.046895,-8.048558,0
                -79.046609,-8.048042,0
                -79.046072,-8.048148,0
                -79.045976,-8.047998,0
                -79.045756,-8.047636,0
                -79.045456,-8.047016,0
                -79.044675,-8.047441,0
                -79.044527,-8.047511,0
                -79.044405,-8.047543,0
                -79.044346,-8.047545,0
                -79.044266,-8.04754,0
                -79.044196,-8.047505,0
                -79.044124,-8.047429,0
                -79.043969,-8.04714,0
                -79.043995,-8.047122,0
                -79.044153,-8.047414,0
                -79.044209,-8.047477,0
                -79.044271,-8.047513,0
                -79.044435,-8.047509,0
                -79.044659,-8.047418,0
                -79.044339,-8.046789,0
                -79.044362,-8.046776,0
                -79.044671,-8.047394,0
                -79.045051,-8.047184,0
                -79.044729,-8.046526,0
                -79.044778,-8.046119,0
                -79.045008,-8.046036,0
                -79.045472,-8.04697,0
                -79.045889,-8.046791,0
                -79.045494,-8.046041,0
                -79.045524,-8.046027,0
                -79.045928,-8.04677,0
                -79.046297,-8.04658,0
                -79.045958,-8.045978,0
                -79.045998,-8.045961,0
                -79.046084,-8.046129,0
                -79.047351,-8.045505,0
                -79.047268,-8.04536,0
                -79.047298,-8.045341,0
                -79.047394,-8.045479,0
                -79.047915,-8.045042,0
                -79.047935,-8.045071,0
                -79.047421,-8.045518,0
                -79.0476,-8.045853,0
                -79.047995,-8.045564,0
                -79.04832,-8.04517,0
                -79.048678,-8.045442,0
                -79.04898,-8.044841,0
                -79.0491,-8.044733,0
                -79.050397,-8.045147,0
                -79.050735,-8.044473,0
                -79.050792,-8.044487,0
                -79.05046,-8.045147,0
                -79.050921,-8.045321,0
                -79.052052,-8.04558,0
                -79.052284,-8.045846,0
                -79.052656,-8.046004,0
                -79.053515,-8.046392,0
                -79.053261,-8.046932,0
                -79.053782,-8.04714,0
                -79.053188,-8.048298,0
                -79.054403,-8.048751,0
                -79.05465,-8.047982,0
                -79.055335,-8.04819,0
                -79.055088,-8.048941,0
                -79.056477,-8.049402,0
                -79.055677,-8.051986,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.05566,-8.052027,0
                -79.053837,-8.057378,0
                -79.052853,-8.0605,0
                -79.052717,-8.060942,0
                -79.049169,-8.059788,0
                -79.048833,-8.061423,0
                -79.046019,-8.060741,0
                -79.045418,-8.060521,0
                -79.045061,-8.060432,0
                -79.044259,-8.060075,0
                -79.044203,-8.060207,0
                -79.041959,-8.059039,0
                -79.041278,-8.0586,0
                -79.041334,-8.058168,0
                -79.041149,-8.05806,0
                -79.041175,-8.058035,0
                -79.042188,-8.058582,0
                -79.042284,-8.058424,0
                -79.042305,-8.058254,0
                -79.04229,-8.058085,0
                -79.04224,-8.057926,0
                -79.042177,-8.057778,0
                -79.04219,-8.05776,0
                -79.042207,-8.05776,0
                -79.042274,-8.05791,0
                -79.042293,-8.057951,0
                -79.042326,-8.058089,0
                -79.042342,-8.05825,0
                -79.042328,-8.058387,0
                -79.04231,-8.058456,0
                -79.042219,-8.058603,0
                -79.043122,-8.059065,0
                -79.04316,-8.059027,0
                -79.043219,-8.058997,0
                -79.043276,-8.058983,0
                -79.043354,-8.058989,0
                -79.043658,-8.059072,0
                -79.044003,-8.059164,0
                -79.044119,-8.059191,0
                -79.044157,-8.059223,0
                -79.044674,-8.058428,0
                -79.04405,-8.058156,0
                -79.044031,-8.058138,0
                -79.044021,-8.058122,0
                -79.044015,-8.058102,0
                -79.044016,-8.058089,0
                -79.044028,-8.058057,0
                -79.044051,-8.058001,0
                -79.044129,-8.057862,0
                -79.044381,-8.057443,0
                -79.044588,-8.057456,0
                -79.044718,-8.056947,0
                -79.045435,-8.055564,0
                -79.045992,-8.055769,0
                -79.04608,-8.055745,0
                -79.046813,-8.056002,0
                -79.046316,-8.056534,0
                -79.045875,-8.057248,0
                -79.046172,-8.057327,0
                -79.046535,-8.05746,0
                -79.046752,-8.057046,0
                -79.047103,-8.056429,0
                -79.047342,-8.056016,0
                -79.047704,-8.055321,0
                -79.048325,-8.055699,0
                -79.04874,-8.055064,0
                -79.048151,-8.054641,0
                -79.048089,-8.054678,0
                -79.048018,-8.055047,0
                -79.047993,-8.055063,0
                -79.047971,-8.05504,0
                -79.048047,-8.054677,0
                -79.048011,-8.05467,0
                -79.047979,-8.05466,0
                -79.047803,-8.054544,0
                -79.04782,-8.054531,0
                -79.047863,-8.054441,0
                -79.047875,-8.054389,0
                -79.047874,-8.054262,0
                -79.047865,-8.054092,0
                -79.047849,-8.053941,0
                -79.047814,-8.053789,0
                -79.047705,-8.053532,0
                -79.047691,-8.053355,0
                -79.047775,-8.053258,0
                -79.047398,-8.053003,0
                -79.047119,-8.053347,0
                -79.046962,-8.053603,0
                -79.046748,-8.054061,0
                -79.046658,-8.054233,0
                -79.046629,-8.054272,0
                -79.046601,-8.054261,0
                -79.046606,-8.054243,0
                -79.046953,-8.053532,0
                -79.047031,-8.053404,0
                -79.047157,-8.053231,0
                -79.047371,-8.052974,0
                -79.047046,-8.052751,0
                -79.046743,-8.05312,0
                -79.04672,-8.053127,0
                -79.046706,-8.053112,0
                -79.046711,-8.053093,0
                -79.047011,-8.05273,0
                -79.046294,-8.05228,0
                -79.04653,-8.051972,0
                -79.046239,-8.051793,0
                -79.046258,-8.051763,0
                -79.046554,-8.051947,0
                -79.046598,-8.051863,0
                -79.046777,-8.051623,0
                -79.046965,-8.051387,0
                -79.047209,-8.051528,0
                -79.04742,-8.051109,0
                -79.047651,-8.050741,0
                -79.047632,-8.050577,0
                -79.046919,-8.050708,0
                -79.046877,-8.050661,0
                -79.046795,-8.050248,0
                -79.046714,-8.050268,0
                -79.046666,-8.050253,0
                -79.046622,-8.050215,0
                -79.046422,-8.049895,0
                -79.046359,-8.049796,0
                -79.046268,-8.049679,0
                -79.046297,-8.049657,0
                -79.046365,-8.049734,0
                -79.046492,-8.049925,0
                -79.046734,-8.049791,0
                -79.046823,-8.049755,0
                -79.04686,-8.049742,0
                -79.047099,-8.049703,0
                -79.047177,-8.050138,0
                -79.047607,-8.050043,0
                -79.047657,-8.050429,0
                -79.047702,-8.050739,0
                -79.048078,-8.050951,0
                -79.048228,-8.050689,0
                -79.048271,-8.050711,0
                -79.048129,-8.050972,0
                -79.048914,-8.0514,0
                -79.049009,-8.051509,0
                -79.049103,-8.051681,0
                -79.049466,-8.051961,0
                -79.050385,-8.05026,0
                -79.05566,-8.052027,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.0538,-8.058498,0
                -79.054804,-8.058814,0
                -79.057481,-8.059645,0
                -79.057607,-8.059216,0
                -79.055828,-8.058654,0
                -79.05584,-8.058611,0
                -79.056189,-8.05872,0
                -79.056349,-8.058215,0
                -79.057254,-8.058491,0
                -79.057844,-8.058676,0
                -79.057936,-8.058753,0
                -79.058448,-8.058505,0
                -79.058817,-8.059317,0
                -79.059248,-8.060294,0
                -79.061501,-8.065381,0
                -79.057157,-8.063952,0
                -79.055508,-8.063203,0
                -79.054429,-8.062917,0
                -79.054856,-8.061673,0
                -79.053916,-8.061371,0
                -79.054018,-8.060951,0
                -79.053064,-8.060671,0
                -79.0538,-8.058498,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>PP89 Y PP90</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.054429,-8.062892,0
                -79.053852,-8.062729,0
                -79.053595,-8.063575,0
                -79.053529,-8.063569,0
                -79.053779,-8.06271,0
                -79.048823,-8.061466,0
                -79.049178,-8.059788,0
                -79.052712,-8.060931,0
                -79.052829,-8.060599,0
                -79.054019,-8.060951,0
                -79.053902,-8.061384,0
                -79.054852,-8.061671,0
                -79.054429,-8.062892,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.076284,-8.074024,0
                -79.06936,-8.076159,0
                -79.069194,-8.076117,0
                -79.066558,-8.07695,0
                -79.064678,-8.07777,0
                -79.059578,-8.079758,0
                -79.059762,-8.080014,0
                -79.059722,-8.080038,0
                -79.059559,-8.079788,0
                -79.058964,-8.080043,0
                -79.059199,-8.079271,0
                -79.058733,-8.079097,0
                -79.058776,-8.078945,0
                -79.059285,-8.079123,0
                -79.059443,-8.078716,0
                -79.05899,-8.078534,0
                -79.059553,-8.07692,0
                -79.060044,-8.077072,0
                -79.060164,-8.076711,0
                -79.059296,-8.076406,0
                -79.059382,-8.076231,0
                -79.059844,-8.076067,0
                -79.065476,-8.073728,0
                -79.067159,-8.073078,0
                -79.067296,-8.073485,0
                -79.071389,-8.071848,0
                -79.071235,-8.071482,0
                -79.072001,-8.071107,0
                -79.071893,-8.07075,0
                -79.072848,-8.070349,0
                -79.073047,-8.070804,0
                -79.073542,-8.070438,0
                -79.073065,-8.068957,0
                -79.074551,-8.069724,0
                -79.076284,-8.074024,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.073054,-8.068878,0
                -79.074681,-8.069809,0
                -79.076307,-8.074035,0
                -79.066422,-8.077029,0
                -79.059061,-8.080006,0
                -79.055296,-8.081452,0
                -79.060289,-8.068016,0
                -79.061294,-8.065362,0
                -79.061425,-8.065206,0
                -79.061626,-8.065189,0
                -79.062078,-8.063998,0
                -79.073054,-8.068878,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
      <Placemark>
        <name>Polígono sin título</name>
        <styleUrl>#poly-0097A7-1200-76-nodesc</styleUrl>
        <Polygon>
          <outerBoundaryIs>
            <LinearRing>
              <tessellate>1</tessellate>
              <coordinates>
                -79.022986,-8.080565,0
                -79.022991,-8.081253,0
                -79.019546,-8.080726,0
                -79.017978,-8.080299,0
                -79.017088,-8.080031,0
                -79.017029,-8.08053,0
                -79.016956,-8.080519,0
                -79.017022,-8.080002,0
                -79.016192,-8.079777,0
                -79.016072,-8.080362,0
                -79.016006,-8.080349,0
                -79.016121,-8.07976,0
                -79.015275,-8.079515,0
                -79.015107,-8.08023,0
                -79.015051,-8.080219,0
                -79.015216,-8.079492,0
                -79.014141,-8.079194,0
                -79.014224,-8.078461,0
                -79.015027,-8.078616,0
                -79.015156,-8.077916,0
                -79.01612,-8.078069,0
                -79.016282,-8.077003,0
                -79.01742,-8.077205,0
                -79.017478,-8.076793,0
                -79.018059,-8.076899,0
                -79.017816,-8.078338,0
                -79.019847,-8.07861,0
                -79.020089,-8.077226,0
                -79.020494,-8.074397,0
                -79.024922,-8.075885,0
                -79.025102,-8.076383,0
                -79.024918,-8.078016,0
                -79.02334,-8.077782,0
                -79.022986,-8.080565,0
              </coordinates>
            </LinearRing>
          </outerBoundaryIs>
        </Polygon>
      </Placemark>
    </Folder>
  </Document>
</kml>
`,re=e=>{try{let t=e.match(/<coordinates>(.*?)<\/coordinates>/gs);return t?t.map(e=>e.replace(`<coordinates>`,``).replace(`</coordinates>`,``).trim().split(/\s+/).map(e=>e.trim()).filter(e=>e.length>0).map(e=>{let t=e.split(`,`).map(e=>parseFloat(e.trim()));return t.length>=2&&!isNaN(t[0])&&!isNaN(t[1])?[t[1],t[0]]:null}).filter(e=>e!==null)).filter(e=>e.length>0):[]}catch(e){return console.error(`Error parsing KML:`,e),[]}},ie=()=>{let[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(null),[i,o]=(0,a.useState)(!0),[s,c]=(0,a.useState)(null);return(0,a.useEffect)(()=>{try{t(JSON.parse(I)),r(re(R)),o(!1)}catch(e){console.error(`Error cargando datos de cobertura:`,e),c(`Error al cargar datos de cobertura`),o(!1)}},[]),{coveragePolygon:e,mapPolygons:n,loading:i,error:s}},ae=()=>({getLocation:()=>new Promise((e,t)=>{if(!navigator.geolocation){t(Error(`Tu navegador no soporta geolocalización.`));return}navigator.geolocation.getCurrentPosition(t=>{e({latitude:t.coords.latitude,longitude:t.coords.longitude})},e=>{switch(e.code){case e.PERMISSION_DENIED:t(Error(`No se pudo obtener tu ubicación. Por favor selecciona tu ubicación en el mapa.`));break;case e.POSITION_UNAVAILABLE:t(Error(`La información de ubicación no está disponible.`));break;case e.TIMEOUT:t(Error(`El tiempo de espera para obtener la ubicación ha expirado.`));break;default:t(Error(`Error desconocido al obtener la ubicación.`))}})})}),z=6371008.8;z*100,z*100,360/(2*Math.PI),z*3.28084,z*39.37,z/1e3,z/1e3,z/1609.344,z*1e3,z*1e3,z/1852,z*1.0936;function oe(e,t,n={}){let r={type:`Feature`};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function se(e,t,n={}){if(!e)throw Error(`coordinates is required`);if(!Array.isArray(e))throw Error(`coordinates must be an Array`);if(e.length<2)throw Error(`coordinates must be at least 2 numbers long`);if(!ce(e[0])||!ce(e[1]))throw Error(`coordinates must contain numbers`);return oe({type:`Point`,coordinates:e},t,n)}function ce(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function le(e){if(!e)throw Error(`coord is required`);if(!Array.isArray(e)){if(e.type===`Feature`&&e.geometry!==null&&e.geometry.type===`Point`)return[...e.geometry.coordinates];if(e.type===`Point`)return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw Error(`coord must be GeoJSON Point or an Array of numbers`)}function ue(e){return e.type===`Feature`?e.geometry:e}var B=11102230246251565e-32,V=134217729,de=(3+8*B)*B;function fe(e,t,n,r,i){let a,o,s,c,l=t[0],u=r[0],d=0,f=0;u>l==u>-l?(a=l,l=t[++d]):(a=u,u=r[++f]);let p=0;if(d<e&&f<n)for(u>l==u>-l?(o=l+a,s=a-(o-l),l=t[++d]):(o=u+a,s=a-(o-u),u=r[++f]),a=o,s!==0&&(i[p++]=s);d<e&&f<n;)u>l==u>-l?(o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d]):(o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f]),a=o,s!==0&&(i[p++]=s);for(;d<e;)o=a+l,c=o-a,s=a-(o-c)+(l-c),l=t[++d],a=o,s!==0&&(i[p++]=s);for(;f<n;)o=a+u,c=o-a,s=a-(o-c)+(u-c),u=r[++f],a=o,s!==0&&(i[p++]=s);return(a!==0||p===0)&&(i[p++]=a),p}function pe(e,t){let n=t[0];for(let r=1;r<e;r++)n+=t[r];return n}function H(e){return new Float64Array(e)}var me=(3+16*B)*B,he=(2+12*B)*B,ge=(9+64*B)*B*B,_e=H(4),ve=H(8),ye=H(12),be=H(16),U=H(4);function xe(e,t,n,r,i,a,o){let s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e-i,E=n-i,D=t-a,O=r-a;b=T*O,f=V*T,p=f-(f-T),m=T-p,f=V*O,h=f-(f-O),g=O-h,x=m*g-(b-p*h-m*h-p*g),S=D*E,f=V*D,p=f-(f-D),m=D-p,f=V*E,h=f-(f-E),g=E-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,_e[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,_e[1]=y-(_+d)+(d-S),w=v+_,d=w-v,_e[2]=v-(w-d)+(_-d),_e[3]=w;let ee=pe(4,_e),k=he*o;if(ee>=k||-ee>=k||(d=e-T,s=e-(T+d)+(d-i),d=n-E,l=n-(E+d)+(d-i),d=t-D,c=t-(D+d)+(d-a),d=r-O,u=r-(O+d)+(d-a),s===0&&c===0&&l===0&&u===0)||(k=ge*o+de*Math.abs(ee),ee+=T*u+O*s-(D*l+E*c),ee>=k||-ee>=k))return ee;b=s*O,f=V*s,p=f-(f-s),m=s-p,f=V*O,h=f-(f-O),g=O-h,x=m*g-(b-p*h-m*h-p*g),S=c*E,f=V*c,p=f-(f-c),m=c-p,f=V*E,h=f-(f-E),g=E-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,U[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,U[1]=y-(_+d)+(d-S),w=v+_,d=w-v,U[2]=v-(w-d)+(_-d),U[3]=w;let te=fe(4,_e,4,U,ve);b=T*u,f=V*T,p=f-(f-T),m=T-p,f=V*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=D*l,f=V*D,p=f-(f-D),m=D-p,f=V*l,h=f-(f-l),g=l-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,U[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,U[1]=y-(_+d)+(d-S),w=v+_,d=w-v,U[2]=v-(w-d)+(_-d),U[3]=w;let A=fe(te,ve,4,U,ye);return b=s*u,f=V*s,p=f-(f-s),m=s-p,f=V*u,h=f-(f-u),g=u-h,x=m*g-(b-p*h-m*h-p*g),S=c*l,f=V*c,p=f-(f-c),m=c-p,f=V*l,h=f-(f-l),g=l-h,C=m*g-(S-p*h-m*h-p*g),_=x-C,d=x-_,U[0]=x-(_+d)+(d-C),v=b+_,d=v-b,y=b-(v-d)+(_-d),_=y-S,d=y-_,U[1]=y-(_+d)+(d-S),w=v+_,d=w-v,U[2]=v-(w-d)+(_-d),U[3]=w,be[fe(A,ye,4,U,be)-1]}function Se(e,t,n,r,i,a){let o=(t-a)*(n-i),s=(e-i)*(r-a),c=o-s,l=Math.abs(o+s);return Math.abs(c)>=me*l?c:-xe(e,t,n,r,i,a,l)}(7+56*B)*B,(3+28*B)*B,(26+288*B)*B*B,H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(8),H(8),H(8),H(4),H(8),H(8),H(16),H(12),H(192),H(192),(10+96*B)*B,(4+48*B)*B,(44+576*B)*B*B,H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(8),H(8),H(8),H(8),H(8),H(8),H(8),H(8),H(8),H(4),H(4),H(4),H(8),H(16),H(16),H(16),H(32),H(32),H(48),H(64),H(1152),H(1152),(16+224*B)*B,(5+72*B)*B,(71+1408*B)*B*B,H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(4),H(24),H(24),H(24),H(24),H(24),H(24),H(24),H(24),H(24),H(24),H(1152),H(1152),H(1152),H(1152),H(1152),H(2304),H(2304),H(3456),H(5760),H(8),H(8),H(8),H(16),H(24),H(48),H(48),H(96),H(192),H(384),H(384),H(384),H(768),H(96),H(96),H(96),H(1152);function Ce(e,t){var n,r,i=0,a,o,s,c,l,u,d,f=e[0],p=e[1],m=t.length;for(n=0;n<m;n++){r=0;var h=t[n],g=h.length-1;if(u=h[0],u[0]!==h[g][0]&&u[1]!==h[g][1])throw Error(`First and last coordinates in a ring must be the same`);for(o=u[0]-f,s=u[1]-p;r<g;r++){if(d=h[r+1],c=d[0]-f,l=d[1]-p,s===0&&l===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(l>=0&&s<=0||l<=0&&s>=0){if(a=Se(o,c,s,l,0,0),a===0)return 0;(a>0&&l>0&&s<=0||a<0&&l<=0&&s>0)&&i++}u=d,s=l,o=c}}return i%2!=0}function we(e,t,n={}){if(!e)throw Error(`point is required`);if(!t)throw Error(`polygon is required`);let r=le(e),i=ue(t),a=i.type,o=t.bbox,s=i.coordinates;if(o&&Te(r,o)===!1)return!1;a===`Polygon`&&(s=[s]);let c=!1;for(var l=0;l<s.length;++l){let e=Ce(r,s[l]);if(e===0)return!n.ignoreBoundary;e&&(c=!0)}return c}function Te(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}var Ee=(e,t,n)=>{if(!n)throw Error(`Coverage polygon not provided`);try{return we(se([t,e]),n)}catch(e){throw console.error(`Error checking coverage:`,e),e}},De=e=>e?`¡Felicidades! Tienes cobertura en tu ubicación.`:`Tu ubicación aún no tiene cobertura. Contáctanos para futuras ampliaciones.`,Oe={defaultCenter:[-8.05,-79.06],defaultZoom:13,map:{tileUrl:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`},polygon:{strokeColor:`#0b3a81`,fillColor:`#fbc704`,fillOpacity:.3,weight:2},flyTo:{zoom:15,duration:1.5},dataFiles:{geojson:`../assets/COBERTURA.geojson`,kml:`../assets/COBERTURA2.0.kml`}};function ke(){let[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(null),[i,o]=(0,a.useState)(!1),[s,c]=(0,a.useState)(null),[l,u]=(0,a.useState)(!1),{coveragePolygon:d,mapPolygons:f,loading:p}=ie(),{getLocation:m}=ae(),h=async()=>{o(!0);try{let e=await m();c([e.latitude,e.longitude]),t({lat:e.latitude,lng:e.longitude}),v(e.latitude,e.longitude)}catch(e){r({success:!1,message:e.message}),u(!0)}finally{o(!1)}},g=({targetPosition:e})=>{let t=E();return(0,a.useEffect)(()=>{e&&t.flyTo(e,Oe.flyTo.zoom,{duration:Oe.flyTo.duration})},[e,t]),null},_=(e,n)=>{c([e,n]),t({lat:e,lng:n}),v(e,n)},v=(e,t)=>{o(!0);try{if(!d){r({success:!1,message:`El polígono de cobertura aún no está cargado.`}),o(!1);return}let n=Ee(e,t,d);r({success:n,message:De(n)}),u(!0)}catch(e){console.error(`Error checking coverage:`,e),r({success:!1,message:`Error al verificar la cobertura.`}),u(!0)}finally{o(!1)}};return(0,j.jsx)(`div`,{className:`min-h-screen bg-gray-50 py-12 px-4`,children:(0,j.jsxs)(`div`,{className:`max-w-4xl mx-auto`,children:[(0,j.jsx)(`h1`,{className:`text-4xl font-bold text-chiclin-blue-navy text-center mb-8`,children:`Verifica tu Cobertura`}),(0,j.jsxs)(`div`,{className:`bg-white rounded-xl shadow-lg p-8 mb-8`,children:[(0,j.jsxs)(`div`,{className:`mb-6`,children:[(0,j.jsx)(`h2`,{className:`text-2xl font-semibold text-chiclin-blue-base mb-4`,children:`¿Vives en El Milagro o La Esperanza?`}),(0,j.jsx)(`p`,{className:`text-gray-600 mb-6`,children:`Verifica si tu dirección tiene cobertura de nuestra red de fibra óptica 100% GPON.`})]}),(0,j.jsxs)(`div`,{className:`space-y-4`,children:[(0,j.jsx)(`button`,{onClick:h,disabled:i,className:`w-full bg-gradient-to-r from-chiclin-blue-base to-chiclin-blue-light hover:from-chiclin-blue-light hover:to-chiclin-blue-base text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:transform-none`,children:i?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`svg`,{className:`animate-spin w-6 h-6`,fill:`none`,viewBox:`0 0 24 24`,children:[(0,j.jsx)(`circle`,{className:`opacity-25`,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`4`}),(0,j.jsx)(`path`,{className:`opacity-75`,fill:`currentColor`,d:`M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z`})]}),`Verificando...`]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`svg`,{className:`w-6 h-6`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:[(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z`}),(0,j.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 11a3 3 0 11-6 0 3 3 0 016 0z`})]}),`Buscar mi ubicación`]})}),(0,j.jsx)(`p`,{className:`text-gray-600 text-center`,children:`Haz clic en el mapa para seleccionar tu ubicación`}),(0,j.jsxs)(`div`,{className:`h-96 rounded-lg overflow-hidden border-2 border-chiclin-blue-base relative z-10`,children:[(0,j.jsxs)(k,{center:Oe.defaultCenter,zoom:Oe.defaultZoom,style:{height:`100%`,width:`100%`,zIndex:1},children:[(0,j.jsx)(ne,{url:Oe.map.tileUrl,attribution:Oe.map.attribution}),f&&f.map((e,t)=>(0,j.jsx)(A,{positions:e,pathOptions:Oe.polygon},t)),s&&(0,j.jsx)(te,{position:s}),(0,j.jsx)(()=>(D({click(e){let{lat:n,lng:r}=e.latlng;c([n,r]),t({lat:n,lng:r}),v(n,r)}}),null),{}),(0,j.jsx)(g,{targetPosition:s})]}),(0,j.jsx)(F,{onSearch:_})]})]})]}),(0,j.jsx)(N,{isOpen:l,onClose:()=>u(!1),result:n})]})})}export{ke as default};