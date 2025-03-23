import{jsx as e,jsxs as r}from"react/jsx-runtime";import t from"next/image";import n from"next/link";import l from"styled-components";var a=function(){return a=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},a.apply(this,arguments)};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var o,s={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var c,p,d,f,m=(o||(o=1,c=s,function(){var e={}.hasOwnProperty;function r(){for(var e="",r=0;r<arguments.length;r++){var l=arguments[r];l&&(e=n(e,t(l)))}return e}function t(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var l="";for(var a in t)e.call(t,a)&&t[a]&&(l=n(l,a));return l}function n(e,r){return r?e?e+" "+r:e+r:e}c.exports?(r.default=r,c.exports=r):window.classNames=r}()),s.exports),u=i(m),h=l.div(f||(p=["\n  background-color: var(--primary-color);\n  box-shadow: 0 1px 8px rgb(0 0 0 / 30%);\n"],d=["\n  background-color: var(--primary-color);\n  box-shadow: 0 1px 8px rgb(0 0 0 / 30%);\n"],Object.defineProperty?Object.defineProperty(p,"raw",{value:d}):p.raw=d,f=p));function x(l){var a=l.className,i=l.iconUrl,o=l.navRoutes,s=l.subtitle,c=l.title,p=l.pathName;return e(h,{className:"NavBar pt-2 "+a,children:r("div",{className:"flex flex-col",children:[r("div",{className:"w-full mb-2 align-middle flex flex-col sm:justify-center sm:gap-2  sm:flex-row ",children:[r("div",{className:"align-middle text-center",children:[i&&e(t,{className:"inline-block py-2 w-auto h-12",src:i,alt:"Icon",width:32,height:32}),e("h2",{className:"inline text-center align-middle",children:c})]}),e("div",{className:"hidden mx-3 sm:visible text-center"}),e("h3",{className:"inline self-center",children:s})]}),e("div",{className:"self-center overflow-hidden",children:e("ul",{className:"flex flex-row flex-wrap",children:o.map((function(r,t){return e("li",{className:"hover:bg-stone-900 flex-1 text-center",children:e(n,{className:"flex justify-center px-3 font-bold text-link min-w-40 min-h-10\r\n                    hover:text-linkHover transform transition duration-200 hover:scale-110 ",href:{pathname:r.path},children:e("span",{className:" inline self-center "+u({" text-white ":!!p&&!!r.path&&p.toLowerCase()===r.path.toLowerCase()}),children:r.pathname})})},r.pathname)}))})})]})})}function v(r){var t=r.children;return e("div",{className:"text-center",children:e("div",{className:"inline-block text-center scale-100 transition-all duration-100 hover:scale-110 [&>*]:px-5",children:t})})}function b(t){var n=t.children,l=t.className;t.list;var i=t.onClose,o=t.open,s=t.title,c=t.version,p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(t,["children","className","list","onClose","open","title","version"]);return r("div",a({className:l+" z-10 flex bg-white flex-col h-full flex-1 items-center py-3 text-black shadow-xl transition-all duration-300 ease-out "+(o?"":" -translate-x-[100%] ")},p,{children:[e("button",{className:"absolute top-0 right-0 m-2 aspect-square visible sm:hidden cursor-pointer",onClick:i,children:"Close"}),e("span",{className:"self-center m-5 text-2xl",children:s}),e("div",{className:"flex-1",children:n}),c&&r("div",{children:["Version: ",c]})]}))}export{x as Navbar,v as NavigationElement,b as Sidebar};
//# sourceMappingURL=index.mjs.map
