"use strict";var e,r=require("react"),t={exports:{}},o={};var n,a,i={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function l(){return n||(n=1,"production"!==process.env.NODE_ENV&&function(){function e(r){if(null==r)return null;if("function"==typeof r)return r.$$typeof===z?null:r.displayName||r.name||null;if("string"==typeof r)return r;switch(r){case O:return"Fragment";case _:return"Portal";case $:return"Profiler";case R:return"StrictMode";case N:return"Suspense";case D:return"SuspenseList"}if("object"==typeof r)switch("number"==typeof r.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case C:return(r.displayName||"Context")+".Provider";case x:return(r._context.displayName||"Context")+".Consumer";case E:var t=r.render;return(r=r.displayName)||(r=""!==(r=t.displayName||t.name||"")?"ForwardRef("+r+")":"ForwardRef"),r;case P:return null!==(t=r.displayName||null)?t:e(r.type)||"Memo";case T:t=r._payload,r=r._init;try{return e(r(t))}catch(e){}}return null}function t(e){return""+e}function o(e){try{t(e);var r=!1}catch(e){r=!0}if(r){var o=(r=console).error,n="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),t(e)}}function n(){}function a(e){if(void 0===J)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);J=r&&r[1]||"",X=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+J+e+X}function l(e,r){if(!e||V)return"";var t=Y.get(e);if(void 0!==t)return t;V=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var o;o=I.H,I.H=null,function(){if(0===W){d=console.log,b=console.info,v=console.warn,g=console.error,h=console.group,k=console.groupCollapsed,w=console.groupEnd;var e={configurable:!0,enumerable:!0,value:n,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}();try{var i={DetermineComponentFrameRoot:function(){try{if(r){var t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var o=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){o=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){o=e}(t=e())&&"function"==typeof t.catch&&t.catch((function(){}))}}catch(e){if(e&&o&&"string"==typeof e.stack)return[e.stack,o.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),s=c[0],u=c[1];if(s&&u){var f=s.split("\n"),p=u.split("\n");for(c=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;c<p.length&&!p[c].includes("DetermineComponentFrameRoot");)c++;if(l===f.length||c===p.length)for(l=f.length-1,c=p.length-1;1<=l&&0<=c&&f[l]!==p[c];)c--;for(;1<=l&&0<=c;l--,c--)if(f[l]!==p[c]){if(1!==l||1!==c)do{if(l--,0>--c||f[l]!==p[c]){var y="\n"+f[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),"function"==typeof e&&Y.set(e,y),y}}while(1<=l&&0<=c);break}}}finally{V=!1,I.H=o,function(){if(0==--W){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:U({},e,{value:d}),info:U({},e,{value:b}),warn:U({},e,{value:v}),error:U({},e,{value:g}),group:U({},e,{value:h}),groupCollapsed:U({},e,{value:k}),groupEnd:U({},e,{value:w})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=t}return f=(f=e?e.displayName||e.name:"")?a(f):"","function"==typeof e&&Y.set(e,f),f}function c(e){if(null==e)return"";if("function"==typeof e){var r=e.prototype;return l(e,!(!r||!r.isReactComponent))}if("string"==typeof e)return a(e);switch(e){case N:return a("Suspense");case D:return a("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case E:return e=l(e.render,!1);case P:return c(e.type);case T:r=e._payload,e=e._init;try{return c(e(r))}catch(e){}}return""}function s(){var e=I.A;return null===e?null:e.getOwner()}function u(){var r=e(this.type);return B[r]||(B[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(r=this.props.ref)?r:null}function f(r,t,n,a,i,l){if("string"==typeof r||"function"==typeof r||r===O||r===$||r===R||r===N||r===D||r===F||"object"==typeof r&&null!==r&&(r.$$typeof===T||r.$$typeof===P||r.$$typeof===C||r.$$typeof===x||r.$$typeof===E||r.$$typeof===H||void 0!==r.getModuleId)){var c=t.children;if(void 0!==c)if(a)if(L(c)){for(a=0;a<c.length;a++)p(c[a],r);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else p(c,r)}else c="",(void 0===r||"object"==typeof r&&null!==r&&0===Object.keys(r).length)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===r?a="null":L(r)?a="array":void 0!==r&&r.$$typeof===j?(a="<"+(e(r.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):a=typeof r,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,c);if(M.call(t,"key")){c=e(r);var f=Object.keys(t).filter((function(e){return"key"!==e}));a=0<f.length?"{key: someKey, "+f.join(": ..., ")+": ...}":"{key: someKey}",G[c+a]||(f=0<f.length?"{"+f.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',a,c,f,c),G[c+a]=!0)}if(c=null,void 0!==n&&(o(n),c=""+n),function(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(t)&&(o(t.key),c=""+t.key),"key"in t)for(var y in n={},t)"key"!==y&&(n[y]=t[y]);else n=t;return c&&function(e,r){function t(){K||(K=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(n,"function"==typeof r?r.displayName||r.name||"Unknown":r),function(e,r,t,o,n,a){return t=a.ref,e={$$typeof:j,type:e,key:r,props:a,_owner:n},null!==(void 0!==t?t:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:u}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(r,c,l,0,s(),n)}function p(e,r){if("object"==typeof e&&e&&e.$$typeof!==q)if(L(e))for(var t=0;t<e.length;t++){var o=e[t];y(o)&&m(o,r)}else if(y(e))e._store&&(e._store.validated=1);else if(null===e||"object"!=typeof e?t=null:t="function"==typeof(t=A&&e[A]||e["@@iterator"])?t:null,"function"==typeof t&&t!==e.entries&&(t=t.call(e))!==e)for(;!(e=t.next()).done;)y(e.value)&&m(e.value,r)}function y(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}function m(r,t){if(r._store&&!r._store.validated&&null==r.key&&(r._store.validated=1,t=function(r){var t="",o=s();return o&&(o=e(o.type))&&(t="\n\nCheck the render method of `"+o+"`."),t||(r=e(r))&&(t="\n\nCheck the top-level render call using <"+r+">."),t}(t),!Q[t])){Q[t]=!0;var o="";r&&null!=r._owner&&r._owner!==s()&&(o=null,"number"==typeof r._owner.tag?o=e(r._owner.type):"string"==typeof r._owner.name&&(o=r._owner.name),o=" It was passed a child from "+o+".");var n=I.getCurrentStack;I.getCurrentStack=function(){var e=c(r.type);return n&&(e+=n()||""),e},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),I.getCurrentStack=n}}var d,b,v,g,h,k,w,S=r,j=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),C=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),A=Symbol.iterator,z=Symbol.for("react.client.reference"),I=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=Object.prototype.hasOwnProperty,U=Object.assign,H=Symbol.for("react.client.reference"),L=Array.isArray,W=0;n.__reactDisabledLog=!0;var J,X,K,V=!1,Y=new("function"==typeof WeakMap?WeakMap:Map),q=Symbol.for("react.client.reference"),B={},G={},Q={};i.Fragment=O,i.jsx=function(e,r,t,o,n){return f(e,r,t,!1,0,n)},i.jsxs=function(e,r,t,o,n){return f(e,r,t,!0,0,n)}}()),i}var c=(a||(a=1,"production"===process.env.NODE_ENV?t.exports=function(){if(e)return o;e=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,t,o){var n=null;if(void 0!==o&&(n=""+o),void 0!==t.key&&(n=""+t.key),"key"in t)for(var a in o={},t)"key"!==a&&(o[a]=t[a]);else o=t;return t=o.ref,{$$typeof:r,type:e,key:n,ref:void 0!==t?t:null,props:o}}return o.Fragment=t,o.jsx=n,o.jsxs=n,o}():t.exports=l()),t.exports);module.exports=function(){return c.jsx("div",{children:"Hallo"})};
//# sourceMappingURL=index.js.map
