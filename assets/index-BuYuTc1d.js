(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var a7=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function o7(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var D6={exports:{}},Co={},B6={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),l7=Symbol.for("react.portal"),u7=Symbol.for("react.fragment"),s7=Symbol.for("react.strict_mode"),f7=Symbol.for("react.profiler"),v7=Symbol.for("react.provider"),c7=Symbol.for("react.context"),d7=Symbol.for("react.forward_ref"),p7=Symbol.for("react.suspense"),m7=Symbol.for("react.memo"),$7=Symbol.for("react.lazy"),ev=Symbol.iterator;function g7(r){return r===null||typeof r!="object"?null:(r=ev&&r[ev]||r["@@iterator"],typeof r=="function"?r:null)}var W6={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U6=Object.assign,z6={};function Qt(r,e,n){this.props=r,this.context=e,this.refs=z6,this.updater=n||W6}Qt.prototype.isReactComponent={};Qt.prototype.setState=function(r,e){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,e,"setState")};Qt.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function V6(){}V6.prototype=Qt.prototype;function Bf(r,e,n){this.props=r,this.context=e,this.refs=z6,this.updater=n||W6}var Wf=Bf.prototype=new V6;Wf.constructor=Bf;U6(Wf,Qt.prototype);Wf.isPureReactComponent=!0;var nv=Array.isArray,q6=Object.prototype.hasOwnProperty,Uf={current:null},X6={key:!0,ref:!0,__self:!0,__source:!0};function Q6(r,e,n){var t,i={},o=null,f=null;if(e!=null)for(t in e.ref!==void 0&&(f=e.ref),e.key!==void 0&&(o=""+e.key),e)q6.call(e,t)&&!X6.hasOwnProperty(t)&&(i[t]=e[t]);var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){for(var c=Array(d),s=0;s<d;s++)c[s]=arguments[s+2];i.children=c}if(r&&r.defaultProps)for(t in d=r.defaultProps,d)i[t]===void 0&&(i[t]=d[t]);return{$$typeof:da,type:r,key:o,ref:f,props:i,_owner:Uf.current}}function h7(r,e){return{$$typeof:da,type:r.type,key:e,ref:r.ref,props:r.props,_owner:r._owner}}function zf(r){return typeof r=="object"&&r!==null&&r.$$typeof===da}function y7(r){var e={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(n){return e[n]})}var tv=/\/+/g;function ul(r,e){return typeof r=="object"&&r!==null&&r.key!=null?y7(""+r.key):e.toString(36)}function M0(r,e,n,t,i){var o=typeof r;(o==="undefined"||o==="boolean")&&(r=null);var f=!1;if(r===null)f=!0;else switch(o){case"string":case"number":f=!0;break;case"object":switch(r.$$typeof){case da:case l7:f=!0}}if(f)return f=r,i=i(f),r=t===""?"."+ul(f,0):t,nv(i)?(n="",r!=null&&(n=r.replace(tv,"$&/")+"/"),M0(i,e,n,"",function(s){return s})):i!=null&&(zf(i)&&(i=h7(i,n+(!i.key||f&&f.key===i.key?"":(""+i.key).replace(tv,"$&/")+"/")+r)),e.push(i)),1;if(f=0,t=t===""?".":t+":",nv(r))for(var d=0;d<r.length;d++){o=r[d];var c=t+ul(o,d);f+=M0(o,e,n,c,i)}else if(c=g7(r),typeof c=="function")for(r=c.call(r),d=0;!(o=r.next()).done;)o=o.value,c=t+ul(o,d++),f+=M0(o,e,n,c,i);else if(o==="object")throw e=String(r),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return f}function Ea(r,e,n){if(r==null)return r;var t=[],i=0;return M0(r,t,"","",function(o){return e.call(n,o,i++)}),t}function _7(r){if(r._status===-1){var e=r._result;e=e(),e.then(function(n){(r._status===0||r._status===-1)&&(r._status=1,r._result=n)},function(n){(r._status===0||r._status===-1)&&(r._status=2,r._result=n)}),r._status===-1&&(r._status=0,r._result=e)}if(r._status===1)return r._result.default;throw r._result}var Gr={current:null},Y0={transition:null},N7={ReactCurrentDispatcher:Gr,ReactCurrentBatchConfig:Y0,ReactCurrentOwner:Uf};function K6(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Ea,forEach:function(r,e,n){Ea(r,function(){e.apply(this,arguments)},n)},count:function(r){var e=0;return Ea(r,function(){e++}),e},toArray:function(r){return Ea(r,function(e){return e})||[]},only:function(r){if(!zf(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};W.Component=Qt;W.Fragment=u7;W.Profiler=f7;W.PureComponent=Bf;W.StrictMode=s7;W.Suspense=p7;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N7;W.act=K6;W.cloneElement=function(r,e,n){if(r==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+r+".");var t=U6({},r.props),i=r.key,o=r.ref,f=r._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,f=Uf.current),e.key!==void 0&&(i=""+e.key),r.type&&r.type.defaultProps)var d=r.type.defaultProps;for(c in e)q6.call(e,c)&&!X6.hasOwnProperty(c)&&(t[c]=e[c]===void 0&&d!==void 0?d[c]:e[c])}var c=arguments.length-2;if(c===1)t.children=n;else if(1<c){d=Array(c);for(var s=0;s<c;s++)d[s]=arguments[s+2];t.children=d}return{$$typeof:da,type:r.type,key:i,ref:o,props:t,_owner:f}};W.createContext=function(r){return r={$$typeof:c7,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},r.Provider={$$typeof:v7,_context:r},r.Consumer=r};W.createElement=Q6;W.createFactory=function(r){var e=Q6.bind(null,r);return e.type=r,e};W.createRef=function(){return{current:null}};W.forwardRef=function(r){return{$$typeof:d7,render:r}};W.isValidElement=zf;W.lazy=function(r){return{$$typeof:$7,_payload:{_status:-1,_result:r},_init:_7}};W.memo=function(r,e){return{$$typeof:m7,type:r,compare:e===void 0?null:e}};W.startTransition=function(r){var e=Y0.transition;Y0.transition={};try{r()}finally{Y0.transition=e}};W.unstable_act=K6;W.useCallback=function(r,e){return Gr.current.useCallback(r,e)};W.useContext=function(r){return Gr.current.useContext(r)};W.useDebugValue=function(){};W.useDeferredValue=function(r){return Gr.current.useDeferredValue(r)};W.useEffect=function(r,e){return Gr.current.useEffect(r,e)};W.useId=function(){return Gr.current.useId()};W.useImperativeHandle=function(r,e,n){return Gr.current.useImperativeHandle(r,e,n)};W.useInsertionEffect=function(r,e){return Gr.current.useInsertionEffect(r,e)};W.useLayoutEffect=function(r,e){return Gr.current.useLayoutEffect(r,e)};W.useMemo=function(r,e){return Gr.current.useMemo(r,e)};W.useReducer=function(r,e,n){return Gr.current.useReducer(r,e,n)};W.useRef=function(r){return Gr.current.useRef(r)};W.useState=function(r){return Gr.current.useState(r)};W.useSyncExternalStore=function(r,e,n){return Gr.current.useSyncExternalStore(r,e,n)};W.useTransition=function(){return Gr.current.useTransition()};W.version="18.3.1";B6.exports=W;var En=B6.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w7=En,I7=Symbol.for("react.element"),E7=Symbol.for("react.fragment"),P7=Object.prototype.hasOwnProperty,A7=w7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O7={key:!0,ref:!0,__self:!0,__source:!0};function b6(r,e,n){var t,i={},o=null,f=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(f=e.ref);for(t in e)P7.call(e,t)&&!O7.hasOwnProperty(t)&&(i[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)i[t]===void 0&&(i[t]=e[t]);return{$$typeof:I7,type:r,key:o,ref:f,props:i,_owner:A7.current}}Co.Fragment=E7;Co.jsx=b6;Co.jsxs=b6;D6.exports=Co;var P=D6.exports,M6={exports:{}},Jr={},Y6={exports:{}},Z6={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(L,F){var R=L.length;L.push(F);r:for(;0<R;){var U=R-1>>>1,X=L[U];if(0<i(X,F))L[U]=F,L[R]=X,R=U;else break r}}function n(L){return L.length===0?null:L[0]}function t(L){if(L.length===0)return null;var F=L[0],R=L.pop();if(R!==F){L[0]=R;r:for(var U=0,X=L.length,ar=X>>>1;U<ar;){var wr=2*(U+1)-1,B=L[wr],M=wr+1,pr=L[M];if(0>i(B,R))M<X&&0>i(pr,B)?(L[U]=pr,L[M]=R,U=M):(L[U]=B,L[wr]=R,U=wr);else if(M<X&&0>i(pr,R))L[U]=pr,L[M]=R,U=M;else break r}}return F}function i(L,F){var R=L.sortIndex-F.sortIndex;return R!==0?R:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var c=[],s=[],a=1,l=null,u=3,v=!1,m=!1,$=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(L){for(var F=n(s);F!==null;){if(F.callback===null)t(s);else if(F.startTime<=L)t(s),F.sortIndex=F.expirationTime,e(c,F);else break;F=n(s)}}function _(L){if($=!1,p(L),!m)if(n(c)!==null)m=!0,Wr(N);else{var F=n(s);F!==null&&fr(_,F.startTime-L)}}function N(L,F){m=!1,$&&($=!1,g(E),E=-1),v=!0;var R=u;try{for(p(F),l=n(c);l!==null&&(!(l.expirationTime>F)||L&&!S());){var U=l.callback;if(typeof U=="function"){l.callback=null,u=l.priorityLevel;var X=U(l.expirationTime<=F);F=r.unstable_now(),typeof X=="function"?l.callback=X:l===n(c)&&t(c),p(F)}else t(c);l=n(c)}if(l!==null)var ar=!0;else{var wr=n(s);wr!==null&&fr(_,wr.startTime-F),ar=!1}return ar}finally{l=null,u=R,v=!1}}var w=!1,I=null,E=-1,H=5,k=-1;function S(){return!(r.unstable_now()-k<H)}function yr(){if(I!==null){var L=r.unstable_now();k=L;var F=!0;try{F=I(!0,L)}finally{F?Z():(w=!1,I=null)}}else w=!1}var Z;if(typeof h=="function")Z=function(){h(yr)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Lr=j.port2;j.port1.onmessage=yr,Z=function(){Lr.postMessage(null)}}else Z=function(){y(yr,0)};function Wr(L){I=L,w||(w=!0,Z())}function fr(L,F){E=y(function(){L(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_continueExecution=function(){m||v||(m=!0,Wr(N))},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return u},r.unstable_getFirstCallbackNode=function(){return n(c)},r.unstable_next=function(L){switch(u){case 1:case 2:case 3:var F=3;break;default:F=u}var R=u;u=F;try{return L()}finally{u=R}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=u;u=L;try{return F()}finally{u=R}},r.unstable_scheduleCallback=function(L,F,R){var U=r.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?U+R:U):R=U,L){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,L={id:a++,callback:F,priorityLevel:L,startTime:R,expirationTime:X,sortIndex:-1},R>U?(L.sortIndex=R,e(s,L),n(c)===null&&L===n(s)&&($?(g(E),E=-1):$=!0,fr(_,R-U))):(L.sortIndex=X,e(c,L),m||v||(m=!0,Wr(N))),L},r.unstable_shouldYield=S,r.unstable_wrapCallback=function(L){var F=u;return function(){var R=u;u=F;try{return L.apply(this,arguments)}finally{u=R}}}})(Z6);Y6.exports=Z6;var k7=Y6.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L7=En,Zr=k7;function A(r){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+r,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+r+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J6=new Set,Zi={};function ot(r,e){Bt(r,e),Bt(r+"Capture",e)}function Bt(r,e){for(Zi[r]=e,r=0;r<e.length;r++)J6.add(e[r])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,H7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iv={},av={};function T7(r){return Is.call(av,r)?!0:Is.call(iv,r)?!1:H7.test(r)?av[r]=!0:(iv[r]=!0,!1)}function F7(r,e,n,t){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function C7(r,e,n,t){if(e===null||typeof e>"u"||F7(r,e,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dr(r,e,n,t,i,o,f){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=r,this.type=e,this.sanitizeURL=o,this.removeEmptyString=f}var Ar={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){Ar[r]=new Dr(r,0,!1,r,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var e=r[0];Ar[e]=new Dr(e,1,!1,r[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(r){Ar[r]=new Dr(r,2,!1,r.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){Ar[r]=new Dr(r,2,!1,r,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){Ar[r]=new Dr(r,3,!1,r.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(r){Ar[r]=new Dr(r,3,!0,r,null,!1,!1)});["capture","download"].forEach(function(r){Ar[r]=new Dr(r,4,!1,r,null,!1,!1)});["cols","rows","size","span"].forEach(function(r){Ar[r]=new Dr(r,6,!1,r,null,!1,!1)});["rowSpan","start"].forEach(function(r){Ar[r]=new Dr(r,5,!1,r.toLowerCase(),null,!1,!1)});var Vf=/[\-:]([a-z])/g;function qf(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var e=r.replace(Vf,qf);Ar[e]=new Dr(e,1,!1,r,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var e=r.replace(Vf,qf);Ar[e]=new Dr(e,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(r){var e=r.replace(Vf,qf);Ar[e]=new Dr(e,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(r){Ar[r]=new Dr(r,1,!1,r.toLowerCase(),null,!1,!1)});Ar.xlinkHref=new Dr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(r){Ar[r]=new Dr(r,1,!1,r.toLowerCase(),null,!0,!0)});function Xf(r,e,n,t){var i=Ar.hasOwnProperty(e)?Ar[e]:null;(i!==null?i.type!==0:t||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(C7(e,n,i,t)&&(n=null),t||i===null?T7(e)&&(n===null?r.removeAttribute(e):r.setAttribute(e,""+n)):i.mustUseProperty?r[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,t=i.attributeNamespace,n===null?r.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,t?r.setAttributeNS(t,e,n):r.setAttribute(e,n))))}var Me=L7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),yt=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Es=Symbol.for("react.profiler"),j6=Symbol.for("react.provider"),x6=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),As=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),rp=Symbol.for("react.offscreen"),ov=Symbol.iterator;function ai(r){return r===null||typeof r!="object"?null:(r=ov&&r[ov]||r["@@iterator"],typeof r=="function"?r:null)}var ur=Object.assign,sl;function Di(r){if(sl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sl=e&&e[1]||""}return`
`+sl+r}var fl=!1;function vl(r,e){if(!r||fl)return"";fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(s){var t=s}Reflect.construct(r,[],e)}else{try{e.call()}catch(s){t=s}r.call(e.prototype)}else{try{throw Error()}catch(s){t=s}r()}}catch(s){if(s&&t&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=t.stack.split(`
`),f=i.length-1,d=o.length-1;1<=f&&0<=d&&i[f]!==o[d];)d--;for(;1<=f&&0<=d;f--,d--)if(i[f]!==o[d]){if(f!==1||d!==1)do if(f--,d--,0>d||i[f]!==o[d]){var c=`
`+i[f].replace(" at new "," at ");return r.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",r.displayName)),c}while(1<=f&&0<=d);break}}}finally{fl=!1,Error.prepareStackTrace=n}return(r=r?r.displayName||r.name:"")?Di(r):""}function R7(r){switch(r.tag){case 5:return Di(r.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return r=vl(r.type,!1),r;case 11:return r=vl(r.type.render,!1),r;case 1:return r=vl(r.type,!0),r;default:return""}}function Os(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case _t:return"Fragment";case yt:return"Portal";case Es:return"Profiler";case Qf:return"StrictMode";case Ps:return"Suspense";case As:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case x6:return(r.displayName||"Context")+".Consumer";case j6:return(r._context.displayName||"Context")+".Provider";case Kf:var e=r.render;return r=r.displayName,r||(r=e.displayName||e.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case bf:return e=r.displayName||null,e!==null?e:Os(r.type)||"Memo";case wn:e=r._payload,r=r._init;try{return Os(r(e))}catch{}}return null}function S7(r){var e=r.type;switch(r.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=e.render,r=r.displayName||r.name||"",e.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Os(e);case 8:return e===Qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dn(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ep(r){var e=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G7(r){var e=ep(r)?"checked":"value",n=Object.getOwnPropertyDescriptor(r.constructor.prototype,e),t=""+r[e];if(!r.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(r,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){t=""+f,o.call(this,f)}}),Object.defineProperty(r,e,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(f){t=""+f},stopTracking:function(){r._valueTracker=null,delete r[e]}}}}function Aa(r){r._valueTracker||(r._valueTracker=G7(r))}function np(r){if(!r)return!1;var e=r._valueTracker;if(!e)return!0;var n=e.getValue(),t="";return r&&(t=ep(r)?r.checked?"true":"false":r.value),r=t,r!==n?(e.setValue(r),!0):!1}function lo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ks(r,e){var n=e.checked;return ur({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??r._wrapperState.initialChecked})}function lv(r,e){var n=e.defaultValue==null?"":e.defaultValue,t=e.checked!=null?e.checked:e.defaultChecked;n=Dn(e.value!=null?e.value:n),r._wrapperState={initialChecked:t,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tp(r,e){e=e.checked,e!=null&&Xf(r,"checked",e,!1)}function Ls(r,e){tp(r,e);var n=Dn(e.value),t=e.type;if(n!=null)t==="number"?(n===0&&r.value===""||r.value!=n)&&(r.value=""+n):r.value!==""+n&&(r.value=""+n);else if(t==="submit"||t==="reset"){r.removeAttribute("value");return}e.hasOwnProperty("value")?Hs(r,e.type,n):e.hasOwnProperty("defaultValue")&&Hs(r,e.type,Dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(r.defaultChecked=!!e.defaultChecked)}function uv(r,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var t=e.type;if(!(t!=="submit"&&t!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+r._wrapperState.initialValue,n||e===r.value||(r.value=e),r.defaultValue=e}n=r.name,n!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,n!==""&&(r.name=n)}function Hs(r,e,n){(e!=="number"||lo(r.ownerDocument)!==r)&&(n==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+n&&(r.defaultValue=""+n))}var Bi=Array.isArray;function Tt(r,e,n,t){if(r=r.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<r.length;n++)i=e.hasOwnProperty("$"+r[n].value),r[n].selected!==i&&(r[n].selected=i),i&&t&&(r[n].defaultSelected=!0)}else{for(n=""+Dn(n),e=null,i=0;i<r.length;i++){if(r[i].value===n){r[i].selected=!0,t&&(r[i].defaultSelected=!0);return}e!==null||r[i].disabled||(e=r[i])}e!==null&&(e.selected=!0)}}function Ts(r,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ur({},e,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function sv(r,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Bi(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}r._wrapperState={initialValue:Dn(n)}}function ip(r,e){var n=Dn(e.value),t=Dn(e.defaultValue);n!=null&&(n=""+n,n!==r.value&&(r.value=n),e.defaultValue==null&&r.defaultValue!==n&&(r.defaultValue=n)),t!=null&&(r.defaultValue=""+t)}function fv(r){var e=r.textContent;e===r._wrapperState.initialValue&&e!==""&&e!==null&&(r.value=e)}function ap(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(r,e){return r==null||r==="http://www.w3.org/1999/xhtml"?ap(e):r==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Oa,op=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,t,i){MSApp.execUnsafeLocalFunction(function(){return r(e,n,t,i)})}:r}(function(r,e){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=e;else{for(Oa=Oa||document.createElement("div"),Oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oa.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;e.firstChild;)r.appendChild(e.firstChild)}});function Ji(r,e){if(e){var n=r.firstChild;if(n&&n===r.lastChild&&n.nodeType===3){n.nodeValue=e;return}}r.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D7=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(r){D7.forEach(function(e){e=e+r.charAt(0).toUpperCase()+r.substring(1),zi[e]=zi[r]})});function lp(r,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(r)&&zi[r]?(""+e).trim():e+"px"}function up(r,e){r=r.style;for(var n in e)if(e.hasOwnProperty(n)){var t=n.indexOf("--")===0,i=lp(n,e[n],t);n==="float"&&(n="cssFloat"),t?r.setProperty(n,i):r[n]=i}}var B7=ur({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cs(r,e){if(e){if(B7[r]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,r));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Rs(r,e){if(r.indexOf("-")===-1)return typeof e.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ss=null;function Mf(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Gs=null,Ft=null,Ct=null;function vv(r){if(r=$a(r)){if(typeof Gs!="function")throw Error(A(280));var e=r.stateNode;e&&(e=Bo(e),Gs(r.stateNode,r.type,e))}}function sp(r){Ft?Ct?Ct.push(r):Ct=[r]:Ft=r}function fp(){if(Ft){var r=Ft,e=Ct;if(Ct=Ft=null,vv(r),e)for(r=0;r<e.length;r++)vv(e[r])}}function vp(r,e){return r(e)}function cp(){}var cl=!1;function dp(r,e,n){if(cl)return r(e,n);cl=!0;try{return vp(r,e,n)}finally{cl=!1,(Ft!==null||Ct!==null)&&(cp(),fp())}}function ji(r,e){var n=r.stateNode;if(n===null)return null;var t=Bo(n);if(t===null)return null;n=t[e];r:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(r=r.type,t=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!t;break r;default:r=!1}if(r)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Ds=!1;if(Xe)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Ds=!1}function W7(r,e,n,t,i,o,f,d,c){var s=Array.prototype.slice.call(arguments,3);try{e.apply(n,s)}catch(a){this.onError(a)}}var Vi=!1,uo=null,so=!1,Bs=null,U7={onError:function(r){Vi=!0,uo=r}};function z7(r,e,n,t,i,o,f,d,c){Vi=!1,uo=null,W7.apply(U7,arguments)}function V7(r,e,n,t,i,o,f,d,c){if(z7.apply(this,arguments),Vi){if(Vi){var s=uo;Vi=!1,uo=null}else throw Error(A(198));so||(so=!0,Bs=s)}}function lt(r){var e=r,n=r;if(r.alternate)for(;e.return;)e=e.return;else{r=e;do e=r,e.flags&4098&&(n=e.return),r=e.return;while(r)}return e.tag===3?n:null}function pp(r){if(r.tag===13){var e=r.memoizedState;if(e===null&&(r=r.alternate,r!==null&&(e=r.memoizedState)),e!==null)return e.dehydrated}return null}function cv(r){if(lt(r)!==r)throw Error(A(188))}function q7(r){var e=r.alternate;if(!e){if(e=lt(r),e===null)throw Error(A(188));return e!==r?null:r}for(var n=r,t=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(t=i.return,t!==null){n=t;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cv(i),r;if(o===t)return cv(i),e;o=o.sibling}throw Error(A(188))}if(n.return!==t.return)n=i,t=o;else{for(var f=!1,d=i.child;d;){if(d===n){f=!0,n=i,t=o;break}if(d===t){f=!0,t=i,n=o;break}d=d.sibling}if(!f){for(d=o.child;d;){if(d===n){f=!0,n=o,t=i;break}if(d===t){f=!0,t=o,n=i;break}d=d.sibling}if(!f)throw Error(A(189))}}if(n.alternate!==t)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?r:e}function mp(r){return r=q7(r),r!==null?$p(r):null}function $p(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var e=$p(r);if(e!==null)return e;r=r.sibling}return null}var gp=Zr.unstable_scheduleCallback,dv=Zr.unstable_cancelCallback,X7=Zr.unstable_shouldYield,Q7=Zr.unstable_requestPaint,cr=Zr.unstable_now,K7=Zr.unstable_getCurrentPriorityLevel,Yf=Zr.unstable_ImmediatePriority,hp=Zr.unstable_UserBlockingPriority,fo=Zr.unstable_NormalPriority,b7=Zr.unstable_LowPriority,yp=Zr.unstable_IdlePriority,Ro=null,Ae=null;function M7(r){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ro,r,void 0,(r.current.flags&128)===128)}catch{}}var pe=Math.clz32?Math.clz32:J7,Y7=Math.log,Z7=Math.LN2;function J7(r){return r>>>=0,r===0?32:31-(Y7(r)/Z7|0)|0}var ka=64,La=4194304;function Wi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function vo(r,e){var n=r.pendingLanes;if(n===0)return 0;var t=0,i=r.suspendedLanes,o=r.pingedLanes,f=n&268435455;if(f!==0){var d=f&~i;d!==0?t=Wi(d):(o&=f,o!==0&&(t=Wi(o)))}else f=n&~i,f!==0?t=Wi(f):o!==0&&(t=Wi(o));if(t===0)return 0;if(e!==0&&e!==t&&!(e&i)&&(i=t&-t,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(t&4&&(t|=n&16),e=r.entangledLanes,e!==0)for(r=r.entanglements,e&=t;0<e;)n=31-pe(e),i=1<<n,t|=r[n],e&=~i;return t}function j7(r,e){switch(r){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x7(r,e){for(var n=r.suspendedLanes,t=r.pingedLanes,i=r.expirationTimes,o=r.pendingLanes;0<o;){var f=31-pe(o),d=1<<f,c=i[f];c===-1?(!(d&n)||d&t)&&(i[f]=j7(d,e)):c<=e&&(r.expiredLanes|=d),o&=~d}}function Ws(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function _p(){var r=ka;return ka<<=1,!(ka&4194240)&&(ka=64),r}function dl(r){for(var e=[],n=0;31>n;n++)e.push(r);return e}function pa(r,e,n){r.pendingLanes|=e,e!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,e=31-pe(e),r[e]=n}function r8(r,e){var n=r.pendingLanes&~e;r.pendingLanes=e,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=e,r.mutableReadLanes&=e,r.entangledLanes&=e,e=r.entanglements;var t=r.eventTimes;for(r=r.expirationTimes;0<n;){var i=31-pe(n),o=1<<i;e[i]=0,t[i]=-1,r[i]=-1,n&=~o}}function Zf(r,e){var n=r.entangledLanes|=e;for(r=r.entanglements;n;){var t=31-pe(n),i=1<<t;i&e|r[t]&e&&(r[t]|=e),n&=~i}}var K=0;function Np(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var wp,Jf,Ip,Ep,Pp,Us=!1,Ha=[],Ln=null,Hn=null,Tn=null,xi=new Map,ra=new Map,Pn=[],e8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pv(r,e){switch(r){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function li(r,e,n,t,i,o){return r===null||r.nativeEvent!==o?(r={blockedOn:e,domEventName:n,eventSystemFlags:t,nativeEvent:o,targetContainers:[i]},e!==null&&(e=$a(e),e!==null&&Jf(e)),r):(r.eventSystemFlags|=t,e=r.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),r)}function n8(r,e,n,t,i){switch(e){case"focusin":return Ln=li(Ln,r,e,n,t,i),!0;case"dragenter":return Hn=li(Hn,r,e,n,t,i),!0;case"mouseover":return Tn=li(Tn,r,e,n,t,i),!0;case"pointerover":var o=i.pointerId;return xi.set(o,li(xi.get(o)||null,r,e,n,t,i)),!0;case"gotpointercapture":return o=i.pointerId,ra.set(o,li(ra.get(o)||null,r,e,n,t,i)),!0}return!1}function Ap(r){var e=Yn(r.target);if(e!==null){var n=lt(e);if(n!==null){if(e=n.tag,e===13){if(e=pp(n),e!==null){r.blockedOn=e,Pp(r.priority,function(){Ip(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){r.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Z0(r){if(r.blockedOn!==null)return!1;for(var e=r.targetContainers;0<e.length;){var n=zs(r.domEventName,r.eventSystemFlags,e[0],r.nativeEvent);if(n===null){n=r.nativeEvent;var t=new n.constructor(n.type,n);Ss=t,n.target.dispatchEvent(t),Ss=null}else return e=$a(n),e!==null&&Jf(e),r.blockedOn=n,!1;e.shift()}return!0}function mv(r,e,n){Z0(r)&&n.delete(e)}function t8(){Us=!1,Ln!==null&&Z0(Ln)&&(Ln=null),Hn!==null&&Z0(Hn)&&(Hn=null),Tn!==null&&Z0(Tn)&&(Tn=null),xi.forEach(mv),ra.forEach(mv)}function ui(r,e){r.blockedOn===e&&(r.blockedOn=null,Us||(Us=!0,Zr.unstable_scheduleCallback(Zr.unstable_NormalPriority,t8)))}function ea(r){function e(i){return ui(i,r)}if(0<Ha.length){ui(Ha[0],r);for(var n=1;n<Ha.length;n++){var t=Ha[n];t.blockedOn===r&&(t.blockedOn=null)}}for(Ln!==null&&ui(Ln,r),Hn!==null&&ui(Hn,r),Tn!==null&&ui(Tn,r),xi.forEach(e),ra.forEach(e),n=0;n<Pn.length;n++)t=Pn[n],t.blockedOn===r&&(t.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Pn.shift()}var Rt=Me.ReactCurrentBatchConfig,co=!0;function i8(r,e,n,t){var i=K,o=Rt.transition;Rt.transition=null;try{K=1,jf(r,e,n,t)}finally{K=i,Rt.transition=o}}function a8(r,e,n,t){var i=K,o=Rt.transition;Rt.transition=null;try{K=4,jf(r,e,n,t)}finally{K=i,Rt.transition=o}}function jf(r,e,n,t){if(co){var i=zs(r,e,n,t);if(i===null)Il(r,e,t,po,n),pv(r,t);else if(n8(i,r,e,n,t))t.stopPropagation();else if(pv(r,t),e&4&&-1<e8.indexOf(r)){for(;i!==null;){var o=$a(i);if(o!==null&&wp(o),o=zs(r,e,n,t),o===null&&Il(r,e,t,po,n),o===i)break;i=o}i!==null&&t.stopPropagation()}else Il(r,e,t,null,n)}}var po=null;function zs(r,e,n,t){if(po=null,r=Mf(t),r=Yn(r),r!==null)if(e=lt(r),e===null)r=null;else if(n=e.tag,n===13){if(r=pp(e),r!==null)return r;r=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;r=null}else e!==r&&(r=null);return po=r,null}function Op(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K7()){case Yf:return 1;case hp:return 4;case fo:case b7:return 16;case yp:return 536870912;default:return 16}default:return 16}}var On=null,xf=null,J0=null;function kp(){if(J0)return J0;var r,e=xf,n=e.length,t,i="value"in On?On.value:On.textContent,o=i.length;for(r=0;r<n&&e[r]===i[r];r++);var f=n-r;for(t=1;t<=f&&e[n-t]===i[o-t];t++);return J0=i.slice(r,1<t?1-t:void 0)}function j0(r){var e=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&e===13&&(r=13)):r=e,r===10&&(r=13),32<=r||r===13?r:0}function Ta(){return!0}function $v(){return!1}function jr(r){function e(n,t,i,o,f){this._reactName=n,this._targetInst=i,this.type=t,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var d in r)r.hasOwnProperty(d)&&(n=r[d],this[d]=n?n(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ta:$v,this.isPropagationStopped=$v,this}return ur(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var Kt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},r1=jr(Kt),ma=ur({},Kt,{view:0,detail:0}),o8=jr(ma),pl,ml,si,So=ur({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e1,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==si&&(si&&r.type==="mousemove"?(pl=r.screenX-si.screenX,ml=r.screenY-si.screenY):ml=pl=0,si=r),pl)},movementY:function(r){return"movementY"in r?r.movementY:ml}}),gv=jr(So),l8=ur({},So,{dataTransfer:0}),u8=jr(l8),s8=ur({},ma,{relatedTarget:0}),$l=jr(s8),f8=ur({},Kt,{animationName:0,elapsedTime:0,pseudoElement:0}),v8=jr(f8),c8=ur({},Kt,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),d8=jr(c8),p8=ur({},Kt,{data:0}),hv=jr(p8),m8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h8(r){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(r):(r=g8[r])?!!e[r]:!1}function e1(){return h8}var y8=ur({},ma,{key:function(r){if(r.key){var e=m8[r.key]||r.key;if(e!=="Unidentified")return e}return r.type==="keypress"?(r=j0(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$8[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e1,charCode:function(r){return r.type==="keypress"?j0(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?j0(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),_8=jr(y8),N8=ur({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=jr(N8),w8=ur({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e1}),I8=jr(w8),E8=ur({},Kt,{propertyName:0,elapsedTime:0,pseudoElement:0}),P8=jr(E8),A8=ur({},So,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),O8=jr(A8),k8=[9,13,27,32],n1=Xe&&"CompositionEvent"in window,qi=null;Xe&&"documentMode"in document&&(qi=document.documentMode);var L8=Xe&&"TextEvent"in window&&!qi,Lp=Xe&&(!n1||qi&&8<qi&&11>=qi),_v=" ",Nv=!1;function Hp(r,e){switch(r){case"keyup":return k8.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Nt=!1;function H8(r,e){switch(r){case"compositionend":return Tp(e);case"keypress":return e.which!==32?null:(Nv=!0,_v);case"textInput":return r=e.data,r===_v&&Nv?null:r;default:return null}}function T8(r,e){if(Nt)return r==="compositionend"||!n1&&Hp(r,e)?(r=kp(),J0=xf=On=null,Nt=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lp&&e.locale!=="ko"?null:e.data;default:return null}}var F8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wv(r){var e=r&&r.nodeName&&r.nodeName.toLowerCase();return e==="input"?!!F8[r.type]:e==="textarea"}function Fp(r,e,n,t){sp(t),e=mo(e,"onChange"),0<e.length&&(n=new r1("onChange","change",null,n,t),r.push({event:n,listeners:e}))}var Xi=null,na=null;function C8(r){qp(r,0)}function Go(r){var e=Et(r);if(np(e))return r}function R8(r,e){if(r==="change")return e}var Cp=!1;if(Xe){var gl;if(Xe){var hl="oninput"in document;if(!hl){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),hl=typeof Iv.oninput=="function"}gl=hl}else gl=!1;Cp=gl&&(!document.documentMode||9<document.documentMode)}function Ev(){Xi&&(Xi.detachEvent("onpropertychange",Rp),na=Xi=null)}function Rp(r){if(r.propertyName==="value"&&Go(na)){var e=[];Fp(e,na,r,Mf(r)),dp(C8,e)}}function S8(r,e,n){r==="focusin"?(Ev(),Xi=e,na=n,Xi.attachEvent("onpropertychange",Rp)):r==="focusout"&&Ev()}function G8(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Go(na)}function D8(r,e){if(r==="click")return Go(e)}function B8(r,e){if(r==="input"||r==="change")return Go(e)}function W8(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var $e=typeof Object.is=="function"?Object.is:W8;function ta(r,e){if($e(r,e))return!0;if(typeof r!="object"||r===null||typeof e!="object"||e===null)return!1;var n=Object.keys(r),t=Object.keys(e);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var i=n[t];if(!Is.call(e,i)||!$e(r[i],e[i]))return!1}return!0}function Pv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Av(r,e){var n=Pv(r);r=0;for(var t;n;){if(n.nodeType===3){if(t=r+n.textContent.length,r<=e&&t>=e)return{node:n,offset:e-r};r=t}r:{for(;n;){if(n.nextSibling){n=n.nextSibling;break r}n=n.parentNode}n=void 0}n=Pv(n)}}function Sp(r,e){return r&&e?r===e?!0:r&&r.nodeType===3?!1:e&&e.nodeType===3?Sp(r,e.parentNode):"contains"in r?r.contains(e):r.compareDocumentPosition?!!(r.compareDocumentPosition(e)&16):!1:!1}function Gp(){for(var r=window,e=lo();e instanceof r.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)r=e.contentWindow;else break;e=lo(r.document)}return e}function t1(r){var e=r&&r.nodeName&&r.nodeName.toLowerCase();return e&&(e==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||e==="textarea"||r.contentEditable==="true")}function U8(r){var e=Gp(),n=r.focusedElem,t=r.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sp(n.ownerDocument.documentElement,n)){if(t!==null&&t1(n)){if(e=t.start,r=t.end,r===void 0&&(r=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(r,n.value.length);else if(r=(e=n.ownerDocument||document)&&e.defaultView||window,r.getSelection){r=r.getSelection();var i=n.textContent.length,o=Math.min(t.start,i);t=t.end===void 0?o:Math.min(t.end,i),!r.extend&&o>t&&(i=t,t=o,o=i),i=Av(n,o);var f=Av(n,t);i&&f&&(r.rangeCount!==1||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==f.node||r.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),r.removeAllRanges(),o>t?(r.addRange(e),r.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),r.addRange(e)))}}for(e=[],r=n;r=r.parentNode;)r.nodeType===1&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)r=e[n],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var z8=Xe&&"documentMode"in document&&11>=document.documentMode,wt=null,Vs=null,Qi=null,qs=!1;function Ov(r,e,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qs||wt==null||wt!==lo(t)||(t=wt,"selectionStart"in t&&t1(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Qi&&ta(Qi,t)||(Qi=t,t=mo(Vs,"onSelect"),0<t.length&&(e=new r1("onSelect","select",null,e,n),r.push({event:e,listeners:t}),e.target=wt)))}function Fa(r,e){var n={};return n[r.toLowerCase()]=e.toLowerCase(),n["Webkit"+r]="webkit"+e,n["Moz"+r]="moz"+e,n}var It={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},yl={},Dp={};Xe&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete It.animationend.animation,delete It.animationiteration.animation,delete It.animationstart.animation),"TransitionEvent"in window||delete It.transitionend.transition);function Do(r){if(yl[r])return yl[r];if(!It[r])return r;var e=It[r],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dp)return yl[r]=e[n];return r}var Bp=Do("animationend"),Wp=Do("animationiteration"),Up=Do("animationstart"),zp=Do("transitionend"),Vp=new Map,kv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(r,e){Vp.set(r,e),ot(e,[r])}for(var _l=0;_l<kv.length;_l++){var Nl=kv[_l],V8=Nl.toLowerCase(),q8=Nl[0].toUpperCase()+Nl.slice(1);Wn(V8,"on"+q8)}Wn(Bp,"onAnimationEnd");Wn(Wp,"onAnimationIteration");Wn(Up,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(zp,"onTransitionEnd");Bt("onMouseEnter",["mouseout","mouseover"]);Bt("onMouseLeave",["mouseout","mouseover"]);Bt("onPointerEnter",["pointerout","pointerover"]);Bt("onPointerLeave",["pointerout","pointerover"]);ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Lv(r,e,n){var t=r.type||"unknown-event";r.currentTarget=n,V7(t,e,void 0,r),r.currentTarget=null}function qp(r,e){e=(e&4)!==0;for(var n=0;n<r.length;n++){var t=r[n],i=t.event;t=t.listeners;r:{var o=void 0;if(e)for(var f=t.length-1;0<=f;f--){var d=t[f],c=d.instance,s=d.currentTarget;if(d=d.listener,c!==o&&i.isPropagationStopped())break r;Lv(i,d,s),o=c}else for(f=0;f<t.length;f++){if(d=t[f],c=d.instance,s=d.currentTarget,d=d.listener,c!==o&&i.isPropagationStopped())break r;Lv(i,d,s),o=c}}}if(so)throw r=Bs,so=!1,Bs=null,r}function x(r,e){var n=e[Ms];n===void 0&&(n=e[Ms]=new Set);var t=r+"__bubble";n.has(t)||(Xp(e,r,2,!1),n.add(t))}function wl(r,e,n){var t=0;e&&(t|=4),Xp(n,r,t,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function ia(r){if(!r[Ca]){r[Ca]=!0,J6.forEach(function(n){n!=="selectionchange"&&(X8.has(n)||wl(n,!1,r),wl(n,!0,r))});var e=r.nodeType===9?r:r.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,wl("selectionchange",!1,e))}}function Xp(r,e,n,t){switch(Op(e)){case 1:var i=i8;break;case 4:i=a8;break;default:i=jf}n=i.bind(null,e,n,r),i=void 0,!Ds||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),t?i!==void 0?r.addEventListener(e,n,{capture:!0,passive:i}):r.addEventListener(e,n,!0):i!==void 0?r.addEventListener(e,n,{passive:i}):r.addEventListener(e,n,!1)}function Il(r,e,n,t,i){var o=t;if(!(e&1)&&!(e&2)&&t!==null)r:for(;;){if(t===null)return;var f=t.tag;if(f===3||f===4){var d=t.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(f===4)for(f=t.return;f!==null;){var c=f.tag;if((c===3||c===4)&&(c=f.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;f=f.return}for(;d!==null;){if(f=Yn(d),f===null)return;if(c=f.tag,c===5||c===6){t=o=f;continue r}d=d.parentNode}}t=t.return}dp(function(){var s=o,a=Mf(n),l=[];r:{var u=Vp.get(r);if(u!==void 0){var v=r1,m=r;switch(r){case"keypress":if(j0(n)===0)break r;case"keydown":case"keyup":v=_8;break;case"focusin":m="focus",v=$l;break;case"focusout":m="blur",v=$l;break;case"beforeblur":case"afterblur":v=$l;break;case"click":if(n.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=u8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=I8;break;case Bp:case Wp:case Up:v=v8;break;case zp:v=P8;break;case"scroll":v=o8;break;case"wheel":v=O8;break;case"copy":case"cut":case"paste":v=d8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yv}var $=(e&4)!==0,y=!$&&r==="scroll",g=$?u!==null?u+"Capture":null:u;$=[];for(var h=s,p;h!==null;){p=h;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,g!==null&&(_=ji(h,g),_!=null&&$.push(aa(h,_,p)))),y)break;h=h.return}0<$.length&&(u=new v(u,m,null,n,a),l.push({event:u,listeners:$}))}}if(!(e&7)){r:{if(u=r==="mouseover"||r==="pointerover",v=r==="mouseout"||r==="pointerout",u&&n!==Ss&&(m=n.relatedTarget||n.fromElement)&&(Yn(m)||m[Qe]))break r;if((v||u)&&(u=a.window===a?a:(u=a.ownerDocument)?u.defaultView||u.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=s,m=m?Yn(m):null,m!==null&&(y=lt(m),m!==y||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=s),v!==m)){if($=gv,_="onMouseLeave",g="onMouseEnter",h="mouse",(r==="pointerout"||r==="pointerover")&&($=yv,_="onPointerLeave",g="onPointerEnter",h="pointer"),y=v==null?u:Et(v),p=m==null?u:Et(m),u=new $(_,h+"leave",v,n,a),u.target=y,u.relatedTarget=p,_=null,Yn(a)===s&&($=new $(g,h+"enter",m,n,a),$.target=p,$.relatedTarget=y,_=$),y=_,v&&m)e:{for($=v,g=m,h=0,p=$;p;p=pt(p))h++;for(p=0,_=g;_;_=pt(_))p++;for(;0<h-p;)$=pt($),h--;for(;0<p-h;)g=pt(g),p--;for(;h--;){if($===g||g!==null&&$===g.alternate)break e;$=pt($),g=pt(g)}$=null}else $=null;v!==null&&Hv(l,u,v,$,!1),m!==null&&y!==null&&Hv(l,y,m,$,!0)}}r:{if(u=s?Et(s):window,v=u.nodeName&&u.nodeName.toLowerCase(),v==="select"||v==="input"&&u.type==="file")var N=R8;else if(wv(u))if(Cp)N=B8;else{N=G8;var w=S8}else(v=u.nodeName)&&v.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(N=D8);if(N&&(N=N(r,s))){Fp(l,N,n,a);break r}w&&w(r,u,s),r==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Hs(u,"number",u.value)}switch(w=s?Et(s):window,r){case"focusin":(wv(w)||w.contentEditable==="true")&&(wt=w,Vs=s,Qi=null);break;case"focusout":Qi=Vs=wt=null;break;case"mousedown":qs=!0;break;case"contextmenu":case"mouseup":case"dragend":qs=!1,Ov(l,n,a);break;case"selectionchange":if(z8)break;case"keydown":case"keyup":Ov(l,n,a)}var I;if(n1)r:{switch(r){case"compositionstart":var E="onCompositionStart";break r;case"compositionend":E="onCompositionEnd";break r;case"compositionupdate":E="onCompositionUpdate";break r}E=void 0}else Nt?Hp(r,n)&&(E="onCompositionEnd"):r==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Lp&&n.locale!=="ko"&&(Nt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Nt&&(I=kp()):(On=a,xf="value"in On?On.value:On.textContent,Nt=!0)),w=mo(s,E),0<w.length&&(E=new hv(E,r,null,n,a),l.push({event:E,listeners:w}),I?E.data=I:(I=Tp(n),I!==null&&(E.data=I)))),(I=L8?H8(r,n):T8(r,n))&&(s=mo(s,"onBeforeInput"),0<s.length&&(a=new hv("onBeforeInput","beforeinput",null,n,a),l.push({event:a,listeners:s}),a.data=I))}qp(l,e)})}function aa(r,e,n){return{instance:r,listener:e,currentTarget:n}}function mo(r,e){for(var n=e+"Capture",t=[];r!==null;){var i=r,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ji(r,n),o!=null&&t.unshift(aa(r,o,i)),o=ji(r,e),o!=null&&t.push(aa(r,o,i))),r=r.return}return t}function pt(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Hv(r,e,n,t,i){for(var o=e._reactName,f=[];n!==null&&n!==t;){var d=n,c=d.alternate,s=d.stateNode;if(c!==null&&c===t)break;d.tag===5&&s!==null&&(d=s,i?(c=ji(n,o),c!=null&&f.unshift(aa(n,c,d))):i||(c=ji(n,o),c!=null&&f.push(aa(n,c,d)))),n=n.return}f.length!==0&&r.push({event:e,listeners:f})}var Q8=/\r\n?/g,K8=/\u0000|\uFFFD/g;function Tv(r){return(typeof r=="string"?r:""+r).replace(Q8,`
`).replace(K8,"")}function Ra(r,e,n){if(e=Tv(e),Tv(r)!==e&&n)throw Error(A(425))}function $o(){}var Xs=null,Qs=null;function Ks(r,e){return r==="textarea"||r==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bs=typeof setTimeout=="function"?setTimeout:void 0,b8=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,M8=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(r){return Fv.resolve(null).then(r).catch(Y8)}:bs;function Y8(r){setTimeout(function(){throw r})}function El(r,e){var n=e,t=0;do{var i=n.nextSibling;if(r.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0){r.removeChild(i),ea(e);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=i}while(n);ea(e)}function Fn(r){for(;r!=null;r=r.nextSibling){var e=r.nodeType;if(e===1||e===3)break;if(e===8){if(e=r.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return r}function Cv(r){r=r.previousSibling;for(var e=0;r;){if(r.nodeType===8){var n=r.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return r;e--}else n==="/$"&&e++}r=r.previousSibling}return null}var bt=Math.random().toString(36).slice(2),Ee="__reactFiber$"+bt,oa="__reactProps$"+bt,Qe="__reactContainer$"+bt,Ms="__reactEvents$"+bt,Z8="__reactListeners$"+bt,J8="__reactHandles$"+bt;function Yn(r){var e=r[Ee];if(e)return e;for(var n=r.parentNode;n;){if(e=n[Qe]||n[Ee]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(r=Cv(r);r!==null;){if(n=r[Ee])return n;r=Cv(r)}return e}r=n,n=r.parentNode}return null}function $a(r){return r=r[Ee]||r[Qe],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Et(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(A(33))}function Bo(r){return r[oa]||null}var Ys=[],Pt=-1;function Un(r){return{current:r}}function rr(r){0>Pt||(r.current=Ys[Pt],Ys[Pt]=null,Pt--)}function J(r,e){Pt++,Ys[Pt]=r.current,r.current=e}var Bn={},Cr=Un(Bn),Vr=Un(!1),et=Bn;function Wt(r,e){var n=r.type.contextTypes;if(!n)return Bn;var t=r.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===e)return t.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=e,r.__reactInternalMemoizedMaskedChildContext=i),i}function qr(r){return r=r.childContextTypes,r!=null}function go(){rr(Vr),rr(Cr)}function Rv(r,e,n){if(Cr.current!==Bn)throw Error(A(168));J(Cr,e),J(Vr,n)}function Qp(r,e,n){var t=r.stateNode;if(e=e.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var i in t)if(!(i in e))throw Error(A(108,S7(r)||"Unknown",i));return ur({},n,t)}function ho(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Bn,et=Cr.current,J(Cr,r),J(Vr,Vr.current),!0}function Sv(r,e,n){var t=r.stateNode;if(!t)throw Error(A(169));n?(r=Qp(r,e,et),t.__reactInternalMemoizedMergedChildContext=r,rr(Vr),rr(Cr),J(Cr,r)):rr(Vr),J(Vr,n)}var Ue=null,Wo=!1,Pl=!1;function Kp(r){Ue===null?Ue=[r]:Ue.push(r)}function j8(r){Wo=!0,Kp(r)}function zn(){if(!Pl&&Ue!==null){Pl=!0;var r=0,e=K;try{var n=Ue;for(K=1;r<n.length;r++){var t=n[r];do t=t(!0);while(t!==null)}Ue=null,Wo=!1}catch(i){throw Ue!==null&&(Ue=Ue.slice(r+1)),gp(Yf,zn),i}finally{K=e,Pl=!1}}return null}var At=[],Ot=0,yo=null,_o=0,ne=[],te=0,nt=null,ze=1,Ve="";function bn(r,e){At[Ot++]=_o,At[Ot++]=yo,yo=r,_o=e}function bp(r,e,n){ne[te++]=ze,ne[te++]=Ve,ne[te++]=nt,nt=r;var t=ze;r=Ve;var i=32-pe(t)-1;t&=~(1<<i),n+=1;var o=32-pe(e)+i;if(30<o){var f=i-i%5;o=(t&(1<<f)-1).toString(32),t>>=f,i-=f,ze=1<<32-pe(e)+i|n<<i|t,Ve=o+r}else ze=1<<o|n<<i|t,Ve=r}function i1(r){r.return!==null&&(bn(r,1),bp(r,1,0))}function a1(r){for(;r===yo;)yo=At[--Ot],At[Ot]=null,_o=At[--Ot],At[Ot]=null;for(;r===nt;)nt=ne[--te],ne[te]=null,Ve=ne[--te],ne[te]=null,ze=ne[--te],ne[te]=null}var Yr=null,Mr=null,tr=!1,de=null;function Mp(r,e){var n=ie(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=r,e=r.deletions,e===null?(r.deletions=[n],r.flags|=16):e.push(n)}function Gv(r,e){switch(r.tag){case 5:var n=r.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(r.stateNode=e,Yr=r,Mr=Fn(e.firstChild),!0):!1;case 6:return e=r.pendingProps===""||e.nodeType!==3?null:e,e!==null?(r.stateNode=e,Yr=r,Mr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nt!==null?{id:ze,overflow:Ve}:null,r.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ie(18,null,null,0),n.stateNode=e,n.return=r,r.child=n,Yr=r,Mr=null,!0):!1;default:return!1}}function Zs(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Js(r){if(tr){var e=Mr;if(e){var n=e;if(!Gv(r,e)){if(Zs(r))throw Error(A(418));e=Fn(n.nextSibling);var t=Yr;e&&Gv(r,e)?Mp(t,n):(r.flags=r.flags&-4097|2,tr=!1,Yr=r)}}else{if(Zs(r))throw Error(A(418));r.flags=r.flags&-4097|2,tr=!1,Yr=r}}}function Dv(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Yr=r}function Sa(r){if(r!==Yr)return!1;if(!tr)return Dv(r),tr=!0,!1;var e;if((e=r.tag!==3)&&!(e=r.tag!==5)&&(e=r.type,e=e!=="head"&&e!=="body"&&!Ks(r.type,r.memoizedProps)),e&&(e=Mr)){if(Zs(r))throw Yp(),Error(A(418));for(;e;)Mp(r,e),e=Fn(e.nextSibling)}if(Dv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(A(317));r:{for(r=r.nextSibling,e=0;r;){if(r.nodeType===8){var n=r.data;if(n==="/$"){if(e===0){Mr=Fn(r.nextSibling);break r}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}r=r.nextSibling}Mr=null}}else Mr=Yr?Fn(r.stateNode.nextSibling):null;return!0}function Yp(){for(var r=Mr;r;)r=Fn(r.nextSibling)}function Ut(){Mr=Yr=null,tr=!1}function o1(r){de===null?de=[r]:de.push(r)}var x8=Me.ReactCurrentBatchConfig;function fi(r,e,n){if(r=n.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var t=n.stateNode}if(!t)throw Error(A(147,r));var i=t,o=""+r;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(f){var d=i.refs;f===null?delete d[o]:d[o]=f},e._stringRef=o,e)}if(typeof r!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,r))}return r}function Ga(r,e){throw r=Object.prototype.toString.call(e),Error(A(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r))}function Bv(r){var e=r._init;return e(r._payload)}function Zp(r){function e(g,h){if(r){var p=g.deletions;p===null?(g.deletions=[h],g.flags|=16):p.push(h)}}function n(g,h){if(!r)return null;for(;h!==null;)e(g,h),h=h.sibling;return null}function t(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Gn(g,h),g.index=0,g.sibling=null,g}function o(g,h,p){return g.index=p,r?(p=g.alternate,p!==null?(p=p.index,p<h?(g.flags|=2,h):p):(g.flags|=2,h)):(g.flags|=1048576,h)}function f(g){return r&&g.alternate===null&&(g.flags|=2),g}function d(g,h,p,_){return h===null||h.tag!==6?(h=Fl(p,g.mode,_),h.return=g,h):(h=i(h,p),h.return=g,h)}function c(g,h,p,_){var N=p.type;return N===_t?a(g,h,p.props.children,_,p.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wn&&Bv(N)===h.type)?(_=i(h,p.props),_.ref=fi(g,h,p),_.return=g,_):(_=ao(p.type,p.key,p.props,null,g.mode,_),_.ref=fi(g,h,p),_.return=g,_)}function s(g,h,p,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Cl(p,g.mode,_),h.return=g,h):(h=i(h,p.children||[]),h.return=g,h)}function a(g,h,p,_,N){return h===null||h.tag!==7?(h=rt(p,g.mode,_,N),h.return=g,h):(h=i(h,p),h.return=g,h)}function l(g,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Fl(""+h,g.mode,p),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pa:return p=ao(h.type,h.key,h.props,null,g.mode,p),p.ref=fi(g,null,h),p.return=g,p;case yt:return h=Cl(h,g.mode,p),h.return=g,h;case wn:var _=h._init;return l(g,_(h._payload),p)}if(Bi(h)||ai(h))return h=rt(h,g.mode,p,null),h.return=g,h;Ga(g,h)}return null}function u(g,h,p,_){var N=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:d(g,h,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Pa:return p.key===N?c(g,h,p,_):null;case yt:return p.key===N?s(g,h,p,_):null;case wn:return N=p._init,u(g,h,N(p._payload),_)}if(Bi(p)||ai(p))return N!==null?null:a(g,h,p,_,null);Ga(g,p)}return null}function v(g,h,p,_,N){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(p)||null,d(h,g,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:return g=g.get(_.key===null?p:_.key)||null,c(h,g,_,N);case yt:return g=g.get(_.key===null?p:_.key)||null,s(h,g,_,N);case wn:var w=_._init;return v(g,h,p,w(_._payload),N)}if(Bi(_)||ai(_))return g=g.get(p)||null,a(h,g,_,N,null);Ga(h,_)}return null}function m(g,h,p,_){for(var N=null,w=null,I=h,E=h=0,H=null;I!==null&&E<p.length;E++){I.index>E?(H=I,I=null):H=I.sibling;var k=u(g,I,p[E],_);if(k===null){I===null&&(I=H);break}r&&I&&k.alternate===null&&e(g,I),h=o(k,h,E),w===null?N=k:w.sibling=k,w=k,I=H}if(E===p.length)return n(g,I),tr&&bn(g,E),N;if(I===null){for(;E<p.length;E++)I=l(g,p[E],_),I!==null&&(h=o(I,h,E),w===null?N=I:w.sibling=I,w=I);return tr&&bn(g,E),N}for(I=t(g,I);E<p.length;E++)H=v(I,g,E,p[E],_),H!==null&&(r&&H.alternate!==null&&I.delete(H.key===null?E:H.key),h=o(H,h,E),w===null?N=H:w.sibling=H,w=H);return r&&I.forEach(function(S){return e(g,S)}),tr&&bn(g,E),N}function $(g,h,p,_){var N=ai(p);if(typeof N!="function")throw Error(A(150));if(p=N.call(p),p==null)throw Error(A(151));for(var w=N=null,I=h,E=h=0,H=null,k=p.next();I!==null&&!k.done;E++,k=p.next()){I.index>E?(H=I,I=null):H=I.sibling;var S=u(g,I,k.value,_);if(S===null){I===null&&(I=H);break}r&&I&&S.alternate===null&&e(g,I),h=o(S,h,E),w===null?N=S:w.sibling=S,w=S,I=H}if(k.done)return n(g,I),tr&&bn(g,E),N;if(I===null){for(;!k.done;E++,k=p.next())k=l(g,k.value,_),k!==null&&(h=o(k,h,E),w===null?N=k:w.sibling=k,w=k);return tr&&bn(g,E),N}for(I=t(g,I);!k.done;E++,k=p.next())k=v(I,g,E,k.value,_),k!==null&&(r&&k.alternate!==null&&I.delete(k.key===null?E:k.key),h=o(k,h,E),w===null?N=k:w.sibling=k,w=k);return r&&I.forEach(function(yr){return e(g,yr)}),tr&&bn(g,E),N}function y(g,h,p,_){if(typeof p=="object"&&p!==null&&p.type===_t&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Pa:r:{for(var N=p.key,w=h;w!==null;){if(w.key===N){if(N=p.type,N===_t){if(w.tag===7){n(g,w.sibling),h=i(w,p.props.children),h.return=g,g=h;break r}}else if(w.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===wn&&Bv(N)===w.type){n(g,w.sibling),h=i(w,p.props),h.ref=fi(g,w,p),h.return=g,g=h;break r}n(g,w);break}else e(g,w);w=w.sibling}p.type===_t?(h=rt(p.props.children,g.mode,_,p.key),h.return=g,g=h):(_=ao(p.type,p.key,p.props,null,g.mode,_),_.ref=fi(g,h,p),_.return=g,g=_)}return f(g);case yt:r:{for(w=p.key;h!==null;){if(h.key===w)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(g,h.sibling),h=i(h,p.children||[]),h.return=g,g=h;break r}else{n(g,h);break}else e(g,h);h=h.sibling}h=Cl(p,g.mode,_),h.return=g,g=h}return f(g);case wn:return w=p._init,y(g,h,w(p._payload),_)}if(Bi(p))return m(g,h,p,_);if(ai(p))return $(g,h,p,_);Ga(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,p),h.return=g,g=h):(n(g,h),h=Fl(p,g.mode,_),h.return=g,g=h),f(g)):n(g,h)}return y}var zt=Zp(!0),Jp=Zp(!1),No=Un(null),wo=null,kt=null,l1=null;function u1(){l1=kt=wo=null}function s1(r){var e=No.current;rr(No),r._currentValue=e}function js(r,e,n){for(;r!==null;){var t=r.alternate;if((r.childLanes&e)!==e?(r.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),r===n)break;r=r.return}}function St(r,e){wo=r,l1=kt=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&e&&(zr=!0),r.firstContext=null)}function oe(r){var e=r._currentValue;if(l1!==r)if(r={context:r,memoizedValue:e,next:null},kt===null){if(wo===null)throw Error(A(308));kt=r,wo.dependencies={lanes:0,firstContext:r}}else kt=kt.next=r;return e}var Zn=null;function f1(r){Zn===null?Zn=[r]:Zn.push(r)}function jp(r,e,n,t){var i=e.interleaved;return i===null?(n.next=n,f1(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ke(r,t)}function Ke(r,e){r.lanes|=e;var n=r.alternate;for(n!==null&&(n.lanes|=e),n=r,r=r.return;r!==null;)r.childLanes|=e,n=r.alternate,n!==null&&(n.childLanes|=e),n=r,r=r.return;return n.tag===3?n.stateNode:null}var In=!1;function v1(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(r,e){r=r.updateQueue,e.updateQueue===r&&(e.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function qe(r,e){return{eventTime:r,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(r,e,n){var t=r.updateQueue;if(t===null)return null;if(t=t.shared,z&2){var i=t.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e,Ke(r,n)}return i=t.interleaved,i===null?(e.next=e,f1(t)):(e.next=i.next,i.next=e),t.interleaved=e,Ke(r,n)}function x0(r,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var t=e.lanes;t&=r.pendingLanes,n|=t,e.lanes=n,Zf(r,n)}}function Wv(r,e){var n=r.updateQueue,t=r.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var f={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=f:o=o.next=f,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:t.shared,effects:t.effects},r.updateQueue=n;return}r=n.lastBaseUpdate,r===null?n.firstBaseUpdate=e:r.next=e,n.lastBaseUpdate=e}function Io(r,e,n,t){var i=r.updateQueue;In=!1;var o=i.firstBaseUpdate,f=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var c=d,s=c.next;c.next=null,f===null?o=s:f.next=s,f=c;var a=r.alternate;a!==null&&(a=a.updateQueue,d=a.lastBaseUpdate,d!==f&&(d===null?a.firstBaseUpdate=s:d.next=s,a.lastBaseUpdate=c))}if(o!==null){var l=i.baseState;f=0,a=s=c=null,d=o;do{var u=d.lane,v=d.eventTime;if((t&u)===u){a!==null&&(a=a.next={eventTime:v,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});r:{var m=r,$=d;switch(u=e,v=n,$.tag){case 1:if(m=$.payload,typeof m=="function"){l=m.call(v,l,u);break r}l=m;break r;case 3:m.flags=m.flags&-65537|128;case 0:if(m=$.payload,u=typeof m=="function"?m.call(v,l,u):m,u==null)break r;l=ur({},l,u);break r;case 2:In=!0}}d.callback!==null&&d.lane!==0&&(r.flags|=64,u=i.effects,u===null?i.effects=[d]:u.push(d))}else v={eventTime:v,lane:u,tag:d.tag,payload:d.payload,callback:d.callback,next:null},a===null?(s=a=v,c=l):a=a.next=v,f|=u;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;u=d,d=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(a===null&&(c=l),i.baseState=c,i.firstBaseUpdate=s,i.lastBaseUpdate=a,e=i.shared.interleaved,e!==null){i=e;do f|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);it|=f,r.lanes=f,r.memoizedState=l}}function Uv(r,e,n){if(r=e.effects,e.effects=null,r!==null)for(e=0;e<r.length;e++){var t=r[e],i=t.callback;if(i!==null){if(t.callback=null,t=n,typeof i!="function")throw Error(A(191,i));i.call(t)}}}var ga={},Oe=Un(ga),la=Un(ga),ua=Un(ga);function Jn(r){if(r===ga)throw Error(A(174));return r}function c1(r,e){switch(J(ua,e),J(la,r),J(Oe,ga),r=e.nodeType,r){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fs(null,"");break;default:r=r===8?e.parentNode:e,e=r.namespaceURI||null,r=r.tagName,e=Fs(e,r)}rr(Oe),J(Oe,e)}function Vt(){rr(Oe),rr(la),rr(ua)}function r5(r){Jn(ua.current);var e=Jn(Oe.current),n=Fs(e,r.type);e!==n&&(J(la,r),J(Oe,n))}function d1(r){la.current===r&&(rr(Oe),rr(la))}var or=Un(0);function Eo(r){for(var e=r;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Al=[];function p1(){for(var r=0;r<Al.length;r++)Al[r]._workInProgressVersionPrimary=null;Al.length=0}var ro=Me.ReactCurrentDispatcher,Ol=Me.ReactCurrentBatchConfig,tt=0,lr=null,mr=null,_r=null,Po=!1,Ki=!1,sa=0,r$=0;function Hr(){throw Error(A(321))}function m1(r,e){if(e===null)return!1;for(var n=0;n<e.length&&n<r.length;n++)if(!$e(r[n],e[n]))return!1;return!0}function $1(r,e,n,t,i,o){if(tt=o,lr=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ro.current=r===null||r.memoizedState===null?i$:a$,r=n(t,i),Ki){o=0;do{if(Ki=!1,sa=0,25<=o)throw Error(A(301));o+=1,_r=mr=null,e.updateQueue=null,ro.current=o$,r=n(t,i)}while(Ki)}if(ro.current=Ao,e=mr!==null&&mr.next!==null,tt=0,_r=mr=lr=null,Po=!1,e)throw Error(A(300));return r}function g1(){var r=sa!==0;return sa=0,r}function Ie(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _r===null?lr.memoizedState=_r=r:_r=_r.next=r,_r}function le(){if(mr===null){var r=lr.alternate;r=r!==null?r.memoizedState:null}else r=mr.next;var e=_r===null?lr.memoizedState:_r.next;if(e!==null)_r=e,mr=r;else{if(r===null)throw Error(A(310));mr=r,r={memoizedState:mr.memoizedState,baseState:mr.baseState,baseQueue:mr.baseQueue,queue:mr.queue,next:null},_r===null?lr.memoizedState=_r=r:_r=_r.next=r}return _r}function fa(r,e){return typeof e=="function"?e(r):e}function kl(r){var e=le(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=r;var t=mr,i=t.baseQueue,o=n.pending;if(o!==null){if(i!==null){var f=i.next;i.next=o.next,o.next=f}t.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,t=t.baseState;var d=f=null,c=null,s=o;do{var a=s.lane;if((tt&a)===a)c!==null&&(c=c.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),t=s.hasEagerState?s.eagerState:r(t,s.action);else{var l={lane:a,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};c===null?(d=c=l,f=t):c=c.next=l,lr.lanes|=a,it|=a}s=s.next}while(s!==null&&s!==o);c===null?f=t:c.next=d,$e(t,e.memoizedState)||(zr=!0),e.memoizedState=t,e.baseState=f,e.baseQueue=c,n.lastRenderedState=t}if(r=n.interleaved,r!==null){i=r;do o=i.lane,lr.lanes|=o,it|=o,i=i.next;while(i!==r)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ll(r){var e=le(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=r;var t=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do o=r(o,f.action),f=f.next;while(f!==i);$e(o,e.memoizedState)||(zr=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,t]}function e5(){}function n5(r,e){var n=lr,t=le(),i=e(),o=!$e(t.memoizedState,i);if(o&&(t.memoizedState=i,zr=!0),t=t.queue,h1(a5.bind(null,n,t,r),[r]),t.getSnapshot!==e||o||_r!==null&&_r.memoizedState.tag&1){if(n.flags|=2048,va(9,i5.bind(null,n,t,i,e),void 0,null),Nr===null)throw Error(A(349));tt&30||t5(n,e,i)}return i}function t5(r,e,n){r.flags|=16384,r={getSnapshot:e,value:n},e=lr.updateQueue,e===null?(e={lastEffect:null,stores:null},lr.updateQueue=e,e.stores=[r]):(n=e.stores,n===null?e.stores=[r]:n.push(r))}function i5(r,e,n,t){e.value=n,e.getSnapshot=t,o5(e)&&l5(r)}function a5(r,e,n){return n(function(){o5(e)&&l5(r)})}function o5(r){var e=r.getSnapshot;r=r.value;try{var n=e();return!$e(r,n)}catch{return!0}}function l5(r){var e=Ke(r,1);e!==null&&me(e,r,1,-1)}function zv(r){var e=Ie();return typeof r=="function"&&(r=r()),e.memoizedState=e.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:r},e.queue=r,r=r.dispatch=t$.bind(null,lr,r),[e.memoizedState,r]}function va(r,e,n,t){return r={tag:r,create:e,destroy:n,deps:t,next:null},e=lr.updateQueue,e===null?(e={lastEffect:null,stores:null},lr.updateQueue=e,e.lastEffect=r.next=r):(n=e.lastEffect,n===null?e.lastEffect=r.next=r:(t=n.next,n.next=r,r.next=t,e.lastEffect=r)),r}function u5(){return le().memoizedState}function eo(r,e,n,t){var i=Ie();lr.flags|=r,i.memoizedState=va(1|e,n,void 0,t===void 0?null:t)}function Uo(r,e,n,t){var i=le();t=t===void 0?null:t;var o=void 0;if(mr!==null){var f=mr.memoizedState;if(o=f.destroy,t!==null&&m1(t,f.deps)){i.memoizedState=va(e,n,o,t);return}}lr.flags|=r,i.memoizedState=va(1|e,n,o,t)}function Vv(r,e){return eo(8390656,8,r,e)}function h1(r,e){return Uo(2048,8,r,e)}function s5(r,e){return Uo(4,2,r,e)}function f5(r,e){return Uo(4,4,r,e)}function v5(r,e){if(typeof e=="function")return r=r(),e(r),function(){e(null)};if(e!=null)return r=r(),e.current=r,function(){e.current=null}}function c5(r,e,n){return n=n!=null?n.concat([r]):null,Uo(4,4,v5.bind(null,e,r),n)}function y1(){}function d5(r,e){var n=le();e=e===void 0?null:e;var t=n.memoizedState;return t!==null&&e!==null&&m1(e,t[1])?t[0]:(n.memoizedState=[r,e],r)}function p5(r,e){var n=le();e=e===void 0?null:e;var t=n.memoizedState;return t!==null&&e!==null&&m1(e,t[1])?t[0]:(r=r(),n.memoizedState=[r,e],r)}function m5(r,e,n){return tt&21?($e(n,e)||(n=_p(),lr.lanes|=n,it|=n,r.baseState=!0),e):(r.baseState&&(r.baseState=!1,zr=!0),r.memoizedState=n)}function e$(r,e){var n=K;K=n!==0&&4>n?n:4,r(!0);var t=Ol.transition;Ol.transition={};try{r(!1),e()}finally{K=n,Ol.transition=t}}function $5(){return le().memoizedState}function n$(r,e,n){var t=Sn(r);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},g5(r))h5(e,n);else if(n=jp(r,e,n,t),n!==null){var i=Sr();me(n,r,t,i),y5(n,e,t)}}function t$(r,e,n){var t=Sn(r),i={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(g5(r))h5(e,i);else{var o=r.alternate;if(r.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var f=e.lastRenderedState,d=o(f,n);if(i.hasEagerState=!0,i.eagerState=d,$e(d,f)){var c=e.interleaved;c===null?(i.next=i,f1(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=jp(r,e,i,t),n!==null&&(i=Sr(),me(n,r,t,i),y5(n,e,t))}}function g5(r){var e=r.alternate;return r===lr||e!==null&&e===lr}function h5(r,e){Ki=Po=!0;var n=r.pending;n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e}function y5(r,e,n){if(n&4194240){var t=e.lanes;t&=r.pendingLanes,n|=t,e.lanes=n,Zf(r,n)}}var Ao={readContext:oe,useCallback:Hr,useContext:Hr,useEffect:Hr,useImperativeHandle:Hr,useInsertionEffect:Hr,useLayoutEffect:Hr,useMemo:Hr,useReducer:Hr,useRef:Hr,useState:Hr,useDebugValue:Hr,useDeferredValue:Hr,useTransition:Hr,useMutableSource:Hr,useSyncExternalStore:Hr,useId:Hr,unstable_isNewReconciler:!1},i$={readContext:oe,useCallback:function(r,e){return Ie().memoizedState=[r,e===void 0?null:e],r},useContext:oe,useEffect:Vv,useImperativeHandle:function(r,e,n){return n=n!=null?n.concat([r]):null,eo(4194308,4,v5.bind(null,e,r),n)},useLayoutEffect:function(r,e){return eo(4194308,4,r,e)},useInsertionEffect:function(r,e){return eo(4,2,r,e)},useMemo:function(r,e){var n=Ie();return e=e===void 0?null:e,r=r(),n.memoizedState=[r,e],r},useReducer:function(r,e,n){var t=Ie();return e=n!==void 0?n(e):e,t.memoizedState=t.baseState=e,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:e},t.queue=r,r=r.dispatch=n$.bind(null,lr,r),[t.memoizedState,r]},useRef:function(r){var e=Ie();return r={current:r},e.memoizedState=r},useState:zv,useDebugValue:y1,useDeferredValue:function(r){return Ie().memoizedState=r},useTransition:function(){var r=zv(!1),e=r[0];return r=e$.bind(null,r[1]),Ie().memoizedState=r,[e,r]},useMutableSource:function(){},useSyncExternalStore:function(r,e,n){var t=lr,i=Ie();if(tr){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Nr===null)throw Error(A(349));tt&30||t5(t,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Vv(a5.bind(null,t,o,r),[r]),t.flags|=2048,va(9,i5.bind(null,t,o,n,e),void 0,null),n},useId:function(){var r=Ie(),e=Nr.identifierPrefix;if(tr){var n=Ve,t=ze;n=(t&~(1<<32-pe(t)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=r$++,e=":"+e+"r"+n.toString(32)+":";return r.memoizedState=e},unstable_isNewReconciler:!1},a$={readContext:oe,useCallback:d5,useContext:oe,useEffect:h1,useImperativeHandle:c5,useInsertionEffect:s5,useLayoutEffect:f5,useMemo:p5,useReducer:kl,useRef:u5,useState:function(){return kl(fa)},useDebugValue:y1,useDeferredValue:function(r){var e=le();return m5(e,mr.memoizedState,r)},useTransition:function(){var r=kl(fa)[0],e=le().memoizedState;return[r,e]},useMutableSource:e5,useSyncExternalStore:n5,useId:$5,unstable_isNewReconciler:!1},o$={readContext:oe,useCallback:d5,useContext:oe,useEffect:h1,useImperativeHandle:c5,useInsertionEffect:s5,useLayoutEffect:f5,useMemo:p5,useReducer:Ll,useRef:u5,useState:function(){return Ll(fa)},useDebugValue:y1,useDeferredValue:function(r){var e=le();return mr===null?e.memoizedState=r:m5(e,mr.memoizedState,r)},useTransition:function(){var r=Ll(fa)[0],e=le().memoizedState;return[r,e]},useMutableSource:e5,useSyncExternalStore:n5,useId:$5,unstable_isNewReconciler:!1};function ve(r,e){if(r&&r.defaultProps){e=ur({},e),r=r.defaultProps;for(var n in r)e[n]===void 0&&(e[n]=r[n]);return e}return e}function xs(r,e,n,t){e=r.memoizedState,n=n(t,e),n=n==null?e:ur({},e,n),r.memoizedState=n,r.lanes===0&&(r.updateQueue.baseState=n)}var zo={isMounted:function(r){return(r=r._reactInternals)?lt(r)===r:!1},enqueueSetState:function(r,e,n){r=r._reactInternals;var t=Sr(),i=Sn(r),o=qe(t,i);o.payload=e,n!=null&&(o.callback=n),e=Cn(r,o,i),e!==null&&(me(e,r,i,t),x0(e,r,i))},enqueueReplaceState:function(r,e,n){r=r._reactInternals;var t=Sr(),i=Sn(r),o=qe(t,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Cn(r,o,i),e!==null&&(me(e,r,i,t),x0(e,r,i))},enqueueForceUpdate:function(r,e){r=r._reactInternals;var n=Sr(),t=Sn(r),i=qe(n,t);i.tag=2,e!=null&&(i.callback=e),e=Cn(r,i,t),e!==null&&(me(e,r,t,n),x0(e,r,t))}};function qv(r,e,n,t,i,o,f){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(t,o,f):e.prototype&&e.prototype.isPureReactComponent?!ta(n,t)||!ta(i,o):!0}function _5(r,e,n){var t=!1,i=Bn,o=e.contextType;return typeof o=="object"&&o!==null?o=oe(o):(i=qr(e)?et:Cr.current,t=e.contextTypes,o=(t=t!=null)?Wt(r,i):Bn),e=new e(n,o),r.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zo,r.stateNode=e,e._reactInternals=r,t&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=o),e}function Xv(r,e,n,t){r=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,t),e.state!==r&&zo.enqueueReplaceState(e,e.state,null)}function rf(r,e,n,t){var i=r.stateNode;i.props=n,i.state=r.memoizedState,i.refs={},v1(r);var o=e.contextType;typeof o=="object"&&o!==null?i.context=oe(o):(o=qr(e)?et:Cr.current,i.context=Wt(r,o)),i.state=r.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(xs(r,e,o,n),i.state=r.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zo.enqueueReplaceState(i,i.state,null),Io(r,n,i,t),i.state=r.memoizedState),typeof i.componentDidMount=="function"&&(r.flags|=4194308)}function qt(r,e){try{var n="",t=e;do n+=R7(t),t=t.return;while(t);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:r,source:e,stack:i,digest:null}}function Hl(r,e,n){return{value:r,source:null,stack:n??null,digest:e??null}}function ef(r,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l$=typeof WeakMap=="function"?WeakMap:Map;function N5(r,e,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var t=e.value;return n.callback=function(){ko||(ko=!0,cf=t),ef(r,e)},n}function w5(r,e,n){n=qe(-1,n),n.tag=3;var t=r.type.getDerivedStateFromError;if(typeof t=="function"){var i=e.value;n.payload=function(){return t(i)},n.callback=function(){ef(r,e)}}var o=r.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ef(r,e),typeof t!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var f=e.stack;this.componentDidCatch(e.value,{componentStack:f!==null?f:""})}),n}function Qv(r,e,n){var t=r.pingCache;if(t===null){t=r.pingCache=new l$;var i=new Set;t.set(e,i)}else i=t.get(e),i===void 0&&(i=new Set,t.set(e,i));i.has(n)||(i.add(n),r=N$.bind(null,r,e,n),e.then(r,r))}function Kv(r){do{var e;if((e=r.tag===13)&&(e=r.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return r;r=r.return}while(r!==null);return null}function bv(r,e,n,t,i){return r.mode&1?(r.flags|=65536,r.lanes=i,r):(r===e?r.flags|=65536:(r.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qe(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),r)}var u$=Me.ReactCurrentOwner,zr=!1;function Rr(r,e,n,t){e.child=r===null?Jp(e,null,n,t):zt(e,r.child,n,t)}function Mv(r,e,n,t,i){n=n.render;var o=e.ref;return St(e,i),t=$1(r,e,n,t,o,i),n=g1(),r!==null&&!zr?(e.updateQueue=r.updateQueue,e.flags&=-2053,r.lanes&=~i,be(r,e,i)):(tr&&n&&i1(e),e.flags|=1,Rr(r,e,t,i),e.child)}function Yv(r,e,n,t,i){if(r===null){var o=n.type;return typeof o=="function"&&!O1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,I5(r,e,o,t,i)):(r=ao(n.type,null,t,e,e.mode,i),r.ref=e.ref,r.return=e,e.child=r)}if(o=r.child,!(r.lanes&i)){var f=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(f,t)&&r.ref===e.ref)return be(r,e,i)}return e.flags|=1,r=Gn(o,t),r.ref=e.ref,r.return=e,e.child=r}function I5(r,e,n,t,i){if(r!==null){var o=r.memoizedProps;if(ta(o,t)&&r.ref===e.ref)if(zr=!1,e.pendingProps=t=o,(r.lanes&i)!==0)r.flags&131072&&(zr=!0);else return e.lanes=r.lanes,be(r,e,i)}return nf(r,e,n,t,i)}function E5(r,e,n){var t=e.pendingProps,i=t.children,o=r!==null?r.memoizedState:null;if(t.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Ht,br),br|=n;else{if(!(n&1073741824))return r=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:r,cachePool:null,transitions:null},e.updateQueue=null,J(Ht,br),br|=r,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:n,J(Ht,br),br|=t}else o!==null?(t=o.baseLanes|n,e.memoizedState=null):t=n,J(Ht,br),br|=t;return Rr(r,e,i,n),e.child}function P5(r,e){var n=e.ref;(r===null&&n!==null||r!==null&&r.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nf(r,e,n,t,i){var o=qr(n)?et:Cr.current;return o=Wt(e,o),St(e,i),n=$1(r,e,n,t,o,i),t=g1(),r!==null&&!zr?(e.updateQueue=r.updateQueue,e.flags&=-2053,r.lanes&=~i,be(r,e,i)):(tr&&t&&i1(e),e.flags|=1,Rr(r,e,n,i),e.child)}function Zv(r,e,n,t,i){if(qr(n)){var o=!0;ho(e)}else o=!1;if(St(e,i),e.stateNode===null)no(r,e),_5(e,n,t),rf(e,n,t,i),t=!0;else if(r===null){var f=e.stateNode,d=e.memoizedProps;f.props=d;var c=f.context,s=n.contextType;typeof s=="object"&&s!==null?s=oe(s):(s=qr(n)?et:Cr.current,s=Wt(e,s));var a=n.getDerivedStateFromProps,l=typeof a=="function"||typeof f.getSnapshotBeforeUpdate=="function";l||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==t||c!==s)&&Xv(e,f,t,s),In=!1;var u=e.memoizedState;f.state=u,Io(e,t,f,i),c=e.memoizedState,d!==t||u!==c||Vr.current||In?(typeof a=="function"&&(xs(e,n,a,t),c=e.memoizedState),(d=In||qv(e,n,d,t,u,c,s))?(l||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(e.flags|=4194308)):(typeof f.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=c),f.props=t,f.state=c,f.context=s,t=d):(typeof f.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{f=e.stateNode,xp(r,e),d=e.memoizedProps,s=e.type===e.elementType?d:ve(e.type,d),f.props=s,l=e.pendingProps,u=f.context,c=n.contextType,typeof c=="object"&&c!==null?c=oe(c):(c=qr(n)?et:Cr.current,c=Wt(e,c));var v=n.getDerivedStateFromProps;(a=typeof v=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==l||u!==c)&&Xv(e,f,t,c),In=!1,u=e.memoizedState,f.state=u,Io(e,t,f,i);var m=e.memoizedState;d!==l||u!==m||Vr.current||In?(typeof v=="function"&&(xs(e,n,v,t),m=e.memoizedState),(s=In||qv(e,n,s,t,u,m,c)||!1)?(a||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(t,m,c),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(t,m,c)),typeof f.componentDidUpdate=="function"&&(e.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===r.memoizedProps&&u===r.memoizedState||(e.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===r.memoizedProps&&u===r.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=m),f.props=t,f.state=m,f.context=c,t=s):(typeof f.componentDidUpdate!="function"||d===r.memoizedProps&&u===r.memoizedState||(e.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===r.memoizedProps&&u===r.memoizedState||(e.flags|=1024),t=!1)}return tf(r,e,n,t,o,i)}function tf(r,e,n,t,i,o){P5(r,e);var f=(e.flags&128)!==0;if(!t&&!f)return i&&Sv(e,n,!1),be(r,e,o);t=e.stateNode,u$.current=e;var d=f&&typeof n.getDerivedStateFromError!="function"?null:t.render();return e.flags|=1,r!==null&&f?(e.child=zt(e,r.child,null,o),e.child=zt(e,null,d,o)):Rr(r,e,d,o),e.memoizedState=t.state,i&&Sv(e,n,!0),e.child}function A5(r){var e=r.stateNode;e.pendingContext?Rv(r,e.pendingContext,e.pendingContext!==e.context):e.context&&Rv(r,e.context,!1),c1(r,e.containerInfo)}function Jv(r,e,n,t,i){return Ut(),o1(i),e.flags|=256,Rr(r,e,n,t),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function of(r){return{baseLanes:r,cachePool:null,transitions:null}}function O5(r,e,n){var t=e.pendingProps,i=or.current,o=!1,f=(e.flags&128)!==0,d;if((d=f)||(d=r!==null&&r.memoizedState===null?!1:(i&2)!==0),d?(o=!0,e.flags&=-129):(r===null||r.memoizedState!==null)&&(i|=1),J(or,i&1),r===null)return Js(e),r=e.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(e.mode&1?r.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(f=t.children,r=t.fallback,o?(t=e.mode,o=e.child,f={mode:"hidden",children:f},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=f):o=Xo(f,t,0,null),r=rt(r,t,n,null),o.return=e,r.return=e,o.sibling=r,e.child=o,e.child.memoizedState=of(n),e.memoizedState=af,r):_1(e,f));if(i=r.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return s$(r,e,f,t,d,i,n);if(o){o=t.fallback,f=e.mode,i=r.child,d=i.sibling;var c={mode:"hidden",children:t.children};return!(f&1)&&e.child!==i?(t=e.child,t.childLanes=0,t.pendingProps=c,e.deletions=null):(t=Gn(i,c),t.subtreeFlags=i.subtreeFlags&14680064),d!==null?o=Gn(d,o):(o=rt(o,f,n,null),o.flags|=2),o.return=e,t.return=e,t.sibling=o,e.child=t,t=o,o=e.child,f=r.child.memoizedState,f=f===null?of(n):{baseLanes:f.baseLanes|n,cachePool:null,transitions:f.transitions},o.memoizedState=f,o.childLanes=r.childLanes&~n,e.memoizedState=af,t}return o=r.child,r=o.sibling,t=Gn(o,{mode:"visible",children:t.children}),!(e.mode&1)&&(t.lanes=n),t.return=e,t.sibling=null,r!==null&&(n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)),e.child=t,e.memoizedState=null,t}function _1(r,e){return e=Xo({mode:"visible",children:e},r.mode,0,null),e.return=r,r.child=e}function Da(r,e,n,t){return t!==null&&o1(t),zt(e,r.child,null,n),r=_1(e,e.pendingProps.children),r.flags|=2,e.memoizedState=null,r}function s$(r,e,n,t,i,o,f){if(n)return e.flags&256?(e.flags&=-257,t=Hl(Error(A(422))),Da(r,e,f,t)):e.memoizedState!==null?(e.child=r.child,e.flags|=128,null):(o=t.fallback,i=e.mode,t=Xo({mode:"visible",children:t.children},i,0,null),o=rt(o,i,f,null),o.flags|=2,t.return=e,o.return=e,t.sibling=o,e.child=t,e.mode&1&&zt(e,r.child,null,f),e.child.memoizedState=of(f),e.memoizedState=af,o);if(!(e.mode&1))return Da(r,e,f,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var d=t.dgst;return t=d,o=Error(A(419)),t=Hl(o,t,void 0),Da(r,e,f,t)}if(d=(f&r.childLanes)!==0,zr||d){if(t=Nr,t!==null){switch(f&-f){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(t.suspendedLanes|f)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(r,i),me(t,r,i,-1))}return A1(),t=Hl(Error(A(421))),Da(r,e,f,t)}return i.data==="$?"?(e.flags|=128,e.child=r.child,e=w$.bind(null,r),i._reactRetry=e,null):(r=o.treeContext,Mr=Fn(i.nextSibling),Yr=e,tr=!0,de=null,r!==null&&(ne[te++]=ze,ne[te++]=Ve,ne[te++]=nt,ze=r.id,Ve=r.overflow,nt=e),e=_1(e,t.children),e.flags|=4096,e)}function jv(r,e,n){r.lanes|=e;var t=r.alternate;t!==null&&(t.lanes|=e),js(r.return,e,n)}function Tl(r,e,n,t,i){var o=r.memoizedState;o===null?r.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=n,o.tailMode=i)}function k5(r,e,n){var t=e.pendingProps,i=t.revealOrder,o=t.tail;if(Rr(r,e,t.children,n),t=or.current,t&2)t=t&1|2,e.flags|=128;else{if(r!==null&&r.flags&128)r:for(r=e.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&jv(r,n,e);else if(r.tag===19)jv(r,n,e);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break r;for(;r.sibling===null;){if(r.return===null||r.return===e)break r;r=r.return}r.sibling.return=r.return,r=r.sibling}t&=1}if(J(or,t),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)r=n.alternate,r!==null&&Eo(r)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tl(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(r=i.alternate,r!==null&&Eo(r)===null){e.child=i;break}r=i.sibling,i.sibling=n,n=i,i=r}Tl(e,!0,n,null,o);break;case"together":Tl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function no(r,e){!(e.mode&1)&&r!==null&&(r.alternate=null,e.alternate=null,e.flags|=2)}function be(r,e,n){if(r!==null&&(e.dependencies=r.dependencies),it|=e.lanes,!(n&e.childLanes))return null;if(r!==null&&e.child!==r.child)throw Error(A(153));if(e.child!==null){for(r=e.child,n=Gn(r,r.pendingProps),e.child=n,n.return=e;r.sibling!==null;)r=r.sibling,n=n.sibling=Gn(r,r.pendingProps),n.return=e;n.sibling=null}return e.child}function f$(r,e,n){switch(e.tag){case 3:A5(e),Ut();break;case 5:r5(e);break;case 1:qr(e.type)&&ho(e);break;case 4:c1(e,e.stateNode.containerInfo);break;case 10:var t=e.type._context,i=e.memoizedProps.value;J(No,t._currentValue),t._currentValue=i;break;case 13:if(t=e.memoizedState,t!==null)return t.dehydrated!==null?(J(or,or.current&1),e.flags|=128,null):n&e.child.childLanes?O5(r,e,n):(J(or,or.current&1),r=be(r,e,n),r!==null?r.sibling:null);J(or,or.current&1);break;case 19:if(t=(n&e.childLanes)!==0,r.flags&128){if(t)return k5(r,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(or,or.current),t)break;return null;case 22:case 23:return e.lanes=0,E5(r,e,n)}return be(r,e,n)}var L5,lf,H5,T5;L5=function(r,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)r.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lf=function(){};H5=function(r,e,n,t){var i=r.memoizedProps;if(i!==t){r=e.stateNode,Jn(Oe.current);var o=null;switch(n){case"input":i=ks(r,i),t=ks(r,t),o=[];break;case"select":i=ur({},i,{value:void 0}),t=ur({},t,{value:void 0}),o=[];break;case"textarea":i=Ts(r,i),t=Ts(r,t),o=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(r.onclick=$o)}Cs(n,t);var f;n=null;for(s in i)if(!t.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var d=i[s];for(f in d)d.hasOwnProperty(f)&&(n||(n={}),n[f]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zi.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in t){var c=t[s];if(d=i!=null?i[s]:void 0,t.hasOwnProperty(s)&&c!==d&&(c!=null||d!=null))if(s==="style")if(d){for(f in d)!d.hasOwnProperty(f)||c&&c.hasOwnProperty(f)||(n||(n={}),n[f]="");for(f in c)c.hasOwnProperty(f)&&d[f]!==c[f]&&(n||(n={}),n[f]=c[f])}else n||(o||(o=[]),o.push(s,n)),n=c;else s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,d=d?d.__html:void 0,c!=null&&d!==c&&(o=o||[]).push(s,c)):s==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(s,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(s)?(c!=null&&s==="onScroll"&&x("scroll",r),o||d===c||(o=[])):(o=o||[]).push(s,c))}n&&(o=o||[]).push("style",n);var s=o;(e.updateQueue=s)&&(e.flags|=4)}};T5=function(r,e,n,t){n!==t&&(e.flags|=4)};function vi(r,e){if(!tr)switch(r.tailMode){case"hidden":e=r.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?r.tail=null:n.sibling=null;break;case"collapsed":n=r.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e||r.tail===null?r.tail=null:r.tail.sibling=null:t.sibling=null}}function Tr(r){var e=r.alternate!==null&&r.alternate.child===r.child,n=0,t=0;if(e)for(var i=r.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=r,i=i.sibling;else for(i=r.child;i!==null;)n|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=r,i=i.sibling;return r.subtreeFlags|=t,r.childLanes=n,e}function v$(r,e,n){var t=e.pendingProps;switch(a1(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tr(e),null;case 1:return qr(e.type)&&go(),Tr(e),null;case 3:return t=e.stateNode,Vt(),rr(Vr),rr(Cr),p1(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(r===null||r.child===null)&&(Sa(e)?e.flags|=4:r===null||r.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,de!==null&&(mf(de),de=null))),lf(r,e),Tr(e),null;case 5:d1(e);var i=Jn(ua.current);if(n=e.type,r!==null&&e.stateNode!=null)H5(r,e,n,t,i),r.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!t){if(e.stateNode===null)throw Error(A(166));return Tr(e),null}if(r=Jn(Oe.current),Sa(e)){t=e.stateNode,n=e.type;var o=e.memoizedProps;switch(t[Ee]=e,t[oa]=o,r=(e.mode&1)!==0,n){case"dialog":x("cancel",t),x("close",t);break;case"iframe":case"object":case"embed":x("load",t);break;case"video":case"audio":for(i=0;i<Ui.length;i++)x(Ui[i],t);break;case"source":x("error",t);break;case"img":case"image":case"link":x("error",t),x("load",t);break;case"details":x("toggle",t);break;case"input":lv(t,o),x("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},x("invalid",t);break;case"textarea":sv(t,o),x("invalid",t)}Cs(n,o),i=null;for(var f in o)if(o.hasOwnProperty(f)){var d=o[f];f==="children"?typeof d=="string"?t.textContent!==d&&(o.suppressHydrationWarning!==!0&&Ra(t.textContent,d,r),i=["children",d]):typeof d=="number"&&t.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Ra(t.textContent,d,r),i=["children",""+d]):Zi.hasOwnProperty(f)&&d!=null&&f==="onScroll"&&x("scroll",t)}switch(n){case"input":Aa(t),uv(t,o,!0);break;case"textarea":Aa(t),fv(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=$o)}t=i,e.updateQueue=t,t!==null&&(e.flags|=4)}else{f=i.nodeType===9?i:i.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ap(n)),r==="http://www.w3.org/1999/xhtml"?n==="script"?(r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof t.is=="string"?r=f.createElement(n,{is:t.is}):(r=f.createElement(n),n==="select"&&(f=r,t.multiple?f.multiple=!0:t.size&&(f.size=t.size))):r=f.createElementNS(r,n),r[Ee]=e,r[oa]=t,L5(r,e,!1,!1),e.stateNode=r;r:{switch(f=Rs(n,t),n){case"dialog":x("cancel",r),x("close",r),i=t;break;case"iframe":case"object":case"embed":x("load",r),i=t;break;case"video":case"audio":for(i=0;i<Ui.length;i++)x(Ui[i],r);i=t;break;case"source":x("error",r),i=t;break;case"img":case"image":case"link":x("error",r),x("load",r),i=t;break;case"details":x("toggle",r),i=t;break;case"input":lv(r,t),i=ks(r,t),x("invalid",r);break;case"option":i=t;break;case"select":r._wrapperState={wasMultiple:!!t.multiple},i=ur({},t,{value:void 0}),x("invalid",r);break;case"textarea":sv(r,t),i=Ts(r,t),x("invalid",r);break;default:i=t}Cs(n,i),d=i;for(o in d)if(d.hasOwnProperty(o)){var c=d[o];o==="style"?up(r,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&op(r,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ji(r,c):typeof c=="number"&&Ji(r,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&x("scroll",r):c!=null&&Xf(r,o,c,f))}switch(n){case"input":Aa(r),uv(r,t,!1);break;case"textarea":Aa(r),fv(r);break;case"option":t.value!=null&&r.setAttribute("value",""+Dn(t.value));break;case"select":r.multiple=!!t.multiple,o=t.value,o!=null?Tt(r,!!t.multiple,o,!1):t.defaultValue!=null&&Tt(r,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(r.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break r;case"img":t=!0;break r;default:t=!1}}t&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tr(e),null;case 6:if(r&&e.stateNode!=null)T5(r,e,r.memoizedProps,t);else{if(typeof t!="string"&&e.stateNode===null)throw Error(A(166));if(n=Jn(ua.current),Jn(Oe.current),Sa(e)){if(t=e.stateNode,n=e.memoizedProps,t[Ee]=e,(o=t.nodeValue!==n)&&(r=Yr,r!==null))switch(r.tag){case 3:Ra(t.nodeValue,n,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ra(t.nodeValue,n,(r.mode&1)!==0)}o&&(e.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[Ee]=e,e.stateNode=t}return Tr(e),null;case 13:if(rr(or),t=e.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(tr&&Mr!==null&&e.mode&1&&!(e.flags&128))Yp(),Ut(),e.flags|=98560,o=!1;else if(o=Sa(e),t!==null&&t.dehydrated!==null){if(r===null){if(!o)throw Error(A(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Ee]=e}else Ut(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tr(e),o=!1}else de!==null&&(mf(de),de=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(t=t!==null,t!==(r!==null&&r.memoizedState!==null)&&t&&(e.child.flags|=8192,e.mode&1&&(r===null||or.current&1?$r===0&&($r=3):A1())),e.updateQueue!==null&&(e.flags|=4),Tr(e),null);case 4:return Vt(),lf(r,e),r===null&&ia(e.stateNode.containerInfo),Tr(e),null;case 10:return s1(e.type._context),Tr(e),null;case 17:return qr(e.type)&&go(),Tr(e),null;case 19:if(rr(or),o=e.memoizedState,o===null)return Tr(e),null;if(t=(e.flags&128)!==0,f=o.rendering,f===null)if(t)vi(o,!1);else{if($r!==0||r!==null&&r.flags&128)for(r=e.child;r!==null;){if(f=Eo(r),f!==null){for(e.flags|=128,vi(o,!1),t=f.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),e.subtreeFlags=0,t=n,n=e.child;n!==null;)o=n,r=t,o.flags&=14680066,f=o.alternate,f===null?(o.childLanes=0,o.lanes=r,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=f.childLanes,o.lanes=f.lanes,o.child=f.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=f.memoizedProps,o.memoizedState=f.memoizedState,o.updateQueue=f.updateQueue,o.type=f.type,r=f.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n=n.sibling;return J(or,or.current&1|2),e.child}r=r.sibling}o.tail!==null&&cr()>Xt&&(e.flags|=128,t=!0,vi(o,!1),e.lanes=4194304)}else{if(!t)if(r=Eo(f),r!==null){if(e.flags|=128,t=!0,n=r.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!tr)return Tr(e),null}else 2*cr()-o.renderingStartTime>Xt&&n!==1073741824&&(e.flags|=128,t=!0,vi(o,!1),e.lanes=4194304);o.isBackwards?(f.sibling=e.child,e.child=f):(n=o.last,n!==null?n.sibling=f:e.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=cr(),e.sibling=null,n=or.current,J(or,t?n&1|2:n&1),e):(Tr(e),null);case 22:case 23:return P1(),t=e.memoizedState!==null,r!==null&&r.memoizedState!==null!==t&&(e.flags|=8192),t&&e.mode&1?br&1073741824&&(Tr(e),e.subtreeFlags&6&&(e.flags|=8192)):Tr(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function c$(r,e){switch(a1(e),e.tag){case 1:return qr(e.type)&&go(),r=e.flags,r&65536?(e.flags=r&-65537|128,e):null;case 3:return Vt(),rr(Vr),rr(Cr),p1(),r=e.flags,r&65536&&!(r&128)?(e.flags=r&-65537|128,e):null;case 5:return d1(e),null;case 13:if(rr(or),r=e.memoizedState,r!==null&&r.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Ut()}return r=e.flags,r&65536?(e.flags=r&-65537|128,e):null;case 19:return rr(or),null;case 4:return Vt(),null;case 10:return s1(e.type._context),null;case 22:case 23:return P1(),null;case 24:return null;default:return null}}var Ba=!1,Fr=!1,d$=typeof WeakSet=="function"?WeakSet:Set,T=null;function Lt(r,e){var n=r.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){vr(r,e,t)}else n.current=null}function uf(r,e,n){try{n()}catch(t){vr(r,e,t)}}var xv=!1;function p$(r,e){if(Xs=co,r=Gp(),t1(r)){if("selectionStart"in r)var n={start:r.selectionStart,end:r.selectionEnd};else r:{n=(n=r.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var i=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break r}var f=0,d=-1,c=-1,s=0,a=0,l=r,u=null;e:for(;;){for(var v;l!==n||i!==0&&l.nodeType!==3||(d=f+i),l!==o||t!==0&&l.nodeType!==3||(c=f+t),l.nodeType===3&&(f+=l.nodeValue.length),(v=l.firstChild)!==null;)u=l,l=v;for(;;){if(l===r)break e;if(u===n&&++s===i&&(d=f),u===o&&++a===t&&(c=f),(v=l.nextSibling)!==null)break;l=u,u=l.parentNode}l=v}n=d===-1||c===-1?null:{start:d,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qs={focusedElem:r,selectionRange:n},co=!1,T=e;T!==null;)if(e=T,r=e.child,(e.subtreeFlags&1028)!==0&&r!==null)r.return=e,T=r;else for(;T!==null;){e=T;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var $=m.memoizedProps,y=m.memoizedState,g=e.stateNode,h=g.getSnapshotBeforeUpdate(e.elementType===e.type?$:ve(e.type,$),y);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){vr(e,e.return,_)}if(r=e.sibling,r!==null){r.return=e.return,T=r;break}T=e.return}return m=xv,xv=!1,m}function bi(r,e,n){var t=e.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&r)===r){var o=i.destroy;i.destroy=void 0,o!==void 0&&uf(e,n,o)}i=i.next}while(i!==t)}}function Vo(r,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&r)===r){var t=n.create;n.destroy=t()}n=n.next}while(n!==e)}}function sf(r){var e=r.ref;if(e!==null){var n=r.stateNode;switch(r.tag){case 5:r=n;break;default:r=n}typeof e=="function"?e(r):e.current=r}}function F5(r){var e=r.alternate;e!==null&&(r.alternate=null,F5(e)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(e=r.stateNode,e!==null&&(delete e[Ee],delete e[oa],delete e[Ms],delete e[Z8],delete e[J8])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function C5(r){return r.tag===5||r.tag===3||r.tag===4}function rc(r){r:for(;;){for(;r.sibling===null;){if(r.return===null||C5(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue r;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ff(r,e,n){var t=r.tag;if(t===5||t===6)r=r.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(r,e):n.insertBefore(r,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(r,n)):(e=n,e.appendChild(r)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$o));else if(t!==4&&(r=r.child,r!==null))for(ff(r,e,n),r=r.sibling;r!==null;)ff(r,e,n),r=r.sibling}function vf(r,e,n){var t=r.tag;if(t===5||t===6)r=r.stateNode,e?n.insertBefore(r,e):n.appendChild(r);else if(t!==4&&(r=r.child,r!==null))for(vf(r,e,n),r=r.sibling;r!==null;)vf(r,e,n),r=r.sibling}var Er=null,ce=!1;function je(r,e,n){for(n=n.child;n!==null;)R5(r,e,n),n=n.sibling}function R5(r,e,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 5:Fr||Lt(n,e);case 6:var t=Er,i=ce;Er=null,je(r,e,n),Er=t,ce=i,Er!==null&&(ce?(r=Er,n=n.stateNode,r.nodeType===8?r.parentNode.removeChild(n):r.removeChild(n)):Er.removeChild(n.stateNode));break;case 18:Er!==null&&(ce?(r=Er,n=n.stateNode,r.nodeType===8?El(r.parentNode,n):r.nodeType===1&&El(r,n),ea(r)):El(Er,n.stateNode));break;case 4:t=Er,i=ce,Er=n.stateNode.containerInfo,ce=!0,je(r,e,n),Er=t,ce=i;break;case 0:case 11:case 14:case 15:if(!Fr&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var o=i,f=o.destroy;o=o.tag,f!==void 0&&(o&2||o&4)&&uf(n,e,f),i=i.next}while(i!==t)}je(r,e,n);break;case 1:if(!Fr&&(Lt(n,e),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(d){vr(n,e,d)}je(r,e,n);break;case 21:je(r,e,n);break;case 22:n.mode&1?(Fr=(t=Fr)||n.memoizedState!==null,je(r,e,n),Fr=t):je(r,e,n);break;default:je(r,e,n)}}function ec(r){var e=r.updateQueue;if(e!==null){r.updateQueue=null;var n=r.stateNode;n===null&&(n=r.stateNode=new d$),e.forEach(function(t){var i=I$.bind(null,r,t);n.has(t)||(n.add(t),t.then(i,i))})}}function ue(r,e){var n=e.deletions;if(n!==null)for(var t=0;t<n.length;t++){var i=n[t];try{var o=r,f=e,d=f;r:for(;d!==null;){switch(d.tag){case 5:Er=d.stateNode,ce=!1;break r;case 3:Er=d.stateNode.containerInfo,ce=!0;break r;case 4:Er=d.stateNode.containerInfo,ce=!0;break r}d=d.return}if(Er===null)throw Error(A(160));R5(o,f,i),Er=null,ce=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(s){vr(i,e,s)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S5(e,r),e=e.sibling}function S5(r,e){var n=r.alternate,t=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(ue(e,r),he(r),t&4){try{bi(3,r,r.return),Vo(3,r)}catch($){vr(r,r.return,$)}try{bi(5,r,r.return)}catch($){vr(r,r.return,$)}}break;case 1:ue(e,r),he(r),t&512&&n!==null&&Lt(n,n.return);break;case 5:if(ue(e,r),he(r),t&512&&n!==null&&Lt(n,n.return),r.flags&32){var i=r.stateNode;try{Ji(i,"")}catch($){vr(r,r.return,$)}}if(t&4&&(i=r.stateNode,i!=null)){var o=r.memoizedProps,f=n!==null?n.memoizedProps:o,d=r.type,c=r.updateQueue;if(r.updateQueue=null,c!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&tp(i,o),Rs(d,f);var s=Rs(d,o);for(f=0;f<c.length;f+=2){var a=c[f],l=c[f+1];a==="style"?up(i,l):a==="dangerouslySetInnerHTML"?op(i,l):a==="children"?Ji(i,l):Xf(i,a,l,s)}switch(d){case"input":Ls(i,o);break;case"textarea":ip(i,o);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Tt(i,!!o.multiple,v,!1):u!==!!o.multiple&&(o.defaultValue!=null?Tt(i,!!o.multiple,o.defaultValue,!0):Tt(i,!!o.multiple,o.multiple?[]:"",!1))}i[oa]=o}catch($){vr(r,r.return,$)}}break;case 6:if(ue(e,r),he(r),t&4){if(r.stateNode===null)throw Error(A(162));i=r.stateNode,o=r.memoizedProps;try{i.nodeValue=o}catch($){vr(r,r.return,$)}}break;case 3:if(ue(e,r),he(r),t&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch($){vr(r,r.return,$)}break;case 4:ue(e,r),he(r);break;case 13:ue(e,r),he(r),i=r.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(I1=cr())),t&4&&ec(r);break;case 22:if(a=n!==null&&n.memoizedState!==null,r.mode&1?(Fr=(s=Fr)||a,ue(e,r),Fr=s):ue(e,r),he(r),t&8192){if(s=r.memoizedState!==null,(r.stateNode.isHidden=s)&&!a&&r.mode&1)for(T=r,a=r.child;a!==null;){for(l=T=a;T!==null;){switch(u=T,v=u.child,u.tag){case 0:case 11:case 14:case 15:bi(4,u,u.return);break;case 1:Lt(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){t=u,n=u.return;try{e=t,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch($){vr(t,n,$)}}break;case 5:Lt(u,u.return);break;case 22:if(u.memoizedState!==null){tc(l);continue}}v!==null?(v.return=u,T=v):tc(l)}a=a.sibling}r:for(a=null,l=r;;){if(l.tag===5){if(a===null){a=l;try{i=l.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=l.stateNode,c=l.memoizedProps.style,f=c!=null&&c.hasOwnProperty("display")?c.display:null,d.style.display=lp("display",f))}catch($){vr(r,r.return,$)}}}else if(l.tag===6){if(a===null)try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch($){vr(r,r.return,$)}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===r)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break r;for(;l.sibling===null;){if(l.return===null||l.return===r)break r;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}}break;case 19:ue(e,r),he(r),t&4&&ec(r);break;case 21:break;default:ue(e,r),he(r)}}function he(r){var e=r.flags;if(e&2){try{r:{for(var n=r.return;n!==null;){if(C5(n)){var t=n;break r}n=n.return}throw Error(A(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(Ji(i,""),t.flags&=-33);var o=rc(r);vf(r,o,i);break;case 3:case 4:var f=t.stateNode.containerInfo,d=rc(r);ff(r,d,f);break;default:throw Error(A(161))}}catch(c){vr(r,r.return,c)}r.flags&=-3}e&4096&&(r.flags&=-4097)}function m$(r,e,n){T=r,G5(r)}function G5(r,e,n){for(var t=(r.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&t){var f=i.memoizedState!==null||Ba;if(!f){var d=i.alternate,c=d!==null&&d.memoizedState!==null||Fr;d=Ba;var s=Fr;if(Ba=f,(Fr=c)&&!s)for(T=i;T!==null;)f=T,c=f.child,f.tag===22&&f.memoizedState!==null?ic(i):c!==null?(c.return=f,T=c):ic(i);for(;o!==null;)T=o,G5(o),o=o.sibling;T=i,Ba=d,Fr=s}nc(r)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):nc(r)}}function nc(r){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fr||Vo(5,e);break;case 1:var t=e.stateNode;if(e.flags&4&&!Fr)if(n===null)t.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ve(e.type,n.memoizedProps);t.componentDidUpdate(i,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Uv(e,o,t);break;case 3:var f=e.updateQueue;if(f!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uv(e,f,n)}break;case 5:var d=e.stateNode;if(n===null&&e.flags&4){n=d;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var s=e.alternate;if(s!==null){var a=s.memoizedState;if(a!==null){var l=a.dehydrated;l!==null&&ea(l)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Fr||e.flags&512&&sf(e)}catch(u){vr(e,e.return,u)}}if(e===r){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function tc(r){for(;T!==null;){var e=T;if(e===r){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function ic(r){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vo(4,e)}catch(c){vr(e,n,c)}break;case 1:var t=e.stateNode;if(typeof t.componentDidMount=="function"){var i=e.return;try{t.componentDidMount()}catch(c){vr(e,i,c)}}var o=e.return;try{sf(e)}catch(c){vr(e,o,c)}break;case 5:var f=e.return;try{sf(e)}catch(c){vr(e,f,c)}}}catch(c){vr(e,e.return,c)}if(e===r){T=null;break}var d=e.sibling;if(d!==null){d.return=e.return,T=d;break}T=e.return}}var $$=Math.ceil,Oo=Me.ReactCurrentDispatcher,N1=Me.ReactCurrentOwner,ae=Me.ReactCurrentBatchConfig,z=0,Nr=null,dr=null,Pr=0,br=0,Ht=Un(0),$r=0,ca=null,it=0,qo=0,w1=0,Mi=null,Ur=null,I1=0,Xt=1/0,We=null,ko=!1,cf=null,Rn=null,Wa=!1,kn=null,Lo=0,Yi=0,df=null,to=-1,io=0;function Sr(){return z&6?cr():to!==-1?to:to=cr()}function Sn(r){return r.mode&1?z&2&&Pr!==0?Pr&-Pr:x8.transition!==null?(io===0&&(io=_p()),io):(r=K,r!==0||(r=window.event,r=r===void 0?16:Op(r.type)),r):1}function me(r,e,n,t){if(50<Yi)throw Yi=0,df=null,Error(A(185));pa(r,n,t),(!(z&2)||r!==Nr)&&(r===Nr&&(!(z&2)&&(qo|=n),$r===4&&An(r,Pr)),Xr(r,t),n===1&&z===0&&!(e.mode&1)&&(Xt=cr()+500,Wo&&zn()))}function Xr(r,e){var n=r.callbackNode;x7(r,e);var t=vo(r,r===Nr?Pr:0);if(t===0)n!==null&&dv(n),r.callbackNode=null,r.callbackPriority=0;else if(e=t&-t,r.callbackPriority!==e){if(n!=null&&dv(n),e===1)r.tag===0?j8(ac.bind(null,r)):Kp(ac.bind(null,r)),M8(function(){!(z&6)&&zn()}),n=null;else{switch(Np(t)){case 1:n=Yf;break;case 4:n=hp;break;case 16:n=fo;break;case 536870912:n=yp;break;default:n=fo}n=X5(n,D5.bind(null,r))}r.callbackPriority=e,r.callbackNode=n}}function D5(r,e){if(to=-1,io=0,z&6)throw Error(A(327));var n=r.callbackNode;if(Gt()&&r.callbackNode!==n)return null;var t=vo(r,r===Nr?Pr:0);if(t===0)return null;if(t&30||t&r.expiredLanes||e)e=Ho(r,t);else{e=t;var i=z;z|=2;var o=W5();(Nr!==r||Pr!==e)&&(We=null,Xt=cr()+500,xn(r,e));do try{y$();break}catch(d){B5(r,d)}while(!0);u1(),Oo.current=o,z=i,dr!==null?e=0:(Nr=null,Pr=0,e=$r)}if(e!==0){if(e===2&&(i=Ws(r),i!==0&&(t=i,e=pf(r,i))),e===1)throw n=ca,xn(r,0),An(r,t),Xr(r,cr()),n;if(e===6)An(r,t);else{if(i=r.current.alternate,!(t&30)&&!g$(i)&&(e=Ho(r,t),e===2&&(o=Ws(r),o!==0&&(t=o,e=pf(r,o))),e===1))throw n=ca,xn(r,0),An(r,t),Xr(r,cr()),n;switch(r.finishedWork=i,r.finishedLanes=t,e){case 0:case 1:throw Error(A(345));case 2:Mn(r,Ur,We);break;case 3:if(An(r,t),(t&130023424)===t&&(e=I1+500-cr(),10<e)){if(vo(r,0)!==0)break;if(i=r.suspendedLanes,(i&t)!==t){Sr(),r.pingedLanes|=r.suspendedLanes&i;break}r.timeoutHandle=bs(Mn.bind(null,r,Ur,We),e);break}Mn(r,Ur,We);break;case 4:if(An(r,t),(t&4194240)===t)break;for(e=r.eventTimes,i=-1;0<t;){var f=31-pe(t);o=1<<f,f=e[f],f>i&&(i=f),t&=~o}if(t=i,t=cr()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*$$(t/1960))-t,10<t){r.timeoutHandle=bs(Mn.bind(null,r,Ur,We),t);break}Mn(r,Ur,We);break;case 5:Mn(r,Ur,We);break;default:throw Error(A(329))}}}return Xr(r,cr()),r.callbackNode===n?D5.bind(null,r):null}function pf(r,e){var n=Mi;return r.current.memoizedState.isDehydrated&&(xn(r,e).flags|=256),r=Ho(r,e),r!==2&&(e=Ur,Ur=n,e!==null&&mf(e)),r}function mf(r){Ur===null?Ur=r:Ur.push.apply(Ur,r)}function g$(r){for(var e=r;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var i=n[t],o=i.getSnapshot;i=i.value;try{if(!$e(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function An(r,e){for(e&=~w1,e&=~qo,r.suspendedLanes|=e,r.pingedLanes&=~e,r=r.expirationTimes;0<e;){var n=31-pe(e),t=1<<n;r[n]=-1,e&=~t}}function ac(r){if(z&6)throw Error(A(327));Gt();var e=vo(r,0);if(!(e&1))return Xr(r,cr()),null;var n=Ho(r,e);if(r.tag!==0&&n===2){var t=Ws(r);t!==0&&(e=t,n=pf(r,t))}if(n===1)throw n=ca,xn(r,0),An(r,e),Xr(r,cr()),n;if(n===6)throw Error(A(345));return r.finishedWork=r.current.alternate,r.finishedLanes=e,Mn(r,Ur,We),Xr(r,cr()),null}function E1(r,e){var n=z;z|=1;try{return r(e)}finally{z=n,z===0&&(Xt=cr()+500,Wo&&zn())}}function at(r){kn!==null&&kn.tag===0&&!(z&6)&&Gt();var e=z;z|=1;var n=ae.transition,t=K;try{if(ae.transition=null,K=1,r)return r()}finally{K=t,ae.transition=n,z=e,!(z&6)&&zn()}}function P1(){br=Ht.current,rr(Ht)}function xn(r,e){r.finishedWork=null,r.finishedLanes=0;var n=r.timeoutHandle;if(n!==-1&&(r.timeoutHandle=-1,b8(n)),dr!==null)for(n=dr.return;n!==null;){var t=n;switch(a1(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&go();break;case 3:Vt(),rr(Vr),rr(Cr),p1();break;case 5:d1(t);break;case 4:Vt();break;case 13:rr(or);break;case 19:rr(or);break;case 10:s1(t.type._context);break;case 22:case 23:P1()}n=n.return}if(Nr=r,dr=r=Gn(r.current,null),Pr=br=e,$r=0,ca=null,w1=qo=it=0,Ur=Mi=null,Zn!==null){for(e=0;e<Zn.length;e++)if(n=Zn[e],t=n.interleaved,t!==null){n.interleaved=null;var i=t.next,o=n.pending;if(o!==null){var f=o.next;o.next=i,t.next=f}n.pending=t}Zn=null}return r}function B5(r,e){do{var n=dr;try{if(u1(),ro.current=Ao,Po){for(var t=lr.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Po=!1}if(tt=0,_r=mr=lr=null,Ki=!1,sa=0,N1.current=null,n===null||n.return===null){$r=1,ca=e,dr=null;break}r:{var o=r,f=n.return,d=n,c=e;if(e=Pr,d.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var s=c,a=d,l=a.tag;if(!(a.mode&1)&&(l===0||l===11||l===15)){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.lanes=u.lanes):(a.updateQueue=null,a.memoizedState=null)}var v=Kv(f);if(v!==null){v.flags&=-257,bv(v,f,d,o,e),v.mode&1&&Qv(o,s,e),e=v,c=s;var m=e.updateQueue;if(m===null){var $=new Set;$.add(c),e.updateQueue=$}else m.add(c);break r}else{if(!(e&1)){Qv(o,s,e),A1();break r}c=Error(A(426))}}else if(tr&&d.mode&1){var y=Kv(f);if(y!==null){!(y.flags&65536)&&(y.flags|=256),bv(y,f,d,o,e),o1(qt(c,d));break r}}o=c=qt(c,d),$r!==4&&($r=2),Mi===null?Mi=[o]:Mi.push(o),o=f;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=N5(o,c,e);Wv(o,g);break r;case 1:d=c;var h=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Rn===null||!Rn.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=w5(o,d,e);Wv(o,_);break r}}o=o.return}while(o!==null)}z5(n)}catch(N){e=N,dr===n&&n!==null&&(dr=n=n.return);continue}break}while(!0)}function W5(){var r=Oo.current;return Oo.current=Ao,r===null?Ao:r}function A1(){($r===0||$r===3||$r===2)&&($r=4),Nr===null||!(it&268435455)&&!(qo&268435455)||An(Nr,Pr)}function Ho(r,e){var n=z;z|=2;var t=W5();(Nr!==r||Pr!==e)&&(We=null,xn(r,e));do try{h$();break}catch(i){B5(r,i)}while(!0);if(u1(),z=n,Oo.current=t,dr!==null)throw Error(A(261));return Nr=null,Pr=0,$r}function h$(){for(;dr!==null;)U5(dr)}function y$(){for(;dr!==null&&!X7();)U5(dr)}function U5(r){var e=q5(r.alternate,r,br);r.memoizedProps=r.pendingProps,e===null?z5(r):dr=e,N1.current=null}function z5(r){var e=r;do{var n=e.alternate;if(r=e.return,e.flags&32768){if(n=c$(n,e),n!==null){n.flags&=32767,dr=n;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{$r=6,dr=null;return}}else if(n=v$(n,e,br),n!==null){dr=n;return}if(e=e.sibling,e!==null){dr=e;return}dr=e=r}while(e!==null);$r===0&&($r=5)}function Mn(r,e,n){var t=K,i=ae.transition;try{ae.transition=null,K=1,_$(r,e,n,t)}finally{ae.transition=i,K=t}return null}function _$(r,e,n,t){do Gt();while(kn!==null);if(z&6)throw Error(A(327));n=r.finishedWork;var i=r.finishedLanes;if(n===null)return null;if(r.finishedWork=null,r.finishedLanes=0,n===r.current)throw Error(A(177));r.callbackNode=null,r.callbackPriority=0;var o=n.lanes|n.childLanes;if(r8(r,o),r===Nr&&(dr=Nr=null,Pr=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,X5(fo,function(){return Gt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ae.transition,ae.transition=null;var f=K;K=1;var d=z;z|=4,N1.current=null,p$(r,n),S5(n,r),U8(Qs),co=!!Xs,Qs=Xs=null,r.current=n,m$(n),Q7(),z=d,K=f,ae.transition=o}else r.current=n;if(Wa&&(Wa=!1,kn=r,Lo=i),o=r.pendingLanes,o===0&&(Rn=null),M7(n.stateNode),Xr(r,cr()),e!==null)for(t=r.onRecoverableError,n=0;n<e.length;n++)i=e[n],t(i.value,{componentStack:i.stack,digest:i.digest});if(ko)throw ko=!1,r=cf,cf=null,r;return Lo&1&&r.tag!==0&&Gt(),o=r.pendingLanes,o&1?r===df?Yi++:(Yi=0,df=r):Yi=0,zn(),null}function Gt(){if(kn!==null){var r=Np(Lo),e=ae.transition,n=K;try{if(ae.transition=null,K=16>r?16:r,kn===null)var t=!1;else{if(r=kn,kn=null,Lo=0,z&6)throw Error(A(331));var i=z;for(z|=4,T=r.current;T!==null;){var o=T,f=o.child;if(T.flags&16){var d=o.deletions;if(d!==null){for(var c=0;c<d.length;c++){var s=d[c];for(T=s;T!==null;){var a=T;switch(a.tag){case 0:case 11:case 15:bi(8,a,o)}var l=a.child;if(l!==null)l.return=a,T=l;else for(;T!==null;){a=T;var u=a.sibling,v=a.return;if(F5(a),a===s){T=null;break}if(u!==null){u.return=v,T=u;break}T=v}}}var m=o.alternate;if(m!==null){var $=m.child;if($!==null){m.child=null;do{var y=$.sibling;$.sibling=null,$=y}while($!==null)}}T=o}}if(o.subtreeFlags&2064&&f!==null)f.return=o,T=f;else r:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,T=g;break r}T=o.return}}var h=r.current;for(T=h;T!==null;){f=T;var p=f.child;if(f.subtreeFlags&2064&&p!==null)p.return=f,T=p;else r:for(f=h;T!==null;){if(d=T,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Vo(9,d)}}catch(N){vr(d,d.return,N)}if(d===f){T=null;break r}var _=d.sibling;if(_!==null){_.return=d.return,T=_;break r}T=d.return}}if(z=i,zn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ro,r)}catch{}t=!0}return t}finally{K=n,ae.transition=e}}return!1}function oc(r,e,n){e=qt(n,e),e=N5(r,e,1),r=Cn(r,e,1),e=Sr(),r!==null&&(pa(r,1,e),Xr(r,e))}function vr(r,e,n){if(r.tag===3)oc(r,r,n);else for(;e!==null;){if(e.tag===3){oc(e,r,n);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Rn===null||!Rn.has(t))){r=qt(n,r),r=w5(e,r,1),e=Cn(e,r,1),r=Sr(),e!==null&&(pa(e,1,r),Xr(e,r));break}}e=e.return}}function N$(r,e,n){var t=r.pingCache;t!==null&&t.delete(e),e=Sr(),r.pingedLanes|=r.suspendedLanes&n,Nr===r&&(Pr&n)===n&&($r===4||$r===3&&(Pr&130023424)===Pr&&500>cr()-I1?xn(r,0):w1|=n),Xr(r,e)}function V5(r,e){e===0&&(r.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=Sr();r=Ke(r,e),r!==null&&(pa(r,e,n),Xr(r,n))}function w$(r){var e=r.memoizedState,n=0;e!==null&&(n=e.retryLane),V5(r,n)}function I$(r,e){var n=0;switch(r.tag){case 13:var t=r.stateNode,i=r.memoizedState;i!==null&&(n=i.retryLane);break;case 19:t=r.stateNode;break;default:throw Error(A(314))}t!==null&&t.delete(e),V5(r,n)}var q5;q5=function(r,e,n){if(r!==null)if(r.memoizedProps!==e.pendingProps||Vr.current)zr=!0;else{if(!(r.lanes&n)&&!(e.flags&128))return zr=!1,f$(r,e,n);zr=!!(r.flags&131072)}else zr=!1,tr&&e.flags&1048576&&bp(e,_o,e.index);switch(e.lanes=0,e.tag){case 2:var t=e.type;no(r,e),r=e.pendingProps;var i=Wt(e,Cr.current);St(e,n),i=$1(null,e,t,r,i,n);var o=g1();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qr(t)?(o=!0,ho(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,v1(e),i.updater=zo,e.stateNode=i,i._reactInternals=e,rf(e,t,r,n),e=tf(null,e,t,!0,o,n)):(e.tag=0,tr&&o&&i1(e),Rr(null,e,i,n),e=e.child),e;case 16:t=e.elementType;r:{switch(no(r,e),r=e.pendingProps,i=t._init,t=i(t._payload),e.type=t,i=e.tag=P$(t),r=ve(t,r),i){case 0:e=nf(null,e,t,r,n);break r;case 1:e=Zv(null,e,t,r,n);break r;case 11:e=Mv(null,e,t,r,n);break r;case 14:e=Yv(null,e,t,ve(t.type,r),n);break r}throw Error(A(306,t,""))}return e;case 0:return t=e.type,i=e.pendingProps,i=e.elementType===t?i:ve(t,i),nf(r,e,t,i,n);case 1:return t=e.type,i=e.pendingProps,i=e.elementType===t?i:ve(t,i),Zv(r,e,t,i,n);case 3:r:{if(A5(e),r===null)throw Error(A(387));t=e.pendingProps,o=e.memoizedState,i=o.element,xp(r,e),Io(e,t,null,n);var f=e.memoizedState;if(t=f.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=qt(Error(A(423)),e),e=Jv(r,e,t,n,i);break r}else if(t!==i){i=qt(Error(A(424)),e),e=Jv(r,e,t,n,i);break r}else for(Mr=Fn(e.stateNode.containerInfo.firstChild),Yr=e,tr=!0,de=null,n=Jp(e,null,t,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ut(),t===i){e=be(r,e,n);break r}Rr(r,e,t,n)}e=e.child}return e;case 5:return r5(e),r===null&&Js(e),t=e.type,i=e.pendingProps,o=r!==null?r.memoizedProps:null,f=i.children,Ks(t,i)?f=null:o!==null&&Ks(t,o)&&(e.flags|=32),P5(r,e),Rr(r,e,f,n),e.child;case 6:return r===null&&Js(e),null;case 13:return O5(r,e,n);case 4:return c1(e,e.stateNode.containerInfo),t=e.pendingProps,r===null?e.child=zt(e,null,t,n):Rr(r,e,t,n),e.child;case 11:return t=e.type,i=e.pendingProps,i=e.elementType===t?i:ve(t,i),Mv(r,e,t,i,n);case 7:return Rr(r,e,e.pendingProps,n),e.child;case 8:return Rr(r,e,e.pendingProps.children,n),e.child;case 12:return Rr(r,e,e.pendingProps.children,n),e.child;case 10:r:{if(t=e.type._context,i=e.pendingProps,o=e.memoizedProps,f=i.value,J(No,t._currentValue),t._currentValue=f,o!==null)if($e(o.value,f)){if(o.children===i.children&&!Vr.current){e=be(r,e,n);break r}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var d=o.dependencies;if(d!==null){f=o.child;for(var c=d.firstContext;c!==null;){if(c.context===t){if(o.tag===1){c=qe(-1,n&-n),c.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var a=s.pending;a===null?c.next=c:(c.next=a.next,a.next=c),s.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),js(o.return,n,e),d.lanes|=n;break}c=c.next}}else if(o.tag===10)f=o.type===e.type?null:o.child;else if(o.tag===18){if(f=o.return,f===null)throw Error(A(341));f.lanes|=n,d=f.alternate,d!==null&&(d.lanes|=n),js(f,n,e),f=o.sibling}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===e){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}Rr(r,e,i.children,n),e=e.child}return e;case 9:return i=e.type,t=e.pendingProps.children,St(e,n),i=oe(i),t=t(i),e.flags|=1,Rr(r,e,t,n),e.child;case 14:return t=e.type,i=ve(t,e.pendingProps),i=ve(t.type,i),Yv(r,e,t,i,n);case 15:return I5(r,e,e.type,e.pendingProps,n);case 17:return t=e.type,i=e.pendingProps,i=e.elementType===t?i:ve(t,i),no(r,e),e.tag=1,qr(t)?(r=!0,ho(e)):r=!1,St(e,n),_5(e,t,i),rf(e,t,i,n),tf(null,e,t,!0,r,n);case 19:return k5(r,e,n);case 22:return E5(r,e,n)}throw Error(A(156,e.tag))};function X5(r,e){return gp(r,e)}function E$(r,e,n,t){this.tag=r,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ie(r,e,n,t){return new E$(r,e,n,t)}function O1(r){return r=r.prototype,!(!r||!r.isReactComponent)}function P$(r){if(typeof r=="function")return O1(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Kf)return 11;if(r===bf)return 14}return 2}function Gn(r,e){var n=r.alternate;return n===null?(n=ie(r.tag,e,r.key,r.mode),n.elementType=r.elementType,n.type=r.type,n.stateNode=r.stateNode,n.alternate=r,r.alternate=n):(n.pendingProps=e,n.type=r.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=r.flags&14680064,n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,e=r.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=r.sibling,n.index=r.index,n.ref=r.ref,n}function ao(r,e,n,t,i,o){var f=2;if(t=r,typeof r=="function")O1(r)&&(f=1);else if(typeof r=="string")f=5;else r:switch(r){case _t:return rt(n.children,i,o,e);case Qf:f=8,i|=8;break;case Es:return r=ie(12,n,e,i|2),r.elementType=Es,r.lanes=o,r;case Ps:return r=ie(13,n,e,i),r.elementType=Ps,r.lanes=o,r;case As:return r=ie(19,n,e,i),r.elementType=As,r.lanes=o,r;case rp:return Xo(n,i,o,e);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case j6:f=10;break r;case x6:f=9;break r;case Kf:f=11;break r;case bf:f=14;break r;case wn:f=16,t=null;break r}throw Error(A(130,r==null?r:typeof r,""))}return e=ie(f,n,e,i),e.elementType=r,e.type=t,e.lanes=o,e}function rt(r,e,n,t){return r=ie(7,r,t,e),r.lanes=n,r}function Xo(r,e,n,t){return r=ie(22,r,t,e),r.elementType=rp,r.lanes=n,r.stateNode={isHidden:!1},r}function Fl(r,e,n){return r=ie(6,r,null,e),r.lanes=n,r}function Cl(r,e,n){return e=ie(4,r.children!==null?r.children:[],r.key,e),e.lanes=n,e.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},e}function A$(r,e,n,t,i){this.tag=e,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function k1(r,e,n,t,i,o,f,d,c){return r=new A$(r,e,n,d,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=ie(3,null,null,e),r.current=o,o.stateNode=r,o.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},v1(o),r}function O$(r,e,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yt,key:t==null?null:""+t,children:r,containerInfo:e,implementation:n}}function Q5(r){if(!r)return Bn;r=r._reactInternals;r:{if(lt(r)!==r||r.tag!==1)throw Error(A(170));var e=r;do{switch(e.tag){case 3:e=e.stateNode.context;break r;case 1:if(qr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break r}}e=e.return}while(e!==null);throw Error(A(171))}if(r.tag===1){var n=r.type;if(qr(n))return Qp(r,n,e)}return e}function K5(r,e,n,t,i,o,f,d,c){return r=k1(n,t,!0,r,i,o,f,d,c),r.context=Q5(null),n=r.current,t=Sr(),i=Sn(n),o=qe(t,i),o.callback=e??null,Cn(n,o,i),r.current.lanes=i,pa(r,i,t),Xr(r,t),r}function Qo(r,e,n,t){var i=e.current,o=Sr(),f=Sn(i);return n=Q5(n),e.context===null?e.context=n:e.pendingContext=n,e=qe(o,f),e.payload={element:r},t=t===void 0?null:t,t!==null&&(e.callback=t),r=Cn(i,e,f),r!==null&&(me(r,i,f,o),x0(r,i,f)),f}function To(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function lc(r,e){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var n=r.retryLane;r.retryLane=n!==0&&n<e?n:e}}function L1(r,e){lc(r,e),(r=r.alternate)&&lc(r,e)}function k$(){return null}var b5=typeof reportError=="function"?reportError:function(r){console.error(r)};function H1(r){this._internalRoot=r}Ko.prototype.render=H1.prototype.render=function(r){var e=this._internalRoot;if(e===null)throw Error(A(409));Qo(r,e,null,null)};Ko.prototype.unmount=H1.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var e=r.containerInfo;at(function(){Qo(null,r,null,null)}),e[Qe]=null}};function Ko(r){this._internalRoot=r}Ko.prototype.unstable_scheduleHydration=function(r){if(r){var e=Ep();r={blockedOn:null,target:r,priority:e};for(var n=0;n<Pn.length&&e!==0&&e<Pn[n].priority;n++);Pn.splice(n,0,r),n===0&&Ap(r)}};function T1(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function bo(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function uc(){}function L$(r,e,n,t,i){if(i){if(typeof t=="function"){var o=t;t=function(){var s=To(f);o.call(s)}}var f=K5(e,t,r,0,null,!1,!1,"",uc);return r._reactRootContainer=f,r[Qe]=f.current,ia(r.nodeType===8?r.parentNode:r),at(),f}for(;i=r.lastChild;)r.removeChild(i);if(typeof t=="function"){var d=t;t=function(){var s=To(c);d.call(s)}}var c=k1(r,0,!1,null,null,!1,!1,"",uc);return r._reactRootContainer=c,r[Qe]=c.current,ia(r.nodeType===8?r.parentNode:r),at(function(){Qo(e,c,n,t)}),c}function Mo(r,e,n,t,i){var o=n._reactRootContainer;if(o){var f=o;if(typeof i=="function"){var d=i;i=function(){var c=To(f);d.call(c)}}Qo(e,f,r,i)}else f=L$(n,e,r,i,t);return To(f)}wp=function(r){switch(r.tag){case 3:var e=r.stateNode;if(e.current.memoizedState.isDehydrated){var n=Wi(e.pendingLanes);n!==0&&(Zf(e,n|1),Xr(e,cr()),!(z&6)&&(Xt=cr()+500,zn()))}break;case 13:at(function(){var t=Ke(r,1);if(t!==null){var i=Sr();me(t,r,1,i)}}),L1(r,1)}};Jf=function(r){if(r.tag===13){var e=Ke(r,134217728);if(e!==null){var n=Sr();me(e,r,134217728,n)}L1(r,134217728)}};Ip=function(r){if(r.tag===13){var e=Sn(r),n=Ke(r,e);if(n!==null){var t=Sr();me(n,r,e,t)}L1(r,e)}};Ep=function(){return K};Pp=function(r,e){var n=K;try{return K=r,e()}finally{K=n}};Gs=function(r,e,n){switch(e){case"input":if(Ls(r,n),e=n.name,n.type==="radio"&&e!=null){for(n=r;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var t=n[e];if(t!==r&&t.form===r.form){var i=Bo(t);if(!i)throw Error(A(90));np(t),Ls(t,i)}}}break;case"textarea":ip(r,n);break;case"select":e=n.value,e!=null&&Tt(r,!!n.multiple,e,!1)}};vp=E1;cp=at;var H$={usingClientEntryPoint:!1,Events:[$a,Et,Bo,sp,fp,E1]},ci={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T$={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Me.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=mp(r),r===null?null:r.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||k$,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{Ro=Ua.inject(T$),Ae=Ua}catch{}}Jr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H$;Jr.createPortal=function(r,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T1(e))throw Error(A(200));return O$(r,e,null,n)};Jr.createRoot=function(r,e){if(!T1(r))throw Error(A(299));var n=!1,t="",i=b5;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=k1(r,1,!1,null,null,n,!1,t,i),r[Qe]=e.current,ia(r.nodeType===8?r.parentNode:r),new H1(e)};Jr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var e=r._reactInternals;if(e===void 0)throw typeof r.render=="function"?Error(A(188)):(r=Object.keys(r).join(","),Error(A(268,r)));return r=mp(e),r=r===null?null:r.stateNode,r};Jr.flushSync=function(r){return at(r)};Jr.hydrate=function(r,e,n){if(!bo(e))throw Error(A(200));return Mo(null,r,e,!0,n)};Jr.hydrateRoot=function(r,e,n){if(!T1(r))throw Error(A(405));var t=n!=null&&n.hydratedSources||null,i=!1,o="",f=b5;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),e=K5(e,null,r,1,n??null,i,!1,o,f),r[Qe]=e.current,ia(r),t)for(r=0;r<t.length;r++)n=t[r],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ko(e)};Jr.render=function(r,e,n){if(!bo(e))throw Error(A(200));return Mo(null,r,e,!1,n)};Jr.unmountComponentAtNode=function(r){if(!bo(r))throw Error(A(40));return r._reactRootContainer?(at(function(){Mo(null,null,r,!1,function(){r._reactRootContainer=null,r[Qe]=null})}),!0):!1};Jr.unstable_batchedUpdates=E1;Jr.unstable_renderSubtreeIntoContainer=function(r,e,n,t){if(!bo(n))throw Error(A(200));if(r==null||r._reactInternals===void 0)throw Error(A(38));return Mo(r,e,n,!1,t)};Jr.version="18.3.1-next-f1338f8080-20240426";function M5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M5)}catch(r){console.error(r)}}M5(),M6.exports=Jr;var F$=M6.exports,Y5,sc=F$;Y5=sc.createRoot,sc.hydrateRoot;var Z5={exports:{}};(function(r,e){(function(n,t){r.exports=t()})(a7,function(){var n=function(t,i){var o=Array.prototype.concat,f=Array.prototype.slice,d=Object.prototype.toString;function c(h,p){var _=h>p?h:p;return t.pow(10,17-~~(t.log(_>0?_:-_)*t.LOG10E))}var s=Array.isArray||function(p){return d.call(p)==="[object Array]"};function a(h){return d.call(h)==="[object Function]"}function l(h){return typeof h=="number"?h-h===0:!1}function u(h){return o.apply([],h)}function v(){return new v._init(arguments)}v.fn=v.prototype,v._init=function(p){if(s(p[0]))if(s(p[0][0])){a(p[1])&&(p[0]=v.map(p[0],p[1]));for(var _=0;_<p[0].length;_++)this[_]=p[0][_];this.length=p[0].length}else this[0]=a(p[1])?v.map(p[0],p[1]):p[0],this.length=1;else if(l(p[0]))this[0]=v.seq.apply(null,p),this.length=1;else{if(p[0]instanceof v)return v(p[0].toArray());this[0]=[],this.length=1}return this},v._init.prototype=v.prototype,v._init.constructor=v,v.utils={calcRdx:c,isArray:s,isFunction:a,isNumber:l,toVector:u},v._random_fn=t.random,v.setRandom=function(p){if(typeof p!="function")throw new TypeError("fn is not a function");v._random_fn=p},v.extend=function(p){var _,N;if(arguments.length===1){for(N in p)v[N]=p[N];return this}for(_=1;_<arguments.length;_++)for(N in arguments[_])p[N]=arguments[_][N];return p},v.rows=function(p){return p.length||1},v.cols=function(p){return p[0].length||1},v.dimensions=function(p){return{rows:v.rows(p),cols:v.cols(p)}},v.row=function(p,_){return s(_)?_.map(function(N){return v.row(p,N)}):p[_]},v.rowa=function(p,_){return v.row(p,_)},v.col=function(p,_){if(s(_)){var N=v.arange(p.length).map(function(){return new Array(_.length)});return _.forEach(function(E,H){v.arange(p.length).forEach(function(k){N[k][H]=p[k][E]})}),N}for(var w=new Array(p.length),I=0;I<p.length;I++)w[I]=[p[I][_]];return w},v.cola=function(p,_){return v.col(p,_).map(function(N){return N[0]})},v.diag=function(p){for(var _=v.rows(p),N=new Array(_),w=0;w<_;w++)N[w]=[p[w][w]];return N},v.antidiag=function(p){for(var _=v.rows(p)-1,N=new Array(_),w=0;_>=0;_--,w++)N[w]=[p[w][_]];return N},v.transpose=function(p){var _=[],N,w,I,E,H;for(s(p[0])||(p=[p]),w=p.length,I=p[0].length,H=0;H<I;H++){for(N=new Array(w),E=0;E<w;E++)N[E]=p[E][H];_.push(N)}return _.length===1?_[0]:_},v.map=function(p,_,N){var w,I,E,H,k;for(s(p[0])||(p=[p]),I=p.length,E=p[0].length,H=N?p:new Array(I),w=0;w<I;w++)for(H[w]||(H[w]=new Array(E)),k=0;k<E;k++)H[w][k]=_(p[w][k],w,k);return H.length===1?H[0]:H},v.cumreduce=function(p,_,N){var w,I,E,H,k;for(s(p[0])||(p=[p]),I=p.length,E=p[0].length,H=N?p:new Array(I),w=0;w<I;w++)for(H[w]||(H[w]=new Array(E)),E>0&&(H[w][0]=p[w][0]),k=1;k<E;k++)H[w][k]=_(H[w][k-1],p[w][k]);return H.length===1?H[0]:H},v.alter=function(p,_){return v.map(p,_,!0)},v.create=function(p,_,N){var w=new Array(p),I,E;for(a(_)&&(N=_,_=p),I=0;I<p;I++)for(w[I]=new Array(_),E=0;E<_;E++)w[I][E]=N(I,E);return w};function m(){return 0}v.zeros=function(p,_){return l(_)||(_=p),v.create(p,_,m)};function $(){return 1}v.ones=function(p,_){return l(_)||(_=p),v.create(p,_,$)},v.rand=function(p,_){return l(_)||(_=p),v.create(p,_,v._random_fn)};function y(h,p){return h===p?1:0}v.identity=function(p,_){return l(_)||(_=p),v.create(p,_,y)},v.symmetric=function(p){var _=p.length,N,w;if(p.length!==p[0].length)return!1;for(N=0;N<_;N++)for(w=0;w<_;w++)if(p[w][N]!==p[N][w])return!1;return!0},v.clear=function(p){return v.alter(p,m)},v.seq=function(p,_,N,w){a(w)||(w=!1);var I=[],E=c(p,_),H=(_*E-p*E)/((N-1)*E),k=p,S;for(S=0;k<=_&&S<N;S++,k=(p*E+H*E*S)/E)I.push(w?w(k,S):k);return I},v.arange=function(p,_,N){var w=[],I;if(N=N||1,_===i&&(_=p,p=0),p===_||N===0)return[];if(p<_&&N<0)return[];if(p>_&&N>0)return[];if(N>0)for(I=p;I<_;I+=N)w.push(I);else for(I=p;I>_;I+=N)w.push(I);return w},v.slice=function(){function h(_,N,w,I){var E,H=[],k=_.length;if(N===i&&w===i&&I===i)return v.copy(_);if(N=N||0,w=w||_.length,N=N>=0?N:k+N,w=w>=0?w:k+w,I=I||1,N===w||I===0)return[];if(N<w&&I<0)return[];if(N>w&&I>0)return[];if(I>0)for(E=N;E<w;E+=I)H.push(_[E]);else for(E=N;E>w;E+=I)H.push(_[E]);return H}function p(_,N){var w,I;if(N=N||{},l(N.row)){if(l(N.col))return _[N.row][N.col];var E=v.rowa(_,N.row);return w=N.col||{},h(E,w.start,w.end,w.step)}if(l(N.col)){var H=v.cola(_,N.col);return I=N.row||{},h(H,I.start,I.end,I.step)}I=N.row||{},w=N.col||{};var k=h(_,I.start,I.end,I.step);return k.map(function(S){return h(S,w.start,w.end,w.step)})}return p}(),v.sliceAssign=function(p,_,N){var w,I;if(l(_.row)){if(l(_.col))return p[_.row][_.col]=N;_.col=_.col||{},_.col.start=_.col.start||0,_.col.end=_.col.end||p[0].length,_.col.step=_.col.step||1,w=v.arange(_.col.start,t.min(p.length,_.col.end),_.col.step);var E=_.row;return w.forEach(function(k,S){p[E][k]=N[S]}),p}if(l(_.col)){_.row=_.row||{},_.row.start=_.row.start||0,_.row.end=_.row.end||p.length,_.row.step=_.row.step||1,I=v.arange(_.row.start,t.min(p[0].length,_.row.end),_.row.step);var H=_.col;return I.forEach(function(k,S){p[k][H]=N[S]}),p}return N[0].length===i&&(N=[N]),_.row.start=_.row.start||0,_.row.end=_.row.end||p.length,_.row.step=_.row.step||1,_.col.start=_.col.start||0,_.col.end=_.col.end||p[0].length,_.col.step=_.col.step||1,I=v.arange(_.row.start,t.min(p.length,_.row.end),_.row.step),w=v.arange(_.col.start,t.min(p[0].length,_.col.end),_.col.step),I.forEach(function(k,S){w.forEach(function(yr,Z){p[k][yr]=N[S][Z]})}),p},v.diagonal=function(p){var _=v.zeros(p.length,p.length);return p.forEach(function(N,w){_[w][w]=N}),_},v.copy=function(p){return p.map(function(_){return l(_)?_:_.map(function(N){return N})})};var g=v.prototype;return g.length=0,g.push=Array.prototype.push,g.sort=Array.prototype.sort,g.splice=Array.prototype.splice,g.slice=Array.prototype.slice,g.toArray=function(){return this.length>1?f.call(this):f.call(this)[0]},g.map=function(p,_){return v(v.map(this,p,_))},g.cumreduce=function(p,_){return v(v.cumreduce(this,p,_))},g.alter=function(p){return v.alter(this,p),this},function(h){for(var p=0;p<h.length;p++)(function(_){g[_]=function(N){var w=this,I;return N?(setTimeout(function(){N.call(w,g[_].call(w))}),this):(I=v[_](this),s(I)?v(I):I)}})(h[p])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(h){for(var p=0;p<h.length;p++)(function(_){g[_]=function(N,w){var I=this;return w?(setTimeout(function(){w.call(I,g[_].call(I,N))}),this):v(v[_](this,N))}})(h[p])}("row col".split(" ")),function(h){for(var p=0;p<h.length;p++)(function(_){g[_]=function(){return v(v[_].apply(null,arguments))}})(h[p])}("create zeros ones rand identity".split(" ")),v}(Math);return function(t,i){var o=t.utils.isFunction;function f(s,a){return s-a}function d(s,a,l){return i.max(a,i.min(s,l))}t.sum=function(a){for(var l=0,u=a.length;--u>=0;)l+=a[u];return l},t.sumsqrd=function(a){for(var l=0,u=a.length;--u>=0;)l+=a[u]*a[u];return l},t.sumsqerr=function(a){for(var l=t.mean(a),u=0,v=a.length,m;--v>=0;)m=a[v]-l,u+=m*m;return u},t.sumrow=function(a){for(var l=0,u=a.length;--u>=0;)l+=a[u];return l},t.product=function(a){for(var l=1,u=a.length;--u>=0;)l*=a[u];return l},t.min=function(a){for(var l=a[0],u=0;++u<a.length;)a[u]<l&&(l=a[u]);return l},t.max=function(a){for(var l=a[0],u=0;++u<a.length;)a[u]>l&&(l=a[u]);return l},t.unique=function(a){for(var l={},u=[],v=0;v<a.length;v++)l[a[v]]||(l[a[v]]=!0,u.push(a[v]));return u},t.mean=function(a){return t.sum(a)/a.length},t.meansqerr=function(a){return t.sumsqerr(a)/a.length},t.geomean=function(a){var l=a.map(i.log),u=t.mean(l);return i.exp(u)},t.median=function(a){var l=a.length,u=a.slice().sort(f);return l&1?u[l/2|0]:(u[l/2-1]+u[l/2])/2},t.cumsum=function(a){return t.cumreduce(a,function(l,u){return l+u})},t.cumprod=function(a){return t.cumreduce(a,function(l,u){return l*u})},t.diff=function(a){var l=[],u=a.length,v;for(v=1;v<u;v++)l.push(a[v]-a[v-1]);return l},t.rank=function(s){var a,l=[],u={};for(a=0;a<s.length;a++){var v=s[a];u[v]?u[v]++:(u[v]=1,l.push(v))}var m=l.sort(f),$={},y=1;for(a=0;a<m.length;a++){var v=m[a],g=u[v],h=y,p=y+g-1,_=(h+p)/2;$[v]=_,y+=g}return s.map(function(N){return $[N]})},t.mode=function(a){var l=a.length,u=a.slice().sort(f),v=1,m=0,$=0,y=[],g;for(g=0;g<l;g++)u[g]===u[g+1]?v++:(v>m?(y=[u[g]],m=v,$=0):v===m&&(y.push(u[g]),$++),v=1);return $===0?y[0]:y},t.range=function(a){return t.max(a)-t.min(a)},t.variance=function(a,l){return t.sumsqerr(a)/(a.length-(l?1:0))},t.pooledvariance=function(a){var l=a.reduce(function(v,m){return v+t.sumsqerr(m)},0),u=a.reduce(function(v,m){return v+m.length},0);return l/(u-a.length)},t.deviation=function(s){for(var a=t.mean(s),l=s.length,u=new Array(l),v=0;v<l;v++)u[v]=s[v]-a;return u},t.stdev=function(a,l){return i.sqrt(t.variance(a,l))},t.pooledstdev=function(a){return i.sqrt(t.pooledvariance(a))},t.meandev=function(a){for(var l=t.mean(a),u=[],v=a.length-1;v>=0;v--)u.push(i.abs(a[v]-l));return t.mean(u)},t.meddev=function(a){for(var l=t.median(a),u=[],v=a.length-1;v>=0;v--)u.push(i.abs(a[v]-l));return t.median(u)},t.coeffvar=function(a){return t.stdev(a)/t.mean(a)},t.quartiles=function(a){var l=a.length,u=a.slice().sort(f);return[u[i.round(l/4)-1],u[i.round(l/2)-1],u[i.round(l*3/4)-1]]},t.quantiles=function(a,l,u,v){var m=a.slice().sort(f),$=[l.length],y=a.length,g,h,p,_,N,w;for(typeof u>"u"&&(u=3/8),typeof v>"u"&&(v=3/8),g=0;g<l.length;g++)h=l[g],p=u+h*(1-u-v),_=y*h+p,N=i.floor(d(_,1,y-1)),w=d(_-N,0,1),$[g]=(1-w)*m[N-1]+w*m[N];return $},t.percentile=function(a,l,u){var v=a.slice().sort(f),m=l*(v.length+(u?1:-1))+(u?0:1),$=parseInt(m),y=m-$;return $+1<v.length?v[$-1]+y*(v[$]-v[$-1]):v[$-1]},t.percentileOfScore=function(a,l,u){var v=0,m=a.length,$=!1,y,g;for(u==="strict"&&($=!0),g=0;g<m;g++)y=a[g],($&&y<l||!$&&y<=l)&&v++;return v/m},t.histogram=function(a,l){l=l||4;var u=t.min(a),v=(t.max(a)-u)/l,m=a.length,$=[],y;for(y=0;y<l;y++)$[y]=0;for(y=0;y<m;y++)$[i.min(i.floor((a[y]-u)/v),l-1)]+=1;return $},t.covariance=function(a,l){var u=t.mean(a),v=t.mean(l),m=a.length,$=new Array(m),y;for(y=0;y<m;y++)$[y]=(a[y]-u)*(l[y]-v);return t.sum($)/(m-1)},t.corrcoeff=function(a,l){return t.covariance(a,l)/t.stdev(a,1)/t.stdev(l,1)},t.spearmancoeff=function(s,a){return s=t.rank(s),a=t.rank(a),t.corrcoeff(s,a)},t.stanMoment=function(a,l){for(var u=t.mean(a),v=t.stdev(a),m=a.length,$=0,y=0;y<m;y++)$+=i.pow((a[y]-u)/v,l);return $/a.length},t.skewness=function(a){return t.stanMoment(a,3)},t.kurtosis=function(a){return t.stanMoment(a,4)-3};var c=t.prototype;(function(s){for(var a=0;a<s.length;a++)(function(l){c[l]=function(u,v){var m=[],$=0,y=this;if(o(u)&&(v=u,u=!1),v)return setTimeout(function(){v.call(y,c[l].call(y,u))}),this;if(this.length>1){for(y=u===!0?this:this.transpose();$<y.length;$++)m[$]=t[l](y[$]);return m}return t[l](this[0],u)}})(s[a])})("cumsum cumprod".split(" ")),function(s){for(var a=0;a<s.length;a++)(function(l){c[l]=function(u,v){var m=[],$=0,y=this;if(o(u)&&(v=u,u=!1),v)return setTimeout(function(){v.call(y,c[l].call(y,u))}),this;if(this.length>1){for(l!=="sumrow"&&(y=u===!0?this:this.transpose());$<y.length;$++)m[$]=t[l](y[$]);return u===!0?t[l](t.utils.toVector(m)):m}return t[l](this[0],u)}})(s[a])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(s){for(var a=0;a<s.length;a++)(function(l){c[l]=function(){var u=[],v=0,m=this,$=Array.prototype.slice.call(arguments),y;if(o($[$.length-1])){y=$[$.length-1];var g=$.slice(0,$.length-1);return setTimeout(function(){y.call(m,c[l].apply(m,g))}),this}else{y=void 0;var h=function(_){return t[l].apply(m,[_].concat($))}}if(this.length>1){for(m=m.transpose();v<m.length;v++)u[v]=h(m[v]);return u}return h(this[0])}})(s[a])}("quantiles percentileOfScore".split(" "))}(n,Math),function(t,i){t.gammaln=function(f){var d=0,c=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015,a,l,u;for(u=(l=a=f)+5.5,u-=(a+.5)*i.log(u);d<6;d++)s+=c[d]/++l;return i.log(2.5066282746310007*s/a)-u},t.loggam=function(f){var d,c,s,a,l,u,v,m=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(d=f,v=0,f==1||f==2)return 0;for(f<=7&&(v=i.floor(7-f),d=f+v),c=1/(d*d),s=2*i.PI,l=m[9],u=8;u>=0;u--)l*=c,l+=m[u];if(a=l/d+.5*i.log(s)+(d-.5)*i.log(d)-d,f<=7)for(u=1;u<=v;u++)a-=i.log(d-1),d-=1;return a},t.gammafn=function(f){var d=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],c=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],s=!1,a=0,l=0,u=0,v=f,m,$,y,g;if(f>171.6243769536076)return 1/0;if(v<=0)if(g=v%1+36e-17,g)s=(v&1?-1:1)*i.PI/i.sin(i.PI*g),v=1-v;else return 1/0;for(y=v,v<1?$=v++:$=(v-=a=(v|0)-1)-1,m=0;m<8;++m)u=(u+d[m])*$,l=l*$+c[m];if(g=u/l+1,y<v)g/=y;else if(y>v)for(m=0;m<a;++m)g*=v,v++;return s&&(g=s/g),g},t.gammap=function(f,d){return t.lowRegGamma(f,d)*t.gammafn(f)},t.lowRegGamma=function(f,d){var c=t.gammaln(f),s=f,a=1/f,l=a,u=d+1-f,v=1/1e-30,m=1/u,$=m,y=1,g=-~(i.log(f>=1?f:1/f)*8.5+f*.4+17),h;if(d<0||f<=0)return NaN;if(d<f+1){for(;y<=g;y++)a+=l*=d/++s;return a*i.exp(-d+f*i.log(d)-c)}for(;y<=g;y++)h=-y*(y-f),u+=2,m=h*m+u,v=u+h/v,m=1/m,$*=m*v;return 1-$*i.exp(-d+f*i.log(d)-c)},t.factorialln=function(f){return f<0?NaN:t.gammaln(f+1)},t.factorial=function(f){return f<0?NaN:t.gammafn(f+1)},t.combination=function(f,d){return f>170||d>170?i.exp(t.combinationln(f,d)):t.factorial(f)/t.factorial(d)/t.factorial(f-d)},t.combinationln=function(f,d){return t.factorialln(f)-t.factorialln(d)-t.factorialln(f-d)},t.permutation=function(f,d){return t.factorial(f)/t.factorial(f-d)},t.betafn=function(f,d){if(!(f<=0||d<=0))return f+d>170?i.exp(t.betaln(f,d)):t.gammafn(f)*t.gammafn(d)/t.gammafn(f+d)},t.betaln=function(f,d){return t.gammaln(f)+t.gammaln(d)-t.gammaln(f+d)},t.betacf=function(f,d,c){var s=1e-30,a=1,l=d+c,u=d+1,v=d-1,m=1,$=1-l*f/u,y,g,h,p;for(i.abs($)<s&&($=s),$=1/$,p=$;a<=100&&(y=2*a,g=a*(c-a)*f/((v+y)*(d+y)),$=1+g*$,i.abs($)<s&&($=s),m=1+g/m,i.abs(m)<s&&(m=s),$=1/$,p*=$*m,g=-(d+a)*(l+a)*f/((d+y)*(u+y)),$=1+g*$,i.abs($)<s&&($=s),m=1+g/m,i.abs(m)<s&&(m=s),$=1/$,h=$*m,p*=h,!(i.abs(h-1)<3e-7));a++);return p},t.gammapinv=function(f,d){var c=0,s=d-1,a=1e-8,l=t.gammaln(d),u,v,m,$,y,g,h;if(f>=1)return i.max(100,d+100*i.sqrt(d));if(f<=0)return 0;for(d>1?(g=i.log(s),h=i.exp(s*(g-1)-l),y=f<.5?f:1-f,m=i.sqrt(-2*i.log(y)),u=(2.30753+m*.27061)/(1+m*(.99229+m*.04481))-m,f<.5&&(u=-u),u=i.max(.001,d*i.pow(1-1/(9*d)-u/(3*i.sqrt(d)),3))):(m=1-d*(.253+d*.12),f<m?u=i.pow(f/m,1/d):u=1-i.log(1-(f-m)/(1-m)));c<12;c++){if(u<=0)return 0;if(v=t.lowRegGamma(d,u)-f,d>1?m=h*i.exp(-(u-s)+s*(i.log(u)-g)):m=i.exp(-u+s*i.log(u)-l),$=v/m,u-=m=$/(1-.5*i.min(1,$*((d-1)/u-1))),u<=0&&(u=.5*(u+m)),i.abs(m)<a*u)break}return u},t.erf=function(f){var d=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],c=d.length-1,s=!1,a=0,l=0,u,v,m,$;for(f<0&&(f=-f,s=!0),u=2/(2+f),v=4*u-2;c>0;c--)m=a,a=v*a-l+d[c],l=m;return $=u*i.exp(-f*f+.5*(d[0]+v*a)-l),s?$-1:1-$},t.erfc=function(f){return 1-t.erf(f)},t.erfcinv=function(f){var d=0,c,s,a,l;if(f>=2)return-100;if(f<=0)return 100;for(l=f<1?f:2-f,a=i.sqrt(-2*i.log(l/2)),c=-.70711*((2.30753+a*.27061)/(1+a*(.99229+a*.04481))-a);d<2;d++)s=t.erfc(c)-l,c+=s/(1.1283791670955126*i.exp(-c*c)-c*s);return f<1?c:-c},t.ibetainv=function(f,d,c){var s=1e-8,a=d-1,l=c-1,u=0,v,m,$,y,g,h,p,_,N,w,I;if(f<=0)return 0;if(f>=1)return 1;for(d>=1&&c>=1?($=f<.5?f:1-f,y=i.sqrt(-2*i.log($)),p=(2.30753+y*.27061)/(1+y*(.99229+y*.04481))-y,f<.5&&(p=-p),_=(p*p-3)/6,N=2/(1/(2*d-1)+1/(2*c-1)),w=p*i.sqrt(_+N)/N-(1/(2*c-1)-1/(2*d-1))*(_+5/6-2/(3*N)),p=d/(d+c*i.exp(2*w))):(v=i.log(d/(d+c)),m=i.log(c/(d+c)),y=i.exp(d*v)/d,g=i.exp(c*m)/c,w=y+g,f<y/w?p=i.pow(d*w*f,1/d):p=1-i.pow(c*w*(1-f),1/c)),I=-t.gammaln(d)-t.gammaln(c)+t.gammaln(d+c);u<10;u++){if(p===0||p===1)return p;if(h=t.ibeta(p,d,c)-f,y=i.exp(a*i.log(p)+l*i.log(1-p)+I),g=h/y,p-=y=g/(1-.5*i.min(1,g*(a/p-l/(1-p)))),p<=0&&(p=.5*(p+y)),p>=1&&(p=.5*(p+y+1)),i.abs(y)<s*p&&u>0)break}return p},t.ibeta=function(f,d,c){var s=f===0||f===1?0:i.exp(t.gammaln(d+c)-t.gammaln(d)-t.gammaln(c)+d*i.log(f)+c*i.log(1-f));return f<0||f>1?!1:f<(d+1)/(d+c+2)?s*t.betacf(f,d,c)/d:1-s*t.betacf(1-f,c,d)/c},t.randn=function(f,d){var c,s,a,l,u;if(d||(d=f),f)return t.create(f,d,function(){return t.randn()});do c=t._random_fn(),s=1.7156*(t._random_fn()-.5),a=c-.449871,l=i.abs(s)+.386595,u=a*a+l*(.196*l-.25472*a);while(u>.27597&&(u>.27846||s*s>-4*i.log(c)*c*c));return s/c},t.randg=function(f,d,c){var s=f,a,l,u,v,m,$;if(c||(c=d),f||(f=1),d)return $=t.zeros(d,c),$.alter(function(){return t.randg(f)}),$;f<1&&(f+=1),a=f-1/3,l=1/i.sqrt(9*a);do{do m=t.randn(),v=1+l*m;while(v<=0);v=v*v*v,u=t._random_fn()}while(u>1-.331*i.pow(m,4)&&i.log(u)>.5*m*m+a*(1-v+i.log(v)));if(f==s)return a*v;do u=t._random_fn();while(u===0);return i.pow(u,1/s)*a*v},function(o){for(var f=0;f<o.length;f++)(function(d){t.fn[d]=function(){return t(t.map(this,function(c){return t[d](c)}))}})(o[f])}("gammaln gammafn factorial factorialln".split(" ")),function(o){for(var f=0;f<o.length;f++)(function(d){t.fn[d]=function(){return t(t[d].apply(null,arguments))}})(o[f])}("randn".split(" "))}(n,Math),function(t,i){(function(s){for(var a=0;a<s.length;a++)(function(l){t[l]=function u(v,m,$){return this instanceof u?(this._a=v,this._b=m,this._c=$,this):new u(v,m,$)},t.fn[l]=function(u,v,m){var $=t[l](u,v,m);return $.data=this,$},t[l].prototype.sample=function(u){var v=this._a,m=this._b,$=this._c;return u?t.alter(u,function(){return t[l].sample(v,m,$)}):t[l].sample(v,m,$)},function(u){for(var v=0;v<u.length;v++)(function(m){t[l].prototype[m]=function($){var y=this._a,g=this._b,h=this._c;return!$&&$!==0&&($=this.data),typeof $!="number"?t.fn.map.call($,function(p){return t[l][m](p,y,g,h)}):t[l][m]($,y,g,h)}})(u[v])}("pdf cdf inv".split(" ")),function(u){for(var v=0;v<u.length;v++)(function(m){t[l].prototype[m]=function(){return t[l][m](this._a,this._b,this._c)}})(u[v])}("mean median mode variance".split(" "))})(s[a])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(a,l,u){return a>1||a<0?0:l==1&&u==1?1:l<512&&u<512?i.pow(a,l-1)*i.pow(1-a,u-1)/t.betafn(l,u):i.exp((l-1)*i.log(a)+(u-1)*i.log(1-a)-t.betaln(l,u))},cdf:function(a,l,u){return a>1||a<0?(a>1)*1:t.ibeta(a,l,u)},inv:function(a,l,u){return t.ibetainv(a,l,u)},mean:function(a,l){return a/(a+l)},median:function(a,l){return t.ibetainv(.5,a,l)},mode:function(a,l){return(a-1)/(a+l-2)},sample:function(a,l){var u=t.randg(a);return u/(u+t.randg(l))},variance:function(a,l){return a*l/(i.pow(a+l,2)*(a+l+1))}}),t.extend(t.centralF,{pdf:function(a,l,u){var v,m,$;return a<0?0:l<=2?a===0&&l<2?1/0:a===0&&l===2?1:1/t.betafn(l/2,u/2)*i.pow(l/u,l/2)*i.pow(a,l/2-1)*i.pow(1+l/u*a,-(l+u)/2):(v=l*a/(u+a*l),m=u/(u+a*l),$=l*m/2,$*t.binomial.pdf((l-2)/2,(l+u-2)/2,v))},cdf:function(a,l,u){return a<0?0:t.ibeta(l*a/(l*a+u),l/2,u/2)},inv:function(a,l,u){return u/(l*(1/t.ibetainv(a,l/2,u/2)-1))},mean:function(a,l){return l>2?l/(l-2):void 0},mode:function(a,l){return a>2?l*(a-2)/(a*(l+2)):void 0},sample:function(a,l){var u=t.randg(a/2)*2,v=t.randg(l/2)*2;return u/a/(v/l)},variance:function(a,l){if(!(l<=4))return 2*l*l*(a+l-2)/(a*(l-2)*(l-2)*(l-4))}}),t.extend(t.cauchy,{pdf:function(a,l,u){return u<0?0:u/(i.pow(a-l,2)+i.pow(u,2))/i.PI},cdf:function(a,l,u){return i.atan((a-l)/u)/i.PI+.5},inv:function(s,a,l){return a+l*i.tan(i.PI*(s-.5))},median:function(a){return a},mode:function(a){return a},sample:function(a,l){return t.randn()*i.sqrt(1/(2*t.randg(.5)))*l+a}}),t.extend(t.chisquare,{pdf:function(a,l){return a<0?0:a===0&&l===2?.5:i.exp((l/2-1)*i.log(a)-a/2-l/2*i.log(2)-t.gammaln(l/2))},cdf:function(a,l){return a<0?0:t.lowRegGamma(l/2,a/2)},inv:function(s,a){return 2*t.gammapinv(s,.5*a)},mean:function(s){return s},median:function(a){return a*i.pow(1-2/(9*a),3)},mode:function(a){return a-2>0?a-2:0},sample:function(a){return t.randg(a/2)*2},variance:function(a){return 2*a}}),t.extend(t.exponential,{pdf:function(a,l){return a<0?0:l*i.exp(-l*a)},cdf:function(a,l){return a<0?0:1-i.exp(-l*a)},inv:function(s,a){return-i.log(1-s)/a},mean:function(s){return 1/s},median:function(s){return 1/s*i.log(2)},mode:function(){return 0},sample:function(a){return-1/a*i.log(t._random_fn())},variance:function(s){return i.pow(s,-2)}}),t.extend(t.gamma,{pdf:function(a,l,u){return a<0?0:a===0&&l===1?1/u:i.exp((l-1)*i.log(a)-a/u-t.gammaln(l)-l*i.log(u))},cdf:function(a,l,u){return a<0?0:t.lowRegGamma(l,a/u)},inv:function(s,a,l){return t.gammapinv(s,a)*l},mean:function(s,a){return s*a},mode:function(a,l){if(a>1)return(a-1)*l},sample:function(a,l){return t.randg(a)*l},variance:function(a,l){return a*l*l}}),t.extend(t.invgamma,{pdf:function(a,l,u){return a<=0?0:i.exp(-(l+1)*i.log(a)-u/a-t.gammaln(l)+l*i.log(u))},cdf:function(a,l,u){return a<=0?0:1-t.lowRegGamma(l,u/a)},inv:function(s,a,l){return l/t.gammapinv(1-s,a)},mean:function(s,a){return s>1?a/(s-1):void 0},mode:function(a,l){return l/(a+1)},sample:function(a,l){return l/t.randg(a)},variance:function(a,l){if(!(a<=2))return l*l/((a-1)*(a-1)*(a-2))}}),t.extend(t.kumaraswamy,{pdf:function(a,l,u){return a===0&&l===1?u:a===1&&u===1?l:i.exp(i.log(l)+i.log(u)+(l-1)*i.log(a)+(u-1)*i.log(1-i.pow(a,l)))},cdf:function(a,l,u){return a<0?0:a>1?1:1-i.pow(1-i.pow(a,l),u)},inv:function(a,l,u){return i.pow(1-i.pow(1-a,1/u),1/l)},mean:function(s,a){return a*t.gammafn(1+1/s)*t.gammafn(a)/t.gammafn(1+1/s+a)},median:function(a,l){return i.pow(1-i.pow(2,-1/l),1/a)},mode:function(a,l){if(a>=1&&l>=1&&a!==1&&l!==1)return i.pow((a-1)/(a*l-1),1/a)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(a,l,u){return a<=0?0:i.exp(-i.log(a)-.5*i.log(2*i.PI)-i.log(u)-i.pow(i.log(a)-l,2)/(2*u*u))},cdf:function(a,l,u){return a<0?0:.5+.5*t.erf((i.log(a)-l)/i.sqrt(2*u*u))},inv:function(s,a,l){return i.exp(-1.4142135623730951*l*t.erfcinv(2*s)+a)},mean:function(a,l){return i.exp(a+l*l/2)},median:function(a){return i.exp(a)},mode:function(a,l){return i.exp(a-l*l)},sample:function(a,l){return i.exp(t.randn()*l+a)},variance:function(a,l){return(i.exp(l*l)-1)*i.exp(2*a+l*l)}}),t.extend(t.noncentralt,{pdf:function(a,l,u){var v=1e-14;return i.abs(u)<v?t.studentt.pdf(a,l):i.abs(a)<v?i.exp(t.gammaln((l+1)/2)-u*u/2-.5*i.log(i.PI*l)-t.gammaln(l/2)):l/a*(t.noncentralt.cdf(a*i.sqrt(1+2/l),l+2,u)-t.noncentralt.cdf(a,l,u))},cdf:function(a,l,u){var v=1e-14,m=200;if(i.abs(u)<v)return t.studentt.cdf(a,l);var $=!1;a<0&&($=!0,u=-u);for(var y=t.normal.cdf(-u,0,1),g=v+1,h=g,p=a*a/(a*a+l),_=0,N=i.exp(-u*u/2),w=i.exp(-u*u/2-.5*i.log(2)-t.gammaln(3/2))*u;_<m||h>v||g>v;)h=g,_>0&&(N*=u*u/(2*_),w*=u*u/(2*(_+1/2))),g=N*t.beta.cdf(p,_+.5,l/2)+w*t.beta.cdf(p,_+1,l/2),y+=.5*g,_++;return $?1-y:y}}),t.extend(t.normal,{pdf:function(a,l,u){return i.exp(-.5*i.log(2*i.PI)-i.log(u)-i.pow(a-l,2)/(2*u*u))},cdf:function(a,l,u){return .5*(1+t.erf((a-l)/i.sqrt(2*u*u)))},inv:function(s,a,l){return-1.4142135623730951*l*t.erfcinv(2*s)+a},mean:function(s){return s},median:function(a){return a},mode:function(s){return s},sample:function(a,l){return t.randn()*l+a},variance:function(s,a){return a*a}}),t.extend(t.pareto,{pdf:function(a,l,u){return a<l?0:u*i.pow(l,u)/i.pow(a,u+1)},cdf:function(a,l,u){return a<l?0:1-i.pow(l/a,u)},inv:function(a,l,u){return l/i.pow(1-a,1/u)},mean:function(a,l){if(!(l<=1))return l*i.pow(a,l)/(l-1)},median:function(a,l){return a*(l*i.SQRT2)},mode:function(a){return a},variance:function(s,a){if(!(a<=2))return s*s*a/(i.pow(a-1,2)*(a-2))}}),t.extend(t.studentt,{pdf:function(a,l){return l=l>1e100?1e100:l,1/(i.sqrt(l)*t.betafn(.5,l/2))*i.pow(1+a*a/l,-((l+1)/2))},cdf:function(a,l){var u=l/2;return t.ibeta((a+i.sqrt(a*a+l))/(2*i.sqrt(a*a+l)),u,u)},inv:function(s,a){var l=t.ibetainv(2*i.min(s,1-s),.5*a,.5);return l=i.sqrt(a*(1-l)/l),s>.5?l:-l},mean:function(a){return a>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(a){return t.randn()*i.sqrt(a/(2*t.randg(a/2)))},variance:function(a){return a>2?a/(a-2):a>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(a,l,u){return a<0||l<0||u<0?0:u/l*i.pow(a/l,u-1)*i.exp(-i.pow(a/l,u))},cdf:function(a,l,u){return a<0?0:1-i.exp(-i.pow(a/l,u))},inv:function(s,a,l){return a*i.pow(-i.log(1-s),1/l)},mean:function(s,a){return s*t.gammafn(1+1/a)},median:function(a,l){return a*i.pow(i.log(2),1/l)},mode:function(a,l){return l<=1?0:a*i.pow((l-1)/l,1/l)},sample:function(a,l){return a*i.pow(-i.log(t._random_fn()),1/l)},variance:function(a,l){return a*a*t.gammafn(1+2/l)-i.pow(t.weibull.mean(a,l),2)}}),t.extend(t.uniform,{pdf:function(a,l,u){return a<l||a>u?0:1/(u-l)},cdf:function(a,l,u){return a<l?0:a<u?(a-l)/(u-l):1},inv:function(s,a,l){return a+s*(l-a)},mean:function(a,l){return .5*(a+l)},median:function(a,l){return t.mean(a,l)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(a,l){return a/2+l/2+(l/2-a/2)*(2*t._random_fn()-1)},variance:function(a,l){return i.pow(l-a,2)/12}});function o(s,a,l,u){for(var v=0,m=1,$=1,y=1,g=0,h=0,p;i.abs(($-h)/$)>u;)h=$,p=-(a+g)*(a+l+g)*s/(a+2*g)/(a+2*g+1),v=$+p*v,m=y+p*m,g=g+1,p=g*(l-g)*s/(a+2*g-1)/(a+2*g),$=v+p*$,y=m+p*y,v=v/y,m=m/y,$=$/y,y=1;return $/a}t.extend(t.binomial,{pdf:function(a,l,u){return u===0||u===1?l*u===a?1:0:t.combination(l,a)*i.pow(u,a)*i.pow(1-u,l-a)},cdf:function(a,l,u){var v,m=1e-10;if(a<0)return 0;if(a>=l)return 1;if(u<0||u>1||l<=0)return NaN;a=i.floor(a);var $=u,y=a+1,g=l-a,h=y+g,p=i.exp(t.gammaln(h)-t.gammaln(g)-t.gammaln(y)+y*i.log($)+g*i.log(1-$));return $<(y+1)/(h+2)?v=p*o($,y,g,m):v=1-p*o(1-$,g,y,m),i.round((1-v)*(1/m))/(1/m)}}),t.extend(t.negbin,{pdf:function(a,l,u){return a!==a>>>0?!1:a<0?0:t.combination(a+l-1,l-1)*i.pow(1-u,a)*i.pow(u,l)},cdf:function(a,l,u){var v=0,m=0;if(a<0)return 0;for(;m<=a;m++)v+=t.negbin.pdf(m,l,u);return v}}),t.extend(t.hypgeom,{pdf:function(a,l,u,v){if(a!==a|0)return!1;if(a<0||a<u-(l-v))return 0;if(a>v||a>u)return 0;if(u*2>l)return v*2>l?t.hypgeom.pdf(l-u-v+a,l,l-u,l-v):t.hypgeom.pdf(v-a,l,l-u,v);if(v*2>l)return t.hypgeom.pdf(u-a,l,u,l-v);if(u<v)return t.hypgeom.pdf(a,l,v,u);for(var m=1,$=0,y=0;y<a;y++){for(;m>1&&$<v;)m*=1-u/(l-$),$++;m*=(v-y)*(u-y)/((y+1)*(l-u-v+y+1))}for(;$<v;$++)m*=1-u/(l-$);return i.min(1,i.max(0,m))},cdf:function(a,l,u,v){if(a<0||a<u-(l-v))return 0;if(a>=v||a>=u)return 1;if(u*2>l)return v*2>l?t.hypgeom.cdf(l-u-v+a,l,l-u,l-v):1-t.hypgeom.cdf(v-a-1,l,l-u,v);if(v*2>l)return 1-t.hypgeom.cdf(u-a-1,l,u,l-v);if(u<v)return t.hypgeom.cdf(a,l,v,u);for(var m=1,$=1,y=0,g=0;g<a;g++){for(;m>1&&y<v;){var h=1-u/(l-y);$*=h,m*=h,y++}$*=(v-g)*(u-g)/((g+1)*(l-u-v+g+1)),m+=$}for(;y<v;y++)m*=1-u/(l-y);return i.min(1,i.max(0,m))}}),t.extend(t.poisson,{pdf:function(a,l){return l<0||a%1!==0||a<0?0:i.pow(l,a)*i.exp(-l)/t.factorial(a)},cdf:function(a,l){var u=[],v=0;if(a<0)return 0;for(;v<=a;v++)u.push(t.poisson.pdf(v,l));return t.sum(u)},mean:function(s){return s},variance:function(s){return s},sampleSmall:function(a){var l=1,u=0,v=i.exp(-a);do u++,l*=t._random_fn();while(l>v);return u-1},sampleLarge:function(a){var l=a,u,v,m,$,y,g,h,p,_,N;for($=i.sqrt(l),y=i.log(l),h=.931+2.53*$,g=-.059+.02483*h,p=1.1239+1.1328/(h-3.4),_=.9277-3.6224/(h-2);;){if(v=i.random()-.5,m=i.random(),N=.5-i.abs(v),u=i.floor((2*g/N+h)*v+l+.43),N>=.07&&m<=_)return u;if(!(u<0||N<.013&&m>N)&&i.log(m)+i.log(p)-i.log(g/(N*N)+h)<=-l+u*y-t.loggam(u+1))return u}},sample:function(a){return a<10?this.sampleSmall(a):this.sampleLarge(a)}}),t.extend(t.triangular,{pdf:function(a,l,u,v){return u<=l||v<l||v>u?NaN:a<l||a>u?0:a<v?2*(a-l)/((u-l)*(v-l)):a===v?2/(u-l):2*(u-a)/((u-l)*(u-v))},cdf:function(a,l,u,v){return u<=l||v<l||v>u?NaN:a<=l?0:a>=u?1:a<=v?i.pow(a-l,2)/((u-l)*(v-l)):1-i.pow(u-a,2)/((u-l)*(u-v))},inv:function(a,l,u,v){return u<=l||v<l||v>u?NaN:a<=(v-l)/(u-l)?l+(u-l)*i.sqrt(a*((v-l)/(u-l))):l+(u-l)*(1-i.sqrt((1-a)*(1-(v-l)/(u-l))))},mean:function(a,l,u){return(a+l+u)/3},median:function(a,l,u){if(u<=(a+l)/2)return l-i.sqrt((l-a)*(l-u))/i.sqrt(2);if(u>(a+l)/2)return a+i.sqrt((l-a)*(u-a))/i.sqrt(2)},mode:function(a,l,u){return u},sample:function(a,l,u){var v=t._random_fn();return v<(u-a)/(l-a)?a+i.sqrt(v*(l-a)*(u-a)):l-i.sqrt((1-v)*(l-a)*(l-u))},variance:function(a,l,u){return(a*a+l*l+u*u-a*l-a*u-l*u)/18}}),t.extend(t.arcsine,{pdf:function(a,l,u){return u<=l?NaN:a<=l||a>=u?0:2/i.PI*i.pow(i.pow(u-l,2)-i.pow(2*a-l-u,2),-.5)},cdf:function(a,l,u){return a<l?0:a<u?2/i.PI*i.asin(i.sqrt((a-l)/(u-l))):1},inv:function(s,a,l){return a+(.5-.5*i.cos(i.PI*s))*(l-a)},mean:function(a,l){return l<=a?NaN:(a+l)/2},median:function(a,l){return l<=a?NaN:(a+l)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(a,l){return(a+l)/2+(l-a)/2*i.sin(2*i.PI*t.uniform.sample(0,1))},variance:function(a,l){return l<=a?NaN:i.pow(l-a,2)/8}});function f(s){return s/i.abs(s)}t.extend(t.laplace,{pdf:function(a,l,u){return u<=0?0:i.exp(-i.abs(a-l)/u)/(2*u)},cdf:function(a,l,u){return u<=0?0:a<l?.5*i.exp((a-l)/u):1-.5*i.exp(-(a-l)/u)},mean:function(s){return s},median:function(s){return s},mode:function(s){return s},variance:function(s,a){return 2*a*a},sample:function(a,l){var u=t._random_fn()-.5;return a-l*f(u)*i.log(1-2*i.abs(u))}});function d(s,a,l){var u=12,v=6,m=-30,$=-50,y=60,g=8,h=3,p=2,_=3,N=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],w=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],I=s*.5;if(I>=g)return 1;var E=2*t.normal.cdf(I,0,1,1,0)-1;E>=i.exp($/l)?E=i.pow(E,l):E=0;var H;s>h?H=p:H=_;for(var k=I,S=(g-I)/H,yr=k+S,Z=0,j=l-1,Lr=1;Lr<=H;Lr++){for(var Wr=0,fr=.5*(yr+k),L=.5*(yr-k),F=1;F<=u;F++){var R,U;v<F?(R=u-F+1,U=N[R-1]):(R=F,U=-N[R-1]);var X=L*U,ar=fr+X,wr=ar*ar;if(wr>y)break;var B=2*t.normal.cdf(ar,0,1,1,0),M=2*t.normal.cdf(ar,s,1,1,0),pr=B*.5-M*.5;pr>=i.exp(m/j)&&(pr=w[R-1]*i.exp(-(.5*wr))*i.pow(pr,j),Wr+=pr)}Wr*=2*L*l/i.sqrt(2*i.PI),Z+=Wr,k=yr,yr+=S}return E+=Z,E<=i.exp(m/a)?0:(E=i.pow(E,a),E>=1?1:E)}function c(s,a,l){var u=.322232421088,v=.099348462606,m=-1,$=.588581570495,y=-.342242088547,g=.531103462366,h=-.204231210125,p=.10353775285,_=-453642210148e-16,N=.0038560700634,w=.8832,I=.2368,E=1.214,H=1.208,k=1.4142,S=120,yr=.5-.5*s,Z=i.sqrt(i.log(1/(yr*yr))),j=Z+((((Z*_+h)*Z+y)*Z+m)*Z+u)/((((Z*N+p)*Z+g)*Z+$)*Z+v);l<S&&(j+=(j*j*j+j)/l/4);var Lr=w-I*j;return l<S&&(Lr+=-E/l+H*j/l),j*(Lr*i.log(a-1)+k)}t.extend(t.tukey,{cdf:function(a,l,u){var v=1,m=l,$=16,y=8,g=-30,h=1e-14,p=100,_=800,N=5e3,w=25e3,I=1,E=.5,H=.25,k=.125,S=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],yr=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(a<=0)return 0;if(u<2||v<1||m<2)return NaN;if(!Number.isFinite(a))return 1;if(u>w)return d(a,v,m);var Z=u*.5,j=Z*i.log(u)-u*i.log(2)-t.gammaln(Z),Lr=Z-1,Wr=u*.25,fr;u<=p?fr=I:u<=_?fr=E:u<=N?fr=H:fr=k,j+=i.log(fr);for(var L=0,F=1;F<=50;F++){for(var R=0,U=(2*F-1)*fr,X=1;X<=$;X++){var ar,wr;y<X?(ar=X-y-1,wr=j+Lr*i.log(U+S[ar]*fr)-(S[ar]*fr+U)*Wr):(ar=X-1,wr=j+Lr*i.log(U-S[ar]*fr)+(S[ar]*fr-U)*Wr);var B;if(wr>=g){y<X?B=a*i.sqrt((S[ar]*fr+U)*.5):B=a*i.sqrt((-(S[ar]*fr)+U)*.5);var M=d(B,v,m),pr=M*yr[ar]*i.exp(wr);R+=pr}}if(F*fr>=1&&R<=h)break;L+=R}if(R>h)throw new Error("tukey.cdf failed to converge");return L>1&&(L=1),L},inv:function(s,a,l){var u=1,v=a,m=1e-4,$=50;if(l<2||u<1||v<2)return NaN;if(s<0||s>1)return NaN;if(s===0)return 0;if(s===1)return 1/0;var y=c(s,v,l),g=t.tukey.cdf(y,a,l)-s,h;g>0?h=i.max(0,y-1):h=y+1;for(var p=t.tukey.cdf(h,a,l)-s,_,N=1;N<$;N++){_=h-p*(h-y)/(p-g),g=p,y=h,_<0&&(_=0,p=-s),p=t.tukey.cdf(_,a,l)-s,h=_;var w=i.abs(h-y);if(w<m)return _}throw new Error("tukey.inv failed to converge")}})}(n,Math),function(t,i){var o=Array.prototype.push,f=t.utils.isArray;function d(c){return f(c)||c instanceof t}t.extend({add:function(s,a){return d(a)?(d(a[0])||(a=[a]),t.map(s,function(l,u,v){return l+a[u][v]})):t.map(s,function(l){return l+a})},subtract:function(s,a){return d(a)?(d(a[0])||(a=[a]),t.map(s,function(l,u,v){return l-a[u][v]||0})):t.map(s,function(l){return l-a})},divide:function(s,a){return d(a)?(d(a[0])||(a=[a]),t.multiply(s,t.inv(a))):t.map(s,function(l){return l/a})},multiply:function(s,a){var l,u,v,m,$,y,g,h;if(s.length===void 0&&a.length===void 0)return s*a;if($=s.length,y=s[0].length,g=t.zeros($,v=d(a)?a[0].length:y),h=0,d(a)){for(;h<v;h++)for(l=0;l<$;l++){for(m=0,u=0;u<y;u++)m+=s[l][u]*a[u][h];g[l][h]=m}return $===1&&h===1?g[0][0]:g}return t.map(s,function(p){return p*a})},outer:function(s,a){return t.multiply(s.map(function(l){return[l]}),[a])},dot:function(s,a){d(s[0])||(s=[s]),d(a[0])||(a=[a]);for(var l=s[0].length===1&&s.length!==1?t.transpose(s):s,u=a[0].length===1&&a.length!==1?t.transpose(a):a,v=[],m=0,$=l.length,y=l[0].length,g,h;m<$;m++){for(v[m]=[],g=0,h=0;h<y;h++)g+=l[m][h]*u[m][h];v[m]=g}return v.length===1?v[0]:v},pow:function(s,a){return t.map(s,function(l){return i.pow(l,a)})},exp:function(s){return t.map(s,function(a){return i.exp(a)})},log:function(s){return t.map(s,function(a){return i.log(a)})},abs:function(s){return t.map(s,function(a){return i.abs(a)})},norm:function(s,a){var l=0,u=0;for(isNaN(a)&&(a=2),d(s[0])&&(s=s[0]);u<s.length;u++)l+=i.pow(i.abs(s[u]),a);return i.pow(l,1/a)},angle:function(s,a){return i.acos(t.dot(s,a)/(t.norm(s)*t.norm(a)))},aug:function(s,a){var l=[],u;for(u=0;u<s.length;u++)l.push(s[u].slice());for(u=0;u<l.length;u++)o.apply(l[u],a[u]);return l},inv:function(s){for(var a=s.length,l=s[0].length,u=t.identity(a,l),v=t.gauss_jordan(s,u),m=[],$=0,y;$<a;$++)for(m[$]=[],y=l;y<v[0].length;y++)m[$][y-l]=v[$][y];return m},det:function c(s){if(s.length===2)return s[0][0]*s[1][1]-s[0][1]*s[1][0];for(var a=0,l=0;l<s.length;l++){for(var u=[],v=1;v<s.length;v++){u[v-1]=[];for(var m=0;m<s.length;m++)m<l?u[v-1][m]=s[v][m]:m>l&&(u[v-1][m-1]=s[v][m])}var $=l%2?-1:1;a+=c(u)*s[0][l]*$}return a},gauss_elimination:function(s,a){var l=0,u=0,v=s.length,m=s[0].length,$=1,y=0,g=[],h,p,_,N;for(s=t.aug(s,a),h=s[0].length,l=0;l<v;l++){for(p=s[l][l],u=l,N=l+1;N<m;N++)p<i.abs(s[N][l])&&(p=s[N][l],u=N);if(u!=l)for(N=0;N<h;N++)_=s[l][N],s[l][N]=s[u][N],s[u][N]=_;for(u=l+1;u<v;u++)for($=s[u][l]/s[l][l],N=l;N<h;N++)s[u][N]=s[u][N]-$*s[l][N]}for(l=v-1;l>=0;l--){for(y=0,u=l+1;u<=v-1;u++)y=y+g[u]*s[l][u];g[l]=(s[l][h-1]-y)/s[l][l]}return g},gauss_jordan:function(s,a){var l=t.aug(s,a),u=l.length,v=l[0].length,m=0,$,y,g;for(y=0;y<u;y++){var h=y;for(g=y+1;g<u;g++)i.abs(l[g][y])>i.abs(l[h][y])&&(h=g);var p=l[y];for(l[y]=l[h],l[h]=p,g=y+1;g<u;g++)for(m=l[g][y]/l[y][y],$=y;$<v;$++)l[g][$]-=l[y][$]*m}for(y=u-1;y>=0;y--){for(m=l[y][y],g=0;g<y;g++)for($=v-1;$>y-1;$--)l[g][$]-=l[y][$]*l[g][y]/m;for(l[y][y]/=m,$=u;$<v;$++)l[y][$]/=m}return l},triaUpSolve:function(s,a){var l=s[0].length,u=t.zeros(1,l)[0],v,m=!1;return a[0].length!=null&&(a=a.map(function($){return $[0]}),m=!0),t.arange(l-1,-1,-1).forEach(function($){v=t.arange($+1,l).map(function(y){return u[y]*s[$][y]}),u[$]=(a[$]-t.sum(v))/s[$][$]}),m?u.map(function($){return[$]}):u},triaLowSolve:function(s,a){var l=s[0].length,u=t.zeros(1,l)[0],v,m=!1;return a[0].length!=null&&(a=a.map(function($){return $[0]}),m=!0),t.arange(l).forEach(function($){v=t.arange($).map(function(y){return s[$][y]*u[y]}),u[$]=(a[$]-t.sum(v))/s[$][$]}),m?u.map(function($){return[$]}):u},lu:function(s){var a=s.length,l=t.identity(a),u=t.zeros(s.length,s[0].length),v;return t.arange(a).forEach(function(m){u[0][m]=s[0][m]}),t.arange(1,a).forEach(function(m){t.arange(m).forEach(function($){v=t.arange($).map(function(y){return l[m][y]*u[y][$]}),l[m][$]=(s[m][$]-t.sum(v))/u[$][$]}),t.arange(m,a).forEach(function($){v=t.arange(m).map(function(y){return l[m][y]*u[y][$]}),u[m][$]=s[v.length][$]-t.sum(v)})}),[l,u]},cholesky:function(s){var a=s.length,l=t.zeros(s.length,s[0].length),u;return t.arange(a).forEach(function(v){u=t.arange(v).map(function(m){return i.pow(l[v][m],2)}),l[v][v]=i.sqrt(s[v][v]-t.sum(u)),t.arange(v+1,a).forEach(function(m){u=t.arange(v).map(function($){return l[v][$]*l[m][$]}),l[m][v]=(s[v][m]-t.sum(u))/l[v][v]})}),l},gauss_jacobi:function(s,a,l,u){for(var v=0,m=0,$=s.length,y=[],g=[],h=[],p,_,N,w;v<$;v++)for(y[v]=[],g[v]=[],h[v]=[],m=0;m<$;m++)v>m?(y[v][m]=s[v][m],g[v][m]=h[v][m]=0):v<m?(g[v][m]=s[v][m],y[v][m]=h[v][m]=0):(h[v][m]=s[v][m],y[v][m]=g[v][m]=0);for(N=t.multiply(t.multiply(t.inv(h),t.add(y,g)),-1),_=t.multiply(t.inv(h),a),p=l,w=t.add(t.multiply(N,l),_),v=2;i.abs(t.norm(t.subtract(w,p)))>u;)p=w,w=t.add(t.multiply(N,p),_),v++;return w},gauss_seidel:function(s,a,l,u){for(var v=0,m=s.length,$=[],y=[],g=[],h,p,_,N,w;v<m;v++)for($[v]=[],y[v]=[],g[v]=[],h=0;h<m;h++)v>h?($[v][h]=s[v][h],y[v][h]=g[v][h]=0):v<h?(y[v][h]=s[v][h],$[v][h]=g[v][h]=0):(g[v][h]=s[v][h],$[v][h]=y[v][h]=0);for(N=t.multiply(t.multiply(t.inv(t.add(g,$)),y),-1),_=t.multiply(t.inv(t.add(g,$)),a),p=l,w=t.add(t.multiply(N,l),_),v=2;i.abs(t.norm(t.subtract(w,p)))>u;)p=w,w=t.add(t.multiply(N,p),_),v=v+1;return w},SOR:function(s,a,l,u,v){for(var m=0,$=s.length,y=[],g=[],h=[],p,_,N,w,I;m<$;m++)for(y[m]=[],g[m]=[],h[m]=[],p=0;p<$;p++)m>p?(y[m][p]=s[m][p],g[m][p]=h[m][p]=0):m<p?(g[m][p]=s[m][p],y[m][p]=h[m][p]=0):(h[m][p]=s[m][p],y[m][p]=g[m][p]=0);for(w=t.multiply(t.inv(t.add(h,t.multiply(y,v))),t.subtract(t.multiply(h,1-v),t.multiply(g,v))),N=t.multiply(t.multiply(t.inv(t.add(h,t.multiply(y,v))),a),v),_=l,I=t.add(t.multiply(w,l),N),m=2;i.abs(t.norm(t.subtract(I,_)))>u;)_=I,I=t.add(t.multiply(w,_),N),m++;return I},householder:function(s){for(var a=s.length,l=s[0].length,u=0,v=[],m=[],$,y,g,h,p;u<a-1;u++){for($=0,h=u+1;h<l;h++)$+=s[h][u]*s[h][u];for(p=s[u+1][u]>0?-1:1,$=p*i.sqrt($),y=i.sqrt(($*$-s[u+1][u]*$)/2),v=t.zeros(a,1),v[u+1][0]=(s[u+1][u]-$)/(2*y),g=u+2;g<a;g++)v[g][0]=s[g][u]/(2*y);m=t.subtract(t.identity(a,l),t.multiply(t.multiply(v,t.transpose(v)),2)),s=t.multiply(m,t.multiply(s,m))}return s},QR:function(){var c=t.sum,s=t.arange;function a(l){var u=l.length,v=l[0].length,m=t.zeros(v,v);l=t.copy(l);var $,y,g;for(y=0;y<v;y++){for(m[y][y]=i.sqrt(c(s(u).map(function(h){return l[h][y]*l[h][y]}))),$=0;$<u;$++)l[$][y]=l[$][y]/m[y][y];for(g=y+1;g<v;g++)for(m[y][g]=c(s(u).map(function(h){return l[h][y]*l[h][g]})),$=0;$<u;$++)l[$][g]=l[$][g]-l[$][y]*m[y][g]}return[l,m]}return a}(),lstsq:function(){function c(a){a=t.copy(a);var l=a.length,u=t.identity(l);return t.arange(l-1,-1,-1).forEach(function(v){t.sliceAssign(u,{row:v},t.divide(t.slice(u,{row:v}),a[v][v])),t.sliceAssign(a,{row:v},t.divide(t.slice(a,{row:v}),a[v][v])),t.arange(v).forEach(function(m){var $=t.multiply(a[m][v],-1),y=t.slice(a,{row:m}),g=t.multiply(t.slice(a,{row:v}),$);t.sliceAssign(a,{row:m},t.add(y,g));var h=t.slice(u,{row:m}),p=t.multiply(t.slice(u,{row:v}),$);t.sliceAssign(u,{row:m},t.add(h,p))})}),u}function s(a,l){var u=!1;l[0].length===void 0&&(l=l.map(function(w){return[w]}),u=!0);var v=t.QR(a),m=v[0],$=v[1],y=a[0].length,g=t.slice(m,{col:{end:y}}),h=t.slice($,{row:{end:y}}),p=c(h),_=t.transpose(g);_[0].length===void 0&&(_=[_]);var N=t.multiply(t.multiply(p,_),l);return N.length===void 0&&(N=[[N]]),u?N.map(function(w){return w[0]}):N}return s}(),jacobi:function(s){for(var a=1,l=s.length,u=t.identity(l,l),v=[],m,$,y,g,h,p,_,N;a===1;){for(p=s[0][1],g=0,h=1,$=0;$<l;$++)for(y=0;y<l;y++)$!=y&&p<i.abs(s[$][y])&&(p=i.abs(s[$][y]),g=$,h=y);for(s[g][g]===s[h][h]?_=s[g][h]>0?i.PI/4:-i.PI/4:_=i.atan(2*s[g][h]/(s[g][g]-s[h][h]))/2,N=t.identity(l,l),N[g][g]=i.cos(_),N[g][h]=-i.sin(_),N[h][g]=i.sin(_),N[h][h]=i.cos(_),u=t.multiply(u,N),m=t.multiply(t.multiply(t.inv(N),s),N),s=m,a=0,$=1;$<l;$++)for(y=1;y<l;y++)$!=y&&i.abs(s[$][y])>.001&&(a=1)}for($=0;$<l;$++)v.push(s[$][$]);return[u,v]},rungekutta:function(s,a,l,u,v,m){var $,y,g,h,p;if(m===2)for(;u<=l;)$=a*s(u,v),y=a*s(u+a,v+$),g=v+($+y)/2,v=g,u=u+a;if(m===4)for(;u<=l;)$=a*s(u,v),y=a*s(u+a/2,v+$/2),h=a*s(u+a/2,v+y/2),p=a*s(u+a,v+h),g=v+($+2*y+2*h+p)/6,v=g,u=u+a;return v},romberg:function(s,a,l,u){for(var v=0,m=(l-a)/2,$=[],y=[],g=[],h,p,_,N,w;v<u/2;){for(w=s(a),_=a,N=0;_<=l;_=_+m,N++)$[N]=_;for(h=$.length,_=1;_<h-1;_++)w+=(_%2!==0?4:2)*s($[_]);w=m/3*(w+s(l)),g[v]=w,m/=2,v++}for(p=g.length,h=1;p!==1;){for(_=0;_<p-1;_++)y[_]=(i.pow(4,h)*g[_+1]-g[_])/(i.pow(4,h)-1);p=y.length,g=y,y=[],h++}return g},richardson:function(s,a,l,u){function v(I,E){for(var H=0,k=I.length,S;H<k;H++)I[H]===E&&(S=H);return S}for(var m=i.abs(l-s[v(s,l)+1]),$=0,y=[],g=[],h,p,_,N,w;u>=m;)h=v(s,l+u),p=v(s,l),y[$]=(a[h]-2*a[p]+a[2*p-h])/(u*u),u/=2,$++;for(N=y.length,_=1;N!=1;){for(w=0;w<N-1;w++)g[w]=(i.pow(4,_)*y[w+1]-y[w])/(i.pow(4,_)-1);N=g.length,y=g,g=[],_++}return y},simpson:function(s,a,l,u){for(var v=(l-a)/u,m=s(a),$=[],y=a,g=0,h=1,p;y<=l;y=y+v,g++)$[g]=y;for(p=$.length;h<p-1;h++)m+=(h%2!==0?4:2)*s($[h]);return v/3*(m+s(l))},hermite:function(s,a,l,u){for(var v=s.length,m=0,$=0,y=[],g=[],h=[],p=[],_;$<v;$++){for(y[$]=1,_=0;_<v;_++)$!=_&&(y[$]*=(u-s[_])/(s[$]-s[_]));for(g[$]=0,_=0;_<v;_++)$!=_&&(g[$]+=1/(s[$]-s[_]));h[$]=(1-2*(u-s[$])*g[$])*(y[$]*y[$]),p[$]=(u-s[$])*(y[$]*y[$]),m+=h[$]*a[$]+p[$]*l[$]}return m},lagrange:function(s,a,l){for(var u=0,v=0,m,$,y=s.length;v<y;v++){for($=a[v],m=0;m<y;m++)v!=m&&($*=(l-s[m])/(s[v]-s[m]));u+=$}return u},cubic_spline:function(s,a,l){for(var u=s.length,v=0,m,$=[],y=[],g=[],h=[],p=[],_=[],N=[];v<u-1;v++)p[v]=s[v+1]-s[v];for(g[0]=0,v=1;v<u-1;v++)g[v]=3/p[v]*(a[v+1]-a[v])-3/p[v-1]*(a[v]-a[v-1]);for(v=1;v<u-1;v++)$[v]=[],y[v]=[],$[v][v-1]=p[v-1],$[v][v]=2*(p[v-1]+p[v]),$[v][v+1]=p[v],y[v][0]=g[v];for(h=t.multiply(t.inv($),y),m=0;m<u-1;m++)_[m]=(a[m+1]-a[m])/p[m]-p[m]*(h[m+1][0]+2*h[m][0])/3,N[m]=(h[m+1][0]-h[m][0])/(3*p[m]);for(m=0;m<u&&!(s[m]>l);m++);return m-=1,a[m]+(l-s[m])*_[m]+t.sq(l-s[m])*h[m]+(l-s[m])*t.sq(l-s[m])*N[m]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(s){var a=s.length,l=s[0].length,u=0,v,m,$=[],y=[],g=[],h=[],p=[],_=[],N=[],w=[],I=[],E=[];for(u=0;u<a;u++)$[u]=t.sum(s[u])/l;for(u=0;u<l;u++)for(N[u]=[],v=0;v<a;v++)N[u][v]=s[v][u]-$[v];for(N=t.transpose(N),u=0;u<a;u++)for(w[u]=[],v=0;v<a;v++)w[u][v]=t.dot([N[u]],[N[v]])/(l-1);for(g=t.jacobi(w),I=g[0],y=g[1],E=t.transpose(I),u=0;u<y.length;u++)for(v=u;v<y.length;v++)y[u]<y[v]&&(m=y[u],y[u]=y[v],y[v]=m,h=E[u],E[u]=E[v],E[v]=h);for(_=t.transpose(N),u=0;u<a;u++)for(p[u]=[],v=0;v<_.length;v++)p[u][v]=t.dot([E[u]],[_[v]]);return[s,y,E,p]}}),function(c){for(var s=0;s<c.length;s++)(function(a){t.fn[a]=function(l,u){var v=this;return u?(setTimeout(function(){u.call(v,t.fn[a].call(v,l))},15),this):typeof t[a](this,l)=="number"?t[a](this,l):t(t[a](this,l))}})(c[s])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(n,Math),function(t,i){var o=[].slice,f=t.utils.isNumber,d=t.utils.isArray;t.extend({zscore:function(){var a=o.call(arguments);return f(a[1])?(a[0]-a[1])/a[2]:(a[0]-t.mean(a[1]))/t.stdev(a[1],a[2])},ztest:function(){var a=o.call(arguments),l;return d(a[1])?(l=t.zscore(a[0],a[1],a[3]),a[2]===1?t.normal.cdf(-i.abs(l),0,1):t.normal.cdf(-i.abs(l),0,1)*2):a.length>2?(l=t.zscore(a[0],a[1],a[2]),a[3]===1?t.normal.cdf(-i.abs(l),0,1):t.normal.cdf(-i.abs(l),0,1)*2):(l=a[0],a[1]===1?t.normal.cdf(-i.abs(l),0,1):t.normal.cdf(-i.abs(l),0,1)*2)}}),t.extend(t.fn,{zscore:function(a,l){return(a-this.mean())/this.stdev(l)},ztest:function(a,l,u){var v=i.abs(this.zscore(a,u));return l===1?t.normal.cdf(-v,0,1):t.normal.cdf(-v,0,1)*2}}),t.extend({tscore:function(){var a=o.call(arguments);return a.length===4?(a[0]-a[1])/(a[2]/i.sqrt(a[3])):(a[0]-t.mean(a[1]))/(t.stdev(a[1],!0)/i.sqrt(a[1].length))},ttest:function(){var a=o.call(arguments),l;return a.length===5?(l=i.abs(t.tscore(a[0],a[1],a[2],a[3])),a[4]===1?t.studentt.cdf(-l,a[3]-1):t.studentt.cdf(-l,a[3]-1)*2):f(a[1])?(l=i.abs(a[0]),a[2]==1?t.studentt.cdf(-l,a[1]-1):t.studentt.cdf(-l,a[1]-1)*2):(l=i.abs(t.tscore(a[0],a[1])),a[2]==1?t.studentt.cdf(-l,a[1].length-1):t.studentt.cdf(-l,a[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(a){return(a-this.mean())/(this.stdev(!0)/i.sqrt(this.cols()))},ttest:function(a,l){return l===1?1-t.studentt.cdf(i.abs(this.tscore(a)),this.cols()-1):t.studentt.cdf(-i.abs(this.tscore(a)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var a=o.call(arguments),l,u,v,m,$,y,g,h;if(a.length===1){for($=new Array(a[0].length),g=0;g<a[0].length;g++)$[g]=a[0][g];a=$}for(u=new Array,g=0;g<a.length;g++)u=u.concat(a[g]);for(v=t.mean(u),l=0,g=0;g<a.length;g++)l=l+a[g].length*i.pow(t.mean(a[g])-v,2);for(l/=a.length-1,y=0,g=0;g<a.length;g++)for(m=t.mean(a[g]),h=0;h<a[g].length;h++)y+=i.pow(a[g][h]-m,2);return y/=u.length-a.length,l/y},anovaftest:function(){var a=o.call(arguments),l,u,v,m;if(f(a[0]))return 1-t.centralF.cdf(a[0],a[1],a[2]);var $=t.anovafscore(a);for(l=a.length-1,v=0,m=0;m<a.length;m++)v=v+a[m].length;return u=v-l-1,1-t.centralF.cdf($,l,u)},ftest:function(a,l,u){return 1-t.centralF.cdf(a,l,u)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var a=0,l;for(l=0;l<this.length;l++)a=a+this[l].length;return t.ftest(this.anovafscore(),this.length-1,a-this.length)}}),t.extend({qscore:function(){var a=o.call(arguments),l,u,v,m,$;return f(a[0])?(l=a[0],u=a[1],v=a[2],m=a[3],$=a[4]):(l=t.mean(a[0]),u=t.mean(a[1]),v=a[0].length,m=a[1].length,$=a[2]),i.abs(l-u)/($*i.sqrt((1/v+1/m)/2))},qtest:function(){var a=o.call(arguments),l;a.length===3?(l=a[0],a=a.slice(1)):a.length===7?(l=t.qscore(a[0],a[1],a[2],a[3],a[4]),a=a.slice(5)):(l=t.qscore(a[0],a[1],a[2]),a=a.slice(3));var u=a[0],v=a[1];return 1-t.tukey.cdf(l,v,u-v)},tukeyhsd:function(a){for(var l=t.pooledstdev(a),u=a.map(function(h){return t.mean(h)}),v=a.reduce(function(h,p){return h+p.length},0),m=[],$=0;$<a.length;++$)for(var y=$+1;y<a.length;++y){var g=t.qtest(u[$],u[y],a[$].length,a[y].length,l,v,a.length);m.push([[$,y],g])}return m}}),t.extend({normalci:function(){var a=o.call(arguments),l=new Array(2),u;return a.length===4?u=i.abs(t.normal.inv(a[1]/2,0,1)*a[2]/i.sqrt(a[3])):u=i.abs(t.normal.inv(a[1]/2,0,1)*t.stdev(a[2])/i.sqrt(a[2].length)),l[0]=a[0]-u,l[1]=a[0]+u,l},tci:function(){var a=o.call(arguments),l=new Array(2),u;return a.length===4?u=i.abs(t.studentt.inv(a[1]/2,a[3]-1)*a[2]/i.sqrt(a[3])):u=i.abs(t.studentt.inv(a[1]/2,a[2].length-1)*t.stdev(a[2],!0)/i.sqrt(a[2].length)),l[0]=a[0]-u,l[1]=a[0]+u,l},significant:function(a,l){return a<l}}),t.extend(t.fn,{normalci:function(a,l){return t.normalci(a,l,this.toArray())},tci:function(a,l){return t.tci(a,l,this.toArray())}});function c(s,a,l,u){if(s>1||l>1||s<=0||l<=0)throw new Error("Proportions should be greater than 0 and less than 1");var v=(s*a+l*u)/(a+u),m=i.sqrt(v*(1-v)*(1/a+1/u));return(s-l)/m}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(a,l,u,v){var m=c(a,l,u,v);return t.ztest(m,1)},twoSidedDifferenceOfProportions:function(a,l,u,v){var m=c(a,l,u,v);return t.ztest(m,2)}})}(n,Math),n.models=function(){function t(c){var s=c[0].length,a=n.arange(s).map(function(l){var u=n.arange(s).filter(function(v){return v!==l});return i(n.col(c,l).map(function(v){return v[0]}),n.col(c,u))});return a}function i(c,s){var a=c.length,l=s[0].length-1,u=a-l-1,v=n.lstsq(s,c),m=n.multiply(s,v.map(function(N){return[N]})).map(function(N){return N[0]}),$=n.subtract(c,m),y=n.mean(c),g=n.sum(m.map(function(N){return Math.pow(N-y,2)})),h=n.sum(c.map(function(N,w){return Math.pow(N-m[w],2)})),p=g+h,_=g/p;return{exog:s,endog:c,nobs:a,df_model:l,df_resid:u,coef:v,predict:m,resid:$,ybar:y,SST:p,SSE:g,SSR:h,R2:_}}function o(c){var s=t(c.exog),a=Math.sqrt(c.SSR/c.df_resid),l=s.map(function(y){var g=y.SST,h=y.R2;return a/Math.sqrt(g*(1-h))}),u=c.coef.map(function(y,g){return(y-0)/l[g]}),v=u.map(function(y){var g=n.studentt.cdf(y,c.df_resid);return(g>.5?1-g:g)*2}),m=n.studentt.inv(.975,c.df_resid),$=c.coef.map(function(y,g){var h=m*l[g];return[y-h,y+h]});return{se:l,t:u,p:v,sigmaHat:a,interval95:$}}function f(c){var s=c.R2/c.df_model/((1-c.R2)/c.df_resid),a=function(u,v,m){return n.beta.cdf(u/(m/v+u),v/2,m/2)},l=1-a(s,c.df_model,c.df_resid);return{F_statistic:s,pvalue:l}}function d(c,s){var a=i(c,s),l=o(a),u=f(a),v=1-(1-a.R2)*((a.nobs-1)/a.df_resid);return a.t=l,a.f=u,a.adjust_R2=v,a}return{ols:d}}(),n.extend({buildxmatrix:function(){for(var i=new Array(arguments.length),o=0;o<arguments.length;o++){var f=[1];i[o]=f.concat(arguments[o])}return n(i)},builddxmatrix:function(){for(var i=new Array(arguments[0].length),o=0;o<arguments[0].length;o++){var f=[1];i[o]=f.concat(arguments[0][o])}return n(i)},buildjxmatrix:function(i){for(var o=new Array(i.length),f=0;f<i.length;f++)o[f]=i[f];return n.builddxmatrix(o)},buildymatrix:function(i){return n(i).transpose()},buildjymatrix:function(i){return i.transpose()},matrixmult:function(i,o){var f,d,c,s,a;if(i.cols()==o.rows()){if(o.rows()>1){for(s=[],f=0;f<i.rows();f++)for(s[f]=[],d=0;d<o.cols();d++){for(a=0,c=0;c<i.cols();c++)a+=i.toArray()[f][c]*o.toArray()[c][d];s[f][d]=a}return n(s)}for(s=[],f=0;f<i.rows();f++)for(s[f]=[],d=0;d<o.cols();d++){for(a=0,c=0;c<i.cols();c++)a+=i.toArray()[f][c]*o.toArray()[d];s[f][d]=a}return n(s)}},regress:function(i,o){var f=n.xtranspxinv(i),d=i.transpose(),c=n.matrixmult(n(f),d);return n.matrixmult(c,o)},regresst:function(i,o,f){var d=n.regress(i,o),c={};c.anova={};var s=n.jMatYBar(i,d);c.yBar=s;var a=o.mean();c.anova.residuals=n.residuals(o,s),c.anova.ssr=n.ssr(s,a),c.anova.msr=c.anova.ssr/(i[0].length-1),c.anova.sse=n.sse(o,s),c.anova.mse=c.anova.sse/(o.length-(i[0].length-1)-1),c.anova.sst=n.sst(o,a),c.anova.mst=c.anova.sst/(o.length-1),c.anova.r2=1-c.anova.sse/c.anova.sst,c.anova.r2<0&&(c.anova.r2=0),c.anova.fratio=c.anova.msr/c.anova.mse,c.anova.pvalue=n.anovaftest(c.anova.fratio,i[0].length-1,o.length-(i[0].length-1)-1),c.anova.rmse=Math.sqrt(c.anova.mse),c.anova.r2adj=1-c.anova.mse/c.anova.mst,c.anova.r2adj<0&&(c.anova.r2adj=0),c.stats=new Array(i[0].length);for(var l=n.xtranspxinv(i),u,v,m,$=0;$<d.length;$++)u=Math.sqrt(c.anova.mse*Math.abs(l[$][$])),v=Math.abs(d[$]/u),m=n.ttest(v,o.length-i[0].length-1,f),c.stats[$]=[d[$],u,v,m];return c.regress=d,c},xtranspx:function(i){return n.matrixmult(i.transpose(),i)},xtranspxinv:function(i){var o=n.matrixmult(i.transpose(),i),f=n.inv(o);return f},jMatYBar:function(i,o){var f=n.matrixmult(i,o);return new n(f)},residuals:function(i,o){return n.matrixsubtract(i,o)},ssr:function(i,o){for(var f=0,d=0;d<i.length;d++)f+=Math.pow(i[d]-o,2);return f},sse:function(i,o){for(var f=0,d=0;d<i.length;d++)f+=Math.pow(i[d]-o[d],2);return f},sst:function(i,o){for(var f=0,d=0;d<i.length;d++)f+=Math.pow(i[d]-o,2);return f},matrixsubtract:function(i,o){for(var f=new Array(i.length),d=0;d<i.length;d++){f[d]=new Array(i[d].length);for(var c=0;c<i[d].length;c++)f[d][c]=i[d][c]-o[d][c]}return n(f)}}),n.jStat=n,n})})(Z5);var Rl=Z5.exports;/**
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
*/var C$=typeof Object.defineProperty=="function"?Object.defineProperty:null,R$=C$;/**
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
*/var S$=R$;function G$(){try{return S$({},"x",{}),!0}catch{return!1}}var D$=G$;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B$=Object.defineProperty,W$=B$;/**
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
*/function U$(r){return typeof r=="number"}var J5=U$;/**
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
*/function z$(r){return r[0]==="-"}function fc(r){var e="",n;for(n=0;n<r;n++)e+="0";return e}function V$(r,e,n){var t=!1,i=e-r.length;return i<0||(z$(r)&&(t=!0,r=r.substr(1)),r=n?r+fc(i):fc(i)+r,t&&(r="-"+r)),r}var j5=V$;/**
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
*/var q$=J5,vc=j5,X$=String.prototype.toLowerCase,cc=String.prototype.toUpperCase;function Q$(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!q$(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&(r.specifier==="u"||e!==10)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=vc(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),!t&&!r.precision?n="":r.precision&&(n=vc(n,r.precision,r.padRight)),r.sign&&(n=r.sign+n)),e===16&&(r.alternate&&(n="0x"+n),n=r.specifier===cc.call(r.specifier)?cc.call(n):X$.call(n)),e===8&&r.alternate&&n.charAt(0)!=="0"&&(n="0"+n),n}var K$=Q$;/**
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
*/function b$(r){return typeof r=="string"}var M$=b$;/**
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
*/var Y$=J5,Z$=Math.abs,J$=String.prototype.toLowerCase,dc=String.prototype.toUpperCase,Xn=String.prototype.replace,j$=/e\+(\d)$/,x$=/e-(\d)$/,rg=/^(\d+)$/,eg=/^(\d+)e/,ng=/\.0$/,tg=/\.0*e/,ig=/(\..*[^0])0*e/;function ag(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Y$(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Z$(t)<1e-4?(e=r.precision,e>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Xn.call(n,ig,"$1e"),n=Xn.call(n,tg,"e"),n=Xn.call(n,ng,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Xn.call(n,j$,"e+0$1"),n=Xn.call(n,x$,"e-0$1"),r.alternate&&(n=Xn.call(n,rg,"$1."),n=Xn.call(n,eg,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===dc.call(r.specifier)?dc.call(n):J$.call(n),n}var og=ag;/**
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
*/function pc(r){var e="",n;for(n=0;n<r;n++)e+=" ";return e}function lg(r,e,n){var t=e-r.length;return t<0||(r=n?r+pc(t):pc(t)+r),r}var ug=lg;/**
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
*/var sg=K$,fg=M$,vg=og,cg=ug,dg=j5,pg=String.fromCharCode,mg=Array.isArray;function za(r){return r!==r}function $g(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function gg(r){var e,n,t,i,o,f,d,c,s;if(!mg(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",d=1,c=0;c<r.length;c++)if(t=r[c],fg(t))f+=t;else{if(e=t.precision!==void 0,t=$g(t),!t.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(d=t.mapping),n=t.flags,s=0;s<n.length;s++)switch(i=n.charAt(s),i){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if(t.width==="*"){if(t.width=parseInt(arguments[d],10),d+=1,za(t.width))throw new TypeError("the argument for * width at position "+d+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&t.precision==="*"){if(t.precision=parseInt(arguments[d],10),d+=1,za(t.precision))throw new TypeError("the argument for * precision at position "+d+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[d],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=sg(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!za(t.arg)){if(o=parseInt(t.arg,10),o<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=za(o)?String(t.arg):pg(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=vg(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=dg(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=cg(t.arg,t.width,t.padRight)),f+=t.arg||"",d+=1}return f}var hg=gg;/**
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
*/var yg=hg,_g=yg;/**
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
*/var Va=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ng(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function wg(r){var e,n,t,i;for(n=[],i=0,t=Va.exec(r);t;)e=r.slice(i,Va.lastIndex-t[0].length),e.length&&n.push(e),n.push(Ng(t)),i=Va.lastIndex,t=Va.exec(r);return e=r.slice(i),e.length&&n.push(e),n}var Ig=wg;/**
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
*/var Eg=Ig,Pg=Eg;/**
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
*/function Ag(r){return typeof r=="string"}var Og=Ag;/**
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
*/var kg=_g,Lg=Pg,Hg=Og;function x5(r){var e,n;if(!Hg(r))throw new TypeError(x5("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Lg(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return kg.apply(null,e)}var Tg=x5;/**
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
*/var Fg=Tg,Vn=Fg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc=Vn,Mt=Object.prototype,$c=Mt.toString,gc=Mt.__defineGetter__,hc=Mt.__defineSetter__,Cg=Mt.__lookupGetter__,Rg=Mt.__lookupSetter__;function Sg(r,e,n){var t,i,o,f;if(typeof r!="object"||r===null||$c.call(r)==="[object Array]")throw new TypeError(mc("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof n!="object"||n===null||$c.call(n)==="[object Array]")throw new TypeError(mc("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if(i="value"in n,i&&(Cg.call(r,e)||Rg.call(r,e)?(t=r.__proto__,r.__proto__=Mt,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),o="get"in n,f="set"in n,i&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&gc&&gc.call(r,e,n.get),f&&hc&&hc.call(r,e,n.set),r}var Gg=Sg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dg=D$,Bg=W$,Wg=Gg,$f;Dg()?$f=Bg:$f=Wg;var rm=$f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ug=rm;function zg(r,e,n){Ug(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Vg=zg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qg=Vg,G=qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xg(r){return typeof r=="number"}var em=Xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Qg(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}var Kg=Qg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bg=Kg,Mg=bg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yg=Mg,Zg=Yg();function Jg(){return Zg&&typeof Symbol.toStringTag=="symbol"}var jg=Jg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xg=jg,Yo=xg;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rh=Object.prototype.toString,nm=rh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eh=nm;function nh(r){return eh.call(r)}var th=nh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ih=Object.prototype.hasOwnProperty;function ah(r,e){return r==null?!1:ih.call(r,e)}var oh=ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lh=oh,Zo=lh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uh=typeof Symbol=="function"?Symbol:void 0,sh=uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fh=sh,vh=fh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc=vh,ch=typeof yc=="function"?yc.toStringTag:"",dh=ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph=Zo,di=dh,Sl=nm;function mh(r){var e,n,t;if(r==null)return Sl.call(r);n=r[di],e=ph(r,di);try{r[di]=void 0}catch{return Sl.call(r)}return t=Sl.call(r),e?r[di]=n:delete r[di],t}var $h=mh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gh=Yo,hh=th,yh=$h,gf;gh()?gf=yh:gf=hh;var ge=gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _h=Number;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nh=_h,F1=Nh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wh=F1,Ih=wh.prototype.toString,Eh=Ih;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ph=Eh;function Ah(r){try{return Ph.call(r),!0}catch{return!1}}var Oh=Ah;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kh=Yo,Lh=ge,Hh=F1,Th=Oh,Fh=kh();function Ch(r){return typeof r=="object"?r instanceof Hh?!0:Fh?Th(r):Lh(r)==="[object Number]":!1}var tm=Ch;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rh=em,Sh=tm;function Gh(r){return Rh(r)||Sh(r)}var Dh=Gh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im=G,C1=Dh,Bh=em,Wh=tm;im(C1,"isPrimitive",Bh);im(C1,"isObject",Wh);var ut=C1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uh=Number.POSITIVE_INFINITY,C=Uh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zh=F1,Vh=zh.NEGATIVE_INFINITY,V=Vh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qh=Math.floor,Xh=qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh=Xh,Br=Qh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kh=Br;function bh(r){return Kh(r)===r}var Mh=bh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yh=Mh,gr=Yh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zh=C,Jh=V,jh=gr;function xh(r){return r<Zh&&r>Jh&&jh(r)}var am=xh;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ry=ut.isPrimitive,ey=am;function ny(r){return ry(r)&&ey(r)}var om=ny;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ty=ut.isObject,iy=am;function ay(r){return ty(r)&&iy(r.valueOf())}var lm=ay;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oy=om,ly=lm;function uy(r){return oy(r)||ly(r)}var sy=uy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um=G,R1=sy,fy=om,vy=lm;um(R1,"isPrimitive",fy);um(R1,"isObject",vy);var Jo=R1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cy=Jo.isPrimitive;function dy(r){return cy(r)&&r>=0}var sm=dy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var py=Jo.isObject;function my(r){return py(r)&&r.valueOf()>=0}var fm=my;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $y=sm,gy=fm;function hy(r){return $y(r)||gy(r)}var yy=hy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vm=G,S1=yy,_y=sm,Ny=fm;vm(S1,"isPrimitive",_y);vm(S1,"isObject",Ny);var wy=S1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iy=9007199254740991,Ey=Iy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Py=wy.isPrimitive,Ay=Ey;function Oy(r){return r!==null&&typeof r=="object"&&Py(r.length)&&r.length<=Ay&&typeof r.BYTES_PER_ELEMENT=="number"&&typeof r.byteOffset=="number"&&typeof r.byteLength=="number"}var ky=Oy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ly=ky,Hy=Ly;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ty=4294967295,Fy=Ty;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cy=gr,Ry=Fy;function Sy(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&Cy(r.length)&&r.length>=0&&r.length<=Ry}var Gy=Sy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dy=Gy,By=Dy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wy=By,Uy=Vn;function zy(r){if(typeof r!="function")throw new TypeError(Uy("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(n){var t,i;if(!Wy(n)||(t=n.length,t===0))return!1;for(i=0;i<t;i++)if(r(n[i])===!1)return!1;return!0}}var Vy=zy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qy=Vy,Xy=qy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cm=G,G1=Xy,D1=ut,Qy=G1(D1.isPrimitive),Ky=G1(D1.isObject),B1=G1(D1);cm(B1,"primitives",Qy);cm(B1,"objects",Ky);var by=B1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var My=rm;function Yy(r,e,n){My(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}var Zy=Yy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jy=Zy,jy=Jy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xy=/./,r_=xy;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function e_(r){return typeof r=="boolean"}var dm=e_;/**
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
*/var n_=Boolean,t_=n_;/**
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
*/var i_=t_,a_=i_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o_=Boolean.prototype.toString,l_=o_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u_=l_;function s_(r){try{return u_.call(r),!0}catch{return!1}}var f_=s_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v_=Yo,c_=ge,d_=a_,p_=f_,m_=v_();function $_(r){return typeof r=="object"?r instanceof d_?!0:m_?p_(r):c_(r)==="[object Boolean]":!1}var pm=$_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g_=dm,h_=pm;function y_(r){return g_(r)||h_(r)}var __=y_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mm=G,W1=__,N_=dm,w_=pm;mm(W1,"isPrimitive",N_);mm(W1,"isObject",w_);var U1=W1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function I_(){return new Function("return this;")()}var E_=I_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P_=typeof self=="object"?self:null,A_=P_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O_=typeof window=="object"?window:null,k_=O_;/**
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
*/var L_=typeof globalThis=="object"?globalThis:null,H_=L_;/**
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
*/var T_=U1.isPrimitive,F_=Vn,C_=E_,_c=A_,Nc=k_,wc=H_;function R_(r){if(arguments.length){if(!T_(r))throw new TypeError(F_("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return C_()}if(wc)return wc;if(_c)return _c;if(Nc)return Nc;throw new Error("unexpected error. Unable to resolve global object.")}var S_=R_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G_=S_,Ic=G_(),D_=Ic.document&&Ic.document.childNodes,B_=D_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W_=Int8Array,U_=W_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z_=r_,V_=B_,q_=U_;function X_(){return typeof z_=="function"||typeof q_=="object"||typeof V_=="function"}var Q_=X_;/**
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
*/function K_(){return/^\s*function\s*([^(]*)/i}var $m=K_;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b_=$m,M_=b_(),Y_=M_;/**
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
*/var Z_=G,gm=$m,J_=Y_;Z_(gm,"REGEXP",J_);var j_=gm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x_=ge,hf;function rN(r){return x_(r)==="[object Array]"}Array.isArray?hf=Array.isArray:hf=rN;var eN=hf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nN=eN,hm=nN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tN=hm,iN=Vn;function aN(r){if(typeof r!="function")throw new TypeError(iN("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(n){var t,i;if(!tN(n)||(t=n.length,t===0))return!1;for(i=0;i<t;i++)if(r(n[i])===!1)return!1;return!0}}var oN=aN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lN=oN,uN=lN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sN(r){return r!==null&&typeof r=="object"}var fN=sN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vN=G,cN=uN,z1=fN,dN=cN(z1);vN(z1,"isObjectLikeArray",dN);var pN=z1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mN=pN;function $N(r){return mN(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}var gN=$N;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hN=gN,yN=hN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _N=ge,NN=j_.REGEXP,wN=yN;function IN(r){var e,n,t;if(n=_N(r).slice(8,-1),(n==="Object"||n==="Error")&&r.constructor){if(t=r.constructor,typeof t.name=="string")return t.name;if(e=NN.exec(t.toString()),e)return e[1]}return wN(r)?"Buffer":n}var EN=IN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PN=EN,ym=PN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AN=ym;function ON(r){var e;return r===null?"null":(e=typeof r,e==="object"?AN(r).toLowerCase():e)}var kN=ON;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LN=ym;function HN(r){return LN(r).toLowerCase()}var TN=HN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FN=Q_,CN=kN,RN=TN,SN=FN()?RN:CN,GN=SN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DN=GN;function BN(r){return DN(r)==="function"}var WN=BN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UN=WN,V1=UN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zN(r){return typeof r=="string"}var _m=zN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VN=String.prototype.valueOf,qN=VN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XN=qN;function QN(r){try{return XN.call(r),!0}catch{return!1}}var KN=QN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bN=Yo,MN=ge,YN=KN,ZN=bN();function JN(r){return typeof r=="object"?r instanceof String?!0:ZN?YN(r):MN(r)==="[object String]":!1}var Nm=JN;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jN=_m,xN=Nm;function rw(r){return jN(r)||xN(r)}var ew=rw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm=G,q1=ew,nw=_m,tw=Nm;wm(q1,"isPrimitive",nw);wm(q1,"isObject",tw);var Im=q1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iw(r){return r!==r}var aw=iw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ow=aw,O=ow;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lw=ut.isPrimitive,uw=O;function sw(r){return lw(r)&&uw(r)}var Em=sw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fw=ut.isObject,vw=O;function cw(r){return fw(r)&&vw(r.valueOf())}var Pm=cw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dw=Em,pw=Pm;function mw(r){return dw(r)||pw(r)}var $w=mw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am=G,X1=$w,gw=Em,hw=Pm;Am(X1,"isPrimitive",gw);Am(X1,"isObject",hw);var Om=X1;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yw=C;function _w(r){return r===0&&1/r===yw}var Nw=_w;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ww=Nw,jo=ww;/**
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
*/var Iw=O,Ew=jo;function Pw(r,e,n){var t,i,o,f;if(r<=0)return NaN;if(r===1||n===0)return e[0];for(n<0?i=(1-r)*n:i=0,t=e[i],f=1;f<r;f++){if(i+=n,o=e[i],Iw(o))return o;(o>t||o===t&&Ew(o))&&(t=o)}return t}var Aw=Pw;/**
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
*/var Ow=O,kw=jo;function Lw(r,e,n,t){var i,o,f,d;if(r<=0)return NaN;if(r===1||n===0)return e[t];for(o=t,i=e[o],d=1;d<r;d++){if(o+=n,f=e[o],Ow(f))return f;(f>i||f===i&&kw(f))&&(i=f)}return i}var Hw=Lw;/**
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
*/var Tw=G,km=Aw,Fw=Hw;Tw(km,"ndarray",Fw);var Cw=km;/**
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
*/var Rw=Cw,Sw=Rw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gw=C,Dw=V;function Bw(r){return r===Gw||r===Dw}var Ww=Bw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uw=Ww,Qr=Uw;/**
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
*/function zw(r){return Math.abs(r)}var Vw=zw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qw=Vw,D=qw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xw=ge,Qw=typeof Uint32Array=="function";function Kw(r){return Qw&&r instanceof Uint32Array||Xw(r)==="[object Uint32Array]"}var bw=Kw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mw=bw,Yw=Mw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zw=4294967295,Jw=Zw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jw=typeof Uint32Array=="function"?Uint32Array:null,xw=jw;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rI=Yw,Gl=Jw,Ec=xw;function eI(){var r,e;if(typeof Ec!="function")return!1;try{e=[1,3.14,-3.14,Gl+1,Gl+2],e=new Ec(e),r=rI(e)&&e[0]===1&&e[1]===3&&e[2]===Gl-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}var nI=eI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tI=nI,iI=tI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aI=typeof Uint32Array=="function"?Uint32Array:void 0,oI=aI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lI(){throw new Error("not implemented")}var uI=lI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sI=iI,fI=oI,vI=uI,yf;sI()?yf=fI:yf=vI;var Yt=yf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cI=ge,dI=typeof Float64Array=="function";function pI(r){return dI&&r instanceof Float64Array||cI(r)==="[object Float64Array]"}var mI=pI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $I=mI,gI=$I;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hI=typeof Float64Array=="function"?Float64Array:null,yI=hI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _I=gI,Pc=yI;function NI(){var r,e;if(typeof Pc!="function")return!1;try{e=new Pc([1,3.14,-3.14,NaN]),r=_I(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}var wI=NI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var II=wI,EI=II;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var PI=typeof Float64Array=="function"?Float64Array:void 0,AI=PI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function OI(){throw new Error("not implemented")}var kI=OI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LI=EI,HI=AI,TI=kI,_f;LI()?_f=HI:_f=TI;var st=_f;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FI=ge,CI=typeof Uint8Array=="function";function RI(r){return CI&&r instanceof Uint8Array||FI(r)==="[object Uint8Array]"}var SI=RI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GI=SI,DI=GI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BI=255,WI=BI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UI=typeof Uint8Array=="function"?Uint8Array:null,zI=UI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VI=DI,Dl=WI,Ac=zI;function qI(){var r,e;if(typeof Ac!="function")return!1;try{e=[1,3.14,-3.14,Dl+1,Dl+2],e=new Ac(e),r=VI(e)&&e[0]===1&&e[1]===3&&e[2]===Dl-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}var XI=qI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QI=XI,KI=QI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bI=typeof Uint8Array=="function"?Uint8Array:void 0,MI=bI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function YI(){throw new Error("not implemented")}var ZI=YI;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JI=KI,jI=MI,xI=ZI,Nf;JI()?Nf=jI:Nf=xI;var rE=Nf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eE=ge,nE=typeof Uint16Array=="function";function tE(r){return nE&&r instanceof Uint16Array||eE(r)==="[object Uint16Array]"}var iE=tE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aE=iE,oE=aE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lE=65535,uE=lE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sE=typeof Uint16Array=="function"?Uint16Array:null,fE=sE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vE=oE,Bl=uE,Oc=fE;function cE(){var r,e;if(typeof Oc!="function")return!1;try{e=[1,3.14,-3.14,Bl+1,Bl+2],e=new Oc(e),r=vE(e)&&e[0]===1&&e[1]===3&&e[2]===Bl-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}var dE=cE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pE=dE,mE=pE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $E=typeof Uint16Array=="function"?Uint16Array:void 0,gE=$E;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function hE(){throw new Error("not implemented")}var yE=hE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _E=mE,NE=gE,wE=yE,wf;_E()?wf=NE:wf=wE;var IE=wf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EE=rE,PE=IE,AE={uint16:PE,uint8:EE},OE=AE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc=OE,Lm;function kE(){var r,e;return r=new kc.uint16(1),r[0]=4660,e=new kc.uint8(r.buffer),e[0]===52}Lm=kE();var LE=Lm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HE=LE,Zt=HE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TE=Zt,If;TE===!0?If=1:If=0;var FE=If;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CE=Yt,RE=st,SE=FE,Hm=new RE(1),GE=new CE(Hm.buffer);function DE(r){return Hm[0]=r,GE[SE]}var BE=DE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WE=BE,Q=WE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UE=Zt,Ef;UE===!0?Ef=1:Ef=0;var zE=Ef;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VE=Yt,qE=st,XE=zE,Pf=new qE(1),QE=new VE(Pf.buffer);function KE(r,e){return Pf[0]=r,QE[XE]=e>>>0,Pf[0]}var bE=KE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ME=bE,Or=ME;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YE=1023,hr=YE;/**
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
*/function ZE(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}var JE=ZE;/**
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
*/function jE(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}var xE=jE;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lc=Q,rP=Or,eP=O,nP=hr,tP=V,iP=JE,aP=xE,qa=.6931471803691238,Xa=19082149292705877e-26,oP=0x40000000000000,lP=.3333333333333333,Hc=1048575,uP=2146435072,sP=1048576,fP=1072693248;function vP(r){var e,n,t,i,o,f,d,c,s,a,l,u;return r===0?tP:eP(r)||r<0?NaN:(n=Lc(r),o=0,n<sP&&(o-=54,r*=oP,n=Lc(r)),n>=uP?r+r:(o+=(n>>20)-nP|0,n&=Hc,c=n+614244&1048576|0,r=rP(r,n|c^fP),o+=c>>20|0,d=r-1,(Hc&2+n)<3?d===0?o===0?0:o*qa+o*Xa:(f=d*d*(.5-lP*d),o===0?d-f:o*qa-(f-o*Xa-d)):(a=d/(2+d),u=a*a,c=n-398458|0,l=u*u,s=440401-n|0,i=l*iP(l),t=u*aP(l),c|=s,f=t+i,c>0?(e=.5*d*d,o===0?d-(e-a*(e+f)):o*qa-(e-(a*(e+f)+o*Xa)-d)):o===0?d-a*(d-f):o*qa-(a*(d-f)-o*Xa-d))))}var cP=vP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dP=cP,kr=dP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pP=Math.ceil,mP=pP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $P=mP,gP=$P;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hP=Br,yP=gP;function _P(r){return r<0?yP(r):hP(r)}var NP=_P;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wP=NP,Q1=wP;/**
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
*/function IP(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}var EP=IP;/**
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
*/function PP(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}var AP=PP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var OP=EP,kP=AP;function LP(r,e){var n,t,i,o;return o=r*r,i=o*o,t=o*OP(o),t+=i*i*kP(o),n=.5*o,i=1-n,i+(1-i-n+(o*t-r*e))}var HP=LP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TP=HP,Tm=TP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tc=-.16666666666666632,FP=.00833333333332249,CP=-.0001984126982985795,RP=27557313707070068e-22,SP=-25050760253406863e-24,GP=158969099521155e-24;function DP(r,e){var n,t,i,o;return o=r*r,i=o*o,n=FP+o*(CP+o*RP)+o*i*(SP+o*GP),t=o*r,e===0?r+t*(Tc+o*n):r-(o*(.5*e-t*n)-e-t*Tc)}var BP=DP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WP=BP,Fm=WP;/**
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
*/var UP=2147483647,ir=UP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zP=2146435072,K1=zP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VP=1048575,qn=VP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qP=Zt,Af;qP===!0?Af=0:Af=1;var XP=Af;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QP=Yt,KP=st,bP=XP,Cm=new KP(1),MP=new QP(Cm.buffer);function YP(r){return Cm[0]=r,MP[bP]}var ZP=YP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JP=ZP,jP=JP;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xP=Zt,Rm,Of,kf;xP===!0?(Of=1,kf=0):(Of=0,kf=1);Rm={HIGH:Of,LOW:kf};var rA=Rm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eA=Yt,nA=st,Sm=rA,Gm=new nA(1),Fc=new eA(Gm.buffer),tA=Sm.HIGH,iA=Sm.LOW;function aA(r,e){return Fc[tA]=r,Fc[iA]=e,Gm[0]}var oA=aA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lA=oA,xo=lA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uA=1023,sA=uA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fA=-1023,vA=fA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cA=-1074,dA=cA;/**
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
*/var pA=2147483648,mA=pA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $A=Zt,Dm,Lf,Hf;$A===!0?(Lf=1,Hf=0):(Lf=0,Hf=1);Dm={HIGH:Lf,LOW:Hf};var gA=Dm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hA=Yt,yA=st,Bm=gA,Wm=new yA(1),Cc=new hA(Wm.buffer),_A=Bm.HIGH,NA=Bm.LOW;function wA(r,e,n,t){return Wm[0]=r,e[t]=Cc[_A],e[t+n]=Cc[NA],e}var Um=wA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IA=Um;function EA(r){return IA(r,[0,0],1,0)}var PA=EA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AA=G,zm=PA,OA=Um;AA(zm,"assign",OA);var Ye=zm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kA=mA,LA=ir,HA=Ye,TA=Q,FA=xo,Wl=[0,0];function CA(r,e){var n,t;return HA.assign(r,Wl,1,0),n=Wl[0],n&=LA,t=TA(e),t&=kA,n|=t,FA(n,Wl[1])}var RA=CA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SA=RA,ke=SA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GA=22250738585072014e-324,ha=GA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DA=ha,BA=Qr,WA=O,UA=D,zA=4503599627370496;function VA(r,e,n,t){return WA(r)||BA(r)?(e[t]=r,e[t+n]=0,e):r!==0&&UA(r)<DA?(e[t]=r*zA,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}var Vm=VA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qA=Vm;function XA(r){return qA(r,[0,0],1,0)}var QA=XA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KA=G,qm=QA,bA=Vm;KA(qm,"assign",bA);var MA=qm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YA=Q,ZA=K1,JA=hr;function jA(r){var e=YA(r);return e=(e&ZA)>>>20,e-JA|0}var xA=jA;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rO=xA,eO=rO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nO=C,tO=V,iO=hr,aO=sA,oO=vA,lO=dA,uO=O,sO=Qr,fO=ke,vO=MA.assign,cO=eO,dO=Ye,pO=xo,mO=2220446049250313e-31,$O=2148532223,Ul=[0,0],zl=[0,0];function gO(r,e){var n,t;return e===0||r===0||uO(r)||sO(r)?r:(vO(r,Ul,1,0),r=Ul[0],e+=Ul[1],e+=cO(r),e<lO?fO(0,r):e>aO?r<0?tO:nO:(e<=oO?(e+=52,t=mO):t=1,dO.assign(r,zl,1,0),n=zl[0],n&=$O,n|=e+iO<<20,t*pO(n,zl[1])))}var hO=gO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yO=hO,Ze=yO;/**
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
*/function _O(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}var NO=_O;/**
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
*/var wO=NO,IO=wO;/**
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
*/var EO=IO;function PO(r){return EO(0,r)}var AO=PO;/**
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
*/var OO=AO,kO=OO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var LO=Br,Qa=Ze,rl=kO,Xm=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],HO=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vl=16777216,ql=5960464477539063e-23,Ka=rl(20),Rc=rl(20),ba=rl(20),Ir=rl(20);function Qm(r,e,n,t,i,o,f,d,c){var s,a,l,u,v,m,$,y,g;for(u=o,g=t[n],y=n,v=0;y>0;v++)a=ql*g|0,Ir[v]=g-Vl*a|0,g=t[y-1]+a,y-=1;if(g=Qa(g,i),g-=8*LO(g*.125),$=g|0,g-=$,l=0,i>0?(v=Ir[n-1]>>24-i,$+=v,Ir[n-1]-=v<<24-i,l=Ir[n-1]>>23-i):i===0?l=Ir[n-1]>>23:g>=.5&&(l=2),l>0){for($+=1,s=0,v=0;v<n;v++)y=Ir[v],s===0?y!==0&&(s=1,Ir[v]=16777216-y):Ir[v]=16777215-y;if(i>0)switch(i){case 1:Ir[n-1]&=8388607;break;case 2:Ir[n-1]&=4194303;break}l===2&&(g=1-g,s!==0&&(g-=Qa(1,i)))}if(g===0){for(y=0,v=n-1;v>=o;v--)y|=Ir[v];if(y===0){for(m=1;Ir[o-m]===0;m++);for(v=n+1;v<=n+m;v++){for(c[d+v]=Xm[f+v],a=0,y=0;y<=d;y++)a+=r[y]*c[d+(v-y)];t[v]=a}return n+=m,Qm(r,e,n,t,i,o,f,d,c)}}if(g===0)for(n-=1,i-=24;Ir[n]===0;)n-=1,i-=24;else g=Qa(g,-i),g>=Vl?(a=ql*g|0,Ir[n]=g-Vl*a|0,n+=1,i+=24,Ir[n]=a):Ir[n]=g|0;for(a=Qa(1,i),v=n;v>=0;v--)t[v]=a*Ir[v],a*=ql;for(v=n;v>=0;v--){for(a=0,m=0;m<=u&&m<=n-v;m++)a+=HO[m]*t[v+m];ba[n-v]=a}for(a=0,v=n;v>=0;v--)a+=ba[v];for(l===0?e[0]=a:e[0]=-a,a=ba[0]-a,v=1;v<=n;v++)a+=ba[v];return l===0?e[1]=a:e[1]=-a,$&7}function TO(r,e,n,t){var i,o,f,d,c,s,a,l,u;for(o=4,d=t-1,f=(n-3)/24|0,f<0&&(f=0),s=n-24*(f+1),l=f-d,u=d+o,a=0;a<=u;a++)l<0?Ka[a]=0:Ka[a]=Xm[l],l+=1;for(a=0;a<=o;a++){for(i=0,l=0;l<=d;l++)i+=r[l]*Ka[d+(a-l)];Rc[a]=i}return c=o,Qm(r,e,c,Rc,s,o,f,d,Ka)}var FO=TO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CO=Math.round,RO=CO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SO=RO,GO=SO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var DO=GO,Sc=Q,BO=.6366197723675814,WO=1.5707963267341256,UO=6077100506506192e-26,zO=6077100506303966e-26,VO=20222662487959506e-37,qO=20222662487111665e-37,XO=84784276603689e-45,Gc=2047;function QO(r,e,n){var t,i,o,f,d,c,s;return i=DO(r*BO),f=r-i*WO,d=i*UO,s=e>>20|0,n[0]=f-d,t=Sc(n[0]),c=s-(t>>20&Gc),c>16&&(o=f,d=i*zO,f=o-d,d=i*VO-(o-f-d),n[0]=f-d,t=Sc(n[0]),c=s-(t>>20&Gc),c>49&&(o=f,d=i*qO,f=o-d,d=i*XO-(o-f-d),n[0]=f-d)),n[1]=f-n[0]-d,i}var KO=QO;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bO=ir,MO=K1,YO=qn,ZO=Q,JO=jP,jO=xo,xO=FO,Ma=KO,rk=0,ek=16777216,xe=1.5707963267341256,jn=6077100506506192e-26,Ya=2*jn,Za=3*jn,Ja=4*jn,nk=598523,tk=1072243195,ik=1073928572,ak=1074752122,ok=1074977148,lk=1075183036,uk=1075388923,sk=1075594811,fk=1094263291,pi=[0,0,0],mi=[0,0];function vk(r,e){var n,t,i,o,f,d,c,s;if(i=ZO(r),o=i&bO|0,o<=tk)return e[0]=r,e[1]=0,0;if(o<=ak)return(o&YO)===nk?Ma(r,o,e):o<=ik?r>0?(s=r-xe,e[0]=s-jn,e[1]=s-e[0]-jn,1):(s=r+xe,e[0]=s+jn,e[1]=s-e[0]+jn,-1):r>0?(s=r-2*xe,e[0]=s-Ya,e[1]=s-e[0]-Ya,2):(s=r+2*xe,e[0]=s+Ya,e[1]=s-e[0]+Ya,-2);if(o<=sk)return o<=lk?o===ok?Ma(r,o,e):r>0?(s=r-3*xe,e[0]=s-Za,e[1]=s-e[0]-Za,3):(s=r+3*xe,e[0]=s+Za,e[1]=s-e[0]+Za,-3):o===uk?Ma(r,o,e):r>0?(s=r-4*xe,e[0]=s-Ja,e[1]=s-e[0]-Ja,4):(s=r+4*xe,e[0]=s+Ja,e[1]=s-e[0]+Ja,-4);if(o<fk)return Ma(r,o,e);if(o>=MO)return e[0]=NaN,e[1]=NaN,0;for(n=JO(r),t=(o>>20)-1046,s=jO(o-(t<<20|0),n),d=0;d<2;d++)pi[d]=s|0,s=(s-pi[d])*ek;for(pi[2]=s,f=3;pi[f-1]===rk;)f-=1;return c=xO(pi,mi,t,f),r<0?(e[0]=-mi[0],e[1]=-mi[1],-c):(e[0]=mi[0],e[1]=mi[1],c)}var ck=vk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dk=ck,Km=dk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var pk=Q,Xl=Tm,Dc=Fm,mk=Km,He=[0,0],$k=2147483647,gk=1072243195,hk=1044381696,yk=2146435072;function _k(r){var e,n;if(e=pk(r),e&=$k,e<=gk)return e<hk?1:Xl(r,0);if(e>=yk)return NaN;switch(n=mk(r,He),n&3){case 0:return Xl(He[0],He[1]);case 1:return-Dc(He[0],He[1]);case 2:return-Xl(He[0],He[1]);default:return Dc(He[0],He[1])}}var Nk=_k;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wk=Nk,Ik=wk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ek=ir,Pk=K1,Ak=Q,Bc=Tm,Ql=Fm,Ok=Km,kk=1072243195,Lk=1045430272,Te=[0,0];function Hk(r){var e,n;if(e=Ak(r),e&=Ek,e<=kk)return e<Lk?r:Ql(r,0);if(e>=Pk)return NaN;switch(n=Ok(r,Te),n&3){case 0:return Ql(Te[0],Te[1]);case 1:return Bc(Te[0],Te[1]);case 2:return-Ql(Te[0],Te[1]);default:return-Bc(Te[0],Te[1])}}var Tk=Hk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fk=Tk,ya=Fk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ck=3.141592653589793,xr=Ck;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rk=O,Sk=Qr,Wc=Ik,Kl=ya,Gk=D,$i=ke,gi=xr;function Dk(r){var e,n;return Rk(r)?NaN:Sk(r)?NaN:(n=r%2,e=Gk(n),e===0||e===1?$i(0,n):e<.25?Kl(gi*n):e<.75?(e=.5-e,$i(Wc(gi*e),n)):e<1.25?(n=$i(1,n)-n,Kl(gi*n)):e<1.75?(e-=1.5,-$i(Wc(gi*e),n)):(n-=$i(2,n),Kl(gi*n)))}var Bk=Dk;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wk=Bk,b1=Wk;/**
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
*/function Uk(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}var zk=Uk;/**
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
*/function Vk(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}var qk=Vk;/**
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
*/function Xk(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}var Qk=Xk;/**
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
*/function Kk(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}var bk=Kk;/**
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
*/function Mk(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}var Yk=Mk;/**
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
*/function Zk(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}var Jk=Zk;/**
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
*/function jk(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}var xk=jk;/**
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
*/function rL(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}var eL=rL;/**
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
*/function nL(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}var tL=nL;/**
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
*/function iL(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}var aL=iL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oL=O,lL=Qr,uL=D,mt=kr,sL=Q1,fL=b1,vL=xr,bl=C,cL=zk,dL=qk,pL=Qk,mL=bk,$L=Yk,gL=Jk,hL=xk,yL=eL,_L=tL,NL=aL,wL=.07721566490153287,IL=.3224670334241136,EL=1,PL=-.07721566490153287,AL=.48383612272381005,OL=-.1475877229945939,kL=.06462494023913339,LL=-.07721566490153287,HL=1,TL=.4189385332046727,ja=1.4616321449683622,FL=4503599627370496,CL=0x400000000000000,RL=8470329472543003e-37,Uc=1.4616321449683622,SL=-.12148629053584961,GL=-3638676997039505e-33;function DL(r){var e,n,t,i,o,f,d,c,s,a,l,u,v;if(oL(r)||lL(r))return r;if(r===0)return bl;if(r<0?(e=!0,r=-r):e=!1,r<RL)return-mt(r);if(e){if(r>=FL||(s=fL(r),s===0))return bl;n=mt(vL/uL(s*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(v=-mt(r),r>=ja-1+.27?(l=1-r,t=0):r>=ja-1-.27?(l=r-(Uc-1),t=1):(l=r,t=2)):(v=0,r>=ja+.27?(l=2-r,t=0):r>=ja-.27?(l=r-Uc,t=1):(l=r-1,t=2)),t){case 0:u=l*l,f=wL+u*cL(u),o=u*(IL+u*dL(u)),d=l*f+o,v+=d-.5*l;break;case 1:u=l*l,a=u*l,f=AL+a*$L(a),o=OL+a*gL(a),i=kL+a*hL(a),d=u*f-(GL-a*(o+l*i)),v+=SL+d;break;case 2:f=l*(LL+l*yL(l)),o=HL+l*_L(l),v+=-.5*l+f/o;break}else if(r<8)switch(t=sL(r),l=r-t,d=l*(PL+l*mL(l)),c=EL+l*pL(l),v=.5*l+d/c,u=1,t){case 7:u*=l+6;case 6:u*=l+5;case 5:u*=l+4;case 4:u*=l+3;case 3:u*=l+2,v+=mt(u)}else r<CL?(s=mt(r),u=1/r,l=u*u,a=TL+u*NL(l),v=(r-.5)*(s-1)+a):v=r*(mt(r)-1);return e&&(v=n-v),v}var BL=DL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WL=BL,el=WL;/**
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
*/function UL(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}var zL=UL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var VL=O,zc=Q,Vc=Or,qL=C,XL=V,qc=hr,QL=zL,Ml=.6931471803691238,Yl=19082149292705877e-26,KL=.41421356237309503,bL=-.2928932188134525,ML=1862645149230957e-24,YL=5551115123125783e-32,ZL=9007199254740992,JL=.6666666666666666;function jL(r){var e,n,t,i,o,f,d,c,s,a;if(r<-1||VL(r))return NaN;if(r===-1)return XL;if(r===qL||r===0)return r;if(r<0?t=-r:t=r,a=1,t<KL){if(t<ML)return t<YL?r:r-r*r*.5;r>bL&&(a=0,i=r,n=1)}return a!==0&&(t<ZL?(s=1+r,n=zc(s),a=(n>>20)-qc,a>0?o=1-(s-r):o=r-(s-1),o/=s):(s=r,n=zc(s),a=(n>>20)-qc,o=0),n&=1048575,n<434334?s=Vc(s,n|1072693248):(a+=1,s=Vc(s,n|1071644672),n=1048576-n>>2),i=s-1),e=.5*i*i,n===0?i===0?(o+=a*Yl,a*Ml+o):(c=e*(1-JL*i),a*Ml-(c-(a*Yl+o)-i)):(f=i/(2+i),d=f*f,c=d*QL(d),a===0?i-(e-f*(e+c)):a*Ml-(e-(f*(e+c)+(a*Yl+o))-i))}var xL=jL;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rH=xL,Le=rH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eH=V;function nH(r){return r===0&&1/r===eH}var tH=nH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iH=tH,_a=iH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aH=2.5066282746310007,Na=aH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oH=gr;function lH(r){return oH(r/2)}var uH=lH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sH=uH,ft=sH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc=ft;function fH(r){return r>0?Xc(r-1):Xc(r+1)}var vH=fH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cH=vH,M1=cH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dH=Math.sqrt,pH=dH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mH=pH,sr=mH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $H=Zt,Tf;$H===!0?Tf=0:Tf=1;var gH=Tf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hH=Yt,yH=st,_H=gH,Ff=new yH(1),NH=new hH(Ff.buffer);function wH(r,e){return Ff[0]=r,NH[_H]=e>>>0,Ff[0]}var IH=wH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EH=IH,b=EH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function PH(r){return r|0}var AH=PH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OH=AH,Kr=OH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Qc=M1,kH=ke,LH=V,xa=C;function HH(r,e){return e===LH?xa:e===xa?0:e>0?Qc(e)?r:0:Qc(e)?kH(xa,r):xa}var TH=HH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var FH=ir,CH=Q,RH=1072693247,r0=1e300,e0=1e-300;function SH(r,e){var n,t;return t=CH(r),n=t&FH,n<=RH?e<0?r0*r0:e0*e0:e>0?r0*r0:e0*e0}var GH=SH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DH=D,Kc=C;function BH(r,e){return r===-1?(r-r)/(r-r):r===1?1:DH(r)<1==(e===Kc)?0:Kc}var WH=BH;/**
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
*/function UH(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var zH=UH;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var VH=Q,n0=b,bc=Or,qH=hr,XH=zH,QH=1048575,Mc=1048576,KH=1072693248,bH=536870912,MH=524288,YH=20,ZH=9007199254740992,JH=.9617966939259756,jH=.9617967009544373,xH=-7028461650952758e-24,rT=[1,1.5],eT=[0,.5849624872207642],nT=[0,1350039202129749e-23];function tT(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<Mc&&(e*=ZH,w-=53,n=VH(e)),w+=(n>>YH)-qH|0,I=n&QH|0,n=I|KH|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=Mc),e=bc(e,n),a=rT[E],_=e-a,N=1/(e+a),i=_*N,f=n0(i,0),t=(n>>1|bH)+MH,t+=E<<18,c=bc(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*XH(o),p+=d*(f+i),o=f*f,c=3+o+p,c=n0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=n0(u,0),v=N-(u-_),m=jH*u,$=xH*u+v*JH+nT[E],l=eT[E],h=w,y=m+$+l+h,y=n0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var iT=tT;/**
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
*/function aT(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var oT=aT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var lT=b,uT=oT,sT=1.4426950408889634,fT=1.4426950216293335,vT=19259629911266175e-24;function cT(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*uT(i),f=fT*i,d=i*vT-o*sT,t=f+d,t=lT(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var dT=cT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pT=.6931471805599453,vt=pT;/**
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
*/function mT(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var $T=mT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gT=Q,Yc=Or,hT=b,yT=Kr,_T=Ze,NT=vt,Zc=hr,Jc=ir,jc=qn,wT=$T,xc=1048576,IT=1071644672,hi=20,ET=.6931471824645996,PT=-1904654299957768e-24;function AT(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&Jc|0,v=(u>>hi)-Zc|0,l=0,u>IT&&(l=r+(xc>>v+1)>>>0,v=((l&Jc)>>hi)-Zc|0,t=(l&~(jc>>v))>>>0,o=Yc(0,t),l=(l&jc|xc)>>hi-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=hT(o,0),d=o*ET,c=(n-(o-e))*NT+o*PT,a=d+c,s=c-(a-d),o=a*a,i=a-o*wT(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=gT(a),r=yT(r),r+=l<<hi>>>0,r>>hi<=0?a=_T(a,l):a=Yc(a,r),a}var OT=AT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var r2=O,e2=M1,n2=Qr,kT=gr,t2=sr,LT=D,Zl=Ye,HT=b,i2=Kr,TT=V,FT=C,Jl=ir,CT=TH,RT=GH,ST=WH,GT=iT,DT=dT,BT=OT,WT=1072693247,UT=1105199104,zT=1139802112,a2=1083179008,VT=1072693248,qT=1083231232,XT=3230714880,o2=31,rn=1e300,en=1e-300,QT=8008566259537294e-32,Fe=[0,0],l2=[0,0];function bm(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(r2(r)||r2(e))return NaN;if(Zl.assign(e,Fe,1,0),d=Fe[0],c=Fe[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return t2(r);if(e===-.5)return 1/t2(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(n2(e))return ST(r,e)}if(Zl.assign(r,Fe,1,0),o=Fe[0],f=Fe[1],f===0){if(o===0)return CT(r,e);if(r===1)return 1;if(r===-1&&e2(e))return-1;if(n2(r))return r===TT?bm(-0,-e):e<0?0:FT}if(r<0&&kT(e)===!1)return(r-r)/(r-r);if(i=LT(r),n=o&Jl|0,t=d&Jl|0,s=o>>>o2|0,a=d>>>o2|0,s&&e2(e)?s=-1:s=1,t>UT){if(t>zT)return RT(r,e);if(n<WT)return a===1?s*rn*rn:s*en*en;if(n>VT)return a===0?s*rn*rn:s*en*en;m=DT(l2,i)}else m=GT(l2,i,n);if(l=HT(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,Zl.assign($,Fe,1,0),y=i2(Fe[0]),g=i2(Fe[1]),y>=a2){if(y-a2|g||v+QT>$-u)return s*rn*rn}else if((y&Jl)>=qT&&(y-XT|g||v<=$-u))return s*en*en;return $=BT(y,u,v),s*$}var KT=bm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bT=KT,er=bT;/**
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
*/function MT(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var YT=MT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ZT=Ze,JT=YT;function jT(r,e,n){var t,i,o,f;return t=r-e,i=t*t,o=t-i*JT(i),f=1-(e-t*o/(2-o)-r),ZT(f,n)}var xT=jT;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var rF=O,u2=Q1,eF=V,s2=C,nF=xT,tF=.6931471803691238,iF=19082149292705877e-26,f2=1.4426950408889634,aF=709.782712893384,oF=-745.1332191019411,Mm=1/(1<<28),lF=-Mm;function uF(r){var e,n,t;return rF(r)||r===s2?r:r===eF?0:r>aF?s2:r<oF?0:r>lF&&r<Mm?1+r:(r<0?t=u2(f2*r-.5):t=u2(f2*r+.5),e=r-t*tF,n=t*iF,nF(e,n,t))}var sF=uF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fF=sF,q=fF;/**
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
*/function vF(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}var cF=vF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var dF=Na,v2=er,pF=q,mF=cF,$F=143.01608;function gF(r){var e,n,t;return e=1/r,e=1+e*mF(e),n=pF(r),r>$F?(t=v2(r,.5*r-.25),n=t*(t/n)):n=v2(r,r-.5)/n,dF*n*e}var hF=gF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yF=.5772156649015329,nl=yF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _F=nl;function NF(r,e){return e/((1+_F*r)*r)}var wF=NF;/**
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
*/function IF(r){var e,n,t;return r===0?1:(r<0?e=-r:e=r,e<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),t=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,n=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),t=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),n/t)}var EF=IF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var PF=O,AF=gr,OF=_a,c2=D,kF=Br,LF=ya,d2=C,p2=V,m2=xr,$2=hF,g2=wF,HF=EF;function TF(r){var e,n,t,i;if(AF(r)&&r<0||r===p2||PF(r))return NaN;if(r===0)return OF(r)?p2:d2;if(r>171.61447887182297)return d2;if(r<-170.5674972726612)return 0;if(n=c2(r),n>33)return r>=0?$2(r):(t=kF(n),t&1?e=1:e=-1,i=n-t,i>.5&&(t+=1,i=n-t),i=n*LF(m2*i),e*m2/(c2(i)*$2(n)));for(i=1;r>=3;)r-=1,i*=r;for(;r<0;){if(r>-1e-9)return g2(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return g2(r,i);i/=r,r+=1}return r===2?i:(r-=2,i*HF(r))}var FF=TF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CF=FF,tl=CF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var RF=jo,h2=O,jl=C;function SF(r,e){return h2(r)||h2(e)?NaN:r===jl||e===jl?jl:r===e&&r===0?RF(r)?r:e:r>e?r:e}var GF=SF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var DF=GF,il=DF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BF=_a,y2=O,xl=V;function WF(r,e){return y2(r)||y2(e)?NaN:r===xl||e===xl?xl:r===e&&r===0?BF(r)?r:e:r<e?r:e}var UF=WF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zF=UF,Jt=zF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VF=.9189385332046728,qF=VF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Ym=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],XF=Ym.length;function QF(r){var e,n,t,i,o;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,o=0;o<XF;o++)n=t,t=i,i=e*t-n+Ym[o];return(i-n)*.5}var KF=QF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bF=er,MF=KF,YF=9490626562425156e-8,ZF=3745194030963158e291;function JF(r){return r<10?NaN:r>=ZF?0:r<YF?MF(2*bF(10/r,2)-1)/r:1/(r*12)}var jF=JF;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xF=el,_2=Le,ru=tl,rC=il,eC=Jt,t0=kr,nC=qF,tC=V,N2=C,yi=jF;function iC(r,e){var n,t,i;return t=eC(r,e),i=rC(r,e),t<0?NaN:t===0?N2:i===N2?tC:t>=10?(n=yi(t)+yi(i)-yi(t+i),-.5*t0(i)+nC+n+(t-.5)*t0(t/(t+i))+i*_2(-t/(t+i))):i>=10?(n=yi(i)-yi(t+i),xF(t)+n+t-t*t0(t+i)+(i-.5)*_2(-t/(t+i))):t0(ru(t)*(ru(i)/ru(t+i)))}var aC=iC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oC=aC,lC=oC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w2=gr,I2=O,uC=lC,sC=D,E2=kr,P2=V;function Cf(r,e){return I2(r)||I2(e)?NaN:!w2(r)||!w2(e)?NaN:r<0?Cf(-r+e-1,e):e<0?P2:e===0?0:e===1?E2(sC(r)):r<e?P2:r-e<2?Cf(r,r-e):-E2(r+1)-uC(r-e+1,e+1)}var fC=Cf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vC=fC,cC=vC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dC=cC,pC=Br,mC=q,A2=kr;function $C(r,e){var n,t,i,o;if(r<=0)return 0;if(r>=1)return 1;for(n=pC(e*(1-r))+1,t=0,o=0;o<n;o++)i=dC(e,o),i+=(e-o)*A2(1-r-o/e),i+=(o-1)*A2(r+o/e),t+=mC(i);return 1-r*t}var gC=$C;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0=Br,hC=sr,a0=er,yC=q,eu=st;function _C(r,e){var n,t,i,o,f,d,c,s,a,l,u;if(u=r*r*e,u>7.24||u>3.76&&e>99)return 1-2*yC(-(2.000071+.331/hC(e)+1.409/e)*u);for(a=i0(e*r)+1,l=2*a-1,i=a-e*r,o=new eu(l*l),f=new eu(l*l),c=0;c<l;c++)for(s=0;s<l;s++)c-s+1<0?o[c*l+s]=0:o[c*l+s]=1;for(c=0;c<l;c++)o[c*l]-=a0(i,c+1),o[(l-1)*l+c]-=a0(i,l-c);for(o[(l-1)*l]+=2*i-1>0?a0(2*i-1,l):0,c=0;c<l;c++)for(s=0;s<l;s++)if(c-s+1>0)for(d=1;d<=c-s+1;d++)o[c*l+s]/=d;for(n=0,v(o,n,e),u=f[(a-1)*l+a-1],c=1;c<=e;c++)u=u*c/e,u<1e-140&&(u*=1e140,t-=140);return u*=a0(10,t),u;function v($,y,g){var h,p,_;if(g===1){for(_=0;_<l*l;_++)f[_]=$[_],t=y;return}if(v($,y,i0(g/2)),p=m(f,f),h=2*t,g%2===0){for(_=0;_<l*l;_++)f[_]=p[_];t=h}else f=m($,p),t=y+h;if(f[i0(l/2)*l+i0(l/2)]>1e140){for(_=0;_<l*l;_++)f[_]*=1e-140;t+=140}}function m($,y){var g,h,p,_,N;for(N=new eu(l*l),g=0;g<l;g++)for(h=0;h<l;h++)for(_=0,p=0;p<l;p++)_+=$[g*l+p]*y[p*l+h],N[g*l+h]=_;return N}}var NC=_C;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function wC(r,e){return r-e}var IC=wC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function EC(r,e){var n,t,i;for(n=e.length,t=new Array(n),i=0;i<n;i++)t[i]=r-e[i];return t}var PC=EC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AC=hm;function OC(r){return typeof r=="object"&&r!==null&&!AC(r)}var kC=OC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LC=kC,HC=LC;/**
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
*/var TC=Object,FC=TC;/**
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
*/var CC=FC,RC=CC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SC=Object.getPrototypeOf,GC=SC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function DC(r){return r.__proto__}var BC=DC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WC=ge,UC=BC;function zC(r){var e=UC(r);return e||e===null?e:WC(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}var VC=zC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qC=V1,XC=GC,QC=VC,Rf;qC(Object.getPrototypeOf)?Rf=XC:Rf=QC;var KC=Rf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bC=RC,MC=KC;function YC(r){return r==null?null:(r=bC(r),MC(r))}var ZC=YC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JC=ZC,jC=JC;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xC=HC,O2=V1,rR=jC,oo=Zo,eR=ge,nR=Object.prototype;function tR(r){var e;for(e in r)if(!oo(r,e))return!1;return!0}function iR(r){var e;return xC(r)?(e=rR(r),e?!oo(r,"constructor")&&oo(e,"constructor")&&O2(e.constructor)&&eR(e.constructor)==="[object Function]"&&oo(e,"isPrototypeOf")&&O2(e.isPrototypeOf)&&(e===nR||tR(r)):!0):!1}var aR=iR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oR=aR,Zm=oR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lR=U1.isPrimitive,uR=ut.isPrimitive,sR=Zm,fR=Im.isPrimitive,vR=Om,nu=Zo,o0=Vn;function cR(r,e){return sR(e)?nu(e,"alpha")&&(r.alpha=e.alpha,!uR(r.alpha)||vR(r.alpha))?new TypeError(o0("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):nu(e,"alternative")&&(r.alternative=e.alternative,!fR(r.alternative))?new TypeError(o0("invalid option. `%s` option must be a string. Option: `%s`.","alternative",r.alternative)):nu(e,"sorted")&&(r.sorted=e.sorted,!lR(r.sorted))?new TypeError(o0("invalid option. `%s` option must be a boolean. Option: `%s`.","sorted",r.sorted)):null:new TypeError(o0("invalid argument. Options argument must be an object. Value: `%s`.",e))}var dR=cR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pR=.7853981633974483,Jm=pR;/**
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
*/function mR(r){var e,n,t;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(n=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),t=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,n=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),t=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),n/t)}var $R=mR;/**
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
*/function gR(r){var e,n,t;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(n=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),t=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,n=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),t=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),n/t)}var hR=gR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yR=O,_R=sr,k2=Jm,NR=$R,wR=hR,IR=6123233995736766e-32;function ER(r){var e,n,t,i,o;if(yR(r))return NaN;if(r>0?t=r:(e=!0,t=-r),t>1)return NaN;if(t>.625)n=1-t,i=n*wR(n),n=_R(n+n),o=k2-n,n=n*i-IR,o-=n,o+=k2;else{if(t<1e-8)return r;n=t*t,o=n*NR(n),o=t*o+t}return e?-o:o}var PR=ER;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AR=PR,Y1=AR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tu=O,OR=Y1,kR=sr,LR=xr,HR=2/LR;function TR(r,e,n){return tu(r)||tu(e)||tu(n)||e>=n?NaN:r<e?0:r>=n?1:HR*OR(kR((r-e)/(n-e)))}var FR=TR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function CR(r){return e;function e(){return r}}var RR=CR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SR=RR,nr=SR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GR=nr,iu=O,DR=Y1,BR=sr,WR=xr,UR=2/WR;function zR(r,e){if(iu(r)||iu(e)||r>=e)return GR(NaN);return n;function n(t){return iu(t)?NaN:t<r?0:t>=e?1:UR*DR(BR((t-r)/(e-r)))}}var VR=zR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qR=G,jm=FR,XR=VR;qR(jm,"factory",XR);var QR=jm;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KR=.34657359027997264,bR=KR;/**
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
*/function MR(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}var YR=MR;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ZR=O,L2=Q,au=Or,JR=xo,H2=C,jR=V,T2=hr,xR=bR,rS=YR,eS=709.782712893384,ou=.6931471803691238,lu=19082149292705877e-26,F2=1.4426950408889634,nS=38.816242111356935,tS=1.0397207708399179;function iS(r){var e,n,t,i,o,f,d,c,s,a,l,u,v;if(r===H2||ZR(r))return r;if(r===jR)return-1;if(r===0)return r;if(r<0?(t=!0,c=-r):(t=!1,c=r),c>=nS){if(t)return-1;if(c>=eS)return H2}if(f=L2(c)|0,c>xR)c<tS?t?(i=r+ou,o=-lu,v=-1):(i=r-ou,o=lu,v=1):(t?v=F2*r-.5:v=F2*r+.5,v|=0,l=v,i=r-l*ou,o=l*lu),r=i-o,a=i-r-o;else{if(f<1016070144)return r;v=0}return e=.5*r,s=r*e,d=1+s*rS(s),l=3-d*e,u=s*((d-l)/(6-r*l)),v===0?r-(r*u-s):(n=JR(T2+v<<20,0),u=r*(u-a)-a,u-=s,v===-1?.5*(r-u)-.5:v===1?r<-.25?-2*(u-(r+.5)):1+2*(r-u):v<=-2||v>56?(c=1-(u-r),v===1024?(i=L2(c)+(v<<20)|0,c=au(c,i)):c*=n,c-1):(l=1,v<20?(i=1072693248-(2097152>>v)|0,l=au(l,i),c=l-(u-r)):(i=T2-v<<20|0,l=au(l,i),c=r-(u+l),c+=1),c*=n,c))}var aS=iS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oS=aS,jt=oS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lS=2.718281828459045,xt=lS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uS=2220446049250313e-31,Je=uS;/**
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
*/function sS(r){var e,n,t;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,n=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),n/t)}var fS=sS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var C2=O,vS=Le,cS=sr,dS=D,pS=q,uu=er,mS=xt,su=Je,fu=fS,vu=10.900511;function $S(r,e){var n,t,i,o,f,d,c;return C2(r)||C2(e)?NaN:r<0||e<0?NaN:e===1?1/r:r===1?1/e:(c=r+e,c<su?(f=c/r,f/=e,f):c===r&&e<su?1/e:c===e&&r<su?1/r:(r<e&&(d=e,e=r,r=d),t=r+vu-.5,i=e+vu-.5,o=c+vu-.5,f=fu(r)*(fu(e)/fu(c)),n=r-.5-e,dS(e*n)<o*100&&r>100?f*=pS(n*vS(-e/o)):f*=uu(t/o,n),o>1e10?f*=uu(t/o*(i/o),e):f*=uu(t*i/(o*o),e),f*=cS(mS/i),f))}var gS=$S;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hS=gS,yS=hS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _S=17976931348623157e292,xm=_S;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NS=2147483647,wS=NS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var IS=1.5707963267948966,r9=IS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R2=ft;function ES(r){return r>0?R2(r-1):R2(r+1)}var PS=ES;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var AS=PS,e9=AS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var S2=e9,OS=ke,kS=V,l0=C;function LS(r,e){return e===kS?l0:e===l0?0:e>0?S2(e)?r:0:S2(e)?OS(l0,r):l0}var HS=LS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var TS=ir,FS=Q,CS=1072693247,u0=1e300,s0=1e-300;function RS(r,e){var n,t;return t=FS(r),n=t&TS,n<=CS?e<0?u0*u0:s0*s0:e>0?u0*u0:s0*s0}var SS=RS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GS=D,G2=C;function DS(r,e){return r===-1?(r-r)/(r-r):r===1?1:GS(r)<1==(e===G2)?0:G2}var BS=DS;/**
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
*/function WS(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var US=WS;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var zS=Q,f0=b,D2=Or,VS=hr,qS=US,XS=1048575,B2=1048576,QS=1072693248,KS=536870912,bS=524288,MS=20,YS=9007199254740992,ZS=.9617966939259756,JS=.9617967009544373,jS=-7028461650952758e-24,xS=[1,1.5],rG=[0,.5849624872207642],eG=[0,1350039202129749e-23];function nG(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<B2&&(e*=YS,w-=53,n=zS(e)),w+=(n>>MS)-VS|0,I=n&XS|0,n=I|QS|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=B2),e=D2(e,n),a=xS[E],_=e-a,N=1/(e+a),i=_*N,f=f0(i,0),t=(n>>1|KS)+bS,t+=E<<18,c=D2(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*qS(o),p+=d*(f+i),o=f*f,c=3+o+p,c=f0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=f0(u,0),v=N-(u-_),m=JS*u,$=jS*u+v*ZS+eG[E],l=rG[E],h=w,y=m+$+l+h,y=f0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var tG=nG;/**
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
*/function iG(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var aG=iG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oG=b,lG=aG,uG=1.4426950408889634,sG=1.4426950216293335,fG=19259629911266175e-24;function vG(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*lG(i),f=sG*i,d=i*fG-o*uG,t=f+d,t=oG(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var cG=vG;/**
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
*/function dG(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var pG=dG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var mG=Q,W2=Or,$G=b,gG=Kr,hG=Ze,yG=vt,U2=hr,z2=ir,V2=qn,_G=pG,q2=1048576,NG=1071644672,_i=20,wG=.6931471824645996,IG=-1904654299957768e-24;function EG(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&z2|0,v=(u>>_i)-U2|0,l=0,u>NG&&(l=r+(q2>>v+1)>>>0,v=((l&z2)>>_i)-U2|0,t=(l&~(V2>>v))>>>0,o=W2(0,t),l=(l&V2|q2)>>_i-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=$G(o,0),d=o*wG,c=(n-(o-e))*yG+o*IG,a=d+c,s=c-(a-d),o=a*a,i=a-o*_G(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=mG(a),r=gG(r),r+=l<<_i>>>0,r>>_i<=0?a=hG(a,l):a=W2(a,r),a}var PG=EG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var X2=O,Q2=e9,K2=Qr,AG=gr,b2=sr,OG=D,cu=Ye,kG=b,M2=Kr,LG=V,HG=C,du=ir,TG=HS,FG=SS,CG=BS,RG=tG,SG=cG,GG=PG,DG=1072693247,BG=1105199104,WG=1139802112,Y2=1083179008,UG=1072693248,zG=1083231232,VG=3230714880,Z2=31,nn=1e300,tn=1e-300,qG=8008566259537294e-32,Ce=[0,0],J2=[0,0];function n9(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(X2(r)||X2(e))return NaN;if(cu.assign(e,Ce,1,0),d=Ce[0],c=Ce[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return b2(r);if(e===-.5)return 1/b2(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(K2(e))return CG(r,e)}if(cu.assign(r,Ce,1,0),o=Ce[0],f=Ce[1],f===0){if(o===0)return TG(r,e);if(r===1)return 1;if(r===-1&&Q2(e))return-1;if(K2(r))return r===LG?n9(-0,-e):e<0?0:HG}if(r<0&&AG(e)===!1)return(r-r)/(r-r);if(i=OG(r),n=o&du|0,t=d&du|0,s=o>>>Z2|0,a=d>>>Z2|0,s&&Q2(e)?s=-1:s=1,t>BG){if(t>WG)return FG(r,e);if(n<DG)return a===1?s*nn*nn:s*tn*tn;if(n>UG)return a===0?s*nn*nn:s*tn*tn;m=SG(J2,i)}else m=RG(J2,i,n);if(l=kG(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,cu.assign($,Ce,1,0),y=M2(Ce[0]),g=M2(Ce[1]),y>=Y2){if(y-Y2|g||v+qG>$-u)return s*nn*nn}else if((y&du)>=zG&&(y-VG|g||v<=$-u))return s*tn*tn;return $=GG(y,u,v),s*$}var XG=n9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QG=XG,KG=QG;/**
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
*/function bG(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}var MG=bG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var YG=Na,j2=KG,ZG=q,JG=MG,jG=143.01608;function xG(r){var e,n,t;return e=1/r,e=1+e*JG(e),n=ZG(r),r>jG?(t=j2(r,.5*r-.25),n=t*(t/n)):n=j2(r,r-.5)/n,YG*n*e}var rD=xG;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var eD=nl;function nD(r,e){return e/((1+eD*r)*r)}var tD=nD;/**
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
*/function iD(r){var e,n,t;return r===0?1:(r<0?e=-r:e=r,e<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),t=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,n=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),t=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),n/t)}var aD=iD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var oD=O,lD=gr,uD=_a,x2=D,sD=Br,fD=ya,r3=C,e3=V,n3=xr,t3=rD,i3=tD,vD=aD;function cD(r){var e,n,t,i;if(lD(r)&&r<0||r===e3||oD(r))return NaN;if(r===0)return uD(r)?e3:r3;if(r>171.61447887182297)return r3;if(r<-170.5674972726612)return 0;if(n=x2(r),n>33)return r>=0?t3(r):(t=sD(n),t&1?e=1:e=-1,i=n-t,i>.5&&(t+=1,i=n-t),i=n*fD(n3*i),e*n3/(x2(i)*t3(n)));for(i=1;r>=3;)r-=1,i*=r;for(;r<0;){if(r>-1e-9)return i3(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return i3(r,i);i/=r,r+=1}return r===2?i:(r-=2,i*vD(r))}var dD=cD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pD=dD,Z1=pD;const mD=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $D=O,gD=gr,hD=Z1,yD=C,_D=mD,ND=170;function wD(r){return $D(r)?NaN:gD(r)?r<0?NaN:r<=ND?_D[r]:yD:hD(r+1)}var ID=wD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ED=ID,PD=ED;/**
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
*/function AD(r){var e,n,t;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(n=3847467039331777e-5+r*(3685766504351951e-5+r*(1588920245372942e-5+r*(4059208354298835e-6+r*(6805476611834733e-7+r*(7823975500312005e-8+r*(6246580776401795e-9+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+r*2.5066282746310007))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,n=2.5066282746310007+r*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580776401795e-9+r*(7823975500312005e-8+r*(6805476611834733e-7+r*(4059208354298835e-6+r*(1588920245372942e-5+r*(3685766504351951e-5+r*3847467039331777e-5))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),n/t)}var OD=AD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var kD=OD,LD=kD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HD=LD,TD=HD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FD=10.900511,wa=FD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var a3=TD,CD=Z1,o3=Le,l3=D,u3=q,s3=er,RD=Je,SD=xt,GD=wa,f3=170,DD=4269068009004705e289;function t9(r,e){var n,t,i;return r<RD?e>f3?(t=t9(e,f3-e),t*=r,t*=DD,1/t):1/(r*CD(r+e)):(i=r+GD-.5,r+e===r?l3(e)<10?n=u3((.5-r)*o3(e/i)):n=1:(l3(e)<10?n=u3((.5-r)*o3(e/i)):n=s3(i/(i+e),r-.5),n*=a3(r)/a3(r+e)),n*=s3(SD/(i+e),e),n)}var BD=t9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var WD=D,v3=Br,c3=Z1,d3=PD,UD=BD,p3=170;function zD(r,e){var n,t,i;if(r<=0||r+e<=0)return c3(r)/c3(r+e);if(t=v3(e),t===e){if(i=v3(r),i===r&&r<=p3&&r+e<=p3)return d3(i-1)/d3(t+i-1);if(WD(e)<20){if(e===0)return 1;if(e<0){for(r-=1,n=r,e+=1;e!==0;)r-=1,n*=r,e+=1;return n}for(n=1/r,e-=1;e!==0;)r+=1,n/=r,e-=1;return n}}return UD(r,e)}var VD=zD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qD=VD,XD=qD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m3=ft;function QD(r){return r>0?m3(r-1):m3(r+1)}var KD=QD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bD=KD,i9=bD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $3=i9,MD=ke,YD=V,v0=C;function ZD(r,e){return e===YD?v0:e===v0?0:e>0?$3(e)?r:0:$3(e)?MD(v0,r):v0}var JD=ZD;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var jD=ir,xD=Q,rB=1072693247,c0=1e300,d0=1e-300;function eB(r,e){var n,t;return t=xD(r),n=t&jD,n<=rB?e<0?c0*c0:d0*d0:e>0?c0*c0:d0*d0}var nB=eB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tB=D,g3=C;function iB(r,e){return r===-1?(r-r)/(r-r):r===1?1:tB(r)<1==(e===g3)?0:g3}var aB=iB;/**
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
*/function oB(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var lB=oB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var uB=Q,p0=b,h3=Or,sB=hr,fB=lB,vB=1048575,y3=1048576,cB=1072693248,dB=536870912,pB=524288,mB=20,$B=9007199254740992,gB=.9617966939259756,hB=.9617967009544373,yB=-7028461650952758e-24,_B=[1,1.5],NB=[0,.5849624872207642],wB=[0,1350039202129749e-23];function IB(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<y3&&(e*=$B,w-=53,n=uB(e)),w+=(n>>mB)-sB|0,I=n&vB|0,n=I|cB|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=y3),e=h3(e,n),a=_B[E],_=e-a,N=1/(e+a),i=_*N,f=p0(i,0),t=(n>>1|dB)+pB,t+=E<<18,c=h3(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*fB(o),p+=d*(f+i),o=f*f,c=3+o+p,c=p0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=p0(u,0),v=N-(u-_),m=hB*u,$=yB*u+v*gB+wB[E],l=NB[E],h=w,y=m+$+l+h,y=p0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var EB=IB;/**
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
*/function PB(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var AB=PB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var OB=b,kB=AB,LB=1.4426950408889634,HB=1.4426950216293335,TB=19259629911266175e-24;function FB(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*kB(i),f=HB*i,d=i*TB-o*LB,t=f+d,t=OB(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var CB=FB;/**
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
*/function RB(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var SB=RB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var GB=Q,_3=Or,DB=b,BB=Kr,WB=Ze,UB=vt,N3=hr,w3=ir,I3=qn,zB=SB,E3=1048576,VB=1071644672,Ni=20,qB=.6931471824645996,XB=-1904654299957768e-24;function QB(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&w3|0,v=(u>>Ni)-N3|0,l=0,u>VB&&(l=r+(E3>>v+1)>>>0,v=((l&w3)>>Ni)-N3|0,t=(l&~(I3>>v))>>>0,o=_3(0,t),l=(l&I3|E3)>>Ni-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=DB(o,0),d=o*qB,c=(n-(o-e))*UB+o*XB,a=d+c,s=c-(a-d),o=a*a,i=a-o*zB(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=GB(a),r=BB(r),r+=l<<Ni>>>0,r>>Ni<=0?a=WB(a,l):a=_3(a,r),a}var KB=QB;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var P3=O,A3=i9,O3=Qr,bB=gr,k3=sr,MB=D,pu=Ye,YB=b,L3=Kr,ZB=V,JB=C,mu=ir,jB=JD,xB=nB,rW=aB,eW=EB,nW=CB,tW=KB,iW=1072693247,aW=1105199104,oW=1139802112,H3=1083179008,lW=1072693248,uW=1083231232,sW=3230714880,T3=31,an=1e300,on=1e-300,fW=8008566259537294e-32,Re=[0,0],F3=[0,0];function a9(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(P3(r)||P3(e))return NaN;if(pu.assign(e,Re,1,0),d=Re[0],c=Re[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return k3(r);if(e===-.5)return 1/k3(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(O3(e))return rW(r,e)}if(pu.assign(r,Re,1,0),o=Re[0],f=Re[1],f===0){if(o===0)return jB(r,e);if(r===1)return 1;if(r===-1&&A3(e))return-1;if(O3(r))return r===ZB?a9(-0,-e):e<0?0:JB}if(r<0&&bB(e)===!1)return(r-r)/(r-r);if(i=MB(r),n=o&mu|0,t=d&mu|0,s=o>>>T3|0,a=d>>>T3|0,s&&A3(e)?s=-1:s=1,t>aW){if(t>oW)return xB(r,e);if(n<iW)return a===1?s*an*an:s*on*on;if(n>lW)return a===0?s*an*an:s*on*on;m=nW(F3,i)}else m=eW(F3,i,n);if(l=YB(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,pu.assign($,Re,1,0),y=L3(Re[0]),g=L3(Re[1]),y>=H3){if(y-H3|g||v+fW>$-u)return s*an*an}else if((y&mu)>=uW&&(y-sW|g||v<=$-u))return s*on*on;return $=tW(y,u,v),s*$}var vW=a9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cW=vW,dW=cW;/**
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
*/function pW(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}var mW=pW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $W=Na,C3=dW,gW=q,hW=mW,yW=143.01608;function _W(r){var e,n,t;return e=1/r,e=1+e*hW(e),n=gW(r),r>yW?(t=C3(r,.5*r-.25),n=t*(t/n)):n=C3(r,r-.5)/n,$W*n*e}var NW=_W;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var wW=nl;function IW(r,e){return e/((1+wW*r)*r)}var EW=IW;/**
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
*/function PW(r){var e,n,t;return r===0?1:(r<0?e=-r:e=r,e<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),t=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,n=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),t=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),n/t)}var AW=PW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var OW=O,kW=gr,LW=_a,R3=D,HW=Br,TW=ya,S3=C,G3=V,D3=xr,B3=NW,W3=EW,FW=AW;function CW(r){var e,n,t,i;if(kW(r)&&r<0||r===G3||OW(r))return NaN;if(r===0)return LW(r)?G3:S3;if(r>171.61447887182297)return S3;if(r<-170.5674972726612)return 0;if(n=R3(r),n>33)return r>=0?B3(r):(t=HW(n),t&1?e=1:e=-1,i=n-t,i>.5&&(t+=1,i=n-t),i=n*TW(D3*i),e*D3/(R3(i)*B3(n)));for(i=1;r>=3;)r-=1,i*=r;for(;r<0;){if(r>-1e-9)return W3(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return W3(r,i);i/=r,r+=1}return r===2?i:(r-=2,i*FW(r))}var RW=CW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var SW=RW,GW=SW;/**
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
*/var DW=170,BW=DW;const WW=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UW=O,zW=gr,VW=GW,qW=C,XW=BW,QW=WW;function KW(r){return UW(r)?NaN:zW(r)?r<0?NaN:r<=XW?QW[r]:qW:VW(r+1)}var bW=KW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MW=bW,YW=MW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZW=14901161193847656e-24,JW=ZW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jW=709.782712893384,ct=jW;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xW=q;function rU(r,e){var n,t,i,o;if(i=xW(-e),t=i,t!==0)for(n=t,o=1;o<r;++o)n/=o,n*=e,t+=n;return t}var eU=rU;/**
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
*/function nU(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}var tU=nU;/**
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
*/function iU(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}var aU=iU;/**
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
*/function oU(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}var lU=oU;/**
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
*/function uU(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}var sU=uU;/**
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
*/function fU(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}var vU=fU;/**
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
*/function cU(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}var dU=cU;/**
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
*/function pU(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}var mU=pU;/**
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
*/function $U(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}var gU=$U;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var hU=O,U3=q,yU=b,_U=C,NU=V,wU=tU,IU=aU,EU=lU,PU=sU,AU=vU,OU=dU,kU=mU,LU=gU,m0=1e-300,HU=13877787807814457e-33,z3=.8450629115104675,TU=.12837916709551256,FU=1,CU=-.0023621185607526594,RU=1,SU=-.009864944034847148,GU=1,DU=-.0098649429247001,BU=1;function WU(r){var e,n,t,i,o,f,d,c;if(hU(r))return NaN;if(r===_U)return 0;if(r===NU)return 2;if(r===0)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<HU?1-r:(t=r*r,i=TU+t*wU(t),o=FU+t*IU(t),f=i/o,r<.25?1-(r+r*f):(i=r*f,i+=r-.5,.5-i));if(n<1.25)return o=n-1,d=CU+o*EU(o),c=RU+o*PU(o),e?1+z3+d/c:1-z3-d/c;if(n<28){if(o=1/(n*n),n<2.857142857142857)i=SU+o*AU(o),o=GU+o*OU(o);else{if(r<-6)return 2-m0;i=DU+o*kU(o),o=BU+o*LU(o)}return t=yU(n,0),i=U3(-(t*t)-.5625)*U3((t-n)*(t+n)+i/o),e?2-i/n:i/n}return e?2-m0:m0*m0}var UU=WU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zU=UU,ri=zU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var VU=ri,V3=sr,qU=q,XU=xr;function QU(r,e){var n,t,i,o,f;if(o=VU(V3(e)),o!==0&&r>1){for(t=qU(-e)/V3(XU*e),t*=e,n=.5,t/=n,i=t,f=2;f<r;++f)t/=f-n,t*=e,i+=t;o+=i}return o}var KU=QU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bU=-708.3964185322641,ei=bU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var $t=q,$0=er,MU=kr,q3=ct,X3=ei;function YU(r,e){var n,t;return t=r*MU(e),e>=1?t<q3&&-e>X3?n=$0(e,r)*$t(-e):r>=1?n=$0(e/$t(e/r),r):n=$t(t-e):t>X3?n=$0(e,r)*$t(-e):e/r<q3?n=$0(e/$t(e/r),r):n=$t(t-e),n}var ZU=YU;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function JU(r,e){var n,t;if(t=r.length,t<2||e===0)return t===0?0:r[0];for(t-=1,n=r[t]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var o9=JU;/**
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
*/var jU=Function,xU=jU;/**
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
*/var rz=xU,ez=rz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nz=ez,tz=o9;function iz(r){var e,n,t,i;if(r.length>500)return o;if(e="return function evalpoly(x){",n=r.length,n===0)e+="return 0.0;";else if(n===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new nz(e)();function o(f){return tz(r,f)}}var az=iz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oz=G,l9=o9,lz=az;oz(l9,"factory",lz);var uz=l9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sz=eval,fz=sz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vz=fz;function cz(){var r;try{vz('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}var dz=cz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pz=dz,u9=pz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0=D,mz=Je,$z=1e6;function gz(r,e){var n,t,i,o,f,d;if(d={},arguments.length>1&&(d=e),t=d.tolerance||mz,o=d.maxTerms||$z,f=d.initialValue||0,n=typeof r.next=="function",n===!0){for(i of r)if(f+=i,g0(t*f)>=g0(i)||--o===0)break}else do i=r(),f+=i;while(g0(t*f)<g0(i)&&--o);return f}var hz=gz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q3=D,yz=Je,_z=1e6;function Nz(r,e){var n,t,i,o,f;f={},arguments.length>1&&(f=e),n=f.tolerance||yz,i=f.maxTerms||_z,o=f.initialValue||0;do t=r(),o+=t;while(Q3(n*o)<Q3(t)&&--i);return o}var wz=Nz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iz=u9,Ez=hz,Pz=wz,Sf;Iz()?Sf=Ez:Sf=Pz;var al=Sf;/**
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
*/function Az(r){var e=-r,n=-1,t=0;return i;function i(){return n*=e,t+=1,n/t}}var Oz=Az;/**
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
*/var kz=D,Lz=kr,Hz=Je,Tz=al,Fz=Oz;function Cz(r){var e,n;return r<=-1?NaN:(n=kz(r),n>.95?Lz(1+r)-r:n<Hz?-r*r/2:(e={initialValue:-r},Tz(Fz(r),e)))}var Rz=Cz;/**
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
*/var Sz=Rz,Gz=Sz;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dz=6.283185307179586,Bz=Dz;/**
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
*/function Wz(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}var Uz=Wz;/**
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
*/function zz(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}var Vz=zz;/**
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
*/function qz(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}var Xz=qz;/**
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
*/function Qz(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}var Kz=Qz;/**
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
*/function bz(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}var Mz=bz;/**
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
*/function Yz(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}var Zz=Yz;/**
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
*/function Jz(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}var jz=Jz;/**
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
*/function xz(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}var rV=xz;/**
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
*/function eV(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}var nV=eV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var tV=uz,iV=Gz,aV=ri,$u=sr,oV=q,lV=Bz,uV=Uz,sV=Vz,fV=Xz,vV=Kz,cV=Mz,dV=Zz,pV=jz,mV=rV,$V=nV,se=[0,0,0,0,0,0,0,0,0,0];function gV(r,e){var n,t,i,o,f;return t=(e-r)/r,i=-iV(t),o=r*i,f=$u(2*i),e<r&&(f=-f),se[0]=uV(f),se[1]=sV(f),se[2]=fV(f),se[3]=vV(f),se[4]=cV(f),se[5]=dV(f),se[6]=pV(f),se[7]=mV(f),se[8]=$V(f),se[9]=-.0005967612901927463,n=tV(se,1/r),n*=oV(-o)/$u(lV*r),e<r&&(n=-n),n+=aV($u(o))/2,n}var hV=gV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function yV(r,e){var n=1,t=r,i=e;return o;function o(){var f=n;return t+=1,n*=i/t,f}}var _V=yV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var NV=al,wV=_V;function IV(r,e,n){var t,i;return n=n||0,i=wV(r,e),t=NV(i,{initialValue:n}),t}var EV=IV;/**
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
*/function PV(r){var e,n,t;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,n=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),n/t)}var AV=PV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var OV=AV,kV=OV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var LV=kV,ol=LV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var HV=ol,TV=el,FV=tl,CV=Le,RV=sr,SV=D,ln=q,wi=er,gu=il,hu=Jt,K3=kr,h0=ct,Ii=ei,yu=wa,GV=xt;function DV(r,e){var n,t,i,o,f,d,c;return i=r+yu-.5,c=(e-r-yu+.5)/i,r<1?e<=Ii?ln(r*K3(e)-e-TV(r)):wi(e,r)*ln(-e)/FV(r):(SV(c*c*r)<=100&&r>150?(n=r*(CV(c)-c)+e*(.5-yu)/i,n=ln(n)):(o=r*K3(e/i),f=r-e,hu(o,f)<=Ii||gu(o,f)>=h0?(t=f/r,hu(o,f)/2>Ii&&gu(o,f)/2<h0?(d=wi(e/i,r/2)*ln(f/2),n=d*d):hu(o,f)/4>Ii&&gu(o,f)/4<h0&&e>r?(d=wi(e/i,r/4)*ln(f/4),n=d*d,n*=n):t>Ii&&t<h0?n=wi(e*ln(t)/i,r):n=ln(o+f)):n=wi(e/i,r)*ln(f)),n*=RV(i/GV)/HV(r),n)}var BV=DV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var _u=O,WV=Qr,b3=D,UV=jt,zV=kr,VV=er,qV=Q1;function XV(r,e){var n,t;if(_u(r)||_u(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((b3(e*(r-1))<.5||b3(e)<.2)&&(t=zV(r)*e,t<.5))return UV(t)}else if(qV(e)!==e)return NaN;return n=VV(r,e)-1,WV(n)||_u(n)?NaN:n}var QV=XV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KV=QV,bV=KV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M3=ft;function MV(r){return r>0?M3(r-1):M3(r+1)}var YV=MV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZV=YV,s9=ZV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Y3=s9,JV=ke,jV=V,y0=C;function xV(r,e){return e===jV?y0:e===y0?0:e>0?Y3(e)?r:0:Y3(e)?JV(y0,r):y0}var rq=xV;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var eq=ir,nq=Q,tq=1072693247,_0=1e300,N0=1e-300;function iq(r,e){var n,t;return t=nq(r),n=t&eq,n<=tq?e<0?_0*_0:N0*N0:e>0?_0*_0:N0*N0}var aq=iq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oq=D,Z3=C;function lq(r,e){return r===-1?(r-r)/(r-r):r===1?1:oq(r)<1==(e===Z3)?0:Z3}var uq=lq;/**
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
*/function sq(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var fq=sq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vq=Q,w0=b,J3=Or,cq=hr,dq=fq,pq=1048575,j3=1048576,mq=1072693248,$q=536870912,gq=524288,hq=20,yq=9007199254740992,_q=.9617966939259756,Nq=.9617967009544373,wq=-7028461650952758e-24,Iq=[1,1.5],Eq=[0,.5849624872207642],Pq=[0,1350039202129749e-23];function Aq(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<j3&&(e*=yq,w-=53,n=vq(e)),w+=(n>>hq)-cq|0,I=n&pq|0,n=I|mq|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=j3),e=J3(e,n),a=Iq[E],_=e-a,N=1/(e+a),i=_*N,f=w0(i,0),t=(n>>1|$q)+gq,t+=E<<18,c=J3(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*dq(o),p+=d*(f+i),o=f*f,c=3+o+p,c=w0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=w0(u,0),v=N-(u-_),m=Nq*u,$=wq*u+v*_q+Pq[E],l=Eq[E],h=w,y=m+$+l+h,y=w0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var Oq=Aq;/**
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
*/function kq(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var Lq=kq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Hq=b,Tq=Lq,Fq=1.4426950408889634,Cq=1.4426950216293335,Rq=19259629911266175e-24;function Sq(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*Tq(i),f=Cq*i,d=i*Rq-o*Fq,t=f+d,t=Hq(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var Gq=Sq;/**
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
*/function Dq(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var Bq=Dq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Wq=Q,x3=Or,Uq=b,zq=Kr,Vq=Ze,qq=vt,rd=hr,ed=ir,nd=qn,Xq=Bq,td=1048576,Qq=1071644672,Ei=20,Kq=.6931471824645996,bq=-1904654299957768e-24;function Mq(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&ed|0,v=(u>>Ei)-rd|0,l=0,u>Qq&&(l=r+(td>>v+1)>>>0,v=((l&ed)>>Ei)-rd|0,t=(l&~(nd>>v))>>>0,o=x3(0,t),l=(l&nd|td)>>Ei-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=Uq(o,0),d=o*Kq,c=(n-(o-e))*qq+o*bq,a=d+c,s=c-(a-d),o=a*a,i=a-o*Xq(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=Wq(a),r=zq(r),r+=l<<Ei>>>0,r>>Ei<=0?a=Vq(a,l):a=x3(a,r),a}var Yq=Mq;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var id=O,ad=s9,od=Qr,Zq=gr,ld=sr,Jq=D,Nu=Ye,jq=b,ud=Kr,xq=V,rX=C,wu=ir,eX=rq,nX=aq,tX=uq,iX=Oq,aX=Gq,oX=Yq,lX=1072693247,uX=1105199104,sX=1139802112,sd=1083179008,fX=1072693248,vX=1083231232,cX=3230714880,fd=31,un=1e300,sn=1e-300,dX=8008566259537294e-32,Se=[0,0],vd=[0,0];function f9(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(id(r)||id(e))return NaN;if(Nu.assign(e,Se,1,0),d=Se[0],c=Se[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return ld(r);if(e===-.5)return 1/ld(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(od(e))return tX(r,e)}if(Nu.assign(r,Se,1,0),o=Se[0],f=Se[1],f===0){if(o===0)return eX(r,e);if(r===1)return 1;if(r===-1&&ad(e))return-1;if(od(r))return r===xq?f9(-0,-e):e<0?0:rX}if(r<0&&Zq(e)===!1)return(r-r)/(r-r);if(i=Jq(r),n=o&wu|0,t=d&wu|0,s=o>>>fd|0,a=d>>>fd|0,s&&ad(e)?s=-1:s=1,t>uX){if(t>sX)return nX(r,e);if(n<lX)return a===1?s*un*un:s*sn*sn;if(n>fX)return a===0?s*un*un:s*sn*sn;m=aX(vd,i)}else m=iX(vd,i,n);if(l=jq(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,Nu.assign($,Se,1,0),y=ud(Se[0]),g=ud(Se[1]),y>=sd){if(y-sd|g||v+dX>$-u)return s*un*un}else if((y&wu)>=vX&&(y-cX|g||v<=$-u))return s*sn*sn;return $=oX(y,u,v),s*$}var pX=f9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mX=pX,$X=mX;/**
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
*/function gX(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}var hX=gX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yX=Na,cd=$X,_X=q,NX=hX,wX=143.01608;function IX(r){var e,n,t;return e=1/r,e=1+e*NX(e),n=_X(r),r>wX?(t=cd(r,.5*r-.25),n=t*(t/n)):n=cd(r,r-.5)/n,yX*n*e}var EX=IX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var PX=nl;function AX(r,e){return e/((1+PX*r)*r)}var OX=AX;/**
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
*/function kX(r){var e,n,t;return r===0?1:(r<0?e=-r:e=r,e<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),t=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,n=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),t=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),n/t)}var LX=kX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var HX=O,TX=gr,FX=_a,dd=D,CX=Br,RX=ya,pd=C,md=V,$d=xr,gd=EX,hd=OX,SX=LX;function GX(r){var e,n,t,i;if(TX(r)&&r<0||r===md||HX(r))return NaN;if(r===0)return FX(r)?md:pd;if(r>171.61447887182297)return pd;if(r<-170.5674972726612)return 0;if(n=dd(r),n>33)return r>=0?gd(r):(t=CX(n),t&1?e=1:e=-1,i=n-t,i>.5&&(t+=1,i=n-t),i=n*RX($d*i),e*$d/(dd(i)*gd(n)));for(i=1;r>=3;)r-=1,i*=r;for(;r<0;){if(r>-1e-9)return hd(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return hd(r,i);i/=r,r+=1}return r===2?i:(r-=2,i*SX(r))}var DX=GX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BX=DX,WX=BX;/**
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
*/function UX(r){var e,n,t;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(n=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),t=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,n=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),t=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),n/t)}var zX=UX;/**
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
*/function VX(r){var e,n,t;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(n=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,n=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),n/t)}var qX=VX;/**
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
*/function XX(r){var e,n,t;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(n=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),t=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,n=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),t=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),n/t)}var QX=XX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Iu=kr,KX=Je,bX=zX,MX=qX,YX=QX,ZX=.15896368026733398,JX=.5281534194946289,jX=.45201730728149414;function xX(r,e,n){var t,i,o,f;if(r<KX)return-Iu(r);if(e===0||n===0)return 0;if(i=0,r>2){if(r>=3){do r-=1,n-=1,i+=Iu(r);while(r>=3);n=r-2}return o=n*(r+1),f=bX(n),i+=o*ZX+o*f,i}return r<1&&(i+=-Iu(r),n=e,e=r,r+=1),r<=1.5?(o=MX(e),t=e*n,i+=t*JX+t*o,i):(o=n*e,f=YX(-n),i+=o*jX+o*f,i)}var rQ=xX;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var yd=WX,_d=jt,eQ=Le,nQ=O,Nd=rQ;function tQ(r){return nQ(r)?NaN:r<0?r<-.5?yd(1+r)-1:_d(-eQ(r)+Nd(r+2,r+1,r)):r<2?_d(Nd(r+1,r,r-1)):yd(1+r)-1}var iQ=tQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aQ=iQ,oQ=aQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function lQ(r,e){var n,t,i,o;return n=-e,e=-e,t=r+1,i=1,f;function f(){return o=n/t,n*=e,i+=1,n/=i,t+=1,o}}var uQ=lQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var sQ=bV,fQ=al,vQ=oQ,cQ=uQ;function dQ(r,e,n){var t,i,o,f,d;return i=vQ(r),o=(i+1)/r,f=sQ(e,r),i-=f,i/=r,d=cQ(r,e),f+=1,t=n?o:0,i=-f*fQ(d,{initialValue:(t-i)/f}),n&&(i=-i),[i,o]}var pQ=dQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mQ=11754943508222875e-54,v9=mQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fo=D,Pe=v9,$Q=Je,gQ=1e6;function hQ(r,e,n){var t,i,o,f,d,c,s;if(t=typeof r.next=="function",s=t?r.next().value:r(),f=s[1],o=s[0],f===0&&(f=Pe),d=f,c=0,t===!0)do s=r.next().value,s&&(c=s[1]+s[0]*c,c===0&&(c=Pe),d=s[1]+s[0]/d,d===0&&(d=Pe),c=1/c,i=d*c,f*=i);while(Fo(i-1)>e&&--n);else do s=r(),s&&(c=s[1]+s[0]*c,c===0&&(c=Pe),d=s[1]+s[0]/d,d===0&&(d=Pe),c=1/c,i=d*c,f*=i);while(s&&Fo(i-1)>e&&--n);return o/f}function yQ(r,e,n){var t,i,o,f,d,c;if(t=typeof r.next=="function",c=t?r.next().value:r(),o=c[1],o===0&&(o=Pe),f=o,d=0,t===!0)do c=r.next().value,c&&(d=c[1]+c[0]*d,d===0&&(d=Pe),f=c[1]+c[0]/f,f===0&&(f=Pe),d=1/d,i=f*d,o*=i);while(c&&Fo(i-1)>e&&--n);else do c=r(),c&&(d=c[1]+c[0]*d,d===0&&(d=Pe),f=c[1]+c[0]/f,f===0&&(f=Pe),d=1/d,i=f*d,o*=i);while(c&&Fo(i-1)>e&&--n);return o}function _Q(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||gQ,i=t.tolerance||$Q,t.keep?yQ(r,i,n):hQ(r,i,n)}var NQ=_Q;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c9=D,wQ=Je,Dt=v9,IQ=1e6;function EQ(r,e,n){var t,i,o,f,d,c;c=r(),d=c[1],i=c[0],d===0&&(d=Dt),o=d,f=0;do c=r(),c&&(f=c[1]+c[0]*f,f===0&&(f=Dt),o=c[1]+c[0]/o,o===0&&(o=Dt),f=1/f,t=o*f,d*=t);while(c&&c9(t-1)>e&&--n);return i/d}function PQ(r,e,n){var t,i,o,f,d;d=r(),f=d[1],f===0&&(f=Dt),i=f,o=0;do d=r(),d&&(o=d[1]+d[0]*o,o===0&&(o=Dt),i=d[1]+d[0]/i,i===0&&(i=Dt),o=1/o,t=i*o,f*=t);while(d&&c9(t-1)>e&&--n);return f}function AQ(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||wQ,n=t.maxIter||IQ,t.keep?PQ(r,i,n):EQ(r,i,n)}var OQ=AQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kQ=u9,LQ=NQ,HQ=OQ,Gf;kQ()?Gf=LQ:Gf=HQ;var d9=Gf;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function TQ(r,e){var n=e-r+1,t=r,i=0;return o;function o(){return i+=1,n+=2,[i*(t-i),n]}}var FQ=TQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var CQ=d9,RQ=FQ;function SQ(r,e){var n=RQ(r,e);return 1/(e-r+1+CQ(n))}var GQ=SQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var DQ=el,BQ=Br,Pi=tl,wd=D,WQ=q,Id=er,fe=kr,UQ=JW,Ed=xm,zQ=Na,Pd=ct,VQ=C,qQ=eU,XQ=KU,Ad=ZU,QQ=hV,Eu=EV,Od=BV,KQ=pQ,kd=GQ,bQ=170;function p9(r,e,n,t){var i,o,f,d,c,s,a,l,u,v,m,$,y,g,h;if(r<0||e<=0)return NaN;if(o=n===void 0?!0:n,l=t,u=0,e>=bQ&&!o)return l&&e*4<r?(u=e*fe(r)-r,u+=fe(kd(e,r))):!l&&e>4*r?(u=e*fe(r)-r,d=0,u+=fe(Eu(e,r,d)/e)):(u=p9(e,r,!0,l),u===0?l?(u=1+1/(12*e)+1/(288*e*e),u=fe(u)-e+(e-.5)*fe(e),u+=fe(zQ)):(u=e*fe(r)-r,d=0,u+=fe(Eu(e,r,d)/e)):u=fe(u)+DQ(e)),u>Pd?VQ:WQ(u);switch(a=e<30&&e<=r+1&&r<Pd,a?(g=BQ(e),v=g===e,c=v?!1:wd(g-e)===.5):v=c=!1,v&&r>.6?(l=!l,f=0):c&&r>.2?(l=!l,f=1):r<UQ&&e>1?f=6:r<.5?-.4/fe(r)<e?f=2:f=3:r<1.1?r*.75<e?f=2:f=3:(s=!1,o&&e>20&&(m=wd((r-e)/e),e>200?20/e>m*m&&(s=!0):m<.4&&(s=!0)),s?f=5:r-1/(3*r)<e?f=2:(f=4,l=!l)),f){case 0:u=qQ(e,r),o===!1&&(u*=Pi(e));break;case 1:u=XQ(e,r),o===!1&&(u*=Pi(e));break;case 2:u=o?Od(e,r):Ad(e,r),u!==0&&(d=0,i=!1,l&&(d=o?1:Pi(e),o||u>=1||Ed*u>d?(d/=u,o||e<1||Ed/e>d?(d*=-e,i=!0):d=0):d=0)),u*=Eu(e,r,d)/e,i&&(l=!1,u=-u);break;case 3:l=!l,y=KQ(e,r,l),u=y[0],h=y[1],l=!1,o&&(u/=h);break;case 4:u=o?Od(e,r):Ad(e,r),u!==0&&(u*=kd(e,r));break;case 5:u=QQ(e,r),r>=e&&(l=!l);break;case 6:u=o?Id(r,e)/Pi(e+1):Id(r,e)/e,u*=1-e*r/(e+1);break}return o&&u>1&&(u=1),l&&($=o?1:Pi(e),u=$-u),u}var MQ=p9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YQ=MQ,Ia=YQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var gt=q,I0=er,ZQ=kr,Ld=ct,Hd=ei;function JQ(r,e){var n,t;return t=r*ZQ(e),e>=1?t<Ld&&-e>Hd?n=I0(e,r)*gt(-e):r>=1?n=I0(e/gt(e/r),r):n=gt(t-e):t>Hd?n=I0(e,r)*gt(-e):e/r<Ld?n=I0(e/gt(e/r),r):n=gt(t-e),n}var jQ=JQ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var xQ=ol,rK=el,eK=tl,nK=Le,tK=sr,iK=D,fn=q,Ai=er,Pu=il,Au=Jt,Td=kr,E0=ct,Oi=ei,Ou=wa,aK=xt;function oK(r,e){var n,t,i,o,f,d,c;return i=r+Ou-.5,c=(e-r-Ou+.5)/i,r<1?e<=Oi?fn(r*Td(e)-e-rK(r)):Ai(e,r)*fn(-e)/eK(r):(iK(c*c*r)<=100&&r>150?(n=r*(nK(c)-c)+e*(.5-Ou)/i,n=fn(n)):(o=r*Td(e/i),f=r-e,Au(o,f)<=Oi||Pu(o,f)>=E0?(t=f/r,Au(o,f)/2>Oi&&Pu(o,f)/2<E0?(d=Ai(e/i,r/2)*fn(f/2),n=d*d):Au(o,f)/4>Oi&&Pu(o,f)/4<E0&&e>r?(d=Ai(e/i,r/4)*fn(f/4),n=d*d,n*=n):t>Oi&&t<E0?n=Ai(e*fn(t)/i,r):n=fn(o+f)):n=Ai(e/i,r)*fn(f)),n*=tK(i/aK)/xQ(r),n)}var lK=oK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var uK=XD,Fd=YW,sK=Ia,fK=Le,P0=D,Cd=er,vK=kr,cK=ha,Rd=Je,dK=jQ,pK=lK,vn=new Array(30);function mK(r,e,n,t,i,o,f){var d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;if(u=e-1,I=r+u/2,t<.35?y=fK(-t):y=vK(n),E=-I*y,h=pK(e,E),h<=cK)return i;for(f?(d=h/uK(r,e),d/=Cd(I,e)):d=dK(e,E)/Cd(I,e),d*=o,vn[0]=1,p=sK(E,e,!0,!0),p/=h,a=i+d*p,s=1,v=y/2,v*=v,m=1,g=4*I*I,l=e,N=1;N<vn.length;++N){for(s+=2,vn[N]=0,$=e-N,c=3,_=1;_<N;++_)$=_*e-N,vn[N]+=$*vn[N-_]/Fd(c),c+=2;if(vn[N]/=N,vn[N]+=u/Fd(s),p=(l*(l+1)*p+(E+l+1)*m)/g,m*=v,l+=2,w=d*vn[N]*p,a+=w,w>1){if(P0(w)<P0(Rd*a))break}else if(P0(w/Rd)<P0(a))break}return a}var $K=mK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/function gK(r,e,n){var t,i;if(n===0)return 1;for(t=1,i=0;i<n;i++)t*=(r+i)/(e+i);return t}var hK=gK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yK=jo,Sd=O,ku=C;function _K(r,e){return Sd(r)||Sd(e)?NaN:r===ku||e===ku?ku:r===e&&r===0?yK(r)?r:e:r>e?r:e}var NK=_K;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wK=NK,IK=wK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd=D,EK=IK;function PK(r,e){return EK(Gd(r),Gd(e))}var AK=PK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OK=AK,kK=OK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd=D,LK=Jt;function HK(r,e){return LK(Dd(r),Dd(e))}var TK=HK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FK=TK,CK=FK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Lu=ol,RK=kK,SK=CK,Bd=jt,cn=Le,Wd=sr,A0=D,ye=q,_e=er,GK=Jt,re=kr,Ne=ct,ht=ei,Hu=wa,DK=xt;function BK(r,e,n,t,i){var o,f,d,c,s,a,l,u,v,m,$,y,g,h;if(!i)return _e(n,r)*_e(t,e);if(g=r+e,c=r+Hu-.5,s=e+Hu-.5,a=g+Hu-.5,o=Lu(g),o/=Lu(r)*Lu(e),o*=Wd(s/DK),o*=Wd(c/a),l=(n*e-t*c)/c,u=(t*r-n*s)/s,SK(l,u)<.2)if(l*u>0||GK(r,e)<1)A0(l)<.1?o*=ye(r*cn(l)):o*=_e(n*a/c,r),A0(u)<.1?o*=ye(e*cn(u)):o*=_e(t*a/s,e);else if(RK(l,u)<.5)f=r<e,d=e/r,f&&d*u<.1||!f&&l/d>.1?(v=Bd(d*cn(u)),v=l+v+v*l,v=r*cn(v),o*=ye(v)):(v=Bd(cn(l)/d),v=u+v+v*u,v=e*cn(v),o*=ye(v));else if(A0(l)<A0(u))if(h=r*cn(l)+e*re(t*a/s),h<=ht||h>=Ne){if(h+=re(o),h>=Ne)return NaN;o=ye(h)}else o*=ye(h);else if(h=e*cn(u)+r*re(n*a/c),h<=ht||h>=Ne){if(h+=re(o),h>=Ne)return NaN;o=ye(h)}else o*=ye(h);else if($=n*a/c,y=t*a/s,l=r*re($),u=e*re(y),l>=Ne||l<=ht||u>=Ne||u<=ht)if(r<e)if(m=_e(y,e/r),v=r*(re($)+re(m)),v<Ne&&v>ht)o*=_e(m*$,r);else{if(u+=l+re(o),u>=Ne)return NaN;o=ye(u)}else if(m=_e($,r/e),v=(re(m)+re(y))*e,v<Ne&&v>ht)o*=_e(m*y,e);else{if(u+=l+re(o),u>=Ne)return NaN;o=ye(u)}else o*=_e($,r)*_e(y,e);return o}var J1=BK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var WK=d9,UK=J1,zK={keep:!0,maxIter:1e3};function VK(r,e,n,t){var i=0;return o;function o(){var f,d,c;return d=(r+i-1)*(r+e+i-1)*i*(e-i)*n*n,f=r+2*i-1,d/=f*f,c=i,c+=i*(e-i)*n/(r+2*i-1),c+=(r+i)*(r*t-e*n+1+i*(2-n))/(r+2*i+1),i+=1,[d,c]}}function qK(r,e,n,t,i,o){var f,d,c;return f=UK(r,e,n,t,i),o&&(o[1]=f),f===0?f:(c=VK(r,e,n,t),d=WK(c,zK),f/d)}var XK=qK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var QK=9007199254740991,m9=QK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KK=2147483647,bK=KK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function MK(r,e){var n=0,t;if(r===0)return e;if(e===0)return r;for(;!(r&1)&&!(e&1);)r>>>=1,e>>>=1,n+=1;for(;!(r&1);)r>>>=1;for(;e;){for(;!(e&1);)e>>>=1;r>e&&(t=e,e=r,r=t),e-=r}return r<<n}var YK=MK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function ZK(r,e){var n=1,t;if(r===0)return e;if(e===0)return r;for(;r%2===0&&e%2===0;)r/=2,e/=2,n*=2;for(;r%2===0;)r/=2;for(;e;){for(;e%2===0;)e/=2;r>e&&(t=e,e=r,r=t),e-=r}return n*r}var JK=ZK;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ud=O,zd=gr,Vd=C,qd=V,Xd=bK,jK=YK,xK=JK;function rb(r,e){return Ud(r)||Ud(e)?NaN:r===Vd||e===Vd||r===qd||e===qd?NaN:zd(r)&&zd(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=Xd&&e<=Xd?jK(r,e):xK(r,e)):NaN}var eb=rb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nb=eb,tb=nb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ib=m9,ab=C,Qd=gr,Kd=O,ob=M1,lb=Br,ub=tb;function Df(r,e){var n,t,i,o,f,d,c;if(Kd(r)||Kd(e))return NaN;if(!Qd(r)||!Qd(e))return NaN;if(e<0||(t=1,r<0&&(r=-r+e-1,ob(e)&&(t*=-1)),e>r))return 0;if(e===0||e===r)return t;if(e===1||e===r-1)return t*r;for(r-e<e&&(e=r-e),c=lb(ib/r),n=1,f=1;f<=e&&!(n>c);f++)n*=r,n/=f,r-=1;return f>e?t*n:(i=Df(r,e-f+1),i===ab?t*i:(o=Df(e,e-f+1),d=ub(i,o),i/=d,o/=d,n/=o,t*n*i))}var sb=Df;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fb=sb,vb=fb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bd=vb,Qn=Br,ki=er,cb=ha;function db(r,e,n,t){var i,o,f,d,c;if(o=ki(n,r),o>cb)for(d=o,c=Qn(r-1);c>e;c--)d*=(c+1)*t/((r-c)*n),o+=d;else if(f=Qn(r*n),f<=e+1&&(f=Qn(e+2)),o=ki(n,f)*ki(t,r-f),o*=bd(Qn(r),Qn(f)),o===0)for(c=f-1;c>e;c--)o+=ki(n,c)*ki(t,r-c),o*=bd(Qn(r),Qn(c));else{for(d=o,i=o,c=f-1;c>e;c--)d*=(c+1)*t/((r-c)*n),o+=d;for(d=i,c=f+1;c<=r;c++)d*=(r-c+1)*n/(c*t),o+=d}return o}var pb=db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var mb=J1;function $b(r,e,n,t,i,o,f){var d,c,s,a;if(d=mb(r,e,n,t,o),f&&(f[1]=d),d/=r,d===0)return d;for(s=1,c=1,a=0;a<i-1;++a)c*=(r+e+a)*n/(r+a+1),s+=c;return d*=s,d}var gb=$b;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Tu=ol,hb=al,yb=Le,_b=sr,Fu=q,O0=er,Li=kr,Nb=ha,Md=ct,Yd=ei,Cu=wa,wb=xt,Zd={maxTerms:100};function Ib(r,e,n,t){var i=1-e,o=1;return f;function f(){var d=t/r;return r+=1,t*=i*n/o,o+=1,i+=1,d}}function Eb(r,e,n,t,i,o,f){var d,c,s,a,l,u,v,m;return i?(v=r+e,c=r+Cu-.5,s=e+Cu-.5,a=v+Cu-.5,d=Tu(v)/(Tu(r)*Tu(e)),l=Li(a/s)*(e-.5),u=Li(n*a/c)*r,l>Yd&&l<Md&&u>Yd&&u<Md?(r*e<s*10?d*=Fu((e-.5)*yb(r/s)):d*=O0(a/s,e-.5),d*=O0(n*a/c,r),d*=_b(c/wb),o&&(o[1]=d*O0(f,e))):(d=Li(d)+l+u+(Li(c)-1)/2,o&&(o[1]=Fu(d+e*Li(f))),d=Fu(d))):d=O0(n,r),d<Nb?t:(m=Ib(r,e,n,d),Zd.initialValue=t,hb(m,Zd))}var Pb=Eb,Ab=O,Ob=jt,k0=Br,Jd=Le,jd=Y1,ee=yS,Ru=sr,kb=q,Hi=er,Lb=il,xd=Jt,L0=xm,r4=ha,Hb=wS,Tb=r9,$9=xr,dn=$K,Su=hK,Fb=J1,e4=XK,Cb=pb,Ti=gb,we=Pb,Rb=1/$9;function Sb(r,e,n,t,i,o,f,d){var c,s,a,l,u,v,m,$,y,g,h,p;if(p=1-r,m=d,$=d+f,o[$]=-1,Ab(r)||r<0||r>1)return o[m]=NaN,o[$]=NaN,o;if(t){if(e<0||n<0)return o[m]=NaN,o[$]=NaN,o;if(e===0){if(n===0)return o[m]=NaN,o[$]=NaN,o;if(n>0)return o[m]=i?0:1,o}else if(n===0&&e>0)return o[m]=i?1:0,o}else if(e<=0||n<=0)return o[m]=NaN,o[$]=NaN,o;return r===0?(e===1?o[$]=1:o[$]=e<1?L0/2:r4*2,i?(o[m]=t?1:ee(e,n),o):(o[m]=0,o)):r===1?(n===1?o[$]=1:o[$]=n<1?L0/2:r4*2,i?o[m]=0:o[m]=t?1:ee(e,n),o):e===.5&&n===.5?(o[$]=Rb*Ru(p*r),h=jd(Ru(i?p:r)),h/=Tb,t||(h*=$9),o[m]=h,o):(e===1&&(v=n,n=e,e=v,v=p,p=r,r=v,i=!i),n===1?e===1?(o[m]=i?p:r,o[$]=1,o):(o[$]=e*Hi(r,e-1),p<.5?h=i?-Ob(e*Jd(-p)):kb(e*Jd(-p)):h=i?-(Hi(r,e)-1):Hi(r,e),t||(h/=e),o[m]=h,o):(xd(e,n)<=1?(r>.5&&(v=n,n=e,e=v,v=p,p=r,r=v,i=!i),Lb(e,n)<=1?e>=xd(.2,n)||Hi(r,e)<=.9?i?(a=-(t?1:ee(e,n)),i=!1,a=-we(e,n,r,a,t,o,p)):a=we(e,n,r,0,t,o,p):(v=n,n=e,e=v,v=p,p=r,r=v,i=!i,p>=.3?i?(a=-(t?1:ee(e,n)),i=!1,a=-we(e,n,r,a,t,o,p)):a=we(e,n,r,0,t,o,p):(t?s=1:s=Su(e+n,e,20),a=Ti(e,n,r,p,20,t,o),i?(a-=t?1:ee(e,n),i=!1,a=-dn(e+20,n,r,p,a,s,t)):a=dn(e+20,n,r,p,a,s,t))):n<=1||r<.1&&Hi(n*r,e)<=.7?i?(a=-(t?1:ee(e,n)),i=!1,a=-we(e,n,r,a,t,o,p)):a=we(e,n,r,0,t,o,p):(v=n,n=e,e=v,v=p,p=r,r=v,i=!i,p>=.3?i?(a=-(t?1:ee(e,n)),i=!1,a=-we(e,n,r,a,t,o,p)):a=we(e,n,r,0,t,o,p):e>=15?i?(a=-(t?1:ee(e,n)),i=!1,a=-dn(e,n,r,p,a,1,t)):a=dn(e,n,r,p,0,1,t):(t?s=1:s=Su(e+n,e,20),a=Ti(e,n,r,p,20,t,o),i?(a-=t?1:ee(e,n),i=!1,a=-dn(e+20,n,r,p,a,s,t)):a=dn(e+20,n,r,p,a,s,t)))):(e<n?c=e-(e+n)*r:c=(e+n)*p-n,c<0&&(v=n,n=e,e=v,v=p,p=r,r=v,i=!i),n<40?k0(e)===e&&k0(n)===n&&e<Hb-100?(y=e-1,g=n+y,a=Cb(g,y,r,p),t||(a*=ee(e,n))):n*r<=.7?i?(a=-(t?1:ee(e,n)),i=!1,a=-we(e,n,r,a,t,o,p)):a=we(e,n,r,0,t,o,p):e>15?(g=k0(n),g===n&&(g-=1),l=n-g,t?s=1:s=Su(e+l,l,g),a=Ti(l,e,p,r,g,t),a=dn(e,l,r,p,a,1,t),a/=s):t?(g=k0(n),l=n-g,l<=0&&(g-=1,l+=1),a=Ti(l,e,p,r,g,t),a+=Ti(e,l,r,p,20,t),i&&(a-=1),a=dn(e+20,l,r,p,a,1,t),i&&(a=-a,i=!1)):a=e4(e,n,r,p,t,o):a=e4(e,n,r,p,t,o)),o[$]<0&&(o[$]=Fb(e,n,r,p,!0)),u=p*r,o[$]!==0&&(L0*u<o[$]?o[$]=L0/2:o[$]/=u),o[m]=i?(t?1:ee(e,n))-a:a,o))}var g9=Sb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gb=g9;function Db(r,e,n,t,i){return Gb(r,e,n,t,i,[0,0],1,0)}var Bb=Db;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wb=G,h9=Bb,Ub=g9;Wb(h9,"assign",Ub);var zb=h9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vb=zb.assign;function qb(r,e,n,t,i){var o=[0,0];return t=t!==!1,i=i===!0,Vb(r,e,n,t,i,o,1,0),o[0]}var Xb=qb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qb=Xb,ni=Qb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kb=ni,Gu=O;function bb(r,e,n){return Gu(r)||Gu(e)||Gu(n)||e<=0||n<=0?NaN:r<=0?0:r>=1?1:Kb(r,e,n)}var Mb=bb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yb=nr,Zb=ni,Du=O;function Jb(r,e){if(Du(r)||Du(e)||r<=0||e<=0)return Yb(NaN);return n;function n(t){return Du(t)?NaN:t<=0?0:t>=1?1:Zb(t,r,e)}}var jb=Jb;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xb=G,y9=Mb,rM=jb;xb(y9,"factory",rM);var j1=y9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eM=j1,Bu=O,nM=C;function tM(r,e,n){return Bu(r)||Bu(e)||Bu(n)||e<=0||n<=0?NaN:r<=0?0:r===nM?1:eM(r/(1+r),e,n)}var iM=tM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var aM=nr,oM=j1.factory,Wu=O,lM=C;function uM(r,e){var n;if(Wu(r)||Wu(e)||r<=0||e<=0)return aM(NaN);return n=oM(r,e),t;function t(i){return Wu(i)?NaN:i<=0?0:i===lM?1:n(i/(1+i))}}var sM=uM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fM=G,_9=iM,vM=sM;fM(_9,"factory",vM);var cM=_9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dM=Q;function pM(r){var e=dM(r);return!!(e>>>31)}var mM=pM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $M=mM,gM=$M;/**
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
*/function hM(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}var yM=hM;/**
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
*/function _M(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}var NM=_M;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var wM=O,IM=C,Uu=r9,EM=Jm,PM=V,AM=yM,OM=NM,n4=6123233995736766e-32,kM=2.414213562373095;function LM(r){var e,n,t,i;return wM(r)||r===0?r:r===IM?Uu:r===PM?-Uu:(r<0&&(n=!0,r=-r),e=0,r>kM?(t=Uu,e=1,r=-(1/r)):r<=.66?t=0:(t=EM,e=2,r=(r-1)/(r+1)),i=r*r,i=i*AM(i)/OM(i),i=r*i+r,e===2?i+=.5*n4:e===1&&(i+=n4),t+=i,n?-t:t)}var HM=LM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TM=HM,FM=TM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var H0=Qr,pn=ke,CM=gM,t4=O,RM=FM,SM=C,mn=xr;function GM(r,e){var n;return t4(e)||t4(r)?NaN:H0(e)?e===SM?H0(r)?pn(mn/4,r):pn(0,r):H0(r)?pn(3*mn/4,r):pn(mn,r):H0(r)?pn(mn/2,r):r===0?e>=0&&!CM(e)?pn(0,r):pn(mn,r):e===0?pn(mn/2,r):(n=RM(r/e),e<0?n<=0?n+mn:n-mn:n)}var DM=GM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var BM=DM,N9=BM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu=O,WM=N9,UM=.3183098861837907;function zM(r,e,n){return zu(r)||zu(n)||zu(e)||n<=0?NaN:UM*WM(r-e,n)+.5}var VM=zM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qM=nr,Vu=O,XM=N9,QM=.3183098861837907;function KM(r,e){if(Vu(e)||Vu(r)||e<=0)return qM(NaN);return n;function n(t){return Vu(t)?NaN:QM*XM(t-r,e)+.5}}var bM=KM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var MM=G,w9=VM,YM=bM;MM(w9,"factory",YM);var ZM=w9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var JM=Ia,qu=O,jM=C;function xM(r,e,n){return qu(r)||qu(e)||qu(n)||e<0||n<=0?NaN:e===0?r<0?0:1:r<=0?0:r===jM?1:JM(r*n,e)}var rY=xM;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i4=O;function eY(r,e){return i4(r)||i4(e)?NaN:r<e?0:1}var nY=eY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tY=nr,a4=O;function iY(r){if(a4(r))return tY(NaN);return e;function e(n){return a4(n)?NaN:n<r?0:1}}var aY=iY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oY=G,I9=nY,lY=aY;oY(I9,"factory",lY);var ti=I9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uY=nr,sY=ti.factory,fY=Ia,o4=O,vY=C;function cY(r,e){if(o4(r)||o4(e)||r<0||e<=0)return uY(NaN);if(r===0)return sY(0);return n;function n(t){return t<=0?0:t===vY?1:fY(t*e,r)}}var dY=cY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pY=G,E9=rY,mY=dY;pY(E9,"factory",mY);var dt=E9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $Y=dt,l4=O;function gY(r,e){return l4(r)||l4(e)||e<0?NaN:e===0?r<0?0:1:r<=0?0:$Y(r*r,e/2,.5)}var hY=gY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yY=ti.factory,_Y=dt.factory,NY=O;function wY(r){var e;if(r===0)return yY(0);return e=_Y(r/2,.5),n;function n(t){return NY(t)?NaN:t<0?0:e(t*t)}}var IY=wY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EY=G,P9=hY,PY=IY;EY(P9,"factory",PY);var AY=P9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var OY=dt;function kY(r,e){return OY(r,e/2,.5)}var LY=kY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var HY=dt.factory;function TY(r){return HY(r/2,.5)}var FY=TY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var CY=G,A9=LY,RY=FY;CY(A9,"factory",RY);var SY=A9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu=O,GY=b1,DY=xr;function BY(r,e,n){var t;return Xu(r)||Xu(e)||Xu(n)||n<0?NaN:n===0?r<e?0:1:r<e-n?0:r>e+n?1:(t=(r-e)/n,(1+t+GY(t)/DY)/2)}var WY=BY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var UY=nr,zY=ti.factory,Qu=O,VY=b1,qY=xr;function XY(r,e){if(Qu(r)||Qu(e)||e<0)return UY(NaN);if(e===0)return zY(r);return n;function n(t){var i;return Qu(t)?NaN:t<r-e?0:t>r+e?1:(i=(t-r)/e,(1+i+VY(i)/qY)/2)}}var QY=XY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var KY=G,O9=WY,bY=QY;KY(O9,"factory",bY);var MY=O9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YY=Br;function ZY(r){return YY(r)===r&&r>=0}var JY=ZY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jY=JY,k9=jY;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xY=k9,rZ=dt;function eZ(r,e,n){return xY(e)?rZ(r,e,n):NaN}var nZ=eZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tZ=k9,iZ=nr,aZ=dt.factory;function oZ(r,e){return tZ(r)?aZ(r,e):iZ(NaN)}var lZ=oZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uZ=G,L9=nZ,sZ=lZ;uZ(L9,"factory",sZ);var fZ=L9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vZ=O,cZ=q,dZ=C;function pZ(r,e){return vZ(e)||e<0||e===dZ?NaN:r<0?0:1-cZ(-e*r)}var mZ=pZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $Z=nr,gZ=O,hZ=q,yZ=C;function _Z(r){if(gZ(r)||r<0||r===yZ)return $Z(NaN);return e;function e(n){return n<0?0:1-hZ(-r*n)}}var NZ=_Z;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wZ=G,H9=mZ,IZ=NZ;wZ(H9,"factory",IZ);var EZ=H9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u4=ni,Ku=O,PZ=C;function AZ(r,e,n){return Ku(r)||Ku(e)||Ku(n)||e<=0||n<=0?NaN:r<=0?0:r===PZ?1:e*r>n?u4(e*r/(n+e*r),e/2,n/2,!0,!1):u4(n/(n+e*r),n/2,e/2,!0,!0)}var OZ=AZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kZ=nr,s4=ni,bu=O,LZ=C;function HZ(r,e){if(bu(r)||bu(e)||r<=0||e<=0)return kZ(NaN);return n;function n(t){return bu(t)?NaN:t<=0?0:t===LZ?1:r*t>e?s4(r*t/(e+r*t),r/2,e/2,!0,!1):s4(e/(e+r*t),e/2,r/2,!0,!0)}}var TZ=HZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var FZ=G,T9=OZ,CZ=TZ;FZ(T9,"factory",CZ);var RZ=T9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0=O,SZ=q,GZ=er;function DZ(r,e,n,t){var i;return T0(r)||T0(e)||T0(n)||T0(t)||e<=0||n<=0?NaN:r<=t?0:(i=(r-t)/n,SZ(-GZ(i,-e)))}var BZ=DZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var WZ=nr,F0=O,UZ=q,zZ=er;function VZ(r,e,n){if(F0(r)||F0(e)||F0(n)||r<=0||e<=0)return WZ(NaN);return t;function t(i){var o;return F0(i)?NaN:i<=n?0:(o=(i-n)/e,UZ(-zZ(o,-r)))}}var qZ=VZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var XZ=G,F9=BZ,QZ=qZ;XZ(F9,"factory",QZ);var KZ=F9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu=O,f4=q;function bZ(r,e,n){var t;return Mu(r)||Mu(e)||Mu(n)||n<=0?NaN:(t=(r-e)/n,f4(-f4(-t)))}var MZ=bZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var YZ=nr,Yu=O,v4=q;function ZZ(r,e){if(Yu(r)||Yu(e)||e<=0)return YZ(NaN);return n;function n(t){var i;return Yu(t)?NaN:(i=(t-r)/e,v4(-v4(-i)))}}var JZ=ZZ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jZ=G,C9=MZ,xZ=JZ;jZ(C9,"factory",xZ);var rJ=C9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eJ=Ia,Zu=O;function nJ(r,e,n){return Zu(r)||Zu(e)||Zu(n)||e<=0||n<=0?NaN:r<=0?0:eJ(n/r,e,!0,!0)}var tJ=nJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iJ=nr,aJ=Ia,Ju=O;function oJ(r,e){if(Ju(r)||Ju(e)||r<=0||e<=0)return iJ(NaN);return n;function n(t){return Ju(t)?NaN:t<=0?0:aJ(e/t,r,!0,!0)}}var lJ=oJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uJ=G,R9=tJ,sJ=lJ;uJ(R9,"factory",sJ);var fJ=R9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju=O,c4=er;function vJ(r,e,n){return ju(r)||ju(e)||ju(n)||e<=0||n<=0?NaN:r<=0?0:r>=1?1:1-c4(1-c4(r,e),n)}var cJ=vJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dJ=nr,xu=O,d4=er;function pJ(r,e){if(xu(r)||xu(e)||r<=0||e<=0)return dJ(NaN);return n;function n(t){return xu(t)?NaN:t<=0?0:t>=1?1:1-d4(1-d4(t,r),e)}}var mJ=pJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $J=G,S9=cJ,gJ=mJ;$J(S9,"factory",gJ);var hJ=S9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rs=O,p4=q;function yJ(r,e,n){var t;return rs(r)||rs(e)||rs(n)||n<=0?NaN:(t=(r-e)/n,r<e?.5*p4(t):1-.5*p4(-t))}var _J=yJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var NJ=nr,es=O,m4=q;function wJ(r,e){if(es(r)||es(e)||e<=0)return NJ(NaN);return n;function n(t){var i;return es(t)?NaN:(i=(t-r)/e,t<r?.5*m4(i):1-.5*m4(-i))}}var IJ=wJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var EJ=G,G9=_J,PJ=IJ;EJ(G9,"factory",PJ);var AJ=G9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ns=O,OJ=ri,kJ=sr;function LJ(r,e,n){var t;return ns(r)||ns(e)||ns(n)||n<=0?NaN:r<e?0:(t=kJ(n/(2*(r-e))),OJ(t))}var HJ=LJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var TJ=nr,ts=O,FJ=ri,CJ=sr;function RJ(r,e){if(ts(r)||ts(e)||e<=0)return TJ(NaN);return n;function n(t){var i;return ts(t)?NaN:t<r?0:(i=CJ(e/(2*(t-r))),FJ(i))}}var SJ=RJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var GJ=G,D9=HJ,DJ=SJ;GJ(D9,"factory",DJ);var BJ=D9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var is=O,WJ=q;function UJ(r,e,n){var t;return is(r)||is(e)||is(n)||n<0?NaN:n===0?r<e?0:1:(t=(r-e)/n,1/(1+WJ(-t)))}var zJ=UJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var VJ=nr,qJ=ti.factory,as=O,XJ=q;function QJ(r,e){if(as(r)||as(e)||e<0)return VJ(NaN);if(e===0)return qJ(r);return n;function n(t){var i;return as(t)?NaN:(i=(t-r)/e,1/(1+XJ(-i)))}}var KJ=QJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bJ=G,B9=zJ,MJ=KJ;bJ(B9,"factory",MJ);var YJ=B9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ZJ=ri,JJ=sr,os=O;function jJ(r,e,n){var t,i;return os(r)||os(e)||os(n)||n<0?NaN:n===0?r<e?0:1:(t=n*JJ(2),i=r-e,.5*ZJ(-i/t))}var xJ=jJ;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rj=nr,ej=ti.factory,ls=O,nj=sr,tj=ri;function ij(r,e){var n;if(ls(r)||ls(e)||e<0)return rj(NaN);if(e===0)return ej(r);return n=e*nj(2),t;function t(i){var o;return ls(i)?NaN:(o=i-r,.5*tj(-o/n))}}var aj=ij;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oj=G,W9=xJ,lj=aj;oj(W9,"factory",lj);var x1=W9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uj=x1,us=O,sj=kr;function fj(r,e,n){return us(r)||us(e)||us(n)||n<=0?NaN:r<=0?0:uj(sj(r),e,n)}var vj=fj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cj=nr,dj=x1,ss=O,pj=kr;function mj(r,e){if(ss(r)||ss(e)||e<=0)return cj(NaN);return n;function n(t){return ss(t)?NaN:t<=0?0:dj(pj(t),r,e)}}var $j=mj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gj=G,U9=vj,hj=$j;gj(U9,"factory",hj);var yj=U9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $4=ft;function _j(r){return r>0?$4(r-1):$4(r+1)}var Nj=_j;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wj=Nj,z9=wj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var g4=z9,Ij=ke,Ej=V,C0=C;function Pj(r,e){return e===Ej?C0:e===C0?0:e>0?g4(e)?r:0:g4(e)?Ij(C0,r):C0}var Aj=Pj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Oj=ir,kj=Q,Lj=1072693247,R0=1e300,S0=1e-300;function Hj(r,e){var n,t;return t=kj(r),n=t&Oj,n<=Lj?e<0?R0*R0:S0*S0:e>0?R0*R0:S0*S0}var Tj=Hj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fj=D,h4=C;function Cj(r,e){return r===-1?(r-r)/(r-r):r===1?1:Fj(r)<1==(e===h4)?0:h4}var Rj=Cj;/**
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
*/function Sj(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var Gj=Sj;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Dj=Q,G0=b,y4=Or,Bj=hr,Wj=Gj,Uj=1048575,_4=1048576,zj=1072693248,Vj=536870912,qj=524288,Xj=20,Qj=9007199254740992,Kj=.9617966939259756,bj=.9617967009544373,Mj=-7028461650952758e-24,Yj=[1,1.5],Zj=[0,.5849624872207642],Jj=[0,1350039202129749e-23];function jj(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<_4&&(e*=Qj,w-=53,n=Dj(e)),w+=(n>>Xj)-Bj|0,I=n&Uj|0,n=I|zj|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=_4),e=y4(e,n),a=Yj[E],_=e-a,N=1/(e+a),i=_*N,f=G0(i,0),t=(n>>1|Vj)+qj,t+=E<<18,c=y4(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*Wj(o),p+=d*(f+i),o=f*f,c=3+o+p,c=G0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=G0(u,0),v=N-(u-_),m=bj*u,$=Mj*u+v*Kj+Jj[E],l=Zj[E],h=w,y=m+$+l+h,y=G0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var xj=jj;/**
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
*/function rx(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var ex=rx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var nx=b,tx=ex,ix=1.4426950408889634,ax=1.4426950216293335,ox=19259629911266175e-24;function lx(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*tx(i),f=ax*i,d=i*ox-o*ix,t=f+d,t=nx(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var ux=lx;/**
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
*/function sx(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var fx=sx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var vx=Q,N4=Or,cx=b,dx=Kr,px=Ze,mx=vt,w4=hr,I4=ir,E4=qn,$x=fx,P4=1048576,gx=1071644672,Fi=20,hx=.6931471824645996,yx=-1904654299957768e-24;function _x(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&I4|0,v=(u>>Fi)-w4|0,l=0,u>gx&&(l=r+(P4>>v+1)>>>0,v=((l&I4)>>Fi)-w4|0,t=(l&~(E4>>v))>>>0,o=N4(0,t),l=(l&E4|P4)>>Fi-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=cx(o,0),d=o*hx,c=(n-(o-e))*mx+o*yx,a=d+c,s=c-(a-d),o=a*a,i=a-o*$x(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=vx(a),r=dx(r),r+=l<<Fi>>>0,r>>Fi<=0?a=px(a,l):a=N4(a,r),a}var Nx=_x;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var A4=O,O4=z9,k4=Qr,wx=gr,L4=sr,Ix=D,fs=Ye,Ex=b,H4=Kr,Px=V,Ax=C,vs=ir,Ox=Aj,kx=Tj,Lx=Rj,Hx=xj,Tx=ux,Fx=Nx,Cx=1072693247,Rx=1105199104,Sx=1139802112,T4=1083179008,Gx=1072693248,Dx=1083231232,Bx=3230714880,F4=31,$n=1e300,gn=1e-300,Wx=8008566259537294e-32,Ge=[0,0],C4=[0,0];function V9(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(A4(r)||A4(e))return NaN;if(fs.assign(e,Ge,1,0),d=Ge[0],c=Ge[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return L4(r);if(e===-.5)return 1/L4(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(k4(e))return Lx(r,e)}if(fs.assign(r,Ge,1,0),o=Ge[0],f=Ge[1],f===0){if(o===0)return Ox(r,e);if(r===1)return 1;if(r===-1&&O4(e))return-1;if(k4(r))return r===Px?V9(-0,-e):e<0?0:Ax}if(r<0&&wx(e)===!1)return(r-r)/(r-r);if(i=Ix(r),n=o&vs|0,t=d&vs|0,s=o>>>F4|0,a=d>>>F4|0,s&&O4(e)?s=-1:s=1,t>Rx){if(t>Sx)return kx(r,e);if(n<Cx)return a===1?s*$n*$n:s*gn*gn;if(n>Gx)return a===0?s*$n*$n:s*gn*gn;m=Tx(C4,i)}else m=Hx(C4,i,n);if(l=Ex(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,fs.assign($,Ge,1,0),y=H4(Ge[0]),g=H4(Ge[1]),y>=T4){if(y-T4|g||v+Wx>$-u)return s*$n*$n}else if((y&vs)>=Dx&&(y-Bx|g||v<=$-u))return s*gn*gn;return $=Fx(y,u,v),s*$}var Ux=V9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zx=Ux,q9=zx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cs=O,Vx=q9;function qx(r,e,n){return cs(r)||cs(e)||cs(n)||e<=0||n<=0?NaN:r<n?0:1-Vx(n/r,e)}var Xx=qx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qx=nr,ds=O,Kx=q9;function bx(r,e){if(ds(r)||ds(e)||r<=0||e<=0)return Qx(NaN);return n;function n(t){return ds(t)?NaN:t<e?0:1-Kx(e/t,r)}}var Mx=bx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yx=G,X9=Xx,Zx=Mx;Yx(X9,"factory",Zx);var Jx=X9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R4=O,jx=q,S4=er;function xx(r,e){var n;return R4(r)||R4(e)||e<0?NaN:e===0?r<0?0:1:r<0?0:(n=S4(e,2),1-jx(-S4(r,2)/(2*n)))}var rrr=xx;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var err=nr,nrr=ti.factory,G4=O,trr=q,D4=er;function irr(r){var e;if(G4(r)||r<0)return err(NaN);if(r===0)return nrr(0);return e=D4(r,2),n;function n(t){return G4(t)?NaN:t<0?0:1-trr(-D4(t,2)/(2*e))}}var arr=irr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var orr=G,Q9=rrr,lrr=arr;orr(Q9,"factory",lrr);var urr=Q9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B4=ni,W4=O,srr=er;function frr(r,e){var n,t,i;return W4(r)||W4(e)||e<=0?NaN:r===0?.5:(n=srr(r,2),e>2*n?(i=n/(e+n),t=B4(i,.5,e/2,!0,!0)/2):(i=e/(e+n),t=B4(i,e/2,.5,!0,!1)/2),r>0?1-t:t)}var vrr=frr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var crr=nr,U4=ni,z4=O,drr=er;function prr(r){if(z4(r)||r<=0)return crr(NaN);return e;function e(n){var t,i,o;return z4(n)?NaN:n===0?.5:(t=drr(n,2),r>2*t?(o=t/(r+t),i=U4(o,.5,r/2,!0,!0)/2):(o=r/(r+t),i=U4(o,r/2,.5,!0,!1)/2),n>0?1-i:i)}}var mrr=prr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $rr=G,K9=vrr,grr=mrr;$rr(K9,"factory",grr);var hrr=K9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V4=ft;function yrr(r){return r>0?V4(r-1):V4(r+1)}var _rr=yrr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nrr=_rr,b9=Nrr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var q4=b9,wrr=ke,Irr=V,D0=C;function Err(r,e){return e===Irr?D0:e===D0?0:e>0?q4(e)?r:0:q4(e)?wrr(D0,r):D0}var Prr=Err;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Arr=ir,Orr=Q,krr=1072693247,B0=1e300,W0=1e-300;function Lrr(r,e){var n,t;return t=Orr(r),n=t&Arr,n<=krr?e<0?B0*B0:W0*W0:e>0?B0*B0:W0*W0}var Hrr=Lrr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Trr=D,X4=C;function Frr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Trr(r)<1==(e===X4)?0:X4}var Crr=Frr;/**
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
*/function Rrr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var Srr=Rrr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Grr=Q,U0=b,Q4=Or,Drr=hr,Brr=Srr,Wrr=1048575,K4=1048576,Urr=1072693248,zrr=536870912,Vrr=524288,qrr=20,Xrr=9007199254740992,Qrr=.9617966939259756,Krr=.9617967009544373,brr=-7028461650952758e-24,Mrr=[1,1.5],Yrr=[0,.5849624872207642],Zrr=[0,1350039202129749e-23];function Jrr(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<K4&&(e*=Xrr,w-=53,n=Grr(e)),w+=(n>>qrr)-Drr|0,I=n&Wrr|0,n=I|Urr|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=K4),e=Q4(e,n),a=Mrr[E],_=e-a,N=1/(e+a),i=_*N,f=U0(i,0),t=(n>>1|zrr)+Vrr,t+=E<<18,c=Q4(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*Brr(o),p+=d*(f+i),o=f*f,c=3+o+p,c=U0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=U0(u,0),v=N-(u-_),m=Krr*u,$=brr*u+v*Qrr+Zrr[E],l=Yrr[E],h=w,y=m+$+l+h,y=U0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var jrr=Jrr;/**
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
*/function xrr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var rer=xrr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var eer=b,ner=rer,ter=1.4426950408889634,ier=1.4426950216293335,aer=19259629911266175e-24;function oer(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*ner(i),f=ier*i,d=i*aer-o*ter,t=f+d,t=eer(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var ler=oer;/**
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
*/function uer(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var ser=uer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var fer=Q,b4=Or,ver=b,cer=Kr,der=Ze,per=vt,M4=hr,Y4=ir,Z4=qn,mer=ser,J4=1048576,$er=1071644672,Ci=20,ger=.6931471824645996,her=-1904654299957768e-24;function yer(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&Y4|0,v=(u>>Ci)-M4|0,l=0,u>$er&&(l=r+(J4>>v+1)>>>0,v=((l&Y4)>>Ci)-M4|0,t=(l&~(Z4>>v))>>>0,o=b4(0,t),l=(l&Z4|J4)>>Ci-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=ver(o,0),d=o*ger,c=(n-(o-e))*per+o*her,a=d+c,s=c-(a-d),o=a*a,i=a-o*mer(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=fer(a),r=cer(r),r+=l<<Ci>>>0,r>>Ci<=0?a=der(a,l):a=b4(a,r),a}var _er=yer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var j4=O,x4=b9,r6=Qr,Ner=gr,e6=sr,wer=D,ps=Ye,Ier=b,n6=Kr,Eer=V,Per=C,ms=ir,Aer=Prr,Oer=Hrr,ker=Crr,Ler=jrr,Her=ler,Ter=_er,Fer=1072693247,Cer=1105199104,Rer=1139802112,t6=1083179008,Ser=1072693248,Ger=1083231232,Der=3230714880,i6=31,hn=1e300,yn=1e-300,Ber=8008566259537294e-32,De=[0,0],a6=[0,0];function M9(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(j4(r)||j4(e))return NaN;if(ps.assign(e,De,1,0),d=De[0],c=De[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return e6(r);if(e===-.5)return 1/e6(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(r6(e))return ker(r,e)}if(ps.assign(r,De,1,0),o=De[0],f=De[1],f===0){if(o===0)return Aer(r,e);if(r===1)return 1;if(r===-1&&x4(e))return-1;if(r6(r))return r===Eer?M9(-0,-e):e<0?0:Per}if(r<0&&Ner(e)===!1)return(r-r)/(r-r);if(i=wer(r),n=o&ms|0,t=d&ms|0,s=o>>>i6|0,a=d>>>i6|0,s&&x4(e)?s=-1:s=1,t>Cer){if(t>Rer)return Oer(r,e);if(n<Fer)return a===1?s*hn*hn:s*yn*yn;if(n>Ser)return a===0?s*hn*hn:s*yn*yn;m=Her(a6,i)}else m=Ler(a6,i,n);if(l=Ier(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,ps.assign($,De,1,0),y=n6(De[0]),g=n6(De[1]),y>=t6){if(y-t6|g||v+Ber>$-u)return s*hn*hn}else if((y&ms)>=Ger&&(y-Der|g||v<=$-u))return s*yn*yn;return $=Ter(y,u,v),s*$}var Wer=M9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uer=Wer,Y9=Uer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0=O,o6=Y9;function zer(r,e,n,t){var i,o;return z0(r)||z0(e)||z0(n)||z0(t)||e>t||t>n?NaN:r<=e?0:(i=(n-e)*(t-e),o=(n-e)*(n-t),r<=t?o6(r-e,2)/i:r<n?1-o6(n-r,2)/o:1)}var Ver=zer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l6=nr,V0=O,u6=Y9;function qer(r,e,n){var t,i;if(V0(r)||V0(e)||V0(n))return l6(NaN);if(!(r<=n&&n<=e))return l6(NaN);return t=(e-r)*(n-r),i=(e-r)*(e-n),o;function o(f){return V0(f)?NaN:f<=r?0:f<=n?u6(f-r,2)/t:f<e?1-u6(e-f,2)/i:1}}var Xer=qer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qer=G,Z9=Ver,Ker=Xer;Qer(Z9,"factory",Ker);var ber=Z9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $s=O;function Mer(r,e,n){return $s(r)||$s(e)||$s(n)||e>=n?NaN:r<e?0:r>=n?1:(r-e)/(n-e)}var Yer=Mer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zer=nr,gs=O;function Jer(r,e){if(gs(r)||gs(e)||r>=e)return Zer(NaN);return n;function n(t){return gs(t)?NaN:t<r?0:t>=e?1:(t-r)/(e-r)}}var jer=Jer;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xer=G,J9=Yer,rnr=jer;xer(J9,"factory",rnr);var enr=J9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s6=ft;function nnr(r){return r>0?s6(r-1):s6(r+1)}var tnr=nnr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var inr=tnr,j9=inr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var f6=j9,anr=ke,onr=V,q0=C;function lnr(r,e){return e===onr?q0:e===q0?0:e>0?f6(e)?r:0:f6(e)?anr(q0,r):q0}var unr=lnr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var snr=ir,fnr=Q,vnr=1072693247,X0=1e300,Q0=1e-300;function cnr(r,e){var n,t;return t=fnr(r),n=t&snr,n<=vnr?e<0?X0*X0:Q0*Q0:e>0?X0*X0:Q0*Q0}var dnr=cnr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pnr=D,v6=C;function mnr(r,e){return r===-1?(r-r)/(r-r):r===1?1:pnr(r)<1==(e===v6)?0:v6}var $nr=mnr;/**
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
*/function gnr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}var hnr=gnr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var ynr=Q,K0=b,c6=Or,_nr=hr,Nnr=hnr,wnr=1048575,d6=1048576,Inr=1072693248,Enr=536870912,Pnr=524288,Anr=20,Onr=9007199254740992,knr=.9617966939259756,Lnr=.9617967009544373,Hnr=-7028461650952758e-24,Tnr=[1,1.5],Fnr=[0,.5849624872207642],Cnr=[0,1350039202129749e-23];function Rnr(r,e,n){var t,i,o,f,d,c,s,a,l,u,v,m,$,y,g,h,p,_,N,w,I,E;return w=0,n<d6&&(e*=Onr,w-=53,n=ynr(e)),w+=(n>>Anr)-_nr|0,I=n&wnr|0,n=I|Inr|0,I<=235662?E=0:I<767610?E=1:(E=0,w+=1,n-=d6),e=c6(e,n),a=Tnr[E],_=e-a,N=1/(e+a),i=_*N,f=K0(i,0),t=(n>>1|Enr)+Pnr,t+=E<<18,c=c6(0,t),s=e-(c-a),d=N*(_-f*c-f*s),o=i*i,p=o*o*Nnr(o),p+=d*(f+i),o=f*f,c=3+o+p,c=K0(c,0),s=p-(c-3-o),_=f*c,N=d*c+s*i,u=_+N,u=K0(u,0),v=N-(u-_),m=Lnr*u,$=Hnr*u+v*knr+Cnr[E],l=Fnr[E],h=w,y=m+$+l+h,y=K0(y,0),g=$-(y-h-l-m),r[0]=y,r[1]=g,r}var Snr=Rnr;/**
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
*/function Gnr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}var Dnr=Gnr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var Bnr=b,Wnr=Dnr,Unr=1.4426950408889634,znr=1.4426950216293335,Vnr=19259629911266175e-24;function qnr(r,e){var n,t,i,o,f,d;return i=e-1,o=i*i*Wnr(i),f=znr*i,d=i*Vnr-o*Unr,t=f+d,t=Bnr(t,0),n=d-(t-f),r[0]=t,r[1]=n,r}var Xnr=qnr;/**
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
*/function Qnr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}var Knr=Qnr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var bnr=Q,p6=Or,Mnr=b,Ynr=Kr,Znr=Ze,Jnr=vt,m6=hr,$6=ir,g6=qn,jnr=Knr,h6=1048576,xnr=1071644672,Ri=20,rtr=.6931471824645996,etr=-1904654299957768e-24;function ntr(r,e,n){var t,i,o,f,d,c,s,a,l,u,v;return u=r&$6|0,v=(u>>Ri)-m6|0,l=0,u>xnr&&(l=r+(h6>>v+1)>>>0,v=((l&$6)>>Ri)-m6|0,t=(l&~(g6>>v))>>>0,o=p6(0,t),l=(l&g6|h6)>>Ri-v>>>0,r<0&&(l=-l),e-=o),o=n+e,o=Mnr(o,0),d=o*rtr,c=(n-(o-e))*Jnr+o*etr,a=d+c,s=c-(a-d),o=a*a,i=a-o*jnr(o),f=a*i/(i-2)-(s+a*s),a=1-(f-a),r=bnr(a),r=Ynr(r),r+=l<<Ri>>>0,r>>Ri<=0?a=Znr(a,l):a=p6(a,r),a}var ttr=ntr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var y6=O,_6=j9,N6=Qr,itr=gr,w6=sr,atr=D,hs=Ye,otr=b,I6=Kr,ltr=V,utr=C,ys=ir,str=unr,ftr=dnr,vtr=$nr,ctr=Snr,dtr=Xnr,ptr=ttr,mtr=1072693247,$tr=1105199104,gtr=1139802112,E6=1083179008,htr=1072693248,ytr=1083231232,_tr=3230714880,P6=31,_n=1e300,Nn=1e-300,Ntr=8008566259537294e-32,Be=[0,0],A6=[0,0];function x9(r,e){var n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(y6(r)||y6(e))return NaN;if(hs.assign(e,Be,1,0),d=Be[0],c=Be[1],c===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return w6(r);if(e===-.5)return 1/w6(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(N6(e))return vtr(r,e)}if(hs.assign(r,Be,1,0),o=Be[0],f=Be[1],f===0){if(o===0)return str(r,e);if(r===1)return 1;if(r===-1&&_6(e))return-1;if(N6(r))return r===ltr?x9(-0,-e):e<0?0:utr}if(r<0&&itr(e)===!1)return(r-r)/(r-r);if(i=atr(r),n=o&ys|0,t=d&ys|0,s=o>>>P6|0,a=d>>>P6|0,s&&_6(e)?s=-1:s=1,t>$tr){if(t>gtr)return ftr(r,e);if(n<mtr)return a===1?s*_n*_n:s*Nn*Nn;if(n>htr)return a===0?s*_n*_n:s*Nn*Nn;m=dtr(A6,i)}else m=ctr(A6,i,n);if(l=otr(e,0),v=(e-l)*m[0]+e*m[1],u=l*m[0],$=v+u,hs.assign($,Be,1,0),y=I6(Be[0]),g=I6(Be[1]),y>=E6){if(y-E6|g||v+Ntr>$-u)return s*_n*_n}else if((y&ys)>=ytr&&(y-_tr|g||v<=$-u))return s*Nn*Nn;return $=ptr(y,u,v),s*$}var wtr=x9;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Itr=wtr,r7=Itr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _s=O,Etr=jt,Ptr=r7;function Atr(r,e,n){return _s(r)||_s(e)||_s(n)||e<=0||n<=0?NaN:r<0?0:-Etr(-Ptr(r/n,e))}var Otr=Atr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ktr=nr,Ns=O,Ltr=jt,Htr=r7;function Ttr(r,e){if(Ns(r)||Ns(e)||r<=0||e<=0)return ktr(NaN);return n;function n(t){return Ns(t)?NaN:t<0?0:-Ltr(-Htr(t/e,r))}}var Ftr=Ttr;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ctr=G,e7=Otr,Rtr=Ftr;Ctr(e7,"factory",Rtr);var Str=e7;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gtr=QR,Dtr=j1,Btr=cM,Wtr=ZM,Utr=AY,ztr=SY,Vtr=MY,qtr=fZ,Xtr=EZ,Qtr=RZ,Ktr=KZ,btr=dt,Mtr=rJ,Ytr=fJ,Ztr=hJ,Jtr=AJ,jtr=BJ,xtr=YJ,rir=yj,eir=x1,nir=Jx,tir=urr,iir=hrr,air=ber,oir=enr,lir=Str,Y={};Y.arcsine=Gtr;Y.beta=Dtr;Y.betaprime=Btr;Y.cauchy=Wtr;Y.chi=Utr;Y.chisquare=ztr;Y.cosine=Vtr;Y.erlang=qtr;Y.exponential=Xtr;Y.f=Qtr;Y.frechet=Ktr;Y.gamma=btr;Y.gumbel=Mtr;Y.invgamma=Ytr;Y.kumaraswamy=Ztr;Y.laplace=Jtr;Y.levy=jtr;Y.logistic=xtr;Y.lognormal=rir;Y.normal=eir;Y["pareto-type1"]=nir;Y.rayleigh=tir;Y.t=iir;Y.triangular=air;Y.uniform=oir;Y.weibull=lir;var uir=Y;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sir=Vn,fir=uir;function vir(r){var e=fir[r];if(e===void 0)throw new Error(sir("invalid argument. Unsupported/unrecognized distribution name. Value: `%s`.",r));return e}var cir=vir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dir=Jo.isPrimitive;function pir(r){return dir(r)&&r>0}var n7=pir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mir=Jo.isObject;function $ir(r){return mir(r)&&r.valueOf()>0}var t7=$ir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gir=n7,hir=t7;function yir(r){return gir(r)||hir(r)}var _ir=yir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i7=G,rv=_ir,Nir=n7,wir=t7;i7(rv,"isPrimitive",Nir);i7(rv,"isObject",wir);var Iir=rv;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eir=Math.round,Pir=Eir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Air=Pir,Oir=Air;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kir=308,Lir=kir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hir=-308,Tir=Hir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fir=-324,Cir=Fir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O6=O,b0=Qr,k6=er,Rir=D,L6=Oir,Sir=m9,H6=Lir,Gir=Tir,Dir=Cir,Bir=Sir+1,T6=1e308;function Wir(r,e){var n,t;return O6(r)||O6(e)||b0(e)?NaN:b0(r)||r===0||e<Dir||Rir(r)>Bir&&e<=0?r:e>H6?0*r:e<Gir?(n=k6(10,-(e+H6)),t=r*T6*n,b0(t)?r:L6(t)/T6/n):(n=k6(10,-e),t=r*n,b0(t)?r:L6(t)/n)}var Uir=Wir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zir=Uir,Vir=zir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qir=Iir,Xir=Zm,Qir=U1.isPrimitive,F6=Zo,C6=Vir,ws=Vn;function Kir(r){var e,n,t;if(n=4,e=!0,arguments.length>0){if(!Xir(r))throw new TypeError(ws("invalid argument. First argument must be an object. Value: `%s`.",r));if(F6(r,"digits")){if(!qir(r.digits))throw new TypeError(ws("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));n=r.digits}if(F6(r,"decision")){if(!Qir(r.decision))throw new TypeError(ws("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}switch(t="",t+=this.method,t+=`

`,t+="Null hypothesis: the CDF of `x` is ",this.alternative){case"less":t+="greater than or equal to ";break;case"greater":t+="less than or equal to ";break;case"two-sided":default:t+="equal to ";break}return t+="the reference CDF",t+=`

`,t+="    pValue: "+C6(this.pValue,-n)+`
`,t+="    statistic: "+C6(this.statistic,-n),t+=`

`,e&&(t+="Test Decision: ",this.rejected?t+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":t+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",t+=`
`),t}var bir=Kir;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mir=Hy,Yir=ut,Zir=by.primitives,Kn=jy,Jir=V1,R6=Im.isPrimitive,Si=Vn,jir=Om,Gi=Sw,xir=gC,rar=NC,ear=IC,S6=PC,nar=dR,tar=cir,iar=bir,aar=Array.prototype.slice;function oar(){var r,e,n,t,i,o,f,d,c,s,a,l,u,v,m,$,y,g;if(y=arguments[0],g=arguments[1],!Zir(y)&&!Mir(y))throw new TypeError(Si("invalid argument. First argument must be a typed array or number array. Value: `%s`.",y));if(!Jir(g)&&!R6(g))throw new TypeError(Si("invalid argument. Second argument must be either a CDF function or a string. Value: `%s`.",g));for(R6(g)&&(g=tar(g)),r=g.length-1,$=y.length,e=new Array(r),m=0;m<r;m++){if(l=m+2,v=arguments[l],!Yir(v)||jir(v))throw new TypeError(Si("invalid argument. Distribution parameter must be a number. Value: `%s`.",v));e[m]=arguments[l]}if(o={},arguments.length>2+r&&(t=arguments[2+r],a=nar(o,t),a))throw a;if(y=aar.call(y),o.alpha===void 0?i=.05:i=o.alpha,i<0||i>1)throw new RangeError(Si("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",i));for(o.sorted!==!0&&y.sort(ear),n=[null].concat(e),m=0;m<$;m++)n[0]=y[m],c=g.apply(null,n),y[m]=c-m/$;switch(s=o.alternative||"two-sided",s){case"two-sided":d=Gi($,[Gi($,y,1),Gi($,S6(1/$,y),1)],1);break;case"greater":d=Gi($,S6(1/$,y),1);break;case"less":d=Gi($,y,1);break;default:throw new Error(Si('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"alternative",["two-sided","less","greater"].join('", "'),s))}return s==="two-sided"?f=1-rar(d,$):f=1-xir(d,$),u={},Kn(u,"rejected",f<=i),Kn(u,"alpha",i),Kn(u,"pValue",f),Kn(u,"statistic",d),Kn(u,"method","Kolmogorov-Smirnov goodness-of-fit test"),Kn(u,"print",iar),Kn(u,"alternative",s),u}var lar=oar;/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uar=lar,sar=uar;const G6=o7(sar);function far(r){const e=-39.6968302866538,n=220.946098424521,t=-275.928510446969,i=138.357751867269,o=-30.6647980661472,f=2.50662827745924,d=-54.4760987982241,c=161.585836858041,s=-155.698979859887,a=66.8013118877197,l=-13.2806815528857,u=-.00778489400243029,v=-.322396458041136,m=-2.40075827716184,$=-2.54973253934373,y=4.37466414146497,g=2.93816398269878,h=.00778469570904146,p=.32246712907004,_=2.445134137143,N=3.75440866190742;let w,I;return r<.02425?(w=Math.sqrt(-2*Math.log(r)),(((((u*w+v)*w+m)*w+$)*w+y)*w+g)/((((h*w+p)*w+_)*w+N)*w+1)):r<=.97575?(w=r-.5,I=w*w,(((((e*I+n)*I+t)*I+i)*I+o)*I+f)*w/(((((d*I+c)*I+s)*I+a)*I+l)*I+1)):(w=Math.sqrt(-2*Math.log(1-r)),-(((((u*w+v)*w+m)*w+$)*w+y)*w+g)/((((h*w+p)*w+_)*w+N)*w+1))}function car(){const[r,e]=En.useState({x:"",a:"",c:"",m:"",confianza:""}),[n,t]=En.useState({x:[],r:[]}),[i,o]=En.useState({intervalo_inf:[],intervalo_sup:[],o:[],e:"",chiSquare:[]}),[f,d]=En.useState([]),[c,s]=En.useState({media:{valor:"",li:"",ls:""},varianza:{valor:"",li:"",ls:""},chicuadrado:"",kolmogorov:{dmas:0,dmen:0,valor:0,mayor:0},n:"",m:0}),a=()=>{const{x:l,a:u,c:v,m,confianza:$}=r;if(l&&u&&v&&m&&$){let y=0,g=[],h=[];for(g[0]=Number(r.x),h[0]=Number(r.x)/(Number(r.m)-1);;){const B=(Number(r.c)+Number(r.a)*g[y])%Number(r.m);if(g.includes(B)){g.push(B),h.push(B/(Number(r.m)-1));break}g.push(B),h.push(B/(Number(r.m)-1)),y++}const p=h.length-1,_=h.slice(1).reduce((B,M)=>B+M,0)/p,N=1-Number(r.confianza)/100,w=far(1-N/2),I=1/2-w*(1/Math.sqrt(12*p)),E=1/2+w*(1/Math.sqrt(12*p)),H=h.slice(1).reduce((B,M)=>B+Math.pow(+M-_,2),0)/(p-1),S=Rl.chisquare.inv(1-N/2,p-1)/(12*(p-1)),Z=Rl.chisquare.inv(N/2,p-1)/(12*(p-1)),j=Math.floor(Math.sqrt(p-1));console.log(j);const Lr=[],Wr=[],fr=1/j;for(let B=0;B<j;B++){const M=B*fr,pr=(B+1)*fr;Lr.push(M),Wr.push(pr)}const L=[];for(let B=0;B<Lr.length;B++){const M=Lr[B],pr=Wr[B];if(console.log(M,pr),B<Lr.length-1){const ll=h.slice(1).filter(ii=>ii>=M&&ii<pr);L.push({interval:`[${M.toFixed(2)}, ${pr.toFixed(2)})`,values:ll.length})}else{const ll=h.slice(1).filter(ii=>ii>=M&&ii<=pr);L.push({interval:`[${M.toFixed(2)}, ${pr.toFixed(2)})`,values:ll.length})}}let F=[];L.map(B=>{F.push(Math.pow((p-1)/Math.sqrt(p-1)-B.values,2)/((p-1)/Math.sqrt(p-1)))});const U=[...h].sort((B,M)=>B-M).map((B,M)=>M/(p-1)-h[M]),X=Math.max(...U),ar=Math.min(...U),wr=G6(h.slice(1),"uniform",0,1);console.log(wr),d(U),o({intervalo_inf:Lr,intervalo_sup:Wr,o:L.map(B=>B.values),e:p/j,m:j,chiSquare:F}),s(B=>({varianza:{valor:H,li:Z,ls:S},media:{valor:_,li:I,ls:E},chicuadrado:Rl.chisquare.inv(N,j-1),kolmogorov:{dmas:X,dmen:ar,valor:G6(h.slice(1),"uniform",0,1).pValue,mayor:X>Math.abs(ar)?X:Math.abs(ar)},n:p-1})),t({x:g,r:h})}};return P.jsx("div",{className:"w-full bg-zinc-100 min-h-lvh",children:P.jsxs("div",{className:"w-full flex flex-wrap justify-center",children:[P.jsx("h1",{className:"text-4xl text-center w-full my-4 font-light",children:"Pruebas estadísticas para los números pseudoaleatorios"}),P.jsxs("div",{className:"w-1/2 flex flex-col justify-center",children:[P.jsxs("h2",{className:"text-2xl text-center w-full my-4 text-zinc-700",children:["X",P.jsx("sub",{children:"i+1"})," = (aX",P.jsx("sub",{children:"i"})," + c) mod (m)"]}),P.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg",children:P.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[P.jsx("thead",{className:"text-xs  uppercase bg-zinc-700 text-gray-300",children:P.jsxs("tr",{children:[P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Variable"}),P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Nombre"}),P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Valor"})]})}),P.jsxs("tbody",{children:[P.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"X"}),P.jsx("td",{className:"px-6 py-4",children:"Semilla"}),P.jsx("td",{className:"px-6 py-4",children:P.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:r.x,onChange:l=>{e(u=>({...u,x:l.target.value}))}})})]}),P.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"a"}),P.jsx("td",{className:"px-6 py-4",children:"Constante multiplicativa"}),P.jsx("td",{className:"px-6 py-4",children:P.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:r.a,onChange:l=>{e(u=>({...u,a:l.target.value}))}})})]}),P.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"c"}),P.jsx("td",{className:"px-6 py-4",children:"Constante aditiva"}),P.jsx("td",{className:"px-6 py-4",children:P.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:r.c,onChange:l=>{e(u=>({...u,c:l.target.value}))}})})]}),P.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"m"}),P.jsx("td",{className:"px-6 py-4",children:"Módulo"}),P.jsx("td",{className:"px-6 py-4",children:P.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:r.m,onChange:l=>{e(u=>({...u,m:l.target.value}))}})})]}),P.jsxs("tr",{className:"border-b bg-zinc-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("th",{scope:"row",className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"1 - α"}),P.jsx("td",{className:"px-6 py-4",children:"Nivel de confianza"}),P.jsxs("td",{className:"px-6 py-4 flex",children:[P.jsx("input",{className:"bg-transparent w-full outline-none",type:"number",value:r.confianza,onChange:l=>{e(u=>({...u,confianza:l.target.value}))}}),"%"]})]})]})]})}),P.jsx("div",{className:"w-full flex justify-center my-3",children:P.jsx("button",{onClick:a,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Resolver"})})]}),n.x.length>0&&P.jsxs(P.Fragment,{children:[P.jsx("h1",{className:"text-4xl text-center w-full mt-4 mb-2 font-light",children:"Resolución"}),P.jsxs("div",{className:"w-full mt-6 flex flex-wrap min-h-lvh",children:[P.jsx("div",{className:"w-1/2 p-10 h-full",children:P.jsx("div",{className:"w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full",children:P.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200 h-full",children:[P.jsx("thead",{className:"text-xs bg-gray-700 text-white flex w-full",children:P.jsxs("tr",{className:"w-full flex",children:[P.jsx("th",{scope:"col",className:"px-6 py-3 w-1/5",children:"i"}),P.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["X",P.jsx("sub",{children:"i"})]}),P.jsxs("th",{scope:"col",className:"px-6 py-3 w-2/5",children:["r",P.jsx("sub",{children:"i"})]})]})}),P.jsx("tbody",{className:"h-5/6 overflow-y-scroll w-full flex flex-col",children:n.x.map((l,u)=>P.jsxs("tr",{className:"flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white",children:u+1}),P.jsx("td",{className:"px-6 py-4 w-2/5",children:l}),P.jsx("td",{className:"px-6 py-4 w-2/5",children:n.r[u]})]},u))})]})})}),P.jsxs("div",{className:"w-1/2 p-10",children:[P.jsxs("h2",{className:"text-3xl font-light my-2",children:["n: ",c.n+1]}),P.jsx("h2",{className:"text-3xl font-light my-2",children:"Media"}),P.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:P.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[P.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:P.jsxs("tr",{children:[P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),P.jsxs("tbody",{children:[P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Promedio"}),P.jsx("td",{className:"px-6 py-4",children:c.media.valor})]}),P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),P.jsx("td",{className:"px-6 py-4",children:c.media.li})]}),P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),P.jsx("td",{className:"px-6 py-4",children:c.media.ls})]})]})]})}),P.jsx("h2",{className:"text-3xl font-light my-2",children:"Varianza"}),P.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:P.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[P.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:P.jsxs("tr",{children:[P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Datos"}),P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Resultado"})]})}),P.jsxs("tbody",{children:[P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Varianza"}),P.jsx("td",{className:"px-6 py-4",children:c.varianza.valor})]}),P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Inferior"}),P.jsx("td",{className:"px-6 py-4",children:c.varianza.li})]}),P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Limite Superior"}),P.jsx("td",{className:"px-6 py-4",children:c.varianza.ls})]})," ",P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Análisis"}),P.jsxs("td",{className:"px-6 py-4",children:[c.varianza.li.toFixed(4)," < ",c.varianza.valor.toFixed(4)," < ",c.varianza.ls.toFixed(4),P.jsx("p",{children:c.varianza.valor>c.varianza.li&&c.varianza.valor<c.varianza.ls?"El valor de la varianza se encuentra dentro de los límites.":"El valor de la varianza está fuera de los límites."})]})]})]})]})}),P.jsx("h2",{className:"text-3xl font-light my-2",children:"Uniformidad"}),P.jsx("p",{className:"text-2xl",children:"Prueba Chi-cuadrada"}),P.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:P.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[P.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:P.jsxs("tr",{children:[P.jsx("th",{scope:"col",className:"px-6 py-3",children:"Intervalo"}),P.jsxs("th",{scope:"col",className:"px-6 py-3",children:["O",P.jsx("suv",{children:"i"})]}),P.jsxs("th",{scope:"col",className:"px-6 py-3",children:["E",P.jsx("suv",{children:"i"})]}),P.jsxs("th",{scope:"col",className:"px-6 py-3",children:["(O",P.jsx("sub",{children:"i"})," - E",P.jsx("sub",{children:"i"}),")",P.jsx("sup",{children:"2"})," / E",P.jsx("sub",{children:"i"})]})]})}),P.jsxs("tbody",{children:[i.intervalo_inf.map((l,u)=>P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["[",i.intervalo_inf[u].toFixed(3),"-",i.intervalo_sup[u].toFixed(3),"]"]}),P.jsx("td",{className:"px-6 py-4",children:i.o[u]}),P.jsx("td",{className:"px-6 py-4",children:i.e.toFixed(4)}),P.jsx("td",{className:"px-6 py-4",children:i.chiSquare[u].toFixed(4)})]},u)),P.jsxs("tr",{className:"border-b  bg-gray-700 text-white",children:[P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"Total"}),P.jsx("td",{className:"px-6 py-4",children:i.o.reduce((l,u)=>l+u,0)}),P.jsx("td",{className:"px-6 py-4",children:(i.e.toFixed(4)*i.m).toFixed(3)}),P.jsx("td",{className:"px-6 py-4",children:i.chiSquare.reduce((l,u)=>l+u,0).toFixed(4)})]})]})]})}),P.jsxs("h2",{className:"text-3xl font-light my-2",children:["X",P.jsx("sup",{children:"2"}),P.jsx("sub",{children:"0"}),": ",c.chicuadrado,P.jsx("p",{className:"text-xl",children:c.chicuadrado>i.chiSquare.reduce((l,u)=>l+u,0)?`${i.chiSquare.reduce((l,u)=>l+u,0)} es menor que ${c.chicuadrado}. Entonces no se puede rechazar la uniformidad de los números aleatorios.`:`${i.chiSquare.reduce((l,u)=>l+u,0)} es mayor que ${c.chicuadrado}. Entonces se puede rechazar la uniformidad de los números aleatorios.`})]}),P.jsx("p",{className:"text-2xl",children:"Prueba Kolmogorov-Smirnov"}),P.jsx("div",{className:"w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg",children:P.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-200",children:[P.jsx("thead",{className:"text-xs bg-gray-700 text-white",children:P.jsxs("tr",{children:[P.jsx("th",{scope:"col",className:"px-6 py-3",children:"i"}),f.map((l,u)=>P.jsx("th",{scope:"col",className:"px-6 py-3",children:u+1}))]})}),P.jsxs("tbody",{children:[P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["i/n - r",P.jsx("sub",{children:"i"})]}),f.map((l,u)=>P.jsx("th",{scope:"col",className:"px-6 py-3",children:l}))]}),P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["r",P.jsx("sub",{children:"i"})," - i/n"]}),f.map((l,u)=>P.jsx("th",{scope:"col",className:"px-6 py-3",children:-l}))]}),P.jsxs("tr",{className:"border-b bg-gray-800 border-gray-700 hover:bg-gray-600",children:[P.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",P.jsx("sup",{children:"+"})]}),P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:c.kolmogorov.dmas}),P.jsxs("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:["D",P.jsx("sup",{children:"-"})]}),P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:c.kolmogorov.dmen}),P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:"D"}),P.jsx("td",{className:"px-6 py-4 font-medium whitespace-nowrap text-white",children:c.kolmogorov.mayor})]})]})]})}),P.jsx("p",{className:"text-xl",children:c.kolmogorov.valor>c.kolmogorov.mayor?`${c.kolmogorov.valor} es mayor que ${c.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`:`${c.kolmogorov.valor} es menor que ${c.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`})]})]})]})]})})}Y5(document.getElementById("root")).render(P.jsx(En.StrictMode,{children:P.jsx(car,{})}));
