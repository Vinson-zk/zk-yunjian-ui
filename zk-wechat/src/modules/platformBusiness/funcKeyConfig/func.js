/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cFuncKeyConfigIndex from "./index.js";
import mFuncKeyConfig from "./model.js";
import cFuncKeyConfigDetail from "./detail.js";
import cFuncKeyConfigEdit from "./edit.js";

const funcKeyConfigIndex = { onEnter: undefined, component: cFuncKeyConfigIndex, models: [mFuncKeyConfig] };
const funcKeyConfigDetail = { onEnter: undefined, component: cFuncKeyConfigDetail, models: [mFuncKeyConfig] };
const funcKeyConfigEdit = { onEnter: undefined, component: cFuncKeyConfigEdit, models: [mFuncKeyConfig] };

export {
	funcKeyConfigIndex, funcKeyConfigDetail, funcKeyConfigEdit,
}