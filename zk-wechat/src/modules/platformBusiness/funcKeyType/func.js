/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cFuncKeyTypeIndex from "./index.js";
import mFuncKeyType from "./model.js";
import cFuncKeyTypeDetail from "./detail.js";
import cFuncKeyTypeEdit from "./edit.js";

const funcKeyTypeIndex = { onEnter: undefined, component: cFuncKeyTypeIndex, models: [mFuncKeyType] };
const funcKeyTypeDetail = { onEnter: undefined, component: cFuncKeyTypeDetail, models: [mFuncKeyType] };
const funcKeyTypeEdit = { onEnter: undefined, component: cFuncKeyTypeEdit, models: [mFuncKeyType] };

export {
	funcKeyTypeIndex, funcKeyTypeDetail, funcKeyTypeEdit,
}