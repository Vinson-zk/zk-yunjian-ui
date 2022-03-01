/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysSetItemIndex from "./index.js";
import mSysSetItem from "./model.js";
import cSysSetItemDetail from "./detail.js";
import cSysSetItemEdit from "./edit.js";

const sysSetItemIndex = { onEnter: undefined, component: cSysSetItemIndex, models: [mSysSetItem] };
const sysSetItemDetail = { onEnter: undefined, component: cSysSetItemDetail, models: [mSysSetItem] };
const sysSetItemEdit = { onEnter: undefined, component: cSysSetItemEdit, models: [mSysSetItem] };

export {
	sysSetItemIndex, sysSetItemDetail, sysSetItemEdit,
}