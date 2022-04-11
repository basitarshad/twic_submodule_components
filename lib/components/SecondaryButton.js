var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.SecondaryButton=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var React=_interopRequireWildcard(require("react"));var _PrimaryButton=require("./PrimaryButton");var _commons=require("../commons");var _this=this,_jsxFileName="/Users/mbp/Documents/twic/twic_mobile_components/src/components/SecondaryButton.tsx";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var SecondaryButton=function SecondaryButton(props){var _props$disabled=props.disabled,disabled=_props$disabled===void 0?false:_props$disabled;return React.createElement(_PrimaryButton.PrimaryButton,(0,_extends2.default)({contentWrapperStyle:{elevation:0},buttonColor:_commons.Colors.white,disabledColor:_commons.Colors.white,labelStyle:{color:disabled?_commons.Colors.newDimGrey:_commons.Colors.newBlue,marginLeft:15,textAlign:'center'},buttonStyle:{borderWidth:1,borderColor:_commons.Colors.newDimGrey}},props,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:5}}));};exports.SecondaryButton=SecondaryButton;
//# sourceMappingURL=SecondaryButton.js.map