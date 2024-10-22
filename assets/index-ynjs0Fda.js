function Xg(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(t,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function d3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p3={exports:{}},Qs={},m3={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),Yg=Symbol.for("react.fragment"),Zg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),e7=Symbol.for("react.provider"),r7=Symbol.for("react.context"),n7=Symbol.for("react.forward_ref"),t7=Symbol.for("react.suspense"),a7=Symbol.for("react.memo"),i7=Symbol.for("react.lazy"),E1=Symbol.iterator;function l7(e){return e===null||typeof e!="object"?null:(e=E1&&e[E1]||e["@@iterator"],typeof e=="function"?e:null)}var h3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g3=Object.assign,y3={};function na(e,r,n){this.props=e,this.context=r,this.refs=y3,this.updater=n||h3}na.prototype.isReactComponent={};na.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $3(){}$3.prototype=na.prototype;function of(e,r,n){this.props=e,this.context=r,this.refs=y3,this.updater=n||h3}var uf=of.prototype=new $3;uf.constructor=of;g3(uf,na.prototype);uf.isPureReactComponent=!0;var j1=Array.isArray,w3=Object.prototype.hasOwnProperty,cf={current:null},N3={key:!0,ref:!0,__self:!0,__source:!0};function x3(e,r,n){var t,a={},s=null,f=null;if(r!=null)for(t in r.ref!==void 0&&(f=r.ref),r.key!==void 0&&(s=""+r.key),r)w3.call(r,t)&&!N3.hasOwnProperty(t)&&(a[t]=r[t]);var p=arguments.length-2;if(p===1)a.children=n;else if(1<p){for(var v=Array(p),c=0;c<p;c++)v[c]=arguments[c+2];a.children=v}if(e&&e.defaultProps)for(t in p=e.defaultProps,p)a[t]===void 0&&(a[t]=p[t]);return{$$typeof:Ii,type:e,key:s,ref:f,props:a,_owner:cf.current}}function s7(e,r){return{$$typeof:Ii,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function ff(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ii}function o7(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var P1=/\/+/g;function Po(e,r){return typeof e=="object"&&e!==null&&e.key!=null?o7(""+e.key):r.toString(36)}function os(e,r,n,t,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(s){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case Ii:case Qg:f=!0}}if(f)return f=e,a=a(f),e=t===""?"."+Po(f,0):t,j1(a)?(n="",e!=null&&(n=e.replace(P1,"$&/")+"/"),os(a,r,n,"",function(c){return c})):a!=null&&(ff(a)&&(a=s7(a,n+(!a.key||f&&f.key===a.key?"":(""+a.key).replace(P1,"$&/")+"/")+e)),r.push(a)),1;if(f=0,t=t===""?".":t+":",j1(e))for(var p=0;p<e.length;p++){s=e[p];var v=t+Po(s,p);f+=os(s,r,n,v,a)}else if(v=l7(e),typeof v=="function")for(e=v.call(e),p=0;!(s=e.next()).done;)s=s.value,v=t+Po(s,p++),f+=os(s,r,n,v,a);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return f}function Hi(e,r,n){if(e==null)return e;var t=[],a=0;return os(e,t,"","",function(s){return r.call(n,s,a++)}),t}function u7(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},us={transition:null},c7={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:us,ReactCurrentOwner:cf};function _3(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Hi,forEach:function(e,r,n){Hi(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return Hi(e,function(){r++}),r},toArray:function(e){return Hi(e,function(r){return r})||[]},only:function(e){if(!ff(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=na;Q.Fragment=Yg;Q.Profiler=Jg;Q.PureComponent=of;Q.StrictMode=Zg;Q.Suspense=t7;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c7;Q.act=_3;Q.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=g3({},e.props),a=e.key,s=e.ref,f=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,f=cf.current),r.key!==void 0&&(a=""+r.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(v in r)w3.call(r,v)&&!N3.hasOwnProperty(v)&&(t[v]=r[v]===void 0&&p!==void 0?p[v]:r[v])}var v=arguments.length-2;if(v===1)t.children=n;else if(1<v){p=Array(v);for(var c=0;c<v;c++)p[c]=arguments[c+2];t.children=p}return{$$typeof:Ii,type:e.type,key:a,ref:s,props:t,_owner:f}};Q.createContext=function(e){return e={$$typeof:r7,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e7,_context:e},e.Consumer=e};Q.createElement=x3;Q.createFactory=function(e){var r=x3.bind(null,e);return r.type=e,r};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:n7,render:e}};Q.isValidElement=ff;Q.lazy=function(e){return{$$typeof:i7,_payload:{_status:-1,_result:e},_init:u7}};Q.memo=function(e,r){return{$$typeof:a7,type:e,compare:r===void 0?null:r}};Q.startTransition=function(e){var r=us.transition;us.transition={};try{e()}finally{us.transition=r}};Q.unstable_act=_3;Q.useCallback=function(e,r){return De.current.useCallback(e,r)};Q.useContext=function(e){return De.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return De.current.useDeferredValue(e)};Q.useEffect=function(e,r){return De.current.useEffect(e,r)};Q.useId=function(){return De.current.useId()};Q.useImperativeHandle=function(e,r,n){return De.current.useImperativeHandle(e,r,n)};Q.useInsertionEffect=function(e,r){return De.current.useInsertionEffect(e,r)};Q.useLayoutEffect=function(e,r){return De.current.useLayoutEffect(e,r)};Q.useMemo=function(e,r){return De.current.useMemo(e,r)};Q.useReducer=function(e,r,n){return De.current.useReducer(e,r,n)};Q.useRef=function(e){return De.current.useRef(e)};Q.useState=function(e){return De.current.useState(e)};Q.useSyncExternalStore=function(e,r,n){return De.current.useSyncExternalStore(e,r,n)};Q.useTransition=function(){return De.current.useTransition()};Q.version="18.3.1";m3.exports=Q;var A=m3.exports;const f7=d3(A),v7=Xg({__proto__:null,default:f7},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d7=A,p7=Symbol.for("react.element"),m7=Symbol.for("react.fragment"),h7=Object.prototype.hasOwnProperty,g7=d7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y7={key:!0,ref:!0,__self:!0,__source:!0};function b3(e,r,n){var t,a={},s=null,f=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(t in r)h7.call(r,t)&&!y7.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:p7,type:e,key:s,ref:f,props:a,_owner:g7.current}}Qs.Fragment=m7;Qs.jsx=b3;Qs.jsxs=b3;p3.exports=Qs;var u=p3.exports,I3={exports:{}},er={},E3={exports:{}},j3={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(E,P){var L=E.length;E.push(P);e:for(;0<L;){var F=L-1>>>1,U=E[F];if(0<a(U,P))E[F]=P,E[L]=U,L=F;else break e}}function n(E){return E.length===0?null:E[0]}function t(E){if(E.length===0)return null;var P=E[0],L=E.pop();if(L!==P){E[0]=L;e:for(var F=0,U=E.length,X=U>>>1;F<X;){var T=2*(F+1)-1,W=E[T],te=T+1,Ne=E[te];if(0>a(W,L))te<U&&0>a(Ne,W)?(E[F]=Ne,E[te]=L,F=te):(E[F]=W,E[T]=L,F=T);else if(te<U&&0>a(Ne,L))E[F]=Ne,E[te]=L,F=te;else break e}}return P}function a(E,P){var L=E.sortIndex-P.sortIndex;return L!==0?L:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var f=Date,p=f.now();e.unstable_now=function(){return f.now()-p}}var v=[],c=[],i=1,l=null,o=3,d=!1,h=!1,g=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var P=n(c);P!==null;){if(P.callback===null)t(c);else if(P.startTime<=E)t(c),P.sortIndex=P.expirationTime,r(v,P);else break;P=n(c)}}function N(E){if(g=!1,m(E),!h)if(n(v)!==null)h=!0,D(_);else{var P=n(c);P!==null&&j(N,P.startTime-E)}}function _(E,P){h=!1,g&&(g=!1,y(I),I=-1),d=!0;var L=o;try{for(m(P),l=n(v);l!==null&&(!(l.expirationTime>P)||E&&!R());){var F=l.callback;if(typeof F=="function"){l.callback=null,o=l.priorityLevel;var U=F(l.expirationTime<=P);P=e.unstable_now(),typeof U=="function"?l.callback=U:l===n(v)&&t(v),m(P)}else t(v);l=n(v)}if(l!==null)var X=!0;else{var T=n(c);T!==null&&j(N,T.startTime-P),X=!1}return X}finally{l=null,o=L,d=!1}}var x=!1,b=null,I=-1,O=5,k=-1;function R(){return!(e.unstable_now()-k<O)}function B(){if(b!==null){var E=e.unstable_now();k=E;var P=!0;try{P=b(!0,E)}finally{P?H():(x=!1,b=null)}}else x=!1}var H;if(typeof $=="function")H=function(){$(B)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,V=G.port2;G.port1.onmessage=B,H=function(){V.postMessage(null)}}else H=function(){w(B,0)};function D(E){b=E,x||(x=!0,H())}function j(E,P){I=w(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){h||d||(h=!0,D(_))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return o},e.unstable_getFirstCallbackNode=function(){return n(v)},e.unstable_next=function(E){switch(o){case 1:case 2:case 3:var P=3;break;default:P=o}var L=o;o=P;try{return E()}finally{o=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=o;o=E;try{return P()}finally{o=L}},e.unstable_scheduleCallback=function(E,P,L){var F=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?F+L:F):L=F,E){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,E={id:i++,callback:P,priorityLevel:E,startTime:L,expirationTime:U,sortIndex:-1},L>F?(E.sortIndex=L,r(c,E),n(v)===null&&E===n(c)&&(g?(y(I),I=-1):g=!0,j(N,L-F))):(E.sortIndex=U,r(v,E),h||d||(h=!0,D(_))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var P=o;return function(){var L=o;o=P;try{return E.apply(this,arguments)}finally{o=L}}}})(j3);E3.exports=j3;var $7=E3.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w7=A,Je=$7;function C(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P3=new Set,li={};function pt(e,r){Xt(e,r),Xt(e+"Capture",r)}function Xt(e,r){for(li[e]=r,e=0;e<r.length;e++)P3.add(r[e])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,N7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A1={},O1={};function x7(e){return Uu.call(O1,e)?!0:Uu.call(A1,e)?!1:N7.test(e)?O1[e]=!0:(A1[e]=!0,!1)}function _7(e,r,n,t){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b7(e,r,n,t){if(r===null||typeof r>"u"||_7(e,r,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Ge(e,r,n,t,a,s,f){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=f}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ke[r]=new Ge(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function df(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(vf,df);ke[r]=new Ge(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(vf,df);ke[r]=new Ge(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(vf,df);ke[r]=new Ge(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function pf(e,r,n,t){var a=ke.hasOwnProperty(r)?ke[r]:null;(a!==null?a.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b7(r,n,a,t)&&(n=null),t||a===null?x7(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(r=a.attributeName,t=a.attributeNamespace,n===null?e.removeAttribute(r):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,t?e.setAttributeNS(t,r,n):e.setAttribute(r,n))))}var en=w7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),At=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),A3=Symbol.for("react.provider"),O3=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),k3=Symbol.for("react.offscreen"),k1=Symbol.iterator;function ma(e){return e===null||typeof e!="object"?null:(e=k1&&e[k1]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Ao;function Ma(e){if(Ao===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Ao=r&&r[1]||""}return`
`+Ao+e}var Oo=!1;function ko(e,r){if(!e||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(c){var t=c}Reflect.construct(e,[],r)}else{try{r.call()}catch(c){t=c}e.call(r.prototype)}else{try{throw Error()}catch(c){t=c}e()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),s=t.stack.split(`
`),f=a.length-1,p=s.length-1;1<=f&&0<=p&&a[f]!==s[p];)p--;for(;1<=f&&0<=p;f--,p--)if(a[f]!==s[p]){if(f!==1||p!==1)do if(f--,p--,0>p||a[f]!==s[p]){var v=`
`+a[f].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=f&&0<=p);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ma(e):""}function I7(e){switch(e.tag){case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function Xu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case At:return"Portal";case Wu:return"Profiler";case mf:return"StrictMode";case Vu:return"Suspense";case Mu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O3:return(e.displayName||"Context")+".Consumer";case A3:return(e._context.displayName||"Context")+".Provider";case hf:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gf:return r=e.displayName||null,r!==null?r:Xu(e.type)||"Memo";case Pn:r=e._payload,e=e._init;try{return Xu(e(r))}catch{}}return null}function E7(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(r);case 8:return r===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function L3(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function j7(e){var r=L3(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(f){t=""+f,s.call(this,f)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(f){t=""+f},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Di(e){e._valueTracker||(e._valueTracker=j7(e))}function C3(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),t="";return e&&(t=L3(e)?e.checked?"true":"false":e.value),e=t,e!==n?(r.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ku(e,r){var n=r.checked;return me({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function L1(e,r){var n=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;n=Un(r.value!=null?r.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function S3(e,r){r=r.checked,r!=null&&pf(e,"checked",r,!1)}function Qu(e,r){S3(e,r);var n=Un(r.value),t=r.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Yu(e,r.type,n):r.hasOwnProperty("defaultValue")&&Yu(e,r.type,Un(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function C1(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yu(e,r,n){(r!=="number"||Ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xa=Array.isArray;function Gt(e,r,n,t){if(e=e.options,r){r={};for(var a=0;a<n.length;a++)r["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=r.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&t&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),r=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Zu(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(C(91));return me({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function S1(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(C(92));if(Xa(n)){if(1<n.length)throw Error(C(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Un(n)}}function F3(e,r){var n=Un(r.value),t=Un(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function F1(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function T3(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?T3(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gi,R3=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,t,a){MSApp.execUnsafeLocalFunction(function(){return e(r,n,t,a)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Gi=Gi||document.createElement("div"),Gi.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function si(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P7=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(e){P7.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Ya[r]=Ya[e]})});function H3(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Ya.hasOwnProperty(e)&&Ya[e]?(""+r).trim():r+"px"}function z3(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var t=n.indexOf("--")===0,a=H3(n,r[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,a):e[n]=a}}var A7=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,r){if(r){if(A7[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(C(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(C(61))}if(r.style!=null&&typeof r.style!="object")throw Error(C(62))}}function rc(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function yf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tc=null,qt=null,Bt=null;function T1(e){if(e=Pi(e)){if(typeof tc!="function")throw Error(C(280));var r=e.stateNode;r&&(r=ro(r),tc(e.stateNode,e.type,r))}}function D3(e){qt?Bt?Bt.push(e):Bt=[e]:qt=e}function G3(){if(qt){var e=qt,r=Bt;if(Bt=qt=null,T1(e),r)for(e=0;e<r.length;e++)T1(r[e])}}function q3(e,r){return e(r)}function B3(){}var Lo=!1;function U3(e,r,n){if(Lo)return e(r,n);Lo=!0;try{return q3(e,r,n)}finally{Lo=!1,(qt!==null||Bt!==null)&&(B3(),G3())}}function oi(e,r){var n=e.stateNode;if(n===null)return null;var t=ro(n);if(t===null)return null;n=t[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,r,typeof n));return n}var ac=!1;if(Qr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){ac=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{ac=!1}function O7(e,r,n,t,a,s,f,p,v){var c=Array.prototype.slice.call(arguments,3);try{r.apply(n,c)}catch(i){this.onError(i)}}var Za=!1,xs=null,_s=!1,ic=null,k7={onError:function(e){Za=!0,xs=e}};function L7(e,r,n,t,a,s,f,p,v){Za=!1,xs=null,O7.apply(k7,arguments)}function C7(e,r,n,t,a,s,f,p,v){if(L7.apply(this,arguments),Za){if(Za){var c=xs;Za=!1,xs=null}else throw Error(C(198));_s||(_s=!0,ic=c)}}function mt(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function W3(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function R1(e){if(mt(e)!==e)throw Error(C(188))}function S7(e){var r=e.alternate;if(!r){if(r=mt(e),r===null)throw Error(C(188));return r!==e?null:e}for(var n=e,t=r;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(t=a.return,t!==null){n=t;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return R1(a),e;if(s===t)return R1(a),r;s=s.sibling}throw Error(C(188))}if(n.return!==t.return)n=a,t=s;else{for(var f=!1,p=a.child;p;){if(p===n){f=!0,n=a,t=s;break}if(p===t){f=!0,t=a,n=s;break}p=p.sibling}if(!f){for(p=s.child;p;){if(p===n){f=!0,n=s,t=a;break}if(p===t){f=!0,t=s,n=a;break}p=p.sibling}if(!f)throw Error(C(189))}}if(n.alternate!==t)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:r}function V3(e){return e=S7(e),e!==null?M3(e):null}function M3(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=M3(e);if(r!==null)return r;e=e.sibling}return null}var X3=Je.unstable_scheduleCallback,H1=Je.unstable_cancelCallback,F7=Je.unstable_shouldYield,T7=Je.unstable_requestPaint,$e=Je.unstable_now,R7=Je.unstable_getCurrentPriorityLevel,$f=Je.unstable_ImmediatePriority,K3=Je.unstable_UserBlockingPriority,bs=Je.unstable_NormalPriority,H7=Je.unstable_LowPriority,Q3=Je.unstable_IdlePriority,Ys=null,kr=null;function z7(e){if(kr&&typeof kr.onCommitFiberRoot=="function")try{kr.onCommitFiberRoot(Ys,e,void 0,(e.current.flags&128)===128)}catch{}}var $r=Math.clz32?Math.clz32:q7,D7=Math.log,G7=Math.LN2;function q7(e){return e>>>=0,e===0?32:31-(D7(e)/G7|0)|0}var qi=64,Bi=4194304;function Ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Is(e,r){var n=e.pendingLanes;if(n===0)return 0;var t=0,a=e.suspendedLanes,s=e.pingedLanes,f=n&268435455;if(f!==0){var p=f&~a;p!==0?t=Ka(p):(s&=f,s!==0&&(t=Ka(s)))}else f=n&~a,f!==0?t=Ka(f):s!==0&&(t=Ka(s));if(t===0)return 0;if(r!==0&&r!==t&&!(r&a)&&(a=t&-t,s=r&-r,a>=s||a===16&&(s&4194240)!==0))return r;if(t&4&&(t|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)n=31-$r(r),a=1<<n,t|=e[n],r&=~a;return t}function B7(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U7(e,r){for(var n=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var f=31-$r(s),p=1<<f,v=a[f];v===-1?(!(p&n)||p&t)&&(a[f]=B7(p,r)):v<=r&&(e.expiredLanes|=p),s&=~p}}function lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Y3(){var e=qi;return qi<<=1,!(qi&4194240)&&(qi=64),e}function Co(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Ei(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-$r(r),e[r]=n}function W7(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-$r(n),s=1<<a;r[a]=0,t[a]=-1,e[a]=-1,n&=~s}}function wf(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var t=31-$r(n),a=1<<t;a&r|e[t]&r&&(e[t]|=r),n&=~a}}var re=0;function Z3(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var J3,Nf,e6,r6,n6,sc=!1,Ui=[],Fn=null,Tn=null,Rn=null,ui=new Map,ci=new Map,On=[],V7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function z1(e,r){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ui.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(r.pointerId)}}function ga(e,r,n,t,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:t,nativeEvent:s,targetContainers:[a]},r!==null&&(r=Pi(r),r!==null&&Nf(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function M7(e,r,n,t,a){switch(r){case"focusin":return Fn=ga(Fn,e,r,n,t,a),!0;case"dragenter":return Tn=ga(Tn,e,r,n,t,a),!0;case"mouseover":return Rn=ga(Rn,e,r,n,t,a),!0;case"pointerover":var s=a.pointerId;return ui.set(s,ga(ui.get(s)||null,e,r,n,t,a)),!0;case"gotpointercapture":return s=a.pointerId,ci.set(s,ga(ci.get(s)||null,e,r,n,t,a)),!0}return!1}function t6(e){var r=tt(e.target);if(r!==null){var n=mt(r);if(n!==null){if(r=n.tag,r===13){if(r=W3(n),r!==null){e.blockedOn=r,n6(e.priority,function(){e6(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=oc(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);nc=t,n.target.dispatchEvent(t),nc=null}else return r=Pi(n),r!==null&&Nf(r),e.blockedOn=n,!1;r.shift()}return!0}function D1(e,r,n){cs(e)&&n.delete(r)}function X7(){sc=!1,Fn!==null&&cs(Fn)&&(Fn=null),Tn!==null&&cs(Tn)&&(Tn=null),Rn!==null&&cs(Rn)&&(Rn=null),ui.forEach(D1),ci.forEach(D1)}function ya(e,r){e.blockedOn===r&&(e.blockedOn=null,sc||(sc=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,X7)))}function fi(e){function r(a){return ya(a,e)}if(0<Ui.length){ya(Ui[0],e);for(var n=1;n<Ui.length;n++){var t=Ui[n];t.blockedOn===e&&(t.blockedOn=null)}}for(Fn!==null&&ya(Fn,e),Tn!==null&&ya(Tn,e),Rn!==null&&ya(Rn,e),ui.forEach(r),ci.forEach(r),n=0;n<On.length;n++)t=On[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)t6(n),n.blockedOn===null&&On.shift()}var Ut=en.ReactCurrentBatchConfig,Es=!0;function K7(e,r,n,t){var a=re,s=Ut.transition;Ut.transition=null;try{re=1,xf(e,r,n,t)}finally{re=a,Ut.transition=s}}function Q7(e,r,n,t){var a=re,s=Ut.transition;Ut.transition=null;try{re=4,xf(e,r,n,t)}finally{re=a,Ut.transition=s}}function xf(e,r,n,t){if(Es){var a=oc(e,r,n,t);if(a===null)Bo(e,r,t,js,n),z1(e,t);else if(M7(a,e,r,n,t))t.stopPropagation();else if(z1(e,t),r&4&&-1<V7.indexOf(e)){for(;a!==null;){var s=Pi(a);if(s!==null&&J3(s),s=oc(e,r,n,t),s===null&&Bo(e,r,t,js,n),s===a)break;a=s}a!==null&&t.stopPropagation()}else Bo(e,r,t,null,n)}}var js=null;function oc(e,r,n,t){if(js=null,e=yf(t),e=tt(e),e!==null)if(r=mt(e),r===null)e=null;else if(n=r.tag,n===13){if(e=W3(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return js=e,null}function a6(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R7()){case $f:return 1;case K3:return 4;case bs:case H7:return 16;case Q3:return 536870912;default:return 16}default:return 16}}var Ln=null,_f=null,fs=null;function i6(){if(fs)return fs;var e,r=_f,n=r.length,t,a="value"in Ln?Ln.value:Ln.textContent,s=a.length;for(e=0;e<n&&r[e]===a[e];e++);var f=n-e;for(t=1;t<=f&&r[n-t]===a[s-t];t++);return fs=a.slice(e,1<t?1-t:void 0)}function vs(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function G1(){return!1}function rr(e){function r(n,t,a,s,f){this._reactName=n,this._targetInst=a,this.type=t,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wi:G1,this.isPropagationStopped=G1,this}return me(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),r}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=rr(ta),ji=me({},ta,{view:0,detail:0}),Y7=rr(ji),So,Fo,$a,Zs=me({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$a&&($a&&e.type==="mousemove"?(So=e.screenX-$a.screenX,Fo=e.screenY-$a.screenY):Fo=So=0,$a=e),So)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),q1=rr(Zs),Z7=me({},Zs,{dataTransfer:0}),J7=rr(Z7),e8=me({},ji,{relatedTarget:0}),To=rr(e8),r8=me({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),n8=rr(r8),t8=me({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a8=rr(t8),i8=me({},ta,{data:0}),B1=rr(i8),l8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u8(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=o8[e])?!!r[e]:!1}function If(){return u8}var c8=me({},ji,{key:function(e){if(e.key){var r=l8[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f8=rr(c8),v8=me({},Zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U1=rr(v8),d8=me({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),p8=rr(d8),m8=me({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),h8=rr(m8),g8=me({},Zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y8=rr(g8),$8=[9,13,27,32],Ef=Qr&&"CompositionEvent"in window,Ja=null;Qr&&"documentMode"in document&&(Ja=document.documentMode);var w8=Qr&&"TextEvent"in window&&!Ja,l6=Qr&&(!Ef||Ja&&8<Ja&&11>=Ja),W1=" ",V1=!1;function s6(e,r){switch(e){case"keyup":return $8.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o6(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function N8(e,r){switch(e){case"compositionend":return o6(r);case"keypress":return r.which!==32?null:(V1=!0,W1);case"textInput":return e=r.data,e===W1&&V1?null:e;default:return null}}function x8(e,r){if(kt)return e==="compositionend"||!Ef&&s6(e,r)?(e=i6(),fs=_f=Ln=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return l6&&r.locale!=="ko"?null:r.data;default:return null}}var _8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M1(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!_8[e.type]:r==="textarea"}function u6(e,r,n,t){D3(t),r=Ps(r,"onChange"),0<r.length&&(n=new bf("onChange","change",null,n,t),e.push({event:n,listeners:r}))}var ei=null,vi=null;function b8(e){w6(e,0)}function Js(e){var r=St(e);if(C3(r))return e}function I8(e,r){if(e==="change")return r}var c6=!1;if(Qr){var Ro;if(Qr){var Ho="oninput"in document;if(!Ho){var X1=document.createElement("div");X1.setAttribute("oninput","return;"),Ho=typeof X1.oninput=="function"}Ro=Ho}else Ro=!1;c6=Ro&&(!document.documentMode||9<document.documentMode)}function K1(){ei&&(ei.detachEvent("onpropertychange",f6),vi=ei=null)}function f6(e){if(e.propertyName==="value"&&Js(vi)){var r=[];u6(r,vi,e,yf(e)),U3(b8,r)}}function E8(e,r,n){e==="focusin"?(K1(),ei=r,vi=n,ei.attachEvent("onpropertychange",f6)):e==="focusout"&&K1()}function j8(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Js(vi)}function P8(e,r){if(e==="click")return Js(r)}function A8(e,r){if(e==="input"||e==="change")return Js(r)}function O8(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Nr=typeof Object.is=="function"?Object.is:O8;function di(e,r){if(Nr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var a=n[t];if(!Uu.call(r,a)||!Nr(e[a],r[a]))return!1}return!0}function Q1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y1(e,r){var n=Q1(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=r&&t>=r)return{node:n,offset:r-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Q1(n)}}function v6(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?v6(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function d6(){for(var e=window,r=Ns();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ns(e.document)}return r}function jf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function k8(e){var r=d6(),n=e.focusedElem,t=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&v6(n.ownerDocument.documentElement,n)){if(t!==null&&jf(n)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(t.start,a);t=t.end===void 0?s:Math.min(t.end,a),!e.extend&&s>t&&(a=t,t=s,s=a),a=Y1(n,s);var f=Y1(n,t);a&&f&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),s>t?(e.addRange(r),e.extend(f.node,f.offset)):(r.setEnd(f.node,f.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L8=Qr&&"documentMode"in document&&11>=document.documentMode,Lt=null,uc=null,ri=null,cc=!1;function Z1(e,r,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||Lt==null||Lt!==Ns(t)||(t=Lt,"selectionStart"in t&&jf(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ri&&di(ri,t)||(ri=t,t=Ps(uc,"onSelect"),0<t.length&&(r=new bf("onSelect","select",null,r,n),e.push({event:r,listeners:t}),r.target=Lt)))}function Vi(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Ct={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},zo={},p6={};Qr&&(p6=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function eo(e){if(zo[e])return zo[e];if(!Ct[e])return e;var r=Ct[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in p6)return zo[e]=r[n];return e}var m6=eo("animationend"),h6=eo("animationiteration"),g6=eo("animationstart"),y6=eo("transitionend"),$6=new Map,J1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,r){$6.set(e,r),pt(r,[e])}for(var Do=0;Do<J1.length;Do++){var Go=J1[Do],C8=Go.toLowerCase(),S8=Go[0].toUpperCase()+Go.slice(1);Vn(C8,"on"+S8)}Vn(m6,"onAnimationEnd");Vn(h6,"onAnimationIteration");Vn(g6,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(y6,"onTransitionEnd");Xt("onMouseEnter",["mouseout","mouseover"]);Xt("onMouseLeave",["mouseout","mouseover"]);Xt("onPointerEnter",["pointerout","pointerover"]);Xt("onPointerLeave",["pointerout","pointerover"]);pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function ev(e,r,n){var t=e.type||"unknown-event";e.currentTarget=n,C7(t,r,void 0,e),e.currentTarget=null}function w6(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],a=t.event;t=t.listeners;e:{var s=void 0;if(r)for(var f=t.length-1;0<=f;f--){var p=t[f],v=p.instance,c=p.currentTarget;if(p=p.listener,v!==s&&a.isPropagationStopped())break e;ev(a,p,c),s=v}else for(f=0;f<t.length;f++){if(p=t[f],v=p.instance,c=p.currentTarget,p=p.listener,v!==s&&a.isPropagationStopped())break e;ev(a,p,c),s=v}}}if(_s)throw e=ic,_s=!1,ic=null,e}function le(e,r){var n=r[mc];n===void 0&&(n=r[mc]=new Set);var t=e+"__bubble";n.has(t)||(N6(r,e,2,!1),n.add(t))}function qo(e,r,n){var t=0;r&&(t|=4),N6(n,e,t,r)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[Mi]){e[Mi]=!0,P3.forEach(function(n){n!=="selectionchange"&&(F8.has(n)||qo(n,!1,e),qo(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Mi]||(r[Mi]=!0,qo("selectionchange",!1,r))}}function N6(e,r,n,t){switch(a6(r)){case 1:var a=K7;break;case 4:a=Q7;break;default:a=xf}n=a.bind(null,r,n,e),a=void 0,!ac||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(r,n,{capture:!0,passive:a}):e.addEventListener(r,n,!0):a!==void 0?e.addEventListener(r,n,{passive:a}):e.addEventListener(r,n,!1)}function Bo(e,r,n,t,a){var s=t;if(!(r&1)&&!(r&2)&&t!==null)e:for(;;){if(t===null)return;var f=t.tag;if(f===3||f===4){var p=t.stateNode.containerInfo;if(p===a||p.nodeType===8&&p.parentNode===a)break;if(f===4)for(f=t.return;f!==null;){var v=f.tag;if((v===3||v===4)&&(v=f.stateNode.containerInfo,v===a||v.nodeType===8&&v.parentNode===a))return;f=f.return}for(;p!==null;){if(f=tt(p),f===null)return;if(v=f.tag,v===5||v===6){t=s=f;continue e}p=p.parentNode}}t=t.return}U3(function(){var c=s,i=yf(n),l=[];e:{var o=$6.get(e);if(o!==void 0){var d=bf,h=e;switch(e){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":d=f8;break;case"focusin":h="focus",d=To;break;case"focusout":h="blur",d=To;break;case"beforeblur":case"afterblur":d=To;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=q1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=J7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=p8;break;case m6:case h6:case g6:d=n8;break;case y6:d=h8;break;case"scroll":d=Y7;break;case"wheel":d=y8;break;case"copy":case"cut":case"paste":d=a8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=U1}var g=(r&4)!==0,w=!g&&e==="scroll",y=g?o!==null?o+"Capture":null:o;g=[];for(var $=c,m;$!==null;){m=$;var N=m.stateNode;if(m.tag===5&&N!==null&&(m=N,y!==null&&(N=oi($,y),N!=null&&g.push(mi($,N,m)))),w)break;$=$.return}0<g.length&&(o=new d(o,h,null,n,i),l.push({event:o,listeners:g}))}}if(!(r&7)){e:{if(o=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",o&&n!==nc&&(h=n.relatedTarget||n.fromElement)&&(tt(h)||h[Yr]))break e;if((d||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,d?(h=n.relatedTarget||n.toElement,d=c,h=h?tt(h):null,h!==null&&(w=mt(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(d=null,h=c),d!==h)){if(g=q1,N="onMouseLeave",y="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(g=U1,N="onPointerLeave",y="onPointerEnter",$="pointer"),w=d==null?o:St(d),m=h==null?o:St(h),o=new g(N,$+"leave",d,n,i),o.target=w,o.relatedTarget=m,N=null,tt(i)===c&&(g=new g(y,$+"enter",h,n,i),g.target=m,g.relatedTarget=w,N=g),w=N,d&&h)r:{for(g=d,y=h,$=0,m=g;m;m=bt(m))$++;for(m=0,N=y;N;N=bt(N))m++;for(;0<$-m;)g=bt(g),$--;for(;0<m-$;)y=bt(y),m--;for(;$--;){if(g===y||y!==null&&g===y.alternate)break r;g=bt(g),y=bt(y)}g=null}else g=null;d!==null&&rv(l,o,d,g,!1),h!==null&&w!==null&&rv(l,w,h,g,!0)}}e:{if(o=c?St(c):window,d=o.nodeName&&o.nodeName.toLowerCase(),d==="select"||d==="input"&&o.type==="file")var _=I8;else if(M1(o))if(c6)_=A8;else{_=j8;var x=E8}else(d=o.nodeName)&&d.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(_=P8);if(_&&(_=_(e,c))){u6(l,_,n,i);break e}x&&x(e,o,c),e==="focusout"&&(x=o._wrapperState)&&x.controlled&&o.type==="number"&&Yu(o,"number",o.value)}switch(x=c?St(c):window,e){case"focusin":(M1(x)||x.contentEditable==="true")&&(Lt=x,uc=c,ri=null);break;case"focusout":ri=uc=Lt=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Z1(l,n,i);break;case"selectionchange":if(L8)break;case"keydown":case"keyup":Z1(l,n,i)}var b;if(Ef)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else kt?s6(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(l6&&n.locale!=="ko"&&(kt||I!=="onCompositionStart"?I==="onCompositionEnd"&&kt&&(b=i6()):(Ln=i,_f="value"in Ln?Ln.value:Ln.textContent,kt=!0)),x=Ps(c,I),0<x.length&&(I=new B1(I,e,null,n,i),l.push({event:I,listeners:x}),b?I.data=b:(b=o6(n),b!==null&&(I.data=b)))),(b=w8?N8(e,n):x8(e,n))&&(c=Ps(c,"onBeforeInput"),0<c.length&&(i=new B1("onBeforeInput","beforeinput",null,n,i),l.push({event:i,listeners:c}),i.data=b))}w6(l,r)})}function mi(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Ps(e,r){for(var n=r+"Capture",t=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=oi(e,n),s!=null&&t.unshift(mi(e,s,a)),s=oi(e,r),s!=null&&t.push(mi(e,s,a))),e=e.return}return t}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rv(e,r,n,t,a){for(var s=r._reactName,f=[];n!==null&&n!==t;){var p=n,v=p.alternate,c=p.stateNode;if(v!==null&&v===t)break;p.tag===5&&c!==null&&(p=c,a?(v=oi(n,s),v!=null&&f.unshift(mi(n,v,p))):a||(v=oi(n,s),v!=null&&f.push(mi(n,v,p)))),n=n.return}f.length!==0&&e.push({event:r,listeners:f})}var T8=/\r\n?/g,R8=/\u0000|\uFFFD/g;function nv(e){return(typeof e=="string"?e:""+e).replace(T8,`
`).replace(R8,"")}function Xi(e,r,n){if(r=nv(r),nv(e)!==r&&n)throw Error(C(425))}function As(){}var fc=null,vc=null;function dc(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,H8=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,z8=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(e){return tv.resolve(null).then(e).catch(D8)}:pc;function D8(e){setTimeout(function(){throw e})}function Uo(e,r){var n=r,t=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0){e.removeChild(a),fi(r);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=a}while(n);fi(r)}function Hn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function av(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Ar="__reactFiber$"+aa,hi="__reactProps$"+aa,Yr="__reactContainer$"+aa,mc="__reactEvents$"+aa,G8="__reactListeners$"+aa,q8="__reactHandles$"+aa;function tt(e){var r=e[Ar];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Yr]||n[Ar]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=av(e);e!==null;){if(n=e[Ar])return n;e=av(e)}return r}e=n,n=e.parentNode}return null}function Pi(e){return e=e[Ar]||e[Yr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ro(e){return e[hi]||null}var hc=[],Ft=-1;function Mn(e){return{current:e}}function se(e){0>Ft||(e.current=hc[Ft],hc[Ft]=null,Ft--)}function ie(e,r){Ft++,hc[Ft]=e.current,e.current=r}var Wn={},Re=Mn(Wn),We=Mn(!1),ut=Wn;function Kt(e,r){var n=e.type.contextTypes;if(!n)return Wn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=r[s];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ve(e){return e=e.childContextTypes,e!=null}function Os(){se(We),se(Re)}function iv(e,r,n){if(Re.current!==Wn)throw Error(C(168));ie(Re,r),ie(We,n)}function x6(e,r,n){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var a in t)if(!(a in r))throw Error(C(108,E7(e)||"Unknown",a));return me({},n,t)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,ut=Re.current,ie(Re,e),ie(We,We.current),!0}function lv(e,r,n){var t=e.stateNode;if(!t)throw Error(C(169));n?(e=x6(e,r,ut),t.__reactInternalMemoizedMergedChildContext=e,se(We),se(Re),ie(Re,e)):se(We),ie(We,n)}var Vr=null,no=!1,Wo=!1;function _6(e){Vr===null?Vr=[e]:Vr.push(e)}function B8(e){no=!0,_6(e)}function Xn(){if(!Wo&&Vr!==null){Wo=!0;var e=0,r=re;try{var n=Vr;for(re=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}Vr=null,no=!1}catch(a){throw Vr!==null&&(Vr=Vr.slice(e+1)),X3($f,Xn),a}finally{re=r,Wo=!1}}return null}var Tt=[],Rt=0,Ls=null,Cs=0,ir=[],lr=0,ct=null,Mr=1,Xr="";function rt(e,r){Tt[Rt++]=Cs,Tt[Rt++]=Ls,Ls=e,Cs=r}function b6(e,r,n){ir[lr++]=Mr,ir[lr++]=Xr,ir[lr++]=ct,ct=e;var t=Mr;e=Xr;var a=32-$r(t)-1;t&=~(1<<a),n+=1;var s=32-$r(r)+a;if(30<s){var f=a-a%5;s=(t&(1<<f)-1).toString(32),t>>=f,a-=f,Mr=1<<32-$r(r)+a|n<<a|t,Xr=s+e}else Mr=1<<s|n<<a|t,Xr=e}function Pf(e){e.return!==null&&(rt(e,1),b6(e,1,0))}function Af(e){for(;e===Ls;)Ls=Tt[--Rt],Tt[Rt]=null,Cs=Tt[--Rt],Tt[Rt]=null;for(;e===ct;)ct=ir[--lr],ir[lr]=null,Xr=ir[--lr],ir[lr]=null,Mr=ir[--lr],ir[lr]=null}var Ze=null,Ye=null,fe=!1,yr=null;function I6(e,r){var n=sr(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function sv(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Ze=e,Ye=Hn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Ze=e,Ye=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=ct!==null?{id:Mr,overflow:Xr}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=sr(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Ze=e,Ye=null,!0):!1;default:return!1}}function gc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yc(e){if(fe){var r=Ye;if(r){var n=r;if(!sv(e,r)){if(gc(e))throw Error(C(418));r=Hn(n.nextSibling);var t=Ze;r&&sv(e,r)?I6(t,n):(e.flags=e.flags&-4097|2,fe=!1,Ze=e)}}else{if(gc(e))throw Error(C(418));e.flags=e.flags&-4097|2,fe=!1,Ze=e}}}function ov(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Ki(e){if(e!==Ze)return!1;if(!fe)return ov(e),fe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!dc(e.type,e.memoizedProps)),r&&(r=Ye)){if(gc(e))throw E6(),Error(C(418));for(;r;)I6(e,r),r=Hn(r.nextSibling)}if(ov(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){Ye=Hn(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}Ye=null}}else Ye=Ze?Hn(e.stateNode.nextSibling):null;return!0}function E6(){for(var e=Ye;e;)e=Hn(e.nextSibling)}function Qt(){Ye=Ze=null,fe=!1}function Of(e){yr===null?yr=[e]:yr.push(e)}var U8=en.ReactCurrentBatchConfig;function wa(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var t=n.stateNode}if(!t)throw Error(C(147,e));var a=t,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(f){var p=a.refs;f===null?delete p[s]:p[s]=f},r._stringRef=s,r)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Qi(e,r){throw e=Object.prototype.toString.call(r),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function uv(e){var r=e._init;return r(e._payload)}function j6(e){function r(y,$){if(e){var m=y.deletions;m===null?(y.deletions=[$],y.flags|=16):m.push($)}}function n(y,$){if(!e)return null;for(;$!==null;)r(y,$),$=$.sibling;return null}function t(y,$){for(y=new Map;$!==null;)$.key!==null?y.set($.key,$):y.set($.index,$),$=$.sibling;return y}function a(y,$){return y=qn(y,$),y.index=0,y.sibling=null,y}function s(y,$,m){return y.index=m,e?(m=y.alternate,m!==null?(m=m.index,m<$?(y.flags|=2,$):m):(y.flags|=2,$)):(y.flags|=1048576,$)}function f(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,$,m,N){return $===null||$.tag!==6?($=Zo(m,y.mode,N),$.return=y,$):($=a($,m),$.return=y,$)}function v(y,$,m,N){var _=m.type;return _===Ot?i(y,$,m.props.children,N,m.key):$!==null&&($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&uv(_)===$.type)?(N=a($,m.props),N.ref=wa(y,$,m),N.return=y,N):(N=$s(m.type,m.key,m.props,null,y.mode,N),N.ref=wa(y,$,m),N.return=y,N)}function c(y,$,m,N){return $===null||$.tag!==4||$.stateNode.containerInfo!==m.containerInfo||$.stateNode.implementation!==m.implementation?($=Jo(m,y.mode,N),$.return=y,$):($=a($,m.children||[]),$.return=y,$)}function i(y,$,m,N,_){return $===null||$.tag!==7?($=ot(m,y.mode,N,_),$.return=y,$):($=a($,m),$.return=y,$)}function l(y,$,m){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Zo(""+$,y.mode,m),$.return=y,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case zi:return m=$s($.type,$.key,$.props,null,y.mode,m),m.ref=wa(y,null,$),m.return=y,m;case At:return $=Jo($,y.mode,m),$.return=y,$;case Pn:var N=$._init;return l(y,N($._payload),m)}if(Xa($)||ma($))return $=ot($,y.mode,m,null),$.return=y,$;Qi(y,$)}return null}function o(y,$,m,N){var _=$!==null?$.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:p(y,$,""+m,N);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zi:return m.key===_?v(y,$,m,N):null;case At:return m.key===_?c(y,$,m,N):null;case Pn:return _=m._init,o(y,$,_(m._payload),N)}if(Xa(m)||ma(m))return _!==null?null:i(y,$,m,N,null);Qi(y,m)}return null}function d(y,$,m,N,_){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(m)||null,p($,y,""+N,_);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case zi:return y=y.get(N.key===null?m:N.key)||null,v($,y,N,_);case At:return y=y.get(N.key===null?m:N.key)||null,c($,y,N,_);case Pn:var x=N._init;return d(y,$,m,x(N._payload),_)}if(Xa(N)||ma(N))return y=y.get(m)||null,i($,y,N,_,null);Qi($,N)}return null}function h(y,$,m,N){for(var _=null,x=null,b=$,I=$=0,O=null;b!==null&&I<m.length;I++){b.index>I?(O=b,b=null):O=b.sibling;var k=o(y,b,m[I],N);if(k===null){b===null&&(b=O);break}e&&b&&k.alternate===null&&r(y,b),$=s(k,$,I),x===null?_=k:x.sibling=k,x=k,b=O}if(I===m.length)return n(y,b),fe&&rt(y,I),_;if(b===null){for(;I<m.length;I++)b=l(y,m[I],N),b!==null&&($=s(b,$,I),x===null?_=b:x.sibling=b,x=b);return fe&&rt(y,I),_}for(b=t(y,b);I<m.length;I++)O=d(b,y,I,m[I],N),O!==null&&(e&&O.alternate!==null&&b.delete(O.key===null?I:O.key),$=s(O,$,I),x===null?_=O:x.sibling=O,x=O);return e&&b.forEach(function(R){return r(y,R)}),fe&&rt(y,I),_}function g(y,$,m,N){var _=ma(m);if(typeof _!="function")throw Error(C(150));if(m=_.call(m),m==null)throw Error(C(151));for(var x=_=null,b=$,I=$=0,O=null,k=m.next();b!==null&&!k.done;I++,k=m.next()){b.index>I?(O=b,b=null):O=b.sibling;var R=o(y,b,k.value,N);if(R===null){b===null&&(b=O);break}e&&b&&R.alternate===null&&r(y,b),$=s(R,$,I),x===null?_=R:x.sibling=R,x=R,b=O}if(k.done)return n(y,b),fe&&rt(y,I),_;if(b===null){for(;!k.done;I++,k=m.next())k=l(y,k.value,N),k!==null&&($=s(k,$,I),x===null?_=k:x.sibling=k,x=k);return fe&&rt(y,I),_}for(b=t(y,b);!k.done;I++,k=m.next())k=d(b,y,I,k.value,N),k!==null&&(e&&k.alternate!==null&&b.delete(k.key===null?I:k.key),$=s(k,$,I),x===null?_=k:x.sibling=k,x=k);return e&&b.forEach(function(B){return r(y,B)}),fe&&rt(y,I),_}function w(y,$,m,N){if(typeof m=="object"&&m!==null&&m.type===Ot&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zi:e:{for(var _=m.key,x=$;x!==null;){if(x.key===_){if(_=m.type,_===Ot){if(x.tag===7){n(y,x.sibling),$=a(x,m.props.children),$.return=y,y=$;break e}}else if(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&uv(_)===x.type){n(y,x.sibling),$=a(x,m.props),$.ref=wa(y,x,m),$.return=y,y=$;break e}n(y,x);break}else r(y,x);x=x.sibling}m.type===Ot?($=ot(m.props.children,y.mode,N,m.key),$.return=y,y=$):(N=$s(m.type,m.key,m.props,null,y.mode,N),N.ref=wa(y,$,m),N.return=y,y=N)}return f(y);case At:e:{for(x=m.key;$!==null;){if($.key===x)if($.tag===4&&$.stateNode.containerInfo===m.containerInfo&&$.stateNode.implementation===m.implementation){n(y,$.sibling),$=a($,m.children||[]),$.return=y,y=$;break e}else{n(y,$);break}else r(y,$);$=$.sibling}$=Jo(m,y.mode,N),$.return=y,y=$}return f(y);case Pn:return x=m._init,w(y,$,x(m._payload),N)}if(Xa(m))return h(y,$,m,N);if(ma(m))return g(y,$,m,N);Qi(y,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,$!==null&&$.tag===6?(n(y,$.sibling),$=a($,m),$.return=y,y=$):(n(y,$),$=Zo(m,y.mode,N),$.return=y,y=$),f(y)):n(y,$)}return w}var Yt=j6(!0),P6=j6(!1),Ss=Mn(null),Fs=null,Ht=null,kf=null;function Lf(){kf=Ht=Fs=null}function Cf(e){var r=Ss.current;se(Ss),e._currentValue=r}function $c(e,r,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===n)break;e=e.return}}function Wt(e,r){Fs=e,kf=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Ue=!0),e.firstContext=null)}function ur(e){var r=e._currentValue;if(kf!==e)if(e={context:e,memoizedValue:r,next:null},Ht===null){if(Fs===null)throw Error(C(308));Ht=e,Fs.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return r}var at=null;function Sf(e){at===null?at=[e]:at.push(e)}function A6(e,r,n,t){var a=r.interleaved;return a===null?(n.next=n,Sf(r)):(n.next=a.next,a.next=n),r.interleaved=n,Zr(e,t)}function Zr(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function Ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O6(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zn(e,r,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,Y&2){var a=t.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r,Zr(e,n)}return a=t.interleaved,a===null?(r.next=r,Sf(t)):(r.next=a.next,a.next=r),t.interleaved=r,Zr(e,n)}function ds(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,wf(e,n)}}function cv(e,r){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var f={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=f:s=s.next=f,n=n.next}while(n!==null);s===null?a=s=r:s=s.next=r}else a=s=r;n={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Ts(e,r,n,t){var a=e.updateQueue;An=!1;var s=a.firstBaseUpdate,f=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var v=p,c=v.next;v.next=null,f===null?s=c:f.next=c,f=v;var i=e.alternate;i!==null&&(i=i.updateQueue,p=i.lastBaseUpdate,p!==f&&(p===null?i.firstBaseUpdate=c:p.next=c,i.lastBaseUpdate=v))}if(s!==null){var l=a.baseState;f=0,i=c=v=null,p=s;do{var o=p.lane,d=p.eventTime;if((t&o)===o){i!==null&&(i=i.next={eventTime:d,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var h=e,g=p;switch(o=r,d=n,g.tag){case 1:if(h=g.payload,typeof h=="function"){l=h.call(d,l,o);break e}l=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,o=typeof h=="function"?h.call(d,l,o):h,o==null)break e;l=me({},l,o);break e;case 2:An=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,o=a.effects,o===null?a.effects=[p]:o.push(p))}else d={eventTime:d,lane:o,tag:p.tag,payload:p.payload,callback:p.callback,next:null},i===null?(c=i=d,v=l):i=i.next=d,f|=o;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;o=p,p=o.next,o.next=null,a.lastBaseUpdate=o,a.shared.pending=null}}while(!0);if(i===null&&(v=l),a.baseState=v,a.firstBaseUpdate=c,a.lastBaseUpdate=i,r=a.shared.interleaved,r!==null){a=r;do f|=a.lane,a=a.next;while(a!==r)}else s===null&&(a.shared.lanes=0);vt|=f,e.lanes=f,e.memoizedState=l}}function fv(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],a=t.callback;if(a!==null){if(t.callback=null,t=n,typeof a!="function")throw Error(C(191,a));a.call(t)}}}var Ai={},Lr=Mn(Ai),gi=Mn(Ai),yi=Mn(Ai);function it(e){if(e===Ai)throw Error(C(174));return e}function Tf(e,r){switch(ie(yi,r),ie(gi,e),ie(Lr,Ai),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ju(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ju(r,e)}se(Lr),ie(Lr,r)}function Zt(){se(Lr),se(gi),se(yi)}function k6(e){it(yi.current);var r=it(Lr.current),n=Ju(r,e.type);r!==n&&(ie(gi,e),ie(Lr,n))}function Rf(e){gi.current===e&&(se(Lr),se(gi))}var de=Mn(0);function Rs(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Vo=[];function Hf(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var ps=en.ReactCurrentDispatcher,Mo=en.ReactCurrentBatchConfig,ft=0,pe=null,xe=null,Ee=null,Hs=!1,ni=!1,$i=0,W8=0;function Se(){throw Error(C(321))}function zf(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Nr(e[n],r[n]))return!1;return!0}function Df(e,r,n,t,a,s){if(ft=s,pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ps.current=e===null||e.memoizedState===null?K8:Q8,e=n(t,a),ni){s=0;do{if(ni=!1,$i=0,25<=s)throw Error(C(301));s+=1,Ee=xe=null,r.updateQueue=null,ps.current=Y8,e=n(t,a)}while(ni)}if(ps.current=zs,r=xe!==null&&xe.next!==null,ft=0,Ee=xe=pe=null,Hs=!1,r)throw Error(C(300));return e}function Gf(){var e=$i!==0;return $i=0,e}function Pr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function cr(){if(xe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var r=Ee===null?pe.memoizedState:Ee.next;if(r!==null)Ee=r,xe=e;else{if(e===null)throw Error(C(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function wi(e,r){return typeof r=="function"?r(e):r}function Xo(e){var r=cr(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var t=xe,a=t.baseQueue,s=n.pending;if(s!==null){if(a!==null){var f=a.next;a.next=s.next,s.next=f}t.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,t=t.baseState;var p=f=null,v=null,c=s;do{var i=c.lane;if((ft&i)===i)v!==null&&(v=v.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:e(t,c.action);else{var l={lane:i,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};v===null?(p=v=l,f=t):v=v.next=l,pe.lanes|=i,vt|=i}c=c.next}while(c!==null&&c!==s);v===null?f=t:v.next=p,Nr(t,r.memoizedState)||(Ue=!0),r.memoizedState=t,r.baseState=f,r.baseQueue=v,n.lastRenderedState=t}if(e=n.interleaved,e!==null){a=e;do s=a.lane,pe.lanes|=s,vt|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function Ko(e){var r=cr(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var t=n.dispatch,a=n.pending,s=r.memoizedState;if(a!==null){n.pending=null;var f=a=a.next;do s=e(s,f.action),f=f.next;while(f!==a);Nr(s,r.memoizedState)||(Ue=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,t]}function L6(){}function C6(e,r){var n=pe,t=cr(),a=r(),s=!Nr(t.memoizedState,a);if(s&&(t.memoizedState=a,Ue=!0),t=t.queue,qf(T6.bind(null,n,t,e),[e]),t.getSnapshot!==r||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ni(9,F6.bind(null,n,t,a,r),void 0,null),je===null)throw Error(C(349));ft&30||S6(n,r,a)}return a}function S6(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=pe.updateQueue,r===null?(r={lastEffect:null,stores:null},pe.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function F6(e,r,n,t){r.value=n,r.getSnapshot=t,R6(r)&&H6(e)}function T6(e,r,n){return n(function(){R6(r)&&H6(e)})}function R6(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Nr(e,n)}catch{return!0}}function H6(e){var r=Zr(e,1);r!==null&&wr(r,e,1,-1)}function vv(e){var r=Pr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},r.queue=e,e=e.dispatch=X8.bind(null,pe,e),[r.memoizedState,e]}function Ni(e,r,n,t){return e={tag:e,create:r,destroy:n,deps:t,next:null},r=pe.updateQueue,r===null?(r={lastEffect:null,stores:null},pe.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,r.lastEffect=e)),e}function z6(){return cr().memoizedState}function ms(e,r,n,t){var a=Pr();pe.flags|=e,a.memoizedState=Ni(1|r,n,void 0,t===void 0?null:t)}function to(e,r,n,t){var a=cr();t=t===void 0?null:t;var s=void 0;if(xe!==null){var f=xe.memoizedState;if(s=f.destroy,t!==null&&zf(t,f.deps)){a.memoizedState=Ni(r,n,s,t);return}}pe.flags|=e,a.memoizedState=Ni(1|r,n,s,t)}function dv(e,r){return ms(8390656,8,e,r)}function qf(e,r){return to(2048,8,e,r)}function D6(e,r){return to(4,2,e,r)}function G6(e,r){return to(4,4,e,r)}function q6(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function B6(e,r,n){return n=n!=null?n.concat([e]):null,to(4,4,q6.bind(null,r,e),n)}function Bf(){}function U6(e,r){var n=cr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&zf(r,t[1])?t[0]:(n.memoizedState=[e,r],e)}function W6(e,r){var n=cr();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&zf(r,t[1])?t[0]:(e=e(),n.memoizedState=[e,r],e)}function V6(e,r,n){return ft&21?(Nr(n,r)||(n=Y3(),pe.lanes|=n,vt|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function V8(e,r){var n=re;re=n!==0&&4>n?n:4,e(!0);var t=Mo.transition;Mo.transition={};try{e(!1),r()}finally{re=n,Mo.transition=t}}function M6(){return cr().memoizedState}function M8(e,r,n){var t=Gn(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},X6(e))K6(r,n);else if(n=A6(e,r,n,t),n!==null){var a=ze();wr(n,e,t,a),Q6(n,r,t)}}function X8(e,r,n){var t=Gn(e),a={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(X6(e))K6(r,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var f=r.lastRenderedState,p=s(f,n);if(a.hasEagerState=!0,a.eagerState=p,Nr(p,f)){var v=r.interleaved;v===null?(a.next=a,Sf(r)):(a.next=v.next,v.next=a),r.interleaved=a;return}}catch{}finally{}n=A6(e,r,a,t),n!==null&&(a=ze(),wr(n,e,t,a),Q6(n,r,t))}}function X6(e){var r=e.alternate;return e===pe||r!==null&&r===pe}function K6(e,r){ni=Hs=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Q6(e,r,n){if(n&4194240){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,wf(e,n)}}var zs={readContext:ur,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},K8={readContext:ur,useCallback:function(e,r){return Pr().memoizedState=[e,r===void 0?null:r],e},useContext:ur,useEffect:dv,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,ms(4194308,4,q6.bind(null,r,e),n)},useLayoutEffect:function(e,r){return ms(4194308,4,e,r)},useInsertionEffect:function(e,r){return ms(4,2,e,r)},useMemo:function(e,r){var n=Pr();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var t=Pr();return r=n!==void 0?n(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=M8.bind(null,pe,e),[t.memoizedState,e]},useRef:function(e){var r=Pr();return e={current:e},r.memoizedState=e},useState:vv,useDebugValue:Bf,useDeferredValue:function(e){return Pr().memoizedState=e},useTransition:function(){var e=vv(!1),r=e[0];return e=V8.bind(null,e[1]),Pr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var t=pe,a=Pr();if(fe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=r(),je===null)throw Error(C(349));ft&30||S6(t,r,n)}a.memoizedState=n;var s={value:n,getSnapshot:r};return a.queue=s,dv(T6.bind(null,t,s,e),[e]),t.flags|=2048,Ni(9,F6.bind(null,t,s,n,r),void 0,null),n},useId:function(){var e=Pr(),r=je.identifierPrefix;if(fe){var n=Xr,t=Mr;n=(t&~(1<<32-$r(t)-1)).toString(32)+n,r=":"+r+"R"+n,n=$i++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=W8++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Q8={readContext:ur,useCallback:U6,useContext:ur,useEffect:qf,useImperativeHandle:B6,useInsertionEffect:D6,useLayoutEffect:G6,useMemo:W6,useReducer:Xo,useRef:z6,useState:function(){return Xo(wi)},useDebugValue:Bf,useDeferredValue:function(e){var r=cr();return V6(r,xe.memoizedState,e)},useTransition:function(){var e=Xo(wi)[0],r=cr().memoizedState;return[e,r]},useMutableSource:L6,useSyncExternalStore:C6,useId:M6,unstable_isNewReconciler:!1},Y8={readContext:ur,useCallback:U6,useContext:ur,useEffect:qf,useImperativeHandle:B6,useInsertionEffect:D6,useLayoutEffect:G6,useMemo:W6,useReducer:Ko,useRef:z6,useState:function(){return Ko(wi)},useDebugValue:Bf,useDeferredValue:function(e){var r=cr();return xe===null?r.memoizedState=e:V6(r,xe.memoizedState,e)},useTransition:function(){var e=Ko(wi)[0],r=cr().memoizedState;return[e,r]},useMutableSource:L6,useSyncExternalStore:C6,useId:M6,unstable_isNewReconciler:!1};function hr(e,r){if(e&&e.defaultProps){r=me({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function wc(e,r,n,t){r=e.memoizedState,n=n(t,r),n=n==null?r:me({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ao={isMounted:function(e){return(e=e._reactInternals)?mt(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var t=ze(),a=Gn(e),s=Kr(t,a);s.payload=r,n!=null&&(s.callback=n),r=zn(e,s,a),r!==null&&(wr(r,e,a,t),ds(r,e,a))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var t=ze(),a=Gn(e),s=Kr(t,a);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=zn(e,s,a),r!==null&&(wr(r,e,a,t),ds(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=ze(),t=Gn(e),a=Kr(n,t);a.tag=2,r!=null&&(a.callback=r),r=zn(e,a,t),r!==null&&(wr(r,e,t,n),ds(r,e,t))}};function pv(e,r,n,t,a,s,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,f):r.prototype&&r.prototype.isPureReactComponent?!di(n,t)||!di(a,s):!0}function Y6(e,r,n){var t=!1,a=Wn,s=r.contextType;return typeof s=="object"&&s!==null?s=ur(s):(a=Ve(r)?ut:Re.current,t=r.contextTypes,s=(t=t!=null)?Kt(e,a):Wn),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ao,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),r}function mv(e,r,n,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,t),r.state!==e&&ao.enqueueReplaceState(r,r.state,null)}function Nc(e,r,n,t){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ff(e);var s=r.contextType;typeof s=="object"&&s!==null?a.context=ur(s):(s=Ve(r)?ut:Re.current,a.context=Kt(e,s)),a.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(wc(e,r,s,n),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ao.enqueueReplaceState(a,a.state,null),Ts(e,n,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Jt(e,r){try{var n="",t=r;do n+=I7(t),t=t.return;while(t);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:a,digest:null}}function Qo(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function xc(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Z8=typeof WeakMap=="function"?WeakMap:Map;function Z6(e,r,n){n=Kr(-1,n),n.tag=3,n.payload={element:null};var t=r.value;return n.callback=function(){Gs||(Gs=!0,Lc=t),xc(e,r)},n}function J6(e,r,n){n=Kr(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=r.value;n.payload=function(){return t(a)},n.callback=function(){xc(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(e,r),typeof t!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var f=r.stack;this.componentDidCatch(r.value,{componentStack:f!==null?f:""})}),n}function hv(e,r,n){var t=e.pingCache;if(t===null){t=e.pingCache=new Z8;var a=new Set;t.set(r,a)}else a=t.get(r),a===void 0&&(a=new Set,t.set(r,a));a.has(n)||(a.add(n),e=v9.bind(null,e,r,n),r.then(e,e))}function gv(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function yv(e,r,n,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Kr(-1,1),r.tag=2,zn(n,r,1))),n.lanes|=1),e)}var J8=en.ReactCurrentOwner,Ue=!1;function He(e,r,n,t){r.child=e===null?P6(r,null,n,t):Yt(r,e.child,n,t)}function $v(e,r,n,t,a){n=n.render;var s=r.ref;return Wt(r,a),t=Df(e,r,n,t,s,a),n=Gf(),e!==null&&!Ue?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Jr(e,r,a)):(fe&&n&&Pf(r),r.flags|=1,He(e,r,t,a),r.child)}function wv(e,r,n,t,a){if(e===null){var s=n.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,e4(e,r,s,t,a)):(e=$s(n.type,null,t,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&a)){var f=s.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(f,t)&&e.ref===r.ref)return Jr(e,r,a)}return r.flags|=1,e=qn(s,t),e.ref=r.ref,e.return=r,r.child=e}function e4(e,r,n,t,a){if(e!==null){var s=e.memoizedProps;if(di(s,t)&&e.ref===r.ref)if(Ue=!1,r.pendingProps=t=s,(e.lanes&a)!==0)e.flags&131072&&(Ue=!0);else return r.lanes=e.lanes,Jr(e,r,a)}return _c(e,r,n,t,a)}function r4(e,r,n){var t=r.pendingProps,a=t.children,s=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Dt,Qe),Qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ie(Dt,Qe),Qe|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:n,ie(Dt,Qe),Qe|=t}else s!==null?(t=s.baseLanes|n,r.memoizedState=null):t=n,ie(Dt,Qe),Qe|=t;return He(e,r,a,n),r.child}function n4(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function _c(e,r,n,t,a){var s=Ve(n)?ut:Re.current;return s=Kt(r,s),Wt(r,a),n=Df(e,r,n,t,s,a),t=Gf(),e!==null&&!Ue?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Jr(e,r,a)):(fe&&t&&Pf(r),r.flags|=1,He(e,r,n,a),r.child)}function Nv(e,r,n,t,a){if(Ve(n)){var s=!0;ks(r)}else s=!1;if(Wt(r,a),r.stateNode===null)hs(e,r),Y6(r,n,t),Nc(r,n,t,a),t=!0;else if(e===null){var f=r.stateNode,p=r.memoizedProps;f.props=p;var v=f.context,c=n.contextType;typeof c=="object"&&c!==null?c=ur(c):(c=Ve(n)?ut:Re.current,c=Kt(r,c));var i=n.getDerivedStateFromProps,l=typeof i=="function"||typeof f.getSnapshotBeforeUpdate=="function";l||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==t||v!==c)&&mv(r,f,t,c),An=!1;var o=r.memoizedState;f.state=o,Ts(r,t,f,a),v=r.memoizedState,p!==t||o!==v||We.current||An?(typeof i=="function"&&(wc(r,n,i,t),v=r.memoizedState),(p=An||pv(r,n,p,t,o,v,c))?(l||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=v),f.props=t,f.state=v,f.context=c,t=p):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{f=r.stateNode,O6(e,r),p=r.memoizedProps,c=r.type===r.elementType?p:hr(r.type,p),f.props=c,l=r.pendingProps,o=f.context,v=n.contextType,typeof v=="object"&&v!==null?v=ur(v):(v=Ve(n)?ut:Re.current,v=Kt(r,v));var d=n.getDerivedStateFromProps;(i=typeof d=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==l||o!==v)&&mv(r,f,t,v),An=!1,o=r.memoizedState,f.state=o,Ts(r,t,f,a);var h=r.memoizedState;p!==l||o!==h||We.current||An?(typeof d=="function"&&(wc(r,n,d,t),h=r.memoizedState),(c=An||pv(r,n,c,t,o,h,v)||!1)?(i||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(t,h,v),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(t,h,v)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&o===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&o===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=h),f.props=t,f.state=h,f.context=v,t=c):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&o===e.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&o===e.memoizedState||(r.flags|=1024),t=!1)}return bc(e,r,n,t,s,a)}function bc(e,r,n,t,a,s){n4(e,r);var f=(r.flags&128)!==0;if(!t&&!f)return a&&lv(r,n,!1),Jr(e,r,s);t=r.stateNode,J8.current=r;var p=f&&typeof n.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&f?(r.child=Yt(r,e.child,null,s),r.child=Yt(r,null,p,s)):He(e,r,p,s),r.memoizedState=t.state,a&&lv(r,n,!0),r.child}function t4(e){var r=e.stateNode;r.pendingContext?iv(e,r.pendingContext,r.pendingContext!==r.context):r.context&&iv(e,r.context,!1),Tf(e,r.containerInfo)}function xv(e,r,n,t,a){return Qt(),Of(a),r.flags|=256,He(e,r,n,t),r.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function a4(e,r,n){var t=r.pendingProps,a=de.current,s=!1,f=(r.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(a&2)!==0),p?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ie(de,a&1),e===null)return yc(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(f=t.children,e=t.fallback,s?(t=r.mode,s=r.child,f={mode:"hidden",children:f},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=f):s=so(f,t,0,null),e=ot(e,t,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=Ec(n),r.memoizedState=Ic,e):Uf(r,f));if(a=e.memoizedState,a!==null&&(p=a.dehydrated,p!==null))return e9(e,r,f,t,p,a,n);if(s){s=t.fallback,f=r.mode,a=e.child,p=a.sibling;var v={mode:"hidden",children:t.children};return!(f&1)&&r.child!==a?(t=r.child,t.childLanes=0,t.pendingProps=v,r.deletions=null):(t=qn(a,v),t.subtreeFlags=a.subtreeFlags&14680064),p!==null?s=qn(p,s):(s=ot(s,f,n,null),s.flags|=2),s.return=r,t.return=r,t.sibling=s,r.child=t,t=s,s=r.child,f=e.child.memoizedState,f=f===null?Ec(n):{baseLanes:f.baseLanes|n,cachePool:null,transitions:f.transitions},s.memoizedState=f,s.childLanes=e.childLanes&~n,r.memoizedState=Ic,t}return s=e.child,e=s.sibling,t=qn(s,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=n),t.return=r,t.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=t,r.memoizedState=null,t}function Uf(e,r){return r=so({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Yi(e,r,n,t){return t!==null&&Of(t),Yt(r,e.child,null,n),e=Uf(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function e9(e,r,n,t,a,s,f){if(n)return r.flags&256?(r.flags&=-257,t=Qo(Error(C(422))),Yi(e,r,f,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=t.fallback,a=r.mode,t=so({mode:"visible",children:t.children},a,0,null),s=ot(s,a,f,null),s.flags|=2,t.return=r,s.return=r,t.sibling=s,r.child=t,r.mode&1&&Yt(r,e.child,null,f),r.child.memoizedState=Ec(f),r.memoizedState=Ic,s);if(!(r.mode&1))return Yi(e,r,f,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var p=t.dgst;return t=p,s=Error(C(419)),t=Qo(s,t,void 0),Yi(e,r,f,t)}if(p=(f&e.childLanes)!==0,Ue||p){if(t=je,t!==null){switch(f&-f){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|f)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Zr(e,a),wr(t,e,a,-1))}return Qf(),t=Qo(Error(C(421))),Yi(e,r,f,t)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=d9.bind(null,e),a._reactRetry=r,null):(e=s.treeContext,Ye=Hn(a.nextSibling),Ze=r,fe=!0,yr=null,e!==null&&(ir[lr++]=Mr,ir[lr++]=Xr,ir[lr++]=ct,Mr=e.id,Xr=e.overflow,ct=r),r=Uf(r,t.children),r.flags|=4096,r)}function _v(e,r,n){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),$c(e.return,r,n)}function Yo(e,r,n,t,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:a}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=n,s.tailMode=a)}function i4(e,r,n){var t=r.pendingProps,a=t.revealOrder,s=t.tail;if(He(e,r,t.children,n),t=de.current,t&2)t=t&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_v(e,n,r);else if(e.tag===19)_v(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(ie(de,t),!(r.mode&1))r.memoizedState=null;else switch(a){case"forwards":for(n=r.child,a=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=r.child,r.child=null):(a=n.sibling,n.sibling=null),Yo(r,!1,a,n,s);break;case"backwards":for(n=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&Rs(e)===null){r.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Yo(r,!0,n,null,s);break;case"together":Yo(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hs(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Jr(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),vt|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(C(153));if(r.child!==null){for(e=r.child,n=qn(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function r9(e,r,n){switch(r.tag){case 3:t4(r),Qt();break;case 5:k6(r);break;case 1:Ve(r.type)&&ks(r);break;case 4:Tf(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,a=r.memoizedProps.value;ie(Ss,t._currentValue),t._currentValue=a;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(ie(de,de.current&1),r.flags|=128,null):n&r.child.childLanes?a4(e,r,n):(ie(de,de.current&1),e=Jr(e,r,n),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(t=(n&r.childLanes)!==0,e.flags&128){if(t)return i4(e,r,n);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(de,de.current),t)break;return null;case 22:case 23:return r.lanes=0,r4(e,r,n)}return Jr(e,r,n)}var l4,jc,s4,o4;l4=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};s4=function(e,r,n,t){var a=e.memoizedProps;if(a!==t){e=r.stateNode,it(Lr.current);var s=null;switch(n){case"input":a=Ku(e,a),t=Ku(e,t),s=[];break;case"select":a=me({},a,{value:void 0}),t=me({},t,{value:void 0}),s=[];break;case"textarea":a=Zu(e,a),t=Zu(e,t),s=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=As)}ec(n,t);var f;n=null;for(c in a)if(!t.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var p=a[c];for(f in p)p.hasOwnProperty(f)&&(n||(n={}),n[f]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(li.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in t){var v=t[c];if(p=a!=null?a[c]:void 0,t.hasOwnProperty(c)&&v!==p&&(v!=null||p!=null))if(c==="style")if(p){for(f in p)!p.hasOwnProperty(f)||v&&v.hasOwnProperty(f)||(n||(n={}),n[f]="");for(f in v)v.hasOwnProperty(f)&&p[f]!==v[f]&&(n||(n={}),n[f]=v[f])}else n||(s||(s=[]),s.push(c,n)),n=v;else c==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,p=p?p.__html:void 0,v!=null&&p!==v&&(s=s||[]).push(c,v)):c==="children"?typeof v!="string"&&typeof v!="number"||(s=s||[]).push(c,""+v):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(li.hasOwnProperty(c)?(v!=null&&c==="onScroll"&&le("scroll",e),s||p===v||(s=[])):(s=s||[]).push(c,v))}n&&(s=s||[]).push("style",n);var c=s;(r.updateQueue=c)&&(r.flags|=4)}};o4=function(e,r,n,t){n!==t&&(r.flags|=4)};function Na(e,r){if(!fe)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Fe(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(r)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=n,r}function n9(e,r,n){var t=r.pendingProps;switch(Af(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(r),null;case 1:return Ve(r.type)&&Os(),Fe(r),null;case 3:return t=r.stateNode,Zt(),se(We),se(Re),Hf(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ki(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,yr!==null&&(Fc(yr),yr=null))),jc(e,r),Fe(r),null;case 5:Rf(r);var a=it(yi.current);if(n=r.type,e!==null&&r.stateNode!=null)s4(e,r,n,t,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(C(166));return Fe(r),null}if(e=it(Lr.current),Ki(r)){t=r.stateNode,n=r.type;var s=r.memoizedProps;switch(t[Ar]=r,t[hi]=s,e=(r.mode&1)!==0,n){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(a=0;a<Qa.length;a++)le(Qa[a],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":L1(t,s),le("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},le("invalid",t);break;case"textarea":S1(t,s),le("invalid",t)}ec(n,s),a=null;for(var f in s)if(s.hasOwnProperty(f)){var p=s[f];f==="children"?typeof p=="string"?t.textContent!==p&&(s.suppressHydrationWarning!==!0&&Xi(t.textContent,p,e),a=["children",p]):typeof p=="number"&&t.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&Xi(t.textContent,p,e),a=["children",""+p]):li.hasOwnProperty(f)&&p!=null&&f==="onScroll"&&le("scroll",t)}switch(n){case"input":Di(t),C1(t,s,!0);break;case"textarea":Di(t),F1(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=As)}t=a,r.updateQueue=t,t!==null&&(r.flags|=4)}else{f=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=T3(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=f.createElement(n,{is:t.is}):(e=f.createElement(n),n==="select"&&(f=e,t.multiple?f.multiple=!0:t.size&&(f.size=t.size))):e=f.createElementNS(e,n),e[Ar]=r,e[hi]=t,l4(e,r,!1,!1),r.stateNode=e;e:{switch(f=rc(n,t),n){case"dialog":le("cancel",e),le("close",e),a=t;break;case"iframe":case"object":case"embed":le("load",e),a=t;break;case"video":case"audio":for(a=0;a<Qa.length;a++)le(Qa[a],e);a=t;break;case"source":le("error",e),a=t;break;case"img":case"image":case"link":le("error",e),le("load",e),a=t;break;case"details":le("toggle",e),a=t;break;case"input":L1(e,t),a=Ku(e,t),le("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=me({},t,{value:void 0}),le("invalid",e);break;case"textarea":S1(e,t),a=Zu(e,t),le("invalid",e);break;default:a=t}ec(n,a),p=a;for(s in p)if(p.hasOwnProperty(s)){var v=p[s];s==="style"?z3(e,v):s==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&R3(e,v)):s==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&si(e,v):typeof v=="number"&&si(e,""+v):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(li.hasOwnProperty(s)?v!=null&&s==="onScroll"&&le("scroll",e):v!=null&&pf(e,s,v,f))}switch(n){case"input":Di(e),C1(e,t,!1);break;case"textarea":Di(e),F1(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Un(t.value));break;case"select":e.multiple=!!t.multiple,s=t.value,s!=null?Gt(e,!!t.multiple,s,!1):t.defaultValue!=null&&Gt(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fe(r),null;case 6:if(e&&r.stateNode!=null)o4(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(C(166));if(n=it(yi.current),it(Lr.current),Ki(r)){if(t=r.stateNode,n=r.memoizedProps,t[Ar]=r,(s=t.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:Xi(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(t.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Ar]=r,r.stateNode=t}return Fe(r),null;case 13:if(se(de),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Ye!==null&&r.mode&1&&!(r.flags&128))E6(),Qt(),r.flags|=98560,s=!1;else if(s=Ki(r),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ar]=r}else Qt(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Fe(r),s=!1}else yr!==null&&(Fc(yr),yr=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(e===null||de.current&1?_e===0&&(_e=3):Qf())),r.updateQueue!==null&&(r.flags|=4),Fe(r),null);case 4:return Zt(),jc(e,r),e===null&&pi(r.stateNode.containerInfo),Fe(r),null;case 10:return Cf(r.type._context),Fe(r),null;case 17:return Ve(r.type)&&Os(),Fe(r),null;case 19:if(se(de),s=r.memoizedState,s===null)return Fe(r),null;if(t=(r.flags&128)!==0,f=s.rendering,f===null)if(t)Na(s,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(f=Rs(e),f!==null){for(r.flags|=128,Na(s,!1),t=f.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=n,n=r.child;n!==null;)s=n,e=t,s.flags&=14680066,f=s.alternate,f===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=f.childLanes,s.lanes=f.lanes,s.child=f.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=f.memoizedProps,s.memoizedState=f.memoizedState,s.updateQueue=f.updateQueue,s.type=f.type,e=f.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(de,de.current&1|2),r.child}e=e.sibling}s.tail!==null&&$e()>ea&&(r.flags|=128,t=!0,Na(s,!1),r.lanes=4194304)}else{if(!t)if(e=Rs(f),e!==null){if(r.flags|=128,t=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),Na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!fe)return Fe(r),null}else 2*$e()-s.renderingStartTime>ea&&n!==1073741824&&(r.flags|=128,t=!0,Na(s,!1),r.lanes=4194304);s.isBackwards?(f.sibling=r.child,r.child=f):(n=s.last,n!==null?n.sibling=f:r.child=f,s.last=f)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=$e(),r.sibling=null,n=de.current,ie(de,t?n&1|2:n&1),r):(Fe(r),null);case 22:case 23:return Kf(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?Qe&1073741824&&(Fe(r),r.subtreeFlags&6&&(r.flags|=8192)):Fe(r),null;case 24:return null;case 25:return null}throw Error(C(156,r.tag))}function t9(e,r){switch(Af(r),r.tag){case 1:return Ve(r.type)&&Os(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Zt(),se(We),se(Re),Hf(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Rf(r),null;case 13:if(se(de),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(C(340));Qt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return se(de),null;case 4:return Zt(),null;case 10:return Cf(r.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Zi=!1,Te=!1,a9=typeof WeakSet=="function"?WeakSet:Set,z=null;function zt(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){ge(e,r,t)}else n.current=null}function Pc(e,r,n){try{n()}catch(t){ge(e,r,t)}}var bv=!1;function i9(e,r){if(fc=Es,e=d6(),jf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var a=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var f=0,p=-1,v=-1,c=0,i=0,l=e,o=null;r:for(;;){for(var d;l!==n||a!==0&&l.nodeType!==3||(p=f+a),l!==s||t!==0&&l.nodeType!==3||(v=f+t),l.nodeType===3&&(f+=l.nodeValue.length),(d=l.firstChild)!==null;)o=l,l=d;for(;;){if(l===e)break r;if(o===n&&++c===a&&(p=f),o===s&&++i===t&&(v=f),(d=l.nextSibling)!==null)break;l=o,o=l.parentNode}l=d}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},Es=!1,z=r;z!==null;)if(r=z,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,z=e;else for(;z!==null;){r=z;try{var h=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,w=h.memoizedState,y=r.stateNode,$=y.getSnapshotBeforeUpdate(r.elementType===r.type?g:hr(r.type,g),w);y.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(N){ge(r,r.return,N)}if(e=r.sibling,e!==null){e.return=r.return,z=e;break}z=r.return}return h=bv,bv=!1,h}function ti(e,r,n){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Pc(r,n,s)}a=a.next}while(a!==t)}}function io(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==r)}}function Ac(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function u4(e){var r=e.alternate;r!==null&&(e.alternate=null,u4(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ar],delete r[hi],delete r[mc],delete r[G8],delete r[q8])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c4(e){return e.tag===5||e.tag===3||e.tag===4}function Iv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=As));else if(t!==4&&(e=e.child,e!==null))for(Oc(e,r,n),e=e.sibling;e!==null;)Oc(e,r,n),e=e.sibling}function kc(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(kc(e,r,n),e=e.sibling;e!==null;)kc(e,r,n),e=e.sibling}var Ae=null,gr=!1;function an(e,r,n){for(n=n.child;n!==null;)f4(e,r,n),n=n.sibling}function f4(e,r,n){if(kr&&typeof kr.onCommitFiberUnmount=="function")try{kr.onCommitFiberUnmount(Ys,n)}catch{}switch(n.tag){case 5:Te||zt(n,r);case 6:var t=Ae,a=gr;Ae=null,an(e,r,n),Ae=t,gr=a,Ae!==null&&(gr?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(gr?(e=Ae,n=n.stateNode,e.nodeType===8?Uo(e.parentNode,n):e.nodeType===1&&Uo(e,n),fi(e)):Uo(Ae,n.stateNode));break;case 4:t=Ae,a=gr,Ae=n.stateNode.containerInfo,gr=!0,an(e,r,n),Ae=t,gr=a;break;case 0:case 11:case 14:case 15:if(!Te&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var s=a,f=s.destroy;s=s.tag,f!==void 0&&(s&2||s&4)&&Pc(n,r,f),a=a.next}while(a!==t)}an(e,r,n);break;case 1:if(!Te&&(zt(n,r),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(p){ge(n,r,p)}an(e,r,n);break;case 21:an(e,r,n);break;case 22:n.mode&1?(Te=(t=Te)||n.memoizedState!==null,an(e,r,n),Te=t):an(e,r,n);break;default:an(e,r,n)}}function Ev(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a9),r.forEach(function(t){var a=p9.bind(null,e,t);n.has(t)||(n.add(t),t.then(a,a))})}}function vr(e,r){var n=r.deletions;if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];try{var s=e,f=r,p=f;e:for(;p!==null;){switch(p.tag){case 5:Ae=p.stateNode,gr=!1;break e;case 3:Ae=p.stateNode.containerInfo,gr=!0;break e;case 4:Ae=p.stateNode.containerInfo,gr=!0;break e}p=p.return}if(Ae===null)throw Error(C(160));f4(s,f,a),Ae=null,gr=!1;var v=a.alternate;v!==null&&(v.return=null),a.return=null}catch(c){ge(a,r,c)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)v4(r,e),r=r.sibling}function v4(e,r){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vr(r,e),_r(e),t&4){try{ti(3,e,e.return),io(3,e)}catch(g){ge(e,e.return,g)}try{ti(5,e,e.return)}catch(g){ge(e,e.return,g)}}break;case 1:vr(r,e),_r(e),t&512&&n!==null&&zt(n,n.return);break;case 5:if(vr(r,e),_r(e),t&512&&n!==null&&zt(n,n.return),e.flags&32){var a=e.stateNode;try{si(a,"")}catch(g){ge(e,e.return,g)}}if(t&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,f=n!==null?n.memoizedProps:s,p=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&S3(a,s),rc(p,f);var c=rc(p,s);for(f=0;f<v.length;f+=2){var i=v[f],l=v[f+1];i==="style"?z3(a,l):i==="dangerouslySetInnerHTML"?R3(a,l):i==="children"?si(a,l):pf(a,i,l,c)}switch(p){case"input":Qu(a,s);break;case"textarea":F3(a,s);break;case"select":var o=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Gt(a,!!s.multiple,d,!1):o!==!!s.multiple&&(s.defaultValue!=null?Gt(a,!!s.multiple,s.defaultValue,!0):Gt(a,!!s.multiple,s.multiple?[]:"",!1))}a[hi]=s}catch(g){ge(e,e.return,g)}}break;case 6:if(vr(r,e),_r(e),t&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(g){ge(e,e.return,g)}}break;case 3:if(vr(r,e),_r(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(r.containerInfo)}catch(g){ge(e,e.return,g)}break;case 4:vr(r,e),_r(e);break;case 13:vr(r,e),_r(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Mf=$e())),t&4&&Ev(e);break;case 22:if(i=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||i,vr(r,e),Te=c):vr(r,e),_r(e),t&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!i&&e.mode&1)for(z=e,i=e.child;i!==null;){for(l=z=i;z!==null;){switch(o=z,d=o.child,o.tag){case 0:case 11:case 14:case 15:ti(4,o,o.return);break;case 1:zt(o,o.return);var h=o.stateNode;if(typeof h.componentWillUnmount=="function"){t=o,n=o.return;try{r=t,h.props=r.memoizedProps,h.state=r.memoizedState,h.componentWillUnmount()}catch(g){ge(t,n,g)}}break;case 5:zt(o,o.return);break;case 22:if(o.memoizedState!==null){Pv(l);continue}}d!==null?(d.return=o,z=d):Pv(l)}i=i.sibling}e:for(i=null,l=e;;){if(l.tag===5){if(i===null){i=l;try{a=l.stateNode,c?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=l.stateNode,v=l.memoizedProps.style,f=v!=null&&v.hasOwnProperty("display")?v.display:null,p.style.display=H3("display",f))}catch(g){ge(e,e.return,g)}}}else if(l.tag===6){if(i===null)try{l.stateNode.nodeValue=c?"":l.memoizedProps}catch(g){ge(e,e.return,g)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;i===l&&(i=null),l=l.return}i===l&&(i=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:vr(r,e),_r(e),t&4&&Ev(e);break;case 21:break;default:vr(r,e),_r(e)}}function _r(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(c4(n)){var t=n;break e}n=n.return}throw Error(C(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(si(a,""),t.flags&=-33);var s=Iv(e);kc(e,s,a);break;case 3:case 4:var f=t.stateNode.containerInfo,p=Iv(e);Oc(e,p,f);break;default:throw Error(C(161))}}catch(v){ge(e,e.return,v)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function l9(e,r,n){z=e,d4(e)}function d4(e,r,n){for(var t=(e.mode&1)!==0;z!==null;){var a=z,s=a.child;if(a.tag===22&&t){var f=a.memoizedState!==null||Zi;if(!f){var p=a.alternate,v=p!==null&&p.memoizedState!==null||Te;p=Zi;var c=Te;if(Zi=f,(Te=v)&&!c)for(z=a;z!==null;)f=z,v=f.child,f.tag===22&&f.memoizedState!==null?Av(a):v!==null?(v.return=f,z=v):Av(a);for(;s!==null;)z=s,d4(s),s=s.sibling;z=a,Zi=p,Te=c}jv(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,z=s):jv(e)}}function jv(e){for(;z!==null;){var r=z;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Te||io(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!Te)if(n===null)t.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:hr(r.type,n.memoizedProps);t.componentDidUpdate(a,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&fv(r,s,t);break;case 3:var f=r.updateQueue;if(f!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}fv(r,f,n)}break;case 5:var p=r.stateNode;if(n===null&&r.flags&4){n=p;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var c=r.alternate;if(c!==null){var i=c.memoizedState;if(i!==null){var l=i.dehydrated;l!==null&&fi(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Te||r.flags&512&&Ac(r)}catch(o){ge(r,r.return,o)}}if(r===e){z=null;break}if(n=r.sibling,n!==null){n.return=r.return,z=n;break}z=r.return}}function Pv(e){for(;z!==null;){var r=z;if(r===e){z=null;break}var n=r.sibling;if(n!==null){n.return=r.return,z=n;break}z=r.return}}function Av(e){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{io(4,r)}catch(v){ge(r,n,v)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var a=r.return;try{t.componentDidMount()}catch(v){ge(r,a,v)}}var s=r.return;try{Ac(r)}catch(v){ge(r,s,v)}break;case 5:var f=r.return;try{Ac(r)}catch(v){ge(r,f,v)}}}catch(v){ge(r,r.return,v)}if(r===e){z=null;break}var p=r.sibling;if(p!==null){p.return=r.return,z=p;break}z=r.return}}var s9=Math.ceil,Ds=en.ReactCurrentDispatcher,Wf=en.ReactCurrentOwner,or=en.ReactCurrentBatchConfig,Y=0,je=null,we=null,Oe=0,Qe=0,Dt=Mn(0),_e=0,xi=null,vt=0,lo=0,Vf=0,ai=null,Be=null,Mf=0,ea=1/0,Wr=null,Gs=!1,Lc=null,Dn=null,Ji=!1,Cn=null,qs=0,ii=0,Cc=null,gs=-1,ys=0;function ze(){return Y&6?$e():gs!==-1?gs:gs=$e()}function Gn(e){return e.mode&1?Y&2&&Oe!==0?Oe&-Oe:U8.transition!==null?(ys===0&&(ys=Y3()),ys):(e=re,e!==0||(e=window.event,e=e===void 0?16:a6(e.type)),e):1}function wr(e,r,n,t){if(50<ii)throw ii=0,Cc=null,Error(C(185));Ei(e,n,t),(!(Y&2)||e!==je)&&(e===je&&(!(Y&2)&&(lo|=n),_e===4&&kn(e,Oe)),Me(e,t),n===1&&Y===0&&!(r.mode&1)&&(ea=$e()+500,no&&Xn()))}function Me(e,r){var n=e.callbackNode;U7(e,r);var t=Is(e,e===je?Oe:0);if(t===0)n!==null&&H1(n),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(n!=null&&H1(n),r===1)e.tag===0?B8(Ov.bind(null,e)):_6(Ov.bind(null,e)),z8(function(){!(Y&6)&&Xn()}),n=null;else{switch(Z3(t)){case 1:n=$f;break;case 4:n=K3;break;case 16:n=bs;break;case 536870912:n=Q3;break;default:n=bs}n=N4(n,p4.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function p4(e,r){if(gs=-1,ys=0,Y&6)throw Error(C(327));var n=e.callbackNode;if(Vt()&&e.callbackNode!==n)return null;var t=Is(e,e===je?Oe:0);if(t===0)return null;if(t&30||t&e.expiredLanes||r)r=Bs(e,t);else{r=t;var a=Y;Y|=2;var s=h4();(je!==e||Oe!==r)&&(Wr=null,ea=$e()+500,st(e,r));do try{c9();break}catch(p){m4(e,p)}while(!0);Lf(),Ds.current=s,Y=a,we!==null?r=0:(je=null,Oe=0,r=_e)}if(r!==0){if(r===2&&(a=lc(e),a!==0&&(t=a,r=Sc(e,a))),r===1)throw n=xi,st(e,0),kn(e,t),Me(e,$e()),n;if(r===6)kn(e,t);else{if(a=e.current.alternate,!(t&30)&&!o9(a)&&(r=Bs(e,t),r===2&&(s=lc(e),s!==0&&(t=s,r=Sc(e,s))),r===1))throw n=xi,st(e,0),kn(e,t),Me(e,$e()),n;switch(e.finishedWork=a,e.finishedLanes=t,r){case 0:case 1:throw Error(C(345));case 2:nt(e,Be,Wr);break;case 3:if(kn(e,t),(t&130023424)===t&&(r=Mf+500-$e(),10<r)){if(Is(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=pc(nt.bind(null,e,Be,Wr),r);break}nt(e,Be,Wr);break;case 4:if(kn(e,t),(t&4194240)===t)break;for(r=e.eventTimes,a=-1;0<t;){var f=31-$r(t);s=1<<f,f=r[f],f>a&&(a=f),t&=~s}if(t=a,t=$e()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*s9(t/1960))-t,10<t){e.timeoutHandle=pc(nt.bind(null,e,Be,Wr),t);break}nt(e,Be,Wr);break;case 5:nt(e,Be,Wr);break;default:throw Error(C(329))}}}return Me(e,$e()),e.callbackNode===n?p4.bind(null,e):null}function Sc(e,r){var n=ai;return e.current.memoizedState.isDehydrated&&(st(e,r).flags|=256),e=Bs(e,r),e!==2&&(r=Be,Be=n,r!==null&&Fc(r)),e}function Fc(e){Be===null?Be=e:Be.push.apply(Be,e)}function o9(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var a=n[t],s=a.getSnapshot;a=a.value;try{if(!Nr(s(),a))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function kn(e,r){for(r&=~Vf,r&=~lo,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-$r(r),t=1<<n;e[n]=-1,r&=~t}}function Ov(e){if(Y&6)throw Error(C(327));Vt();var r=Is(e,0);if(!(r&1))return Me(e,$e()),null;var n=Bs(e,r);if(e.tag!==0&&n===2){var t=lc(e);t!==0&&(r=t,n=Sc(e,t))}if(n===1)throw n=xi,st(e,0),kn(e,r),Me(e,$e()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,nt(e,Be,Wr),Me(e,$e()),null}function Xf(e,r){var n=Y;Y|=1;try{return e(r)}finally{Y=n,Y===0&&(ea=$e()+500,no&&Xn())}}function dt(e){Cn!==null&&Cn.tag===0&&!(Y&6)&&Vt();var r=Y;Y|=1;var n=or.transition,t=re;try{if(or.transition=null,re=1,e)return e()}finally{re=t,or.transition=n,Y=r,!(Y&6)&&Xn()}}function Kf(){Qe=Dt.current,se(Dt)}function st(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,H8(n)),we!==null)for(n=we.return;n!==null;){var t=n;switch(Af(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Os();break;case 3:Zt(),se(We),se(Re),Hf();break;case 5:Rf(t);break;case 4:Zt();break;case 13:se(de);break;case 19:se(de);break;case 10:Cf(t.type._context);break;case 22:case 23:Kf()}n=n.return}if(je=e,we=e=qn(e.current,null),Oe=Qe=r,_e=0,xi=null,Vf=lo=vt=0,Be=ai=null,at!==null){for(r=0;r<at.length;r++)if(n=at[r],t=n.interleaved,t!==null){n.interleaved=null;var a=t.next,s=n.pending;if(s!==null){var f=s.next;s.next=a,t.next=f}n.pending=t}at=null}return e}function m4(e,r){do{var n=we;try{if(Lf(),ps.current=zs,Hs){for(var t=pe.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Hs=!1}if(ft=0,Ee=xe=pe=null,ni=!1,$i=0,Wf.current=null,n===null||n.return===null){_e=1,xi=r,we=null;break}e:{var s=e,f=n.return,p=n,v=r;if(r=Oe,p.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var c=v,i=p,l=i.tag;if(!(i.mode&1)&&(l===0||l===11||l===15)){var o=i.alternate;o?(i.updateQueue=o.updateQueue,i.memoizedState=o.memoizedState,i.lanes=o.lanes):(i.updateQueue=null,i.memoizedState=null)}var d=gv(f);if(d!==null){d.flags&=-257,yv(d,f,p,s,r),d.mode&1&&hv(s,c,r),r=d,v=c;var h=r.updateQueue;if(h===null){var g=new Set;g.add(v),r.updateQueue=g}else h.add(v);break e}else{if(!(r&1)){hv(s,c,r),Qf();break e}v=Error(C(426))}}else if(fe&&p.mode&1){var w=gv(f);if(w!==null){!(w.flags&65536)&&(w.flags|=256),yv(w,f,p,s,r),Of(Jt(v,p));break e}}s=v=Jt(v,p),_e!==4&&(_e=2),ai===null?ai=[s]:ai.push(s),s=f;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var y=Z6(s,v,r);cv(s,y);break e;case 1:p=v;var $=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof $.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dn===null||!Dn.has(m)))){s.flags|=65536,r&=-r,s.lanes|=r;var N=J6(s,p,r);cv(s,N);break e}}s=s.return}while(s!==null)}y4(n)}catch(_){r=_,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function h4(){var e=Ds.current;return Ds.current=zs,e===null?zs:e}function Qf(){(_e===0||_e===3||_e===2)&&(_e=4),je===null||!(vt&268435455)&&!(lo&268435455)||kn(je,Oe)}function Bs(e,r){var n=Y;Y|=2;var t=h4();(je!==e||Oe!==r)&&(Wr=null,st(e,r));do try{u9();break}catch(a){m4(e,a)}while(!0);if(Lf(),Y=n,Ds.current=t,we!==null)throw Error(C(261));return je=null,Oe=0,_e}function u9(){for(;we!==null;)g4(we)}function c9(){for(;we!==null&&!F7();)g4(we)}function g4(e){var r=w4(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,r===null?y4(e):we=r,Wf.current=null}function y4(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=t9(n,r),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,we=null;return}}else if(n=n9(n,r,Qe),n!==null){we=n;return}if(r=r.sibling,r!==null){we=r;return}we=r=e}while(r!==null);_e===0&&(_e=5)}function nt(e,r,n){var t=re,a=or.transition;try{or.transition=null,re=1,f9(e,r,n,t)}finally{or.transition=a,re=t}return null}function f9(e,r,n,t){do Vt();while(Cn!==null);if(Y&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(W7(e,s),e===je&&(we=je=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ji||(Ji=!0,N4(bs,function(){return Vt(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=or.transition,or.transition=null;var f=re;re=1;var p=Y;Y|=4,Wf.current=null,i9(e,n),v4(n,e),k8(vc),Es=!!fc,vc=fc=null,e.current=n,l9(n),T7(),Y=p,re=f,or.transition=s}else e.current=n;if(Ji&&(Ji=!1,Cn=e,qs=a),s=e.pendingLanes,s===0&&(Dn=null),z7(n.stateNode),Me(e,$e()),r!==null)for(t=e.onRecoverableError,n=0;n<r.length;n++)a=r[n],t(a.value,{componentStack:a.stack,digest:a.digest});if(Gs)throw Gs=!1,e=Lc,Lc=null,e;return qs&1&&e.tag!==0&&Vt(),s=e.pendingLanes,s&1?e===Cc?ii++:(ii=0,Cc=e):ii=0,Xn(),null}function Vt(){if(Cn!==null){var e=Z3(qs),r=or.transition,n=re;try{if(or.transition=null,re=16>e?16:e,Cn===null)var t=!1;else{if(e=Cn,Cn=null,qs=0,Y&6)throw Error(C(331));var a=Y;for(Y|=4,z=e.current;z!==null;){var s=z,f=s.child;if(z.flags&16){var p=s.deletions;if(p!==null){for(var v=0;v<p.length;v++){var c=p[v];for(z=c;z!==null;){var i=z;switch(i.tag){case 0:case 11:case 15:ti(8,i,s)}var l=i.child;if(l!==null)l.return=i,z=l;else for(;z!==null;){i=z;var o=i.sibling,d=i.return;if(u4(i),i===c){z=null;break}if(o!==null){o.return=d,z=o;break}z=d}}}var h=s.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var w=g.sibling;g.sibling=null,g=w}while(g!==null)}}z=s}}if(s.subtreeFlags&2064&&f!==null)f.return=s,z=f;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ti(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}var $=e.current;for(z=$;z!==null;){f=z;var m=f.child;if(f.subtreeFlags&2064&&m!==null)m.return=f,z=m;else e:for(f=$;z!==null;){if(p=z,p.flags&2048)try{switch(p.tag){case 0:case 11:case 15:io(9,p)}}catch(_){ge(p,p.return,_)}if(p===f){z=null;break e}var N=p.sibling;if(N!==null){N.return=p.return,z=N;break e}z=p.return}}if(Y=a,Xn(),kr&&typeof kr.onPostCommitFiberRoot=="function")try{kr.onPostCommitFiberRoot(Ys,e)}catch{}t=!0}return t}finally{re=n,or.transition=r}}return!1}function kv(e,r,n){r=Jt(n,r),r=Z6(e,r,1),e=zn(e,r,1),r=ze(),e!==null&&(Ei(e,1,r),Me(e,r))}function ge(e,r,n){if(e.tag===3)kv(e,e,n);else for(;r!==null;){if(r.tag===3){kv(r,e,n);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Dn===null||!Dn.has(t))){e=Jt(n,e),e=J6(r,e,1),r=zn(r,e,1),e=ze(),r!==null&&(Ei(r,1,e),Me(r,e));break}}r=r.return}}function v9(e,r,n){var t=e.pingCache;t!==null&&t.delete(r),r=ze(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Oe&n)===n&&(_e===4||_e===3&&(Oe&130023424)===Oe&&500>$e()-Mf?st(e,0):Vf|=n),Me(e,r)}function $4(e,r){r===0&&(e.mode&1?(r=Bi,Bi<<=1,!(Bi&130023424)&&(Bi=4194304)):r=1);var n=ze();e=Zr(e,r),e!==null&&(Ei(e,r,n),Me(e,n))}function d9(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),$4(e,n)}function p9(e,r){var n=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(C(314))}t!==null&&t.delete(r),$4(e,n)}var w4;w4=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||We.current)Ue=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return Ue=!1,r9(e,r,n);Ue=!!(e.flags&131072)}else Ue=!1,fe&&r.flags&1048576&&b6(r,Cs,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;hs(e,r),e=r.pendingProps;var a=Kt(r,Re.current);Wt(r,n),a=Df(null,r,t,e,a,n);var s=Gf();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ve(t)?(s=!0,ks(r)):s=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ff(r),a.updater=ao,r.stateNode=a,a._reactInternals=r,Nc(r,t,e,n),r=bc(null,r,t,!0,s,n)):(r.tag=0,fe&&s&&Pf(r),He(null,r,a,n),r=r.child),r;case 16:t=r.elementType;e:{switch(hs(e,r),e=r.pendingProps,a=t._init,t=a(t._payload),r.type=t,a=r.tag=h9(t),e=hr(t,e),a){case 0:r=_c(null,r,t,e,n);break e;case 1:r=Nv(null,r,t,e,n);break e;case 11:r=$v(null,r,t,e,n);break e;case 14:r=wv(null,r,t,hr(t.type,e),n);break e}throw Error(C(306,t,""))}return r;case 0:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:hr(t,a),_c(e,r,t,a,n);case 1:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:hr(t,a),Nv(e,r,t,a,n);case 3:e:{if(t4(r),e===null)throw Error(C(387));t=r.pendingProps,s=r.memoizedState,a=s.element,O6(e,r),Ts(r,t,null,n);var f=r.memoizedState;if(t=f.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){a=Jt(Error(C(423)),r),r=xv(e,r,t,n,a);break e}else if(t!==a){a=Jt(Error(C(424)),r),r=xv(e,r,t,n,a);break e}else for(Ye=Hn(r.stateNode.containerInfo.firstChild),Ze=r,fe=!0,yr=null,n=P6(r,null,t,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qt(),t===a){r=Jr(e,r,n);break e}He(e,r,t,n)}r=r.child}return r;case 5:return k6(r),e===null&&yc(r),t=r.type,a=r.pendingProps,s=e!==null?e.memoizedProps:null,f=a.children,dc(t,a)?f=null:s!==null&&dc(t,s)&&(r.flags|=32),n4(e,r),He(e,r,f,n),r.child;case 6:return e===null&&yc(r),null;case 13:return a4(e,r,n);case 4:return Tf(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=Yt(r,null,t,n):He(e,r,t,n),r.child;case 11:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:hr(t,a),$v(e,r,t,a,n);case 7:return He(e,r,r.pendingProps,n),r.child;case 8:return He(e,r,r.pendingProps.children,n),r.child;case 12:return He(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(t=r.type._context,a=r.pendingProps,s=r.memoizedProps,f=a.value,ie(Ss,t._currentValue),t._currentValue=f,s!==null)if(Nr(s.value,f)){if(s.children===a.children&&!We.current){r=Jr(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var p=s.dependencies;if(p!==null){f=s.child;for(var v=p.firstContext;v!==null;){if(v.context===t){if(s.tag===1){v=Kr(-1,n&-n),v.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var i=c.pending;i===null?v.next=v:(v.next=i.next,i.next=v),c.pending=v}}s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),$c(s.return,n,r),p.lanes|=n;break}v=v.next}}else if(s.tag===10)f=s.type===r.type?null:s.child;else if(s.tag===18){if(f=s.return,f===null)throw Error(C(341));f.lanes|=n,p=f.alternate,p!==null&&(p.lanes|=n),$c(f,n,r),f=s.sibling}else f=s.child;if(f!==null)f.return=s;else for(f=s;f!==null;){if(f===r){f=null;break}if(s=f.sibling,s!==null){s.return=f.return,f=s;break}f=f.return}s=f}He(e,r,a.children,n),r=r.child}return r;case 9:return a=r.type,t=r.pendingProps.children,Wt(r,n),a=ur(a),t=t(a),r.flags|=1,He(e,r,t,n),r.child;case 14:return t=r.type,a=hr(t,r.pendingProps),a=hr(t.type,a),wv(e,r,t,a,n);case 15:return e4(e,r,r.type,r.pendingProps,n);case 17:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:hr(t,a),hs(e,r),r.tag=1,Ve(t)?(e=!0,ks(r)):e=!1,Wt(r,n),Y6(r,t,a),Nc(r,t,a,n),bc(null,r,t,!0,e,n);case 19:return i4(e,r,n);case 22:return r4(e,r,n)}throw Error(C(156,r.tag))};function N4(e,r){return X3(e,r)}function m9(e,r,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sr(e,r,n,t){return new m9(e,r,n,t)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h9(e){if(typeof e=="function")return Yf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hf)return 11;if(e===gf)return 14}return 2}function qn(e,r){var n=e.alternate;return n===null?(n=sr(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $s(e,r,n,t,a,s){var f=2;if(t=e,typeof e=="function")Yf(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case Ot:return ot(n.children,a,s,r);case mf:f=8,a|=8;break;case Wu:return e=sr(12,n,r,a|2),e.elementType=Wu,e.lanes=s,e;case Vu:return e=sr(13,n,r,a),e.elementType=Vu,e.lanes=s,e;case Mu:return e=sr(19,n,r,a),e.elementType=Mu,e.lanes=s,e;case k3:return so(n,a,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A3:f=10;break e;case O3:f=9;break e;case hf:f=11;break e;case gf:f=14;break e;case Pn:f=16,t=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return r=sr(f,n,r,a),r.elementType=e,r.type=t,r.lanes=s,r}function ot(e,r,n,t){return e=sr(7,e,t,r),e.lanes=n,e}function so(e,r,n,t){return e=sr(22,e,t,r),e.elementType=k3,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,r,n){return e=sr(6,e,null,r),e.lanes=n,e}function Jo(e,r,n){return r=sr(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function g9(e,r,n,t,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zf(e,r,n,t,a,s,f,p,v){return e=new g9(e,r,n,p,v),r===1?(r=1,s===!0&&(r|=8)):r=0,s=sr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ff(s),e}function y9(e,r,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:t==null?null:""+t,children:e,containerInfo:r,implementation:n}}function x4(e){if(!e)return Wn;e=e._reactInternals;e:{if(mt(e)!==e||e.tag!==1)throw Error(C(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ve(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ve(n))return x6(e,n,r)}return r}function _4(e,r,n,t,a,s,f,p,v){return e=Zf(n,t,!0,e,a,s,f,p,v),e.context=x4(null),n=e.current,t=ze(),a=Gn(n),s=Kr(t,a),s.callback=r??null,zn(n,s,a),e.current.lanes=a,Ei(e,a,t),Me(e,t),e}function oo(e,r,n,t){var a=r.current,s=ze(),f=Gn(a);return n=x4(n),r.context===null?r.context=n:r.pendingContext=n,r=Kr(s,f),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=zn(a,r,f),e!==null&&(wr(e,a,f,s),ds(e,a,f)),f}function Us(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lv(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Jf(e,r){Lv(e,r),(e=e.alternate)&&Lv(e,r)}function $9(){return null}var b4=typeof reportError=="function"?reportError:function(e){console.error(e)};function e1(e){this._internalRoot=e}uo.prototype.render=e1.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(C(409));oo(e,r,null,null)};uo.prototype.unmount=e1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;dt(function(){oo(null,e,null,null)}),r[Yr]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var r=r6();e={blockedOn:null,target:e,priority:r};for(var n=0;n<On.length&&r!==0&&r<On[n].priority;n++);On.splice(n,0,e),n===0&&t6(e)}};function r1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cv(){}function w9(e,r,n,t,a){if(a){if(typeof t=="function"){var s=t;t=function(){var c=Us(f);s.call(c)}}var f=_4(r,t,e,0,null,!1,!1,"",Cv);return e._reactRootContainer=f,e[Yr]=f.current,pi(e.nodeType===8?e.parentNode:e),dt(),f}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var p=t;t=function(){var c=Us(v);p.call(c)}}var v=Zf(e,0,!1,null,null,!1,!1,"",Cv);return e._reactRootContainer=v,e[Yr]=v.current,pi(e.nodeType===8?e.parentNode:e),dt(function(){oo(r,v,n,t)}),v}function fo(e,r,n,t,a){var s=n._reactRootContainer;if(s){var f=s;if(typeof a=="function"){var p=a;a=function(){var v=Us(f);p.call(v)}}oo(r,f,e,a)}else f=w9(n,r,e,a,t);return Us(f)}J3=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Ka(r.pendingLanes);n!==0&&(wf(r,n|1),Me(r,$e()),!(Y&6)&&(ea=$e()+500,Xn()))}break;case 13:dt(function(){var t=Zr(e,1);if(t!==null){var a=ze();wr(t,e,1,a)}}),Jf(e,1)}};Nf=function(e){if(e.tag===13){var r=Zr(e,134217728);if(r!==null){var n=ze();wr(r,e,134217728,n)}Jf(e,134217728)}};e6=function(e){if(e.tag===13){var r=Gn(e),n=Zr(e,r);if(n!==null){var t=ze();wr(n,e,r,t)}Jf(e,r)}};r6=function(){return re};n6=function(e,r){var n=re;try{return re=e,r()}finally{re=n}};tc=function(e,r,n){switch(r){case"input":if(Qu(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var t=n[r];if(t!==e&&t.form===e.form){var a=ro(t);if(!a)throw Error(C(90));C3(t),Qu(t,a)}}}break;case"textarea":F3(e,n);break;case"select":r=n.value,r!=null&&Gt(e,!!n.multiple,r,!1)}};q3=Xf;B3=dt;var N9={usingClientEntryPoint:!1,Events:[Pi,St,ro,D3,G3,Xf]},xa={findFiberByHostInstance:tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x9={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=V3(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||$9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ys=el.inject(x9),kr=el}catch{}}er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N9;er.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r1(r))throw Error(C(200));return y9(e,r,null,n)};er.createRoot=function(e,r){if(!r1(e))throw Error(C(299));var n=!1,t="",a=b4;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Zf(e,1,!1,null,null,n,!1,t,a),e[Yr]=r.current,pi(e.nodeType===8?e.parentNode:e),new e1(r)};er.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=V3(r),e=e===null?null:e.stateNode,e};er.flushSync=function(e){return dt(e)};er.hydrate=function(e,r,n){if(!co(r))throw Error(C(200));return fo(null,e,r,!0,n)};er.hydrateRoot=function(e,r,n){if(!r1(e))throw Error(C(405));var t=n!=null&&n.hydratedSources||null,a=!1,s="",f=b4;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),r=_4(r,null,e,1,n??null,a,!1,s,f),e[Yr]=r.current,pi(e),t)for(e=0;e<t.length;e++)n=t[e],a=n._getVersion,a=a(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,a]:r.mutableSourceEagerHydrationData.push(n,a);return new uo(r)};er.render=function(e,r,n){if(!co(r))throw Error(C(200));return fo(null,e,r,!1,n)};er.unmountComponentAtNode=function(e){if(!co(e))throw Error(C(40));return e._reactRootContainer?(dt(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Yr]=null})}),!0):!1};er.unstable_batchedUpdates=Xf;er.unstable_renderSubtreeIntoContainer=function(e,r,n,t){if(!co(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return fo(e,r,n,!1,t)};er.version="18.3.1-next-f1338f8080-20240426";function I4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I4)}catch(e){console.error(e)}}I4(),I3.exports=er;var _9=I3.exports,E4,Sv=_9;E4=Sv.createRoot,Sv.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},_i.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Fv="popstate";function b9(e){e===void 0&&(e={});function r(a,s){let{pathname:f="/",search:p="",hash:v=""}=ht(a.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Tc("",{pathname:f,search:p,hash:v},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){let f=a.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let v=a.location.href,c=v.indexOf("#");p=c===-1?v:v.slice(0,c)}return p+"#"+(typeof s=="string"?s:Ws(s))}function t(a,s){n1(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return E9(r,n,t,e)}function ye(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function n1(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function I9(){return Math.random().toString(36).substr(2,8)}function Tv(e,r){return{usr:e.state,key:e.key,idx:r}}function Tc(e,r,n,t){return n===void 0&&(n=null),_i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?ht(r):r,{state:n,key:r&&r.key||t||I9()})}function Ws(e){let{pathname:r="/",search:n="",hash:t=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ht(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let t=e.indexOf("?");t>=0&&(r.search=e.substr(t),e=e.substr(0,t)),e&&(r.pathname=e)}return r}function E9(e,r,n,t){t===void 0&&(t={});let{window:a=document.defaultView,v5Compat:s=!1}=t,f=a.history,p=Sn.Pop,v=null,c=i();c==null&&(c=0,f.replaceState(_i({},f.state,{idx:c}),""));function i(){return(f.state||{idx:null}).idx}function l(){p=Sn.Pop;let w=i(),y=w==null?null:w-c;c=w,v&&v({action:p,location:g.location,delta:y})}function o(w,y){p=Sn.Push;let $=Tc(g.location,w,y);n&&n($,w),c=i()+1;let m=Tv($,c),N=g.createHref($);try{f.pushState(m,"",N)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(N)}s&&v&&v({action:p,location:g.location,delta:1})}function d(w,y){p=Sn.Replace;let $=Tc(g.location,w,y);n&&n($,w),c=i();let m=Tv($,c),N=g.createHref($);f.replaceState(m,"",N),s&&v&&v({action:p,location:g.location,delta:0})}function h(w){let y=a.location.origin!=="null"?a.location.origin:a.location.href,$=typeof w=="string"?w:Ws(w);return $=$.replace(/ $/,"%20"),ye(y,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,y)}let g={get action(){return p},get location(){return e(a,f)},listen(w){if(v)throw new Error("A history only accepts one active listener");return a.addEventListener(Fv,l),v=w,()=>{a.removeEventListener(Fv,l),v=null}},createHref(w){return r(a,w)},createURL:h,encodeLocation(w){let y=h(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:o,replace:d,go(w){return f.go(w)}};return g}var Rv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rv||(Rv={}));function j9(e,r,n){return n===void 0&&(n="/"),P9(e,r,n,!1)}function P9(e,r,n,t){let a=typeof r=="string"?ht(r):r,s=ra(a.pathname||"/",n);if(s==null)return null;let f=j4(e);A9(f);let p=null;for(let v=0;p==null&&v<f.length;++v){let c=D9(s);p=H9(f[v],c,t)}return p}function j4(e,r,n,t){r===void 0&&(r=[]),n===void 0&&(n=[]),t===void 0&&(t="");let a=(s,f,p)=>{let v={relativePath:p===void 0?s.path||"":p,caseSensitive:s.caseSensitive===!0,childrenIndex:f,route:s};v.relativePath.startsWith("/")&&(ye(v.relativePath.startsWith(t),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(t.length));let c=Bn([t,v.relativePath]),i=n.concat(v);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),j4(s.children,r,i,c)),!(s.path==null&&!s.index)&&r.push({path:c,score:T9(c,s.index),routesMeta:i})};return e.forEach((s,f)=>{var p;if(s.path===""||!((p=s.path)!=null&&p.includes("?")))a(s,f);else for(let v of P4(s.path))a(s,f,v)}),r}function P4(e){let r=e.split("/");if(r.length===0)return[];let[n,...t]=r,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(t.length===0)return a?[s,""]:[s];let f=P4(t.join("/")),p=[];return p.push(...f.map(v=>v===""?s:[s,v].join("/"))),a&&p.push(...f),p.map(v=>e.startsWith("/")&&v===""?"/":v)}function A9(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:R9(r.routesMeta.map(t=>t.childrenIndex),n.routesMeta.map(t=>t.childrenIndex)))}const O9=/^:[\w-]+$/,k9=3,L9=2,C9=1,S9=10,F9=-2,Hv=e=>e==="*";function T9(e,r){let n=e.split("/"),t=n.length;return n.some(Hv)&&(t+=F9),r&&(t+=L9),n.filter(a=>!Hv(a)).reduce((a,s)=>a+(O9.test(s)?k9:s===""?C9:S9),t)}function R9(e,r){return e.length===r.length&&e.slice(0,-1).every((t,a)=>t===r[a])?e[e.length-1]-r[r.length-1]:0}function H9(e,r,n){let{routesMeta:t}=e,a={},s="/",f=[];for(let p=0;p<t.length;++p){let v=t[p],c=p===t.length-1,i=s==="/"?r:r.slice(s.length)||"/",l=Vs({path:v.relativePath,caseSensitive:v.caseSensitive,end:c},i),o=v.route;if(!l&&c&&n&&!t[t.length-1].route.index&&(l=Vs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},i)),!l)return null;Object.assign(a,l.params),f.push({params:a,pathname:Bn([s,l.pathname]),pathnameBase:U9(Bn([s,l.pathnameBase])),route:o}),l.pathnameBase!=="/"&&(s=Bn([s,l.pathnameBase]))}return f}function Vs(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,t]=z9(e.path,e.caseSensitive,e.end),a=r.match(n);if(!a)return null;let s=a[0],f=s.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:t.reduce((c,i,l)=>{let{paramName:o,isOptional:d}=i;if(o==="*"){let g=p[l]||"";f=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const h=p[l];return d&&!h?c[o]=void 0:c[o]=(h||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:f,pattern:e}}function z9(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),n1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,v)=>(t.push({paramName:p,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),t]}function D9(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return n1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function ra(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,t=e.charAt(n);return t&&t!=="/"?null:e.slice(n)||"/"}function G9(e,r){r===void 0&&(r="/");let{pathname:n,search:t="",hash:a=""}=typeof e=="string"?ht(e):e;return{pathname:n?n.startsWith("/")?n:q9(n,r):r,search:W9(t),hash:V9(a)}}function q9(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function e0(e,r,n,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function B9(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function A4(e,r){let n=B9(e);return r?n.map((t,a)=>a===n.length-1?t.pathname:t.pathnameBase):n.map(t=>t.pathnameBase)}function O4(e,r,n,t){t===void 0&&(t=!1);let a;typeof e=="string"?a=ht(e):(a=_i({},e),ye(!a.pathname||!a.pathname.includes("?"),e0("?","pathname","search",a)),ye(!a.pathname||!a.pathname.includes("#"),e0("#","pathname","hash",a)),ye(!a.search||!a.search.includes("#"),e0("#","search","hash",a)));let s=e===""||a.pathname==="",f=s?"/":a.pathname,p;if(f==null)p=n;else{let l=r.length-1;if(!t&&f.startsWith("..")){let o=f.split("/");for(;o[0]==="..";)o.shift(),l-=1;a.pathname=o.join("/")}p=l>=0?r[l]:"/"}let v=G9(a,p),c=f&&f!=="/"&&f.endsWith("/"),i=(s||f===".")&&n.endsWith("/");return!v.pathname.endsWith("/")&&(c||i)&&(v.pathname+="/"),v}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),U9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function M9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const k4=["post","put","patch","delete"];new Set(k4);const X9=["get",...k4];new Set(X9);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},bi.apply(this,arguments)}const vo=A.createContext(null),L4=A.createContext(null),Kn=A.createContext(null),po=A.createContext(null),gt=A.createContext({outlet:null,matches:[],isDataRoute:!1}),C4=A.createContext(null);function K9(e,r){let{relative:n}=r===void 0?{}:r;Oi()||ye(!1);let{basename:t,navigator:a}=A.useContext(Kn),{hash:s,pathname:f,search:p}=mo(e,{relative:n}),v=f;return t!=="/"&&(v=f==="/"?t:Bn([t,f])),a.createHref({pathname:v,search:p,hash:s})}function Oi(){return A.useContext(po)!=null}function ki(){return Oi()||ye(!1),A.useContext(po).location}function S4(e){A.useContext(Kn).static||A.useLayoutEffect(e)}function Q9(){let{isDataRoute:e}=A.useContext(gt);return e?uy():Y9()}function Y9(){Oi()||ye(!1);let e=A.useContext(vo),{basename:r,future:n,navigator:t}=A.useContext(Kn),{matches:a}=A.useContext(gt),{pathname:s}=ki(),f=JSON.stringify(A4(a,n.v7_relativeSplatPath)),p=A.useRef(!1);return S4(()=>{p.current=!0}),A.useCallback(function(c,i){if(i===void 0&&(i={}),!p.current)return;if(typeof c=="number"){t.go(c);return}let l=O4(c,JSON.parse(f),s,i.relative==="path");e==null&&r!=="/"&&(l.pathname=l.pathname==="/"?r:Bn([r,l.pathname])),(i.replace?t.replace:t.push)(l,i.state,i)},[r,t,f,s,e])}function mo(e,r){let{relative:n}=r===void 0?{}:r,{future:t}=A.useContext(Kn),{matches:a}=A.useContext(gt),{pathname:s}=ki(),f=JSON.stringify(A4(a,t.v7_relativeSplatPath));return A.useMemo(()=>O4(e,JSON.parse(f),s,n==="path"),[e,f,s,n])}function Z9(e,r){return J9(e,r)}function J9(e,r,n,t){Oi()||ye(!1);let{navigator:a}=A.useContext(Kn),{matches:s}=A.useContext(gt),f=s[s.length-1],p=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let c=ki(),i;if(r){var l;let w=typeof r=="string"?ht(r):r;v==="/"||(l=w.pathname)!=null&&l.startsWith(v)||ye(!1),i=w}else i=c;let o=i.pathname||"/",d=o;if(v!=="/"){let w=v.replace(/^\//,"").split("/");d="/"+o.replace(/^\//,"").split("/").slice(w.length).join("/")}let h=j9(e,{pathname:d}),g=ay(h&&h.map(w=>Object.assign({},w,{params:Object.assign({},p,w.params),pathname:Bn([v,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?v:Bn([v,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,t);return r&&g?A.createElement(po.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:Sn.Pop}},g):g}function ey(){let e=oy(),r=M9(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},r),n?A.createElement("pre",{style:a},n):null,null)}const ry=A.createElement(ey,null);class ny extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?A.createElement(gt.Provider,{value:this.props.routeContext},A.createElement(C4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ty(e){let{routeContext:r,match:n,children:t}=e,a=A.useContext(vo);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(gt.Provider,{value:r},t)}function ay(e,r,n,t){var a;if(r===void 0&&(r=[]),n===void 0&&(n=null),t===void 0&&(t=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=t)!=null&&s.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let f=e,p=(a=n)==null?void 0:a.errors;if(p!=null){let i=f.findIndex(l=>l.route.id&&(p==null?void 0:p[l.route.id])!==void 0);i>=0||ye(!1),f=f.slice(0,Math.min(f.length,i+1))}let v=!1,c=-1;if(n&&t&&t.v7_partialHydration)for(let i=0;i<f.length;i++){let l=f[i];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=i),l.route.id){let{loaderData:o,errors:d}=n,h=l.route.loader&&o[l.route.id]===void 0&&(!d||d[l.route.id]===void 0);if(l.route.lazy||h){v=!0,c>=0?f=f.slice(0,c+1):f=[f[0]];break}}}return f.reduceRight((i,l,o)=>{let d,h=!1,g=null,w=null;n&&(d=p&&l.route.id?p[l.route.id]:void 0,g=l.route.errorElement||ry,v&&(c<0&&o===0?(h=!0,w=null):c===o&&(h=!0,w=l.route.hydrateFallbackElement||null)));let y=r.concat(f.slice(0,o+1)),$=()=>{let m;return d?m=g:h?m=w:l.route.Component?m=A.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=i,A.createElement(ty,{match:l,routeContext:{outlet:i,matches:y,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||o===0)?A.createElement(ny,{location:n.location,revalidation:n.revalidation,component:g,error:d,children:$(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):$()},null)}var F4=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(F4||{}),Ms=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ms||{});function iy(e){let r=A.useContext(vo);return r||ye(!1),r}function ly(e){let r=A.useContext(L4);return r||ye(!1),r}function sy(e){let r=A.useContext(gt);return r||ye(!1),r}function T4(e){let r=sy(),n=r.matches[r.matches.length-1];return n.route.id||ye(!1),n.route.id}function oy(){var e;let r=A.useContext(C4),n=ly(Ms.UseRouteError),t=T4(Ms.UseRouteError);return r!==void 0?r:(e=n.errors)==null?void 0:e[t]}function uy(){let{router:e}=iy(F4.UseNavigateStable),r=T4(Ms.UseNavigateStable),n=A.useRef(!1);return S4(()=>{n.current=!0}),A.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,bi({fromRouteId:r},s)))},[e,r])}function mr(e){ye(!1)}function cy(e){let{basename:r="/",children:n=null,location:t,navigationType:a=Sn.Pop,navigator:s,static:f=!1,future:p}=e;Oi()&&ye(!1);let v=r.replace(/^\/*/,"/"),c=A.useMemo(()=>({basename:v,navigator:s,static:f,future:bi({v7_relativeSplatPath:!1},p)}),[v,p,s,f]);typeof t=="string"&&(t=ht(t));let{pathname:i="/",search:l="",hash:o="",state:d=null,key:h="default"}=t,g=A.useMemo(()=>{let w=ra(i,v);return w==null?null:{location:{pathname:w,search:l,hash:o,state:d,key:h},navigationType:a}},[v,i,l,o,d,h,a]);return g==null?null:A.createElement(Kn.Provider,{value:c},A.createElement(po.Provider,{children:n,value:g}))}function fy(e){let{children:r,location:n}=e;return Z9(Rc(r),n)}new Promise(()=>{});function Rc(e,r){r===void 0&&(r=[]);let n=[];return A.Children.forEach(e,(t,a)=>{if(!A.isValidElement(t))return;let s=[...r,a];if(t.type===A.Fragment){n.push.apply(n,Rc(t.props.children,s));return}t.type!==mr&&ye(!1),!t.props.index||!t.props.children||ye(!1);let f={id:t.props.id||s.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(f.children=Rc(t.props.children,s)),n.push(f)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Xs.apply(this,arguments)}function R4(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,s;for(s=0;s<t.length;s++)a=t[s],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dy(e,r){return e.button===0&&(!r||r==="_self")&&!vy(e)}const py=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],my=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],hy="6";try{window.__reactRouterVersion=hy}catch{}const gy=A.createContext({isTransitioning:!1}),yy="startTransition",zv=v7[yy];function $y(e){let{basename:r,children:n,future:t,window:a}=e,s=A.useRef();s.current==null&&(s.current=b9({window:a,v5Compat:!0}));let f=s.current,[p,v]=A.useState({action:f.action,location:f.location}),{v7_startTransition:c}=t||{},i=A.useCallback(l=>{c&&zv?zv(()=>v(l)):v(l)},[v,c]);return A.useLayoutEffect(()=>f.listen(i),[f,i]),A.createElement(cy,{basename:r,children:n,location:p.location,navigationType:p.action,navigator:f,future:t})}const wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H4=A.forwardRef(function(r,n){let{onClick:t,relative:a,reloadDocument:s,replace:f,state:p,target:v,to:c,preventScrollReset:i,unstable_viewTransition:l}=r,o=R4(r,py),{basename:d}=A.useContext(Kn),h,g=!1;if(typeof c=="string"&&Ny.test(c)&&(h=c,wy))try{let m=new URL(window.location.href),N=c.startsWith("//")?new URL(m.protocol+c):new URL(c),_=ra(N.pathname,d);N.origin===m.origin&&_!=null?c=_+N.search+N.hash:g=!0}catch{}let w=K9(c,{relative:a}),y=_y(c,{replace:f,state:p,target:v,preventScrollReset:i,relative:a,unstable_viewTransition:l});function $(m){t&&t(m),m.defaultPrevented||y(m)}return A.createElement("a",Xs({},o,{href:h||w,onClick:g||s?t:$,ref:n,target:v}))}),r0=A.forwardRef(function(r,n){let{"aria-current":t="page",caseSensitive:a=!1,className:s="",end:f=!1,style:p,to:v,unstable_viewTransition:c,children:i}=r,l=R4(r,my),o=mo(v,{relative:l.relative}),d=ki(),h=A.useContext(L4),{navigator:g,basename:w}=A.useContext(Kn),y=h!=null&&by(o)&&c===!0,$=g.encodeLocation?g.encodeLocation(o).pathname:o.pathname,m=d.pathname,N=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(m=m.toLowerCase(),N=N?N.toLowerCase():null,$=$.toLowerCase()),N&&w&&(N=ra(N,w)||N);const _=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let x=m===$||!f&&m.startsWith($)&&m.charAt(_)==="/",b=N!=null&&(N===$||!f&&N.startsWith($)&&N.charAt($.length)==="/"),I={isActive:x,isPending:b,isTransitioning:y},O=x?t:void 0,k;typeof s=="function"?k=s(I):k=[s,x?"active":null,b?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof p=="function"?p(I):p;return A.createElement(H4,Xs({},l,{"aria-current":O,className:k,ref:n,style:R,to:v,unstable_viewTransition:c}),typeof i=="function"?i(I):i)});var Hc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hc||(Hc={}));var Dv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dv||(Dv={}));function xy(e){let r=A.useContext(vo);return r||ye(!1),r}function _y(e,r){let{target:n,replace:t,state:a,preventScrollReset:s,relative:f,unstable_viewTransition:p}=r===void 0?{}:r,v=Q9(),c=ki(),i=mo(e,{relative:f});return A.useCallback(l=>{if(dy(l,n)){l.preventDefault();let o=t!==void 0?t:Ws(c)===Ws(i);v(e,{replace:o,state:a,preventScrollReset:s,relative:f,unstable_viewTransition:p})}},[c,v,i,t,a,n,e,s,f,p])}function by(e,r){r===void 0&&(r={});let n=A.useContext(gy);n==null&&ye(!1);let{basename:t}=xy(Hc.useViewTransitionState),a=mo(e,{relative:r.relative});if(!n.isTransitioning)return!1;let s=ra(n.currentLocation.pathname,t)||n.currentLocation.pathname,f=ra(n.nextLocation.pathname,t)||n.nextLocation.pathname;return Vs(a.pathname,f)!=null||Vs(a.pathname,s)!=null}var z4={exports:{}};(function(e,r){(function(n,t){e.exports=t()})(Kg,function(){var n=function(t,a){var s=Array.prototype.concat,f=Array.prototype.slice,p=Object.prototype.toString;function v($,m){var N=$>m?$:m;return t.pow(10,17-~~(t.log(N>0?N:-N)*t.LOG10E))}var c=Array.isArray||function(m){return p.call(m)==="[object Array]"};function i($){return p.call($)==="[object Function]"}function l($){return typeof $=="number"?$-$===0:!1}function o($){return s.apply([],$)}function d(){return new d._init(arguments)}d.fn=d.prototype,d._init=function(m){if(c(m[0]))if(c(m[0][0])){i(m[1])&&(m[0]=d.map(m[0],m[1]));for(var N=0;N<m[0].length;N++)this[N]=m[0][N];this.length=m[0].length}else this[0]=i(m[1])?d.map(m[0],m[1]):m[0],this.length=1;else if(l(m[0]))this[0]=d.seq.apply(null,m),this.length=1;else{if(m[0]instanceof d)return d(m[0].toArray());this[0]=[],this.length=1}return this},d._init.prototype=d.prototype,d._init.constructor=d,d.utils={calcRdx:v,isArray:c,isFunction:i,isNumber:l,toVector:o},d._random_fn=t.random,d.setRandom=function(m){if(typeof m!="function")throw new TypeError("fn is not a function");d._random_fn=m},d.extend=function(m){var N,_;if(arguments.length===1){for(_ in m)d[_]=m[_];return this}for(N=1;N<arguments.length;N++)for(_ in arguments[N])m[_]=arguments[N][_];return m},d.rows=function(m){return m.length||1},d.cols=function(m){return m[0].length||1},d.dimensions=function(m){return{rows:d.rows(m),cols:d.cols(m)}},d.row=function(m,N){return c(N)?N.map(function(_){return d.row(m,_)}):m[N]},d.rowa=function(m,N){return d.row(m,N)},d.col=function(m,N){if(c(N)){var _=d.arange(m.length).map(function(){return new Array(N.length)});return N.forEach(function(I,O){d.arange(m.length).forEach(function(k){_[k][O]=m[k][I]})}),_}for(var x=new Array(m.length),b=0;b<m.length;b++)x[b]=[m[b][N]];return x},d.cola=function(m,N){return d.col(m,N).map(function(_){return _[0]})},d.diag=function(m){for(var N=d.rows(m),_=new Array(N),x=0;x<N;x++)_[x]=[m[x][x]];return _},d.antidiag=function(m){for(var N=d.rows(m)-1,_=new Array(N),x=0;N>=0;N--,x++)_[x]=[m[x][N]];return _},d.transpose=function(m){var N=[],_,x,b,I,O;for(c(m[0])||(m=[m]),x=m.length,b=m[0].length,O=0;O<b;O++){for(_=new Array(x),I=0;I<x;I++)_[I]=m[I][O];N.push(_)}return N.length===1?N[0]:N},d.map=function(m,N,_){var x,b,I,O,k;for(c(m[0])||(m=[m]),b=m.length,I=m[0].length,O=_?m:new Array(b),x=0;x<b;x++)for(O[x]||(O[x]=new Array(I)),k=0;k<I;k++)O[x][k]=N(m[x][k],x,k);return O.length===1?O[0]:O},d.cumreduce=function(m,N,_){var x,b,I,O,k;for(c(m[0])||(m=[m]),b=m.length,I=m[0].length,O=_?m:new Array(b),x=0;x<b;x++)for(O[x]||(O[x]=new Array(I)),I>0&&(O[x][0]=m[x][0]),k=1;k<I;k++)O[x][k]=N(O[x][k-1],m[x][k]);return O.length===1?O[0]:O},d.alter=function(m,N){return d.map(m,N,!0)},d.create=function(m,N,_){var x=new Array(m),b,I;for(i(N)&&(_=N,N=m),b=0;b<m;b++)for(x[b]=new Array(N),I=0;I<N;I++)x[b][I]=_(b,I);return x};function h(){return 0}d.zeros=function(m,N){return l(N)||(N=m),d.create(m,N,h)};function g(){return 1}d.ones=function(m,N){return l(N)||(N=m),d.create(m,N,g)},d.rand=function(m,N){return l(N)||(N=m),d.create(m,N,d._random_fn)};function w($,m){return $===m?1:0}d.identity=function(m,N){return l(N)||(N=m),d.create(m,N,w)},d.symmetric=function(m){var N=m.length,_,x;if(m.length!==m[0].length)return!1;for(_=0;_<N;_++)for(x=0;x<N;x++)if(m[x][_]!==m[_][x])return!1;return!0},d.clear=function(m){return d.alter(m,h)},d.seq=function(m,N,_,x){i(x)||(x=!1);var b=[],I=v(m,N),O=(N*I-m*I)/((_-1)*I),k=m,R;for(R=0;k<=N&&R<_;R++,k=(m*I+O*I*R)/I)b.push(x?x(k,R):k);return b},d.arange=function(m,N,_){var x=[],b;if(_=_||1,N===a&&(N=m,m=0),m===N||_===0)return[];if(m<N&&_<0)return[];if(m>N&&_>0)return[];if(_>0)for(b=m;b<N;b+=_)x.push(b);else for(b=m;b>N;b+=_)x.push(b);return x},d.slice=function(){function $(N,_,x,b){var I,O=[],k=N.length;if(_===a&&x===a&&b===a)return d.copy(N);if(_=_||0,x=x||N.length,_=_>=0?_:k+_,x=x>=0?x:k+x,b=b||1,_===x||b===0)return[];if(_<x&&b<0)return[];if(_>x&&b>0)return[];if(b>0)for(I=_;I<x;I+=b)O.push(N[I]);else for(I=_;I>x;I+=b)O.push(N[I]);return O}function m(N,_){var x,b;if(_=_||{},l(_.row)){if(l(_.col))return N[_.row][_.col];var I=d.rowa(N,_.row);return x=_.col||{},$(I,x.start,x.end,x.step)}if(l(_.col)){var O=d.cola(N,_.col);return b=_.row||{},$(O,b.start,b.end,b.step)}b=_.row||{},x=_.col||{};var k=$(N,b.start,b.end,b.step);return k.map(function(R){return $(R,x.start,x.end,x.step)})}return m}(),d.sliceAssign=function(m,N,_){var x,b;if(l(N.row)){if(l(N.col))return m[N.row][N.col]=_;N.col=N.col||{},N.col.start=N.col.start||0,N.col.end=N.col.end||m[0].length,N.col.step=N.col.step||1,x=d.arange(N.col.start,t.min(m.length,N.col.end),N.col.step);var I=N.row;return x.forEach(function(k,R){m[I][k]=_[R]}),m}if(l(N.col)){N.row=N.row||{},N.row.start=N.row.start||0,N.row.end=N.row.end||m.length,N.row.step=N.row.step||1,b=d.arange(N.row.start,t.min(m[0].length,N.row.end),N.row.step);var O=N.col;return b.forEach(function(k,R){m[k][O]=_[R]}),m}return _[0].length===a&&(_=[_]),N.row.start=N.row.start||0,N.row.end=N.row.end||m.length,N.row.step=N.row.step||1,N.col.start=N.col.start||0,N.col.end=N.col.end||m[0].length,N.col.step=N.col.step||1,b=d.arange(N.row.start,t.min(m.length,N.row.end),N.row.step),x=d.arange(N.col.start,t.min(m[0].length,N.col.end),N.col.step),b.forEach(function(k,R){x.forEach(function(B,H){m[k][B]=_[R][H]})}),m},d.diagonal=function(m){var N=d.zeros(m.length,m.length);return m.forEach(function(_,x){N[x][x]=_}),N},d.copy=function(m){return m.map(function(N){return l(N)?N:N.map(function(_){return _})})};var y=d.prototype;return y.length=0,y.push=Array.prototype.push,y.sort=Array.prototype.sort,y.splice=Array.prototype.splice,y.slice=Array.prototype.slice,y.toArray=function(){return this.length>1?f.call(this):f.call(this)[0]},y.map=function(m,N){return d(d.map(this,m,N))},y.cumreduce=function(m,N){return d(d.cumreduce(this,m,N))},y.alter=function(m){return d.alter(this,m),this},function($){for(var m=0;m<$.length;m++)(function(N){y[N]=function(_){var x=this,b;return _?(setTimeout(function(){_.call(x,y[N].call(x))}),this):(b=d[N](this),c(b)?d(b):b)}})($[m])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function($){for(var m=0;m<$.length;m++)(function(N){y[N]=function(_,x){var b=this;return x?(setTimeout(function(){x.call(b,y[N].call(b,_))}),this):d(d[N](this,_))}})($[m])}("row col".split(" ")),function($){for(var m=0;m<$.length;m++)(function(N){y[N]=function(){return d(d[N].apply(null,arguments))}})($[m])}("create zeros ones rand identity".split(" ")),d}(Math);return function(t,a){var s=t.utils.isFunction;function f(c,i){return c-i}function p(c,i,l){return a.max(i,a.min(c,l))}t.sum=function(i){for(var l=0,o=i.length;--o>=0;)l+=i[o];return l},t.sumsqrd=function(i){for(var l=0,o=i.length;--o>=0;)l+=i[o]*i[o];return l},t.sumsqerr=function(i){for(var l=t.mean(i),o=0,d=i.length,h;--d>=0;)h=i[d]-l,o+=h*h;return o},t.sumrow=function(i){for(var l=0,o=i.length;--o>=0;)l+=i[o];return l},t.product=function(i){for(var l=1,o=i.length;--o>=0;)l*=i[o];return l},t.min=function(i){for(var l=i[0],o=0;++o<i.length;)i[o]<l&&(l=i[o]);return l},t.max=function(i){for(var l=i[0],o=0;++o<i.length;)i[o]>l&&(l=i[o]);return l},t.unique=function(i){for(var l={},o=[],d=0;d<i.length;d++)l[i[d]]||(l[i[d]]=!0,o.push(i[d]));return o},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var l=i.map(a.log),o=t.mean(l);return a.exp(o)},t.median=function(i){var l=i.length,o=i.slice().sort(f);return l&1?o[l/2|0]:(o[l/2-1]+o[l/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(l,o){return l+o})},t.cumprod=function(i){return t.cumreduce(i,function(l,o){return l*o})},t.diff=function(i){var l=[],o=i.length,d;for(d=1;d<o;d++)l.push(i[d]-i[d-1]);return l},t.rank=function(c){var i,l=[],o={};for(i=0;i<c.length;i++){var d=c[i];o[d]?o[d]++:(o[d]=1,l.push(d))}var h=l.sort(f),g={},w=1;for(i=0;i<h.length;i++){var d=h[i],y=o[d],$=w,m=w+y-1,N=($+m)/2;g[d]=N,w+=y}return c.map(function(_){return g[_]})},t.mode=function(i){var l=i.length,o=i.slice().sort(f),d=1,h=0,g=0,w=[],y;for(y=0;y<l;y++)o[y]===o[y+1]?d++:(d>h?(w=[o[y]],h=d,g=0):d===h&&(w.push(o[y]),g++),d=1);return g===0?w[0]:w},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,l){return t.sumsqerr(i)/(i.length-(l?1:0))},t.pooledvariance=function(i){var l=i.reduce(function(d,h){return d+t.sumsqerr(h)},0),o=i.reduce(function(d,h){return d+h.length},0);return l/(o-i.length)},t.deviation=function(c){for(var i=t.mean(c),l=c.length,o=new Array(l),d=0;d<l;d++)o[d]=c[d]-i;return o},t.stdev=function(i,l){return a.sqrt(t.variance(i,l))},t.pooledstdev=function(i){return a.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var l=t.mean(i),o=[],d=i.length-1;d>=0;d--)o.push(a.abs(i[d]-l));return t.mean(o)},t.meddev=function(i){for(var l=t.median(i),o=[],d=i.length-1;d>=0;d--)o.push(a.abs(i[d]-l));return t.median(o)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var l=i.length,o=i.slice().sort(f);return[o[a.round(l/4)-1],o[a.round(l/2)-1],o[a.round(l*3/4)-1]]},t.quantiles=function(i,l,o,d){var h=i.slice().sort(f),g=[l.length],w=i.length,y,$,m,N,_,x;for(typeof o>"u"&&(o=3/8),typeof d>"u"&&(d=3/8),y=0;y<l.length;y++)$=l[y],m=o+$*(1-o-d),N=w*$+m,_=a.floor(p(N,1,w-1)),x=p(N-_,0,1),g[y]=(1-x)*h[_-1]+x*h[_];return g},t.percentile=function(i,l,o){var d=i.slice().sort(f),h=l*(d.length+(o?1:-1))+(o?0:1),g=parseInt(h),w=h-g;return g+1<d.length?d[g-1]+w*(d[g]-d[g-1]):d[g-1]},t.percentileOfScore=function(i,l,o){var d=0,h=i.length,g=!1,w,y;for(o==="strict"&&(g=!0),y=0;y<h;y++)w=i[y],(g&&w<l||!g&&w<=l)&&d++;return d/h},t.histogram=function(i,l){l=l||4;var o=t.min(i),d=(t.max(i)-o)/l,h=i.length,g=[],w;for(w=0;w<l;w++)g[w]=0;for(w=0;w<h;w++)g[a.min(a.floor((i[w]-o)/d),l-1)]+=1;return g},t.covariance=function(i,l){var o=t.mean(i),d=t.mean(l),h=i.length,g=new Array(h),w;for(w=0;w<h;w++)g[w]=(i[w]-o)*(l[w]-d);return t.sum(g)/(h-1)},t.corrcoeff=function(i,l){return t.covariance(i,l)/t.stdev(i,1)/t.stdev(l,1)},t.spearmancoeff=function(c,i){return c=t.rank(c),i=t.rank(i),t.corrcoeff(c,i)},t.stanMoment=function(i,l){for(var o=t.mean(i),d=t.stdev(i),h=i.length,g=0,w=0;w<h;w++)g+=a.pow((i[w]-o)/d,l);return g/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var v=t.prototype;(function(c){for(var i=0;i<c.length;i++)(function(l){v[l]=function(o,d){var h=[],g=0,w=this;if(s(o)&&(d=o,o=!1),d)return setTimeout(function(){d.call(w,v[l].call(w,o))}),this;if(this.length>1){for(w=o===!0?this:this.transpose();g<w.length;g++)h[g]=t[l](w[g]);return h}return t[l](this[0],o)}})(c[i])})("cumsum cumprod".split(" ")),function(c){for(var i=0;i<c.length;i++)(function(l){v[l]=function(o,d){var h=[],g=0,w=this;if(s(o)&&(d=o,o=!1),d)return setTimeout(function(){d.call(w,v[l].call(w,o))}),this;if(this.length>1){for(l!=="sumrow"&&(w=o===!0?this:this.transpose());g<w.length;g++)h[g]=t[l](w[g]);return o===!0?t[l](t.utils.toVector(h)):h}return t[l](this[0],o)}})(c[i])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(c){for(var i=0;i<c.length;i++)(function(l){v[l]=function(){var o=[],d=0,h=this,g=Array.prototype.slice.call(arguments),w;if(s(g[g.length-1])){w=g[g.length-1];var y=g.slice(0,g.length-1);return setTimeout(function(){w.call(h,v[l].apply(h,y))}),this}else{w=void 0;var $=function(N){return t[l].apply(h,[N].concat(g))}}if(this.length>1){for(h=h.transpose();d<h.length;d++)o[d]=$(h[d]);return o}return $(this[0])}})(c[i])}("quantiles percentileOfScore".split(" "))}(n,Math),function(t,a){t.gammaln=function(f){var p=0,v=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],c=1.000000000190015,i,l,o;for(o=(l=i=f)+5.5,o-=(i+.5)*a.log(o);p<6;p++)c+=v[p]/++l;return a.log(2.5066282746310007*c/i)-o},t.loggam=function(f){var p,v,c,i,l,o,d,h=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(p=f,d=0,f==1||f==2)return 0;for(f<=7&&(d=a.floor(7-f),p=f+d),v=1/(p*p),c=2*a.PI,l=h[9],o=8;o>=0;o--)l*=v,l+=h[o];if(i=l/p+.5*a.log(c)+(p-.5)*a.log(p)-p,f<=7)for(o=1;o<=d;o++)i-=a.log(p-1),p-=1;return i},t.gammafn=function(f){var p=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],v=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],c=!1,i=0,l=0,o=0,d=f,h,g,w,y;if(f>171.6243769536076)return 1/0;if(d<=0)if(y=d%1+36e-17,y)c=(d&1?-1:1)*a.PI/a.sin(a.PI*y),d=1-d;else return 1/0;for(w=d,d<1?g=d++:g=(d-=i=(d|0)-1)-1,h=0;h<8;++h)o=(o+p[h])*g,l=l*g+v[h];if(y=o/l+1,w<d)y/=w;else if(w>d)for(h=0;h<i;++h)y*=d,d++;return c&&(y=c/y),y},t.gammap=function(f,p){return t.lowRegGamma(f,p)*t.gammafn(f)},t.lowRegGamma=function(f,p){var v=t.gammaln(f),c=f,i=1/f,l=i,o=p+1-f,d=1/1e-30,h=1/o,g=h,w=1,y=-~(a.log(f>=1?f:1/f)*8.5+f*.4+17),$;if(p<0||f<=0)return NaN;if(p<f+1){for(;w<=y;w++)i+=l*=p/++c;return i*a.exp(-p+f*a.log(p)-v)}for(;w<=y;w++)$=-w*(w-f),o+=2,h=$*h+o,d=o+$/d,h=1/h,g*=h*d;return 1-g*a.exp(-p+f*a.log(p)-v)},t.factorialln=function(f){return f<0?NaN:t.gammaln(f+1)},t.factorial=function(f){return f<0?NaN:t.gammafn(f+1)},t.combination=function(f,p){return f>170||p>170?a.exp(t.combinationln(f,p)):t.factorial(f)/t.factorial(p)/t.factorial(f-p)},t.combinationln=function(f,p){return t.factorialln(f)-t.factorialln(p)-t.factorialln(f-p)},t.permutation=function(f,p){return t.factorial(f)/t.factorial(f-p)},t.betafn=function(f,p){if(!(f<=0||p<=0))return f+p>170?a.exp(t.betaln(f,p)):t.gammafn(f)*t.gammafn(p)/t.gammafn(f+p)},t.betaln=function(f,p){return t.gammaln(f)+t.gammaln(p)-t.gammaln(f+p)},t.betacf=function(f,p,v){var c=1e-30,i=1,l=p+v,o=p+1,d=p-1,h=1,g=1-l*f/o,w,y,$,m;for(a.abs(g)<c&&(g=c),g=1/g,m=g;i<=100&&(w=2*i,y=i*(v-i)*f/((d+w)*(p+w)),g=1+y*g,a.abs(g)<c&&(g=c),h=1+y/h,a.abs(h)<c&&(h=c),g=1/g,m*=g*h,y=-(p+i)*(l+i)*f/((p+w)*(o+w)),g=1+y*g,a.abs(g)<c&&(g=c),h=1+y/h,a.abs(h)<c&&(h=c),g=1/g,$=g*h,m*=$,!(a.abs($-1)<3e-7));i++);return m},t.gammapinv=function(f,p){var v=0,c=p-1,i=1e-8,l=t.gammaln(p),o,d,h,g,w,y,$;if(f>=1)return a.max(100,p+100*a.sqrt(p));if(f<=0)return 0;for(p>1?(y=a.log(c),$=a.exp(c*(y-1)-l),w=f<.5?f:1-f,h=a.sqrt(-2*a.log(w)),o=(2.30753+h*.27061)/(1+h*(.99229+h*.04481))-h,f<.5&&(o=-o),o=a.max(.001,p*a.pow(1-1/(9*p)-o/(3*a.sqrt(p)),3))):(h=1-p*(.253+p*.12),f<h?o=a.pow(f/h,1/p):o=1-a.log(1-(f-h)/(1-h)));v<12;v++){if(o<=0)return 0;if(d=t.lowRegGamma(p,o)-f,p>1?h=$*a.exp(-(o-c)+c*(a.log(o)-y)):h=a.exp(-o+c*a.log(o)-l),g=d/h,o-=h=g/(1-.5*a.min(1,g*((p-1)/o-1))),o<=0&&(o=.5*(o+h)),a.abs(h)<i*o)break}return o},t.erf=function(f){var p=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],v=p.length-1,c=!1,i=0,l=0,o,d,h,g;for(f<0&&(f=-f,c=!0),o=2/(2+f),d=4*o-2;v>0;v--)h=i,i=d*i-l+p[v],l=h;return g=o*a.exp(-f*f+.5*(p[0]+d*i)-l),c?g-1:1-g},t.erfc=function(f){return 1-t.erf(f)},t.erfcinv=function(f){var p=0,v,c,i,l;if(f>=2)return-100;if(f<=0)return 100;for(l=f<1?f:2-f,i=a.sqrt(-2*a.log(l/2)),v=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);p<2;p++)c=t.erfc(v)-l,v+=c/(1.1283791670955126*a.exp(-v*v)-v*c);return f<1?v:-v},t.ibetainv=function(f,p,v){var c=1e-8,i=p-1,l=v-1,o=0,d,h,g,w,y,$,m,N,_,x,b;if(f<=0)return 0;if(f>=1)return 1;for(p>=1&&v>=1?(g=f<.5?f:1-f,w=a.sqrt(-2*a.log(g)),m=(2.30753+w*.27061)/(1+w*(.99229+w*.04481))-w,f<.5&&(m=-m),N=(m*m-3)/6,_=2/(1/(2*p-1)+1/(2*v-1)),x=m*a.sqrt(N+_)/_-(1/(2*v-1)-1/(2*p-1))*(N+5/6-2/(3*_)),m=p/(p+v*a.exp(2*x))):(d=a.log(p/(p+v)),h=a.log(v/(p+v)),w=a.exp(p*d)/p,y=a.exp(v*h)/v,x=w+y,f<w/x?m=a.pow(p*x*f,1/p):m=1-a.pow(v*x*(1-f),1/v)),b=-t.gammaln(p)-t.gammaln(v)+t.gammaln(p+v);o<10;o++){if(m===0||m===1)return m;if($=t.ibeta(m,p,v)-f,w=a.exp(i*a.log(m)+l*a.log(1-m)+b),y=$/w,m-=w=y/(1-.5*a.min(1,y*(i/m-l/(1-m)))),m<=0&&(m=.5*(m+w)),m>=1&&(m=.5*(m+w+1)),a.abs(w)<c*m&&o>0)break}return m},t.ibeta=function(f,p,v){var c=f===0||f===1?0:a.exp(t.gammaln(p+v)-t.gammaln(p)-t.gammaln(v)+p*a.log(f)+v*a.log(1-f));return f<0||f>1?!1:f<(p+1)/(p+v+2)?c*t.betacf(f,p,v)/p:1-c*t.betacf(1-f,v,p)/v},t.randn=function(f,p){var v,c,i,l,o;if(p||(p=f),f)return t.create(f,p,function(){return t.randn()});do v=t._random_fn(),c=1.7156*(t._random_fn()-.5),i=v-.449871,l=a.abs(c)+.386595,o=i*i+l*(.196*l-.25472*i);while(o>.27597&&(o>.27846||c*c>-4*a.log(v)*v*v));return c/v},t.randg=function(f,p,v){var c=f,i,l,o,d,h,g;if(v||(v=p),f||(f=1),p)return g=t.zeros(p,v),g.alter(function(){return t.randg(f)}),g;f<1&&(f+=1),i=f-1/3,l=1/a.sqrt(9*i);do{do h=t.randn(),d=1+l*h;while(d<=0);d=d*d*d,o=t._random_fn()}while(o>1-.331*a.pow(h,4)&&a.log(o)>.5*h*h+i*(1-d+a.log(d)));if(f==c)return i*d;do o=t._random_fn();while(o===0);return a.pow(o,1/c)*i*d},function(s){for(var f=0;f<s.length;f++)(function(p){t.fn[p]=function(){return t(t.map(this,function(v){return t[p](v)}))}})(s[f])}("gammaln gammafn factorial factorialln".split(" ")),function(s){for(var f=0;f<s.length;f++)(function(p){t.fn[p]=function(){return t(t[p].apply(null,arguments))}})(s[f])}("randn".split(" "))}(n,Math),function(t,a){(function(c){for(var i=0;i<c.length;i++)(function(l){t[l]=function o(d,h,g){return this instanceof o?(this._a=d,this._b=h,this._c=g,this):new o(d,h,g)},t.fn[l]=function(o,d,h){var g=t[l](o,d,h);return g.data=this,g},t[l].prototype.sample=function(o){var d=this._a,h=this._b,g=this._c;return o?t.alter(o,function(){return t[l].sample(d,h,g)}):t[l].sample(d,h,g)},function(o){for(var d=0;d<o.length;d++)(function(h){t[l].prototype[h]=function(g){var w=this._a,y=this._b,$=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?t.fn.map.call(g,function(m){return t[l][h](m,w,y,$)}):t[l][h](g,w,y,$)}})(o[d])}("pdf cdf inv".split(" ")),function(o){for(var d=0;d<o.length;d++)(function(h){t[l].prototype[h]=function(){return t[l][h](this._a,this._b,this._c)}})(o[d])}("mean median mode variance".split(" "))})(c[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,l,o){return i>1||i<0?0:l==1&&o==1?1:l<512&&o<512?a.pow(i,l-1)*a.pow(1-i,o-1)/t.betafn(l,o):a.exp((l-1)*a.log(i)+(o-1)*a.log(1-i)-t.betaln(l,o))},cdf:function(i,l,o){return i>1||i<0?(i>1)*1:t.ibeta(i,l,o)},inv:function(i,l,o){return t.ibetainv(i,l,o)},mean:function(i,l){return i/(i+l)},median:function(i,l){return t.ibetainv(.5,i,l)},mode:function(i,l){return(i-1)/(i+l-2)},sample:function(i,l){var o=t.randg(i);return o/(o+t.randg(l))},variance:function(i,l){return i*l/(a.pow(i+l,2)*(i+l+1))}}),t.extend(t.centralF,{pdf:function(i,l,o){var d,h,g;return i<0?0:l<=2?i===0&&l<2?1/0:i===0&&l===2?1:1/t.betafn(l/2,o/2)*a.pow(l/o,l/2)*a.pow(i,l/2-1)*a.pow(1+l/o*i,-(l+o)/2):(d=l*i/(o+i*l),h=o/(o+i*l),g=l*h/2,g*t.binomial.pdf((l-2)/2,(l+o-2)/2,d))},cdf:function(i,l,o){return i<0?0:t.ibeta(l*i/(l*i+o),l/2,o/2)},inv:function(i,l,o){return o/(l*(1/t.ibetainv(i,l/2,o/2)-1))},mean:function(i,l){return l>2?l/(l-2):void 0},mode:function(i,l){return i>2?l*(i-2)/(i*(l+2)):void 0},sample:function(i,l){var o=t.randg(i/2)*2,d=t.randg(l/2)*2;return o/i/(d/l)},variance:function(i,l){if(!(l<=4))return 2*l*l*(i+l-2)/(i*(l-2)*(l-2)*(l-4))}}),t.extend(t.cauchy,{pdf:function(i,l,o){return o<0?0:o/(a.pow(i-l,2)+a.pow(o,2))/a.PI},cdf:function(i,l,o){return a.atan((i-l)/o)/a.PI+.5},inv:function(c,i,l){return i+l*a.tan(a.PI*(c-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,l){return t.randn()*a.sqrt(1/(2*t.randg(.5)))*l+i}}),t.extend(t.chisquare,{pdf:function(i,l){return i<0?0:i===0&&l===2?.5:a.exp((l/2-1)*a.log(i)-i/2-l/2*a.log(2)-t.gammaln(l/2))},cdf:function(i,l){return i<0?0:t.lowRegGamma(l/2,i/2)},inv:function(c,i){return 2*t.gammapinv(c,.5*i)},mean:function(c){return c},median:function(i){return i*a.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,l){return i<0?0:l*a.exp(-l*i)},cdf:function(i,l){return i<0?0:1-a.exp(-l*i)},inv:function(c,i){return-a.log(1-c)/i},mean:function(c){return 1/c},median:function(c){return 1/c*a.log(2)},mode:function(){return 0},sample:function(i){return-1/i*a.log(t._random_fn())},variance:function(c){return a.pow(c,-2)}}),t.extend(t.gamma,{pdf:function(i,l,o){return i<0?0:i===0&&l===1?1/o:a.exp((l-1)*a.log(i)-i/o-t.gammaln(l)-l*a.log(o))},cdf:function(i,l,o){return i<0?0:t.lowRegGamma(l,i/o)},inv:function(c,i,l){return t.gammapinv(c,i)*l},mean:function(c,i){return c*i},mode:function(i,l){if(i>1)return(i-1)*l},sample:function(i,l){return t.randg(i)*l},variance:function(i,l){return i*l*l}}),t.extend(t.invgamma,{pdf:function(i,l,o){return i<=0?0:a.exp(-(l+1)*a.log(i)-o/i-t.gammaln(l)+l*a.log(o))},cdf:function(i,l,o){return i<=0?0:1-t.lowRegGamma(l,o/i)},inv:function(c,i,l){return l/t.gammapinv(1-c,i)},mean:function(c,i){return c>1?i/(c-1):void 0},mode:function(i,l){return l/(i+1)},sample:function(i,l){return l/t.randg(i)},variance:function(i,l){if(!(i<=2))return l*l/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,l,o){return i===0&&l===1?o:i===1&&o===1?l:a.exp(a.log(l)+a.log(o)+(l-1)*a.log(i)+(o-1)*a.log(1-a.pow(i,l)))},cdf:function(i,l,o){return i<0?0:i>1?1:1-a.pow(1-a.pow(i,l),o)},inv:function(i,l,o){return a.pow(1-a.pow(1-i,1/o),1/l)},mean:function(c,i){return i*t.gammafn(1+1/c)*t.gammafn(i)/t.gammafn(1+1/c+i)},median:function(i,l){return a.pow(1-a.pow(2,-1/l),1/i)},mode:function(i,l){if(i>=1&&l>=1&&i!==1&&l!==1)return a.pow((i-1)/(i*l-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,l,o){return i<=0?0:a.exp(-a.log(i)-.5*a.log(2*a.PI)-a.log(o)-a.pow(a.log(i)-l,2)/(2*o*o))},cdf:function(i,l,o){return i<0?0:.5+.5*t.erf((a.log(i)-l)/a.sqrt(2*o*o))},inv:function(c,i,l){return a.exp(-1.4142135623730951*l*t.erfcinv(2*c)+i)},mean:function(i,l){return a.exp(i+l*l/2)},median:function(i){return a.exp(i)},mode:function(i,l){return a.exp(i-l*l)},sample:function(i,l){return a.exp(t.randn()*l+i)},variance:function(i,l){return(a.exp(l*l)-1)*a.exp(2*i+l*l)}}),t.extend(t.noncentralt,{pdf:function(i,l,o){var d=1e-14;return a.abs(o)<d?t.studentt.pdf(i,l):a.abs(i)<d?a.exp(t.gammaln((l+1)/2)-o*o/2-.5*a.log(a.PI*l)-t.gammaln(l/2)):l/i*(t.noncentralt.cdf(i*a.sqrt(1+2/l),l+2,o)-t.noncentralt.cdf(i,l,o))},cdf:function(i,l,o){var d=1e-14,h=200;if(a.abs(o)<d)return t.studentt.cdf(i,l);var g=!1;i<0&&(g=!0,o=-o);for(var w=t.normal.cdf(-o,0,1),y=d+1,$=y,m=i*i/(i*i+l),N=0,_=a.exp(-o*o/2),x=a.exp(-o*o/2-.5*a.log(2)-t.gammaln(3/2))*o;N<h||$>d||y>d;)$=y,N>0&&(_*=o*o/(2*N),x*=o*o/(2*(N+1/2))),y=_*t.beta.cdf(m,N+.5,l/2)+x*t.beta.cdf(m,N+1,l/2),w+=.5*y,N++;return g?1-w:w}}),t.extend(t.normal,{pdf:function(i,l,o){return a.exp(-.5*a.log(2*a.PI)-a.log(o)-a.pow(i-l,2)/(2*o*o))},cdf:function(i,l,o){return .5*(1+t.erf((i-l)/a.sqrt(2*o*o)))},inv:function(c,i,l){return-1.4142135623730951*l*t.erfcinv(2*c)+i},mean:function(c){return c},median:function(i){return i},mode:function(c){return c},sample:function(i,l){return t.randn()*l+i},variance:function(c,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,l,o){return i<l?0:o*a.pow(l,o)/a.pow(i,o+1)},cdf:function(i,l,o){return i<l?0:1-a.pow(l/i,o)},inv:function(i,l,o){return l/a.pow(1-i,1/o)},mean:function(i,l){if(!(l<=1))return l*a.pow(i,l)/(l-1)},median:function(i,l){return i*(l*a.SQRT2)},mode:function(i){return i},variance:function(c,i){if(!(i<=2))return c*c*i/(a.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,l){return l=l>1e100?1e100:l,1/(a.sqrt(l)*t.betafn(.5,l/2))*a.pow(1+i*i/l,-((l+1)/2))},cdf:function(i,l){var o=l/2;return t.ibeta((i+a.sqrt(i*i+l))/(2*a.sqrt(i*i+l)),o,o)},inv:function(c,i){var l=t.ibetainv(2*a.min(c,1-c),.5*i,.5);return l=a.sqrt(i*(1-l)/l),c>.5?l:-l},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*a.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,l,o){return i<0||l<0||o<0?0:o/l*a.pow(i/l,o-1)*a.exp(-a.pow(i/l,o))},cdf:function(i,l,o){return i<0?0:1-a.exp(-a.pow(i/l,o))},inv:function(c,i,l){return i*a.pow(-a.log(1-c),1/l)},mean:function(c,i){return c*t.gammafn(1+1/i)},median:function(i,l){return i*a.pow(a.log(2),1/l)},mode:function(i,l){return l<=1?0:i*a.pow((l-1)/l,1/l)},sample:function(i,l){return i*a.pow(-a.log(t._random_fn()),1/l)},variance:function(i,l){return i*i*t.gammafn(1+2/l)-a.pow(t.weibull.mean(i,l),2)}}),t.extend(t.uniform,{pdf:function(i,l,o){return i<l||i>o?0:1/(o-l)},cdf:function(i,l,o){return i<l?0:i<o?(i-l)/(o-l):1},inv:function(c,i,l){return i+c*(l-i)},mean:function(i,l){return .5*(i+l)},median:function(i,l){return t.mean(i,l)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,l){return i/2+l/2+(l/2-i/2)*(2*t._random_fn()-1)},variance:function(i,l){return a.pow(l-i,2)/12}});function s(c,i,l,o){for(var d=0,h=1,g=1,w=1,y=0,$=0,m;a.abs((g-$)/g)>o;)$=g,m=-(i+y)*(i+l+y)*c/(i+2*y)/(i+2*y+1),d=g+m*d,h=w+m*h,y=y+1,m=y*(l-y)*c/(i+2*y-1)/(i+2*y),g=d+m*g,w=h+m*w,d=d/w,h=h/w,g=g/w,w=1;return g/i}t.extend(t.binomial,{pdf:function(i,l,o){return o===0||o===1?l*o===i?1:0:t.combination(l,i)*a.pow(o,i)*a.pow(1-o,l-i)},cdf:function(i,l,o){var d,h=1e-10;if(i<0)return 0;if(i>=l)return 1;if(o<0||o>1||l<=0)return NaN;i=a.floor(i);var g=o,w=i+1,y=l-i,$=w+y,m=a.exp(t.gammaln($)-t.gammaln(y)-t.gammaln(w)+w*a.log(g)+y*a.log(1-g));return g<(w+1)/($+2)?d=m*s(g,w,y,h):d=1-m*s(1-g,y,w,h),a.round((1-d)*(1/h))/(1/h)}}),t.extend(t.negbin,{pdf:function(i,l,o){return i!==i>>>0?!1:i<0?0:t.combination(i+l-1,l-1)*a.pow(1-o,i)*a.pow(o,l)},cdf:function(i,l,o){var d=0,h=0;if(i<0)return 0;for(;h<=i;h++)d+=t.negbin.pdf(h,l,o);return d}}),t.extend(t.hypgeom,{pdf:function(i,l,o,d){if(i!==i|0)return!1;if(i<0||i<o-(l-d))return 0;if(i>d||i>o)return 0;if(o*2>l)return d*2>l?t.hypgeom.pdf(l-o-d+i,l,l-o,l-d):t.hypgeom.pdf(d-i,l,l-o,d);if(d*2>l)return t.hypgeom.pdf(o-i,l,o,l-d);if(o<d)return t.hypgeom.pdf(i,l,d,o);for(var h=1,g=0,w=0;w<i;w++){for(;h>1&&g<d;)h*=1-o/(l-g),g++;h*=(d-w)*(o-w)/((w+1)*(l-o-d+w+1))}for(;g<d;g++)h*=1-o/(l-g);return a.min(1,a.max(0,h))},cdf:function(i,l,o,d){if(i<0||i<o-(l-d))return 0;if(i>=d||i>=o)return 1;if(o*2>l)return d*2>l?t.hypgeom.cdf(l-o-d+i,l,l-o,l-d):1-t.hypgeom.cdf(d-i-1,l,l-o,d);if(d*2>l)return 1-t.hypgeom.cdf(o-i-1,l,o,l-d);if(o<d)return t.hypgeom.cdf(i,l,d,o);for(var h=1,g=1,w=0,y=0;y<i;y++){for(;h>1&&w<d;){var $=1-o/(l-w);g*=$,h*=$,w++}g*=(d-y)*(o-y)/((y+1)*(l-o-d+y+1)),h+=g}for(;w<d;w++)h*=1-o/(l-w);return a.min(1,a.max(0,h))}}),t.extend(t.poisson,{pdf:function(i,l){return l<0||i%1!==0||i<0?0:a.pow(l,i)*a.exp(-l)/t.factorial(i)},cdf:function(i,l){var o=[],d=0;if(i<0)return 0;for(;d<=i;d++)o.push(t.poisson.pdf(d,l));return t.sum(o)},mean:function(c){return c},variance:function(c){return c},sampleSmall:function(i){var l=1,o=0,d=a.exp(-i);do o++,l*=t._random_fn();while(l>d);return o-1},sampleLarge:function(i){var l=i,o,d,h,g,w,y,$,m,N,_;for(g=a.sqrt(l),w=a.log(l),$=.931+2.53*g,y=-.059+.02483*$,m=1.1239+1.1328/($-3.4),N=.9277-3.6224/($-2);;){if(d=a.random()-.5,h=a.random(),_=.5-a.abs(d),o=a.floor((2*y/_+$)*d+l+.43),_>=.07&&h<=N)return o;if(!(o<0||_<.013&&h>_)&&a.log(h)+a.log(m)-a.log(y/(_*_)+$)<=-l+o*w-t.loggam(o+1))return o}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,l,o,d){return o<=l||d<l||d>o?NaN:i<l||i>o?0:i<d?2*(i-l)/((o-l)*(d-l)):i===d?2/(o-l):2*(o-i)/((o-l)*(o-d))},cdf:function(i,l,o,d){return o<=l||d<l||d>o?NaN:i<=l?0:i>=o?1:i<=d?a.pow(i-l,2)/((o-l)*(d-l)):1-a.pow(o-i,2)/((o-l)*(o-d))},inv:function(i,l,o,d){return o<=l||d<l||d>o?NaN:i<=(d-l)/(o-l)?l+(o-l)*a.sqrt(i*((d-l)/(o-l))):l+(o-l)*(1-a.sqrt((1-i)*(1-(d-l)/(o-l))))},mean:function(i,l,o){return(i+l+o)/3},median:function(i,l,o){if(o<=(i+l)/2)return l-a.sqrt((l-i)*(l-o))/a.sqrt(2);if(o>(i+l)/2)return i+a.sqrt((l-i)*(o-i))/a.sqrt(2)},mode:function(i,l,o){return o},sample:function(i,l,o){var d=t._random_fn();return d<(o-i)/(l-i)?i+a.sqrt(d*(l-i)*(o-i)):l-a.sqrt((1-d)*(l-i)*(l-o))},variance:function(i,l,o){return(i*i+l*l+o*o-i*l-i*o-l*o)/18}}),t.extend(t.arcsine,{pdf:function(i,l,o){return o<=l?NaN:i<=l||i>=o?0:2/a.PI*a.pow(a.pow(o-l,2)-a.pow(2*i-l-o,2),-.5)},cdf:function(i,l,o){return i<l?0:i<o?2/a.PI*a.asin(a.sqrt((i-l)/(o-l))):1},inv:function(c,i,l){return i+(.5-.5*a.cos(a.PI*c))*(l-i)},mean:function(i,l){return l<=i?NaN:(i+l)/2},median:function(i,l){return l<=i?NaN:(i+l)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,l){return(i+l)/2+(l-i)/2*a.sin(2*a.PI*t.uniform.sample(0,1))},variance:function(i,l){return l<=i?NaN:a.pow(l-i,2)/8}});function f(c){return c/a.abs(c)}t.extend(t.laplace,{pdf:function(i,l,o){return o<=0?0:a.exp(-a.abs(i-l)/o)/(2*o)},cdf:function(i,l,o){return o<=0?0:i<l?.5*a.exp((i-l)/o):1-.5*a.exp(-(i-l)/o)},mean:function(c){return c},median:function(c){return c},mode:function(c){return c},variance:function(c,i){return 2*i*i},sample:function(i,l){var o=t._random_fn()-.5;return i-l*f(o)*a.log(1-2*a.abs(o))}});function p(c,i,l){var o=12,d=6,h=-30,g=-50,w=60,y=8,$=3,m=2,N=3,_=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],x=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],b=c*.5;if(b>=y)return 1;var I=2*t.normal.cdf(b,0,1,1,0)-1;I>=a.exp(g/l)?I=a.pow(I,l):I=0;var O;c>$?O=m:O=N;for(var k=b,R=(y-b)/O,B=k+R,H=0,G=l-1,V=1;V<=O;V++){for(var D=0,j=.5*(B+k),E=.5*(B-k),P=1;P<=o;P++){var L,F;d<P?(L=o-P+1,F=_[L-1]):(L=P,F=-_[L-1]);var U=E*F,X=j+U,T=X*X;if(T>w)break;var W=2*t.normal.cdf(X,0,1,1,0),te=2*t.normal.cdf(X,c,1,1,0),Ne=W*.5-te*.5;Ne>=a.exp(h/G)&&(Ne=x[L-1]*a.exp(-(.5*T))*a.pow(Ne,G),D+=Ne)}D*=2*E*l/a.sqrt(2*a.PI),H+=D,k=B,B+=R}return I+=H,I<=a.exp(h/i)?0:(I=a.pow(I,i),I>=1?1:I)}function v(c,i,l){var o=.322232421088,d=.099348462606,h=-1,g=.588581570495,w=-.342242088547,y=.531103462366,$=-.204231210125,m=.10353775285,N=-453642210148e-16,_=.0038560700634,x=.8832,b=.2368,I=1.214,O=1.208,k=1.4142,R=120,B=.5-.5*c,H=a.sqrt(a.log(1/(B*B))),G=H+((((H*N+$)*H+w)*H+h)*H+o)/((((H*_+m)*H+y)*H+g)*H+d);l<R&&(G+=(G*G*G+G)/l/4);var V=x-b*G;return l<R&&(V+=-I/l+O*G/l),G*(V*a.log(i-1)+k)}t.extend(t.tukey,{cdf:function(i,l,o){var d=1,h=l,g=16,w=8,y=-30,$=1e-14,m=100,N=800,_=5e3,x=25e3,b=1,I=.5,O=.25,k=.125,R=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],B=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(o<2||d<1||h<2)return NaN;if(!Number.isFinite(i))return 1;if(o>x)return p(i,d,h);var H=o*.5,G=H*a.log(o)-o*a.log(2)-t.gammaln(H),V=H-1,D=o*.25,j;o<=m?j=b:o<=N?j=I:o<=_?j=O:j=k,G+=a.log(j);for(var E=0,P=1;P<=50;P++){for(var L=0,F=(2*P-1)*j,U=1;U<=g;U++){var X,T;w<U?(X=U-w-1,T=G+V*a.log(F+R[X]*j)-(R[X]*j+F)*D):(X=U-1,T=G+V*a.log(F-R[X]*j)+(R[X]*j-F)*D);var W;if(T>=y){w<U?W=i*a.sqrt((R[X]*j+F)*.5):W=i*a.sqrt((-(R[X]*j)+F)*.5);var te=p(W,d,h),Ne=te*B[X]*a.exp(T);L+=Ne}}if(P*j>=1&&L<=$)break;E+=L}if(L>$)throw new Error("tukey.cdf failed to converge");return E>1&&(E=1),E},inv:function(c,i,l){var o=1,d=i,h=1e-4,g=50;if(l<2||o<1||d<2)return NaN;if(c<0||c>1)return NaN;if(c===0)return 0;if(c===1)return 1/0;var w=v(c,d,l),y=t.tukey.cdf(w,i,l)-c,$;y>0?$=a.max(0,w-1):$=w+1;for(var m=t.tukey.cdf($,i,l)-c,N,_=1;_<g;_++){N=$-m*($-w)/(m-y),y=m,w=$,N<0&&(N=0,m=-c),m=t.tukey.cdf(N,i,l)-c,$=N;var x=a.abs($-w);if(x<h)return N}throw new Error("tukey.inv failed to converge")}})}(n,Math),function(t,a){var s=Array.prototype.push,f=t.utils.isArray;function p(v){return f(v)||v instanceof t}t.extend({add:function(c,i){return p(i)?(p(i[0])||(i=[i]),t.map(c,function(l,o,d){return l+i[o][d]})):t.map(c,function(l){return l+i})},subtract:function(c,i){return p(i)?(p(i[0])||(i=[i]),t.map(c,function(l,o,d){return l-i[o][d]||0})):t.map(c,function(l){return l-i})},divide:function(c,i){return p(i)?(p(i[0])||(i=[i]),t.multiply(c,t.inv(i))):t.map(c,function(l){return l/i})},multiply:function(c,i){var l,o,d,h,g,w,y,$;if(c.length===void 0&&i.length===void 0)return c*i;if(g=c.length,w=c[0].length,y=t.zeros(g,d=p(i)?i[0].length:w),$=0,p(i)){for(;$<d;$++)for(l=0;l<g;l++){for(h=0,o=0;o<w;o++)h+=c[l][o]*i[o][$];y[l][$]=h}return g===1&&$===1?y[0][0]:y}return t.map(c,function(m){return m*i})},outer:function(c,i){return t.multiply(c.map(function(l){return[l]}),[i])},dot:function(c,i){p(c[0])||(c=[c]),p(i[0])||(i=[i]);for(var l=c[0].length===1&&c.length!==1?t.transpose(c):c,o=i[0].length===1&&i.length!==1?t.transpose(i):i,d=[],h=0,g=l.length,w=l[0].length,y,$;h<g;h++){for(d[h]=[],y=0,$=0;$<w;$++)y+=l[h][$]*o[h][$];d[h]=y}return d.length===1?d[0]:d},pow:function(c,i){return t.map(c,function(l){return a.pow(l,i)})},exp:function(c){return t.map(c,function(i){return a.exp(i)})},log:function(c){return t.map(c,function(i){return a.log(i)})},abs:function(c){return t.map(c,function(i){return a.abs(i)})},norm:function(c,i){var l=0,o=0;for(isNaN(i)&&(i=2),p(c[0])&&(c=c[0]);o<c.length;o++)l+=a.pow(a.abs(c[o]),i);return a.pow(l,1/i)},angle:function(c,i){return a.acos(t.dot(c,i)/(t.norm(c)*t.norm(i)))},aug:function(c,i){var l=[],o;for(o=0;o<c.length;o++)l.push(c[o].slice());for(o=0;o<l.length;o++)s.apply(l[o],i[o]);return l},inv:function(c){for(var i=c.length,l=c[0].length,o=t.identity(i,l),d=t.gauss_jordan(c,o),h=[],g=0,w;g<i;g++)for(h[g]=[],w=l;w<d[0].length;w++)h[g][w-l]=d[g][w];return h},det:function v(c){if(c.length===2)return c[0][0]*c[1][1]-c[0][1]*c[1][0];for(var i=0,l=0;l<c.length;l++){for(var o=[],d=1;d<c.length;d++){o[d-1]=[];for(var h=0;h<c.length;h++)h<l?o[d-1][h]=c[d][h]:h>l&&(o[d-1][h-1]=c[d][h])}var g=l%2?-1:1;i+=v(o)*c[0][l]*g}return i},gauss_elimination:function(c,i){var l=0,o=0,d=c.length,h=c[0].length,g=1,w=0,y=[],$,m,N,_;for(c=t.aug(c,i),$=c[0].length,l=0;l<d;l++){for(m=c[l][l],o=l,_=l+1;_<h;_++)m<a.abs(c[_][l])&&(m=c[_][l],o=_);if(o!=l)for(_=0;_<$;_++)N=c[l][_],c[l][_]=c[o][_],c[o][_]=N;for(o=l+1;o<d;o++)for(g=c[o][l]/c[l][l],_=l;_<$;_++)c[o][_]=c[o][_]-g*c[l][_]}for(l=d-1;l>=0;l--){for(w=0,o=l+1;o<=d-1;o++)w=w+y[o]*c[l][o];y[l]=(c[l][$-1]-w)/c[l][l]}return y},gauss_jordan:function(c,i){var l=t.aug(c,i),o=l.length,d=l[0].length,h=0,g,w,y;for(w=0;w<o;w++){var $=w;for(y=w+1;y<o;y++)a.abs(l[y][w])>a.abs(l[$][w])&&($=y);var m=l[w];for(l[w]=l[$],l[$]=m,y=w+1;y<o;y++)for(h=l[y][w]/l[w][w],g=w;g<d;g++)l[y][g]-=l[w][g]*h}for(w=o-1;w>=0;w--){for(h=l[w][w],y=0;y<w;y++)for(g=d-1;g>w-1;g--)l[y][g]-=l[w][g]*l[y][w]/h;for(l[w][w]/=h,g=o;g<d;g++)l[w][g]/=h}return l},triaUpSolve:function(c,i){var l=c[0].length,o=t.zeros(1,l)[0],d,h=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),h=!0),t.arange(l-1,-1,-1).forEach(function(g){d=t.arange(g+1,l).map(function(w){return o[w]*c[g][w]}),o[g]=(i[g]-t.sum(d))/c[g][g]}),h?o.map(function(g){return[g]}):o},triaLowSolve:function(c,i){var l=c[0].length,o=t.zeros(1,l)[0],d,h=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),h=!0),t.arange(l).forEach(function(g){d=t.arange(g).map(function(w){return c[g][w]*o[w]}),o[g]=(i[g]-t.sum(d))/c[g][g]}),h?o.map(function(g){return[g]}):o},lu:function(c){var i=c.length,l=t.identity(i),o=t.zeros(c.length,c[0].length),d;return t.arange(i).forEach(function(h){o[0][h]=c[0][h]}),t.arange(1,i).forEach(function(h){t.arange(h).forEach(function(g){d=t.arange(g).map(function(w){return l[h][w]*o[w][g]}),l[h][g]=(c[h][g]-t.sum(d))/o[g][g]}),t.arange(h,i).forEach(function(g){d=t.arange(h).map(function(w){return l[h][w]*o[w][g]}),o[h][g]=c[d.length][g]-t.sum(d)})}),[l,o]},cholesky:function(c){var i=c.length,l=t.zeros(c.length,c[0].length),o;return t.arange(i).forEach(function(d){o=t.arange(d).map(function(h){return a.pow(l[d][h],2)}),l[d][d]=a.sqrt(c[d][d]-t.sum(o)),t.arange(d+1,i).forEach(function(h){o=t.arange(d).map(function(g){return l[d][g]*l[h][g]}),l[h][d]=(c[d][h]-t.sum(o))/l[d][d]})}),l},gauss_jacobi:function(c,i,l,o){for(var d=0,h=0,g=c.length,w=[],y=[],$=[],m,N,_,x;d<g;d++)for(w[d]=[],y[d]=[],$[d]=[],h=0;h<g;h++)d>h?(w[d][h]=c[d][h],y[d][h]=$[d][h]=0):d<h?(y[d][h]=c[d][h],w[d][h]=$[d][h]=0):($[d][h]=c[d][h],w[d][h]=y[d][h]=0);for(_=t.multiply(t.multiply(t.inv($),t.add(w,y)),-1),N=t.multiply(t.inv($),i),m=l,x=t.add(t.multiply(_,l),N),d=2;a.abs(t.norm(t.subtract(x,m)))>o;)m=x,x=t.add(t.multiply(_,m),N),d++;return x},gauss_seidel:function(c,i,l,o){for(var d=0,h=c.length,g=[],w=[],y=[],$,m,N,_,x;d<h;d++)for(g[d]=[],w[d]=[],y[d]=[],$=0;$<h;$++)d>$?(g[d][$]=c[d][$],w[d][$]=y[d][$]=0):d<$?(w[d][$]=c[d][$],g[d][$]=y[d][$]=0):(y[d][$]=c[d][$],g[d][$]=w[d][$]=0);for(_=t.multiply(t.multiply(t.inv(t.add(y,g)),w),-1),N=t.multiply(t.inv(t.add(y,g)),i),m=l,x=t.add(t.multiply(_,l),N),d=2;a.abs(t.norm(t.subtract(x,m)))>o;)m=x,x=t.add(t.multiply(_,m),N),d=d+1;return x},SOR:function(c,i,l,o,d){for(var h=0,g=c.length,w=[],y=[],$=[],m,N,_,x,b;h<g;h++)for(w[h]=[],y[h]=[],$[h]=[],m=0;m<g;m++)h>m?(w[h][m]=c[h][m],y[h][m]=$[h][m]=0):h<m?(y[h][m]=c[h][m],w[h][m]=$[h][m]=0):($[h][m]=c[h][m],w[h][m]=y[h][m]=0);for(x=t.multiply(t.inv(t.add($,t.multiply(w,d))),t.subtract(t.multiply($,1-d),t.multiply(y,d))),_=t.multiply(t.multiply(t.inv(t.add($,t.multiply(w,d))),i),d),N=l,b=t.add(t.multiply(x,l),_),h=2;a.abs(t.norm(t.subtract(b,N)))>o;)N=b,b=t.add(t.multiply(x,N),_),h++;return b},householder:function(c){for(var i=c.length,l=c[0].length,o=0,d=[],h=[],g,w,y,$,m;o<i-1;o++){for(g=0,$=o+1;$<l;$++)g+=c[$][o]*c[$][o];for(m=c[o+1][o]>0?-1:1,g=m*a.sqrt(g),w=a.sqrt((g*g-c[o+1][o]*g)/2),d=t.zeros(i,1),d[o+1][0]=(c[o+1][o]-g)/(2*w),y=o+2;y<i;y++)d[y][0]=c[y][o]/(2*w);h=t.subtract(t.identity(i,l),t.multiply(t.multiply(d,t.transpose(d)),2)),c=t.multiply(h,t.multiply(c,h))}return c},QR:function(){var v=t.sum,c=t.arange;function i(l){var o=l.length,d=l[0].length,h=t.zeros(d,d);l=t.copy(l);var g,w,y;for(w=0;w<d;w++){for(h[w][w]=a.sqrt(v(c(o).map(function($){return l[$][w]*l[$][w]}))),g=0;g<o;g++)l[g][w]=l[g][w]/h[w][w];for(y=w+1;y<d;y++)for(h[w][y]=v(c(o).map(function($){return l[$][w]*l[$][y]})),g=0;g<o;g++)l[g][y]=l[g][y]-l[g][w]*h[w][y]}return[l,h]}return i}(),lstsq:function(){function v(i){i=t.copy(i);var l=i.length,o=t.identity(l);return t.arange(l-1,-1,-1).forEach(function(d){t.sliceAssign(o,{row:d},t.divide(t.slice(o,{row:d}),i[d][d])),t.sliceAssign(i,{row:d},t.divide(t.slice(i,{row:d}),i[d][d])),t.arange(d).forEach(function(h){var g=t.multiply(i[h][d],-1),w=t.slice(i,{row:h}),y=t.multiply(t.slice(i,{row:d}),g);t.sliceAssign(i,{row:h},t.add(w,y));var $=t.slice(o,{row:h}),m=t.multiply(t.slice(o,{row:d}),g);t.sliceAssign(o,{row:h},t.add($,m))})}),o}function c(i,l){var o=!1;l[0].length===void 0&&(l=l.map(function(x){return[x]}),o=!0);var d=t.QR(i),h=d[0],g=d[1],w=i[0].length,y=t.slice(h,{col:{end:w}}),$=t.slice(g,{row:{end:w}}),m=v($),N=t.transpose(y);N[0].length===void 0&&(N=[N]);var _=t.multiply(t.multiply(m,N),l);return _.length===void 0&&(_=[[_]]),o?_.map(function(x){return x[0]}):_}return c}(),jacobi:function(c){for(var i=1,l=c.length,o=t.identity(l,l),d=[],h,g,w,y,$,m,N,_;i===1;){for(m=c[0][1],y=0,$=1,g=0;g<l;g++)for(w=0;w<l;w++)g!=w&&m<a.abs(c[g][w])&&(m=a.abs(c[g][w]),y=g,$=w);for(c[y][y]===c[$][$]?N=c[y][$]>0?a.PI/4:-a.PI/4:N=a.atan(2*c[y][$]/(c[y][y]-c[$][$]))/2,_=t.identity(l,l),_[y][y]=a.cos(N),_[y][$]=-a.sin(N),_[$][y]=a.sin(N),_[$][$]=a.cos(N),o=t.multiply(o,_),h=t.multiply(t.multiply(t.inv(_),c),_),c=h,i=0,g=1;g<l;g++)for(w=1;w<l;w++)g!=w&&a.abs(c[g][w])>.001&&(i=1)}for(g=0;g<l;g++)d.push(c[g][g]);return[o,d]},rungekutta:function(c,i,l,o,d,h){var g,w,y,$,m;if(h===2)for(;o<=l;)g=i*c(o,d),w=i*c(o+i,d+g),y=d+(g+w)/2,d=y,o=o+i;if(h===4)for(;o<=l;)g=i*c(o,d),w=i*c(o+i/2,d+g/2),$=i*c(o+i/2,d+w/2),m=i*c(o+i,d+$),y=d+(g+2*w+2*$+m)/6,d=y,o=o+i;return d},romberg:function(c,i,l,o){for(var d=0,h=(l-i)/2,g=[],w=[],y=[],$,m,N,_,x;d<o/2;){for(x=c(i),N=i,_=0;N<=l;N=N+h,_++)g[_]=N;for($=g.length,N=1;N<$-1;N++)x+=(N%2!==0?4:2)*c(g[N]);x=h/3*(x+c(l)),y[d]=x,h/=2,d++}for(m=y.length,$=1;m!==1;){for(N=0;N<m-1;N++)w[N]=(a.pow(4,$)*y[N+1]-y[N])/(a.pow(4,$)-1);m=w.length,y=w,w=[],$++}return y},richardson:function(c,i,l,o){function d(b,I){for(var O=0,k=b.length,R;O<k;O++)b[O]===I&&(R=O);return R}for(var h=a.abs(l-c[d(c,l)+1]),g=0,w=[],y=[],$,m,N,_,x;o>=h;)$=d(c,l+o),m=d(c,l),w[g]=(i[$]-2*i[m]+i[2*m-$])/(o*o),o/=2,g++;for(_=w.length,N=1;_!=1;){for(x=0;x<_-1;x++)y[x]=(a.pow(4,N)*w[x+1]-w[x])/(a.pow(4,N)-1);_=y.length,w=y,y=[],N++}return w},simpson:function(c,i,l,o){for(var d=(l-i)/o,h=c(i),g=[],w=i,y=0,$=1,m;w<=l;w=w+d,y++)g[y]=w;for(m=g.length;$<m-1;$++)h+=($%2!==0?4:2)*c(g[$]);return d/3*(h+c(l))},hermite:function(c,i,l,o){for(var d=c.length,h=0,g=0,w=[],y=[],$=[],m=[],N;g<d;g++){for(w[g]=1,N=0;N<d;N++)g!=N&&(w[g]*=(o-c[N])/(c[g]-c[N]));for(y[g]=0,N=0;N<d;N++)g!=N&&(y[g]+=1/(c[g]-c[N]));$[g]=(1-2*(o-c[g])*y[g])*(w[g]*w[g]),m[g]=(o-c[g])*(w[g]*w[g]),h+=$[g]*i[g]+m[g]*l[g]}return h},lagrange:function(c,i,l){for(var o=0,d=0,h,g,w=c.length;d<w;d++){for(g=i[d],h=0;h<w;h++)d!=h&&(g*=(l-c[h])/(c[d]-c[h]));o+=g}return o},cubic_spline:function(c,i,l){for(var o=c.length,d=0,h,g=[],w=[],y=[],$=[],m=[],N=[],_=[];d<o-1;d++)m[d]=c[d+1]-c[d];for(y[0]=0,d=1;d<o-1;d++)y[d]=3/m[d]*(i[d+1]-i[d])-3/m[d-1]*(i[d]-i[d-1]);for(d=1;d<o-1;d++)g[d]=[],w[d]=[],g[d][d-1]=m[d-1],g[d][d]=2*(m[d-1]+m[d]),g[d][d+1]=m[d],w[d][0]=y[d];for($=t.multiply(t.inv(g),w),h=0;h<o-1;h++)N[h]=(i[h+1]-i[h])/m[h]-m[h]*($[h+1][0]+2*$[h][0])/3,_[h]=($[h+1][0]-$[h][0])/(3*m[h]);for(h=0;h<o&&!(c[h]>l);h++);return h-=1,i[h]+(l-c[h])*N[h]+t.sq(l-c[h])*$[h]+(l-c[h])*t.sq(l-c[h])*_[h]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(c){var i=c.length,l=c[0].length,o=0,d,h,g=[],w=[],y=[],$=[],m=[],N=[],_=[],x=[],b=[],I=[];for(o=0;o<i;o++)g[o]=t.sum(c[o])/l;for(o=0;o<l;o++)for(_[o]=[],d=0;d<i;d++)_[o][d]=c[d][o]-g[d];for(_=t.transpose(_),o=0;o<i;o++)for(x[o]=[],d=0;d<i;d++)x[o][d]=t.dot([_[o]],[_[d]])/(l-1);for(y=t.jacobi(x),b=y[0],w=y[1],I=t.transpose(b),o=0;o<w.length;o++)for(d=o;d<w.length;d++)w[o]<w[d]&&(h=w[o],w[o]=w[d],w[d]=h,$=I[o],I[o]=I[d],I[d]=$);for(N=t.transpose(_),o=0;o<i;o++)for(m[o]=[],d=0;d<N.length;d++)m[o][d]=t.dot([I[o]],[N[d]]);return[c,w,I,m]}}),function(v){for(var c=0;c<v.length;c++)(function(i){t.fn[i]=function(l,o){var d=this;return o?(setTimeout(function(){o.call(d,t.fn[i].call(d,l))},15),this):typeof t[i](this,l)=="number"?t[i](this,l):t(t[i](this,l))}})(v[c])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(n,Math),function(t,a){var s=[].slice,f=t.utils.isNumber,p=t.utils.isArray;t.extend({zscore:function(){var i=s.call(arguments);return f(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=s.call(arguments),l;return p(i[1])?(l=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-a.abs(l),0,1):t.normal.cdf(-a.abs(l),0,1)*2):i.length>2?(l=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-a.abs(l),0,1):t.normal.cdf(-a.abs(l),0,1)*2):(l=i[0],i[1]===1?t.normal.cdf(-a.abs(l),0,1):t.normal.cdf(-a.abs(l),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,l){return(i-this.mean())/this.stdev(l)},ztest:function(i,l,o){var d=a.abs(this.zscore(i,o));return l===1?t.normal.cdf(-d,0,1):t.normal.cdf(-d,0,1)*2}}),t.extend({tscore:function(){var i=s.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/a.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/a.sqrt(i[1].length))},ttest:function(){var i=s.call(arguments),l;return i.length===5?(l=a.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-l,i[3]-1):t.studentt.cdf(-l,i[3]-1)*2):f(i[1])?(l=a.abs(i[0]),i[2]==1?t.studentt.cdf(-l,i[1]-1):t.studentt.cdf(-l,i[1]-1)*2):(l=a.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-l,i[1].length-1):t.studentt.cdf(-l,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/a.sqrt(this.cols()))},ttest:function(i,l){return l===1?1-t.studentt.cdf(a.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-a.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=s.call(arguments),l,o,d,h,g,w,y,$;if(i.length===1){for(g=new Array(i[0].length),y=0;y<i[0].length;y++)g[y]=i[0][y];i=g}for(o=new Array,y=0;y<i.length;y++)o=o.concat(i[y]);for(d=t.mean(o),l=0,y=0;y<i.length;y++)l=l+i[y].length*a.pow(t.mean(i[y])-d,2);for(l/=i.length-1,w=0,y=0;y<i.length;y++)for(h=t.mean(i[y]),$=0;$<i[y].length;$++)w+=a.pow(i[y][$]-h,2);return w/=o.length-i.length,l/w},anovaftest:function(){var i=s.call(arguments),l,o,d,h;if(f(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var g=t.anovafscore(i);for(l=i.length-1,d=0,h=0;h<i.length;h++)d=d+i[h].length;return o=d-l-1,1-t.centralF.cdf(g,l,o)},ftest:function(i,l,o){return 1-t.centralF.cdf(i,l,o)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,l;for(l=0;l<this.length;l++)i=i+this[l].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=s.call(arguments),l,o,d,h,g;return f(i[0])?(l=i[0],o=i[1],d=i[2],h=i[3],g=i[4]):(l=t.mean(i[0]),o=t.mean(i[1]),d=i[0].length,h=i[1].length,g=i[2]),a.abs(l-o)/(g*a.sqrt((1/d+1/h)/2))},qtest:function(){var i=s.call(arguments),l;i.length===3?(l=i[0],i=i.slice(1)):i.length===7?(l=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(l=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var o=i[0],d=i[1];return 1-t.tukey.cdf(l,d,o-d)},tukeyhsd:function(i){for(var l=t.pooledstdev(i),o=i.map(function($){return t.mean($)}),d=i.reduce(function($,m){return $+m.length},0),h=[],g=0;g<i.length;++g)for(var w=g+1;w<i.length;++w){var y=t.qtest(o[g],o[w],i[g].length,i[w].length,l,d,i.length);h.push([[g,w],y])}return h}}),t.extend({normalci:function(){var i=s.call(arguments),l=new Array(2),o;return i.length===4?o=a.abs(t.normal.inv(i[1]/2,0,1)*i[2]/a.sqrt(i[3])):o=a.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/a.sqrt(i[2].length)),l[0]=i[0]-o,l[1]=i[0]+o,l},tci:function(){var i=s.call(arguments),l=new Array(2),o;return i.length===4?o=a.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/a.sqrt(i[3])):o=a.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/a.sqrt(i[2].length)),l[0]=i[0]-o,l[1]=i[0]+o,l},significant:function(i,l){return i<l}}),t.extend(t.fn,{normalci:function(i,l){return t.normalci(i,l,this.toArray())},tci:function(i,l){return t.tci(i,l,this.toArray())}});function v(c,i,l,o){if(c>1||l>1||c<=0||l<=0)throw new Error("Proportions should be greater than 0 and less than 1");var d=(c*i+l*o)/(i+o),h=a.sqrt(d*(1-d)*(1/i+1/o));return(c-l)/h}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,l,o,d){var h=v(i,l,o,d);return t.ztest(h,1)},twoSidedDifferenceOfProportions:function(i,l,o,d){var h=v(i,l,o,d);return t.ztest(h,2)}})}(n,Math),n.models=function(){function t(v){var c=v[0].length,i=n.arange(c).map(function(l){var o=n.arange(c).filter(function(d){return d!==l});return a(n.col(v,l).map(function(d){return d[0]}),n.col(v,o))});return i}function a(v,c){var i=v.length,l=c[0].length-1,o=i-l-1,d=n.lstsq(c,v),h=n.multiply(c,d.map(function(_){return[_]})).map(function(_){return _[0]}),g=n.subtract(v,h),w=n.mean(v),y=n.sum(h.map(function(_){return Math.pow(_-w,2)})),$=n.sum(v.map(function(_,x){return Math.pow(_-h[x],2)})),m=y+$,N=y/m;return{exog:c,endog:v,nobs:i,df_model:l,df_resid:o,coef:d,predict:h,resid:g,ybar:w,SST:m,SSE:y,SSR:$,R2:N}}function s(v){var c=t(v.exog),i=Math.sqrt(v.SSR/v.df_resid),l=c.map(function(w){var y=w.SST,$=w.R2;return i/Math.sqrt(y*(1-$))}),o=v.coef.map(function(w,y){return(w-0)/l[y]}),d=o.map(function(w){var y=n.studentt.cdf(w,v.df_resid);return(y>.5?1-y:y)*2}),h=n.studentt.inv(.975,v.df_resid),g=v.coef.map(function(w,y){var $=h*l[y];return[w-$,w+$]});return{se:l,t:o,p:d,sigmaHat:i,interval95:g}}function f(v){var c=v.R2/v.df_model/((1-v.R2)/v.df_resid),i=function(o,d,h){return n.beta.cdf(o/(h/d+o),d/2,h/2)},l=1-i(c,v.df_model,v.df_resid);return{F_statistic:c,pvalue:l}}function p(v,c){var i=a(v,c),l=s(i),o=f(i),d=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=l,i.f=o,i.adjust_R2=d,i}return{ols:p}}(),n.extend({buildxmatrix:function(){for(var a=new Array(arguments.length),s=0;s<arguments.length;s++){var f=[1];a[s]=f.concat(arguments[s])}return n(a)},builddxmatrix:function(){for(var a=new Array(arguments[0].length),s=0;s<arguments[0].length;s++){var f=[1];a[s]=f.concat(arguments[0][s])}return n(a)},buildjxmatrix:function(a){for(var s=new Array(a.length),f=0;f<a.length;f++)s[f]=a[f];return n.builddxmatrix(s)},buildymatrix:function(a){return n(a).transpose()},buildjymatrix:function(a){return a.transpose()},matrixmult:function(a,s){var f,p,v,c,i;if(a.cols()==s.rows()){if(s.rows()>1){for(c=[],f=0;f<a.rows();f++)for(c[f]=[],p=0;p<s.cols();p++){for(i=0,v=0;v<a.cols();v++)i+=a.toArray()[f][v]*s.toArray()[v][p];c[f][p]=i}return n(c)}for(c=[],f=0;f<a.rows();f++)for(c[f]=[],p=0;p<s.cols();p++){for(i=0,v=0;v<a.cols();v++)i+=a.toArray()[f][v]*s.toArray()[p];c[f][p]=i}return n(c)}},regress:function(a,s){var f=n.xtranspxinv(a),p=a.transpose(),v=n.matrixmult(n(f),p);return n.matrixmult(v,s)},regresst:function(a,s,f){var p=n.regress(a,s),v={};v.anova={};var c=n.jMatYBar(a,p);v.yBar=c;var i=s.mean();v.anova.residuals=n.residuals(s,c),v.anova.ssr=n.ssr(c,i),v.anova.msr=v.anova.ssr/(a[0].length-1),v.anova.sse=n.sse(s,c),v.anova.mse=v.anova.sse/(s.length-(a[0].length-1)-1),v.anova.sst=n.sst(s,i),v.anova.mst=v.anova.sst/(s.length-1),v.anova.r2=1-v.anova.sse/v.anova.sst,v.anova.r2<0&&(v.anova.r2=0),v.anova.fratio=v.anova.msr/v.anova.mse,v.anova.pvalue=n.anovaftest(v.anova.fratio,a[0].length-1,s.length-(a[0].length-1)-1),v.anova.rmse=Math.sqrt(v.anova.mse),v.anova.r2adj=1-v.anova.mse/v.anova.mst,v.anova.r2adj<0&&(v.anova.r2adj=0),v.stats=new Array(a[0].length);for(var l=n.xtranspxinv(a),o,d,h,g=0;g<p.length;g++)o=Math.sqrt(v.anova.mse*Math.abs(l[g][g])),d=Math.abs(p[g]/o),h=n.ttest(d,s.length-a[0].length-1,f),v.stats[g]=[p[g],o,d,h];return v.regress=p,v},xtranspx:function(a){return n.matrixmult(a.transpose(),a)},xtranspxinv:function(a){var s=n.matrixmult(a.transpose(),a),f=n.inv(s);return f},jMatYBar:function(a,s){var f=n.matrixmult(a,s);return new n(f)},residuals:function(a,s){return n.matrixsubtract(a,s)},ssr:function(a,s){for(var f=0,p=0;p<a.length;p++)f+=Math.pow(a[p]-s,2);return f},sse:function(a,s){for(var f=0,p=0;p<a.length;p++)f+=Math.pow(a[p]-s[p],2);return f},sst:function(a,s){for(var f=0,p=0;p<a.length;p++)f+=Math.pow(a[p]-s,2);return f},matrixsubtract:function(a,s){for(var f=new Array(a.length),p=0;p<a.length;p++){f[p]=new Array(a[p].length);for(var v=0;v<a[p].length;v++)f[p][v]=a[p][v]-s[p][v]}return n(f)}}),n.jStat=n,n})})(z4);var oe=z4.exports;/**
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
*/var Iy=typeof Object.defineProperty=="function"?Object.defineProperty:null,Ey=Iy;/**
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
*/var jy=Ey;function Py(){try{return jy({},"x",{}),!0}catch{return!1}}var Ay=Py;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oy=Object.defineProperty,ky=Oy;/**
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
*/function Ly(e){return typeof e=="number"}var D4=Ly;/**
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
*/function Cy(e){return e[0]==="-"}function Gv(e){var r="",n;for(n=0;n<e;n++)r+="0";return r}function Sy(e,r,n){var t=!1,a=r-e.length;return a<0||(Cy(e)&&(t=!0,e=e.substr(1)),e=n?e+Gv(a):Gv(a)+e,t&&(e="-"+e)),e}var G4=Sy;/**
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
*/var Fy=D4,qv=G4,Ty=String.prototype.toLowerCase,Bv=String.prototype.toUpperCase;function Ry(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;case"d":case"i":case"u":default:r=10;break}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!Fy(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&(e.specifier==="u"||r!==10)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=qv(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),!t&&!e.precision?n="":e.precision&&(n=qv(n,e.precision,e.padRight)),e.sign&&(n=e.sign+n)),r===16&&(e.alternate&&(n="0x"+n),n=e.specifier===Bv.call(e.specifier)?Bv.call(n):Ty.call(n)),r===8&&e.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var Hy=Ry;/**
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
*/var Gy=D4,qy=Math.abs,By=String.prototype.toLowerCase,Uv=String.prototype.toUpperCase,Zn=String.prototype.replace,Uy=/e\+(\d)$/,Wy=/e-(\d)$/,Vy=/^(\d+)$/,My=/^(\d+)e/,Xy=/\.0$/,Ky=/\.0*e/,Qy=/(\..*[^0])0*e/;function Yy(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!Gy(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":qy(t)<1e-4?(r=e.precision,r>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=Zn.call(n,Qy,"$1e"),n=Zn.call(n,Ky,"e"),n=Zn.call(n,Xy,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=Zn.call(n,Uy,"e+0$1"),n=Zn.call(n,Wy,"e-0$1"),e.alternate&&(n=Zn.call(n,Vy,"$1."),n=Zn.call(n,My,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===Uv.call(e.specifier)?Uv.call(n):By.call(n),n}var Zy=Yy;/**
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
*/function Wv(e){var r="",n;for(n=0;n<e;n++)r+=" ";return r}function Jy(e,r,n){var t=r-e.length;return t<0||(e=n?e+Wv(t):Wv(t)+e),e}var e$=Jy;/**
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
*/var r$=Hy,n$=Dy,t$=Zy,a$=e$,i$=G4,l$=String.fromCharCode,s$=Array.isArray;function rl(e){return e!==e}function o$(e){var r={};return r.specifier=e.specifier,r.precision=e.precision===void 0?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function u$(e){var r,n,t,a,s,f,p,v,c;if(!s$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",p=1,v=0;v<e.length;v++)if(t=e[v],n$(t))f+=t;else{if(r=t.precision!==void 0,t=o$(t),!t.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(a=n.charAt(c),a){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(t.width==="*"){if(t.width=parseInt(arguments[p],10),p+=1,rl(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&t.precision==="*"){if(t.precision=parseInt(arguments[p],10),p+=1,rl(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=r$(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!rl(t.arg)){if(s=parseInt(t.arg,10),s<0||s>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=rl(s)?String(t.arg):l$(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=t$(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i$(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=a$(t.arg,t.width,t.padRight)),f+=t.arg||"",p+=1}return f}var c$=u$;/**
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
*/var nl=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function d$(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return e[4]==="."&&e[5]===void 0&&(r.precision="1"),r}function p$(e){var r,n,t,a;for(n=[],a=0,t=nl.exec(e);t;)r=e.slice(a,nl.lastIndex-t[0].length),r.length&&n.push(r),n.push(d$(t)),a=nl.lastIndex,t=nl.exec(e);return r=e.slice(a),r.length&&n.push(r),n}var m$=p$;/**
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
*/var w$=v$,N$=g$,x$=$$;function q4(e){var r,n;if(!x$(e))throw new TypeError(q4("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[N$(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return w$.apply(null,r)}var _$=q4;/**
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
*/var b$=_$,Qn=b$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv=Qn,ia=Object.prototype,Mv=ia.toString,Xv=ia.__defineGetter__,Kv=ia.__defineSetter__,I$=ia.__lookupGetter__,E$=ia.__lookupSetter__;function j$(e,r,n){var t,a,s,f;if(typeof e!="object"||e===null||Mv.call(e)==="[object Array]")throw new TypeError(Vv("invalid argument. First argument must be an object. Value: `%s`.",e));if(typeof n!="object"||n===null||Mv.call(n)==="[object Array]")throw new TypeError(Vv("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(a="value"in n,a&&(I$.call(e,r)||E$.call(e,r)?(t=e.__proto__,e.__proto__=ia,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),s="get"in n,f="set"in n,a&&(s||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&Xv&&Xv.call(e,r,n.get),f&&Kv&&Kv.call(e,r,n.set),e}var P$=j$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A$=Ay,O$=ky,k$=P$,zc;A$()?zc=O$:zc=k$;var B4=zc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L$=B4;function C$(e,r,n){L$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var S$=C$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F$=S$,M=F$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function T$(e){return typeof e=="number"}var U4=T$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function R$(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var H$=R$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z$=H$,D$=z$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G$=D$,q$=G$();function B$(){return q$&&typeof Symbol.toStringTag=="symbol"}var U$=B$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W$=U$,ho=W$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V$=Object.prototype.toString,W4=V$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M$=W4;function X$(e){return M$.call(e)}var K$=X$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var J$=Z$,go=J$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qv=tw,aw=typeof Qv=="function"?Qv.toStringTag:"",iw=aw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lw=go,_a=iw,n0=W4;function sw(e){var r,n,t;if(e==null)return n0.call(e);n=e[_a],r=lw(e,_a);try{e[_a]=void 0}catch{return n0.call(e)}return t=n0.call(e),r?e[_a]=n:delete e[_a],t}var ow=sw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uw=ho,cw=K$,fw=ow,Dc;uw()?Dc=fw:Dc=cw;var xr=Dc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dw=vw,t1=dw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pw=t1,mw=pw.prototype.toString,hw=mw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ww=ho,Nw=xr,xw=t1,_w=$w,bw=ww();function Iw(e){return typeof e=="object"?e instanceof xw?!0:bw?_w(e):Nw(e)==="[object Number]":!1}var V4=Iw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ew=U4,jw=V4;function Pw(e){return Ew(e)||jw(e)}var Aw=Pw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M4=M,a1=Aw,Ow=U4,kw=V4;M4(a1,"isPrimitive",Ow);M4(a1,"isObject",kw);var yt=a1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lw=Number.POSITIVE_INFINITY,q=Lw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cw=t1,Sw=Cw.NEGATIVE_INFINITY,Z=Sw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fw=Math.floor,Tw=Fw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rw=Tw,qe=Rw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hw=qe;function zw(e){return Hw(e)===e}var Dw=zw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gw=Dw,be=Gw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qw=q,Bw=Z,Uw=be;function Ww(e){return e<qw&&e>Bw&&Uw(e)}var X4=Ww;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vw=yt.isPrimitive,Mw=X4;function Xw(e){return Vw(e)&&Mw(e)}var K4=Xw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kw=yt.isObject,Qw=X4;function Yw(e){return Kw(e)&&Qw(e.valueOf())}var Q4=Yw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Y4=M,i1=rN,nN=K4,tN=Q4;Y4(i1,"isPrimitive",nN);Y4(i1,"isObject",tN);var yo=i1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aN=yo.isPrimitive;function iN(e){return aN(e)&&e>=0}var Z4=iN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lN=yo.isObject;function sN(e){return lN(e)&&e.valueOf()>=0}var J4=sN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oN=Z4,uN=J4;function cN(e){return oN(e)||uN(e)}var fN=cN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e5=M,l1=fN,vN=Z4,dN=J4;e5(l1,"isPrimitive",vN);e5(l1,"isObject",dN);var pN=l1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var NN=wN,xN=NN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _N=4294967295,bN=_N;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IN=be,EN=bN;function jN(e){return e!=null&&typeof e!="function"&&typeof e.length=="number"&&IN(e.length)&&e.length>=0&&e.length<=EN}var PN=jN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AN=PN,ON=AN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kN=ON,LN=Qn;function CN(e){if(typeof e!="function")throw new TypeError(LN("invalid argument. Must provide a function. Value: `%s`.",e));return r;function r(n){var t,a;if(!kN(n)||(t=n.length,t===0))return!1;for(a=0;a<t;a++)if(e(n[a])===!1)return!1;return!0}}var SN=CN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FN=SN,TN=FN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r5=M,s1=TN,o1=yt,RN=s1(o1.isPrimitive),HN=s1(o1.isObject),u1=s1(o1);r5(u1,"primitives",RN);r5(u1,"objects",HN);var zN=u1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DN=B4;function GN(e,r,n){DN(e,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}var qN=GN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BN=qN,UN=BN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WN=/./,VN=WN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ex=JN;function rx(e){try{return ex.call(e),!0}catch{return!1}}var nx=rx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tx=ho,ax=xr,ix=YN,lx=nx,sx=tx();function ox(e){return typeof e=="object"?e instanceof ix?!0:sx?lx(e):ax(e)==="[object Boolean]":!1}var t5=ox;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ux=n5,cx=t5;function fx(e){return ux(e)||cx(e)}var vx=fx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a5=M,c1=vx,dx=n5,px=t5;a5(c1,"isPrimitive",dx);a5(c1,"isObject",px);var f1=c1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mx(){return new Function("return this;")()}var hx=mx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gx=typeof self=="object"?self:null,yx=gx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $x=typeof window=="object"?window:null,wx=$x;/**
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
*/var Nx=typeof globalThis=="object"?globalThis:null,xx=Nx;/**
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
*/var _x=f1.isPrimitive,bx=Qn,Ix=hx,Yv=yx,Zv=wx,Jv=xx;function Ex(e){if(arguments.length){if(!_x(e))throw new TypeError(bx("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ix()}if(Jv)return Jv;if(Yv)return Yv;if(Zv)return Zv;throw new Error("unexpected error. Unable to resolve global object.")}var jx=Ex;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Px=jx,ed=Px(),Ax=ed.document&&ed.document.childNodes,Ox=Ax;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kx=Int8Array,Lx=kx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cx=VN,Sx=Ox,Fx=Lx;function Tx(){return typeof Cx=="function"||typeof Fx=="object"||typeof Sx=="function"}var Rx=Tx;/**
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
*/function Hx(){return/^\s*function\s*([^(]*)/i}var i5=Hx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zx=i5,Dx=zx(),Gx=Dx;/**
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
*/var qx=M,l5=i5,Bx=Gx;qx(l5,"REGEXP",Bx);var Ux=l5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wx=xr,Gc;function Vx(e){return Wx(e)==="[object Array]"}Array.isArray?Gc=Array.isArray:Gc=Vx;var Mx=Gc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xx=Mx,s5=Xx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kx=s5,Qx=Qn;function Yx(e){if(typeof e!="function")throw new TypeError(Qx("invalid argument. Must provide a function. Value: `%s`.",e));return r;function r(n){var t,a;if(!Kx(n)||(t=n.length,t===0))return!1;for(a=0;a<t;a++)if(e(n[a])===!1)return!1;return!0}}var Zx=Yx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jx=Zx,e_=Jx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r_(e){return e!==null&&typeof e=="object"}var n_=r_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t_=M,a_=e_,v1=n_,i_=a_(v1);t_(v1,"isObjectLikeArray",i_);var l_=v1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s_=l_;function o_(e){return s_(e)&&(e._isBuffer||e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e))}var u_=o_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c_=u_,f_=c_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v_=xr,d_=Ux.REGEXP,p_=f_;function m_(e){var r,n,t;if(n=v_(e).slice(8,-1),(n==="Object"||n==="Error")&&e.constructor){if(t=e.constructor,typeof t.name=="string")return t.name;if(r=d_.exec(t.toString()),r)return r[1]}return p_(e)?"Buffer":n}var h_=m_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g_=h_,o5=g_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y_=o5;function $_(e){var r;return e===null?"null":(r=typeof e,r==="object"?y_(e).toLowerCase():r)}var w_=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N_=o5;function x_(e){return N_(e).toLowerCase()}var __=x_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b_=Rx,I_=w_,E_=__,j_=b_()?E_:I_,P_=j_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A_=P_;function O_(e){return A_(e)==="function"}var k_=O_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L_=k_,d1=L_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function C_(e){return typeof e=="string"}var u5=C_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S_=String.prototype.valueOf,F_=S_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T_=F_;function R_(e){try{return T_.call(e),!0}catch{return!1}}var H_=R_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z_=ho,D_=xr,G_=H_,q_=z_();function B_(e){return typeof e=="object"?e instanceof String?!0:q_?G_(e):D_(e)==="[object String]":!1}var c5=B_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U_=u5,W_=c5;function V_(e){return U_(e)||W_(e)}var M_=V_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f5=M,p1=M_,X_=u5,K_=c5;f5(p1,"isPrimitive",X_);f5(p1,"isObject",K_);var v5=p1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Q_(e){return e!==e}var Y_=Q_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z_=Y_,S=Z_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J_=yt.isPrimitive,eb=S;function rb(e){return J_(e)&&eb(e)}var d5=rb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nb=yt.isObject,tb=S;function ab(e){return nb(e)&&tb(e.valueOf())}var p5=ab;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ib=d5,lb=p5;function sb(e){return ib(e)||lb(e)}var ob=sb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m5=M,m1=ob,ub=d5,cb=p5;m5(m1,"isPrimitive",ub);m5(m1,"isObject",cb);var h5=m1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fb=q;function vb(e){return e===0&&1/e===fb}var db=vb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pb=db,$o=pb;/**
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
*/var mb=S,hb=$o;function gb(e,r,n){var t,a,s,f;if(e<=0)return NaN;if(e===1||n===0)return r[0];for(n<0?a=(1-e)*n:a=0,t=r[a],f=1;f<e;f++){if(a+=n,s=r[a],mb(s))return s;(s>t||s===t&&hb(s))&&(t=s)}return t}var yb=gb;/**
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
*/var $b=S,wb=$o;function Nb(e,r,n,t){var a,s,f,p;if(e<=0)return NaN;if(e===1||n===0)return r[t];for(s=t,a=r[s],p=1;p<e;p++){if(s+=n,f=r[s],$b(f))return f;(f>a||f===a&&wb(f))&&(a=f)}return a}var xb=Nb;/**
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
*/var _b=M,g5=yb,bb=xb;_b(g5,"ndarray",bb);var Ib=g5;/**
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
*/var Eb=Ib,jb=Eb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pb=q,Ab=Z;function Ob(e){return e===Pb||e===Ab}var kb=Ob;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lb=kb,Xe=Lb;/**
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
*/function Cb(e){return Math.abs(e)}var Sb=Cb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fb=Sb,K=Fb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tb=xr,Rb=typeof Uint32Array=="function";function Hb(e){return Rb&&e instanceof Uint32Array||Tb(e)==="[object Uint32Array]"}var zb=Hb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Db=zb,Gb=Db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qb=4294967295,Bb=qb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ub=typeof Uint32Array=="function"?Uint32Array:null,Wb=Ub;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vb=Gb,t0=Bb,rd=Wb;function Mb(){var e,r;if(typeof rd!="function")return!1;try{r=[1,3.14,-3.14,t0+1,t0+2],r=new rd(r),e=Vb(r)&&r[0]===1&&r[1]===3&&r[2]===t0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var Xb=Mb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kb=Xb,Qb=Kb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yb=typeof Uint32Array=="function"?Uint32Array:void 0,Zb=Yb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Jb(){throw new Error("not implemented")}var eI=Jb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rI=Qb,nI=Zb,tI=eI,qc;rI()?qc=nI:qc=tI;var la=qc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aI=xr,iI=typeof Float64Array=="function";function lI(e){return iI&&e instanceof Float64Array||aI(e)==="[object Float64Array]"}var sI=lI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oI=sI,uI=oI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cI=typeof Float64Array=="function"?Float64Array:null,fI=cI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vI=uI,nd=fI;function dI(){var e,r;if(typeof nd!="function")return!1;try{r=new nd([1,3.14,-3.14,NaN]),e=vI(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch{e=!1}return e}var pI=dI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mI=pI,hI=mI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gI=typeof Float64Array=="function"?Float64Array:void 0,yI=gI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function $I(){throw new Error("not implemented")}var wI=$I;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NI=hI,xI=yI,_I=wI,Bc;NI()?Bc=xI:Bc=_I;var $t=Bc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bI=xr,II=typeof Uint8Array=="function";function EI(e){return II&&e instanceof Uint8Array||bI(e)==="[object Uint8Array]"}var jI=EI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PI=jI,AI=PI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OI=255,kI=OI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LI=typeof Uint8Array=="function"?Uint8Array:null,CI=LI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SI=AI,a0=kI,td=CI;function FI(){var e,r;if(typeof td!="function")return!1;try{r=[1,3.14,-3.14,a0+1,a0+2],r=new td(r),e=SI(r)&&r[0]===1&&r[1]===3&&r[2]===a0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var TI=FI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RI=TI,HI=RI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zI=typeof Uint8Array=="function"?Uint8Array:void 0,DI=zI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function GI(){throw new Error("not implemented")}var qI=GI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BI=HI,UI=DI,WI=qI,Uc;BI()?Uc=UI:Uc=WI;var VI=Uc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MI=xr,XI=typeof Uint16Array=="function";function KI(e){return XI&&e instanceof Uint16Array||MI(e)==="[object Uint16Array]"}var QI=KI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YI=QI,ZI=YI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JI=65535,eE=JI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rE=typeof Uint16Array=="function"?Uint16Array:null,nE=rE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tE=ZI,i0=eE,ad=nE;function aE(){var e,r;if(typeof ad!="function")return!1;try{r=[1,3.14,-3.14,i0+1,i0+2],r=new ad(r),e=tE(r)&&r[0]===1&&r[1]===3&&r[2]===i0-2&&r[3]===0&&r[4]===1}catch{e=!1}return e}var iE=aE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lE=iE,sE=lE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oE=typeof Uint16Array=="function"?Uint16Array:void 0,uE=oE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function cE(){throw new Error("not implemented")}var fE=cE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vE=sE,dE=uE,pE=fE,Wc;vE()?Wc=dE:Wc=pE;var mE=Wc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hE=VI,gE=mE,yE={uint16:gE,uint8:hE},$E=yE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var id=$E,y5;function wE(){var e,r;return e=new id.uint16(1),e[0]=4660,r=new id.uint8(e.buffer),r[0]===52}y5=wE();var NE=y5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xE=NE,sa=xE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _E=sa,Vc;_E===!0?Vc=1:Vc=0;var bE=Vc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IE=la,EE=$t,jE=bE,$5=new EE(1),PE=new IE($5.buffer);function AE(e){return $5[0]=e,PE[jE]}var OE=AE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kE=OE,ee=kE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LE=sa,Mc;LE===!0?Mc=1:Mc=0;var CE=Mc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SE=la,FE=$t,TE=CE,Xc=new FE(1),RE=new SE(Xc.buffer);function HE(e,r){return Xc[0]=e,RE[TE]=r>>>0,Xc[0]}var zE=HE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DE=zE,Le=DE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GE=1023,Ie=GE;/**
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
*/function qE(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}var BE=qE;/**
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
*/function UE(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}var WE=UE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ld=ee,VE=Le,ME=S,XE=Ie,KE=Z,QE=BE,YE=WE,tl=.6931471803691238,al=19082149292705877e-26,ZE=0x40000000000000,JE=.3333333333333333,sd=1048575,ej=2146435072,rj=1048576,nj=1072693248;function tj(e){var r,n,t,a,s,f,p,v,c,i,l,o;return e===0?KE:ME(e)||e<0?NaN:(n=ld(e),s=0,n<rj&&(s-=54,e*=ZE,n=ld(e)),n>=ej?e+e:(s+=(n>>20)-XE|0,n&=sd,v=n+614244&1048576|0,e=VE(e,n|v^nj),s+=v>>20|0,p=e-1,(sd&2+n)<3?p===0?s===0?0:s*tl+s*al:(f=p*p*(.5-JE*p),s===0?p-f:s*tl-(f-s*al-p)):(i=p/(2+p),o=i*i,v=n-398458|0,l=o*o,c=440401-n|0,a=l*QE(l),t=o*YE(l),v|=c,f=t+a,v>0?(r=.5*p*p,s===0?p-(r-i*(r+f)):s*tl-(r-(i*(r+f)+s*al)-p)):s===0?p-i*(p-f):s*tl-(i*(p-f)-s*al-p))))}var aj=tj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ij=aj,Ce=ij;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lj=Math.ceil,sj=lj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oj=sj,uj=oj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cj=qe,fj=uj;function vj(e){return e<0?fj(e):cj(e)}var dj=vj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pj=dj,h1=pj;/**
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
*/function mj(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}var hj=mj;/**
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
*/function gj(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}var yj=gj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $j=hj,wj=yj;function Nj(e,r){var n,t,a,s;return s=e*e,a=s*s,t=s*$j(s),t+=a*a*wj(s),n=.5*s,a=1-n,a+(1-a-n+(s*t-e*r))}var xj=Nj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _j=xj,w5=_j;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var od=-.16666666666666632,bj=.00833333333332249,Ij=-.0001984126982985795,Ej=27557313707070068e-22,jj=-25050760253406863e-24,Pj=158969099521155e-24;function Aj(e,r){var n,t,a,s;return s=e*e,a=s*s,n=bj+s*(Ij+s*Ej)+s*a*(jj+s*Pj),t=s*e,r===0?e+t*(od+s*n):e-(s*(.5*r-t*n)-r-t*od)}var Oj=Aj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kj=Oj,N5=kj;/**
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
*/var Lj=2147483647,ve=Lj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cj=2146435072,g1=Cj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sj=1048575,Yn=Sj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fj=sa,Kc;Fj===!0?Kc=0:Kc=1;var Tj=Kc;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rj=la,Hj=$t,zj=Tj,x5=new Hj(1),Dj=new Rj(x5.buffer);function Gj(e){return x5[0]=e,Dj[zj]}var qj=Gj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bj=qj,Uj=Bj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wj=sa,_5,Qc,Yc;Wj===!0?(Qc=1,Yc=0):(Qc=0,Yc=1);_5={HIGH:Qc,LOW:Yc};var Vj=_5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mj=la,Xj=$t,b5=Vj,I5=new Xj(1),ud=new Mj(I5.buffer),Kj=b5.HIGH,Qj=b5.LOW;function Yj(e,r){return ud[Kj]=e,ud[Qj]=r,I5[0]}var Zj=Yj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jj=Zj,wo=Jj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eP=1023,rP=eP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nP=-1023,tP=nP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aP=-1074,iP=aP;/**
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
*/var lP=2147483648,sP=lP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oP=sa,E5,Zc,Jc;oP===!0?(Zc=1,Jc=0):(Zc=0,Jc=1);E5={HIGH:Zc,LOW:Jc};var uP=E5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cP=la,fP=$t,j5=uP,P5=new fP(1),cd=new cP(P5.buffer),vP=j5.HIGH,dP=j5.LOW;function pP(e,r,n,t){return P5[0]=e,r[t]=cd[vP],r[t+n]=cd[dP],r}var A5=pP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mP=A5;function hP(e){return mP(e,[0,0],1,0)}var gP=hP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yP=M,O5=gP,$P=A5;yP(O5,"assign",$P);var rn=O5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wP=sP,NP=ve,xP=rn,_P=ee,bP=wo,l0=[0,0];function IP(e,r){var n,t;return xP.assign(e,l0,1,0),n=l0[0],n&=NP,t=_P(r),t&=wP,n|=t,bP(n,l0[1])}var EP=IP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jP=EP,Sr=jP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PP=22250738585072014e-324,Li=PP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AP=Li,OP=Xe,kP=S,LP=K,CP=4503599627370496;function SP(e,r,n,t){return kP(e)||OP(e)?(r[t]=e,r[t+n]=0,r):e!==0&&LP(e)<AP?(r[t]=e*CP,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}var k5=SP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FP=k5;function TP(e){return FP(e,[0,0],1,0)}var RP=TP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HP=M,L5=RP,zP=k5;HP(L5,"assign",zP);var DP=L5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GP=ee,qP=g1,BP=Ie;function UP(e){var r=GP(e);return r=(r&qP)>>>20,r-BP|0}var WP=UP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VP=WP,MP=VP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XP=q,KP=Z,QP=Ie,YP=rP,ZP=tP,JP=iP,eA=S,rA=Xe,nA=Sr,tA=DP.assign,aA=MP,iA=rn,lA=wo,sA=2220446049250313e-31,oA=2148532223,s0=[0,0],o0=[0,0];function uA(e,r){var n,t;return r===0||e===0||eA(e)||rA(e)?e:(tA(e,s0,1,0),e=s0[0],r+=s0[1],r+=aA(e),r<JP?nA(0,e):r>YP?e<0?KP:XP:(r<=ZP?(r+=52,t=sA):t=1,iA.assign(e,o0,1,0),n=o0[0],n&=oA,n|=r+QP<<20,t*lA(n,o0[1])))}var cA=uA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fA=cA,nn=fA;/**
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
*/function vA(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}var dA=vA;/**
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
*/var pA=dA,mA=pA;/**
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
*/var hA=mA;function gA(e){return hA(0,e)}var yA=gA;/**
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
*/var $A=yA,wA=$A;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var NA=qe,il=nn,No=wA,C5=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],xA=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],u0=16777216,c0=5960464477539063e-23,ll=No(20),fd=No(20),sl=No(20),Pe=No(20);function S5(e,r,n,t,a,s,f,p,v){var c,i,l,o,d,h,g,w,y;for(o=s,y=t[n],w=n,d=0;w>0;d++)i=c0*y|0,Pe[d]=y-u0*i|0,y=t[w-1]+i,w-=1;if(y=il(y,a),y-=8*NA(y*.125),g=y|0,y-=g,l=0,a>0?(d=Pe[n-1]>>24-a,g+=d,Pe[n-1]-=d<<24-a,l=Pe[n-1]>>23-a):a===0?l=Pe[n-1]>>23:y>=.5&&(l=2),l>0){for(g+=1,c=0,d=0;d<n;d++)w=Pe[d],c===0?w!==0&&(c=1,Pe[d]=16777216-w):Pe[d]=16777215-w;if(a>0)switch(a){case 1:Pe[n-1]&=8388607;break;case 2:Pe[n-1]&=4194303;break}l===2&&(y=1-y,c!==0&&(y-=il(1,a)))}if(y===0){for(w=0,d=n-1;d>=s;d--)w|=Pe[d];if(w===0){for(h=1;Pe[s-h]===0;h++);for(d=n+1;d<=n+h;d++){for(v[p+d]=C5[f+d],i=0,w=0;w<=p;w++)i+=e[w]*v[p+(d-w)];t[d]=i}return n+=h,S5(e,r,n,t,a,s,f,p,v)}}if(y===0)for(n-=1,a-=24;Pe[n]===0;)n-=1,a-=24;else y=il(y,-a),y>=u0?(i=c0*y|0,Pe[n]=y-u0*i|0,n+=1,a+=24,Pe[n]=i):Pe[n]=y|0;for(i=il(1,a),d=n;d>=0;d--)t[d]=i*Pe[d],i*=c0;for(d=n;d>=0;d--){for(i=0,h=0;h<=o&&h<=n-d;h++)i+=xA[h]*t[d+h];sl[n-d]=i}for(i=0,d=n;d>=0;d--)i+=sl[d];for(l===0?r[0]=i:r[0]=-i,i=sl[0]-i,d=1;d<=n;d++)i+=sl[d];return l===0?r[1]=i:r[1]=-i,g&7}function _A(e,r,n,t){var a,s,f,p,v,c,i,l,o;for(s=4,p=t-1,f=(n-3)/24|0,f<0&&(f=0),c=n-24*(f+1),l=f-p,o=p+s,i=0;i<=o;i++)l<0?ll[i]=0:ll[i]=C5[l],l+=1;for(i=0;i<=s;i++){for(a=0,l=0;l<=p;l++)a+=e[l]*ll[p+(i-l)];fd[i]=a}return v=s,S5(e,r,v,fd,c,s,f,p,ll)}var bA=_A;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IA=Math.round,EA=IA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jA=EA,PA=jA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var AA=PA,vd=ee,OA=.6366197723675814,kA=1.5707963267341256,LA=6077100506506192e-26,CA=6077100506303966e-26,SA=20222662487959506e-37,FA=20222662487111665e-37,TA=84784276603689e-45,dd=2047;function RA(e,r,n){var t,a,s,f,p,v,c;return a=AA(e*OA),f=e-a*kA,p=a*LA,c=r>>20|0,n[0]=f-p,t=vd(n[0]),v=c-(t>>20&dd),v>16&&(s=f,p=a*CA,f=s-p,p=a*SA-(s-f-p),n[0]=f-p,t=vd(n[0]),v=c-(t>>20&dd),v>49&&(s=f,p=a*FA,f=s-p,p=a*TA-(s-f-p),n[0]=f-p)),n[1]=f-n[0]-p,a}var HA=RA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zA=ve,DA=g1,GA=Yn,qA=ee,BA=Uj,UA=wo,WA=bA,ol=HA,VA=0,MA=16777216,ln=1.5707963267341256,lt=6077100506506192e-26,ul=2*lt,cl=3*lt,fl=4*lt,XA=598523,KA=1072243195,QA=1073928572,YA=1074752122,ZA=1074977148,JA=1075183036,eO=1075388923,rO=1075594811,nO=1094263291,ba=[0,0,0],Ia=[0,0];function tO(e,r){var n,t,a,s,f,p,v,c;if(a=qA(e),s=a&zA|0,s<=KA)return r[0]=e,r[1]=0,0;if(s<=YA)return(s&GA)===XA?ol(e,s,r):s<=QA?e>0?(c=e-ln,r[0]=c-lt,r[1]=c-r[0]-lt,1):(c=e+ln,r[0]=c+lt,r[1]=c-r[0]+lt,-1):e>0?(c=e-2*ln,r[0]=c-ul,r[1]=c-r[0]-ul,2):(c=e+2*ln,r[0]=c+ul,r[1]=c-r[0]+ul,-2);if(s<=rO)return s<=JA?s===ZA?ol(e,s,r):e>0?(c=e-3*ln,r[0]=c-cl,r[1]=c-r[0]-cl,3):(c=e+3*ln,r[0]=c+cl,r[1]=c-r[0]+cl,-3):s===eO?ol(e,s,r):e>0?(c=e-4*ln,r[0]=c-fl,r[1]=c-r[0]-fl,4):(c=e+4*ln,r[0]=c+fl,r[1]=c-r[0]+fl,-4);if(s<nO)return ol(e,s,r);if(s>=DA)return r[0]=NaN,r[1]=NaN,0;for(n=BA(e),t=(s>>20)-1046,c=UA(s-(t<<20|0),n),p=0;p<2;p++)ba[p]=c|0,c=(c-ba[p])*MA;for(ba[2]=c,f=3;ba[f-1]===VA;)f-=1;return v=WA(ba,Ia,t,f),e<0?(r[0]=-Ia[0],r[1]=-Ia[1],-v):(r[0]=Ia[0],r[1]=Ia[1],v)}var aO=tO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iO=aO,F5=iO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var lO=ee,f0=w5,pd=N5,sO=F5,Tr=[0,0],oO=2147483647,uO=1072243195,cO=1044381696,fO=2146435072;function vO(e){var r,n;if(r=lO(e),r&=oO,r<=uO)return r<cO?1:f0(e,0);if(r>=fO)return NaN;switch(n=sO(e,Tr),n&3){case 0:return f0(Tr[0],Tr[1]);case 1:return-pd(Tr[0],Tr[1]);case 2:return-f0(Tr[0],Tr[1]);default:return pd(Tr[0],Tr[1])}}var dO=vO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hO=ve,gO=g1,yO=ee,md=w5,v0=N5,$O=F5,wO=1072243195,NO=1045430272,Rr=[0,0];function xO(e){var r,n;if(r=yO(e),r&=hO,r<=wO)return r<NO?e:v0(e,0);if(r>=gO)return NaN;switch(n=$O(e,Rr),n&3){case 0:return v0(Rr[0],Rr[1]);case 1:return md(Rr[0],Rr[1]);case 2:return-v0(Rr[0],Rr[1]);default:return-md(Rr[0],Rr[1])}}var _O=xO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bO=_O,Ci=bO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IO=3.141592653589793,nr=IO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EO=S,jO=Xe,hd=mO,d0=Ci,PO=K,Ea=Sr,ja=nr;function AO(e){var r,n;return EO(e)?NaN:jO(e)?NaN:(n=e%2,r=PO(n),r===0||r===1?Ea(0,n):r<.25?d0(ja*n):r<.75?(r=.5-r,Ea(hd(ja*r),n)):r<1.25?(n=Ea(1,n)-n,d0(ja*n)):r<1.75?(r-=1.5,-Ea(hd(ja*r),n)):(n-=Ea(2,n),d0(ja*n)))}var OO=AO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kO=OO,y1=kO;/**
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
*/function LO(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}var CO=LO;/**
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
*/function SO(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}var FO=SO;/**
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
*/function TO(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}var RO=TO;/**
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
*/function HO(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}var zO=HO;/**
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
*/function DO(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}var GO=DO;/**
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
*/function qO(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}var BO=qO;/**
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
*/function UO(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}var WO=UO;/**
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
*/function VO(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}var MO=VO;/**
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
*/function XO(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}var KO=XO;/**
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
*/function QO(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}var YO=QO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ZO=S,JO=Xe,ek=K,It=Ce,rk=h1,nk=y1,tk=nr,p0=q,ak=CO,ik=FO,lk=RO,sk=zO,ok=GO,uk=BO,ck=WO,fk=MO,vk=KO,dk=YO,pk=.07721566490153287,mk=.3224670334241136,hk=1,gk=-.07721566490153287,yk=.48383612272381005,$k=-.1475877229945939,wk=.06462494023913339,Nk=-.07721566490153287,xk=1,_k=.4189385332046727,vl=1.4616321449683622,bk=4503599627370496,Ik=0x400000000000000,Ek=8470329472543003e-37,gd=1.4616321449683622,jk=-.12148629053584961,Pk=-3638676997039505e-33;function Ak(e){var r,n,t,a,s,f,p,v,c,i,l,o,d;if(ZO(e)||JO(e))return e;if(e===0)return p0;if(e<0?(r=!0,e=-e):r=!1,e<Ek)return-It(e);if(r){if(e>=bk||(c=nk(e),c===0))return p0;n=It(tk/ek(c*e))}if(e===1||e===2)return 0;if(e<2)switch(e<=.9?(d=-It(e),e>=vl-1+.27?(l=1-e,t=0):e>=vl-1-.27?(l=e-(gd-1),t=1):(l=e,t=2)):(d=0,e>=vl+.27?(l=2-e,t=0):e>=vl-.27?(l=e-gd,t=1):(l=e-1,t=2)),t){case 0:o=l*l,f=pk+o*ak(o),s=o*(mk+o*ik(o)),p=l*f+s,d+=p-.5*l;break;case 1:o=l*l,i=o*l,f=yk+i*ok(i),s=$k+i*uk(i),a=wk+i*ck(i),p=o*f-(Pk-i*(s+l*a)),d+=jk+p;break;case 2:f=l*(Nk+l*fk(l)),s=xk+l*vk(l),d+=-.5*l+f/s;break}else if(e<8)switch(t=rk(e),l=e-t,p=l*(gk+l*sk(l)),v=hk+l*lk(l),d=.5*l+p/v,o=1,t){case 7:o*=l+6;case 6:o*=l+5;case 5:o*=l+4;case 4:o*=l+3;case 3:o*=l+2,d+=It(o)}else e<Ik?(c=It(e),o=1/e,l=o*o,i=_k+o*dk(l),d=(e-.5)*(c-1)+i):d=e*(It(e)-1);return r&&(d=n-d),d}var Ok=Ak;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kk=Ok,xo=kk;/**
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
*/function Lk(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}var Ck=Lk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sk=S,yd=ee,$d=Le,Fk=q,Tk=Z,wd=Ie,Rk=Ck,m0=.6931471803691238,h0=19082149292705877e-26,Hk=.41421356237309503,zk=-.2928932188134525,Dk=1862645149230957e-24,Gk=5551115123125783e-32,qk=9007199254740992,Bk=.6666666666666666;function Uk(e){var r,n,t,a,s,f,p,v,c,i;if(e<-1||Sk(e))return NaN;if(e===-1)return Tk;if(e===Fk||e===0)return e;if(e<0?t=-e:t=e,i=1,t<Hk){if(t<Dk)return t<Gk?e:e-e*e*.5;e>zk&&(i=0,a=e,n=1)}return i!==0&&(t<qk?(c=1+e,n=yd(c),i=(n>>20)-wd,i>0?s=1-(c-e):s=e-(c-1),s/=c):(c=e,n=yd(c),i=(n>>20)-wd,s=0),n&=1048575,n<434334?c=$d(c,n|1072693248):(i+=1,c=$d(c,n|1071644672),n=1048576-n>>2),a=c-1),r=.5*a*a,n===0?a===0?(s+=i*h0,i*m0+s):(v=r*(1-Bk*a),i*m0-(v-(i*h0+s)-a)):(f=a/(2+a),p=f*f,v=p*Rk(p),i===0?a-(r-f*(r+v)):i*m0-(r-(f*(r+v)+(i*h0+s))-a))}var Wk=Uk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vk=Wk,Fr=Vk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mk=Z;function Xk(e){return e===0&&1/e===Mk}var Kk=Xk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qk=Kk,Si=Qk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yk=2.5066282746310007,Fi=Yk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zk=be;function Jk(e){return Zk(e/2)}var eL=Jk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rL=eL,wt=rL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nd=wt;function nL(e){return e>0?Nd(e-1):Nd(e+1)}var tL=nL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aL=tL,$1=aL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iL=Math.sqrt,lL=iL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sL=lL,he=sL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oL=sa,ef;oL===!0?ef=0:ef=1;var uL=ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cL=la,fL=$t,vL=uL,rf=new fL(1),dL=new cL(rf.buffer);function pL(e,r){return rf[0]=e,dL[vL]=r>>>0,rf[0]}var mL=pL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hL=mL,ne=hL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gL(e){return e|0}var yL=gL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $L=yL,Ke=$L;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xd=$1,wL=Sr,NL=Z,dl=q;function xL(e,r){return r===NL?dl:r===dl?0:r>0?xd(r)?e:0:xd(r)?wL(dl,e):dl}var _L=xL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bL=ve,IL=ee,EL=1072693247,pl=1e300,ml=1e-300;function jL(e,r){var n,t;return t=IL(e),n=t&bL,n<=EL?r<0?pl*pl:ml*ml:r>0?pl*pl:ml*ml}var PL=jL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AL=K,_d=q;function OL(e,r){return e===-1?(e-e)/(e-e):e===1?1:AL(e)<1==(r===_d)?0:_d}var kL=OL;/**
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
*/function LL(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var CL=LL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var SL=ee,hl=ne,bd=Le,FL=Ie,TL=CL,RL=1048575,Id=1048576,HL=1072693248,zL=536870912,DL=524288,GL=20,qL=9007199254740992,BL=.9617966939259756,UL=.9617967009544373,WL=-7028461650952758e-24,VL=[1,1.5],ML=[0,.5849624872207642],XL=[0,1350039202129749e-23];function KL(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<Id&&(r*=qL,x-=53,n=SL(r)),x+=(n>>GL)-FL|0,b=n&RL|0,n=b|HL|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=Id),r=bd(r,n),i=VL[I],N=r-i,_=1/(r+i),a=N*_,f=hl(a,0),t=(n>>1|zL)+DL,t+=I<<18,v=bd(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*TL(s),m+=p*(f+a),s=f*f,v=3+s+m,v=hl(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=hl(o,0),d=_-(o-N),h=UL*o,g=WL*o+d*BL+XL[I],l=ML[I],$=x,w=h+g+l+$,w=hl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var QL=KL;/**
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
*/function YL(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var ZL=YL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var JL=ne,eC=ZL,rC=1.4426950408889634,nC=1.4426950216293335,tC=19259629911266175e-24;function aC(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*eC(a),f=nC*a,p=a*tC-s*rC,t=f+p,t=JL(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var iC=aC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lC=.6931471805599453,Nt=lC;/**
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
*/function sC(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var oC=sC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var uC=ee,Ed=Le,cC=ne,fC=Ke,vC=nn,dC=Nt,jd=Ie,Pd=ve,Ad=Yn,pC=oC,Od=1048576,mC=1071644672,Pa=20,hC=.6931471824645996,gC=-1904654299957768e-24;function yC(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&Pd|0,d=(o>>Pa)-jd|0,l=0,o>mC&&(l=e+(Od>>d+1)>>>0,d=((l&Pd)>>Pa)-jd|0,t=(l&~(Ad>>d))>>>0,s=Ed(0,t),l=(l&Ad|Od)>>Pa-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=cC(s,0),p=s*hC,v=(n-(s-r))*dC+s*gC,i=p+v,c=v-(i-p),s=i*i,a=i-s*pC(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=uC(i),e=fC(e),e+=l<<Pa>>>0,e>>Pa<=0?i=vC(i,l):i=Ed(i,e),i}var $C=yC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kd=S,Ld=$1,Cd=Xe,wC=be,Sd=he,NC=K,g0=rn,xC=ne,Fd=Ke,_C=Z,bC=q,y0=ve,IC=_L,EC=PL,jC=kL,PC=QL,AC=iC,OC=$C,kC=1072693247,LC=1105199104,CC=1139802112,Td=1083179008,SC=1072693248,FC=1083231232,TC=3230714880,Rd=31,sn=1e300,on=1e-300,RC=8008566259537294e-32,Hr=[0,0],Hd=[0,0];function T5(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(kd(e)||kd(r))return NaN;if(g0.assign(r,Hr,1,0),p=Hr[0],v=Hr[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return Sd(e);if(r===-.5)return 1/Sd(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(Cd(r))return jC(e,r)}if(g0.assign(e,Hr,1,0),s=Hr[0],f=Hr[1],f===0){if(s===0)return IC(e,r);if(e===1)return 1;if(e===-1&&Ld(r))return-1;if(Cd(e))return e===_C?T5(-0,-r):r<0?0:bC}if(e<0&&wC(r)===!1)return(e-e)/(e-e);if(a=NC(e),n=s&y0|0,t=p&y0|0,c=s>>>Rd|0,i=p>>>Rd|0,c&&Ld(r)?c=-1:c=1,t>LC){if(t>CC)return EC(e,r);if(n<kC)return i===1?c*sn*sn:c*on*on;if(n>SC)return i===0?c*sn*sn:c*on*on;h=AC(Hd,a)}else h=PC(Hd,a,n);if(l=xC(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,g0.assign(g,Hr,1,0),w=Fd(Hr[0]),y=Fd(Hr[1]),w>=Td){if(w-Td|y||d+RC>g-o)return c*sn*sn}else if((w&y0)>=FC&&(w-TC|y||d<=g-o))return c*on*on;return g=OC(w,o,d),c*g}var HC=T5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zC=HC,ue=zC;/**
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
*/function DC(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var GC=DC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qC=nn,BC=GC;function UC(e,r,n){var t,a,s,f;return t=e-r,a=t*t,s=t-a*BC(a),f=1-(r-t*s/(2-s)-e),qC(f,n)}var WC=UC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var VC=S,zd=h1,MC=Z,Dd=q,XC=WC,KC=.6931471803691238,QC=19082149292705877e-26,Gd=1.4426950408889634,YC=709.782712893384,ZC=-745.1332191019411,R5=1/(1<<28),JC=-R5;function eS(e){var r,n,t;return VC(e)||e===Dd?e:e===MC?0:e>YC?Dd:e<ZC?0:e>JC&&e<R5?1+e:(e<0?t=zd(Gd*e-.5):t=zd(Gd*e+.5),r=e-t*KC,n=t*QC,XC(r,n,t))}var rS=eS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nS=rS,J=nS;/**
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
*/function tS(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var aS=tS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var iS=Fi,qd=ue,lS=J,sS=aS,oS=143.01608;function uS(e){var r,n,t;return r=1/e,r=1+r*sS(r),n=lS(e),e>oS?(t=qd(e,.5*e-.25),n=t*(t/n)):n=qd(e,e-.5)/n,iS*n*r}var cS=uS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fS=.5772156649015329,_o=fS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vS=_o;function dS(e,r){return r/((1+vS*e)*e)}var pS=dS;/**
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
*/function mS(e){var r,n,t;return e===0?1:(e<0?r=-e:r=e,r<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),t=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),t=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/t)}var hS=mS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gS=S,yS=be,$S=Si,Bd=K,wS=qe,NS=Ci,Ud=q,Wd=Z,Vd=nr,Md=cS,Xd=pS,xS=hS;function _S(e){var r,n,t,a;if(yS(e)&&e<0||e===Wd||gS(e))return NaN;if(e===0)return $S(e)?Wd:Ud;if(e>171.61447887182297)return Ud;if(e<-170.5674972726612)return 0;if(n=Bd(e),n>33)return e>=0?Md(e):(t=wS(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*NS(Vd*a),r*Vd/(Bd(a)*Md(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return Xd(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return Xd(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*xS(e))}var bS=_S;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IS=bS,bo=IS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ES=$o,Kd=S,$0=q;function jS(e,r){return Kd(e)||Kd(r)?NaN:e===$0||r===$0?$0:e===r&&e===0?ES(e)?e:r:e>r?e:r}var PS=jS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AS=PS,Io=AS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OS=Si,Qd=S,w0=Z;function kS(e,r){return Qd(e)||Qd(r)?NaN:e===w0||r===w0?w0:e===r&&e===0?OS(e)?e:r:e<r?e:r}var LS=kS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CS=LS,oa=CS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SS=.9189385332046728,FS=SS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var H5=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],TS=H5.length;function RS(e){var r,n,t,a,s;if(e<-1.1||e>1.1)return NaN;for(t=0,a=0,r=2*e,s=0;s<TS;s++)n=t,t=a,a=r*t-n+H5[s];return(a-n)*.5}var HS=RS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zS=ue,DS=HS,GS=9490626562425156e-8,qS=3745194030963158e291;function BS(e){return e<10?NaN:e>=qS?0:e<GS?DS(2*zS(10/e,2)-1)/e:1/(e*12)}var US=BS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var WS=xo,Yd=Fr,N0=bo,VS=Io,MS=oa,gl=Ce,XS=FS,KS=Z,Zd=q,Aa=US;function QS(e,r){var n,t,a;return t=MS(e,r),a=VS(e,r),t<0?NaN:t===0?Zd:a===Zd?KS:t>=10?(n=Aa(t)+Aa(a)-Aa(t+a),-.5*gl(a)+XS+n+(t-.5)*gl(t/(t+a))+a*Yd(-t/(t+a))):a>=10?(n=Aa(a)-Aa(t+a),WS(t)+n+t-t*gl(t+a)+(a-.5)*Yd(-t/(t+a))):gl(N0(t)*(N0(a)/N0(t+a)))}var YS=QS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZS=YS,JS=ZS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd=be,ep=S,eF=JS,rF=K,rp=Ce,np=Z;function nf(e,r){return ep(e)||ep(r)?NaN:!Jd(e)||!Jd(r)?NaN:e<0?nf(-e+r-1,r):r<0?np:r===0?0:r===1?rp(rF(e)):e<r?np:e-r<2?nf(e,e-r):-rp(e+1)-eF(e-r+1,r+1)}var nF=nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tF=nF,aF=tF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iF=aF,lF=qe,sF=J,tp=Ce;function oF(e,r){var n,t,a,s;if(e<=0)return 0;if(e>=1)return 1;for(n=lF(r*(1-e))+1,t=0,s=0;s<n;s++)a=iF(r,s),a+=(r-s)*tp(1-e-s/r),a+=(s-1)*tp(e+s/r),t+=sF(a);return 1-e*t}var uF=oF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl=qe,cF=he,$l=ue,fF=J,x0=$t;function vF(e,r){var n,t,a,s,f,p,v,c,i,l,o;if(o=e*e*r,o>7.24||o>3.76&&r>99)return 1-2*fF(-(2.000071+.331/cF(r)+1.409/r)*o);for(i=yl(r*e)+1,l=2*i-1,a=i-r*e,s=new x0(l*l),f=new x0(l*l),v=0;v<l;v++)for(c=0;c<l;c++)v-c+1<0?s[v*l+c]=0:s[v*l+c]=1;for(v=0;v<l;v++)s[v*l]-=$l(a,v+1),s[(l-1)*l+v]-=$l(a,l-v);for(s[(l-1)*l]+=2*a-1>0?$l(2*a-1,l):0,v=0;v<l;v++)for(c=0;c<l;c++)if(v-c+1>0)for(p=1;p<=v-c+1;p++)s[v*l+c]/=p;for(n=0,d(s,n,r),o=f[(i-1)*l+i-1],v=1;v<=r;v++)o=o*v/r,o<1e-140&&(o*=1e140,t-=140);return o*=$l(10,t),o;function d(g,w,y){var $,m,N;if(y===1){for(N=0;N<l*l;N++)f[N]=g[N],t=w;return}if(d(g,w,yl(y/2)),m=h(f,f),$=2*t,y%2===0){for(N=0;N<l*l;N++)f[N]=m[N];t=$}else f=h(g,m),t=w+$;if(f[yl(l/2)*l+yl(l/2)]>1e140){for(N=0;N<l*l;N++)f[N]*=1e-140;t+=140}}function h(g,w){var y,$,m,N,_;for(_=new x0(l*l),y=0;y<l;y++)for($=0;$<l;$++)for(N=0,m=0;m<l;m++)N+=g[y*l+m]*w[m*l+$],_[y*l+$]=N;return _}}var dF=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function pF(e,r){return e-r}var mF=pF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hF(e,r){var n,t,a;for(n=r.length,t=new Array(n),a=0;a<n;a++)t[a]=e-r[a];return t}var gF=hF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yF=s5;function $F(e){return typeof e=="object"&&e!==null&&!yF(e)}var wF=$F;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NF=wF,xF=NF;/**
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
*/var _F=Object,bF=_F;/**
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
*/var IF=bF,EF=IF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jF=Object.getPrototypeOf,PF=jF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function AF(e){return e.__proto__}var OF=AF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kF=xr,LF=OF;function CF(e){var r=LF(e);return r||r===null?r:kF(e.constructor)==="[object Function]"?e.constructor.prototype:e instanceof Object?Object.prototype:null}var SF=CF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FF=d1,TF=PF,RF=SF,tf;FF(Object.getPrototypeOf)?tf=TF:tf=RF;var HF=tf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zF=EF,DF=HF;function GF(e){return e==null?null:(e=zF(e),DF(e))}var qF=GF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BF=qF,UF=BF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WF=xF,ap=d1,VF=UF,ws=go,MF=xr,XF=Object.prototype;function KF(e){var r;for(r in e)if(!ws(e,r))return!1;return!0}function QF(e){var r;return WF(e)?(r=VF(e),r?!ws(e,"constructor")&&ws(r,"constructor")&&ap(r.constructor)&&MF(r.constructor)==="[object Function]"&&ws(r,"isPrototypeOf")&&ap(r.isPrototypeOf)&&(r===XF||KF(e)):!0):!1}var YF=QF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZF=YF,z5=ZF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JF=f1.isPrimitive,eT=yt.isPrimitive,rT=z5,nT=v5.isPrimitive,tT=h5,_0=go,wl=Qn;function aT(e,r){return rT(r)?_0(r,"alpha")&&(e.alpha=r.alpha,!eT(e.alpha)||tT(e.alpha))?new TypeError(wl("invalid option. `%s` option must be a number. Option: `%s`.","alpha",e.alpha)):_0(r,"alternative")&&(e.alternative=r.alternative,!nT(e.alternative))?new TypeError(wl("invalid option. `%s` option must be a string. Option: `%s`.","alternative",e.alternative)):_0(r,"sorted")&&(e.sorted=r.sorted,!JF(e.sorted))?new TypeError(wl("invalid option. `%s` option must be a boolean. Option: `%s`.","sorted",e.sorted)):null:new TypeError(wl("invalid argument. Options argument must be an object. Value: `%s`.",r))}var iT=aT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function sT(e){var r,n,t;return e===0?.16666666666666713:(e<0?r=-e:r=e,r<=1?(n=-8.198089802484825+e*(19.562619833175948+e*(-16.262479672107002+e*(5.444622390564711+e*(-.6019598008014124+e*.004253011369004428)))),t=-49.18853881490881+e*(139.51056146574857+e*(-147.1791292232726+e*(70.49610280856842+e*(-14.740913729888538+e*1))))):(e=1/e,n=.004253011369004428+e*(-.6019598008014124+e*(5.444622390564711+e*(-16.262479672107002+e*(19.562619833175948+e*-8.198089802484825)))),t=1+e*(-14.740913729888538+e*(70.49610280856842+e*(-147.1791292232726+e*(139.51056146574857+e*-49.18853881490881))))),n/t)}var oT=sT;/**
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
*/var fT=S,vT=he,ip=D5,dT=oT,pT=cT,mT=6123233995736766e-32;function hT(e){var r,n,t,a,s;if(fT(e))return NaN;if(e>0?t=e:(r=!0,t=-e),t>1)return NaN;if(t>.625)n=1-t,a=n*pT(n),n=vT(n+n),s=ip-n,n=n*a-mT,s-=n,s+=ip;else{if(t<1e-8)return e;n=t*t,s=n*dT(n),s=t*s+t}return r?-s:s}var gT=hT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yT=gT,w1=yT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0=S,$T=w1,wT=he,NT=nr,xT=2/NT;function _T(e,r,n){return b0(e)||b0(r)||b0(n)||r>=n?NaN:e<r?0:e>=n?1:xT*$T(wT((e-r)/(n-r)))}var bT=_T;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function IT(e){return r;function r(){return e}}var ET=IT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jT=ET,ce=jT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PT=ce,I0=S,AT=w1,OT=he,kT=nr,LT=2/kT;function CT(e,r){if(I0(e)||I0(r)||e>=r)return PT(NaN);return n;function n(t){return I0(t)?NaN:t<e?0:t>=r?1:LT*AT(OT((t-e)/(r-e)))}}var ST=CT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FT=M,G5=bT,TT=ST;FT(G5,"factory",TT);var RT=G5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HT=.34657359027997264,zT=HT;/**
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
*/var qT=S,lp=ee,E0=Le,BT=wo,sp=q,UT=Z,op=Ie,WT=zT,VT=GT,MT=709.782712893384,j0=.6931471803691238,P0=19082149292705877e-26,up=1.4426950408889634,XT=38.816242111356935,KT=1.0397207708399179;function QT(e){var r,n,t,a,s,f,p,v,c,i,l,o,d;if(e===sp||qT(e))return e;if(e===UT)return-1;if(e===0)return e;if(e<0?(t=!0,v=-e):(t=!1,v=e),v>=XT){if(t)return-1;if(v>=MT)return sp}if(f=lp(v)|0,v>WT)v<KT?t?(a=e+j0,s=-P0,d=-1):(a=e-j0,s=P0,d=1):(t?d=up*e-.5:d=up*e+.5,d|=0,l=d,a=e-l*j0,s=l*P0),e=a-s,i=a-e-s;else{if(f<1016070144)return e;d=0}return r=.5*e,c=e*r,p=1+c*VT(c),l=3-p*r,o=c*((p-l)/(6-e*l)),d===0?e-(e*o-c):(n=BT(op+d<<20,0),o=e*(o-i)-i,o-=c,d===-1?.5*(e-o)-.5:d===1?e<-.25?-2*(o-(e+.5)):1+2*(e-o):d<=-2||d>56?(v=1-(o-e),d===1024?(a=lp(v)+(d<<20)|0,v=E0(v,a)):v*=n,v-1):(l=1,d<20?(a=1072693248-(2097152>>d)|0,l=E0(l,a),v=l-(o-e)):(a=op-d<<20|0,l=E0(l,a),v=e-(o+l),v+=1),v*=n,v))}var YT=QT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZT=YT,ua=ZT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JT=2.718281828459045,ca=JT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eR=2220446049250313e-31,tn=eR;/**
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
*/function rR(e){var r,n,t;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(n=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),t=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,n=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),t=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),n/t)}var nR=rR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cp=S,tR=Fr,aR=he,iR=K,lR=J,A0=ue,sR=ca,O0=tn,k0=nR,L0=10.900511;function oR(e,r){var n,t,a,s,f,p,v;return cp(e)||cp(r)?NaN:e<0||r<0?NaN:r===1?1/e:e===1?1/r:(v=e+r,v<O0?(f=v/e,f/=r,f):v===e&&r<O0?1/r:v===r&&e<O0?1/e:(e<r&&(p=r,r=e,e=p),t=e+L0-.5,a=r+L0-.5,s=v+L0-.5,f=k0(e)*(k0(r)/k0(v)),n=e-.5-r,iR(r*n)<s*100&&e>100?f*=lR(n*tR(-r/s)):f*=A0(t/s,n),s>1e10?f*=A0(t/s*(a/s),r):f*=A0(t*a/(s*s),r),f*=aR(sR/a),f))}var uR=oR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cR=uR,fR=cR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vR=17976931348623157e292,q5=vR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dR=2147483647,pR=dR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mR=1.5707963267948966,B5=mR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp=wt;function hR(e){return e>0?fp(e-1):fp(e+1)}var gR=hR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yR=gR,U5=yR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vp=U5,$R=Sr,wR=Z,Nl=q;function NR(e,r){return r===wR?Nl:r===Nl?0:r>0?vp(r)?e:0:vp(r)?$R(Nl,e):Nl}var xR=NR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _R=ve,bR=ee,IR=1072693247,xl=1e300,_l=1e-300;function ER(e,r){var n,t;return t=bR(e),n=t&_R,n<=IR?r<0?xl*xl:_l*_l:r>0?xl*xl:_l*_l}var jR=ER;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PR=K,dp=q;function AR(e,r){return e===-1?(e-e)/(e-e):e===1?1:PR(e)<1==(r===dp)?0:dp}var OR=AR;/**
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
*/function kR(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var LR=kR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var CR=ee,bl=ne,pp=Le,SR=Ie,FR=LR,TR=1048575,mp=1048576,RR=1072693248,HR=536870912,zR=524288,DR=20,GR=9007199254740992,qR=.9617966939259756,BR=.9617967009544373,UR=-7028461650952758e-24,WR=[1,1.5],VR=[0,.5849624872207642],MR=[0,1350039202129749e-23];function XR(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<mp&&(r*=GR,x-=53,n=CR(r)),x+=(n>>DR)-SR|0,b=n&TR|0,n=b|RR|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=mp),r=pp(r,n),i=WR[I],N=r-i,_=1/(r+i),a=N*_,f=bl(a,0),t=(n>>1|HR)+zR,t+=I<<18,v=pp(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*FR(s),m+=p*(f+a),s=f*f,v=3+s+m,v=bl(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=bl(o,0),d=_-(o-N),h=BR*o,g=UR*o+d*qR+MR[I],l=VR[I],$=x,w=h+g+l+$,w=bl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var KR=XR;/**
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
*/function QR(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var YR=QR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ZR=ne,JR=YR,eH=1.4426950408889634,rH=1.4426950216293335,nH=19259629911266175e-24;function tH(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*JR(a),f=rH*a,p=a*nH-s*eH,t=f+p,t=ZR(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var aH=tH;/**
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
*/function iH(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var lH=iH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sH=ee,hp=Le,oH=ne,uH=Ke,cH=nn,fH=Nt,gp=Ie,yp=ve,$p=Yn,vH=lH,wp=1048576,dH=1071644672,Oa=20,pH=.6931471824645996,mH=-1904654299957768e-24;function hH(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&yp|0,d=(o>>Oa)-gp|0,l=0,o>dH&&(l=e+(wp>>d+1)>>>0,d=((l&yp)>>Oa)-gp|0,t=(l&~($p>>d))>>>0,s=hp(0,t),l=(l&$p|wp)>>Oa-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=oH(s,0),p=s*pH,v=(n-(s-r))*fH+s*mH,i=p+v,c=v-(i-p),s=i*i,a=i-s*vH(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=sH(i),e=uH(e),e+=l<<Oa>>>0,e>>Oa<=0?i=cH(i,l):i=hp(i,e),i}var gH=hH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Np=S,xp=U5,_p=Xe,yH=be,bp=he,$H=K,C0=rn,wH=ne,Ip=Ke,NH=Z,xH=q,S0=ve,_H=xR,bH=jR,IH=OR,EH=KR,jH=aH,PH=gH,AH=1072693247,OH=1105199104,kH=1139802112,Ep=1083179008,LH=1072693248,CH=1083231232,SH=3230714880,jp=31,un=1e300,cn=1e-300,FH=8008566259537294e-32,zr=[0,0],Pp=[0,0];function W5(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(Np(e)||Np(r))return NaN;if(C0.assign(r,zr,1,0),p=zr[0],v=zr[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return bp(e);if(r===-.5)return 1/bp(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(_p(r))return IH(e,r)}if(C0.assign(e,zr,1,0),s=zr[0],f=zr[1],f===0){if(s===0)return _H(e,r);if(e===1)return 1;if(e===-1&&xp(r))return-1;if(_p(e))return e===NH?W5(-0,-r):r<0?0:xH}if(e<0&&yH(r)===!1)return(e-e)/(e-e);if(a=$H(e),n=s&S0|0,t=p&S0|0,c=s>>>jp|0,i=p>>>jp|0,c&&xp(r)?c=-1:c=1,t>OH){if(t>kH)return bH(e,r);if(n<AH)return i===1?c*un*un:c*cn*cn;if(n>LH)return i===0?c*un*un:c*cn*cn;h=jH(Pp,a)}else h=EH(Pp,a,n);if(l=wH(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,C0.assign(g,zr,1,0),w=Ip(zr[0]),y=Ip(zr[1]),w>=Ep){if(w-Ep|y||d+FH>g-o)return c*un*un}else if((w&S0)>=CH&&(w-SH|y||d<=g-o))return c*cn*cn;return g=PH(w,o,d),c*g}var TH=W5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RH=TH,HH=RH;/**
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
*/function zH(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var DH=zH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var GH=Fi,Ap=HH,qH=J,BH=DH,UH=143.01608;function WH(e){var r,n,t;return r=1/e,r=1+r*BH(r),n=qH(e),e>UH?(t=Ap(e,.5*e-.25),n=t*(t/n)):n=Ap(e,e-.5)/n,GH*n*r}var VH=WH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var MH=_o;function XH(e,r){return r/((1+MH*e)*e)}var KH=XH;/**
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
*/function QH(e){var r,n,t;return e===0?1:(e<0?r=-e:r=e,r<=1?(n=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),t=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,n=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),t=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),n/t)}var YH=QH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ZH=S,JH=be,ez=Si,Op=K,rz=qe,nz=Ci,kp=q,Lp=Z,Cp=nr,Sp=VH,Fp=KH,tz=YH;function az(e){var r,n,t,a;if(JH(e)&&e<0||e===Lp||ZH(e))return NaN;if(e===0)return ez(e)?Lp:kp;if(e>171.61447887182297)return kp;if(e<-170.5674972726612)return 0;if(n=Op(e),n>33)return e>=0?Sp(e):(t=rz(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*nz(Cp*a),r*Cp/(Op(a)*Sp(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return Fp(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return Fp(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*tz(e))}var iz=az;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lz=iz,N1=lz;const sz=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oz=S,uz=be,cz=N1,fz=q,vz=sz,dz=170;function pz(e){return oz(e)?NaN:uz(e)?e<0?NaN:e<=dz?vz[e]:fz:cz(e+1)}var mz=pz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xz=Nz,_z=xz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bz=10.900511,Ti=bz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tp=_z,Iz=N1,Rp=Fr,Hp=K,zp=J,Dp=ue,Ez=tn,jz=ca,Pz=Ti,Gp=170,Az=4269068009004705e289;function V5(e,r){var n,t,a;return e<Ez?r>Gp?(t=V5(r,Gp-r),t*=e,t*=Az,1/t):1/(e*Iz(e+r)):(a=e+Pz-.5,e+r===e?Hp(r)<10?n=zp((.5-e)*Rp(r/a)):n=1:(Hp(r)<10?n=zp((.5-e)*Rp(r/a)):n=Dp(a/(a+r),e-.5),n*=Tp(e)/Tp(e+r)),n*=Dp(jz/(a+r),r),n)}var Oz=V5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kz=K,qp=qe,Bp=N1,Up=gz,Lz=Oz,Wp=170;function Cz(e,r){var n,t,a;if(e<=0||e+r<=0)return Bp(e)/Bp(e+r);if(t=qp(r),t===r){if(a=qp(e),a===e&&e<=Wp&&e+r<=Wp)return Up(a-1)/Up(t+a-1);if(kz(r)<20){if(r===0)return 1;if(r<0){for(e-=1,n=e,r+=1;r!==0;)e-=1,n*=e,r+=1;return n}for(n=1/e,r-=1;r!==0;)e+=1,n/=e,r-=1;return n}}return Lz(e,r)}var Sz=Cz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fz=Sz,Tz=Fz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp=wt;function Rz(e){return e>0?Vp(e-1):Vp(e+1)}var Hz=Rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zz=Hz,M5=zz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mp=M5,Dz=Sr,Gz=Z,Il=q;function qz(e,r){return r===Gz?Il:r===Il?0:r>0?Mp(r)?e:0:Mp(r)?Dz(Il,e):Il}var Bz=qz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Uz=ve,Wz=ee,Vz=1072693247,El=1e300,jl=1e-300;function Mz(e,r){var n,t;return t=Wz(e),n=t&Uz,n<=Vz?r<0?El*El:jl*jl:r>0?El*El:jl*jl}var Xz=Mz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kz=K,Xp=q;function Qz(e,r){return e===-1?(e-e)/(e-e):e===1?1:Kz(e)<1==(r===Xp)?0:Xp}var Yz=Qz;/**
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
*/var eD=ee,Pl=ne,Kp=Le,rD=Ie,nD=Jz,tD=1048575,Qp=1048576,aD=1072693248,iD=536870912,lD=524288,sD=20,oD=9007199254740992,uD=.9617966939259756,cD=.9617967009544373,fD=-7028461650952758e-24,vD=[1,1.5],dD=[0,.5849624872207642],pD=[0,1350039202129749e-23];function mD(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<Qp&&(r*=oD,x-=53,n=eD(r)),x+=(n>>sD)-rD|0,b=n&tD|0,n=b|aD|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=Qp),r=Kp(r,n),i=vD[I],N=r-i,_=1/(r+i),a=N*_,f=Pl(a,0),t=(n>>1|iD)+lD,t+=I<<18,v=Kp(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*nD(s),m+=p*(f+a),s=f*f,v=3+s+m,v=Pl(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=Pl(o,0),d=_-(o-N),h=cD*o,g=fD*o+d*uD+pD[I],l=dD[I],$=x,w=h+g+l+$,w=Pl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var hD=mD;/**
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
*/var $D=ne,wD=yD,ND=1.4426950408889634,xD=1.4426950216293335,_D=19259629911266175e-24;function bD(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*wD(a),f=xD*a,p=a*_D-s*ND,t=f+p,t=$D(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var ID=bD;/**
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
*/function ED(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var jD=ED;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var PD=ee,Yp=Le,AD=ne,OD=Ke,kD=nn,LD=Nt,Zp=Ie,Jp=ve,e2=Yn,CD=jD,r2=1048576,SD=1071644672,ka=20,FD=.6931471824645996,TD=-1904654299957768e-24;function RD(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&Jp|0,d=(o>>ka)-Zp|0,l=0,o>SD&&(l=e+(r2>>d+1)>>>0,d=((l&Jp)>>ka)-Zp|0,t=(l&~(e2>>d))>>>0,s=Yp(0,t),l=(l&e2|r2)>>ka-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=AD(s,0),p=s*FD,v=(n-(s-r))*LD+s*TD,i=p+v,c=v-(i-p),s=i*i,a=i-s*CD(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=PD(i),e=OD(e),e+=l<<ka>>>0,e>>ka<=0?i=kD(i,l):i=Yp(i,e),i}var HD=RD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var n2=S,t2=M5,a2=Xe,zD=be,i2=he,DD=K,F0=rn,GD=ne,l2=Ke,qD=Z,BD=q,T0=ve,UD=Bz,WD=Xz,VD=Yz,MD=hD,XD=ID,KD=HD,QD=1072693247,YD=1105199104,ZD=1139802112,s2=1083179008,JD=1072693248,eG=1083231232,rG=3230714880,o2=31,fn=1e300,vn=1e-300,nG=8008566259537294e-32,Dr=[0,0],u2=[0,0];function X5(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(n2(e)||n2(r))return NaN;if(F0.assign(r,Dr,1,0),p=Dr[0],v=Dr[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return i2(e);if(r===-.5)return 1/i2(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(a2(r))return VD(e,r)}if(F0.assign(e,Dr,1,0),s=Dr[0],f=Dr[1],f===0){if(s===0)return UD(e,r);if(e===1)return 1;if(e===-1&&t2(r))return-1;if(a2(e))return e===qD?X5(-0,-r):r<0?0:BD}if(e<0&&zD(r)===!1)return(e-e)/(e-e);if(a=DD(e),n=s&T0|0,t=p&T0|0,c=s>>>o2|0,i=p>>>o2|0,c&&t2(r)?c=-1:c=1,t>YD){if(t>ZD)return WD(e,r);if(n<QD)return i===1?c*fn*fn:c*vn*vn;if(n>JD)return i===0?c*fn*fn:c*vn*vn;h=XD(u2,a)}else h=MD(u2,a,n);if(l=GD(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,F0.assign(g,Dr,1,0),w=l2(Dr[0]),y=l2(Dr[1]),w>=s2){if(w-s2|y||d+nG>g-o)return c*fn*fn}else if((w&T0)>=eG&&(w-rG|y||d<=g-o))return c*vn*vn;return g=KD(w,o,d),c*g}var tG=X5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function lG(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}var sG=lG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oG=Fi,c2=iG,uG=J,cG=sG,fG=143.01608;function vG(e){var r,n,t;return r=1/e,r=1+r*cG(r),n=uG(e),e>fG?(t=c2(e,.5*e-.25),n=t*(t/n)):n=c2(e,e-.5)/n,oG*n*r}var dG=vG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pG=_o;function mG(e,r){return r/((1+pG*e)*e)}var hG=mG;/**
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
*/var $G=S,wG=be,NG=Si,f2=K,xG=qe,_G=Ci,v2=q,d2=Z,p2=nr,m2=dG,h2=hG,bG=yG;function IG(e){var r,n,t,a;if(wG(e)&&e<0||e===d2||$G(e))return NaN;if(e===0)return NG(e)?d2:v2;if(e>171.61447887182297)return v2;if(e<-170.5674972726612)return 0;if(n=f2(e),n>33)return e>=0?m2(e):(t=xG(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*_G(p2*a),r*p2/(f2(a)*m2(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return h2(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return h2(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*bG(e))}var EG=IG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jG=EG,PG=jG;/**
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
*/var AG=170,OG=AG;const kG=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LG=S,CG=be,SG=PG,FG=q,TG=OG,RG=kG;function HG(e){return LG(e)?NaN:CG(e)?e<0?NaN:e<=TG?RG[e]:FG:SG(e+1)}var zG=HG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var qG=14901161193847656e-24,BG=qG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UG=709.782712893384,xt=UG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var WG=J;function VG(e,r){var n,t,a,s;if(a=WG(-r),t=a,t!==0)for(n=t,s=1;s<e;++s)n/=s,n*=r,t+=n;return t}var MG=VG;/**
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
*/function eq(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}var rq=eq;/**
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
*/function nq(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}var tq=nq;/**
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
*/function aq(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}var iq=aq;/**
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
*/function lq(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}var sq=lq;/**
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
*/function oq(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}var uq=oq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var cq=S,g2=J,fq=ne,vq=q,dq=Z,pq=KG,mq=YG,hq=JG,gq=rq,yq=tq,$q=iq,wq=sq,Nq=uq,Al=1e-300,xq=13877787807814457e-33,y2=.8450629115104675,_q=.12837916709551256,bq=1,Iq=-.0023621185607526594,Eq=1,jq=-.009864944034847148,Pq=1,Aq=-.0098649429247001,Oq=1;function kq(e){var r,n,t,a,s,f,p,v;if(cq(e))return NaN;if(e===vq)return 0;if(e===dq)return 2;if(e===0)return 1;if(e<0?(r=!0,n=-e):(r=!1,n=e),n<.84375)return n<xq?1-e:(t=e*e,a=_q+t*pq(t),s=bq+t*mq(t),f=a/s,e<.25?1-(e+e*f):(a=e*f,a+=e-.5,.5-a));if(n<1.25)return s=n-1,p=Iq+s*hq(s),v=Eq+s*gq(s),r?1+y2+p/v:1-y2-p/v;if(n<28){if(s=1/(n*n),n<2.857142857142857)a=jq+s*yq(s),s=Pq+s*$q(s);else{if(e<-6)return 2-Al;a=Aq+s*wq(s),s=Oq+s*Nq(s)}return t=fq(n,0),a=g2(-(t*t)-.5625)*g2((t-n)*(t+n)+a/s),r?2-a/n:a/n}return r?2-Al:Al*Al}var Lq=kq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cq=Lq,fa=Cq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Sq=fa,$2=he,Fq=J,Tq=nr;function Rq(e,r){var n,t,a,s,f;if(s=Sq($2(r)),s!==0&&e>1){for(t=Fq(-r)/$2(Tq*r),t*=r,n=.5,t/=n,a=t,f=2;f<e;++f)t/=f-n,t*=r,a+=t;s+=a}return s}var Hq=Rq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zq=-708.3964185322641,va=zq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Et=J,Ol=ue,Dq=Ce,w2=xt,N2=va;function Gq(e,r){var n,t;return t=e*Dq(r),r>=1?t<w2&&-r>N2?n=Ol(r,e)*Et(-r):e>=1?n=Ol(r/Et(r/e),e):n=Et(t-r):t>N2?n=Ol(r,e)*Et(-r):r/e<w2?n=Ol(r/Et(r/e),e):n=Et(t-r),n}var qq=Gq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Bq(e,r){var n,t;if(t=e.length,t<2||r===0)return t===0?0:e[0];for(t-=1,n=e[t]*r+e[t-1],t-=2;t>=0;)n=n*r+e[t],t-=1;return n}var K5=Bq;/**
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
*/var Uq=Function,Wq=Uq;/**
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
*/var Vq=Wq,Mq=Vq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xq=Mq,Kq=K5;function Qq(e){var r,n,t,a;if(e.length>500)return s;if(r="return function evalpoly(x){",n=e.length,n===0)r+="return 0.0;";else if(n===1)r+="return "+e[0]+";";else{for(r+="if(x===0.0){return "+e[0]+";}",r+="return "+e[0],t=n-1,a=1;a<n;a++)r+="+x*",a<t&&(r+="("),r+=e[a];for(a=0;a<t-1;a++)r+=")";r+=";"}return r+="}",r+="//# sourceURL=evalpoly.factory.js",new Xq(r)();function s(f){return Kq(e,f)}}var Yq=Qq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zq=M,Q5=K5,Jq=Yq;Zq(Q5,"factory",Jq);var eB=Q5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rB=eval,nB=rB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tB=nB;function aB(){var e;try{tB('"use strict"; (function* () {})'),e=!0}catch{e=!1}return e}var iB=aB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lB=iB,Y5=lB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl=K,sB=tn,oB=1e6;function uB(e,r){var n,t,a,s,f,p;if(p={},arguments.length>1&&(p=r),t=p.tolerance||sB,s=p.maxTerms||oB,f=p.initialValue||0,n=typeof e.next=="function",n===!0){for(a of e)if(f+=a,kl(t*f)>=kl(a)||--s===0)break}else do a=e(),f+=a;while(kl(t*f)<kl(a)&&--s);return f}var cB=uB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x2=K,fB=tn,vB=1e6;function dB(e,r){var n,t,a,s,f;f={},arguments.length>1&&(f=r),n=f.tolerance||fB,a=f.maxTerms||vB,s=f.initialValue||0;do t=e(),s+=t;while(x2(n*s)<x2(t)&&--a);return s}var pB=dB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mB=Y5,hB=cB,gB=pB,af;mB()?af=hB:af=gB;var Eo=af;/**
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
*/function yB(e){var r=-e,n=-1,t=0;return a;function a(){return n*=r,t+=1,n/t}}var $B=yB;/**
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
*/var wB=K,NB=Ce,xB=tn,_B=Eo,bB=$B;function IB(e){var r,n;return e<=-1?NaN:(n=wB(e),n>.95?NB(1+e)-e:n<xB?-e*e/2:(r={initialValue:-e},_B(bB(e),r)))}var EB=IB;/**
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
*/var jB=EB,PB=jB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AB=6.283185307179586,OB=AB;/**
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
*/function kB(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}var LB=kB;/**
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
*/function CB(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}var SB=CB;/**
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
*/function FB(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}var TB=FB;/**
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
*/function RB(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}var HB=RB;/**
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
*/function zB(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}var DB=zB;/**
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
*/function GB(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}var qB=GB;/**
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
*/function BB(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}var UB=BB;/**
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
*/function WB(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}var VB=WB;/**
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
*/function MB(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}var XB=MB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var KB=eB,QB=PB,YB=fa,R0=he,ZB=J,JB=OB,eU=LB,rU=SB,nU=TB,tU=HB,aU=DB,iU=qB,lU=UB,sU=VB,oU=XB,dr=[0,0,0,0,0,0,0,0,0,0];function uU(e,r){var n,t,a,s,f;return t=(r-e)/e,a=-QB(t),s=e*a,f=R0(2*a),r<e&&(f=-f),dr[0]=eU(f),dr[1]=rU(f),dr[2]=nU(f),dr[3]=tU(f),dr[4]=aU(f),dr[5]=iU(f),dr[6]=lU(f),dr[7]=sU(f),dr[8]=oU(f),dr[9]=-.0005967612901927463,n=KB(dr,1/e),n*=ZB(-s)/R0(JB*e),r<e&&(n=-n),n+=YB(R0(s))/2,n}var cU=uU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function fU(e,r){var n=1,t=e,a=r;return s;function s(){var f=n;return t+=1,n*=a/t,f}}var vU=fU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dU=Eo,pU=vU;function mU(e,r,n){var t,a;return n=n||0,a=pU(e,r),t=dU(a,{initialValue:n}),t}var hU=mU;/**
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
*/function gU(e){var r,n,t;return e===0?1/0:(e<0?r=-e:r=e,r<=1?(n=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),t=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,n=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),t=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),n/t)}var yU=gU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $U=yU,wU=$U;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NU=wU,jo=NU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xU=jo,_U=xo,bU=bo,IU=Fr,EU=he,jU=K,dn=J,La=ue,H0=Io,z0=oa,_2=Ce,Ll=xt,Ca=va,D0=Ti,PU=ca;function AU(e,r){var n,t,a,s,f,p,v;return a=e+D0-.5,v=(r-e-D0+.5)/a,e<1?r<=Ca?dn(e*_2(r)-r-_U(e)):La(r,e)*dn(-r)/bU(e):(jU(v*v*e)<=100&&e>150?(n=e*(IU(v)-v)+r*(.5-D0)/a,n=dn(n)):(s=e*_2(r/a),f=e-r,z0(s,f)<=Ca||H0(s,f)>=Ll?(t=f/e,z0(s,f)/2>Ca&&H0(s,f)/2<Ll?(p=La(r/a,e/2)*dn(f/2),n=p*p):z0(s,f)/4>Ca&&H0(s,f)/4<Ll&&r>e?(p=La(r/a,e/4)*dn(f/4),n=p*p,n*=n):t>Ca&&t<Ll?n=La(r*dn(t)/a,e):n=dn(s+f)):n=La(r/a,e)*dn(f)),n*=EU(a/PU)/xU(e),n)}var OU=AU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var G0=S,kU=Xe,b2=K,LU=ua,CU=Ce,SU=ue,FU=h1;function TU(e,r){var n,t;if(G0(e)||G0(r))return NaN;if(r===0)return 0;if(e===0)return-1;if(e<0&&r%2===0&&(e=-e),e>0){if((b2(r*(e-1))<.5||b2(r)<.2)&&(t=CU(e)*r,t<.5))return LU(t)}else if(FU(r)!==r)return NaN;return n=SU(e,r)-1,kU(n)||G0(n)?NaN:n}var RU=TU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HU=RU,zU=HU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I2=wt;function DU(e){return e>0?I2(e-1):I2(e+1)}var GU=DU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qU=GU,Z5=qU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var E2=Z5,BU=Sr,UU=Z,Cl=q;function WU(e,r){return r===UU?Cl:r===Cl?0:r>0?E2(r)?e:0:E2(r)?BU(Cl,e):Cl}var VU=WU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var MU=ve,XU=ee,KU=1072693247,Sl=1e300,Fl=1e-300;function QU(e,r){var n,t;return t=XU(e),n=t&MU,n<=KU?r<0?Sl*Sl:Fl*Fl:r>0?Sl*Sl:Fl*Fl}var YU=QU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZU=K,j2=q;function JU(e,r){return e===-1?(e-e)/(e-e):e===1?1:ZU(e)<1==(r===j2)?0:j2}var eW=JU;/**
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
*/function rW(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var nW=rW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var tW=ee,Tl=ne,P2=Le,aW=Ie,iW=nW,lW=1048575,A2=1048576,sW=1072693248,oW=536870912,uW=524288,cW=20,fW=9007199254740992,vW=.9617966939259756,dW=.9617967009544373,pW=-7028461650952758e-24,mW=[1,1.5],hW=[0,.5849624872207642],gW=[0,1350039202129749e-23];function yW(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<A2&&(r*=fW,x-=53,n=tW(r)),x+=(n>>cW)-aW|0,b=n&lW|0,n=b|sW|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=A2),r=P2(r,n),i=mW[I],N=r-i,_=1/(r+i),a=N*_,f=Tl(a,0),t=(n>>1|oW)+uW,t+=I<<18,v=P2(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*iW(s),m+=p*(f+a),s=f*f,v=3+s+m,v=Tl(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=Tl(o,0),d=_-(o-N),h=dW*o,g=pW*o+d*vW+gW[I],l=hW[I],$=x,w=h+g+l+$,w=Tl(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var $W=yW;/**
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
*/function wW(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var NW=wW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xW=ne,_W=NW,bW=1.4426950408889634,IW=1.4426950216293335,EW=19259629911266175e-24;function jW(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*_W(a),f=IW*a,p=a*EW-s*bW,t=f+p,t=xW(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var PW=jW;/**
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
*/function AW(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var OW=AW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kW=ee,O2=Le,LW=ne,CW=Ke,SW=nn,FW=Nt,k2=Ie,L2=ve,C2=Yn,TW=OW,S2=1048576,RW=1071644672,Sa=20,HW=.6931471824645996,zW=-1904654299957768e-24;function DW(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&L2|0,d=(o>>Sa)-k2|0,l=0,o>RW&&(l=e+(S2>>d+1)>>>0,d=((l&L2)>>Sa)-k2|0,t=(l&~(C2>>d))>>>0,s=O2(0,t),l=(l&C2|S2)>>Sa-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=LW(s,0),p=s*HW,v=(n-(s-r))*FW+s*zW,i=p+v,c=v-(i-p),s=i*i,a=i-s*TW(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=kW(i),e=CW(e),e+=l<<Sa>>>0,e>>Sa<=0?i=SW(i,l):i=O2(i,e),i}var GW=DW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var F2=S,T2=Z5,R2=Xe,qW=be,H2=he,BW=K,q0=rn,UW=ne,z2=Ke,WW=Z,VW=q,B0=ve,MW=VU,XW=YU,KW=eW,QW=$W,YW=PW,ZW=GW,JW=1072693247,eV=1105199104,rV=1139802112,D2=1083179008,nV=1072693248,tV=1083231232,aV=3230714880,G2=31,pn=1e300,mn=1e-300,iV=8008566259537294e-32,Gr=[0,0],q2=[0,0];function J5(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(F2(e)||F2(r))return NaN;if(q0.assign(r,Gr,1,0),p=Gr[0],v=Gr[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return H2(e);if(r===-.5)return 1/H2(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(R2(r))return KW(e,r)}if(q0.assign(e,Gr,1,0),s=Gr[0],f=Gr[1],f===0){if(s===0)return MW(e,r);if(e===1)return 1;if(e===-1&&T2(r))return-1;if(R2(e))return e===WW?J5(-0,-r):r<0?0:VW}if(e<0&&qW(r)===!1)return(e-e)/(e-e);if(a=BW(e),n=s&B0|0,t=p&B0|0,c=s>>>G2|0,i=p>>>G2|0,c&&T2(r)?c=-1:c=1,t>eV){if(t>rV)return XW(e,r);if(n<JW)return i===1?c*pn*pn:c*mn*mn;if(n>nV)return i===0?c*pn*pn:c*mn*mn;h=YW(q2,a)}else h=QW(q2,a,n);if(l=UW(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,q0.assign(g,Gr,1,0),w=z2(Gr[0]),y=z2(Gr[1]),w>=D2){if(w-D2|y||d+iV>g-o)return c*pn*pn}else if((w&B0)>=tV&&(w-aV|y||d<=g-o))return c*mn*mn;return g=ZW(w,o,d),c*g}var lV=J5;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sV=lV,oV=sV;/**
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
*/var fV=Fi,B2=oV,vV=J,dV=cV,pV=143.01608;function mV(e){var r,n,t;return r=1/e,r=1+r*dV(r),n=vV(e),e>pV?(t=B2(e,.5*e-.25),n=t*(t/n)):n=B2(e,e-.5)/n,fV*n*r}var hV=mV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gV=_o;function yV(e,r){return r/((1+gV*e)*e)}var $V=yV;/**
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
*/var xV=S,_V=be,bV=Si,U2=K,IV=qe,EV=Ci,W2=q,V2=Z,M2=nr,X2=hV,K2=$V,jV=NV;function PV(e){var r,n,t,a;if(_V(e)&&e<0||e===V2||xV(e))return NaN;if(e===0)return bV(e)?V2:W2;if(e>171.61447887182297)return W2;if(e<-170.5674972726612)return 0;if(n=U2(e),n>33)return e>=0?X2(e):(t=IV(n),t&1?r=1:r=-1,a=n-t,a>.5&&(t+=1,a=n-t),a=n*EV(M2*a),r*M2/(U2(a)*X2(n)));for(a=1;e>=3;)e-=1,a*=e;for(;e<0;){if(e>-1e-9)return K2(e,a);a/=e,e+=1}for(;e<2;){if(e<1e-9)return K2(e,a);a/=e,e+=1}return e===2?a:(e-=2,a*jV(e))}var AV=PV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OV=AV,kV=OV;/**
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
*/function LV(e){var r,n,t;return e===0?-.01803556856784494:(e<0?r=-e:r=e,r<=1?(n=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),t=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,n=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),t=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),n/t)}var CV=LV;/**
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
*/function SV(e){var r,n,t;return e===0?.04906224540690395:(e<0?r=-e:r=e,r<=1?(n=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),t=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,n=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),t=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),n/t)}var FV=SV;/**
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
*/function TV(e){var r,n,t;return e===0?-.029232972183027003:(e<0?r=-e:r=e,r<=1?(n=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),t=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,n=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),t=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),n/t)}var RV=TV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var U0=Ce,HV=tn,zV=CV,DV=FV,GV=RV,qV=.15896368026733398,BV=.5281534194946289,UV=.45201730728149414;function WV(e,r,n){var t,a,s,f;if(e<HV)return-U0(e);if(r===0||n===0)return 0;if(a=0,e>2){if(e>=3){do e-=1,n-=1,a+=U0(e);while(e>=3);n=e-2}return s=n*(e+1),f=zV(n),a+=s*qV+s*f,a}return e<1&&(a+=-U0(e),n=r,r=e,e+=1),e<=1.5?(s=DV(r),t=r*n,a+=t*BV+t*s,a):(s=n*r,f=GV(-n),a+=s*UV+s*f,a)}var VV=WV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q2=kV,Y2=ua,MV=Fr,XV=S,Z2=VV;function KV(e){return XV(e)?NaN:e<0?e<-.5?Q2(1+e)-1:Y2(-MV(e)+Z2(e+2,e+1,e)):e<2?Y2(Z2(e+1,e,e-1)):Q2(1+e)-1}var QV=KV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function JV(e,r){var n,t,a,s;return n=-r,r=-r,t=e+1,a=1,f;function f(){return s=n/t,n*=r,a+=1,n/=a,t+=1,s}}var eM=JV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rM=zU,nM=Eo,tM=ZV,aM=eM;function iM(e,r,n){var t,a,s,f,p;return a=tM(e),s=(a+1)/e,f=rM(r,e),a-=f,a/=e,p=aM(e,r),f+=1,t=n?s:0,a=-f*nM(p,{initialValue:(t-a)/f}),n&&(a=-a),[a,s]}var lM=iM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sM=11754943508222875e-54,eg=sM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ks=K,Or=eg,oM=tn,uM=1e6;function cM(e,r,n){var t,a,s,f,p,v,c;if(t=typeof e.next=="function",c=t?e.next().value:e(),f=c[1],s=c[0],f===0&&(f=Or),p=f,v=0,t===!0)do c=e.next().value,c&&(v=c[1]+c[0]*v,v===0&&(v=Or),p=c[1]+c[0]/p,p===0&&(p=Or),v=1/v,a=p*v,f*=a);while(Ks(a-1)>r&&--n);else do c=e(),c&&(v=c[1]+c[0]*v,v===0&&(v=Or),p=c[1]+c[0]/p,p===0&&(p=Or),v=1/v,a=p*v,f*=a);while(c&&Ks(a-1)>r&&--n);return s/f}function fM(e,r,n){var t,a,s,f,p,v;if(t=typeof e.next=="function",v=t?e.next().value:e(),s=v[1],s===0&&(s=Or),f=s,p=0,t===!0)do v=e.next().value,v&&(p=v[1]+v[0]*p,p===0&&(p=Or),f=v[1]+v[0]/f,f===0&&(f=Or),p=1/p,a=f*p,s*=a);while(v&&Ks(a-1)>r&&--n);else do v=e(),v&&(p=v[1]+v[0]*p,p===0&&(p=Or),f=v[1]+v[0]/f,f===0&&(f=Or),p=1/p,a=f*p,s*=a);while(v&&Ks(a-1)>r&&--n);return s}function vM(e,r){var n,t,a;return t={},arguments.length>1&&(t=r),n=t.maxIter||uM,a=t.tolerance||oM,t.keep?fM(e,a,n):cM(e,a,n)}var dM=vM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rg=K,pM=tn,Mt=eg,mM=1e6;function hM(e,r,n){var t,a,s,f,p,v;v=e(),p=v[1],a=v[0],p===0&&(p=Mt),s=p,f=0;do v=e(),v&&(f=v[1]+v[0]*f,f===0&&(f=Mt),s=v[1]+v[0]/s,s===0&&(s=Mt),f=1/f,t=s*f,p*=t);while(v&&rg(t-1)>r&&--n);return a/p}function gM(e,r,n){var t,a,s,f,p;p=e(),f=p[1],f===0&&(f=Mt),a=f,s=0;do p=e(),p&&(s=p[1]+p[0]*s,s===0&&(s=Mt),a=p[1]+p[0]/a,a===0&&(a=Mt),s=1/s,t=a*s,f*=t);while(p&&rg(t-1)>r&&--n);return f}function yM(e,r){var n,t,a;return t={},arguments.length>1&&(t=r),a=t.tolerance||pM,n=t.maxIter||mM,t.keep?gM(e,a,n):hM(e,a,n)}var $M=yM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wM=Y5,NM=dM,xM=$M,lf;wM()?lf=NM:lf=xM;var ng=lf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function _M(e,r){var n=r-e+1,t=e,a=0;return s;function s(){return a+=1,n+=2,[a*(t-a),n]}}var bM=_M;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var IM=ng,EM=bM;function jM(e,r){var n=EM(e,r);return 1/(r-e+1+IM(n))}var PM=jM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var AM=xo,OM=qe,Fa=bo,J2=K,kM=J,em=ue,pr=Ce,LM=BG,rm=q5,CM=Fi,nm=xt,SM=q,FM=MG,TM=Hq,tm=qq,RM=cU,W0=hU,am=OU,HM=lM,im=PM,zM=170;function tg(e,r,n,t){var a,s,f,p,v,c,i,l,o,d,h,g,w,y,$;if(e<0||r<=0)return NaN;if(s=n===void 0?!0:n,l=t,o=0,r>=zM&&!s)return l&&r*4<e?(o=r*pr(e)-e,o+=pr(im(r,e))):!l&&r>4*e?(o=r*pr(e)-e,p=0,o+=pr(W0(r,e,p)/r)):(o=tg(r,e,!0,l),o===0?l?(o=1+1/(12*r)+1/(288*r*r),o=pr(o)-r+(r-.5)*pr(r),o+=pr(CM)):(o=r*pr(e)-e,p=0,o+=pr(W0(r,e,p)/r)):o=pr(o)+AM(r)),o>nm?SM:kM(o);switch(i=r<30&&r<=e+1&&e<nm,i?(y=OM(r),d=y===r,v=d?!1:J2(y-r)===.5):d=v=!1,d&&e>.6?(l=!l,f=0):v&&e>.2?(l=!l,f=1):e<LM&&r>1?f=6:e<.5?-.4/pr(e)<r?f=2:f=3:e<1.1?e*.75<r?f=2:f=3:(c=!1,s&&r>20&&(h=J2((e-r)/r),r>200?20/r>h*h&&(c=!0):h<.4&&(c=!0)),c?f=5:e-1/(3*e)<r?f=2:(f=4,l=!l)),f){case 0:o=FM(r,e),s===!1&&(o*=Fa(r));break;case 1:o=TM(r,e),s===!1&&(o*=Fa(r));break;case 2:o=s?am(r,e):tm(r,e),o!==0&&(p=0,a=!1,l&&(p=s?1:Fa(r),s||o>=1||rm*o>p?(p/=o,s||r<1||rm/r>p?(p*=-r,a=!0):p=0):p=0)),o*=W0(r,e,p)/r,a&&(l=!1,o=-o);break;case 3:l=!l,w=HM(r,e,l),o=w[0],$=w[1],l=!1,s&&(o/=$);break;case 4:o=s?am(r,e):tm(r,e),o!==0&&(o*=im(r,e));break;case 5:o=RM(r,e),e>=r&&(l=!l);break;case 6:o=s?em(e,r)/Fa(r+1):em(e,r)/r,o*=1-r*e/(r+1);break}return s&&o>1&&(o=1),l&&(g=s?1:Fa(r),o=g-o),o}var DM=tg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jt=J,Rl=ue,qM=Ce,lm=xt,sm=va;function BM(e,r){var n,t;return t=e*qM(r),r>=1?t<lm&&-r>sm?n=Rl(r,e)*jt(-r):e>=1?n=Rl(r/jt(r/e),e):n=jt(t-r):t>sm?n=Rl(r,e)*jt(-r):r/e<lm?n=Rl(r/jt(r/e),e):n=jt(t-r),n}var UM=BM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var WM=jo,VM=xo,MM=bo,XM=Fr,KM=he,QM=K,hn=J,Ta=ue,V0=Io,M0=oa,om=Ce,Hl=xt,Ra=va,X0=Ti,YM=ca;function ZM(e,r){var n,t,a,s,f,p,v;return a=e+X0-.5,v=(r-e-X0+.5)/a,e<1?r<=Ra?hn(e*om(r)-r-VM(e)):Ta(r,e)*hn(-r)/MM(e):(QM(v*v*e)<=100&&e>150?(n=e*(XM(v)-v)+r*(.5-X0)/a,n=hn(n)):(s=e*om(r/a),f=e-r,M0(s,f)<=Ra||V0(s,f)>=Hl?(t=f/e,M0(s,f)/2>Ra&&V0(s,f)/2<Hl?(p=Ta(r/a,e/2)*hn(f/2),n=p*p):M0(s,f)/4>Ra&&V0(s,f)/4<Hl&&r>e?(p=Ta(r/a,e/4)*hn(f/4),n=p*p,n*=n):t>Ra&&t<Hl?n=Ta(r*hn(t)/a,e):n=hn(s+f)):n=Ta(r/a,e)*hn(f)),n*=KM(a/YM)/WM(e),n)}var JM=ZM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var eX=Tz,um=GG,rX=Ri,nX=Fr,zl=K,cm=ue,tX=Ce,aX=Li,fm=tn,iX=UM,lX=JM,gn=new Array(30);function sX(e,r,n,t,a,s,f){var p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;if(o=r-1,b=e+o/2,t<.35?w=nX(-t):w=tX(n),I=-b*w,$=lX(r,I),$<=aX)return a;for(f?(p=$/eX(e,r),p/=cm(b,r)):p=iX(r,I)/cm(b,r),p*=s,gn[0]=1,m=rX(I,r,!0,!0),m/=$,i=a+p*m,c=1,d=w/2,d*=d,h=1,y=4*b*b,l=r,_=1;_<gn.length;++_){for(c+=2,gn[_]=0,g=r-_,v=3,N=1;N<_;++N)g=N*r-_,gn[_]+=g*gn[_-N]/um(v),v+=2;if(gn[_]/=_,gn[_]+=o/um(c),m=(l*(l+1)*m+(I+l+1)*h)/y,h*=d,l+=2,x=p*gn[_]*m,i+=x,x>1){if(zl(x)<zl(fm*i))break}else if(zl(x/fm)<zl(i))break}return i}var oX=sX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fX=$o,vm=S,K0=q;function vX(e,r){return vm(e)||vm(r)?NaN:e===K0||r===K0?K0:e===r&&e===0?fX(e)?e:r:e>r?e:r}var dX=vX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dm=K,hX=mX;function gX(e,r){return hX(dm(e),dm(r))}var yX=gX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pm=K,NX=oa;function xX(e,r){return NX(pm(e),pm(r))}var _X=xX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bX=_X,IX=bX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Q0=jo,EX=wX,jX=IX,mm=ua,yn=Fr,hm=he,Dl=K,br=J,Ir=ue,PX=oa,tr=Ce,Er=xt,Pt=va,Y0=Ti,AX=ca;function OX(e,r,n,t,a){var s,f,p,v,c,i,l,o,d,h,g,w,y,$;if(!a)return Ir(n,e)*Ir(t,r);if(y=e+r,v=e+Y0-.5,c=r+Y0-.5,i=y+Y0-.5,s=Q0(y),s/=Q0(e)*Q0(r),s*=hm(c/AX),s*=hm(v/i),l=(n*r-t*v)/v,o=(t*e-n*c)/c,jX(l,o)<.2)if(l*o>0||PX(e,r)<1)Dl(l)<.1?s*=br(e*yn(l)):s*=Ir(n*i/v,e),Dl(o)<.1?s*=br(r*yn(o)):s*=Ir(t*i/c,r);else if(EX(l,o)<.5)f=e<r,p=r/e,f&&p*o<.1||!f&&l/p>.1?(d=mm(p*yn(o)),d=l+d+d*l,d=e*yn(d),s*=br(d)):(d=mm(yn(l)/p),d=o+d+d*o,d=r*yn(d),s*=br(d));else if(Dl(l)<Dl(o))if($=e*yn(l)+r*tr(t*i/c),$<=Pt||$>=Er){if($+=tr(s),$>=Er)return NaN;s=br($)}else s*=br($);else if($=r*yn(o)+e*tr(n*i/v),$<=Pt||$>=Er){if($+=tr(s),$>=Er)return NaN;s=br($)}else s*=br($);else if(g=n*i/v,w=t*i/c,l=e*tr(g),o=r*tr(w),l>=Er||l<=Pt||o>=Er||o<=Pt)if(e<r)if(h=Ir(w,r/e),d=e*(tr(g)+tr(h)),d<Er&&d>Pt)s*=Ir(h*g,e);else{if(o+=l+tr(s),o>=Er)return NaN;s=br(o)}else if(h=Ir(g,e/r),d=(tr(h)+tr(w))*r,d<Er&&d>Pt)s*=Ir(h*w,r);else{if(o+=l+tr(s),o>=Er)return NaN;s=br(o)}else s*=Ir(g,e)*Ir(w,r);return s}var x1=OX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kX=ng,LX=x1,CX={keep:!0,maxIter:1e3};function SX(e,r,n,t){var a=0;return s;function s(){var f,p,v;return p=(e+a-1)*(e+r+a-1)*a*(r-a)*n*n,f=e+2*a-1,p/=f*f,v=a,v+=a*(r-a)*n/(e+2*a-1),v+=(e+a)*(e*t-r*n+1+a*(2-n))/(e+2*a+1),a+=1,[p,v]}}function FX(e,r,n,t,a,s){var f,p,v;return f=LX(e,r,n,t,a),s&&(s[1]=f),f===0?f:(v=SX(e,r,n,t),p=kX(v,CX),f/p)}var TX=FX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RX=9007199254740991,ag=RX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HX=2147483647,zX=HX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function qX(e,r){var n=1,t;if(e===0)return r;if(r===0)return e;for(;e%2===0&&r%2===0;)e/=2,r/=2,n*=2;for(;e%2===0;)e/=2;for(;r;){for(;r%2===0;)r/=2;e>r&&(t=r,r=e,e=t),r-=e}return n*e}var BX=qX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gm=S,ym=be,$m=q,wm=Z,Nm=zX,UX=GX,WX=BX;function VX(e,r){return gm(e)||gm(r)?NaN:e===$m||r===$m||e===wm||r===wm?NaN:ym(e)&&ym(r)?(e<0&&(e=-e),r<0&&(r=-r),e<=Nm&&r<=Nm?UX(e,r):WX(e,r)):NaN}var MX=VX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var QX=ag,YX=q,xm=be,_m=S,ZX=$1,JX=qe,eK=KX;function sf(e,r){var n,t,a,s,f,p,v;if(_m(e)||_m(r))return NaN;if(!xm(e)||!xm(r))return NaN;if(r<0||(t=1,e<0&&(e=-e+r-1,ZX(r)&&(t*=-1)),r>e))return 0;if(r===0||r===e)return t;if(r===1||r===e-1)return t*e;for(e-r<r&&(r=e-r),v=JX(QX/e),n=1,f=1;f<=r&&!(n>v);f++)n*=e,n/=f,e-=1;return f>r?t*n:(a=sf(e,r-f+1),a===YX?t*a:(s=sf(r,r-f+1),p=eK(a,s),a/=p,s/=p,n/=s,t*n*a))}var rK=sf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bm=tK,Jn=qe,Ha=ue,aK=Li;function iK(e,r,n,t){var a,s,f,p,v;if(s=Ha(n,e),s>aK)for(p=s,v=Jn(e-1);v>r;v--)p*=(v+1)*t/((e-v)*n),s+=p;else if(f=Jn(e*n),f<=r+1&&(f=Jn(r+2)),s=Ha(n,f)*Ha(t,e-f),s*=bm(Jn(e),Jn(f)),s===0)for(v=f-1;v>r;v--)s+=Ha(n,v)*Ha(t,e-v),s*=bm(Jn(e),Jn(v));else{for(p=s,a=s,v=f-1;v>r;v--)p*=(v+1)*t/((e-v)*n),s+=p;for(p=a,v=f+1;v<=e;v++)p*=(e-v+1)*n/(v*t),s+=p}return s}var lK=iK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sK=x1;function oK(e,r,n,t,a,s,f){var p,v,c,i;if(p=sK(e,r,n,t,s),f&&(f[1]=p),p/=e,p===0)return p;for(c=1,v=1,i=0;i<a-1;++i)v*=(e+r+i)*n/(e+i+1),c+=v;return p*=c,p}var uK=oK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Z0=jo,cK=Eo,fK=Fr,vK=he,J0=J,Gl=ue,za=Ce,dK=Li,Im=xt,Em=va,eu=Ti,pK=ca,jm={maxTerms:100};function mK(e,r,n,t){var a=1-r,s=1;return f;function f(){var p=t/e;return e+=1,t*=a*n/s,s+=1,a+=1,p}}function hK(e,r,n,t,a,s,f){var p,v,c,i,l,o,d,h;return a?(d=e+r,v=e+eu-.5,c=r+eu-.5,i=d+eu-.5,p=Z0(d)/(Z0(e)*Z0(r)),l=za(i/c)*(r-.5),o=za(n*i/v)*e,l>Em&&l<Im&&o>Em&&o<Im?(e*r<c*10?p*=J0((r-.5)*fK(e/c)):p*=Gl(i/c,r-.5),p*=Gl(n*i/v,e),p*=vK(v/pK),s&&(s[1]=p*Gl(f,r))):(p=za(p)+l+o+(za(v)-1)/2,s&&(s[1]=J0(p+r*za(f))),p=J0(p))):p=Gl(n,e),p<dK?t:(h=mK(e,r,n,p),jm.initialValue=t,cK(h,jm))}var gK=hK,yK=S,$K=ua,ql=qe,Pm=Fr,Am=w1,ar=fR,ru=he,wK=J,Da=ue,NK=Io,Om=oa,Bl=q5,km=Li,xK=pR,_K=B5,ig=nr,$n=oX,nu=cX,bK=x1,Lm=TX,IK=lK,Ga=uK,jr=gK,EK=1/ig;function jK(e,r,n,t,a,s,f,p){var v,c,i,l,o,d,h,g,w,y,$,m;if(m=1-e,h=p,g=p+f,s[g]=-1,yK(e)||e<0||e>1)return s[h]=NaN,s[g]=NaN,s;if(t){if(r<0||n<0)return s[h]=NaN,s[g]=NaN,s;if(r===0){if(n===0)return s[h]=NaN,s[g]=NaN,s;if(n>0)return s[h]=a?0:1,s}else if(n===0&&r>0)return s[h]=a?1:0,s}else if(r<=0||n<=0)return s[h]=NaN,s[g]=NaN,s;return e===0?(r===1?s[g]=1:s[g]=r<1?Bl/2:km*2,a?(s[h]=t?1:ar(r,n),s):(s[h]=0,s)):e===1?(n===1?s[g]=1:s[g]=n<1?Bl/2:km*2,a?s[h]=0:s[h]=t?1:ar(r,n),s):r===.5&&n===.5?(s[g]=EK*ru(m*e),$=Am(ru(a?m:e)),$/=_K,t||($*=ig),s[h]=$,s):(r===1&&(d=n,n=r,r=d,d=m,m=e,e=d,a=!a),n===1?r===1?(s[h]=a?m:e,s[g]=1,s):(s[g]=r*Da(e,r-1),m<.5?$=a?-$K(r*Pm(-m)):wK(r*Pm(-m)):$=a?-(Da(e,r)-1):Da(e,r),t||($/=r),s[h]=$,s):(Om(r,n)<=1?(e>.5&&(d=n,n=r,r=d,d=m,m=e,e=d,a=!a),NK(r,n)<=1?r>=Om(.2,n)||Da(e,r)<=.9?a?(i=-(t?1:ar(r,n)),a=!1,i=-jr(r,n,e,i,t,s,m)):i=jr(r,n,e,0,t,s,m):(d=n,n=r,r=d,d=m,m=e,e=d,a=!a,m>=.3?a?(i=-(t?1:ar(r,n)),a=!1,i=-jr(r,n,e,i,t,s,m)):i=jr(r,n,e,0,t,s,m):(t?c=1:c=nu(r+n,r,20),i=Ga(r,n,e,m,20,t,s),a?(i-=t?1:ar(r,n),a=!1,i=-$n(r+20,n,e,m,i,c,t)):i=$n(r+20,n,e,m,i,c,t))):n<=1||e<.1&&Da(n*e,r)<=.7?a?(i=-(t?1:ar(r,n)),a=!1,i=-jr(r,n,e,i,t,s,m)):i=jr(r,n,e,0,t,s,m):(d=n,n=r,r=d,d=m,m=e,e=d,a=!a,m>=.3?a?(i=-(t?1:ar(r,n)),a=!1,i=-jr(r,n,e,i,t,s,m)):i=jr(r,n,e,0,t,s,m):r>=15?a?(i=-(t?1:ar(r,n)),a=!1,i=-$n(r,n,e,m,i,1,t)):i=$n(r,n,e,m,0,1,t):(t?c=1:c=nu(r+n,r,20),i=Ga(r,n,e,m,20,t,s),a?(i-=t?1:ar(r,n),a=!1,i=-$n(r+20,n,e,m,i,c,t)):i=$n(r+20,n,e,m,i,c,t)))):(r<n?v=r-(r+n)*e:v=(r+n)*m-n,v<0&&(d=n,n=r,r=d,d=m,m=e,e=d,a=!a),n<40?ql(r)===r&&ql(n)===n&&r<xK-100?(w=r-1,y=n+w,i=IK(y,w,e,m),t||(i*=ar(r,n))):n*e<=.7?a?(i=-(t?1:ar(r,n)),a=!1,i=-jr(r,n,e,i,t,s,m)):i=jr(r,n,e,0,t,s,m):r>15?(y=ql(n),y===n&&(y-=1),l=n-y,t?c=1:c=nu(r+l,l,y),i=Ga(l,r,m,e,y,t),i=$n(r,l,e,m,i,1,t),i/=c):t?(y=ql(n),l=n-y,l<=0&&(y-=1,l+=1),i=Ga(l,r,m,e,y,t),i+=Ga(r,l,e,m,20,t),a&&(i-=1),i=$n(r+20,l,e,m,i,1,t),a&&(i=-i,a=!1)):i=Lm(r,n,e,m,t,s):i=Lm(r,n,e,m,t,s)),s[g]<0&&(s[g]=bK(r,n,e,m,!0)),o=m*e,s[g]!==0&&(Bl*o<s[g]?s[g]=Bl/2:s[g]/=o),s[h]=a?(t?1:ar(r,n))-i:i,s))}var lg=jK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PK=lg;function AK(e,r,n,t,a){return PK(e,r,n,t,a,[0,0],1,0)}var OK=AK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kK=M,sg=OK,LK=lg;kK(sg,"assign",LK);var CK=sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SK=CK.assign;function FK(e,r,n,t,a){var s=[0,0];return t=t!==!1,a=a===!0,SK(e,r,n,t,a,s,1,0),s[0]}var TK=FK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RK=TK,da=RK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HK=da,tu=S;function zK(e,r,n){return tu(e)||tu(r)||tu(n)||r<=0||n<=0?NaN:e<=0?0:e>=1?1:HK(e,r,n)}var DK=zK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GK=ce,qK=da,au=S;function BK(e,r){if(au(e)||au(r)||e<=0||r<=0)return GK(NaN);return n;function n(t){return au(t)?NaN:t<=0?0:t>=1?1:qK(t,e,r)}}var UK=BK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WK=M,og=DK,VK=UK;WK(og,"factory",VK);var _1=og;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MK=_1,iu=S,XK=q;function KK(e,r,n){return iu(e)||iu(r)||iu(n)||r<=0||n<=0?NaN:e<=0?0:e===XK?1:MK(e/(1+e),r,n)}var QK=KK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YK=ce,ZK=_1.factory,lu=S,JK=q;function eQ(e,r){var n;if(lu(e)||lu(r)||e<=0||r<=0)return YK(NaN);return n=ZK(e,r),t;function t(a){return lu(a)?NaN:a<=0?0:a===JK?1:n(a/(1+a))}}var rQ=eQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nQ=M,ug=QK,tQ=rQ;nQ(ug,"factory",tQ);var aQ=ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iQ=ee;function lQ(e){var r=iQ(e);return!!(r>>>31)}var sQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oQ=sQ,uQ=oQ;/**
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
*/var pQ=S,mQ=q,su=B5,hQ=D5,gQ=Z,yQ=fQ,$Q=dQ,Cm=6123233995736766e-32,wQ=2.414213562373095;function NQ(e){var r,n,t,a;return pQ(e)||e===0?e:e===mQ?su:e===gQ?-su:(e<0&&(n=!0,e=-e),r=0,e>wQ?(t=su,r=1,e=-(1/e)):e<=.66?t=0:(t=hQ,r=2,e=(e-1)/(e+1)),a=e*e,a=a*yQ(a)/$Q(a),a=e*a+e,r===2?a+=.5*Cm:r===1&&(a+=Cm),t+=a,n?-t:t)}var xQ=NQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _Q=xQ,bQ=_Q;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ul=Xe,wn=Sr,IQ=uQ,Sm=S,EQ=bQ,jQ=q,Nn=nr;function PQ(e,r){var n;return Sm(r)||Sm(e)?NaN:Ul(r)?r===jQ?Ul(e)?wn(Nn/4,e):wn(0,e):Ul(e)?wn(3*Nn/4,e):wn(Nn,e):Ul(e)?wn(Nn/2,e):e===0?r>=0&&!IQ(r)?wn(0,e):wn(Nn,e):r===0?wn(Nn/2,e):(n=EQ(e/r),r<0?n<=0?n+Nn:n-Nn:n)}var AQ=PQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OQ=AQ,cg=OQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou=S,kQ=cg,LQ=.3183098861837907;function CQ(e,r,n){return ou(e)||ou(n)||ou(r)||n<=0?NaN:LQ*kQ(e-r,n)+.5}var SQ=CQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FQ=ce,uu=S,TQ=cg,RQ=.3183098861837907;function HQ(e,r){if(uu(r)||uu(e)||r<=0)return FQ(NaN);return n;function n(t){return uu(t)?NaN:RQ*TQ(t-e,r)+.5}}var zQ=HQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DQ=M,fg=SQ,GQ=zQ;DQ(fg,"factory",GQ);var qQ=fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BQ=Ri,cu=S,UQ=q;function WQ(e,r,n){return cu(e)||cu(r)||cu(n)||r<0||n<=0?NaN:r===0?e<0?0:1:e<=0?0:e===UQ?1:BQ(e*n,r)}var VQ=WQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fm=S;function MQ(e,r){return Fm(e)||Fm(r)?NaN:e<r?0:1}var XQ=MQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KQ=ce,Tm=S;function QQ(e){if(Tm(e))return KQ(NaN);return r;function r(n){return Tm(n)?NaN:n<e?0:1}}var YQ=QQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZQ=M,vg=XQ,JQ=YQ;ZQ(vg,"factory",JQ);var pa=vg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eY=ce,rY=pa.factory,nY=Ri,Rm=S,tY=q;function aY(e,r){if(Rm(e)||Rm(r)||e<0||r<=0)return eY(NaN);if(e===0)return rY(0);return n;function n(t){return t<=0?0:t===tY?1:nY(t*r,e)}}var iY=aY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lY=M,dg=VQ,sY=iY;lY(dg,"factory",sY);var _t=dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oY=_t,Hm=S;function uY(e,r){return Hm(e)||Hm(r)||r<0?NaN:r===0?e<0?0:1:e<=0?0:oY(e*e,r/2,.5)}var cY=uY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fY=pa.factory,vY=_t.factory,dY=S;function pY(e){var r;if(e===0)return fY(0);return r=vY(e/2,.5),n;function n(t){return dY(t)?NaN:t<0?0:r(t*t)}}var mY=pY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hY=M,pg=cY,gY=mY;hY(pg,"factory",gY);var yY=pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $Y=_t;function wY(e,r){return $Y(e,r/2,.5)}var NY=wY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xY=_t.factory;function _Y(e){return xY(e/2,.5)}var bY=_Y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IY=M,mg=NY,EY=bY;IY(mg,"factory",EY);var jY=mg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu=S,PY=y1,AY=nr;function OY(e,r,n){var t;return fu(e)||fu(r)||fu(n)||n<0?NaN:n===0?e<r?0:1:e<r-n?0:e>r+n?1:(t=(e-r)/n,(1+t+PY(t)/AY)/2)}var kY=OY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LY=ce,CY=pa.factory,vu=S,SY=y1,FY=nr;function TY(e,r){if(vu(e)||vu(r)||r<0)return LY(NaN);if(r===0)return CY(e);return n;function n(t){var a;return vu(t)?NaN:t<e-r?0:t>e+r?1:(a=(t-e)/r,(1+a+SY(a)/FY)/2)}}var RY=TY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HY=M,hg=kY,zY=RY;HY(hg,"factory",zY);var DY=hg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GY=qe;function qY(e){return GY(e)===e&&e>=0}var BY=qY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UY=BY,gg=UY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WY=gg,VY=_t;function MY(e,r,n){return WY(r)?VY(e,r,n):NaN}var XY=MY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KY=gg,QY=ce,YY=_t.factory;function ZY(e,r){return KY(e)?YY(e,r):QY(NaN)}var JY=ZY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eZ=M,yg=XY,rZ=JY;eZ(yg,"factory",rZ);var nZ=yg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tZ=S,aZ=J,iZ=q;function lZ(e,r){return tZ(r)||r<0||r===iZ?NaN:e<0?0:1-aZ(-r*e)}var sZ=lZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oZ=ce,uZ=S,cZ=J,fZ=q;function vZ(e){if(uZ(e)||e<0||e===fZ)return oZ(NaN);return r;function r(n){return n<0?0:1-cZ(-e*n)}}var dZ=vZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pZ=M,$g=sZ,mZ=dZ;pZ($g,"factory",mZ);var hZ=$g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm=da,du=S,gZ=q;function yZ(e,r,n){return du(e)||du(r)||du(n)||r<=0||n<=0?NaN:e<=0?0:e===gZ?1:r*e>n?zm(r*e/(n+r*e),r/2,n/2,!0,!1):zm(n/(n+r*e),n/2,r/2,!0,!0)}var $Z=yZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wZ=ce,Dm=da,pu=S,NZ=q;function xZ(e,r){if(pu(e)||pu(r)||e<=0||r<=0)return wZ(NaN);return n;function n(t){return pu(t)?NaN:t<=0?0:t===NZ?1:e*t>r?Dm(e*t/(r+e*t),e/2,r/2,!0,!1):Dm(r/(r+e*t),r/2,e/2,!0,!0)}}var _Z=xZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bZ=M,wg=$Z,IZ=_Z;bZ(wg,"factory",IZ);var EZ=wg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl=S,jZ=J,PZ=ue;function AZ(e,r,n,t){var a;return Wl(e)||Wl(r)||Wl(n)||Wl(t)||r<=0||n<=0?NaN:e<=t?0:(a=(e-t)/n,jZ(-PZ(a,-r)))}var OZ=AZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kZ=ce,Vl=S,LZ=J,CZ=ue;function SZ(e,r,n){if(Vl(e)||Vl(r)||Vl(n)||e<=0||r<=0)return kZ(NaN);return t;function t(a){var s;return Vl(a)?NaN:a<=n?0:(s=(a-n)/r,LZ(-CZ(s,-e)))}}var FZ=SZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TZ=M,Ng=OZ,RZ=FZ;TZ(Ng,"factory",RZ);var HZ=Ng;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu=S,Gm=J;function zZ(e,r,n){var t;return mu(e)||mu(r)||mu(n)||n<=0?NaN:(t=(e-r)/n,Gm(-Gm(-t)))}var DZ=zZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GZ=ce,hu=S,qm=J;function qZ(e,r){if(hu(e)||hu(r)||r<=0)return GZ(NaN);return n;function n(t){var a;return hu(t)?NaN:(a=(t-e)/r,qm(-qm(-a)))}}var BZ=qZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UZ=M,xg=DZ,WZ=BZ;UZ(xg,"factory",WZ);var VZ=xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MZ=Ri,gu=S;function XZ(e,r,n){return gu(e)||gu(r)||gu(n)||r<=0||n<=0?NaN:e<=0?0:MZ(n/e,r,!0,!0)}var KZ=XZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QZ=ce,YZ=Ri,yu=S;function ZZ(e,r){if(yu(e)||yu(r)||e<=0||r<=0)return QZ(NaN);return n;function n(t){return yu(t)?NaN:t<=0?0:YZ(r/t,e,!0,!0)}}var JZ=ZZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eJ=M,_g=KZ,rJ=JZ;eJ(_g,"factory",rJ);var nJ=_g;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u=S,Bm=ue;function tJ(e,r,n){return $u(e)||$u(r)||$u(n)||r<=0||n<=0?NaN:e<=0?0:e>=1?1:1-Bm(1-Bm(e,r),n)}var aJ=tJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iJ=ce,wu=S,Um=ue;function lJ(e,r){if(wu(e)||wu(r)||e<=0||r<=0)return iJ(NaN);return n;function n(t){return wu(t)?NaN:t<=0?0:t>=1?1:1-Um(1-Um(t,e),r)}}var sJ=lJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oJ=M,bg=aJ,uJ=sJ;oJ(bg,"factory",uJ);var cJ=bg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu=S,Wm=J;function fJ(e,r,n){var t;return Nu(e)||Nu(r)||Nu(n)||n<=0?NaN:(t=(e-r)/n,e<r?.5*Wm(t):1-.5*Wm(-t))}var vJ=fJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dJ=ce,xu=S,Vm=J;function pJ(e,r){if(xu(e)||xu(r)||r<=0)return dJ(NaN);return n;function n(t){var a;return xu(t)?NaN:(a=(t-e)/r,t<e?.5*Vm(a):1-.5*Vm(-a))}}var mJ=pJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hJ=M,Ig=vJ,gJ=mJ;hJ(Ig,"factory",gJ);var yJ=Ig;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u=S,$J=fa,wJ=he;function NJ(e,r,n){var t;return _u(e)||_u(r)||_u(n)||n<=0?NaN:e<r?0:(t=wJ(n/(2*(e-r))),$J(t))}var xJ=NJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _J=ce,bu=S,bJ=fa,IJ=he;function EJ(e,r){if(bu(e)||bu(r)||r<=0)return _J(NaN);return n;function n(t){var a;return bu(t)?NaN:t<e?0:(a=IJ(r/(2*(t-e))),bJ(a))}}var jJ=EJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PJ=M,Eg=xJ,AJ=jJ;PJ(Eg,"factory",AJ);var OJ=Eg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu=S,kJ=J;function LJ(e,r,n){var t;return Iu(e)||Iu(r)||Iu(n)||n<0?NaN:n===0?e<r?0:1:(t=(e-r)/n,1/(1+kJ(-t)))}var CJ=LJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SJ=ce,FJ=pa.factory,Eu=S,TJ=J;function RJ(e,r){if(Eu(e)||Eu(r)||r<0)return SJ(NaN);if(r===0)return FJ(e);return n;function n(t){var a;return Eu(t)?NaN:(a=(t-e)/r,1/(1+TJ(-a)))}}var HJ=RJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zJ=M,jg=CJ,DJ=HJ;zJ(jg,"factory",DJ);var GJ=jg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qJ=fa,BJ=he,ju=S;function UJ(e,r,n){var t,a;return ju(e)||ju(r)||ju(n)||n<0?NaN:n===0?e<r?0:1:(t=n*BJ(2),a=e-r,.5*qJ(-a/t))}var WJ=UJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VJ=ce,MJ=pa.factory,Pu=S,XJ=he,KJ=fa;function QJ(e,r){var n;if(Pu(e)||Pu(r)||r<0)return VJ(NaN);if(r===0)return MJ(e);return n=r*XJ(2),t;function t(a){var s;return Pu(a)?NaN:(s=a-e,.5*KJ(-s/n))}}var YJ=QJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZJ=M,Pg=WJ,JJ=YJ;ZJ(Pg,"factory",JJ);var b1=Pg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eee=b1,Au=S,ree=Ce;function nee(e,r,n){return Au(e)||Au(r)||Au(n)||n<=0?NaN:e<=0?0:eee(ree(e),r,n)}var tee=nee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aee=ce,iee=b1,Ou=S,lee=Ce;function see(e,r){if(Ou(e)||Ou(r)||r<=0)return aee(NaN);return n;function n(t){return Ou(t)?NaN:t<=0?0:iee(lee(t),e,r)}}var oee=see;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uee=M,Ag=tee,cee=oee;uee(Ag,"factory",cee);var fee=Ag;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm=wt;function vee(e){return e>0?Mm(e-1):Mm(e+1)}var dee=vee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pee=dee,Og=pee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Xm=Og,mee=Sr,hee=Z,Ml=q;function gee(e,r){return r===hee?Ml:r===Ml?0:r>0?Xm(r)?e:0:Xm(r)?mee(Ml,e):Ml}var yee=gee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $ee=ve,wee=ee,Nee=1072693247,Xl=1e300,Kl=1e-300;function xee(e,r){var n,t;return t=wee(e),n=t&$ee,n<=Nee?r<0?Xl*Xl:Kl*Kl:r>0?Xl*Xl:Kl*Kl}var _ee=xee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bee=K,Km=q;function Iee(e,r){return e===-1?(e-e)/(e-e):e===1?1:bee(e)<1==(r===Km)?0:Km}var Eee=Iee;/**
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
*/function jee(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var Pee=jee;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Aee=ee,Ql=ne,Qm=Le,Oee=Ie,kee=Pee,Lee=1048575,Ym=1048576,Cee=1072693248,See=536870912,Fee=524288,Tee=20,Ree=9007199254740992,Hee=.9617966939259756,zee=.9617967009544373,Dee=-7028461650952758e-24,Gee=[1,1.5],qee=[0,.5849624872207642],Bee=[0,1350039202129749e-23];function Uee(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<Ym&&(r*=Ree,x-=53,n=Aee(r)),x+=(n>>Tee)-Oee|0,b=n&Lee|0,n=b|Cee|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=Ym),r=Qm(r,n),i=Gee[I],N=r-i,_=1/(r+i),a=N*_,f=Ql(a,0),t=(n>>1|See)+Fee,t+=I<<18,v=Qm(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*kee(s),m+=p*(f+a),s=f*f,v=3+s+m,v=Ql(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=Ql(o,0),d=_-(o-N),h=zee*o,g=Dee*o+d*Hee+Bee[I],l=qee[I],$=x,w=h+g+l+$,w=Ql(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var Wee=Uee;/**
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
*/var Xee=ne,Kee=Mee,Qee=1.4426950408889634,Yee=1.4426950216293335,Zee=19259629911266175e-24;function Jee(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*Kee(a),f=Yee*a,p=a*Zee-s*Qee,t=f+p,t=Xee(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var ere=Jee;/**
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
*/var tre=ee,Zm=Le,are=ne,ire=Ke,lre=nn,sre=Nt,Jm=Ie,eh=ve,rh=Yn,ore=nre,nh=1048576,ure=1071644672,qa=20,cre=.6931471824645996,fre=-1904654299957768e-24;function vre(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&eh|0,d=(o>>qa)-Jm|0,l=0,o>ure&&(l=e+(nh>>d+1)>>>0,d=((l&eh)>>qa)-Jm|0,t=(l&~(rh>>d))>>>0,s=Zm(0,t),l=(l&rh|nh)>>qa-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=are(s,0),p=s*cre,v=(n-(s-r))*sre+s*fre,i=p+v,c=v-(i-p),s=i*i,a=i-s*ore(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=tre(i),e=ire(e),e+=l<<qa>>>0,e>>qa<=0?i=lre(i,l):i=Zm(i,e),i}var dre=vre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var th=S,ah=Og,ih=Xe,pre=be,lh=he,mre=K,ku=rn,hre=ne,sh=Ke,gre=Z,yre=q,Lu=ve,$re=yee,wre=_ee,Nre=Eee,xre=Wee,_re=ere,bre=dre,Ire=1072693247,Ere=1105199104,jre=1139802112,oh=1083179008,Pre=1072693248,Are=1083231232,Ore=3230714880,uh=31,xn=1e300,_n=1e-300,kre=8008566259537294e-32,qr=[0,0],ch=[0,0];function kg(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(th(e)||th(r))return NaN;if(ku.assign(r,qr,1,0),p=qr[0],v=qr[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return lh(e);if(r===-.5)return 1/lh(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(ih(r))return Nre(e,r)}if(ku.assign(e,qr,1,0),s=qr[0],f=qr[1],f===0){if(s===0)return $re(e,r);if(e===1)return 1;if(e===-1&&ah(r))return-1;if(ih(e))return e===gre?kg(-0,-r):r<0?0:yre}if(e<0&&pre(r)===!1)return(e-e)/(e-e);if(a=mre(e),n=s&Lu|0,t=p&Lu|0,c=s>>>uh|0,i=p>>>uh|0,c&&ah(r)?c=-1:c=1,t>Ere){if(t>jre)return wre(e,r);if(n<Ire)return i===1?c*xn*xn:c*_n*_n;if(n>Pre)return i===0?c*xn*xn:c*_n*_n;h=_re(ch,a)}else h=xre(ch,a,n);if(l=hre(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,ku.assign(g,qr,1,0),w=sh(qr[0]),y=sh(qr[1]),w>=oh){if(w-oh|y||d+kre>g-o)return c*xn*xn}else if((w&Lu)>=Are&&(w-Ore|y||d<=g-o))return c*_n*_n;return g=bre(w,o,d),c*g}var Lre=kg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cre=Lre,Lg=Cre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu=S,Sre=Lg;function Fre(e,r,n){return Cu(e)||Cu(r)||Cu(n)||r<=0||n<=0?NaN:e<n?0:1-Sre(n/e,r)}var Tre=Fre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rre=ce,Su=S,Hre=Lg;function zre(e,r){if(Su(e)||Su(r)||e<=0||r<=0)return Rre(NaN);return n;function n(t){return Su(t)?NaN:t<r?0:1-Hre(r/t,e)}}var Dre=zre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gre=M,Cg=Tre,qre=Dre;Gre(Cg,"factory",qre);var Bre=Cg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fh=S,Ure=J,vh=ue;function Wre(e,r){var n;return fh(e)||fh(r)||r<0?NaN:r===0?e<0?0:1:e<0?0:(n=vh(r,2),1-Ure(-vh(e,2)/(2*n)))}var Vre=Wre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mre=ce,Xre=pa.factory,dh=S,Kre=J,ph=ue;function Qre(e){var r;if(dh(e)||e<0)return Mre(NaN);if(e===0)return Xre(0);return r=ph(e,2),n;function n(t){return dh(t)?NaN:t<0?0:1-Kre(-ph(t,2)/(2*r))}}var Yre=Qre;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zre=M,Sg=Vre,Jre=Yre;Zre(Sg,"factory",Jre);var ene=Sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mh=da,hh=S,rne=ue;function nne(e,r){var n,t,a;return hh(e)||hh(r)||r<=0?NaN:e===0?.5:(n=rne(e,2),r>2*n?(a=n/(r+n),t=mh(a,.5,r/2,!0,!0)/2):(a=r/(r+n),t=mh(a,r/2,.5,!0,!1)/2),e>0?1-t:t)}var tne=nne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ane=ce,gh=da,yh=S,ine=ue;function lne(e){if(yh(e)||e<=0)return ane(NaN);return r;function r(n){var t,a,s;return yh(n)?NaN:n===0?.5:(t=ine(n,2),e>2*t?(s=t/(e+t),a=gh(s,.5,e/2,!0,!0)/2):(s=e/(e+t),a=gh(s,e/2,.5,!0,!1)/2),n>0?1-a:a)}}var sne=lne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var one=M,Fg=tne,une=sne;one(Fg,"factory",une);var cne=Fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $h=wt;function fne(e){return e>0?$h(e-1):$h(e+1)}var vne=fne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var wh=Tg,pne=Sr,mne=Z,Yl=q;function hne(e,r){return r===mne?Yl:r===Yl?0:r>0?wh(r)?e:0:wh(r)?pne(Yl,e):Yl}var gne=hne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yne=ve,$ne=ee,wne=1072693247,Zl=1e300,Jl=1e-300;function Nne(e,r){var n,t;return t=$ne(e),n=t&yne,n<=wne?r<0?Zl*Zl:Jl*Jl:r>0?Zl*Zl:Jl*Jl}var xne=Nne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _ne=K,Nh=q;function bne(e,r){return e===-1?(e-e)/(e-e):e===1?1:_ne(e)<1==(r===Nh)?0:Nh}var Ine=bne;/**
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
*/function Ene(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}var jne=Ene;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Pne=ee,es=ne,xh=Le,Ane=Ie,One=jne,kne=1048575,_h=1048576,Lne=1072693248,Cne=536870912,Sne=524288,Fne=20,Tne=9007199254740992,Rne=.9617966939259756,Hne=.9617967009544373,zne=-7028461650952758e-24,Dne=[1,1.5],Gne=[0,.5849624872207642],qne=[0,1350039202129749e-23];function Bne(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<_h&&(r*=Tne,x-=53,n=Pne(r)),x+=(n>>Fne)-Ane|0,b=n&kne|0,n=b|Lne|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=_h),r=xh(r,n),i=Dne[I],N=r-i,_=1/(r+i),a=N*_,f=es(a,0),t=(n>>1|Cne)+Sne,t+=I<<18,v=xh(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*One(s),m+=p*(f+a),s=f*f,v=3+s+m,v=es(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=es(o,0),d=_-(o-N),h=Hne*o,g=zne*o+d*Rne+qne[I],l=Gne[I],$=x,w=h+g+l+$,w=es(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var Une=Bne;/**
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
*/function Wne(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var Vne=Wne;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Mne=ne,Xne=Vne,Kne=1.4426950408889634,Qne=1.4426950216293335,Yne=19259629911266175e-24;function Zne(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*Xne(a),f=Qne*a,p=a*Yne-s*Kne,t=f+p,t=Mne(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var Jne=Zne;/**
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
*/var nte=ee,bh=Le,tte=ne,ate=Ke,ite=nn,lte=Nt,Ih=Ie,Eh=ve,jh=Yn,ste=rte,Ph=1048576,ote=1071644672,Ba=20,ute=.6931471824645996,cte=-1904654299957768e-24;function fte(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&Eh|0,d=(o>>Ba)-Ih|0,l=0,o>ote&&(l=e+(Ph>>d+1)>>>0,d=((l&Eh)>>Ba)-Ih|0,t=(l&~(jh>>d))>>>0,s=bh(0,t),l=(l&jh|Ph)>>Ba-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=tte(s,0),p=s*ute,v=(n-(s-r))*lte+s*cte,i=p+v,c=v-(i-p),s=i*i,a=i-s*ste(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=nte(i),e=ate(e),e+=l<<Ba>>>0,e>>Ba<=0?i=ite(i,l):i=bh(i,e),i}var vte=fte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ah=S,Oh=Tg,kh=Xe,dte=be,Lh=he,pte=K,Fu=rn,mte=ne,Ch=Ke,hte=Z,gte=q,Tu=ve,yte=gne,$te=xne,wte=Ine,Nte=Une,xte=Jne,_te=vte,bte=1072693247,Ite=1105199104,Ete=1139802112,Sh=1083179008,jte=1072693248,Pte=1083231232,Ate=3230714880,Fh=31,bn=1e300,In=1e-300,Ote=8008566259537294e-32,Br=[0,0],Th=[0,0];function Rg(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(Ah(e)||Ah(r))return NaN;if(Fu.assign(r,Br,1,0),p=Br[0],v=Br[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return Lh(e);if(r===-.5)return 1/Lh(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(kh(r))return wte(e,r)}if(Fu.assign(e,Br,1,0),s=Br[0],f=Br[1],f===0){if(s===0)return yte(e,r);if(e===1)return 1;if(e===-1&&Oh(r))return-1;if(kh(e))return e===hte?Rg(-0,-r):r<0?0:gte}if(e<0&&dte(r)===!1)return(e-e)/(e-e);if(a=pte(e),n=s&Tu|0,t=p&Tu|0,c=s>>>Fh|0,i=p>>>Fh|0,c&&Oh(r)?c=-1:c=1,t>Ite){if(t>Ete)return $te(e,r);if(n<bte)return i===1?c*bn*bn:c*In*In;if(n>jte)return i===0?c*bn*bn:c*In*In;h=xte(Th,a)}else h=Nte(Th,a,n);if(l=mte(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,Fu.assign(g,Br,1,0),w=Ch(Br[0]),y=Ch(Br[1]),w>=Sh){if(w-Sh|y||d+Ote>g-o)return c*bn*bn}else if((w&Tu)>=Pte&&(w-Ate|y||d<=g-o))return c*In*In;return g=_te(w,o,d),c*g}var kte=Rg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lte=kte,Hg=Lte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs=S,Rh=Hg;function Cte(e,r,n,t){var a,s;return rs(e)||rs(r)||rs(n)||rs(t)||r>t||t>n?NaN:e<=r?0:(a=(n-r)*(t-r),s=(n-r)*(n-t),e<=t?Rh(e-r,2)/a:e<n?1-Rh(n-e,2)/s:1)}var Ste=Cte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hh=ce,ns=S,zh=Hg;function Fte(e,r,n){var t,a;if(ns(e)||ns(r)||ns(n))return Hh(NaN);if(!(e<=n&&n<=r))return Hh(NaN);return t=(r-e)*(n-e),a=(r-e)*(r-n),s;function s(f){return ns(f)?NaN:f<=e?0:f<=n?zh(f-e,2)/t:f<r?1-zh(r-f,2)/a:1}}var Tte=Fte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rte=M,zg=Ste,Hte=Tte;Rte(zg,"factory",Hte);var zte=zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru=S;function Dte(e,r,n){return Ru(e)||Ru(r)||Ru(n)||r>=n?NaN:e<r?0:e>=n?1:(e-r)/(n-r)}var Gte=Dte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qte=ce,Hu=S;function Bte(e,r){if(Hu(e)||Hu(r)||e>=r)return qte(NaN);return n;function n(t){return Hu(t)?NaN:t<e?0:t>=r?1:(t-e)/(r-e)}}var Ute=Bte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wte=M,Dg=Gte,Vte=Ute;Wte(Dg,"factory",Vte);var Mte=Dg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dh=wt;function Xte(e){return e>0?Dh(e-1):Dh(e+1)}var Kte=Xte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Gh=Gg,Yte=Sr,Zte=Z,ts=q;function Jte(e,r){return r===Zte?ts:r===ts?0:r>0?Gh(r)?e:0:Gh(r)?Yte(ts,e):ts}var eae=Jte;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rae=ve,nae=ee,tae=1072693247,as=1e300,is=1e-300;function aae(e,r){var n,t;return t=nae(e),n=t&rae,n<=tae?r<0?as*as:is*is:r>0?as*as:is*is}var iae=aae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lae=K,qh=q;function sae(e,r){return e===-1?(e-e)/(e-e):e===1?1:lae(e)<1==(r===qh)?0:qh}var oae=sae;/**
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
*/var fae=ee,ls=ne,Bh=Le,vae=Ie,dae=cae,pae=1048575,Uh=1048576,mae=1072693248,hae=536870912,gae=524288,yae=20,$ae=9007199254740992,wae=.9617966939259756,Nae=.9617967009544373,xae=-7028461650952758e-24,_ae=[1,1.5],bae=[0,.5849624872207642],Iae=[0,1350039202129749e-23];function Eae(e,r,n){var t,a,s,f,p,v,c,i,l,o,d,h,g,w,y,$,m,N,_,x,b,I;return x=0,n<Uh&&(r*=$ae,x-=53,n=fae(r)),x+=(n>>yae)-vae|0,b=n&pae|0,n=b|mae|0,b<=235662?I=0:b<767610?I=1:(I=0,x+=1,n-=Uh),r=Bh(r,n),i=_ae[I],N=r-i,_=1/(r+i),a=N*_,f=ls(a,0),t=(n>>1|hae)+gae,t+=I<<18,v=Bh(0,t),c=r-(v-i),p=_*(N-f*v-f*c),s=a*a,m=s*s*dae(s),m+=p*(f+a),s=f*f,v=3+s+m,v=ls(v,0),c=m-(v-3-s),N=f*v,_=p*v+c*a,o=N+_,o=ls(o,0),d=_-(o-N),h=Nae*o,g=xae*o+d*wae+Iae[I],l=bae[I],$=x,w=h+g+l+$,w=ls(w,0),y=g-(w-$-l-h),e[0]=w,e[1]=y,e}var jae=Eae;/**
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
*/function Pae(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}var Aae=Pae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Oae=ne,kae=Aae,Lae=1.4426950408889634,Cae=1.4426950216293335,Sae=19259629911266175e-24;function Fae(e,r){var n,t,a,s,f,p;return a=r-1,s=a*a*kae(a),f=Cae*a,p=a*Sae-s*Lae,t=f+p,t=Oae(t,0),n=p-(t-f),e[0]=t,e[1]=n,e}var Tae=Fae;/**
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
*/function Rae(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}var Hae=Rae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zae=ee,Wh=Le,Dae=ne,Gae=Ke,qae=nn,Bae=Nt,Vh=Ie,Mh=ve,Xh=Yn,Uae=Hae,Kh=1048576,Wae=1071644672,Ua=20,Vae=.6931471824645996,Mae=-1904654299957768e-24;function Xae(e,r,n){var t,a,s,f,p,v,c,i,l,o,d;return o=e&Mh|0,d=(o>>Ua)-Vh|0,l=0,o>Wae&&(l=e+(Kh>>d+1)>>>0,d=((l&Mh)>>Ua)-Vh|0,t=(l&~(Xh>>d))>>>0,s=Wh(0,t),l=(l&Xh|Kh)>>Ua-d>>>0,e<0&&(l=-l),r-=s),s=n+r,s=Dae(s,0),p=s*Vae,v=(n-(s-r))*Bae+s*Mae,i=p+v,c=v-(i-p),s=i*i,a=i-s*Uae(s),f=i*a/(a-2)-(c+i*c),i=1-(f-i),e=zae(i),e=Gae(e),e+=l<<Ua>>>0,e>>Ua<=0?i=qae(i,l):i=Wh(i,e),i}var Kae=Xae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qh=S,Yh=Gg,Zh=Xe,Qae=be,Jh=he,Yae=K,zu=rn,Zae=ne,e3=Ke,Jae=Z,eie=q,Du=ve,rie=eae,nie=iae,tie=oae,aie=jae,iie=Tae,lie=Kae,sie=1072693247,oie=1105199104,uie=1139802112,r3=1083179008,cie=1072693248,fie=1083231232,vie=3230714880,n3=31,En=1e300,jn=1e-300,die=8008566259537294e-32,Ur=[0,0],t3=[0,0];function qg(e,r){var n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(Qh(e)||Qh(r))return NaN;if(zu.assign(r,Ur,1,0),p=Ur[0],v=Ur[1],v===0){if(r===0)return 1;if(r===1)return e;if(r===-1)return 1/e;if(r===.5)return Jh(e);if(r===-.5)return 1/Jh(e);if(r===2)return e*e;if(r===3)return e*e*e;if(r===4)return e*=e,e*e;if(Zh(r))return tie(e,r)}if(zu.assign(e,Ur,1,0),s=Ur[0],f=Ur[1],f===0){if(s===0)return rie(e,r);if(e===1)return 1;if(e===-1&&Yh(r))return-1;if(Zh(e))return e===Jae?qg(-0,-r):r<0?0:eie}if(e<0&&Qae(r)===!1)return(e-e)/(e-e);if(a=Yae(e),n=s&Du|0,t=p&Du|0,c=s>>>n3|0,i=p>>>n3|0,c&&Yh(r)?c=-1:c=1,t>oie){if(t>uie)return nie(e,r);if(n<sie)return i===1?c*En*En:c*jn*jn;if(n>cie)return i===0?c*En*En:c*jn*jn;h=iie(t3,a)}else h=aie(t3,a,n);if(l=Zae(r,0),d=(r-l)*h[0]+r*h[1],o=l*h[0],g=d+o,zu.assign(g,Ur,1,0),w=e3(Ur[0]),y=e3(Ur[1]),w>=r3){if(w-r3|y||d+die>g-o)return c*En*En}else if((w&Du)>=fie&&(w-vie|y||d<=g-o))return c*jn*jn;return g=lie(w,o,d),c*g}var pie=qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mie=pie,Bg=mie;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu=S,hie=ua,gie=Bg;function yie(e,r,n){return Gu(e)||Gu(r)||Gu(n)||r<=0||n<=0?NaN:e<0?0:-hie(-gie(e/n,r))}var $ie=yie;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wie=ce,qu=S,Nie=ua,xie=Bg;function _ie(e,r){if(qu(e)||qu(r)||e<=0||r<=0)return wie(NaN);return n;function n(t){return qu(t)?NaN:t<0?0:-Nie(-xie(t/r,e))}}var bie=_ie;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iie=M,Ug=$ie,Eie=bie;Iie(Ug,"factory",Eie);var jie=Ug;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pie=RT,Aie=_1,Oie=aQ,kie=qQ,Lie=yY,Cie=jY,Sie=DY,Fie=nZ,Tie=hZ,Rie=EZ,Hie=HZ,zie=_t,Die=VZ,Gie=nJ,qie=cJ,Bie=yJ,Uie=OJ,Wie=GJ,Vie=fee,Mie=b1,Xie=Bre,Kie=ene,Qie=cne,Yie=zte,Zie=Mte,Jie=jie,ae={};ae.arcsine=Pie;ae.beta=Aie;ae.betaprime=Oie;ae.cauchy=kie;ae.chi=Lie;ae.chisquare=Cie;ae.cosine=Sie;ae.erlang=Fie;ae.exponential=Tie;ae.f=Rie;ae.frechet=Hie;ae.gamma=zie;ae.gumbel=Die;ae.invgamma=Gie;ae.kumaraswamy=qie;ae.laplace=Bie;ae.levy=Uie;ae.logistic=Wie;ae.lognormal=Vie;ae.normal=Mie;ae["pareto-type1"]=Xie;ae.rayleigh=Kie;ae.t=Qie;ae.triangular=Yie;ae.uniform=Zie;ae.weibull=Jie;var ele=ae;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ile=yo.isPrimitive;function lle(e){return ile(e)&&e>0}var Wg=lle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sle=yo.isObject;function ole(e){return sle(e)&&e.valueOf()>0}var Vg=ole;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ule=Wg,cle=Vg;function fle(e){return ule(e)||cle(e)}var vle=fle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mg=M,I1=vle,dle=Wg,ple=Vg;Mg(I1,"isPrimitive",dle);Mg(I1,"isObject",ple);var mle=I1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xle=-308,_le=xle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ble=-324,Ile=ble;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a3=S,ss=Xe,i3=ue,Ele=K,l3=$le,jle=ag,s3=Nle,Ple=_le,Ale=Ile,Ole=jle+1,o3=1e308;function kle(e,r){var n,t;return a3(e)||a3(r)||ss(r)?NaN:ss(e)||e===0||r<Ale||Ele(e)>Ole&&r<=0?e:r>s3?0*e:r<Ple?(n=i3(10,-(r+s3)),t=e*o3*n,ss(t)?e:l3(t)/o3/n):(n=i3(10,-r),t=e*n,ss(t)?e:l3(t)/n)}var Lle=kle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cle=Lle,Sle=Cle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fle=mle,Tle=z5,Rle=f1.isPrimitive,u3=go,c3=Sle,Bu=Qn;function Hle(e){var r,n,t;if(n=4,r=!0,arguments.length>0){if(!Tle(e))throw new TypeError(Bu("invalid argument. First argument must be an object. Value: `%s`.",e));if(u3(e,"digits")){if(!Fle(e.digits))throw new TypeError(Bu("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",e.digits));n=e.digits}if(u3(e,"decision")){if(!Rle(e.decision))throw new TypeError(Bu("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",e.decision));r=e.decision}}switch(t="",t+=this.method,t+=`

`,t+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":t+="greater than or equal to ";break;case"greater":t+="less than or equal to ";break;case"two-sided":default:t+="equal to ";break}return t+="the reference CDF",t+=`

`,t+="    pValue: "+c3(this.pValue,-n)+`
`,t+="    statistic: "+c3(this.statistic,-n),t+=`

`,r&&(t+="Test Decision: ",this.rejected?t+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":t+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",t+=`
`),t}var zle=Hle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dle=xN,Gle=yt,qle=zN.primitives,et=UN,Ble=d1,f3=v5.isPrimitive,Wa=Qn,Ule=h5,Va=jb,Wle=uF,Vle=dF,Mle=mF,v3=gF,Xle=iT,Kle=ale,Qle=zle,Yle=Array.prototype.slice;function Zle(){var e,r,n,t,a,s,f,p,v,c,i,l,o,d,h,g,w,y;if(w=arguments[0],y=arguments[1],!qle(w)&&!Dle(w))throw new TypeError(Wa("invalid argument. First argument must be a typed array or number array. Value: `%s`.",w));if(!Ble(y)&&!f3(y))throw new TypeError(Wa("invalid argument. Second argument must be either a CDF function or a string. Value: `%s`.",y));for(f3(y)&&(y=Kle(y)),e=y.length-1,g=w.length,r=new Array(e),h=0;h<e;h++){if(l=h+2,d=arguments[l],!Gle(d)||Ule(d))throw new TypeError(Wa("invalid argument. Distribution parameter must be a number. Value: `%s`.",d));r[h]=arguments[l]}if(s={},arguments.length>2+e&&(t=arguments[2+e],i=Xle(s,t),i))throw i;if(w=Yle.call(w),s.alpha===void 0?a=.05:a=s.alpha,a<0||a>1)throw new RangeError(Wa("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));for(s.sorted!==!0&&w.sort(Mle),n=[null].concat(r),h=0;h<g;h++)n[0]=w[h],v=y.apply(null,n),w[h]=v-h/g;switch(c=s.alternative||"two-sided",c){case"two-sided":p=Va(g,[Va(g,w,1),Va(g,v3(1/g,w),1)],1);break;case"greater":p=Va(g,v3(1/g,w),1);break;case"less":p=Va(g,w,1);break;default:throw new Error(Wa('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),c))}return c==="two-sided"?f=1-Vle(p,g):f=1-Wle(p,g),o={},et(o,"rejected",f<=a),et(o,"alpha",a),et(o,"pValue",f),et(o,"statistic",p),et(o,"method","Kolmogorov-Smirnov goodness-of-fit test"),et(o,"print",Qle),et(o,"alternative",c),o}var Jle=Zle;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ese=Jle,rse=ese;const Cr=d3(rse);function nse(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function tse(){const[e,r]=A.useState({confianza:""}),[n,t]=A.useState({r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]});A.useState([]);const[f,p]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),v=()=>{const{confianza:c}=e;if(c){let i=function(j){return j===0||j===1?1:j*i(j-1)},l=[17.392,8.11,4.078,3.151,3.528,2.44,5.924,3.461,2.052,10.369,3.69,10.87,4.793,2.498,.569,8.281,.154,5.959,3.384,12.877,13.602,5.244,16.677,5.977,4.313,4.767,2.381,6.443,1.392,1.578,8.115,4.891,6.72,7.728,2.717,10.451,5.901,.818,7.088,2.637,4.714,3.032,1.495,15.733,7.768,2.333,7.822,3.708,6.412,1.29,3.957,5.285,7.094,3.078,1.264,2.63,10.177,2.155,2.945,7.552,11.094,4.772,7.281,14.344,19.867,.119,2.072,1.486,3.791,4.214,1.611,1.781,1.53,3.28,4.301,.202,7.489,1.422,1.453,.022,6.001,9.269,8.477,3.043,.877,6.966,2.103,1.816,.433,2.547,.843,1.182,8.121,2.007,1.395,4.661,7.378,5.3,17.066,12.171];const o=l.length-1;console.log(o);const d=l.reduce((j,E)=>j+E,0)/(o+1),h=1-Number(e.confianza)/100,g=nse(1-h/2),w=1/2-g*(1/Math.sqrt(12*o)),y=1/2+g*(1/Math.sqrt(12*o)),$=l.slice(1).reduce((j,E)=>j+Math.pow(+E-d,2),0)/(o-1),m=Math.floor(Math.sqrt(o+1)),_=oe.chisquare.inv(1-h/2,o-1)/(12*(o-1)),b=oe.chisquare.inv(h/2,o-1)/(12*(o-1)),I=[],O=[],k=Math.min(...l),R=Math.max(...l);console.log(k,R);const H=(R-k)/m;for(let j=0;j<m;j++){const E=k+j*H,P=k+(j+1)*H;I.push(Math.round(E)),j==m-1?O.push(P):O.push(Math.round(P))}console.log(I,O);const G=[];for(let j=0;j<I.length;j++){const E=I[j],P=O[j];if(console.log(E,P),j<I.length-1){const L=l.filter(F=>F>=E&&F<P);G.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}else{const L=l.filter(F=>F>=E&&F<=P);G.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}}let V=[];G.map((j,E)=>{const P=d,L=Math.pow(P,I[E]),F=Math.exp(-P),U=i(I[E]),X=Math.pow(P,O[E]),T=i(Math.round(O[E]));V.push(L*F/U+X*F/T)});let D=[];G.map((j,E)=>{D.push(Math.pow(V[E]*(o+1)-j.values,2)/(V[E]*(o+1)))}),s({intervalo_inf:I,intervalo_sup:O,px:V,o:G.map(j=>j.values),e:o/m,m,chiSquare:D}),p(j=>({varianza:{valor:$,li:b,ls:_},media:{valor:d,li:w,ls:y},chicuadrado:oe.chisquare.inv(h,m-1),n:o-1})),t({r:l})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:c=>{r(i=>({...i,confianza:c.target.value}))}}),"%"]})]})})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:v,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((c,i)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:i+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:c}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[i]})]},i))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:f.media.valor})]})})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]})})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"p(x)"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((c,i)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[i].toFixed(3),"-",a.intervalo_sup[i].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[i]}),u.jsx("td",{className:"px-6 py-4",children:a.px[i].toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:(a.px[i]*(f.n+2)).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[i].toFixed(4)})]},i)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((c,i)=>c+i,0)}),u.jsx("td",{className:"px-6 py-4",children:a.px.reduce((c,i)=>c+i,0).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.px.reduce((c,i)=>c+i*(f.n+2),0).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((c,i)=>c+i,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",f.chicuadrado,u.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((c,i)=>c+i,0)?`${a.chiSquare.reduce((c,i)=>c+i,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((c,i)=>c+i,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]})]})]})]})]})})}function ase(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function ise(){const[e,r]=A.useState({confianza:""}),[n,t]=A.useState({r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]});A.useState([]);const[f,p]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),v=()=>{const{confianza:c}=e;if(c){let i=function(j){return j===0||j===1?1:j*i(j-1)},l=[18.799,14.889,20.977,25.106,24.793,26.933,11.266,19.063,24.38,15.653,17.239,13.238,12.612,16.089,16.906,11.528,17.728,18.384,20.539,18.538,18.692,18.519,25.371,19.659,19.255,17.947,27.889,23.463,29.503,17.38,26.646,13.55,22.156,23.609,27.676,19.662,17.905,22.701,18.475,23.03,14.223,16.611,13.914,18.548,19.87,20.112,18.709,28.778,13.03,17.054,9.69,25.791,14.881,17.386,23.031,21.867,23.498,22.383,14.513,15.537,22.776,21.291,16.241,19.036,20.526,22.231,20.555,16.356,27.539,21.949,20.289,23.319,23.448,17.454,16.307,24.445,15.195,13.764,22.845,22.554,28.823,25.775,25.216,20.452,20.008,21.815,19.898,15.781,12.901,3.313,21.777,22.472,20.854,15.892,24.953,18.755,16.64,16.715,18.284,18.187];const o=l.length-1;console.log(o);const d=l.reduce((j,E)=>j+E,0)/(o+1),h=1-Number(e.confianza)/100,g=ase(1-h/2),w=1/2-g*(1/Math.sqrt(12*o)),y=1/2+g*(1/Math.sqrt(12*o)),$=l.slice(1).reduce((j,E)=>j+Math.pow(+E-d,2),0)/(o-1),m=Math.floor(Math.sqrt(o+1)),_=oe.chisquare.inv(1-h/2,o-1)/(12*(o-1)),b=oe.chisquare.inv(h/2,o-1)/(12*(o-1)),I=[],O=[],k=Math.min(...l),R=Math.max(...l);console.log(k,R);const H=(R-k)/m;for(let j=0;j<m;j++){const E=k+j*H,P=k+(j+1)*H;I.push(Math.round(E)),j==m-1?O.push(P):O.push(Math.round(P))}console.log(I,O);const G=[];for(let j=0;j<I.length;j++){const E=I[j],P=O[j];if(console.log(E,P),j<I.length-1){const L=l.filter(F=>F>=E&&F<P);G.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}else{const L=l.filter(F=>F>=E&&F<=P);G.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}}let V=[];G.map((j,E)=>{const P=d,L=Math.pow(P,I[E]),F=Math.exp(-P),U=i(I[E]),X=Math.pow(P,O[E]),T=i(Math.round(O[E]));V.push(L*F/U+X*F/T)});let D=[];G.map((j,E)=>{D.push(Math.pow(V[E]*(o+1)-j.values,2)/(V[E]*(o+1)))}),s({intervalo_inf:I,intervalo_sup:O,px:V,o:G.map(j=>j.values),e:o/m,m,chiSquare:D}),p(j=>({varianza:{valor:$,li:b,ls:_},media:{valor:d,li:w,ls:y},chicuadrado:oe.chisquare.inv(h,m-1),n:o-1})),t({r:l})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:c=>{r(i=>({...i,confianza:c.target.value}))}}),"%"]})]})})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:v,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((c,i)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:i+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:c}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[i]})]},i))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:f.media.valor})]})})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]})})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"p(x)"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((c,i)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[i].toFixed(3),"-",a.intervalo_sup[i].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[i]}),u.jsx("td",{className:"px-6 py-4",children:a.px[i].toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:(a.px[i]*(f.n+2)).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[i].toFixed(4)})]},i)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((c,i)=>c+i,0)}),u.jsx("td",{className:"px-6 py-4",children:a.px.reduce((c,i)=>c+i,0).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.px.reduce((c,i)=>c+i*(f.n+2),0).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((c,i)=>c+i,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",f.chicuadrado,u.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((c,i)=>c+i,0)?`${a.chiSquare.reduce((c,i)=>c+i,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((c,i)=>c+i,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]})]})]})]})]})})}function lse(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function sse(){const[e,r]=A.useState({confianza:""}),[n,t]=A.useState({r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]});A.useState([]);const[f,p]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),v=()=>{const{confianza:c}=e;if(c){let i=function(j){return j===0||j===1?1:j*i(j-1)},l=[12.656,11.664,11.855,11.399,11.845,9.766,11.866,10.671,12.157,12.503,13.317,11.381,11.252,12.146,11.769,11.792,13.577,12.038,11.854,13.83,11.369,13.271,11.985,11.936,13.61,12.363,12.437,11.765,12.683,11.931,11.264,10.902,12.204,11.019,13.94,11.873,10.412,11.665,12.957,11.617,11.346,10.634,12.316,11.836,12.571,11.67,11.652,12.286,11.612,11.26,9.526,11.931,12.247,11.146,11.655,11.832,12.178,12.432,14.374,16.14,10.993,12.548,12.659,11.148,12.809,11.793,13.052,13.042,13.013,12.763,11.65,11.309,12.089,12.347,12.556,13.098,12.483,12.409,12.48,11.377,12.566,13.843,12.299,12.357,13.077,13.052,12.615,12.26,12.197,12.046,10.522,10.883,12.533,12.074,11.991,11.486,11.067,12.157,12.171,12.503];const o=l.length-1;console.log(o);const d=l.reduce((j,E)=>j+E,0)/(o+1),h=1-Number(e.confianza)/100,g=lse(1-h/2),w=1/2-g*(1/Math.sqrt(12*o)),y=1/2+g*(1/Math.sqrt(12*o)),$=l.slice(1).reduce((j,E)=>j+Math.pow(+E-d,2),0)/(o-1),m=Math.floor(Math.sqrt(o+1)),_=oe.chisquare.inv(1-h/2,o-1)/(12*(o-1)),b=oe.chisquare.inv(h/2,o-1)/(12*(o-1)),I=[],O=[],k=Math.min(...l),R=Math.max(...l);console.log(k,R);const H=(R-k)/m;for(let j=0;j<m;j++){const E=k+j*H,P=k+(j+1)*H;I.push(Math.round(E)),j==m-1?O.push(P):O.push(Math.round(P))}console.log(I,O);const G=[];for(let j=0;j<I.length;j++){const E=I[j],P=O[j];if(console.log(E,P),j<I.length-1){const L=l.filter(F=>F>=E&&F<P);G.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}else{const L=l.filter(F=>F>=E&&F<=P);G.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}}let V=[];G.map((j,E)=>{const P=d,L=Math.pow(P,I[E]),F=Math.exp(-P),U=i(I[E]),X=Math.pow(P,O[E]),T=i(Math.round(O[E]));V.push(L*F/U+X*F/T)});let D=[];G.map((j,E)=>{D.push(Math.pow(V[E]*(o+1)-j.values,2)/(V[E]*(o+1)))}),s({intervalo_inf:I,intervalo_sup:O,px:V,o:G.map(j=>j.values),e:o/m,m,chiSquare:D}),p(j=>({varianza:{valor:$,li:b,ls:_},media:{valor:d,li:w,ls:y},chicuadrado:oe.chisquare.inv(h,m-1),n:o-1})),t({r:l})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:c=>{r(i=>({...i,confianza:c.target.value}))}}),"%"]})]})})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:v,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((c,i)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:i+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:c}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[i]})]},i))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",f.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:f.media.valor})]})})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:f.varianza.valor})]})})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"p(x)"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((c,i)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[i].toFixed(3),"-",a.intervalo_sup[i].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[i]}),u.jsx("td",{className:"px-6 py-4",children:a.px[i].toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:(a.px[i]*(f.n+2)).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[i].toFixed(4)})]},i)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((c,i)=>c+i,0)}),u.jsx("td",{className:"px-6 py-4",children:a.px.reduce((c,i)=>c+i,0).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.px.reduce((c,i)=>c+i*(f.n+2),0).toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((c,i)=>c+i,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",f.chicuadrado,u.jsx("p",{className:"text-xl",children:f.chicuadrado>a.chiSquare.reduce((c,i)=>c+i,0)?`${a.chiSquare.reduce((c,i)=>c+i,0)} es menor que ${f.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((c,i)=>c+i,0)} es mayor que ${f.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]})]})]})]})]})})}function ose(){const[e,r]=A.useState({x:"",a:"",c:"",m:"",repeticiones:"",confianza:""}),[n,t]=A.useState({x:[],r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[f,p]=A.useState([]),[v,c]=A.useState({chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,a:o,c:d,m:h,repeticiones:g,confianza:w}=e;if(l&&o&&d&&h&&g&&w){let y=0,$=[],m=[];for($[0]=Number(e.x),m[0]=Number(e.x)/(Number(e.m)-1),y=1;y<Number(g);y++){const j=(Number(e.c)+Number(e.a)*$[y-1])%Number(e.m);$.push(j),m.push(j/(Number(e.m)-1))}const N=m.length-1,_=1-Number(e.confianza)/100,x=Math.floor(Math.sqrt(N)),b=[],I=[],O=1/x;for(let j=0;j<x;j++){const E=j*O,P=(j+1)*O;b.push(E),I.push(P)}const k=[];for(let j=0;j<b.length;j++){const E=b[j],P=I[j],L=m.slice(1).filter(F=>j<b.length-1?F>=E&&F<P:F>=E&&F<=P);k.push({interval:`[${E.toFixed(2)}, ${P.toFixed(2)})`,values:L.length})}let R=[];k.map(j=>{R.push(Math.pow((N-1)/x-j.values,2)/((N-1)/x))});const H=[...m].sort((j,E)=>j-E).map((j,E)=>E/N-m[E]),G=Math.max(...H),V=Math.min(...H),D=Cr(m.slice(1),"uniform",0,1);p(H),s({intervalo_inf:b,intervalo_sup:I,o:k.map(j=>j.values),e:N/x,m:x,chiSquare:R}),c({chicuadrado:oe.chisquare.inv(_,x-1),kolmogorov:{dmas:G,dmen:V,valor:D.pValue,mayor:G>Math.abs(V)?G:Math.abs(V)},n:N-1}),t({x:$,r:m})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",u.jsx("sub",{children:"i+1"})," = (aX",u.jsx("sub",{children:"i"})," + c) mod (m)"]}),u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),u.jsx("td",{className:"px-6 py-4",children:"Semilla"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(o=>({...o,x:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),u.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:l=>{r(o=>({...o,a:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"c"}),u.jsx("td",{className:"px-6 py-4",children:"Constante aditiva"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.c,onChange:l=>{r(o=>({...o,c:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),u.jsx("td",{className:"px-6 py-4",children:"Módulo"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:l=>{r(o=>({...o,m:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),u.jsx("td",{className:"px-6 py-4",children:"Repeticiones"}),u.jsx("td",{className:"px-6 py-4 flex",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(o=>({...o,repeticiones:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(o=>({...o,confianza:l.target.value}))}}),"%"]})]})]})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",u.jsx("sub",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,o)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:o+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[o]})]},o))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",v.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((l,o)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[o].toFixed(3),"-",a.intervalo_sup[o].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[o]}),u.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[o].toFixed(4)})]},o)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,o)=>l+o,0)}),u.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,o)=>l+o,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",v.chicuadrado,u.jsx("p",{className:"text-xl",children:v.chicuadrado>a.chiSquare.reduce((l,o)=>l+o,0)?`${a.chiSquare.reduce((l,o)=>l+o,0)} es menor que ${v.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,o)=>l+o,0)} es mayor que ${v.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),u.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:o+1}))]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",u.jsx("sub",{children:"i"})]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",u.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"+"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmas}),u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"-"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmen}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.mayor})]})]})]})}),u.jsx("p",{className:"text-xl",children:v.kolmogorov.valor>v.kolmogorov.mayor?`${v.kolmogorov.valor} es mayor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${v.kolmogorov.valor} es menor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function use(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function cse(){const[e,r]=A.useState({x:"",a:"",c:"",m:"",intervalos:"",intervaloi:"",confianza:""}),[n,t]=A.useState({x:[],r:[]}),[a,s]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},n:""}),f=()=>{const{x:p,a:v,c,m:i,intervaloi:l,intervalos:o,confianza:d}=e;if(p&&v&&c&&i&&l&&o&&d){let h=[],g=[],w=Number(e.x);for(let B=1;B<=Number(o);B++)w=(Number(e.c)+Number(e.a)*w)%Number(e.m),B>=Number(l)&&B<=Number(o)&&(h.push(w),g.push(w/(Number(e.m)-1)));const y=g.length-1,$=1-Number(e.confianza)/100,m=g.slice(1).reduce((B,H)=>B+H,0)/y,N=use(1-$/2),_=1/2-N*(1/Math.sqrt(12*y)),x=1/2+N*(1/Math.sqrt(12*y)),b=g.slice(1).reduce((B,H)=>B+Math.pow(+H-m,2),0)/(y-1),O=oe.chisquare.inv(1-$/2,y-1)/(12*(y-1)),R=oe.chisquare.inv($/2,y-1)/(12*(y-1));s(B=>({varianza:{valor:b,li:R,ls:O},media:{valor:m,li:_,ls:x},n:y-1})),t({x:h,r:g})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",u.jsx("sub",{children:"i+1"})," = (aX",u.jsx("sub",{children:"i"})," + c) mod (m)"]}),u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),u.jsx("td",{className:"px-6 py-4",children:"Semilla"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:p=>{r(v=>({...v,x:p.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),u.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:p=>{r(v=>({...v,a:p.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"c"}),u.jsx("td",{className:"px-6 py-4",children:"Constante aditiva"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.c,onChange:p=>{r(v=>({...v,c:p.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),u.jsx("td",{className:"px-6 py-4",children:"Módulo"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:p=>{r(v=>({...v,m:p.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),u.jsx("td",{className:"px-6 py-4",children:"Repeticiones Incio"}),u.jsx("td",{className:"px-6 py-4 flex",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.intervaloi,onChange:p=>{r(v=>({...v,intervaloi:p.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),u.jsx("td",{className:"px-6 py-4",children:"Repeticiones Fin"}),u.jsx("td",{className:"px-6 py-4 flex",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.intervalos,onChange:p=>{r(v=>({...v,intervalos:p.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:p=>{r(v=>({...v,confianza:p.target.value}))}}),"%"]})]})]})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:f,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",u.jsx("sub",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((p,v)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:v+Number(e.intervaloi)}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:p}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[v]})]},v))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",a.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:a.media.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:a.media.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:a.media.ls})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:a.varianza.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:a.varianza.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:a.varianza.ls})]})," ",u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),u.jsxs("td",{className:"px-6 py-4",children:[a.varianza.li.toFixed(4)," < ",a.varianza.valor.toFixed(4)," < ",a.varianza.ls.toFixed(4),u.jsx("p",{children:a.varianza.valor>a.varianza.li&&a.varianza.valor<a.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})})]})]})]})]})})}function fse(){const[e,r]=A.useState({x:"",D:"",repeticiones:"",confianza:""}),[n,t]=A.useState({x:[],r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[],m:""}),[f,p]=A.useState([]),[v,c]=A.useState({chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,D:o,repeticiones:d,confianza:h}=e;if(l&&o&&d&&h){let g=[],w=[];g[0]=Number(e.x);const y=D=>D.length%2!==0?"0"+D:D,$=(D,j)=>{let E=Math.pow(D,2).toString();E=y(E);let P=Math.floor((E.length-j)/2);return E.substring(P,P+j)};for(let D=1;D<Number(d);D++){const j=$(g[D-1],Number(o));g.push(Number(j)),w.push(Number(j)/Math.pow(10,Number(o))),D==Number(d)-1&&w.push(Number(j)/Math.pow(10,Number(o)))}const m=w.length-1,N=1-Number(e.confianza)/100,_=Math.floor(Math.sqrt(m)),x=[],b=[],I=1/_;for(let D=0;D<_;D++){const j=D*I,E=(D+1)*I;x.push(j),b.push(E)}const O=[];for(let D=0;D<x.length;D++){const j=x[D],E=b[D],P=w.slice(1).filter(L=>D<x.length-1?L>=j&&L<E:L>=j&&L<=E);O.push({interval:`[${j.toFixed(2)}, ${E.toFixed(2)})`,values:P.length})}let k=[];O.map(D=>{k.push(Math.pow((m-1)/_-D.values,2)/((m-1)/_))});const B=[...w].sort((D,j)=>D-j).map((D,j)=>j/m-w[j]),H=Math.max(...B),G=Math.min(...B),V=Cr(w.slice(1),"uniform",0,1);p(B),s({intervalo_inf:x,intervalo_sup:b,o:O.map(D=>D.values),e:m/_,m:_,chiSquare:k}),c({chicuadrado:oe.chisquare.inv(N,_-1),kolmogorov:{dmas:H,dmen:G,valor:V.pValue,mayor:H>Math.abs(G)?H:Math.abs(G)},n:m-1}),t({x:g,r:w})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["Y",u.jsx("sub",{children:"i+1"})," = (X",u.jsx("sub",{children:"i"}),u.jsx("sup",{children:"2"}),")"]}),u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),u.jsx("td",{className:"px-6 py-4",children:"Semilla"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(o=>({...o,x:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4",children:"Digitos"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.D,onChange:l=>{r(o=>({...o,D:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"#"}),u.jsx("td",{className:"px-6 py-4",children:"Repeticiones"}),u.jsx("td",{className:"px-6 py-4 flex",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(o=>({...o,repeticiones:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(o=>({...o,confianza:l.target.value}))}}),"%"]})]})]})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",u.jsx("sub",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,o)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:o+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[o]})]},o))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",v.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((l,o)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[o].toFixed(3),"-",a.intervalo_sup[o].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[o]}),u.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[o].toFixed(4)})]},o)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,o)=>l+o,0)}),u.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,o)=>l+o,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",v.chicuadrado,u.jsx("p",{className:"text-xl",children:v.chicuadrado>a.chiSquare.reduce((l,o)=>l+o,0)?`${a.chiSquare.reduce((l,o)=>l+o,0)} es menor que ${v.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,o)=>l+o,0)} es mayor que ${v.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),u.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:o+1}))]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",u.jsx("sub",{children:"i"})]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",u.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"+"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmas}),u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"-"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmen}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.mayor})]})]})]})}),u.jsx("p",{className:"text-xl",children:v.kolmogorov.valor>v.kolmogorov.mayor?`${v.kolmogorov.valor} es mayor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${v.kolmogorov.valor} es menor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function vse(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function dse(){const[e,r]=A.useState({confianza:""}),[n,t]=A.useState({r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[f,p]=A.useState([]),[v,c]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{confianza:l}=e;if(l){let o=[.8797,.3884,.6289,.875,.5999,.8589,.9996,.2415,.3808,.9606,.9848,.3469,.7977,.5844,.8147,.6431,.7387,.5613,.0318,.7401,.4557,.1592,.8536,.8846,.341,.1492,.8681,.5291,.3188,.5992,.917,.2204,.5991,.5461,.5739,.3254,.0856,.2258,.4603,.5027,.8376,.6235,.3681,.2088,.1525,.2006,.472,.4272,.636,.0954];const d=o.length-1,h=o.slice(1).reduce((P,L)=>P+L,0)/d,g=1-Number(e.confianza)/100,w=vse(1-g/2),y=1/2-w*(1/Math.sqrt(12*d)),$=1/2+w*(1/Math.sqrt(12*d)),m=o.slice(1).reduce((P,L)=>P+Math.pow(+L-h,2),0)/(d-1),_=oe.chisquare.inv(1-g/2,d-1)/(12*(d-1)),b=oe.chisquare.inv(g/2,d-1)/(12*(d-1)),I=Math.floor(Math.sqrt(d-1));console.log(I);const O=[],k=[],R=1/I;for(let P=0;P<I;P++){const L=P*R,F=(P+1)*R;O.push(L),k.push(F)}const B=[];for(let P=0;P<O.length;P++){const L=O[P],F=k[P];if(console.log(L,F),P<O.length-1){const U=o.slice(1).filter(X=>X>=L&&X<F);B.push({interval:`[${L.toFixed(2)}, ${F.toFixed(2)})`,values:U.length})}else{const U=o.slice(1).filter(X=>X>=L&&X<=F);B.push({interval:`[${L.toFixed(2)}, ${F.toFixed(2)})`,values:U.length})}}let H=[];B.map(P=>{H.push(Math.pow((d-1)/Math.sqrt(d-1)-P.values,2)/((d-1)/Math.sqrt(d-1)))});const V=[...o].sort((P,L)=>P-L).map((P,L)=>L/(d-1)-o[L]),D=Math.max(...V),j=Math.min(...V),E=Cr(o.slice(1),"uniform",0,1);console.log(E),p(V),s({intervalo_inf:O,intervalo_sup:k,o:B.map(P=>P.values),e:d/I,m:I,chiSquare:H}),c(P=>({varianza:{valor:m,li:b,ls:_},media:{valor:h,li:y,ls:$},chicuadrado:oe.chisquare.inv(g,I-1),kolmogorov:{dmas:D,dmen:j,valor:Cr(o.slice(1),"uniform",0,1).pValue,mayor:D>Math.abs(j)?D:Math.abs(j)},n:d-1})),t({r:o})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(o=>({...o,confianza:l.target.value}))}}),"%"]})]})})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((l,o)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:o+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[o]})]},o))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",v.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:v.media.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.ls})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.ls})]})," ",u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),u.jsxs("td",{className:"px-6 py-4",children:[v.varianza.li.toFixed(4)," < ",v.varianza.valor.toFixed(4)," < ",v.varianza.ls.toFixed(4),u.jsx("p",{children:v.varianza.valor>v.varianza.li&&v.varianza.valor<v.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((l,o)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[o].toFixed(3),"-",a.intervalo_sup[o].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[o]}),u.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[o].toFixed(4)})]},o)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,o)=>l+o,0)}),u.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,o)=>l+o,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",v.chicuadrado,u.jsx("p",{className:"text-xl",children:v.chicuadrado>a.chiSquare.reduce((l,o)=>l+o,0)?`${a.chiSquare.reduce((l,o)=>l+o,0)} es menor que ${v.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,o)=>l+o,0)} es mayor que ${v.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),u.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:o+1}))]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",u.jsx("sub",{children:"i"})]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",u.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"+"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmas}),u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"-"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmen}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.mayor})]})]})]})}),u.jsx("p",{className:"text-xl",children:v.kolmogorov.valor>v.kolmogorov.mayor?`${v.kolmogorov.valor} es mayor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${v.kolmogorov.valor} es menor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function pse(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function mse(){const[e,r]=A.useState({x:"",a:"",m:"",repeticiones:"",confianza:""}),[n,t]=A.useState({x:[],r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[f,p]=A.useState([]),[v,c]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,a:o,repeticiones:d,m:h,confianza:g}=e;if(l&&o&&d&&h&&g){let w=[],y=[];w[0]=Number(e.x),y[0]=Number(e.x)/(Number(e.m)-1);for(let T=1;T<Number(d);T++){const W=Number(e.a)*w[T-1]%Number(e.m);w.push(W),y.push(W/(Number(e.m)-1))}const $=y.length-1,m=y.slice(1).reduce((T,W)=>T+W,0)/$,N=1-Number(e.confianza)/100,_=pse(1-N/2),x=1/2-_*(1/Math.sqrt(12*$)),b=1/2+_*(1/Math.sqrt(12*$)),I=y.slice(1).reduce((T,W)=>T+Math.pow(+W-m,2),0)/($-1),k=oe.chisquare.inv(1-N/2,$-1)/(12*($-1)),B=oe.chisquare.inv(N/2,$-1)/(12*($-1)),H=Math.floor(Math.sqrt($-1));console.log(H);const G=[],V=[],D=1/H;for(let T=0;T<H;T++){const W=T*D,te=(T+1)*D;G.push(W),V.push(te)}const j=[];for(let T=0;T<G.length;T++){const W=G[T],te=V[T];if(console.log(W,te),T<G.length-1){const Ne=y.slice(1).filter(fr=>fr>=W&&fr<te);j.push({interval:`[${W.toFixed(2)}, ${te.toFixed(2)})`,values:Ne.length})}else{const Ne=y.slice(1).filter(fr=>fr>=W&&fr<=te);j.push({interval:`[${W.toFixed(2)}, ${te.toFixed(2)})`,values:Ne.length})}}let E=[];j.map(T=>{E.push(Math.pow(($-1)/Math.sqrt($-1)-T.values,2)/(($-1)/Math.sqrt($-1)))});const L=[...y].sort((T,W)=>T-W).map((T,W)=>W/($-1)-y[W]),F=Math.max(...L),U=Math.min(...L),X=Cr(y.slice(1),"uniform",0,1);console.log(X),p(L),s({intervalo_inf:G,intervalo_sup:V,o:j.map(T=>T.values),e:$/H,m:H,chiSquare:E}),c(T=>({varianza:{valor:I,li:B,ls:k},media:{valor:m,li:x,ls:b},chicuadrado:oe.chisquare.inv(N,H-1),kolmogorov:{dmas:F,dmen:U,valor:Cr(y.slice(1),"uniform",0,1).pValue,mayor:F>Math.abs(U)?F:Math.abs(U)},n:$-1})),t({x:w,r:y})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",u.jsx("sub",{children:"i+1"})," = (aX",u.jsx("sub",{children:"i"}),") mod (m)"]}),u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),u.jsx("td",{className:"px-6 py-4",children:"Semilla"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(o=>({...o,x:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),u.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:l=>{r(o=>({...o,a:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),u.jsx("td",{className:"px-6 py-4",children:"Módulo"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:l=>{r(o=>({...o,m:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"n"}),u.jsx("td",{className:"px-6 py-4",children:"Repetiones"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(o=>({...o,repeticiones:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(o=>({...o,confianza:l.target.value}))}}),"%"]})]})]})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",u.jsx("sub",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,o)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:o+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[o]})]},o))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",v.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:v.media.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.ls})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.ls})]})," ",u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),u.jsxs("td",{className:"px-6 py-4",children:[v.varianza.li.toFixed(4)," < ",v.varianza.valor.toFixed(4)," < ",v.varianza.ls.toFixed(4),u.jsx("p",{children:v.varianza.valor>v.varianza.li&&v.varianza.valor<v.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((l,o)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[o].toFixed(3),"-",a.intervalo_sup[o].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[o]}),u.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[o].toFixed(4)})]},o)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,o)=>l+o,0)}),u.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,o)=>l+o,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",v.chicuadrado,u.jsx("p",{className:"text-xl",children:v.chicuadrado>a.chiSquare.reduce((l,o)=>l+o,0)?`${a.chiSquare.reduce((l,o)=>l+o,0)} es menor que ${v.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,o)=>l+o,0)} es mayor que ${v.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),u.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:o+1}))]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",u.jsx("sub",{children:"i"})]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",u.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"+"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmas}),u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"-"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmen}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.mayor})]})]})]})}),u.jsx("p",{className:"text-xl",children:v.kolmogorov.valor>v.kolmogorov.mayor?`${v.kolmogorov.valor} es mayor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${v.kolmogorov.valor} es menor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function hse(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function gse(){const[e,r]=A.useState({x:"",a:"",m:"",repeticiones:"",confianza:""}),[n,t]=A.useState({x:[],r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[f,p]=A.useState([]),[v,c]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{x:l,a:o,repeticiones:d,m:h,confianza:g}=e;if(l&&o&&d&&h&&g){let w=[],y=[];w[0]=Number(e.x),y[0]=Number(e.x)/(Number(e.m)-1);for(let T=1;T<Number(d);T++){const W=Number(e.a)*w[T-1]%Number(e.m);w.push(W),y.push(W/(Number(e.m)-1))}const $=y.length-1,m=y.slice(1).reduce((T,W)=>T+W,0)/$,N=1-Number(e.confianza)/100,_=hse(1-N/2),x=1/2-_*(1/Math.sqrt(12*$)),b=1/2+_*(1/Math.sqrt(12*$)),I=y.slice(1).reduce((T,W)=>T+Math.pow(+W-m,2),0)/($-1),k=oe.chisquare.inv(1-N/2,$-1)/(12*($-1)),B=oe.chisquare.inv(N/2,$-1)/(12*($-1)),H=Math.floor(Math.sqrt($-1));console.log(H);const G=[],V=[],D=1/H;for(let T=0;T<H;T++){const W=T*D,te=(T+1)*D;G.push(W),V.push(te)}const j=[];for(let T=0;T<G.length;T++){const W=G[T],te=V[T];if(console.log(W,te),T<G.length-1){const Ne=y.slice(1).filter(fr=>fr>=W&&fr<te);j.push({interval:`[${W.toFixed(2)}, ${te.toFixed(2)})`,values:Ne.length})}else{const Ne=y.slice(1).filter(fr=>fr>=W&&fr<=te);j.push({interval:`[${W.toFixed(2)}, ${te.toFixed(2)})`,values:Ne.length})}}let E=[];j.map(T=>{E.push(Math.pow(($-1)/Math.sqrt($-1)-T.values,2)/(($-1)/Math.sqrt($-1)))});const L=[...y].sort((T,W)=>T-W).map((T,W)=>W/($-1)-y[W]),F=Math.max(...L),U=Math.min(...L),X=Cr(y.slice(1),"uniform",0,1);console.log(X),p(L),s({intervalo_inf:G,intervalo_sup:V,o:j.map(T=>T.values),e:$/H,m:H,chiSquare:E}),c(T=>({varianza:{valor:I,li:B,ls:k},media:{valor:m,li:x,ls:b},chicuadrado:oe.chisquare.inv(N,H-1),kolmogorov:{dmas:F,dmen:U,valor:Cr(y.slice(1),"uniform",0,1).pValue,mayor:F>Math.abs(U)?F:Math.abs(U)},n:$-1})),t({x:w,r:y})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",u.jsx("sub",{children:"i+1"})," = (aX",u.jsx("sub",{children:"i"}),") mod (m)"]}),u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),u.jsx("td",{className:"px-6 py-4",children:"Semilla"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.x,onChange:l=>{r(o=>({...o,x:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),u.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.a,onChange:l=>{r(o=>({...o,a:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),u.jsx("td",{className:"px-6 py-4",children:"Módulo"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.m,onChange:l=>{r(o=>({...o,m:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"n"}),u.jsx("td",{className:"px-6 py-4",children:"Repetiones"}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.repeticiones,onChange:l=>{r(o=>({...o,repeticiones:l.target.value}))}})})]}),u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(o=>({...o,confianza:l.target.value}))}}),"%"]})]})]})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/2 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",u.jsx("sub",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,o)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:o+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[o]})]},o))})]})})}),u.jsxs("div",{className:"w-1/2 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",v.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:v.media.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.ls})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.ls})]})," ",u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),u.jsxs("td",{className:"px-6 py-4",children:[v.varianza.li.toFixed(4)," < ",v.varianza.valor.toFixed(4)," < ",v.varianza.ls.toFixed(4),u.jsx("p",{children:v.varianza.valor>v.varianza.li&&v.varianza.valor<v.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((l,o)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[o].toFixed(3),"-",a.intervalo_sup[o].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[o]}),u.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[o].toFixed(4)})]},o)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,o)=>l+o,0)}),u.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,o)=>l+o,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",v.chicuadrado,u.jsx("p",{className:"text-xl",children:v.chicuadrado>a.chiSquare.reduce((l,o)=>l+o,0)?`${a.chiSquare.reduce((l,o)=>l+o,0)} es menor que ${v.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,o)=>l+o,0)} es mayor que ${v.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),u.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:o+1}))]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",u.jsx("sub",{children:"i"})]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",u.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"+"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmas}),u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"-"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmen}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.mayor})]})]})]})}),u.jsx("p",{className:"text-xl",children:v.kolmogorov.valor>v.kolmogorov.mayor?`${v.kolmogorov.valor} es mayor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${v.kolmogorov.valor} es menor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}function yse(e){const r=-39.6968302866538,n=220.946098424521,t=-275.928510446969,a=138.357751867269,s=-30.6647980661472,f=2.50662827745924,p=-54.4760987982241,v=161.585836858041,c=-155.698979859887,i=66.8013118877197,l=-13.2806815528857,o=-.00778489400243029,d=-.322396458041136,h=-2.40075827716184,g=-2.54973253934373,w=4.37466414146497,y=2.93816398269878,$=.00778469570904146,m=.32246712907004,N=2.445134137143,_=3.75440866190742;let x,b;return e<.02425?(x=Math.sqrt(-2*Math.log(e)),(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1)):e<=.97575?(x=e-.5,b=x*x,(((((r*b+n)*b+t)*b+a)*b+s)*b+f)*x/(((((p*b+v)*b+c)*b+i)*b+l)*b+1)):(x=Math.sqrt(-2*Math.log(1-e)),-(((((o*x+d)*x+h)*x+g)*x+w)*x+y)/(((($*x+m)*x+N)*x+_)*x+1))}function $se(){const[e,r]=A.useState({confianza:""}),[n,t]=A.useState({r:[]}),[a,s]=A.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[f,p]=A.useState([]),[v,c]=A.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),i=()=>{const{confianza:l}=e;if(l){let o=[.78,.98,.24,.73,.43,.16,.78,.47,.18,.55,.04,.29,.68,.77,.16,.03,.79,.22,.37,.8,.96,.26,.91,.55,.75,.55,.64,.39,.53,.45,.61,.14,.38,.12,.4,.74,.78,.98,.27,.6,.43,.67,.62,.32,.53,.54,.24,.29,.18,.08,.82,.94,.19,.98,.41,1,.74,.92,.14,.43,.83,.88,.18,.21,.5,.13,.43,.69,.08,.12,.22,.5,.16,.11,.18,.89,.8,.42,.29,.87,.83,.79,.65,.28,.78,.49,.36,.86,.87,.64,.51,.07,.18,.94,.5,.22,.66,.91,.48,.24];const d=o.length-1,h=o.slice(1).reduce((P,L)=>P+L,0)/d,g=1-Number(e.confianza)/100,w=yse(1-g/2),y=1/2-w*(1/Math.sqrt(12*d)),$=1/2+w*(1/Math.sqrt(12*d)),m=o.slice(1).reduce((P,L)=>P+Math.pow(+L-h,2),0)/(d-1),_=oe.chisquare.inv(1-g/2,d-1)/(12*(d-1)),b=oe.chisquare.inv(g/2,d-1)/(12*(d-1)),I=Math.floor(Math.sqrt(d-1));console.log(I);const O=[],k=[],R=1/I;for(let P=0;P<I;P++){const L=P*R,F=(P+1)*R;O.push(L),k.push(F)}const B=[];for(let P=0;P<O.length;P++){const L=O[P],F=k[P];if(console.log(L,F),P<O.length-1){const U=o.slice(1).filter(X=>X>=L&&X<F);B.push({interval:`[${L.toFixed(2)}, ${F.toFixed(2)})`,values:U.length})}else{const U=o.slice(1).filter(X=>X>=L&&X<=F);B.push({interval:`[${L.toFixed(2)}, ${F.toFixed(2)})`,values:U.length})}}let H=[];B.map(P=>{H.push(Math.pow((d-1)/Math.sqrt(d-1)-P.values,2)/((d-1)/Math.sqrt(d-1)))});const V=[...o].sort((P,L)=>P-L).map((P,L)=>L/(d-1)-o[L]),D=Math.max(...V),j=Math.min(...V),E=Cr(o.slice(1),"uniform",0,1);console.log(E),p(V),s({intervalo_inf:O,intervalo_sup:k,o:B.map(P=>P.values),e:d/I,m:I,chiSquare:H}),c(P=>({varianza:{valor:m,li:b,ls:_},media:{valor:h,li:y,ls:$},chicuadrado:oe.chisquare.inv(g,I-1),kolmogorov:{dmas:D,dmen:j,valor:Cr(o.slice(1),"uniform",0,1).pValue,mayor:D>Math.abs(j)?D:Math.abs(j)},n:d-1})),t({r:o})}};return u.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:u.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[u.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),u.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),u.jsx("tbody",{children:u.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),u.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),u.jsxs("td",{className:"px-6 py-4 flex",children:[u.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:e.confianza,onChange:l=>{r(o=>({...o,confianza:l.target.value}))}}),"%"]})]})})]})}),u.jsx("div",{className:"w-full flex justify-center my-3",children:u.jsx("button",{onClick:i,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.r.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),u.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[u.jsx("div",{className:"w-1/3 p-10 h-full",children:u.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:u.jsxs("tr",{className:"w-full flex",children:[u.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),u.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",u.jsx("sub",{children:"i"})]})]})}),u.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.r.map((l,o)=>u.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:o+1}),u.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[o]})]},o))})]})})}),u.jsxs("div",{className:"w-2/3 p-10",children:[u.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",v.n+2]}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),u.jsx("td",{className:"px-6 py-4",children:v.media.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.media.ls})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.valor})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.li})]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),u.jsx("td",{className:"px-6 py-4",children:v.varianza.ls})]})," ",u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),u.jsxs("td",{className:"px-6 py-4",children:[v.varianza.li.toFixed(4)," < ",v.varianza.valor.toFixed(4)," < ",v.varianza.ls.toFixed(4),u.jsx("p",{children:v.varianza.valor>v.varianza.li&&v.varianza.valor<v.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),u.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),u.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",u.jsx("suv",{children:"i"})]}),u.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",u.jsx("sub",{children:"i"})," - E",u.jsx("sub",{children:"i"}),")",u.jsx("sup",{children:"2"})," / E",u.jsx("sub",{children:"i"})]})]})}),u.jsxs("tbody",{children:[a.intervalo_inf.map((l,o)=>u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",a.intervalo_inf[o].toFixed(3),"-",a.intervalo_sup[o].toFixed(3),"]"]}),u.jsx("td",{className:"px-6 py-4",children:a.o[o]}),u.jsx("td",{className:"px-6 py-4",children:a.e.toFixed(4)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare[o].toFixed(4)})]},o)),u.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),u.jsx("td",{className:"px-6 py-4",children:a.o.reduce((l,o)=>l+o,0)}),u.jsx("td",{className:"px-6 py-4",children:(a.e.toFixed(4)*a.m).toFixed(3)}),u.jsx("td",{className:"px-6 py-4",children:a.chiSquare.reduce((l,o)=>l+o,0).toFixed(4)})]})]})]})}),u.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",u.jsx("sup",{children:"2"}),u.jsx("sub",{children:"0"}),": ",v.chicuadrado,u.jsx("p",{className:"text-xl",children:v.chicuadrado>a.chiSquare.reduce((l,o)=>l+o,0)?`${a.chiSquare.reduce((l,o)=>l+o,0)} es menor que ${v.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${a.chiSquare.reduce((l,o)=>l+o,0)} es mayor que ${v.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),u.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),u.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[u.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:o+1}))]})}),u.jsxs("tbody",{children:[u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",u.jsx("sub",{children:"i"})]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",u.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,o)=>u.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),u.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"+"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmas}),u.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",u.jsx("sup",{children:"-"})]}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.dmen}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),u.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:v.kolmogorov.mayor})]})]})]})}),u.jsx("p",{className:"text-xl",children:v.kolmogorov.valor>v.kolmogorov.mayor?`${v.kolmogorov.valor} es mayor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${v.kolmogorov.valor} es menor que ${v.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}const wse=()=>{const[e,r]=A.useState(!1),n=()=>{window.scrollTo({top:0,behavior:"smooth"})},[t,a]=A.useState("");return A.useEffect(()=>{const s=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),u.jsx("header",{className:`w-full sticky top-0 z-20 flex items-center justify-between transition-all ease-in-out duration-1000 ${t?"bg-slate-600 px-2 py-2":"bg-slate-900 py-1"}`,children:u.jsxs("nav",{className:"w-full flex justify-between",children:[u.jsx(H4,{to:"/",className:"title",onClick:n,children:"Inicio"}),u.jsxs("div",{className:"menu",onClick:()=>{r(!e)},children:[u.jsx("i",{className:"bx bx-menu",children:"≡"}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsxs("ul",{className:e?"open":"",children:[u.jsx("li",{className:"list-none",children:u.jsx(r0,{to:"/Uno",onClick:n,children:"Ejercicio 1"})}),u.jsx("li",{className:"list-none",children:u.jsx(r0,{to:"/Dos",onClick:n,children:"Ejercicio 2"})}),u.jsx("li",{className:"list-none",children:u.jsx(r0,{to:"/Tres",onClick:n,children:"Ejercicio 3"})})]})]})})};function Nse(){return u.jsxs("div",{className:"App",children:[u.jsx(wse,{}),u.jsxs(fy,{children:[u.jsx(mr,{path:"/Uno",element:u.jsx(tse,{})}),u.jsx(mr,{path:"/Dos",element:u.jsx(ise,{})}),u.jsx(mr,{path:"/Tres",element:u.jsx(sse,{})}),u.jsx(mr,{path:"/Cuatro",element:u.jsx(ose,{})}),u.jsx(mr,{path:"/Cinco",element:u.jsx(cse,{})}),u.jsx(mr,{path:"/Seis",element:u.jsx(fse,{})}),u.jsx(mr,{path:"/Siete",element:u.jsx(dse,{})}),u.jsx(mr,{path:"/Nueve",element:u.jsx(mse,{})}),u.jsx(mr,{path:"/Diez",element:u.jsx(gse,{})}),u.jsx(mr,{path:"/Once",element:u.jsx($se,{})})]})]})}E4(document.getElementById("root")).render(u.jsx(A.StrictMode,{children:u.jsx($y,{children:u.jsx(Nse,{})})}));
