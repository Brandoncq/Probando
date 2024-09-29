function Xg(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(t,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ph={exports:{}},Zo={},mh={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),Yg=Symbol.for("react.fragment"),Zg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),e7=Symbol.for("react.provider"),r7=Symbol.for("react.context"),n7=Symbol.for("react.forward_ref"),t7=Symbol.for("react.suspense"),a7=Symbol.for("react.memo"),i7=Symbol.for("react.lazy"),bv=Symbol.iterator;function l7(e){return e===null||typeof e!="object"?null:(e=bv&&e[bv]||e["@@iterator"],typeof e=="function"?e:null)}var hh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gh=Object.assign,yh={};function ta(e,r,n){this.props=e,this.context=r,this.refs=yh,this.updater=n||hh}ta.prototype.isReactComponent={};ta.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};ta.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $h(){}$h.prototype=ta.prototype;function sf(e,r,n){this.props=e,this.context=r,this.refs=yh,this.updater=n||hh}var uf=sf.prototype=new $h;uf.constructor=sf;gh(uf,ta.prototype);uf.isPureReactComponent=!0;var Pv=Array.isArray,wh=Object.prototype.hasOwnProperty,cf={current:null},Nh={key:!0,ref:!0,__self:!0,__source:!0};function _h(e,r,n){var t,a={},o=null,c=null;if(r!=null)for(t in r.ref!==void 0&&(c=r.ref),r.key!==void 0&&(o=""+r.key),r)wh.call(r,t)&&!Nh.hasOwnProperty(t)&&(a[t]=r[t]);var p=arguments.length-2;if(p===1)a.children=n;else if(1<p){for(var f=Array(p),u=0;u<p;u++)f[u]=arguments[u+2];a.children=f}if(e&&e.defaultProps)for(t in p=e.defaultProps,p)a[t]===void 0&&(a[t]=p[t]);return{$$typeof:bi,type:e,key:o,ref:c,props:a,_owner:cf.current}}function o7(e,r){return{$$typeof:bi,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function ff(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function s7(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Av=/\/+/g;function Os(e,r){return typeof e=="object"&&e!==null&&e.key!=null?s7(""+e.key):r.toString(36)}function uo(e,r,n,t,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case bi:case Qg:c=!0}}if(c)return c=e,a=a(c),e=t===""?"."+Os(c,0):t,Pv(a)?(n="",e!=null&&(n=e.replace(Av,"$&/")+"/"),uo(a,r,n,"",function(u){return u})):a!=null&&(ff(a)&&(a=o7(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(Av,"$&/")+"/")+e)),r.push(a)),1;if(c=0,t=t===""?".":t+":",Pv(e))for(var p=0;p<e.length;p++){o=e[p];var f=t+Os(o,p);c+=uo(o,r,n,f,a)}else if(f=l7(e),typeof f=="function")for(e=f.call(e),p=0;!(o=e.next()).done;)o=o.value,f=t+Os(o,p++),c+=uo(o,r,n,f,a);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function zi(e,r,n){if(e==null)return e;var t=[],a=0;return uo(e,t,"","",function(o){return r.call(n,o,a++)}),t}function u7(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},co={transition:null},c7={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:co,ReactCurrentOwner:cf};function xh(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:zi,forEach:function(e,r,n){zi(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return zi(e,function(){r++}),r},toArray:function(e){return zi(e,function(r){return r})||[]},only:function(e){if(!ff(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ta;X.Fragment=Yg;X.Profiler=Jg;X.PureComponent=sf;X.StrictMode=Zg;X.Suspense=t7;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c7;X.act=xh;X.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=gh({},e.props),a=e.key,o=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,c=cf.current),r.key!==void 0&&(a=""+r.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(f in r)wh.call(r,f)&&!Nh.hasOwnProperty(f)&&(t[f]=r[f]===void 0&&p!==void 0?p[f]:r[f])}var f=arguments.length-2;if(f===1)t.children=n;else if(1<f){p=Array(f);for(var u=0;u<f;u++)p[u]=arguments[u+2];t.children=p}return{$$typeof:bi,type:e.type,key:a,ref:o,props:t,_owner:c}};X.createContext=function(e){return e={$$typeof:r7,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e7,_context:e},e.Consumer=e};X.createElement=_h;X.createFactory=function(e){var r=_h.bind(null,e);return r.type=e,r};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:n7,render:e}};X.isValidElement=ff;X.lazy=function(e){return{$$typeof:i7,_payload:{_status:-1,_result:e},_init:u7}};X.memo=function(e,r){return{$$typeof:a7,type:e,compare:r===void 0?null:r}};X.startTransition=function(e){var r=co.transition;co.transition={};try{e()}finally{co.transition=r}};X.unstable_act=xh;X.useCallback=function(e,r){return De.current.useCallback(e,r)};X.useContext=function(e){return De.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return De.current.useDeferredValue(e)};X.useEffect=function(e,r){return De.current.useEffect(e,r)};X.useId=function(){return De.current.useId()};X.useImperativeHandle=function(e,r,n){return De.current.useImperativeHandle(e,r,n)};X.useInsertionEffect=function(e,r){return De.current.useInsertionEffect(e,r)};X.useLayoutEffect=function(e,r){return De.current.useLayoutEffect(e,r)};X.useMemo=function(e,r){return De.current.useMemo(e,r)};X.useReducer=function(e,r,n){return De.current.useReducer(e,r,n)};X.useRef=function(e){return De.current.useRef(e)};X.useState=function(e){return De.current.useState(e)};X.useSyncExternalStore=function(e,r,n){return De.current.useSyncExternalStore(e,r,n)};X.useTransition=function(){return De.current.useTransition()};X.version="18.3.1";mh.exports=X;var P=mh.exports;const f7=dh(P),v7=Xg({__proto__:null,default:f7},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d7=P,p7=Symbol.for("react.element"),m7=Symbol.for("react.fragment"),h7=Object.prototype.hasOwnProperty,g7=d7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y7={key:!0,ref:!0,__self:!0,__source:!0};function Ih(e,r,n){var t,a={},o=null,c=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)h7.call(r,t)&&!y7.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:p7,type:e,key:o,ref:c,props:a,_owner:g7.current}}Zo.Fragment=m7;Zo.jsx=Ih;Zo.jsxs=Ih;ph.exports=Zo;var d=ph.exports,Eh={exports:{}},er={},bh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(A,b){var k=A.length;A.push(b);e:for(;0<k;){var H=k-1>>>1,W=A[H];if(0<a(W,b))A[H]=b,A[k]=W,k=H;else break e}}function n(A){return A.length===0?null:A[0]}function t(A){if(A.length===0)return null;var b=A[0],k=A.pop();if(k!==b){A[0]=k;e:for(var H=0,W=A.length,K=W>>>1;H<K;){var S=2*(H+1)-1,B=A[S],te=S+1,we=A[te];if(0>a(B,k))te<W&&0>a(we,B)?(A[H]=we,A[te]=k,H=te):(A[H]=B,A[S]=k,H=S);else if(te<W&&0>a(we,k))A[H]=we,A[te]=k,H=te;else break e}}return b}function a(A,b){var k=A.sortIndex-b.sortIndex;return k!==0?k:A.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,p=c.now();e.unstable_now=function(){return c.now()-p}}var f=[],u=[],i=1,l=null,s=3,v=!1,h=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var b=n(u);b!==null;){if(b.callback===null)t(u);else if(b.startTime<=A)t(u),b.sortIndex=b.expirationTime,r(f,b);else break;b=n(u)}}function N(A){if(g=!1,m(A),!h)if(n(f)!==null)h=!0,D(x);else{var b=n(u);b!==null&&F(N,b.startTime-A)}}function x(A,b){h=!1,g&&(g=!1,y(E),E=-1),v=!0;var k=s;try{for(m(b),l=n(f);l!==null&&(!(l.expirationTime>b)||A&&!R());){var H=l.callback;if(typeof H=="function"){l.callback=null,s=l.priorityLevel;var W=H(l.expirationTime<=b);b=e.unstable_now(),typeof W=="function"?l.callback=W:l===n(f)&&t(f),m(b)}else t(f);l=n(f)}if(l!==null)var K=!0;else{var S=n(u);S!==null&&F(N,S.startTime-b),K=!1}return K}finally{l=null,s=k,v=!1}}var _=!1,I=null,E=-1,j=5,O=-1;function R(){return!(e.unstable_now()-O<j)}function U(){if(I!==null){var A=e.unstable_now();O=A;var b=!0;try{b=I(!0,A)}finally{b?z():(_=!1,I=null)}}else _=!1}var z;if(typeof $=="function")z=function(){$(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Y=V.port2;V.port1.onmessage=U,z=function(){Y.postMessage(null)}}else z=function(){w(U,0)};function D(A){I=A,_||(_=!0,z())}function F(A,b){E=w(function(){A(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,D(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return s},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(A){switch(s){case 1:case 2:case 3:var b=3;break;default:b=s}var k=s;s=b;try{return A()}finally{s=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,b){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var k=s;s=A;try{return b()}finally{s=k}},e.unstable_scheduleCallback=function(A,b,k){var H=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?H+k:H):k=H,A){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=k+W,A={id:i++,callback:b,priorityLevel:A,startTime:k,expirationTime:W,sortIndex:-1},k>H?(A.sortIndex=k,r(u,A),n(f)===null&&A===n(u)&&(g?(y(E),E=-1):g=!0,F(N,k-H))):(A.sortIndex=W,r(f,A),h||v||(h=!0,D(x))),A},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(A){var b=s;return function(){var k=s;s=b;try{return A.apply(this,arguments)}finally{s=k}}}})(Ph);bh.exports=Ph;var $7=bh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w7=P,Je=$7;function C(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ah=new Set,oi={};function mt(e,r){Kt(e,r),Kt(e+"Capture",r)}function Kt(e,r){for(oi[e]=r,e=0;e<r.length;e++)Ah.add(r[e])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,N7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ov={},kv={};function _7(e){return Wu.call(kv,e)?!0:Wu.call(Ov,e)?!1:N7.test(e)?kv[e]=!0:(Ov[e]=!0,!1)}function x7(e,r,n,t){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I7(e,r,n,t){if(r===null||typeof r>"u"||x7(e,r,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Ge(e,r,n,t,a,o,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=c}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ke[r]=new Ge(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function df(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(vf,df);ke[r]=new Ge(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(vf,df);ke[r]=new Ge(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(vf,df);ke[r]=new Ge(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function pf(e,r,n,t){var a=ke.hasOwnProperty(r)?ke[r]:null;(a!==null?a.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(I7(r,n,a,t)&&(n=null),t||a===null?_7(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(r=a.attributeName,t=a.attributeNamespace,n===null?e.removeAttribute(r):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,t?e.setAttributeNS(t,r,n):e.setAttribute(r,n))))}var Jr=w7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),kt=Symbol.for("react.portal"),jt=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Oh=Symbol.for("react.provider"),kh=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),jh=Symbol.for("react.offscreen"),jv=Symbol.iterator;function ha(e){return e===null||typeof e!="object"?null:(e=jv&&e[jv]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,ks;function Xa(e){if(ks===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);ks=r&&r[1]||""}return`
`+ks+e}var js=!1;function Cs(e,r){if(!e||js)return"";js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var t=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){t=u}e.call(r.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=t.stack.split(`
`),c=a.length-1,p=o.length-1;1<=c&&0<=p&&a[c]!==o[p];)p--;for(;1<=c&&0<=p;c--,p--)if(a[c]!==o[p]){if(c!==1||p!==1)do if(c--,p--,0>p||a[c]!==o[p]){var f=`
`+a[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=c&&0<=p);break}}}finally{js=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xa(e):""}function E7(e){switch(e.tag){case 5:return Xa(e.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 2:case 15:return e=Cs(e.type,!1),e;case 11:return e=Cs(e.type.render,!1),e;case 1:return e=Cs(e.type,!0),e;default:return""}}function Xu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jt:return"Fragment";case kt:return"Portal";case qu:return"Profiler";case mf:return"StrictMode";case Vu:return"Suspense";case Mu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kh:return(e.displayName||"Context")+".Consumer";case Oh:return(e._context.displayName||"Context")+".Provider";case hf:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gf:return r=e.displayName||null,r!==null?r:Xu(e.type)||"Memo";case An:r=e._payload,e=e._init;try{return Xu(e(r))}catch{}}return null}function b7(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(r);case 8:return r===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ch(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function P7(e){var r=Ch(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(c){t=""+c,o.call(this,c)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(c){t=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Gi(e){e._valueTracker||(e._valueTracker=P7(e))}function Lh(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),t="";return e&&(t=Ch(e)?e.checked?"true":"false":e.value),e=t,e!==n?(r.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ku(e,r){var n=r.checked;return pe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cv(e,r){var n=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;n=Wn(r.value!=null?r.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Fh(e,r){r=r.checked,r!=null&&pf(e,"checked",r,!1)}function Qu(e,r){Fh(e,r);var n=Wn(r.value),t=r.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Yu(e,r.type,n):r.hasOwnProperty("defaultValue")&&Yu(e,r.type,Wn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Lv(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yu(e,r,n){(r!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ka=Array.isArray;function Bt(e,r,n,t){if(e=e.options,r){r={};for(var a=0;a<n.length;a++)r["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=r.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&t&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),r=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Zu(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(C(91));return pe({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fv(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(C(92));if(Ka(n)){if(1<n.length)throw Error(C(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Wn(n)}}function Sh(e,r){var n=Wn(r.value),t=Wn(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function Sv(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Th(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Th(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Hh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,t,a){MSApp.execUnsafeLocalFunction(function(){return e(r,n,t,a)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function si(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A7=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(e){A7.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Za[r]=Za[e]})});function Rh(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Za.hasOwnProperty(e)&&Za[e]?(""+r).trim():r+"px"}function zh(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var t=n.indexOf("--")===0,a=Rh(n,r[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,a):e[n]=a}}var O7=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,r){if(r){if(O7[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(C(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(C(61))}if(r.style!=null&&typeof r.style!="object")throw Error(C(62))}}function rc(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function yf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tc=null,Ut=null,Wt=null;function Tv(e){if(e=Oi(e)){if(typeof tc!="function")throw Error(C(280));var r=e.stateNode;r&&(r=ts(r),tc(e.stateNode,e.type,r))}}function Dh(e){Ut?Wt?Wt.push(e):Wt=[e]:Ut=e}function Gh(){if(Ut){var e=Ut,r=Wt;if(Wt=Ut=null,Tv(e),r)for(e=0;e<r.length;e++)Tv(r[e])}}function Bh(e,r){return e(r)}function Uh(){}var Ls=!1;function Wh(e,r,n){if(Ls)return e(r,n);Ls=!0;try{return Bh(e,r,n)}finally{Ls=!1,(Ut!==null||Wt!==null)&&(Uh(),Gh())}}function ui(e,r){var n=e.stateNode;if(n===null)return null;var t=ts(n);if(t===null)return null;n=t[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,r,typeof n));return n}var ac=!1;if(Kr)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){ac=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{ac=!1}function k7(e,r,n,t,a,o,c,p,f){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(i){this.onError(i)}}var Ja=!1,Io=null,Eo=!1,ic=null,j7={onError:function(e){Ja=!0,Io=e}};function C7(e,r,n,t,a,o,c,p,f){Ja=!1,Io=null,k7.apply(j7,arguments)}function L7(e,r,n,t,a,o,c,p,f){if(C7.apply(this,arguments),Ja){if(Ja){var u=Io;Ja=!1,Io=null}else throw Error(C(198));Eo||(Eo=!0,ic=u)}}function ht(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function qh(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Hv(e){if(ht(e)!==e)throw Error(C(188))}function F7(e){var r=e.alternate;if(!r){if(r=ht(e),r===null)throw Error(C(188));return r!==e?null:e}for(var n=e,t=r;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(t=a.return,t!==null){n=t;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Hv(a),e;if(o===t)return Hv(a),r;o=o.sibling}throw Error(C(188))}if(n.return!==t.return)n=a,t=o;else{for(var c=!1,p=a.child;p;){if(p===n){c=!0,n=a,t=o;break}if(p===t){c=!0,t=a,n=o;break}p=p.sibling}if(!c){for(p=o.child;p;){if(p===n){c=!0,n=o,t=a;break}if(p===t){c=!0,t=o,n=a;break}p=p.sibling}if(!c)throw Error(C(189))}}if(n.alternate!==t)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:r}function Vh(e){return e=F7(e),e!==null?Mh(e):null}function Mh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Mh(e);if(r!==null)return r;e=e.sibling}return null}var Xh=Je.unstable_scheduleCallback,Rv=Je.unstable_cancelCallback,S7=Je.unstable_shouldYield,T7=Je.unstable_requestPaint,ye=Je.unstable_now,H7=Je.unstable_getCurrentPriorityLevel,$f=Je.unstable_ImmediatePriority,Kh=Je.unstable_UserBlockingPriority,bo=Je.unstable_NormalPriority,R7=Je.unstable_LowPriority,Qh=Je.unstable_IdlePriority,Jo=null,kr=null;function z7(e){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var yr=Math.clz32?Math.clz32:B7,D7=Math.log,G7=Math.LN2;function B7(e){return e>>>=0,e===0?32:31-(D7(e)/G7|0)|0}var Ui=64,Wi=4194304;function Qa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,r){var n=e.pendingLanes;if(n===0)return 0;var t=0,a=e.suspendedLanes,o=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~a;p!==0?t=Qa(p):(o&=c,o!==0&&(t=Qa(o)))}else c=n&~a,c!==0?t=Qa(c):o!==0&&(t=Qa(o));if(t===0)return 0;if(r!==0&&r!==t&&!(r&a)&&(a=t&-t,o=r&-r,a>=o||a===16&&(o&4194240)!==0))return r;if(t&4&&(t|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)n=31-yr(r),a=1<<n,t|=e[n],r&=~a;return t}function U7(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W7(e,r){for(var n=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var c=31-yr(o),p=1<<c,f=a[c];f===-1?(!(p&n)||p&t)&&(a[c]=U7(p,r)):f<=r&&(e.expiredLanes|=p),o&=~p}}function lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yh(){var e=Ui;return Ui<<=1,!(Ui&4194240)&&(Ui=64),e}function Fs(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Pi(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-yr(r),e[r]=n}function q7(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-yr(n),o=1<<a;r[a]=0,t[a]=-1,e[a]=-1,n&=~o}}function wf(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var t=31-yr(n),a=1<<t;a&r|e[t]&r&&(e[t]|=r),n&=~a}}var re=0;function Zh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jh,Nf,e6,r6,n6,oc=!1,qi=[],Sn=null,Tn=null,Hn=null,ci=new Map,fi=new Map,kn=[],V7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zv(e,r){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":ci.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(r.pointerId)}}function ya(e,r,n,t,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:t,nativeEvent:o,targetContainers:[a]},r!==null&&(r=Oi(r),r!==null&&Nf(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function M7(e,r,n,t,a){switch(r){case"focusin":return Sn=ya(Sn,e,r,n,t,a),!0;case"dragenter":return Tn=ya(Tn,e,r,n,t,a),!0;case"mouseover":return Hn=ya(Hn,e,r,n,t,a),!0;case"pointerover":var o=a.pointerId;return ci.set(o,ya(ci.get(o)||null,e,r,n,t,a)),!0;case"gotpointercapture":return o=a.pointerId,fi.set(o,ya(fi.get(o)||null,e,r,n,t,a)),!0}return!1}function t6(e){var r=at(e.target);if(r!==null){var n=ht(r);if(n!==null){if(r=n.tag,r===13){if(r=qh(n),r!==null){e.blockedOn=r,n6(e.priority,function(){e6(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=sc(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);nc=t,n.target.dispatchEvent(t),nc=null}else return r=Oi(n),r!==null&&Nf(r),e.blockedOn=n,!1;r.shift()}return!0}function Dv(e,r,n){fo(e)&&n.delete(r)}function X7(){oc=!1,Sn!==null&&fo(Sn)&&(Sn=null),Tn!==null&&fo(Tn)&&(Tn=null),Hn!==null&&fo(Hn)&&(Hn=null),ci.forEach(Dv),fi.forEach(Dv)}function $a(e,r){e.blockedOn===r&&(e.blockedOn=null,oc||(oc=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,X7)))}function vi(e){function r(a){return $a(a,e)}if(0<qi.length){$a(qi[0],e);for(var n=1;n<qi.length;n++){var t=qi[n];t.blockedOn===e&&(t.blockedOn=null)}}for(Sn!==null&&$a(Sn,e),Tn!==null&&$a(Tn,e),Hn!==null&&$a(Hn,e),ci.forEach(r),fi.forEach(r),n=0;n<kn.length;n++)t=kn[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)t6(n),n.blockedOn===null&&kn.shift()}var qt=Jr.ReactCurrentBatchConfig,Ao=!0;function K7(e,r,n,t){var a=re,o=qt.transition;qt.transition=null;try{re=1,_f(e,r,n,t)}finally{re=a,qt.transition=o}}function Q7(e,r,n,t){var a=re,o=qt.transition;qt.transition=null;try{re=4,_f(e,r,n,t)}finally{re=a,qt.transition=o}}function _f(e,r,n,t){if(Ao){var a=sc(e,r,n,t);if(a===null)Ws(e,r,t,Oo,n),zv(e,t);else if(M7(a,e,r,n,t))t.stopPropagation();else if(zv(e,t),r&4&&-1<V7.indexOf(e)){for(;a!==null;){var o=Oi(a);if(o!==null&&Jh(o),o=sc(e,r,n,t),o===null&&Ws(e,r,t,Oo,n),o===a)break;a=o}a!==null&&t.stopPropagation()}else Ws(e,r,t,null,n)}}var Oo=null;function sc(e,r,n,t){if(Oo=null,e=yf(t),e=at(e),e!==null)if(r=ht(e),r===null)e=null;else if(n=r.tag,n===13){if(e=qh(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Oo=e,null}function a6(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H7()){case $f:return 1;case Kh:return 4;case bo:case R7:return 16;case Qh:return 536870912;default:return 16}default:return 16}}var Cn=null,xf=null,vo=null;function i6(){if(vo)return vo;var e,r=xf,n=r.length,t,a="value"in Cn?Cn.value:Cn.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var c=n-e;for(t=1;t<=c&&r[n-t]===a[o-t];t++);return vo=a.slice(e,1<t?1-t:void 0)}function po(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Gv(){return!1}function rr(e){function r(n,t,a,o,c){this._reactName=n,this._targetInst=a,this.type=t,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vi:Gv,this.isPropagationStopped=Gv,this}return pe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),r}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},If=rr(aa),Ai=pe({},aa,{view:0,detail:0}),Y7=rr(Ai),Ss,Ts,wa,es=pe({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(Ss=e.screenX-wa.screenX,Ts=e.screenY-wa.screenY):Ts=Ss=0,wa=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:Ts}}),Bv=rr(es),Z7=pe({},es,{dataTransfer:0}),J7=rr(Z7),e8=pe({},Ai,{relatedTarget:0}),Hs=rr(e8),r8=pe({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),n8=rr(r8),t8=pe({},aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a8=rr(t8),i8=pe({},aa,{data:0}),Uv=rr(i8),l8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u8(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=s8[e])?!!r[e]:!1}function Ef(){return u8}var c8=pe({},Ai,{key:function(e){if(e.key){var r=l8[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f8=rr(c8),v8=pe({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wv=rr(v8),d8=pe({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),p8=rr(d8),m8=pe({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),h8=rr(m8),g8=pe({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y8=rr(g8),$8=[9,13,27,32],bf=Kr&&"CompositionEvent"in window,ei=null;Kr&&"documentMode"in document&&(ei=document.documentMode);var w8=Kr&&"TextEvent"in window&&!ei,l6=Kr&&(!bf||ei&&8<ei&&11>=ei),qv=" ",Vv=!1;function o6(e,r){switch(e){case"keyup":return $8.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s6(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ct=!1;function N8(e,r){switch(e){case"compositionend":return s6(r);case"keypress":return r.which!==32?null:(Vv=!0,qv);case"textInput":return e=r.data,e===qv&&Vv?null:e;default:return null}}function _8(e,r){if(Ct)return e==="compositionend"||!bf&&o6(e,r)?(e=i6(),vo=xf=Cn=null,Ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return l6&&r.locale!=="ko"?null:r.data;default:return null}}var x8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mv(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!x8[e.type]:r==="textarea"}function u6(e,r,n,t){Dh(t),r=ko(r,"onChange"),0<r.length&&(n=new If("onChange","change",null,n,t),e.push({event:n,listeners:r}))}var ri=null,di=null;function I8(e){w6(e,0)}function rs(e){var r=St(e);if(Lh(r))return e}function E8(e,r){if(e==="change")return r}var c6=!1;if(Kr){var Rs;if(Kr){var zs="oninput"in document;if(!zs){var Xv=document.createElement("div");Xv.setAttribute("oninput","return;"),zs=typeof Xv.oninput=="function"}Rs=zs}else Rs=!1;c6=Rs&&(!document.documentMode||9<document.documentMode)}function Kv(){ri&&(ri.detachEvent("onpropertychange",f6),di=ri=null)}function f6(e){if(e.propertyName==="value"&&rs(di)){var r=[];u6(r,di,e,yf(e)),Wh(I8,r)}}function b8(e,r,n){e==="focusin"?(Kv(),ri=r,di=n,ri.attachEvent("onpropertychange",f6)):e==="focusout"&&Kv()}function P8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(di)}function A8(e,r){if(e==="click")return rs(r)}function O8(e,r){if(e==="input"||e==="change")return rs(r)}function k8(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var wr=typeof Object.is=="function"?Object.is:k8;function pi(e,r){if(wr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var a=n[t];if(!Wu.call(r,a)||!wr(e[a],r[a]))return!1}return!0}function Qv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yv(e,r){var n=Qv(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=r&&t>=r)return{node:n,offset:r-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qv(n)}}function v6(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?v6(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function d6(){for(var e=window,r=xo();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=xo(e.document)}return r}function Pf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function j8(e){var r=d6(),n=e.focusedElem,t=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&v6(n.ownerDocument.documentElement,n)){if(t!==null&&Pf(n)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(t.start,a);t=t.end===void 0?o:Math.min(t.end,a),!e.extend&&o>t&&(a=t,t=o,o=a),a=Yv(n,o);var c=Yv(n,t);a&&c&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),o>t?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C8=Kr&&"documentMode"in document&&11>=document.documentMode,Lt=null,uc=null,ni=null,cc=!1;function Zv(e,r,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||Lt==null||Lt!==xo(t)||(t=Lt,"selectionStart"in t&&Pf(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ni&&pi(ni,t)||(ni=t,t=ko(uc,"onSelect"),0<t.length&&(r=new If("onSelect","select",null,r,n),e.push({event:r,listeners:t}),r.target=Lt)))}function Mi(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Ft={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},Ds={},p6={};Kr&&(p6=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function ns(e){if(Ds[e])return Ds[e];if(!Ft[e])return e;var r=Ft[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in p6)return Ds[e]=r[n];return e}var m6=ns("animationend"),h6=ns("animationiteration"),g6=ns("animationstart"),y6=ns("transitionend"),$6=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,r){$6.set(e,r),mt(r,[e])}for(var Gs=0;Gs<Jv.length;Gs++){var Bs=Jv[Gs],L8=Bs.toLowerCase(),F8=Bs[0].toUpperCase()+Bs.slice(1);Vn(L8,"on"+F8)}Vn(m6,"onAnimationEnd");Vn(h6,"onAnimationIteration");Vn(g6,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(y6,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function e1(e,r,n){var t=e.type||"unknown-event";e.currentTarget=n,L7(t,r,void 0,e),e.currentTarget=null}function w6(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],a=t.event;t=t.listeners;e:{var o=void 0;if(r)for(var c=t.length-1;0<=c;c--){var p=t[c],f=p.instance,u=p.currentTarget;if(p=p.listener,f!==o&&a.isPropagationStopped())break e;e1(a,p,u),o=f}else for(c=0;c<t.length;c++){if(p=t[c],f=p.instance,u=p.currentTarget,p=p.listener,f!==o&&a.isPropagationStopped())break e;e1(a,p,u),o=f}}}if(Eo)throw e=ic,Eo=!1,ic=null,e}function le(e,r){var n=r[mc];n===void 0&&(n=r[mc]=new Set);var t=e+"__bubble";n.has(t)||(N6(r,e,2,!1),n.add(t))}function Us(e,r,n){var t=0;r&&(t|=4),N6(n,e,t,r)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[Xi]){e[Xi]=!0,Ah.forEach(function(n){n!=="selectionchange"&&(S8.has(n)||Us(n,!1,e),Us(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Xi]||(r[Xi]=!0,Us("selectionchange",!1,r))}}function N6(e,r,n,t){switch(a6(r)){case 1:var a=K7;break;case 4:a=Q7;break;default:a=_f}n=a.bind(null,r,n,e),a=void 0,!ac||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(r,n,{capture:!0,passive:a}):e.addEventListener(r,n,!0):a!==void 0?e.addEventListener(r,n,{passive:a}):e.addEventListener(r,n,!1)}function Ws(e,r,n,t,a){var o=t;if(!(r&1)&&!(r&2)&&t!==null)e:for(;;){if(t===null)return;var c=t.tag;if(c===3||c===4){var p=t.stateNode.containerInfo;if(p===a||p.nodeType===8&&p.parentNode===a)break;if(c===4)for(c=t.return;c!==null;){var f=c.tag;if((f===3||f===4)&&(f=c.stateNode.containerInfo,f===a||f.nodeType===8&&f.parentNode===a))return;c=c.return}for(;p!==null;){if(c=at(p),c===null)return;if(f=c.tag,f===5||f===6){t=o=c;continue e}p=p.parentNode}}t=t.return}Wh(function(){var u=o,i=yf(n),l=[];e:{var s=$6.get(e);if(s!==void 0){var v=If,h=e;switch(e){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":v=f8;break;case"focusin":h="focus",v=Hs;break;case"focusout":h="blur",v=Hs;break;case"beforeblur":case"afterblur":v=Hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=J7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=p8;break;case m6:case h6:case g6:v=n8;break;case y6:v=h8;break;case"scroll":v=Y7;break;case"wheel":v=y8;break;case"copy":case"cut":case"paste":v=a8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wv}var g=(r&4)!==0,w=!g&&e==="scroll",y=g?s!==null?s+"Capture":null:s;g=[];for(var $=u,m;$!==null;){m=$;var N=m.stateNode;if(m.tag===5&&N!==null&&(m=N,y!==null&&(N=ui($,y),N!=null&&g.push(hi($,N,m)))),w)break;$=$.return}0<g.length&&(s=new v(s,h,null,n,i),l.push({event:s,listeners:g}))}}if(!(r&7)){e:{if(s=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",s&&n!==nc&&(h=n.relatedTarget||n.fromElement)&&(at(h)||h[Qr]))break e;if((v||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,v?(h=n.relatedTarget||n.toElement,v=u,h=h?at(h):null,h!==null&&(w=ht(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=u),v!==h)){if(g=Bv,N="onMouseLeave",y="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(g=Wv,N="onPointerLeave",y="onPointerEnter",$="pointer"),w=v==null?s:St(v),m=h==null?s:St(h),s=new g(N,$+"leave",v,n,i),s.target=w,s.relatedTarget=m,N=null,at(i)===u&&(g=new g(y,$+"enter",h,n,i),g.target=m,g.relatedTarget=w,N=g),w=N,v&&h)r:{for(g=v,y=h,$=0,m=g;m;m=Et(m))$++;for(m=0,N=y;N;N=Et(N))m++;for(;0<$-m;)g=Et(g),$--;for(;0<m-$;)y=Et(y),m--;for(;$--;){if(g===y||y!==null&&g===y.alternate)break r;g=Et(g),y=Et(y)}g=null}else g=null;v!==null&&r1(l,s,v,g,!1),h!==null&&w!==null&&r1(l,w,h,g,!0)}}e:{if(s=u?St(u):window,v=s.nodeName&&s.nodeName.toLowerCase(),v==="select"||v==="input"&&s.type==="file")var x=E8;else if(Mv(s))if(c6)x=O8;else{x=P8;var _=b8}else(v=s.nodeName)&&v.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(x=A8);if(x&&(x=x(e,u))){u6(l,x,n,i);break e}_&&_(e,s,u),e==="focusout"&&(_=s._wrapperState)&&_.controlled&&s.type==="number"&&Yu(s,"number",s.value)}switch(_=u?St(u):window,e){case"focusin":(Mv(_)||_.contentEditable==="true")&&(Lt=_,uc=u,ni=null);break;case"focusout":ni=uc=Lt=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Zv(l,n,i);break;case"selectionchange":if(C8)break;case"keydown":case"keyup":Zv(l,n,i)}var I;if(bf)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Ct?o6(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(l6&&n.locale!=="ko"&&(Ct||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ct&&(I=i6()):(Cn=i,xf="value"in Cn?Cn.value:Cn.textContent,Ct=!0)),_=ko(u,E),0<_.length&&(E=new Uv(E,e,null,n,i),l.push({event:E,listeners:_}),I?E.data=I:(I=s6(n),I!==null&&(E.data=I)))),(I=w8?N8(e,n):_8(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(i=new Uv("onBeforeInput","beforeinput",null,n,i),l.push({event:i,listeners:u}),i.data=I))}w6(l,r)})}function hi(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ko(e,r){for(var n=r+"Capture",t=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=ui(e,n),o!=null&&t.unshift(hi(e,o,a)),o=ui(e,r),o!=null&&t.push(hi(e,o,a))),e=e.return}return t}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function r1(e,r,n,t,a){for(var o=r._reactName,c=[];n!==null&&n!==t;){var p=n,f=p.alternate,u=p.stateNode;if(f!==null&&f===t)break;p.tag===5&&u!==null&&(p=u,a?(f=ui(n,o),f!=null&&c.unshift(hi(n,f,p))):a||(f=ui(n,o),f!=null&&c.push(hi(n,f,p)))),n=n.return}c.length!==0&&e.push({event:r,listeners:c})}var T8=/\r\n?/g,H8=/\u0000|\uFFFD/g;function n1(e){return(typeof e=="string"?e:""+e).replace(T8,`
`).replace(H8,"")}function Ki(e,r,n){if(r=n1(r),n1(e)!==r&&n)throw Error(C(425))}function jo(){}var fc=null,vc=null;function dc(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,R8=typeof clearTimeout=="function"?clearTimeout:void 0,t1=typeof Promise=="function"?Promise:void 0,z8=typeof queueMicrotask=="function"?queueMicrotask:typeof t1<"u"?function(e){return t1.resolve(null).then(e).catch(D8)}:pc;function D8(e){setTimeout(function(){throw e})}function qs(e,r){var n=r,t=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0){e.removeChild(a),vi(r);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=a}while(n);vi(r)}function Rn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function a1(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Ar="__reactFiber$"+ia,gi="__reactProps$"+ia,Qr="__reactContainer$"+ia,mc="__reactEvents$"+ia,G8="__reactListeners$"+ia,B8="__reactHandles$"+ia;function at(e){var r=e[Ar];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Qr]||n[Ar]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=a1(e);e!==null;){if(n=e[Ar])return n;e=a1(e)}return r}e=n,n=e.parentNode}return null}function Oi(e){return e=e[Ar]||e[Qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ts(e){return e[gi]||null}var hc=[],Tt=-1;function Mn(e){return{current:e}}function oe(e){0>Tt||(e.current=hc[Tt],hc[Tt]=null,Tt--)}function ie(e,r){Tt++,hc[Tt]=e.current,e.current=r}var qn={},He=Mn(qn),qe=Mn(!1),ct=qn;function Qt(e,r){var n=e.type.contextTypes;if(!n)return qn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=r[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ve(e){return e=e.childContextTypes,e!=null}function Co(){oe(qe),oe(He)}function i1(e,r,n){if(He.current!==qn)throw Error(C(168));ie(He,r),ie(qe,n)}function _6(e,r,n){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var a in t)if(!(a in r))throw Error(C(108,b7(e)||"Unknown",a));return pe({},n,t)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,ct=He.current,ie(He,e),ie(qe,qe.current),!0}function l1(e,r,n){var t=e.stateNode;if(!t)throw Error(C(169));n?(e=_6(e,r,ct),t.__reactInternalMemoizedMergedChildContext=e,oe(qe),oe(He),ie(He,e)):oe(qe),ie(qe,n)}var qr=null,as=!1,Vs=!1;function x6(e){qr===null?qr=[e]:qr.push(e)}function U8(e){as=!0,x6(e)}function Xn(){if(!Vs&&qr!==null){Vs=!0;var e=0,r=re;try{var n=qr;for(re=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}qr=null,as=!1}catch(a){throw qr!==null&&(qr=qr.slice(e+1)),Xh($f,Xn),a}finally{re=r,Vs=!1}}return null}var Ht=[],Rt=0,Fo=null,So=0,ir=[],lr=0,ft=null,Vr=1,Mr="";function nt(e,r){Ht[Rt++]=So,Ht[Rt++]=Fo,Fo=e,So=r}function I6(e,r,n){ir[lr++]=Vr,ir[lr++]=Mr,ir[lr++]=ft,ft=e;var t=Vr;e=Mr;var a=32-yr(t)-1;t&=~(1<<a),n+=1;var o=32-yr(r)+a;if(30<o){var c=a-a%5;o=(t&(1<<c)-1).toString(32),t>>=c,a-=c,Vr=1<<32-yr(r)+a|n<<a|t,Mr=o+e}else Vr=1<<o|n<<a|t,Mr=e}function Af(e){e.return!==null&&(nt(e,1),I6(e,1,0))}function Of(e){for(;e===Fo;)Fo=Ht[--Rt],Ht[Rt]=null,So=Ht[--Rt],Ht[Rt]=null;for(;e===ft;)ft=ir[--lr],ir[lr]=null,Mr=ir[--lr],ir[lr]=null,Vr=ir[--lr],ir[lr]=null}var Ze=null,Ye=null,ce=!1,gr=null;function E6(e,r){var n=or(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function o1(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Ze=e,Ye=Rn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Ze=e,Ye=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=ft!==null?{id:Vr,overflow:Mr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=or(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Ze=e,Ye=null,!0):!1;default:return!1}}function gc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yc(e){if(ce){var r=Ye;if(r){var n=r;if(!o1(e,r)){if(gc(e))throw Error(C(418));r=Rn(n.nextSibling);var t=Ze;r&&o1(e,r)?E6(t,n):(e.flags=e.flags&-4097|2,ce=!1,Ze=e)}}else{if(gc(e))throw Error(C(418));e.flags=e.flags&-4097|2,ce=!1,Ze=e}}}function s1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Qi(e){if(e!==Ze)return!1;if(!ce)return s1(e),ce=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!dc(e.type,e.memoizedProps)),r&&(r=Ye)){if(gc(e))throw b6(),Error(C(418));for(;r;)E6(e,r),r=Rn(r.nextSibling)}if(s1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){Ye=Rn(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}Ye=null}}else Ye=Ze?Rn(e.stateNode.nextSibling):null;return!0}function b6(){for(var e=Ye;e;)e=Rn(e.nextSibling)}function Yt(){Ye=Ze=null,ce=!1}function kf(e){gr===null?gr=[e]:gr.push(e)}var W8=Jr.ReactCurrentBatchConfig;function Na(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var t=n.stateNode}if(!t)throw Error(C(147,e));var a=t,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(c){var p=a.refs;c===null?delete p[o]:p[o]=c},r._stringRef=o,r)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Yi(e,r){throw e=Object.prototype.toString.call(r),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function u1(e){var r=e._init;return r(e._payload)}function P6(e){function r(y,$){if(e){var m=y.deletions;m===null?(y.deletions=[$],y.flags|=16):m.push($)}}function n(y,$){if(!e)return null;for(;$!==null;)r(y,$),$=$.sibling;return null}function t(y,$){for(y=new Map;$!==null;)$.key!==null?y.set($.key,$):y.set($.index,$),$=$.sibling;return y}function a(y,$){return y=Bn(y,$),y.index=0,y.sibling=null,y}function o(y,$,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<$?(y.flags|=2,$):m):(y.flags|=2,$)):(y.flags|=1048576,$)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,$,m,N){return $===null||$.tag!==6?($=Js(m,y.mode,N),$.return=y,$):($=a($,m),$.return=y,$)}function f(y,$,m,N){var x=m.type;return x===jt?i(y,$,m.props.children,N,m.key):$!==null&&($.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===An&&u1(x)===$.type)?(N=a($,m.props),N.ref=Na(y,$,m),N.return=y,N):(N=No(m.type,m.key,m.props,null,y.mode,N),N.ref=Na(y,$,m),N.return=y,N)}function u(y,$,m,N){return $===null||$.tag!==4||$.stateNode.containerInfo!==m.containerInfo||$.stateNode.implementation!==m.implementation?($=e0(m,y.mode,N),$.return=y,$):($=a($,m.children||[]),$.return=y,$)}function i(y,$,m,N,x){return $===null||$.tag!==7?($=ut(m,y.mode,N,x),$.return=y,$):($=a($,m),$.return=y,$)}function l(y,$,m){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Js(""+$,y.mode,m),$.return=y,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case Di:return m=No($.type,$.key,$.props,null,y.mode,m),m.ref=Na(y,null,$),m.return=y,m;case kt:return $=e0($,y.mode,m),$.return=y,$;case An:var N=$._init;return l(y,N($._payload),m)}if(Ka($)||ha($))return $=ut($,y.mode,m,null),$.return=y,$;Yi(y,$)}return null}function s(y,$,m,N){var x=$!==null?$.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:p(y,$,""+m,N);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:return m.key===x?f(y,$,m,N):null;case kt:return m.key===x?u(y,$,m,N):null;case An:return x=m._init,s(y,$,x(m._payload),N)}if(Ka(m)||ha(m))return x!==null?null:i(y,$,m,N,null);Yi(y,m)}return null}function v(y,$,m,N,x){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(m)||null,p($,y,""+N,x);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Di:return y=y.get(N.key===null?m:N.key)||null,f($,y,N,x);case kt:return y=y.get(N.key===null?m:N.key)||null,u($,y,N,x);case An:var _=N._init;return v(y,$,m,_(N._payload),x)}if(Ka(N)||ha(N))return y=y.get(m)||null,i($,y,N,x,null);Yi($,N)}return null}function h(y,$,m,N){for(var x=null,_=null,I=$,E=$=0,j=null;I!==null&&E<m.length;E++){I.index>E?(j=I,I=null):j=I.sibling;var O=s(y,I,m[E],N);if(O===null){I===null&&(I=j);break}e&&I&&O.alternate===null&&r(y,I),$=o(O,$,E),_===null?x=O:_.sibling=O,_=O,I=j}if(E===m.length)return n(y,I),ce&&nt(y,E),x;if(I===null){for(;E<m.length;E++)I=l(y,m[E],N),I!==null&&($=o(I,$,E),_===null?x=I:_.sibling=I,_=I);return ce&&nt(y,E),x}for(I=t(y,I);E<m.length;E++)j=v(I,y,E,m[E],N),j!==null&&(e&&j.alternate!==null&&I.delete(j.key===null?E:j.key),$=o(j,$,E),_===null?x=j:_.sibling=j,_=j);return e&&I.forEach(function(R){return r(y,R)}),ce&&nt(y,E),x}function g(y,$,m,N){var x=ha(m);if(typeof x!="function")throw Error(C(150));if(m=x.call(m),m==null)throw Error(C(151));for(var _=x=null,I=$,E=$=0,j=null,O=m.next();I!==null&&!O.done;E++,O=m.next()){I.index>E?(j=I,I=null):j=I.sibling;var R=s(y,I,O.value,N);if(R===null){I===null&&(I=j);break}e&&I&&R.alternate===null&&r(y,I),$=o(R,$,E),_===null?x=R:_.sibling=R,_=R,I=j}if(O.done)return n(y,I),ce&&nt(y,E),x;if(I===null){for(;!O.done;E++,O=m.next())O=l(y,O.value,N),O!==null&&($=o(O,$,E),_===null?x=O:_.sibling=O,_=O);return ce&&nt(y,E),x}for(I=t(y,I);!O.done;E++,O=m.next())O=v(I,y,E,O.value,N),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?E:O.key),$=o(O,$,E),_===null?x=O:_.sibling=O,_=O);return e&&I.forEach(function(U){return r(y,U)}),ce&&nt(y,E),x}function w(y,$,m,N){if(typeof m=="object"&&m!==null&&m.type===jt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:e:{for(var x=m.key,_=$;_!==null;){if(_.key===x){if(x=m.type,x===jt){if(_.tag===7){n(y,_.sibling),$=a(_,m.props.children),$.return=y,y=$;break e}}else if(_.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===An&&u1(x)===_.type){n(y,_.sibling),$=a(_,m.props),$.ref=Na(y,_,m),$.return=y,y=$;break e}n(y,_);break}else r(y,_);_=_.sibling}m.type===jt?($=ut(m.props.children,y.mode,N,m.key),$.return=y,y=$):(N=No(m.type,m.key,m.props,null,y.mode,N),N.ref=Na(y,$,m),N.return=y,y=N)}return c(y);case kt:e:{for(_=m.key;$!==null;){if($.key===_)if($.tag===4&&$.stateNode.containerInfo===m.containerInfo&&$.stateNode.implementation===m.implementation){n(y,$.sibling),$=a($,m.children||[]),$.return=y,y=$;break e}else{n(y,$);break}else r(y,$);$=$.sibling}$=e0(m,y.mode,N),$.return=y,y=$}return c(y);case An:return _=m._init,w(y,$,_(m._payload),N)}if(Ka(m))return h(y,$,m,N);if(ha(m))return g(y,$,m,N);Yi(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,$!==null&&$.tag===6?(n(y,$.sibling),$=a($,m),$.return=y,y=$):(n(y,$),$=Js(m,y.mode,N),$.return=y,y=$),c(y)):n(y,$)}return w}var Zt=P6(!0),A6=P6(!1),To=Mn(null),Ho=null,zt=null,jf=null;function Cf(){jf=zt=Ho=null}function Lf(e){var r=To.current;oe(To),e._currentValue=r}function $c(e,r,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===n)break;e=e.return}}function Vt(e,r){Ho=e,jf=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(We=!0),e.firstContext=null)}function ur(e){var r=e._currentValue;if(jf!==e)if(e={context:e,memoizedValue:r,next:null},zt===null){if(Ho===null)throw Error(C(308));zt=e,Ho.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return r}var it=null;function Ff(e){it===null?it=[e]:it.push(e)}function O6(e,r,n,t){var a=r.interleaved;return a===null?(n.next=n,Ff(r)):(n.next=a.next,a.next=n),r.interleaved=n,Yr(e,t)}function Yr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var On=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k6(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zn(e,r,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,Q&2){var a=t.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r,Yr(e,n)}return a=t.interleaved,a===null?(r.next=r,Ff(t)):(r.next=a.next,a.next=r),t.interleaved=r,Yr(e,n)}function mo(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,wf(e,n)}}function c1(e,r){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=c:o=o.next=c,n=n.next}while(n!==null);o===null?a=o=r:o=o.next=r}else a=o=r;n={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Ro(e,r,n,t){var a=e.updateQueue;On=!1;var o=a.firstBaseUpdate,c=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var f=p,u=f.next;f.next=null,c===null?o=u:c.next=u,c=f;var i=e.alternate;i!==null&&(i=i.updateQueue,p=i.lastBaseUpdate,p!==c&&(p===null?i.firstBaseUpdate=u:p.next=u,i.lastBaseUpdate=f))}if(o!==null){var l=a.baseState;c=0,i=u=f=null,p=o;do{var s=p.lane,v=p.eventTime;if((t&s)===s){i!==null&&(i=i.next={eventTime:v,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var h=e,g=p;switch(s=r,v=n,g.tag){case 1:if(h=g.payload,typeof h=="function"){l=h.call(v,l,s);break e}l=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,s=typeof h=="function"?h.call(v,l,s):h,s==null)break e;l=pe({},l,s);break e;case 2:On=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,s=a.effects,s===null?a.effects=[p]:s.push(p))}else v={eventTime:v,lane:s,tag:p.tag,payload:p.payload,callback:p.callback,next:null},i===null?(u=i=v,f=l):i=i.next=v,c|=s;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;s=p,p=s.next,s.next=null,a.lastBaseUpdate=s,a.shared.pending=null}}while(!0);if(i===null&&(f=l),a.baseState=f,a.firstBaseUpdate=u,a.lastBaseUpdate=i,r=a.shared.interleaved,r!==null){a=r;do c|=a.lane,a=a.next;while(a!==r)}else o===null&&(a.shared.lanes=0);dt|=c,e.lanes=c,e.memoizedState=l}}function f1(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],a=t.callback;if(a!==null){if(t.callback=null,t=n,typeof a!="function")throw Error(C(191,a));a.call(t)}}}var ki={},jr=Mn(ki),yi=Mn(ki),$i=Mn(ki);function lt(e){if(e===ki)throw Error(C(174));return e}function Tf(e,r){switch(ie($i,r),ie(yi,e),ie(jr,ki),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ju(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ju(r,e)}oe(jr),ie(jr,r)}function Jt(){oe(jr),oe(yi),oe($i)}function j6(e){lt($i.current);var r=lt(jr.current),n=Ju(r,e.type);r!==n&&(ie(yi,e),ie(jr,n))}function Hf(e){yi.current===e&&(oe(jr),oe(yi))}var ve=Mn(0);function zo(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ms=[];function Rf(){for(var e=0;e<Ms.length;e++)Ms[e]._workInProgressVersionPrimary=null;Ms.length=0}var ho=Jr.ReactCurrentDispatcher,Xs=Jr.ReactCurrentBatchConfig,vt=0,de=null,Ne=null,Ee=null,Do=!1,ti=!1,wi=0,q8=0;function Le(){throw Error(C(321))}function zf(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!wr(e[n],r[n]))return!1;return!0}function Df(e,r,n,t,a,o){if(vt=o,de=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ho.current=e===null||e.memoizedState===null?K8:Q8,e=n(t,a),ti){o=0;do{if(ti=!1,wi=0,25<=o)throw Error(C(301));o+=1,Ee=Ne=null,r.updateQueue=null,ho.current=Y8,e=n(t,a)}while(ti)}if(ho.current=Go,r=Ne!==null&&Ne.next!==null,vt=0,Ee=Ne=de=null,Do=!1,r)throw Error(C(300));return e}function Gf(){var e=wi!==0;return wi=0,e}function Pr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function cr(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var r=Ee===null?de.memoizedState:Ee.next;if(r!==null)Ee=r,Ne=e;else{if(e===null)throw Error(C(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ee===null?de.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ni(e,r){return typeof r=="function"?r(e):r}function Ks(e){var r=cr(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var t=Ne,a=t.baseQueue,o=n.pending;if(o!==null){if(a!==null){var c=a.next;a.next=o.next,o.next=c}t.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,t=t.baseState;var p=c=null,f=null,u=o;do{var i=u.lane;if((vt&i)===i)f!==null&&(f=f.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var l={lane:i,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};f===null?(p=f=l,c=t):f=f.next=l,de.lanes|=i,dt|=i}u=u.next}while(u!==null&&u!==o);f===null?c=t:f.next=p,wr(t,r.memoizedState)||(We=!0),r.memoizedState=t,r.baseState=c,r.baseQueue=f,n.lastRenderedState=t}if(e=n.interleaved,e!==null){a=e;do o=a.lane,de.lanes|=o,dt|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Qs(e){var r=cr(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var t=n.dispatch,a=n.pending,o=r.memoizedState;if(a!==null){n.pending=null;var c=a=a.next;do o=e(o,c.action),c=c.next;while(c!==a);wr(o,r.memoizedState)||(We=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,t]}function C6(){}function L6(e,r){var n=de,t=cr(),a=r(),o=!wr(t.memoizedState,a);if(o&&(t.memoizedState=a,We=!0),t=t.queue,Bf(T6.bind(null,n,t,e),[e]),t.getSnapshot!==r||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,_i(9,S6.bind(null,n,t,a,r),void 0,null),be===null)throw Error(C(349));vt&30||F6(n,r,a)}return a}function F6(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=de.updateQueue,r===null?(r={lastEffect:null,stores:null},de.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function S6(e,r,n,t){r.value=n,r.getSnapshot=t,H6(r)&&R6(e)}function T6(e,r,n){return n(function(){H6(r)&&R6(e)})}function H6(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!wr(e,n)}catch{return!0}}function R6(e){var r=Yr(e,1);r!==null&&$r(r,e,1,-1)}function v1(e){var r=Pr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},r.queue=e,e=e.dispatch=X8.bind(null,de,e),[r.memoizedState,e]}function _i(e,r,n,t){return e={tag:e,create:r,destroy:n,deps:t,next:null},r=de.updateQueue,r===null?(r={lastEffect:null,stores:null},de.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,r.lastEffect=e)),e}function z6(){return cr().memoizedState}function go(e,r,n,t){var a=Pr();de.flags|=e,a.memoizedState=_i(1|r,n,void 0,t===void 0?null:t)}function is(e,r,n,t){var a=cr();t=t===void 0?null:t;var o=void 0;if(Ne!==null){var c=Ne.memoizedState;if(o=c.destroy,t!==null&&zf(t,c.deps)){a.memoizedState=_i(r,n,o,t);return}}de.flags|=e,a.memoizedState=_i(1|r,n,o,t)}function d1(e,r){return go(8390656,8,e,r)}function Bf(e,r){return is(2048,8,e,r)}function D6(e,r){return is(4,2,e,r)}function G6(e,r){return is(4,4,e,r)}function B6(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function U6(e,r,n){return n=n!=null?n.concat([e]):null,is(4,4,B6.bind(null,r,e),n)}function Uf(){}function W6(e,r){var n=cr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&zf(r,t[1])?t[0]:(n.memoizedState=[e,r],e)}function q6(e,r){var n=cr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&zf(r,t[1])?t[0]:(e=e(),n.memoizedState=[e,r],e)}function V6(e,r,n){return vt&21?(wr(n,r)||(n=Yh(),de.lanes|=n,dt|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function V8(e,r){var n=re;re=n!==0&&4>n?n:4,e(!0);var t=Xs.transition;Xs.transition={};try{e(!1),r()}finally{re=n,Xs.transition=t}}function M6(){return cr().memoizedState}function M8(e,r,n){var t=Gn(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},X6(e))K6(r,n);else if(n=O6(e,r,n,t),n!==null){var a=ze();$r(n,e,t,a),Q6(n,r,t)}}function X8(e,r,n){var t=Gn(e),a={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(X6(e))K6(r,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var c=r.lastRenderedState,p=o(c,n);if(a.hasEagerState=!0,a.eagerState=p,wr(p,c)){var f=r.interleaved;f===null?(a.next=a,Ff(r)):(a.next=f.next,f.next=a),r.interleaved=a;return}}catch{}finally{}n=O6(e,r,a,t),n!==null&&(a=ze(),$r(n,e,t,a),Q6(n,r,t))}}function X6(e){var r=e.alternate;return e===de||r!==null&&r===de}function K6(e,r){ti=Do=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Q6(e,r,n){if(n&4194240){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,wf(e,n)}}var Go={readContext:ur,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},K8={readContext:ur,useCallback:function(e,r){return Pr().memoizedState=[e,r===void 0?null:r],e},useContext:ur,useEffect:d1,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,go(4194308,4,B6.bind(null,r,e),n)},useLayoutEffect:function(e,r){return go(4194308,4,e,r)},useInsertionEffect:function(e,r){return go(4,2,e,r)},useMemo:function(e,r){var n=Pr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var t=Pr();return r=n!==void 0?n(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=M8.bind(null,de,e),[t.memoizedState,e]},useRef:function(e){var r=Pr();return e={current:e},r.memoizedState=e},useState:v1,useDebugValue:Uf,useDeferredValue:function(e){return Pr().memoizedState=e},useTransition:function(){var e=v1(!1),r=e[0];return e=V8.bind(null,e[1]),Pr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var t=de,a=Pr();if(ce){if(n===void 0)throw Error(C(407));n=n()}else{if(n=r(),be===null)throw Error(C(349));vt&30||F6(t,r,n)}a.memoizedState=n;var o={value:n,getSnapshot:r};return a.queue=o,d1(T6.bind(null,t,o,e),[e]),t.flags|=2048,_i(9,S6.bind(null,t,o,n,r),void 0,null),n},useId:function(){var e=Pr(),r=be.identifierPrefix;if(ce){var n=Mr,t=Vr;n=(t&~(1<<32-yr(t)-1)).toString(32)+n,r=":"+r+"R"+n,n=wi++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=q8++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Q8={readContext:ur,useCallback:W6,useContext:ur,useEffect:Bf,useImperativeHandle:U6,useInsertionEffect:D6,useLayoutEffect:G6,useMemo:q6,useReducer:Ks,useRef:z6,useState:function(){return Ks(Ni)},useDebugValue:Uf,useDeferredValue:function(e){var r=cr();return V6(r,Ne.memoizedState,e)},useTransition:function(){var e=Ks(Ni)[0],r=cr().memoizedState;return[e,r]},useMutableSource:C6,useSyncExternalStore:L6,useId:M6,unstable_isNewReconciler:!1},Y8={readContext:ur,useCallback:W6,useContext:ur,useEffect:Bf,useImperativeHandle:U6,useInsertionEffect:D6,useLayoutEffect:G6,useMemo:q6,useReducer:Qs,useRef:z6,useState:function(){return Qs(Ni)},useDebugValue:Uf,useDeferredValue:function(e){var r=cr();return Ne===null?r.memoizedState=e:V6(r,Ne.memoizedState,e)},useTransition:function(){var e=Qs(Ni)[0],r=cr().memoizedState;return[e,r]},useMutableSource:C6,useSyncExternalStore:L6,useId:M6,unstable_isNewReconciler:!1};function mr(e,r){if(e&&e.defaultProps){r=pe({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function wc(e,r,n,t){r=e.memoizedState,n=n(t,r),n=n==null?r:pe({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ls={isMounted:function(e){return(e=e._reactInternals)?ht(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var t=ze(),a=Gn(e),o=Xr(t,a);o.payload=r,n!=null&&(o.callback=n),r=zn(e,o,a),r!==null&&($r(r,e,a,t),mo(r,e,a))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var t=ze(),a=Gn(e),o=Xr(t,a);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=zn(e,o,a),r!==null&&($r(r,e,a,t),mo(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=ze(),t=Gn(e),a=Xr(n,t);a.tag=2,r!=null&&(a.callback=r),r=zn(e,a,t),r!==null&&($r(r,e,t,n),mo(r,e,t))}};function p1(e,r,n,t,a,o,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,c):r.prototype&&r.prototype.isPureReactComponent?!pi(n,t)||!pi(a,o):!0}function Y6(e,r,n){var t=!1,a=qn,o=r.contextType;return typeof o=="object"&&o!==null?o=ur(o):(a=Ve(r)?ct:He.current,t=r.contextTypes,o=(t=t!=null)?Qt(e,a):qn),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ls,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),r}function m1(e,r,n,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,t),r.state!==e&&ls.enqueueReplaceState(r,r.state,null)}function Nc(e,r,n,t){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Sf(e);var o=r.contextType;typeof o=="object"&&o!==null?a.context=ur(o):(o=Ve(r)?ct:He.current,a.context=Qt(e,o)),a.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(wc(e,r,o,n),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ls.enqueueReplaceState(a,a.state,null),Ro(e,n,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ea(e,r){try{var n="",t=r;do n+=E7(t),t=t.return;while(t);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:a,digest:null}}function Ys(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function _c(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Z8=typeof WeakMap=="function"?WeakMap:Map;function Z6(e,r,n){n=Xr(-1,n),n.tag=3,n.payload={element:null};var t=r.value;return n.callback=function(){Uo||(Uo=!0,Cc=t),_c(e,r)},n}function J6(e,r,n){n=Xr(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=r.value;n.payload=function(){return t(a)},n.callback=function(){_c(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){_c(e,r),typeof t!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),n}function h1(e,r,n){var t=e.pingCache;if(t===null){t=e.pingCache=new Z8;var a=new Set;t.set(r,a)}else a=t.get(r),a===void 0&&(a=new Set,t.set(r,a));a.has(n)||(a.add(n),e=v9.bind(null,e,r,n),r.then(e,e))}function g1(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function y1(e,r,n,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Xr(-1,1),r.tag=2,zn(n,r,1))),n.lanes|=1),e)}var J8=Jr.ReactCurrentOwner,We=!1;function Re(e,r,n,t){r.child=e===null?A6(r,null,n,t):Zt(r,e.child,n,t)}function $1(e,r,n,t,a){n=n.render;var o=r.ref;return Vt(r,a),t=Df(e,r,n,t,o,a),n=Gf(),e!==null&&!We?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Zr(e,r,a)):(ce&&n&&Af(r),r.flags|=1,Re(e,r,t,a),r.child)}function w1(e,r,n,t,a){if(e===null){var o=n.type;return typeof o=="function"&&!Yf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,e4(e,r,o,t,a)):(e=No(n.type,null,t,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&a)){var c=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(c,t)&&e.ref===r.ref)return Zr(e,r,a)}return r.flags|=1,e=Bn(o,t),e.ref=r.ref,e.return=r,r.child=e}function e4(e,r,n,t,a){if(e!==null){var o=e.memoizedProps;if(pi(o,t)&&e.ref===r.ref)if(We=!1,r.pendingProps=t=o,(e.lanes&a)!==0)e.flags&131072&&(We=!0);else return r.lanes=e.lanes,Zr(e,r,a)}return xc(e,r,n,t,a)}function r4(e,r,n){var t=r.pendingProps,a=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Gt,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ie(Gt,Qe),Qe|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:n,ie(Gt,Qe),Qe|=t}else o!==null?(t=o.baseLanes|n,r.memoizedState=null):t=n,ie(Gt,Qe),Qe|=t;return Re(e,r,a,n),r.child}function n4(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function xc(e,r,n,t,a){var o=Ve(n)?ct:He.current;return o=Qt(r,o),Vt(r,a),n=Df(e,r,n,t,o,a),t=Gf(),e!==null&&!We?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Zr(e,r,a)):(ce&&t&&Af(r),r.flags|=1,Re(e,r,n,a),r.child)}function N1(e,r,n,t,a){if(Ve(n)){var o=!0;Lo(r)}else o=!1;if(Vt(r,a),r.stateNode===null)yo(e,r),Y6(r,n,t),Nc(r,n,t,a),t=!0;else if(e===null){var c=r.stateNode,p=r.memoizedProps;c.props=p;var f=c.context,u=n.contextType;typeof u=="object"&&u!==null?u=ur(u):(u=Ve(n)?ct:He.current,u=Qt(r,u));var i=n.getDerivedStateFromProps,l=typeof i=="function"||typeof c.getSnapshotBeforeUpdate=="function";l||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==t||f!==u)&&m1(r,c,t,u),On=!1;var s=r.memoizedState;c.state=s,Ro(r,t,c,a),f=r.memoizedState,p!==t||s!==f||qe.current||On?(typeof i=="function"&&(wc(r,n,i,t),f=r.memoizedState),(p=On||p1(r,n,p,t,s,f,u))?(l||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=f),c.props=t,c.state=f,c.context=u,t=p):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{c=r.stateNode,k6(e,r),p=r.memoizedProps,u=r.type===r.elementType?p:mr(r.type,p),c.props=u,l=r.pendingProps,s=c.context,f=n.contextType,typeof f=="object"&&f!==null?f=ur(f):(f=Ve(n)?ct:He.current,f=Qt(r,f));var v=n.getDerivedStateFromProps;(i=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==l||s!==f)&&m1(r,c,t,f),On=!1,s=r.memoizedState,c.state=s,Ro(r,t,c,a);var h=r.memoizedState;p!==l||s!==h||qe.current||On?(typeof v=="function"&&(wc(r,n,v,t),h=r.memoizedState),(u=On||p1(r,n,u,t,s,h,f)||!1)?(i||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(t,h,f),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(t,h,f)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&s===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&s===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=h),c.props=t,c.state=h,c.context=f,t=u):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&s===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&s===e.memoizedState||(r.flags|=1024),t=!1)}return Ic(e,r,n,t,o,a)}function Ic(e,r,n,t,a,o){n4(e,r);var c=(r.flags&128)!==0;if(!t&&!c)return a&&l1(r,n,!1),Zr(e,r,o);t=r.stateNode,J8.current=r;var p=c&&typeof n.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&c?(r.child=Zt(r,e.child,null,o),r.child=Zt(r,null,p,o)):Re(e,r,p,o),r.memoizedState=t.state,a&&l1(r,n,!0),r.child}function t4(e){var r=e.stateNode;r.pendingContext?i1(e,r.pendingContext,r.pendingContext!==r.context):r.context&&i1(e,r.context,!1),Tf(e,r.containerInfo)}function _1(e,r,n,t,a){return Yt(),kf(a),r.flags|=256,Re(e,r,n,t),r.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function a4(e,r,n){var t=r.pendingProps,a=ve.current,o=!1,c=(r.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(a&2)!==0),p?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ie(ve,a&1),e===null)return yc(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(c=t.children,e=t.fallback,o?(t=r.mode,o=r.child,c={mode:"hidden",children:c},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=c):o=us(c,t,0,null),e=ut(e,t,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=bc(n),r.memoizedState=Ec,e):Wf(r,c));if(a=e.memoizedState,a!==null&&(p=a.dehydrated,p!==null))return e9(e,r,c,t,p,a,n);if(o){o=t.fallback,c=r.mode,a=e.child,p=a.sibling;var f={mode:"hidden",children:t.children};return!(c&1)&&r.child!==a?(t=r.child,t.childLanes=0,t.pendingProps=f,r.deletions=null):(t=Bn(a,f),t.subtreeFlags=a.subtreeFlags&14680064),p!==null?o=Bn(p,o):(o=ut(o,c,n,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,t=o,o=r.child,c=e.child.memoizedState,c=c===null?bc(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},o.memoizedState=c,o.childLanes=e.childLanes&~n,r.memoizedState=Ec,t}return o=e.child,e=o.sibling,t=Bn(o,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=n),t.return=r,t.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=t,r.memoizedState=null,t}function Wf(e,r){return r=us({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Zi(e,r,n,t){return t!==null&&kf(t),Zt(r,e.child,null,n),e=Wf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function e9(e,r,n,t,a,o,c){if(n)return r.flags&256?(r.flags&=-257,t=Ys(Error(C(422))),Zi(e,r,c,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=t.fallback,a=r.mode,t=us({mode:"visible",children:t.children},a,0,null),o=ut(o,a,c,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,r.mode&1&&Zt(r,e.child,null,c),r.child.memoizedState=bc(c),r.memoizedState=Ec,o);if(!(r.mode&1))return Zi(e,r,c,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var p=t.dgst;return t=p,o=Error(C(419)),t=Ys(o,t,void 0),Zi(e,r,c,t)}if(p=(c&e.childLanes)!==0,We||p){if(t=be,t!==null){switch(c&-c){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|c)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Yr(e,a),$r(t,e,a,-1))}return Qf(),t=Ys(Error(C(421))),Zi(e,r,c,t)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=d9.bind(null,e),a._reactRetry=r,null):(e=o.treeContext,Ye=Rn(a.nextSibling),Ze=r,ce=!0,gr=null,e!==null&&(ir[lr++]=Vr,ir[lr++]=Mr,ir[lr++]=ft,Vr=e.id,Mr=e.overflow,ft=r),r=Wf(r,t.children),r.flags|=4096,r)}function x1(e,r,n){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),$c(e.return,r,n)}function Zs(e,r,n,t,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:a}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=n,o.tailMode=a)}function i4(e,r,n){var t=r.pendingProps,a=t.revealOrder,o=t.tail;if(Re(e,r,t.children,n),t=ve.current,t&2)t=t&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&x1(e,n,r);else if(e.tag===19)x1(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(ie(ve,t),!(r.mode&1))r.memoizedState=null;else switch(a){case"forwards":for(n=r.child,a=null;n!==null;)e=n.alternate,e!==null&&zo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=r.child,r.child=null):(a=n.sibling,n.sibling=null),Zs(r,!1,a,n,o);break;case"backwards":for(n=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&zo(e)===null){r.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Zs(r,!0,n,null,o);break;case"together":Zs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yo(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Zr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),dt|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(C(153));if(r.child!==null){for(e=r.child,n=Bn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Bn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function r9(e,r,n){switch(r.tag){case 3:t4(r),Yt();break;case 5:j6(r);break;case 1:Ve(r.type)&&Lo(r);break;case 4:Tf(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,a=r.memoizedProps.value;ie(To,t._currentValue),t._currentValue=a;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(ie(ve,ve.current&1),r.flags|=128,null):n&r.child.childLanes?a4(e,r,n):(ie(ve,ve.current&1),e=Zr(e,r,n),e!==null?e.sibling:null);ie(ve,ve.current&1);break;case 19:if(t=(n&r.childLanes)!==0,e.flags&128){if(t)return i4(e,r,n);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(ve,ve.current),t)break;return null;case 22:case 23:return r.lanes=0,r4(e,r,n)}return Zr(e,r,n)}var l4,Pc,o4,s4;l4=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pc=function(){};o4=function(e,r,n,t){var a=e.memoizedProps;if(a!==t){e=r.stateNode,lt(jr.current);var o=null;switch(n){case"input":a=Ku(e,a),t=Ku(e,t),o=[];break;case"select":a=pe({},a,{value:void 0}),t=pe({},t,{value:void 0}),o=[];break;case"textarea":a=Zu(e,a),t=Zu(e,t),o=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=jo)}ec(n,t);var c;n=null;for(u in a)if(!t.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var p=a[u];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in t){var f=t[u];if(p=a!=null?a[u]:void 0,t.hasOwnProperty(u)&&f!==p&&(f!=null||p!=null))if(u==="style")if(p){for(c in p)!p.hasOwnProperty(c)||f&&f.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in f)f.hasOwnProperty(c)&&p[c]!==f[c]&&(n||(n={}),n[c]=f[c])}else n||(o||(o=[]),o.push(u,n)),n=f;else u==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(o=o||[]).push(u,f)):u==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(u,""+f):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(f!=null&&u==="onScroll"&&le("scroll",e),o||p===f||(o=[])):(o=o||[]).push(u,f))}n&&(o=o||[]).push("style",n);var u=o;(r.updateQueue=u)&&(r.flags|=4)}};s4=function(e,r,n,t){n!==t&&(r.flags|=4)};function _a(e,r){if(!ce)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Fe(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(r)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=n,r}function n9(e,r,n){var t=r.pendingProps;switch(Of(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(r),null;case 1:return Ve(r.type)&&Co(),Fe(r),null;case 3:return t=r.stateNode,Jt(),oe(qe),oe(He),Rf(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Qi(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,gr!==null&&(Sc(gr),gr=null))),Pc(e,r),Fe(r),null;case 5:Hf(r);var a=lt($i.current);if(n=r.type,e!==null&&r.stateNode!=null)o4(e,r,n,t,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(C(166));return Fe(r),null}if(e=lt(jr.current),Qi(r)){t=r.stateNode,n=r.type;var o=r.memoizedProps;switch(t[Ar]=r,t[gi]=o,e=(r.mode&1)!==0,n){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<Ya.length;a++)le(Ya[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":Cv(t,o),le("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},le("invalid",t);break;case"textarea":Fv(t,o),le("invalid",t)}ec(n,o),a=null;for(var c in o)if(o.hasOwnProperty(c)){var p=o[c];c==="children"?typeof p=="string"?t.textContent!==p&&(o.suppressHydrationWarning!==!0&&Ki(t.textContent,p,e),a=["children",p]):typeof p=="number"&&t.textContent!==""+p&&(o.suppressHydrationWarning!==!0&&Ki(t.textContent,p,e),a=["children",""+p]):oi.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&le("scroll",t)}switch(n){case"input":Gi(t),Lv(t,o,!0);break;case"textarea":Gi(t),Sv(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=jo)}t=a,r.updateQueue=t,t!==null&&(r.flags|=4)}else{c=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Th(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=c.createElement(n,{is:t.is}):(e=c.createElement(n),n==="select"&&(c=e,t.multiple?c.multiple=!0:t.size&&(c.size=t.size))):e=c.createElementNS(e,n),e[Ar]=r,e[gi]=t,l4(e,r,!1,!1),r.stateNode=e;e:{switch(c=rc(n,t),n){case"dialog":le("cancel",e),le("close",e),a=t;break;case"iframe":case"object":case"embed":le("load",e),a=t;break;case"video":case"audio":for(a=0;a<Ya.length;a++)le(Ya[a],e);a=t;break;case"source":le("error",e),a=t;break;case"img":case"image":case"link":le("error",e),le("load",e),a=t;break;case"details":le("toggle",e),a=t;break;case"input":Cv(e,t),a=Ku(e,t),le("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=pe({},t,{value:void 0}),le("invalid",e);break;case"textarea":Fv(e,t),a=Zu(e,t),le("invalid",e);break;default:a=t}ec(n,a),p=a;for(o in p)if(p.hasOwnProperty(o)){var f=p[o];o==="style"?zh(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Hh(e,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&si(e,f):typeof f=="number"&&si(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oi.hasOwnProperty(o)?f!=null&&o==="onScroll"&&le("scroll",e):f!=null&&pf(e,o,f,c))}switch(n){case"input":Gi(e),Lv(e,t,!1);break;case"textarea":Gi(e),Sv(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Wn(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?Bt(e,!!t.multiple,o,!1):t.defaultValue!=null&&Bt(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fe(r),null;case 6:if(e&&r.stateNode!=null)s4(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(C(166));if(n=lt($i.current),lt(jr.current),Qi(r)){if(t=r.stateNode,n=r.memoizedProps,t[Ar]=r,(o=t.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Ki(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ki(t.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Ar]=r,r.stateNode=t}return Fe(r),null;case 13:if(oe(ve),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ye!==null&&r.mode&1&&!(r.flags&128))b6(),Yt(),r.flags|=98560,o=!1;else if(o=Qi(r),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Ar]=r}else Yt(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Fe(r),o=!1}else gr!==null&&(Sc(gr),gr=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(e===null||ve.current&1?_e===0&&(_e=3):Qf())),r.updateQueue!==null&&(r.flags|=4),Fe(r),null);case 4:return Jt(),Pc(e,r),e===null&&mi(r.stateNode.containerInfo),Fe(r),null;case 10:return Lf(r.type._context),Fe(r),null;case 17:return Ve(r.type)&&Co(),Fe(r),null;case 19:if(oe(ve),o=r.memoizedState,o===null)return Fe(r),null;if(t=(r.flags&128)!==0,c=o.rendering,c===null)if(t)_a(o,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(c=zo(e),c!==null){for(r.flags|=128,_a(o,!1),t=c.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=n,n=r.child;n!==null;)o=n,e=t,o.flags&=14680066,c=o.alternate,c===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=c.childLanes,o.lanes=c.lanes,o.child=c.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=c.memoizedProps,o.memoizedState=c.memoizedState,o.updateQueue=c.updateQueue,o.type=c.type,e=c.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ve,ve.current&1|2),r.child}e=e.sibling}o.tail!==null&&ye()>ra&&(r.flags|=128,t=!0,_a(o,!1),r.lanes=4194304)}else{if(!t)if(e=zo(c),e!==null){if(r.flags|=128,t=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),_a(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!ce)return Fe(r),null}else 2*ye()-o.renderingStartTime>ra&&n!==1073741824&&(r.flags|=128,t=!0,_a(o,!1),r.lanes=4194304);o.isBackwards?(c.sibling=r.child,r.child=c):(n=o.last,n!==null?n.sibling=c:r.child=c,o.last=c)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=ye(),r.sibling=null,n=ve.current,ie(ve,t?n&1|2:n&1),r):(Fe(r),null);case 22:case 23:return Kf(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?Qe&1073741824&&(Fe(r),r.subtreeFlags&6&&(r.flags|=8192)):Fe(r),null;case 24:return null;case 25:return null}throw Error(C(156,r.tag))}function t9(e,r){switch(Of(r),r.tag){case 1:return Ve(r.type)&&Co(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Jt(),oe(qe),oe(He),Rf(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Hf(r),null;case 13:if(oe(ve),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(C(340));Yt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return oe(ve),null;case 4:return Jt(),null;case 10:return Lf(r.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Ji=!1,Se=!1,a9=typeof WeakSet=="function"?WeakSet:Set,T=null;function Dt(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){he(e,r,t)}else n.current=null}function Ac(e,r,n){try{n()}catch(t){he(e,r,t)}}var I1=!1;function i9(e,r){if(fc=Ao,e=d6(),Pf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var a=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var c=0,p=-1,f=-1,u=0,i=0,l=e,s=null;r:for(;;){for(var v;l!==n||a!==0&&l.nodeType!==3||(p=c+a),l!==o||t!==0&&l.nodeType!==3||(f=c+t),l.nodeType===3&&(c+=l.nodeValue.length),(v=l.firstChild)!==null;)s=l,l=v;for(;;){if(l===e)break r;if(s===n&&++u===a&&(p=c),s===o&&++i===t&&(f=c),(v=l.nextSibling)!==null)break;l=s,s=l.parentNode}l=v}n=p===-1||f===-1?null:{start:p,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},Ao=!1,T=r;T!==null;)if(r=T,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,T=e;else for(;T!==null;){r=T;try{var h=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,w=h.memoizedState,y=r.stateNode,$=y.getSnapshotBeforeUpdate(r.elementType===r.type?g:mr(r.type,g),w);y.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(N){he(r,r.return,N)}if(e=r.sibling,e!==null){e.return=r.return,T=e;break}T=r.return}return h=I1,I1=!1,h}function ai(e,r,n){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Ac(r,n,o)}a=a.next}while(a!==t)}}function os(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==r)}}function Oc(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function u4(e){var r=e.alternate;r!==null&&(e.alternate=null,u4(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ar],delete r[gi],delete r[mc],delete r[G8],delete r[B8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c4(e){return e.tag===5||e.tag===3||e.tag===4}function E1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=jo));else if(t!==4&&(e=e.child,e!==null))for(kc(e,r,n),e=e.sibling;e!==null;)kc(e,r,n),e=e.sibling}function jc(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(jc(e,r,n),e=e.sibling;e!==null;)jc(e,r,n),e=e.sibling}var Ae=null,hr=!1;function tn(e,r,n){for(n=n.child;n!==null;)f4(e,r,n),n=n.sibling}function f4(e,r,n){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:Se||Dt(n,r);case 6:var t=Ae,a=hr;Ae=null,tn(e,r,n),Ae=t,hr=a,Ae!==null&&(hr?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(hr?(e=Ae,n=n.stateNode,e.nodeType===8?qs(e.parentNode,n):e.nodeType===1&&qs(e,n),vi(e)):qs(Ae,n.stateNode));break;case 4:t=Ae,a=hr,Ae=n.stateNode.containerInfo,hr=!0,tn(e,r,n),Ae=t,hr=a;break;case 0:case 11:case 14:case 15:if(!Se&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var o=a,c=o.destroy;o=o.tag,c!==void 0&&(o&2||o&4)&&Ac(n,r,c),a=a.next}while(a!==t)}tn(e,r,n);break;case 1:if(!Se&&(Dt(n,r),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(p){he(n,r,p)}tn(e,r,n);break;case 21:tn(e,r,n);break;case 22:n.mode&1?(Se=(t=Se)||n.memoizedState!==null,tn(e,r,n),Se=t):tn(e,r,n);break;default:tn(e,r,n)}}function b1(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a9),r.forEach(function(t){var a=p9.bind(null,e,t);n.has(t)||(n.add(t),t.then(a,a))})}}function vr(e,r){var n=r.deletions;if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];try{var o=e,c=r,p=c;e:for(;p!==null;){switch(p.tag){case 5:Ae=p.stateNode,hr=!1;break e;case 3:Ae=p.stateNode.containerInfo,hr=!0;break e;case 4:Ae=p.stateNode.containerInfo,hr=!0;break e}p=p.return}if(Ae===null)throw Error(C(160));f4(o,c,a),Ae=null,hr=!1;var f=a.alternate;f!==null&&(f.return=null),a.return=null}catch(u){he(a,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)v4(r,e),r=r.sibling}function v4(e,r){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vr(r,e),_r(e),t&4){try{ai(3,e,e.return),os(3,e)}catch(g){he(e,e.return,g)}try{ai(5,e,e.return)}catch(g){he(e,e.return,g)}}break;case 1:vr(r,e),_r(e),t&512&&n!==null&&Dt(n,n.return);break;case 5:if(vr(r,e),_r(e),t&512&&n!==null&&Dt(n,n.return),e.flags&32){var a=e.stateNode;try{si(a,"")}catch(g){he(e,e.return,g)}}if(t&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,c=n!==null?n.memoizedProps:o,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&o.type==="radio"&&o.name!=null&&Fh(a,o),rc(p,c);var u=rc(p,o);for(c=0;c<f.length;c+=2){var i=f[c],l=f[c+1];i==="style"?zh(a,l):i==="dangerouslySetInnerHTML"?Hh(a,l):i==="children"?si(a,l):pf(a,i,l,u)}switch(p){case"input":Qu(a,o);break;case"textarea":Sh(a,o);break;case"select":var s=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Bt(a,!!o.multiple,v,!1):s!==!!o.multiple&&(o.defaultValue!=null?Bt(a,!!o.multiple,o.defaultValue,!0):Bt(a,!!o.multiple,o.multiple?[]:"",!1))}a[gi]=o}catch(g){he(e,e.return,g)}}break;case 6:if(vr(r,e),_r(e),t&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){he(e,e.return,g)}}break;case 3:if(vr(r,e),_r(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(r.containerInfo)}catch(g){he(e,e.return,g)}break;case 4:vr(r,e),_r(e);break;case 13:vr(r,e),_r(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Mf=ye())),t&4&&b1(e);break;case 22:if(i=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||i,vr(r,e),Se=u):vr(r,e),_r(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!i&&e.mode&1)for(T=e,i=e.child;i!==null;){for(l=T=i;T!==null;){switch(s=T,v=s.child,s.tag){case 0:case 11:case 14:case 15:ai(4,s,s.return);break;case 1:Dt(s,s.return);var h=s.stateNode;if(typeof h.componentWillUnmount=="function"){t=s,n=s.return;try{r=t,h.props=r.memoizedProps,h.state=r.memoizedState,h.componentWillUnmount()}catch(g){he(t,n,g)}}break;case 5:Dt(s,s.return);break;case 22:if(s.memoizedState!==null){A1(l);continue}}v!==null?(v.return=s,T=v):A1(l)}i=i.sibling}e:for(i=null,l=e;;){if(l.tag===5){if(i===null){i=l;try{a=l.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(p=l.stateNode,f=l.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=Rh("display",c))}catch(g){he(e,e.return,g)}}}else if(l.tag===6){if(i===null)try{l.stateNode.nodeValue=u?"":l.memoizedProps}catch(g){he(e,e.return,g)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;i===l&&(i=null),l=l.return}i===l&&(i=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:vr(r,e),_r(e),t&4&&b1(e);break;case 21:break;default:vr(r,e),_r(e)}}function _r(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(c4(n)){var t=n;break e}n=n.return}throw Error(C(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(si(a,""),t.flags&=-33);var o=E1(e);jc(e,o,a);break;case 3:case 4:var c=t.stateNode.containerInfo,p=E1(e);kc(e,p,c);break;default:throw Error(C(161))}}catch(f){he(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function l9(e,r,n){T=e,d4(e)}function d4(e,r,n){for(var t=(e.mode&1)!==0;T!==null;){var a=T,o=a.child;if(a.tag===22&&t){var c=a.memoizedState!==null||Ji;if(!c){var p=a.alternate,f=p!==null&&p.memoizedState!==null||Se;p=Ji;var u=Se;if(Ji=c,(Se=f)&&!u)for(T=a;T!==null;)c=T,f=c.child,c.tag===22&&c.memoizedState!==null?O1(a):f!==null?(f.return=c,T=f):O1(a);for(;o!==null;)T=o,d4(o),o=o.sibling;T=a,Ji=p,Se=u}P1(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,T=o):P1(e)}}function P1(e){for(;T!==null;){var r=T;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Se||os(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!Se)if(n===null)t.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:mr(r.type,n.memoizedProps);t.componentDidUpdate(a,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&f1(r,o,t);break;case 3:var c=r.updateQueue;if(c!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}f1(r,c,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var i=u.memoizedState;if(i!==null){var l=i.dehydrated;l!==null&&vi(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Se||r.flags&512&&Oc(r)}catch(s){he(r,r.return,s)}}if(r===e){T=null;break}if(n=r.sibling,n!==null){n.return=r.return,T=n;break}T=r.return}}function A1(e){for(;T!==null;){var r=T;if(r===e){T=null;break}var n=r.sibling;if(n!==null){n.return=r.return,T=n;break}T=r.return}}function O1(e){for(;T!==null;){var r=T;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{os(4,r)}catch(f){he(r,n,f)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var a=r.return;try{t.componentDidMount()}catch(f){he(r,a,f)}}var o=r.return;try{Oc(r)}catch(f){he(r,o,f)}break;case 5:var c=r.return;try{Oc(r)}catch(f){he(r,c,f)}}}catch(f){he(r,r.return,f)}if(r===e){T=null;break}var p=r.sibling;if(p!==null){p.return=r.return,T=p;break}T=r.return}}var o9=Math.ceil,Bo=Jr.ReactCurrentDispatcher,qf=Jr.ReactCurrentOwner,sr=Jr.ReactCurrentBatchConfig,Q=0,be=null,$e=null,Oe=0,Qe=0,Gt=Mn(0),_e=0,xi=null,dt=0,ss=0,Vf=0,ii=null,Ue=null,Mf=0,ra=1/0,Wr=null,Uo=!1,Cc=null,Dn=null,el=!1,Ln=null,Wo=0,li=0,Lc=null,$o=-1,wo=0;function ze(){return Q&6?ye():$o!==-1?$o:$o=ye()}function Gn(e){return e.mode&1?Q&2&&Oe!==0?Oe&-Oe:W8.transition!==null?(wo===0&&(wo=Yh()),wo):(e=re,e!==0||(e=window.event,e=e===void 0?16:a6(e.type)),e):1}function $r(e,r,n,t){if(50<li)throw li=0,Lc=null,Error(C(185));Pi(e,n,t),(!(Q&2)||e!==be)&&(e===be&&(!(Q&2)&&(ss|=n),_e===4&&jn(e,Oe)),Me(e,t),n===1&&Q===0&&!(r.mode&1)&&(ra=ye()+500,as&&Xn()))}function Me(e,r){var n=e.callbackNode;W7(e,r);var t=Po(e,e===be?Oe:0);if(t===0)n!==null&&Rv(n),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(n!=null&&Rv(n),r===1)e.tag===0?U8(k1.bind(null,e)):x6(k1.bind(null,e)),z8(function(){!(Q&6)&&Xn()}),n=null;else{switch(Zh(t)){case 1:n=$f;break;case 4:n=Kh;break;case 16:n=bo;break;case 536870912:n=Qh;break;default:n=bo}n=N4(n,p4.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function p4(e,r){if($o=-1,wo=0,Q&6)throw Error(C(327));var n=e.callbackNode;if(Mt()&&e.callbackNode!==n)return null;var t=Po(e,e===be?Oe:0);if(t===0)return null;if(t&30||t&e.expiredLanes||r)r=qo(e,t);else{r=t;var a=Q;Q|=2;var o=h4();(be!==e||Oe!==r)&&(Wr=null,ra=ye()+500,st(e,r));do try{c9();break}catch(p){m4(e,p)}while(!0);Cf(),Bo.current=o,Q=a,$e!==null?r=0:(be=null,Oe=0,r=_e)}if(r!==0){if(r===2&&(a=lc(e),a!==0&&(t=a,r=Fc(e,a))),r===1)throw n=xi,st(e,0),jn(e,t),Me(e,ye()),n;if(r===6)jn(e,t);else{if(a=e.current.alternate,!(t&30)&&!s9(a)&&(r=qo(e,t),r===2&&(o=lc(e),o!==0&&(t=o,r=Fc(e,o))),r===1))throw n=xi,st(e,0),jn(e,t),Me(e,ye()),n;switch(e.finishedWork=a,e.finishedLanes=t,r){case 0:case 1:throw Error(C(345));case 2:tt(e,Ue,Wr);break;case 3:if(jn(e,t),(t&130023424)===t&&(r=Mf+500-ye(),10<r)){if(Po(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=pc(tt.bind(null,e,Ue,Wr),r);break}tt(e,Ue,Wr);break;case 4:if(jn(e,t),(t&4194240)===t)break;for(r=e.eventTimes,a=-1;0<t;){var c=31-yr(t);o=1<<c,c=r[c],c>a&&(a=c),t&=~o}if(t=a,t=ye()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*o9(t/1960))-t,10<t){e.timeoutHandle=pc(tt.bind(null,e,Ue,Wr),t);break}tt(e,Ue,Wr);break;case 5:tt(e,Ue,Wr);break;default:throw Error(C(329))}}}return Me(e,ye()),e.callbackNode===n?p4.bind(null,e):null}function Fc(e,r){var n=ii;return e.current.memoizedState.isDehydrated&&(st(e,r).flags|=256),e=qo(e,r),e!==2&&(r=Ue,Ue=n,r!==null&&Sc(r)),e}function Sc(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function s9(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var a=n[t],o=a.getSnapshot;a=a.value;try{if(!wr(o(),a))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jn(e,r){for(r&=~Vf,r&=~ss,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-yr(r),t=1<<n;e[n]=-1,r&=~t}}function k1(e){if(Q&6)throw Error(C(327));Mt();var r=Po(e,0);if(!(r&1))return Me(e,ye()),null;var n=qo(e,r);if(e.tag!==0&&n===2){var t=lc(e);t!==0&&(r=t,n=Fc(e,t))}if(n===1)throw n=xi,st(e,0),jn(e,r),Me(e,ye()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,tt(e,Ue,Wr),Me(e,ye()),null}function Xf(e,r){var n=Q;Q|=1;try{return e(r)}finally{Q=n,Q===0&&(ra=ye()+500,as&&Xn())}}function pt(e){Ln!==null&&Ln.tag===0&&!(Q&6)&&Mt();var r=Q;Q|=1;var n=sr.transition,t=re;try{if(sr.transition=null,re=1,e)return e()}finally{re=t,sr.transition=n,Q=r,!(Q&6)&&Xn()}}function Kf(){Qe=Gt.current,oe(Gt)}function st(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R8(n)),$e!==null)for(n=$e.return;n!==null;){var t=n;switch(Of(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Co();break;case 3:Jt(),oe(qe),oe(He),Rf();break;case 5:Hf(t);break;case 4:Jt();break;case 13:oe(ve);break;case 19:oe(ve);break;case 10:Lf(t.type._context);break;case 22:case 23:Kf()}n=n.return}if(be=e,$e=e=Bn(e.current,null),Oe=Qe=r,_e=0,xi=null,Vf=ss=dt=0,Ue=ii=null,it!==null){for(r=0;r<it.length;r++)if(n=it[r],t=n.interleaved,t!==null){n.interleaved=null;var a=t.next,o=n.pending;if(o!==null){var c=o.next;o.next=a,t.next=c}n.pending=t}it=null}return e}function m4(e,r){do{var n=$e;try{if(Cf(),ho.current=Go,Do){for(var t=de.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Do=!1}if(vt=0,Ee=Ne=de=null,ti=!1,wi=0,qf.current=null,n===null||n.return===null){_e=1,xi=r,$e=null;break}e:{var o=e,c=n.return,p=n,f=r;if(r=Oe,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var u=f,i=p,l=i.tag;if(!(i.mode&1)&&(l===0||l===11||l===15)){var s=i.alternate;s?(i.updateQueue=s.updateQueue,i.memoizedState=s.memoizedState,i.lanes=s.lanes):(i.updateQueue=null,i.memoizedState=null)}var v=g1(c);if(v!==null){v.flags&=-257,y1(v,c,p,o,r),v.mode&1&&h1(o,u,r),r=v,f=u;var h=r.updateQueue;if(h===null){var g=new Set;g.add(f),r.updateQueue=g}else h.add(f);break e}else{if(!(r&1)){h1(o,u,r),Qf();break e}f=Error(C(426))}}else if(ce&&p.mode&1){var w=g1(c);if(w!==null){!(w.flags&65536)&&(w.flags|=256),y1(w,c,p,o,r),kf(ea(f,p));break e}}o=f=ea(f,p),_e!==4&&(_e=2),ii===null?ii=[o]:ii.push(o),o=c;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var y=Z6(o,f,r);c1(o,y);break e;case 1:p=f;var $=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof $.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dn===null||!Dn.has(m)))){o.flags|=65536,r&=-r,o.lanes|=r;var N=J6(o,p,r);c1(o,N);break e}}o=o.return}while(o!==null)}y4(n)}catch(x){r=x,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function h4(){var e=Bo.current;return Bo.current=Go,e===null?Go:e}function Qf(){(_e===0||_e===3||_e===2)&&(_e=4),be===null||!(dt&268435455)&&!(ss&268435455)||jn(be,Oe)}function qo(e,r){var n=Q;Q|=2;var t=h4();(be!==e||Oe!==r)&&(Wr=null,st(e,r));do try{u9();break}catch(a){m4(e,a)}while(!0);if(Cf(),Q=n,Bo.current=t,$e!==null)throw Error(C(261));return be=null,Oe=0,_e}function u9(){for(;$e!==null;)g4($e)}function c9(){for(;$e!==null&&!S7();)g4($e)}function g4(e){var r=w4(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,r===null?y4(e):$e=r,qf.current=null}function y4(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=t9(n,r),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,$e=null;return}}else if(n=n9(n,r,Qe),n!==null){$e=n;return}if(r=r.sibling,r!==null){$e=r;return}$e=r=e}while(r!==null);_e===0&&(_e=5)}function tt(e,r,n){var t=re,a=sr.transition;try{sr.transition=null,re=1,f9(e,r,n,t)}finally{sr.transition=a,re=t}return null}function f9(e,r,n,t){do Mt();while(Ln!==null);if(Q&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(q7(e,o),e===be&&($e=be=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,N4(bo,function(){return Mt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=sr.transition,sr.transition=null;var c=re;re=1;var p=Q;Q|=4,qf.current=null,i9(e,n),v4(n,e),j8(vc),Ao=!!fc,vc=fc=null,e.current=n,l9(n),T7(),Q=p,re=c,sr.transition=o}else e.current=n;if(el&&(el=!1,Ln=e,Wo=a),o=e.pendingLanes,o===0&&(Dn=null),z7(n.stateNode),Me(e,ye()),r!==null)for(t=e.onRecoverableError,n=0;n<r.length;n++)a=r[n],t(a.value,{componentStack:a.stack,digest:a.digest});if(Uo)throw Uo=!1,e=Cc,Cc=null,e;return Wo&1&&e.tag!==0&&Mt(),o=e.pendingLanes,o&1?e===Lc?li++:(li=0,Lc=e):li=0,Xn(),null}function Mt(){if(Ln!==null){var e=Zh(Wo),r=sr.transition,n=re;try{if(sr.transition=null,re=16>e?16:e,Ln===null)var t=!1;else{if(e=Ln,Ln=null,Wo=0,Q&6)throw Error(C(331));var a=Q;for(Q|=4,T=e.current;T!==null;){var o=T,c=o.child;if(T.flags&16){var p=o.deletions;if(p!==null){for(var f=0;f<p.length;f++){var u=p[f];for(T=u;T!==null;){var i=T;switch(i.tag){case 0:case 11:case 15:ai(8,i,o)}var l=i.child;if(l!==null)l.return=i,T=l;else for(;T!==null;){i=T;var s=i.sibling,v=i.return;if(u4(i),i===u){T=null;break}if(s!==null){s.return=v,T=s;break}T=v}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}T=o}}if(o.subtreeFlags&2064&&c!==null)c.return=o,T=c;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ai(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,T=y;break e}T=o.return}}var $=e.current;for(T=$;T!==null;){c=T;var m=c.child;if(c.subtreeFlags&2064&&m!==null)m.return=c,T=m;else e:for(c=$;T!==null;){if(p=T,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:os(9,p)}}catch(x){he(p,p.return,x)}if(p===c){T=null;break e}var N=p.sibling;if(N!==null){N.return=p.return,T=N;break e}T=p.return}}if(Q=a,Xn(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(Jo,e)}catch{}t=!0}return t}finally{re=n,sr.transition=r}}return!1}function j1(e,r,n){r=ea(n,r),r=Z6(e,r,1),e=zn(e,r,1),r=ze(),e!==null&&(Pi(e,1,r),Me(e,r))}function he(e,r,n){if(e.tag===3)j1(e,e,n);else for(;r!==null;){if(r.tag===3){j1(r,e,n);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Dn===null||!Dn.has(t))){e=ea(n,e),e=J6(r,e,1),r=zn(r,e,1),e=ze(),r!==null&&(Pi(r,1,e),Me(r,e));break}}r=r.return}}function v9(e,r,n){var t=e.pingCache;t!==null&&t.delete(r),r=ze(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Oe&n)===n&&(_e===4||_e===3&&(Oe&130023424)===Oe&&500>ye()-Mf?st(e,0):Vf|=n),Me(e,r)}function $4(e,r){r===0&&(e.mode&1?(r=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):r=1);var n=ze();e=Yr(e,r),e!==null&&(Pi(e,r,n),Me(e,n))}function d9(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),$4(e,n)}function p9(e,r){var n=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(C(314))}t!==null&&t.delete(r),$4(e,n)}var w4;w4=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||qe.current)We=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return We=!1,r9(e,r,n);We=!!(e.flags&131072)}else We=!1,ce&&r.flags&1048576&&I6(r,So,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;yo(e,r),e=r.pendingProps;var a=Qt(r,He.current);Vt(r,n),a=Df(null,r,t,e,a,n);var o=Gf();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ve(t)?(o=!0,Lo(r)):o=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Sf(r),a.updater=ls,r.stateNode=a,a._reactInternals=r,Nc(r,t,e,n),r=Ic(null,r,t,!0,o,n)):(r.tag=0,ce&&o&&Af(r),Re(null,r,a,n),r=r.child),r;case 16:t=r.elementType;e:{switch(yo(e,r),e=r.pendingProps,a=t._init,t=a(t._payload),r.type=t,a=r.tag=h9(t),e=mr(t,e),a){case 0:r=xc(null,r,t,e,n);break e;case 1:r=N1(null,r,t,e,n);break e;case 11:r=$1(null,r,t,e,n);break e;case 14:r=w1(null,r,t,mr(t.type,e),n);break e}throw Error(C(306,t,""))}return r;case 0:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:mr(t,a),xc(e,r,t,a,n);case 1:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:mr(t,a),N1(e,r,t,a,n);case 3:e:{if(t4(r),e===null)throw Error(C(387));t=r.pendingProps,o=r.memoizedState,a=o.element,k6(e,r),Ro(r,t,null,n);var c=r.memoizedState;if(t=c.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){a=ea(Error(C(423)),r),r=_1(e,r,t,n,a);break e}else if(t!==a){a=ea(Error(C(424)),r),r=_1(e,r,t,n,a);break e}else for(Ye=Rn(r.stateNode.containerInfo.firstChild),Ze=r,ce=!0,gr=null,n=A6(r,null,t,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yt(),t===a){r=Zr(e,r,n);break e}Re(e,r,t,n)}r=r.child}return r;case 5:return j6(r),e===null&&yc(r),t=r.type,a=r.pendingProps,o=e!==null?e.memoizedProps:null,c=a.children,dc(t,a)?c=null:o!==null&&dc(t,o)&&(r.flags|=32),n4(e,r),Re(e,r,c,n),r.child;case 6:return e===null&&yc(r),null;case 13:return a4(e,r,n);case 4:return Tf(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=Zt(r,null,t,n):Re(e,r,t,n),r.child;case 11:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:mr(t,a),$1(e,r,t,a,n);case 7:return Re(e,r,r.pendingProps,n),r.child;case 8:return Re(e,r,r.pendingProps.children,n),r.child;case 12:return Re(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(t=r.type._context,a=r.pendingProps,o=r.memoizedProps,c=a.value,ie(To,t._currentValue),t._currentValue=c,o!==null)if(wr(o.value,c)){if(o.children===a.children&&!qe.current){r=Zr(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var p=o.dependencies;if(p!==null){c=o.child;for(var f=p.firstContext;f!==null;){if(f.context===t){if(o.tag===1){f=Xr(-1,n&-n),f.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var i=u.pending;i===null?f.next=f:(f.next=i.next,i.next=f),u.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),$c(o.return,n,r),p.lanes|=n;break}f=f.next}}else if(o.tag===10)c=o.type===r.type?null:o.child;else if(o.tag===18){if(c=o.return,c===null)throw Error(C(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),$c(c,n,r),c=o.sibling}else c=o.child;if(c!==null)c.return=o;else for(c=o;c!==null;){if(c===r){c=null;break}if(o=c.sibling,o!==null){o.return=c.return,c=o;break}c=c.return}o=c}Re(e,r,a.children,n),r=r.child}return r;case 9:return a=r.type,t=r.pendingProps.children,Vt(r,n),a=ur(a),t=t(a),r.flags|=1,Re(e,r,t,n),r.child;case 14:return t=r.type,a=mr(t,r.pendingProps),a=mr(t.type,a),w1(e,r,t,a,n);case 15:return e4(e,r,r.type,r.pendingProps,n);case 17:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:mr(t,a),yo(e,r),r.tag=1,Ve(t)?(e=!0,Lo(r)):e=!1,Vt(r,n),Y6(r,t,a),Nc(r,t,a,n),Ic(null,r,t,!0,e,n);case 19:return i4(e,r,n);case 22:return r4(e,r,n)}throw Error(C(156,r.tag))};function N4(e,r){return Xh(e,r)}function m9(e,r,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function or(e,r,n,t){return new m9(e,r,n,t)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h9(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hf)return 11;if(e===gf)return 14}return 2}function Bn(e,r){var n=e.alternate;return n===null?(n=or(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,r,n,t,a,o){var c=2;if(t=e,typeof e=="function")Yf(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case jt:return ut(n.children,a,o,r);case mf:c=8,a|=8;break;case qu:return e=or(12,n,r,a|2),e.elementType=qu,e.lanes=o,e;case Vu:return e=or(13,n,r,a),e.elementType=Vu,e.lanes=o,e;case Mu:return e=or(19,n,r,a),e.elementType=Mu,e.lanes=o,e;case jh:return us(n,a,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Oh:c=10;break e;case kh:c=9;break e;case hf:c=11;break e;case gf:c=14;break e;case An:c=16,t=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return r=or(c,n,r,a),r.elementType=e,r.type=t,r.lanes=o,r}function ut(e,r,n,t){return e=or(7,e,t,r),e.lanes=n,e}function us(e,r,n,t){return e=or(22,e,t,r),e.elementType=jh,e.lanes=n,e.stateNode={isHidden:!1},e}function Js(e,r,n){return e=or(6,e,null,r),e.lanes=n,e}function e0(e,r,n){return r=or(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function g9(e,r,n,t,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zf(e,r,n,t,a,o,c,p,f){return e=new g9(e,r,n,p,f),r===1?(r=1,o===!0&&(r|=8)):r=0,o=or(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(o),e}function y9(e,r,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kt,key:t==null?null:""+t,children:e,containerInfo:r,implementation:n}}function _4(e){if(!e)return qn;e=e._reactInternals;e:{if(ht(e)!==e||e.tag!==1)throw Error(C(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ve(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ve(n))return _6(e,n,r)}return r}function x4(e,r,n,t,a,o,c,p,f){return e=Zf(n,t,!0,e,a,o,c,p,f),e.context=_4(null),n=e.current,t=ze(),a=Gn(n),o=Xr(t,a),o.callback=r??null,zn(n,o,a),e.current.lanes=a,Pi(e,a,t),Me(e,t),e}function cs(e,r,n,t){var a=r.current,o=ze(),c=Gn(a);return n=_4(n),r.context===null?r.context=n:r.pendingContext=n,r=Xr(o,c),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=zn(a,r,c),e!==null&&($r(e,a,c,o),mo(e,a,c)),c}function Vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function C1(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Jf(e,r){C1(e,r),(e=e.alternate)&&C1(e,r)}function $9(){return null}var I4=typeof reportError=="function"?reportError:function(e){console.error(e)};function ev(e){this._internalRoot=e}fs.prototype.render=ev.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(C(409));cs(e,r,null,null)};fs.prototype.unmount=ev.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;pt(function(){cs(null,e,null,null)}),r[Qr]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var r=r6();e={blockedOn:null,target:e,priority:r};for(var n=0;n<kn.length&&r!==0&&r<kn[n].priority;n++);kn.splice(n,0,e),n===0&&t6(e)}};function rv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function L1(){}function w9(e,r,n,t,a){if(a){if(typeof t=="function"){var o=t;t=function(){var u=Vo(c);o.call(u)}}var c=x4(r,t,e,0,null,!1,!1,"",L1);return e._reactRootContainer=c,e[Qr]=c.current,mi(e.nodeType===8?e.parentNode:e),pt(),c}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var p=t;t=function(){var u=Vo(f);p.call(u)}}var f=Zf(e,0,!1,null,null,!1,!1,"",L1);return e._reactRootContainer=f,e[Qr]=f.current,mi(e.nodeType===8?e.parentNode:e),pt(function(){cs(r,f,n,t)}),f}function ds(e,r,n,t,a){var o=n._reactRootContainer;if(o){var c=o;if(typeof a=="function"){var p=a;a=function(){var f=Vo(c);p.call(f)}}cs(r,c,e,a)}else c=w9(n,r,e,a,t);return Vo(c)}Jh=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Qa(r.pendingLanes);n!==0&&(wf(r,n|1),Me(r,ye()),!(Q&6)&&(ra=ye()+500,Xn()))}break;case 13:pt(function(){var t=Yr(e,1);if(t!==null){var a=ze();$r(t,e,1,a)}}),Jf(e,1)}};Nf=function(e){if(e.tag===13){var r=Yr(e,134217728);if(r!==null){var n=ze();$r(r,e,134217728,n)}Jf(e,134217728)}};e6=function(e){if(e.tag===13){var r=Gn(e),n=Yr(e,r);if(n!==null){var t=ze();$r(n,e,r,t)}Jf(e,r)}};r6=function(){return re};n6=function(e,r){var n=re;try{return re=e,r()}finally{re=n}};tc=function(e,r,n){switch(r){case"input":if(Qu(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var t=n[r];if(t!==e&&t.form===e.form){var a=ts(t);if(!a)throw Error(C(90));Lh(t),Qu(t,a)}}}break;case"textarea":Sh(e,n);break;case"select":r=n.value,r!=null&&Bt(e,!!n.multiple,r,!1)}};Bh=Xf;Uh=pt;var N9={usingClientEntryPoint:!1,Events:[Oi,St,ts,Dh,Gh,Xf]},xa={findFiberByHostInstance:at,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_9={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vh(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||$9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Jo=rl.inject(_9),kr=rl}catch{}}er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N9;er.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rv(r))throw Error(C(200));return y9(e,r,null,n)};er.createRoot=function(e,r){if(!rv(e))throw Error(C(299));var n=!1,t="",a=I4;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Zf(e,1,!1,null,null,n,!1,t,a),e[Qr]=r.current,mi(e.nodeType===8?e.parentNode:e),new ev(r)};er.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Vh(r),e=e===null?null:e.stateNode,e};er.flushSync=function(e){return pt(e)};er.hydrate=function(e,r,n){if(!vs(r))throw Error(C(200));return ds(null,e,r,!0,n)};er.hydrateRoot=function(e,r,n){if(!rv(e))throw Error(C(405));var t=n!=null&&n.hydratedSources||null,a=!1,o="",c=I4;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),r=x4(r,null,e,1,n??null,a,!1,o,c),e[Qr]=r.current,mi(e),t)for(e=0;e<t.length;e++)n=t[e],a=n._getVersion,a=a(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,a]:r.mutableSourceEagerHydrationData.push(n,a);return new fs(r)};er.render=function(e,r,n){if(!vs(r))throw Error(C(200));return ds(null,e,r,!1,n)};er.unmountComponentAtNode=function(e){if(!vs(e))throw Error(C(40));return e._reactRootContainer?(pt(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[Qr]=null})}),!0):!1};er.unstable_batchedUpdates=Xf;er.unstable_renderSubtreeIntoContainer=function(e,r,n,t){if(!vs(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ds(e,r,n,!1,t)};er.version="18.3.1-next-f1338f8080-20240426";function E4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E4)}catch(e){console.error(e)}}E4(),Eh.exports=er;var x9=Eh.exports,b4,F1=x9;b4=F1.createRoot,F1.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Ii.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const S1="popstate";function I9(e){e===void 0&&(e={});function r(a,o){let{pathname:c="/",search:p="",hash:f=""}=gt(a.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Tc("",{pathname:c,search:p,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){let c=a.document.querySelector("base"),p="";if(c&&c.getAttribute("href")){let f=a.location.href,u=f.indexOf("#");p=u===-1?f:f.slice(0,u)}return p+"#"+(typeof o=="string"?o:Mo(o))}function t(a,o){nv(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return b9(r,n,t,e)}function ge(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function nv(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function E9(){return Math.random().toString(36).substr(2,8)}function T1(e,r){return{usr:e.state,key:e.key,idx:r}}function Tc(e,r,n,t){return n===void 0&&(n=null),Ii({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?gt(r):r,{state:n,key:r&&r.key||t||E9()})}function Mo(e){let{pathname:r="/",search:n="",hash:t=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function gt(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let t=e.indexOf("?");t>=0&&(r.search=e.substr(t),e=e.substr(0,t)),e&&(r.pathname=e)}return r}function b9(e,r,n,t){t===void 0&&(t={});let{window:a=document.defaultView,v5Compat:o=!1}=t,c=a.history,p=Fn.Pop,f=null,u=i();u==null&&(u=0,c.replaceState(Ii({},c.state,{idx:u}),""));function i(){return(c.state||{idx:null}).idx}function l(){p=Fn.Pop;let w=i(),y=w==null?null:w-u;u=w,f&&f({action:p,location:g.location,delta:y})}function s(w,y){p=Fn.Push;let $=Tc(g.location,w,y);n&&n($,w),u=i()+1;let m=T1($,u),N=g.createHref($);try{c.pushState(m,"",N)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;a.location.assign(N)}o&&f&&f({action:p,location:g.location,delta:1})}function v(w,y){p=Fn.Replace;let $=Tc(g.location,w,y);n&&n($,w),u=i();let m=T1($,u),N=g.createHref($);c.replaceState(m,"",N),o&&f&&f({action:p,location:g.location,delta:0})}function h(w){let y=a.location.origin!=="null"?a.location.origin:a.location.href,$=typeof w=="string"?w:Mo(w);return $=$.replace(/ $/,"%20"),ge(y,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,y)}let g={get action(){return p},get location(){return e(a,c)},listen(w){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(S1,l),f=w,()=>{a.removeEventListener(S1,l),f=null}},createHref(w){return r(a,w)},createURL:h,encodeLocation(w){let y=h(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:s,replace:v,go(w){return c.go(w)}};return g}var H1;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(H1||(H1={}));function P9(e,r,n){return n===void 0&&(n="/"),A9(e,r,n,!1)}function A9(e,r,n,t){let a=typeof r=="string"?gt(r):r,o=na(a.pathname||"/",n);if(o==null)return null;let c=P4(e);O9(c);let p=null;for(let f=0;p==null&&f<c.length;++f){let u=D9(o);p=R9(c[f],u,t)}return p}function P4(e,r,n,t){r===void 0&&(r=[]),n===void 0&&(n=[]),t===void 0&&(t="");let a=(o,c,p)=>{let f={relativePath:p===void 0?o.path||"":p,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};f.relativePath.startsWith("/")&&(ge(f.relativePath.startsWith(t),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(t.length));let u=Un([t,f.relativePath]),i=n.concat(f);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),P4(o.children,r,i,u)),!(o.path==null&&!o.index)&&r.push({path:u,score:T9(u,o.index),routesMeta:i})};return e.forEach((o,c)=>{var p;if(o.path===""||!((p=o.path)!=null&&p.includes("?")))a(o,c);else for(let f of A4(o.path))a(o,c,f)}),r}function A4(e){let r=e.split("/");if(r.length===0)return[];let[n,...t]=r,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(t.length===0)return a?[o,""]:[o];let c=A4(t.join("/")),p=[];return p.push(...c.map(f=>f===""?o:[o,f].join("/"))),a&&p.push(...c),p.map(f=>e.startsWith("/")&&f===""?"/":f)}function O9(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:H9(r.routesMeta.map(t=>t.childrenIndex),n.routesMeta.map(t=>t.childrenIndex)))}const k9=/^:[\w-]+$/,j9=3,C9=2,L9=1,F9=10,S9=-2,R1=e=>e==="*";function T9(e,r){let n=e.split("/"),t=n.length;return n.some(R1)&&(t+=S9),r&&(t+=C9),n.filter(a=>!R1(a)).reduce((a,o)=>a+(k9.test(o)?j9:o===""?L9:F9),t)}function H9(e,r){return e.length===r.length&&e.slice(0,-1).every((t,a)=>t===r[a])?e[e.length-1]-r[r.length-1]:0}function R9(e,r,n){let{routesMeta:t}=e,a={},o="/",c=[];for(let p=0;p<t.length;++p){let f=t[p],u=p===t.length-1,i=o==="/"?r:r.slice(o.length)||"/",l=Xo({path:f.relativePath,caseSensitive:f.caseSensitive,end:u},i),s=f.route;if(!l&&u&&n&&!t[t.length-1].route.index&&(l=Xo({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},i)),!l)return null;Object.assign(a,l.params),c.push({params:a,pathname:Un([o,l.pathname]),pathnameBase:W9(Un([o,l.pathnameBase])),route:s}),l.pathnameBase!=="/"&&(o=Un([o,l.pathnameBase]))}return c}function Xo(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,t]=z9(e.path,e.caseSensitive,e.end),a=r.match(n);if(!a)return null;let o=a[0],c=o.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:t.reduce((u,i,l)=>{let{paramName:s,isOptional:v}=i;if(s==="*"){let g=p[l]||"";c=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}const h=p[l];return v&&!h?u[s]=void 0:u[s]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:c,pattern:e}}function z9(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),nv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,p,f)=>(t.push({paramName:p,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),t]}function D9(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return nv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function na(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,t=e.charAt(n);return t&&t!=="/"?null:e.slice(n)||"/"}function G9(e,r){r===void 0&&(r="/");let{pathname:n,search:t="",hash:a=""}=typeof e=="string"?gt(e):e;return{pathname:n?n.startsWith("/")?n:B9(n,r):r,search:q9(t),hash:V9(a)}}function B9(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function r0(e,r,n,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U9(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function O4(e,r){let n=U9(e);return r?n.map((t,a)=>a===n.length-1?t.pathname:t.pathnameBase):n.map(t=>t.pathnameBase)}function k4(e,r,n,t){t===void 0&&(t=!1);let a;typeof e=="string"?a=gt(e):(a=Ii({},e),ge(!a.pathname||!a.pathname.includes("?"),r0("?","pathname","search",a)),ge(!a.pathname||!a.pathname.includes("#"),r0("#","pathname","hash",a)),ge(!a.search||!a.search.includes("#"),r0("#","search","hash",a)));let o=e===""||a.pathname==="",c=o?"/":a.pathname,p;if(c==null)p=n;else{let l=r.length-1;if(!t&&c.startsWith("..")){let s=c.split("/");for(;s[0]==="..";)s.shift(),l-=1;a.pathname=s.join("/")}p=l>=0?r[l]:"/"}let f=G9(a,p),u=c&&c!=="/"&&c.endsWith("/"),i=(o||c===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(u||i)&&(f.pathname+="/"),f}const Un=e=>e.join("/").replace(/\/\/+/g,"/"),W9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),q9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function M9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const j4=["post","put","patch","delete"];new Set(j4);const X9=["get",...j4];new Set(X9);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ei(){return Ei=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Ei.apply(this,arguments)}const ps=P.createContext(null),C4=P.createContext(null),Kn=P.createContext(null),ms=P.createContext(null),yt=P.createContext({outlet:null,matches:[],isDataRoute:!1}),L4=P.createContext(null);function K9(e,r){let{relative:n}=r===void 0?{}:r;ji()||ge(!1);let{basename:t,navigator:a}=P.useContext(Kn),{hash:o,pathname:c,search:p}=hs(e,{relative:n}),f=c;return t!=="/"&&(f=c==="/"?t:Un([t,c])),a.createHref({pathname:f,search:p,hash:o})}function ji(){return P.useContext(ms)!=null}function Ci(){return ji()||ge(!1),P.useContext(ms).location}function F4(e){P.useContext(Kn).static||P.useLayoutEffect(e)}function Q9(){let{isDataRoute:e}=P.useContext(yt);return e?uy():Y9()}function Y9(){ji()||ge(!1);let e=P.useContext(ps),{basename:r,future:n,navigator:t}=P.useContext(Kn),{matches:a}=P.useContext(yt),{pathname:o}=Ci(),c=JSON.stringify(O4(a,n.v7_relativeSplatPath)),p=P.useRef(!1);return F4(()=>{p.current=!0}),P.useCallback(function(u,i){if(i===void 0&&(i={}),!p.current)return;if(typeof u=="number"){t.go(u);return}let l=k4(u,JSON.parse(c),o,i.relative==="path");e==null&&r!=="/"&&(l.pathname=l.pathname==="/"?r:Un([r,l.pathname])),(i.replace?t.replace:t.push)(l,i.state,i)},[r,t,c,o,e])}function hs(e,r){let{relative:n}=r===void 0?{}:r,{future:t}=P.useContext(Kn),{matches:a}=P.useContext(yt),{pathname:o}=Ci(),c=JSON.stringify(O4(a,t.v7_relativeSplatPath));return P.useMemo(()=>k4(e,JSON.parse(c),o,n==="path"),[e,c,o,n])}function Z9(e,r){return J9(e,r)}function J9(e,r,n,t){ji()||ge(!1);let{navigator:a}=P.useContext(Kn),{matches:o}=P.useContext(yt),c=o[o.length-1],p=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let u=Ci(),i;if(r){var l;let w=typeof r=="string"?gt(r):r;f==="/"||(l=w.pathname)!=null&&l.startsWith(f)||ge(!1),i=w}else i=u;let s=i.pathname||"/",v=s;if(f!=="/"){let w=f.replace(/^\//,"").split("/");v="/"+s.replace(/^\//,"").split("/").slice(w.length).join("/")}let h=P9(e,{pathname:v}),g=ay(h&&h.map(w=>Object.assign({},w,{params:Object.assign({},p,w.params),pathname:Un([f,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?f:Un([f,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,t);return r&&g?P.createElement(ms.Provider,{value:{location:Ei({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:Fn.Pop}},g):g}function ey(){let e=sy(),r=M9(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},r),n?P.createElement("pre",{style:a},n):null,null)}const ry=P.createElement(ey,null);class ny extends P.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?P.createElement(yt.Provider,{value:this.props.routeContext},P.createElement(L4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ty(e){let{routeContext:r,match:n,children:t}=e,a=P.useContext(ps);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(yt.Provider,{value:r},t)}function ay(e,r,n,t){var a;if(r===void 0&&(r=[]),n===void 0&&(n=null),t===void 0&&(t=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=t)!=null&&o.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let c=e,p=(a=n)==null?void 0:a.errors;if(p!=null){let i=c.findIndex(l=>l.route.id&&(p==null?void 0:p[l.route.id])!==void 0);i>=0||ge(!1),c=c.slice(0,Math.min(c.length,i+1))}let f=!1,u=-1;if(n&&t&&t.v7_partialHydration)for(let i=0;i<c.length;i++){let l=c[i];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(u=i),l.route.id){let{loaderData:s,errors:v}=n,h=l.route.loader&&s[l.route.id]===void 0&&(!v||v[l.route.id]===void 0);if(l.route.lazy||h){f=!0,u>=0?c=c.slice(0,u+1):c=[c[0]];break}}}return c.reduceRight((i,l,s)=>{let v,h=!1,g=null,w=null;n&&(v=p&&l.route.id?p[l.route.id]:void 0,g=l.route.errorElement||ry,f&&(u<0&&s===0?(h=!0,w=null):u===s&&(h=!0,w=l.route.hydrateFallbackElement||null)));let y=r.concat(c.slice(0,s+1)),$=()=>{let m;return v?m=g:h?m=w:l.route.Component?m=P.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=i,P.createElement(ty,{match:l,routeContext:{outlet:i,matches:y,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||s===0)?P.createElement(ny,{location:n.location,revalidation:n.revalidation,component:g,error:v,children:$(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):$()},null)}var S4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(S4||{}),Ko=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ko||{});function iy(e){let r=P.useContext(ps);return r||ge(!1),r}function ly(e){let r=P.useContext(C4);return r||ge(!1),r}function oy(e){let r=P.useContext(yt);return r||ge(!1),r}function T4(e){let r=oy(),n=r.matches[r.matches.length-1];return n.route.id||ge(!1),n.route.id}function sy(){var e;let r=P.useContext(L4),n=ly(Ko.UseRouteError),t=T4(Ko.UseRouteError);return r!==void 0?r:(e=n.errors)==null?void 0:e[t]}function uy(){let{router:e}=iy(S4.UseNavigateStable),r=T4(Ko.UseNavigateStable),n=P.useRef(!1);return F4(()=>{n.current=!0}),P.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ei({fromRouteId:r},o)))},[e,r])}function Pn(e){ge(!1)}function cy(e){let{basename:r="/",children:n=null,location:t,navigationType:a=Fn.Pop,navigator:o,static:c=!1,future:p}=e;ji()&&ge(!1);let f=r.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:f,navigator:o,static:c,future:Ei({v7_relativeSplatPath:!1},p)}),[f,p,o,c]);typeof t=="string"&&(t=gt(t));let{pathname:i="/",search:l="",hash:s="",state:v=null,key:h="default"}=t,g=P.useMemo(()=>{let w=na(i,f);return w==null?null:{location:{pathname:w,search:l,hash:s,state:v,key:h},navigationType:a}},[f,i,l,s,v,h,a]);return g==null?null:P.createElement(Kn.Provider,{value:u},P.createElement(ms.Provider,{children:n,value:g}))}function fy(e){let{children:r,location:n}=e;return Z9(Hc(r),n)}new Promise(()=>{});function Hc(e,r){r===void 0&&(r=[]);let n=[];return P.Children.forEach(e,(t,a)=>{if(!P.isValidElement(t))return;let o=[...r,a];if(t.type===P.Fragment){n.push.apply(n,Hc(t.props.children,o));return}t.type!==Pn&&ge(!1),!t.props.index||!t.props.children||ge(!1);let c={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(c.children=Hc(t.props.children,o)),n.push(c)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Qo.apply(this,arguments)}function H4(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dy(e,r){return e.button===0&&(!r||r==="_self")&&!vy(e)}const py=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],my=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],hy="6";try{window.__reactRouterVersion=hy}catch{}const gy=P.createContext({isTransitioning:!1}),yy="startTransition",z1=v7[yy];function $y(e){let{basename:r,children:n,future:t,window:a}=e,o=P.useRef();o.current==null&&(o.current=I9({window:a,v5Compat:!0}));let c=o.current,[p,f]=P.useState({action:c.action,location:c.location}),{v7_startTransition:u}=t||{},i=P.useCallback(l=>{u&&z1?z1(()=>f(l)):f(l)},[f,u]);return P.useLayoutEffect(()=>c.listen(i),[c,i]),P.createElement(cy,{basename:r,children:n,location:p.location,navigationType:p.action,navigator:c,future:t})}const wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R4=P.forwardRef(function(r,n){let{onClick:t,relative:a,reloadDocument:o,replace:c,state:p,target:f,to:u,preventScrollReset:i,unstable_viewTransition:l}=r,s=H4(r,py),{basename:v}=P.useContext(Kn),h,g=!1;if(typeof u=="string"&&Ny.test(u)&&(h=u,wy))try{let m=new URL(window.location.href),N=u.startsWith("//")?new URL(m.protocol+u):new URL(u),x=na(N.pathname,v);N.origin===m.origin&&x!=null?u=x+N.search+N.hash:g=!0}catch{}let w=K9(u,{relative:a}),y=xy(u,{replace:c,state:p,target:f,preventScrollReset:i,relative:a,unstable_viewTransition:l});function $(m){t&&t(m),m.defaultPrevented||y(m)}return P.createElement("a",Qo({},s,{href:h||w,onClick:g||o?t:$,ref:n,target:f}))}),Zn=P.forwardRef(function(r,n){let{"aria-current":t="page",caseSensitive:a=!1,className:o="",end:c=!1,style:p,to:f,unstable_viewTransition:u,children:i}=r,l=H4(r,my),s=hs(f,{relative:l.relative}),v=Ci(),h=P.useContext(C4),{navigator:g,basename:w}=P.useContext(Kn),y=h!=null&&Iy(s)&&u===!0,$=g.encodeLocation?g.encodeLocation(s).pathname:s.pathname,m=v.pathname,N=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(m=m.toLowerCase(),N=N?N.toLowerCase():null,$=$.toLowerCase()),N&&w&&(N=na(N,w)||N);const x=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let _=m===$||!c&&m.startsWith($)&&m.charAt(x)==="/",I=N!=null&&(N===$||!c&&N.startsWith($)&&N.charAt($.length)==="/"),E={isActive:_,isPending:I,isTransitioning:y},j=_?t:void 0,O;typeof o=="function"?O=o(E):O=[o,_?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof p=="function"?p(E):p;return P.createElement(R4,Qo({},l,{"aria-current":j,className:O,ref:n,style:R,to:f,unstable_viewTransition:u}),typeof i=="function"?i(E):i)});var Rc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rc||(Rc={}));var D1;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(D1||(D1={}));function _y(e){let r=P.useContext(ps);return r||ge(!1),r}function xy(e,r){let{target:n,replace:t,state:a,preventScrollReset:o,relative:c,unstable_viewTransition:p}=r===void 0?{}:r,f=Q9(),u=Ci(),i=hs(e,{relative:c});return P.useCallback(l=>{if(dy(l,n)){l.preventDefault();let s=t!==void 0?t:Mo(u)===Mo(i);f(e,{replace:s,state:a,preventScrollReset:o,relative:c,unstable_viewTransition:p})}},[u,f,i,t,a,n,e,o,c,p])}function Iy(e,r){r===void 0&&(r={});let n=P.useContext(gy);n==null&&ge(!1);let{basename:t}=_y(Rc.useViewTransitionState),a=hs(e,{relative:r.relative});if(!n.isTransitioning)return!1;let o=na(n.currentLocation.pathname,t)||n.currentLocation.pathname,c=na(n.nextLocation.pathname,t)||n.nextLocation.pathname;return Xo(a.pathname,c)!=null||Xo(a.pathname,o)!=null}var z4={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(Kg,function(){var n=function(t,a){var o=Array.prototype.concat,c=Array.prototype.slice,p=Object.prototype.toString;function f($,m){var N=$>m?$:m;return t.pow(10,17-~~(t.log(N>0?N:-N)*t.LOG10E))}var u=Array.isArray||function(m){return p.call(m)==="[object Array]"};function i($){return p.call($)==="[object Function]"}function l($){return typeof $=="number"?$-$===0:!1}function s($){return o.apply([],$)}function v(){return new v._init(arguments)}v.fn=v.prototype,v._init=function(m){if(u(m[0]))if(u(m[0][0])){i(m[1])&&(m[0]=v.map(m[0],m[1]));for(var N=0;N<m[0].length;N++)this[N]=m[0][N];this.length=m[0].length}else this[0]=i(m[1])?v.map(m[0],m[1]):m[0],this.length=1;else if(l(m[0]))this[0]=v.seq.apply(null,m),this.length=1;else{if(m[0]instanceof v)return v(m[0].toArray());this[0]=[],this.length=1}return this},v._init.prototype=v.prototype,v._init.constructor=v,v.utils={calcRdx:f,isArray:u,isFunction:i,isNumber:l,toVector:s},v._random_fn=t.random,v.setRandom=function(m){if(typeof m!="function")throw new TypeError("fn is not a function");v._random_fn=m},v.extend=function(m){var N,x;if(arguments.length===1){for(x in m)v[x]=m[x];return this}for(N=1;N<arguments.length;N++)for(x in arguments[N])m[x]=arguments[N][x];return m},v.rows=function(m){return m.length||1},v.cols=function(m){return m[0].length||1},v.dimensions=function(m){return{rows:v.rows(m),cols:v.cols(m)}},v.row=function(m,N){return u(N)?N.map(function(x){return v.row(m,x)}):m[N]},v.rowa=function(m,N){return v.row(m,N)},v.col=function(m,N){if(u(N)){var x=v.arange(m.length).map(function(){return new Array(N.length)});return N.forEach(function(E,j){v.arange(m.length).forEach(function(O){x[O][j]=m[O][E]})}),x}for(var _=new Array(m.length),I=0;I<m.length;I++)_[I]=[m[I][N]];return _},v.cola=function(m,N){return v.col(m,N).map(function(x){return x[0]})},v.diag=function(m){for(var N=v.rows(m),x=new Array(N),_=0;_<N;_++)x[_]=[m[_][_]];return x},v.antidiag=function(m){for(var N=v.rows(m)-1,x=new Array(N),_=0;N>=0;N--,_++)x[_]=[m[_][N]];return x},v.transpose=function(m){var N=[],x,_,I,E,j;for(u(m[0])||(m=[m]),_=m.length,I=m[0].length,j=0;j<I;j++){for(x=new Array(_),E=0;E<_;E++)x[E]=m[E][j];N.push(x)}return N.length===1?N[0]:N},v.map=function(m,N,x){var _,I,E,j,O;for(u(m[0])||(m=[m]),I=m.length,E=m[0].length,j=x?m:new Array(I),_=0;_<I;_++)for(j[_]||(j[_]=new Array(E)),O=0;O<E;O++)j[_][O]=N(m[_][O],_,O);return j.length===1?j[0]:j},v.cumreduce=function(m,N,x){var _,I,E,j,O;for(u(m[0])||(m=[m]),I=m.length,E=m[0].length,j=x?m:new Array(I),_=0;_<I;_++)for(j[_]||(j[_]=new Array(E)),E>0&&(j[_][0]=m[_][0]),O=1;O<E;O++)j[_][O]=N(j[_][O-1],m[_][O]);return j.length===1?j[0]:j},v.alter=function(m,N){return v.map(m,N,!0)},v.create=function(m,N,x){var _=new Array(m),I,E;for(i(N)&&(x=N,N=m),I=0;I<m;I++)for(_[I]=new Array(N),E=0;E<N;E++)_[I][E]=x(I,E);return _};function h(){return 0}v.zeros=function(m,N){return l(N)||(N=m),v.create(m,N,h)};function g(){return 1}v.ones=function(m,N){return l(N)||(N=m),v.create(m,N,g)},v.rand=function(m,N){return l(N)||(N=m),v.create(m,N,v._random_fn)};function w($,m){return $===m?1:0}v.identity=function(m,N){return l(N)||(N=m),v.create(m,N,w)},v.symmetric=function(m){var N=m.length,x,_;if(m.length!==m[0].length)return!1;for(x=0;x<N;x++)for(_=0;_<N;_++)if(m[_][x]!==m[x][_])return!1;return!0},v.clear=function(m){return v.alter(m,h)},v.seq=function(m,N,x,_){i(_)||(_=!1);var I=[],E=f(m,N),j=(N*E-m*E)/((x-1)*E),O=m,R;for(R=0;O<=N&&R<x;R++,O=(m*E+j*E*R)/E)I.push(_?_(O,R):O);return I},v.arange=function(m,N,x){var _=[],I;if(x=x||1,N===a&&(N=m,m=0),m===N||x===0)return[];if(m<N&&x<0)return[];if(m>N&&x>0)return[];if(x>0)for(I=m;I<N;I+=x)_.push(I);else for(I=m;I>N;I+=x)_.push(I);return _},v.slice=function(){function $(N,x,_,I){var E,j=[],O=N.length;if(x===a&&_===a&&I===a)return v.copy(N);if(x=x||0,_=_||N.length,x=x>=0?x:O+x,_=_>=0?_:O+_,I=I||1,x===_||I===0)return[];if(x<_&&I<0)return[];if(x>_&&I>0)return[];if(I>0)for(E=x;E<_;E+=I)j.push(N[E]);else for(E=x;E>_;E+=I)j.push(N[E]);return j}function m(N,x){var _,I;if(x=x||{},l(x.row)){if(l(x.col))return N[x.row][x.col];var E=v.rowa(N,x.row);return _=x.col||{},$(E,_.start,_.end,_.step)}if(l(x.col)){var j=v.cola(N,x.col);return I=x.row||{},$(j,I.start,I.end,I.step)}I=x.row||{},_=x.col||{};var O=$(N,I.start,I.end,I.step);return O.map(function(R){return $(R,_.start,_.end,_.step)})}return m}(),v.sliceAssign=function(m,N,x){var _,I;if(l(N.row)){if(l(N.col))return m[N.row][N.col]=x;N.col=N.col||{},N.col.start=N.col.start||0,N.col.end=N.col.end||m[0].length,N.col.step=N.col.step||1,_=v.arange(N.col.start,t.min(m.length,N.col.end),N.col.step);var E=N.row;return _.forEach(function(O,R){m[E][O]=x[R]}),m}if(l(N.col)){N.row=N.row||{},N.row.start=N.row.start||0,N.row.end=N.row.end||m.length,N.row.step=N.row.step||1,I=v.arange(N.row.start,t.min(m[0].length,N.row.end),N.row.step);var j=N.col;return I.forEach(function(O,R){m[O][j]=x[R]}),m}return x[0].length===a&&(x=[x]),N.row.start=N.row.start||0,N.row.end=N.row.end||m.length,N.row.step=N.row.step||1,N.col.start=N.col.start||0,N.col.end=N.col.end||m[0].length,N.col.step=N.col.step||1,I=v.arange(N.row.start,t.min(m.length,N.row.end),N.row.step),_=v.arange(N.col.start,t.min(m[0].length,N.col.end),N.col.step),I.forEach(function(O,R){_.forEach(function(U,z){m[O][U]=x[R][z]})}),m},v.diagonal=function(m){var N=v.zeros(m.length,m.length);return m.forEach(function(x,_){N[_][_]=x}),N},v.copy=function(m){return m.map(function(N){return l(N)?N:N.map(function(x){return x})})};var y=v.prototype;return y.length=0,y.push=Array.prototype.push,y.sort=Array.prototype.sort,y.splice=Array.prototype.splice,y.slice=Array.prototype.slice,y.toArray=function(){return this.length>1?c.call(this):c.call(this)[0]},y.map=function(m,N){return v(v.map(this,m,N))},y.cumreduce=function(m,N){return v(v.cumreduce(this,m,N))},y.alter=function(m){return v.alter(this,m),this},function($){for(var m=0;m<$.length;m++)(function(N){y[N]=function(x){var _=this,I;return x?(setTimeout(function(){x.call(_,y[N].call(_))}),this):(I=v[N](this),u(I)?v(I):I)}})($[m])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function($){for(var m=0;m<$.length;m++)(function(N){y[N]=function(x,_){var I=this;return _?(setTimeout(function(){_.call(I,y[N].call(I,x))}),this):v(v[N](this,x))}})($[m])}("row col".split(" ")),function($){for(var m=0;m<$.length;m++)(function(N){y[N]=function(){return v(v[N].apply(null,arguments))}})($[m])}("create zeros ones rand identity".split(" ")),v}(Math);return function(t,a){var o=t.utils.isFunction;function c(u,i){return u-i}function p(u,i,l){return a.max(i,a.min(u,l))}t.sum=function(i){for(var l=0,s=i.length;--s>=0;)l+=i[s];return l},t.sumsqrd=function(i){for(var l=0,s=i.length;--s>=0;)l+=i[s]*i[s];return l},t.sumsqerr=function(i){for(var l=t.mean(i),s=0,v=i.length,h;--v>=0;)h=i[v]-l,s+=h*h;return s},t.sumrow=function(i){for(var l=0,s=i.length;--s>=0;)l+=i[s];return l},t.product=function(i){for(var l=1,s=i.length;--s>=0;)l*=i[s];return l},t.min=function(i){for(var l=i[0],s=0;++s<i.length;)i[s]<l&&(l=i[s]);return l},t.max=function(i){for(var l=i[0],s=0;++s<i.length;)i[s]>l&&(l=i[s]);return l},t.unique=function(i){for(var l={},s=[],v=0;v<i.length;v++)l[i[v]]||(l[i[v]]=!0,s.push(i[v]));return s},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var l=i.map(a.log),s=t.mean(l);return a.exp(s)},t.median=function(i){var l=i.length,s=i.slice().sort(c);return l&1?s[l/2|0]:(s[l/2-1]+s[l/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(l,s){return l+s})},t.cumprod=function(i){return t.cumreduce(i,function(l,s){return l*s})},t.diff=function(i){var l=[],s=i.length,v;for(v=1;v<s;v++)l.push(i[v]-i[v-1]);return l},t.rank=function(u){var i,l=[],s={};for(i=0;i<u.length;i++){var v=u[i];s[v]?s[v]++:(s[v]=1,l.push(v))}var h=l.sort(c),g={},w=1;for(i=0;i<h.length;i++){var v=h[i],y=s[v],$=w,m=w+y-1,N=($+m)/2;g[v]=N,w+=y}return u.map(function(x){return g[x]})},t.mode=function(i){var l=i.length,s=i.slice().sort(c),v=1,h=0,g=0,w=[],y;for(y=0;y<l;y++)s[y]===s[y+1]?v++:(v>h?(w=[s[y]],h=v,g=0):v===h&&(w.push(s[y]),g++),v=1);return g===0?w[0]:w},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,l){return t.sumsqerr(i)/(i.length-(l?1:0))},t.pooledvariance=function(i){var l=i.reduce(function(v,h){return v+t.sumsqerr(h)},0),s=i.reduce(function(v,h){return v+h.length},0);return l/(s-i.length)},t.deviation=function(u){for(var i=t.mean(u),l=u.length,s=new Array(l),v=0;v<l;v++)s[v]=u[v]-i;return s},t.stdev=function(i,l){return a.sqrt(t.variance(i,l))},t.pooledstdev=function(i){return a.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var l=t.mean(i),s=[],v=i.length-1;v>=0;v--)s.push(a.abs(i[v]-l));return t.mean(s)},t.meddev=function(i){for(var l=t.median(i),s=[],v=i.length-1;v>=0;v--)s.push(a.abs(i[v]-l));return t.median(s)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var l=i.length,s=i.slice().sort(c);return[s[a.round(l/4)-1],s[a.round(l/2)-1],s[a.round(l*3/4)-1]]},t.quantiles=function(i,l,s,v){var h=i.slice().sort(c),g=[l.length],w=i.length,y,$,m,N,x,_;for(typeof s>"u"&&(s=3/8),typeof v>"u"&&(v=3/8),y=0;y<l.length;y++)$=l[y],m=s+$*(1-s-v),N=w*$+m,x=a.floor(p(N,1,w-1)),_=p(N-x,0,1),g[y]=(1-_)*h[x-1]+_*h[x];return g},t.percentile=function(i,l,s){var v=i.slice().sort(c),h=l*(v.length+(s?1:-1))+(s?0:1),g=parseInt(h),w=h-g;return g+1<v.length?v[g-1]+w*(v[g]-v[g-1]):v[g-1]},t.percentileOfScore=function(i,l,s){var v=0,h=i.length,g=!1,w,y;for(s==="strict"&&(g=!0),y=0;y<h;y++)w=i[y],(g&&w<l||!g&&w<=l)&&v++;return v/h},t.histogram=function(i,l){l=l||4;var s=t.min(i),v=(t.max(i)-s)/l,h=i.length,g=[],w;for(w=0;w<l;w++)g[w]=0;for(w=0;w<h;w++)g[a.min(a.floor((i[w]-s)/v),l-1)]+=1;return g},t.covariance=function(i,l){var s=t.mean(i),v=t.mean(l),h=i.length,g=new Array(h),w;for(w=0;w<h;w++)g[w]=(i[w]-s)*(l[w]-v);return t.sum(g)/(h-1)},t.corrcoeff=function(i,l){return t.covariance(i,l)/t.stdev(i,1)/t.stdev(l,1)},t.spearmancoeff=function(u,i){return u=t.rank(u),i=t.rank(i),t.corrcoeff(u,i)},t.stanMoment=function(i,l){for(var s=t.mean(i),v=t.stdev(i),h=i.length,g=0,w=0;w<h;w++)g+=a.pow((i[w]-s)/v,l);return g/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var f=t.prototype;(function(u){for(var i=0;i<u.length;i++)(function(l){f[l]=function(s,v){var h=[],g=0,w=this;if(o(s)&&(v=s,s=!1),v)return setTimeout(function(){v.call(w,f[l].call(w,s))}),this;if(this.length>1){for(w=s===!0?this:this.transpose();g<w.length;g++)h[g]=t[l](w[g]);return h}return t[l](this[0],s)}})(u[i])})("cumsum cumprod".split(" ")),function(u){for(var i=0;i<u.length;i++)(function(l){f[l]=function(s,v){var h=[],g=0,w=this;if(o(s)&&(v=s,s=!1),v)return setTimeout(function(){v.call(w,f[l].call(w,s))}),this;if(this.length>1){for(l!=="sumrow"&&(w=s===!0?this:this.transpose());g<w.length;g++)h[g]=t[l](w[g]);return s===!0?t[l](t.utils.toVector(h)):h}return t[l](this[0],s)}})(u[i])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(u){for(var i=0;i<u.length;i++)(function(l){f[l]=function(){var s=[],v=0,h=this,g=Array.prototype.slice.call(arguments),w;if(o(g[g.length-1])){w=g[g.length-1];var y=g.slice(0,g.length-1);return setTimeout(function(){w.call(h,f[l].apply(h,y))}),this}else{w=void 0;var $=function(N){return t[l].apply(h,[N].concat(g))}}if(this.length>1){for(h=h.transpose();v<h.length;v++)s[v]=$(h[v]);return s}return $(this[0])}})(u[i])}("quantiles percentileOfScore".split(" "))}(n,Math),function(t,a){t.gammaln=function(c){var p=0,f=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],u=1.000000000190015,i,l,s;for(s=(l=i=c)+5.5,s-=(i+.5)*a.log(s);p<6;p++)u+=f[p]/++l;return a.log(2.5066282746310007*u/i)-s},t.loggam=function(c){var p,f,u,i,l,s,v,h=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(p=c,v=0,c==1||c==2)return 0;for(c<=7&&(v=a.floor(7-c),p=c+v),f=1/(p*p),u=2*a.PI,l=h[9],s=8;s>=0;s--)l*=f,l+=h[s];if(i=l/p+.5*a.log(u)+(p-.5)*a.log(p)-p,c<=7)for(s=1;s<=v;s++)i-=a.log(p-1),p-=1;return i},t.gammafn=function(c){var p=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],f=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],u=!1,i=0,l=0,s=0,v=c,h,g,w,y;if(c>171.6243769536076)return 1/0;if(v<=0)if(y=v%1+36e-17,y)u=(v&1?-1:1)*a.PI/a.sin(a.PI*y),v=1-v;else return 1/0;for(w=v,v<1?g=v++:g=(v-=i=(v|0)-1)-1,h=0;h<8;++h)s=(s+p[h])*g,l=l*g+f[h];if(y=s/l+1,w<v)y/=w;else if(w>v)for(h=0;h<i;++h)y*=v,v++;return u&&(y=u/y),y},t.gammap=function(c,p){return t.lowRegGamma(c,p)*t.gammafn(c)},t.lowRegGamma=function(c,p){var f=t.gammaln(c),u=c,i=1/c,l=i,s=p+1-c,v=1/1e-30,h=1/s,g=h,w=1,y=-~(a.log(c>=1?c:1/c)*8.5+c*.4+17),$;if(p<0||c<=0)return NaN;if(p<c+1){for(;w<=y;w++)i+=l*=p/++u;return i*a.exp(-p+c*a.log(p)-f)}for(;w<=y;w++)$=-w*(w-c),s+=2,h=$*h+s,v=s+$/v,h=1/h,g*=h*v;return 1-g*a.exp(-p+c*a.log(p)-f)},t.factorialln=function(c){return c<0?NaN:t.gammaln(c+1)},t.factorial=function(c){return c<0?NaN:t.gammafn(c+1)},t.combination=function(c,p){return c>170||p>170?a.exp(t.combinationln(c,p)):t.factorial(c)/t.factorial(p)/t.factorial(c-p)},t.combinationln=function(c,p){return t.factorialln(c)-t.factorialln(p)-t.factorialln(c-p)},t.permutation=function(c,p){return t.factorial(c)/t.factorial(c-p)},t.betafn=function(c,p){if(!(c<=0||p<=0))return c+p>170?a.exp(t.betaln(c,p)):t.gammafn(c)*t.gammafn(p)/t.gammafn(c+p)},t.betaln=function(c,p){return t.gammaln(c)+t.gammaln(p)-t.gammaln(c+p)},t.betacf=function(c,p,f){var u=1e-30,i=1,l=p+f,s=p+1,v=p-1,h=1,g=1-l*c/s,w,y,$,m;for(a.abs(g)<u&&(g=u),g=1/g,m=g;i<=100&&(w=2*i,y=i*(f-i)*c/((v+w)*(p+w)),g=1+y*g,a.abs(g)<u&&(g=u),h=1+y/h,a.abs(h)<u&&(h=u),g=1/g,m*=g*h,y=-(p+i)*(l+i)*c/((p+w)*(s+w)),g=1+y*g,a.abs(g)<u&&(g=u),h=1+y/h,a.abs(h)<u&&(h=u),g=1/g,$=g*h,m*=$,!(a.abs($-1)<3e-7));i++);return m},t.gammapinv=function(c,p){var f=0,u=p-1,i=1e-8,l=t.gammaln(p),s,v,h,g,w,y,$;if(c>=1)return a.max(100,p+100*a.sqrt(p));if(c<=0)return 0;for(p>1?(y=a.log(u),$=a.exp(u*(y-1)-l),w=c<.5?c:1-c,h=a.sqrt(-2*a.log(w)),s=(2.30753+h*.27061)/(1+h*(.99229+h*.04481))-h,c<.5&&(s=-s),s=a.max(.001,p*a.pow(1-1/(9*p)-s/(3*a.sqrt(p)),3))):(h=1-p*(.253+p*.12),c<h?s=a.pow(c/h,1/p):s=1-a.log(1-(c-h)/(1-h)));f<12;f++){if(s<=0)return 0;if(v=t.lowRegGamma(p,s)-c,p>1?h=$*a.exp(-(s-u)+u*(a.log(s)-y)):h=a.exp(-s+u*a.log(s)-l),g=v/h,s-=h=g/(1-.5*a.min(1,g*((p-1)/s-1))),s<=0&&(s=.5*(s+h)),a.abs(h)<i*s)break}return s},t.erf=function(c){var p=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],f=p.length-1,u=!1,i=0,l=0,s,v,h,g;for(c<0&&(c=-c,u=!0),s=2/(2+c),v=4*s-2;f>0;f--)h=i,i=v*i-l+p[f],l=h;return g=s*a.exp(-c*c+.5*(p[0]+v*i)-l),u?g-1:1-g},t.erfc=function(c){return 1-t.erf(c)},t.erfcinv=function(c){var p=0,f,u,i,l;if(c>=2)return-100;if(c<=0)return 100;for(l=c<1?c:2-c,i=a.sqrt(-2*a.log(l/2)),f=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);p<2;p++)u=t.erfc(f)-l,f+=u/(1.1283791670955126*a.exp(-f*f)-f*u);return c<1?f:-f},t.ibetainv=function(c,p,f){var u=1e-8,i=p-1,l=f-1,s=0,v,h,g,w,y,$,m,N,x,_,I;if(c<=0)return 0;if(c>=1)return 1;for(p>=1&&f>=1?(g=c<.5?c:1-c,w=a.sqrt(-2*a.log(g)),m=(2.30753+w*.27061)/(1+w*(.99229+w*.04481))-w,c<.5&&(m=-m),N=(m*m-3)/6,x=2/(1/(2*p-1)+1/(2*f-1)),_=m*a.sqrt(N+x)/x-(1/(2*f-1)-1/(2*p-1))*(N+5/6-2/(3*x)),m=p/(p+f*a.exp(2*_))):(v=a.log(p/(p+f)),h=a.log(f/(p+f)),w=a.exp(p*v)/p,y=a.exp(f*h)/f,_=w+y,c<w/_?m=a.pow(p*_*c,1/p):m=1-a.pow(f*_*(1-c),1/f)),I=-t.gammaln(p)-t.gammaln(f)+t.gammaln(p+f);s<10;s++){if(m===0||m===1)return m;if($=t.ibeta(m,p,f)-c,w=a.exp(i*a.log(m)+l*a.log(1-m)+I),y=$/w,m-=w=y/(1-.5*a.min(1,y*(i/m-l/(1-m)))),m<=0&&(m=.5*(m+w)),m>=1&&(m=.5*(m+w+1)),a.abs(w)<u*m&&s>0)break}return m},t.ibeta=function(c,p,f){var u=c===0||c===1?0:a.exp(t.gammaln(p+f)-t.gammaln(p)-t.gammaln(f)+p*a.log(c)+f*a.log(1-c));return c<0||c>1?!1:c<(p+1)/(p+f+2)?u*t.betacf(c,p,f)/p:1-u*t.betacf(1-c,f,p)/f},t.randn=function(c,p){var f,u,i,l,s;if(p||(p=c),c)return t.create(c,p,function(){return t.randn()});do f=t._random_fn(),u=1.7156*(t._random_fn()-.5),i=f-.449871,l=a.abs(u)+.386595,s=i*i+l*(.196*l-.25472*i);while(s>.27597&&(s>.27846||u*u>-4*a.log(f)*f*f));return u/f},t.randg=function(c,p,f){var u=c,i,l,s,v,h,g;if(f||(f=p),c||(c=1),p)return g=t.zeros(p,f),g.alter(function(){return t.randg(c)}),g;c<1&&(c+=1),i=c-1/3,l=1/a.sqrt(9*i);do{do h=t.randn(),v=1+l*h;while(v<=0);v=v*v*v,s=t._random_fn()}while(s>1-.331*a.pow(h,4)&&a.log(s)>.5*h*h+i*(1-v+a.log(v)));if(c==u)return i*v;do s=t._random_fn();while(s===0);return a.pow(s,1/u)*i*v},function(o){for(var c=0;c<o.length;c++)(function(p){t.fn[p]=function(){return t(t.map(this,function(f){return t[p](f)}))}})(o[c])}("gammaln gammafn factorial factorialln".split(" ")),function(o){for(var c=0;c<o.length;c++)(function(p){t.fn[p]=function(){return t(t[p].apply(null,arguments))}})(o[c])}("randn".split(" "))}(n,Math),function(t,a){(function(u){for(var i=0;i<u.length;i++)(function(l){t[l]=function s(v,h,g){return this instanceof s?(this._a=v,this._b=h,this._c=g,this):new s(v,h,g)},t.fn[l]=function(s,v,h){var g=t[l](s,v,h);return g.data=this,g},t[l].prototype.sample=function(s){var v=this._a,h=this._b,g=this._c;return s?t.alter(s,function(){return t[l].sample(v,h,g)}):t[l].sample(v,h,g)},function(s){for(var v=0;v<s.length;v++)(function(h){t[l].prototype[h]=function(g){var w=this._a,y=this._b,$=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?t.fn.map.call(g,function(m){return t[l][h](m,w,y,$)}):t[l][h](g,w,y,$)}})(s[v])}("pdf cdf inv".split(" ")),function(s){for(var v=0;v<s.length;v++)(function(h){t[l].prototype[h]=function(){return t[l][h](this._a,this._b,this._c)}})(s[v])}("mean median mode variance".split(" "))})(u[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,l,s){return i>1||i<0?0:l==1&&s==1?1:l<512&&s<512?a.pow(i,l-1)*a.pow(1-i,s-1)/t.betafn(l,s):a.exp((l-1)*a.log(i)+(s-1)*a.log(1-i)-t.betaln(l,s))},cdf:function(i,l,s){return i>1||i<0?(i>1)*1:t.ibeta(i,l,s)},inv:function(i,l,s){return t.ibetainv(i,l,s)},mean:function(i,l){return i/(i+l)},median:function(i,l){return t.ibetainv(.5,i,l)},mode:function(i,l){return(i-1)/(i+l-2)},sample:function(i,l){var s=t.randg(i);return s/(s+t.randg(l))},variance:function(i,l){return i*l/(a.pow(i+l,2)*(i+l+1))}}),t.extend(t.centralF,{pdf:function(i,l,s){var v,h,g;return i<0?0:l<=2?i===0&&l<2?1/0:i===0&&l===2?1:1/t.betafn(l/2,s/2)*a.pow(l/s,l/2)*a.pow(i,l/2-1)*a.pow(1+l/s*i,-(l+s)/2):(v=l*i/(s+i*l),h=s/(s+i*l),g=l*h/2,g*t.binomial.pdf((l-2)/2,(l+s-2)/2,v))},cdf:function(i,l,s){return i<0?0:t.ibeta(l*i/(l*i+s),l/2,s/2)},inv:function(i,l,s){return s/(l*(1/t.ibetainv(i,l/2,s/2)-1))},mean:function(i,l){return l>2?l/(l-2):void 0},mode:function(i,l){return i>2?l*(i-2)/(i*(l+2)):void 0},sample:function(i,l){var s=t.randg(i/2)*2,v=t.randg(l/2)*2;return s/i/(v/l)},variance:function(i,l){if(!(l<=4))return 2*l*l*(i+l-2)/(i*(l-2)*(l-2)*(l-4))}}),t.extend(t.cauchy,{pdf:function(i,l,s){return s<0?0:s/(a.pow(i-l,2)+a.pow(s,2))/a.PI},cdf:function(i,l,s){return a.atan((i-l)/s)/a.PI+.5},inv:function(u,i,l){return i+l*a.tan(a.PI*(u-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,l){return t.randn()*a.sqrt(1/(2*t.randg(.5)))*l+i}}),t.extend(t.chisquare,{pdf:function(i,l){return i<0?0:i===0&&l===2?.5:a.exp((l/2-1)*a.log(i)-i/2-l/2*a.log(2)-t.gammaln(l/2))},cdf:function(i,l){return i<0?0:t.lowRegGamma(l/2,i/2)},inv:function(u,i){return 2*t.gammapinv(u,.5*i)},mean:function(u){return u},median:function(i){return i*a.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,l){return i<0?0:l*a.exp(-l*i)},cdf:function(i,l){return i<0?0:1-a.exp(-l*i)},inv:function(u,i){return-a.log(1-u)/i},mean:function(u){return 1/u},median:function(u){return 1/u*a.log(2)},mode:function(){return 0},sample:function(i){return-1/i*a.log(t._random_fn())},variance:function(u){return a.pow(u,-2)}}),t.extend(t.gamma,{pdf:function(i,l,s){return i<0?0:i===0&&l===1?1/s:a.exp((l-1)*a.log(i)-i/s-t.gammaln(l)-l*a.log(s))},cdf:function(i,l,s){return i<0?0:t.lowRegGamma(l,i/s)},inv:function(u,i,l){return t.gammapinv(u,i)*l},mean:function(u,i){return u*i},mode:function(i,l){if(i>1)return(i-1)*l},sample:function(i,l){return t.randg(i)*l},variance:function(i,l){return i*l*l}}),t.extend(t.invgamma,{pdf:function(i,l,s){return i<=0?0:a.exp(-(l+1)*a.log(i)-s/i-t.gammaln(l)+l*a.log(s))},cdf:function(i,l,s){return i<=0?0:1-t.lowRegGamma(l,s/i)},inv:function(u,i,l){return l/t.gammapinv(1-u,i)},mean:function(u,i){return u>1?i/(u-1):void 0},mode:function(i,l){return l/(i+1)},sample:function(i,l){return l/t.randg(i)},variance:function(i,l){if(!(i<=2))return l*l/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,l,s){return i===0&&l===1?s:i===1&&s===1?l:a.exp(a.log(l)+a.log(s)+(l-1)*a.log(i)+(s-1)*a.log(1-a.pow(i,l)))},cdf:function(i,l,s){return i<0?0:i>1?1:1-a.pow(1-a.pow(i,l),s)},inv:function(i,l,s){return a.pow(1-a.pow(1-i,1/s),1/l)},mean:function(u,i){return i*t.gammafn(1+1/u)*t.gammafn(i)/t.gammafn(1+1/u+i)},median:function(i,l){return a.pow(1-a.pow(2,-1/l),1/i)},mode:function(i,l){if(i>=1&&l>=1&&i!==1&&l!==1)return a.pow((i-1)/(i*l-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,l,s){return i<=0?0:a.exp(-a.log(i)-.5*a.log(2*a.PI)-a.log(s)-a.pow(a.log(i)-l,2)/(2*s*s))},cdf:function(i,l,s){return i<0?0:.5+.5*t.erf((a.log(i)-l)/a.sqrt(2*s*s))},inv:function(u,i,l){return a.exp(-1.4142135623730951*l*t.erfcinv(2*u)+i)},mean:function(i,l){return a.exp(i+l*l/2)},median:function(i){return a.exp(i)},mode:function(i,l){return a.exp(i-l*l)},sample:function(i,l){return a.exp(t.randn()*l+i)},variance:function(i,l){return(a.exp(l*l)-1)*a.exp(2*i+l*l)}}),t.extend(t.noncentralt,{pdf:function(i,l,s){var v=1e-14;return a.abs(s)<v?t.studentt.pdf(i,l):a.abs(i)<v?a.exp(t.gammaln((l+1)/2)-s*s/2-.5*a.log(a.PI*l)-t.gammaln(l/2)):l/i*(t.noncentralt.cdf(i*a.sqrt(1+2/l),l+2,s)-t.noncentralt.cdf(i,l,s))},cdf:function(i,l,s){var v=1e-14,h=200;if(a.abs(s)<v)return t.studentt.cdf(i,l);var g=!1;i<0&&(g=!0,s=-s);for(var w=t.normal.cdf(-s,0,1),y=v+1,$=y,m=i*i/(i*i+l),N=0,x=a.exp(-s*s/2),_=a.exp(-s*s/2-.5*a.log(2)-t.gammaln(3/2))*s;N<h||$>v||y>v;)$=y,N>0&&(x*=s*s/(2*N),_*=s*s/(2*(N+1/2))),y=x*t.beta.cdf(m,N+.5,l/2)+_*t.beta.cdf(m,N+1,l/2),w+=.5*y,N++;return g?1-w:w}}),t.extend(t.normal,{pdf:function(i,l,s){return a.exp(-.5*a.log(2*a.PI)-a.log(s)-a.pow(i-l,2)/(2*s*s))},cdf:function(i,l,s){return .5*(1+t.erf((i-l)/a.sqrt(2*s*s)))},inv:function(u,i,l){return-1.4142135623730951*l*t.erfcinv(2*u)+i},mean:function(u){return u},median:function(i){return i},mode:function(u){return u},sample:function(i,l){return t.randn()*l+i},variance:function(u,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,l,s){return i<l?0:s*a.pow(l,s)/a.pow(i,s+1)},cdf:function(i,l,s){return i<l?0:1-a.pow(l/i,s)},inv:function(i,l,s){return l/a.pow(1-i,1/s)},mean:function(i,l){if(!(l<=1))return l*a.pow(i,l)/(l-1)},median:function(i,l){return i*(l*a.SQRT2)},mode:function(i){return i},variance:function(u,i){if(!(i<=2))return u*u*i/(a.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,l){return l=l>1e100?1e100:l,1/(a.sqrt(l)*t.betafn(.5,l/2))*a.pow(1+i*i/l,-((l+1)/2))},cdf:function(i,l){var s=l/2;return t.ibeta((i+a.sqrt(i*i+l))/(2*a.sqrt(i*i+l)),s,s)},inv:function(u,i){var l=t.ibetainv(2*a.min(u,1-u),.5*i,.5);return l=a.sqrt(i*(1-l)/l),u>.5?l:-l},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*a.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,l,s){return i<0||l<0||s<0?0:s/l*a.pow(i/l,s-1)*a.exp(-a.pow(i/l,s))},cdf:function(i,l,s){return i<0?0:1-a.exp(-a.pow(i/l,s))},inv:function(u,i,l){return i*a.pow(-a.log(1-u),1/l)},mean:function(u,i){return u*t.gammafn(1+1/i)},median:function(i,l){return i*a.pow(a.log(2),1/l)},mode:function(i,l){return l<=1?0:i*a.pow((l-1)/l,1/l)},sample:function(i,l){return i*a.pow(-a.log(t._random_fn()),1/l)},variance:function(i,l){return i*i*t.gammafn(1+2/l)-a.pow(t.weibull.mean(i,l),2)}}),t.extend(t.uniform,{pdf:function(i,l,s){return i<l||i>s?0:1/(s-l)},cdf:function(i,l,s){return i<l?0:i<s?(i-l)/(s-l):1},inv:function(u,i,l){return i+u*(l-i)},mean:function(i,l){return .5*(i+l)},median:function(i,l){return t.mean(i,l)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,l){return i/2+l/2+(l/2-i/2)*(2*t._random_fn()-1)},variance:function(i,l){return a.pow(l-i,2)/12}});function o(u,i,l,s){for(var v=0,h=1,g=1,w=1,y=0,$=0,m;a.abs((g-$)/g)>s;)$=g,m=-(i+y)*(i+l+y)*u/(i+2*y)/(i+2*y+1),v=g+m*v,h=w+m*h,y=y+1,m=y*(l-y)*u/(i+2*y-1)/(i+2*y),g=v+m*g,w=h+m*w,v=v/w,h=h/w,g=g/w,w=1;return g/i}t.extend(t.binomial,{pdf:function(i,l,s){return s===0||s===1?l*s===i?1:0:t.combination(l,i)*a.pow(s,i)*a.pow(1-s,l-i)},cdf:function(i,l,s){var v,h=1e-10;if(i<0)return 0;if(i>=l)return 1;if(s<0||s>1||l<=0)return NaN;i=a.floor(i);var g=s,w=i+1,y=l-i,$=w+y,m=a.exp(t.gammaln($)-t.gammaln(y)-t.gammaln(w)+w*a.log(g)+y*a.log(1-g));return g<(w+1)/($+2)?v=m*o(g,w,y,h):v=1-m*o(1-g,y,w,h),a.round((1-v)*(1/h))/(1/h)}}),t.extend(t.negbin,{pdf:function(i,l,s){return i!==i>>>0?!1:i<0?0:t.combination(i+l-1,l-1)*a.pow(1-s,i)*a.pow(s,l)},cdf:function(i,l,s){var v=0,h=0;if(i<0)return 0;for(;h<=i;h++)v+=t.negbin.pdf(h,l,s);return v}}),t.extend(t.hypgeom,{pdf:function(i,l,s,v){if(i!==i|0)return!1;if(i<0||i<s-(l-v))return 0;if(i>v||i>s)return 0;if(s*2>l)return v*2>l?t.hypgeom.pdf(l-s-v+i,l,l-s,l-v):t.hypgeom.pdf(v-i,l,l-s,v);if(v*2>l)return t.hypgeom.pdf(s-i,l,s,l-v);if(s<v)return t.hypgeom.pdf(i,l,v,s);for(var h=1,g=0,w=0;w<i;w++){for(;h>1&&g<v;)h*=1-s/(l-g),g++;h*=(v-w)*(s-w)/((w+1)*(l-s-v+w+1))}for(;g<v;g++)h*=1-s/(l-g);return a.min(1,a.max(0,h))},cdf:function(i,l,s,v){if(i<0||i<s-(l-v))return 0;if(i>=v||i>=s)return 1;if(s*2>l)return v*2>l?t.hypgeom.cdf(l-s-v+i,l,l-s,l-v):1-t.hypgeom.cdf(v-i-1,l,l-s,v);if(v*2>l)return 1-t.hypgeom.cdf(s-i-1,l,s,l-v);if(s<v)return t.hypgeom.cdf(i,l,v,s);for(var h=1,g=1,w=0,y=0;y<i;y++){for(;h>1&&w<v;){var $=1-s/(l-w);g*=$,h*=$,w++}g*=(v-y)*(s-y)/((y+1)*(l-s-v+y+1)),h+=g}for(;w<v;w++)h*=1-s/(l-w);return a.min(1,a.max(0,h))}}),t.extend(t.poisson,{pdf:function(i,l){return l<0||i%1!==0||i<0?0:a.pow(l,i)*a.exp(-l)/t.factorial(i)},cdf:function(i,l){var s=[],v=0;if(i<0)return 0;for(;v<=i;v++)s.push(t.poisson.pdf(v,l));return t.sum(s)},mean:function(u){return u},variance:function(u){return u},sampleSmall:function(i){var l=1,s=0,v=a.exp(-i);do s++,l*=t._random_fn();while(l>v);return s-1},sampleLarge:function(i){var l=i,s,v,h,g,w,y,$,m,N,x;for(g=a.sqrt(l),w=a.log(l),$=.931+2.53*g,y=-.059+.02483*$,m=1.1239+1.1328/($-3.4),N=.9277-3.6224/($-2);;){if(v=a.random()-.5,h=a.random(),x=.5-a.abs(v),s=a.floor((2*y/x+$)*v+l+.43),x>=.07&&h<=N)return s;if(!(s<0||x<.013&&h>x)&&a.log(h)+a.log(m)-a.log(y/(x*x)+$)<=-l+s*w-t.loggam(s+1))return s}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,l,s,v){return s<=l||v<l||v>s?NaN:i<l||i>s?0:i<v?2*(i-l)/((s-l)*(v-l)):i===v?2/(s-l):2*(s-i)/((s-l)*(s-v))},cdf:function(i,l,s,v){return s<=l||v<l||v>s?NaN:i<=l?0:i>=s?1:i<=v?a.pow(i-l,2)/((s-l)*(v-l)):1-a.pow(s-i,2)/((s-l)*(s-v))},inv:function(i,l,s,v){return s<=l||v<l||v>s?NaN:i<=(v-l)/(s-l)?l+(s-l)*a.sqrt(i*((v-l)/(s-l))):l+(s-l)*(1-a.sqrt((1-i)*(1-(v-l)/(s-l))))},mean:function(i,l,s){return(i+l+s)/3},median:function(i,l,s){if(s<=(i+l)/2)return l-a.sqrt((l-i)*(l-s))/a.sqrt(2);if(s>(i+l)/2)return i+a.sqrt((l-i)*(s-i))/a.sqrt(2)},mode:function(i,l,s){return s},sample:function(i,l,s){var v=t._random_fn();return v<(s-i)/(l-i)?i+a.sqrt(v*(l-i)*(s-i)):l-a.sqrt((1-v)*(l-i)*(l-s))},variance:function(i,l,s){return(i*i+l*l+s*s-i*l-i*s-l*s)/18}}),t.extend(t.arcsine,{pdf:function(i,l,s){return s<=l?NaN:i<=l||i>=s?0:2/a.PI*a.pow(a.pow(s-l,2)-a.pow(2*i-l-s,2),-.5)},cdf:function(i,l,s){return i<l?0:i<s?2/a.PI*a.asin(a.sqrt((i-l)/(s-l))):1},inv:function(u,i,l){return i+(.5-.5*a.cos(a.PI*u))*(l-i)},mean:function(i,l){return l<=i?NaN:(i+l)/2},median:function(i,l){return l<=i?NaN:(i+l)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,l){return(i+l)/2+(l-i)/2*a.sin(2*a.PI*t.uniform.sample(0,1))},variance:function(i,l){return l<=i?NaN:a.pow(l-i,2)/8}});function c(u){return u/a.abs(u)}t.extend(t.laplace,{pdf:function(i,l,s){return s<=0?0:a.exp(-a.abs(i-l)/s)/(2*s)},cdf:function(i,l,s){return s<=0?0:i<l?.5*a.exp((i-l)/s):1-.5*a.exp(-(i-l)/s)},mean:function(u){return u},median:function(u){return u},mode:function(u){return u},variance:function(u,i){return 2*i*i},sample:function(i,l){var s=t._random_fn()-.5;return i-l*c(s)*a.log(1-2*a.abs(s))}});function p(u,i,l){var s=12,v=6,h=-30,g=-50,w=60,y=8,$=3,m=2,N=3,x=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],_=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],I=u*.5;if(I>=y)return 1;var E=2*t.normal.cdf(I,0,1,1,0)-1;E>=a.exp(g/l)?E=a.pow(E,l):E=0;var j;u>$?j=m:j=N;for(var O=I,R=(y-I)/j,U=O+R,z=0,V=l-1,Y=1;Y<=j;Y++){for(var D=0,F=.5*(U+O),A=.5*(U-O),b=1;b<=s;b++){var k,H;v<b?(k=s-b+1,H=x[k-1]):(k=b,H=-x[k-1]);var W=A*H,K=F+W,S=K*K;if(S>w)break;var B=2*t.normal.cdf(K,0,1,1,0),te=2*t.normal.cdf(K,u,1,1,0),we=B*.5-te*.5;we>=a.exp(h/V)&&(we=_[k-1]*a.exp(-(.5*S))*a.pow(we,V),D+=we)}D*=2*A*l/a.sqrt(2*a.PI),z+=D,O=U,U+=R}return E+=z,E<=a.exp(h/i)?0:(E=a.pow(E,i),E>=1?1:E)}function f(u,i,l){var s=.322232421088,v=.099348462606,h=-1,g=.588581570495,w=-.342242088547,y=.531103462366,$=-.204231210125,m=.10353775285,N=-453642210148e-16,x=.0038560700634,_=.8832,I=.2368,E=1.214,j=1.208,O=1.4142,R=120,U=.5-.5*u,z=a.sqrt(a.log(1/(U*U))),V=z+((((z*N+$)*z+w)*z+h)*z+s)/((((z*x+m)*z+y)*z+g)*z+v);l<R&&(V+=(V*V*V+V)/l/4);var Y=_-I*V;return l<R&&(Y+=-E/l+j*V/l),V*(Y*a.log(i-1)+O)}t.extend(t.tukey,{cdf:function(i,l,s){var v=1,h=l,g=16,w=8,y=-30,$=1e-14,m=100,N=800,x=5e3,_=25e3,I=1,E=.5,j=.25,O=.125,R=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],U=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(s<2||v<1||h<2)return NaN;if(!Number.isFinite(i))return 1;if(s>_)return p(i,v,h);var z=s*.5,V=z*a.log(s)-s*a.log(2)-t.gammaln(z),Y=z-1,D=s*.25,F;s<=m?F=I:s<=N?F=E:s<=x?F=j:F=O,V+=a.log(F);for(var A=0,b=1;b<=50;b++){for(var k=0,H=(2*b-1)*F,W=1;W<=g;W++){var K,S;w<W?(K=W-w-1,S=V+Y*a.log(H+R[K]*F)-(R[K]*F+H)*D):(K=W-1,S=V+Y*a.log(H-R[K]*F)+(R[K]*F-H)*D);var B;if(S>=y){w<W?B=i*a.sqrt((R[K]*F+H)*.5):B=i*a.sqrt((-(R[K]*F)+H)*.5);var te=p(B,v,h),we=te*U[K]*a.exp(S);k+=we}}if(b*F>=1&&k<=$)break;A+=k}if(k>$)throw new Error("tukey.cdf failed to converge");return A>1&&(A=1),A},inv:function(u,i,l){var s=1,v=i,h=1e-4,g=50;if(l<2||s<1||v<2)return NaN;if(u<0||u>1)return NaN;if(u===0)return 0;if(u===1)return 1/0;var w=f(u,v,l),y=t.tukey.cdf(w,i,l)-u,$;y>0?$=a.max(0,w-1):$=w+1;for(var m=t.tukey.cdf($,i,l)-u,N,x=1;x<g;x++){N=$-m*($-w)/(m-y),y=m,w=$,N<0&&(N=0,m=-u),m=t.tukey.cdf(N,i,l)-u,$=N;var _=a.abs($-w);if(_<h)return N}throw new Error("tukey.inv failed to converge")}})}(n,Math),function(t,a){var o=Array.prototype.push,c=t.utils.isArray;function p(f){return c(f)||f instanceof t}t.extend({add:function(u,i){return p(i)?(p(i[0])||(i=[i]),t.map(u,function(l,s,v){return l+i[s][v]})):t.map(u,function(l){return l+i})},subtract:function(u,i){return p(i)?(p(i[0])||(i=[i]),t.map(u,function(l,s,v){return l-i[s][v]||0})):t.map(u,function(l){return l-i})},divide:function(u,i){return p(i)?(p(i[0])||(i=[i]),t.multiply(u,t.inv(i))):t.map(u,function(l){return l/i})},multiply:function(u,i){var l,s,v,h,g,w,y,$;if(u.length===void 0&&i.length===void 0)return u*i;if(g=u.length,w=u[0].length,y=t.zeros(g,v=p(i)?i[0].length:w),$=0,p(i)){for(;$<v;$++)for(l=0;l<g;l++){for(h=0,s=0;s<w;s++)h+=u[l][s]*i[s][$];y[l][$]=h}return g===1&&$===1?y[0][0]:y}return t.map(u,function(m){return m*i})},outer:function(u,i){return t.multiply(u.map(function(l){return[l]}),[i])},dot:function(u,i){p(u[0])||(u=[u]),p(i[0])||(i=[i]);for(var l=u[0].length===1&&u.length!==1?t.transpose(u):u,s=i[0].length===1&&i.length!==1?t.transpose(i):i,v=[],h=0,g=l.length,w=l[0].length,y,$;h<g;h++){for(v[h]=[],y=0,$=0;$<w;$++)y+=l[h][$]*s[h][$];v[h]=y}return v.length===1?v[0]:v},pow:function(u,i){return t.map(u,function(l){return a.pow(l,i)})},exp:function(u){return t.map(u,function(i){return a.exp(i)})},log:function(u){return t.map(u,function(i){return a.log(i)})},abs:function(u){return t.map(u,function(i){return a.abs(i)})},norm:function(u,i){var l=0,s=0;for(isNaN(i)&&(i=2),p(u[0])&&(u=u[0]);s<u.length;s++)l+=a.pow(a.abs(u[s]),i);return a.pow(l,1/i)},angle:function(u,i){return a.acos(t.dot(u,i)/(t.norm(u)*t.norm(i)))},aug:function(u,i){var l=[],s;for(s=0;s<u.length;s++)l.push(u[s].slice());for(s=0;s<l.length;s++)o.apply(l[s],i[s]);return l},inv:function(u){for(var i=u.length,l=u[0].length,s=t.identity(i,l),v=t.gauss_jordan(u,s),h=[],g=0,w;g<i;g++)for(h[g]=[],w=l;w<v[0].length;w++)h[g][w-l]=v[g][w];return h},det:function f(u){if(u.length===2)return u[0][0]*u[1][1]-u[0][1]*u[1][0];for(var i=0,l=0;l<u.length;l++){for(var s=[],v=1;v<u.length;v++){s[v-1]=[];for(var h=0;h<u.length;h++)h<l?s[v-1][h]=u[v][h]:h>l&&(s[v-1][h-1]=u[v][h])}var g=l%2?-1:1;i+=f(s)*u[0][l]*g}return i},gauss_elimination:function(u,i){var l=0,s=0,v=u.length,h=u[0].length,g=1,w=0,y=[],$,m,N,x;for(u=t.aug(u,i),$=u[0].length,l=0;l<v;l++){for(m=u[l][l],s=l,x=l+1;x<h;x++)m<a.abs(u[x][l])&&(m=u[x][l],s=x);if(s!=l)for(x=0;x<$;x++)N=u[l][x],u[l][x]=u[s][x],u[s][x]=N;for(s=l+1;s<v;s++)for(g=u[s][l]/u[l][l],x=l;x<$;x++)u[s][x]=u[s][x]-g*u[l][x]}for(l=v-1;l>=0;l--){for(w=0,s=l+1;s<=v-1;s++)w=w+y[s]*u[l][s];y[l]=(u[l][$-1]-w)/u[l][l]}return y},gauss_jordan:function(u,i){var l=t.aug(u,i),s=l.length,v=l[0].length,h=0,g,w,y;for(w=0;w<s;w++){var $=w;for(y=w+1;y<s;y++)a.abs(l[y][w])>a.abs(l[$][w])&&($=y);var m=l[w];for(l[w]=l[$],l[$]=m,y=w+1;y<s;y++)for(h=l[y][w]/l[w][w],g=w;g<v;g++)l[y][g]-=l[w][g]*h}for(w=s-1;w>=0;w--){for(h=l[w][w],y=0;y<w;y++)for(g=v-1;g>w-1;g--)l[y][g]-=l[w][g]*l[y][w]/h;for(l[w][w]/=h,g=s;g<v;g++)l[w][g]/=h}return l},triaUpSolve:function(u,i){var l=u[0].length,s=t.zeros(1,l)[0],v,h=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),h=!0),t.arange(l-1,-1,-1).forEach(function(g){v=t.arange(g+1,l).map(function(w){return s[w]*u[g][w]}),s[g]=(i[g]-t.sum(v))/u[g][g]}),h?s.map(function(g){return[g]}):s},triaLowSolve:function(u,i){var l=u[0].length,s=t.zeros(1,l)[0],v,h=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),h=!0),t.arange(l).forEach(function(g){v=t.arange(g).map(function(w){return u[g][w]*s[w]}),s[g]=(i[g]-t.sum(v))/u[g][g]}),h?s.map(function(g){return[g]}):s},lu:function(u){var i=u.length,l=t.identity(i),s=t.zeros(u.length,u[0].length),v;return t.arange(i).forEach(function(h){s[0][h]=u[0][h]}),t.arange(1,i).forEach(function(h){t.arange(h).forEach(function(g){v=t.arange(g).map(function(w){return l[h][w]*s[w][g]}),l[h][g]=(u[h][g]-t.sum(v))/s[g][g]}),t.arange(h,i).forEach(function(g){v=t.arange(h).map(function(w){return l[h][w]*s[w][g]}),s[h][g]=u[v.length][g]-t.sum(v)})}),[l,s]},cholesky:function(u){var i=u.length,l=t.zeros(u.length,u[0].length),s;return t.arange(i).forEach(function(v){s=t.arange(v).map(function(h){return a.pow(l[v][h],2)}),l[v][v]=a.sqrt(u[v][v]-t.sum(s)),t.arange(v+1,i).forEach(function(h){s=t.arange(v).map(function(g){return l[v][g]*l[h][g]}),l[h][v]=(u[v][h]-t.sum(s))/l[v][v]})}),l},gauss_jacobi:function(u,i,l,s){for(var v=0,h=0,g=u.length,w=[],y=[],$=[],m,N,x,_;v<g;v++)for(w[v]=[],y[v]=[],$[v]=[],h=0;h<g;h++)v>h?(w[v][h]=u[v][h],y[v][h]=$[v][h]=0):v<h?(y[v][h]=u[v][h],w[v][h]=$[v][h]=0):($[v][h]=u[v][h],w[v][h]=y[v][h]=0);for(x=t.multiply(t.multiply(t.inv($),t.add(w,y)),-1),N=t.multiply(t.inv($),i),m=l,_=t.add(t.multiply(x,l),N),v=2;a.abs(t.norm(t.subtract(_,m)))>s;)m=_,_=t.add(t.multiply(x,m),N),v++;return _},gauss_seidel:function(u,i,l,s){for(var v=0,h=u.length,g=[],w=[],y=[],$,m,N,x,_;v<h;v++)for(g[v]=[],w[v]=[],y[v]=[],$=0;$<h;$++)v>$?(g[v][$]=u[v][$],w[v][$]=y[v][$]=0):v<$?(w[v][$]=u[v][$],g[v][$]=y[v][$]=0):(y[v][$]=u[v][$],g[v][$]=w[v][$]=0);for(x=t.multiply(t.multiply(t.inv(t.add(y,g)),w),-1),N=t.multiply(t.inv(t.add(y,g)),i),m=l,_=t.add(t.multiply(x,l),N),v=2;a.abs(t.norm(t.subtract(_,m)))>s;)m=_,_=t.add(t.multiply(x,m),N),v=v+1;return _},SOR:function(u,i,l,s,v){for(var h=0,g=u.length,w=[],y=[],$=[],m,N,x,_,I;h<g;h++)for(w[h]=[],y[h]=[],$[h]=[],m=0;m<g;m++)h>m?(w[h][m]=u[h][m],y[h][m]=$[h][m]=0):h<m?(y[h][m]=u[h][m],w[h][m]=$[h][m]=0):($[h][m]=u[h][m],w[h][m]=y[h][m]=0);for(_=t.multiply(t.inv(t.add($,t.multiply(w,v))),t.subtract(t.multiply($,1-v),t.multiply(y,v))),x=t.multiply(t.multiply(t.inv(t.add($,t.multiply(w,v))),i),v),N=l,I=t.add(t.multiply(_,l),x),h=2;a.abs(t.norm(t.subtract(I,N)))>s;)N=I,I=t.add(t.multiply(_,N),x),h++;return I},householder:function(u){for(var i=u.length,l=u[0].length,s=0,v=[],h=[],g,w,y,$,m;s<i-1;s++){for(g=0,$=s+1;$<l;$++)g+=u[$][s]*u[$][s];for(m=u[s+1][s]>0?-1:1,g=m*a.sqrt(g),w=a.sqrt((g*g-u[s+1][s]*g)/2),v=t.zeros(i,1),v[s+1][0]=(u[s+1][s]-g)/(2*w),y=s+2;y<i;y++)v[y][0]=u[y][s]/(2*w);h=t.subtract(t.identity(i,l),t.multiply(t.multiply(v,t.transpose(v)),2)),u=t.multiply(h,t.multiply(u,h))}return u},QR:function(){var f=t.sum,u=t.arange;function i(l){var s=l.length,v=l[0].length,h=t.zeros(v,v);l=t.copy(l);var g,w,y;for(w=0;w<v;w++){for(h[w][w]=a.sqrt(f(u(s).map(function($){return l[$][w]*l[$][w]}))),g=0;g<s;g++)l[g][w]=l[g][w]/h[w][w];for(y=w+1;y<v;y++)for(h[w][y]=f(u(s).map(function($){return l[$][w]*l[$][y]})),g=0;g<s;g++)l[g][y]=l[g][y]-l[g][w]*h[w][y]}return[l,h]}return i}(),lstsq:function(){function f(i){i=t.copy(i);var l=i.length,s=t.identity(l);return t.arange(l-1,-1,-1).forEach(function(v){t.sliceAssign(s,{row:v},t.divide(t.slice(s,{row:v}),i[v][v])),t.sliceAssign(i,{row:v},t.divide(t.slice(i,{row:v}),i[v][v])),t.arange(v).forEach(function(h){var g=t.multiply(i[h][v],-1),w=t.slice(i,{row:h}),y=t.multiply(t.slice(i,{row:v}),g);t.sliceAssign(i,{row:h},t.add(w,y));var $=t.slice(s,{row:h}),m=t.multiply(t.slice(s,{row:v}),g);t.sliceAssign(s,{row:h},t.add($,m))})}),s}function u(i,l){var s=!1;l[0].length===void 0&&(l=l.map(function(_){return[_]}),s=!0);var v=t.QR(i),h=v[0],g=v[1],w=i[0].length,y=t.slice(h,{col:{end:w}}),$=t.slice(g,{row:{end:w}}),m=f($),N=t.transpose(y);N[0].length===void 0&&(N=[N]);var x=t.multiply(t.multiply(m,N),l);return x.length===void 0&&(x=[[x]]),s?x.map(function(_){return _[0]}):x}return u}(),jacobi:function(u){for(var i=1,l=u.length,s=t.identity(l,l),v=[],h,g,w,y,$,m,N,x;i===1;){for(m=u[0][1],y=0,$=1,g=0;g<l;g++)for(w=0;w<l;w++)g!=w&&m<a.abs(u[g][w])&&(m=a.abs(u[g][w]),y=g,$=w);for(u[y][y]===u[$][$]?N=u[y][$]>0?a.PI/4:-a.PI/4:N=a.atan(2*u[y][$]/(u[y][y]-u[$][$]))/2,x=t.identity(l,l),x[y][y]=a.cos(N),x[y][$]=-a.sin(N),x[$][y]=a.sin(N),x[$][$]=a.cos(N),s=t.multiply(s,x),h=t.multiply(t.multiply(t.inv(x),u),x),u=h,i=0,g=1;g<l;g++)for(w=1;w<l;w++)g!=w&&a.abs(u[g][w])>.001&&(i=1)}for(g=0;g<l;g++)v.push(u[g][g]);return[s,v]},rungekutta:function(u,i,l,s,v,h){var g,w,y,$,m;if(h===2)for(;s<=l;)g=i*u(s,v),w=i*u(s+i,v+g),y=v+(g+w)/2,v=y,s=s+i;if(h===4)for(;s<=l;)g=i*u(s,v),w=i*u(s+i/2,v+g/2),$=i*u(s+i/2,v+w/2),m=i*u(s+i,v+$),y=v+(g+2*w+2*$+m)/6,v=y,s=s+i;return v},romberg:function(u,i,l,s){for(var v=0,h=(l-i)/2,g=[],w=[],y=[],$,m,N,x,_;v<s/2;){for(_=u(i),N=i,x=0;N<=l;N=N+h,x++)g[x]=N;for($=g.length,N=1;N<$-1;N++)_+=(N%2!==0?4:2)*u(g[N]);_=h/3*(_+u(l)),y[v]=_,h/=2,v++}for(m=y.length,$=1;m!==1;){for(N=0;N<m-1;N++)w[N]=(a.pow(4,$)*y[N+1]-y[N])/(a.pow(4,$)-1);m=w.length,y=w,w=[],$++}return y},richardson:function(u,i,l,s){function v(I,E){for(var j=0,O=I.length,R;j<O;j++)I[j]===E&&(R=j);return R}for(var h=a.abs(l-u[v(u,l)+1]),g=0,w=[],y=[],$,m,N,x,_;s>=h;)$=v(u,l+s),m=v(u,l),w[g]=(i[$]-2*i[m]+i[2*m-$])/(s*s),s/=2,g++;for(x=w.length,N=1;x!=1;){for(_=0;_<x-1;_++)y[_]=(a.pow(4,N)*w[_+1]-w[_])/(a.pow(4,N)-1);x=y.length,w=y,y=[],N++}return w},simpson:function(u,i,l,s){for(var v=(l-i)/s,h=u(i),g=[],w=i,y=0,$=1,m;w<=l;w=w+v,y++)g[y]=w;for(m=g.length;$<m-1;$++)h+=($%2!==0?4:2)*u(g[$]);return v/3*(h+u(l))},hermite:function(u,i,l,s){for(var v=u.length,h=0,g=0,w=[],y=[],$=[],m=[],N;g<v;g++){for(w[g]=1,N=0;N<v;N++)g!=N&&(w[g]*=(s-u[N])/(u[g]-u[N]));for(y[g]=0,N=0;N<v;N++)g!=N&&(y[g]+=1/(u[g]-u[N]));$[g]=(1-2*(s-u[g])*y[g])*(w[g]*w[g]),m[g]=(s-u[g])*(w[g]*w[g]),h+=$[g]*i[g]+m[g]*l[g]}return h},lagrange:function(u,i,l){for(var s=0,v=0,h,g,w=u.length;v<w;v++){for(g=i[v],h=0;h<w;h++)v!=h&&(g*=(l-u[h])/(u[v]-u[h]));s+=g}return s},cubic_spline:function(u,i,l){for(var s=u.length,v=0,h,g=[],w=[],y=[],$=[],m=[],N=[],x=[];v<s-1;v++)m[v]=u[v+1]-u[v];for(y[0]=0,v=1;v<s-1;v++)y[v]=3/m[v]*(i[v+1]-i[v])-3/m[v-1]*(i[v]-i[v-1]);for(v=1;v<s-1;v++)g[v]=[],w[v]=[],g[v][v-1]=m[v-1],g[v][v]=2*(m[v-1]+m[v]),g[v][v+1]=m[v],w[v][0]=y[v];for($=t.multiply(t.inv(g),w),h=0;h<s-1;h++)N[h]=(i[h+1]-i[h])/m[h]-m[h]*($[h+1][0]+2*$[h][0])/3,x[h]=($[h+1][0]-$[h][0])/(3*m[h]);for(h=0;h<s&&!(u[h]>l);h++);return h-=1,i[h]+(l-u[h])*N[h]+t.sq(l-u[h])*$[h]+(l-u[h])*t.sq(l-u[h])*x[h]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(u){var i=u.length,l=u[0].length,s=0,v,h,g=[],w=[],y=[],$=[],m=[],N=[],x=[],_=[],I=[],E=[];for(s=0;s<i;s++)g[s]=t.sum(u[s])/l;for(s=0;s<l;s++)for(x[s]=[],v=0;v<i;v++)x[s][v]=u[v][s]-g[v];for(x=t.transpose(x),s=0;s<i;s++)for(_[s]=[],v=0;v<i;v++)_[s][v]=t.dot([x[s]],[x[v]])/(l-1);for(y=t.jacobi(_),I=y[0],w=y[1],E=t.transpose(I),s=0;s<w.length;s++)for(v=s;v<w.length;v++)w[s]<w[v]&&(h=w[s],w[s]=w[v],w[v]=h,$=E[s],E[s]=E[v],E[v]=$);for(N=t.transpose(x),s=0;s<i;s++)for(m[s]=[],v=0;v<N.length;v++)m[s][v]=t.dot([E[s]],[N[v]]);return[u,w,E,m]}}),function(f){for(var u=0;u<f.length;u++)(function(i){t.fn[i]=function(l,s){var v=this;return s?(setTimeout(function(){s.call(v,t.fn[i].call(v,l))},15),this):typeof t[i](this,l)=="number"?t[i](this,l):t(t[i](this,l))}})(f[u])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(n,Math),function(t,a){var o=[].slice,c=t.utils.isNumber,p=t.utils.isArray;t.extend({zscore:function(){var i=o.call(arguments);return c(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=o.call(arguments),l;return p(i[1])?(l=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-a.abs(l),0,1):t.normal.cdf(-a.abs(l),0,1)*2):i.length>2?(l=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-a.abs(l),0,1):t.normal.cdf(-a.abs(l),0,1)*2):(l=i[0],i[1]===1?t.normal.cdf(-a.abs(l),0,1):t.normal.cdf(-a.abs(l),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,l){return(i-this.mean())/this.stdev(l)},ztest:function(i,l,s){var v=a.abs(this.zscore(i,s));return l===1?t.normal.cdf(-v,0,1):t.normal.cdf(-v,0,1)*2}}),t.extend({tscore:function(){var i=o.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/a.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/a.sqrt(i[1].length))},ttest:function(){var i=o.call(arguments),l;return i.length===5?(l=a.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-l,i[3]-1):t.studentt.cdf(-l,i[3]-1)*2):c(i[1])?(l=a.abs(i[0]),i[2]==1?t.studentt.cdf(-l,i[1]-1):t.studentt.cdf(-l,i[1]-1)*2):(l=a.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-l,i[1].length-1):t.studentt.cdf(-l,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/a.sqrt(this.cols()))},ttest:function(i,l){return l===1?1-t.studentt.cdf(a.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-a.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=o.call(arguments),l,s,v,h,g,w,y,$;if(i.length===1){for(g=new Array(i[0].length),y=0;y<i[0].length;y++)g[y]=i[0][y];i=g}for(s=new Array,y=0;y<i.length;y++)s=s.concat(i[y]);for(v=t.mean(s),l=0,y=0;y<i.length;y++)l=l+i[y].length*a.pow(t.mean(i[y])-v,2);for(l/=i.length-1,w=0,y=0;y<i.length;y++)for(h=t.mean(i[y]),$=0;$<i[y].length;$++)w+=a.pow(i[y][$]-h,2);return w/=s.length-i.length,l/w},anovaftest:function(){var i=o.call(arguments),l,s,v,h;if(c(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var g=t.anovafscore(i);for(l=i.length-1,v=0,h=0;h<i.length;h++)v=v+i[h].length;return s=v-l-1,1-t.centralF.cdf(g,l,s)},ftest:function(i,l,s){return 1-t.centralF.cdf(i,l,s)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,l;for(l=0;l<this.length;l++)i=i+this[l].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=o.call(arguments),l,s,v,h,g;return c(i[0])?(l=i[0],s=i[1],v=i[2],h=i[3],g=i[4]):(l=t.mean(i[0]),s=t.mean(i[1]),v=i[0].length,h=i[1].length,g=i[2]),a.abs(l-s)/(g*a.sqrt((1/v+1/h)/2))},qtest:function(){var i=o.call(arguments),l;i.length===3?(l=i[0],i=i.slice(1)):i.length===7?(l=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(l=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var s=i[0],v=i[1];return 1-t.tukey.cdf(l,v,s-v)},tukeyhsd:function(i){for(var l=t.pooledstdev(i),s=i.map(function($){return t.mean($)}),v=i.reduce(function($,m){return $+m.length},0),h=[],g=0;g<i.length;++g)for(var w=g+1;w<i.length;++w){var y=t.qtest(s[g],s[w],i[g].length,i[w].length,l,v,i.length);h.push([[g,w],y])}return h}}),t.extend({normalci:function(){var i=o.call(arguments),l=new Array(2),s;return i.length===4?s=a.abs(t.normal.inv(i[1]/2,0,1)*i[2]/a.sqrt(i[3])):s=a.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/a.sqrt(i[2].length)),l[0]=i[0]-s,l[1]=i[0]+s,l},tci:function(){var i=o.call(arguments),l=new Array(2),s;return i.length===4?s=a.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/a.sqrt(i[3])):s=a.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/a.sqrt(i[2].length)),l[0]=i[0]-s,l[1]=i[0]+s,l},significant:function(i,l){return i<l}}),t.extend(t.fn,{normalci:function(i,l){return t.normalci(i,l,this.toArray())},tci:function(i,l){return t.tci(i,l,this.toArray())}});function f(u,i,l,s){if(u>1||l>1||u<=0||l<=0)throw new Error("Proportions should be greater than 0 and less than 1");var v=(u*i+l*s)/(i+s),h=a.sqrt(v*(1-v)*(1/i+1/s));return(u-l)/h}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,l,s,v){var h=f(i,l,s,v);return t.ztest(h,1)},twoSidedDifferenceOfProportions:function(i,l,s,v){var h=f(i,l,s,v);return t.ztest(h,2)}})}(n,Math),n.models=function(){function t(f){var u=f[0].length,i=n.arange(u).map(function(l){var s=n.arange(u).filter(function(v){return v!==l});return a(n.col(f,l).map(function(v){return v[0]}),n.col(f,s))});return i}function a(f,u){var i=f.length,l=u[0].length-1,s=i-l-1,v=n.lstsq(u,f),h=n.multiply(u,v.map(function(x){return[x]})).map(function(x){return x[0]}),g=n.subtract(f,h),w=n.mean(f),y=n.sum(h.map(function(x){return Math.pow(x-w,2)})),$=n.sum(f.map(function(x,_){return Math.pow(x-h[_],2)})),m=y+$,N=y/m;return{exog:u,endog:f,nobs:i,df_model:l,df_resid:s,coef:v,predict:h,resid:g,ybar:w,SST:m,SSE:y,SSR:$,R2:N}}function o(f){var u=t(f.exog),i=Math.sqrt(f.SSR/f.df_resid),l=u.map(function(w){var y=w.SST,$=w.R2;return i/Math.sqrt(y*(1-$))}),s=f.coef.map(function(w,y){return(w-0)/l[y]}),v=s.map(function(w){var y=n.studentt.cdf(w,f.df_resid);return(y>.5?1-y:y)*2}),h=n.studentt.inv(.975,f.df_resid),g=f.coef.map(function(w,y){var $=h*l[y];return[w-$,w+$]});return{se:l,t:s,p:v,sigmaHat:i,interval95:g}}function c(f){var u=f.R2/f.df_model/((1-f.R2)/f.df_resid),i=function(s,v,h){return n.beta.cdf(s/(h/v+s),v/2,h/2)},l=1-i(u,f.df_model,f.df_resid);return{F_statistic:u,pvalue:l}}function p(f,u){var i=a(f,u),l=o(i),s=c(i),v=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=l,i.f=s,i.adjust_R2=v,i}return{ols:p}}(),n.extend({buildxmatrix:function(){for(var a=new Array(arguments.length),o=0;o<arguments.length;o++){var c=[1];a[o]=c.concat(arguments[o])}return n(a)},builddxmatrix:function(){for(var a=new Array(arguments[0].length),o=0;o<arguments[0].length;o++){var c=[1];a[o]=c.concat(arguments[0][o])}return n(a)},buildjxmatrix:function(a){for(var o=new Array(a.length),c=0;c<a.length;c++)o[c]=a[c];return n.builddxmatrix(o)},buildymatrix:function(a){return n(a).transpose()},buildjymatrix:function(a){return a.transpose()},matrixmult:function(a,o){var c,p,f,u,i;if(a.cols()==o.rows()){if(o.rows()>1){for(u=[],c=0;c<a.rows();c++)for(u[c]=[],p=0;p<o.cols();p++){for(i=0,f=0;f<a.cols();f++)i+=a.toArray()[c][f]*o.toArray()[f][p];u[c][p]=i}return n(u)}for(u=[],c=0;c<a.rows();c++)for(u[c]=[],p=0;p<o.cols();p++){for(i=0,f=0;f<a.cols();f++)i+=a.toArray()[c][f]*o.toArray()[p];u[c][p]=i}return n(u)}},regress:function(a,o){var c=n.xtranspxinv(a),p=a.transpose(),f=n.matrixmult(n(c),p);return n.matrixmult(f,o)},regresst:function(a,o,c){var p=n.regress(a,o),f={};f.anova={};var u=n.jMatYBar(a,p);f.yBar=u;var i=o.mean();f.anova.residuals=n.residuals(o,u),f.anova.ssr=n.ssr(u,i),f.anova.msr=f.anova.ssr/(a[0].length-1),f.anova.sse=n.sse(o,u),f.anova.mse=f.anova.sse/(o.length-(a[0].length-1)-1),f.anova.sst=n.sst(o,i),f.anova.mst=f.anova.sst/(o.length-1),f.anova.r2=1-f.anova.sse/f.anova.sst,f.anova.r2<0&&(f.anova.r2=0),f.anova.fratio=f.anova.msr/f.anova.mse,f.anova.pvalue=n.anovaftest(f.anova.fratio,a[0].length-1,o.length-(a[0].length-1)-1),f.anova.rmse=Math.sqrt(f.anova.mse),f.anova.r2adj=1-f.anova.mse/f.anova.mst,f.anova.r2adj<0&&(f.anova.r2adj=0),f.stats=new Array(a[0].length);for(var l=n.xtranspxinv(a),s,v,h,g=0;g<p.length;g++)s=Math.sqrt(f.anova.mse*Math.abs(l[g][g])),v=Math.abs(p[g]/s),h=n.ttest(v,o.length-a[0].length-1,c),f.stats[g]=[p[g],s,v,h];return f.regress=p,f},xtranspx:function(a){return n.matrixmult(a.transpose(),a)},xtranspxinv:function(a){var o=n.matrixmult(a.transpose(),a),c=n.inv(o);return c},jMatYBar:function(a,o){var c=n.matrixmult(a,o);return new n(c)},residuals:function(a,o){return n.matrixsubtract(a,o)},ssr:function(a,o){for(var c=0,p=0;p<a.length;p++)c+=Math.pow(a[p]-o,2);return c},sse:function(a,o){for(var c=0,p=0;p<a.length;p++)c+=Math.pow(a[p]-o[p],2);return c},sst:function(a,o){for(var c=0,p=0;p<a.length;p++)c+=Math.pow(a[p]-o,2);return c},matrixsubtract:function(a,o){for(var c=new Array(a.length),p=0;p<a.length;p++){c[p]=new Array(a[p].length);for(var f=0;f<a[p].length;f++)c[p][f]=a[p][f]-o[p][f]}return n(c)}}),n.jStat=n,n})})(z4);var Te=z4.exports;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ey=typeof Object.defineProperty=="function"?Object.defineProperty:null,by=Ey;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Py=by;function Ay(){try{return Py({},"x",{}),!0}catch{return!1}}var Oy=Ay;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ky=Object.defineProperty,jy=ky;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cy(e){return typeof e=="number"}var D4=Cy;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ly(e){return e[0]==="-"}function G1(e){var r="",n;for(n=0;n<e;n++)r+="0";return r}function Fy(e,r,n){var t=!1,a=r-e.length;return a<0||(Ly(e)&&(t=!0,e=e.substr(1)),e=n?e+G1(a):G1(a)+e,t&&(e="-"+e)),e}var G4=Fy;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sy=D4,B1=G4,Ty=String.prototype.toLowerCase,U1=String.prototype.toUpperCase;function Hy(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;case"d":case"i":case"u":default:r=10;break}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!Sy(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&(e.specifier==="u"||r!==10)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=B1(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),!t&&!e.precision?n="":e.precision&&(n=B1(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),r===16&&(e.alternate&&(n="0x"+n),n=e.specifier===U1.call(e.specifier)?U1.call(n):Ty.call(n)),r===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var Ry=Hy;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zy(e){return typeof e=="string"}var Dy=zy;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gy=D4,By=Math.abs,Uy=String.prototype.toLowerCase,W1=String.prototype.toUpperCase,Jn=String.prototype.replace,Wy=/e\+(\d)$/,qy=/e-(\d)$/,Vy=/^(\d+)$/,My=/^(\d+)e/,Xy=/\.0$/,Ky=/\.0*e/,Qy=/(\..*[^0])0*e/;function Yy(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!Gy(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":By(t)<1e-4?(r=e.precision,r>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=Jn.call(n,Qy,"$1e"),n=Jn.call(n,Ky,"e"),n=Jn.call(n,Xy,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=Jn.call(n,Wy,"e+0$1"),n=Jn.call(n,qy,"e-0$1"),e.alternate&&(n=Jn.call(n,Vy,"$1."),n=Jn.call(n,My,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===W1.call(e.specifier)?W1.call(n):Uy.call(n),n}var Zy=Yy;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function q1(e){var r="",n;for(n=0;n<e;n++)r+=" ";return r}function Jy(e,r,n){var t=r-e.length;return t<0||(e=n?e+q1(t):q1(t)+e),e}var e$=Jy;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r$=Ry,n$=Dy,t$=Zy,a$=e$,i$=G4,l$=String.fromCharCode,o$=Array.isArray;function nl(e){return e!==e}function s$(e){var r={};return r.specifier=e.specifier,r.precision=e.precision===void 0?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function u$(e){var r,n,t,a,o,c,p,f,u;if(!o$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,f=0;f<e.length;f++)if(t=e[f],n$(t))c+=t;else{if(r=t.precision!==void 0,t=s$(t),!t.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),n=t.flags,u=0;u<n.length;u++)switch(a=n.charAt(u),a){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(t.width==="*"){if(t.width=parseInt(arguments[p],10),p+=1,nl(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&t.precision==="*"){if(t.precision=parseInt(arguments[p],10),p+=1,nl(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=r$(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!nl(t.arg)){if(o=parseInt(t.arg,10),o<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=nl(o)?String(t.arg):l$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=t$(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i$(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=a$(t.arg,t.width,t.padRight)),c+=t.arg||"",p+=1}return c}var c$=u$;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f$=c$,v$=f$;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function d$(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(r.precision="1"),r}function p$(e){var r,n,t,a;for(n=[],a=0,t=tl.exec(e);t;)r=e.slice(a,tl.lastIndex-t[0].length),r.length&&n.push(r),n.push(d$(t)),a=tl.lastIndex,t=tl.exec(e);return r=e.slice(a),r.length&&n.push(r),n}var m$=p$;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h$=m$,g$=h$;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function y$(e){return typeof e=="string"}var $$=y$;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w$=v$,N$=g$,_$=$$;function B4(e){var r,n;if(!_$(e))throw new TypeError(B4("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[N$(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return w$.apply(null,r)}var x$=B4;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I$=x$,Qn=I$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1=Qn,la=Object.prototype,M1=la.toString,X1=la.__defineGetter__,K1=la.__defineSetter__,E$=la.__lookupGetter__,b$=la.__lookupSetter__;function P$(e,r,n){var t,a,o,c;if(typeof e!="object"||e===null||M1.call(e)==="[object Array]")throw new TypeError(V1("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||M1.call(n)==="[object Array]")throw new TypeError(V1("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(a="value"in n,a&&(E$.call(e,r)||b$.call(e,r)?(t=e.__proto__,e.__proto__=la,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),o="get"in n,c="set"in n,a&&(o||c))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&X1&&X1.call(e,r,n.get),c&&K1&&K1.call(e,r,n.set),e}var A$=P$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O$=Oy,k$=jy,j$=A$,zc;O$()?zc=k$:zc=j$;var U4=zc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C$=U4;function L$(e,r,n){C$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var F$=L$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S$=F$,q=S$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function T$(e){return typeof e=="number"}var W4=T$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function H$(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var R$=H$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z$=R$,D$=z$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G$=D$,B$=G$();function U$(){return B$&&typeof Symbol.toStringTag=="symbol"}var W$=U$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q$=W$,gs=q$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V$=Object.prototype.toString,q4=V$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M$=q4;function X$(e){return M$.call(e)}var K$=X$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q$=Object.prototype.hasOwnProperty;function Y$(e,r){return e==null?!1:Q$.call(e,r)}var Z$=Y$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J$=Z$,ys=J$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ew=typeof Symbol=="function"?Symbol:void 0,rw=ew;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nw=rw,tw=nw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1=tw,aw=typeof Q1=="function"?Q1.toStringTag:"",iw=aw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lw=ys,Ia=iw,n0=q4;function ow(e){var r,n,t;if(e==null)return n0.call(e);n=e[Ia],r=lw(e,Ia);try{e[Ia]=void 0}catch{return n0.call(e)}return t=n0.call(e),r?e[Ia]=n:delete e[Ia],t}var sw=ow;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uw=gs,cw=K$,fw=sw,Dc;uw()?Dc=fw:Dc=cw;var Nr=Dc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vw=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dw=vw,tv=dw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pw=tv,mw=pw.prototype.toString,hw=mw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gw=hw;function yw(e){try{return gw.call(e),!0}catch{return!1}}var $w=yw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ww=gs,Nw=Nr,_w=tv,xw=$w,Iw=ww();function Ew(e){return typeof e=="object"?e instanceof _w?!0:Iw?xw(e):Nw(e)==="[object Number]":!1}var V4=Ew;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bw=W4,Pw=V4;function Aw(e){return bw(e)||Pw(e)}var Ow=Aw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M4=q,av=Ow,kw=W4,jw=V4;M4(av,"isPrimitive",kw);M4(av,"isObject",jw);var $t=av;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cw=Number.POSITIVE_INFINITY,G=Cw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lw=tv,Fw=Lw.NEGATIVE_INFINITY,Z=Fw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sw=Math.floor,Tw=Sw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hw=Tw,Be=Hw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rw=Be;function zw(e){return Rw(e)===e}var Dw=zw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gw=Dw,xe=Gw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bw=G,Uw=Z,Ww=xe;function qw(e){return e<Bw&&e>Uw&&Ww(e)}var X4=qw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vw=$t.isPrimitive,Mw=X4;function Xw(e){return Vw(e)&&Mw(e)}var K4=Xw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kw=$t.isObject,Qw=X4;function Yw(e){return Kw(e)&&Qw(e.valueOf())}var Q4=Yw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zw=K4,Jw=Q4;function eN(e){return Zw(e)||Jw(e)}var rN=eN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y4=q,iv=rN,nN=K4,tN=Q4;Y4(iv,"isPrimitive",nN);Y4(iv,"isObject",tN);var $s=iv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aN=$s.isPrimitive;function iN(e){return aN(e)&&e>=0}var Z4=iN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lN=$s.isObject;function oN(e){return lN(e)&&e.valueOf()>=0}var J4=oN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sN=Z4,uN=J4;function cN(e){return sN(e)||uN(e)}var fN=cN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e5=q,lv=fN,vN=Z4,dN=J4;e5(lv,"isPrimitive",vN);e5(lv,"isObject",dN);var pN=lv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mN=9007199254740991,hN=mN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gN=pN.isPrimitive,yN=hN;function $N(e){return e!==null&&typeof e=="object"&&gN(e.length)&&e.length<=yN&&typeof e.BYTES_PER_ELEMENT=="number"&&typeof e.byteOffset=="number"&&typeof e.byteLength=="number"}var wN=$N;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NN=wN,_N=NN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xN=4294967295,IN=xN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EN=xe,bN=IN;function PN(e){return e!=null&&typeof e!="function"&&typeof e.length=="number"&&EN(e.length)&&e.length>=0&&e.length<=bN}var AN=PN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ON=AN,kN=ON;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jN=kN,CN=Qn;function LN(e){if(typeof e!="function")throw new TypeError(CN("invalid argument. Must provide a function. Value: `%s`.",e));return r;function r(n){var t,a;if(!jN(n)||(t=n.length,t===0))return!1;for(a=0;a<t;a++)if(e(n[a])===!1)return!1;return!0}}var FN=LN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SN=FN,TN=SN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r5=q,ov=TN,sv=$t,HN=ov(sv.isPrimitive),RN=ov(sv.isObject),uv=ov(sv);r5(uv,"primitives",HN);r5(uv,"objects",RN);var zN=uv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DN=U4;function GN(e,r,n){DN(e,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}var BN=GN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UN=BN,WN=UN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qN=/./,VN=qN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MN(e){return typeof e=="boolean"}var n5=MN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XN=Boolean,KN=XN;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QN=KN,YN=QN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZN=Boolean.prototype.toString,JN=ZN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e_=JN;function r_(e){try{return e_.call(e),!0}catch{return!1}}var n_=r_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t_=gs,a_=Nr,i_=YN,l_=n_,o_=t_();function s_(e){return typeof e=="object"?e instanceof i_?!0:o_?l_(e):a_(e)==="[object Boolean]":!1}var t5=s_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u_=n5,c_=t5;function f_(e){return u_(e)||c_(e)}var v_=f_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a5=q,cv=v_,d_=n5,p_=t5;a5(cv,"isPrimitive",d_);a5(cv,"isObject",p_);var fv=cv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function m_(){return new Function("return this;")()}var h_=m_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g_=typeof self=="object"?self:null,y_=g_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $_=typeof window=="object"?window:null,w_=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N_=typeof globalThis=="object"?globalThis:null,__=N_;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x_=fv.isPrimitive,I_=Qn,E_=h_,Y1=y_,Z1=w_,J1=__;function b_(e){if(arguments.length){if(!x_(e))throw new TypeError(I_("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return E_()}if(J1)return J1;if(Y1)return Y1;if(Z1)return Z1;throw new Error("unexpected error. Unable to resolve global object.")}var P_=b_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A_=P_,ed=A_(),O_=ed.document&&ed.document.childNodes,k_=O_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j_=Int8Array,C_=j_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L_=VN,F_=k_,S_=C_;function T_(){return typeof L_=="function"||typeof S_=="object"||typeof F_=="function"}var H_=T_;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function R_(){return/^\s*function\s*([^(]*)/i}var i5=R_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z_=i5,D_=z_(),G_=D_;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B_=q,l5=i5,U_=G_;B_(l5,"REGEXP",U_);var W_=l5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q_=Nr,Gc;function V_(e){return q_(e)==="[object Array]"}Array.isArray?Gc=Array.isArray:Gc=V_;var M_=Gc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X_=M_,o5=X_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K_=o5,Q_=Qn;function Y_(e){if(typeof e!="function")throw new TypeError(Q_("invalid argument. Must provide a function. Value: `%s`.",e));return r;function r(n){var t,a;if(!K_(n)||(t=n.length,t===0))return!1;for(a=0;a<t;a++)if(e(n[a])===!1)return!1;return!0}}var Z_=Y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J_=Z_,ex=J_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rx(e){return e!==null&&typeof e=="object"}var nx=rx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tx=q,ax=ex,vv=nx,ix=ax(vv);tx(vv,"isObjectLikeArray",ix);var lx=vv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ox=lx;function sx(e){return ox(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var ux=sx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cx=ux,fx=cx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vx=Nr,dx=W_.REGEXP,px=fx;function mx(e){var r,n,t;if(n=vx(e).slice(8,-1),(n==="Object"||n==="Error")&&e.constructor){if(t=e.constructor,typeof t.name=="string")return t.name;if(r=dx.exec(t.toString()),r)return r[1]}return px(e)?"Buffer":n}var hx=mx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gx=hx,s5=gx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yx=s5;function $x(e){var r;return e===null?"null":(r=typeof e,r==="object"?yx(e).toLowerCase():r)}var wx=$x;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nx=s5;function _x(e){return Nx(e).toLowerCase()}var xx=_x;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ix=H_,Ex=wx,bx=xx,Px=Ix()?bx:Ex,Ax=Px;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ox=Ax;function kx(e){return Ox(e)==="function"}var jx=kx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cx=jx,dv=Cx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Lx(e){return typeof e=="string"}var u5=Lx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fx=String.prototype.valueOf,Sx=Fx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tx=Sx;function Hx(e){try{return Tx.call(e),!0}catch{return!1}}var Rx=Hx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zx=gs,Dx=Nr,Gx=Rx,Bx=zx();function Ux(e){return typeof e=="object"?e instanceof String?!0:Bx?Gx(e):Dx(e)==="[object String]":!1}var c5=Ux;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wx=u5,qx=c5;function Vx(e){return Wx(e)||qx(e)}var Mx=Vx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f5=q,pv=Mx,Xx=u5,Kx=c5;f5(pv,"isPrimitive",Xx);f5(pv,"isObject",Kx);var v5=pv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qx(e){return e!==e}var Yx=Qx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zx=Yx,L=Zx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jx=$t.isPrimitive,eI=L;function rI(e){return Jx(e)&&eI(e)}var d5=rI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nI=$t.isObject,tI=L;function aI(e){return nI(e)&&tI(e.valueOf())}var p5=aI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iI=d5,lI=p5;function oI(e){return iI(e)||lI(e)}var sI=oI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m5=q,mv=sI,uI=d5,cI=p5;m5(mv,"isPrimitive",uI);m5(mv,"isObject",cI);var h5=mv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fI=G;function vI(e){return e===0&&1/e===fI}var dI=vI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pI=dI,ws=pI;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mI=L,hI=ws;function gI(e,r,n){var t,a,o,c;if(e<=0)return NaN;if(e===1||n===0)return r[0];for(n<0?a=(1-e)*n:a=0,t=r[a],c=1;c<e;c++){if(a+=n,o=r[a],mI(o))return o;(o>t||o===t&&hI(o))&&(t=o)}return t}var yI=gI;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $I=L,wI=ws;function NI(e,r,n,t){var a,o,c,p;if(e<=0)return NaN;if(e===1||n===0)return r[t];for(o=t,a=r[o],p=1;p<e;p++){if(o+=n,c=r[o],$I(c))return c;(c>a||c===a&&wI(c))&&(a=c)}return a}var _I=NI;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xI=q,g5=yI,II=_I;xI(g5,"ndarray",II);var EI=g5;/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bI=EI,PI=bI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AI=G,OI=Z;function kI(e){return e===AI||e===OI}var jI=kI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CI=jI,Xe=CI;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LI(e){return Math.abs(e)}var FI=LI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SI=FI,M=SI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TI=Nr,HI=typeof Uint32Array=="function";function RI(e){return HI&&e instanceof Uint32Array||TI(e)==="[object Uint32Array]"}var zI=RI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DI=zI,GI=DI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BI=4294967295,UI=BI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WI=typeof Uint32Array=="function"?Uint32Array:null,qI=WI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VI=GI,t0=UI,rd=qI;function MI(){var e,r;if(typeof rd!="function")return!1;try{r=[1,3.14,-3.14,t0+1,t0+2],r=new rd(r),e=VI(r)&&r[0]===1&&r[1]===3&&r[2]===t0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var XI=MI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KI=XI,QI=KI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YI=typeof Uint32Array=="function"?Uint32Array:void 0,ZI=YI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function JI(){throw new Error("not implemented")}var eE=JI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rE=QI,nE=ZI,tE=eE,Bc;rE()?Bc=nE:Bc=tE;var oa=Bc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aE=Nr,iE=typeof Float64Array=="function";function lE(e){return iE&&e instanceof Float64Array||aE(e)==="[object Float64Array]"}var oE=lE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sE=oE,uE=sE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cE=typeof Float64Array=="function"?Float64Array:null,fE=cE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vE=uE,nd=fE;function dE(){var e,r;if(typeof nd!="function")return!1;try{r=new nd([1,3.14,-3.14,NaN]),e=vE(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch{e=!1}return e}var pE=dE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mE=pE,hE=mE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gE=typeof Float64Array=="function"?Float64Array:void 0,yE=gE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $E(){throw new Error("not implemented")}var wE=$E;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NE=hE,_E=yE,xE=wE,Uc;NE()?Uc=_E:Uc=xE;var wt=Uc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IE=Nr,EE=typeof Uint8Array=="function";function bE(e){return EE&&e instanceof Uint8Array||IE(e)==="[object Uint8Array]"}var PE=bE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AE=PE,OE=AE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kE=255,jE=kE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CE=typeof Uint8Array=="function"?Uint8Array:null,LE=CE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FE=OE,a0=jE,td=LE;function SE(){var e,r;if(typeof td!="function")return!1;try{r=[1,3.14,-3.14,a0+1,a0+2],r=new td(r),e=FE(r)&&r[0]===1&&r[1]===3&&r[2]===a0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var TE=SE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HE=TE,RE=HE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zE=typeof Uint8Array=="function"?Uint8Array:void 0,DE=zE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function GE(){throw new Error("not implemented")}var BE=GE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UE=RE,WE=DE,qE=BE,Wc;UE()?Wc=WE:Wc=qE;var VE=Wc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ME=Nr,XE=typeof Uint16Array=="function";function KE(e){return XE&&e instanceof Uint16Array||ME(e)==="[object Uint16Array]"}var QE=KE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YE=QE,ZE=YE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JE=65535,eb=JE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rb=typeof Uint16Array=="function"?Uint16Array:null,nb=rb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tb=ZE,i0=eb,ad=nb;function ab(){var e,r;if(typeof ad!="function")return!1;try{r=[1,3.14,-3.14,i0+1,i0+2],r=new ad(r),e=tb(r)&&r[0]===1&&r[1]===3&&r[2]===i0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var ib=ab;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lb=ib,ob=lb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sb=typeof Uint16Array=="function"?Uint16Array:void 0,ub=sb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cb(){throw new Error("not implemented")}var fb=cb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vb=ob,db=ub,pb=fb,qc;vb()?qc=db:qc=pb;var mb=qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hb=VE,gb=mb,yb={uint16:gb,uint8:hb},$b=yb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var id=$b,y5;function wb(){var e,r;return e=new id.uint16(1),e[0]=4660,r=new id.uint8(e.buffer),r[0]===52}y5=wb();var Nb=y5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _b=Nb,sa=_b;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xb=sa,Vc;xb===!0?Vc=1:Vc=0;var Ib=Vc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eb=oa,bb=wt,Pb=Ib,$5=new bb(1),Ab=new Eb($5.buffer);function Ob(e){return $5[0]=e,Ab[Pb]}var kb=Ob;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jb=kb,ee=jb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cb=sa,Mc;Cb===!0?Mc=1:Mc=0;var Lb=Mc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fb=oa,Sb=wt,Tb=Lb,Xc=new Sb(1),Hb=new Fb(Xc.buffer);function Rb(e,r){return Xc[0]=e,Hb[Tb]=r>>>0,Xc[0]}var zb=Rb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Db=zb,je=Db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gb=1023,Ie=Gb;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bb(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var Ub=Bb;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wb(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var qb=Wb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ld=ee,Vb=je,Mb=L,Xb=Ie,Kb=Z,Qb=Ub,Yb=qb,al=.6931471803691238,il=19082149292705877e-26,Zb=0x40000000000000,Jb=.3333333333333333,od=1048575,eP=2146435072,rP=1048576,nP=1072693248;function tP(e){var r,n,t,a,o,c,p,f,u,i,l,s;return e===0?Kb:Mb(e)||e<0?NaN:(n=ld(e),o=0,n<rP&&(o-=54,e*=Zb,n=ld(e)),n>=eP?e+e:(o+=(n>>20)-Xb|0,n&=od,f=n+614244&1048576|0,e=Vb(e,n|f^nP),o+=f>>20|0,p=e-1,(od&2+n)<3?p===0?o===0?0:o*al+o*il:(c=p*p*(.5-Jb*p),o===0?p-c:o*al-(c-o*il-p)):(i=p/(2+p),s=i*i,f=n-398458|0,l=s*s,u=440401-n|0,a=l*Qb(l),t=s*Yb(l),f|=u,c=t+a,f>0?(r=.5*p*p,o===0?p-(r-i*(r+c)):o*al-(r-(i*(r+c)+o*il)-p)):o===0?p-i*(p-c):o*al-(i*(p-c)-o*il-p))))}var aP=tP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iP=aP,Ce=iP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lP=Math.ceil,oP=lP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sP=oP,uP=sP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cP=Be,fP=uP;function vP(e){return e<0?fP(e):cP(e)}var dP=vP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pP=dP,hv=pP;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mP(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var hP=mP;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gP(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var yP=gP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var $P=hP,wP=yP;function NP(e,r){var n,t,a,o;return o=e*e,a=o*o,t=o*$P(o),t+=a*a*wP(o),n=.5*o,a=1-n,a+(1-a-n+(o*t-e*r))}var _P=NP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xP=_P,w5=xP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var sd=-.16666666666666632,IP=.00833333333332249,EP=-.0001984126982985795,bP=27557313707070068e-22,PP=-25050760253406863e-24,AP=158969099521155e-24;function OP(e,r){var n,t,a,o;return o=e*e,a=o*o,n=IP+o*(EP+o*bP)+o*a*(PP+o*AP),t=o*e,r===0?e+t*(sd+o*n):e-(o*(.5*r-t*n)-r-t*sd)}var kP=OP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jP=kP,N5=jP;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CP=2147483647,fe=CP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LP=2146435072,gv=LP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FP=1048575,Yn=FP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SP=sa,Kc;SP===!0?Kc=0:Kc=1;var TP=Kc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HP=oa,RP=wt,zP=TP,_5=new RP(1),DP=new HP(_5.buffer);function GP(e){return _5[0]=e,DP[zP]}var BP=GP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UP=BP,WP=UP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qP=sa,x5,Qc,Yc;qP===!0?(Qc=1,Yc=0):(Qc=0,Yc=1);x5={HIGH:Qc,LOW:Yc};var VP=x5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MP=oa,XP=wt,I5=VP,E5=new XP(1),ud=new MP(E5.buffer),KP=I5.HIGH,QP=I5.LOW;function YP(e,r){return ud[KP]=e,ud[QP]=r,E5[0]}var ZP=YP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JP=ZP,Ns=JP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eA=1023,rA=eA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nA=-1023,tA=nA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aA=-1074,iA=aA;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lA=2147483648,oA=lA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sA=sa,b5,Zc,Jc;sA===!0?(Zc=1,Jc=0):(Zc=0,Jc=1);b5={HIGH:Zc,LOW:Jc};var uA=b5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cA=oa,fA=wt,P5=uA,A5=new fA(1),cd=new cA(A5.buffer),vA=P5.HIGH,dA=P5.LOW;function pA(e,r,n,t){return A5[0]=e,r[t]=cd[vA],r[t+n]=cd[dA],r}var O5=pA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mA=O5;function hA(e){return mA(e,[0,0],1,0)}var gA=hA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yA=q,k5=gA,$A=O5;yA(k5,"assign",$A);var en=k5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wA=oA,NA=fe,_A=en,xA=ee,IA=Ns,l0=[0,0];function EA(e,r){var n,t;return _A.assign(e,l0,1,0),n=l0[0],n&=NA,t=xA(r),t&=wA,n|=t,IA(n,l0[1])}var bA=EA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PA=bA,Lr=PA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AA=22250738585072014e-324,Li=AA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OA=Li,kA=Xe,jA=L,CA=M,LA=4503599627370496;function FA(e,r,n,t){return jA(e)||kA(e)?(r[t]=e,r[t+n]=0,r):e!==0&&CA(e)<OA?(r[t]=e*LA,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}var j5=FA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SA=j5;function TA(e){return SA(e,[0,0],1,0)}var HA=TA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RA=q,C5=HA,zA=j5;RA(C5,"assign",zA);var DA=C5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GA=ee,BA=gv,UA=Ie;function WA(e){var r=GA(e);return r=(r&BA)>>>20,r-UA|0}var qA=WA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VA=qA,MA=VA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XA=G,KA=Z,QA=Ie,YA=rA,ZA=tA,JA=iA,eO=L,rO=Xe,nO=Lr,tO=DA.assign,aO=MA,iO=en,lO=Ns,oO=2220446049250313e-31,sO=2148532223,o0=[0,0],s0=[0,0];function uO(e,r){var n,t;return r===0||e===0||eO(e)||rO(e)?e:(tO(e,o0,1,0),e=o0[0],r+=o0[1],r+=aO(e),r<JA?nO(0,e):r>YA?e<0?KA:XA:(r<=ZA?(r+=52,t=oO):t=1,iO.assign(e,s0,1,0),n=s0[0],n&=sO,n|=r+QA<<20,t*lO(n,s0[1])))}var cO=uO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fO=cO,rn=fO;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vO(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}var dO=vO;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pO=dO,mO=pO;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hO=mO;function gO(e){return hO(0,e)}var yO=gO;/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $O=yO,wO=$O;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var NO=Be,ll=rn,_s=wO,L5=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_O=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u0=16777216,c0=5960464477539063e-23,ol=_s(20),fd=_s(20),sl=_s(20),Pe=_s(20);function F5(e,r,n,t,a,o,c,p,f){var u,i,l,s,v,h,g,w,y;for(s=o,y=t[n],w=n,v=0;w>0;v++)i=c0*y|0,Pe[v]=y-u0*i|0,y=t[w-1]+i,w-=1;if(y=ll(y,a),y-=8*NO(y*.125),g=y|0,y-=g,l=0,a>0?(v=Pe[n-1]>>24-a,g+=v,Pe[n-1]-=v<<24-a,l=Pe[n-1]>>23-a):a===0?l=Pe[n-1]>>23:y>=.5&&(l=2),l>0){for(g+=1,u=0,v=0;v<n;v++)w=Pe[v],u===0?w!==0&&(u=1,Pe[v]=16777216-w):Pe[v]=16777215-w;if(a>0)switch(a){case 1:Pe[n-1]&=8388607;break;case 2:Pe[n-1]&=4194303;break}l===2&&(y=1-y,u!==0&&(y-=ll(1,a)))}if(y===0){for(w=0,v=n-1;v>=o;v--)w|=Pe[v];if(w===0){for(h=1;Pe[o-h]===0;h++);for(v=n+1;v<=n+h;v++){for(f[p+v]=L5[c+v],i=0,w=0;w<=p;w++)i+=e[w]*f[p+(v-w)];t[v]=i}return n+=h,F5(e,r,n,t,a,o,c,p,f)}}if(y===0)for(n-=1,a-=24;Pe[n]===0;)n-=1,a-=24;else y=ll(y,-a),y>=u0?(i=c0*y|0,Pe[n]=y-u0*i|0,n+=1,a+=24,Pe[n]=i):Pe[n]=y|0;for(i=ll(1,a),v=n;v>=0;v--)t[v]=i*Pe[v],i*=c0;for(v=n;v>=0;v--){for(i=0,h=0;h<=s&&h<=n-v;h++)i+=_O[h]*t[v+h];sl[n-v]=i}for(i=0,v=n;v>=0;v--)i+=sl[v];for(l===0?r[0]=i:r[0]=-i,i=sl[0]-i,v=1;v<=n;v++)i+=sl[v];return l===0?r[1]=i:r[1]=-i,g&7}function xO(e,r,n,t){var a,o,c,p,f,u,i,l,s;for(o=4,p=t-1,c=(n-3)/24|0,c<0&&(c=0),u=n-24*(c+1),l=c-p,s=p+o,i=0;i<=s;i++)l<0?ol[i]=0:ol[i]=L5[l],l+=1;for(i=0;i<=o;i++){for(a=0,l=0;l<=p;l++)a+=e[l]*ol[p+(i-l)];fd[i]=a}return f=o,F5(e,r,f,fd,u,o,c,p,ol)}var IO=xO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EO=Math.round,bO=EO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PO=bO,AO=PO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var OO=AO,vd=ee,kO=.6366197723675814,jO=1.5707963267341256,CO=6077100506506192e-26,LO=6077100506303966e-26,FO=20222662487959506e-37,SO=20222662487111665e-37,TO=84784276603689e-45,dd=2047;function HO(e,r,n){var t,a,o,c,p,f,u;return a=OO(e*kO),c=e-a*jO,p=a*CO,u=r>>20|0,n[0]=c-p,t=vd(n[0]),f=u-(t>>20&dd),f>16&&(o=c,p=a*LO,c=o-p,p=a*FO-(o-c-p),n[0]=c-p,t=vd(n[0]),f=u-(t>>20&dd),f>49&&(o=c,p=a*SO,c=o-p,p=a*TO-(o-c-p),n[0]=c-p)),n[1]=c-n[0]-p,a}var RO=HO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var zO=fe,DO=gv,GO=Yn,BO=ee,UO=WP,WO=Ns,qO=IO,ul=RO,VO=0,MO=16777216,an=1.5707963267341256,ot=6077100506506192e-26,cl=2*ot,fl=3*ot,vl=4*ot,XO=598523,KO=1072243195,QO=1073928572,YO=1074752122,ZO=1074977148,JO=1075183036,ek=1075388923,rk=1075594811,nk=1094263291,Ea=[0,0,0],ba=[0,0];function tk(e,r){var n,t,a,o,c,p,f,u;if(a=BO(e),o=a&zO|0,o<=KO)return r[0]=e,r[1]=0,0;if(o<=YO)return(o&GO)===XO?ul(e,o,r):o<=QO?e>0?(u=e-an,r[0]=u-ot,r[1]=u-r[0]-ot,1):(u=e+an,r[0]=u+ot,r[1]=u-r[0]+ot,-1):e>0?(u=e-2*an,r[0]=u-cl,r[1]=u-r[0]-cl,2):(u=e+2*an,r[0]=u+cl,r[1]=u-r[0]+cl,-2);if(o<=rk)return o<=JO?o===ZO?ul(e,o,r):e>0?(u=e-3*an,r[0]=u-fl,r[1]=u-r[0]-fl,3):(u=e+3*an,r[0]=u+fl,r[1]=u-r[0]+fl,-3):o===ek?ul(e,o,r):e>0?(u=e-4*an,r[0]=u-vl,r[1]=u-r[0]-vl,4):(u=e+4*an,r[0]=u+vl,r[1]=u-r[0]+vl,-4);if(o<nk)return ul(e,o,r);if(o>=DO)return r[0]=NaN,r[1]=NaN,0;for(n=UO(e),t=(o>>20)-1046,u=WO(o-(t<<20|0),n),p=0;p<2;p++)Ea[p]=u|0,u=(u-Ea[p])*MO;for(Ea[2]=u,c=3;Ea[c-1]===VO;)c-=1;return f=qO(Ea,ba,t,c),e<0?(r[0]=-ba[0],r[1]=-ba[1],-f):(r[0]=ba[0],r[1]=ba[1],f)}var ak=tk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ik=ak,S5=ik;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var lk=ee,f0=w5,pd=N5,ok=S5,Sr=[0,0],sk=2147483647,uk=1072243195,ck=1044381696,fk=2146435072;function vk(e){var r,n;if(r=lk(e),r&=sk,r<=uk)return r<ck?1:f0(e,0);if(r>=fk)return NaN;switch(n=ok(e,Sr),n&3){case 0:return f0(Sr[0],Sr[1]);case 1:return-pd(Sr[0],Sr[1]);case 2:return-f0(Sr[0],Sr[1]);default:return pd(Sr[0],Sr[1])}}var dk=vk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pk=dk,mk=pk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var hk=fe,gk=gv,yk=ee,md=w5,v0=N5,$k=S5,wk=1072243195,Nk=1045430272,Tr=[0,0];function _k(e){var r,n;if(r=yk(e),r&=hk,r<=wk)return r<Nk?e:v0(e,0);if(r>=gk)return NaN;switch(n=$k(e,Tr),n&3){case 0:return v0(Tr[0],Tr[1]);case 1:return md(Tr[0],Tr[1]);case 2:return-v0(Tr[0],Tr[1]);default:return-md(Tr[0],Tr[1])}}var xk=_k;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ik=xk,Fi=Ik;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ek=3.141592653589793,nr=Ek;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bk=L,Pk=Xe,hd=mk,d0=Fi,Ak=M,Pa=Lr,Aa=nr;function Ok(e){var r,n;return bk(e)?NaN:Pk(e)?NaN:(n=e%2,r=Ak(n),r===0||r===1?Pa(0,n):r<.25?d0(Aa*n):r<.75?(r=.5-r,Pa(hd(Aa*r),n)):r<1.25?(n=Pa(1,n)-n,d0(Aa*n)):r<1.75?(r-=1.5,-Pa(hd(Aa*r),n)):(n-=Pa(2,n),d0(Aa*n)))}var kk=Ok;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jk=kk,yv=jk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ck(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var Lk=Ck;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fk(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var Sk=Fk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tk(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var Hk=Tk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rk(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var zk=Rk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dk(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var Gk=Dk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bk(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var Uk=Bk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wk(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var qk=Wk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vk(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var Mk=Vk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xk(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var Kk=Xk;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qk(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var Yk=Qk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Zk=L,Jk=Xe,ej=M,bt=Ce,rj=hv,nj=yv,tj=nr,p0=G,aj=Lk,ij=Sk,lj=Hk,oj=zk,sj=Gk,uj=Uk,cj=qk,fj=Mk,vj=Kk,dj=Yk,pj=.07721566490153287,mj=.3224670334241136,hj=1,gj=-.07721566490153287,yj=.48383612272381005,$j=-.1475877229945939,wj=.06462494023913339,Nj=-.07721566490153287,_j=1,xj=.4189385332046727,dl=1.4616321449683622,Ij=4503599627370496,Ej=0x400000000000000,bj=8470329472543003e-37,gd=1.4616321449683622,Pj=-.12148629053584961,Aj=-3638676997039505e-33;function Oj(e){var r,n,t,a,o,c,p,f,u,i,l,s,v;if(Zk(e)||Jk(e))return e;if(e===0)return p0;if(e<0?(r=!0,e=-e):r=!1,e<bj)return-bt(e);if(r){if(e>=Ij||(u=nj(e),u===0))return p0;n=bt(tj/ej(u*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(v=-bt(e),e>=dl-1+.27?(l=1-e,t=0):e>=dl-1-.27?(l=e-(gd-1),t=1):(l=e,t=2)):(v=0,e>=dl+.27?(l=2-e,t=0):e>=dl-.27?(l=e-gd,t=1):(l=e-1,t=2)),t){case 0:s=l*l,c=pj+s*aj(s),o=s*(mj+s*ij(s)),p=l*c+o,v+=p-.5*l;break;case 1:s=l*l,i=s*l,c=yj+i*sj(i),o=$j+i*uj(i),a=wj+i*cj(i),p=s*c-(Aj-i*(o+l*a)),v+=Pj+p;break;case 2:c=l*(Nj+l*fj(l)),o=_j+l*vj(l),v+=-.5*l+c/o;break}else if(e<8)switch(t=rj(e),l=e-t,p=l*(gj+l*oj(l)),f=hj+l*lj(l),v=.5*l+p/f,s=1,t){case 7:s*=l+6;case 6:s*=l+5;case 5:s*=l+4;case 4:s*=l+3;case 3:s*=l+2,v+=bt(s)}else e<Ej?(u=bt(e),s=1/e,l=s*s,i=xj+s*dj(l),v=(e-.5)*(u-1)+i):v=e*(bt(e)-1);return r&&(v=n-v),v}var kj=Oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jj=kj,xs=jj;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cj(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var Lj=Cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Fj=L,yd=ee,$d=je,Sj=G,Tj=Z,wd=Ie,Hj=Lj,m0=.6931471803691238,h0=19082149292705877e-26,Rj=.41421356237309503,zj=-.2928932188134525,Dj=1862645149230957e-24,Gj=5551115123125783e-32,Bj=9007199254740992,Uj=.6666666666666666;function Wj(e){var r,n,t,a,o,c,p,f,u,i;if(e<-1||Fj(e))return NaN;if(e===-1)return Tj;if(e===Sj||e===0)return e;if(e<0?t=-e:t=e,i=1,t<Rj){if(t<Dj)return t<Gj?e:e-e*e*.5;e>zj&&(i=0,a=e,n=1)}return i!==0&&(t<Bj?(u=1+e,n=yd(u),i=(n>>20)-wd,i>0?o=1-(u-e):o=e-(u-1),o/=u):(u=e,n=yd(u),i=(n>>20)-wd,o=0),n&=1048575,n<434334?u=$d(u,n|1072693248):(i+=1,u=$d(u,n|1071644672),n=1048576-n>>2),a=u-1),r=.5*a*a,n===0?a===0?(o+=i*h0,i*m0+o):(f=r*(1-Uj*a),i*m0-(f-(i*h0+o)-a)):(c=a/(2+a),p=c*c,f=p*Hj(p),i===0?a-(r-c*(r+f)):i*m0-(r-(c*(r+f)+(i*h0+o))-a))}var qj=Wj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vj=qj,Fr=Vj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mj=Z;function Xj(e){return e===0&&1/e===Mj}var Kj=Xj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qj=Kj,Si=Qj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yj=2.5066282746310007,Ti=Yj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zj=xe;function Jj(e){return Zj(e/2)}var eC=Jj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rC=eC,Nt=rC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nd=Nt;function nC(e){return e>0?Nd(e-1):Nd(e+1)}var tC=nC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aC=tC,$v=aC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iC=Math.sqrt,lC=iC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oC=lC,me=oC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sC=sa,ef;sC===!0?ef=0:ef=1;var uC=ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cC=oa,fC=wt,vC=uC,rf=new fC(1),dC=new cC(rf.buffer);function pC(e,r){return rf[0]=e,dC[vC]=r>>>0,rf[0]}var mC=pC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hC=mC,ne=hC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gC(e){return e|0}var yC=gC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $C=yC,Ke=$C;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var _d=$v,wC=Lr,NC=Z,pl=G;function _C(e,r){return r===NC?pl:r===pl?0:r>0?_d(r)?e:0:_d(r)?wC(pl,e):pl}var xC=_C;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var IC=fe,EC=ee,bC=1072693247,ml=1e300,hl=1e-300;function PC(e,r){var n,t;return t=EC(e),n=t&IC,n<=bC?r<0?ml*ml:hl*hl:r>0?ml*ml:hl*hl}var AC=PC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OC=M,xd=G;function kC(e,r){return e===-1?(e-e)/(e-e):e===1?1:OC(e)<1==(r===xd)?0:xd}var jC=kC;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function CC(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var LC=CC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var FC=ee,gl=ne,Id=je,SC=Ie,TC=LC,HC=1048575,Ed=1048576,RC=1072693248,zC=536870912,DC=524288,GC=20,BC=9007199254740992,UC=.9617966939259756,WC=.9617967009544373,qC=-7028461650952758e-24,VC=[1,1.5],MC=[0,.5849624872207642],XC=[0,1350039202129749e-23];function KC(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<Ed&&(r*=BC,_-=53,n=FC(r)),_+=(n>>GC)-SC|0,I=n&HC|0,n=I|RC|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=Ed),r=Id(r,n),i=VC[E],N=r-i,x=1/(r+i),a=N*x,c=gl(a,0),t=(n>>1|zC)+DC,t+=E<<18,f=Id(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*TC(o),m+=p*(c+a),o=c*c,f=3+o+m,f=gl(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=gl(s,0),v=x-(s-N),h=WC*s,g=qC*s+v*UC+XC[E],l=MC[E],$=_,w=h+g+l+$,w=gl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var QC=KC;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YC(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var ZC=YC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var JC=ne,eL=ZC,rL=1.4426950408889634,nL=1.4426950216293335,tL=19259629911266175e-24;function aL(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*eL(a),c=nL*a,p=a*tL-o*rL,t=c+p,t=JC(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var iL=aL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lL=.6931471805599453,_t=lL;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oL(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var sL=oL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var uL=ee,bd=je,cL=ne,fL=Ke,vL=rn,dL=_t,Pd=Ie,Ad=fe,Od=Yn,pL=sL,kd=1048576,mL=1071644672,Oa=20,hL=.6931471824645996,gL=-1904654299957768e-24;function yL(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&Ad|0,v=(s>>Oa)-Pd|0,l=0,s>mL&&(l=e+(kd>>v+1)>>>0,v=((l&Ad)>>Oa)-Pd|0,t=(l&~(Od>>v))>>>0,o=bd(0,t),l=(l&Od|kd)>>Oa-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=cL(o,0),p=o*hL,f=(n-(o-r))*dL+o*gL,i=p+f,u=f-(i-p),o=i*i,a=i-o*pL(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=uL(i),e=fL(e),e+=l<<Oa>>>0,e>>Oa<=0?i=vL(i,l):i=bd(i,e),i}var $L=yL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jd=L,Cd=$v,Ld=Xe,wL=xe,Fd=me,NL=M,g0=en,_L=ne,Sd=Ke,xL=Z,IL=G,y0=fe,EL=xC,bL=AC,PL=jC,AL=QC,OL=iL,kL=$L,jL=1072693247,CL=1105199104,LL=1139802112,Td=1083179008,FL=1072693248,SL=1083231232,TL=3230714880,Hd=31,ln=1e300,on=1e-300,HL=8008566259537294e-32,Hr=[0,0],Rd=[0,0];function T5(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(jd(e)||jd(r))return NaN;if(g0.assign(r,Hr,1,0),p=Hr[0],f=Hr[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return Fd(e);if(r===-.5)return 1/Fd(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(Ld(r))return PL(e,r)}if(g0.assign(e,Hr,1,0),o=Hr[0],c=Hr[1],c===0){if(o===0)return EL(e,r);if(e===1)return 1;if(e===-1&&Cd(r))return-1;if(Ld(e))return e===xL?T5(-0,-r):r<0?0:IL}if(e<0&&wL(r)===!1)return(e-e)/(e-e);if(a=NL(e),n=o&y0|0,t=p&y0|0,u=o>>>Hd|0,i=p>>>Hd|0,u&&Cd(r)?u=-1:u=1,t>CL){if(t>LL)return bL(e,r);if(n<jL)return i===1?u*ln*ln:u*on*on;if(n>FL)return i===0?u*ln*ln:u*on*on;h=OL(Rd,a)}else h=AL(Rd,a,n);if(l=_L(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,g0.assign(g,Hr,1,0),w=Sd(Hr[0]),y=Sd(Hr[1]),w>=Td){if(w-Td|y||v+HL>g-s)return u*ln*ln}else if((w&y0)>=SL&&(w-TL|y||v<=g-s))return u*on*on;return g=kL(w,s,v),u*g}var RL=T5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zL=RL,se=zL;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DL(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var GL=DL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var BL=rn,UL=GL;function WL(e,r,n){var t,a,o,c;return t=e-r,a=t*t,o=t-a*UL(a),c=1-(r-t*o/(2-o)-e),BL(c,n)}var qL=WL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var VL=L,zd=hv,ML=Z,Dd=G,XL=qL,KL=.6931471803691238,QL=19082149292705877e-26,Gd=1.4426950408889634,YL=709.782712893384,ZL=-745.1332191019411,H5=1/(1<<28),JL=-H5;function eF(e){var r,n,t;return VL(e)||e===Dd?e:e===ML?0:e>YL?Dd:e<ZL?0:e>JL&&e<H5?1+e:(e<0?t=zd(Gd*e-.5):t=zd(Gd*e+.5),r=e-t*KL,n=t*QL,XL(r,n,t))}var rF=eF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nF=rF,J=nF;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function tF(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var aF=tF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var iF=Ti,Bd=se,lF=J,oF=aF,sF=143.01608;function uF(e){var r,n,t;return r=1/e,r=1+r*oF(r),n=lF(e),e>sF?(t=Bd(e,.5*e-.25),n=t*(t/n)):n=Bd(e,e-.5)/n,iF*n*r}var cF=uF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fF=.5772156649015329,Is=fF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var vF=Is;function dF(e,r){return r/((1+vF*e)*e)}var pF=dF;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mF(e){var r,n,t;return e===0?1:(e<0?r=-e:r=e,r<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),t=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),t=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/t)}var hF=mF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var gF=L,yF=xe,$F=Si,Ud=M,wF=Be,NF=Fi,Wd=G,qd=Z,Vd=nr,Md=cF,Xd=pF,_F=hF;function xF(e){var r,n,t,a;if(yF(e)&&e<0||e===qd||gF(e))return NaN;if(e===0)return $F(e)?qd:Wd;if(e>171.61447887182297)return Wd;if(e<-170.5674972726612)return 0;if(n=Ud(e),n>33)return e>=0?Md(e):(t=wF(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*NF(Vd*a),r*Vd/(Ud(a)*Md(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return Xd(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return Xd(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*_F(e))}var IF=xF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EF=IF,Es=EF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bF=ws,Kd=L,$0=G;function PF(e,r){return Kd(e)||Kd(r)?NaN:e===$0||r===$0?$0:e===r&&e===0?bF(e)?e:r:e>r?e:r}var AF=PF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OF=AF,bs=OF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kF=Si,Qd=L,w0=Z;function jF(e,r){return Qd(e)||Qd(r)?NaN:e===w0||r===w0?w0:e===r&&e===0?kF(e)?e:r:e<r?e:r}var CF=jF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LF=CF,ua=LF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FF=.9189385332046728,SF=FF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link http://www.netlib.no/netlib/slatec/fnlib/}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var R5=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],TF=R5.length;function HF(e){var r,n,t,a,o;if(e<-1.1||e>1.1)return NaN;for(t=0,a=0,r=2*e,o=0;o<TF;o++)n=t,t=a,a=r*t-n+R5[o];return(a-n)*.5}var RF=HF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link http://www.netlib.no/netlib/fn/d9lgmc.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var zF=se,DF=RF,GF=9490626562425156e-8,BF=3745194030963158e291;function UF(e){return e<10?NaN:e>=BF?0:e<GF?DF(2*zF(10/e,2)-1)/e:1/(e*12)}var WF=UF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The code is adapted from the Fortran routine from the FNLIB library of the [SLATEC Common Mathematical Library]{@link http://www.netlib.no/netlib/slatec/fnlib/albeta.f}.
*
* The original code was developed by W. Fullerton of Los Alamos Scientific Laboratory, a governmental institution, and is therefore public domain.
*/var qF=xs,Yd=Fr,N0=Es,VF=bs,MF=ua,yl=Ce,XF=SF,KF=Z,Zd=G,ka=WF;function QF(e,r){var n,t,a;return t=MF(e,r),a=VF(e,r),t<0?NaN:t===0?Zd:a===Zd?KF:t>=10?(n=ka(t)+ka(a)-ka(t+a),-.5*yl(a)+XF+n+(t-.5)*yl(t/(t+a))+a*Yd(-t/(t+a))):a>=10?(n=ka(a)-ka(t+a),qF(t)+n+t-t*yl(t+a)+(a-.5)*Yd(-t/(t+a))):yl(N0(t)*(N0(a)/N0(t+a)))}var YF=QF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZF=YF,JF=ZF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd=xe,ep=L,eS=JF,rS=M,rp=Ce,np=Z;function nf(e,r){return ep(e)||ep(r)?NaN:!Jd(e)||!Jd(r)?NaN:e<0?nf(-e+r-1,r):r<0?np:r===0?0:r===1?rp(rS(e)):e<r?np:e-r<2?nf(e,e-r):-rp(e+1)-eS(e-r+1,r+1)}var nS=nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tS=nS,aS=tS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iS=aS,lS=Be,oS=J,tp=Ce;function sS(e,r){var n,t,a,o;if(e<=0)return 0;if(e>=1)return 1;for(n=lS(r*(1-e))+1,t=0,o=0;o<n;o++)a=iS(r,o),a+=(r-o)*tp(1-e-o/r),a+=(o-1)*tp(e+o/r),t+=oS(a);return 1-e*t}var uS=sS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l=Be,cS=me,wl=se,fS=J,_0=wt;function vS(e,r){var n,t,a,o,c,p,f,u,i,l,s;if(s=e*e*r,s>7.24||s>3.76&&r>99)return 1-2*fS(-(2.000071+.331/cS(r)+1.409/r)*s);for(i=$l(r*e)+1,l=2*i-1,a=i-r*e,o=new _0(l*l),c=new _0(l*l),f=0;f<l;f++)for(u=0;u<l;u++)f-u+1<0?o[f*l+u]=0:o[f*l+u]=1;for(f=0;f<l;f++)o[f*l]-=wl(a,f+1),o[(l-1)*l+f]-=wl(a,l-f);for(o[(l-1)*l]+=2*a-1>0?wl(2*a-1,l):0,f=0;f<l;f++)for(u=0;u<l;u++)if(f-u+1>0)for(p=1;p<=f-u+1;p++)o[f*l+u]/=p;for(n=0,v(o,n,r),s=c[(i-1)*l+i-1],f=1;f<=r;f++)s=s*f/r,s<1e-140&&(s*=1e140,t-=140);return s*=wl(10,t),s;function v(g,w,y){var $,m,N;if(y===1){for(N=0;N<l*l;N++)c[N]=g[N],t=w;return}if(v(g,w,$l(y/2)),m=h(c,c),$=2*t,y%2===0){for(N=0;N<l*l;N++)c[N]=m[N];t=$}else c=h(g,m),t=w+$;if(c[$l(l/2)*l+$l(l/2)]>1e140){for(N=0;N<l*l;N++)c[N]*=1e-140;t+=140}}function h(g,w){var y,$,m,N,x;for(x=new _0(l*l),y=0;y<l;y++)for($=0;$<l;$++)for(N=0,m=0;m<l;m++)N+=g[y*l+m]*w[m*l+$],x[y*l+$]=N;return x}}var dS=vS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pS(e,r){return e-r}var mS=pS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hS(e,r){var n,t,a;for(n=r.length,t=new Array(n),a=0;a<n;a++)t[a]=e-r[a];return t}var gS=hS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yS=o5;function $S(e){return typeof e=="object"&&e!==null&&!yS(e)}var wS=$S;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NS=wS,_S=NS;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xS=Object,IS=xS;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ES=IS,bS=ES;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PS=Object.getPrototypeOf,AS=PS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function OS(e){return e.__proto__}var kS=OS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jS=Nr,CS=kS;function LS(e){var r=CS(e);return r||r===null?r:jS(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof Object?Object.prototype:null}var FS=LS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SS=dv,TS=AS,HS=FS,tf;SS(Object.getPrototypeOf)?tf=TS:tf=HS;var RS=tf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zS=bS,DS=RS;function GS(e){return e==null?null:(e=zS(e),DS(e))}var BS=GS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var US=BS,WS=US;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qS=_S,ap=dv,VS=WS,_o=ys,MS=Nr,XS=Object.prototype;function KS(e){var r;for(r in e)if(!_o(e,r))return!1;return!0}function QS(e){var r;return qS(e)?(r=VS(e),r?!_o(e,"constructor")&&_o(r,"constructor")&&ap(r.constructor)&&MS(r.constructor)==="[object Function]"&&_o(r,"isPrototypeOf")&&ap(r.isPrototypeOf)&&(r===XS||KS(e)):!0):!1}var YS=QS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZS=YS,z5=ZS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JS=fv.isPrimitive,eT=$t.isPrimitive,rT=z5,nT=v5.isPrimitive,tT=h5,x0=ys,Nl=Qn;function aT(e,r){return rT(r)?x0(r,"alpha")&&(e.alpha=r.alpha,!eT(e.alpha)||tT(e.alpha))?new TypeError(Nl("invalid option. `%s` option must be a number. Option: `%s`.","alpha",e.alpha)):x0(r,"alternative")&&(e.alternative=r.alternative,!nT(e.alternative))?new TypeError(Nl("invalid option. `%s` option must be a string. Option: `%s`.","alternative",e.alternative)):x0(r,"sorted")&&(e.sorted=r.sorted,!JS(e.sorted))?new TypeError(Nl("invalid option. `%s` option must be a boolean. Option: `%s`.","sorted",e.sorted)):null:new TypeError(Nl("invalid argument. Options argument must be an object. Value: `%s`.",r))}var iT=aT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lT=.7853981633974483,D5=lT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function oT(e){var r,n,t;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(n=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),t=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,n=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),t=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),n/t)}var sT=oT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uT(e){var r,n,t;return e===0?.08333333333333809:(e<0?r=-e:r=e,r<=1?(n=28.536655482610616+e*(-25.56901049652825+e*(6.968710824104713+e*(-.5634242780008963+e*.002967721961301243))),t=342.43986579130785+e*(-383.8770957603691+e*(147.0656354026815+e*(-21.947795316429207+e*1)))):(e=1/e,n=.002967721961301243+e*(-.5634242780008963+e*(6.968710824104713+e*(-25.56901049652825+e*28.536655482610616))),t=1+e*(-21.947795316429207+e*(147.0656354026815+e*(-383.8770957603691+e*342.43986579130785)))),n/t)}var cT=uT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var fT=L,vT=me,ip=D5,dT=sT,pT=cT,mT=6123233995736766e-32;function hT(e){var r,n,t,a,o;if(fT(e))return NaN;if(e>0?t=e:(r=!0,t=-e),t>1)return NaN;if(t>.625)n=1-t,a=n*pT(n),n=vT(n+n),o=ip-n,n=n*a-mT,o-=n,o+=ip;else{if(t<1e-8)return e;n=t*t,o=n*dT(n),o=t*o+t}return r?-o:o}var gT=hT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yT=gT,wv=yT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0=L,$T=wv,wT=me,NT=nr,_T=2/NT;function xT(e,r,n){return I0(e)||I0(r)||I0(n)||r>=n?NaN:e<r?0:e>=n?1:_T*$T(wT((e-r)/(n-r)))}var IT=xT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ET(e){return r;function r(){return e}}var bT=ET;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PT=bT,ue=PT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AT=ue,E0=L,OT=wv,kT=me,jT=nr,CT=2/jT;function LT(e,r){if(E0(e)||E0(r)||e>=r)return AT(NaN);return n;function n(t){return E0(t)?NaN:t<e?0:t>=r?1:CT*OT(kT((t-e)/(r-e)))}}var FT=LT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ST=q,G5=IT,TT=FT;ST(G5,"factory",TT);var HT=G5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RT=.34657359027997264,zT=RT;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DT(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}var GT=DT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var BT=L,lp=ee,b0=je,UT=Ns,op=G,WT=Z,sp=Ie,qT=zT,VT=GT,MT=709.782712893384,P0=.6931471803691238,A0=19082149292705877e-26,up=1.4426950408889634,XT=38.816242111356935,KT=1.0397207708399179;function QT(e){var r,n,t,a,o,c,p,f,u,i,l,s,v;if(e===op||BT(e))return e;if(e===WT)return-1;if(e===0)return e;if(e<0?(t=!0,f=-e):(t=!1,f=e),f>=XT){if(t)return-1;if(f>=MT)return op}if(c=lp(f)|0,f>qT)f<KT?t?(a=e+P0,o=-A0,v=-1):(a=e-P0,o=A0,v=1):(t?v=up*e-.5:v=up*e+.5,v|=0,l=v,a=e-l*P0,o=l*A0),e=a-o,i=a-e-o;else{if(c<1016070144)return e;v=0}return r=.5*e,u=e*r,p=1+u*VT(u),l=3-p*r,s=u*((p-l)/(6-e*l)),v===0?e-(e*s-u):(n=UT(sp+v<<20,0),s=e*(s-i)-i,s-=u,v===-1?.5*(e-s)-.5:v===1?e<-.25?-2*(s-(e+.5)):1+2*(e-s):v<=-2||v>56?(f=1-(s-e),v===1024?(a=lp(f)+(v<<20)|0,f=b0(f,a)):f*=n,f-1):(l=1,v<20?(a=1072693248-(2097152>>v)|0,l=b0(l,a),f=l-(s-e)):(a=sp-v<<20|0,l=b0(l,a),f=e-(s+l),f+=1),f*=n,f))}var YT=QT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZT=YT,ca=ZT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JT=2.718281828459045,fa=JT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eH=2220446049250313e-31,nn=eH;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rH(e){var r,n,t;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(n=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),t=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,n=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),t=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),n/t)}var nH=rH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var cp=L,tH=Fr,aH=me,iH=M,lH=J,O0=se,oH=fa,k0=nn,j0=nH,C0=10.900511;function sH(e,r){var n,t,a,o,c,p,f;return cp(e)||cp(r)?NaN:e<0||r<0?NaN:r===1?1/e:e===1?1/r:(f=e+r,f<k0?(c=f/e,c/=r,c):f===e&&r<k0?1/r:f===r&&e<k0?1/e:(e<r&&(p=r,r=e,e=p),t=e+C0-.5,a=r+C0-.5,o=f+C0-.5,c=j0(e)*(j0(r)/j0(f)),n=e-.5-r,iH(r*n)<o*100&&e>100?c*=lH(n*tH(-r/o)):c*=O0(t/o,n),o>1e10?c*=O0(t/o*(a/o),r):c*=O0(t*a/(o*o),r),c*=aH(oH/a),c))}var uH=sH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cH=uH,fH=cH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vH=17976931348623157e292,B5=vH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dH=2147483647,pH=dH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mH=1.5707963267948966,U5=mH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp=Nt;function hH(e){return e>0?fp(e-1):fp(e+1)}var gH=hH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yH=gH,W5=yH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var vp=W5,$H=Lr,wH=Z,_l=G;function NH(e,r){return r===wH?_l:r===_l?0:r>0?vp(r)?e:0:vp(r)?$H(_l,e):_l}var _H=NH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var xH=fe,IH=ee,EH=1072693247,xl=1e300,Il=1e-300;function bH(e,r){var n,t;return t=IH(e),n=t&xH,n<=EH?r<0?xl*xl:Il*Il:r>0?xl*xl:Il*Il}var PH=bH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AH=M,dp=G;function OH(e,r){return e===-1?(e-e)/(e-e):e===1?1:AH(e)<1==(r===dp)?0:dp}var kH=OH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jH(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var CH=jH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var LH=ee,El=ne,pp=je,FH=Ie,SH=CH,TH=1048575,mp=1048576,HH=1072693248,RH=536870912,zH=524288,DH=20,GH=9007199254740992,BH=.9617966939259756,UH=.9617967009544373,WH=-7028461650952758e-24,qH=[1,1.5],VH=[0,.5849624872207642],MH=[0,1350039202129749e-23];function XH(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<mp&&(r*=GH,_-=53,n=LH(r)),_+=(n>>DH)-FH|0,I=n&TH|0,n=I|HH|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=mp),r=pp(r,n),i=qH[E],N=r-i,x=1/(r+i),a=N*x,c=El(a,0),t=(n>>1|RH)+zH,t+=E<<18,f=pp(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*SH(o),m+=p*(c+a),o=c*c,f=3+o+m,f=El(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=El(s,0),v=x-(s-N),h=UH*s,g=WH*s+v*BH+MH[E],l=VH[E],$=_,w=h+g+l+$,w=El(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var KH=XH;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function QH(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var YH=QH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ZH=ne,JH=YH,eR=1.4426950408889634,rR=1.4426950216293335,nR=19259629911266175e-24;function tR(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*JH(a),c=rR*a,p=a*nR-o*eR,t=c+p,t=ZH(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var aR=tR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iR(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var lR=iR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var oR=ee,hp=je,sR=ne,uR=Ke,cR=rn,fR=_t,gp=Ie,yp=fe,$p=Yn,vR=lR,wp=1048576,dR=1071644672,ja=20,pR=.6931471824645996,mR=-1904654299957768e-24;function hR(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&yp|0,v=(s>>ja)-gp|0,l=0,s>dR&&(l=e+(wp>>v+1)>>>0,v=((l&yp)>>ja)-gp|0,t=(l&~($p>>v))>>>0,o=hp(0,t),l=(l&$p|wp)>>ja-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=sR(o,0),p=o*pR,f=(n-(o-r))*fR+o*mR,i=p+f,u=f-(i-p),o=i*i,a=i-o*vR(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=oR(i),e=uR(e),e+=l<<ja>>>0,e>>ja<=0?i=cR(i,l):i=hp(i,e),i}var gR=hR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Np=L,_p=W5,xp=Xe,yR=xe,Ip=me,$R=M,L0=en,wR=ne,Ep=Ke,NR=Z,_R=G,F0=fe,xR=_H,IR=PH,ER=kH,bR=KH,PR=aR,AR=gR,OR=1072693247,kR=1105199104,jR=1139802112,bp=1083179008,CR=1072693248,LR=1083231232,FR=3230714880,Pp=31,sn=1e300,un=1e-300,SR=8008566259537294e-32,Rr=[0,0],Ap=[0,0];function q5(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(Np(e)||Np(r))return NaN;if(L0.assign(r,Rr,1,0),p=Rr[0],f=Rr[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return Ip(e);if(r===-.5)return 1/Ip(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(xp(r))return ER(e,r)}if(L0.assign(e,Rr,1,0),o=Rr[0],c=Rr[1],c===0){if(o===0)return xR(e,r);if(e===1)return 1;if(e===-1&&_p(r))return-1;if(xp(e))return e===NR?q5(-0,-r):r<0?0:_R}if(e<0&&yR(r)===!1)return(e-e)/(e-e);if(a=$R(e),n=o&F0|0,t=p&F0|0,u=o>>>Pp|0,i=p>>>Pp|0,u&&_p(r)?u=-1:u=1,t>kR){if(t>jR)return IR(e,r);if(n<OR)return i===1?u*sn*sn:u*un*un;if(n>CR)return i===0?u*sn*sn:u*un*un;h=PR(Ap,a)}else h=bR(Ap,a,n);if(l=wR(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,L0.assign(g,Rr,1,0),w=Ep(Rr[0]),y=Ep(Rr[1]),w>=bp){if(w-bp|y||v+SR>g-s)return u*sn*sn}else if((w&F0)>=LR&&(w-FR|y||v<=g-s))return u*un*un;return g=AR(w,s,v),u*g}var TR=q5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HR=TR,RR=HR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zR(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var DR=zR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var GR=Ti,Op=RR,BR=J,UR=DR,WR=143.01608;function qR(e){var r,n,t;return r=1/e,r=1+r*UR(r),n=BR(e),e>WR?(t=Op(e,.5*e-.25),n=t*(t/n)):n=Op(e,e-.5)/n,GR*n*r}var VR=qR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var MR=Is;function XR(e,r){return r/((1+MR*e)*e)}var KR=XR;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function QR(e){var r,n,t;return e===0?1:(e<0?r=-e:r=e,r<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),t=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),t=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/t)}var YR=QR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var ZR=L,JR=xe,ez=Si,kp=M,rz=Be,nz=Fi,jp=G,Cp=Z,Lp=nr,Fp=VR,Sp=KR,tz=YR;function az(e){var r,n,t,a;if(JR(e)&&e<0||e===Cp||ZR(e))return NaN;if(e===0)return ez(e)?Cp:jp;if(e>171.61447887182297)return jp;if(e<-170.5674972726612)return 0;if(n=kp(e),n>33)return e>=0?Fp(e):(t=rz(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*nz(Lp*a),r*Lp/(kp(a)*Fp(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return Sp(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return Sp(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*tz(e))}var iz=az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lz=iz,Nv=lz;const oz=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sz=L,uz=xe,cz=Nv,fz=G,vz=oz,dz=170;function pz(e){return sz(e)?NaN:uz(e)?e<0?NaN:e<=dz?vz[e]:fz:cz(e+1)}var mz=pz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hz=mz,gz=hz;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function yz(e){var r,n,t;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(n=3847467039331777e-5+e*(3685766504351951e-5+e*(1588920245372942e-5+e*(4059208354298835e-6+e*(6805476611834733e-7+e*(7823975500312005e-8+e*(6246580776401795e-9+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+e*2.5066282746310007))))))))),t=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,n=2.5066282746310007+e*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580776401795e-9+e*(7823975500312005e-8+e*(6805476611834733e-7+e*(4059208354298835e-6+e*(1588920245372942e-5+e*(3685766504351951e-5+e*3847467039331777e-5))))))))),t=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),n/t)}var $z=yz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var wz=$z,Nz=wz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _z=Nz,xz=_z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iz=10.900511,Hi=Iz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Tp=xz,Ez=Nv,Hp=Fr,Rp=M,zp=J,Dp=se,bz=nn,Pz=fa,Az=Hi,Gp=170,Oz=4269068009004705e289;function V5(e,r){var n,t,a;return e<bz?r>Gp?(t=V5(r,Gp-r),t*=e,t*=Oz,1/t):1/(e*Ez(e+r)):(a=e+Az-.5,e+r===e?Rp(r)<10?n=zp((.5-e)*Hp(r/a)):n=1:(Rp(r)<10?n=zp((.5-e)*Hp(r/a)):n=Dp(a/(a+r),e-.5),n*=Tp(e)/Tp(e+r)),n*=Dp(Pz/(a+r),r),n)}var kz=V5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var jz=M,Bp=Be,Up=Nv,Wp=gz,Cz=kz,qp=170;function Lz(e,r){var n,t,a;if(e<=0||e+r<=0)return Up(e)/Up(e+r);if(t=Bp(r),t===r){if(a=Bp(e),a===e&&e<=qp&&e+r<=qp)return Wp(a-1)/Wp(t+a-1);if(jz(r)<20){if(r===0)return 1;if(r<0){for(e-=1,n=e,r+=1;r!==0;)e-=1,n*=e,r+=1;return n}for(n=1/e,r-=1;r!==0;)e+=1,n/=e,r-=1;return n}}return Cz(e,r)}var Fz=Lz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sz=Fz,Tz=Sz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp=Nt;function Hz(e){return e>0?Vp(e-1):Vp(e+1)}var Rz=Hz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zz=Rz,M5=zz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Mp=M5,Dz=Lr,Gz=Z,bl=G;function Bz(e,r){return r===Gz?bl:r===bl?0:r>0?Mp(r)?e:0:Mp(r)?Dz(bl,e):bl}var Uz=Bz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Wz=fe,qz=ee,Vz=1072693247,Pl=1e300,Al=1e-300;function Mz(e,r){var n,t;return t=qz(e),n=t&Wz,n<=Vz?r<0?Pl*Pl:Al*Al:r>0?Pl*Pl:Al*Al}var Xz=Mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kz=M,Xp=G;function Qz(e,r){return e===-1?(e-e)/(e-e):e===1?1:Kz(e)<1==(r===Xp)?0:Xp}var Yz=Qz;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zz(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var Jz=Zz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var eD=ee,Ol=ne,Kp=je,rD=Ie,nD=Jz,tD=1048575,Qp=1048576,aD=1072693248,iD=536870912,lD=524288,oD=20,sD=9007199254740992,uD=.9617966939259756,cD=.9617967009544373,fD=-7028461650952758e-24,vD=[1,1.5],dD=[0,.5849624872207642],pD=[0,1350039202129749e-23];function mD(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<Qp&&(r*=sD,_-=53,n=eD(r)),_+=(n>>oD)-rD|0,I=n&tD|0,n=I|aD|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=Qp),r=Kp(r,n),i=vD[E],N=r-i,x=1/(r+i),a=N*x,c=Ol(a,0),t=(n>>1|iD)+lD,t+=E<<18,f=Kp(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*nD(o),m+=p*(c+a),o=c*c,f=3+o+m,f=Ol(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=Ol(s,0),v=x-(s-N),h=cD*s,g=fD*s+v*uD+pD[E],l=dD[E],$=_,w=h+g+l+$,w=Ol(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var hD=mD;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gD(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var yD=gD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var $D=ne,wD=yD,ND=1.4426950408889634,_D=1.4426950216293335,xD=19259629911266175e-24;function ID(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*wD(a),c=_D*a,p=a*xD-o*ND,t=c+p,t=$D(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var ED=ID;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bD(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var PD=bD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var AD=ee,Yp=je,OD=ne,kD=Ke,jD=rn,CD=_t,Zp=Ie,Jp=fe,e2=Yn,LD=PD,r2=1048576,FD=1071644672,Ca=20,SD=.6931471824645996,TD=-1904654299957768e-24;function HD(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&Jp|0,v=(s>>Ca)-Zp|0,l=0,s>FD&&(l=e+(r2>>v+1)>>>0,v=((l&Jp)>>Ca)-Zp|0,t=(l&~(e2>>v))>>>0,o=Yp(0,t),l=(l&e2|r2)>>Ca-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=OD(o,0),p=o*SD,f=(n-(o-r))*CD+o*TD,i=p+f,u=f-(i-p),o=i*i,a=i-o*LD(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=AD(i),e=kD(e),e+=l<<Ca>>>0,e>>Ca<=0?i=jD(i,l):i=Yp(i,e),i}var RD=HD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var n2=L,t2=M5,a2=Xe,zD=xe,i2=me,DD=M,S0=en,GD=ne,l2=Ke,BD=Z,UD=G,T0=fe,WD=Uz,qD=Xz,VD=Yz,MD=hD,XD=ED,KD=RD,QD=1072693247,YD=1105199104,ZD=1139802112,o2=1083179008,JD=1072693248,eG=1083231232,rG=3230714880,s2=31,cn=1e300,fn=1e-300,nG=8008566259537294e-32,zr=[0,0],u2=[0,0];function X5(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(n2(e)||n2(r))return NaN;if(S0.assign(r,zr,1,0),p=zr[0],f=zr[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return i2(e);if(r===-.5)return 1/i2(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(a2(r))return VD(e,r)}if(S0.assign(e,zr,1,0),o=zr[0],c=zr[1],c===0){if(o===0)return WD(e,r);if(e===1)return 1;if(e===-1&&t2(r))return-1;if(a2(e))return e===BD?X5(-0,-r):r<0?0:UD}if(e<0&&zD(r)===!1)return(e-e)/(e-e);if(a=DD(e),n=o&T0|0,t=p&T0|0,u=o>>>s2|0,i=p>>>s2|0,u&&t2(r)?u=-1:u=1,t>YD){if(t>ZD)return qD(e,r);if(n<QD)return i===1?u*cn*cn:u*fn*fn;if(n>JD)return i===0?u*cn*cn:u*fn*fn;h=XD(u2,a)}else h=MD(u2,a,n);if(l=GD(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,S0.assign(g,zr,1,0),w=l2(zr[0]),y=l2(zr[1]),w>=o2){if(w-o2|y||v+nG>g-s)return u*cn*cn}else if((w&T0)>=eG&&(w-rG|y||v<=g-s))return u*fn*fn;return g=KD(w,s,v),u*g}var tG=X5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aG=tG,iG=aG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lG(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var oG=lG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var sG=Ti,c2=iG,uG=J,cG=oG,fG=143.01608;function vG(e){var r,n,t;return r=1/e,r=1+r*cG(r),n=uG(e),e>fG?(t=c2(e,.5*e-.25),n=t*(t/n)):n=c2(e,e-.5)/n,sG*n*r}var dG=vG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var pG=Is;function mG(e,r){return r/((1+pG*e)*e)}var hG=mG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gG(e){var r,n,t;return e===0?1:(e<0?r=-e:r=e,r<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),t=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),t=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/t)}var yG=gG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var $G=L,wG=xe,NG=Si,f2=M,_G=Be,xG=Fi,v2=G,d2=Z,p2=nr,m2=dG,h2=hG,IG=yG;function EG(e){var r,n,t,a;if(wG(e)&&e<0||e===d2||$G(e))return NaN;if(e===0)return NG(e)?d2:v2;if(e>171.61447887182297)return v2;if(e<-170.5674972726612)return 0;if(n=f2(e),n>33)return e>=0?m2(e):(t=_G(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*xG(p2*a),r*p2/(f2(a)*m2(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return h2(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return h2(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*IG(e))}var bG=EG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PG=bG,AG=PG;/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OG=170,kG=OG;const jG=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CG=L,LG=xe,FG=AG,SG=G,TG=kG,HG=jG;function RG(e){return CG(e)?NaN:LG(e)?e<0?NaN:e<=TG?HG[e]:SG:FG(e+1)}var zG=RG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DG=zG,GG=DG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BG=14901161193847656e-24,UG=BG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WG=709.782712893384,xt=WG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var qG=J;function VG(e,r){var n,t,a,o;if(a=qG(-r),t=a,t!==0)for(n=t,o=1;o<e;++o)n/=o,n*=r,t+=n;return t}var MG=VG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function XG(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}var KG=XG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function QG(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}var YG=QG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZG(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}var JG=ZG;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eB(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}var rB=eB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function nB(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}var tB=nB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function aB(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}var iB=aB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lB(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}var oB=lB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sB(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}var uB=sB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var cB=L,g2=J,fB=ne,vB=G,dB=Z,pB=KG,mB=YG,hB=JG,gB=rB,yB=tB,$B=iB,wB=oB,NB=uB,kl=1e-300,_B=13877787807814457e-33,y2=.8450629115104675,xB=.12837916709551256,IB=1,EB=-.0023621185607526594,bB=1,PB=-.009864944034847148,AB=1,OB=-.0098649429247001,kB=1;function jB(e){var r,n,t,a,o,c,p,f;if(cB(e))return NaN;if(e===vB)return 0;if(e===dB)return 2;if(e===0)return 1;if(e<0?(r=!0,n=-e):(r=!1,n=e),n<.84375)return n<_B?1-e:(t=e*e,a=xB+t*pB(t),o=IB+t*mB(t),c=a/o,e<.25?1-(e+e*c):(a=e*c,a+=e-.5,.5-a));if(n<1.25)return o=n-1,p=EB+o*hB(o),f=bB+o*gB(o),r?1+y2+p/f:1-y2-p/f;if(n<28){if(o=1/(n*n),n<2.857142857142857)a=PB+o*yB(o),o=AB+o*$B(o);else{if(e<-6)return 2-kl;a=OB+o*wB(o),o=kB+o*NB(o)}return t=fB(n,0),a=g2(-(t*t)-.5625)*g2((t-n)*(t+n)+a/o),r?2-a/n:a/n}return r?2-kl:kl*kl}var CB=jB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LB=CB,va=LB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var FB=va,$2=me,SB=J,TB=nr;function HB(e,r){var n,t,a,o,c;if(o=FB($2(r)),o!==0&&e>1){for(t=SB(-r)/$2(TB*r),t*=r,n=.5,t/=n,a=t,c=2;c<e;++c)t/=c-n,t*=r,a+=t;o+=a}return o}var RB=HB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zB=-708.3964185322641,da=zB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Pt=J,jl=se,DB=Ce,w2=xt,N2=da;function GB(e,r){var n,t;return t=e*DB(r),r>=1?t<w2&&-r>N2?n=jl(r,e)*Pt(-r):e>=1?n=jl(r/Pt(r/e),e):n=Pt(t-r):t>N2?n=jl(r,e)*Pt(-r):r/e<w2?n=jl(r/Pt(r/e),e):n=Pt(t-r),n}var BB=GB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UB(e,r){var n,t;if(t=e.length,t<2||r===0)return t===0?0:e[0];for(t-=1,n=e[t]*r+e[t-1],t-=2;t>=0;)n=n*r+e[t],t-=1;return n}var K5=UB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WB=Function,qB=WB;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VB=qB,MB=VB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XB=MB,KB=K5;function QB(e){var r,n,t,a;if(e.length>500)return o;if(r="return function evalpoly(x){",n=e.length,n===0)r+="return 0.0;";else if(n===1)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return "+e[0],t=n-1,a=1;a<n;a++)r+="+x*",a<t&&(r+="("),r+=e[a];for(a=0;a<t-1;a++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpoly.factory.js",new XB(r)();function o(c){return KB(e,c)}}var YB=QB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZB=q,Q5=K5,JB=YB;ZB(Q5,"factory",JB);var eU=Q5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rU=eval,nU=rU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tU=nU;function aU(){var e;try{tU('"use strict"; (function* () {})'),e=!0}catch{e=!1}return e}var iU=aU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lU=iU,Y5=lU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl=M,oU=nn,sU=1e6;function uU(e,r){var n,t,a,o,c,p;if(p={},arguments.length>1&&(p=r),t=p.tolerance||oU,o=p.maxTerms||sU,c=p.initialValue||0,n=typeof e.next=="function",n===!0){for(a of e)if(c+=a,Cl(t*c)>=Cl(a)||--o===0)break}else do a=e(),c+=a;while(Cl(t*c)<Cl(a)&&--o);return c}var cU=uU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _2=M,fU=nn,vU=1e6;function dU(e,r){var n,t,a,o,c;c={},arguments.length>1&&(c=r),n=c.tolerance||fU,a=c.maxTerms||vU,o=c.initialValue||0;do t=e(),o+=t;while(_2(n*o)<_2(t)&&--a);return o}var pU=dU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mU=Y5,hU=cU,gU=pU,af;mU()?af=hU:af=gU;var Ps=af;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/function yU(e){var r=-e,n=-1,t=0;return a;function a(){return n*=r,t+=1,n/t}}var $U=yU;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var wU=M,NU=Ce,_U=nn,xU=Ps,IU=$U;function EU(e){var r,n;return e<=-1?NaN:(n=wU(e),n>.95?NU(1+e)-e:n<_U?-e*e/2:(r={initialValue:-e},xU(IU(e),r)))}var bU=EU;/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PU=bU,AU=PU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OU=6.283185307179586,kU=OU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jU(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}var CU=jU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function LU(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}var FU=LU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function SU(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}var TU=SU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function HU(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}var RU=HU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zU(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}var DU=zU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function GU(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}var BU=GU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function UU(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}var WU=UU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qU(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}var VU=qU;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MU(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}var XU=MU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var KU=eU,QU=AU,YU=va,H0=me,ZU=J,JU=kU,eW=CU,rW=FU,nW=TU,tW=RU,aW=DU,iW=BU,lW=WU,oW=VU,sW=XU,dr=[0,0,0,0,0,0,0,0,0,0];function uW(e,r){var n,t,a,o,c;return t=(r-e)/e,a=-QU(t),o=e*a,c=H0(2*a),r<e&&(c=-c),dr[0]=eW(c),dr[1]=rW(c),dr[2]=nW(c),dr[3]=tW(c),dr[4]=aW(c),dr[5]=iW(c),dr[6]=lW(c),dr[7]=oW(c),dr[8]=sW(c),dr[9]=-.0005967612901927463,n=KU(dr,1/e),n*=ZU(-o)/H0(JU*e),r<e&&(n=-n),n+=YU(H0(o))/2,n}var cW=uW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function fW(e,r){var n=1,t=e,a=r;return o;function o(){var c=n;return t+=1,n*=a/t,c}}var vW=fW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var dW=Ps,pW=vW;function mW(e,r,n){var t,a;return n=n||0,a=pW(e,r),t=dW(a,{initialValue:n}),t}var hW=mW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gW(e){var r,n,t;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(n=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),t=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,n=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),t=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),n/t)}var yW=gW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var $W=yW,wW=$W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NW=wW,As=NW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var _W=As,xW=xs,IW=Es,EW=Fr,bW=me,PW=M,vn=J,La=se,R0=bs,z0=ua,x2=Ce,Ll=xt,Fa=da,D0=Hi,AW=fa;function OW(e,r){var n,t,a,o,c,p,f;return a=e+D0-.5,f=(r-e-D0+.5)/a,e<1?r<=Fa?vn(e*x2(r)-r-xW(e)):La(r,e)*vn(-r)/IW(e):(PW(f*f*e)<=100&&e>150?(n=e*(EW(f)-f)+r*(.5-D0)/a,n=vn(n)):(o=e*x2(r/a),c=e-r,z0(o,c)<=Fa||R0(o,c)>=Ll?(t=c/e,z0(o,c)/2>Fa&&R0(o,c)/2<Ll?(p=La(r/a,e/2)*vn(c/2),n=p*p):z0(o,c)/4>Fa&&R0(o,c)/4<Ll&&r>e?(p=La(r/a,e/4)*vn(c/4),n=p*p,n*=n):t>Fa&&t<Ll?n=La(r*vn(t)/a,e):n=vn(o+c)):n=La(r/a,e)*vn(c)),n*=bW(a/AW)/_W(e),n)}var kW=OW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var G0=L,jW=Xe,I2=M,CW=ca,LW=Ce,FW=se,SW=hv;function TW(e,r){var n,t;if(G0(e)||G0(r))return NaN;if(r===0)return 0;if(e===0)return-1;if(e<0&&r%2===0&&(e=-e),e>0){if((I2(r*(e-1))<.5||I2(r)<.2)&&(t=LW(e)*r,t<.5))return CW(t)}else if(SW(r)!==r)return NaN;return n=FW(e,r)-1,jW(n)||G0(n)?NaN:n}var HW=TW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RW=HW,zW=RW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E2=Nt;function DW(e){return e>0?E2(e-1):E2(e+1)}var GW=DW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BW=GW,Z5=BW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var b2=Z5,UW=Lr,WW=Z,Fl=G;function qW(e,r){return r===WW?Fl:r===Fl?0:r>0?b2(r)?e:0:b2(r)?UW(Fl,e):Fl}var VW=qW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var MW=fe,XW=ee,KW=1072693247,Sl=1e300,Tl=1e-300;function QW(e,r){var n,t;return t=XW(e),n=t&MW,n<=KW?r<0?Sl*Sl:Tl*Tl:r>0?Sl*Sl:Tl*Tl}var YW=QW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZW=M,P2=G;function JW(e,r){return e===-1?(e-e)/(e-e):e===1?1:ZW(e)<1==(r===P2)?0:P2}var eq=JW;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rq(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var nq=rq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var tq=ee,Hl=ne,A2=je,aq=Ie,iq=nq,lq=1048575,O2=1048576,oq=1072693248,sq=536870912,uq=524288,cq=20,fq=9007199254740992,vq=.9617966939259756,dq=.9617967009544373,pq=-7028461650952758e-24,mq=[1,1.5],hq=[0,.5849624872207642],gq=[0,1350039202129749e-23];function yq(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<O2&&(r*=fq,_-=53,n=tq(r)),_+=(n>>cq)-aq|0,I=n&lq|0,n=I|oq|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=O2),r=A2(r,n),i=mq[E],N=r-i,x=1/(r+i),a=N*x,c=Hl(a,0),t=(n>>1|sq)+uq,t+=E<<18,f=A2(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*iq(o),m+=p*(c+a),o=c*c,f=3+o+m,f=Hl(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=Hl(s,0),v=x-(s-N),h=dq*s,g=pq*s+v*vq+gq[E],l=hq[E],$=_,w=h+g+l+$,w=Hl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var $q=yq;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wq(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var Nq=wq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var _q=ne,xq=Nq,Iq=1.4426950408889634,Eq=1.4426950216293335,bq=19259629911266175e-24;function Pq(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*xq(a),c=Eq*a,p=a*bq-o*Iq,t=c+p,t=_q(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var Aq=Pq;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Oq(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var kq=Oq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jq=ee,k2=je,Cq=ne,Lq=Ke,Fq=rn,Sq=_t,j2=Ie,C2=fe,L2=Yn,Tq=kq,F2=1048576,Hq=1071644672,Sa=20,Rq=.6931471824645996,zq=-1904654299957768e-24;function Dq(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&C2|0,v=(s>>Sa)-j2|0,l=0,s>Hq&&(l=e+(F2>>v+1)>>>0,v=((l&C2)>>Sa)-j2|0,t=(l&~(L2>>v))>>>0,o=k2(0,t),l=(l&L2|F2)>>Sa-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=Cq(o,0),p=o*Rq,f=(n-(o-r))*Sq+o*zq,i=p+f,u=f-(i-p),o=i*i,a=i-o*Tq(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=jq(i),e=Lq(e),e+=l<<Sa>>>0,e>>Sa<=0?i=Fq(i,l):i=k2(i,e),i}var Gq=Dq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var S2=L,T2=Z5,H2=Xe,Bq=xe,R2=me,Uq=M,B0=en,Wq=ne,z2=Ke,qq=Z,Vq=G,U0=fe,Mq=VW,Xq=YW,Kq=eq,Qq=$q,Yq=Aq,Zq=Gq,Jq=1072693247,eV=1105199104,rV=1139802112,D2=1083179008,nV=1072693248,tV=1083231232,aV=3230714880,G2=31,dn=1e300,pn=1e-300,iV=8008566259537294e-32,Dr=[0,0],B2=[0,0];function J5(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(S2(e)||S2(r))return NaN;if(B0.assign(r,Dr,1,0),p=Dr[0],f=Dr[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return R2(e);if(r===-.5)return 1/R2(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(H2(r))return Kq(e,r)}if(B0.assign(e,Dr,1,0),o=Dr[0],c=Dr[1],c===0){if(o===0)return Mq(e,r);if(e===1)return 1;if(e===-1&&T2(r))return-1;if(H2(e))return e===qq?J5(-0,-r):r<0?0:Vq}if(e<0&&Bq(r)===!1)return(e-e)/(e-e);if(a=Uq(e),n=o&U0|0,t=p&U0|0,u=o>>>G2|0,i=p>>>G2|0,u&&T2(r)?u=-1:u=1,t>eV){if(t>rV)return Xq(e,r);if(n<Jq)return i===1?u*dn*dn:u*pn*pn;if(n>nV)return i===0?u*dn*dn:u*pn*pn;h=Yq(B2,a)}else h=Qq(B2,a,n);if(l=Wq(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,B0.assign(g,Dr,1,0),w=z2(Dr[0]),y=z2(Dr[1]),w>=D2){if(w-D2|y||v+iV>g-s)return u*dn*dn}else if((w&U0)>=tV&&(w-aV|y||v<=g-s))return u*pn*pn;return g=Zq(w,s,v),u*g}var lV=J5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oV=lV,sV=oV;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uV(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var cV=uV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var fV=Ti,U2=sV,vV=J,dV=cV,pV=143.01608;function mV(e){var r,n,t;return r=1/e,r=1+r*dV(r),n=vV(e),e>pV?(t=U2(e,.5*e-.25),n=t*(t/n)):n=U2(e,e-.5)/n,fV*n*r}var hV=mV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var gV=Is;function yV(e,r){return r/((1+gV*e)*e)}var $V=yV;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wV(e){var r,n,t;return e===0?1:(e<0?r=-e:r=e,r<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),t=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),t=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/t)}var NV=wV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var _V=L,xV=xe,IV=Si,W2=M,EV=Be,bV=Fi,q2=G,V2=Z,M2=nr,X2=hV,K2=$V,PV=NV;function AV(e){var r,n,t,a;if(xV(e)&&e<0||e===V2||_V(e))return NaN;if(e===0)return IV(e)?V2:q2;if(e>171.61447887182297)return q2;if(e<-170.5674972726612)return 0;if(n=W2(e),n>33)return e>=0?X2(e):(t=EV(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*bV(M2*a),r*M2/(W2(a)*X2(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return K2(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return K2(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*PV(e))}var OV=AV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kV=OV,jV=kV;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function CV(e){var r,n,t;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(n=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),t=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,n=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),t=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),n/t)}var LV=CV;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function FV(e){var r,n,t;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(n=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),t=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,n=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),t=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),n/t)}var SV=FV;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function TV(e){var r,n,t;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(n=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),t=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,n=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),t=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),n/t)}var HV=TV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var W0=Ce,RV=nn,zV=LV,DV=SV,GV=HV,BV=.15896368026733398,UV=.5281534194946289,WV=.45201730728149414;function qV(e,r,n){var t,a,o,c;if(e<RV)return-W0(e);if(r===0||n===0)return 0;if(a=0,e>2){if(e>=3){do e-=1,n-=1,a+=W0(e);while(e>=3);n=e-2}return o=n*(e+1),c=zV(n),a+=o*BV+o*c,a}return e<1&&(a+=-W0(e),n=r,r=e,e+=1),e<=1.5?(o=DV(r),t=r*n,a+=t*UV+t*o,a):(o=n*r,c=GV(-n),a+=o*WV+o*c,a)}var VV=qV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Q2=jV,Y2=ca,MV=Fr,XV=L,Z2=VV;function KV(e){return XV(e)?NaN:e<0?e<-.5?Q2(1+e)-1:Y2(-MV(e)+Z2(e+2,e+1,e)):e<2?Y2(Z2(e+1,e,e-1)):Q2(1+e)-1}var QV=KV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YV=QV,ZV=YV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function JV(e,r){var n,t,a,o;return n=-r,r=-r,t=e+1,a=1,c;function c(){return o=n/t,n*=r,a+=1,n/=a,t+=1,o}}var eM=JV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rM=zW,nM=Ps,tM=ZV,aM=eM;function iM(e,r,n){var t,a,o,c,p;return a=tM(e),o=(a+1)/e,c=rM(r,e),a-=c,a/=e,p=aM(e,r),c+=1,t=n?o:0,a=-c*nM(p,{initialValue:(t-a)/c}),n&&(a=-a),[a,o]}var lM=iM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oM=11754943508222875e-54,eg=oM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yo=M,Or=eg,sM=nn,uM=1e6;function cM(e,r,n){var t,a,o,c,p,f,u;if(t=typeof e.next=="function",u=t?e.next().value:e(),c=u[1],o=u[0],c===0&&(c=Or),p=c,f=0,t===!0)do u=e.next().value,u&&(f=u[1]+u[0]*f,f===0&&(f=Or),p=u[1]+u[0]/p,p===0&&(p=Or),f=1/f,a=p*f,c*=a);while(Yo(a-1)>r&&--n);else do u=e(),u&&(f=u[1]+u[0]*f,f===0&&(f=Or),p=u[1]+u[0]/p,p===0&&(p=Or),f=1/f,a=p*f,c*=a);while(u&&Yo(a-1)>r&&--n);return o/c}function fM(e,r,n){var t,a,o,c,p,f;if(t=typeof e.next=="function",f=t?e.next().value:e(),o=f[1],o===0&&(o=Or),c=o,p=0,t===!0)do f=e.next().value,f&&(p=f[1]+f[0]*p,p===0&&(p=Or),c=f[1]+f[0]/c,c===0&&(c=Or),p=1/p,a=c*p,o*=a);while(f&&Yo(a-1)>r&&--n);else do f=e(),f&&(p=f[1]+f[0]*p,p===0&&(p=Or),c=f[1]+f[0]/c,c===0&&(c=Or),p=1/p,a=c*p,o*=a);while(f&&Yo(a-1)>r&&--n);return o}function vM(e,r){var n,t,a;return t={},arguments.length>1&&(t=r),n=t.maxIter||uM,a=t.tolerance||sM,t.keep?fM(e,a,n):cM(e,a,n)}var dM=vM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rg=M,pM=nn,Xt=eg,mM=1e6;function hM(e,r,n){var t,a,o,c,p,f;f=e(),p=f[1],a=f[0],p===0&&(p=Xt),o=p,c=0;do f=e(),f&&(c=f[1]+f[0]*c,c===0&&(c=Xt),o=f[1]+f[0]/o,o===0&&(o=Xt),c=1/c,t=o*c,p*=t);while(f&&rg(t-1)>r&&--n);return a/p}function gM(e,r,n){var t,a,o,c,p;p=e(),c=p[1],c===0&&(c=Xt),a=c,o=0;do p=e(),p&&(o=p[1]+p[0]*o,o===0&&(o=Xt),a=p[1]+p[0]/a,a===0&&(a=Xt),o=1/o,t=a*o,c*=t);while(p&&rg(t-1)>r&&--n);return c}function yM(e,r){var n,t,a;return t={},arguments.length>1&&(t=r),a=t.tolerance||pM,n=t.maxIter||mM,t.keep?gM(e,a,n):hM(e,a,n)}var $M=yM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wM=Y5,NM=dM,_M=$M,lf;wM()?lf=NM:lf=_M;var ng=lf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function xM(e,r){var n=r-e+1,t=e,a=0;return o;function o(){return a+=1,n+=2,[a*(t-a),n]}}var IM=xM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var EM=ng,bM=IM;function PM(e,r){var n=bM(e,r);return 1/(r-e+1+EM(n))}var AM=PM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var OM=xs,kM=Be,Ta=Es,J2=M,jM=J,em=se,pr=Ce,CM=UG,rm=B5,LM=Ti,nm=xt,FM=G,SM=MG,TM=RB,tm=BB,HM=cW,q0=hW,am=kW,RM=lM,im=AM,zM=170;function tg(e,r,n,t){var a,o,c,p,f,u,i,l,s,v,h,g,w,y,$;if(e<0||r<=0)return NaN;if(o=n===void 0?!0:n,l=t,s=0,r>=zM&&!o)return l&&r*4<e?(s=r*pr(e)-e,s+=pr(im(r,e))):!l&&r>4*e?(s=r*pr(e)-e,p=0,s+=pr(q0(r,e,p)/r)):(s=tg(r,e,!0,l),s===0?l?(s=1+1/(12*r)+1/(288*r*r),s=pr(s)-r+(r-.5)*pr(r),s+=pr(LM)):(s=r*pr(e)-e,p=0,s+=pr(q0(r,e,p)/r)):s=pr(s)+OM(r)),s>nm?FM:jM(s);switch(i=r<30&&r<=e+1&&e<nm,i?(y=kM(r),v=y===r,f=v?!1:J2(y-r)===.5):v=f=!1,v&&e>.6?(l=!l,c=0):f&&e>.2?(l=!l,c=1):e<CM&&r>1?c=6:e<.5?-.4/pr(e)<r?c=2:c=3:e<1.1?e*.75<r?c=2:c=3:(u=!1,o&&r>20&&(h=J2((e-r)/r),r>200?20/r>h*h&&(u=!0):h<.4&&(u=!0)),u?c=5:e-1/(3*e)<r?c=2:(c=4,l=!l)),c){case 0:s=SM(r,e),o===!1&&(s*=Ta(r));break;case 1:s=TM(r,e),o===!1&&(s*=Ta(r));break;case 2:s=o?am(r,e):tm(r,e),s!==0&&(p=0,a=!1,l&&(p=o?1:Ta(r),o||s>=1||rm*s>p?(p/=s,o||r<1||rm/r>p?(p*=-r,a=!0):p=0):p=0)),s*=q0(r,e,p)/r,a&&(l=!1,s=-s);break;case 3:l=!l,w=RM(r,e,l),s=w[0],$=w[1],l=!1,o&&(s/=$);break;case 4:s=o?am(r,e):tm(r,e),s!==0&&(s*=im(r,e));break;case 5:s=HM(r,e),e>=r&&(l=!l);break;case 6:s=o?em(e,r)/Ta(r+1):em(e,r)/r,s*=1-r*e/(r+1);break}return o&&s>1&&(s=1),l&&(g=o?1:Ta(r),s=g-s),s}var DM=tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GM=DM,Ri=GM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var At=J,Rl=se,BM=Ce,lm=xt,om=da;function UM(e,r){var n,t;return t=e*BM(r),r>=1?t<lm&&-r>om?n=Rl(r,e)*At(-r):e>=1?n=Rl(r/At(r/e),e):n=At(t-r):t>om?n=Rl(r,e)*At(-r):r/e<lm?n=Rl(r/At(r/e),e):n=At(t-r),n}var WM=UM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var qM=As,VM=xs,MM=Es,XM=Fr,KM=me,QM=M,mn=J,Ha=se,V0=bs,M0=ua,sm=Ce,zl=xt,Ra=da,X0=Hi,YM=fa;function ZM(e,r){var n,t,a,o,c,p,f;return a=e+X0-.5,f=(r-e-X0+.5)/a,e<1?r<=Ra?mn(e*sm(r)-r-VM(e)):Ha(r,e)*mn(-r)/MM(e):(QM(f*f*e)<=100&&e>150?(n=e*(XM(f)-f)+r*(.5-X0)/a,n=mn(n)):(o=e*sm(r/a),c=e-r,M0(o,c)<=Ra||V0(o,c)>=zl?(t=c/e,M0(o,c)/2>Ra&&V0(o,c)/2<zl?(p=Ha(r/a,e/2)*mn(c/2),n=p*p):M0(o,c)/4>Ra&&V0(o,c)/4<zl&&r>e?(p=Ha(r/a,e/4)*mn(c/4),n=p*p,n*=n):t>Ra&&t<zl?n=Ha(r*mn(t)/a,e):n=mn(o+c)):n=Ha(r/a,e)*mn(c)),n*=KM(a/YM)/qM(e),n)}var JM=ZM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var eX=Tz,um=GG,rX=Ri,nX=Fr,Dl=M,cm=se,tX=Ce,aX=Li,fm=nn,iX=WM,lX=JM,hn=new Array(30);function oX(e,r,n,t,a,o,c){var p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;if(s=r-1,I=e+s/2,t<.35?w=nX(-t):w=tX(n),E=-I*w,$=lX(r,E),$<=aX)return a;for(c?(p=$/eX(e,r),p/=cm(I,r)):p=iX(r,E)/cm(I,r),p*=o,hn[0]=1,m=rX(E,r,!0,!0),m/=$,i=a+p*m,u=1,v=w/2,v*=v,h=1,y=4*I*I,l=r,x=1;x<hn.length;++x){for(u+=2,hn[x]=0,g=r-x,f=3,N=1;N<x;++N)g=N*r-x,hn[x]+=g*hn[x-N]/um(f),f+=2;if(hn[x]/=x,hn[x]+=s/um(u),m=(l*(l+1)*m+(E+l+1)*h)/y,h*=v,l+=2,_=p*hn[x]*m,i+=_,_>1){if(Dl(_)<Dl(fm*i))break}else if(Dl(_/fm)<Dl(i))break}return i}var sX=oX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/function uX(e,r,n){var t,a;if(n===0)return 1;for(t=1,a=0;a<n;a++)t*=(e+a)/(r+a);return t}var cX=uX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fX=ws,vm=L,K0=G;function vX(e,r){return vm(e)||vm(r)?NaN:e===K0||r===K0?K0:e===r&&e===0?fX(e)?e:r:e>r?e:r}var dX=vX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pX=dX,mX=pX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dm=M,hX=mX;function gX(e,r){return hX(dm(e),dm(r))}var yX=gX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $X=yX,wX=$X;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pm=M,NX=ua;function _X(e,r){return NX(pm(e),pm(r))}var xX=_X;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IX=xX,EX=IX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Q0=As,bX=wX,PX=EX,mm=ca,gn=Fr,hm=me,Gl=M,xr=J,Ir=se,AX=ua,tr=Ce,Er=xt,Ot=da,Y0=Hi,OX=fa;function kX(e,r,n,t,a){var o,c,p,f,u,i,l,s,v,h,g,w,y,$;if(!a)return Ir(n,e)*Ir(t,r);if(y=e+r,f=e+Y0-.5,u=r+Y0-.5,i=y+Y0-.5,o=Q0(y),o/=Q0(e)*Q0(r),o*=hm(u/OX),o*=hm(f/i),l=(n*r-t*f)/f,s=(t*e-n*u)/u,PX(l,s)<.2)if(l*s>0||AX(e,r)<1)Gl(l)<.1?o*=xr(e*gn(l)):o*=Ir(n*i/f,e),Gl(s)<.1?o*=xr(r*gn(s)):o*=Ir(t*i/u,r);else if(bX(l,s)<.5)c=e<r,p=r/e,c&&p*s<.1||!c&&l/p>.1?(v=mm(p*gn(s)),v=l+v+v*l,v=e*gn(v),o*=xr(v)):(v=mm(gn(l)/p),v=s+v+v*s,v=r*gn(v),o*=xr(v));else if(Gl(l)<Gl(s))if($=e*gn(l)+r*tr(t*i/u),$<=Ot||$>=Er){if($+=tr(o),$>=Er)return NaN;o=xr($)}else o*=xr($);else if($=r*gn(s)+e*tr(n*i/f),$<=Ot||$>=Er){if($+=tr(o),$>=Er)return NaN;o=xr($)}else o*=xr($);else if(g=n*i/f,w=t*i/u,l=e*tr(g),s=r*tr(w),l>=Er||l<=Ot||s>=Er||s<=Ot)if(e<r)if(h=Ir(w,r/e),v=e*(tr(g)+tr(h)),v<Er&&v>Ot)o*=Ir(h*g,e);else{if(s+=l+tr(o),s>=Er)return NaN;o=xr(s)}else if(h=Ir(g,e/r),v=(tr(h)+tr(w))*r,v<Er&&v>Ot)o*=Ir(h*w,r);else{if(s+=l+tr(o),s>=Er)return NaN;o=xr(s)}else o*=Ir(g,e)*Ir(w,r);return o}var _v=kX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var jX=ng,CX=_v,LX={keep:!0,maxIter:1e3};function FX(e,r,n,t){var a=0;return o;function o(){var c,p,f;return p=(e+a-1)*(e+r+a-1)*a*(r-a)*n*n,c=e+2*a-1,p/=c*c,f=a,f+=a*(r-a)*n/(e+2*a-1),f+=(e+a)*(e*t-r*n+1+a*(2-n))/(e+2*a+1),a+=1,[p,f]}}function SX(e,r,n,t,a,o){var c,p,f;return c=CX(e,r,n,t,a),o&&(o[1]=c),c===0?c:(f=FX(e,r,n,t),p=jX(f,LX),c/p)}var TX=SX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HX=9007199254740991,ag=HX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RX=2147483647,zX=RX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DX(e,r){var n=0,t;if(e===0)return r;if(r===0)return e;for(;!(e&1)&&!(r&1);)e>>>=1,r>>>=1,n+=1;for(;!(e&1);)e>>>=1;for(;r;){for(;!(r&1);)r>>>=1;e>r&&(t=r,r=e,e=t),r-=e}return e<<n}var GX=DX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function BX(e,r){var n=1,t;if(e===0)return r;if(r===0)return e;for(;e%2===0&&r%2===0;)e/=2,r/=2,n*=2;for(;e%2===0;)e/=2;for(;r;){for(;r%2===0;)r/=2;e>r&&(t=r,r=e,e=t),r-=e}return n*e}var UX=BX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gm=L,ym=xe,$m=G,wm=Z,Nm=zX,WX=GX,qX=UX;function VX(e,r){return gm(e)||gm(r)?NaN:e===$m||r===$m||e===wm||r===wm?NaN:ym(e)&&ym(r)?(e<0&&(e=-e),r<0&&(r=-r),e<=Nm&&r<=Nm?WX(e,r):qX(e,r)):NaN}var MX=VX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XX=MX,KX=XX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QX=ag,YX=G,_m=xe,xm=L,ZX=$v,JX=Be,eK=KX;function of(e,r){var n,t,a,o,c,p,f;if(xm(e)||xm(r))return NaN;if(!_m(e)||!_m(r))return NaN;if(r<0||(t=1,e<0&&(e=-e+r-1,ZX(r)&&(t*=-1)),r>e))return 0;if(r===0||r===e)return t;if(r===1||r===e-1)return t*e;for(e-r<r&&(r=e-r),f=JX(QX/e),n=1,c=1;c<=r&&!(n>f);c++)n*=e,n/=c,e-=1;return c>r?t*n:(a=of(e,r-c+1),a===YX?t*a:(o=of(r,r-c+1),p=eK(a,o),a/=p,o/=p,n/=o,t*n*a))}var rK=of;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nK=rK,tK=nK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Im=tK,et=Be,za=se,aK=Li;function iK(e,r,n,t){var a,o,c,p,f;if(o=za(n,e),o>aK)for(p=o,f=et(e-1);f>r;f--)p*=(f+1)*t/((e-f)*n),o+=p;else if(c=et(e*n),c<=r+1&&(c=et(r+2)),o=za(n,c)*za(t,e-c),o*=Im(et(e),et(c)),o===0)for(f=c-1;f>r;f--)o+=za(n,f)*za(t,e-f),o*=Im(et(e),et(f));else{for(p=o,a=o,f=c-1;f>r;f--)p*=(f+1)*t/((e-f)*n),o+=p;for(p=a,f=c+1;f<=e;f++)p*=(e-f+1)*n/(f*t),o+=p}return o}var lK=iK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var oK=_v;function sK(e,r,n,t,a,o,c){var p,f,u,i;if(p=oK(e,r,n,t,o),c&&(c[1]=p),p/=e,p===0)return p;for(u=1,f=1,i=0;i<a-1;++i)f*=(e+r+i)*n/(e+i+1),u+=f;return p*=u,p}var uK=sK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/beta.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Z0=As,cK=Ps,fK=Fr,vK=me,J0=J,Bl=se,Da=Ce,dK=Li,Em=xt,bm=da,eu=Hi,pK=fa,Pm={maxTerms:100};function mK(e,r,n,t){var a=1-r,o=1;return c;function c(){var p=t/e;return e+=1,t*=a*n/o,o+=1,a+=1,p}}function hK(e,r,n,t,a,o,c){var p,f,u,i,l,s,v,h;return a?(v=e+r,f=e+eu-.5,u=r+eu-.5,i=v+eu-.5,p=Z0(v)/(Z0(e)*Z0(r)),l=Da(i/u)*(r-.5),s=Da(n*i/f)*e,l>bm&&l<Em&&s>bm&&s<Em?(e*r<u*10?p*=J0((r-.5)*fK(e/u)):p*=Bl(i/u,r-.5),p*=Bl(n*i/f,e),p*=vK(f/pK),o&&(o[1]=p*Bl(c,r))):(p=Da(p)+l+s+(Da(f)-1)/2,o&&(o[1]=J0(p+r*Da(c))),p=J0(p))):p=Bl(n,e),p<dK?t:(h=mK(e,r,n,p),Pm.initialValue=t,cK(h,Pm))}var gK=hK,yK=L,$K=ca,Ul=Be,Am=Fr,Om=wv,ar=fH,ru=me,wK=J,Ga=se,NK=bs,km=ua,Wl=B5,jm=Li,_K=pH,xK=U5,ig=nr,yn=sX,nu=cX,IK=_v,Cm=TX,EK=lK,Ba=uK,br=gK,bK=1/ig;function PK(e,r,n,t,a,o,c,p){var f,u,i,l,s,v,h,g,w,y,$,m;if(m=1-e,h=p,g=p+c,o[g]=-1,yK(e)||e<0||e>1)return o[h]=NaN,o[g]=NaN,o;if(t){if(r<0||n<0)return o[h]=NaN,o[g]=NaN,o;if(r===0){if(n===0)return o[h]=NaN,o[g]=NaN,o;if(n>0)return o[h]=a?0:1,o}else if(n===0&&r>0)return o[h]=a?1:0,o}else if(r<=0||n<=0)return o[h]=NaN,o[g]=NaN,o;return e===0?(r===1?o[g]=1:o[g]=r<1?Wl/2:jm*2,a?(o[h]=t?1:ar(r,n),o):(o[h]=0,o)):e===1?(n===1?o[g]=1:o[g]=n<1?Wl/2:jm*2,a?o[h]=0:o[h]=t?1:ar(r,n),o):r===.5&&n===.5?(o[g]=bK*ru(m*e),$=Om(ru(a?m:e)),$/=xK,t||($*=ig),o[h]=$,o):(r===1&&(v=n,n=r,r=v,v=m,m=e,e=v,a=!a),n===1?r===1?(o[h]=a?m:e,o[g]=1,o):(o[g]=r*Ga(e,r-1),m<.5?$=a?-$K(r*Am(-m)):wK(r*Am(-m)):$=a?-(Ga(e,r)-1):Ga(e,r),t||($/=r),o[h]=$,o):(km(r,n)<=1?(e>.5&&(v=n,n=r,r=v,v=m,m=e,e=v,a=!a),NK(r,n)<=1?r>=km(.2,n)||Ga(e,r)<=.9?a?(i=-(t?1:ar(r,n)),a=!1,i=-br(r,n,e,i,t,o,m)):i=br(r,n,e,0,t,o,m):(v=n,n=r,r=v,v=m,m=e,e=v,a=!a,m>=.3?a?(i=-(t?1:ar(r,n)),a=!1,i=-br(r,n,e,i,t,o,m)):i=br(r,n,e,0,t,o,m):(t?u=1:u=nu(r+n,r,20),i=Ba(r,n,e,m,20,t,o),a?(i-=t?1:ar(r,n),a=!1,i=-yn(r+20,n,e,m,i,u,t)):i=yn(r+20,n,e,m,i,u,t))):n<=1||e<.1&&Ga(n*e,r)<=.7?a?(i=-(t?1:ar(r,n)),a=!1,i=-br(r,n,e,i,t,o,m)):i=br(r,n,e,0,t,o,m):(v=n,n=r,r=v,v=m,m=e,e=v,a=!a,m>=.3?a?(i=-(t?1:ar(r,n)),a=!1,i=-br(r,n,e,i,t,o,m)):i=br(r,n,e,0,t,o,m):r>=15?a?(i=-(t?1:ar(r,n)),a=!1,i=-yn(r,n,e,m,i,1,t)):i=yn(r,n,e,m,0,1,t):(t?u=1:u=nu(r+n,r,20),i=Ba(r,n,e,m,20,t,o),a?(i-=t?1:ar(r,n),a=!1,i=-yn(r+20,n,e,m,i,u,t)):i=yn(r+20,n,e,m,i,u,t)))):(r<n?f=r-(r+n)*e:f=(r+n)*m-n,f<0&&(v=n,n=r,r=v,v=m,m=e,e=v,a=!a),n<40?Ul(r)===r&&Ul(n)===n&&r<_K-100?(w=r-1,y=n+w,i=EK(y,w,e,m),t||(i*=ar(r,n))):n*e<=.7?a?(i=-(t?1:ar(r,n)),a=!1,i=-br(r,n,e,i,t,o,m)):i=br(r,n,e,0,t,o,m):r>15?(y=Ul(n),y===n&&(y-=1),l=n-y,t?u=1:u=nu(r+l,l,y),i=Ba(l,r,m,e,y,t),i=yn(r,l,e,m,i,1,t),i/=u):t?(y=Ul(n),l=n-y,l<=0&&(y-=1,l+=1),i=Ba(l,r,m,e,y,t),i+=Ba(r,l,e,m,20,t),a&&(i-=1),i=yn(r+20,l,e,m,i,1,t),a&&(i=-i,a=!1)):i=Cm(r,n,e,m,t,o):i=Cm(r,n,e,m,t,o)),o[g]<0&&(o[g]=IK(r,n,e,m,!0)),s=m*e,o[g]!==0&&(Wl*s<o[g]?o[g]=Wl/2:o[g]/=s),o[h]=a?(t?1:ar(r,n))-i:i,o))}var lg=PK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AK=lg;function OK(e,r,n,t,a){return AK(e,r,n,t,a,[0,0],1,0)}var kK=OK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jK=q,og=kK,CK=lg;jK(og,"assign",CK);var LK=og;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FK=LK.assign;function SK(e,r,n,t,a){var o=[0,0];return t=t!==!1,a=a===!0,FK(e,r,n,t,a,o,1,0),o[0]}var TK=SK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HK=TK,pa=HK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RK=pa,tu=L;function zK(e,r,n){return tu(e)||tu(r)||tu(n)||r<=0||n<=0?NaN:e<=0?0:e>=1?1:RK(e,r,n)}var DK=zK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GK=ue,BK=pa,au=L;function UK(e,r){if(au(e)||au(r)||e<=0||r<=0)return GK(NaN);return n;function n(t){return au(t)?NaN:t<=0?0:t>=1?1:BK(t,e,r)}}var WK=UK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qK=q,sg=DK,VK=WK;qK(sg,"factory",VK);var xv=sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MK=xv,iu=L,XK=G;function KK(e,r,n){return iu(e)||iu(r)||iu(n)||r<=0||n<=0?NaN:e<=0?0:e===XK?1:MK(e/(1+e),r,n)}var QK=KK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YK=ue,ZK=xv.factory,lu=L,JK=G;function eQ(e,r){var n;if(lu(e)||lu(r)||e<=0||r<=0)return YK(NaN);return n=ZK(e,r),t;function t(a){return lu(a)?NaN:a<=0?0:a===JK?1:n(a/(1+a))}}var rQ=eQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nQ=q,ug=QK,tQ=rQ;nQ(ug,"factory",tQ);var aQ=ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iQ=ee;function lQ(e){var r=iQ(e);return!!(r>>>31)}var oQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sQ=oQ,uQ=sQ;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cQ(e){return e===0?-64.85021904942025:-64.85021904942025+e*(-122.88666844901361+e*(-75.00855792314705+e*(-16.157537187333652+e*-.8750608600031904)))}var fQ=cQ;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vQ(e){return e===0?194.5506571482614:194.5506571482614+e*(485.3903996359137+e*(432.88106049129027+e*(165.02700983169885+e*(24.858464901423062+e*1))))}var dQ=vQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var pQ=L,mQ=G,ou=U5,hQ=D5,gQ=Z,yQ=fQ,$Q=dQ,Lm=6123233995736766e-32,wQ=2.414213562373095;function NQ(e){var r,n,t,a;return pQ(e)||e===0?e:e===mQ?ou:e===gQ?-ou:(e<0&&(n=!0,e=-e),r=0,e>wQ?(t=ou,r=1,e=-(1/e)):e<=.66?t=0:(t=hQ,r=2,e=(e-1)/(e+1)),a=e*e,a=a*yQ(a)/$Q(a),a=e*a+e,r===2?a+=.5*Lm:r===1&&(a+=Lm),t+=a,n?-t:t)}var _Q=NQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xQ=_Q,IQ=xQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original code, copyright and license are from [Go]{@link https://golang.org/src/math/atan2.go}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/var ql=Xe,$n=Lr,EQ=uQ,Fm=L,bQ=IQ,PQ=G,wn=nr;function AQ(e,r){var n;return Fm(r)||Fm(e)?NaN:ql(r)?r===PQ?ql(e)?$n(wn/4,e):$n(0,e):ql(e)?$n(3*wn/4,e):$n(wn,e):ql(e)?$n(wn/2,e):e===0?r>=0&&!EQ(r)?$n(0,e):$n(wn,e):r===0?$n(wn/2,e):(n=bQ(e/r),r<0?n<=0?n+wn:n-wn:n)}var OQ=AQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kQ=OQ,cg=kQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su=L,jQ=cg,CQ=.3183098861837907;function LQ(e,r,n){return su(e)||su(n)||su(r)||n<=0?NaN:CQ*jQ(e-r,n)+.5}var FQ=LQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SQ=ue,uu=L,TQ=cg,HQ=.3183098861837907;function RQ(e,r){if(uu(r)||uu(e)||r<=0)return SQ(NaN);return n;function n(t){return uu(t)?NaN:HQ*TQ(t-e,r)+.5}}var zQ=RQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DQ=q,fg=FQ,GQ=zQ;DQ(fg,"factory",GQ);var BQ=fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UQ=Ri,cu=L,WQ=G;function qQ(e,r,n){return cu(e)||cu(r)||cu(n)||r<0||n<=0?NaN:r===0?e<0?0:1:e<=0?0:e===WQ?1:UQ(e*n,r)}var VQ=qQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sm=L;function MQ(e,r){return Sm(e)||Sm(r)?NaN:e<r?0:1}var XQ=MQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KQ=ue,Tm=L;function QQ(e){if(Tm(e))return KQ(NaN);return r;function r(n){return Tm(n)?NaN:n<e?0:1}}var YQ=QQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZQ=q,vg=XQ,JQ=YQ;ZQ(vg,"factory",JQ);var ma=vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eY=ue,rY=ma.factory,nY=Ri,Hm=L,tY=G;function aY(e,r){if(Hm(e)||Hm(r)||e<0||r<=0)return eY(NaN);if(e===0)return rY(0);return n;function n(t){return t<=0?0:t===tY?1:nY(t*r,e)}}var iY=aY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lY=q,dg=VQ,oY=iY;lY(dg,"factory",oY);var It=dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sY=It,Rm=L;function uY(e,r){return Rm(e)||Rm(r)||r<0?NaN:r===0?e<0?0:1:e<=0?0:sY(e*e,r/2,.5)}var cY=uY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fY=ma.factory,vY=It.factory,dY=L;function pY(e){var r;if(e===0)return fY(0);return r=vY(e/2,.5),n;function n(t){return dY(t)?NaN:t<0?0:r(t*t)}}var mY=pY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hY=q,pg=cY,gY=mY;hY(pg,"factory",gY);var yY=pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $Y=It;function wY(e,r){return $Y(e,r/2,.5)}var NY=wY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _Y=It.factory;function xY(e){return _Y(e/2,.5)}var IY=xY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EY=q,mg=NY,bY=IY;EY(mg,"factory",bY);var PY=mg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu=L,AY=yv,OY=nr;function kY(e,r,n){var t;return fu(e)||fu(r)||fu(n)||n<0?NaN:n===0?e<r?0:1:e<r-n?0:e>r+n?1:(t=(e-r)/n,(1+t+AY(t)/OY)/2)}var jY=kY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CY=ue,LY=ma.factory,vu=L,FY=yv,SY=nr;function TY(e,r){if(vu(e)||vu(r)||r<0)return CY(NaN);if(r===0)return LY(e);return n;function n(t){var a;return vu(t)?NaN:t<e-r?0:t>e+r?1:(a=(t-e)/r,(1+a+FY(a)/SY)/2)}}var HY=TY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RY=q,hg=jY,zY=HY;RY(hg,"factory",zY);var DY=hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GY=Be;function BY(e){return GY(e)===e&&e>=0}var UY=BY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WY=UY,gg=WY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qY=gg,VY=It;function MY(e,r,n){return qY(r)?VY(e,r,n):NaN}var XY=MY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KY=gg,QY=ue,YY=It.factory;function ZY(e,r){return KY(e)?YY(e,r):QY(NaN)}var JY=ZY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eZ=q,yg=XY,rZ=JY;eZ(yg,"factory",rZ);var nZ=yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tZ=L,aZ=J,iZ=G;function lZ(e,r){return tZ(r)||r<0||r===iZ?NaN:e<0?0:1-aZ(-r*e)}var oZ=lZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sZ=ue,uZ=L,cZ=J,fZ=G;function vZ(e){if(uZ(e)||e<0||e===fZ)return sZ(NaN);return r;function r(n){return n<0?0:1-cZ(-e*n)}}var dZ=vZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pZ=q,$g=oZ,mZ=dZ;pZ($g,"factory",mZ);var hZ=$g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm=pa,du=L,gZ=G;function yZ(e,r,n){return du(e)||du(r)||du(n)||r<=0||n<=0?NaN:e<=0?0:e===gZ?1:r*e>n?zm(r*e/(n+r*e),r/2,n/2,!0,!1):zm(n/(n+r*e),n/2,r/2,!0,!0)}var $Z=yZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wZ=ue,Dm=pa,pu=L,NZ=G;function _Z(e,r){if(pu(e)||pu(r)||e<=0||r<=0)return wZ(NaN);return n;function n(t){return pu(t)?NaN:t<=0?0:t===NZ?1:e*t>r?Dm(e*t/(r+e*t),e/2,r/2,!0,!1):Dm(r/(r+e*t),r/2,e/2,!0,!0)}}var xZ=_Z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IZ=q,wg=$Z,EZ=xZ;IZ(wg,"factory",EZ);var bZ=wg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl=L,PZ=J,AZ=se;function OZ(e,r,n,t){var a;return Vl(e)||Vl(r)||Vl(n)||Vl(t)||r<=0||n<=0?NaN:e<=t?0:(a=(e-t)/n,PZ(-AZ(a,-r)))}var kZ=OZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jZ=ue,Ml=L,CZ=J,LZ=se;function FZ(e,r,n){if(Ml(e)||Ml(r)||Ml(n)||e<=0||r<=0)return jZ(NaN);return t;function t(a){var o;return Ml(a)?NaN:a<=n?0:(o=(a-n)/r,CZ(-LZ(o,-e)))}}var SZ=FZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TZ=q,Ng=kZ,HZ=SZ;TZ(Ng,"factory",HZ);var RZ=Ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu=L,Gm=J;function zZ(e,r,n){var t;return mu(e)||mu(r)||mu(n)||n<=0?NaN:(t=(e-r)/n,Gm(-Gm(-t)))}var DZ=zZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GZ=ue,hu=L,Bm=J;function BZ(e,r){if(hu(e)||hu(r)||r<=0)return GZ(NaN);return n;function n(t){var a;return hu(t)?NaN:(a=(t-e)/r,Bm(-Bm(-a)))}}var UZ=BZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WZ=q,_g=DZ,qZ=UZ;WZ(_g,"factory",qZ);var VZ=_g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MZ=Ri,gu=L;function XZ(e,r,n){return gu(e)||gu(r)||gu(n)||r<=0||n<=0?NaN:e<=0?0:MZ(n/e,r,!0,!0)}var KZ=XZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QZ=ue,YZ=Ri,yu=L;function ZZ(e,r){if(yu(e)||yu(r)||e<=0||r<=0)return QZ(NaN);return n;function n(t){return yu(t)?NaN:t<=0?0:YZ(r/t,e,!0,!0)}}var JZ=ZZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eJ=q,xg=KZ,rJ=JZ;eJ(xg,"factory",rJ);var nJ=xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u=L,Um=se;function tJ(e,r,n){return $u(e)||$u(r)||$u(n)||r<=0||n<=0?NaN:e<=0?0:e>=1?1:1-Um(1-Um(e,r),n)}var aJ=tJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iJ=ue,wu=L,Wm=se;function lJ(e,r){if(wu(e)||wu(r)||e<=0||r<=0)return iJ(NaN);return n;function n(t){return wu(t)?NaN:t<=0?0:t>=1?1:1-Wm(1-Wm(t,e),r)}}var oJ=lJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sJ=q,Ig=aJ,uJ=oJ;sJ(Ig,"factory",uJ);var cJ=Ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu=L,qm=J;function fJ(e,r,n){var t;return Nu(e)||Nu(r)||Nu(n)||n<=0?NaN:(t=(e-r)/n,e<r?.5*qm(t):1-.5*qm(-t))}var vJ=fJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dJ=ue,_u=L,Vm=J;function pJ(e,r){if(_u(e)||_u(r)||r<=0)return dJ(NaN);return n;function n(t){var a;return _u(t)?NaN:(a=(t-e)/r,t<e?.5*Vm(a):1-.5*Vm(-a))}}var mJ=pJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hJ=q,Eg=vJ,gJ=mJ;hJ(Eg,"factory",gJ);var yJ=Eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu=L,$J=va,wJ=me;function NJ(e,r,n){var t;return xu(e)||xu(r)||xu(n)||n<=0?NaN:e<r?0:(t=wJ(n/(2*(e-r))),$J(t))}var _J=NJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xJ=ue,Iu=L,IJ=va,EJ=me;function bJ(e,r){if(Iu(e)||Iu(r)||r<=0)return xJ(NaN);return n;function n(t){var a;return Iu(t)?NaN:t<e?0:(a=EJ(r/(2*(t-e))),IJ(a))}}var PJ=bJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AJ=q,bg=_J,OJ=PJ;AJ(bg,"factory",OJ);var kJ=bg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu=L,jJ=J;function CJ(e,r,n){var t;return Eu(e)||Eu(r)||Eu(n)||n<0?NaN:n===0?e<r?0:1:(t=(e-r)/n,1/(1+jJ(-t)))}var LJ=CJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FJ=ue,SJ=ma.factory,bu=L,TJ=J;function HJ(e,r){if(bu(e)||bu(r)||r<0)return FJ(NaN);if(r===0)return SJ(e);return n;function n(t){var a;return bu(t)?NaN:(a=(t-e)/r,1/(1+TJ(-a)))}}var RJ=HJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zJ=q,Pg=LJ,DJ=RJ;zJ(Pg,"factory",DJ);var GJ=Pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BJ=va,UJ=me,Pu=L;function WJ(e,r,n){var t,a;return Pu(e)||Pu(r)||Pu(n)||n<0?NaN:n===0?e<r?0:1:(t=n*UJ(2),a=e-r,.5*BJ(-a/t))}var qJ=WJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VJ=ue,MJ=ma.factory,Au=L,XJ=me,KJ=va;function QJ(e,r){var n;if(Au(e)||Au(r)||r<0)return VJ(NaN);if(r===0)return MJ(e);return n=r*XJ(2),t;function t(a){var o;return Au(a)?NaN:(o=a-e,.5*KJ(-o/n))}}var YJ=QJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZJ=q,Ag=qJ,JJ=YJ;ZJ(Ag,"factory",JJ);var Iv=Ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eee=Iv,Ou=L,ree=Ce;function nee(e,r,n){return Ou(e)||Ou(r)||Ou(n)||n<=0?NaN:e<=0?0:eee(ree(e),r,n)}var tee=nee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aee=ue,iee=Iv,ku=L,lee=Ce;function oee(e,r){if(ku(e)||ku(r)||r<=0)return aee(NaN);return n;function n(t){return ku(t)?NaN:t<=0?0:iee(lee(t),e,r)}}var see=oee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uee=q,Og=tee,cee=see;uee(Og,"factory",cee);var fee=Og;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm=Nt;function vee(e){return e>0?Mm(e-1):Mm(e+1)}var dee=vee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pee=dee,kg=pee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Xm=kg,mee=Lr,hee=Z,Xl=G;function gee(e,r){return r===hee?Xl:r===Xl?0:r>0?Xm(r)?e:0:Xm(r)?mee(Xl,e):Xl}var yee=gee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var $ee=fe,wee=ee,Nee=1072693247,Kl=1e300,Ql=1e-300;function _ee(e,r){var n,t;return t=wee(e),n=t&$ee,n<=Nee?r<0?Kl*Kl:Ql*Ql:r>0?Kl*Kl:Ql*Ql}var xee=_ee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iee=M,Km=G;function Eee(e,r){return e===-1?(e-e)/(e-e):e===1?1:Iee(e)<1==(r===Km)?0:Km}var bee=Eee;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Pee(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var Aee=Pee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Oee=ee,Yl=ne,Qm=je,kee=Ie,jee=Aee,Cee=1048575,Ym=1048576,Lee=1072693248,Fee=536870912,See=524288,Tee=20,Hee=9007199254740992,Ree=.9617966939259756,zee=.9617967009544373,Dee=-7028461650952758e-24,Gee=[1,1.5],Bee=[0,.5849624872207642],Uee=[0,1350039202129749e-23];function Wee(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<Ym&&(r*=Hee,_-=53,n=Oee(r)),_+=(n>>Tee)-kee|0,I=n&Cee|0,n=I|Lee|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=Ym),r=Qm(r,n),i=Gee[E],N=r-i,x=1/(r+i),a=N*x,c=Yl(a,0),t=(n>>1|Fee)+See,t+=E<<18,f=Qm(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*jee(o),m+=p*(c+a),o=c*c,f=3+o+m,f=Yl(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=Yl(s,0),v=x-(s-N),h=zee*s,g=Dee*s+v*Ree+Uee[E],l=Bee[E],$=_,w=h+g+l+$,w=Yl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var qee=Wee;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Vee(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var Mee=Vee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Xee=ne,Kee=Mee,Qee=1.4426950408889634,Yee=1.4426950216293335,Zee=19259629911266175e-24;function Jee(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*Kee(a),c=Yee*a,p=a*Zee-o*Qee,t=c+p,t=Xee(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var ere=Jee;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rre(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var nre=rre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var tre=ee,Zm=je,are=ne,ire=Ke,lre=rn,ore=_t,Jm=Ie,e3=fe,r3=Yn,sre=nre,n3=1048576,ure=1071644672,Ua=20,cre=.6931471824645996,fre=-1904654299957768e-24;function vre(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&e3|0,v=(s>>Ua)-Jm|0,l=0,s>ure&&(l=e+(n3>>v+1)>>>0,v=((l&e3)>>Ua)-Jm|0,t=(l&~(r3>>v))>>>0,o=Zm(0,t),l=(l&r3|n3)>>Ua-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=are(o,0),p=o*cre,f=(n-(o-r))*ore+o*fre,i=p+f,u=f-(i-p),o=i*i,a=i-o*sre(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=tre(i),e=ire(e),e+=l<<Ua>>>0,e>>Ua<=0?i=lre(i,l):i=Zm(i,e),i}var dre=vre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var t3=L,a3=kg,i3=Xe,pre=xe,l3=me,mre=M,ju=en,hre=ne,o3=Ke,gre=Z,yre=G,Cu=fe,$re=yee,wre=xee,Nre=bee,_re=qee,xre=ere,Ire=dre,Ere=1072693247,bre=1105199104,Pre=1139802112,s3=1083179008,Are=1072693248,Ore=1083231232,kre=3230714880,u3=31,Nn=1e300,_n=1e-300,jre=8008566259537294e-32,Gr=[0,0],c3=[0,0];function jg(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(t3(e)||t3(r))return NaN;if(ju.assign(r,Gr,1,0),p=Gr[0],f=Gr[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return l3(e);if(r===-.5)return 1/l3(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(i3(r))return Nre(e,r)}if(ju.assign(e,Gr,1,0),o=Gr[0],c=Gr[1],c===0){if(o===0)return $re(e,r);if(e===1)return 1;if(e===-1&&a3(r))return-1;if(i3(e))return e===gre?jg(-0,-r):r<0?0:yre}if(e<0&&pre(r)===!1)return(e-e)/(e-e);if(a=mre(e),n=o&Cu|0,t=p&Cu|0,u=o>>>u3|0,i=p>>>u3|0,u&&a3(r)?u=-1:u=1,t>bre){if(t>Pre)return wre(e,r);if(n<Ere)return i===1?u*Nn*Nn:u*_n*_n;if(n>Are)return i===0?u*Nn*Nn:u*_n*_n;h=xre(c3,a)}else h=_re(c3,a,n);if(l=hre(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,ju.assign(g,Gr,1,0),w=o3(Gr[0]),y=o3(Gr[1]),w>=s3){if(w-s3|y||v+jre>g-s)return u*Nn*Nn}else if((w&Cu)>=Ore&&(w-kre|y||v<=g-s))return u*_n*_n;return g=Ire(w,s,v),u*g}var Cre=jg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lre=Cre,Cg=Lre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu=L,Fre=Cg;function Sre(e,r,n){return Lu(e)||Lu(r)||Lu(n)||r<=0||n<=0?NaN:e<n?0:1-Fre(n/e,r)}var Tre=Sre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hre=ue,Fu=L,Rre=Cg;function zre(e,r){if(Fu(e)||Fu(r)||e<=0||r<=0)return Hre(NaN);return n;function n(t){return Fu(t)?NaN:t<r?0:1-Rre(r/t,e)}}var Dre=zre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gre=q,Lg=Tre,Bre=Dre;Gre(Lg,"factory",Bre);var Ure=Lg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f3=L,Wre=J,v3=se;function qre(e,r){var n;return f3(e)||f3(r)||r<0?NaN:r===0?e<0?0:1:e<0?0:(n=v3(r,2),1-Wre(-v3(e,2)/(2*n)))}var Vre=qre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mre=ue,Xre=ma.factory,d3=L,Kre=J,p3=se;function Qre(e){var r;if(d3(e)||e<0)return Mre(NaN);if(e===0)return Xre(0);return r=p3(e,2),n;function n(t){return d3(t)?NaN:t<0?0:1-Kre(-p3(t,2)/(2*r))}}var Yre=Qre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zre=q,Fg=Vre,Jre=Yre;Zre(Fg,"factory",Jre);var ene=Fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m3=pa,h3=L,rne=se;function nne(e,r){var n,t,a;return h3(e)||h3(r)||r<=0?NaN:e===0?.5:(n=rne(e,2),r>2*n?(a=n/(r+n),t=m3(a,.5,r/2,!0,!0)/2):(a=r/(r+n),t=m3(a,r/2,.5,!0,!1)/2),e>0?1-t:t)}var tne=nne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ane=ue,g3=pa,y3=L,ine=se;function lne(e){if(y3(e)||e<=0)return ane(NaN);return r;function r(n){var t,a,o;return y3(n)?NaN:n===0?.5:(t=ine(n,2),e>2*t?(o=t/(e+t),a=g3(o,.5,e/2,!0,!0)/2):(o=e/(e+t),a=g3(o,e/2,.5,!0,!1)/2),n>0?1-a:a)}}var one=lne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sne=q,Sg=tne,une=one;sne(Sg,"factory",une);var cne=Sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $3=Nt;function fne(e){return e>0?$3(e-1):$3(e+1)}var vne=fne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dne=vne,Tg=dne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var w3=Tg,pne=Lr,mne=Z,Zl=G;function hne(e,r){return r===mne?Zl:r===Zl?0:r>0?w3(r)?e:0:w3(r)?pne(Zl,e):Zl}var gne=hne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var yne=fe,$ne=ee,wne=1072693247,Jl=1e300,eo=1e-300;function Nne(e,r){var n,t;return t=$ne(e),n=t&yne,n<=wne?r<0?Jl*Jl:eo*eo:r>0?Jl*Jl:eo*eo}var _ne=Nne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xne=M,N3=G;function Ine(e,r){return e===-1?(e-e)/(e-e):e===1?1:xne(e)<1==(r===N3)?0:N3}var Ene=Ine;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bne(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var Pne=bne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ane=ee,ro=ne,_3=je,One=Ie,kne=Pne,jne=1048575,x3=1048576,Cne=1072693248,Lne=536870912,Fne=524288,Sne=20,Tne=9007199254740992,Hne=.9617966939259756,Rne=.9617967009544373,zne=-7028461650952758e-24,Dne=[1,1.5],Gne=[0,.5849624872207642],Bne=[0,1350039202129749e-23];function Une(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<x3&&(r*=Tne,_-=53,n=Ane(r)),_+=(n>>Sne)-One|0,I=n&jne|0,n=I|Cne|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=x3),r=_3(r,n),i=Dne[E],N=r-i,x=1/(r+i),a=N*x,c=ro(a,0),t=(n>>1|Lne)+Fne,t+=E<<18,f=_3(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*kne(o),m+=p*(c+a),o=c*c,f=3+o+m,f=ro(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=ro(s,0),v=x-(s-N),h=Rne*s,g=zne*s+v*Hne+Bne[E],l=Gne[E],$=_,w=h+g+l+$,w=ro(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var Wne=Une;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function qne(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var Vne=qne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Mne=ne,Xne=Vne,Kne=1.4426950408889634,Qne=1.4426950216293335,Yne=19259629911266175e-24;function Zne(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*Xne(a),c=Qne*a,p=a*Yne-o*Kne,t=c+p,t=Mne(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var Jne=Zne;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ete(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var rte=ete;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var nte=ee,I3=je,tte=ne,ate=Ke,ite=rn,lte=_t,E3=Ie,b3=fe,P3=Yn,ote=rte,A3=1048576,ste=1071644672,Wa=20,ute=.6931471824645996,cte=-1904654299957768e-24;function fte(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&b3|0,v=(s>>Wa)-E3|0,l=0,s>ste&&(l=e+(A3>>v+1)>>>0,v=((l&b3)>>Wa)-E3|0,t=(l&~(P3>>v))>>>0,o=I3(0,t),l=(l&P3|A3)>>Wa-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=tte(o,0),p=o*ute,f=(n-(o-r))*lte+o*cte,i=p+f,u=f-(i-p),o=i*i,a=i-o*ote(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=nte(i),e=ate(e),e+=l<<Wa>>>0,e>>Wa<=0?i=ite(i,l):i=I3(i,e),i}var vte=fte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var O3=L,k3=Tg,j3=Xe,dte=xe,C3=me,pte=M,Su=en,mte=ne,L3=Ke,hte=Z,gte=G,Tu=fe,yte=gne,$te=_ne,wte=Ene,Nte=Wne,_te=Jne,xte=vte,Ite=1072693247,Ete=1105199104,bte=1139802112,F3=1083179008,Pte=1072693248,Ate=1083231232,Ote=3230714880,S3=31,xn=1e300,In=1e-300,kte=8008566259537294e-32,Br=[0,0],T3=[0,0];function Hg(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(O3(e)||O3(r))return NaN;if(Su.assign(r,Br,1,0),p=Br[0],f=Br[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return C3(e);if(r===-.5)return 1/C3(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(j3(r))return wte(e,r)}if(Su.assign(e,Br,1,0),o=Br[0],c=Br[1],c===0){if(o===0)return yte(e,r);if(e===1)return 1;if(e===-1&&k3(r))return-1;if(j3(e))return e===hte?Hg(-0,-r):r<0?0:gte}if(e<0&&dte(r)===!1)return(e-e)/(e-e);if(a=pte(e),n=o&Tu|0,t=p&Tu|0,u=o>>>S3|0,i=p>>>S3|0,u&&k3(r)?u=-1:u=1,t>Ete){if(t>bte)return $te(e,r);if(n<Ite)return i===1?u*xn*xn:u*In*In;if(n>Pte)return i===0?u*xn*xn:u*In*In;h=_te(T3,a)}else h=Nte(T3,a,n);if(l=mte(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,Su.assign(g,Br,1,0),w=L3(Br[0]),y=L3(Br[1]),w>=F3){if(w-F3|y||v+kte>g-s)return u*xn*xn}else if((w&Tu)>=Ate&&(w-Ote|y||v<=g-s))return u*In*In;return g=xte(w,s,v),u*g}var jte=Hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cte=jte,Rg=Cte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no=L,H3=Rg;function Lte(e,r,n,t){var a,o;return no(e)||no(r)||no(n)||no(t)||r>t||t>n?NaN:e<=r?0:(a=(n-r)*(t-r),o=(n-r)*(n-t),e<=t?H3(e-r,2)/a:e<n?1-H3(n-e,2)/o:1)}var Fte=Lte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R3=ue,to=L,z3=Rg;function Ste(e,r,n){var t,a;if(to(e)||to(r)||to(n))return R3(NaN);if(!(e<=n&&n<=r))return R3(NaN);return t=(r-e)*(n-e),a=(r-e)*(r-n),o;function o(c){return to(c)?NaN:c<=e?0:c<=n?z3(c-e,2)/t:c<r?1-z3(r-c,2)/a:1}}var Tte=Ste;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hte=q,zg=Fte,Rte=Tte;Hte(zg,"factory",Rte);var zte=zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu=L;function Dte(e,r,n){return Hu(e)||Hu(r)||Hu(n)||r>=n?NaN:e<r?0:e>=n?1:(e-r)/(n-r)}var Gte=Dte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bte=ue,Ru=L;function Ute(e,r){if(Ru(e)||Ru(r)||e>=r)return Bte(NaN);return n;function n(t){return Ru(t)?NaN:t<e?0:t>=r?1:(t-e)/(r-e)}}var Wte=Ute;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qte=q,Dg=Gte,Vte=Wte;qte(Dg,"factory",Vte);var Mte=Dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D3=Nt;function Xte(e){return e>0?D3(e-1):D3(e+1)}var Kte=Xte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qte=Kte,Gg=Qte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var G3=Gg,Yte=Lr,Zte=Z,ao=G;function Jte(e,r){return r===Zte?ao:r===ao?0:r>0?G3(r)?e:0:G3(r)?Yte(ao,e):ao}var eae=Jte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var rae=fe,nae=ee,tae=1072693247,io=1e300,lo=1e-300;function aae(e,r){var n,t;return t=nae(e),n=t&rae,n<=tae?r<0?io*io:lo*lo:r>0?io*io:lo*lo}var iae=aae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lae=M,B3=G;function oae(e,r){return e===-1?(e-e)/(e-e):e===1?1:lae(e)<1==(r===B3)?0:B3}var sae=oae;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function uae(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var cae=uae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var fae=ee,oo=ne,U3=je,vae=Ie,dae=cae,pae=1048575,W3=1048576,mae=1072693248,hae=536870912,gae=524288,yae=20,$ae=9007199254740992,wae=.9617966939259756,Nae=.9617967009544373,_ae=-7028461650952758e-24,xae=[1,1.5],Iae=[0,.5849624872207642],Eae=[0,1350039202129749e-23];function bae(e,r,n){var t,a,o,c,p,f,u,i,l,s,v,h,g,w,y,$,m,N,x,_,I,E;return _=0,n<W3&&(r*=$ae,_-=53,n=fae(r)),_+=(n>>yae)-vae|0,I=n&pae|0,n=I|mae|0,I<=235662?E=0:I<767610?E=1:(E=0,_+=1,n-=W3),r=U3(r,n),i=xae[E],N=r-i,x=1/(r+i),a=N*x,c=oo(a,0),t=(n>>1|hae)+gae,t+=E<<18,f=U3(0,t),u=r-(f-i),p=x*(N-c*f-c*u),o=a*a,m=o*o*dae(o),m+=p*(c+a),o=c*c,f=3+o+m,f=oo(f,0),u=m-(f-3-o),N=c*f,x=p*f+u*a,s=N+x,s=oo(s,0),v=x-(s-N),h=Nae*s,g=_ae*s+v*wae+Eae[E],l=Iae[E],$=_,w=h+g+l+$,w=oo(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var Pae=bae;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Aae(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var Oae=Aae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var kae=ne,jae=Oae,Cae=1.4426950408889634,Lae=1.4426950216293335,Fae=19259629911266175e-24;function Sae(e,r){var n,t,a,o,c,p;return a=r-1,o=a*a*jae(a),c=Lae*a,p=a*Fae-o*Cae,t=c+p,t=kae(t,0),n=p-(t-c),e[0]=t,e[1]=n,e}var Tae=Sae;/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hae(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var Rae=Hae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var zae=ee,q3=je,Dae=ne,Gae=Ke,Bae=rn,Uae=_t,V3=Ie,M3=fe,X3=Yn,Wae=Rae,K3=1048576,qae=1071644672,qa=20,Vae=.6931471824645996,Mae=-1904654299957768e-24;function Xae(e,r,n){var t,a,o,c,p,f,u,i,l,s,v;return s=e&M3|0,v=(s>>qa)-V3|0,l=0,s>qae&&(l=e+(K3>>v+1)>>>0,v=((l&M3)>>qa)-V3|0,t=(l&~(X3>>v))>>>0,o=q3(0,t),l=(l&X3|K3)>>qa-v>>>0,e<0&&(l=-l),r-=o),o=n+r,o=Dae(o,0),p=o*Vae,f=(n-(o-r))*Uae+o*Mae,i=p+f,u=f-(i-p),o=i*i,a=i-o*Wae(o),c=i*a/(a-2)-(u+i*u),i=1-(c-i),e=zae(i),e=Gae(e),e+=l<<qa>>>0,e>>qa<=0?i=Bae(i,l):i=q3(i,e),i}var Kae=Xae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Q3=L,Y3=Gg,Z3=Xe,Qae=xe,J3=me,Yae=M,zu=en,Zae=ne,eh=Ke,Jae=Z,eie=G,Du=fe,rie=eae,nie=iae,tie=sae,aie=Pae,iie=Tae,lie=Kae,oie=1072693247,sie=1105199104,uie=1139802112,rh=1083179008,cie=1072693248,fie=1083231232,vie=3230714880,nh=31,En=1e300,bn=1e-300,die=8008566259537294e-32,Ur=[0,0],th=[0,0];function Bg(e,r){var n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(Q3(e)||Q3(r))return NaN;if(zu.assign(r,Ur,1,0),p=Ur[0],f=Ur[1],f===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return J3(e);if(r===-.5)return 1/J3(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(Z3(r))return tie(e,r)}if(zu.assign(e,Ur,1,0),o=Ur[0],c=Ur[1],c===0){if(o===0)return rie(e,r);if(e===1)return 1;if(e===-1&&Y3(r))return-1;if(Z3(e))return e===Jae?Bg(-0,-r):r<0?0:eie}if(e<0&&Qae(r)===!1)return(e-e)/(e-e);if(a=Yae(e),n=o&Du|0,t=p&Du|0,u=o>>>nh|0,i=p>>>nh|0,u&&Y3(r)?u=-1:u=1,t>sie){if(t>uie)return nie(e,r);if(n<oie)return i===1?u*En*En:u*bn*bn;if(n>cie)return i===0?u*En*En:u*bn*bn;h=iie(th,a)}else h=aie(th,a,n);if(l=Zae(r,0),v=(r-l)*h[0]+r*h[1],s=l*h[0],g=v+s,zu.assign(g,Ur,1,0),w=eh(Ur[0]),y=eh(Ur[1]),w>=rh){if(w-rh|y||v+die>g-s)return u*En*En}else if((w&Du)>=fie&&(w-vie|y||v<=g-s))return u*bn*bn;return g=lie(w,s,v),u*g}var pie=Bg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mie=pie,Ug=mie;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu=L,hie=ca,gie=Ug;function yie(e,r,n){return Gu(e)||Gu(r)||Gu(n)||r<=0||n<=0?NaN:e<0?0:-hie(-gie(e/n,r))}var $ie=yie;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wie=ue,Bu=L,Nie=ca,_ie=Ug;function xie(e,r){if(Bu(e)||Bu(r)||e<=0||r<=0)return wie(NaN);return n;function n(t){return Bu(t)?NaN:t<0?0:-Nie(-_ie(t/r,e))}}var Iie=xie;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eie=q,Wg=$ie,bie=Iie;Eie(Wg,"factory",bie);var Pie=Wg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Aie=HT,Oie=xv,kie=aQ,jie=BQ,Cie=yY,Lie=PY,Fie=DY,Sie=nZ,Tie=hZ,Hie=bZ,Rie=RZ,zie=It,Die=VZ,Gie=nJ,Bie=cJ,Uie=yJ,Wie=kJ,qie=GJ,Vie=fee,Mie=Iv,Xie=Ure,Kie=ene,Qie=cne,Yie=zte,Zie=Mte,Jie=Pie,ae={};ae.arcsine=Aie;ae.beta=Oie;ae.betaprime=kie;ae.cauchy=jie;ae.chi=Cie;ae.chisquare=Lie;ae.cosine=Fie;ae.erlang=Sie;ae.exponential=Tie;ae.f=Hie;ae.frechet=Rie;ae.gamma=zie;ae.gumbel=Die;ae.invgamma=Gie;ae.kumaraswamy=Bie;ae.laplace=Uie;ae.levy=Wie;ae.logistic=qie;ae.lognormal=Vie;ae.normal=Mie;ae["pareto-type1"]=Xie;ae.rayleigh=Kie;ae.t=Qie;ae.triangular=Yie;ae.uniform=Zie;ae.weibull=Jie;var ele=ae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rle=Qn,nle=ele;function tle(e){var r=nle[e];if(r===void 0)throw new Error(rle("invalid argument. Unsupported/unrecognized distribution name. Value: `%s`.",e));return r}var ale=tle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ile=$s.isPrimitive;function lle(e){return ile(e)&&e>0}var qg=lle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ole=$s.isObject;function sle(e){return ole(e)&&e.valueOf()>0}var Vg=sle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ule=qg,cle=Vg;function fle(e){return ule(e)||cle(e)}var vle=fle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mg=q,Ev=vle,dle=qg,ple=Vg;Mg(Ev,"isPrimitive",dle);Mg(Ev,"isObject",ple);var mle=Ev;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hle=Math.round,gle=hle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yle=gle,$le=yle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wle=308,Nle=wle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _le=-308,xle=_le;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ile=-324,Ele=Ile;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ah=L,so=Xe,ih=se,ble=M,lh=$le,Ple=ag,oh=Nle,Ale=xle,Ole=Ele,kle=Ple+1,sh=1e308;function jle(e,r){var n,t;return ah(e)||ah(r)||so(r)?NaN:so(e)||e===0||r<Ole||ble(e)>kle&&r<=0?e:r>oh?0*e:r<Ale?(n=ih(10,-(r+oh)),t=e*sh*n,so(t)?e:lh(t)/sh/n):(n=ih(10,-r),t=e*n,so(t)?e:lh(t)/n)}var Cle=jle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lle=Cle,Fle=Lle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sle=mle,Tle=z5,Hle=fv.isPrimitive,uh=ys,ch=Fle,Uu=Qn;function Rle(e){var r,n,t;if(n=4,r=!0,arguments.length>0){if(!Tle(e))throw new TypeError(Uu("invalid argument. First argument must be an object. Value: `%s`.",e));if(uh(e,"digits")){if(!Sle(e.digits))throw new TypeError(Uu("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",e.digits));n=e.digits}if(uh(e,"decision")){if(!Hle(e.decision))throw new TypeError(Uu("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",e.decision));r=e.decision}}switch(t="",t+=this.method,t+=`

`,t+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":t+="greater than or equal to ";break;case"greater":t+="less than or equal to ";break;case"two-sided":default:t+="equal to ";break}return t+="the reference CDF",t+=`

`,t+="    pValue: "+ch(this.pValue,-n)+`
`,t+="    statistic: "+ch(this.statistic,-n),t+=`

`,r&&(t+="Test Decision: ",this.rejected?t+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":t+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",t+=`
`),t}var zle=Rle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dle=_N,Gle=$t,Ble=zN.primitives,rt=WN,Ule=dv,fh=v5.isPrimitive,Va=Qn,Wle=h5,Ma=PI,qle=uS,Vle=dS,Mle=mS,vh=gS,Xle=iT,Kle=ale,Qle=zle,Yle=Array.prototype.slice;function Zle(){var e,r,n,t,a,o,c,p,f,u,i,l,s,v,h,g,w,y;if(w=arguments[0],y=arguments[1],!Ble(w)&&!Dle(w))throw new TypeError(Va("invalid argument. First argument must be a typed array or number array. Value: `%s`.",w));if(!Ule(y)&&!fh(y))throw new TypeError(Va("invalid argument. Second argument must be either a CDF function or a string. Value: `%s`.",y));for(fh(y)&&(y=Kle(y)),e=y.length-1,g=w.length,r=new Array(e),h=0;h<e;h++){if(l=h+2,v=arguments[l],!Gle(v)||Wle(v))throw new TypeError(Va("invalid argument. Distribution parameter must be a number. Value: `%s`.",v));r[h]=arguments[l]}if(o={},arguments.length>2+e&&(t=arguments[2+e],i=Xle(o,t),i))throw i;if(w=Yle.call(w),o.alpha===void 0?a=.05:a=o.alpha,a<0||a>1)throw new RangeError(Va("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));for(o.sorted!==!0&&w.sort(Mle),n=[null].concat(r),h=0;h<g;h++)n[0]=w[h],f=y.apply(null,n),w[h]=f-h/g;switch(u=o.alternative||"two-sided",u){case"two-sided":p=Ma(g,[Ma(g,w,1),Ma(g,vh(1/g,w),1)],1);break;case"greater":p=Ma(g,vh(1/g,w),1);break;case"less":p=Ma(g,w,1);break;default:throw new Error(Va('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),u))}return u==="two-sided"?c=1-Vle(p,g):c=1-qle(p,g),s={},rt(s,"rejected",c<=a),rt(s,"alpha",a),rt(s,"pValue",c),rt(s,"statistic",p),rt(s,"method","Kolmogorov-Smirnov goodness-of-fit test"),rt(s,"print",Qle),rt(s,"alternative",u),s}var Jle=Zle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eoe=Jle,roe=eoe;const Cr=dh(roe);function noe(){const[e,r]=P.useState({x:"",a:"",c:"",m:"",repeticiones:"",confianza:""}),[n,t]=P.useState({x:[],r:[]}),[a,o]=P.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[c,p]=P.useState([]),[f,u]=P.useState({chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,a:s,c:v,m:h,repeticiones:g,confianza:w}=e;if(l&&s&&v&&h&&g&&w){let y=0,$=[],m=[];for($[0]=Number(e.x),m[0]=Number(e.x)/(Number(e.m)-1),y=1;y<Number(g);y++){const F=(Number(e.c)+Number(e.a)*$[y-1])%Number(e.m);$.push(F),m.push(F/(Number(e.m)-1))}const N=m.length-1,x=1-Number(e.confianza)/100,_=Math.floor(Math.sqrt(N)),I=[],E=[],j=1/_;for(let F=0;F<_;F++){const A=F*j,b=(F+1)*j;I.push(A),E.push(b)}const O=[];for(let F=0;F<I.length;F++){const A=I[F],b=E[F],k=m.slice(1).filter(H=>F<I.length-1?H>=A&&H<b:H>=A&&H<=b);O.push({interval:`[${A.toFixed(2)}, ${b.toFixed(2)})`,values:k.length})}let R=[];O.map(F=>{R.push(Math.pow((N-1)/_-F.values,2)/((N-1)/_))});const z=[...m].sort((F,A)=>F-A).map((F,A)=>A/N-m[A]),V=Math.max(...z),Y=Math.min(...z),D=Cr(m.slice(1),"uniform",0,1);p(z),o({intervalo_inf:I,intervalo_sup:E,o:O.map(F=>F.values),e:N/_,m:_,chiSquare:R}),u({chicuadrado:Te.chisquare.inv(x,_-1),kolmogorov:{dmas:V,dmen:Y,valor:D.pValue,mayor:V>Math.abs(Y)?V:Math.abs(Y)},n:N-1}),t({x:$,r:m})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",d.jsx("sub",{children:"i+1"})," = (aX",d.jsx("sub",{children:"i"})," + c) mod (m)"]}),d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),d.jsx("td",{className:"px-6 py-4",children:"Semilla"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(s=>({...s,x:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),d.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:l=>{r(s=>({...s,a:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"c"}),d.jsx("td",{className:"px-6 py-4",children:"Constante aditiva"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.c,onChange:l=>{r(s=>({...s,c:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),d.jsx("td",{className:"px-6 py-4",children:"Módulo"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:l=>{r(s=>({...s,m:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),d.jsx("td",{className:"px-6 py-4",children:"Repeticiones"}),d.jsx("td",{className:"px-6 py-4 flex",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(s=>({...s,repeticiones:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(s=>({...s,confianza:l.target.value}))}}),"%"]})]})]})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/2 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",d.jsx("sub",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,s)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:s+1}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[s]})]},s))})]})})}),d.jsxs("div",{className:"w-1/2 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),d.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",d.jsx("sub",{children:"i"})," - E",d.jsx("sub",{children:"i"}),")",d.jsx("sup",{children:"2"})," / E",d.jsx("sub",{children:"i"})]})]})}),d.jsxs("tbody",{children:[a.intervalo_inf.map((l,s)=>d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[s].toFixed(3),"-",a.intervalo_sup[s].toFixed(3),"]"]}),d.jsx("td",{className:"px-6 py-4",children:a.o[s]}),d.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare[s].toFixed(4)})]},s)),d.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),d.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,s)=>l+s,0)}),d.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,s)=>l+s,0).toFixed(4)})]})]})]})}),d.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",d.jsx("sup",{children:"2"}),d.jsx("sub",{children:"0"}),": ",f.chicuadrado,d.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((l,s)=>l+s,0)?`${a.chiSquare.reduce((l,s)=>l+s,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,s)=>l+s,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),d.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:s+1}))]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",d.jsx("sub",{children:"i"})]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",d.jsx("sub",{children:"i"})," - i/n"]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"+"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmas}),d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"-"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmen}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.mayor})]})]})]})}),d.jsx("p",{className:"text-xl",children:f.kolmogorov.valor>f.kolmogorov.mayor?`${f.kolmogorov.valor} es mayor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${f.kolmogorov.valor} es menor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function toe(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,o=-30.6647980661472,c=2.50662827745924,p=-54.4760987982241,f=161.585836858041,u=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,s=-.00778489400243029,v=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,x=3.75440866190742;let _,I;return e<.02425?(_=Math.sqrt(-2*Math.log(e)),(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1)):e<=.97575?(_=e-.5,I=_*_,(((((r*I+n)*I+t)*I+a)*I+o)*I+c)*_/(((((p*I+f)*I+u)*I+i)*I+l)*I+1)):(_=Math.sqrt(-2*Math.log(1-e)),-(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1))}function aoe(){const[e,r]=P.useState({x:"",a:"",c:"",m:"",intervalos:"",intervaloi:"",confianza:""}),[n,t]=P.useState({x:[],r:[]}),[a,o]=P.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},n:""}),c=()=>{const{x:p,a:f,c:u,m:i,intervaloi:l,intervalos:s,confianza:v}=e;if(p&&f&&u&&i&&l&&s&&v){let h=[],g=[],w=Number(e.x);for(let U=1;U<=Number(s);U++)w=(Number(e.c)+Number(e.a)*w)%Number(e.m),U>=Number(l)&&U<=Number(s)&&(h.push(w),g.push(w/(Number(e.m)-1)));const y=g.length-1,$=1-Number(e.confianza)/100,m=g.slice(1).reduce((U,z)=>U+z,0)/y,N=toe(1-$/2),x=1/2-N*(1/Math.sqrt(12*y)),_=1/2+N*(1/Math.sqrt(12*y)),I=g.slice(1).reduce((U,z)=>U+Math.pow(+z-m,2),0)/(y-1),j=Te.chisquare.inv(1-$/2,y-1)/(12*(y-1)),R=Te.chisquare.inv($/2,y-1)/(12*(y-1));o(U=>({varianza:{valor:I,li:R,ls:j},media:{valor:m,li:x,ls:_},n:y-1})),t({x:h,r:g})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",d.jsx("sub",{children:"i+1"})," = (aX",d.jsx("sub",{children:"i"})," + c) mod (m)"]}),d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),d.jsx("td",{className:"px-6 py-4",children:"Semilla"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:p=>{r(f=>({...f,x:p.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),d.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:p=>{r(f=>({...f,a:p.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"c"}),d.jsx("td",{className:"px-6 py-4",children:"Constante aditiva"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.c,onChange:p=>{r(f=>({...f,c:p.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),d.jsx("td",{className:"px-6 py-4",children:"Módulo"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:p=>{r(f=>({...f,m:p.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),d.jsx("td",{className:"px-6 py-4",children:"Repeticiones Incio"}),d.jsx("td",{className:"px-6 py-4 flex",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.intervaloi,onChange:p=>{r(f=>({...f,intervaloi:p.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),d.jsx("td",{className:"px-6 py-4",children:"Repeticiones Fin"}),d.jsx("td",{className:"px-6 py-4 flex",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.intervalos,onChange:p=>{r(f=>({...f,intervalos:p.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:p=>{r(f=>({...f,confianza:p.target.value}))}}),"%"]})]})]})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:c,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/2 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",d.jsx("sub",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((p,f)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:f+Number(e.intervaloi)}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:p}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[f]})]},f))})]})})}),d.jsxs("div",{className:"w-1/2 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",a.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),d.jsx("td",{className:"px-6 py-4",children:a.media.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:a.media.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:a.media.ls})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),d.jsx("td",{className:"px-6 py-4",children:a.varianza.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:a.varianza.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:a.varianza.ls})]})," ",d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),d.jsxs("td",{className:"px-6 py-4",children:[a.varianza.li.toFixed(4)," < ",a.varianza.valor.toFixed(4)," < ",a.varianza.ls.toFixed(4),d.jsx("p",{children:a.varianza.valor>a.varianza.li&&a.varianza.valor<a.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})})]})]})]})]})})}function ioe(){const[e,r]=P.useState({x:"",D:"",repeticiones:"",confianza:""}),[n,t]=P.useState({x:[],r:[]}),[a,o]=P.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[],m:""}),[c,p]=P.useState([]),[f,u]=P.useState({chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,D:s,repeticiones:v,confianza:h}=e;if(l&&s&&v&&h){let g=[],w=[];g[0]=Number(e.x);const y=D=>D.length%2!==0?"0"+D:D,$=(D,F)=>{let A=Math.pow(D,2).toString();A=y(A);let b=Math.floor((A.length-F)/2);return A.substring(b,b+F)};for(let D=1;D<Number(v);D++){const F=$(g[D-1],Number(s));g.push(Number(F)),w.push(Number(F)/Math.pow(10,Number(s))),D==Number(v)-1&&w.push(Number(F)/Math.pow(10,Number(s)))}const m=w.length-1,N=1-Number(e.confianza)/100,x=Math.floor(Math.sqrt(m)),_=[],I=[],E=1/x;for(let D=0;D<x;D++){const F=D*E,A=(D+1)*E;_.push(F),I.push(A)}const j=[];for(let D=0;D<_.length;D++){const F=_[D],A=I[D],b=w.slice(1).filter(k=>D<_.length-1?k>=F&&k<A:k>=F&&k<=A);j.push({interval:`[${F.toFixed(2)}, ${A.toFixed(2)})`,values:b.length})}let O=[];j.map(D=>{O.push(Math.pow((m-1)/x-D.values,2)/((m-1)/x))});const U=[...w].sort((D,F)=>D-F).map((D,F)=>F/m-w[F]),z=Math.max(...U),V=Math.min(...U),Y=Cr(w.slice(1),"uniform",0,1);p(U),o({intervalo_inf:_,intervalo_sup:I,o:j.map(D=>D.values),e:m/x,m:x,chiSquare:O}),u({chicuadrado:Te.chisquare.inv(N,x-1),kolmogorov:{dmas:z,dmen:V,valor:Y.pValue,mayor:z>Math.abs(V)?z:Math.abs(V)},n:m-1}),t({x:g,r:w})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["Y",d.jsx("sub",{children:"i+1"})," = (X",d.jsx("sub",{children:"i"}),d.jsx("sup",{children:"2"}),")"]}),d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),d.jsx("td",{className:"px-6 py-4",children:"Semilla"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(s=>({...s,x:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4",children:"Digitos"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.D,onChange:l=>{r(s=>({...s,D:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),d.jsx("td",{className:"px-6 py-4",children:"Repeticiones"}),d.jsx("td",{className:"px-6 py-4 flex",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(s=>({...s,repeticiones:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(s=>({...s,confianza:l.target.value}))}}),"%"]})]})]})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/2 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",d.jsx("sub",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,s)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:s+1}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[s]})]},s))})]})})}),d.jsxs("div",{className:"w-1/2 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),d.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",d.jsx("sub",{children:"i"})," - E",d.jsx("sub",{children:"i"}),")",d.jsx("sup",{children:"2"})," / E",d.jsx("sub",{children:"i"})]})]})}),d.jsxs("tbody",{children:[a.intervalo_inf.map((l,s)=>d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[s].toFixed(3),"-",a.intervalo_sup[s].toFixed(3),"]"]}),d.jsx("td",{className:"px-6 py-4",children:a.o[s]}),d.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare[s].toFixed(4)})]},s)),d.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),d.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,s)=>l+s,0)}),d.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,s)=>l+s,0).toFixed(4)})]})]})]})}),d.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",d.jsx("sup",{children:"2"}),d.jsx("sub",{children:"0"}),": ",f.chicuadrado,d.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((l,s)=>l+s,0)?`${a.chiSquare.reduce((l,s)=>l+s,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,s)=>l+s,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),d.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:s+1}))]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",d.jsx("sub",{children:"i"})]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",d.jsx("sub",{children:"i"})," - i/n"]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"+"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmas}),d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"-"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmen}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.mayor})]})]})]})}),d.jsx("p",{className:"text-xl",children:f.kolmogorov.valor>f.kolmogorov.mayor?`${f.kolmogorov.valor} es mayor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${f.kolmogorov.valor} es menor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function loe(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,o=-30.6647980661472,c=2.50662827745924,p=-54.4760987982241,f=161.585836858041,u=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,s=-.00778489400243029,v=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,x=3.75440866190742;let _,I;return e<.02425?(_=Math.sqrt(-2*Math.log(e)),(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1)):e<=.97575?(_=e-.5,I=_*_,(((((r*I+n)*I+t)*I+a)*I+o)*I+c)*_/(((((p*I+f)*I+u)*I+i)*I+l)*I+1)):(_=Math.sqrt(-2*Math.log(1-e)),-(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1))}function ooe(){const[e,r]=P.useState({confianza:""}),[n,t]=P.useState({r:[]}),[a,o]=P.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[c,p]=P.useState([]),[f,u]=P.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{confianza:l}=e;if(l){let s=[.8797,.3884,.6289,.875,.5999,.8589,.9996,.2415,.3808,.9606,.9848,.3469,.7977,.5844,.8147,.6431,.7387,.5613,.0318,.7401,.4557,.1592,.8536,.8846,.341,.1492,.8681,.5291,.3188,.5992,.917,.2204,.5991,.5461,.5739,.3254,.0856,.2258,.4603,.5027,.8376,.6235,.3681,.2088,.1525,.2006,.472,.4272,.636,.0954];const v=s.length-1,h=s.slice(1).reduce((b,k)=>b+k,0)/v,g=1-Number(e.confianza)/100,w=loe(1-g/2),y=1/2-w*(1/Math.sqrt(12*v)),$=1/2+w*(1/Math.sqrt(12*v)),m=s.slice(1).reduce((b,k)=>b+Math.pow(+k-h,2),0)/(v-1),x=Te.chisquare.inv(1-g/2,v-1)/(12*(v-1)),I=Te.chisquare.inv(g/2,v-1)/(12*(v-1)),E=Math.floor(Math.sqrt(v-1));console.log(E);const j=[],O=[],R=1/E;for(let b=0;b<E;b++){const k=b*R,H=(b+1)*R;j.push(k),O.push(H)}const U=[];for(let b=0;b<j.length;b++){const k=j[b],H=O[b];if(console.log(k,H),b<j.length-1){const W=s.slice(1).filter(K=>K>=k&&K<H);U.push({interval:`[${k.toFixed(2)}, ${H.toFixed(2)})`,values:W.length})}else{const W=s.slice(1).filter(K=>K>=k&&K<=H);U.push({interval:`[${k.toFixed(2)}, ${H.toFixed(2)})`,values:W.length})}}let z=[];U.map(b=>{z.push(Math.pow((v-1)/Math.sqrt(v-1)-b.values,2)/((v-1)/Math.sqrt(v-1)))});const Y=[...s].sort((b,k)=>b-k).map((b,k)=>k/(v-1)-s[k]),D=Math.max(...Y),F=Math.min(...Y),A=Cr(s.slice(1),"uniform",0,1);console.log(A),p(Y),o({intervalo_inf:j,intervalo_sup:O,o:U.map(b=>b.values),e:v/E,m:E,chiSquare:z}),u(b=>({varianza:{valor:m,li:I,ls:x},media:{valor:h,li:y,ls:$},chicuadrado:Te.chisquare.inv(g,E-1),kolmogorov:{dmas:D,dmen:F,valor:Cr(s.slice(1),"uniform",0,1).pValue,mayor:D>Math.abs(F)?D:Math.abs(F)},n:v-1})),t({r:s})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsx("tbody",{children:d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(s=>({...s,confianza:l.target.value}))}}),"%"]})]})})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/2 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((l,s)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:s+1}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[s]})]},s))})]})})}),d.jsxs("div",{className:"w-1/2 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),d.jsx("td",{className:"px-6 py-4",children:f.media.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.ls})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.ls})]})," ",d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),d.jsxs("td",{className:"px-6 py-4",children:[f.varianza.li.toFixed(4)," < ",f.varianza.valor.toFixed(4)," < ",f.varianza.ls.toFixed(4),d.jsx("p",{children:f.varianza.valor>f.varianza.li&&f.varianza.valor<f.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),d.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",d.jsx("sub",{children:"i"})," - E",d.jsx("sub",{children:"i"}),")",d.jsx("sup",{children:"2"})," / E",d.jsx("sub",{children:"i"})]})]})}),d.jsxs("tbody",{children:[a.intervalo_inf.map((l,s)=>d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[s].toFixed(3),"-",a.intervalo_sup[s].toFixed(3),"]"]}),d.jsx("td",{className:"px-6 py-4",children:a.o[s]}),d.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare[s].toFixed(4)})]},s)),d.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),d.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,s)=>l+s,0)}),d.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,s)=>l+s,0).toFixed(4)})]})]})]})}),d.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",d.jsx("sup",{children:"2"}),d.jsx("sub",{children:"0"}),": ",f.chicuadrado,d.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((l,s)=>l+s,0)?`${a.chiSquare.reduce((l,s)=>l+s,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,s)=>l+s,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),d.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:s+1}))]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",d.jsx("sub",{children:"i"})]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",d.jsx("sub",{children:"i"})," - i/n"]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"+"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmas}),d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"-"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmen}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.mayor})]})]})]})}),d.jsx("p",{className:"text-xl",children:f.kolmogorov.valor>f.kolmogorov.mayor?`${f.kolmogorov.valor} es mayor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${f.kolmogorov.valor} es menor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function soe(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,o=-30.6647980661472,c=2.50662827745924,p=-54.4760987982241,f=161.585836858041,u=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,s=-.00778489400243029,v=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,x=3.75440866190742;let _,I;return e<.02425?(_=Math.sqrt(-2*Math.log(e)),(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1)):e<=.97575?(_=e-.5,I=_*_,(((((r*I+n)*I+t)*I+a)*I+o)*I+c)*_/(((((p*I+f)*I+u)*I+i)*I+l)*I+1)):(_=Math.sqrt(-2*Math.log(1-e)),-(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1))}function uoe(){const[e,r]=P.useState({x:"",a:"",m:"",repeticiones:"",confianza:""}),[n,t]=P.useState({x:[],r:[]}),[a,o]=P.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[c,p]=P.useState([]),[f,u]=P.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,a:s,repeticiones:v,m:h,confianza:g}=e;if(l&&s&&v&&h&&g){let w=[],y=[];w[0]=Number(e.x),y[0]=Number(e.x)/(Number(e.m)-1);for(let S=1;S<Number(v);S++){const B=Number(e.a)*w[S-1]%Number(e.m);w.push(B),y.push(B/(Number(e.m)-1))}const $=y.length-1,m=y.slice(1).reduce((S,B)=>S+B,0)/$,N=1-Number(e.confianza)/100,x=soe(1-N/2),_=1/2-x*(1/Math.sqrt(12*$)),I=1/2+x*(1/Math.sqrt(12*$)),E=y.slice(1).reduce((S,B)=>S+Math.pow(+B-m,2),0)/($-1),O=Te.chisquare.inv(1-N/2,$-1)/(12*($-1)),U=Te.chisquare.inv(N/2,$-1)/(12*($-1)),z=Math.floor(Math.sqrt($-1));console.log(z);const V=[],Y=[],D=1/z;for(let S=0;S<z;S++){const B=S*D,te=(S+1)*D;V.push(B),Y.push(te)}const F=[];for(let S=0;S<V.length;S++){const B=V[S],te=Y[S];if(console.log(B,te),S<V.length-1){const we=y.slice(1).filter(fr=>fr>=B&&fr<te);F.push({interval:`[${B.toFixed(2)}, ${te.toFixed(2)})`,values:we.length})}else{const we=y.slice(1).filter(fr=>fr>=B&&fr<=te);F.push({interval:`[${B.toFixed(2)}, ${te.toFixed(2)})`,values:we.length})}}let A=[];F.map(S=>{A.push(Math.pow(($-1)/Math.sqrt($-1)-S.values,2)/(($-1)/Math.sqrt($-1)))});const k=[...y].sort((S,B)=>S-B).map((S,B)=>B/($-1)-y[B]),H=Math.max(...k),W=Math.min(...k),K=Cr(y.slice(1),"uniform",0,1);console.log(K),p(k),o({intervalo_inf:V,intervalo_sup:Y,o:F.map(S=>S.values),e:$/z,m:z,chiSquare:A}),u(S=>({varianza:{valor:E,li:U,ls:O},media:{valor:m,li:_,ls:I},chicuadrado:Te.chisquare.inv(N,z-1),kolmogorov:{dmas:H,dmen:W,valor:Cr(y.slice(1),"uniform",0,1).pValue,mayor:H>Math.abs(W)?H:Math.abs(W)},n:$-1})),t({x:w,r:y})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",d.jsx("sub",{children:"i+1"})," = (aX",d.jsx("sub",{children:"i"}),") mod (m)"]}),d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),d.jsx("td",{className:"px-6 py-4",children:"Semilla"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(s=>({...s,x:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),d.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:l=>{r(s=>({...s,a:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),d.jsx("td",{className:"px-6 py-4",children:"Módulo"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:l=>{r(s=>({...s,m:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"n"}),d.jsx("td",{className:"px-6 py-4",children:"Repetiones"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(s=>({...s,repeticiones:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(s=>({...s,confianza:l.target.value}))}}),"%"]})]})]})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/2 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",d.jsx("sub",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,s)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:s+1}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[s]})]},s))})]})})}),d.jsxs("div",{className:"w-1/2 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),d.jsx("td",{className:"px-6 py-4",children:f.media.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.ls})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.ls})]})," ",d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),d.jsxs("td",{className:"px-6 py-4",children:[f.varianza.li.toFixed(4)," < ",f.varianza.valor.toFixed(4)," < ",f.varianza.ls.toFixed(4),d.jsx("p",{children:f.varianza.valor>f.varianza.li&&f.varianza.valor<f.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),d.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",d.jsx("sub",{children:"i"})," - E",d.jsx("sub",{children:"i"}),")",d.jsx("sup",{children:"2"})," / E",d.jsx("sub",{children:"i"})]})]})}),d.jsxs("tbody",{children:[a.intervalo_inf.map((l,s)=>d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[s].toFixed(3),"-",a.intervalo_sup[s].toFixed(3),"]"]}),d.jsx("td",{className:"px-6 py-4",children:a.o[s]}),d.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare[s].toFixed(4)})]},s)),d.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),d.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,s)=>l+s,0)}),d.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,s)=>l+s,0).toFixed(4)})]})]})]})}),d.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",d.jsx("sup",{children:"2"}),d.jsx("sub",{children:"0"}),": ",f.chicuadrado,d.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((l,s)=>l+s,0)?`${a.chiSquare.reduce((l,s)=>l+s,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,s)=>l+s,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),d.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:s+1}))]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",d.jsx("sub",{children:"i"})]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",d.jsx("sub",{children:"i"})," - i/n"]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"+"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmas}),d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"-"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmen}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.mayor})]})]})]})}),d.jsx("p",{className:"text-xl",children:f.kolmogorov.valor>f.kolmogorov.mayor?`${f.kolmogorov.valor} es mayor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${f.kolmogorov.valor} es menor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function coe(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,o=-30.6647980661472,c=2.50662827745924,p=-54.4760987982241,f=161.585836858041,u=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,s=-.00778489400243029,v=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,x=3.75440866190742;let _,I;return e<.02425?(_=Math.sqrt(-2*Math.log(e)),(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1)):e<=.97575?(_=e-.5,I=_*_,(((((r*I+n)*I+t)*I+a)*I+o)*I+c)*_/(((((p*I+f)*I+u)*I+i)*I+l)*I+1)):(_=Math.sqrt(-2*Math.log(1-e)),-(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1))}function foe(){const[e,r]=P.useState({x:"",a:"",m:"",repeticiones:"",confianza:""}),[n,t]=P.useState({x:[],r:[]}),[a,o]=P.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[c,p]=P.useState([]),[f,u]=P.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,a:s,repeticiones:v,m:h,confianza:g}=e;if(l&&s&&v&&h&&g){let w=[],y=[];w[0]=Number(e.x),y[0]=Number(e.x)/(Number(e.m)-1);for(let S=1;S<Number(v);S++){const B=Number(e.a)*w[S-1]%Number(e.m);w.push(B),y.push(B/(Number(e.m)-1))}const $=y.length-1,m=y.slice(1).reduce((S,B)=>S+B,0)/$,N=1-Number(e.confianza)/100,x=coe(1-N/2),_=1/2-x*(1/Math.sqrt(12*$)),I=1/2+x*(1/Math.sqrt(12*$)),E=y.slice(1).reduce((S,B)=>S+Math.pow(+B-m,2),0)/($-1),O=Te.chisquare.inv(1-N/2,$-1)/(12*($-1)),U=Te.chisquare.inv(N/2,$-1)/(12*($-1)),z=Math.floor(Math.sqrt($-1));console.log(z);const V=[],Y=[],D=1/z;for(let S=0;S<z;S++){const B=S*D,te=(S+1)*D;V.push(B),Y.push(te)}const F=[];for(let S=0;S<V.length;S++){const B=V[S],te=Y[S];if(console.log(B,te),S<V.length-1){const we=y.slice(1).filter(fr=>fr>=B&&fr<te);F.push({interval:`[${B.toFixed(2)}, ${te.toFixed(2)})`,values:we.length})}else{const we=y.slice(1).filter(fr=>fr>=B&&fr<=te);F.push({interval:`[${B.toFixed(2)}, ${te.toFixed(2)})`,values:we.length})}}let A=[];F.map(S=>{A.push(Math.pow(($-1)/Math.sqrt($-1)-S.values,2)/(($-1)/Math.sqrt($-1)))});const k=[...y].sort((S,B)=>S-B).map((S,B)=>B/($-1)-y[B]),H=Math.max(...k),W=Math.min(...k),K=Cr(y.slice(1),"uniform",0,1);console.log(K),p(k),o({intervalo_inf:V,intervalo_sup:Y,o:F.map(S=>S.values),e:$/z,m:z,chiSquare:A}),u(S=>({varianza:{valor:E,li:U,ls:O},media:{valor:m,li:_,ls:I},chicuadrado:Te.chisquare.inv(N,z-1),kolmogorov:{dmas:H,dmen:W,valor:Cr(y.slice(1),"uniform",0,1).pValue,mayor:H>Math.abs(W)?H:Math.abs(W)},n:$-1})),t({x:w,r:y})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",d.jsx("sub",{children:"i+1"})," = (aX",d.jsx("sub",{children:"i"}),") mod (m)"]}),d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),d.jsx("td",{className:"px-6 py-4",children:"Semilla"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(s=>({...s,x:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),d.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:l=>{r(s=>({...s,a:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),d.jsx("td",{className:"px-6 py-4",children:"Módulo"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:l=>{r(s=>({...s,m:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"n"}),d.jsx("td",{className:"px-6 py-4",children:"Repetiones"}),d.jsx("td",{className:"px-6 py-4",children:d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(s=>({...s,repeticiones:l.target.value}))}})})]}),d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(s=>({...s,confianza:l.target.value}))}}),"%"]})]})]})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/2 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",d.jsx("sub",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,s)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:s+1}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[s]})]},s))})]})})}),d.jsxs("div",{className:"w-1/2 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),d.jsx("td",{className:"px-6 py-4",children:f.media.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.ls})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.ls})]})," ",d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),d.jsxs("td",{className:"px-6 py-4",children:[f.varianza.li.toFixed(4)," < ",f.varianza.valor.toFixed(4)," < ",f.varianza.ls.toFixed(4),d.jsx("p",{children:f.varianza.valor>f.varianza.li&&f.varianza.valor<f.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),d.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",d.jsx("sub",{children:"i"})," - E",d.jsx("sub",{children:"i"}),")",d.jsx("sup",{children:"2"})," / E",d.jsx("sub",{children:"i"})]})]})}),d.jsxs("tbody",{children:[a.intervalo_inf.map((l,s)=>d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[s].toFixed(3),"-",a.intervalo_sup[s].toFixed(3),"]"]}),d.jsx("td",{className:"px-6 py-4",children:a.o[s]}),d.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare[s].toFixed(4)})]},s)),d.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),d.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,s)=>l+s,0)}),d.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,s)=>l+s,0).toFixed(4)})]})]})]})}),d.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",d.jsx("sup",{children:"2"}),d.jsx("sub",{children:"0"}),": ",f.chicuadrado,d.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((l,s)=>l+s,0)?`${a.chiSquare.reduce((l,s)=>l+s,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,s)=>l+s,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),d.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:s+1}))]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",d.jsx("sub",{children:"i"})]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",d.jsx("sub",{children:"i"})," - i/n"]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"+"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmas}),d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"-"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmen}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.mayor})]})]})]})}),d.jsx("p",{className:"text-xl",children:f.kolmogorov.valor>f.kolmogorov.mayor?`${f.kolmogorov.valor} es mayor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${f.kolmogorov.valor} es menor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function voe(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,o=-30.6647980661472,c=2.50662827745924,p=-54.4760987982241,f=161.585836858041,u=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,s=-.00778489400243029,v=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,x=3.75440866190742;let _,I;return e<.02425?(_=Math.sqrt(-2*Math.log(e)),(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1)):e<=.97575?(_=e-.5,I=_*_,(((((r*I+n)*I+t)*I+a)*I+o)*I+c)*_/(((((p*I+f)*I+u)*I+i)*I+l)*I+1)):(_=Math.sqrt(-2*Math.log(1-e)),-(((((s*_+v)*_+h)*_+g)*_+w)*_+y)/(((($*_+m)*_+N)*_+x)*_+1))}function doe(){const[e,r]=P.useState({confianza:""}),[n,t]=P.useState({r:[]}),[a,o]=P.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[c,p]=P.useState([]),[f,u]=P.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{confianza:l}=e;if(l){let s=[.78,.98,.24,.73,.43,.16,.78,.47,.18,.55,.04,.29,.68,.77,.16,.03,.79,.22,.37,.8,.96,.26,.91,.55,.75,.55,.64,.39,.53,.45,.61,.14,.38,.12,.4,.74,.78,.98,.27,.6,.43,.67,.62,.32,.53,.54,.24,.29,.18,.08,.82,.94,.19,.98,.41,1,.74,.92,.14,.43,.83,.88,.18,.21,.5,.13,.43,.69,.08,.12,.22,.5,.16,.11,.18,.89,.8,.42,.29,.87,.83,.79,.65,.28,.78,.49,.36,.86,.87,.64,.51,.07,.18,.94,.5,.22,.66,.91,.48,.24];const v=s.length-1,h=s.slice(1).reduce((b,k)=>b+k,0)/v,g=1-Number(e.confianza)/100,w=voe(1-g/2),y=1/2-w*(1/Math.sqrt(12*v)),$=1/2+w*(1/Math.sqrt(12*v)),m=s.slice(1).reduce((b,k)=>b+Math.pow(+k-h,2),0)/(v-1),x=Te.chisquare.inv(1-g/2,v-1)/(12*(v-1)),I=Te.chisquare.inv(g/2,v-1)/(12*(v-1)),E=Math.floor(Math.sqrt(v-1));console.log(E);const j=[],O=[],R=1/E;for(let b=0;b<E;b++){const k=b*R,H=(b+1)*R;j.push(k),O.push(H)}const U=[];for(let b=0;b<j.length;b++){const k=j[b],H=O[b];if(console.log(k,H),b<j.length-1){const W=s.slice(1).filter(K=>K>=k&&K<H);U.push({interval:`[${k.toFixed(2)}, ${H.toFixed(2)})`,values:W.length})}else{const W=s.slice(1).filter(K=>K>=k&&K<=H);U.push({interval:`[${k.toFixed(2)}, ${H.toFixed(2)})`,values:W.length})}}let z=[];U.map(b=>{z.push(Math.pow((v-1)/Math.sqrt(v-1)-b.values,2)/((v-1)/Math.sqrt(v-1)))});const Y=[...s].sort((b,k)=>b-k).map((b,k)=>k/(v-1)-s[k]),D=Math.max(...Y),F=Math.min(...Y),A=Cr(s.slice(1),"uniform",0,1);console.log(A),p(Y),o({intervalo_inf:j,intervalo_sup:O,o:U.map(b=>b.values),e:v/E,m:E,chiSquare:z}),u(b=>({varianza:{valor:m,li:I,ls:x},media:{valor:h,li:y,ls:$},chicuadrado:Te.chisquare.inv(g,E-1),kolmogorov:{dmas:D,dmen:F,valor:Cr(s.slice(1),"uniform",0,1).pValue,mayor:D>Math.abs(F)?D:Math.abs(F)},n:v-1})),t({r:s})}};return d.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:d.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[d.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),d.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),d.jsx("tbody",{children:d.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),d.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),d.jsxs("td",{className:"px-6 py-4 flex",children:[d.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(s=>({...s,confianza:l.target.value}))}}),"%"]})]})})]})}),d.jsx("div",{className:"w-full flex justify-center my-3",children:d.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),d.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[d.jsx("div",{className:"w-1/3 p-10 h-full",children:d.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:d.jsxs("tr",{className:"w-full flex",children:[d.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),d.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",d.jsx("sub",{children:"i"})]})]})}),d.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((l,s)=>d.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:s+1}),d.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[s]})]},s))})]})})}),d.jsxs("div",{className:"w-2/3 p-10",children:[d.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),d.jsx("td",{className:"px-6 py-4",children:f.media.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.media.ls})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.li})]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),d.jsx("td",{className:"px-6 py-4",children:f.varianza.ls})]})," ",d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),d.jsxs("td",{className:"px-6 py-4",children:[f.varianza.li.toFixed(4)," < ",f.varianza.valor.toFixed(4)," < ",f.varianza.ls.toFixed(4),d.jsx("p",{children:f.varianza.valor>f.varianza.li&&f.varianza.valor<f.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),d.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),d.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",d.jsx("suv",{children:"i"})]}),d.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",d.jsx("sub",{children:"i"})," - E",d.jsx("sub",{children:"i"}),")",d.jsx("sup",{children:"2"})," / E",d.jsx("sub",{children:"i"})]})]})}),d.jsxs("tbody",{children:[a.intervalo_inf.map((l,s)=>d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[s].toFixed(3),"-",a.intervalo_sup[s].toFixed(3),"]"]}),d.jsx("td",{className:"px-6 py-4",children:a.o[s]}),d.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare[s].toFixed(4)})]},s)),d.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),d.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,s)=>l+s,0)}),d.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),d.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,s)=>l+s,0).toFixed(4)})]})]})]})}),d.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",d.jsx("sup",{children:"2"}),d.jsx("sub",{children:"0"}),": ",f.chicuadrado,d.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((l,s)=>l+s,0)?`${a.chiSquare.reduce((l,s)=>l+s,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,s)=>l+s,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),d.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),d.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[d.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:s+1}))]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",d.jsx("sub",{children:"i"})]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",d.jsx("sub",{children:"i"})," - i/n"]}),c.map((l,s)=>d.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),d.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"+"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmas}),d.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",d.jsx("sup",{children:"-"})]}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.dmen}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),d.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:f.kolmogorov.mayor})]})]})]})}),d.jsx("p",{className:"text-xl",children:f.kolmogorov.valor>f.kolmogorov.mayor?`${f.kolmogorov.valor} es mayor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${f.kolmogorov.valor} es menor que ${f.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}const poe=()=>{const[e,r]=P.useState(!1),n=()=>{window.scrollTo({top:0,behavior:"smooth"})},[t,a]=P.useState("");return P.useEffect(()=>{const o=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),d.jsx("header",{className:`w-full sticky top-0 z-20 flex items-center justify-between transition-all ease-in-out duration-1000 ${t?"bg-slate-600 px-2 py-2":"bg-slate-900 py-1"}`,children:d.jsxs("nav",{className:"w-full flex justify-between",children:[d.jsx(R4,{to:"/",className:"title",onClick:n,children:"Inicio"}),d.jsxs("div",{className:"menu",onClick:()=>{r(!e)},children:[d.jsx("i",{className:"bx bx-menu",children:"≡"}),d.jsx("span",{}),d.jsx("span",{})]}),d.jsxs("ul",{className:e?"open":"",children:[d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Cuatro",onClick:n,children:"Ejercicio 4"})}),d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Cinco",onClick:n,children:"Ejercicio 5"})}),d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Seis",onClick:n,children:"Ejercicio 6"})}),d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Siete",onClick:n,children:"Ejercicio 7"})}),d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Nueve",onClick:n,children:"Ejercicio 9"})}),d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Diez",onClick:n,children:"Ejercicio 10"})}),d.jsx("li",{className:"list-none",children:d.jsx(Zn,{to:"/Once",onClick:n,children:"Ejercicio 11"})})]})]})})};function moe(){return d.jsxs("div",{className:"App",children:[d.jsx(poe,{}),d.jsxs(fy,{children:[d.jsx(Pn,{path:"/Cuatro",element:d.jsx(noe,{})}),d.jsx(Pn,{path:"/Cinco",element:d.jsx(aoe,{})}),d.jsx(Pn,{path:"/Seis",element:d.jsx(ioe,{})}),d.jsx(Pn,{path:"/Siete",element:d.jsx(ooe,{})}),d.jsx(Pn,{path:"/Nueve",element:d.jsx(uoe,{})}),d.jsx(Pn,{path:"/Diez",element:d.jsx(foe,{})}),d.jsx(Pn,{path:"/Once",element:d.jsx(doe,{})})]})]})}b4(document.getElementById("root")).render(d.jsx(P.StrictMode,{children:d.jsx($y,{children:d.jsx(moe,{})})}));
