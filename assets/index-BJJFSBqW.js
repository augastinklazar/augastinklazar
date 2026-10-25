var z1=Object.defineProperty;var B1=(t,e,n)=>e in t?z1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xn=(t,e,n)=>B1(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function H1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kh={exports:{}},vl={},zh={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),V1=Symbol.for("react.portal"),G1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),j1=Symbol.for("react.profiler"),X1=Symbol.for("react.provider"),Y1=Symbol.for("react.context"),q1=Symbol.for("react.forward_ref"),$1=Symbol.for("react.suspense"),K1=Symbol.for("react.memo"),Z1=Symbol.for("react.lazy"),rd=Symbol.iterator;function Q1(t){return t===null||typeof t!="object"?null:(t=rd&&t[rd]||t["@@iterator"],typeof t=="function"?t:null)}var Bh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hh=Object.assign,Vh={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=Vh,this.updater=n||Bh}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gh(){}Gh.prototype=Cs.prototype;function J0(t,e,n){this.props=t,this.context=e,this.refs=Vh,this.updater=n||Bh}var eu=J0.prototype=new Gh;eu.constructor=J0;Hh(eu,Cs.prototype);eu.isPureReactComponent=!0;var sd=Array.isArray,Wh=Object.prototype.hasOwnProperty,tu={current:null},jh={key:!0,ref:!0,__self:!0,__source:!0};function Xh(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wh.call(e,i)&&!jh.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wo,type:t,key:s,ref:o,props:r,_owner:tu.current}}function J1(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nu(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function em(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var od=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?em(""+t.key):e.toString(36)}function Aa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case V1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gl(o,0):i,sd(r)?(n="",t!=null&&(n=t.replace(od,"$&/")+"/"),Aa(r,e,n,"",function(c){return c})):r!=null&&(nu(r)&&(r=J1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(od,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gl(s,a);o+=Aa(s,e,n,l,r)}else if(l=Q1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gl(s,a++),o+=Aa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return Aa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function tm(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Ca={transition:null},nm={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:tu};function Yh(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!nu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Cs;We.Fragment=G1;We.Profiler=j1;We.PureComponent=J0;We.StrictMode=W1;We.Suspense=$1;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nm;We.act=Yh;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hh({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wh.call(e,l)&&!jh.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:wo,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:Y1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X1,_context:t},t.Consumer=t};We.createElement=Xh;We.createFactory=function(t){var e=Xh.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:q1,render:t}};We.isValidElement=nu;We.lazy=function(t){return{$$typeof:Z1,_payload:{_status:-1,_result:t},_init:tm}};We.memo=function(t,e){return{$$typeof:K1,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Ca.transition;Ca.transition={};try{t()}finally{Ca.transition=e}};We.unstable_act=Yh;We.useCallback=function(t,e){return jt.current.useCallback(t,e)};We.useContext=function(t){return jt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};We.useEffect=function(t,e){return jt.current.useEffect(t,e)};We.useId=function(){return jt.current.useId()};We.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return jt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};We.useRef=function(t){return jt.current.useRef(t)};We.useState=function(t){return jt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return jt.current.useTransition()};We.version="18.3.1";zh.exports=We;var he=zh.exports;const im=H1(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=he,sm=Symbol.for("react.element"),om=Symbol.for("react.fragment"),am=Object.prototype.hasOwnProperty,lm=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cm={key:!0,ref:!0,__self:!0,__source:!0};function qh(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)am.call(e,i)&&!cm.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sm,type:t,key:s,ref:o,props:r,_owner:lm.current}}vl.Fragment=om;vl.jsx=qh;vl.jsxs=qh;kh.exports=vl;var S=kh.exports,$c={},$h={exports:{}},un={},Kh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var R=D.length;D.push(W);e:for(;0<R;){var C=R-1>>>1,j=D[C];if(0<r(j,W))D[C]=W,D[R]=j,R=C;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],R=D.pop();if(R!==W){D[0]=R;e:for(var C=0,j=D.length,ae=j>>>1;C<ae;){var k=2*(C+1)-1,K=D[k],te=k+1,Q=D[te];if(0>r(K,R))te<j&&0>r(Q,K)?(D[C]=Q,D[te]=R,C=te):(D[C]=K,D[k]=R,C=k);else if(te<j&&0>r(Q,R))D[C]=Q,D[te]=R,C=te;else break e}}return W}function r(D,W){var R=D.sortIndex-W.sortIndex;return R!==0?R:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=D)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(D){if(_=!1,g(D),!x)if(n(l)!==null)x=!0,X(N);else{var W=n(c);W!==null&&$(M,W.startTime-D)}}function N(D,W){x=!1,_&&(_=!1,d(U),U=-1),m=!0;var R=f;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||D&&!I());){var C=h.callback;if(typeof C=="function"){h.callback=null,f=h.priorityLevel;var j=C(h.expirationTime<=W);W=t.unstable_now(),typeof j=="function"?h.callback=j:h===n(l)&&i(l),g(W)}else i(l);h=n(l)}if(h!==null)var ae=!0;else{var k=n(c);k!==null&&$(M,k.startTime-W),ae=!1}return ae}finally{h=null,f=R,m=!1}}var A=!1,b=null,U=-1,T=5,y=-1;function I(){return!(t.unstable_now()-y<T)}function H(){if(b!==null){var D=t.unstable_now();y=D;var W=!0;try{W=b(!0,D)}finally{W?O():(A=!1,b=null)}}else A=!1}var O;if(typeof v=="function")O=function(){v(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,J=V.port2;V.port1.onmessage=H,O=function(){J.postMessage(null)}}else O=function(){p(H,0)};function X(D){b=D,A||(A=!0,O())}function $(D,W){U=p(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,X(N))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var R=f;f=W;try{return D()}finally{f=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=f;f=D;try{return W()}finally{f=R}},t.unstable_scheduleCallback=function(D,W,R){var C=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?C+R:C):R=C,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=R+j,D={id:u++,callback:W,priorityLevel:D,startTime:R,expirationTime:j,sortIndex:-1},R>C?(D.sortIndex=R,e(c,D),n(l)===null&&D===n(c)&&(_?(d(U),U=-1):_=!0,$(M,R-C))):(D.sortIndex=j,e(l,D),x||m||(x=!0,X(N))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var W=f;return function(){var R=f;f=W;try{return D.apply(this,arguments)}finally{f=R}}}})(Zh);Kh.exports=Zh;var um=Kh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=he,cn=um;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qh=new Set,oo={};function Tr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(oo[t]=e,t=0;t<e.length;t++)Qh.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},ld={};function hm(t){return Kc.call(ld,t)?!0:Kc.call(ad,t)?!1:fm.test(t)?ld[t]=!0:(ad[t]=!0,!1)}function pm(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mm(t,e,n,i){if(e===null||typeof e>"u"||pm(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function ru(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(iu,ru);It[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(iu,ru);It[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(iu,ru);It[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function su(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mm(e,n,r,i)&&(n=null),i||r===null?hm(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var hi=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),Jh=Symbol.for("react.provider"),ep=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),lu=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),tp=Symbol.for("react.offscreen"),cd=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Wl;function Xs(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var jl=!1;function Xl(t,e){if(!t||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function gm(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Xl(t.type,!1),t;case 11:return t=Xl(t.type.render,!1),t;case 1:return t=Xl(t.type,!0),t;default:return""}}function e0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case Xr:return"Portal";case Zc:return"Profiler";case ou:return"StrictMode";case Qc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ep:return(t.displayName||"Context")+".Consumer";case Jh:return(t._context.displayName||"Context")+".Provider";case au:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lu:return e=t.displayName||null,e!==null?e:e0(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return e0(t(e))}catch{}}return null}function vm(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return e0(e);case 8:return e===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function np(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xm(t){var e=np(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=xm(t))}function ip(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=np(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function t0(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ud(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rp(t,e){e=e.checked,e!=null&&su(t,"checked",e,!1)}function n0(t,e){rp(t,e);var n=Hi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?i0(t,e.type,n):e.hasOwnProperty("defaultValue")&&i0(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function i0(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Hi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function r0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Ys(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hi(n)}}function sp(t,e){var n=Hi(e.value),i=Hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function op(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function s0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?op(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bo,ap=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_m=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){_m.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function lp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function cp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ym=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function o0(t,e){if(e){if(ym[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function a0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l0=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var c0=null,os=null,as=null;function pd(t){if(t=Co(t)){if(typeof c0!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ml(e),c0(t.stateNode,t.type,e))}}function up(t){os?as?as.push(t):as=[t]:os=t}function dp(){if(os){var t=os,e=as;if(as=os=null,pd(t),e)for(t=0;t<e.length;t++)pd(e[t])}}function fp(t,e){return t(e)}function hp(){}var Yl=!1;function pp(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return fp(t,e,n)}finally{Yl=!1,(os!==null||as!==null)&&(hp(),dp())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var u0=!1;if(li)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){u0=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{u0=!1}function Sm(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Qs=!1,Ha=null,Va=!1,d0=null,Mm={onError:function(t){Qs=!0,Ha=t}};function Em(t,e,n,i,r,s,o,a,l){Qs=!1,Ha=null,Sm.apply(Mm,arguments)}function wm(t,e,n,i,r,s,o,a,l){if(Em.apply(this,arguments),Qs){if(Qs){var c=Ha;Qs=!1,Ha=null}else throw Error(oe(198));Va||(Va=!0,d0=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function md(t){if(Ar(t)!==t)throw Error(oe(188))}function Tm(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return md(r),t;if(s===i)return md(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function gp(t){return t=Tm(t),t!==null?vp(t):null}function vp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vp(t);if(e!==null)return e;t=t.sibling}return null}var xp=cn.unstable_scheduleCallback,gd=cn.unstable_cancelCallback,Am=cn.unstable_shouldYield,Cm=cn.unstable_requestPaint,vt=cn.unstable_now,bm=cn.unstable_getCurrentPriorityLevel,uu=cn.unstable_ImmediatePriority,_p=cn.unstable_UserBlockingPriority,Ga=cn.unstable_NormalPriority,Rm=cn.unstable_LowPriority,yp=cn.unstable_IdlePriority,xl=null,Gn=null;function Pm(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:Im,Lm=Math.log,Nm=Math.LN2;function Im(t){return t>>>=0,t===0?32:31-(Lm(t)/Nm|0)|0}var Ho=64,Vo=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qs(a):(s&=o,s!==0&&(i=qs(s)))}else o=n&~r,o!==0?i=qs(o):s!==0&&(i=qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ln(e),r=1<<n,i|=t[n],e&=~r;return i}function Dm(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Dm(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function f0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sp(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ln(e),t[e]=n}function Fm(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ln(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function du(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ln(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Mp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ep,fu,wp,Tp,Ap,h0=!1,Go=[],Li=null,Ni=null,Ii=null,co=new Map,uo=new Map,Ti=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Ds(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Co(e),e!==null&&fu(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function km(t,e,n,i,r){switch(e){case"focusin":return Li=Ds(Li,t,e,n,i,r),!0;case"dragenter":return Ni=Ds(Ni,t,e,n,i,r),!0;case"mouseover":return Ii=Ds(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return co.set(s,Ds(co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uo.set(s,Ds(uo.get(s)||null,t,e,n,i,r)),!0}return!1}function Cp(t){var e=dr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=mp(n),e!==null){t.blockedOn=e,Ap(t.priority,function(){wp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=p0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);l0=i,n.target.dispatchEvent(i),l0=null}else return e=Co(n),e!==null&&fu(e),t.blockedOn=n,!1;e.shift()}return!0}function xd(t,e,n){ba(t)&&n.delete(e)}function zm(){h0=!1,Li!==null&&ba(Li)&&(Li=null),Ni!==null&&ba(Ni)&&(Ni=null),Ii!==null&&ba(Ii)&&(Ii=null),co.forEach(xd),uo.forEach(xd)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,h0||(h0=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,zm)))}function fo(t){function e(r){return Us(r,t)}if(0<Go.length){Us(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Us(Li,t),Ni!==null&&Us(Ni,t),Ii!==null&&Us(Ii,t),co.forEach(e),uo.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&Ti.shift()}var ls=hi.ReactCurrentBatchConfig,ja=!0;function Bm(t,e,n,i){var r=Je,s=ls.transition;ls.transition=null;try{Je=1,hu(t,e,n,i)}finally{Je=r,ls.transition=s}}function Hm(t,e,n,i){var r=Je,s=ls.transition;ls.transition=null;try{Je=4,hu(t,e,n,i)}finally{Je=r,ls.transition=s}}function hu(t,e,n,i){if(ja){var r=p0(t,e,n,i);if(r===null)rc(t,e,i,Xa,n),vd(t,i);else if(km(r,t,e,n,i))i.stopPropagation();else if(vd(t,i),e&4&&-1<Om.indexOf(t)){for(;r!==null;){var s=Co(r);if(s!==null&&Ep(s),s=p0(t,e,n,i),s===null&&rc(t,e,i,Xa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(t,e,i,null,n)}}var Xa=null;function p0(t,e,n,i){if(Xa=null,t=cu(i),t=dr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xa=t,null}function bp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bm()){case uu:return 1;case _p:return 4;case Ga:case Rm:return 16;case yp:return 536870912;default:return 16}default:return 16}}var bi=null,pu=null,Ra=null;function Rp(){if(Ra)return Ra;var t,e=pu,n=e.length,i,r="value"in bi?bi.value:bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function _d(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:_d,this.isPropagationStopped=_d,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=dn(bs),Ao=dt({},bs,{view:0,detail:0}),Vm=dn(Ao),$l,Kl,Fs,_l=dt({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?($l=t.screenX-Fs.screenX,Kl=t.screenY-Fs.screenY):Kl=$l=0,Fs=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),yd=dn(_l),Gm=dt({},_l,{dataTransfer:0}),Wm=dn(Gm),jm=dt({},Ao,{relatedTarget:0}),Zl=dn(jm),Xm=dt({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=dn(Xm),qm=dt({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$m=dn(qm),Km=dt({},bs,{data:0}),Sd=dn(Km),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jm[t])?!!e[t]:!1}function gu(){return e3}var t3=dt({},Ao,{key:function(t){if(t.key){var e=Zm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qm[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n3=dn(t3),i3=dt({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=dn(i3),r3=dt({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),s3=dn(r3),o3=dt({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),a3=dn(o3),l3=dt({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c3=dn(l3),u3=[9,13,27,32],vu=li&&"CompositionEvent"in window,Js=null;li&&"documentMode"in document&&(Js=document.documentMode);var d3=li&&"TextEvent"in window&&!Js,Pp=li&&(!vu||Js&&8<Js&&11>=Js),Ed=" ",wd=!1;function Lp(t,e){switch(t){case"keyup":return u3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function f3(t,e){switch(t){case"compositionend":return Np(e);case"keypress":return e.which!==32?null:(wd=!0,Ed);case"textInput":return t=e.data,t===Ed&&wd?null:t;default:return null}}function h3(t,e){if(qr)return t==="compositionend"||!vu&&Lp(t,e)?(t=Rp(),Ra=pu=bi=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pp&&e.locale!=="ko"?null:e.data;default:return null}}var p3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!p3[t.type]:e==="textarea"}function Ip(t,e,n,i){up(i),e=Ya(e,"onChange"),0<e.length&&(n=new mu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var eo=null,ho=null;function m3(t){Wp(t,0)}function yl(t){var e=Zr(t);if(ip(e))return t}function g3(t,e){if(t==="change")return e}var Dp=!1;if(li){var Ql;if(li){var Jl="oninput"in document;if(!Jl){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Jl=typeof Ad.oninput=="function"}Ql=Jl}else Ql=!1;Dp=Ql&&(!document.documentMode||9<document.documentMode)}function Cd(){eo&&(eo.detachEvent("onpropertychange",Up),ho=eo=null)}function Up(t){if(t.propertyName==="value"&&yl(ho)){var e=[];Ip(e,ho,t,cu(t)),pp(m3,e)}}function v3(t,e,n){t==="focusin"?(Cd(),eo=e,ho=n,eo.attachEvent("onpropertychange",Up)):t==="focusout"&&Cd()}function x3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(ho)}function _3(t,e){if(t==="click")return yl(e)}function y3(t,e){if(t==="input"||t==="change")return yl(e)}function S3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:S3;function po(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kc.call(e,r)||!In(t[r],e[r]))return!1}return!0}function bd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rd(t,e){var n=bd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bd(n)}}function Fp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Op(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function xu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M3(t){var e=Op(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fp(n.ownerDocument.documentElement,n)){if(i!==null&&xu(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rd(n,s);var o=Rd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E3=li&&"documentMode"in document&&11>=document.documentMode,$r=null,m0=null,to=null,g0=!1;function Pd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;g0||$r==null||$r!==Ba(i)||(i=$r,"selectionStart"in i&&xu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),to&&po(to,i)||(to=i,i=Ya(m0,"onSelect"),0<i.length&&(e=new mu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},ec={},kp={};li&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Sl(t){if(ec[t])return ec[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kp)return ec[t]=e[n];return t}var zp=Sl("animationend"),Bp=Sl("animationiteration"),Hp=Sl("animationstart"),Vp=Sl("transitionend"),Gp=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){Gp.set(t,e),Tr(e,[t])}for(var tc=0;tc<Ld.length;tc++){var nc=Ld[tc],w3=nc.toLowerCase(),T3=nc[0].toUpperCase()+nc.slice(1);Xi(w3,"on"+T3)}Xi(zp,"onAnimationEnd");Xi(Bp,"onAnimationIteration");Xi(Hp,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Vp,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A3=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Nd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wm(i,e,void 0,t),t.currentTarget=null}function Wp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nd(r,a,c),s=l}}}if(Va)throw t=d0,Va=!1,d0=null,t}function rt(t,e){var n=e[S0];n===void 0&&(n=e[S0]=new Set);var i=t+"__bubble";n.has(i)||(jp(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),jp(n,t,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Xo]){t[Xo]=!0,Qh.forEach(function(n){n!=="selectionchange"&&(A3.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,ic("selectionchange",!1,e))}}function jp(t,e,n,i){switch(bp(e)){case 1:var r=Bm;break;case 4:r=Hm;break;default:r=hu}n=r.bind(null,e,n,t),r=void 0,!u0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pp(function(){var c=s,u=cu(n),h=[];e:{var f=Gp.get(t);if(f!==void 0){var m=mu,x=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":m=n3;break;case"focusin":x="focus",m=Zl;break;case"focusout":x="blur",m=Zl;break;case"beforeblur":case"afterblur":m=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=s3;break;case zp:case Bp:case Hp:m=Ym;break;case Vp:m=a3;break;case"scroll":m=Vm;break;case"wheel":m=c3;break;case"copy":case"cut":case"paste":m=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Md}var _=(e&4)!==0,p=!_&&t==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,d!==null&&(M=lo(v,d),M!=null&&_.push(go(v,M,g)))),p)break;v=v.return}0<_.length&&(f=new m(f,x,null,n,u),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==l0&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[ci]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?dr(x):null,x!==null&&(p=Ar(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=yd,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Md,M="onPointerLeave",d="onPointerEnter",v="pointer"),p=m==null?f:Zr(m),g=x==null?f:Zr(x),f=new _(M,v+"leave",m,n,u),f.target=p,f.relatedTarget=g,M=null,dr(u)===c&&(_=new _(d,v+"enter",x,n,u),_.target=g,_.relatedTarget=p,M=_),p=M,m&&x)t:{for(_=m,d=x,v=0,g=_;g;g=Cr(g))v++;for(g=0,M=d;M;M=Cr(M))g++;for(;0<v-g;)_=Cr(_),v--;for(;0<g-v;)d=Cr(d),g--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Cr(_),d=Cr(d)}_=null}else _=null;m!==null&&Id(h,f,m,_,!1),x!==null&&p!==null&&Id(h,p,x,_,!0)}}e:{if(f=c?Zr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=g3;else if(Td(f))if(Dp)N=y3;else{N=x3;var A=v3}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=_3);if(N&&(N=N(t,c))){Ip(h,N,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&i0(f,"number",f.value)}switch(A=c?Zr(c):window,t){case"focusin":(Td(A)||A.contentEditable==="true")&&($r=A,m0=c,to=null);break;case"focusout":to=m0=$r=null;break;case"mousedown":g0=!0;break;case"contextmenu":case"mouseup":case"dragend":g0=!1,Pd(h,n,u);break;case"selectionchange":if(E3)break;case"keydown":case"keyup":Pd(h,n,u)}var b;if(vu)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else qr?Lp(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Pp&&n.locale!=="ko"&&(qr||U!=="onCompositionStart"?U==="onCompositionEnd"&&qr&&(b=Rp()):(bi=u,pu="value"in bi?bi.value:bi.textContent,qr=!0)),A=Ya(c,U),0<A.length&&(U=new Sd(U,t,null,n,u),h.push({event:U,listeners:A}),b?U.data=b:(b=Np(n),b!==null&&(U.data=b)))),(b=d3?f3(t,n):h3(t,n))&&(c=Ya(c,"onBeforeInput"),0<c.length&&(u=new Sd("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=b))}Wp(h,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=lo(t,n),s!=null&&i.unshift(go(t,s,r)),s=lo(t,e),s!=null&&i.push(go(t,s,r))),t=t.return}return i}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Id(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):r||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var C3=/\r\n?/g,b3=/\u0000|\uFFFD/g;function Dd(t){return(typeof t=="string"?t:""+t).replace(C3,`
`).replace(b3,"")}function Yo(t,e,n){if(e=Dd(e),Dd(t)!==e&&n)throw Error(oe(425))}function qa(){}var v0=null,x0=null;function _0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var y0=typeof setTimeout=="function"?setTimeout:void 0,R3=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,P3=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(L3)}:y0;function L3(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fo(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Rs,vo="__reactProps$"+Rs,ci="__reactContainer$"+Rs,S0="__reactEvents$"+Rs,N3="__reactListeners$"+Rs,I3="__reactHandles$"+Rs;function dr(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fd(t);t!==null;){if(n=t[Bn])return n;t=Fd(t)}return e}t=n,n=t.parentNode}return null}function Co(t){return t=t[Bn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ml(t){return t[vo]||null}var M0=[],Qr=-1;function Yi(t){return{current:t}}function ot(t){0>Qr||(t.current=M0[Qr],M0[Qr]=null,Qr--)}function it(t,e){Qr++,M0[Qr]=t.current,t.current=e}var Vi={},zt=Yi(Vi),Zt=Yi(!1),_r=Vi;function ms(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function $a(){ot(Zt),ot(zt)}function Od(t,e,n){if(zt.current!==Vi)throw Error(oe(168));it(zt,e),it(Zt,n)}function Xp(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,vm(t)||"Unknown",r));return dt({},n,i)}function Ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,_r=zt.current,it(zt,t),it(Zt,Zt.current),!0}function kd(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Xp(t,e,_r),i.__reactInternalMemoizedMergedChildContext=t,ot(Zt),ot(zt),it(zt,t)):ot(Zt),it(Zt,n)}var ti=null,El=!1,oc=!1;function Yp(t){ti===null?ti=[t]:ti.push(t)}function D3(t){El=!0,Yp(t)}function qi(){if(!oc&&ti!==null){oc=!0;var t=0,e=Je;try{var n=ti;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ti=null,El=!1}catch(r){throw ti!==null&&(ti=ti.slice(t+1)),xp(uu,qi),r}finally{Je=e,oc=!1}}return null}var Jr=[],es=0,Za=null,Qa=0,pn=[],mn=0,yr=null,ii=1,ri="";function sr(t,e){Jr[es++]=Qa,Jr[es++]=Za,Za=t,Qa=e}function qp(t,e,n){pn[mn++]=ii,pn[mn++]=ri,pn[mn++]=yr,yr=t;var i=ii;t=ri;var r=32-Ln(i)-1;i&=~(1<<r),n+=1;var s=32-Ln(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ii=1<<32-Ln(e)+r|n<<r|i,ri=s+t}else ii=1<<s|n<<r|i,ri=t}function _u(t){t.return!==null&&(sr(t,1),qp(t,1,0))}function yu(t){for(;t===Za;)Za=Jr[--es],Jr[es]=null,Qa=Jr[--es],Jr[es]=null;for(;t===yr;)yr=pn[--mn],pn[mn]=null,ri=pn[--mn],pn[mn]=null,ii=pn[--mn],pn[mn]=null}var ln=null,an=null,lt=!1,Rn=null;function $p(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yr!==null?{id:ii,overflow:ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function E0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function w0(t){if(lt){var e=an;if(e){var n=e;if(!zd(t,e)){if(E0(t))throw Error(oe(418));e=Di(n.nextSibling);var i=ln;e&&zd(t,e)?$p(i,n):(t.flags=t.flags&-4097|2,lt=!1,ln=t)}}else{if(E0(t))throw Error(oe(418));t.flags=t.flags&-4097|2,lt=!1,ln=t}}}function Bd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function qo(t){if(t!==ln)return!1;if(!lt)return Bd(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_0(t.type,t.memoizedProps)),e&&(e=an)){if(E0(t))throw Kp(),Error(oe(418));for(;e;)$p(t,e),e=Di(e.nextSibling)}if(Bd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?Di(t.stateNode.nextSibling):null;return!0}function Kp(){for(var t=an;t;)t=Di(t.nextSibling)}function gs(){an=ln=null,lt=!1}function Su(t){Rn===null?Rn=[t]:Rn.push(t)}var U3=hi.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function $o(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hd(t){var e=t._init;return e(t._payload)}function Zp(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=ki(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,M){return v===null||v.tag!==6?(v=hc(g,d.mode,M),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,M){var N=g.type;return N===Yr?u(d,v,g.props.children,M,g.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ei&&Hd(N)===v.type)?(M=r(v,g.props),M.ref=Os(d,v,g),M.return=d,M):(M=Oa(g.type,g.key,g.props,null,d.mode,M),M.ref=Os(d,v,g),M.return=d,M)}function c(d,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=pc(g,d.mode,M),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function u(d,v,g,M,N){return v===null||v.tag!==7?(v=vr(g,d.mode,M,N),v.return=d,v):(v=r(v,g),v.return=d,v)}function h(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ko:return g=Oa(v.type,v.key,v.props,null,d.mode,g),g.ref=Os(d,null,v),g.return=d,g;case Xr:return v=pc(v,d.mode,g),v.return=d,v;case Ei:var M=v._init;return h(d,M(v._payload),g)}if(Ys(v)||Ns(v))return v=vr(v,d.mode,g,null),v.return=d,v;$o(d,v)}return null}function f(d,v,g,M){var N=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:a(d,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return g.key===N?l(d,v,g,M):null;case Xr:return g.key===N?c(d,v,g,M):null;case Ei:return N=g._init,f(d,v,N(g._payload),M)}if(Ys(g)||Ns(g))return N!==null?null:u(d,v,g,M,null);$o(d,g)}return null}function m(d,v,g,M,N){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(g)||null,a(v,d,""+M,N);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ko:return d=d.get(M.key===null?g:M.key)||null,l(v,d,M,N);case Xr:return d=d.get(M.key===null?g:M.key)||null,c(v,d,M,N);case Ei:var A=M._init;return m(d,v,g,A(M._payload),N)}if(Ys(M)||Ns(M))return d=d.get(g)||null,u(v,d,M,N,null);$o(v,M)}return null}function x(d,v,g,M){for(var N=null,A=null,b=v,U=v=0,T=null;b!==null&&U<g.length;U++){b.index>U?(T=b,b=null):T=b.sibling;var y=f(d,b,g[U],M);if(y===null){b===null&&(b=T);break}t&&b&&y.alternate===null&&e(d,b),v=s(y,v,U),A===null?N=y:A.sibling=y,A=y,b=T}if(U===g.length)return n(d,b),lt&&sr(d,U),N;if(b===null){for(;U<g.length;U++)b=h(d,g[U],M),b!==null&&(v=s(b,v,U),A===null?N=b:A.sibling=b,A=b);return lt&&sr(d,U),N}for(b=i(d,b);U<g.length;U++)T=m(b,d,U,g[U],M),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?U:T.key),v=s(T,v,U),A===null?N=T:A.sibling=T,A=T);return t&&b.forEach(function(I){return e(d,I)}),lt&&sr(d,U),N}function _(d,v,g,M){var N=Ns(g);if(typeof N!="function")throw Error(oe(150));if(g=N.call(g),g==null)throw Error(oe(151));for(var A=N=null,b=v,U=v=0,T=null,y=g.next();b!==null&&!y.done;U++,y=g.next()){b.index>U?(T=b,b=null):T=b.sibling;var I=f(d,b,y.value,M);if(I===null){b===null&&(b=T);break}t&&b&&I.alternate===null&&e(d,b),v=s(I,v,U),A===null?N=I:A.sibling=I,A=I,b=T}if(y.done)return n(d,b),lt&&sr(d,U),N;if(b===null){for(;!y.done;U++,y=g.next())y=h(d,y.value,M),y!==null&&(v=s(y,v,U),A===null?N=y:A.sibling=y,A=y);return lt&&sr(d,U),N}for(b=i(d,b);!y.done;U++,y=g.next())y=m(b,d,U,y.value,M),y!==null&&(t&&y.alternate!==null&&b.delete(y.key===null?U:y.key),v=s(y,v,U),A===null?N=y:A.sibling=y,A=y);return t&&b.forEach(function(H){return e(d,H)}),lt&&sr(d,U),N}function p(d,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:e:{for(var N=g.key,A=v;A!==null;){if(A.key===N){if(N=g.type,N===Yr){if(A.tag===7){n(d,A.sibling),v=r(A,g.props.children),v.return=d,d=v;break e}}else if(A.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ei&&Hd(N)===A.type){n(d,A.sibling),v=r(A,g.props),v.ref=Os(d,A,g),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===Yr?(v=vr(g.props.children,d.mode,M,g.key),v.return=d,d=v):(M=Oa(g.type,g.key,g.props,null,d.mode,M),M.ref=Os(d,v,g),M.return=d,d=M)}return o(d);case Xr:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=pc(g,d.mode,M),v.return=d,d=v}return o(d);case Ei:return A=g._init,p(d,v,A(g._payload),M)}if(Ys(g))return x(d,v,g,M);if(Ns(g))return _(d,v,g,M);$o(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=hc(g,d.mode,M),v.return=d,d=v),o(d)):n(d,v)}return p}var vs=Zp(!0),Qp=Zp(!1),Ja=Yi(null),el=null,ts=null,Mu=null;function Eu(){Mu=ts=el=null}function wu(t){var e=Ja.current;ot(Ja),t._currentValue=e}function T0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){el=t,Mu=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(el===null)throw Error(oe(308));ts=t,el.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var fr=null;function Tu(t){fr===null?fr=[t]:fr.push(t)}function Jp(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tu(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e2(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Tu(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,du(t,n)}}function Vd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tl(t,e,n,i){var r=t.updateQueue;wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(f=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){h=x.call(m,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break e;h=dt({},h,f);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=h):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Mr|=o,t.lanes=o,t.memoizedState=h}}function Gd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var bo={},Wn=Yi(bo),xo=Yi(bo),_o=Yi(bo);function hr(t){if(t===bo)throw Error(oe(174));return t}function Cu(t,e){switch(it(_o,e),it(xo,t),it(Wn,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:s0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=s0(e,t)}ot(Wn),it(Wn,e)}function xs(){ot(Wn),ot(xo),ot(_o)}function t2(t){hr(_o.current);var e=hr(Wn.current),n=s0(e,t.type);e!==n&&(it(xo,t),it(Wn,n))}function bu(t){xo.current===t&&(ot(Wn),ot(xo))}var ct=Yi(0);function nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function Ru(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Na=hi.ReactCurrentDispatcher,lc=hi.ReactCurrentBatchConfig,Sr=0,ut=null,St=null,bt=null,il=!1,no=!1,yo=0,F3=0;function Dt(){throw Error(oe(321))}function Pu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Lu(t,e,n,i,r,s){if(Sr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?B3:H3,t=n(i,r),no){s=0;do{if(no=!1,yo=0,25<=s)throw Error(oe(301));s+=1,bt=St=null,e.updateQueue=null,Na.current=V3,t=n(i,r)}while(no)}if(Na.current=rl,e=St!==null&&St.next!==null,Sr=0,bt=St=ut=null,il=!1,e)throw Error(oe(300));return t}function Nu(){var t=yo!==0;return yo=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ut.memoizedState=bt=t:bt=bt.next=t,bt}function Mn(){if(St===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=bt===null?ut.memoizedState:bt.next;if(e!==null)bt=e,St=t;else{if(t===null)throw Error(oe(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},bt===null?ut.memoizedState=bt=t:bt=bt.next=t}return bt}function So(t,e){return typeof e=="function"?e(t):e}function cc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Sr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ut.lanes|=u,Mr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,In(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);In(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n2(){}function i2(t,e){var n=ut,i=Mn(),r=e(),s=!In(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,Iu(o2.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Mo(9,s2.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(oe(349));Sr&30||r2(n,e,r)}return r}function r2(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s2(t,e,n,i){e.value=n,e.getSnapshot=i,a2(e)&&l2(t)}function o2(t,e,n){return n(function(){a2(e)&&l2(t)})}function a2(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function l2(t){var e=ui(t,1);e!==null&&Nn(e,t,1,-1)}function Wd(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=z3.bind(null,ut,t),[e.memoizedState,t]}function Mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c2(){return Mn().memoizedState}function Ia(t,e,n,i){var r=On();ut.flags|=t,r.memoizedState=Mo(1|e,n,void 0,i===void 0?null:i)}function wl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&Pu(i,o.deps)){r.memoizedState=Mo(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Mo(1|e,n,s,i)}function jd(t,e){return Ia(8390656,8,t,e)}function Iu(t,e){return wl(2048,8,t,e)}function u2(t,e){return wl(4,2,t,e)}function d2(t,e){return wl(4,4,t,e)}function f2(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h2(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,f2.bind(null,e,t),n)}function Du(){}function p2(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pu(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m2(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Pu(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g2(t,e,n){return Sr&21?(In(n,e)||(n=Sp(),ut.lanes|=n,Mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function O3(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=lc.transition;lc.transition={};try{t(!1),e()}finally{Je=n,lc.transition=i}}function v2(){return Mn().memoizedState}function k3(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x2(t))_2(e,n);else if(n=Jp(t,e,n,i),n!==null){var r=Gt();Nn(n,t,i,r),y2(n,e,i)}}function z3(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x2(t))_2(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(r.next=r,Tu(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jp(t,e,r,i),n!==null&&(r=Gt(),Nn(n,t,i,r),y2(n,e,i))}}function x2(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function _2(t,e){no=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y2(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,du(t,n)}}var rl={readContext:Sn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},B3={readContext:Sn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:jd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,f2.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=On();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k3.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:Wd,useDebugValue:Du,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Wd(!1),e=t[0];return t=O3.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=On();if(lt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Rt===null)throw Error(oe(349));Sr&30||r2(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jd(o2.bind(null,i,s,t),[t]),i.flags|=2048,Mo(9,s2.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=On(),e=Rt.identifierPrefix;if(lt){var n=ri,i=ii;n=(i&~(1<<32-Ln(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=F3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},H3={readContext:Sn,useCallback:p2,useContext:Sn,useEffect:Iu,useImperativeHandle:h2,useInsertionEffect:u2,useLayoutEffect:d2,useMemo:m2,useReducer:cc,useRef:c2,useState:function(){return cc(So)},useDebugValue:Du,useDeferredValue:function(t){var e=Mn();return g2(e,St.memoizedState,t)},useTransition:function(){var t=cc(So)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:n2,useSyncExternalStore:i2,useId:v2,unstable_isNewReconciler:!1},V3={readContext:Sn,useCallback:p2,useContext:Sn,useEffect:Iu,useImperativeHandle:h2,useInsertionEffect:u2,useLayoutEffect:d2,useMemo:m2,useReducer:uc,useRef:c2,useState:function(){return uc(So)},useDebugValue:Du,useDeferredValue:function(t){var e=Mn();return St===null?e.memoizedState=t:g2(e,St.memoizedState,t)},useTransition:function(){var t=uc(So)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:n2,useSyncExternalStore:i2,useId:v2,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function A0(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Oi(t),s=ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Nn(e,t,r,i),La(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Oi(t),s=ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Nn(e,t,r,i),La(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Oi(t),r=ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Nn(e,t,i,n),La(e,t,i))}};function Xd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,i)||!po(r,s):!0}function S2(t,e,n){var i=!1,r=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=Qt(e)?_r:zt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function C0(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Au(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=Qt(e)?_r:zt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(A0(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tl.enqueueReplaceState(r,r.state,null),tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=gm(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function b0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G3=typeof WeakMap=="function"?WeakMap:Map;function M2(t,e,n){n=ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ol||(ol=!0,k0=i),b0(t,e)},n}function E2(t,e,n){n=ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){b0(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){b0(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new G3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ig.bind(null,t,e,n),e.then(t,t))}function $d(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ai(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var W3=hi.ReactCurrentOwner,Kt=!1;function Vt(t,e,n,i){e.child=t===null?Qp(e,null,n,i):vs(e,t.child,n,i)}function Zd(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=Lu(t,e,n,i,s,r),n=Nu(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(lt&&n&&_u(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Qd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w2(t,e,s,i,r)):(t=Oa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function w2(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(po(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,di(t,e,r)}return R0(t,e,n,i,r)}function T2(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(is,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(is,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(is,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(is,on),on|=i;return Vt(t,e,r,n),e.child}function A2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function R0(t,e,n,i,r){var s=Qt(n)?_r:zt.current;return s=ms(e,s),cs(e,r),n=Lu(t,e,n,i,s,r),i=Nu(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(lt&&i&&_u(e),e.flags|=1,Vt(t,e,n,r),e.child)}function Jd(t,e,n,i,r){if(Qt(n)){var s=!0;Ka(e)}else s=!1;if(cs(e,r),e.stateNode===null)Da(t,e),S2(e,n,i),C0(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=Qt(n)?_r:zt.current,c=ms(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Yd(e,o,i,c),wi=!1;var f=e.memoizedState;o.state=f,tl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zt.current||wi?(typeof u=="function"&&(A0(e,n,u,i),l=e.memoizedState),(a=wi||Xd(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,e2(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Cn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Qt(n)?_r:zt.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Yd(e,o,i,l),wi=!1,f=e.memoizedState,o.state=f,tl(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Zt.current||wi?(typeof m=="function"&&(A0(e,n,m,i),x=e.memoizedState),(c=wi||Xd(e,n,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return P0(t,e,n,i,s,r)}function P0(t,e,n,i,r,s){A2(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kd(e,n,!1),di(t,e,s);i=e.stateNode,W3.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&kd(e,n,!0),e.child}function C2(t){var e=t.stateNode;e.pendingContext?Od(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Od(t,e.context,!1),Cu(t,e.containerInfo)}function ef(t,e,n,i,r){return gs(),Su(r),e.flags|=256,Vt(t,e,n,i),e.child}var L0={dehydrated:null,treeContext:null,retryLane:0};function N0(t){return{baseLanes:t,cachePool:null,transitions:null}}function b2(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ct,r&1),t===null)return w0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bl(o,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=N0(n),e.memoizedState=L0,t):Uu(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return j3(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?N0(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=L0,i}return s=t.child,t=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uu(t,e){return e=bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ko(t,e,n,i){return i!==null&&Su(i),vs(e,t.child,null,n),t=Uu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j3(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=dc(Error(oe(422))),Ko(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=N0(o),e.memoizedState=L0,s);if(!(e.mode&1))return Ko(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=dc(s,i,void 0),Ko(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),Nn(i,t,r,-1))}return Hu(),i=dc(Error(oe(421))),Ko(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rg.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=Di(r.nextSibling),ln=e,lt=!0,Rn=null,t!==null&&(pn[mn++]=ii,pn[mn++]=ri,pn[mn++]=yr,ii=t.id,ri=t.overflow,yr=e),e=Uu(e,i.children),e.flags|=4096,e)}function tf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),T0(t.return,e,n)}function fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function R2(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tf(t,n,e);else if(t.tag===19)tf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fc(e,!0,n,null,s);break;case"together":fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X3(t,e,n){switch(e.tag){case 3:C2(e),gs();break;case 5:t2(e);break;case 1:Qt(e.type)&&Ka(e);break;case 4:Cu(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Ja,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?b2(t,e,n):(it(ct,ct.current&1),t=di(t,e,n),t!==null?t.sibling:null);it(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return R2(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,T2(t,e,n)}return di(t,e,n)}var P2,I0,L2,N2;P2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};I0=function(){};L2=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hr(Wn.current);var s=null;switch(n){case"input":r=t0(t,r),i=t0(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=r0(t,r),i=r0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qa)}o0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};N2=function(t,e,n,i){n!==i&&(e.flags|=4)};function ks(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Y3(t,e,n){var i=e.pendingProps;switch(yu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Qt(e.type)&&$a(),Ut(e),null;case 3:return i=e.stateNode,xs(),ot(Zt),ot(zt),Ru(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(H0(Rn),Rn=null))),I0(t,e),Ut(e),null;case 5:bu(e);var r=hr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)L2(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ut(e),null}if(t=hr(Wn.current),qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[vo]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)rt($s[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":ud(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":fd(i,s),rt("invalid",i)}o0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":zo(i),dd(i,s,!0);break;case"textarea":zo(i),hd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=op(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bn]=e,t[vo]=i,P2(t,e,!1,!1),e.stateNode=t;e:{switch(o=a0(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)rt($s[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":ud(t,i),r=t0(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":fd(t,i),r=r0(t,i),rt("invalid",t);break;default:r=i}o0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ap(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&su(t,s,l,o))}switch(n){case"input":zo(t),dd(t,i,!1);break;case"textarea":zo(t),hd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)N2(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=hr(_o.current),hr(Wn.current),qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return Ut(e),null;case 13:if(ot(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&an!==null&&e.mode&1&&!(e.flags&128))Kp(),gs(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Bn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else Rn!==null&&(H0(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Mt===0&&(Mt=3):Hu())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return xs(),I0(t,e),t===null&&mo(e.stateNode.containerInfo),Ut(e),null;case 10:return wu(e.type._context),Ut(e),null;case 17:return Qt(e.type)&&$a(),Ut(e),null;case 19:if(ot(ct),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ks(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nl(t),o!==null){for(e.flags|=128,ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ys&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=nl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Ut(e),null}else 2*vt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ct.current,it(ct,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Bu(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function q3(t,e){switch(yu(e),e.tag){case 1:return Qt(e.type)&&$a(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),ot(Zt),ot(zt),Ru(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bu(e),null;case 13:if(ot(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ct),null;case 4:return xs(),null;case 10:return wu(e.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var Zo=!1,kt=!1,$3=typeof WeakSet=="function"?WeakSet:Set,Me=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function D0(t,e,n){try{n()}catch(i){pt(t,e,i)}}var nf=!1;function K3(t,e){if(v0=ja,t=Op(),xu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(x0={focusedElem:t,selectionRange:n},ja=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Cn(e.type,_),p);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return x=nf,nf=!1,x}function io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&D0(e,n,s)}r=r.next}while(r!==i)}}function Al(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function U0(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I2(t){var e=t.alternate;e!==null&&(t.alternate=null,I2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[vo],delete e[S0],delete e[N3],delete e[I3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D2(t){return t.tag===5||t.tag===3||t.tag===4}function rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function F0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qa));else if(i!==4&&(t=t.child,t!==null))for(F0(t,e,n),t=t.sibling;t!==null;)F0(t,e,n),t=t.sibling}function O0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(O0(t,e,n),t=t.sibling;t!==null;)O0(t,e,n),t=t.sibling}var Pt=null,bn=!1;function gi(t,e,n){for(n=n.child;n!==null;)U2(t,e,n),n=n.sibling}function U2(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:kt||ns(n,e);case 6:var i=Pt,r=bn;Pt=null,gi(t,e,n),Pt=i,bn=r,Pt!==null&&(bn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(bn?(t=Pt,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),fo(t)):sc(Pt,n.stateNode));break;case 4:i=Pt,r=bn,Pt=n.stateNode.containerInfo,bn=!0,gi(t,e,n),Pt=i,bn=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&D0(n,e,o),r=r.next}while(r!==i)}gi(t,e,n);break;case 1:if(!kt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}gi(t,e,n);break;case 21:gi(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,gi(t,e,n),kt=i):gi(t,e,n);break;default:gi(t,e,n)}}function sf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $3),e.forEach(function(i){var r=sg.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,bn=!1;break e;case 3:Pt=a.stateNode.containerInfo,bn=!0;break e;case 4:Pt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(Pt===null)throw Error(oe(160));U2(s,o,r),Pt=null,bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F2(e,t),e=e.sibling}function F2(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Fn(t),i&4){try{io(3,t,t.return),Al(3,t)}catch(_){pt(t,t.return,_)}try{io(5,t,t.return)}catch(_){pt(t,t.return,_)}}break;case 1:En(e,t),Fn(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(En(e,t),Fn(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{ao(r,"")}catch(_){pt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rp(r,s),a0(a,o);var c=a0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?cp(r,h):u==="dangerouslySetInnerHTML"?ap(r,h):u==="children"?ao(r,h):su(r,u,h,c)}switch(a){case"input":n0(r,s);break;case"textarea":sp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ss(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(_){pt(t,t.return,_)}}break;case 6:if(En(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){pt(t,t.return,_)}}break;case 3:if(En(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(_){pt(t,t.return,_)}break;case 4:En(e,t),Fn(t);break;case 13:En(e,t),Fn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ku=vt())),i&4&&sf(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||u,En(e,t),kt=c):En(e,t),Fn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(h=Me=u;Me!==null;){switch(f=Me,m=f.child,f.tag){case 0:case 11:case 14:case 15:io(4,f,f.return);break;case 1:ns(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){pt(i,n,_)}}break;case 5:ns(f,f.return);break;case 22:if(f.memoizedState!==null){af(h);continue}}m!==null?(m.return=f,Me=m):af(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lp("display",o))}catch(_){pt(t,t.return,_)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){pt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:En(e,t),Fn(t),i&4&&sf(t);break;case 21:break;default:En(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D2(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var s=rf(t);O0(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rf(t);F0(t,a,o);break;default:throw Error(oe(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z3(t,e,n){Me=t,O2(t)}function O2(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Zo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Zo;var c=kt;if(Zo=o,(kt=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?lf(r):l!==null?(l.return=o,Me=l):lf(r);for(;s!==null;)Me=s,O2(s),s=s.sibling;Me=r,Zo=a,kt=c}of(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):of(t)}}function of(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Al(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&fo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}kt||e.flags&512&&U0(e)}catch(f){pt(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function af(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function lf(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Al(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{U0(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{U0(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var Q3=Math.ceil,sl=hi.ReactCurrentDispatcher,Fu=hi.ReactCurrentOwner,_n=hi.ReactCurrentBatchConfig,Ye=0,Rt=null,_t=null,Nt=0,on=0,is=Yi(0),Mt=0,Eo=null,Mr=0,Cl=0,Ou=0,ro=null,qt=null,ku=0,ys=1/0,ei=null,ol=!1,k0=null,Fi=null,Qo=!1,Ri=null,al=0,so=0,z0=null,Ua=-1,Fa=0;function Gt(){return Ye&6?vt():Ua!==-1?Ua:Ua=vt()}function Oi(t){return t.mode&1?Ye&2&&Nt!==0?Nt&-Nt:U3.transition!==null?(Fa===0&&(Fa=Sp()),Fa):(t=Je,t!==0||(t=window.event,t=t===void 0?16:bp(t.type)),t):1}function Nn(t,e,n,i){if(50<so)throw so=0,z0=null,Error(oe(185));To(t,n,i),(!(Ye&2)||t!==Rt)&&(t===Rt&&(!(Ye&2)&&(Cl|=n),Mt===4&&Ai(t,Nt)),Jt(t,i),n===1&&Ye===0&&!(e.mode&1)&&(ys=vt()+500,El&&qi()))}function Jt(t,e){var n=t.callbackNode;Um(t,e);var i=Wa(t,t===Rt?Nt:0);if(i===0)n!==null&&gd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gd(n),e===1)t.tag===0?D3(cf.bind(null,t)):Yp(cf.bind(null,t)),P3(function(){!(Ye&6)&&qi()}),n=null;else{switch(Mp(i)){case 1:n=uu;break;case 4:n=_p;break;case 16:n=Ga;break;case 536870912:n=yp;break;default:n=Ga}n=j2(n,k2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k2(t,e){if(Ua=-1,Fa=0,Ye&6)throw Error(oe(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=Wa(t,t===Rt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ll(t,i);else{e=i;var r=Ye;Ye|=2;var s=B2();(Rt!==t||Nt!==e)&&(ei=null,ys=vt()+500,gr(t,e));do try{tg();break}catch(a){z2(t,a)}while(!0);Eu(),sl.current=s,Ye=r,_t!==null?e=0:(Rt=null,Nt=0,e=Mt)}if(e!==0){if(e===2&&(r=f0(t),r!==0&&(i=r,e=B0(t,r))),e===1)throw n=Eo,gr(t,0),Ai(t,i),Jt(t,vt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!J3(r)&&(e=ll(t,i),e===2&&(s=f0(t),s!==0&&(i=s,e=B0(t,s))),e===1))throw n=Eo,gr(t,0),Ai(t,i),Jt(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:or(t,qt,ei);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=ku+500-vt(),10<e)){if(Wa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=y0(or.bind(null,t,qt,ei),e);break}or(t,qt,ei);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ln(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Q3(i/1960))-i,10<i){t.timeoutHandle=y0(or.bind(null,t,qt,ei),i);break}or(t,qt,ei);break;case 5:or(t,qt,ei);break;default:throw Error(oe(329))}}}return Jt(t,vt()),t.callbackNode===n?k2.bind(null,t):null}function B0(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=ll(t,e),t!==2&&(e=qt,qt=n,e!==null&&H0(e)),t}function H0(t){qt===null?qt=t:qt.push.apply(qt,t)}function J3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!In(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~Ou,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ln(e),i=1<<n;t[n]=-1,e&=~i}}function cf(t){if(Ye&6)throw Error(oe(327));us();var e=Wa(t,0);if(!(e&1))return Jt(t,vt()),null;var n=ll(t,e);if(t.tag!==0&&n===2){var i=f0(t);i!==0&&(e=i,n=B0(t,i))}if(n===1)throw n=Eo,gr(t,0),Ai(t,e),Jt(t,vt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,qt,ei),Jt(t,vt()),null}function zu(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(ys=vt()+500,El&&qi())}}function Er(t){Ri!==null&&Ri.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=_n.transition,i=Je;try{if(_n.transition=null,Je=1,t)return t()}finally{Je=i,_n.transition=n,Ye=e,!(Ye&6)&&qi()}}function Bu(){on=is.current,ot(is)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R3(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(yu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$a();break;case 3:xs(),ot(Zt),ot(zt),Ru();break;case 5:bu(i);break;case 4:xs();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:wu(i.type._context);break;case 22:case 23:Bu()}n=n.return}if(Rt=t,_t=t=ki(t.current,null),Nt=on=e,Mt=0,Eo=null,Ou=Cl=Mr=0,qt=ro=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fr=null}return t}function z2(t,e){do{var n=_t;try{if(Eu(),Na.current=rl,il){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}il=!1}if(Sr=0,bt=St=ut=null,no=!1,yo=0,Fu.current=null,n===null||n.return===null){Mt=1,Eo=e,_t=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=$d(o);if(m!==null){m.flags&=-257,Kd(m,o,a,s,e),m.mode&1&&qd(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){qd(s,c,e),Hu();break e}l=Error(oe(426))}}else if(lt&&a.mode&1){var p=$d(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Kd(p,o,a,s,e),Su(_s(l,a));break e}}s=l=_s(l,a),Mt!==4&&(Mt=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=M2(s,l,e);Vd(s,d);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fi===null||!Fi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=E2(s,a,e);Vd(s,M);break e}}s=s.return}while(s!==null)}V2(n)}catch(N){e=N,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function B2(){var t=sl.current;return sl.current=rl,t===null?rl:t}function Hu(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Rt===null||!(Mr&268435455)&&!(Cl&268435455)||Ai(Rt,Nt)}function ll(t,e){var n=Ye;Ye|=2;var i=B2();(Rt!==t||Nt!==e)&&(ei=null,gr(t,e));do try{eg();break}catch(r){z2(t,r)}while(!0);if(Eu(),Ye=n,sl.current=i,_t!==null)throw Error(oe(261));return Rt=null,Nt=0,Mt}function eg(){for(;_t!==null;)H2(_t)}function tg(){for(;_t!==null&&!Am();)H2(_t)}function H2(t){var e=W2(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?V2(t):_t=e,Fu.current=null}function V2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q3(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,_t=null;return}}else if(n=Y3(n,e,on),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Mt===0&&(Mt=5)}function or(t,e,n){var i=Je,r=_n.transition;try{_n.transition=null,Je=1,ng(t,e,n,i)}finally{_n.transition=r,Je=i}return null}function ng(t,e,n,i){do us();while(Ri!==null);if(Ye&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fm(t,s),t===Rt&&(_t=Rt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,j2(Ga,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=Je;Je=1;var a=Ye;Ye|=4,Fu.current=null,K3(t,n),F2(n,t),M3(x0),ja=!!v0,x0=v0=null,t.current=n,Z3(n),Cm(),Ye=a,Je=o,_n.transition=s}else t.current=n;if(Qo&&(Qo=!1,Ri=t,al=r),s=t.pendingLanes,s===0&&(Fi=null),Pm(n.stateNode),Jt(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ol)throw ol=!1,t=k0,k0=null,t;return al&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===z0?so++:(so=0,z0=t):so=0,qi(),null}function us(){if(Ri!==null){var t=Mp(al),e=_n.transition,n=Je;try{if(_n.transition=null,Je=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,al=0,Ye&6)throw Error(oe(331));var r=Ye;for(Ye|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:io(8,u,s)}var h=u.child;if(h!==null)h.return=u,Me=h;else for(;Me!==null;){u=Me;var f=u.sibling,m=u.return;if(I2(u),u===c){Me=null;break}if(f!==null){f.return=m,Me=f;break}Me=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Me=d;break e}Me=s.return}}var v=t.current;for(Me=v;Me!==null;){o=Me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Me=g;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Al(9,a)}}catch(N){pt(a,a.return,N)}if(a===o){Me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Me=M;break e}Me=a.return}}if(Ye=r,qi(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(xl,t)}catch{}i=!0}return i}finally{Je=n,_n.transition=e}}return!1}function uf(t,e,n){e=_s(n,e),e=M2(t,e,1),t=Ui(t,e,1),e=Gt(),t!==null&&(To(t,1,e),Jt(t,e))}function pt(t,e,n){if(t.tag===3)uf(t,t,n);else for(;e!==null;){if(e.tag===3){uf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=_s(n,t),t=E2(e,t,1),e=Ui(e,t,1),t=Gt(),e!==null&&(To(e,1,t),Jt(e,t));break}}e=e.return}}function ig(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Nt&n)===n&&(Mt===4||Mt===3&&(Nt&130023424)===Nt&&500>vt()-ku?gr(t,0):Ou|=n),Jt(t,e)}function G2(t,e){e===0&&(t.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var n=Gt();t=ui(t,e),t!==null&&(To(t,e,n),Jt(t,n))}function rg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G2(t,n)}function sg(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),G2(t,n)}var W2;W2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,X3(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,lt&&e.flags&1048576&&qp(e,Qa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Da(t,e),t=e.pendingProps;var r=ms(e,zt.current);cs(e,n),r=Lu(null,e,i,t,r,n);var s=Nu();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,Ka(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Au(e),r.updater=Tl,e.stateNode=r,r._reactInternals=e,C0(e,i,t,n),e=P0(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&_u(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ag(i),t=Cn(i,t),r){case 0:e=R0(null,e,i,t,n);break e;case 1:e=Jd(null,e,i,t,n);break e;case 11:e=Zd(null,e,i,t,n);break e;case 14:e=Qd(null,e,i,Cn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),R0(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Jd(t,e,i,r,n);case 3:e:{if(C2(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,e2(t,e),tl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(oe(423)),e),e=ef(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(oe(424)),e),e=ef(t,e,i,n,r);break e}else for(an=Di(e.stateNode.containerInfo.firstChild),ln=e,lt=!0,Rn=null,n=Qp(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=di(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return t2(e),t===null&&w0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_0(i,r)?o=null:s!==null&&_0(i,s)&&(e.flags|=32),A2(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&w0(e),null;case 13:return b2(t,e,n);case 4:return Cu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Zd(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Ja,i._currentValue),i._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===r.children&&!Zt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),T0(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),T0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=Sn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Cn(i,e.pendingProps),r=Cn(i.type,r),Qd(t,e,i,r,n);case 15:return w2(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Cn(i,r),Da(t,e),e.tag=1,Qt(i)?(t=!0,Ka(e)):t=!1,cs(e,n),S2(e,i,r),C0(e,i,r,n),P0(null,e,i,!0,t,n);case 19:return R2(t,e,n);case 22:return T2(t,e,n)}throw Error(oe(156,e.tag))};function j2(t,e){return xp(t,e)}function og(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,i){return new og(t,e,n,i)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ag(t){if(typeof t=="function")return Vu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===au)return 11;if(t===lu)return 14}return 2}function ki(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yr:return vr(n.children,r,s,e);case ou:o=8,r|=8;break;case Zc:return t=vn(12,n,e,r|2),t.elementType=Zc,t.lanes=s,t;case Qc:return t=vn(13,n,e,r),t.elementType=Qc,t.lanes=s,t;case Jc:return t=vn(19,n,e,r),t.elementType=Jc,t.lanes=s,t;case tp:return bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jh:o=10;break e;case ep:o=9;break e;case au:o=11;break e;case lu:o=14;break e;case Ei:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=vn(7,t,i,e),t.lanes=n,t}function bl(t,e,n,i){return t=vn(22,t,i,e),t.elementType=tp,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lg(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gu(t,e,n,i,r,s,o,a,l){return t=new lg(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(s),t}function cg(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function X2(t){if(!t)return Vi;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Xp(t,n,e)}return e}function Y2(t,e,n,i,r,s,o,a,l){return t=Gu(n,i,!0,t,r,s,o,a,l),t.context=X2(null),n=t.current,i=Gt(),r=Oi(n),s=ai(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,To(t,r,i),Jt(t,i),t}function Rl(t,e,n,i){var r=e.current,s=Gt(),o=Oi(r);return n=X2(n),e.context===null?e.context=n:e.pendingContext=n,e=ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Nn(t,r,o,s),La(t,r,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function df(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wu(t,e){df(t,e),(t=t.alternate)&&df(t,e)}function ug(){return null}var q2=typeof reportError=="function"?reportError:function(t){console.error(t)};function ju(t){this._internalRoot=t}Pl.prototype.render=ju.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Rl(t,e,null,null)};Pl.prototype.unmount=ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Rl(null,t,null,null)}),e[ci]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&Cp(t)}};function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ff(){}function dg(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cl(o);s.call(c)}}var o=Y2(e,i,t,0,null,!1,!1,"",ff);return t._reactRootContainer=o,t[ci]=o.current,mo(t.nodeType===8?t.parentNode:t),Er(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=cl(l);a.call(c)}}var l=Gu(t,0,!1,null,null,!1,!1,"",ff);return t._reactRootContainer=l,t[ci]=l.current,mo(t.nodeType===8?t.parentNode:t),Er(function(){Rl(e,l,n,i)}),l}function Nl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cl(o);a.call(l)}}Rl(e,o,t,r)}else o=dg(n,e,t,r,i);return cl(o)}Ep=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(du(e,n|1),Jt(e,vt()),!(Ye&6)&&(ys=vt()+500,qi()))}break;case 13:Er(function(){var i=ui(t,1);if(i!==null){var r=Gt();Nn(i,t,1,r)}}),Wu(t,1)}};fu=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Gt();Nn(e,t,134217728,n)}Wu(t,134217728)}};wp=function(t){if(t.tag===13){var e=Oi(t),n=ui(t,e);if(n!==null){var i=Gt();Nn(n,t,e,i)}Wu(t,e)}};Tp=function(){return Je};Ap=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};c0=function(t,e,n){switch(e){case"input":if(n0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ml(i);if(!r)throw Error(oe(90));ip(i),n0(i,r)}}}break;case"textarea":sp(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};fp=zu;hp=Er;var fg={usingClientEntryPoint:!1,Events:[Co,Zr,Ml,up,dp,zu]},zs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hg={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gp(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{xl=Jo.inject(hg),Gn=Jo}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(e))throw Error(oe(200));return cg(t,e,null,n)};un.createRoot=function(t,e){if(!Xu(t))throw Error(oe(299));var n=!1,i="",r=q2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gu(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,mo(t.nodeType===8?t.parentNode:t),new ju(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=gp(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return Er(t)};un.hydrate=function(t,e,n){if(!Ll(e))throw Error(oe(200));return Nl(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Xu(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=q2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y2(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,mo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};un.render=function(t,e,n){if(!Ll(e))throw Error(oe(200));return Nl(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(oe(40));return t._reactRootContainer?(Er(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};un.unstable_batchedUpdates=zu;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ll(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Nl(t,e,n,!1,i)};un.version="18.3.1-next-f1338f8080-20240426";function $2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($2)}catch(t){console.error(t)}}$2(),$h.exports=un;var pg=$h.exports,hf=pg;$c.createRoot=hf.createRoot,$c.hydrateRoot=hf.hydrateRoot;function K2(t,e,n){return Math.max(t,Math.min(e,n))}class mg{advance(e){var a;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,c,u){return(1-u)*l+u*c}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const l=K2(0,this.currentTime/this.duration,1);n=l>=1;const c=n?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,n),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,n,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=n,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class gg{constructor({wrapper:e,content:n,autoResize:i=!0,debounce:r=250}={}){Xn(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xn(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xn(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=n,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){s.apply(c,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,n;(e=this.wrapperResizeObserver)==null||e.disconnect(),(n=this.contentResizeObserver)==null||n.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Z2{constructor(){this.events={}}emit(e,...n){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...n)}on(e,n){var i;return(i=this.events[e])!=null&&i.push(n)||(this.events[e]=[n]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>n!==s)}}off(e,n){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>n!==r)}destroy(){this.events={}}}const pf=100/6;class vg{constructor(e,{wheelMultiplier:n=1,touchMultiplier:i=1}){Xn(this,"onTouchStart",e=>{const{clientX:n,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=n,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Xn(this,"onTouchMove",e=>{const{clientX:n,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(n-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});Xn(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Xn(this,"onWheel",e=>{let{deltaX:n,deltaY:i,deltaMode:r}=e;n*=r===1?pf:r===2?this.windowWidth:1,i*=r===1?pf:r===2?this.windowHeight:1,n*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:e})});Xn(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=n,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new Z2,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,n){return this.emitter.on(e,n)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class xg{constructor({wrapper:e=window,content:n=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=g=>Math.min(1,1.001-Math.pow(2,-10*g)),lerp:h=!c&&.1,infinite:f=!1,orientation:m="vertical",gestureOrientation:x="vertical",touchMultiplier:_=1,wheelMultiplier:p=1,autoResize:d=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:g,deltaY:M,event:N})=>{if(N.ctrlKey)return;const A=N.type.includes("touch"),b=N.type.includes("wheel");if(this.options.syncTouch&&A&&N.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const U=g===0&&M===0,T=this.options.gestureOrientation==="vertical"&&M===0||this.options.gestureOrientation==="horizontal"&&g===0;if(U||T)return;let y=N.composedPath();if(y=y.slice(0,y.indexOf(this.rootElement)),y.find(V=>{var J,X,$,D,W;return((J=V.hasAttribute)===null||J===void 0?void 0:J.call(V,"data-lenis-prevent"))||A&&((X=V.hasAttribute)===null||X===void 0?void 0:X.call(V,"data-lenis-prevent-touch"))||b&&(($=V.hasAttribute)===null||$===void 0?void 0:$.call(V,"data-lenis-prevent-wheel"))||((D=V.classList)===null||D===void 0?void 0:D.contains("lenis"))&&!(!((W=V.classList)===null||W===void 0)&&W.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void N.preventDefault();if(this.isSmooth=this.options.syncTouch&&A||this.options.smoothWheel&&b,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();N.preventDefault();let I=M;this.options.gestureOrientation==="both"?I=Math.abs(M)>Math.abs(g)?M:g:this.options.gestureOrientation==="horizontal"&&(I=g);const H=A&&this.options.syncTouch,O=A&&N.type==="touchend"&&Math.abs(I)>5;O&&(I=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+I,Object.assign({programmatic:!1},H?{lerp:O?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const g=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-g),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:n,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:u,lerp:h,infinite:f,gestureOrientation:x,orientation:m,touchMultiplier:_,wheelMultiplier:p,autoResize:d,__experimental__naiveDimensions:v},this.animate=new mg,this.emitter=new Z2,this.dimensions=new gg({wrapper:e,content:n,autoResize:d}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new vg(r,{touchMultiplier:_,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,n){return this.emitter.on(e,n)}off(e,n){return this.emitter.off(e,n)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const n=e-(this.time||e);this.time=e,this.animate.advance(.001*n)}scrollTo(e,{offset:n=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?h=document.querySelector(e):e!=null&&e.nodeType&&(h=e),h){if(this.options.wrapper!==window){const m=this.options.wrapper.getBoundingClientRect();n-=this.isHorizontal?m.left:m.top}const f=h.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=n,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=K2(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,f)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,n=this.limit,(e%n+n)%n):this.animatedScroll;var e,n}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,n){this.rootElement.classList.toggle(e,n),this.emitter.emit("className change",this)}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yu="165",_g=0,mf=1,yg=2,Q2=1,Sg=2,Jn=3,Gi=0,en=1,ni=2,zi=0,ds=1,V0=2,gf=3,vf=4,Mg=5,cr=100,Eg=101,wg=102,Tg=103,Ag=104,Cg=200,bg=201,Rg=202,Pg=203,G0=204,W0=205,Lg=206,Ng=207,Ig=208,Dg=209,Ug=210,Fg=211,Og=212,kg=213,zg=214,Bg=0,Hg=1,Vg=2,ul=3,Gg=4,Wg=5,jg=6,Xg=7,J2=0,Yg=1,qg=2,Bi=0,$g=1,Kg=2,Zg=3,Qg=4,Jg=5,ev=6,tv=7,e1=300,Ss=301,Ms=302,j0=303,X0=304,Il=306,Y0=1e3,pr=1001,q0=1002,xn=1003,nv=1004,ea=1005,Pn=1006,mc=1007,mr=1008,Wi=1009,iv=1010,rv=1011,dl=1012,t1=1013,Es=1014,Pi=1015,Dl=1016,n1=1017,i1=1018,ws=1020,sv=35902,ov=1021,av=1022,Vn=1023,lv=1024,cv=1025,fs=1026,Ts=1027,uv=1028,r1=1029,dv=1030,s1=1031,o1=1033,gc=33776,vc=33777,xc=33778,_c=33779,xf=35840,_f=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,wf=37496,Tf=37808,Af=37809,Cf=37810,bf=37811,Rf=37812,Pf=37813,Lf=37814,Nf=37815,If=37816,Df=37817,Uf=37818,Ff=37819,Of=37820,kf=37821,yc=36492,zf=36494,Bf=36495,fv=36283,Hf=36284,Vf=36285,Gf=36286,hv=3200,pv=3201,mv=0,gv=1,Ci="",kn="srgb",$i="srgb-linear",qu="display-p3",Ul="display-p3-linear",fl="linear",st="srgb",hl="rec709",pl="p3",br=7680,Wf=519,vv=512,xv=513,_v=514,a1=515,yv=516,Sv=517,Mv=518,Ev=519,jf=35044,Xf="300 es",si=2e3,ml=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,$0=180/Math.PI;function Ro(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function wv(t,e){return(t%e+e)%e}function Mc(t,e,n){return(1-n)*t+n*e}function Bs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],x=i[8],_=r[0],p=r[3],d=r[6],v=r[1],g=r[4],M=r[7],N=r[2],A=r[5],b=r[8];return s[0]=o*_+a*v+l*N,s[3]=o*p+a*g+l*A,s[6]=o*d+a*M+l*b,s[1]=c*_+u*v+h*N,s[4]=c*p+u*g+h*A,s[7]=c*d+u*M+h*b,s[2]=f*_+m*v+x*N,s[5]=f*p+m*g+x*A,s[8]=f*d+m*M+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=n*h+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ec.makeScale(e,n)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new He;function l1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Tv(){const t=gl("canvas");return t.style.display="block",t}const Yf={};function c1(t){t in Yf||(Yf[t]=!0,console.warn(t))}function Av(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qf=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$f=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[$i]:{transfer:fl,primaries:hl,toReference:t=>t,fromReference:t=>t},[kn]:{transfer:st,primaries:hl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ul]:{transfer:fl,primaries:pl,toReference:t=>t.applyMatrix3($f),fromReference:t=>t.applyMatrix3(qf)},[qu]:{transfer:st,primaries:pl,toReference:t=>t.convertSRGBToLinear().applyMatrix3($f),fromReference:t=>t.applyMatrix3(qf).convertLinearToSRGB()}},Cv=new Set([$i,Ul]),Qe={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Cv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ta[e].toReference,r=ta[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ta[t].primaries},getTransfer:function(t){return t===Ci?fl:ta[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=gl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rv=0;class u1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pv=0;class Wt extends Ps{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,i=pr,r=pr,s=Pn,o=mr,a=Vn,l=Wi,c=Wt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Ro(),this.name="",this.source=new u1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Y0:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case q0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Y0:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case q0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=e1;Wt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,N=(d+1)/2,A=(u+f)/4,b=(h+_)/4,U=(x+p)/4;return g>M&&g>N?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=b/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=U/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=b/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new u1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Lv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class d1 extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nv extends Wt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(h!==_||l!==f||c!==m||u!==x){let p=1-a;const d=l*f+c*m+u*x+h*_,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const N=Math.sqrt(g),A=Math.atan2(N,d*v);p=Math.sin(p*A)/N,a=Math.sin(a*A)/N}const M=a*v;if(l=l*p+f*M,c=c*p+m*M,u=u*p+x*M,h=h*p+_*M,p===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+u*h+l*m-c*f,e[n+1]=l*x+u*f+c*h-a*m,e[n+2]=c*x+u*m+a*f-l*h,e[n+3]=u*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new q,Kf=new Po;class Lo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),ia.subVectors(this.max,Hs),Pr.subVectors(e.a,Hs),Lr.subVectors(e.b,Hs),Nr.subVectors(e.c,Hs),vi.subVectors(Lr,Pr),xi.subVectors(Nr,Lr),Qi.subVectors(Pr,Nr);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Qi.z,Qi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Qi.z,0,-Qi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Qi.y,Qi.x,0];return!Cc(n,Pr,Lr,Nr,ia)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Pr,Lr,Nr,ia))?!1:(ra.crossVectors(vi,xi),n=[ra.x,ra.y,ra.z],Cc(n,Pr,Lr,Nr,ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new q,new q,new q,new q,new q,new q,new q,new q],wn=new q,na=new Lo,Pr=new q,Lr=new q,Nr=new q,vi=new q,xi=new q,Qi=new q,Hs=new q,ia=new q,ra=new q,Ji=new q;function Cc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ji.fromArray(t,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Iv=new Lo,Vs=new q,bc=new q;class Fl{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Iv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(bc)),this.expandByPoint(Vs.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new q,Rc=new q,sa=new q,_i=new q,Pc=new q,oa=new q,Lc=new q;class f1{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rc.copy(e).add(n).multiplyScalar(.5),sa.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(Rc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(sa),a=_i.dot(this.direction),l=-_i.dot(sa),c=_i.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rc).addScaledVector(sa,f),m}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){Pc.subVectors(n,e),oa.subVectors(i,e),Lc.crossVectors(Pc,oa);let o=this.direction.dot(Lc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(oa.crossVectors(_i,oa));if(l<0)return null;const c=a*this.direction.dot(Pc.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(Lc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,c,u,h,f,m,x,_,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,m,x,_,p)}set(e,n,i,r,s,o,a,l,c,u,h,f,m,x,_,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=x,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,x=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,_=c*h;n[0]=f+_*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=m*a-x,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,_=c*h;n[0]=f-_*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,x=a*u,_=a*h;n[0]=l*u,n[4]=x*c-m,n[8]=f*c+_,n[1]=l*h,n[5]=_*c+f,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*u,n[4]=_-f*h,n[8]=x*h+m,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*h+x,n[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+_,n[5]=o*u,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*u,n[10]=_*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Uv)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),yi.crossVectors(i,rn),yi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),yi.crossVectors(i,rn)),yi.normalize(),aa.crossVectors(rn,yi),r[0]=yi.x,r[4]=aa.x,r[8]=rn.x,r[1]=yi.y,r[5]=aa.y,r[9]=rn.y,r[2]=yi.z,r[6]=aa.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],x=i[2],_=i[6],p=i[10],d=i[14],v=i[3],g=i[7],M=i[11],N=i[15],A=r[0],b=r[4],U=r[8],T=r[12],y=r[1],I=r[5],H=r[9],O=r[13],V=r[2],J=r[6],X=r[10],$=r[14],D=r[3],W=r[7],R=r[11],C=r[15];return s[0]=o*A+a*y+l*V+c*D,s[4]=o*b+a*I+l*J+c*W,s[8]=o*U+a*H+l*X+c*R,s[12]=o*T+a*O+l*$+c*C,s[1]=u*A+h*y+f*V+m*D,s[5]=u*b+h*I+f*J+m*W,s[9]=u*U+h*H+f*X+m*R,s[13]=u*T+h*O+f*$+m*C,s[2]=x*A+_*y+p*V+d*D,s[6]=x*b+_*I+p*J+d*W,s[10]=x*U+_*H+p*X+d*R,s[14]=x*T+_*O+p*$+d*C,s[3]=v*A+g*y+M*V+N*D,s[7]=v*b+g*I+M*J+N*W,s[11]=v*U+g*H+M*X+N*R,s[15]=v*T+g*O+M*$+N*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],_=e[7],p=e[11],d=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-n*l*h+n*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],_=e[13],p=e[14],d=e[15],v=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,g=x*f*c-u*p*c-x*l*m+o*p*m+u*l*d-o*f*d,M=u*_*c-x*h*c+x*a*m-o*_*m-u*a*d+o*h*d,N=x*h*l-u*_*l-x*a*f+o*_*f+u*a*p-o*h*p,A=n*v+i*g+r*M+s*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(_*f*s-h*p*s-_*r*m+i*p*m+h*r*d-i*f*d)*b,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*d+i*l*d)*b,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*b,e[4]=g*b,e[5]=(u*p*s-x*f*s+x*r*m-n*p*m-u*r*d+n*f*d)*b,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*d-n*l*d)*b,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*m+n*l*m)*b,e[8]=M*b,e[9]=(x*h*s-u*_*s-x*i*m+n*_*m+u*i*d-n*h*d)*b,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*d+n*a*d)*b,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*m-n*a*m)*b,e[12]=N*b,e[13]=(u*_*r-x*h*r+x*i*f-n*_*f-u*i*p+n*h*p)*b,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*b,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,x=s*h,_=o*u,p=o*h,d=a*h,v=l*c,g=l*u,M=l*h,N=i.x,A=i.y,b=i.z;return r[0]=(1-(_+d))*N,r[1]=(m+M)*N,r[2]=(x-g)*N,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+d))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(x+g)*b,r[9]=(p-v)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const c=1/s,u=1/o,h=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,n.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=si){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(a===si)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ml)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*u;let x,_;if(a===si)x=(o+s)*h,_=-2*h;else if(a===ml)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new q,Tn=new yt,Dv=new q(0,0,0),Uv=new q(1,1,1),yi=new q,aa=new q,rn=new q,Zf=new yt,Qf=new Po;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class h1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fv=0;const Jf=new q,Dr=new Po,$n=new yt,la=new q,Gs=new q,Ov=new q,kv=new Po,eh=new q(1,0,0),th=new q(0,1,0),nh=new q(0,0,1),ih={type:"added"},zv={type:"removed"},Ur={type:"childadded",child:null},Nc={type:"childremoved",child:null};class tn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new q,n=new fi,i=new Po,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,n){return Jf.copy(e).applyQuaternion(this.quaternion),this.position.add(Jf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?la.copy(e):la.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Gs,la,this.up):$n.lookAt(la,Gs,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix($n),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zv),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new q(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new q,Kn=new q,Ic=new q,Zn=new q,Fr=new q,Or=new q,rh=new q,Dc=new q,Uc=new q,Fc=new q;class Hn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),An.subVectors(e,n),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){An.subVectors(r,n),Kn.subVectors(i,n),Ic.subVectors(e,n);const o=An.dot(An),a=An.dot(Kn),l=An.dot(Ic),c=Kn.dot(Kn),u=Kn.dot(Ic),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static isFrontFacing(e,n,i,r){return An.subVectors(i,n),Kn.subVectors(e,n),An.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Or.subVectors(s,i),Dc.subVectors(e,i);const l=Fr.dot(Dc),c=Or.dot(Dc);if(l<=0&&c<=0)return n.copy(i);Uc.subVectors(e,r);const u=Fr.dot(Uc),h=Or.dot(Uc);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Fr,o);Fc.subVectors(e,s);const m=Fr.dot(Fc),x=Or.dot(Fc);if(x>=0&&m<=x)return n.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Or,a);const p=u*x-m*h;if(p<=0&&h-u>=0&&m-x>=0)return rh.subVectors(s,r),a=(h-u)/(h-u+(m-x)),n.copy(r).addScaledVector(rh,a);const d=1/(p+_+f);return o=_*d,a=f*d,n.copy(i).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Oc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=wv(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Oc(o,s,e+1/3),this.g=Oc(o,s,e),this.b=Oc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=p1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Qe.fromWorkingColorSpace(Ot.copy(this),e),Math.round($t(Ot.r*255,0,255))*65536+Math.round($t(Ot.g*255,0,255))*256+Math.round($t(Ot.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=kn){Qe.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(ca);const i=Mc(Si.h,ca.h,n),r=Mc(Si.s,ca.s,n),s=Mc(Si.l,ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Xe;Xe.NAMES=p1;let Bv=0;class No extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=ds,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=G0,this.blendDst=W0,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==G0&&(i.blendSrc=this.blendSrc),this.blendDst!==W0&&(i.blendDst=this.blendDst),this.blendEquation!==cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ul&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class m1 extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=J2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new q,ua=new Ke;class yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return c1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ua.fromBufferAttribute(this,n),ua.applyMatrix3(e),this.setXY(n,ua.x,ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jf&&(e.usage=this.usage),e}}class g1 extends yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class v1 extends yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xr extends yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Hv=0;const hn=new yt,kc=new tn,kr=new q,sn=new Lo,Ws=new Lo,Ct=new q;class pi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l1(e)?v1:g1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(sn.min,Ws.min),sn.expandByPoint(Ct),Ct.addVectors(sn.max,Ws.max),sn.expandByPoint(Ct)):(sn.expandByPoint(Ws.min),sn.expandByPoint(Ws.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),Ct.add(kr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new q,l[U]=new q;const c=new q,u=new q,h=new q,f=new Ke,m=new Ke,x=new Ke,_=new q,p=new q;function d(U,T,y){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,U),m.fromBufferAttribute(s,T),x.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(f),x.sub(f);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(I),a[U].add(_),a[T].add(_),a[y].add(_),l[U].add(p),l[T].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,T=v.length;U<T;++U){const y=v[U],I=y.start,H=y.count;for(let O=I,V=I+H;O<V;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new q,M=new q,N=new q,A=new q;function b(U){N.fromBufferAttribute(r,U),A.copy(N);const T=a[U];g.copy(T),g.sub(N.multiplyScalar(N.dot(T))).normalize(),M.crossVectors(A,T);const I=M.dot(l[U])<0?-1:1;o.setXYZW(U,g.x,g.y,g.z,I)}for(let U=0,T=v.length;U<T;++U){const y=v[U],I=y.start,H=y.count;for(let O=I,V=I+H;O<V;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[x++]=c[m++]}return new yn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sh=new yt,er=new f1,da=new Fl,oh=new q,zr=new q,Br=new q,Hr=new q,zc=new q,fa=new q,ha=new Ke,pa=new Ke,ma=new Ke,ah=new q,lh=new q,ch=new q,ga=new q,va=new q;class oi extends tn{constructor(e=new pi,n=new m1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(zc.fromBufferAttribute(h,e),o?fa.addScaledVector(zc,u):fa.addScaledVector(zc.sub(n),u))}n.add(fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(da.containsPoint(er.origin)===!1&&(er.intersectSphere(da,oh)===null||er.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(sh.copy(s).invert(),er.copy(e.ray).applyMatrix4(sh),!(i.boundingBox!==null&&er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const p=f[x],d=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,N=g;M<N;M+=3){const A=a.getX(M),b=a.getX(M+1),U=a.getX(M+2);r=xa(this,d,e,i,c,u,h,A,b,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){const v=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=xa(this,o,e,i,c,u,h,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const p=f[x],d=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,N=g;M<N;M+=3){const A=M,b=M+1,U=M+2;r=xa(this,d,e,i,c,u,h,A,b,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){const v=p,g=p+1,M=p+2;r=xa(this,o,e,i,c,u,h,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Vv(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gi,a),l===null)return null;va.copy(a),va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(va);return c<n.near||c>n.far?null:{distance:c,point:va.clone(),object:t}}function xa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,zr),t.getVertexPosition(l,Br),t.getVertexPosition(c,Hr);const u=Vv(t,e,n,i,zr,Br,Hr,ga);if(u){r&&(ha.fromBufferAttribute(r,a),pa.fromBufferAttribute(r,l),ma.fromBufferAttribute(r,c),u.uv=Hn.getInterpolation(ga,zr,Br,Hr,ha,pa,ma,new Ke)),s&&(ha.fromBufferAttribute(s,a),pa.fromBufferAttribute(s,l),ma.fromBufferAttribute(s,c),u.uv1=Hn.getInterpolation(ga,zr,Br,Hr,ha,pa,ma,new Ke)),o&&(ah.fromBufferAttribute(o,a),lh.fromBufferAttribute(o,l),ch.fromBufferAttribute(o,c),u.normal=Hn.getInterpolation(ga,zr,Br,Hr,ah,lh,ch,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};Hn.getNormal(zr,Br,Hr,h.normal),u.face=h}return u}class Io extends pi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xr(c,3)),this.setAttribute("normal",new xr(u,3)),this.setAttribute("uv",new xr(h,2));function x(_,p,d,v,g,M,N,A,b,U,T){const y=M/b,I=N/U,H=M/2,O=N/2,V=A/2,J=b+1,X=U+1;let $=0,D=0;const W=new q;for(let R=0;R<X;R++){const C=R*I-O;for(let j=0;j<J;j++){const ae=j*y-H;W[_]=ae*v,W[p]=C*g,W[d]=V,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[d]=A>0?1:-1,u.push(W.x,W.y,W.z),h.push(j/b),h.push(1-R/U),$+=1}}for(let R=0;R<U;R++)for(let C=0;C<b;C++){const j=f+C+J*R,ae=f+C+J*(R+1),k=f+(C+1)+J*(R+1),K=f+(C+1)+J*R;l.push(j,ae,K),l.push(ae,k,K),D+=6}a.addGroup(m,D,T),m+=D,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function Gv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function x1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Wv={clone:As,merge:Ht};var jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _1 extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new q,uh=new Ke,dh=new Ke;class gn extends _1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $0*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,n){return this.getViewBounds(e,uh,dh),n.subVectors(dh,uh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,Gr=1;class Yv extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Vr,Gr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Vr,Gr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Vr,Gr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Vr,Gr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Vr,Gr,e,n);l.layers=this.layers,this.add(l);const c=new gn(Vr,Gr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class y1 extends Wt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qv extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new y1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Io(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:zi});s.uniforms.tEquirect.value=n;const o=new oi(r,s),a=n.minFilter;return n.minFilter===mr&&(n.minFilter=Pn),new Yv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Bc=new q,$v=new q,Kv=new He;class ar{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bc.subVectors(i,n).cross($v.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Bc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Kv.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Fl,_a=new q;class S1{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],x=r[9],_=r[10],p=r[11],d=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,p-m,M-d).normalize(),i[1].setComponents(l+s,f+c,p+m,M+d).normalize(),i[2].setComponents(l+o,f+u,p+x,M+v).normalize(),i[3].setComponents(l-o,f-u,p-x,M-v).normalize(),i[4].setComponents(l-a,f-h,p-_,M-g).normalize(),n===si)i[5].setComponents(l+a,f+h,p+_,M+g).normalize();else if(n===ml)i[5].setComponents(a,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function M1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Zv(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let m=0,x=f.length;m<x;m++){const _=f[m];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ol extends pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,m=[],x=[],_=[],p=[];for(let d=0;d<u;d++){const v=d*f-o;for(let g=0;g<c;g++){const M=g*h-s;x.push(M,-v,0),_.push(0,0,1),p.push(g/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+c*d,M=v+c*(d+1),N=v+1+c*(d+1),A=v+1+c*d;m.push(g,M,A),m.push(M,N,A)}this.setIndex(m),this.setAttribute("position",new xr(x,3)),this.setAttribute("normal",new xr(_,3)),this.setAttribute("uv",new xr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o5=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,l5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,h5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v5=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y5=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,S5=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M5=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E5=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b5="gl_FragColor = linearToOutputTexel( gl_FragColor );",R5=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,P5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W5=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X5=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q5=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K5=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z5=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q5=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J5=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a4=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h4=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,C4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,D4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H4=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V4=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e6=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t6=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n6=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i6=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r6=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,s6=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o6=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a6=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l6=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c6=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u6=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d6=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f6=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h6=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p6=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m6=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g6=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v6=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x6=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S6=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M6=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E6=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w6=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T6=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A6=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C6=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b6=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R6=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P6=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Qv,alphahash_pars_fragment:Jv,alphamap_fragment:e5,alphamap_pars_fragment:t5,alphatest_fragment:n5,alphatest_pars_fragment:i5,aomap_fragment:r5,aomap_pars_fragment:s5,batching_pars_vertex:o5,batching_vertex:a5,begin_vertex:l5,beginnormal_vertex:c5,bsdfs:u5,iridescence_fragment:d5,bumpmap_pars_fragment:f5,clipping_planes_fragment:h5,clipping_planes_pars_fragment:p5,clipping_planes_pars_vertex:m5,clipping_planes_vertex:g5,color_fragment:v5,color_pars_fragment:x5,color_pars_vertex:_5,color_vertex:y5,common:S5,cube_uv_reflection_fragment:M5,defaultnormal_vertex:E5,displacementmap_pars_vertex:w5,displacementmap_vertex:T5,emissivemap_fragment:A5,emissivemap_pars_fragment:C5,colorspace_fragment:b5,colorspace_pars_fragment:R5,envmap_fragment:P5,envmap_common_pars_fragment:L5,envmap_pars_fragment:N5,envmap_pars_vertex:I5,envmap_physical_pars_fragment:W5,envmap_vertex:D5,fog_vertex:U5,fog_pars_vertex:F5,fog_fragment:O5,fog_pars_fragment:k5,gradientmap_pars_fragment:z5,lightmap_pars_fragment:B5,lights_lambert_fragment:H5,lights_lambert_pars_fragment:V5,lights_pars_begin:G5,lights_toon_fragment:j5,lights_toon_pars_fragment:X5,lights_phong_fragment:Y5,lights_phong_pars_fragment:q5,lights_physical_fragment:$5,lights_physical_pars_fragment:K5,lights_fragment_begin:Z5,lights_fragment_maps:Q5,lights_fragment_end:J5,logdepthbuf_fragment:e4,logdepthbuf_pars_fragment:t4,logdepthbuf_pars_vertex:n4,logdepthbuf_vertex:i4,map_fragment:r4,map_pars_fragment:s4,map_particle_fragment:o4,map_particle_pars_fragment:a4,metalnessmap_fragment:l4,metalnessmap_pars_fragment:c4,morphinstance_vertex:u4,morphcolor_vertex:d4,morphnormal_vertex:f4,morphtarget_pars_vertex:h4,morphtarget_vertex:p4,normal_fragment_begin:m4,normal_fragment_maps:g4,normal_pars_fragment:v4,normal_pars_vertex:x4,normal_vertex:_4,normalmap_pars_fragment:y4,clearcoat_normal_fragment_begin:S4,clearcoat_normal_fragment_maps:M4,clearcoat_pars_fragment:E4,iridescence_pars_fragment:w4,opaque_fragment:T4,packing:A4,premultiplied_alpha_fragment:C4,project_vertex:b4,dithering_fragment:R4,dithering_pars_fragment:P4,roughnessmap_fragment:L4,roughnessmap_pars_fragment:N4,shadowmap_pars_fragment:I4,shadowmap_pars_vertex:D4,shadowmap_vertex:U4,shadowmask_pars_fragment:F4,skinbase_vertex:O4,skinning_pars_vertex:k4,skinning_vertex:z4,skinnormal_vertex:B4,specularmap_fragment:H4,specularmap_pars_fragment:V4,tonemapping_fragment:G4,tonemapping_pars_fragment:W4,transmission_fragment:j4,transmission_pars_fragment:X4,uv_pars_fragment:Y4,uv_pars_vertex:q4,uv_vertex:$4,worldpos_vertex:K4,background_vert:Z4,background_frag:Q4,backgroundCube_vert:J4,backgroundCube_frag:e6,cube_vert:t6,cube_frag:n6,depth_vert:i6,depth_frag:r6,distanceRGBA_vert:s6,distanceRGBA_frag:o6,equirect_vert:a6,equirect_frag:l6,linedashed_vert:c6,linedashed_frag:u6,meshbasic_vert:d6,meshbasic_frag:f6,meshlambert_vert:h6,meshlambert_frag:p6,meshmatcap_vert:m6,meshmatcap_frag:g6,meshnormal_vert:v6,meshnormal_frag:x6,meshphong_vert:_6,meshphong_frag:y6,meshphysical_vert:S6,meshphysical_frag:M6,meshtoon_vert:E6,meshtoon_frag:w6,points_vert:T6,points_frag:A6,shadow_vert:C6,shadow_frag:b6,sprite_vert:R6,sprite_frag:P6},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},zn={basic:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ht([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ht([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ht([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ht([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ht([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ht([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ht([pe.common,pe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ht([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};zn.physical={uniforms:Ht([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ya={r:0,b:0,g:0},nr=new fi,L6=new yt;function N6(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function x(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function _(v){let g=!1;const M=x(v);M===null?d(a,l):M&&M.isColor&&(d(M,1),g=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,g){const M=x(g);M&&(M.isCubeTexture||M.mapping===Il)?(u===void 0&&(u=new oi(new Io(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:As(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),nr.copy(g.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L6.makeRotationFromEuler(nr)),u.material.toneMapped=Qe.getTransfer(M.colorSpace)!==st,(h!==M||f!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new oi(new Ol(2,2),new ji({name:"BackgroundMaterial",uniforms:As(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,g){v.getRGB(ya,x1(t)),i.buffers.color.setClear(ya.r,ya.g,ya.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:p}}function I6(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,I,H,O,V){let J=!1;const X=h(O,H,I);s!==X&&(s=X,c(s.object)),J=m(y,O,H,V),J&&x(y,O,H,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(y,I,H,O),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function h(y,I,H){const O=H.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let J=V[I.id];J===void 0&&(J={},V[I.id]=J);let X=J[O];return X===void 0&&(X=f(l()),J[O]=X),X}function f(y){const I=[],H=[],O=[];for(let V=0;V<n;V++)I[V]=0,H[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,I,H,O){const V=s.attributes,J=I.attributes;let X=0;const $=H.getAttributes();for(const D in $)if($[D].location>=0){const R=V[D];let C=J[D];if(C===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(C=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(C=y.instanceColor)),R===void 0||R.attribute!==C||C&&R.data!==C.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function x(y,I,H,O){const V={},J=I.attributes;let X=0;const $=H.getAttributes();for(const D in $)if($[D].location>=0){let R=J[D];R===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(R=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(R=y.instanceColor));const C={};C.attribute=R,R&&R.data&&(C.data=R.data),V[D]=C,X++}s.attributes=V,s.attributesNum=X,s.index=O}function _(){const y=s.newAttributes;for(let I=0,H=y.length;I<H;I++)y[I]=0}function p(y){d(y,0)}function d(y,I){const H=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;H[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),V[y]!==I&&(t.vertexAttribDivisor(y,I),V[y]=I)}function v(){const y=s.newAttributes,I=s.enabledAttributes;for(let H=0,O=I.length;H<O;H++)I[H]!==y[H]&&(t.disableVertexAttribArray(H),I[H]=0)}function g(y,I,H,O,V,J,X){X===!0?t.vertexAttribIPointer(y,I,H,V,J):t.vertexAttribPointer(y,I,H,O,V,J)}function M(y,I,H,O){_();const V=O.attributes,J=H.getAttributes(),X=I.defaultAttributeValues;for(const $ in J){const D=J[$];if(D.location>=0){let W=V[$];if(W===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const R=W.normalized,C=W.itemSize,j=e.get(W);if(j===void 0)continue;const ae=j.buffer,k=j.type,K=j.bytesPerElement,te=k===t.INT||k===t.UNSIGNED_INT||W.gpuType===t1;if(W.isInterleavedBufferAttribute){const Q=W.data,fe=Q.stride,ue=W.offset;if(Q.isInstancedInterleavedBuffer){for(let ve=0;ve<D.locationSize;ve++)d(D.location+ve,Q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<D.locationSize;ve++)p(D.location+ve);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let ve=0;ve<D.locationSize;ve++)g(D.location+ve,C/D.locationSize,k,R,fe*K,(ue+C/D.locationSize*ve)*K,te)}else{if(W.isInstancedBufferAttribute){for(let Q=0;Q<D.locationSize;Q++)d(D.location+Q,W.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Q=0;Q<D.locationSize;Q++)p(D.location+Q);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let Q=0;Q<D.locationSize;Q++)g(D.location+Q,C/D.locationSize,k,R,C*K,C/D.locationSize*Q*K,te)}}else if(X!==void 0){const R=X[$];if(R!==void 0)switch(R.length){case 2:t.vertexAttrib2fv(D.location,R);break;case 3:t.vertexAttrib3fv(D.location,R);break;case 4:t.vertexAttrib4fv(D.location,R);break;default:t.vertexAttrib1fv(D.location,R)}}}}v()}function N(){U();for(const y in i){const I=i[y];for(const H in I){const O=I[H];for(const V in O)u(O[V].object),delete O[V];delete I[H]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const H in I){const O=I[H];for(const V in O)u(O[V].object),delete O[V];delete I[H]}delete i[y.id]}function b(y){for(const I in i){const H=i[I];if(H[y.id]===void 0)continue;const O=H[y.id];for(const V in O)u(O[V].object),delete O[V];delete H[y.id]}}function U(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function D6(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x];n.update(m,i,1)}}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=u[_];for(let _=0;_<f.length;_++)n.update(x,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function U6(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Vn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Dl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Wi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:M,maxSamples:N}}function F6(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,m){const x=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,g=v*4;let M=d.clippingState||null;l.value=M,M=u(x,f,g,m);for(let N=0;N!==g;++N)M[N]=n[N];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,x){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const d=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,M=m;g!==_;++g,M+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function O6(t){let e=new WeakMap;function n(o,a){return a===j0?o.mapping=Ss:a===X0&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===j0||a===X0)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qv(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class k6 extends _1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=4,fh=[.125,.215,.35,.446,.526,.582],ur=20,Hc=new k6,hh=new Xe;let Vc=null,Gc=0,Wc=0,jc=!1;const lr=(1+Math.sqrt(5))/2,Wr=1/lr,ph=[new q(-lr,Wr,0),new q(lr,Wr,0),new q(-Wr,0,lr),new q(Wr,0,lr),new q(0,lr,-Wr),new q(0,lr,Wr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=jc,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Dl,format:Vn,colorSpace:$i,depthBuffer:!1},r=gh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z6(s)),this._blurMaterial=B6(s,e,n)}return r}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(hh),u.toneMapping=Bi,u.autoClear=!1;const m=new m1({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),x=new oi(new Io,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(hh),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;Sa(r,v*g,d>2?g:0,g,g),u.setRenderTarget(r),_&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Sa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ph[(r-s-1)%ph.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oi(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ur-1),_=s/x,p=isFinite(s)?1+Math.floor(u*_):ur;p>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ur}`);const d=[];let v=0;for(let b=0;b<ur;++b){const U=b/_,T=Math.exp(-U*U/2);d.push(T),b===0?v+=T:b<p&&(v+=2*T)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=x,f.mipInt.value=g-i;const M=this._sizeLods[r],N=3*M*(r>g-rs?r-g+rs:0),A=4*(this._cubeSize-M);Sa(n,N,A,3*M,2*M),l.setRenderTarget(n),l.render(h,Hc)}}function z6(t){const e=[],n=[],i=[];let r=t;const s=t-rs+1+fh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rs?l=fh[o-t+rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,x=6,_=3,p=2,d=1,v=new Float32Array(_*x*m),g=new Float32Array(p*x*m),M=new Float32Array(d*x*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,U=A>2?0:-1,T=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];v.set(T,_*x*A),g.set(f,p*x*A);const y=[A,A,A,A,A,A];M.set(y,d*x*A)}const N=new pi;N.setAttribute("position",new yn(v,_)),N.setAttribute("uv",new yn(g,p)),N.setAttribute("faceIndex",new yn(M,d)),e.push(N),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gh(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B6(t,e,n){const i=new Float32Array(ur),r=new q(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vh(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function xh(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H6(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===j0||l===X0,u=l===Ss||l===Ms;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new mh(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new mh(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function V6(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&c1("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function G6(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let p=0,d=_.length;p<d;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let g=0,M=v.length;g<M;g+=3){const N=v[g+0],A=v[g+1],b=v[g+2];f.push(N,A,A,b,b,N)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const N=g+0,A=g+1,b=g+2;f.push(N,A,A,b,b,N)}}else return;const p=new(l1(f)?v1:g1)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function W6(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*o),n.update(m,i,1)}function c(f,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,f*o,x),n.update(m,i,x))}function u(f,m,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<x;p++)this.render(f[p]/o,m[p]);else{_.multiDrawElementsWEBGL(i,m,0,s,f,0,x);let p=0;for(let d=0;d<x;d++)p+=m[d];n.update(p,i,1)}}function h(f,m,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,x);let d=0;for(let v=0;v<x;v++)d+=m[v];for(let v=0;v<_.length;v++)n.update(d,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function j6(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function X6(t,e,n){const i=new WeakMap,r=new Lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let T=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let g=0;m===!0&&(g=1),x===!0&&(g=2),_===!0&&(g=3);let M=a.attributes.position.count*g,N=1;M>e.maxTextureSize&&(N=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*N*4*h),b=new d1(A,M,N,h);b.type=Pi,b.needsUpdate=!0;const U=g*4;for(let y=0;y<h;y++){const I=p[y],H=d[y],O=v[y],V=M*N*4*y;for(let J=0;J<I.count;J++){const X=J*U;m===!0&&(r.fromBufferAttribute(I,J),A[V+X+0]=r.x,A[V+X+1]=r.y,A[V+X+2]=r.z,A[V+X+3]=0),x===!0&&(r.fromBufferAttribute(H,J),A[V+X+4]=r.x,A[V+X+5]=r.y,A[V+X+6]=r.z,A[V+X+7]=0),_===!0&&(r.fromBufferAttribute(O,J),A[V+X+8]=r.x,A[V+X+9]=r.y,A[V+X+10]=r.z,A[V+X+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:b,size:new Ke(M,N)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Y6(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class E1 extends Wt{constructor(e,n,i,r,s,o,a,l,c,u=fs){if(u!==fs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fs&&(i=Es),i===void 0&&u===Ts&&(i=ws),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const w1=new Wt,T1=new E1(1,1);T1.compareFunction=a1;const A1=new d1,C1=new Nv,b1=new y1,_h=[],yh=[],Sh=new Float32Array(16),Mh=new Float32Array(9),Eh=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_h[r];if(s===void 0&&(s=new Float32Array(r),_h[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function kl(t,e){let n=yh[e];n===void 0&&(n=new Int32Array(e),yh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function q6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function K6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function Z6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function Q6(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Eh.set(i),t.uniformMatrix2fv(this.addr,!1,Eh),wt(n,i)}}function J6(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Mh.set(i),t.uniformMatrix3fv(this.addr,!1,Mh),wt(n,i)}}function e9(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Sh.set(i),t.uniformMatrix4fv(this.addr,!1,Sh),wt(n,i)}}function t9(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function n9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function i9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function r9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function s9(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function o9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function a9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function l9(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function c9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?T1:w1;n.setTexture2D(e||s,r)}function u9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||C1,r)}function d9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b1,r)}function f9(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||A1,r)}function h9(t){switch(t){case 5126:return q6;case 35664:return $6;case 35665:return K6;case 35666:return Z6;case 35674:return Q6;case 35675:return J6;case 35676:return e9;case 5124:case 35670:return t9;case 35667:case 35671:return n9;case 35668:case 35672:return i9;case 35669:case 35673:return r9;case 5125:return s9;case 36294:return o9;case 36295:return a9;case 36296:return l9;case 35678:case 36198:case 36298:case 36306:case 35682:return c9;case 35679:case 36299:case 36307:return u9;case 35680:case 36300:case 36308:case 36293:return d9;case 36289:case 36303:case 36311:case 36292:return f9}}function p9(t,e){t.uniform1fv(this.addr,e)}function m9(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function g9(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function v9(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function x9(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _9(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function y9(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function S9(t,e){t.uniform1iv(this.addr,e)}function M9(t,e){t.uniform2iv(this.addr,e)}function E9(t,e){t.uniform3iv(this.addr,e)}function w9(t,e){t.uniform4iv(this.addr,e)}function T9(t,e){t.uniform1uiv(this.addr,e)}function A9(t,e){t.uniform2uiv(this.addr,e)}function C9(t,e){t.uniform3uiv(this.addr,e)}function b9(t,e){t.uniform4uiv(this.addr,e)}function R9(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||w1,s[o])}function P9(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||C1,s[o])}function L9(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||b1,s[o])}function N9(t,e,n){const i=this.cache,r=e.length,s=kl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||A1,s[o])}function I9(t){switch(t){case 5126:return p9;case 35664:return m9;case 35665:return g9;case 35666:return v9;case 35674:return x9;case 35675:return _9;case 35676:return y9;case 5124:case 35670:return S9;case 35667:case 35671:return M9;case 35668:case 35672:return E9;case 35669:case 35673:return w9;case 5125:return T9;case 36294:return A9;case 36295:return C9;case 36296:return b9;case 35678:case 36198:case 36298:case 36306:case 35682:return R9;case 35679:case 36299:case 36307:return P9;case 35680:case 36300:case 36308:case 36293:return L9;case 36289:case 36303:case 36311:case 36292:return N9}}class D9{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=h9(n.type)}}class U9{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I9(n.type)}}class F9{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function wh(t,e){t.seq.push(e),t.map[e.id]=e}function O9(t,e,n){const i=t.name,r=i.length;for(Xc.lastIndex=0;;){const s=Xc.exec(i),o=Xc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wh(n,c===void 0?new D9(a,t,e):new U9(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new F9(a),wh(n,h)),n=h}}}class ka{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);O9(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Th(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const k9=37297;let z9=0;function B9(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function H9(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===pl&&n===hl?i="LinearDisplayP3ToLinearSRGB":e===hl&&n===pl&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Ul:return[i,"LinearTransferOETF"];case kn:case qu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ah(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+B9(t.getShaderSource(e),o)}else return r}function V9(t,e){const n=H9(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function G9(t,e){let n;switch(e){case $g:n="Linear";break;case Kg:n="Reinhard";break;case Zg:n="OptimizedCineon";break;case Qg:n="ACESFilmic";break;case ev:n="AgX";break;case tv:n="Neutral";break;case Jg:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function W9(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function j9(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function X9(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ks(t){return t!==""}function Ch(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y9=/^[ \t]*#include +<([\w\d./]+)>/gm;function K0(t){return t.replace(Y9,$9)}const q9=new Map;function $9(t,e){let n=Be[e];if(n===void 0){const i=q9.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return K0(n)}const K9=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(t){return t.replace(K9,Z9)}function Z9(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ph(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q9(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function J9(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e8(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function t8(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J2:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case qg:e="ENVMAP_BLENDING_ADD";break}return e}function n8(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function i8(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Q9(n),c=J9(n),u=e8(n),h=t8(n),f=n8(n),m=W9(n),x=j9(s),_=r.createProgram();let p,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ks).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(p=[Ph(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[Ph(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Bi?G9("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,V9("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ks).join(`
`)),o=K0(o),o=Ch(o,n),o=bh(o,n),a=K0(a),a=Ch(a,n),a=bh(a,n),o=Rh(o),a=Rh(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=v+p+o,M=v+d+a,N=Th(r,r.VERTEX_SHADER,g),A=Th(r,r.FRAGMENT_SHADER,M);r.attachShader(_,N),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(I){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(N).trim(),V=r.getShaderInfoLog(A).trim();let J=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,N,A);else{const $=Ah(r,N,"vertex"),D=Ah(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+$+`
`+D)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||V==="")&&(X=!1);X&&(I.diagnostics={runnable:J,programLog:H,vertexShader:{log:O,prefix:p},fragmentShader:{log:V,prefix:d}})}r.deleteShader(N),r.deleteShader(A),U=new ka(r,_),T=X9(r,_)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,k9)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z9++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=A,this}let r8=0;class s8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new o8(e),n.set(e,i)),i}}class o8{constructor(e){this.id=r8++,this.code=e,this.usedTimes=0}}function a8(t,e,n,i,r,s,o){const a=new h1,l=new s8,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,I,H,O){const V=H.fog,J=O.geometry,X=T.isMeshStandardMaterial?H.environment:null,$=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),D=$&&$.mapping===Il?$.image.height:null,W=x[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const R=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,C=R!==void 0?R.length:0;let j=0;J.morphAttributes.position!==void 0&&(j=1),J.morphAttributes.normal!==void 0&&(j=2),J.morphAttributes.color!==void 0&&(j=3);let ae,k,K,te;if(W){const tt=zn[W];ae=tt.vertexShader,k=tt.fragmentShader}else ae=T.vertexShader,k=T.fragmentShader,l.update(T),K=l.getVertexShaderID(T),te=l.getFragmentShaderID(T);const Q=t.getRenderTarget(),fe=O.isInstancedMesh===!0,ue=O.isBatchedMesh===!0,ve=!!T.map,L=!!T.matcap,_e=!!$,Ce=!!T.aoMap,we=!!T.lightMap,Ee=!!T.bumpMap,De=!!T.normalMap,Ne=!!T.displacementMap,Le=!!T.emissiveMap,et=!!T.metalnessMap,P=!!T.roughnessMap,E=T.anisotropy>0,Z=T.clearcoat>0,ie=T.dispersion>0,re=T.iridescence>0,se=T.sheen>0,Re=T.transmission>0,me=E&&!!T.anisotropyMap,ge=Z&&!!T.clearcoatMap,ze=Z&&!!T.clearcoatNormalMap,le=Z&&!!T.clearcoatRoughnessMap,Ae=re&&!!T.iridescenceMap,Ge=re&&!!T.iridescenceThicknessMap,Ue=se&&!!T.sheenColorMap,xe=se&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,je=!!T.specularColorMap,mt=!!T.specularIntensityMap,F=Re&&!!T.transmissionMap,ye=Re&&!!T.thicknessMap,ee=!!T.gradientMap,ne=!!T.alphaMap,de=T.alphaTest>0,ke=!!T.alphaHash,qe=!!T.extensions;let gt=Bi;T.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(gt=t.toneMapping);const Tt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:ae,fragmentShader:k,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ue,batchingColor:ue&&O._colorsTexture!==null,instancing:fe,instancingColor:fe&&O.instanceColor!==null,instancingMorph:fe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:$i,alphaToCoverage:!!T.alphaToCoverage,map:ve,matcap:L,envMap:_e,envMapMode:_e&&$.mapping,envMapCubeUVHeight:D,aoMap:Ce,lightMap:we,bumpMap:Ee,normalMap:De,displacementMap:f&&Ne,emissiveMap:Le,normalMapObjectSpace:De&&T.normalMapType===gv,normalMapTangentSpace:De&&T.normalMapType===mv,metalnessMap:et,roughnessMap:P,anisotropy:E,anisotropyMap:me,clearcoat:Z,clearcoatMap:ge,clearcoatNormalMap:ze,clearcoatRoughnessMap:le,dispersion:ie,iridescence:re,iridescenceMap:Ae,iridescenceThicknessMap:Ge,sheen:se,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:Ve,specularColorMap:je,specularIntensityMap:mt,transmission:Re,transmissionMap:F,thicknessMap:ye,gradientMap:ee,opaque:T.transparent===!1&&T.blending===ds&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:ke,combine:T.combine,mapUv:ve&&_(T.map.channel),aoMapUv:Ce&&_(T.aoMap.channel),lightMapUv:we&&_(T.lightMap.channel),bumpMapUv:Ee&&_(T.bumpMap.channel),normalMapUv:De&&_(T.normalMap.channel),displacementMapUv:Ne&&_(T.displacementMap.channel),emissiveMapUv:Le&&_(T.emissiveMap.channel),metalnessMapUv:et&&_(T.metalnessMap.channel),roughnessMapUv:P&&_(T.roughnessMap.channel),anisotropyMapUv:me&&_(T.anisotropyMap.channel),clearcoatMapUv:ge&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ze&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(T.sheenRoughnessMap.channel),specularMapUv:Ve&&_(T.specularMap.channel),specularColorMapUv:je&&_(T.specularColorMap.channel),specularIntensityMapUv:mt&&_(T.specularIntensityMap.channel),transmissionMapUv:F&&_(T.transmissionMap.channel),thicknessMapUv:ye&&_(T.thicknessMap.channel),alphaMapUv:ne&&_(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(De||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(ve||ne),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:ve&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ni,flipSided:T.side===en,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&T.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function d(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)y.push(I),y.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(v(y,T),g(y,T),y.push(t.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function v(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function g(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),T.push(a.mask)}function M(T){const y=x[T.type];let I;if(y){const H=zn[y];I=Wv.clone(H.uniforms)}else I=T.uniforms;return I}function N(T,y){let I;for(let H=0,O=u.length;H<O;H++){const V=u[H];if(V.cacheKey===y){I=V,++I.usedTimes;break}}return I===void 0&&(I=new i8(t,y,T,s),u.push(I)),I}function A(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function b(T){l.remove(T)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:N,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:U}}function l8(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function c8(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,x,_,p){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:p},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,f,m,x,_,p){const d=o(h,f,m,x,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(h,f,m,x,_,p){const d=o(h,f,m,x,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||c8),i.length>1&&i.sort(f||Lh),r.length>1&&r.sort(f||Lh)}function u(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function u8(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Nh,t.set(i,[o])):r>=s.length?(o=new Nh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function d8(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new Xe};break;case"SpotLight":n={position:new q,direction:new q,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function f8(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let h8=0;function p8(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function m8(t){const e=new d8,n=f8(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new yt,o=new yt;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,x=0,_=0,p=0,d=0,v=0,g=0,M=0,N=0,A=0,b=0;c.sort(p8);for(let T=0,y=c.length;T<y;T++){const I=c[T],H=I.color,O=I.intensity,V=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*O,h+=H.g*O,f+=H.b*O;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],O);b++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,D=n.get(I);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=I.shadow.matrix,v++}i.directional[m]=X,m++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar(O),X.distance=V,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[_]=X;const $=I.shadow;if(I.map&&(i.spotLightMap[N]=I.map,N++,$.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=$.matrix,I.castShadow){const D=n.get(I);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=J,M++}_++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(H).multiplyScalar(O),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=X,p++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const $=I.shadow,D=n.get(I);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=I.shadow.matrix,g++}i.point[x]=X,x++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(O),X.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[d]=X,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==m||U.pointLength!==x||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==d||U.numDirectionalShadows!==v||U.numPointShadows!==g||U.numSpotShadows!==M||U.numSpotMaps!==N||U.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,U.directionalLength=m,U.pointLength=x,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=d,U.numDirectionalShadows=v,U.numPointShadows=g,U.numSpotShadows=M,U.numSpotMaps=N,U.numLightProbes=b,i.version=h8++)}function l(c,u){let h=0,f=0,m=0,x=0,_=0;const p=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const g=c[d];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(g.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Ih(t){const e=new m8(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function g8(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ih(t),e.set(r,[a])):s>=o.length?(a=new Ih(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class v8 extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x8 extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y8=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S8(t,e,n){let i=new S1;const r=new Ke,s=new Ke,o=new Lt,a=new v8({depthPacking:pv}),l=new x8,c={},u=n.maxTextureSize,h={[Gi]:en,[en]:Gi,[ni]:ni},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:_8,fragmentShader:y8}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new pi;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oi(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q2;let d=this.type;this.render=function(A,b,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),y=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(zi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=d!==Jn&&this.type===Jn,V=d===Jn&&this.type!==Jn;for(let J=0,X=A.length;J<X;J++){const $=A[J],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const W=D.getFrameExtents();if(r.multiply(W),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,D.mapSize.y=s.y)),D.map===null||O===!0||V===!0){const C=this.type!==Jn?{minFilter:xn,magFilter:xn}:{};D.map!==null&&D.map.dispose(),D.map=new wr(r.x,r.y,C),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const R=D.getViewportCount();for(let C=0;C<R;C++){const j=D.getViewport(C);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),H.viewport(o),D.updateMatrices($,C),i=D.getFrustum(),M(b,U,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===Jn&&v(D,U),D.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(T,y,I)};function v(A,b){const U=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,U,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,U,m,_,null)}function g(A,b,U,T){let y=null;const I=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=U.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=y.uuid,O=b.uuid;let V=c[H];V===void 0&&(V={},c[H]=V);let J=V[O];J===void 0&&(J=y.clone(),V[O]=J,b.addEventListener("dispose",N)),y=J}if(y.visible=b.visible,y.wireframe=b.wireframe,T===Jn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=U}return y}function M(A,b,U,T,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Jn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const O=e.update(A),V=A.material;if(Array.isArray(V)){const J=O.groups;for(let X=0,$=J.length;X<$;X++){const D=J[X],W=V[D.materialIndex];if(W&&W.visible){const R=g(A,W,T,y);A.onBeforeShadow(t,A,b,U,O,R,D),t.renderBufferDirect(U,null,O,R,A,D),A.onAfterShadow(t,A,b,U,O,R,D)}}}else if(V.visible){const J=g(A,V,T,y);A.onBeforeShadow(t,A,b,U,O,J,null),t.renderBufferDirect(U,null,O,J,A,null),A.onAfterShadow(t,A,b,U,O,J,null)}}const H=A.children;for(let O=0,V=H.length;O<V;O++)M(H[O],b,U,T,y)}function N(A){A.target.removeEventListener("dispose",N);for(const U in c){const T=c[U],y=A.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function M8(t){function e(){let F=!1;const ye=new Lt;let ee=null;const ne=new Lt(0,0,0,0);return{setMask:function(de){ee!==de&&!F&&(t.colorMask(de,de,de,de),ee=de)},setLocked:function(de){F=de},setClear:function(de,ke,qe,gt,Tt){Tt===!0&&(de*=gt,ke*=gt,qe*=gt),ye.set(de,ke,qe,gt),ne.equals(ye)===!1&&(t.clearColor(de,ke,qe,gt),ne.copy(ye))},reset:function(){F=!1,ee=null,ne.set(-1,0,0,0)}}}function n(){let F=!1,ye=null,ee=null,ne=null;return{setTest:function(de){de?te(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(de){ye!==de&&!F&&(t.depthMask(de),ye=de)},setFunc:function(de){if(ee!==de){switch(de){case Bg:t.depthFunc(t.NEVER);break;case Hg:t.depthFunc(t.ALWAYS);break;case Vg:t.depthFunc(t.LESS);break;case ul:t.depthFunc(t.LEQUAL);break;case Gg:t.depthFunc(t.EQUAL);break;case Wg:t.depthFunc(t.GEQUAL);break;case jg:t.depthFunc(t.GREATER);break;case Xg:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=de}},setLocked:function(de){F=de},setClear:function(de){ne!==de&&(t.clearDepth(de),ne=de)},reset:function(){F=!1,ye=null,ee=null,ne=null}}}function i(){let F=!1,ye=null,ee=null,ne=null,de=null,ke=null,qe=null,gt=null,Tt=null;return{setTest:function(tt){F||(tt?te(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(tt){ye!==tt&&!F&&(t.stencilMask(tt),ye=tt)},setFunc:function(tt,Dn,Un){(ee!==tt||ne!==Dn||de!==Un)&&(t.stencilFunc(tt,Dn,Un),ee=tt,ne=Dn,de=Un)},setOp:function(tt,Dn,Un){(ke!==tt||qe!==Dn||gt!==Un)&&(t.stencilOp(tt,Dn,Un),ke=tt,qe=Dn,gt=Un)},setLocked:function(tt){F=tt},setClear:function(tt){Tt!==tt&&(t.clearStencil(tt),Tt=tt)},reset:function(){F=!1,ye=null,ee=null,ne=null,de=null,ke=null,qe=null,gt=null,Tt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],m=null,x=!1,_=null,p=null,d=null,v=null,g=null,M=null,N=null,A=new Xe(0,0,0),b=0,U=!1,T=null,y=null,I=null,H=null,O=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,X=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),J=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=X>=2);let D=null,W={};const R=t.getParameter(t.SCISSOR_BOX),C=t.getParameter(t.VIEWPORT),j=new Lt().fromArray(R),ae=new Lt().fromArray(C);function k(F,ye,ee,ne){const de=new Uint8Array(4),ke=t.createTexture();t.bindTexture(F,ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<ee;qe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ye+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ke}const K={};K[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(t.DEPTH_TEST),s.setFunc(ul),Ee(!1),De(mf),te(t.CULL_FACE),Ce(zi);function te(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function Q(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function fe(F,ye){return u[F]!==ye?(t.bindFramebuffer(F,ye),u[F]=ye,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ye),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function ue(F,ye){let ee=f,ne=!1;if(F){ee=h.get(ye),ee===void 0&&(ee=[],h.set(ye,ee));const de=F.textures;if(ee.length!==de.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,qe=de.length;ke<qe;ke++)ee[ke]=t.COLOR_ATTACHMENT0+ke;ee.length=de.length,ne=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ne=!0);ne&&t.drawBuffers(ee)}function ve(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const L={[cr]:t.FUNC_ADD,[Eg]:t.FUNC_SUBTRACT,[wg]:t.FUNC_REVERSE_SUBTRACT};L[Tg]=t.MIN,L[Ag]=t.MAX;const _e={[Cg]:t.ZERO,[bg]:t.ONE,[Rg]:t.SRC_COLOR,[G0]:t.SRC_ALPHA,[Ug]:t.SRC_ALPHA_SATURATE,[Ig]:t.DST_COLOR,[Lg]:t.DST_ALPHA,[Pg]:t.ONE_MINUS_SRC_COLOR,[W0]:t.ONE_MINUS_SRC_ALPHA,[Dg]:t.ONE_MINUS_DST_COLOR,[Ng]:t.ONE_MINUS_DST_ALPHA,[Fg]:t.CONSTANT_COLOR,[Og]:t.ONE_MINUS_CONSTANT_COLOR,[kg]:t.CONSTANT_ALPHA,[zg]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(F,ye,ee,ne,de,ke,qe,gt,Tt,tt){if(F===zi){x===!0&&(Q(t.BLEND),x=!1);return}if(x===!1&&(te(t.BLEND),x=!0),F!==Mg){if(F!==_||tt!==U){if((p!==cr||g!==cr)&&(t.blendEquation(t.FUNC_ADD),p=cr,g=cr),tt)switch(F){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case V0:t.blendFunc(t.ONE,t.ONE);break;case gf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case V0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,v=null,M=null,N=null,A.set(0,0,0),b=0,_=F,U=tt}return}de=de||ye,ke=ke||ee,qe=qe||ne,(ye!==p||de!==g)&&(t.blendEquationSeparate(L[ye],L[de]),p=ye,g=de),(ee!==d||ne!==v||ke!==M||qe!==N)&&(t.blendFuncSeparate(_e[ee],_e[ne],_e[ke],_e[qe]),d=ee,v=ne,M=ke,N=qe),(gt.equals(A)===!1||Tt!==b)&&(t.blendColor(gt.r,gt.g,gt.b,Tt),A.copy(gt),b=Tt),_=F,U=!1}function we(F,ye){F.side===ni?Q(t.CULL_FACE):te(t.CULL_FACE);let ee=F.side===en;ye&&(ee=!ee),Ee(ee),F.blending===ds&&F.transparent===!1?Ce(zi):Ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(F){T!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),T=F)}function De(F){F!==_g?(te(t.CULL_FACE),F!==y&&(F===mf?t.cullFace(t.BACK):F===yg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),y=F}function Ne(F){F!==I&&(J&&t.lineWidth(F),I=F)}function Le(F,ye,ee){F?(te(t.POLYGON_OFFSET_FILL),(H!==ye||O!==ee)&&(t.polygonOffset(ye,ee),H=ye,O=ee)):Q(t.POLYGON_OFFSET_FILL)}function et(F){F?te(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+V-1),D!==F&&(t.activeTexture(F),D=F)}function E(F,ye,ee){ee===void 0&&(D===null?ee=t.TEXTURE0+V-1:ee=D);let ne=W[ee];ne===void 0&&(ne={type:void 0,texture:void 0},W[ee]=ne),(ne.type!==F||ne.texture!==ye)&&(D!==ee&&(t.activeTexture(ee),D=ee),t.bindTexture(F,ye||K[F]),ne.type=F,ne.texture=ye)}function Z(){const F=W[D];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){j.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function xe(F){ae.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ae.copy(F))}function Ve(F,ye){let ee=l.get(ye);ee===void 0&&(ee=new WeakMap,l.set(ye,ee));let ne=ee.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(ye,F.name),ee.set(F,ne))}function je(F,ye){const ne=l.get(ye).get(F);a.get(ye)!==ne&&(t.uniformBlockBinding(ye,ne,F.__bindingPointIndex),a.set(ye,ne))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,W={},u={},h=new WeakMap,f=[],m=null,x=!1,_=null,p=null,d=null,v=null,g=null,M=null,N=null,A=new Xe(0,0,0),b=0,U=!1,T=null,y=null,I=null,H=null,O=null,j.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:te,disable:Q,bindFramebuffer:fe,drawBuffers:ue,useProgram:ve,setBlending:Ce,setMaterial:we,setFlipSided:Ee,setCullFace:De,setLineWidth:Ne,setPolygonOffset:Le,setScissorTest:et,activeTexture:P,bindTexture:E,unbindTexture:Z,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:Ae,texImage3D:Ge,updateUBOMapping:Ve,uniformBlockBinding:je,texStorage2D:ze,texStorage3D:le,texSubImage2D:se,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:ge,scissor:Ue,viewport:xe,reset:mt}}function E8(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return m?new OffscreenCanvas(P,E):gl("canvas")}function _(P,E,Z){let ie=1;const re=et(P);if((re.width>Z||re.height>Z)&&(ie=Z/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(ie*re.width),Re=Math.floor(ie*re.height);h===void 0&&(h=x(se,Re));const me=E?x(se,Re):h;return me.width=se,me.height=Re,me.getContext("2d").drawImage(P,0,0,se,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+se+"x"+Re+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==xn&&P.minFilter!==Pn}function d(P){t.generateMipmap(P)}function v(P,E,Z,ie,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=E;if(E===t.RED&&(Z===t.FLOAT&&(se=t.R32F),Z===t.HALF_FLOAT&&(se=t.R16F),Z===t.UNSIGNED_BYTE&&(se=t.R8)),E===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.R8UI),Z===t.UNSIGNED_SHORT&&(se=t.R16UI),Z===t.UNSIGNED_INT&&(se=t.R32UI),Z===t.BYTE&&(se=t.R8I),Z===t.SHORT&&(se=t.R16I),Z===t.INT&&(se=t.R32I)),E===t.RG&&(Z===t.FLOAT&&(se=t.RG32F),Z===t.HALF_FLOAT&&(se=t.RG16F),Z===t.UNSIGNED_BYTE&&(se=t.RG8)),E===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.RG8UI),Z===t.UNSIGNED_SHORT&&(se=t.RG16UI),Z===t.UNSIGNED_INT&&(se=t.RG32UI),Z===t.BYTE&&(se=t.RG8I),Z===t.SHORT&&(se=t.RG16I),Z===t.INT&&(se=t.RG32I)),E===t.RGB&&Z===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),E===t.RGBA){const Re=re?fl:Qe.getTransfer(ie);Z===t.FLOAT&&(se=t.RGBA32F),Z===t.HALF_FLOAT&&(se=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(se=Re===st?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function g(P,E){let Z;return P?E===null||E===Es||E===ws?Z=t.DEPTH24_STENCIL8:E===Pi?Z=t.DEPTH32F_STENCIL8:E===dl&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===ws?Z=t.DEPTH_COMPONENT24:E===Pi?Z=t.DEPTH_COMPONENT32F:E===dl&&(Z=t.DEPTH_COMPONENT16),Z}function M(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){const E=P.target;E.removeEventListener("dispose",N),b(E),E.isVideoTexture&&u.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),T(E)}function b(P){const E=i.get(P);if(E.__webglInit===void 0)return;const Z=P.source,ie=f.get(Z);if(ie){const re=ie[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&U(P),Object.keys(ie).length===0&&f.delete(Z)}i.remove(P)}function U(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const Z=P.source,ie=f.get(Z);delete ie[E.__cacheKey],o.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let re=0;re<E.__webglFramebuffer[ie].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[ie][re]);else t.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ie]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=P.textures;for(let ie=0,re=Z.length;ie<re;ie++){const se=i.get(Z[ie]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(Z[ie])}i.remove(P)}let y=0;function I(){y=0}function H(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function O(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function V(P,E){const Z=i.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Z,P,E);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+E)}function J(P,E){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ae(Z,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+E)}function X(P,E){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){ae(Z,P,E);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+E)}function $(P,E){const Z=i.get(P);if(P.version>0&&Z.__version!==P.version){k(Z,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+E)}const D={[Y0]:t.REPEAT,[pr]:t.CLAMP_TO_EDGE,[q0]:t.MIRRORED_REPEAT},W={[xn]:t.NEAREST,[nv]:t.NEAREST_MIPMAP_NEAREST,[ea]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[mc]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},R={[vv]:t.NEVER,[Ev]:t.ALWAYS,[xv]:t.LESS,[a1]:t.LEQUAL,[_v]:t.EQUAL,[Mv]:t.GEQUAL,[yv]:t.GREATER,[Sv]:t.NOTEQUAL};function C(P,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===mc||E.magFilter===ea||E.magFilter===mr||E.minFilter===Pn||E.minFilter===mc||E.minFilter===ea||E.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,D[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,W[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,R[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xn||E.minFilter!==ea&&E.minFilter!==mr||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function j(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const ie=E.source;let re=f.get(ie);re===void 0&&(re={},f.set(ie,re));const se=O(E);if(se!==P.__cacheKey){re[se]===void 0&&(re[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),re[se].usedTimes++;const Re=re[P.__cacheKey];Re!==void 0&&(re[P.__cacheKey].usedTimes--,Re.usedTimes===0&&U(E)),P.__cacheKey=se,P.__webglTexture=re[se].texture}return Z}function ae(P,E,Z){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const re=j(P,E),se=E.source;n.bindTexture(ie,P.__webglTexture,t.TEXTURE0+Z);const Re=i.get(se);if(se.version!==Re.__version||re===!0){n.activeTexture(t.TEXTURE0+Z);const me=Qe.getPrimaries(Qe.workingColorSpace),ge=E.colorSpace===Ci?null:Qe.getPrimaries(E.colorSpace),ze=E.colorSpace===Ci||me===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let le=_(E.image,!1,r.maxTextureSize);le=Le(E,le);const Ae=s.convert(E.format,E.colorSpace),Ge=s.convert(E.type);let Ue=v(E.internalFormat,Ae,Ge,E.colorSpace,E.isVideoTexture);C(ie,E);let xe;const Ve=E.mipmaps,je=E.isVideoTexture!==!0,mt=Re.__version===void 0||re===!0,F=se.dataReady,ye=M(E,le);if(E.isDepthTexture)Ue=g(E.format===Ts,E.type),mt&&(je?n.texStorage2D(t.TEXTURE_2D,1,Ue,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ue,le.width,le.height,0,Ae,Ge,null));else if(E.isDataTexture)if(Ve.length>0){je&&mt&&n.texStorage2D(t.TEXTURE_2D,ye,Ue,Ve[0].width,Ve[0].height);for(let ee=0,ne=Ve.length;ee<ne;ee++)xe=Ve[ee],je?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,xe.width,xe.height,Ae,Ge,xe.data):n.texImage2D(t.TEXTURE_2D,ee,Ue,xe.width,xe.height,0,Ae,Ge,xe.data);E.generateMipmaps=!1}else je?(mt&&n.texStorage2D(t.TEXTURE_2D,ye,Ue,le.width,le.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Ge,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,le.width,le.height,0,Ae,Ge,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Ue,Ve[0].width,Ve[0].height,le.depth);for(let ee=0,ne=Ve.length;ee<ne;ee++)if(xe=Ve[ee],E.format!==Vn)if(Ae!==null)if(je){if(F)if(E.layerUpdates.size>0){for(const de of E.layerUpdates){const ke=xe.width*xe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,de,xe.width,xe.height,1,Ae,xe.data.slice(ke*de,ke*(de+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,le.depth,Ae,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Ue,xe.width,xe.height,le.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,xe.width,xe.height,le.depth,Ae,Ge,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Ue,xe.width,xe.height,le.depth,0,Ae,Ge,xe.data)}else{je&&mt&&n.texStorage2D(t.TEXTURE_2D,ye,Ue,Ve[0].width,Ve[0].height);for(let ee=0,ne=Ve.length;ee<ne;ee++)xe=Ve[ee],E.format!==Vn?Ae!==null?je?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,xe.width,xe.height,Ae,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,xe.width,xe.height,Ae,Ge,xe.data):n.texImage2D(t.TEXTURE_2D,ee,Ue,xe.width,xe.height,0,Ae,Ge,xe.data)}else if(E.isDataArrayTexture)if(je){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,Ue,le.width,le.height,le.depth),F)if(E.layerUpdates.size>0){let ee;switch(Ge){case t.UNSIGNED_BYTE:switch(Ae){case t.ALPHA:ee=1;break;case t.LUMINANCE:ee=1;break;case t.LUMINANCE_ALPHA:ee=2;break;case t.RGB:ee=3;break;case t.RGBA:ee=4;break;default:throw new Error(`Unknown texel size for format ${Ae}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:ee=1;break;default:throw new Error(`Unknown texel size for type ${Ge}.`)}const ne=le.width*le.height*ee;for(const de of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,Ae,Ge,le.data.slice(ne*de,ne*(de+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Ge,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Ae,Ge,le.data);else if(E.isData3DTexture)je?(mt&&n.texStorage3D(t.TEXTURE_3D,ye,Ue,le.width,le.height,le.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Ge,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Ae,Ge,le.data);else if(E.isFramebufferTexture){if(mt)if(je)n.texStorage2D(t.TEXTURE_2D,ye,Ue,le.width,le.height);else{let ee=le.width,ne=le.height;for(let de=0;de<ye;de++)n.texImage2D(t.TEXTURE_2D,de,Ue,ee,ne,0,Ae,Ge,null),ee>>=1,ne>>=1}}else if(Ve.length>0){if(je&&mt){const ee=et(Ve[0]);n.texStorage2D(t.TEXTURE_2D,ye,Ue,ee.width,ee.height)}for(let ee=0,ne=Ve.length;ee<ne;ee++)xe=Ve[ee],je?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Ae,Ge,xe):n.texImage2D(t.TEXTURE_2D,ee,Ue,Ae,Ge,xe);E.generateMipmaps=!1}else if(je){if(mt){const ee=et(le);n.texStorage2D(t.TEXTURE_2D,ye,Ue,ee.width,ee.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ge,le)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Ae,Ge,le);p(E)&&d(ie),Re.__version=se.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function k(P,E,Z){if(E.image.length!==6)return;const ie=j(P,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+Z);const se=i.get(re);if(re.version!==se.__version||ie===!0){n.activeTexture(t.TEXTURE0+Z);const Re=Qe.getPrimaries(Qe.workingColorSpace),me=E.colorSpace===Ci?null:Qe.getPrimaries(E.colorSpace),ge=E.colorSpace===Ci||Re===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let ne=0;ne<6;ne++)!ze&&!le?Ae[ne]=_(E.image[ne],!0,r.maxCubemapSize):Ae[ne]=le?E.image[ne].image:E.image[ne],Ae[ne]=Le(E,Ae[ne]);const Ge=Ae[0],Ue=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),Ve=v(E.internalFormat,Ue,xe,E.colorSpace),je=E.isVideoTexture!==!0,mt=se.__version===void 0||ie===!0,F=re.dataReady;let ye=M(E,Ge);C(t.TEXTURE_CUBE_MAP,E);let ee;if(ze){je&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ve,Ge.width,Ge.height);for(let ne=0;ne<6;ne++){ee=Ae[ne].mipmaps;for(let de=0;de<ee.length;de++){const ke=ee[de];E.format!==Vn?Ue!==null?je?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,ke.width,ke.height,Ue,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ve,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,ke.width,ke.height,Ue,xe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ve,ke.width,ke.height,0,Ue,xe,ke.data)}}}else{if(ee=E.mipmaps,je&&mt){ee.length>0&&ye++;const ne=et(Ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){je?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae[ne].width,Ae[ne].height,Ue,xe,Ae[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Ae[ne].width,Ae[ne].height,0,Ue,xe,Ae[ne].data);for(let de=0;de<ee.length;de++){const qe=ee[de].image[ne].image;je?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,qe.width,qe.height,Ue,xe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ve,qe.width,qe.height,0,Ue,xe,qe.data)}}else{je?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,xe,Ae[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Ue,xe,Ae[ne]);for(let de=0;de<ee.length;de++){const ke=ee[de];je?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ue,xe,ke.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ve,Ue,xe,ke.image[ne])}}}p(E)&&d(t.TEXTURE_CUBE_MAP),se.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function K(P,E,Z,ie,re,se){const Re=s.convert(Z.format,Z.colorSpace),me=s.convert(Z.type),ge=v(Z.internalFormat,Re,me,Z.colorSpace);if(!i.get(E).__hasExternalTextures){const le=Math.max(1,E.width>>se),Ae=Math.max(1,E.height>>se);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,se,ge,le,Ae,E.depth,0,Re,me,null):n.texImage2D(re,se,ge,le,Ae,0,Re,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),De(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,re,i.get(Z).__webglTexture,0,Ee(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,re,i.get(Z).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(P,E,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const ie=E.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,se=g(E.stencilBuffer,re),Re=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=Ee(E);De(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,se,E.width,E.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,se,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,P)}else{const ie=E.textures;for(let re=0;re<ie.length;re++){const se=ie[re],Re=s.convert(se.format,se.colorSpace),me=s.convert(se.type),ge=v(se.internalFormat,Re,me,se.colorSpace),ze=Ee(E);Z&&De(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,ge,E.width,E.height):De(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,ge,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const ie=i.get(E.depthTexture).__webglTexture,re=Ee(E);if(E.depthTexture.format===fs)De(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Ts)De(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function fe(P){const E=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Q(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=t.createRenderbuffer(),te(E.__webglDepthbuffer[ie],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),te(E.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(P,E,Z){const ie=i.get(P);E!==void 0&&K(ie.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&fe(P)}function ve(P){const E=P.texture,Z=i.get(P),ie=i.get(E);P.addEventListener("dispose",A);const re=P.textures,se=P.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,o.memory.textures++),se){Z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[me]=[];for(let ge=0;ge<E.mipmaps.length;ge++)Z.__webglFramebuffer[me][ge]=t.createFramebuffer()}else Z.__webglFramebuffer[me]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)Z.__webglFramebuffer[me]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Re)for(let me=0,ge=re.length;me<ge;me++){const ze=i.get(re[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&De(P)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const ge=re[me];Z.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[me]);const ze=s.convert(ge.format,ge.colorSpace),le=s.convert(ge.type),Ae=v(ge.internalFormat,ze,le,ge.colorSpace,P.isXRRenderTarget===!0),Ge=Ee(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Ae,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Z.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),te(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),C(t.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)K(Z.__webglFramebuffer[me][ge],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else K(Z.__webglFramebuffer[me],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let me=0,ge=re.length;me<ge;me++){const ze=re[me],le=i.get(ze);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),C(t.TEXTURE_2D,ze),K(Z.__webglFramebuffer,P,ze,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),p(ze)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,ie.__webglTexture),C(me,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)K(Z.__webglFramebuffer[ge],P,E,t.COLOR_ATTACHMENT0,me,ge);else K(Z.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,me,0);p(E)&&d(me),n.unbindTexture()}P.depthBuffer&&fe(P)}function L(P){const E=P.textures;for(let Z=0,ie=E.length;Z<ie;Z++){const re=E[Z];if(p(re)){const se=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(re).__webglTexture;n.bindTexture(se,Re),d(se),n.unbindTexture()}}}const _e=[],Ce=[];function we(P){if(P.samples>0){if(De(P)===!1){const E=P.textures,Z=P.width,ie=P.height;let re=t.COLOR_BUFFER_BIT;const se=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(P),me=E.length>1;if(me)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ge]);const ze=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,re,t.NEAREST),l===!0&&(_e.length=0,Ce.length=0,_e.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(_e.push(se),Ce.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ge]);const ze=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ee(P){return Math.min(r.maxSamples,P.samples)}function De(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ne(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Le(P,E){const Z=P.colorSpace,ie=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==$i&&Z!==Ci&&(Qe.getTransfer(Z)===st?(ie!==Vn||re!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function et(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=ue,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=De}function w8(t,e){function n(i,r=Ci){let s;const o=Qe.getTransfer(r);if(i===Wi)return t.UNSIGNED_BYTE;if(i===n1)return t.UNSIGNED_SHORT_4_4_4_4;if(i===i1)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iv)return t.BYTE;if(i===rv)return t.SHORT;if(i===dl)return t.UNSIGNED_SHORT;if(i===t1)return t.INT;if(i===Es)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Dl)return t.HALF_FLOAT;if(i===ov)return t.ALPHA;if(i===av)return t.RGB;if(i===Vn)return t.RGBA;if(i===lv)return t.LUMINANCE;if(i===cv)return t.LUMINANCE_ALPHA;if(i===fs)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===uv)return t.RED;if(i===r1)return t.RED_INTEGER;if(i===dv)return t.RG;if(i===s1)return t.RG_INTEGER;if(i===o1)return t.RGBA_INTEGER;if(i===gc||i===vc||i===xc||i===_c)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xf||i===_f||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mf||i===Ef||i===wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mf||i===Ef)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tf||i===Af||i===Cf||i===bf||i===Rf||i===Pf||i===Lf||i===Nf||i===If||i===Df||i===Uf||i===Ff||i===Of||i===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===zf||i===Bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fv||i===Hf||i===Vf||i===Gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class T8 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ma extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A8={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A8)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const C8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b8=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Wt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:C8,fragmentShader:b8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Ol(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class P8 extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null;const _=new R8,p=n.getContextAttributes();let d=null,v=null;const g=[],M=[],N=new Ke;let A=null;const b=new gn;b.layers.enable(1),b.viewport=new Lt;const U=new gn;U.layers.enable(2),U.viewport=new Lt;const T=[b,U],y=new T8;y.layers.enable(1),y.layers.enable(2);let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=g[k];return K===void 0&&(K=new Yc,g[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=g[k];return K===void 0&&(K=new Yc,g[k]=K),K.getGripSpace()},this.getHand=function(k){let K=g[k];return K===void 0&&(K=new Yc,g[k]=K),K.getHandSpace()};function O(k){const K=M.indexOf(k.inputSource);if(K===-1)return;const te=g[K];te!==void 0&&(te.update(k.inputSource,k.frame,c||o),te.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",J);for(let k=0;k<g.length;k++){const K=M[k];K!==null&&(M[k]=null,g[k].disconnect(K))}I=null,H=null,_.reset(),e.setRenderTarget(d),m=null,f=null,h=null,r=null,v=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new wr(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,te=null,Q=null;p.depth&&(Q=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=p.stencil?Ts:fs,te=p.stencil?ws:Es);const fe={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new wr(f.textureWidth,f.textureHeight,{format:Vn,type:Wi,depthTexture:new E1(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(k){for(let K=0;K<k.removed.length;K++){const te=k.removed[K],Q=M.indexOf(te);Q>=0&&(M[Q]=null,g[Q].disconnect(te))}for(let K=0;K<k.added.length;K++){const te=k.added[K];let Q=M.indexOf(te);if(Q===-1){for(let ue=0;ue<g.length;ue++)if(ue>=M.length){M.push(te),Q=ue;break}else if(M[ue]===null){M[ue]=te,Q=ue;break}if(Q===-1)break}const fe=g[Q];fe&&fe.connect(te)}}const X=new q,$=new q;function D(k,K,te){X.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(te.matrixWorld);const Q=X.distanceTo($),fe=K.projectionMatrix.elements,ue=te.projectionMatrix.elements,ve=fe[14]/(fe[10]-1),L=fe[14]/(fe[10]+1),_e=(fe[9]+1)/fe[5],Ce=(fe[9]-1)/fe[5],we=(fe[8]-1)/fe[0],Ee=(ue[8]+1)/ue[0],De=ve*we,Ne=ve*Ee,Le=Q/(-we+Ee),et=Le*-we;K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(et),k.translateZ(Le),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const P=ve+Le,E=L+Le,Z=De-et,ie=Ne+(Q-et),re=_e*L/E*P,se=Ce*L/E*P;k.projectionMatrix.makePerspective(Z,ie,re,se,P,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),y.near=U.near=b.near=k.near,y.far=U.far=b.far=k.far,(I!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,H=y.far,b.near=I,b.far=H,U.near=I,U.far=H,b.updateProjectionMatrix(),U.updateProjectionMatrix(),k.updateProjectionMatrix());const K=k.parent,te=y.cameras;W(y,K);for(let Q=0;Q<te.length;Q++)W(te[Q],K);te.length===2?D(y,b,U):y.projectionMatrix.copy(b.projectionMatrix),R(k,y,K)};function R(k,K,te){te===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(te.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=$0*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let C=null;function j(k,K){if(u=K.getViewerPose(c||o),x=K,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Q=!1;te.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let ue=0;ue<te.length;ue++){const ve=te[ue];let L=null;if(m!==null)L=m.getViewport(ve);else{const Ce=h.getViewSubImage(f,ve);L=Ce.viewport,ue===0&&(e.setRenderTargetTextures(v,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(v))}let _e=T[ue];_e===void 0&&(_e=new gn,_e.layers.enable(ue),_e.viewport=new Lt,T[ue]=_e),_e.matrix.fromArray(ve.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ve.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(L.x,L.y,L.width,L.height),ue===0&&(y.matrix.copy(_e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push(_e)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const ue=h.getDepthInformation(te[0]);ue&&ue.isValid&&ue.texture&&_.init(e,ue,r.renderState)}}for(let te=0;te<g.length;te++){const Q=M[te],fe=g[te];Q!==null&&fe!==void 0&&fe.update(Q,K,c||o)}C&&C(k,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const ae=new M1;ae.setAnimationLoop(j),this.setAnimationLoop=function(k){C=k},this.dispose=function(){}}}const ir=new fi,L8=new yt;function N8(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,x1(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,v,g,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,g):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===en&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===en&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,M=v.envMapRotation;g&&(p.envMap.value=g,ir.copy(M),ir.x*=-1,ir.y*=-1,ir.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),p.envMapRotation.value.setFromMatrix4(L8.makeRotationFromEuler(ir)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=g*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I8(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(x(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",p));const N=g.program;i.updateUBOMapping(v,N);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const g=h();v.__bindingPointIndex=g;const M=t.createBuffer(),N=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],M=v.uniforms,N=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,b=M.length;A<b;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,y=U.length;T<y;T++){const I=U[T];if(m(I,A,T,N)===!0){const H=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let J=0;J<O.length;J++){const X=O[J],$=_(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,H+V,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,N){const A=v.value,b=g+"_"+M;if(N[b]===void 0)return typeof A=="number"||typeof A=="boolean"?N[b]=A:N[b]=A.clone(),!0;{const U=N[b];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return N[b]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function x(v){const g=v.uniforms;let M=0;const N=16;for(let b=0,U=g.length;b<U;b++){const T=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,I=T.length;y<I;y++){const H=T[y],O=Array.isArray(H.value)?H.value:[H.value];for(let V=0,J=O.length;V<J;V++){const X=O[V],$=_(X),D=M%N;D!==0&&N-D<$.boundary&&(M+=N-D),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=$.storage}}}const A=M%N;return A>0&&(M+=N-A),v.__size=M,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class D8{constructor(e={}){const{canvas:n=Tv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let M=!1,N=0,A=0,b=null,U=-1,T=null;const y=new Lt,I=new Lt;let H=null;const O=new Xe(0);let V=0,J=n.width,X=n.height,$=1,D=null,W=null;const R=new Lt(0,0,J,X),C=new Lt(0,0,J,X);let j=!1;const ae=new S1;let k=!1,K=!1;const te=new yt,Q=new q,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ve(){return b===null?$:1}let L=i;function _e(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yu}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",ne,!1),L===null){const z="webgl2";if(L=_e(z,w),L===null)throw _e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,we,Ee,De,Ne,Le,et,P,E,Z,ie,re,se,Re,me,ge,ze,le,Ae,Ge,Ue,xe,Ve,je;function mt(){Ce=new V6(L),Ce.init(),xe=new w8(L,Ce),we=new U6(L,Ce,e,xe),Ee=new M8(L),De=new j6(L),Ne=new l8,Le=new E8(L,Ce,Ee,Ne,we,xe,De),et=new O6(g),P=new H6(g),E=new Zv(L),Ve=new I6(L,E),Z=new G6(L,E,De,Ve),ie=new Y6(L,Z,E,De),Ae=new X6(L,we,Le),ge=new F6(Ne),re=new a8(g,et,P,Ce,we,Ve,ge),se=new N8(g,Ne),Re=new u8,me=new g8(Ce),le=new N6(g,et,P,Ee,ie,f,l),ze=new S8(g,ie,we),je=new I8(L,De,we,Ee),Ge=new D6(L,Ce,De),Ue=new W6(L,Ce,De),De.programs=re.programs,g.capabilities=we,g.extensions=Ce,g.properties=Ne,g.renderLists=Re,g.shadowMap=ze,g.state=Ee,g.info=De}mt();const F=new P8(g,L);this.xr=F,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(J,X,!1))},this.getSize=function(w){return w.set(J,X)},this.setSize=function(w,z,G=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,X=z,n.width=Math.floor(w*$),n.height=Math.floor(z*$),G===!0&&(n.style.width=w+"px",n.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(J*$,X*$).floor()},this.setDrawingBufferSize=function(w,z,G){J=w,X=z,$=G,n.width=Math.floor(w*G),n.height=Math.floor(z*G),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,z,G,Y){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,z,G,Y),Ee.viewport(y.copy(R).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(C)},this.setScissor=function(w,z,G,Y){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,z,G,Y),Ee.scissor(I.copy(C).multiplyScalar($).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(w){Ee.setScissorTest(j=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(w=!0,z=!0,G=!0){let Y=0;if(w){let B=!1;if(b!==null){const ce=b.texture.format;B=ce===o1||ce===s1||ce===r1}if(B){const ce=b.texture.type,Se=ce===Wi||ce===Es||ce===dl||ce===ws||ce===n1||ce===i1,Te=le.getClearColor(),be=le.getClearAlpha(),Fe=Te.r,Oe=Te.g,Ie=Te.b;Se?(m[0]=Fe,m[1]=Oe,m[2]=Ie,m[3]=be,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Fe,x[1]=Oe,x[2]=Ie,x[3]=be,L.clearBufferiv(L.COLOR,0,x))}else Y|=L.COLOR_BUFFER_BIT}z&&(Y|=L.DEPTH_BUFFER_BIT),G&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),Re.dispose(),me.dispose(),Ne.dispose(),et.dispose(),P.dispose(),ie.dispose(),Ve.dispose(),je.dispose(),re.dispose(),F.dispose(),F.removeEventListener("sessionstart",Dn),F.removeEventListener("sessionend",Un),Ki.stop()};function ye(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=De.autoReset,z=ze.enabled,G=ze.autoUpdate,Y=ze.needsUpdate,B=ze.type;mt(),De.autoReset=w,ze.enabled=z,ze.autoUpdate=G,ze.needsUpdate=Y,ze.type=B}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){const z=w.target;z.removeEventListener("dispose",de),ke(z)}function ke(w){qe(w),Ne.remove(w)}function qe(w){const z=Ne.get(w).programs;z!==void 0&&(z.forEach(function(G){re.releaseProgram(G)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,G,Y,B,ce){z===null&&(z=fe);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Te=U1(w,z,G,Y,B);Ee.setMaterial(Y,Se);let be=G.index,Fe=1;if(Y.wireframe===!0){if(be=Z.getWireframeAttribute(G),be===void 0)return;Fe=2}const Oe=G.drawRange,Ie=G.attributes.position;let $e=Oe.start*Fe,ft=(Oe.start+Oe.count)*Fe;ce!==null&&($e=Math.max($e,ce.start*Fe),ft=Math.min(ft,(ce.start+ce.count)*Fe)),be!==null?($e=Math.max($e,0),ft=Math.min(ft,be.count)):Ie!=null&&($e=Math.max($e,0),ft=Math.min(ft,Ie.count));const ht=ft-$e;if(ht<0||ht===1/0)return;Ve.setup(B,Y,Te,G,be);let nn,Ze=Ge;if(be!==null&&(nn=E.get(be),Ze=Ue,Ze.setIndex(nn)),B.isMesh)Y.wireframe===!0?(Ee.setLineWidth(Y.wireframeLinewidth*ve()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(B.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),Ee.setLineWidth(Pe*ve()),B.isLineSegments?Ze.setMode(L.LINES):B.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else B.isPoints?Ze.setMode(L.POINTS):B.isSprite&&Ze.setMode(L.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?Ze.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):Ze.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Ze.renderInstances($e,ht,B.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Bt=Math.min(G.instanceCount,Pe);Ze.renderInstances($e,ht,Bt)}else Ze.render($e,ht)};function gt(w,z,G){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Uo(w,z,G),w.side=Gi,w.needsUpdate=!0,Uo(w,z,G),w.side=ni):Uo(w,z,G)}this.compile=function(w,z,G=null){G===null&&(G=w),p=me.get(G),p.init(z),v.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return w.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let Se=0;Se<ce.length;Se++){const Te=ce[Se];gt(Te,G,B),Y.add(Te)}else gt(ce,G,B),Y.add(ce)}),v.pop(),p=null,Y},this.compileAsync=function(w,z,G=null){const Y=this.compile(w,z,G);return new Promise(B=>{function ce(){if(Y.forEach(function(Se){Ne.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){B(w);return}setTimeout(ce,10)}Ce.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Tt=null;function tt(w){Tt&&Tt(w)}function Dn(){Ki.stop()}function Un(){Ki.start()}const Ki=new M1;Ki.setAnimationLoop(tt),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(w){Tt=w,F.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},F.addEventListener("sessionstart",Dn),F.addEventListener("sessionend",Un),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(z),z=F.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,z,b),p=me.get(w,v.length),p.init(z),v.push(p),te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ae.setFromProjectionMatrix(te),K=this.localClippingEnabled,k=ge.init(this.clippingPlanes,K),_=Re.get(w,d.length),_.init(),d.push(_),F.enabled===!0&&F.isPresenting===!0){const ce=g.xr.getDepthSensingMesh();ce!==null&&zl(ce,z,-1/0,g.sortObjects)}zl(w,z,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(D,W),ue=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,ue&&le.addToRenderList(_,w),this.info.render.frame++,k===!0&&ge.beginShadows();const G=p.state.shadowsArray;ze.render(G,w,z),k===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,B=_.transmissive;if(p.setupLights(),z.isArrayCamera){const ce=z.cameras;if(B.length>0)for(let Se=0,Te=ce.length;Se<Te;Se++){const be=ce[Se];Ju(Y,B,w,be)}ue&&le.render(w);for(let Se=0,Te=ce.length;Se<Te;Se++){const be=ce[Se];Qu(_,w,be,be.viewport)}}else B.length>0&&Ju(Y,B,w,z),ue&&le.render(w),Qu(_,w,z);b!==null&&(Le.updateMultisampleRenderTarget(b),Le.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(g,w,z),Ve.resetDefaultState(),U=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&ge.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function zl(w,z,G,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){Y&&Q.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);const Se=ie.update(w),Te=w.material;Te.visible&&_.push(w,Se,Te,G,Q.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const Se=ie.update(w),Te=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Q.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Q.copy(Se.boundingSphere.center)),Q.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(Te)){const be=Se.groups;for(let Fe=0,Oe=be.length;Fe<Oe;Fe++){const Ie=be[Fe],$e=Te[Ie.materialIndex];$e&&$e.visible&&_.push(w,Se,$e,G,Q.z,Ie)}}else Te.visible&&_.push(w,Se,Te,G,Q.z,null)}}const ce=w.children;for(let Se=0,Te=ce.length;Se<Te;Se++)zl(ce[Se],z,G,Y)}function Qu(w,z,G,Y){const B=w.opaque,ce=w.transmissive,Se=w.transparent;p.setupLightsView(G),k===!0&&ge.setGlobalState(g.clippingPlanes,G),Y&&Ee.viewport(y.copy(Y)),B.length>0&&Do(B,z,G),ce.length>0&&Do(ce,z,G),Se.length>0&&Do(Se,z,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ju(w,z,G,Y){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new wr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Dl:Wi,minFilter:mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ce=p.state.transmissionRenderTarget[Y.id],Se=Y.viewport||y;ce.setSize(Se.z,Se.w);const Te=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(O),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),ue?le.render(G):g.clear();const be=g.toneMapping;g.toneMapping=Bi;const Fe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),k===!0&&ge.setGlobalState(g.clippingPlanes,Y),Do(w,G,Y),Le.updateMultisampleRenderTarget(ce),Le.updateRenderTargetMipmap(ce),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Ie=0,$e=z.length;Ie<$e;Ie++){const ft=z[Ie],ht=ft.object,nn=ft.geometry,Ze=ft.material,Pe=ft.group;if(Ze.side===ni&&ht.layers.test(Y.layers)){const Bt=Ze.side;Ze.side=en,Ze.needsUpdate=!0,ed(ht,G,Y,nn,Ze,Pe),Ze.side=Bt,Ze.needsUpdate=!0,Oe=!0}}Oe===!0&&(Le.updateMultisampleRenderTarget(ce),Le.updateRenderTargetMipmap(ce))}g.setRenderTarget(Te),g.setClearColor(O,V),Fe!==void 0&&(Y.viewport=Fe),g.toneMapping=be}function Do(w,z,G){const Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ce=w.length;B<ce;B++){const Se=w[B],Te=Se.object,be=Se.geometry,Fe=Y===null?Se.material:Y,Oe=Se.group;Te.layers.test(G.layers)&&ed(Te,z,G,be,Fe,Oe)}}function ed(w,z,G,Y,B,ce){w.onBeforeRender(g,z,G,Y,B,ce),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(g,z,G,Y,w,ce),B.transparent===!0&&B.side===ni&&B.forceSinglePass===!1?(B.side=en,B.needsUpdate=!0,g.renderBufferDirect(G,z,Y,B,w,ce),B.side=Gi,B.needsUpdate=!0,g.renderBufferDirect(G,z,Y,B,w,ce),B.side=ni):g.renderBufferDirect(G,z,Y,B,w,ce),w.onAfterRender(g,z,G,Y,B,ce)}function Uo(w,z,G){z.isScene!==!0&&(z=fe);const Y=Ne.get(w),B=p.state.lights,ce=p.state.shadowsArray,Se=B.state.version,Te=re.getParameters(w,B.state,ce,z,G),be=re.getProgramCacheKey(Te);let Fe=Y.programs;Y.environment=w.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(w.isMeshStandardMaterial?P:et).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",de),Fe=new Map,Y.programs=Fe);let Oe=Fe.get(be);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===Se)return nd(w,Te),Oe}else Te.uniforms=re.getUniforms(w),w.onBuild(G,Te,g),w.onBeforeCompile(Te,g),Oe=re.acquireProgram(Te,be),Fe.set(be,Oe),Y.uniforms=Te.uniforms;const Ie=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ge.uniform),nd(w,Te),Y.needsLights=O1(w),Y.lightsStateVersion=Se,Y.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function td(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=ka.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function nd(w,z){const G=Ne.get(w);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function U1(w,z,G,Y,B){z.isScene!==!0&&(z=fe),Le.resetTextureUnits();const ce=z.fog,Se=Y.isMeshStandardMaterial?z.environment:null,Te=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$i,be=(Y.isMeshStandardMaterial?P:et).get(Y.envMap||Se),Fe=Y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color;let ht=Bi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ht=g.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=nn!==void 0?nn.length:0,Pe=Ne.get(Y),Bt=p.state.lights;if(k===!0&&(K===!0||w!==T)){const fn=w===T&&Y.id===U;ge.setState(Y,w,fn)}let nt=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Bt.state.version||Pe.outputColorSpace!==Te||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==be||Y.fog===!0&&Pe.fog!==ce||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ge.numPlanes||Pe.numIntersection!==ge.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Oe||Pe.morphTargets!==Ie||Pe.morphNormals!==$e||Pe.morphColors!==ft||Pe.toneMapping!==ht||Pe.morphTargetsCount!==Ze)&&(nt=!0):(nt=!0,Pe.__version=Y.version);let jn=Pe.currentProgram;nt===!0&&(jn=Uo(Y,z,B));let Fo=!1,Zi=!1,Bl=!1;const At=jn.getUniforms(),mi=Pe.uniforms;if(Ee.useProgram(jn.program)&&(Fo=!0,Zi=!0,Bl=!0),Y.id!==U&&(U=Y.id,Zi=!0),Fo||T!==w){At.setValue(L,"projectionMatrix",w.projectionMatrix),At.setValue(L,"viewMatrix",w.matrixWorldInverse);const fn=At.map.cameraPosition;fn!==void 0&&fn.setValue(L,Q.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&At.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Zi=!0,Bl=!0)}if(B.isSkinnedMesh){At.setOptional(L,B,"bindMatrix"),At.setOptional(L,B,"bindMatrixInverse");const fn=B.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),At.setValue(L,"boneTexture",fn.boneTexture,Le))}B.isBatchedMesh&&(At.setOptional(L,B,"batchingTexture"),At.setValue(L,"batchingTexture",B._matricesTexture,Le),At.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",B._colorsTexture,Le));const Hl=G.morphAttributes;if((Hl.position!==void 0||Hl.normal!==void 0||Hl.color!==void 0)&&Ae.update(B,G,jn),(Zi||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,At.setValue(L,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mi.envMap.value=be,mi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(mi.envMapIntensity.value=z.environmentIntensity),Zi&&(At.setValue(L,"toneMappingExposure",g.toneMappingExposure),Pe.needsLights&&F1(mi,Bl),ce&&Y.fog===!0&&se.refreshFogUniforms(mi,ce),se.refreshMaterialUniforms(mi,Y,$,X,p.state.transmissionRenderTarget[w.id]),ka.upload(L,td(Pe),mi,Le)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ka.upload(L,td(Pe),mi,Le),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&At.setValue(L,"center",B.center),At.setValue(L,"modelViewMatrix",B.modelViewMatrix),At.setValue(L,"normalMatrix",B.normalMatrix),At.setValue(L,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const fn=Y.uniformsGroups;for(let Vl=0,k1=fn.length;Vl<k1;Vl++){const id=fn[Vl];je.update(id,jn),je.bind(id,jn)}}return jn}function F1(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function O1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,z,G){Ne.get(w.texture).__webglTexture=z,Ne.get(w.depthTexture).__webglTexture=G;const Y=Ne.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=G===void 0,Y.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const G=Ne.get(w);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,G=0){b=w,N=z,A=G;let Y=!0,B=null,ce=!1,Se=!1;if(w){const be=Ne.get(w);be.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1):be.__webglFramebuffer===void 0?Le.setupRenderTarget(w):be.__hasExternalTextures&&Le.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const Oe=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?B=Oe[z][G]:B=Oe[z],ce=!0):w.samples>0&&Le.useMultisampledRTT(w)===!1?B=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[G]:B=Oe,y.copy(w.viewport),I.copy(w.scissor),H=w.scissorTest}else y.copy(R).multiplyScalar($).floor(),I.copy(C).multiplyScalar($).floor(),H=j;if(Ee.bindFramebuffer(L.FRAMEBUFFER,B)&&Y&&Ee.drawBuffers(w,B),Ee.viewport(y),Ee.scissor(I),Ee.setScissorTest(H),ce){const be=Ne.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,G)}else if(Se){const be=Ne.get(w.texture),Fe=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Fe)}U=-1},this.readRenderTargetPixels=function(w,z,G,Y,B,ce,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){Ee.bindFramebuffer(L.FRAMEBUFFER,Te);try{const be=w.texture,Fe=be.format,Oe=be.type;if(!we.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&G>=0&&G<=w.height-B&&L.readPixels(z,G,Y,B,xe.convert(Fe),xe.convert(Oe),ce)}finally{const be=b!==null?Ne.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,z,G,Y,B,ce,Se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){Ee.bindFramebuffer(L.FRAMEBUFFER,Te);try{const be=w.texture,Fe=be.format,Oe=be.type;if(!we.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-Y&&G>=0&&G<=w.height-B){const Ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(z,G,Y,B,xe.convert(Fe),xe.convert(Oe),0),L.flush();const $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Av(L,$e,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce)}finally{L.deleteBuffer(Ie),L.deleteSync($e)}return ce}}finally{const be=b!==null?Ne.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(w,z=null,G=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-G),B=Math.floor(w.image.width*Y),ce=Math.floor(w.image.height*Y),Se=z!==null?z.x:0,Te=z!==null?z.y:0;Le.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Se,Te,B,ce),Ee.unbindTexture()},this.copyTextureToTexture=function(w,z,G=null,Y=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],z=arguments[2],B=arguments[3]||0,G=null);let ce,Se,Te,be,Fe,Oe;G!==null?(ce=G.max.x-G.min.x,Se=G.max.y-G.min.y,Te=G.min.x,be=G.min.y):(ce=w.image.width,Se=w.image.height,Te=0,be=0),Y!==null?(Fe=Y.x,Oe=Y.y):(Fe=0,Oe=0);const Ie=xe.convert(z.format),$e=xe.convert(z.type);Le.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const ft=L.getParameter(L.UNPACK_ROW_LENGTH),ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Pe=L.getParameter(L.UNPACK_SKIP_IMAGES),Bt=w.isCompressedTexture?w.mipmaps[B]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,be),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Fe,Oe,ce,Se,Ie,$e,Bt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Fe,Oe,Bt.width,Bt.height,Ie,Bt.data):L.texSubImage2D(L.TEXTURE_2D,B,Fe,Oe,Ie,$e,Bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe),B===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,z,G=null,Y=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],z=arguments[3],B=arguments[4]||0);let ce,Se,Te,be,Fe,Oe,Ie,$e,ft;const ht=w.isCompressedTexture?w.mipmaps[B]:w.image;G!==null?(ce=G.max.x-G.min.x,Se=G.max.y-G.min.y,Te=G.max.z-G.min.z,be=G.min.x,Fe=G.min.y,Oe=G.min.z):(ce=ht.width,Se=ht.height,Te=ht.depth,be=0,Fe=0,Oe=0),Y!==null?(Ie=Y.x,$e=Y.y,ft=Y.z):(Ie=0,$e=0,ft=0);const nn=xe.convert(z.format),Ze=xe.convert(z.type);let Pe;if(z.isData3DTexture)Le.setTexture3D(z,0),Pe=L.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Le.setTexture2DArray(z,0),Pe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),nt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),jn=L.getParameter(L.UNPACK_SKIP_PIXELS),Fo=L.getParameter(L.UNPACK_SKIP_ROWS),Zi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Pe,B,Ie,$e,ft,ce,Se,Te,nn,Ze,ht.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,B,Ie,$e,ft,ce,Se,Te,nn,ht.data):L.texSubImage3D(Pe,B,Ie,$e,ft,ce,Se,Te,nn,Ze,ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fo),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zi),B===0&&z.generateMipmaps&&L.generateMipmap(Pe),Ee.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&Le.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Le.setTextureCube(w,0):w.isData3DTexture?Le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Le.setTexture2DArray(w,0):Le.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){N=0,A=0,b=null,Ee.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qu?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ul?"display-p3":"srgb"}}class Ku{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=n}clone(){return new Ku(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class U8 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class R1 extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new yt,Z0=new f1,Ea=new Fl,wa=new q;class F8 extends tn{constructor(e=new pi,n=new R1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Ea.radius+=s,e.ray.intersectsSphere(Ea)===!1)return;Dh.copy(r).invert(),Z0.copy(e.ray).applyMatrix4(Dh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,_=m;x<_;x++){const p=c.getX(x);wa.fromBufferAttribute(h,p),Uh(wa,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,_=m;x<_;x++)wa.fromBufferAttribute(h,x),Uh(wa,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uh(t,e,n,i,r,s,o){const a=Z0.distanceSqToPoint(t);if(a<n){const l=new q;Z0.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class O8 extends Wt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}let k8=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Fh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function Fh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yu);const Oh=[[29.86,8.47,5.45,.839,.689,.595],[8.19,-14.17,.68,.914,.734,.223],[34.2,-2.7,5.78,.961,.804,.288],[13.04,1.12,3.02,.705,.657,.588],[18.9,17.58,5.28,.961,.812,.295],[18.9,17.58,5.28,.961,.812,.295],[20.68,22.29,3.16,.923,.742,.218],[10.74,-7.7,3.34,.945,.77,.241],[22.98,1.12,6.3,.206,.362,.28],[21.96,-2.12,8.79,.943,.771,.243],[20.94,24.64,2.21,.907,.728,.213],[5.89,-16.82,-2.7,.656,.64,.597],[4.36,-6.23,-.91,.774,.7,.629],[10.23,14.94,3.09,.959,.809,.293],[18.39,16.41,5.4,.961,.803,.274],[32.16,16.41,1.56,.652,.612,.566],[35.48,11.11,4.76,.965,.814,.298],[27.06,3.47,5.42,.218,.368,.288],[25.79,6.41,6.23,.727,.604,.541],[3.34,11.41,-2.15,.684,.655,.611],[29.36,.82,4.98,.304,.407,.304],[33.69,18.46,.75,.658,.63,.582],[8.19,11.41,2.84,.962,.814,.306],[30.89,8.76,2.62,.167,.346,.274],[12.02,5.53,3.62,.85,.746,.627],[15.58,-4.47,5.26,.893,.729,.216],[10.74,15.52,3.13,.959,.804,.285],[21.2,3.76,7.9,.831,.738,.639],[30.63,1.41,5.76,.825,.685,.609],[14.31,22.87,2.68,.961,.814,.298],[10.23,.82,4.38,.961,.809,.295],[33.69,16.99,2.88,.893,.715,.207],[29.36,21.99,.8,.654,.632,.588],[23.49,-13.88,1.26,.151,.342,.286],[37.52,-15.93,-.5,.682,.663,.627],[43.12,-5.06,-2.62,.181,.368,.3],[36.75,11.11,2.73,.854,.751,.637],[18.39,20.23,4.22,.959,.8,.271],[6.66,-1.53,2.55,.962,.806,.29],[24,6.12,6.33,.684,.595,.539],[11,19.05,2.4,.957,.797,.277],[21.71,4.35,6.11,.288,.399,.304],[26.04,23.76,.65,.656,.634,.59],[37.77,-10.35,.96,.731,.697,.645],[12.78,12.88,.81,.23,.403,.315],[34.45,-.65,5.52,.946,.781,.26],[34.97,10.82,4.62,.951,.782,.252],[5.89,3.47,1.64,.935,.761,.238],[37.77,2.88,1.82,.715,.667,.611],[44.14,16.41,-4.17,.159,.348,.282],[40.58,-16.52,-2.1,.633,.642,.617],[14.82,-4.17,5.43,.929,.757,.234],[9.47,-12.99,1.57,.926,.745,.221],[13.29,-9.47,.36,.167,.362,.292],[11.25,1.12,4.78,.959,.803,.279],[5.39,-11.52,-.11,.901,.729,.224],[36.24,20.82,-1.21,.235,.407,.321],[20.43,15.82,1.85,.183,.356,.274],[6.91,22.87,.04,.954,.793,.271],[28.59,10.23,6.25,.923,.707,.205],[12.53,7.88,4.87,.957,.787,.259],[8.19,12.29,2.74,.961,.815,.304],[27.57,-5.94,5.04,.723,.638,.56],[26.3,9.06,4.8,.263,.399,.308],[29.86,12,4.85,.868,.7,.611],[21.96,2.88,5.8,.21,.356,.27],[8.96,18.17,2.04,.959,.814,.303],[12.78,-5.06,5,.961,.8,.276],[20.68,21.4,3.33,.915,.734,.215],[20.68,-19.46,-.7,.159,.346,.284],[4.62,-4.17,-.31,.813,.722,.637],[6.41,15.52,1.2,.953,.792,.27],[20.18,25.81,.88,.805,.704,.617],[35.73,-5.35,4.72,.961,.798,.281],[18.65,-2.12,4.34,.208,.403,.331],[24.25,-2.7,5.11,.175,.35,.28],[37.26,-3.88,1.87,.723,.675,.617],[18.65,21.4,3.83,.957,.795,.263],[32.67,9.06,5.82,.946,.778,.262],[12.78,19.35,3.1,.959,.811,.295],[34.97,-7.41,1.79,.674,.624,.56],[33.18,.53,6.21,.946,.782,.263],[10.23,9.94,3.81,.961,.804,.282],[21.2,21.99,3.48,.934,.754,.226],[32.67,10.82,4.04,.795,.724,.627],[28.08,10.23,6.33,.925,.701,.199],[27.57,-2.7,6.53,.833,.673,.584],[11.25,-.06,4.77,.961,.804,.288],[31.65,-8.88,1.84,.204,.375,.3],[6.41,4.94,2.29,.954,.793,.273],[28.08,19.35,.45,.155,.342,.274],[39.04,-2.12,2.21,.841,.753,.654],[34.71,-3.59,5.29,.953,.792,.274],[20.68,2.29,9.54,.967,.82,.306],[36.5,-3.88,4.59,.961,.801,.284],[15.33,4.35,2.62,.179,.368,.296],[19.16,3.47,4.94,.22,.409,.327],[40.06,6.7,1.11,.788,.704,.619],[25.02,24.34,.51,.656,.634,.588],[5.64,19.64,-.58,.914,.735,.224],[9.97,23.76,1.04,.959,.804,.285],[7.43,-.06,3.13,.962,.819,.315],[7.43,10.53,2.6,.961,.814,.303],[35.98,4.06,5.13,.961,.804,.284],[16.61,-10.35,1.14,.155,.342,.28],[39.04,13.47,1.54,.896,.713,.199],[38.53,7.29,2.63,.898,.724,.215],[12.78,-3.59,5.09,.957,.793,.267],[34.45,14.35,4.32,.961,.793,.267],[41.59,21.4,-3.98,.161,.35,.28],[36.24,11.7,4.39,.967,.817,.299],[15.08,17.29,4.46,.964,.82,.307],[9.72,-12.11,1.91,.929,.751,.224],[40.32,-5.06,.16,.69,.663,.623],[33.95,.24,5.74,.942,.776,.256],[11.25,-8,3.49,.945,.768,.238],[21.71,-5.06,4.07,.167,.35,.282],[12.27,16.11,3.52,.959,.8,.276],[39.3,-9.17,.2,.697,.671,.633],[8.7,2.88,3.81,.964,.823,.318],[36.5,-5.06,4.32,.956,.792,.268],[34.97,-9.47,.49,.198,.377,.3],[30.63,10.53,5.55,.909,.718,.219],[16.35,19.64,4.07,.962,.811,.292],[30.63,14.35,2.9,.746,.616,.55],[38.79,6.7,3.4,.954,.784,.254],[9.47,-5.64,3.55,.959,.809,.298],[10.74,-7.41,3.5,.95,.779,.251],[6.66,25.52,-.53,.942,.771,.241],[6.66,3.76,2.54,.957,.801,.282],[34.2,7,6.04,.967,.826,.315],[33.69,14.64,4.65,.965,.803,.276],[30.37,19.35,1.75,.715,.651,.592],[3.86,9.64,-1.7,.686,.661,.605],[14.31,-13.29,-.42,.139,.338,.276],[10.74,10.23,3.9,.961,.797,.265],[38.53,3.76,2.8,.892,.724,.221],[39.3,-1.82,1.38,.758,.699,.629],[12.53,8.76,2.79,.768,.685,.595],[7.94,-17.11,-2.43,.245,.428,.331],[7.68,-15.64,-1.28,.733,.669,.607],[12.27,13.17,1.78,.745,.671,.588],[31.39,4.35,5.08,.799,.667,.59],[19.92,11.11,2.91,.151,.338,.276],[6.91,11.7,2.16,.961,.809,.293],[15.08,23.46,2.71,.961,.814,.299],[20.18,.82,8.93,.951,.797,.281],[12.02,4.06,4.07,.907,.728,.204],[14.31,22.58,2.81,.964,.817,.304],[9.97,12,3.51,.961,.814,.295],[28.84,-10.35,2.18,.19,.368,.296],[22.98,13.76,2.48,.141,.332,.274],[28.84,18.17,.75,.163,.346,.278],[36.5,4.65,4.84,.962,.801,.281],[33.44,-19.17,-1.71,.163,.35,.292],[36.24,13.76,3.91,.965,.808,.285],[34.45,-.94,5.53,.946,.784,.263],[37.26,-3.59,1.9,.725,.675,.615],[9.21,13.76,2.87,.959,.809,.295],[21.45,-2.7,8.79,.959,.792,.273],[34.71,8.76,5.22,.959,.797,.271],[31.14,.24,5.14,.792,.659,.582],[34.45,.24,5.5,.946,.776,.251],[33.69,3.18,6.16,.959,.797,.279],[13.04,20.52,2.91,.959,.812,.296],[15.58,-6.23,1.88,.173,.36,.294],[39.04,10.53,2.98,.957,.789,.259],[12.02,16.11,3.43,.957,.8,.277],[9.97,23.17,1.11,.954,.8,.282],[22.47,1.41,8.63,.843,.738,.619],[19.92,-1.23,6.03,.695,.655,.597],[20.94,24.93,1.97,.896,.717,.21],[11.5,3.76,4.97,.962,.811,.288],[19.41,14.35,4.4,.788,.718,.615],[43.12,-.06,-2.27,.185,.373,.3],[16.35,16.7,4.55,.95,.784,.265],[33.18,-1.53,6.11,.948,.784,.267],[5.64,7.88,1.06,.917,.74,.229],[14.82,-12.7,-.11,.139,.338,.276],[20.94,18.46,4.57,.929,.754,.229],[27.31,9.64,4.81,.69,.604,.55],[30.89,19.64,1.62,.707,.661,.609],[38.28,-11.52,.35,.711,.681,.639],[19.66,-8.29,2.66,.165,.35,.284],[9.97,12.88,3.33,.959,.809,.29],[22.72,-.65,8.81,.893,.732,.221],[6.41,-5.64,1.87,.951,.787,.265],[34.2,2.59,5.86,.954,.79,.271],[7.68,3.18,3.23,.962,.815,.307],[35.48,13.76,4.12,.962,.8,.274],[24.51,20.52,4.49,.957,.784,.249],[42.61,-9.47,-2.81,.177,.373,.304],[35.73,-9.76,.26,.218,.385,.298],[33.18,.24,6.15,.945,.779,.257],[10.23,9.64,3.82,.961,.803,.277],[28.59,9.35,4.99,.75,.636,.57],[11.76,-2.7,4.99,.962,.815,.303],[41.34,-9.47,-1.29,.627,.632,.603],[29.86,-8.88,2.48,.212,.379,.304],[33.69,-4.17,6,.964,.815,.31],[31.65,-.06,4.13,.695,.608,.548],[12.02,20.82,2.42,.959,.806,.285],[16.61,17.29,4.81,.961,.812,.296],[10.23,-9.76,2.52,.928,.75,.227],[6.15,.82,2.12,.951,.787,.267],[21.45,25.52,.84,.766,.687,.609],[6.41,19.93,.31,.948,.784,.257],[37.52,-.65,2.05,.727,.681,.625],[17.62,25.81,2.12,.951,.781,.248],[13.54,17.29,3.73,.959,.801,.276],[7.94,2.59,3.47,.964,.825,.321],[35.98,-1.53,4.89,.954,.792,.273],[32.16,-.35,7.19,.965,.825,.321],[7.68,14.35,2.18,.961,.812,.303],[35.22,-2.12,5.46,.964,.812,.296],[7.43,13.76,2.2,.962,.815,.304],[28.59,10.23,6.25,.923,.707,.205],[13.8,-3.29,5.6,.964,.795,.26],[21.45,-.35,9.44,.962,.801,.281],[13.54,-6.82,4.73,.945,.776,.248],[13.54,-.65,2.35,.249,.411,.321],[8.96,2,3.89,.964,.819,.31],[27.31,20.52,1.87,.686,.655,.603],[34.45,8.76,5.45,.964,.804,.285],[11.25,12.58,3.84,.962,.803,.27],[8.19,13.47,2.58,.961,.815,.304],[39.55,-17.11,-1.73,.643,.651,.621],[35.98,7.88,4.94,.964,.812,.295],[36.24,-9.17,2.28,.795,.73,.654],[24,.24,6.21,.194,.358,.284],[20.43,-4.76,3.74,.155,.342,.282],[11.76,4.06,5.13,.964,.814,.292],[5.89,1.71,1.79,.942,.77,.245],[10.48,4.35,4.49,.961,.812,.295],[18.65,15.82,5.61,.962,.801,.271],[35.73,-2.41,5.11,.962,.803,.287],[29.1,12,4.89,.858,.681,.594],[18.9,24.34,2.81,.951,.782,.251],[4.88,-.35,.35,.848,.751,.654],[33.44,16.7,3.58,.934,.753,.224],[28.59,-12.99,1.07,.145,.342,.284],[20.68,-14.46,.77,.141,.336,.28],[8.7,-10.94,2.04,.95,.775,.249],[5.64,8.47,1.04,.918,.743,.23],[14.82,24.93,2.02,.957,.798,.273],[39.81,-11.82,-.58,.676,.663,.625],[5.13,6.41,.63,.893,.723,.218],[12.53,-16.23,-1.6,.149,.348,.288],[37.52,-15.64,-.17,.713,.683,.641],[39.81,-6.82,.27,.697,.669,.625],[27.83,11.41,4.94,.819,.644,.568],[36.75,8.17,3.29,.888,.721,.218],[30.37,-6.82,4.68,.811,.691,.594],[27.57,10.53,5.65,.858,.675,.586],[23.23,16.99,1.45,.145,.334,.272],[39.3,2.59,3.13,.942,.771,.248],[8.7,-12.7,1.68,.945,.773,.243],[13.54,-1.82,5.44,.943,.782,.26],[16.61,2,3.3,.181,.368,.296],[16.35,20.23,3.9,.961,.811,.29],[38.53,.82,2.79,.89,.721,.223],[8.96,-20.05,-3.34,.186,.375,.302],[3.09,18.17,-3.07,.648,.636,.592],[36.75,3.76,4.03,.92,.75,.235],[20.43,-8.29,2.72,.155,.34,.276],[31.39,-3,6.86,.954,.793,.279],[20.18,-1.82,7.32,.829,.759,.664],[37,-1.82,2.91,.809,.732,.641],[34.97,9.06,4.97,.954,.79,.262],[18.9,11.41,2.83,.175,.364,.294],[7.94,-5.35,2.96,.962,.814,.301],[10.74,-5.35,4.04,.959,.798,.277],[14.31,-7.7,1.19,.181,.368,.298],[37,-10.64,1.7,.803,.73,.646],[8.96,3.76,3.78,.959,.812,.304],[8.19,4.06,3.43,.959,.814,.306],[34.45,-4.76,5.24,.951,.79,.27],[22.21,-.35,9.57,.957,.79,.259],[35.48,-1.82,5.32,.962,.808,.295],[27.06,-4.76,6.52,.874,.699,.597],[11,-9.17,2.98,.931,.753,.226],[6.15,9.64,1.57,.94,.773,.245],[32.92,8.47,6.39,.97,.823,.307],[29.61,20.52,1.4,.676,.648,.595],[11,1.71,4.59,.957,.798,.274],[9.47,23.46,.92,.959,.803,.284],[16.61,5.23,3.05,.173,.358,.294],[21.96,2.88,5.8,.21,.356,.27],[18.14,11.7,2.47,.173,.36,.29],[22.47,1.41,8.63,.843,.738,.619],[34.97,24.05,-1.96,.2,.385,.304],[17.37,23.46,3.03,.959,.8,.271],[33.69,-5.64,3.22,.733,.673,.595],[37,9.06,1.83,.731,.669,.601],[39.55,19.05,-2.21,.212,.393,.31],[13.29,3.47,2.11,.224,.401,.315],[33.44,-3.88,6.08,.961,.811,.303],[33.69,14.94,4.52,.965,.797,.265],[32.16,.53,4.51,.743,.661,.586],[17.37,20.82,3.95,.961,.809,.287],[15.33,22.58,2.98,.961,.811,.29],[13.04,3.18,2.09,.237,.407,.319],[12.78,2.88,2.66,.684,.638,.568],[11,-.06,4.72,.962,.809,.293],[12.02,-2.7,5.03,.962,.811,.29],[25.53,-17.7,-.1,.145,.338,.282],[31.14,3.76,5.77,.862,.708,.615],[9.97,10.23,3.73,.962,.809,.292],[25.28,-4.76,4.56,.198,.368,.29],[5.64,12.29,.86,.929,.761,.235],[13.8,6.12,1.86,.188,.375,.304],[12.78,21.11,2.69,.959,.812,.299],[24.25,24.34,.12,.255,.422,.327],[9.47,-15.64,-1.81,.224,.405,.321],[26.8,-6.23,3.84,.192,.37,.294],[13.54,-1.82,5.44,.943,.782,.26],[33.69,7.29,5.41,.914,.77,.274],[13.29,16.7,3.78,.959,.801,.274],[20.18,17.58,5.21,.956,.787,.259],[6.15,13.17,1.35,.95,.787,.263],[9.72,2.59,4.19,.961,.814,.303],[7.17,-2.41,2.93,.964,.822,.317],[23.75,-.65,6.1,.218,.37,.29],[23.23,12,3.22,.157,.342,.276],[40.06,-14.46,-1.33,.654,.651,.621],[20.94,-3,8.09,.92,.761,.252],[31.65,2.59,5.98,.909,.702,.205],[28.59,.82,4.94,.243,.381,.296],[3.86,6.7,-1.5,.69,.659,.609],[33.18,13.47,2.81,.758,.679,.588],[19.66,9.06,3.31,.143,.334,.276],[26.04,-3.59,5.57,.322,.411,.302],[7.43,24.93,-.18,.957,.798,.276],[13.8,19.35,3.38,.959,.808,.288],[12.02,22.87,1.88,.961,.801,.282],[9.72,23.17,1.12,.959,.806,.287],[12.78,-7.11,4.46,.954,.782,.249],[4.36,-2.12,-.71,.76,.695,.621],[12.78,4.94,4.65,.915,.746,.235],[18.9,20.23,4.38,.961,.804,.284],[7.43,4.35,3.08,.962,.815,.304],[11,4.94,4.66,.962,.808,.285],[12.78,16.7,3.49,.956,.792,.262],[33.18,6.41,6.26,.954,.803,.298],[26.3,7.59,4.97,.237,.379,.292],[3.34,.53,-1.68,.682,.657,.611],[39.55,.24,1.3,.75,.695,.627],[7.68,22.87,.44,.957,.803,.284],[30.12,8.47,4.55,.717,.64,.582],[3.86,.24,-1.34,.697,.663,.613],[13.04,4.06,3.17,.733,.669,.59],[23.49,-7.11,3.78,.185,.364,.294],[20.18,-.65,9.1,.97,.82,.303],[20.68,17.29,3.92,.817,.73,.619],[29.36,21.7,.96,.662,.636,.592],[32.16,-.06,7.3,.97,.831,.332],[6.15,24.05,-.79,.928,.753,.229],[40.83,1.71,.03,.67,.646,.599],[23.75,-12.99,1.55,.153,.342,.282],[38.02,2,1.72,.715,.669,.615],[11,7.88,4.34,.961,.801,.271],[34.71,-.06,5.5,.953,.786,.26],[25.02,5.53,6.16,.279,.399,.3],[34.2,2.88,5.93,.957,.797,.276],[41.85,-12.99,-2.37,.23,.428,.351],[40.83,8.17,-.42,.656,.628,.582],[31.91,-15.35,-.27,.157,.35,.29],[39.04,-10.05,.22,.703,.675,.635],[19.92,15.82,4.91,.901,.732,.223],[22.47,21.7,4.18,.959,.793,.26],[34.71,20.23,-.41,.251,.422,.327],[6.66,24.64,-.51,.942,.773,.245],[34.45,20.52,-.41,.253,.422,.327],[39.04,-1.23,2.69,.903,.737,.229],[37.77,21.7,-2.24,.2,.385,.306],[32.67,10.53,4.73,.882,.726,.224],[32.92,-6.53,1.9,.21,.377,.302],[13.29,24.34,1.82,.957,.8,.274],[33.18,-5.35,2.75,.658,.614,.558],[33.18,12,5.52,.97,.812,.288],[21.71,19.35,4.32,.929,.75,.223],[19.16,-1.82,4.84,.232,.422,.349],[18.14,.24,4.16,.196,.383,.313],[22.72,-8.29,3.18,.165,.35,.286],[8.7,-3,3.56,.964,.817,.309],[18.39,-5.06,2.95,.149,.34,.28],[33.44,12,5.33,.962,.806,.287],[34.71,16.7,1.81,.79,.697,.611],[32.41,-3.29,6.56,.959,.808,.295],[34.45,-5.06,5.15,.95,.787,.263],[25.02,-20.05,-.9,.141,.334,.278],[9.47,7,3.92,.962,.817,.306],[12.53,8.47,4.35,.934,.754,.229],[22.47,-4.17,4.5,.169,.354,.284],[26.04,9.64,4.29,.218,.371,.29],[28.08,-12.11,1.5,.157,.344,.282],[37,-7.11,2.17,.79,.72,.641],[8.45,6.41,3.48,.962,.817,.31],[32.92,-3.29,6.13,.951,.792,.273],[9.47,-3.59,3.8,.961,.812,.301],[14.82,19.93,3.6,.961,.812,.298],[8.96,-10.05,2.31,.946,.778,.252],[24.77,4.06,6.68,.288,.399,.3],[11.25,-5.94,4.24,.961,.801,.284],[36.24,10.53,4.57,.967,.817,.306],[26.8,-9.47,2.69,.173,.358,.288],[18.65,7.88,3.55,.173,.364,.29],[9.21,25.23,.32,.956,.797,.271],[39.3,-10.05,.02,.69,.669,.629],[17.37,20.52,3.99,.961,.806,.279],[33.69,10.53,5.41,.961,.798,.277],[3.6,-14.17,-2.84,.672,.651,.611],[7.68,-14.17,.7,.925,.751,.23],[31.91,2,5.32,.854,.697,.599],[29.86,.24,5.74,.795,.657,.588],[20.43,5.82,6.22,.719,.657,.592],[12.53,11.41,.68,.194,.381,.308],[39.04,10.23,3.04,.959,.792,.26],[35.73,-.94,5.05,.953,.792,.273],[37.52,-3.29,1.88,.725,.681,.629],[6.15,-4.76,1.74,.948,.779,.254],[34.97,-4.47,4.98,.951,.784,.262],[17.11,20.52,4.02,.961,.814,.293],[20.43,4.35,8.92,.951,.797,.281],[18.39,22.29,3.54,.957,.795,.267],[10.74,2.59,4.56,.961,.804,.285],[30.63,6.12,6.82,.954,.745,.23],[36.24,-8.88,2,.756,.706,.645],[33.95,9.35,4.36,.862,.724,.254],[17.62,19.35,4.34,.959,.801,.274],[17.62,18.17,4.66,.957,.8,.274],[36.75,-3.59,3.99,.932,.765,.248],[12.53,.53,5.35,.961,.801,.276],[42.36,20.23,-4.19,.145,.338,.28],[12.02,20.82,2.42,.959,.806,.285],[32.67,-1.82,6.31,.948,.786,.267],[13.04,21.4,2.69,.959,.814,.299],[30.12,-5.64,5.79,.931,.698,.179],[13.54,-2.12,5.75,.967,.804,.274],[24.77,21.11,4.08,.942,.768,.241],[15.33,20.82,3.55,.961,.817,.304],[9.47,-19.46,-3.22,.167,.362,.294],[29.1,8.47,4.32,.316,.403,.296],[7.94,8.47,3.02,.959,.812,.299],[27.06,-5.35,6.84,.932,.699,.187],[42.11,-13.58,-2.7,.222,.417,.343],[41.34,-19.17,-2.7,.645,.663,.645],[4.62,-3.59,-.25,.813,.724,.639],[34.97,8.47,5.1,.956,.793,.267],[8.7,20.82,1.37,.959,.812,.299],[26.55,-4.17,5.96,.78,.632,.564],[7.94,2.29,3.43,.965,.82,.312],[29.86,6.7,4.99,.782,.616,.546],[7.17,-10.35,1.89,.961,.806,.285],[20.43,19.64,4.24,.935,.762,.237],[10.74,4.35,4.58,.962,.811,.293],[12.78,25.23,1.36,.956,.793,.267],[31.91,5.23,6.18,.943,.734,.218],[12.53,22.29,2.24,.959,.808,.288],[23.75,19.35,4.32,.91,.748,.23],[19.41,19.35,4.77,.962,.806,.284],[20.43,-.35,9.22,.965,.819,.306],[12.53,-3.29,4.91,.954,.787,.256],[32.92,1.71,6.62,.959,.801,.288],[5.64,-15.64,-1.47,.803,.716,.633],[31.14,8.47,4.29,.764,.638,.568],[10.48,11.7,3.63,.959,.801,.277],[35.22,-7.7,2.86,.801,.72,.625],[3.6,14.35,-2.42,.68,.653,.605],[29.86,-15.64,-.03,.143,.336,.284],[17.62,25.23,2.33,.951,.784,.251],[5.39,-16.82,-2.87,.658,.642,.599],[22.21,23.17,3.52,.954,.781,.249],[25.79,-9.17,3.2,.208,.377,.3],[37.52,3.47,1.93,.717,.667,.609],[6.41,-20.64,-1.12,.906,.726,.219],[17.37,21.4,3.79,.962,.811,.292],[30.63,2.59,6.49,.914,.699,.216],[37.52,-16.52,-1.79,.21,.393,.317],[20.43,3.47,8.76,.942,.776,.257],[19.92,.24,7.65,.876,.721,.223],[12.78,-1.82,5.37,.962,.803,.279],[6.66,5.53,2.48,.957,.801,.284],[10.74,.24,4.56,.961,.806,.29],[35.48,1.71,5.23,.954,.79,.27],[39.3,-9.76,.09,.694,.671,.631],[8.7,22.87,.75,.954,.8,.285],[29.86,12,4.85,.868,.7,.611],[6.41,-14.17,.44,.942,.768,.241],[11.76,-9.17,2.04,.778,.712,.621],[10.74,5.53,4.45,.961,.806,.281],[21.45,.53,9.6,.962,.803,.282],[3.6,12,-2.14,.678,.653,.605],[17.37,16.11,4.99,.948,.786,.265],[7.94,5.23,3.35,.964,.82,.312],[4.62,9.06,-.38,.811,.724,.637],[33.44,1.71,6.25,.954,.793,.274],[8.96,21.11,1.38,.957,.811,.296],[33.18,-17.4,-.66,.22,.389,.31],[5.39,-19.46,-2.76,.692,.653,.605],[22.21,-1.82,8.87,.942,.765,.238],[34.71,3.18,5.89,.965,.812,.299],[28.59,10.82,5.75,.903,.714,.601],[30.12,-5.35,5.71,.911,.726,.597],[8.7,-1.53,3.7,.964,.822,.317],[19.92,17.29,5.54,.964,.809,.292],[9.21,-10.64,2.21,.942,.768,.243],[33.44,-5.64,1.94,.228,.385,.294],[40.06,-13.88,-1.17,.66,.657,.623],[11,-2.7,4.59,.962,.812,.296],[33.44,.82,6.1,.945,.784,.265],[36.75,7,3.6,.903,.734,.226],[8.19,-12.41,1.6,.948,.778,.251],[10.48,-7.7,3.33,.948,.778,.251],[6.91,22.87,.04,.954,.793,.271],[4.36,24.05,-2.74,.697,.655,.595],[35.48,8.47,5.06,.962,.808,.292],[12.27,-5.35,4.72,.959,.798,.273],[29.61,-19.46,-.97,.165,.352,.284],[21.2,17.88,4.5,.909,.734,.223],[34.97,1.41,5.68,.964,.804,.287],[18.14,8.17,3.08,.157,.344,.278],[5.89,-16.82,-2.7,.656,.64,.597],[13.8,-6.53,4.91,.946,.778,.249],[35.48,-6.23,4.66,.957,.795,.271],[32.16,5.23,6.08,.945,.737,.223],[23.75,7,5.84,.294,.403,.3],[26.8,12.29,4.25,.723,.604,.546],[12.78,22.29,2.34,.957,.809,.292],[4.11,-7.7,-1.57,.721,.673,.617],[27.06,-5.35,6.84,.932,.699,.187],[35.73,-21.81,-2.87,.185,.366,.296],[22.98,-21.23,-.96,.177,.36,.292],[34.71,2.59,5.85,.965,.808,.293],[31.14,-3.88,6.98,.965,.801,.284],[5.39,-13.58,-.41,.904,.731,.224],[16.86,-6.82,2.03,.149,.342,.28],[31.14,13.47,3.63,.823,.663,.582],[30.89,5.82,5.52,.86,.687,.586],[14.31,18.76,3.73,.961,.811,.295],[24.25,-14.46,.99,.141,.336,.28],[5.13,.82,.76,.892,.724,.224],[33.95,14.35,4.41,.956,.789,.259],[33.44,-.94,6.15,.954,.793,.279],[12.27,.53,5.32,.962,.808,.288],[31.39,9.06,4.1,.735,.651,.58],[31.65,19.64,1.25,.682,.65,.597],[32.92,-.94,6.25,.946,.784,.267],[6.91,3.47,2.81,.961,.812,.299],[4.88,-4.17,.02,.837,.74,.641],[6.41,3.47,2.31,.953,.792,.27],[35.73,-6.82,4.46,.957,.795,.274],[21.45,2.59,9.63,.965,.8,.273],[20.18,2.29,7.98,.881,.729,.232],[12.02,-8.29,3.95,.956,.782,.249],[6.15,7.29,1.74,.942,.771,.246],[6.15,18.46,.27,.937,.768,.241],[19.66,24.05,2.71,.934,.761,.23],[11.5,-3.59,4.72,.962,.809,.296],[21.71,.53,9.57,.959,.793,.268],[6.41,-2.12,2.3,.959,.798,.279],[12.53,14.94,3.79,.961,.793,.262],[16.86,18.46,4.72,.964,.825,.315],[8.7,24.93,.29,.959,.801,.274],[33.18,9.35,5.23,.912,.759,.267],[20.68,1.41,9.46,.964,.815,.296],[33.44,7.88,5.87,.961,.795,.27],[8.45,6.12,3.53,.964,.819,.31],[29.36,-10.05,2.23,.2,.375,.3],[23.23,9.35,4.99,.286,.399,.298],[20.94,3.76,9.46,.97,.811,.29],[11.25,-4.47,4.44,.961,.804,.287],[11.25,7.59,4.46,.961,.798,.268],[30.37,.53,5.75,.817,.677,.601],[25.53,-7.41,3.61,.185,.364,.294],[37.52,-13.88,.11,.703,.677,.629],[8.45,17.88,1.92,.959,.817,.307],[11.5,-11.82,-.75,.169,.366,.296],[9.21,4.35,3.97,.964,.819,.309],[11,12.88,3.55,.954,.793,.267],[30.37,5.53,5.97,.894,.697,.594],[34.71,-18.29,-1.91,.153,.344,.286],[10.74,4.35,4.58,.962,.811,.293],[39.55,10.23,2.93,.961,.801,.273],[33.95,.24,5.74,.942,.776,.256],[28.84,13.76,4.51,.866,.683,.592],[26.04,21.4,1.66,.682,.653,.599],[13.04,18.76,3.3,.961,.808,.29],[9.21,18.76,1.95,.956,.809,.298],[33.18,17.88,1.67,.739,.671,.605],[29.36,18.46,.99,.21,.379,.298],[23.23,-.06,6.12,.202,.366,.284],[18.65,16.41,5.51,.962,.806,.281],[5.39,9.35,.68,.907,.731,.224],[38.53,-9.47,.65,.713,.685,.639],[12.02,4.94,1.89,.656,.608,.548],[16.35,-.94,3.05,.181,.368,.296],[8.96,16.7,2.3,.957,.814,.303],[7.94,15.82,2.07,.961,.814,.304],[10.74,23.17,1.46,.961,.806,.288],[19.92,16.99,5.61,.962,.808,.285],[9.72,12,3.33,.959,.808,.288],[33.18,16.7,3.89,.951,.768,.237],[41.34,20.82,-3.74,.163,.352,.284],[38.28,19.35,-1.77,.216,.393,.311],[34.71,5.53,5.68,.962,.806,.288],[11,15.23,3.26,.959,.803,.284],[19.66,8.76,3.46,.151,.34,.278],[15.58,4.06,2.76,.181,.368,.298],[31.65,-1.53,7.07,.957,.804,.288],[28.59,23.46,.39,.646,.626,.586],[38.79,-4.76,1.17,.727,.685,.631],[11.76,.24,5.09,.962,.811,.293],[27.06,21.11,1.62,.678,.65,.597],[35.22,-8,1.23,.271,.419,.313],[36.75,-11.23,1.76,.811,.734,.652],[9.47,21.99,1.31,.959,.806,.29],[40.06,12.29,1.86,.937,.757,.221],[32.92,-5.06,3.87,.762,.691,.605],[24.51,-3.29,5.56,.273,.389,.296],[37.26,16.41,-.34,.265,.426,.331],[31.65,15.23,.77,.149,.338,.276],[7.17,8.47,2.52,.957,.801,.282],[19.92,4.65,5.57,.625,.618,.582],[12.78,.53,5.49,.967,.801,.268],[38.53,8.76,2.54,.901,.728,.213],[41.34,5.53,-.63,.637,.62,.578],[20.68,-3.29,5.56,.648,.634,.601],[14.05,23.46,2.41,.961,.811,.292],[18.9,13.17,3.18,.257,.43,.341],[39.3,-2.12,1.27,.746,.693,.627],[22.47,-9.47,2.75,.163,.348,.284],[9.97,3.76,4.26,.961,.812,.299],[20.18,3.18,6.69,.737,.677,.601],[33.44,19.93,.23,.635,.614,.572],[12.27,5.82,5.2,.962,.809,.285],[20.94,3.18,9.38,.964,.801,.279],[38.28,13.76,.49,.723,.659,.59],[36.5,12.58,3.62,.95,.776,.248],[38.53,8.47,2.54,.898,.726,.215],[18.14,24.64,2.46,.946,.773,.241],[6.41,10.23,1.72,.945,.781,.26],[6.15,14.94,1.04,.946,.782,.26],[34.97,10.23,4.76,.953,.787,.257],[29.86,19.35,1.54,.674,.628,.578],[13.54,-9.17,.51,.167,.362,.292],[33.44,1.41,6.2,.951,.79,.271],[22.72,-1.23,7.05,.713,.655,.578],[33.69,-4.47,5.94,.962,.815,.307],[34.45,4.35,6.01,.965,.817,.307],[23.75,20.82,4.61,.964,.801,.268],[37.77,3.18,1.81,.715,.667,.611],[7.17,1.41,3.01,.964,.817,.307],[10.48,-3.29,4.16,.956,.801,.282],[24.25,6.41,5.99,.29,.399,.296],[6.66,18.76,.77,.954,.795,.273],[40.06,12,2.01,.942,.765,.227],[11,8.76,4.17,.957,.797,.265],[6.66,-.35,2.62,.961,.808,.292],[20.43,2,9.32,.97,.812,.292],[22.47,9.06,4.06,.151,.338,.278],[8.45,-19.46,-.51,.904,.721,.21],[42.36,1.12,-1.46,.226,.409,.325],[7.43,13.76,2.2,.962,.815,.304],[8.19,19.93,1.32,.957,.809,.296],[5.39,17.58,-.46,.898,.728,.219],[20.68,13.47,2.36,.151,.338,.274],[13.04,17.29,3.49,.956,.795,.27],[12.27,16.11,3.52,.959,.8,.276],[7.94,11.7,2.62,.959,.808,.295],[13.54,16.7,3.89,.959,.803,.281],[38.28,-9.47,.82,.723,.691,.641],[20.43,21.11,3.61,.928,.75,.226],[25.28,3.47,6.51,.261,.391,.296],[38.53,7.29,2.63,.898,.724,.215],[41.85,-18.58,-2.86,.635,.655,.639],[23.75,19.64,5.07,.97,.806,.27],[22.21,7.59,4.54,.157,.346,.278],[39.04,-16.52,-1.23,.67,.663,.633],[8.19,-7.7,2.59,.957,.797,.279],[5.64,-5.64,1.08,.926,.753,.238],[9.72,12.88,3.27,.961,.812,.298],[35.22,16.99,.57,.658,.63,.578],[20.94,-.94,9.15,.962,.803,.282],[8.19,-12.11,1.75,.953,.784,.256],[39.04,2.59,3.7,.964,.803,.282],[21.96,2,9.52,.946,.771,.246],[24.25,12,3.14,.147,.336,.276],[32.16,-3.88,6.87,.968,.83,.329],[14.05,16.11,3.88,.951,.778,.246],[12.78,10.23,.93,.19,.377,.304],[33.44,6.7,6.13,.95,.806,.299],[33.18,4.06,6.09,.939,.776,.263],[37.77,13.76,.14,.646,.622,.576],[7.68,19.35,1.27,.957,.811,.296],[22.21,.82,9.79,.957,.789,.262],[32.92,11.7,4.5,.887,.732,.229],[22.21,1.71,8.62,.837,.751,.639],[12.78,17.58,3.24,.954,.789,.26],[4.11,4.65,-1.1,.717,.673,.615],[20.94,3.18,9.38,.964,.801,.279],[15.84,22.58,3.08,.962,.809,.287],[38.53,9.94,2.53,.912,.735,.219],[8.45,18.46,1.76,.959,.812,.301],[20.43,21.99,3.21,.921,.742,.218],[8.45,-20.05,-.29,.931,.745,.224],[7.68,10.23,2.65,.957,.808,.295],[9.97,-5.35,3.81,.961,.808,.292],[33.44,13.17,4.97,.967,.795,.263],[33.95,-1.23,6.01,.961,.801,.285],[33.18,-3.59,6.12,.957,.801,.29],[40.32,1.41,.53,.697,.665,.611],[42.87,5.23,-2.31,.175,.364,.29],[6.66,7,2.28,.953,.792,.268],[27.31,9.35,4.85,.654,.612,.568],[8.96,-12.11,1.89,.945,.771,.243],[34.2,-5.94,4.66,.92,.754,.243],[23.23,-15.93,.47,.139,.334,.278],[19.92,19.05,4.8,.956,.797,.273],[31.14,-2.7,7.18,.961,.806,.293],[41.09,-12.7,-1.65,.627,.636,.603],[16.86,16.41,4.32,.91,.756,.249],[9.21,21.7,1.31,.959,.809,.296],[32.16,-3,7.02,.968,.833,.331],[34.71,2,5.78,.964,.804,.281],[12.78,-6.53,4.63,.956,.789,.257],[36.75,18.46,-.7,.251,.42,.325],[25.53,-4.76,5.05,.277,.397,.302],[18.14,15.52,4.41,.89,.718,.21],[30.89,17.29,.71,.179,.36,.284],[33.69,17.29,2.22,.813,.712,.621],[33.44,-5.35,4.53,.871,.718,.229],[6.91,-.94,2.81,.964,.815,.306],[20.43,3.47,8.76,.942,.776,.257],[33.44,9.06,5.78,.964,.8,.27],[16.86,-8.29,1.63,.141,.336,.278],[33.95,7.88,6,.961,.823,.32],[42.36,-5.35,-1.82,.22,.409,.329],[16.09,6.12,2.79,.177,.366,.294],[37,8.47,1.95,.737,.675,.605],[43.64,5.53,-2.59,.185,.371,.294],[26.55,11.11,4.03,.273,.385,.292],[20.94,-3.29,6.01,.697,.659,.607],[12.02,4.06,4.07,.907,.728,.204],[13.29,14.05,1.02,.253,.42,.331],[24.25,-9.76,2.79,.167,.356,.284],[33.18,8.17,5.97,.959,.797,.27],[28.84,2.88,4.67,.216,.371,.296],[7.68,-10.35,1.89,.954,.79,.27],[35.98,.53,5.08,.957,.8,.281],[17.11,19.35,4.37,.961,.812,.293],[13.29,-12.99,-.59,.151,.344,.286],[11.25,.24,4.78,.961,.804,.287],[32.92,9.94,6.41,.968,.842,.367],[31.91,18.46,2.31,.792,.702,.627],[14.82,-4.76,5.58,.948,.775,.237],[21.2,.53,9.44,.961,.8,.281],[23.23,3.18,6.59,.237,.379,.292],[8.7,-9.47,2.32,.948,.779,.257],[32.41,-4.47,6.44,.967,.809,.296],[32.16,17.88,.91,.271,.409,.306],[34.97,10.82,4.62,.951,.782,.252],[35.48,13.47,4.2,.962,.801,.277],[4.62,-3.29,-.25,.811,.722,.637],[21.2,23.76,2.95,.935,.759,.23],[14.31,2,2.27,.186,.373,.302],[44.66,-3.59,-3.16,.186,.373,.302],[12.27,-8.29,4.08,.954,.784,.256],[31.14,9.64,4.04,.76,.636,.568],[28.08,-5.64,6.23,.899,.72,.595],[18.39,19.64,4.16,.95,.781,.249],[40.32,-6.53,-.16,.666,.653,.613],[5.89,18.76,-.1,.925,.754,.23],[14.82,7.59,2.05,.177,.366,.296],[32.16,-4.76,2.88,.255,.405,.308],[19.66,17.88,5.31,.962,.811,.293],[36.24,14.35,3.62,.959,.792,.265],[34.97,-2.41,5.25,.953,.789,.265],[28.84,-2.41,6.24,.839,.689,.595],[25.79,-.06,5.56,.171,.348,.28],[6.66,-1.82,2.56,.962,.808,.293],[22.21,2.88,5.82,.183,.352,.278],[12.27,13.17,1.78,.745,.671,.588],[5.64,9.35,1.01,.921,.746,.232],[17.62,16.41,5.26,.962,.808,.284],[31.39,-10.35,1.54,.2,.373,.302],[32.92,1.71,6.62,.959,.801,.288],[34.2,7.59,5.88,.967,.819,.306],[38.79,5.53,3.5,.956,.786,.254],[42.61,-13.58,-3.42,.179,.373,.308],[8.19,17.58,1.83,.959,.812,.301],[4.36,1.41,-.54,.772,.699,.625],[27.57,4.06,5.99,.711,.599,.545],[26.04,.82,5.84,.204,.364,.286],[5.39,24.64,-1.45,.856,.751,.639],[13.29,-8,1.04,.206,.395,.319],[4.62,-12.41,-1.51,.786,.702,.627],[34.71,2.29,5.83,.964,.806,.288],[18.39,-1.82,4.16,.198,.393,.321],[8.7,-11.52,1.96,.948,.776,.249],[20.18,-2.12,6.21,.721,.675,.609],[40.83,17.88,-2.7,.188,.375,.298],[41.85,2,-.79,.631,.622,.584],[7.43,.82,3.18,.964,.822,.315],[29.36,6.7,4.03,.226,.373,.292],[13.29,-3,5.47,.961,.801,.274],[35.48,-12.41,-.71,.153,.346,.288],[6.15,-11.82,.78,.946,.771,.249],[31.65,5.82,6.19,.943,.731,.215],[29.61,19.64,.56,.208,.377,.296],[9.21,-19.17,-3.17,.173,.368,.298],[37.26,-6.23,1.57,.719,.673,.613],[21.45,19.05,4.27,.923,.742,.216],[36.5,-11.23,2.26,.879,.718,.226],[3.6,-8,-2.42,.645,.634,.595],[38.79,3.76,3.62,.954,.79,.267],[23.49,1.41,6.65,.212,.37,.288],[28.59,7.59,4.81,.662,.602,.55],[34.2,22.58,-1.09,.232,.405,.321],[33.69,9.94,5.53,.959,.801,.281],[14.82,-5.06,5.65,.959,.782,.241],[15.08,25.81,1.89,.961,.803,.277],[28.84,9.94,5.87,.886,.718,.613],[24.25,7.59,6.94,.768,.691,.617],[38.79,3.18,3.65,.956,.79,.267],[23.49,-11.23,2.46,.188,.368,.298],[8.45,9.35,3.21,.962,.815,.306],[10.48,9.35,3.99,.961,.804,.277],[20.18,-3,5.24,.619,.62,.592],[35.48,5.82,5.3,.964,.806,.287],[9.21,14.35,2.84,.961,.814,.303],[36.24,5.82,4.77,.957,.793,.27],[8.7,18.17,1.99,.961,.819,.309],[28.59,16.7,1.56,.194,.37,.294],[34.45,4.35,6.01,.965,.817,.307],[39.3,7,3.19,.957,.787,.257],[8.7,-10.94,2.04,.95,.775,.249],[8.45,8.76,3.2,.957,.811,.301],[21.2,1.71,9.55,.962,.803,.279],[31.14,.24,5.14,.792,.659,.582],[22.98,25.23,.12,.648,.628,.578],[37.77,-.65,1.91,.723,.679,.623],[41.59,16.7,-2.9,.181,.368,.296],[28.08,-15.35,.38,.141,.336,.284],[15.33,17.88,4.32,.961,.815,.298],[22.72,7,5.43,.247,.383,.292],[17.37,20.82,3.95,.961,.809,.287],[32.16,-21.23,-2.19,.141,.336,.284],[10.48,4.06,4.45,.961,.809,.29],[39.3,1.41,2.78,.915,.746,.232],[12.27,21.7,2.31,.959,.808,.288],[30.89,-3.29,6.54,.939,.753,.241],[34.2,15.23,4.03,.954,.781,.249],[7.94,-9.76,2.09,.951,.79,.267],[5.39,15.23,0,.906,.734,.224],[34.71,16.11,3.02,.917,.734,.212],[13.29,23.46,2.08,.957,.801,.279],[5.64,4.94,1.36,.925,.751,.234],[33.95,2.29,5.94,.95,.787,.271],[39.81,21.99,-3.26,.179,.366,.296],[15.58,-4.17,5.92,.95,.767,.237],[39.3,5.82,3.33,.959,.792,.263],[24.51,3.47,6.87,.279,.397,.296],[27.06,6.12,4.96,.212,.37,.288],[33.95,7.59,6.18,.97,.834,.331],[12.02,2.29,5.29,.964,.814,.292],[16.09,17.58,4.66,.962,.819,.306],[18.9,16.41,5.59,.962,.809,.288],[15.33,-7.41,1.5,.163,.358,.29],[22.98,-13.58,1.36,.153,.344,.282],[25.28,8.47,4.96,.245,.385,.298],[5.13,12.29,.19,.903,.726,.216],[36.75,-.06,4.23,.932,.764,.246],[33.18,7.29,6.25,.967,.809,.284],[24.77,24.34,.42,.648,.626,.58],[19.41,17.58,5.5,.964,.822,.31],[12.02,-2.41,5.06,.962,.811,.29],[20.68,-.65,9.2,.965,.811,.293],[10.48,24.05,1.13,.957,.806,.285],[33.44,14.64,3.87,.904,.743,.237],[8.96,14.05,2.74,.957,.811,.298],[33.95,-.94,6,.959,.8,.284],[16.35,24.64,1.86,.931,.754,.224],[18.65,19.93,4.45,.961,.806,.284],[43.64,-4.76,-2.78,.183,.371,.302],[6.41,16.41,.94,.946,.784,.26],[34.2,-.35,5.59,.945,.776,.256],[11.25,13.76,3.5,.956,.792,.26],[25.02,20.23,3.99,.918,.742,.224],[3.86,13.47,-2.15,.686,.655,.605],[34.97,-2.41,5.25,.953,.789,.265],[13.29,-7.11,4.56,.942,.775,.249],[32.92,-5.94,2.01,.21,.377,.3],[13.29,7.59,1.58,.2,.383,.306],[19.92,-.94,6.54,.745,.693,.619],[4.36,15.23,-1.64,.758,.691,.621],[11.76,11.41,1.02,.275,.428,.333],[36.24,-9.47,2.77,.884,.723,.227],[22.21,25.23,.58,.713,.659,.597],[18.14,20.82,3.92,.956,.795,.265],[18.39,15.23,4.33,.85,.746,.631],[6.15,24.05,-.79,.928,.753,.229],[17.11,16.41,5.19,.967,.811,.287],[31.91,1.71,5.22,.843,.689,.595],[11.25,6.7,4.59,.961,.803,.274],[40.32,-9.17,-.45,.67,.659,.619],[7.17,-5.64,2.55,.962,.811,.299],[29.86,9.64,4.16,.721,.608,.545],[21.45,12.88,2.72,.155,.342,.274],[10.23,8.17,4.08,.961,.811,.29],[21.45,1.41,9.68,.964,.804,.281],[32.92,12.58,2.98,.75,.667,.58],[35.73,.53,5.11,.954,.792,.271],[34.97,7.29,5.26,.956,.795,.27],[21.71,2.59,9.38,.945,.771,.249],[41.09,6.41,-.41,.654,.628,.584],[28.08,11.41,5.11,.845,.659,.58],[10.48,-13.88,-1.51,.177,.368,.3],[8.7,-3.88,3.47,.964,.815,.307],[3.6,18.17,-2.98,.66,.642,.597],[34.97,-7.7,.7,.198,.366,.28],[30.89,4.65,5.22,.79,.663,.592],[11.5,-9.47,2.38,.833,.75,.643],[42.36,-4.76,-1.72,.222,.413,.329],[32.92,6.7,4.76,.862,.72,.599],[7.94,24.34,.19,.959,.803,.282],[34.71,12.58,4.48,.954,.789,.257],[20.18,2.88,7.18,.786,.714,.629],[34.2,.24,5.52,.94,.77,.246],[9.72,12.88,3.27,.961,.812,.298],[32.67,18.46,1.41,.697,.657,.601],[14.05,-6.23,5.04,.946,.776,.245],[5.13,-19.17,-3.05,.648,.636,.595],[31.65,3.47,4.4,.737,.618,.556],[5.64,16.7,.07,.917,.748,.23],[11.5,12.29,3.1,.906,.739,.226],[7.94,24.64,.1,.957,.803,.279],[5.89,-10.94,.64,.932,.761,.241],[20.18,19.35,4.63,.951,.786,.262],[3.6,1.71,-1.57,.682,.655,.607],[29.61,12.29,4.68,.846,.689,.601],[31.14,2.59,6.15,.888,.738,.635],[30.89,-.35,4.11,.288,.405,.31],[30.37,-5.94,5.87,.945,.715,.191],[11.5,15.23,3.3,.954,.79,.265],[10.23,25.23,.64,.956,.797,.273],[18.65,18.46,5.01,.964,.817,.299],[30.12,-9.76,2.12,.204,.377,.302],[36.24,-8,2.41,.792,.724,.645],[9.47,1.12,4.09,.961,.815,.304],[21.96,1.12,9.73,.957,.792,.265],[6.41,-.94,2.38,.957,.801,.282],[19.41,16.7,5.74,.964,.82,.306],[6.41,-10.94,1.22,.951,.786,.263],[38.79,7,3.35,.954,.782,.254],[30.89,8.17,4.18,.741,.614,.552],[39.04,3.76,3.73,.965,.806,.288],[16.86,22.87,2.97,.956,.789,.257],[10.48,16.99,2.7,.957,.801,.282],[21.2,-3,8.1,.915,.757,.252],[42.11,21.11,-4.22,.149,.342,.278],[32.67,1.12,6.45,.942,.782,.271],[13.29,13.47,.66,.198,.387,.31],[19.41,7.88,4.33,.218,.405,.323],[32.92,11.7,4.5,.887,.732,.229],[14.82,9.06,1.79,.173,.362,.292],[25.53,-2.41,5.25,.208,.364,.284],[36.75,11.41,2.69,.854,.751,.637],[39.04,2.29,3.66,.961,.8,.277],[23.49,4.94,6.38,.281,.395,.296],[38.53,-.65,2.58,.85,.757,.652],[18.14,-12.7,.83,.141,.336,.278],[35.98,-2.7,4.99,.962,.806,.292],[27.06,14.94,2.16,.173,.354,.282],[8.19,23.76,.37,.956,.8,.281],[36.24,12.88,4.1,.965,.809,.29],[38.28,1.41,1.84,.743,.687,.621],[14.05,22.58,2.67,.961,.812,.293],[27.83,4.35,5.89,.713,.602,.548],[7.43,1.12,3.2,.965,.823,.315],[31.14,9.94,3.56,.684,.616,.564],[36.24,-3.88,4.85,.962,.814,.298],[28.84,19.93,.26,.167,.352,.28],[23.23,21.4,4.41,.962,.801,.271],[21.2,-2.7,8.88,.967,.804,.279],[23.75,4.35,6.69,.29,.401,.298],[22.47,-1.53,9.02,.932,.767,.248],[35.98,6.41,5.04,.964,.808,.288],[27.57,13.47,3.35,.298,.405,.302],[13.29,-5.64,4.98,.956,.789,.257],[38.79,-4.76,1.17,.727,.685,.631],[9.47,-1.82,4.02,.964,.819,.309],[11.25,12.29,3.84,.962,.798,.267],[21.2,1.41,9.56,.964,.803,.282],[40.32,9.06,.49,.754,.681,.603],[18.39,20.52,4.15,.961,.801,.276],[37.77,-10.94,.87,.733,.697,.645],[18.39,18.46,4.86,.962,.808,.285],[5.39,-14.17,-.61,.896,.724,.221],[7.94,5.82,3.28,.962,.819,.307],[5.39,16.11,-.18,.901,.732,.223],[20.68,2.88,9.42,.965,.812,.295],[27.57,-8,3.13,.188,.366,.294],[34.97,-2.7,5.2,.951,.787,.262],[33.69,-5.06,5.78,.962,.808,.301],[20.43,-.65,9.13,.965,.815,.299],[37,-1.53,2.9,.809,.73,.643],[13.54,-6.82,4.73,.945,.776,.248],[41.34,13.47,-1.87,.226,.401,.311],[36.5,4.65,4.84,.962,.801,.281],[29.1,14.64,2.92,.701,.597,.541],[39.81,-19.46,-2.57,.617,.632,.611],[37.77,-13.29,.26,.713,.685,.641],[29.86,23.46,.14,.637,.624,.582],[11.76,-2.12,5.03,.962,.815,.303],[4.11,-11.82,-2.04,.727,.677,.621],[15.08,16.41,2.97,.833,.742,.631],[7.43,2,3.18,.964,.822,.314],[11.76,-10.94,-.45,.175,.368,.3],[23.23,23.76,2.45,.892,.715,.207],[20.68,-1.82,9,.965,.814,.296],[37.77,11.41,.72,.672,.636,.586],[36.24,-11.52,1.29,.739,.687,.631],[37.26,-16.82,-2.17,.171,.362,.29],[39.81,-13.29,-.94,.666,.657,.623],[12.78,4.94,4.65,.915,.746,.235],[20.68,-7.41,3.06,.157,.342,.278],[30.63,-6.53,5.58,.929,.713,.202],[33.18,10.53,5.59,.959,.797,.268],[27.83,-5.94,6.15,.87,.724,.605],[15.58,23.46,2.77,.961,.809,.288],[5.13,1.12,.79,.895,.726,.224],[42.36,14.35,-3.03,.165,.354,.286],[37,19.35,-1.13,.235,.409,.317],[40.32,21.4,-3.36,.175,.362,.29],[14.31,-1.82,2.5,.228,.407,.317],[15.08,9.64,1.8,.173,.362,.292],[7.43,-2.7,3.01,.964,.819,.312],[32.67,21.99,-.17,.265,.434,.339],[11,10.53,4,.962,.798,.267],[9.21,2.88,3.99,.964,.817,.306],[39.81,-4.47,.59,.705,.675,.625],[32.41,10.53,1.89,.2,.358,.27],[4.11,.24,-.96,.731,.681,.621],[12.02,-8.88,2.03,.758,.7,.613],[3.34,.53,-1.68,.682,.657,.611],[19.41,14.05,3.26,.668,.62,.55],[19.16,24.34,2.83,.95,.782,.252],[5.13,-8,.2,.895,.726,.226],[25.79,24.64,.28,.645,.628,.588],[42.11,-8,-1.86,.228,.419,.337],[4.36,3.18,-.69,.756,.689,.621],[7.17,-12.99,1.34,.956,.797,.276],[35.98,-4.76,4.82,.962,.808,.298],[18.9,-21.52,-1.42,.175,.36,.292],[33.44,9.35,3.66,.794,.685,.592],[25.02,-3.88,5.75,.701,.595,.537],[37.52,7.59,1.52,.697,.655,.599],[37,4.94,2.61,.778,.702,.623],[10.48,.24,4.44,.959,.808,.292],[35.48,-8,3.08,.835,.751,.66],[39.81,-18.87,-2.39,.621,.638,.615],[29.1,-3.88,6.49,.928,.695,.183],[35.22,7,5.24,.961,.8,.277],[11,6.7,4.44,.961,.801,.273],[20.43,-3,5.54,.648,.634,.597],[13.8,13.76,.77,.196,.383,.308],[17.88,19.64,4.29,.961,.798,.27],[9.97,9.06,3.8,.959,.806,.284],[27.06,11.7,4.5,.745,.61,.546],[34.2,11.41,5.07,.961,.8,.279],[28.08,14.05,3.09,.298,.405,.304],[17.11,23.17,3.1,.961,.801,.276],[37.52,24.93,-3.18,.179,.366,.294],[40.83,-19.46,-3.08,.603,.622,.603],[42.11,6.7,-1.29,.247,.422,.329],[34.45,8.17,5.53,.964,.804,.287],[27.57,-1.23,4.57,.161,.344,.282],[9.21,14.64,2.79,.959,.815,.304],[42.36,-13.88,-3.02,.208,.403,.329],[26.04,-4.47,5.57,.723,.606,.546],[8.45,20.52,1.32,.959,.811,.298],[34.71,7,5.5,.961,.801,.281],[39.3,-8.29,.38,.701,.675,.635],[5.13,-13.58,-.73,.884,.718,.218],[27.06,5.23,5.03,.198,.362,.284],[33.44,.82,6.1,.945,.784,.265],[13.54,16.99,3.8,.957,.801,.277],[43.64,-20.05,-4.29,.161,.356,.296],[11.25,14.05,3.49,.957,.797,.27],[10.23,-13.29,-1.37,.188,.377,.304],[21.45,-.35,9.44,.962,.801,.281],[11,.82,4.65,.959,.803,.282],[13.04,3.76,2.45,.648,.614,.558],[7.17,14.05,2,.961,.812,.301],[29.86,16.7,1.35,.206,.375,.296],[20.43,14.64,2.17,.175,.354,.278],[11.76,16.11,3.24,.954,.792,.265],[32.92,-4.17,6.08,.954,.798,.281],[31.91,9.35,4.08,.803,.653,.574],[19.66,22.29,3.41,.943,.771,.24],[33.44,-16.52,-.58,.21,.381,.304],[40.06,-8.58,-.16,.682,.663,.625],[35.98,-11.82,-.74,.157,.348,.29],[12.78,-20.93,-2.86,.141,.338,.278],[15.33,16.7,4.2,.948,.781,.26],[10.23,7.59,4.06,.959,.804,.284],[27.57,-3.59,6.11,.813,.655,.576],[13.54,-1.82,5.44,.943,.782,.26],[10.74,17.58,2.74,.959,.806,.287],[36.75,-5.35,3.61,.92,.753,.237],[8.45,14.35,2.55,.961,.817,.307],[5.39,14.35,.25,.912,.743,.229],[37,3.18,2.77,.788,.708,.629],[31.91,1.41,5.01,.817,.673,.588],[20.18,1.71,8.33,.906,.754,.249],[18.14,20.52,3.98,.957,.792,.26],[22.47,-8.29,3.14,.163,.348,.282],[12.53,12.58,.69,.22,.397,.311],[15.58,18.76,4.3,.964,.826,.32],[4.88,-9.17,-.39,.841,.75,.65],[7.68,-14.76,.09,.888,.717,.216],[22.47,-7.41,3.42,.163,.348,.284],[8.45,-5.35,3.19,.962,.814,.304],[5.64,-.65,1.41,.928,.756,.24],[18.9,2.59,4.79,.214,.401,.323],[24,20.82,3.37,.892,.71,.193],[32.67,7.29,5.13,.931,.698,.169],[19.66,8.47,3.83,.177,.366,.296],[26.8,12.88,3.08,.216,.366,.284],[39.3,-2.41,1.18,.739,.687,.627],[26.04,4.35,5.92,.247,.381,.294],[23.75,21.11,4.56,.965,.804,.274],[19.16,14.64,6.35,.97,.823,.293],[40.58,-1.23,.19,.68,.655,.613],[28.34,21.4,1.27,.668,.642,.592],[30.63,-6.82,3.6,.697,.616,.556],[21.45,4.35,5.8,.263,.383,.294],[39.81,4.94,1.77,.835,.742,.639],[30.63,1.41,5.76,.825,.685,.609],[3.09,-5.94,-2.2,.668,.653,.613],[16.35,9.35,2.18,.157,.346,.284],[20.43,-1.23,9.06,.968,.817,.299],[36.5,2.29,4.86,.959,.798,.279],[28.84,12.58,4.98,.878,.695,.601],[35.98,-8.29,2.28,.766,.71,.641],[32.41,-4.76,3.78,.723,.663,.588],[19.92,-.65,6.96,.786,.724,.639],[29.36,-6.82,3.47,.263,.399,.298],[19.16,-7.7,2.61,.159,.344,.28],[22.21,-2.12,6.88,.745,.669,.58],[29.86,-6.23,5.89,.939,.709,.183],[20.94,-1.82,9.05,.964,.809,.288],[30.63,-1.23,5.56,.819,.685,.603],[13.8,.53,2.31,.218,.399,.315],[39.3,-3.29,.98,.715,.677,.623],[38.02,17.58,-1.03,.243,.417,.323],[10.23,-8.58,2.9,.937,.764,.238],[12.53,-8,4.19,.951,.779,.256],[21.96,24.05,2.7,.92,.743,.218],[8.96,-5.94,3.36,.962,.814,.303],[13.04,18.76,3.3,.961,.808,.29],[33.44,9.94,5.56,.932,.798,.315],[41.09,-3,-.31,.656,.644,.603],[13.29,17.29,3.65,.959,.801,.277],[9.21,-5.64,3.53,.962,.815,.306],[41.59,-5.94,-1.03,.625,.63,.595],[32.92,4.06,4.68,.839,.691,.59],[30.89,25.81,-1.22,.232,.411,.325],[26.04,11.7,3.66,.228,.371,.288],[8.45,.53,3.68,.964,.822,.321],[13.04,-18.58,-2.16,.141,.336,.278],[29.86,.24,5.74,.795,.657,.588],[27.06,12.88,3.37,.269,.383,.288],[35.73,.24,5.1,.953,.792,.268],[11,2.88,4.7,.961,.806,.285],[33.69,-4.17,6,.964,.815,.31],[31.65,19.93,1.14,.68,.648,.595],[35.48,-3.59,5.32,.965,.82,.309],[19.16,2.88,4.95,.218,.405,.327],[21.96,-15.64,.55,.143,.338,.284],[30.37,9.64,4.4,.758,.644,.576],[32.16,.24,6.12,.89,.748,.26],[3.6,-12.41,-2.75,.67,.651,.607],[12.02,19.93,2.64,.957,.804,.285],[26.04,-12.7,1.65,.161,.35,.286],[21.2,-1.53,8.99,.957,.793,.265],[15.84,21.7,3.31,.959,.808,.29],[22.21,11.11,3.3,.139,.334,.274],[21.96,-2.12,8.79,.943,.771,.243],[13.8,21.7,2.72,.959,.803,.284],[28.84,1.71,4.64,.214,.368,.288],[6.41,9.35,1.88,.95,.786,.263],[22.72,.53,8.61,.839,.738,.629],[10.48,22.87,1.42,.957,.804,.287],[11.5,-8,3.74,.951,.778,.248],[7.17,-17.4,-2.59,.627,.622,.58],[28.59,-16.52,.07,.157,.346,.288],[29.86,-3.29,5.84,.876,.693,.59],[17.62,18.76,4.66,.962,.812,.293],[27.57,-3.59,6.11,.813,.655,.576],[20.18,24.34,2.3,.914,.734,.213],[4.36,24.34,-2.84,.69,.648,.59],[12.02,10.23,.88,.22,.401,.315],[34.2,4.65,6.11,.964,.817,.306],[34.71,-3.88,5.26,.951,.792,.273],[40.83,-1.23,-.02,.67,.648,.609],[7.43,5.82,3.01,.962,.815,.304],[27.83,12.29,4.71,.811,.648,.574],[39.3,-21.23,-2.72,.623,.642,.619],[35.48,6.7,5.22,.962,.806,.287],[33.18,5.82,6.06,.948,.781,.27],[30.37,17.29,.94,.19,.368,.292],[20.43,-4.76,3.74,.155,.342,.282],[5.64,-1.82,1.34,.928,.753,.24],[25.79,14.64,2.67,.204,.373,.292],[33.18,21.11,-.08,.263,.43,.335],[31.39,-1.23,7.12,.956,.797,.279],[40.58,-.35,.25,.684,.655,.613],[26.04,12.29,3.38,.212,.366,.284],[8.96,-14.17,.63,.888,.709,.207],[28.59,17.88,1.17,.192,.37,.296],[27.83,6.41,4.41,.19,.354,.28],[33.44,-13.29,-.31,.143,.338,.284],[4.62,6.7,-.34,.801,.714,.627],[15.08,-.06,2.56,.185,.371,.3],[19.41,7.59,4.49,.224,.413,.331],[30.12,12.29,4.79,.866,.712,.621],[38.28,-18.87,-1.63,.652,.653,.627],[34.71,7.29,5.42,.959,.798,.276],[9.47,-9.47,2.36,.934,.759,.235],[41.34,14.35,-2.14,.212,.391,.306],[13.04,14.94,1.33,.69,.642,.576],[7.94,23.76,.33,.956,.804,.285],[31.65,-.35,5.52,.801,.736,.648],[36.75,8.76,3.25,.888,.723,.215],[40.58,-7.41,-.33,.674,.657,.619],[9.97,4.94,4.2,.959,.811,.296],[6.66,-16.52,-2.35,.658,.638,.594],[7.68,16.11,1.84,.956,.811,.298],[35.48,-7.7,3.81,.921,.75,.24],[24.51,-4.17,4.71,.19,.356,.282],[36.24,-3.88,4.85,.962,.814,.298],[31.91,-6.53,2.26,.204,.375,.296],[35.48,-3.59,5.32,.965,.82,.309],[5.89,.24,1.8,.943,.773,.249],[21.96,18.76,4.53,.931,.748,.223],[16.09,23.76,2.49,.953,.784,.254],[36.5,-11.23,2.26,.879,.718,.226],[7.43,.53,3.19,.965,.822,.314],[29.61,-4.76,6.02,.913,.726,.601],[6.15,4.65,1.96,.945,.779,.254],[18.65,19.35,4.53,.959,.8,.276],[23.23,19.05,5.19,.965,.8,.267],[11.5,-1.53,4.91,.961,.812,.298],[12.53,6.41,3.95,.873,.718,.215],[13.54,15.52,1.81,.741,.675,.595],[7.17,4.35,2.93,.961,.814,.303],[23.75,21.99,4.01,.956,.784,.251],[27.31,1.71,5.58,.239,.383,.294],[35.73,12.58,4.17,.959,.795,.271],[32.67,-4.76,5.23,.898,.737,.234],[31.14,10.82,5.78,.948,.75,.23],[9.21,5.53,3.94,.964,.82,.312],[14.57,25.23,1.92,.959,.801,.271],[11.25,21.4,2.03,.959,.804,.285],[33.95,7.88,6,.961,.823,.32],[37.52,4.94,1.85,.711,.665,.607],[20.94,1.12,9.52,.964,.811,.292],[6.15,11.41,1.5,.948,.782,.256],[10.48,-1.82,4.15,.951,.792,.273],[8.45,-7.41,2.79,.957,.8,.284],[33.69,-4.17,6,.964,.815,.31],[32.41,23.46,-.6,.257,.428,.333],[39.55,4.94,2.88,.937,.765,.238],[21.96,19.93,4.33,.94,.762,.234],[36.24,13.76,3.91,.965,.808,.285],[10.74,-19.46,-2.92,.155,.352,.29],[15.84,18.17,4.53,.964,.826,.317],[35.98,4.35,5.07,.961,.8,.277],[12.53,.53,5.35,.961,.801,.276],[37,-1.82,2.91,.809,.732,.641],[12.02,2.29,5.29,.964,.814,.292],[27.83,25.52,-.36,.265,.434,.339],[31.91,10.23,4.13,.799,.681,.595],[34.97,3.76,5.58,.961,.8,.284],[29.1,20.82,1.4,.674,.648,.595],[33.18,9.35,5.23,.912,.759,.267],[19.66,23.76,2.87,.939,.767,.237],[13.54,21.11,2.87,.961,.809,.29],[12.53,7.59,4.88,.953,.786,.262],[30.89,18.76,1.97,.741,.661,.595],[5.89,2,1.82,.943,.773,.246],[29.1,-1.53,4.28,.216,.37,.292],[6.91,-5.06,2.47,.961,.809,.295],[12.78,15.52,3.81,.959,.797,.267],[15.33,16.99,4.54,.962,.815,.295],[20.43,19.93,4.1,.932,.759,.234],[7.43,-.06,3.13,.962,.819,.315],[14.05,-2.12,2.5,.245,.417,.323],[11,23.76,1.34,.957,.803,.282],[8.96,-12.7,1.71,.942,.767,.24],[16.61,22.58,3.07,.957,.793,.263],[19.41,2.88,5.22,.232,.417,.333],[26.55,-2.12,5.88,.684,.597,.545],[9.21,-8,2.85,.951,.787,.267],[5.13,-2.41,.6,.892,.721,.223],[11,-5.06,4.26,.961,.804,.285],[11.76,9.64,3.14,.841,.753,.639],[33.69,-5.35,5.62,.959,.798,.288],[19.92,21.11,3.77,.942,.768,.237],[13.04,-9.47,.33,.171,.368,.296],[41.85,2.88,-.82,.629,.62,.58],[6.66,-5.64,2.13,.957,.797,.276],[35.73,5.82,5.25,.965,.811,.295],[35.48,-.06,5.26,.956,.795,.274],[33.69,3.47,6.18,.959,.798,.281],[33.18,-2.7,6.13,.954,.795,.281],[26.04,21.11,1.8,.686,.655,.603],[3.09,21.99,-3.12,.641,.632,.59],[30.37,13.47,4.69,.899,.734,.627],[7.94,17.29,1.83,.959,.817,.304],[12.27,-8,4.13,.957,.784,.252],[12.78,14.64,1.43,.707,.653,.576],[26.04,-17.7,-.08,.149,.342,.284],[39.55,9.94,2.96,.962,.801,.274],[19.41,16.41,5.81,.964,.819,.303],[35.22,-4.47,5.17,.964,.806,.292],[20.43,-.65,9.13,.965,.815,.299],[33.95,4.35,6.13,.964,.808,.293],[34.45,2.59,5.76,.956,.793,.268],[26.3,-2.41,5.65,.294,.399,.296],[33.44,14.35,4.71,.957,.797,.279],[9.47,-21.23,-3.72,.159,.356,.296],[40.06,-17.4,-2.05,.637,.646,.623],[22.72,-.35,9.22,.918,.756,.238],[10.23,15.52,2.98,.959,.809,.295],[30.89,-1.23,5.49,.821,.691,.597],[9.97,21.4,1.62,.961,.806,.29],[40.06,24.05,-3.95,.165,.354,.288],[8.96,12.88,2.92,.959,.811,.296],[42.36,5.53,-1.68,.214,.397,.313],[33.18,-7.7,1.67,.218,.385,.306],[17.37,-2.7,3.23,.175,.362,.294],[36.75,-3,4.14,.937,.771,.251],[33.44,6.7,6.13,.95,.806,.299],[6.66,9.35,2.11,.956,.793,.273],[9.47,8.47,3.74,.961,.814,.301],[39.55,-19.46,-2.32,.633,.646,.619],[4.88,23.17,-1.96,.801,.708,.621],[13.8,-7.7,1.25,.2,.389,.315],[12.02,1.71,5.2,.962,.808,.282],[12.27,6.12,5.25,.97,.814,.281],[9.21,-2.7,3.82,.964,.817,.307],[28.08,4.65,5.2,.267,.391,.302],[33.69,-8,1.3,.208,.375,.302],[36.5,-9.76,3.13,.928,.757,.238],[12.27,6.7,5.08,.967,.804,.267],[39.81,12.29,2.2,.95,.773,.237],[30.37,1.41,5.69,.815,.667,.595],[28.59,-10.64,2.29,.21,.377,.302],[37.26,15.23,-.01,.639,.614,.568],[32.41,.53,6.78,.95,.8,.293],[28.84,.24,4.57,.212,.37,.292],[37.77,-2.7,1.81,.723,.681,.631],[22.72,18.76,4.77,.937,.764,.238],[11.5,-2.41,4.89,.962,.815,.301],[36.5,-10.35,3.42,.956,.786,.26],[11.76,16.41,3.18,.954,.793,.267],[8.7,13.76,2.72,.961,.815,.303],[41.34,-16.82,-2.59,.613,.634,.609],[16.09,16.41,2.29,.715,.665,.599],[8.7,-7.11,3.01,.961,.806,.292],[9.72,4.35,4.08,.959,.809,.293],[30.89,13.47,3.83,.841,.673,.582],[8.19,-8,2.5,.954,.793,.274],[4.88,5.82,.18,.839,.742,.645],[24.25,3.76,6.84,.285,.399,.298],[34.2,9.06,5.45,.956,.801,.284],[31.91,1.41,5.01,.817,.673,.588],[29.1,17.29,1.53,.228,.389,.304],[29.86,7.88,5.82,.874,.704,.595],[38.28,-16.52,-.9,.676,.667,.629],[10.74,12.88,3.53,.957,.8,.273],[11,-.65,4.65,.961,.806,.288],[28.08,10.23,6.33,.925,.701,.199],[9.72,-4.17,3.84,.961,.809,.296],[20.43,18.76,4.66,.943,.771,.245],[4.36,-16.82,-3,.648,.642,.599],[42.11,5.82,-1.19,.251,.426,.333],[38.28,14.05,.21,.695,.644,.584],[16.09,21.4,3.46,.961,.808,.285],[28.34,16.99,1.66,.212,.381,.3],[4.62,3.47,-.24,.795,.712,.631],[40.06,9.94,1.93,.921,.742,.218],[27.83,-5.94,6.15,.87,.724,.605],[19.16,6.41,4.45,.21,.399,.317],[36.5,13.47,3.35,.942,.768,.241],[9.21,.53,3.91,.961,.812,.303],[17.88,-2.12,3.66,.181,.373,.302],[13.8,16.99,3.93,.959,.804,.282],[15.84,16.99,4.77,.97,.819,.299],[13.8,23.46,2.34,.961,.811,.29],[13.04,-3,5.36,.961,.801,.274],[38.79,-.65,3.28,.942,.765,.24],[15.33,4.94,2.6,.183,.37,.298],[29.86,-6.53,6.03,.954,.724,.191],[30.89,-5.06,3.36,.277,.399,.3],[38.79,1.71,3.64,.956,.789,.265],[33.18,-7.7,1.67,.218,.385,.306],[8.96,15.23,2.59,.961,.814,.304],[23.49,19.64,5.12,.967,.809,.284],[38.79,12.58,2.65,.953,.776,.241],[16.09,22.29,3.2,.959,.808,.285],[12.53,3.18,4.44,.917,.732,.208],[11.25,-12.7,-1.1,.167,.36,.292],[28.84,23.46,.38,.646,.628,.588],[11.25,19.05,2.56,.959,.803,.284],[35.48,5.82,5.3,.964,.806,.287],[24.51,-12.41,2.05,.183,.366,.294],[21.45,10.53,3.38,.145,.336,.274],[32.41,4.06,5.51,.899,.738,.623],[14.57,23.17,2.67,.962,.814,.299],[14.05,17.88,3.9,.961,.812,.298],[9.21,-19.46,-3.21,.173,.37,.3],[26.55,-15.93,.38,.141,.336,.282],[16.86,25.81,2.13,.956,.792,.26],[32.92,-14.17,-.31,.147,.344,.29],[19.92,-.06,7.72,.877,.728,.232],[28.59,-7.7,2.99,.192,.368,.296],[7.43,5.53,3,.961,.814,.303],[28.84,3.76,4.33,.179,.354,.284],[34.71,4.65,5.83,.964,.814,.299],[12.78,-.94,5.45,.962,.804,.282],[35.22,18.46,.02,.635,.612,.57],[27.31,24.05,.4,.65,.63,.588],[12.27,10.82,.74,.202,.389,.308],[8.7,-2.12,3.67,.965,.82,.312],[18.65,15.52,5.67,.964,.798,.263],[39.04,-.94,2.77,.912,.742,.229],[5.89,-16.82,-2.7,.656,.64,.597],[28.84,20.52,1.65,.686,.655,.603],[35.98,-.94,4.93,.953,.792,.271],[36.5,6.12,4.61,.956,.79,.267],[31.39,-7.7,2.27,.212,.379,.302],[33.69,16.7,3.35,.923,.742,.219],[38.79,-1.53,2.98,.923,.75,.23],[34.71,-6.23,4.91,.957,.789,.267],[4.11,-13.58,-2.36,.717,.673,.619],[40.58,-1.23,.19,.68,.655,.613],[31.14,4.35,5.03,.778,.655,.584],[11.5,.53,4.91,.961,.804,.284],[36.24,-7.7,2.88,.845,.757,.656],[20.18,2,8.12,.892,.739,.238],[32.67,24.05,-.97,.241,.419,.329],[32.16,-12.11,.46,.149,.344,.288],[29.36,-1.53,4.17,.216,.37,.292],[12.78,-1.23,5.39,.961,.801,.276],[33.44,14.94,2.39,.754,.681,.588],[20.68,-.65,9.2,.965,.811,.293],[38.79,7.88,3.31,.953,.784,.254],[30.12,-.35,5.11,.739,.624,.56],[28.84,19.93,.26,.167,.352,.28],[15.33,-.65,2.67,.186,.373,.302],[22.98,-21.81,-1.32,.157,.348,.284],[22.72,22.87,3.74,.956,.787,.257],[8.19,-17.99,-1.96,.69,.642,.588],[26.3,7.29,5.31,.281,.393,.294],[8.19,-8,2.5,.954,.793,.274],[6.41,-4.47,2.05,.954,.792,.27],[43.38,2.29,-2.4,.185,.371,.3],[21.45,-3,5.89,.674,.63,.568],[35.48,-8.29,1.83,.701,.659,.601],[8.7,7.29,3.54,.964,.817,.306],[33.44,10.23,5.61,.956,.803,.287],[16.86,-.94,3.26,.179,.366,.296],[38.28,-5.06,1.33,.717,.681,.629],[41.59,-3.59,-.73,.641,.634,.595],[33.18,-4.76,5.91,.959,.798,.282],[38.79,6.41,3.42,.954,.784,.254],[8.7,-5.64,3.32,.962,.817,.306],[32.67,19.35,.98,.674,.644,.594],[31.39,2.88,6.07,.901,.702,.215],[21.96,25.81,-.14,.645,.626,.58],[25.53,10.23,4.13,.21,.37,.288],[31.14,8.76,4.28,.727,.659,.592],[9.97,7.59,4.01,.959,.811,.292],[12.02,-1.82,5.1,.962,.811,.292],[12.27,7.88,4.78,.959,.79,.257],[21.71,5.82,5.05,.181,.354,.282],[8.7,13.76,2.72,.961,.815,.303],[24.77,8.47,5.23,.265,.401,.308],[27.83,14.35,2.47,.206,.371,.292],[14.82,21.4,3.3,.962,.82,.307],[33.18,1.12,6.34,.953,.792,.273],[20.18,-.94,8.93,.964,.811,.296],[20.18,.53,9.11,.965,.811,.29],[7.17,5.23,2.92,.961,.815,.304],[10.74,8.17,4.17,.959,.8,.271],[35.22,-7.41,4.15,.935,.762,.245],[39.55,3.76,2.54,.91,.739,.226],[35.22,4.94,5.38,.959,.798,.277],[27.57,24.34,.21,.639,.626,.584],[28.08,9.64,5.33,.786,.653,.58],[12.02,8.17,4.77,.964,.801,.268],[27.57,7.59,4.23,.183,.356,.288],[20.43,1.71,9.37,.97,.817,.295],[24.25,3.18,6.86,.253,.389,.296],[11.5,.82,4.96,.962,.808,.287],[13.04,-3.88,5.24,.959,.798,.273],[27.57,-5.35,6.43,.895,.718,.597],[21.45,-2.41,8.91,.964,.797,.267],[6.91,-14.76,.21,.921,.745,.227],[6.66,24.64,-.51,.942,.773,.245],[19.92,15.82,4.91,.901,.732,.223],[11.76,25.52,1.02,.957,.795,.267],[12.02,-.35,5.03,.957,.797,.274],[7.68,-9.76,1.98,.951,.79,.268],[5.89,13.47,.99,.939,.773,.245],[22.98,-11.82,2.08,.169,.354,.286],[39.55,22.29,-3.18,.183,.37,.298],[36.24,-12.41,-.49,.212,.383,.3],[35.98,9.35,4.75,.964,.809,.292],[5.89,19.93,-.34,.926,.75,.23],[25.02,4.65,6.48,.288,.401,.3],[4.36,12.88,-1.38,.748,.689,.617],[6.91,11.7,2.16,.961,.809,.293],[9.97,10.82,3.63,.961,.808,.29],[15.08,-5.06,5.26,.914,.75,.23],[8.19,2.88,3.55,.964,.822,.315],[33.69,10.82,5.35,.961,.798,.277],[21.71,.82,9.61,.959,.793,.267],[12.53,-2.41,5.15,.961,.8,.271],[14.82,12.29,1.23,.177,.364,.296],[12.53,7,4.75,.939,.773,.251],[10.23,19.05,2.17,.959,.801,.281],[16.61,16.41,2.65,.743,.681,.601],[32.92,-1.23,6.22,.946,.782,.265],[17.11,16.41,5.19,.967,.811,.287],[29.86,3.47,4.37,.269,.377,.286],[26.55,-2.12,5.88,.684,.597,.545],[30.63,19.93,1.48,.692,.653,.601],[4.88,2,.29,.839,.744,.646],[42.36,13.17,-2.61,.192,.375,.292],[19.41,-15.64,.2,.141,.338,.278],[12.53,4.65,4.62,.932,.75,.219],[32.67,-5.06,2.38,.234,.385,.292],[12.53,2.59,3.79,.837,.728,.605],[23.23,23.17,3.28,.935,.761,.23],[33.18,.24,6.15,.945,.779,.257],[20.43,-14.17,.85,.145,.338,.28],[26.8,1.12,5.45,.194,.36,.282],[13.54,-5.64,5.04,.954,.786,.252],[4.11,-8.88,-1.68,.725,.675,.617],[30.89,14.35,1.77,.232,.37,.284],[8.96,14.94,2.61,.959,.812,.299],[22.72,.82,8.26,.801,.704,.603],[41.34,7.29,-.57,.662,.63,.58],[5.13,-6.53,.31,.89,.723,.224],[30.37,-9.76,2.07,.21,.379,.302],[4.88,9.06,-0,.843,.744,.645],[5.64,13.76,.63,.925,.757,.235],[35.73,-4.17,5,.962,.809,.292],[32.67,12.29,1.63,.218,.375,.284],[33.69,-5.64,3.22,.733,.673,.595],[26.55,6.7,5.14,.243,.377,.288],[16.35,-.94,3.05,.181,.368,.296],[8.7,20.23,1.47,.957,.811,.299],[34.71,.53,5.53,.954,.787,.257],[34.2,5.82,6.2,.967,.831,.326],[6.15,1.41,2.05,.946,.781,.257],[16.86,16.99,5.01,.964,.815,.299],[14.05,-3,2.9,.672,.63,.572],[31.14,-7.41,2.56,.228,.389,.311],[37,14.94,.21,.648,.618,.572],[9.72,20.23,1.8,.957,.808,.29],[15.33,24.34,2.45,.961,.809,.29],[31.39,-.06,4.37,.713,.614,.556],[8.7,.82,3.76,.964,.819,.315],[37.52,2.88,1.94,.717,.665,.607],[12.27,14.05,3.97,.964,.801,.27],[29.36,7.88,4.87,.766,.608,.541],[35.98,1.41,5.15,.957,.803,.285],[29.86,4.35,6.33,.846,.712,.629],[42.36,-19.46,-3.87,.19,.395,.327],[17.11,18.46,4.78,.964,.825,.315],[11,-1.82,4.65,.962,.812,.296],[9.47,7.29,3.92,.964,.819,.307],[5.13,6.41,.63,.893,.723,.218],[20.43,-2.41,7.7,.89,.739,.243],[37.77,-1.53,1.86,.721,.681,.623],[4.88,-20.34,-2.76,.688,.655,.605],[11,18.76,2.49,.957,.798,.279],[18.65,19.93,4.45,.961,.806,.284],[5.64,-2.7,1.3,.926,.753,.24],[11.25,1.71,4.76,.959,.801,.277],[30.12,12.29,4.79,.866,.712,.621],[17.11,21.11,3.87,.961,.814,.298],[18.65,20.82,4.01,.956,.793,.265],[9.97,-9.47,2.55,.932,.756,.232],[5.64,15.82,.24,.92,.75,.232],[11.5,10.23,3.74,.926,.764,.241],[19.66,14.35,2.03,.173,.348,.268],[11.25,9.06,4.32,.961,.801,.268],[22.72,21.7,4.41,.965,.809,.284],[39.55,3.76,2.54,.91,.739,.226],[15.08,21.7,3.23,.962,.817,.304],[5.89,-5.06,1.41,.939,.765,.243],[28.34,14.05,3.7,.758,.624,.556],[11,2.88,4.7,.961,.806,.285],[6.66,-8.58,1.8,.957,.797,.277],[27.06,-.35,4.93,.161,.344,.278],[21.45,3.18,8.76,.907,.742,.238],[23.49,10.23,4.64,.277,.395,.298],[27.57,9.94,5.65,.833,.667,.582],[22.72,-.94,8.05,.805,.728,.619],[38.79,-20.64,-2.36,.633,.644,.623],[32.67,-.65,6.48,.953,.79,.273],[5.64,2.29,1.46,.929,.754,.235],[30.89,-2.7,6.32,.923,.729,.224],[12.78,5.23,2.37,.664,.622,.562],[36.24,22.29,-1.74,.216,.397,.311],[22.72,2.29,6.32,.208,.368,.288],[5.13,-15.05,-1.4,.821,.728,.641],[19.16,16.7,5.72,.965,.822,.309],[30.89,-1.53,5.44,.825,.689,.595],[15.33,15.52,1.08,.212,.399,.317],[33.95,3.18,6.13,.962,.803,.29],[14.31,20.23,3.42,.961,.817,.303],[30.63,5.82,5.97,.886,.718,.607],[14.31,-3.59,2.97,.676,.63,.57],[12.78,9.35,1.1,.198,.381,.302],[5.89,-.94,1.78,.942,.775,.252],[26.04,-4.76,5.95,.784,.638,.566],[25.02,-11.82,2.15,.179,.36,.288],[32.92,14.05,1.55,.265,.403,.3],[29.61,7.59,4.94,.786,.612,.545],[38.53,17.88,-1.45,.23,.403,.313],[37,-20.34,-2.99,.169,.356,.286],[22.47,-11.82,2.1,.175,.36,.29],[10.74,2.88,4.56,.961,.804,.284],[13.54,-6.53,4.85,.956,.781,.245],[9.21,3.47,4,.962,.82,.314],[33.95,.53,5.7,.939,.773,.254],[6.66,20.52,.36,.951,.789,.265],[12.02,-3.59,4.86,.961,.803,.282],[7.43,18.76,1.26,.959,.809,.298],[9.72,-5.94,3.58,.959,.804,.29],[4.62,-4.47,-.31,.813,.724,.637],[24.25,-2.12,5.59,.21,.37,.288],[11,23.46,1.39,.959,.801,.282],[32.41,11.11,1.54,.157,.346,.274],[39.81,12.88,1.51,.912,.729,.205],[37,9.06,1.83,.731,.669,.601],[27.06,20.82,1.85,.69,.659,.605],[21.71,-12.7,1.58,.157,.346,.282],[30.37,2.59,6.19,.868,.702,.627],[40.58,11.11,-.15,.721,.657,.592],[12.53,7.59,4.88,.953,.786,.262],[12.02,5.82,5.01,.961,.803,.276],[22.21,1.12,9.82,.959,.789,.26],[29.36,3.76,4.61,.259,.383,.298],[12.27,-11.23,-.43,.163,.358,.29],[30.37,4.35,4.23,.279,.393,.298],[25.53,-20.34,-.97,.147,.338,.28],[31.65,-6.82,2.39,.214,.381,.302],[19.66,15.23,2.5,.261,.401,.29],[25.28,-12.11,1.76,.149,.338,.276],[15.08,19.35,3.9,.962,.819,.309],[7.17,-5.64,2.55,.962,.811,.299],[13.29,8.17,1.48,.194,.381,.304],[29.61,-8.29,2.66,.208,.377,.302],[30.37,-7.7,2.54,.202,.375,.3],[32.67,-5.06,2.38,.234,.385,.292],[36.24,-4.47,4.74,.964,.808,.296],[36.75,11.11,2.73,.854,.751,.637],[23.23,21.11,4.55,.962,.804,.279],[44.14,7.59,-2.96,.188,.368,.292],[14.05,16.7,4.07,.961,.803,.277],[10.23,-1.82,4.22,.957,.808,.292],[7.43,9.35,2.65,.957,.809,.292],[16.61,-17.7,-1,.139,.336,.276],[24,-.06,6.19,.202,.362,.288],[33.18,-5.64,1.86,.202,.371,.296],[30.12,18.76,1.73,.688,.632,.578],[20.18,-7.41,3.06,.171,.352,.284],[9.97,-11.52,2.12,.931,.75,.226],[29.86,4.65,6.4,.862,.718,.629],[5.39,.82,1.12,.91,.74,.232],[12.78,-3.88,5.08,.959,.795,.27],[17.62,16.7,5.18,.961,.808,.285],[11.76,4.06,5.13,.964,.814,.292],[26.8,7.59,5.14,.288,.397,.298],[4.11,17.88,-2.73,.684,.65,.597],[33.95,8.76,5.6,.948,.803,.292],[17.37,21.7,3.68,.964,.808,.287],[29.86,24.34,-.27,.263,.434,.339],[12.02,18.46,2.96,.959,.803,.282],[26.04,-15.64,.48,.137,.332,.276],[10.74,2.59,4.56,.961,.804,.285],[39.81,-15.93,-1.6,.645,.648,.617],[29.1,6.41,4.54,.273,.395,.302],[35.22,10.82,4.7,.959,.797,.271],[29.1,4.06,4.33,.196,.364,.29],[20.18,6.12,5.48,.635,.62,.582],[24.51,19.93,4.69,.957,.784,.249],[22.98,-.06,6.22,.226,.375,.284],[34.45,14.94,4.08,.954,.786,.256],[20.18,.53,9.11,.965,.811,.29],[22.72,-.35,9.22,.918,.756,.238],[33.95,17.88,.82,.66,.632,.58],[11,21.99,1.69,.953,.795,.277],[36.5,-4.17,4.52,.959,.798,.282],[32.16,5.53,6.18,.95,.746,.227],[21.2,22.29,3.43,.937,.757,.229],[10.74,-20.93,-3.32,.151,.35,.29],[19.41,22.29,3.59,.953,.787,.257],[10.48,-1.82,4.15,.951,.792,.273],[30.63,-18.87,-.58,.208,.381,.304],[18.9,13.76,3.27,.652,.628,.586],[14.82,18.17,4.13,.964,.819,.306],[7.68,19.05,1.35,.959,.812,.301],[32.67,11.11,3.04,.701,.648,.574],[39.55,20.23,-2.6,.196,.383,.302],[36.75,-1.53,4.11,.932,.761,.241],[15.58,21.99,3.24,.961,.814,.295],[39.04,4.06,3.72,.965,.806,.287],[24.25,-21.23,-1.07,.165,.35,.288],[30.63,-5.35,5.54,.905,.73,.607],[39.04,.82,3.37,.95,.779,.254],[5.64,10.82,.91,.928,.75,.227],[34.97,.53,5.62,.962,.801,.281],[35.48,3.47,5.28,.957,.795,.274],[35.22,6.7,5.27,.962,.8,.279],[19.92,18.76,4.96,.961,.801,.277],[23.49,-8.88,3.08,.169,.356,.286],[28.59,5.82,4.78,.271,.389,.298],[17.11,15.82,2.84,.731,.671,.603],[34.45,8.76,5.45,.964,.804,.285],[18.9,7,4.03,.192,.379,.306],[14.57,-5.94,3.21,.727,.669,.59],[40.32,-2.7,.31,.686,.659,.615],[31.65,-3.88,6.93,.967,.815,.306],[10.74,25.23,.82,.957,.798,.274],[30.63,7,6.3,.925,.718,.215],[5.39,4.65,1.06,.912,.739,.227],[13.54,24.64,1.8,.957,.8,.273],[27.06,12.88,3.37,.269,.383,.288],[33.18,-3.59,6.12,.957,.801,.29],[19.41,18.46,5.18,.964,.817,.303],[32.41,3.18,5.36,.888,.72,.611],[29.36,14.94,1.91,.212,.364,.282],[17.37,25.23,2.47,.959,.797,.267],[33.18,13.76,4.04,.898,.734,.229],[26.3,-17.7,-.22,.139,.332,.278],[10.48,-5.06,3.96,.957,.798,.279],[40.58,-15.05,-1.74,.641,.646,.617],[32.16,4.65,5.92,.931,.721,.213],[15.08,19.64,3.85,.964,.819,.307],[4.62,2.59,-.19,.797,.716,.633],[5.89,5.53,1.64,.935,.767,.243],[30.37,-6.53,6,.962,.735,.201],[19.92,20.23,4.22,.946,.779,.252],[33.18,4.65,6.08,.943,.778,.263],[20.18,17.88,5.14,.956,.789,.26],[26.04,10.23,4.46,.271,.393,.298],[19.16,-3,4.34,.2,.401,.325],[23.23,4.94,6.27,.269,.391,.294],[33.95,8.47,5.59,.943,.8,.292],[41.59,7.88,-.4,.711,.65,.592],[31.14,5.53,5.7,.89,.708,.601],[15.58,-4.47,5.26,.893,.729,.216],[36.5,-9.17,2.32,.815,.74,.66],[5.64,-14.76,-.63,.893,.723,.221],[28.08,-4.47,6.2,.866,.691,.586],[11.5,10.53,3.02,.874,.718,.215],[21.96,-1.53,9.08,.954,.781,.249],[8.96,6.12,3.72,.961,.815,.306],[33.69,13.17,4.88,.959,.797,.27],[9.47,-6.53,3.4,.961,.804,.287],[22.47,23.46,3.06,.931,.753,.224],[5.13,-10.05,-.18,.885,.718,.219],[36.75,5.53,3.87,.915,.745,.232],[10.23,-.06,4.38,.961,.812,.301],[21.71,-.65,9.37,.959,.793,.265],[20.43,-9.47,2.34,.151,.34,.278],[8.45,-.06,3.67,.964,.822,.318],[34.97,.82,5.62,.964,.801,.284],[9.97,21.7,1.51,.957,.803,.285],[37,3.76,2.7,.782,.706,.627],[20.68,17.88,4.91,.943,.765,.235],[19.66,-3,4.77,.224,.419,.343],[11.76,3.76,5.14,.964,.815,.292],[30.89,-1.23,5.49,.821,.691,.597],[15.08,23.17,2.75,.959,.812,.295],[15.08,20.82,3.55,.962,.823,.312],[13.04,-2.41,5.41,.961,.801,.277],[9.21,21.4,1.38,.959,.809,.298],[39.81,21.7,-3.17,.181,.368,.298],[17.37,25.23,2.47,.959,.797,.267],[26.04,-14.76,.77,.137,.334,.274],[20.18,-3,5.24,.619,.62,.592],[3.86,9.06,-1.72,.682,.653,.605],[34.71,11.41,4.6,.951,.781,.251],[30.37,9.35,4.18,.735,.62,.552],[13.54,-4.17,5.31,.957,.79,.259],[31.65,-.65,7.26,.965,.812,.303],[5.89,16.11,.44,.929,.759,.238],[15.84,16.7,3.34,.837,.761,.658],[21.2,20.23,3.91,.923,.745,.219],[24.77,-.65,5.73,.173,.35,.282],[11.5,-3.88,4.66,.962,.808,.293],[10.48,12.58,3.52,.959,.803,.277],[22.72,24.64,1.2,.77,.687,.607],[30.89,21.11,.82,.66,.636,.586],[41.85,-16.23,-3.03,.222,.422,.347],[31.65,11.41,4.19,.85,.683,.595],[31.39,-3.88,6.92,.967,.806,.288],[37,.53,2.95,.803,.726,.637],[26.55,8.17,4.62,.216,.373,.294],[8.19,15.23,2.25,.961,.812,.301],[7.68,19.05,1.35,.959,.812,.301],[38.53,.82,2.79,.89,.721,.223],[13.54,-4.17,5.31,.957,.79,.259],[36.5,-.06,4.84,.961,.8,.279],[9.97,3.18,4.28,.959,.812,.299],[16.35,23.17,2.7,.954,.782,.246],[13.54,-16.52,-1.52,.137,.334,.276],[35.73,-4.76,4.86,.962,.803,.288],[11,11.41,3.87,.961,.798,.268],[33.18,-18.29,-1.04,.202,.379,.304],[29.1,1.12,5.44,.715,.606,.552],[29.86,1.71,5.16,.713,.614,.556],[23.75,-3.29,5.86,.312,.409,.306],[16.35,-5.35,2.32,.171,.358,.292],[10.23,-.65,4.24,.956,.803,.287],[9.47,18.76,2.04,.957,.809,.296],[7.17,9.64,2.53,.961,.809,.295],[37.77,-11.82,.59,.723,.689,.641],[9.21,14.35,2.84,.961,.814,.303],[12.78,8.47,2.4,.694,.65,.578],[26.3,6.41,6.31,.754,.618,.552],[19.41,6.12,4.77,.222,.413,.331],[32.41,.82,5.29,.817,.74,.645],[19.92,-13.29,1.07,.151,.34,.278],[30.89,13.76,3.57,.827,.655,.568],[8.19,19.05,1.48,.957,.808,.293],[35.22,15.82,2.9,.917,.734,.213],[27.57,-8.88,2.92,.194,.37,.296],[6.41,-.35,2.4,.959,.8,.279],[11,11.7,3.83,.961,.798,.271],[37.26,-5.35,1.43,.694,.653,.592],[13.04,-7.41,4.26,.932,.765,.241],[40.83,-6.53,-.57,.645,.642,.599],[9.47,-11.23,2.09,.937,.761,.234],[16.61,13.17,1.57,.169,.356,.286],[11.25,-3.59,4.55,.959,.806,.29],[34.2,5.53,6.2,.967,.83,.323],[13.54,-6.53,4.85,.956,.781,.245],[21.71,-2.7,6.46,.715,.663,.588],[22.98,-4.17,4.52,.163,.348,.282],[9.21,-.65,3.92,.962,.815,.304],[34.71,16.7,1.81,.79,.697,.611],[32.92,2.88,5.22,.858,.742,.639],[7.94,-19.17,-.95,.856,.742,.635],[29.61,-12.7,.99,.149,.344,.288],[22.21,23.17,3.52,.954,.781,.249],[38.28,17.29,-1.14,.237,.411,.319],[22.98,18.76,4.97,.95,.776,.246],[11.76,-2.7,4.99,.962,.815,.303],[8.7,-5.64,3.32,.962,.817,.306],[16.61,14.94,1.46,.194,.383,.31],[27.57,4.06,5.99,.711,.599,.545],[8.7,-6.53,3.15,.962,.812,.301],[36.5,-2.7,4.73,.962,.803,.284],[21.45,2.88,9.68,.97,.803,.277],[21.45,1.41,9.68,.964,.804,.281],[35.48,4.06,5.33,.961,.8,.281],[38.53,11.41,2.34,.914,.734,.215],[34.45,2.29,5.72,.954,.79,.262],[24,-1.53,5.77,.21,.368,.29],[32.41,-8,1.76,.204,.375,.298],[6.91,-.06,2.7,.954,.804,.296],[35.73,-3.59,5.02,.962,.804,.287],[10.48,17.29,2.66,.957,.803,.285],[37,5.53,2.5,.77,.699,.619],[22.21,25.52,.06,.656,.632,.58],[28.84,13.47,4.62,.868,.687,.595],[13.29,-2.7,5.48,.961,.8,.271],[14.31,-20.34,-2.34,.137,.332,.278],[24.25,20.23,3.87,.912,.731,.207],[35.98,7.59,4.97,.964,.811,.293],[4.11,-5.06,-1.32,.721,.673,.617],[35.22,15.52,3.32,.937,.761,.229],[33.69,2.59,6.17,.956,.797,.279],[37.26,-2.7,2.04,.729,.683,.621],[4.36,.53,-.55,.77,.699,.629],[17.11,16.11,3.79,.839,.753,.645],[12.27,9.06,1.72,.662,.616,.558],[11.76,-4.47,4.69,.961,.806,.288],[31.39,2.59,5.86,.882,.722,.619],[18.65,25.81,1.96,.934,.757,.229],[35.22,-3.59,5.35,.964,.812,.299],[4.11,23.46,-2.98,.668,.64,.588],[11.5,-3.29,4.77,.962,.812,.301],[20.18,15.52,1.94,.188,.36,.276],[8.19,-15.05,-.5,.795,.702,.617],[35.22,8.76,4.97,.956,.795,.271],[33.18,10.23,5.71,.945,.804,.312],[16.09,17.88,4.65,.962,.825,.315],[40.83,11.11,-.9,.641,.614,.566],[12.02,-8.29,3.95,.956,.782,.249],[9.72,-21.23,-3.66,.155,.354,.294],[36.24,8.76,4.63,.964,.803,.282],[21.2,5.82,4.95,.202,.354,.282],[34.45,-2.41,5.53,.953,.792,.27],[14.05,-8.88,.75,.167,.358,.292],[32.16,1.41,4.95,.825,.679,.594],[31.39,7.88,5.5,.895,.734,.625],[9.47,7,3.92,.962,.817,.306],[12.53,-1.82,5.25,.962,.803,.281],[38.53,26.11,-3.99,.163,.35,.284],[20.18,.53,9.11,.965,.811,.29],[12.78,9.06,1.64,.255,.417,.323],[15.33,-4.76,5.6,.937,.761,.232],[24,20.52,3.53,.895,.715,.197],[11.76,1.41,5.12,.962,.811,.29],[43.38,4.94,-2.49,.181,.368,.296],[32.16,-.06,7.3,.97,.831,.332],[27.31,21.99,1.31,.674,.65,.597],[20.18,1.71,8.33,.906,.754,.249],[21.2,2.29,9.5,.962,.798,.274],[19.41,2.29,5.3,.241,.422,.335],[33.44,1.12,6.15,.95,.786,.268],[12.78,-1.23,5.39,.961,.801,.276],[28.84,-5.06,6.3,.917,.732,.601],[39.04,12.58,2.52,.951,.775,.238],[5.64,-5.94,1.02,.925,.751,.238],[33.95,4.35,6.13,.964,.808,.293],[3.6,21.11,-3.02,.656,.638,.592],[22.72,22.29,4.12,.964,.803,.276],[31.14,9.94,3.56,.684,.616,.564],[15.08,-4.47,5.73,.951,.773,.234],[20.94,-2.12,8.96,.962,.808,.287],[32.41,-4.47,6.44,.967,.809,.296],[33.69,3.76,6.21,.961,.801,.284],[24.25,6.12,6.27,.314,.411,.302],[10.23,17.88,2.51,.959,.809,.292],[37,10.23,1.59,.723,.661,.597],[33.69,6.41,6.14,.964,.811,.295],[38.28,20.82,-2.19,.202,.387,.304],[22.72,14.64,2.29,.155,.342,.276],[12.27,1.12,5.36,.964,.809,.29],[10.74,-3,4.37,.961,.806,.288],[34.97,-21.52,-2.48,.192,.373,.302],[9.97,-12.41,2,.939,.753,.227],[32.41,-.06,6.92,.961,.812,.299],[10.74,6.7,4.37,.961,.804,.281],[6.41,-.06,2.39,.957,.798,.279],[20.43,-4.47,3.82,.155,.342,.28],[22.47,19.35,4.56,.939,.764,.235],[36.5,7.29,4.37,.95,.781,.252],[4.62,-6.53,-.42,.819,.732,.645],[32.92,8.17,6.31,.968,.814,.296],[22.21,2,7.52,.733,.659,.574],[10.48,1.41,4.41,.957,.803,.282],[36.75,16.41,-0,.643,.618,.576],[7.68,8.76,2.85,.957,.812,.295],[32.16,9.94,4.65,.874,.72,.609],[37.26,24.34,-2.91,.183,.37,.298],[18.14,24.34,2.69,.951,.782,.251],[38.28,-5.94,1.18,.711,.679,.627],[22.47,12.29,2.95,.143,.334,.276],[35.98,3.76,5.14,.962,.804,.285],[5.39,11.11,.58,.914,.735,.221],[35.22,-12.99,-.77,.149,.344,.286],[18.9,12.88,2.9,.222,.401,.317],[10.74,6.41,4.32,.959,.8,.274],[24.51,-8,3.61,.198,.371,.296],[13.29,-6.53,4.75,.951,.781,.246],[10.23,16.11,2.89,.959,.811,.296],[14.05,-5.06,5.2,.948,.773,.24],[24.77,5.53,6.28,.294,.403,.298],[11.25,4.65,4.96,.967,.822,.301],[38.02,18.76,-1.41,.23,.405,.319],[21.96,21.11,4.16,.951,.779,.245],[20.68,-2.7,8.52,.95,.792,.281],[28.34,4.35,4.84,.228,.373,.29],[6.15,6.12,1.88,.943,.776,.251],[27.06,-2.7,6.02,.75,.624,.558],[14.57,-3.88,3.54,.733,.669,.588],[3.86,17.29,-2.82,.67,.646,.599],[21.45,.82,9.61,.962,.803,.281],[12.78,18.46,3.24,.959,.804,.284],[34.45,-3.29,5.47,.956,.793,.274],[11.76,-.65,5.03,.962,.808,.288],[29.86,-14.76,.28,.147,.34,.288],[20.94,21.7,3.45,.929,.748,.221],[16.09,22.29,3.2,.959,.808,.285],[33.95,12,5.08,.961,.801,.282],[34.2,12.88,4.55,.951,.782,.251],[29.86,13.47,4.6,.884,.712,.613],[6.66,-10.35,1.51,.954,.793,.273],[40.06,13.47,-.52,.686,.638,.58],[10.48,12.29,3.54,.959,.801,.279],[30.89,-3.59,6.75,.951,.771,.26],[28.34,5.82,4.51,.218,.364,.286],[24.77,-4.17,5.42,.296,.401,.304],[32.92,21.99,-.31,.257,.428,.333],[31.39,4.65,5.62,.87,.71,.607],[21.71,23.76,3.1,.943,.767,.237],[17.11,21.99,3.54,.962,.808,.288],[7.43,-10.35,1.9,.957,.8,.277],[31.91,18.46,2.31,.792,.702,.627],[20.43,3.18,9.04,.961,.793,.274],[41.85,7.29,-1.02,.637,.614,.568],[11.76,9.35,3.81,.915,.751,.234],[27.57,-9.76,2.46,.171,.358,.288],[33.69,24.64,-1.72,.21,.391,.308],[38.79,-.65,3.28,.942,.765,.24],[33.69,-15.64,-.56,.192,.371,.3],[13.8,2.29,2.15,.196,.383,.304],[17.88,-12.7,.77,.143,.336,.278],[17.88,22.58,3.33,.961,.793,.262],[38.79,7,3.35,.954,.782,.254],[28.59,12.88,4.71,.854,.673,.586],[31.14,-2.7,7.18,.961,.806,.293],[18.65,-18.58,-.79,.147,.34,.282],[41.85,13.17,-1.92,.245,.411,.313],[38.79,-.35,3.34,.945,.77,.248],[39.81,15.82,-1.43,.243,.415,.319],[35.48,2.29,5.25,.954,.792,.27],[8.96,5.23,3.77,.959,.817,.309],[14.82,-17.11,-1.28,.137,.336,.276],[13.04,.82,3.55,.762,.7,.611],[29.61,9.35,5.38,.858,.683,.58],[38.53,19.64,-1.98,.21,.391,.306],[30.37,17.88,.91,.212,.375,.296],[12.02,14.35,3.72,.957,.793,.263],[9.47,13.17,3.12,.959,.812,.299],[29.36,-6.82,3.47,.263,.399,.298],[20.68,2.29,9.54,.967,.82,.306],[20.94,3.47,9.4,.967,.804,.284],[7.43,19.35,1.17,.959,.811,.298],[8.45,-7.41,2.79,.957,.8,.284],[36.75,-2.41,4.12,.935,.765,.243],[15.33,21.7,3.3,.961,.817,.301],[21.45,-2.12,8.94,.961,.792,.262],[28.59,2.88,4.65,.194,.364,.292],[26.8,21.11,1.67,.68,.651,.597],[25.28,5.53,6.28,.296,.413,.315],[20.43,4.65,8.88,.956,.795,.276],[8.19,16.99,1.96,.959,.815,.303],[10.74,-13.58,-1.45,.167,.362,.292],[23.23,-6.82,3.8,.173,.36,.288],[21.71,-.94,9.28,.959,.792,.26],[39.81,5.53,2.03,.885,.717,.215],[6.15,7,1.78,.942,.773,.248],[28.34,-.35,4.39,.165,.346,.28],[33.69,2.88,6.19,.959,.798,.281],[15.58,21.99,3.24,.961,.814,.295],[12.53,3.76,4.47,.923,.735,.202],[33.44,-5.06,5.89,.965,.808,.298],[30.63,5.53,4.61,.723,.614,.55],[16.61,22.58,3.07,.957,.793,.263],[25.79,-4.47,5.66,.731,.608,.545],[17.62,15.52,3.97,.831,.744,.641],[12.27,12.88,1.34,.678,.636,.578],[37,17.29,-.51,.251,.422,.325],[7.43,9.94,2.62,.961,.811,.299],[19.66,-3.59,4.41,.2,.403,.327],[41.34,3.76,-.54,.637,.622,.582],[3.34,15.23,-2.67,.674,.651,.603],[27.57,-8.29,3.09,.192,.37,.298],[3.6,-8.58,-2.09,.686,.663,.619],[7.43,-8,2.21,.957,.797,.279],[14.05,13.76,.85,.192,.381,.308],[32.67,5.82,5.72,.946,.731,.208],[16.35,-19.17,-1.49,.139,.336,.276],[43.12,-3.88,-2.57,.171,.366,.294],[11,24.05,1.27,.957,.803,.281],[31.14,21.99,.33,.645,.622,.58],[8.96,5.23,3.77,.959,.817,.309],[37,-10.35,1.88,.815,.74,.65],[6.41,2.88,2.39,.957,.797,.274],[32.92,4.35,4.78,.856,.699,.592],[23.75,19.93,4.95,.965,.804,.271],[11.25,-.65,4.74,.959,.804,.285],[30.63,-5.64,5.7,.937,.704,.19],[12.53,8.17,4.67,.95,.775,.246],[15.58,-4.17,5.92,.95,.767,.237],[7.43,-15.93,-1.65,.703,.655,.599],[34.45,15.52,3.93,.957,.784,.251],[20.68,3.47,9.4,.97,.814,.292],[26.55,11.7,3.94,.288,.391,.292],[11,-4.76,4.27,.961,.803,.284],[8.45,1.71,3.67,.964,.82,.314],[37.77,.24,1.92,.723,.677,.623],[33.44,-4.76,5.84,.959,.801,.295],[9.47,7.59,3.87,.962,.817,.306],[9.72,-10.94,2.2,.932,.756,.23],[21.45,3.18,8.76,.907,.742,.238],[32.92,17.58,2.9,.887,.707,.216],[13.29,-1.82,5.61,.964,.803,.276],[12.27,-4.76,4.77,.957,.797,.273],[26.8,10.53,4.81,.727,.606,.546],[30.37,-7.11,2.68,.206,.373,.294],[6.15,-10.35,.93,.94,.767,.245],[40.06,12.29,1.86,.937,.757,.221],[27.31,-18.87,-.18,.194,.371,.3],[7.94,18.17,1.6,.959,.811,.298],[19.16,15.52,6.02,.965,.819,.298],[35.22,16.41,1.64,.782,.693,.607],[9.21,-9.47,2.44,.943,.771,.248],[39.3,-.35,2.04,.827,.742,.646],[34.71,17.88,.49,.652,.624,.576],[25.02,6.12,6.43,.684,.614,.566],[39.3,.82,2.52,.896,.729,.224],[8.45,20.82,1.25,.959,.811,.296],[27.06,-8.58,2.96,.179,.36,.292],[20.94,-5.06,3.82,.157,.346,.28],[24.25,4.06,6.81,.294,.401,.3],[30.12,-16.23,-.12,.159,.348,.288],[35.22,7,5.24,.961,.8,.277],[40.32,-18.87,-2.58,.623,.638,.615],[19.66,-.94,5.52,.637,.624,.592],[38.28,.24,1.74,.739,.681,.619],[8.96,16.99,2.29,.961,.815,.307],[18.9,-8.58,2.3,.159,.344,.28],[40.06,6.7,1.11,.788,.704,.619],[18.65,17.29,5.46,.965,.823,.309],[19.92,25.23,1.75,.895,.715,.208],[12.27,2.29,5.39,.965,.812,.288],[36.5,3.47,4.84,.961,.798,.279],[27.06,-2.41,6.35,.786,.64,.564],[11.76,-9.17,2.04,.778,.712,.621],[17.11,21.11,3.87,.961,.814,.298],[32.67,-2.7,6.24,.95,.786,.268],[15.08,16.11,2.66,.79,.71,.621],[36.24,-7.11,3.84,.939,.77,.248],[13.04,-5.64,4.91,.957,.792,.263],[13.54,2.88,2.2,.218,.399,.313],[29.86,-2.12,4.92,.723,.62,.556],[7.43,10.53,2.6,.961,.814,.303],[39.81,5.23,1.88,.848,.751,.641],[29.36,-5.64,6.22,.945,.709,.187],[30.63,5.53,4.61,.723,.614,.55],[30.12,9.06,4.1,.701,.606,.546],[19.92,4.35,5.56,.261,.434,.343],[24.25,-5.94,4.09,.173,.358,.288],[33.69,9.94,5.53,.959,.801,.281],[14.82,16.7,4.46,.967,.814,.29],[34.71,-2.12,5.35,.95,.784,.26],[9.47,-5.94,3.47,.959,.804,.292],[33.18,20.23,.23,.635,.616,.574],[27.83,13.76,3.12,.286,.397,.298],[13.8,18.17,3.74,.961,.812,.298],[18.9,9.35,3.55,.192,.381,.308],[30.63,5.82,5.97,.886,.718,.607],[27.06,-3.29,6.06,.77,.638,.566],[29.86,-.35,4.96,.703,.608,.55],[22.72,.53,8.61,.839,.738,.629],[38.79,9.35,3.16,.954,.784,.256],[11.5,-6.53,4.22,.959,.798,.274],[40.06,5.23,.72,.729,.671,.607],[8.7,-18.29,-1.24,.774,.683,.603],[36.24,.24,5.05,.962,.804,.288],[30.89,19.05,1.98,.75,.669,.599],[11.76,-1.23,5.02,.962,.811,.295],[27.83,10.23,6.19,.899,.724,.613],[13.54,-1.53,4.57,.874,.723,.223],[23.75,21.7,4.2,.961,.792,.257],[17.88,16.7,5.24,.962,.808,.284],[13.29,-7.11,4.56,.942,.775,.249],[26.8,14.35,2.46,.185,.358,.282],[29.86,-6.23,5.89,.939,.709,.183],[12.02,12,.63,.222,.403,.317],[33.44,-.06,6.01,.945,.779,.26],[7.43,-1.82,3.13,.964,.825,.318],[13.04,3.76,2.45,.648,.614,.558],[39.81,11.11,2.52,.956,.786,.254],[11.5,14.94,3.45,.959,.797,.274],[19.41,23.76,2.98,.946,.776,.248],[34.71,11.11,4.67,.951,.782,.254],[35.48,-.35,5.27,.957,.797,.279],[40.83,-12.7,-1.46,.639,.642,.611],[10.23,-8,3.1,.945,.771,.245],[15.84,-3.88,3.18,.265,.42,.319],[32.16,-4.47,6.1,.929,.781,.279],[6.15,-.94,2.05,.95,.784,.263],[29.1,12.88,4.9,.882,.702,.605],[11,-10.35,2.11,.848,.755,.643],[31.14,-.94,6.93,.931,.773,.27],[17.62,2.29,3.65,.171,.356,.286],[19.66,19.64,4.62,.959,.8,.273],[11.5,5.82,4.84,.964,.809,.279],[33.69,5.53,6.03,.959,.797,.274],[42.87,-7.41,-2.79,.167,.364,.294],[37.26,2.88,2.04,.719,.663,.605],[12.53,8.17,4.67,.95,.775,.246],[42.11,-17.7,-3.56,.208,.411,.339],[18.9,19.64,4.66,.962,.812,.292],[19.66,6.7,4.86,.235,.419,.337],[16.86,23.17,2.97,.959,.797,.265],[28.84,-3,6.41,.882,.704,.597],[5.13,-11.23,-.36,.885,.715,.219],[25.28,12,3.26,.169,.346,.276],[36.75,-7.11,3.08,.896,.732,.229],[8.7,11.41,3.06,.961,.814,.303],[8.45,-10.64,2.05,.948,.782,.257],[7.43,-3.59,2.9,.964,.815,.303],[28.59,-5.06,5.98,.882,.699,.586],[3.86,24.64,-3.24,.635,.622,.578],[14.82,-15.64,-.89,.139,.336,.276],[13.8,-2.7,4.87,.896,.743,.234],[37,11.11,1.37,.713,.655,.594],[29.1,-5.94,6.12,.935,.701,.18],[31.91,12,2.7,.676,.6,.55],[24.77,-8,3.57,.194,.37,.296],[25.28,19.64,2.08,.684,.628,.568],[4.62,-2.12,-.19,.811,.724,.639],[12.78,2.88,2.66,.684,.638,.568],[13.54,20.23,3.15,.959,.814,.298],[35.48,13.76,4.12,.962,.8,.274],[18.9,25.23,2.35,.942,.768,.24],[32.41,5.23,5.92,.943,.734,.215],[25.28,11.11,3.68,.19,.356,.28],[12.53,1.12,5.41,.964,.804,.277],[37,11.41,1.31,.711,.653,.592],[10.48,11.11,3.7,.957,.8,.274],[38.79,-3,2.11,.825,.74,.65],[22.21,22.87,3.76,.959,.79,.26],[10.48,-10.05,2.59,.928,.751,.226],[35.98,-6.82,4.35,.959,.795,.274],[18.9,-.94,4.73,.224,.413,.337],[32.67,1.41,5.7,.89,.729,.232],[37.52,-9.17,1.21,.729,.691,.637],[6.66,16.11,1.26,.954,.797,.276],[15.08,21.11,3.42,.961,.819,.304],[21.96,13.76,2.56,.161,.346,.276],[16.61,-4.76,2.53,.169,.358,.29],[29.36,23.76,.13,.639,.624,.586],[31.14,1.71,5.19,.799,.655,.58],[32.92,-20.93,-2.2,.145,.342,.288],[13.29,-7.11,4.56,.942,.775,.249],[11,3.47,4.69,.962,.806,.285],[21.71,21.99,3.71,.945,.768,.235],[36.75,-5.94,3.53,.917,.753,.24],[16.61,1.12,3.27,.179,.366,.294],[8.19,19.35,1.44,.957,.809,.296],[28.59,20.52,1.62,.68,.651,.601],[40.32,-10.35,-.65,.664,.657,.617],[22.21,-.94,9.41,.956,.787,.259],[28.84,-5.94,6.04,.913,.728,.597],[38.02,-8.29,1,.713,.681,.629],[22.21,2,7.52,.733,.659,.574],[34.2,3.76,6.04,.964,.806,.295],[13.04,6.41,1.86,.23,.405,.313],[27.57,10.53,5.65,.858,.675,.586],[35.22,6.41,5.3,.961,.8,.277],[11,-4.17,4.43,.962,.809,.295],[29.1,1.12,5.44,.715,.606,.552],[39.04,-9.17,.38,.703,.677,.635],[35.48,6.12,5.27,.964,.804,.284],[8.7,.82,3.76,.964,.819,.315],[25.79,.24,5.74,.186,.356,.282],[27.06,1.41,5.41,.202,.366,.286],[37.77,-1.82,1.84,.721,.681,.627],[8.19,13.76,2.48,.959,.812,.301],[12.02,3.76,4.2,.909,.737,.215],[19.16,19.93,4.63,.962,.814,.299],[34.97,8.17,5.11,.956,.792,.27],[31.65,4.65,6.04,.925,.712,.212],[32.67,-.35,6.52,.953,.792,.273],[7.17,-14.17,.78,.942,.77,.245],[22.21,1.12,9.82,.959,.789,.26],[41.85,-3,-.97,.621,.622,.588],[29.61,4.06,5.11,.707,.604,.55],[35.98,.24,5.1,.959,.8,.284],[33.18,21.7,-.32,.255,.426,.331],[32.92,13.17,1.37,.22,.377,.288],[6.15,8.76,1.67,.943,.775,.249],[7.43,4.94,3.08,.962,.817,.306],[9.97,22.87,1.28,.959,.808,.29],[41.85,18.46,-3.48,.165,.354,.286],[39.81,12.29,2.2,.95,.773,.237],[3.34,-17.11,-3.02,.643,.642,.607],[11.5,9.94,4.18,.957,.79,.259],[8.19,4.65,3.5,.964,.82,.314],[21.71,15.82,2,.177,.356,.284],[22.47,.82,9.78,.956,.779,.249],[28.84,12,4.98,.862,.681,.592],[13.29,15.23,.82,.269,.422,.321],[31.65,3.76,5.16,.825,.677,.592],[20.18,25.81,.88,.805,.704,.617],[12.27,25.52,1.05,.951,.787,.254],[12.53,14.64,3.76,.953,.787,.259],[14.05,23.46,2.41,.961,.811,.292],[6.41,19.64,.36,.946,.784,.257],[9.72,9.64,3.64,.961,.806,.285],[13.8,-5.06,5.07,.946,.773,.24],[22.98,2,6.48,.212,.37,.29],[13.04,3.76,2.45,.648,.614,.558],[17.62,11.41,2.19,.157,.342,.28],[40.32,-12.11,-.96,.664,.655,.621],[12.78,7.59,2.48,.688,.65,.582],[24.25,20.82,3.53,.903,.721,.202],[8.96,.53,3.83,.962,.815,.306],[34.45,19.64,-.04,.271,.43,.335],[42.11,9.64,-1.23,.658,.618,.564],[32.92,4.06,4.68,.839,.691,.59],[38.02,-8,1.07,.717,.683,.631],[13.29,4.35,2.36,.267,.419,.319],[36.5,-1.82,4.7,.961,.797,.271],[4.11,-20.64,-3.26,.617,.624,.592],[22.47,18.76,4.31,.904,.734,.216],[32.41,12.29,1.77,.214,.381,.296],[42.61,7.88,-2.31,.177,.366,.292],[12.53,6.7,4.63,.925,.765,.246],[41.09,7.29,-.54,.65,.624,.578],[17.62,-10.35,1.45,.157,.342,.278],[4.62,-2.41,-.18,.813,.726,.641],[11.5,.82,4.96,.962,.808,.287],[28.08,10.82,5.79,.892,.704,.601],[36.75,-5.64,3.57,.917,.753,.238],[43.38,-14.46,-4.03,.169,.362,.296],[27.83,-5.64,6.51,.929,.698,.179],[16.86,26.11,2.04,.956,.792,.26],[7.43,-.06,3.13,.962,.819,.315],[12.53,22.58,2.16,.959,.808,.288],[8.45,12.88,2.72,.959,.814,.301],[28.08,22.29,1.02,.668,.64,.594],[34.2,1.12,5.6,.94,.773,.252],[14.82,-1.53,2.41,.19,.377,.3],[5.64,19.35,-.52,.914,.737,.223],[33.18,8.17,5.97,.959,.797,.27],[12.27,5.53,3.81,.858,.75,.629],[39.04,8.76,3.22,.957,.793,.262],[5.39,19.05,-.83,.893,.72,.215],[39.55,7,3.02,.956,.784,.254],[33.95,-3.29,5.98,.964,.815,.306],[34.45,21.7,-.84,.239,.413,.323],[20.18,21.11,3.74,.937,.762,.234],[10.48,9.06,4,.961,.803,.274],[4.62,-13.29,-1.53,.794,.714,.633],[20.94,-.94,9.15,.962,.803,.282],[21.96,-1.23,9.16,.951,.782,.249],[6.41,8.76,1.95,.95,.787,.263],[33.69,1.41,5.96,.945,.782,.263],[34.45,25.52,-2.28,.196,.383,.302],[6.15,-.06,2.12,.953,.787,.263],[37.26,-10.64,.87,.717,.675,.621],[31.39,.82,6.18,.903,.712,.219],[35.48,-8,3.08,.835,.751,.66],[3.34,-2.7,-1.76,.684,.659,.613],[37,19.35,-1.13,.235,.409,.317],[8.45,-10.05,2.12,.945,.779,.256],[8.7,21.7,1.13,.959,.809,.293],[27.31,3.18,5.09,.181,.354,.282],[14.31,18.17,3.91,.961,.812,.299],[15.08,25.23,2.06,.961,.803,.276],[13.04,6.7,1.81,.226,.405,.315],[30.12,11.41,4.93,.886,.697,.595],[26.04,4.65,5.96,.259,.387,.296],[7.17,1.71,3.06,.965,.82,.309],[24.51,23.17,2.49,.858,.746,.637],[15.08,19.05,4,.962,.82,.312],[8.96,2.29,3.92,.965,.822,.312],[34.2,9.64,5.31,.957,.797,.273],[25.53,-2.7,5.57,.265,.389,.294],[32.92,-.35,6.29,.948,.782,.265],[35.73,-6.53,4.55,.959,.798,.276],[38.28,-1.53,1.62,.727,.681,.619],[11.76,6.41,4.87,.964,.806,.273],[37,-.94,2.89,.805,.726,.639],[34.2,12.29,4.62,.95,.779,.249],[5.89,10.82,1.24,.94,.767,.235],[33.18,-4.47,5.93,.957,.795,.279],[9.47,5.82,3.81,.956,.804,.288],[34.71,-4.76,5.05,.951,.784,.263],[32.67,-5.64,2.19,.212,.379,.3],[34.71,-7.11,1.1,.222,.377,.286],[32.67,-10.94,.84,.181,.366,.296],[19.92,6.41,5.23,.259,.434,.347],[32.67,10.53,4.73,.882,.726,.224],[29.1,1.71,4.71,.245,.379,.294],[9.72,8.47,3.84,.961,.812,.296],[22.72,1.12,7.6,.729,.65,.566],[11.76,-2.12,5.03,.962,.815,.303],[22.47,-1.53,9.02,.932,.767,.248],[30.12,8.47,4.55,.717,.64,.582],[13.04,16.99,3.53,.956,.793,.268],[14.31,6.41,1.98,.179,.368,.296],[16.09,18.17,4.57,.961,.825,.315],[11.25,-9.17,3.15,.935,.757,.229],[6.41,9.35,1.88,.95,.786,.263],[13.29,17.58,3.53,.957,.797,.273],[25.28,24.34,.45,.65,.632,.588],[6.41,-.35,2.4,.959,.8,.279],[9.21,-.06,3.96,.962,.817,.309],[24.77,9.64,4.82,.271,.397,.298],[6.91,21.4,.37,.956,.795,.274],[35.73,7.29,5.19,.964,.817,.301],[33.44,10.82,5.48,.961,.8,.277],[15.84,-1.23,2.81,.181,.37,.298],[42.36,1.12,-1.46,.226,.409,.325],[23.75,8.76,5.39,.314,.411,.302],[7.68,14.64,2.15,.961,.814,.306],[6.41,-19.76,-1.54,.848,.742,.641],[3.86,5.53,-1.54,.68,.653,.601],[22.21,-1.53,9.32,.965,.792,.256],[6.91,18.17,1.05,.956,.8,.281],[23.49,4.65,6.52,.285,.399,.3],[13.29,24.05,1.85,.956,.797,.27],[26.04,4.06,5.87,.23,.375,.288],[42.61,-15.64,-3.81,.173,.373,.306],[33.95,8.17,5.77,.951,.811,.306],[25.02,23.46,1.08,.694,.653,.594],[6.41,23.76,-.55,.94,.77,.241],[10.48,7.88,4.2,.962,.809,.287],[10.23,17.29,2.61,.957,.808,.293],[13.8,24.34,2.05,.961,.808,.285],[14.57,-3.59,2.5,.241,.409,.317],[26.8,5.53,5.3,.224,.379,.292],[34.45,11.7,4.79,.956,.792,.263],[31.14,-9.76,1.81,.202,.377,.302],[14.05,19.35,3.55,.961,.815,.303],[9.21,-14.76,-.17,.788,.691,.609],[5.89,10.53,1.22,.935,.762,.235],[41.59,-8.88,-1.46,.615,.622,.594],[32.16,1.12,4.71,.794,.661,.584],[12.02,-5.94,4.57,.961,.801,.281],[38.79,-18.87,-1.83,.645,.653,.625],[31.91,11.7,3.38,.758,.642,.574],[30.37,-15.35,.01,.147,.342,.288],[21.71,7.88,4.2,.141,.334,.278],[38.53,8.17,2.55,.898,.724,.215],[23.23,9.64,4.8,.271,.393,.298],[19.92,2.88,5.72,.629,.612,.578],[12.02,17.58,3.18,.961,.804,.285],[30.12,2.59,6.5,.884,.718,.643],[20.43,2.88,9.23,.968,.806,.288],[38.79,-3.59,1.75,.786,.718,.641],[9.72,-6.23,3.57,.961,.806,.288],[25.53,6.12,6.16,.692,.593,.535],[30.12,11.11,5.45,.929,.698,.188],[19.41,12.88,2.38,.163,.346,.276],[17.11,15.82,2.84,.731,.671,.603],[18.65,22.29,3.49,.956,.789,.259],[32.67,9.64,4.73,.837,.759,.672],[40.83,12.58,-1.15,.271,.428,.325],[7.43,-16.23,-2.06,.654,.632,.588],[5.13,2.29,.72,.89,.721,.221],[11.76,9.35,3.81,.915,.751,.234],[20.94,1.71,9.52,.964,.809,.29],[31.65,18.46,2.45,.805,.706,.621],[37.77,6.12,1.61,.705,.661,.607],[5.89,.24,1.8,.943,.773,.249],[34.97,4.65,5.49,.957,.797,.274],[36.75,7.59,3.45,.896,.728,.221],[28.84,-20.64,-1.34,.149,.342,.284],[7.68,-8.58,2.2,.954,.793,.273],[33.44,.53,6.06,.945,.781,.263],[12.27,2,5.32,.964,.806,.281],[22.47,.53,9.78,.957,.782,.254],[17.37,15.52,3.43,.78,.704,.627],[6.15,7.59,1.79,.943,.776,.249],[30.37,23.46,-.07,.625,.616,.576],[20.68,4.94,7.4,.811,.732,.637],[24.25,2.88,6.84,.239,.383,.292],[29.86,14.35,3.59,.811,.648,.568],[42.87,-15.64,-4.07,.163,.358,.294],[38.79,-10.35,.33,.707,.679,.637],[34.71,-2.41,5.32,.95,.786,.262],[22.72,3.18,6.26,.22,.37,.288],[4.36,-8,-1.13,.77,.697,.627],[19.66,18.76,5.02,.964,.808,.285],[38.28,-4.47,1.37,.715,.681,.629],[21.96,19.05,4.39,.928,.746,.219],[15.33,-4.76,5.6,.937,.761,.232],[35.48,12.29,4.51,.965,.809,.293],[14.31,-8.29,.96,.169,.358,.292],[37.77,-13.29,.26,.713,.685,.641],[15.84,17.88,4.56,.962,.822,.309],[43.38,5.53,-2.49,.183,.37,.296],[8.45,-18.58,-1.11,.805,.704,.615],[12.27,4.65,4.1,.895,.724,.208],[35.98,-7.41,3.79,.931,.761,.241],[13.04,1.41,2.62,.662,.624,.568],[32.41,8.47,4.56,.876,.693,.576],[10.74,11.7,3.72,.959,.8,.274],[32.41,15.52,1.14,.228,.389,.302],[38.28,-3.59,1.35,.707,.671,.621],[4.36,7.88,-.79,.764,.695,.625],[8.7,3.76,3.77,.962,.82,.317],[9.97,4.35,4.24,.961,.812,.296],[7.43,1.71,3.21,.965,.823,.314],[8.45,-7.7,2.7,.956,.797,.277],[6.15,-18.58,-2.89,.672,.642,.595],[29.86,7.29,5.27,.833,.64,.558]];function z8(){const t=he.useRef(null);return he.useEffect(()=>{const e=t.current;if(!e)return;const n=new U8;n.fog=new Ku(1973794,.003);const i=new gn(55,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=82;const r=new D8({antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setClearColor(1973794,1),e.appendChild(r.domElement);const s=3200,o=Math.min(Oh.length,2500),a=new pi,l=new Float32Array(s*3),c=new Float32Array(s*3),u=new Float32Array(s*3),h=new Float32Array(s*3),f=new Float32Array(s*3),m=new Float32Array(s*3),x=new Float32Array(s*3);new Xe(16043541),new Xe(3643255),new Xe(15790832);const _=new Xe(5396052);for(let H=0;H<s;H++){const O=H*3;if(H<o){const[ue,ve,L,_e,Ce,we]=Oh[H];c[O]=ue,c[O+1]=ve,c[O+2]=L,x[O]=_e*.9,x[O+1]=Ce*.9,x[O+2]=we*.9}else{const ue=Math.random()*Math.PI*2,ve=Math.acos(Math.random()*2-1),L=55+Math.random()*35,_e=L*Math.sin(ve)*Math.cos(ue);c[O]=_e>-15&&_e<10?_e<0?_e-25:_e+25:_e,c[O+1]=L*Math.sin(ve)*Math.sin(ue)*.7,c[O+2]=-20+(Math.random()-.5)*40,x[O]=_.r*.6,x[O+1]=_.g*.6,x[O+2]=_.b*.6}l[O]=c[O],l[O+1]=c[O+1],l[O+2]=c[O+2];const V=H/s*Math.PI*18+Math.random()*.4,J=10+H/s*36;u[O]=Math.cos(V)*J*1.25,u[O+1]=Math.sin(V)*J*.6+(Math.random()-.5)*5,u[O+2]=(H/s-.5)*35;const X=(Math.random()-.5)*Math.PI,$=Math.random()*Math.PI*2,D=25,R=Math.random()<.45?Math.round(X*4)/4:X;h[O]=D*Math.cos(R)*Math.sin($),h[O+1]=D*Math.sin(R),h[O+2]=D*Math.cos(R)*Math.cos($);const j=6+H%5*8,ae=Math.random()*Math.PI*2;f[O]=Math.cos(ae)*j+(Math.random()-.5)*1.5,f[O+1]=Math.sin(ae)*j*.45+(Math.random()-.5)*1.5,f[O+2]=(Math.random()-.5)*5;const k=64,K=Math.floor(H/k),te=H%k,Q=120,fe=70;m[O]=(te/k-.5)*Q,m[O+1]=-14+(Math.random()-.5)*3,m[O+2]=(K/(s/k)-.5)*fe}a.setAttribute("position",new yn(l,3)),a.setAttribute("color",new yn(x,3));const p=document.createElement("canvas");p.width=32,p.height=32;const d=p.getContext("2d"),v=d.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,0.95)"),v.addColorStop(.3,"rgba(255,255,255,0.6)"),v.addColorStop(.7,"rgba(255,255,255,0.15)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,32,32);const g=new O8(p),M=new R1({size:1.4,map:g,vertexColors:!0,transparent:!0,opacity:.65,blending:V0,depthWrite:!1}),N=new F8(a,M);n.add(N);const A={x:0,y:0,targetX:0,targetY:0},b=H=>{A.targetX=(H.clientX/window.innerWidth-.5)*2,A.targetY=-(H.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",b);const U=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",U);let T=new k8,y;const I=()=>{const H=T.getElapsedTime();A.x+=(A.targetX-A.x)*.05,A.y+=(A.targetY-A.y)*.05,i.position.x=A.x*4,i.position.y=A.y*3,i.lookAt(0,0,0);const O=document.documentElement.scrollHeight-window.innerHeight,V=O>0?Math.min(Math.max(window.scrollY/O,0),1):0,J=a.attributes.position.array;for(let X=0;X<s;X++){const $=X*3;let D=0,W=0,R=0;if(V<.18){const j=V/.18;let ae=c[$],k=c[$+1],K=c[$+2];if(X<o){const te=A.x*.28,Q=-A.y*.2,fe=Math.cos(te),ue=Math.sin(te),ve=Math.cos(Q),L=Math.sin(Q),_e=ae-24,Ce=k-2,we=K,Ee=_e*fe+we*ue,De=-_e*ue+we*fe,Ne=Ce*ve-De*L,Le=Ce*L+De*ve;ae=24+Ee,k=2+Ne,K=Le}D=ae*(1-j)+u[$]*j,W=k*(1-j)+u[$+1]*j,R=K*(1-j)+u[$+2]*j}else if(V<.4){const j=(V-.18)/.22;D=u[$]*(1-j)+h[$]*j,W=u[$+1]*(1-j)+h[$+1]*j,R=u[$+2]*(1-j)+h[$+2]*j}else if(V<.65){const j=(V-.4)/.25;D=h[$]*(1-j)+f[$]*j,W=f[$+1]*(1-j)+f[$+1]*j,R=h[$+2]*(1-j)+f[$+2]*j}else{const j=Math.min((V-.65)/.35,1);D=f[$]*(1-j)+m[$]*j,W=f[$+1]*(1-j)+(m[$+1]+Math.sin(H*1.5+m[$]*.1)*3.5)*j,R=f[$+2]*(1-j)+(m[$+2]+Math.cos(H*1.2+m[$]*.08)*2.5)*j}const C=Math.sin(H*.7+X*.1)*.12;J[$]+=(D+C-J[$])*.09,J[$+1]+=(W+C-J[$+1])*.09,J[$+2]+=(R+C-J[$+2])*.09}a.attributes.position.needsUpdate=!0,V>=.2&&V<.52?(N.rotation.y=H*.22,N.rotation.x=.22):(N.rotation.y=H*.02,N.rotation.x=Math.sin(H*.04)*.05),r.render(n,i),y=requestAnimationFrame(I)};return I(),()=>{cancelAnimationFrame(y),window.removeEventListener("mousemove",b),window.removeEventListener("resize",U),e&&r.domElement&&e.removeChild(r.domElement),a.dispose(),M.dispose(),g.dispose(),r.dispose()}},[]),S.jsx("div",{ref:t,"aria-hidden":"true",className:"fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"})}function B8(){return S.jsx("div",{"aria-hidden":"true",className:"noise-layer"})}let jr=null,rr=!1,Qn=null,js=null;function qc(){if(!jr&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(jr=new t)}return jr&&jr.state==="suspended"&&jr.resume(),jr}const Q0={isEnabled:()=>rr,toggle:()=>{rr=!rr;const t=qc();if(!t)return!1;if(rr)try{Qn=t.createOscillator(),js=t.createGain(),Qn.type="sine",Qn.frequency.setValueAtTime(55,t.currentTime),js.gain.setValueAtTime(.015,t.currentTime),Qn.connect(js),js.connect(t.destination),Qn.start()}catch(e){console.warn("Audio startup",e)}else if(Qn)try{js.gain.linearRampToValueAtTime(1e-4,t.currentTime+.3),setTimeout(()=>{Qn.stop(),Qn.disconnect(),Qn=null},350)}catch{}return rr},click:()=>{if(!rr)return;const t=qc();if(t)try{const e=t.createOscillator(),n=t.createGain();e.type="triangle",e.frequency.setValueAtTime(800,t.currentTime),e.frequency.exponentialRampToValueAtTime(140,t.currentTime+.04),n.gain.setValueAtTime(.04,t.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.04),e.connect(n),n.connect(t.destination),e.start(),e.stop(t.currentTime+.04)}catch{}},hover:()=>{if(!rr)return;const t=qc();if(t)try{const e=t.createOscillator(),n=t.createGain();e.type="sine",e.frequency.setValueAtTime(440,t.currentTime),e.frequency.exponentialRampToValueAtTime(880,t.currentTime+.06),n.gain.setValueAtTime(.015,t.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.06),e.connect(n),n.connect(t.destination),e.start(),e.stop(t.currentTime+.06)}catch{}}};function H8(){const[t,e]=he.useState({x:-100,y:-100}),[n,i]=he.useState({x:-100,y:-100}),[r,s]=he.useState(!1),[o,a]=he.useState(!1),[l,c]=he.useState(!1),u=he.useRef(null),h=he.useRef({x:-100,y:-100,magneticTarget:null});return he.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const m=A=>{h.current.x=A.clientX,h.current.y=A.clientY,h.current.magneticTarget||i({x:A.clientX,y:A.clientY}),l||c(!0)},x=()=>{a(!0),Q0.click()},_=()=>a(!1),p=()=>c(!1);window.addEventListener("mousemove",m),window.addEventListener("mousedown",x),window.addEventListener("mouseup",_),document.documentElement.addEventListener("mouseleave",p);const d=()=>{const A=document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive'),b=[],U=[],T=[];return A.forEach(y=>{const I=()=>{s(!0),Q0.hover()},H=V=>{const J=y.getBoundingClientRect(),X=J.left+J.width/2,$=J.top+J.height/2,D=.35,W=V.clientX+(X-V.clientX)*D,R=V.clientY+($-V.clientY)*D;h.current.magneticTarget={x:W,y:R},i({x:W,y:R})},O=()=>{s(!1),h.current.magneticTarget=null,i({x:h.current.x,y:h.current.y})};y.addEventListener("mouseenter",I),y.addEventListener("mousemove",H),y.addEventListener("mouseleave",O),b.push({el:y,onEnter:I}),T.push({el:y,onMove:H}),U.push({el:y,onLeave:O})}),()=>{b.forEach(({el:y,onEnter:I})=>y.removeEventListener("mouseenter",I)),T.forEach(({el:y,onMove:I})=>y.removeEventListener("mousemove",I)),U.forEach(({el:y,onLeave:I})=>y.removeEventListener("mouseleave",I))}},v=d(),g=setInterval(d,2500),M=(A,b,U)=>A+(b-A)*U,N=()=>{e(A=>({x:M(A.x,n.x,.22),y:M(A.y,n.y,.22)})),u.current=requestAnimationFrame(N)};return u.current=requestAnimationFrame(N),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mousedown",x),window.removeEventListener("mouseup",_),document.documentElement.removeEventListener("mouseleave",p),cancelAnimationFrame(u.current),clearInterval(g),v()}},[n,l]),l?S.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300",children:[S.jsx("div",{className:`fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${r?"w-14 h-14 -mt-7 -ml-7 border-[#f4ce15] bg-[#f4ce15]/10 backdrop-blur-[1px] shadow-[0_0_15px_rgba(244,206,21,0.3)]":o?"w-6 h-6 -mt-3 -ml-3 border-[#f4ce15] bg-[#f4ce15]/30":"w-8 h-8 -mt-4 -ml-4 border-[#f0f2f0]/30 bg-transparent"}`,style:{transform:`translate3d(${t.x}px, ${t.y}px, 0)`}}),S.jsx("div",{className:`fixed top-0 left-0 w-1.5 h-1.5 -mt-[3px] -ml-[3px] rounded-full transition-transform duration-100 ease-out will-change-transform ${r?"bg-[#f4ce15] scale-150":"bg-[#f0f2f0]"}`,style:{transform:`translate3d(${n.x}px, ${n.y}px, 0)`}})]}):null}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P1=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=he.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>he.createElement("svg",{ref:l,...G8,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:P1("lucide",r),...a},[...o.map(([c,u])=>he.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(t,e)=>{const n=he.forwardRef(({className:i,...r},s)=>he.createElement(W8,{ref:s,iconNode:e,className:P1(`lucide-${V8(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=at("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=at("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=at("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=at("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=at("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=at("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=at("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=at("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=at("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=at("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=at("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=at("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=at("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=at("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=at("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=at("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=at("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=at("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=at("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=at("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=at("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=at("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=at("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=at("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=at("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function fx({onOpenTerminal:t}){const[e,n]=he.useState(!1),[i,r]=he.useState(!1),[s,o]=he.useState(60);he.useEffect(()=>{const l=()=>{n(window.scrollY>40)};window.addEventListener("scroll",l,{passive:!0});let c=0,u=performance.now(),h;const f=()=>{c++;const m=performance.now();m-u>=1e3&&(o(Math.min(Math.round(c*1e3/(m-u)),60)),c=0,u=m),h=requestAnimationFrame(f)};return h=requestAnimationFrame(f),()=>{window.removeEventListener("scroll",l),cancelAnimationFrame(h)}},[]);const a=()=>{const l=Q0.toggle();r(l)};return S.jsx("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${e?"py-3.5 bg-[#1e1e22]/85 backdrop-blur-md border-b border-[#f0f2f0]/10 shadow-lg shadow-black/25":"py-6 bg-transparent"}`,children:S.jsxs("div",{className:"w-[92vw] max-w-7xl mx-auto flex items-center justify-between",children:[S.jsxs("a",{href:"#hero",className:"group flex items-center gap-2.5 text-[#f0f2f0] no-underline font-medium text-sm tracking-tight transition-colors duration-200",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#f4ce15] group-hover:scale-125 transition-transform duration-300"}),S.jsx("span",{className:"font-sans font-semibold tracking-wider uppercase text-xs sm:text-sm",children:"Augastin K Lazar"})]}),S.jsxs("div",{className:"hidden lg:flex items-center gap-3 px-3 py-1 rounded-full bg-[#26262b]/80 border border-[#f0f2f0]/10 text-xs text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsxs("span",{className:"relative flex h-2 w-2",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#379777] opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#379777]"})]}),S.jsx("span",{className:"text-[#f0f2f0] font-mono text-[11px]",children:"ETO Cadet · MOL LNG Fleet"})]}),S.jsx("span",{className:"text-[#8b8f8c]/40 font-mono",children:"|"}),S.jsxs("div",{className:"flex items-center gap-1 text-[10px] font-mono text-[#379777]",children:[S.jsx(j8,{className:"w-3 h-3 text-[#379777]"}),S.jsxs("span",{children:[s," FPS · 16ms"]})]})]}),S.jsxs("nav",{className:"flex items-center gap-3 sm:gap-5 text-xs sm:text-sm",children:[S.jsx("a",{href:"#statement",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden sm:inline",children:"Vision"}),S.jsx("a",{href:"#fleet",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden sm:inline",children:"Fleet"}),S.jsx("a",{href:"#origins",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden md:inline",children:"Origins"}),S.jsx("a",{href:"#works",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px]",children:"Works"}),S.jsx("a",{href:"#capabilities",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden lg:inline",children:"Systems"}),S.jsx("a",{href:"#contact",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px]",children:"Contact"}),S.jsx("button",{onClick:a,"aria-label":i?"Mute sound synthesis":"Enable ambient sound synthesis",className:`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono text-xs transition-all duration-200 ${i?"bg-[#f4ce15]/10 border-[#f4ce15] text-[#f4ce15]":"bg-[#26262b] border-[#f0f2f0]/15 text-[#8b8f8c] hover:text-[#f0f2f0]"}`,children:i?S.jsxs(S.Fragment,{children:[S.jsx(ox,{className:"w-3.5 h-3.5 text-[#f4ce15]"}),S.jsxs("span",{className:"flex items-end gap-0.5 h-3",children:[S.jsx("span",{className:"w-0.5 h-3 bg-[#f4ce15] animate-pulse"}),S.jsx("span",{className:"w-0.5 h-1.5 bg-[#f4ce15] animate-pulse delay-75"}),S.jsx("span",{className:"w-0.5 h-2 bg-[#f4ce15] animate-pulse delay-150"})]})]}):S.jsxs(S.Fragment,{children:[S.jsx(ax,{className:"w-3.5 h-3.5"}),S.jsx("span",{className:"hidden sm:inline text-[10px]",children:"SOUND"})]})}),S.jsxs("button",{onClick:t,"aria-label":"Open Interactive CLI Terminal",className:"flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 hover:border-[#f4ce15]/50 text-[#f4ce15] font-mono text-xs transition-all duration-200 group",children:[S.jsx(D1,{className:"w-3.5 h-3.5 text-[#f4ce15] group-hover:rotate-12 transition-transform duration-200"}),S.jsx("span",{className:"hidden sm:inline text-[11px] font-semibold tracking-wider",children:"CLI"})]})]})]})})}function hx(){const[t,e]=he.useState(!1);he.useEffect(()=>{e(!0)},[]);const n="Augastin K Lazar";return S.jsxs("section",{id:"hero",className:"relative z-10 min-h-[100svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-between pt-28 pb-12 select-none",children:[S.jsxs("div",{className:"flex items-center justify-between text-[#8b8f8c] font-mono text-[11px] tracking-widest uppercase border-b border-[#f0f2f0]/10 pb-4",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(X8,{className:"w-3.5 h-3.5 text-[#379777]"}),S.jsx("span",{children:"MOL LNG Carrier Fleet · STCW III/6 Standard"})]}),S.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[S.jsx("span",{children:"10.5276° N, 76.2144° E"}),S.jsx("span",{className:"text-[#f4ce15]",children:"⚓"}),S.jsx("span",{children:"Thrissur / High Seas"})]})]}),S.jsxs("div",{className:"my-auto py-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-8",children:[S.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6",children:[S.jsxs("p",{className:"font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#f4ce15] flex items-center gap-2",children:[S.jsx("span",{className:"w-6 h-[1px] bg-[#f4ce15]"}),S.jsx("span",{children:"High-Voltage Maritime Systems • Embedded Firmware"})]}),S.jsx("h1",{className:"t-110 font-sans font-medium text-[#f0f2f0] tracking-tight leading-[0.95]","aria-label":n,children:n.split("").map((r,s)=>S.jsx("span",{className:"inline-block transition-all duration-700 ease-out",style:{animation:t?`blurIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${.1+s*.035}s forwards`:"none",opacity:t?void 0:0,filter:t?void 0:"blur(12px)"},children:r===" "?" ":r},s))}),S.jsx("p",{className:"t-30 font-sans text-[#8b8f8c] font-normal leading-relaxed transition-all duration-1000 ease-out",style:{animation:t?"blurIn 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.65s forwards":"none",opacity:t?void 0:0,filter:t?void 0:"blur(12px)"},children:"Electro Technical Officer & Creative Technologist"}),S.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 pt-2 transition-all duration-1000",style:{animation:t?"blurIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards":"none",opacity:t?void 0:0,filter:t?void 0:"blur(12px)"},children:[S.jsx("span",{className:"px-3 py-1 rounded-full bg-[#26262b]/80 border border-[#f0f2f0]/10 text-xs font-mono text-[#f0f2f0]",children:"6.6kV Switchboard Synchronization"}),S.jsx("span",{className:"px-3 py-1 rounded-full bg-[#26262b]/80 border border-[#f0f2f0]/10 text-xs font-mono text-[#f4ce15]",children:"STM32 Bare-Metal & FreeRTOS"}),S.jsx("span",{className:"px-3 py-1 rounded-full bg-[#26262b]/80 border border-[#f0f2f0]/10 text-xs font-mono text-[#379777]",children:"WebGL Spatial Digital Twins"})]})]}),S.jsx("div",{className:"hidden lg:flex lg:col-span-5 flex-col items-end justify-center pointer-events-none pr-4",children:S.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-[#26262b]/40 border border-[#f0f2f0]/10 text-[10px] font-mono text-[#8b8f8c] flex items-center gap-2 backdrop-blur-sm",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#f4ce15] animate-ping"}),S.jsx("span",{children:"3D SPATIAL RECONSTRUCTION // AUG-PORTRAIT"})]})})]}),S.jsxs("div",{className:"flex items-end justify-between border-t border-[#f0f2f0]/10 pt-6 text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex flex-col gap-1",children:[S.jsx("span",{className:"text-xs uppercase tracking-widest text-[#f0f2f0] font-mono",children:"Active Status"}),S.jsx("span",{className:"text-xs font-sans text-[#8b8f8c]",children:"Navigating energy corridors · Engineering open-source hardware"})]}),S.jsxs("a",{href:"#statement",className:"group flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[#f0f2f0] hover:text-[#f4ce15] transition-colors",children:[S.jsx("span",{children:"Scroll to explore"}),S.jsx("div",{className:"w-8 h-8 rounded-full border border-[#f0f2f0]/20 flex items-center justify-center group-hover:border-[#f4ce15] transition-colors",children:S.jsx(Y8,{className:"w-3.5 h-3.5 text-[#f4ce15] animate-bounce"})})]})]})]})}function px(){const[t,e]=he.useState(!1),n=he.useRef(null);return he.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&e(!0)},{threshold:.25});return n.current&&r.observe(n.current),()=>r.disconnect()},[]),S.jsx("section",{id:"statement",ref:n,className:"relative z-10 min-h-[90svh] w-[90vw] max-w-7xl mx-auto flex items-center py-24",children:S.jsxs("div",{className:"max-w-4xl flex flex-col gap-8",children:[S.jsxs("span",{className:"text-xs font-mono tracking-[0.2em] uppercase text-[#379777] flex items-center gap-2",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#379777]"}),S.jsx("span",{children:"Core Engineering Thesis"})]}),S.jsx("h2",{className:"t-45 font-sans font-medium text-[#f0f2f0] leading-[1.25] tracking-tight text-balance",children:"I bridge high-seas maritime automation with low-level embedded intelligence — engineering 6.6kV switchboards, bare-metal robotics, and interactive spatial digital twins for global energy corridors and the next generation of engineers.".split(" ").map((r,s)=>S.jsx("span",{className:"inline-block mr-[0.28em] transition-all duration-700 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transform:t?"translateY(0)":"translateY(16px)",transitionDelay:`${s*28}ms`},children:r},s))}),S.jsxs("div",{className:"pt-6 border-t border-[#f0f2f0]/10 flex flex-wrap gap-8 text-[#8b8f8c] font-mono text-xs transition-opacity duration-1000 delay-700",style:{opacity:t?1:0},children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-[#f4ce15] block mb-1",children:"01 / MARITIME"}),S.jsx("span",{children:"MOL LNG Fleet · Power Management (PMS) · 6.6kV Bus-Tie"})]}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[#379777] block mb-1",children:"02 / EMBEDDED"}),S.jsx("span",{children:"ARM Cortex-M4 · FreeRTOS · LoRa Sub-GHz · FOC Control"})]}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[#f0f2f0] block mb-1",children:"03 / SPATIAL & MEDIA"}),S.jsx("span",{children:"Three.js Digital Twins · Technical Video Engineering"})]})]})]})})}function mx(){const[t,e]=he.useState(!1),n=he.useRef(null);return he.useEffect(()=>{const s=new IntersectionObserver(([o])=>{o.isIntersecting&&e(!0)},{threshold:.3});return n.current&&s.observe(n.current),()=>s.disconnect()},[]),S.jsx("section",{id:"fleet",ref:n,className:"relative z-10 min-h-[100svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-center py-20 select-none",children:S.jsxs("div",{className:"max-w-2xl flex flex-col gap-6",children:[S.jsxs("div",{className:"flex items-center gap-2 text-[#f4ce15] font-mono text-xs tracking-widest uppercase",children:[S.jsx(lx,{className:"w-4 h-4 animate-pulse text-[#379777]"}),S.jsx("span",{children:"Global Maritime Energy Corridors"})]}),S.jsxs("h2",{className:"t-85 font-sans font-medium text-[#f0f2f0] leading-none tracking-tight",children:[S.jsx("span",{className:"block text-balance",children:"Sailing Worldwide".split("").map((s,o)=>S.jsx("span",{className:"inline-block transition-all duration-700 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transform:t?"translateY(0)":"translateY(14px)",transitionDelay:`${o*35}ms`},children:s===" "?" ":s},o))}),S.jsx("span",{className:"block t-30 text-[#8b8f8c] font-normal mt-3 transition-all duration-1000 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transitionDelay:"400ms"},children:"MOL International LNG Fleet"})]}),S.jsx("p",{className:"t-20 text-[#8b8f8c] font-sans leading-relaxed text-balance transition-all duration-1000 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transitionDelay:"600ms"},children:"Operating aboard international Liquefied Natural Gas (LNG) carriers under Mitsui O.S.K. Lines (MOL). Directly monitoring 6.6kV vacuum circuit breakers (VCB), generator synchronization, cryogenic boil-off gas (BOG) compressors, and emergency blackout restoration logic across global oceans."}),S.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#f0f2f0]/10 transition-opacity duration-1000 delay-700",style:{opacity:t?1:0},children:[S.jsxs("div",{className:"bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg p-3",children:[S.jsx("span",{className:"text-[#8b8f8c] font-mono text-[10px] block uppercase tracking-wider",children:"Voltage Class"}),S.jsx("span",{className:"text-[#f0f2f0] font-mono text-sm font-semibold",children:"6.6 kV / 440 V"})]}),S.jsxs("div",{className:"bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg p-3",children:[S.jsx("span",{className:"text-[#8b8f8c] font-mono text-[10px] block uppercase tracking-wider",children:"Regulatory Grade"}),S.jsx("span",{className:"text-[#379777] font-mono text-sm font-semibold",children:"STCW III/6 ETO"})]}),S.jsxs("div",{className:"bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg p-3 col-span-2 sm:col-span-1",children:[S.jsx("span",{className:"text-[#8b8f8c] font-mono text-[10px] block uppercase tracking-wider",children:"Safety Interlocks"}),S.jsx("span",{className:"text-[#f4ce15] font-mono text-sm font-semibold",children:"Ex-d / Ex-ia Cryo"})]})]})]})})}const za=""+new URL("me1-BpHl0sTh.png",import.meta.url).href;function gx({imageSrc:t=za}){const e=he.useRef(null),n=he.useRef(null),[i,r]=he.useState(!1),[s,o]=he.useState({x:0,y:0}),a=he.useRef({x:-200,y:-200,targetX:-200,targetY:-200}),l=he.useRef(null),c=he.useRef(null),u=he.useRef(null);he.useEffect(()=>{const x=n.current,_=e.current;if(!x||!_)return;const p=x.getContext("2d");let d=!1;const v=new Image;v.src=t||za;const g=()=>{if(d||!e.current)return;const A=e.current.getBoundingClientRect(),b=Math.round(A.width||e.current.clientWidth||400),U=Math.round(A.height||e.current.clientHeight||530),T=Math.min(window.devicePixelRatio||1,2);x.width=b*T,x.height=U*T,p.scale(T,T);const y=document.createElement("canvas");y.width=x.width,y.height=x.height;const I=y.getContext("2d"),H=Math.max(b/v.width,U/v.height),O=v.width*H,V=v.height*H,J=(b-O)/2,X=(U-V)/2;I.drawImage(v,J*T,X*T,O*T,V*T);try{const $=I.getImageData(0,0,y.width,y.height),D=$.data;for(let W=0;W<D.length;W+=4){const R=D[W],C=D[W+1],j=D[W+2],k=(.299*R+.587*C+.114*j)/255,K=W/4,te=K%y.width,Q=Math.floor(K/y.width),fe=(te%3===0&&Q%3===0?12:0)+(Math.random()-.5)*16,ue=Math.min(Math.max(k+fe/255,0),1);if(ue<.28)D[W]=26+ue*30,D[W+1]=26+ue*20,D[W+2]=29+ue*15;else if(ue<.72){const ve=(ue-.28)/.44;D[W]=26+209*ve,D[W+1]=26+48*ve,D[W+2]=29+14*ve}else{const ve=(ue-.72)/.28;D[W]=235+9*ve,D[W+1]=74+132*ve,D[W+2]=43+-22*ve}}I.putImageData($,0,0),u.current=y}catch($){console.warn("Canvas pixel processing fallback",$),u.current=y}};v.onload=()=>{c.current=v,g()},v.onerror=A=>{console.error("Failed to load image for riso portrait",A)},v.complete&&v.naturalWidth!==0&&(c.current=v,g());const M=()=>{c.current&&g()};window.addEventListener("resize",M);const N=()=>{var y,I,H;if(d)return;const A=(y=e.current)==null?void 0:y.getBoundingClientRect(),b=(A==null?void 0:A.width)||((I=e.current)==null?void 0:I.clientWidth)||400,U=(A==null?void 0:A.height)||((H=e.current)==null?void 0:H.clientHeight)||530,T=Math.min(window.devicePixelRatio||1,2);if(a.current.x+=(a.current.targetX-a.current.x)*.18,a.current.y+=(a.current.targetY-a.current.y)*.18,p.clearRect(0,0,b,U),c.current&&u.current){const O=c.current,V=Math.max(b/O.width,U/O.height),J=O.width*V,X=O.height*V,$=(b-J)/2,D=(U-X)/2;p.save(),p.drawImage(O,$,D,J,X),p.restore(),p.save();const W=document.createElement("canvas");W.width=x.width,W.height=x.height;const R=W.getContext("2d");R.drawImage(u.current,0,0,W.width,W.height);const C=a.current.x*T,j=a.current.y*T,ae=110*T;if(C>-150&&j>-150){R.globalCompositeOperation="destination-out";const k=R.createRadialGradient(C,j,0,C,j,ae);k.addColorStop(0,"rgba(0, 0, 0, 1)"),k.addColorStop(.72,"rgba(0, 0, 0, 0.95)"),k.addColorStop(.9,"rgba(0, 0, 0, 0.35)"),k.addColorStop(1,"rgba(0, 0, 0, 0)"),R.fillStyle=k,R.beginPath(),R.arc(C,j,ae,0,Math.PI*2),R.fill(),R.globalCompositeOperation="source-over"}p.drawImage(W,0,0,b,U),p.restore(),a.current.x>0&&a.current.x<b&&a.current.y>0&&a.current.y<U&&(p.save(),p.strokeStyle="#f4ce15",p.lineWidth=1,p.setLineDash([4,4]),p.beginPath(),p.arc(a.current.x,a.current.y,110,0,Math.PI*2),p.stroke(),p.setLineDash([]),p.strokeStyle="rgba(244, 206, 21, 0.75)",p.beginPath(),p.moveTo(a.current.x-14,a.current.y),p.lineTo(a.current.x+14,a.current.y),p.moveTo(a.current.x,a.current.y-14),p.lineTo(a.current.x,a.current.y+14),p.stroke(),p.restore())}l.current=requestAnimationFrame(N)};return l.current=requestAnimationFrame(N),()=>{d=!0,cancelAnimationFrame(l.current),window.removeEventListener("resize",M)}},[t]);const h=x=>{if(!e.current)return;const _=e.current.getBoundingClientRect(),p=x.clientX-_.left,d=x.clientY-_.top;a.current.targetX=p,a.current.targetY=d,o({x:Math.round(p),y:Math.round(d)})},f=()=>{r(!0)},m=()=>{r(!1),a.current.targetX=-300,a.current.targetY=-300};return S.jsxs("div",{ref:e,onMouseMove:h,onMouseEnter:f,onMouseLeave:m,className:"relative w-full max-w-md sm:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden bg-[#161619] border border-[#f0f2f0]/10 shadow-2xl group select-none cursor-none",children:[S.jsx("img",{src:t||za,alt:"Augastin K Lazar Portrait",className:"absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 mix-blend-luminosity filter contrast-125",loading:"eager"}),S.jsx("canvas",{ref:n,className:"relative z-10 w-full h-full block object-cover will-change-transform"}),S.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase pointer-events-none z-20",children:[S.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e1e22]/85 backdrop-blur-md border border-[#f0f2f0]/15 text-[#eb4a2b]",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#eb4a2b] animate-pulse"}),S.jsx("span",{children:"VERMILLION RISO // SPEC-01"})]}),S.jsx("div",{className:"px-2.5 py-1 rounded bg-[#1e1e22]/85 backdrop-blur-md border border-[#f0f2f0]/15 text-[#8b8f8c]",children:S.jsx("span",{children:"STCW ETO ARCHIVE"})})]}),S.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase pointer-events-none z-20",children:[S.jsxs("div",{className:"px-2.5 py-1 rounded bg-[#1e1e22]/85 backdrop-blur-md border border-[#f0f2f0]/15 text-[#f0f2f0] flex items-center gap-2",children:[S.jsx(ix,{className:"w-3 h-3 text-[#f4ce15]"}),S.jsx("span",{children:i?`[X:${s.x} Y:${s.y}] OPTICAL CLEARANCE`:"HOVER TO REVEAL OPTICAL VIEW"})]}),S.jsx("span",{className:"text-[#8b8f8c] hidden sm:inline text-[9px]",children:"PULL INK SEPARATION"})]}),S.jsx("div",{className:"absolute top-2 left-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20",children:"＋"}),S.jsx("div",{className:"absolute top-2 right-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20",children:"＋"}),S.jsx("div",{className:"absolute bottom-2 left-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20",children:"＋"}),S.jsx("div",{className:"absolute bottom-2 right-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20",children:"＋"})]})}function vx(){const[t,e]=he.useState(!1),[n,i]=he.useState(""),r=he.useRef(null);return he.useEffect(()=>{const o=new IntersectionObserver(([c])=>{c.isIntersecting&&e(!0)},{threshold:.25});r.current&&o.observe(r.current);const a=()=>{const c=new Date,u={timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1};i(new Intl.DateTimeFormat("en-GB",u).format(c))};a();const l=setInterval(a,1e3);return()=>{o.disconnect(),clearInterval(l)}},[]),S.jsx("section",{id:"origins",ref:r,className:"relative z-10 min-h-[100svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-center py-24 select-none",children:S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16",children:[S.jsx("div",{className:"lg:col-span-5 flex justify-center lg:justify-start transition-all duration-1000 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transform:t?"translateY(0)":"translateY(24px)"},children:S.jsx(gx,{imageSrc:za})}),S.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-6 text-left",children:[S.jsxs("div",{className:"flex items-center gap-2 text-[#379777] font-mono text-xs tracking-widest uppercase",children:[S.jsx(tx,{className:"w-4 h-4 text-[#f4ce15]"}),S.jsx("span",{children:"Home Base & Hardware Laboratory"})]}),S.jsx("h2",{className:"t-85 font-sans font-medium text-[#f0f2f0] leading-none tracking-tight",children:S.jsx("span",{className:"block text-balance",children:"Based in Thrissur, Kerala".split("").map((o,a)=>S.jsx("span",{className:"inline-block transition-all duration-700 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transform:t?"translateY(0)":"translateY(14px)",transitionDelay:`${a*26}ms`},children:o===" "?" ":o},a))})}),S.jsx("p",{className:"t-20 text-[#8b8f8c] font-sans leading-relaxed text-balance transition-all duration-1000 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transitionDelay:"350ms"},children:"Ashore in God's Own Country. When away from the engine control room, you will find me at my workbench: soldering custom sensor PCBs, coding ARM Cortex-M FreeRTOS kernels, tuning PID loops on robotic gimbals, and rendering interactive 3D digital twins."}),S.jsx("p",{className:"text-xs font-mono text-[#8b8f8c] leading-relaxed border-l-2 border-[#f4ce15]/40 pl-3 transition-all duration-1000 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transitionDelay:"500ms"},children:'"Hover over the technical plate on the left to activate optical clearance — passing the lens clears the vermillion riso ink matrix back into full natural photographic fidelity."'}),S.jsxs("div",{className:"flex flex-wrap gap-4 pt-4 border-t border-[#f0f2f0]/10 text-xs font-mono transition-opacity duration-1000 delay-600",style:{opacity:t?1:0},children:[S.jsxs("div",{className:"bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg px-4 py-2 flex items-center gap-2 text-[#f0f2f0]",children:[S.jsx(Z8,{className:"w-3.5 h-3.5 text-[#f4ce15]"}),S.jsxs("span",{children:["IST ",n||"20:10:00"," (UTC +5:30)"]})]}),S.jsxs("div",{className:"bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg px-4 py-2 flex items-center gap-2 text-[#379777]",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-[#379777] animate-ping"}),S.jsx("span",{children:"Workbench Online · 6.6kV Sim Ready"})]})]})]})]})})}function xx(){const[t,e]=he.useState(!1),n=he.useRef(null);return he.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&e(!0)},{threshold:.3});return n.current&&r.observe(n.current),()=>r.disconnect()},[]),S.jsx("section",{id:"philosophy",ref:n,className:"relative z-10 min-h-[90svh] w-[90vw] max-w-7xl mx-auto flex items-center justify-start py-24 select-none",children:S.jsxs("div",{className:"max-w-4xl flex flex-col gap-6",children:[S.jsxs("span",{className:"text-xs font-mono tracking-[0.25em] uppercase text-[#f4ce15] flex items-center gap-2",children:[S.jsx(cx,{className:"w-3.5 h-3.5 text-[#f4ce15]"}),S.jsx("span",{children:"How I Build & Operate"})]}),S.jsx("p",{className:"t-45 font-sans font-medium text-[#f0f2f0] leading-[1.25] tracking-tight text-balance",children:"I don’t just monitor switchboards or patch code — I bring deep low-level curiosity into every circuit, pushing bare-metal firmware, spatial WebGL simulations, and educational clarity wherever they genuinely elevate engineering.".split(" ").map((r,s)=>S.jsx("span",{className:"inline-block mr-[0.28em] transition-all duration-700 ease-out",style:{filter:t?"blur(0px)":"blur(10px)",opacity:t?1:0,transform:t?"translateY(0)":"translateY(14px)",transitionDelay:`${s*26}ms`},children:r},s))}),S.jsxs("div",{className:"pt-6 border-t border-[#f0f2f0]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#8b8f8c] font-sans text-sm transition-opacity duration-1000 delay-700",style:{opacity:t?1:0},children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-[#f0f2f0] font-mono text-xs block mb-1 uppercase tracking-wider",children:"Zero Black-Box Thinking"}),S.jsx("p",{className:"text-xs leading-relaxed text-[#8b8f8c]",children:"From vacuum breaker coils to registers in an ARM NVIC, understanding the physical layer first prevents critical cascade failures."})]}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[#f4ce15] font-mono text-xs block mb-1 uppercase tracking-wider",children:"High-Speed Determinism"}),S.jsx("p",{className:"text-xs leading-relaxed text-[#8b8f8c]",children:"Real-time tasks must meet their deadlines, whether tripping reverse power relays in 200ms or running 1kHz motor PID loops."})]}),S.jsxs("div",{children:[S.jsx("span",{className:"text-[#379777] font-mono text-xs block mb-1 uppercase tracking-wider",children:"Accessible Knowledge"}),S.jsx("p",{className:"text-xs leading-relaxed text-[#8b8f8c]",children:"Engineering complexity should be visually dissected. 3D digital twins and clear breakdowns inspire the next wave of sea-goers and builders."})]})]})]})})}function _x({children:t,className:e=""}){const n=he.useRef(null),[i,r]=he.useState("perspective(1000px) rotateX(0deg) rotateY(0deg)"),[s,o]=he.useState({x:50,y:50,opacity:0}),a=c=>{if(!n.current)return;const u=n.current.getBoundingClientRect(),h=c.clientX-u.left,f=c.clientY-u.top,m=u.width/2,x=u.height/2,_=-((f-x)/x)*4.5,p=(h-m)/m*4.5;r(`perspective(1200px) rotateX(${_.toFixed(2)}deg) rotateY(${p.toFixed(2)}deg)`),o({x:h/u.width*100,y:f/u.height*100,opacity:.15})},l=()=>{r("perspective(1200px) rotateX(0deg) rotateY(0deg)"),o({x:50,y:50,opacity:0})};return S.jsxs("div",{ref:n,onMouseMove:a,onMouseLeave:l,className:`relative transition-transform duration-300 ease-out will-change-transform ${e}`,style:{transform:i},children:[S.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30",style:{background:`radial-gradient(circle 320px at ${s.x}% ${s.y}%, rgba(244, 206, 21, ${s.opacity}), transparent 80%)`}}),t]})}function yx(){const t=he.useRef(null),[e,n]=he.useState(!1),[i,r]=he.useState(3420),[s,o]=he.useState(60.15),a=he.useRef(null);he.useEffect(()=>{const c=t.current;if(!c)return;const u=c.getContext("2d");let h=0;const f=()=>{u.clearRect(0,0,c.width,c.height);const m=c.width/2,x=c.height/2,_=68;u.fillStyle="#17171a",u.beginPath(),u.arc(m,x,_,0,Math.PI*2),u.fill(),u.strokeStyle="#26262b",u.lineWidth=4,u.stroke(),u.strokeStyle=e?"#379777":"#f4ce15",u.lineWidth=3,u.beginPath(),u.moveTo(m,x-_),u.lineTo(m,x-_+12),u.stroke();for(let v=0;v<12;v++){const g=v/12*Math.PI*2,M=m+Math.cos(g)*(_-4),N=x+Math.sin(g)*(_-4),A=m+Math.cos(g)*(_-9),b=x+Math.sin(g)*(_-9);u.strokeStyle="#8b8f8c",u.lineWidth=1,u.beginPath(),u.moveTo(M,N),u.lineTo(A,b),u.stroke()}e?h=-Math.PI/2+(Math.random()-.5)*.02:h+=.038;const p=m+Math.cos(h)*(_-14),d=x+Math.sin(h)*(_-14);u.strokeStyle=e?"#379777":"#f4ce15",u.lineWidth=2.5,u.beginPath(),u.moveTo(m,x),u.lineTo(p,d),u.stroke(),u.fillStyle="#f0f2f0",u.beginPath(),u.arc(m,x,4,0,Math.PI*2),u.fill(),u.strokeStyle=e?"#379777":"#f4ce15",u.lineWidth=1.5,u.beginPath();for(let v=0;v<c.width;v+=3){const g=c.height-24+Math.sin((v+h*40)*.06)*12;v===0?u.moveTo(v,g):u.lineTo(v,g)}u.stroke(),a.current=requestAnimationFrame(f)};return f(),()=>cancelAnimationFrame(a.current)},[e]);const l=()=>{n(c=>!c),e?(o(60.18),r(3420)):(o(60),r(4120))};return S.jsxs("div",{className:"relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden",children:[S.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(dx,{className:`w-3.5 h-3.5 ${e?"text-[#379777]":"text-[#f4ce15]"}`}),S.jsx("span",{className:"text-[#f0f2f0] font-semibold",children:"6.6kV MAIN SWITCHBOARD"})]}),S.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-semibold ${e?"bg-[#379777]/20 text-[#379777]":"bg-[#f4ce15]/20 text-[#f4ce15]"}`,children:e?"BUS-TIE CLOSED (LOCKED)":"UNSYNCHRONIZED (HUNTING)"})]}),S.jsx("div",{className:"flex items-center justify-center my-auto",children:S.jsx("canvas",{ref:t,width:280,height:130,className:"max-w-full"})}),S.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono",children:[S.jsxs("div",{className:"flex gap-4",children:[S.jsxs("span",{className:"text-[#8b8f8c]",children:["FREQ: ",S.jsxs("strong",{className:"text-[#f0f2f0]",children:[s.toFixed(2)," Hz"]})]}),S.jsxs("span",{className:"text-[#8b8f8c]",children:["LOAD: ",S.jsxs("strong",{className:"text-[#f0f2f0]",children:[i," kW"]})]})]}),S.jsx("button",{onClick:l,className:"px-3 py-1 rounded bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 text-[#f4ce15] hover:text-white transition-all text-[11px] font-semibold",children:e?"TRIP BREAKER":"ENGAGE AUTO-SYNC"})]})]})}function Sx(){const t=he.useRef(null),[e,n]=he.useState(0),[i,r]=he.useState(0),s=he.useRef(null);return he.useEffect(()=>{const o=t.current;if(!o)return;const a=o.getContext("2d");let l=0;const c=()=>{a.clearRect(0,0,o.width,o.height);const u=o.width/2,h=o.height/2;l+=.03;const f=Math.sin(l*1.2)*18,m=Math.cos(l*.9)*14;n(f),r(m),a.save(),a.translate(u,h),a.rotate(m*Math.PI/180),a.strokeStyle="#26262b",a.lineWidth=3,a.beginPath(),a.arc(0,0,52,0,Math.PI*2),a.stroke(),a.strokeStyle="#f4ce15",a.lineWidth=2.5,a.beginPath(),a.ellipse(0,0,44,Math.max(10,44*Math.cos(f*Math.PI/180)),0,0,Math.PI*2),a.stroke(),a.fillStyle="#379777",a.beginPath(),a.arc(0,0,8,0,Math.PI*2),a.fill(),a.strokeStyle="#f0f2f0",a.lineWidth=1.5,a.beginPath(),a.moveTo(0,0),a.lineTo(0,-28),a.stroke(),a.restore(),a.strokeStyle="#379777",a.lineWidth=1,a.beginPath();for(let x=0;x<o.width;x+=4){const _=o.height-18+Math.sin(x*.1+l*4)*6;x===0?a.moveTo(x,_):a.lineTo(x,_)}a.stroke(),s.current=requestAnimationFrame(c)};return c(),()=>cancelAnimationFrame(s.current)},[]),S.jsxs("div",{className:"relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden",children:[S.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(N1,{className:"w-3.5 h-3.5 text-[#379777]"}),S.jsx("span",{className:"text-[#f0f2f0] font-semibold",children:"STM32F405 · 1kHz FOC LOOP"})]}),S.jsx("span",{className:"bg-[#379777]/20 text-[#379777] px-2 py-0.5 rounded text-[10px] font-semibold",children:"KALMAN CONVERGED"})]}),S.jsx("div",{className:"flex items-center justify-center my-auto",children:S.jsx("canvas",{ref:t,width:280,height:130,className:"max-w-full"})}),S.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono text-[#8b8f8c]",children:[S.jsxs("span",{children:["PITCH: ",S.jsxs("strong",{className:"text-[#f4ce15]",children:[e.toFixed(1),"°"]})]}),S.jsxs("span",{children:["ROLL: ",S.jsxs("strong",{className:"text-[#379777]",children:[i.toFixed(1),"°"]})]}),S.jsxs("span",{children:["JITTER: ",S.jsx("strong",{className:"text-[#f0f2f0]",children:"<0.02°"})]})]})]})}function Mx(){const t=he.useRef(null),[e,n]=he.useState(1480),i=he.useRef(null);he.useEffect(()=>{const s=t.current;if(!s)return;const o=s.getContext("2d");let a=0;const l=[{x:50,y:70,label:"NODE 01: PUMP A"},{x:120,y:35,label:"NODE 02: CRYO COMP"},{x:190,y:85,label:"NODE 03: BILGE WELL"},{x:235,y:40,label:"GATEWAY: ECR"}],c=()=>{o.clearRect(0,0,s.width,s.height),a+=.025,o.strokeStyle="rgba(240, 242, 240, 0.08)",o.lineWidth=1;for(let f=0;f<l.length-1;f++)o.beginPath(),o.moveTo(l[f].x,l[f].y),o.lineTo(l[l.length-1].x,l[l.length-1].y),o.stroke();const u=l[3],h=a*28%45;o.strokeStyle="rgba(244, 206, 21, "+(1-h/45)+")",o.lineWidth=1.5,o.beginPath(),o.arc(u.x,u.y,h,0,Math.PI*2),o.stroke(),l.forEach((f,m)=>{const x=m===3;o.fillStyle=x?"#f4ce15":"#379777",o.beginPath(),o.arc(f.x,f.y,x?5:3.5,0,Math.PI*2),o.fill(),o.fillStyle="#8b8f8c",o.font="8px monospace",o.fillText(f.label,f.x-20,f.y-8)}),i.current=requestAnimationFrame(c)};return c(),()=>cancelAnimationFrame(i.current)},[]);const r=()=>{n(s=>s+1)};return S.jsxs("div",{className:"relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden",children:[S.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(nx,{className:"w-3.5 h-3.5 text-[#f4ce15]"}),S.jsx("span",{className:"text-[#f0f2f0] font-semibold",children:"868MHz LoRa INDUSTRIAL MESH"})]}),S.jsx("span",{className:"bg-[#f4ce15]/20 text-[#f4ce15] px-2 py-0.5 rounded text-[10px] font-semibold",children:"SNR +11.8 dBm · 3.2km"})]}),S.jsx("div",{className:"flex items-center justify-center my-auto",children:S.jsx("canvas",{ref:t,width:280,height:120,className:"max-w-full"})}),S.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono",children:[S.jsxs("span",{className:"text-[#8b8f8c]",children:["TELEMETRY: ",S.jsxs("strong",{className:"text-[#f0f2f0]",children:[e," PKTS"]})]}),S.jsx("button",{onClick:r,className:"px-3 py-1 rounded bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 text-[#379777] hover:text-white transition-all text-[11px] font-semibold",children:"BROADCAST PING"})]})]})}function Ex(){const t=he.useRef(null),[e,n]=he.useState("BOG Compressor"),i=he.useRef(null);return he.useEffect(()=>{const r=t.current;if(!r)return;const s=r.getContext("2d");let o=0;const a=()=>{s.clearRect(0,0,r.width,r.height);const l=r.width/2,c=r.height/2;o+=.02,s.strokeStyle="rgba(240, 242, 240, 0.15)",s.lineWidth=1.5;const h=Math.cos(o)*38;s.strokeRect(l-h,c-25,h*2,50),s.strokeStyle="#379777",s.lineWidth=2,s.beginPath(),s.arc(l,c,22,o,o+Math.PI*1.5),s.stroke(),s.strokeStyle="#f4ce15",s.lineWidth=1.5,s.beginPath(),s.moveTo(l-80,c+15),s.lineTo(l-20,c+15),s.lineTo(l,c),s.lineTo(l+40,c),s.lineTo(l+80,c-20),s.stroke(),i.current=requestAnimationFrame(a)};return a(),()=>cancelAnimationFrame(i.current)},[]),S.jsxs("div",{className:"relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden",children:[S.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(L1,{className:"w-3.5 h-3.5 text-[#379777]"}),S.jsx("span",{className:"text-[#f0f2f0] font-semibold",children:"THREE.JS SPATIAL DIGITAL TWIN"})]}),S.jsx("span",{className:"bg-[#379777]/20 text-[#379777] px-2 py-0.5 rounded text-[10px] font-semibold",children:"60 FPS WEBGL"})]}),S.jsx("div",{className:"flex items-center justify-center my-auto",children:S.jsx("canvas",{ref:t,width:280,height:120,className:"max-w-full"})}),S.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono text-[#8b8f8c]",children:[S.jsxs("span",{children:["SYSTEM: ",S.jsx("strong",{className:"text-[#f0f2f0]",children:e})]}),S.jsx("button",{onClick:()=>n(r=>r==="BOG Compressor"?"6.6kV Switchboard":"BOG Compressor"),className:"px-3 py-1 rounded bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 text-[#f0f2f0] hover:text-[#f4ce15] transition-all text-[11px] font-semibold",children:"SWITCH VIEW"})]})]})}function wx(){const[t,e]=he.useState(null),n=[{id:"hv-simulator",title:"High-Voltage Maritime Power & Blackout Simulator",year:"2026",tagline:"Simulating 6.6kV Bus-Tie Synchronization, Load Sharing & Preferential Tripping",collaboration:"Engineered for maritime cadet training & Mitsui O.S.K. Lines fleet operational emulation.",description:["An interactive, full-stack browser simulation of shipboard electrical power generation. Replicates dual-fuel diesel generator start-stop logic, synchroscope hunting, frequency governor droop, and emergency vacuum circuit breaker sequences.","Eliminates the critical high-voltage arc-flash hazards inherent to live 6.6kV marine switchboards while providing cadet officers with identical real-time telemetry and fault diagnostic drills."],stack:["WebSockets","SCADA State Machine","React 18","Canvas API","Tailwind CSS","Vite"],stackNote:"A custom state engine models active (kW) and reactive (kVAR) droop load sharing across 4 generators, while the Canvas API drives a buttery 60fps synchroscope gauge.",github:"https://github.com/augastinklazar/augastinklazar",live:"https://augastinklazar.github.io/augastinklazar/",visualizer:S.jsx(yx,{}),specs:{busVoltage:"6,600 V AC / 440 V AC",breakerType:"Vacuum Circuit Breaker (VCB) with undervoltage release",trippingLogic:"Preferential Trip Stage 1 (110% load), Stage 2 (120% load)",reversePower:"Trips generator breaker within 500ms of reverse power detection"}},{id:"robotic-gimbal",title:"Autonomous Dual-Axis Robotic Gimbal Tracker",year:"2025",tagline:"Low-Latency Motion Compensation with STM32 ARM Cortex-M4 & FreeRTOS",collaboration:"Custom hardware & bare-metal firmware project for camera and sensor orientation stabilization at sea.",description:["Custom-designed robotic pan-tilt gimbal running on an STM32 ARM Cortex-M4 microcontroller. Integrates a 6-axis IMU with sensor fusion Kalman filtering and Field Oriented Control (FOC) for jitter-free orientation stability.","Maintains camera horizon alignment despite high-amplitude vessel pitch and roll motions in severe sea states."],stack:["STM32 (C/C++)","FreeRTOS Kernel","DRV8313 Motor Driver","Kalman Filter","SPI / I2C","Hardware PID"],stackNote:"FreeRTOS tasks poll the IMU via SPI at 1kHz, computing orientation angles through a 6-state Kalman filter and adjusting motor driver PWM registers deterministically.",github:"https://github.com/augastinklazar/augastinklazar",live:"https://augastinklazar.github.io/augastinklazar/",visualizer:S.jsx(Sx,{}),specs:{microcontroller:"STM32F405RGT6 (ARM Cortex-M4 @ 168 MHz with FPU)",loopFrequency:"1,000 Hz deterministic FreeRTOS task rate",precision:"0.02° angular positioning accuracy",powerSupply:"3S LiPo battery with onboard buck regulators"}},{id:"sensor-mesh",title:"Sub-GHz Industrial Marine Sensor Mesh",year:"2025",tagline:"Long-Range Vibration & Cryogenic Telemetry for Vessel Auxiliary Systems",collaboration:"Industrial IoT deployment designed for harsh steel machinery compartments.",description:["Robust wireless telemetry network built to penetrate heavy multi-deck maritime steel bulkheads. Deploys ultra-low-power ESP32 + LoRa radio nodes monitoring motor bearing vibration, temperatures, and bilge fluid levels.","Operates autonomously for 18+ months on lithium thionyl chloride cells while streaming live telemetry back to the central Engine Control Room (ECR)."],stack:["ESP32","LoRa 868MHz","Embedded C++","MQTT / Modbus","InfluxDB","Deep Sleep PMU"],stackNote:"Utilizes star-of-stars sub-GHz LoRa modulation to bypass the 40dB RF attenuation of marine bulkheads, with ultra-low sleep draw under 15 microamps.",github:"https://github.com/augastinklazar/augastinklazar",live:"https://augastinklazar.github.io/augastinklazar/",visualizer:S.jsx(Mx,{}),specs:{rfBand:"868 MHz / 915 MHz Sub-GHz LoRa with Spreading Factor 10",range:"3.2 km line-of-sight / 4 deck steel penetration",sleepCurrent:"<15 µA in deep sleep mode",casing:"IP67 waterproof aluminum enclosure with neodymium magnetic base"}},{id:"engine-room-twin",title:"Interactive 3D LNG Engine Room Digital Twin",year:"2026",tagline:"WebGL Spatial Explorer for High-Voltage Marine Systems & Cryogenic Loops",collaboration:"Spatial visualization project demystifying liquefied natural gas machinery spaces.",description:["A browser-based 3D digital twin built with Three.js. Enables engineers and maritime students to walk through ship machinery spaces, inspecting high-voltage transformers, BOG compressors, and intrinsically safe safety barriers.","Bridges physical machinery with digital telemetry overlays, creating an exploratory interactive handbook for vessel operations."],stack:["Three.js","WebGL","GLSL Shaders","React","GSAP","Vite"],stackNote:"Leverages instanced meshes and custom GLSL lighting shaders to achieve 60fps performance on standard laptops without high-end dedicated GPUs.",github:"https://github.com/augastinklazar/augastinklazar",live:"https://augastinklazar.github.io/augastinklazar/",visualizer:S.jsx(Ex,{}),specs:{renderer:"Three.js r165 with WebGL 2.0 pipeline",optimization:"Hardware instanced meshes, LOD geometry switching",frameBudget:"Sub-16ms render time (solid 60 FPS)",interactivity:"Raycasting inspection pins with real-time schematic modals"}}];return S.jsxs("section",{id:"works",className:"relative z-10 py-28 w-[90vw] max-w-7xl mx-auto",children:[S.jsxs("div",{className:"flex flex-col gap-2 mb-16 border-b border-[#f0f2f0]/10 pb-8",children:[S.jsx("p",{className:"t-16 text-[#8b8f8c] font-mono uppercase tracking-[0.25em]",children:"Some Selected Works"}),S.jsx("p",{className:"t-30 text-[#f0f2f0] font-sans font-normal",children:"And still working on plenty more across sea and shore."})]}),S.jsx("div",{className:"flex flex-col gap-24",children:n.map((i,r)=>{const s=t===i.id;return S.jsx(_x,{className:"w-full",children:S.jsxs("article",{className:"group relative flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 pb-16 border-b border-[#f0f2f0]/10 bg-[#26262b]/20 hover:bg-[#26262b]/40 rounded-2xl p-6 sm:p-8 transition-colors duration-300",children:[S.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col justify-between",children:[S.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[S.jsxs("span",{className:"font-mono text-xs uppercase tracking-widest text-[#f4ce15]",children:["DOSSIER 0",r+1," // ",i.year]}),S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("a",{href:i.github,target:"_blank",rel:"noopener noreferrer",className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors p-1",title:"View GitHub Repository",children:S.jsx(I1,{className:"w-4 h-4"})}),S.jsx("a",{href:i.live,target:"_blank",rel:"noopener noreferrer",className:"text-[#8b8f8c] hover:text-[#f4ce15] transition-colors p-1",title:"Open Live Deployment",children:S.jsx(J8,{className:"w-4 h-4"})})]})]}),S.jsx("div",{className:"w-full shadow-2xl shadow-black/40",children:i.visualizer}),S.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:i.stack.map((o,a)=>S.jsx("span",{className:"px-2.5 py-1 rounded bg-[#26262b] border border-[#f0f2f0]/10 text-[#8b8f8c] text-[11px] font-mono hover:text-[#f0f2f0] transition-colors",children:o},a))})]}),S.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col justify-between",children:[S.jsxs("div",{className:"flex flex-col gap-4",children:[S.jsx("h3",{className:"t-30 font-sans font-medium text-[#f0f2f0] tracking-tight group-hover:text-[#f4ce15] transition-colors",children:i.title}),S.jsx("p",{className:"font-mono text-xs text-[#379777] uppercase tracking-wider",children:i.tagline}),S.jsx("p",{className:"text-xs font-mono text-[#8b8f8c] italic border-l-2 border-[#f4ce15]/40 pl-3",children:i.collaboration}),S.jsx("div",{className:"text-sm font-sans text-[#8b8f8c] leading-relaxed flex flex-col gap-3 pt-2",children:i.description.map((o,a)=>S.jsx("p",{children:o},a))}),S.jsxs("p",{className:"text-xs font-mono text-[#d2d6d3] bg-[#26262b]/40 p-3 rounded-lg border border-[#f0f2f0]/5",children:[S.jsx("strong",{children:"Architecture Note: "}),i.stackNote]})]}),S.jsxs("div",{className:"mt-6 pt-4 border-t border-[#f0f2f0]/5",children:[S.jsxs("button",{onClick:()=>e(s?null:i.id),className:"flex items-center gap-2 text-xs font-mono text-[#f4ce15] hover:text-[#f0f2f0] transition-colors",children:[S.jsx("span",{children:s?"Collapse Engineering Specs":"Explore Full Hardware & Circuit Specs"}),s?S.jsx(K8,{className:"w-3.5 h-3.5"}):S.jsx($8,{className:"w-3.5 h-3.5"})]}),s&&S.jsx("div",{className:"mt-4 p-4 rounded-lg bg-[#161619] border border-[#f0f2f0]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono",children:Object.entries(i.specs).map(([o,a])=>S.jsxs("div",{className:"flex flex-col gap-0.5",children:[S.jsx("span",{className:"text-[#8b8f8c] text-[10px] uppercase tracking-wider",children:o.replace(/([A-Z])/g," $1")}),S.jsx("span",{className:"text-[#f0f2f0]",children:a})]},o))})]})]})]})},i.id)})})]})}function Tx(){const t=[{category:"01 / MARITIME HIGH-VOLTAGE & AUTOMATION",icon:rx,color:"#f4ce15",items:[{name:"6.6kV Power Distribution",desc:"Vacuum circuit breakers (VCB), bus-tie auto-synchronization, and step-down transformers."},{name:"Power Management Systems (PMS)",desc:"Load-dependent start/stop, preferential tripping logic, and heavy-consumer interlocks."},{name:"Cryogenic Instrumentation",desc:"PT100 RTDs, 4-20mA current loops, boil-off gas compressors, and Ex-d / Ex-ia barriers."},{name:"Maritime Standards",desc:"STCW Regulation III/6 ETO compliance, blackout recovery procedures, and marine safety drills."}]},{category:"02 / EMBEDDED FIRMWARE & ROBOTICS",icon:N1,color:"#379777",items:[{name:"Microcontroller Architecture",desc:"Bare-metal C and C++ on STM32 ARM Cortex-M4/M7 and ESP32 dual-core processors."},{name:"Real-Time Operating Systems",desc:"FreeRTOS preemptive multitasking, mutexes, semaphores, queues, and task scheduling."},{name:"Motor Control & Sensor Fusion",desc:"Field Oriented Control (FOC), closed-loop PID control, and 6-axis IMU Kalman filtering."},{name:"Industrial Fieldbuses",desc:"CAN 2.0B, RS-485 Modbus RTU, SPI, I2C, and long-range 868/915MHz Sub-GHz LoRa mesh."}]},{category:"03 / CREATIVE TECHNOLOGY & WEBGL",icon:L1,color:"#f0f2f0",items:[{name:"Three.js & WebGL 2.0",desc:"Instanced rendering, custom GLSL vertex/fragment shaders, and 3D spatial digital twins."},{name:"Modern Frontend Stack",desc:"React 18, Vite, GSAP motion timelines, Lenis smooth scrolling, and Tailwind CSS."},{name:"Interactive Simulations",desc:"Real-time Canvas state machines, mathematical vector fields, and SCADA-style HMIs."},{name:"Performance Engineering",desc:"60 FPS render budgets, draw call batching, memory leak prevention, and zero jank."}]},{category:"04 / TECHNICAL MEDIA & EDUCATION",icon:sx,color:"#f4ce15",items:[{name:"Engineering Demystification",desc:"Translating dense electrical schematics and marine systems into intuitive visual breakdowns."},{name:"Scripting & Technical Directing",desc:"Clear pedagogical walkthroughs for aspiring marine officers and hardware engineers."},{name:"Media Automation Pipelines",desc:"Node.js and Python workflows for audio denoising, dynamic schematic renders, and assembly."}]}];return S.jsxs("section",{id:"capabilities",className:"relative z-10 py-24 w-[90vw] max-w-7xl mx-auto",children:[S.jsxs("div",{className:"flex flex-col gap-2 mb-16 border-b border-[#f0f2f0]/10 pb-8",children:[S.jsx("p",{className:"t-16 text-[#8b8f8c] font-mono uppercase tracking-[0.25em]",children:"Technical Capabilities & Systems"}),S.jsx("p",{className:"t-30 text-[#f0f2f0] font-sans font-normal",children:"Disciplines forged between the high seas and the hardware workbench."})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",children:t.map((e,n)=>{const i=e.icon;return S.jsx("div",{className:"bg-[#26262b]/40 rounded-xl p-8 border border-[#f0f2f0]/10 hover:border-[#f0f2f0]/20 transition-all duration-300 flex flex-col justify-between",children:S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2.5 mb-6 text-xs font-mono tracking-widest uppercase",children:[S.jsx(i,{className:"w-4 h-4",style:{color:e.color}}),S.jsx("span",{style:{color:e.color},children:e.category})]}),S.jsx("div",{className:"flex flex-col gap-5",children:e.items.map((r,s)=>S.jsxs("div",{className:"flex flex-col gap-1 pb-4 border-b border-[#f0f2f0]/5 last:border-none last:pb-0",children:[S.jsx("h4",{className:"text-[#f0f2f0] font-sans font-medium text-sm sm:text-base",children:r.name}),S.jsx("p",{className:"text-[#8b8f8c] font-sans text-xs sm:text-sm leading-relaxed",children:r.desc})]},s))})]})},n)})})]})}var Zu={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),C=R.getContext("2d");C.fillRect(0,0,1,1);var j=R.transferToImageBitmap();C.createPattern(j,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var C=n.exports.Promise,j=C!==void 0?C:e.Promise;return typeof j=="function"?new j(R):(R(l,l),null)}var u=function(R,C){return{transform:function(j){if(R)return j;if(C.has(j))return C.get(j);var ae=new OffscreenCanvas(j.width,j.height),k=ae.getContext("2d");return k.drawImage(j,0,0),C.set(j,ae),ae},clear:function(){C.clear()}}}(a,new Map),h=function(){var R=Math.floor(16.666666666666668),C,j,ae={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(K){var te=Math.random();return ae[te]=requestAnimationFrame(function Q(fe){k===fe||k+R-1<fe?(k=fe,delete ae[te],K()):ae[te]=requestAnimationFrame(Q)}),te},j=function(K){ae[K]&&cancelAnimationFrame(ae[K])}):(C=function(K){return setTimeout(K,R)},j=function(K){return clearTimeout(K)}),{frame:C,cancel:j}}(),f=function(){var R,C,j={};function ae(k){function K(te,Q){k.postMessage({options:te||{},callback:Q})}k.init=function(Q){var fe=Q.transferControlToOffscreen();k.postMessage({canvas:fe},[fe])},k.fire=function(Q,fe,ue){if(C)return K(Q,null),C;var ve=Math.random().toString(36).slice(2);return C=c(function(L){function _e(Ce){Ce.data.callback===ve&&(delete j[ve],k.removeEventListener("message",_e),C=null,u.clear(),ue(),L())}k.addEventListener("message",_e),K(Q,ve),j[ve]=_e.bind(null,{data:{callback:ve}})}),C},k.reset=function(){k.postMessage({reset:!0});for(var Q in j)j[Q](),delete j[Q]}}return function(){if(R)return R;if(!i&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([k])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}ae(R)}return R}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(R,C){return C?C(R):R}function _(R){return R!=null}function p(R,C,j){return x(R&&_(R[C])?R[C]:m[C],j)}function d(R){return R<0?0:Math.floor(R)}function v(R,C){return Math.floor(Math.random()*(C-R))+R}function g(R){return parseInt(R,16)}function M(R){return R.map(N)}function N(R){var C=String(R).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:g(C.substring(0,2)),g:g(C.substring(2,4)),b:g(C.substring(4,6))}}function A(R){var C=p(R,"origin",Object);return C.x=p(C,"x",Number),C.y=p(C,"y",Number),C}function b(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function U(R){var C=R.getBoundingClientRect();R.width=C.width,R.height=C.height}function T(R){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=R,C}function y(R,C,j,ae,k,K,te,Q,fe){R.save(),R.translate(C,j),R.rotate(K),R.scale(ae,k),R.arc(0,0,1,te,Q,fe),R.restore()}function I(R){var C=R.angle*(Math.PI/180),j=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-C+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function H(R,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var j=C.tick++/C.totalTicks,ae=C.x+C.random*C.tiltCos,k=C.y+C.random*C.tiltSin,K=C.wobbleX+C.random*C.tiltCos,te=C.wobbleY+C.random*C.tiltSin;if(R.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-j)+")",R.beginPath(),o&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))R.fill($(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(K-ae)*.1,Math.abs(te-k)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var Q=Math.PI/10*C.wobble,fe=Math.abs(K-ae)*.1,ue=Math.abs(te-k)*.1,ve=C.shape.bitmap.width*C.scalar,L=C.shape.bitmap.height*C.scalar,_e=new DOMMatrix([Math.cos(Q)*fe,Math.sin(Q)*fe,-Math.sin(Q)*ue,Math.cos(Q)*ue,C.x,C.y]);_e.multiplySelf(new DOMMatrix(C.shape.matrix));var Ce=R.createPattern(u.transform(C.shape.bitmap),"no-repeat");Ce.setTransform(_e),R.globalAlpha=1-j,R.fillStyle=Ce,R.fillRect(C.x-ve/2,C.y-L/2,ve,L),R.globalAlpha=1}else if(C.shape==="circle")R.ellipse?R.ellipse(C.x,C.y,Math.abs(K-ae)*C.ovalScalar,Math.abs(te-k)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):y(R,C.x,C.y,Math.abs(K-ae)*C.ovalScalar,Math.abs(te-k)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var we=Math.PI/2*3,Ee=4*C.scalar,De=8*C.scalar,Ne=C.x,Le=C.y,et=5,P=Math.PI/et;et--;)Ne=C.x+Math.cos(we)*De,Le=C.y+Math.sin(we)*De,R.lineTo(Ne,Le),we+=P,Ne=C.x+Math.cos(we)*Ee,Le=C.y+Math.sin(we)*Ee,R.lineTo(Ne,Le),we+=P;else R.moveTo(Math.floor(C.x),Math.floor(C.y)),R.lineTo(Math.floor(C.wobbleX),Math.floor(k)),R.lineTo(Math.floor(K),Math.floor(te)),R.lineTo(Math.floor(ae),Math.floor(C.wobbleY));return R.closePath(),R.fill(),C.tick<C.totalTicks}function O(R,C,j,ae,k){var K=C.slice(),te=R.getContext("2d"),Q,fe,ue=c(function(ve){function L(){Q=fe=null,te.clearRect(0,0,ae.width,ae.height),u.clear(),k(),ve()}function _e(){i&&!(ae.width===r.width&&ae.height===r.height)&&(ae.width=R.width=r.width,ae.height=R.height=r.height),!ae.width&&!ae.height&&(j(R),ae.width=R.width,ae.height=R.height),te.clearRect(0,0,ae.width,ae.height),K=K.filter(function(Ce){return H(te,Ce)}),K.length?Q=h.frame(_e):L()}Q=h.frame(_e),fe=L});return{addFettis:function(ve){return K=K.concat(ve),ue},canvas:R,promise:ue,reset:function(){Q&&h.cancel(Q),fe&&fe()}}}function V(R,C){var j=!R,ae=!!p(C||{},"resize"),k=!1,K=p(C,"disableForReducedMotion",Boolean),te=s&&!!p(C||{},"useWorker"),Q=te?f():null,fe=j?b:U,ue=R&&Q?!!R.__confetti_initialized:!1,ve=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,L;function _e(we,Ee,De){for(var Ne=p(we,"particleCount",d),Le=p(we,"angle",Number),et=p(we,"spread",Number),P=p(we,"startVelocity",Number),E=p(we,"decay",Number),Z=p(we,"gravity",Number),ie=p(we,"drift",Number),re=p(we,"colors",M),se=p(we,"ticks",Number),Re=p(we,"shapes"),me=p(we,"scalar"),ge=!!p(we,"flat"),ze=A(we),le=Ne,Ae=[],Ge=R.width*ze.x,Ue=R.height*ze.y;le--;)Ae.push(I({x:Ge,y:Ue,angle:Le,spread:et,startVelocity:P,color:re[le%re.length],shape:Re[v(0,Re.length)],ticks:se,decay:E,gravity:Z,drift:ie,scalar:me,flat:ge}));return L?L.addFettis(Ae):(L=O(R,Ae,fe,Ee,De),L.promise)}function Ce(we){var Ee=K||p(we,"disableForReducedMotion",Boolean),De=p(we,"zIndex",Number);if(Ee&&ve)return c(function(P){P()});j&&L?R=L.canvas:j&&!R&&(R=T(De),document.body.appendChild(R)),ae&&!ue&&fe(R);var Ne={width:R.width,height:R.height};Q&&!ue&&Q.init(R),ue=!0,Q&&(R.__confetti_initialized=!0);function Le(){if(Q){var P={getBoundingClientRect:function(){if(!j)return R.getBoundingClientRect()}};fe(P),Q.postMessage({resize:{width:P.width,height:P.height}});return}Ne.width=Ne.height=null}function et(){L=null,ae&&(k=!1,e.removeEventListener("resize",Le)),j&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,ue=!1)}return ae&&!k&&(k=!0,e.addEventListener("resize",Le,!1)),Q?Q.fire(we,Ne,et):_e(we,Ne,et)}return Ce.reset=function(){Q&&Q.reset(),L&&L.reset()},Ce}var J;function X(){return J||(J=V(null,{useWorker:!0,resize:!0})),J}function $(R,C,j,ae,k,K,te){var Q=new Path2D(R),fe=new Path2D;fe.addPath(Q,new DOMMatrix(C));var ue=new Path2D;return ue.addPath(fe,new DOMMatrix([Math.cos(te)*k,Math.sin(te)*k,-Math.sin(te)*K,Math.cos(te)*K,j,ae])),ue}function D(R){if(!o)throw new Error("path confetti are not supported in this browser");var C,j;typeof R=="string"?C=R:(C=R.path,j=R.matrix);var ae=new Path2D(C),k=document.createElement("canvas"),K=k.getContext("2d");if(!j){for(var te=1e3,Q=te,fe=te,ue=0,ve=0,L,_e,Ce=0;Ce<te;Ce+=2)for(var we=0;we<te;we+=2)K.isPointInPath(ae,Ce,we,"nonzero")&&(Q=Math.min(Q,Ce),fe=Math.min(fe,we),ue=Math.max(ue,Ce),ve=Math.max(ve,we));L=ue-Q,_e=ve-fe;var Ee=10,De=Math.min(Ee/L,Ee/_e);j=[De,0,0,De,-Math.round(L/2+Q)*De,-Math.round(_e/2+fe)*De]}return{type:"path",path:C,matrix:j}}function W(R){var C,j=1,ae="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?C=R:(C=R.text,j="scalar"in R?R.scalar:j,k="fontFamily"in R?R.fontFamily:k,ae="color"in R?R.color:ae);var K=10*j,te=""+K+"px "+k,Q=new OffscreenCanvas(K,K),fe=Q.getContext("2d");fe.font=te;var ue=fe.measureText(C),ve=Math.ceil(ue.actualBoundingBoxRight+ue.actualBoundingBoxLeft),L=Math.ceil(ue.actualBoundingBoxAscent+ue.actualBoundingBoxDescent),_e=2,Ce=ue.actualBoundingBoxLeft+_e,we=ue.actualBoundingBoxAscent+_e;ve+=_e+_e,L+=_e+_e,Q=new OffscreenCanvas(ve,L),fe=Q.getContext("2d"),fe.font=te,fe.fillStyle=ae,fe.fillText(C,Ce,we);var Ee=1/j;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[Ee,0,0,Ee,-ve*Ee/2,-L*Ee/2]}}n.exports=function(){return X().apply(this,arguments)},n.exports.reset=function(){X().reset()},n.exports.create=V,n.exports.shapeFromPath=D,n.exports.shapeFromText=W})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Zu,!1);const Ax=Zu.exports;Zu.exports.create;function Cx({onOpenTerminal:t}){const[e,n]=he.useState(!1),[i,r]=he.useState(!1),s="augastinlazar@gmail.com",o=a=>{a.preventDefault(),navigator.clipboard.writeText(s),n(!0),Ax({particleCount:35,spread:60,origin:{y:.8},colors:["#f4ce15","#379777","#f0f2f0"],disableForReducedMotion:!0}),setTimeout(()=>n(!1),2500)};return S.jsxs("section",{id:"contact",className:"relative z-10 min-h-[95svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-between py-24 select-none",children:[S.jsxs("div",{className:"my-auto flex flex-col items-center justify-center text-center gap-8 max-w-3xl mx-auto",children:[S.jsx("p",{className:"t-16 text-[#8b8f8c] font-mono uppercase tracking-[0.3em]",children:"Get In Touch"}),S.jsxs("div",{className:"relative group",children:[S.jsx("a",{href:`mailto:${s}`,onClick:o,className:"t-45 sm:t-85 font-sans font-medium text-[#f0f2f0] hover:text-[#f4ce15] transition-colors duration-300 tracking-tight block cursor-pointer",title:"Click to copy email address",children:s}),S.jsx("div",{className:"flex items-center justify-center gap-2 mt-3 text-xs font-mono text-[#8b8f8c]",children:e?S.jsxs("span",{className:"flex items-center gap-1.5 text-[#379777]",children:[S.jsx(q8,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"Copied to clipboard!"})]}):S.jsxs("span",{className:"flex items-center gap-1.5 group-hover:text-[#f0f2f0] transition-colors",children:[S.jsx(Q8,{className:"w-3.5 h-3.5 text-[#f4ce15]"}),S.jsx("span",{children:"Click to copy or compose"})]})})]}),S.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-sm font-sans text-[#8b8f8c] pt-2",children:[S.jsx("span",{children:"or connect via"}),S.jsxs("a",{href:"https://linkedin.com/in/augastinklazar",target:"_blank",rel:"noopener noreferrer",className:"text-[#f0f2f0] hover:text-[#f4ce15] underline underline-offset-4 flex items-center gap-1 transition-colors",children:[S.jsx(ex,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"LinkedIn"})]}),S.jsx("span",{children:"and explore code on"}),S.jsxs("a",{href:"https://github.com/augastinklazar",target:"_blank",rel:"noopener noreferrer",className:"text-[#f0f2f0] hover:text-[#f4ce15] underline underline-offset-4 flex items-center gap-1 transition-colors",children:[S.jsx(I1,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"GitHub"})]})]}),S.jsxs("div",{className:"relative pt-8 cursor-pointer group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:t,children:[S.jsxs("div",{className:`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 rounded bg-[#26262b] border border-[#f0f2f0]/20 text-[11px] font-mono text-[#f0f2f0] whitespace-nowrap transition-all duration-300 pointer-events-none ${i?"opacity-100 transform -translate-y-1":"opacity-0 transform translate-y-1"}`,children:["hey there! click to open CLI",S.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#26262b]"})]}),S.jsxs("svg",{className:"w-16 h-16 sm:w-20 sm:h-20 text-[#8b8f8c] group-hover:text-[#f4ce15] transition-colors duration-500",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[S.jsx("circle",{cx:"50",cy:"20",r:"10",stroke:"currentColor",strokeWidth:"4",className:"group-hover:stroke-[#f4ce15] transition-colors"}),S.jsx("line",{x1:"50",y1:"30",x2:"50",y2:"82",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round"}),S.jsx("line",{x1:"28",y1:"45",x2:"72",y2:"45",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round"}),S.jsx("path",{d:"M20 62C22 78 35 88 50 88C65 88 78 78 80 62",stroke:"#379777",strokeWidth:"4",strokeLinecap:"round",className:"group-hover:stroke-[#42b38e] transition-colors"}),S.jsx("path",{d:"M38 52L50 36L62 52",stroke:"#f4ce15",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),S.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 hover:border-[#f4ce15]/40 text-xs font-mono text-[#f0f2f0] transition-all",children:[S.jsx(D1,{className:"w-3.5 h-3.5 text-[#f4ce15]"}),S.jsx("span",{children:"Launch Engineering Terminal"})]})]}),S.jsxs("footer",{className:"pt-12 border-t border-[#f0f2f0]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b8f8c] tracking-widest uppercase",children:[S.jsx("p",{children:"Augastin K Lazar • © 2026 • MOL Fleet ETO Cadet"}),S.jsx("p",{className:"text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors",children:"This website doesn't use cookies. Zero trackers."})]})]})}function bx({isOpen:t,onClose:e}){const[n,i]=he.useState(""),[r,s]=he.useState([{type:"system",text:"AKL-OS Maritime Terminal v3.2.0 [Online]"},{type:"system",text:'Type "help" for a list of diagnostics commands or "clear" to reset.'}]),o=he.useRef(null),a=he.useRef(null);if(he.useEffect(()=>{t&&setTimeout(()=>{var u;return(u=o.current)==null?void 0:u.focus()},100)},[t]),he.useEffect(()=>{var u;(u=a.current)==null||u.scrollIntoView({behavior:"smooth"})},[r]),!t)return null;const l=u=>{const h=u.trim().toLowerCase(),f=[...r,{type:"user",text:`$ ${u}`}];switch(h){case"help":f.push({type:"output",text:`AVAILABLE COMMANDS:
  about      - Background on Augastin K Lazar & ETO career
  fleet      - Mitsui O.S.K. Lines (MOL) LNG vessel specs & 6.6kV systems
  works      - Featured engineering dossiers & WebGL simulators
  skills     - Hardware, embedded firmware & spatial tools
  contact    - Email & verified social links
  clear      - Clear terminal screen
  exit       - Close terminal window`});break;case"about":f.push({type:"output",text:`Augastin K Lazar:
• Electro Technical Officer Cadet (ETO Cadet) with Mitsui O.S.K. Lines (MOL).
• Based in Thrissur, Kerala, India & sailing international LNG carrier trade routes.
• Demanding convergence of high-voltage power engineering and bare-metal embedded intelligence.`});break;case"fleet":f.push({type:"output",text:`MOL LNG FLEET TELEMETRY:
• Voltage Distribution: 6.6kV 3-Phase 60Hz bus-tie architecture
• Breakers: High-interrupt Vacuum Circuit Breakers (VCB) with undervoltage release
• Machinery: Dual-fuel diesel generators (DFDG), BOG compressors, cryogenic pumps
• Standards: STCW Regulation III/6 ETO compliance & ClassNK automation rules`});break;case"works":f.push({type:"output",text:`FEATURED DOSSIERS:
[01] High-Voltage Maritime Power & Blackout Simulator (6.6kV Synchroscope)
[02] Autonomous Dual-Axis Robotic Gimbal Tracker (STM32 + FreeRTOS + Kalman)
[03] Sub-GHz Industrial Marine Sensor Mesh (868MHz LoRa + ESP32)
[04] Interactive 3D LNG Engine Room Digital Twin (Three.js WebGL)`});break;case"skills":f.push({type:"output",text:`CORE DISCIPLINES:
• Firmware: C, C++, ARM Cortex-M4/M7, FreeRTOS, ESP32, Bare-Metal Drivers
• Protocols: LoRa Sub-GHz, CAN 2.0B, RS-485 Modbus RTU, SPI, I2C, MQTT
• Marine HV: 6.6kV switchboards, PMS preferential tripping, Ex-d barriers
• Creative: Three.js, WebGL 2.0, GSAP, React, Vite, Node.js`});break;case"contact":f.push({type:"output",text:`COMMUNICATION CHANNELS:
• Email:    augastinlazar@gmail.com
• LinkedIn: linkedin.com/in/augastinklazar
• GitHub:   github.com/augastinklazar`});break;case"clear":s([]),i("");return;case"exit":case"quit":e();return;case"":break;default:f.push({type:"error",text:`Command not recognized: "${u}". Type "help" for valid commands.`});break}s(f),i("")},c=u=>{u.preventDefault(),l(n)};return S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",children:S.jsxs("div",{className:"w-full max-w-3xl h-[520px] bg-[#161619] rounded-xl border border-[#f0f2f0]/15 shadow-2xl flex flex-col overflow-hidden font-mono text-xs",onClick:u=>u.stopPropagation(),children:[S.jsxs("div",{className:"px-4 py-3 bg-[#26262b] border-b border-[#f0f2f0]/10 flex items-center justify-between text-[#8b8f8c]",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#f4ce15]"}),S.jsx("span",{className:"text-[#f0f2f0] font-semibold text-[11px]",children:"AKL-TERMINAL // ETO-CADET-CONSOLE"})]}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{onClick:e,className:"p-1 rounded hover:bg-[#1e1e22] text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors",children:S.jsx(ux,{className:"w-4 h-4"})})})]}),S.jsxs("div",{className:"flex-1 p-4 overflow-y-auto flex flex-col gap-2 text-[#f0f2f0]/90",children:[r.map((u,h)=>S.jsx("div",{className:`leading-relaxed whitespace-pre-wrap ${u.type==="system"?"text-[#8b8f8c]":u.type==="user"?"text-[#f4ce15] font-semibold":u.type==="error"?"text-red-400":"text-[#f0f2f0]"}`,children:u.text},h)),S.jsx("div",{ref:a})]}),S.jsxs("form",{onSubmit:c,className:"p-3 bg-[#1e1e22] border-t border-[#f0f2f0]/10 flex items-center gap-2",children:[S.jsx("span",{className:"text-[#379777] font-bold",children:"$"}),S.jsx("input",{ref:o,type:"text",value:n,onChange:u=>i(u.target.value),placeholder:"Type command (e.g. 'help', 'about', 'fleet', 'works')...",className:"flex-1 bg-transparent border-none outline-none text-[#f0f2f0] placeholder-[#8b8f8c]/60 font-mono text-xs"}),S.jsx("button",{type:"submit",className:"px-3 py-1 rounded bg-[#26262b] text-[#f4ce15] hover:text-white transition-colors text-[11px]",children:"EXEC"})]})]})})}const Ta=[{id:"hero",label:"01 HERO"},{id:"statement",label:"02 VISION"},{id:"fleet",label:"03 FLEET"},{id:"origins",label:"04 ORIGINS"},{id:"philosophy",label:"05 PHILOSOPHY"},{id:"works",label:"06 WORKS"},{id:"capabilities",label:"07 SYSTEMS"},{id:"contact",label:"08 CONTACT"}];function Rx(){const[t,e]=he.useState("hero");he.useEffect(()=>{const i=()=>{const r=window.scrollY+window.innerHeight*.4;for(let s=Ta.length-1;s>=0;s--){const o=document.getElementById(Ta[s].id);if(o&&o.offsetTop<=r){e(Ta[s].id);break}}};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]);const n=i=>{const r=document.getElementById(i);r&&window.lenis?window.lenis.scrollTo(r,{offset:-50,duration:1.2}):r&&r.scrollIntoView({behavior:"smooth"})};return S.jsx("nav",{"aria-label":"Section Waypoint Radar",className:"fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-auto",children:Ta.map(i=>{const r=t===i.id;return S.jsxs("button",{onClick:()=>n(i.id),className:"group flex items-center gap-3 cursor-pointer py-1",children:[S.jsx("span",{className:`font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${r?"text-[#f4ce15] opacity-100 transform translate-x-0":"text-[#8b8f8c] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"}`,children:i.label}),S.jsx("span",{className:`block transition-all duration-300 rounded-full ${r?"w-6 h-1 bg-[#f4ce15] shadow-[0_0_8px_rgba(244,206,21,0.6)]":"w-1.5 h-1.5 bg-[#8b8f8c]/40 group-hover:bg-[#f0f2f0] group-hover:scale-125"}`})]},i.id)})})}function Px(){const[t,e]=he.useState(!1);return he.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo(0,0);const n=new xg({lerp:.24,duration:.32,smoothWheel:!0,wheelMultiplier:1.15,touchMultiplier:1.4,infinite:!1});window.lenis=n;function i(o){n.raf(o),requestAnimationFrame(i)}const r=requestAnimationFrame(i),s=o=>{const a=o.target.closest('a[href^="#"]');if(!a)return;const l=a.getAttribute("href");if(!l)return;if(l==="#"||l==="#hero"){o.preventDefault(),n.scrollTo(0,{duration:1.2});return}const c=document.querySelector(l);c&&(o.preventDefault(),n.scrollTo(c,{offset:-60,duration:1.4}))};return document.addEventListener("click",s),()=>{cancelAnimationFrame(r),document.removeEventListener("click",s),n.destroy(),window.lenis=null}},[]),S.jsxs("div",{className:"relative min-h-screen bg-[#1e1e22] text-[#f0f2f0] font-sans antialiased overflow-x-hidden selection:bg-[#f4ce15] selection:text-[#1e1e22]",children:[S.jsx(z8,{}),S.jsx(B8,{}),S.jsx(H8,{}),S.jsx(fx,{onOpenTerminal:()=>e(!0)}),S.jsx(Rx,{}),S.jsxs("main",{className:"relative z-10",children:[S.jsx(hx,{}),S.jsx(px,{}),S.jsx(mx,{}),S.jsx(vx,{}),S.jsx(xx,{}),S.jsx(wx,{}),S.jsx(Tx,{}),S.jsx(Cx,{onOpenTerminal:()=>e(!0)})]}),S.jsx(bx,{isOpen:t,onClose:()=>e(!1)})]})}$c.createRoot(document.getElementById("root")).render(S.jsx(im.StrictMode,{children:S.jsx(Px,{})}));
