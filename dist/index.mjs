import{jsx as e,jsxs as r}from"react/jsx-runtime";function t(r){var t=r.children;return e("div",{className:"text-center",children:e("div",{className:"inline-block text-center scale-100 transition-all duration-100 hover:scale-110 [&>*]:px-5",children:t})})}var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},n.apply(this,arguments)};function l(t){var l=t.children,o=t.className;t.list;var i=t.onClose,s=t.open,a=t.title,c=t.version,p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t}(t,["children","className","list","onClose","open","title","version"]);return r("div",n({className:o+" z-10 flex bg-white flex-col h-full flex-1 items-center py-3 text-black shadow-xl transition-all duration-300 ease-out "+(s?"":" -translate-x-[100%] ")},p,{children:[e("button",{className:"absolute top-0 right-0 m-2 aspect-square visible sm:hidden cursor-pointer",onClick:i,children:"Close"}),e("span",{className:"self-center m-5 text-2xl",children:a}),e("div",{className:"flex-1",children:l}),c&&r("div",{children:["Version: ",c]})]}))}"function"==typeof SuppressedError&&SuppressedError;export{t as NavigationElement,l as Sidebar};
//# sourceMappingURL=index.mjs.map
