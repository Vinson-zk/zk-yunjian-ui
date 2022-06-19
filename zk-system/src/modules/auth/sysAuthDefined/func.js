/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysAuthDefinedIndex from "./index.js";
import mSysAuthDefined from "./model.js";
import cSysAuthDefinedDetail from "./detail.js";
import cSysAuthDefinedEdit from "./edit.js";

const sysAuthDefinedIndex = { onEnter: undefined, component: cSysAuthDefinedIndex, models: [mSysAuthDefined] };
const sysAuthDefinedDetail = { onEnter: undefined, component: cSysAuthDefinedDetail, models: [mSysAuthDefined] };
const sysAuthDefinedEdit = { onEnter: undefined, component: cSysAuthDefinedEdit, models: [mSysAuthDefined] };

export {
	sysAuthDefinedIndex, sysAuthDefinedDetail, sysAuthDefinedEdit,
}