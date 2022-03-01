/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysResFuncApiIndex from "./index.js";
import mSysResFuncApi from "./model.js";
import cSysResFuncApiDetail from "./detail.js";
import cSysResFuncApiEdit from "./edit.js";

const sysResFuncApiIndex = { onEnter: undefined, component: cSysResFuncApiIndex, models: [mSysResFuncApi] };
const sysResFuncApiDetail = { onEnter: undefined, component: cSysResFuncApiDetail, models: [mSysResFuncApi] };
const sysResFuncApiEdit = { onEnter: undefined, component: cSysResFuncApiEdit, models: [mSysResFuncApi] };

export {
	sysResFuncApiIndex, sysResFuncApiDetail, sysResFuncApiEdit,
}