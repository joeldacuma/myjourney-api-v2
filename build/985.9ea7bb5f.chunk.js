(self["webpackChunkmyjourney_api_v_2"] = self["webpackChunkmyjourney_api_v_2"] || []).push([[985],{

/***/ 60985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(34387);
  } else {}
  

/***/ }),

/***/ 34387:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384),__webpack_require__(39711)):0}(this,(function(n,e,t){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=115)}({0:function(n,e,t){n.exports=t(16)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(22),o=t(23),a=t(19),i=t(24);n.exports=function(n,e){return r(n)||o(n,e)||a(n,e)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},115:function(n,e,t){"use strict";t.r(e),t.d(e,"LinkButton",(function(){return _}));var r,o=t(5),a=t.n(o),i=t(6),c=t.n(i),s=t(3),u=t.n(s),d=t(1),l=t.n(d),f=t(34),p=t(2),h=t.n(p),g=t(0),b=t.n(g),m=t(8),v=t(4),x=t(35),y=t(29),O=t(38),w=["variant","startIcon","endIcon","disabled","children","size","href","to"],S=h()(O.BaseButtonWrapper)(r||(r=u()(["\n  padding: ",";\n  background: ",";\n  border: none;\n  border-radius: ",";\n  "," {\n    display: flex;\n    align-items: center;\n  }\n  "," {\n    color: ",";\n  }\n  &[aria-disabled='true'] {\n    ","\n    &:active {\n      ","\n    }\n  }\n  &:hover {\n    ","\n  }\n  &:active {\n    ","\n  }\n  ","\n\n  /**\n    Link specific properties\n  */\n  display: inline-flex;\n  text-decoration: none;\n  pointer-events: ",";\n"])),(function(n){var e=n.theme,t=n.size;return"".concat("S"===t?e.spaces[2]:"10px"," ").concat(e.spaces[4])}),(function(n){return n.theme.colors.primary600}),(function(n){return n.theme.borderRadius}),v.Box,m.Typography,(function(n){return n.theme.colors.neutral0}),x.b,x.b,x.c,x.a,x.d,(function(n){return n.disabled?"none":void 0})),_=l.a.forwardRef((function(n,e){var t=n.variant,r=n.startIcon,o=n.endIcon,i=n.disabled,s=n.children,u=n.size,d=n.href,p=n.to,h=c()(n,w),g=d?"_blank":void 0,b=d?"noreferrer noopener":void 0;return l.a.createElement(S,a()({ref:e,"aria-disabled":i,size:u,variant:t,target:g,rel:b,to:i?void 0:p,href:i?"#":d},h,{as:p&&!i?f.NavLink:"a"}),r&&l.a.createElement(v.Box,{"aria-hidden":!0,paddingRight:2},r),"S"===u?l.a.createElement(m.Typography,{variant:"pi",fontWeight:"bold"},s):l.a.createElement(m.Typography,{fontWeight:"bold"},s),o&&l.a.createElement(v.Box,{"aria-hidden":!0,paddingLeft:2},o))}));_.displayName="LinkButton",_.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},_.propTypes={children:b.a.string.isRequired,disabled:b.a.bool,endIcon:b.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},onClick:b.a.func,size:b.a.oneOf(y.a),startIcon:b.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")},variant:b.a.oneOf(y.c)}},13:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return a}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},a=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},16:function(n,e,t){"use strict";var r=t(17);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},17:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){var r=t(18);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e,t){var r=t(41),o=t(42),a=t(19),i=t(43);n.exports=function(n){return r(n)||o(n)||a(n)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return a}));var r=["success-light","danger-light"],o=["default","tertiary","secondary","danger","success","ghost"].concat(r),a=["S","L"]},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},34:function(n,e){n.exports=t},35:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return d})),t.d(e,"d",(function(){return l}));var r=t(27),o=t.n(r),a=t(8),i=t(29),c=function(n){return i.b.includes(n)?n.substring(0,n.lastIndexOf("-")):"tertiary"===n?"neutral":["default","secondary"].includes(n)||!i.c.includes(n)?"primary":n},s=function(n){var e=n.theme;return"\n    border: 1px solid ".concat(e.colors.neutral200,";\n    background: ").concat(e.colors.neutral150,";\n    ").concat(a.Typography," {\n      color: ").concat(e.colors.neutral600,";\n    }\n    svg {\n      > g, path {\n        fill: ").concat(e.colors.neutral600,";\n      }\n    }\n  ")},u=function(n){var e=n.theme,t=n.variant;return[].concat(o()(i.b),["secondary"]).includes(t)?"\n      background-color: ".concat(e.colors.neutral0,";\n    "):"tertiary"===t||"ghost"===t?"\n      background-color: ".concat(e.colors.neutral100,";\n    "):"\n    border: 1px solid ".concat(e.colors["".concat(c(t),"500")],";\n    background: ").concat(e.colors["".concat(c(t),"500")],";\n  ")},d=function(n){var e=n.theme,t=n.variant;return[].concat(o()(i.b),["secondary"]).includes(t)?"\n      background-color: ".concat(e.colors.neutral0,";\n      border: 1px solid ").concat(e.colors["".concat(c(t),"600")],";\n      ").concat(a.Typography," {\n        color: ").concat(e.colors["".concat(c(t),"600")],";\n      }\n      svg {\n        > g, path {\n          fill: ").concat(e.colors["".concat(c(t),"600")],";\n        }\n      }\n    "):"tertiary"===t?"\n      background-color: ".concat(e.colors.neutral150,";\n    "):"\n    border: 1px solid ".concat(e.colors["".concat(c(t),"600")],";\n    background: ").concat(e.colors["".concat(c(t),"600")],";\n  ")},l=function(n){var e=n.theme,t=n.variant;switch(t){case"danger-light":case"success-light":case"secondary":return"\n          border: 1px solid ".concat(e.colors["".concat(c(t),"200")],";\n          background: ").concat(e.colors["".concat(c(t),"100")],";\n          ").concat(a.Typography," {\n            color: ").concat(e.colors["".concat(c(t),"700")],";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(e.colors["".concat(c(t),"700")],";\n            }\n          }\n        ");case"tertiary":return"\n          border: 1px solid ".concat(e.colors.neutral200,";\n          background: ").concat(e.colors.neutral0,";\n          ").concat(a.Typography," {\n            color: ").concat(e.colors.neutral800,";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(e.colors.neutral800,";\n            }\n          }\n        ");case"ghost":return"\n        border: 1px solid transparent;\n        background: transparent;\n\n        ".concat(a.Typography," {\n          color: ").concat(e.colors.neutral800,";\n        }\n\n        svg {\n          > g, path {\n            fill: ").concat(e.colors.neutral500,";\n          }\n        }\n      ");default:return"\n          border: 1px solid ".concat(e.colors["".concat(c(t),"600")],";\n          background: ").concat(e.colors["".concat(c(t),"600")],";\n        ")}}},38:function(n,e,t){"use strict";t.r(e),t.d(e,"BaseButtonWrapper",(function(){return v})),t.d(e,"BaseButton",(function(){return x}));var r,o=t(5),a=t.n(o),i=t(6),c=t.n(i),s=t(3),u=t.n(s),d=t(1),l=t.n(d),f=t(0),p=t.n(f),h=t(2),g=t.n(h),b=t(13),m=["disabled","children"],v=g.a.button(r||(r=u()(["\n  display: flex;\n  cursor: pointer;\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n  border: 1px solid ",";\n  svg {\n    height: ",";\n    width: ",";\n  }\n  svg {\n    > g,\n    path {\n      fill: ",";\n    }\n  }\n  &[aria-disabled='true'] {\n    pointer-events: none;\n  }\n\n  ","\n"])),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.neutral200}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.colors.neutral0}),b.a),x=l.a.forwardRef((function(n,e){var t=n.disabled,r=n.children,o=c()(n,m);return l.a.createElement(v,a()({ref:e,"aria-disabled":t,type:"button",disabled:t},o),r)}));x.displayName="BaseButton",x.defaultProps={disabled:!1},x.propTypes={children:p.a.node.isRequired,disabled:p.a.bool}},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return f}));var r,o=t(3),a=t.n(o),i=t(0),c=t.n(i),s=t(2),u=t.n(s),d=t(7),l={color:!0},f=u.a.div.withConfig({shouldForwardProp:function(n,e){return!l[n]&&e(n)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(d.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(d.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(d.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(d.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(d.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(d.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(d.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(d.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(d.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.sizes[e]||e}),(function(n){var e=n.maxWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.minWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.height;return n.theme.sizes[e]||e}),(function(n){var e=n.maxHeight;return n.theme.sizes[e]||e}),(function(n){var e=n.minHeight;return n.theme.sizes[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:c.a.func,background:c.a.string,basis:c.a.oneOfType([c.a.string,c.a.string]),borderColor:c.a.string,children:c.a.oneOfType([c.a.node,c.a.string]),color:c.a.string,flex:c.a.oneOfType([c.a.string,c.a.string]),grow:c.a.oneOfType([c.a.string,c.a.string]),hasRadius:c.a.bool,hiddenS:c.a.bool,hiddenXS:c.a.bool,padding:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingBottom:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingLeft:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingRight:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingTop:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),shadow:c.a.string,shrink:c.a.oneOfType([c.a.string,c.a.string])}},41:function(n,e,t){var r=t(18);n.exports=function(n){if(Array.isArray(n))return r(n)},n.exports.default=n.exports,n.exports.__esModule=!0},42:function(n,e){n.exports=function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)},n.exports.default=n.exports,n.exports.__esModule=!0},43:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e,t){var r=t(21);n.exports=function(n,e){if(null==n)return{};var t,o,a=r(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r);e.a=function(n,e,t){if(void 0!==e){if(Array.isArray(e)){var r=o()(e,3),a=r[0],i=r[1],c=r[2],s="".concat(n,": ").concat(t.spaces[a],";");return void 0!==i&&(s+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[i],";\n        }")),void 0!==c&&(s+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),s}var u=t.spaces[e]||e;return"".concat(n,": ").concat(u,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return l}));var r,o=t(3),a=t.n(o),i=t(0),c=t.n(i),s=t(2),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},l=t.n(s).a.span.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=a()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));l.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},l.propTypes={fontSize:c.a.oneOfType([c.a.number,c.a.string]),fontWeight:c.a.string,lineHeight:c.a.oneOfType([c.a.number,c.a.string]),textColor:c.a.string,textTransform:c.a.string,variant:c.a.oneOf(u)}}})}));

/***/ })

}]);