/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysResApplicationSystemIndex from "./index.js";
import mSysResApplicationSystem from "./model.js";
import cSysResApplicationSystemDetail from "./detail.js";
import cSysResApplicationSystemEdit from "./edit.js";

const sysResApplicationSystemIndex = { onEnter: undefined, component: cSysResApplicationSystemIndex, models: [mSysResApplicationSystem] };
const sysResApplicationSystemDetail = { onEnter: undefined, component: cSysResApplicationSystemDetail, models: [mSysResApplicationSystem] };
const sysResApplicationSystemEdit = { onEnter: undefined, component: cSysResApplicationSystemEdit, models: [mSysResApplicationSystem] };

export {
	sysResApplicationSystemIndex, sysResApplicationSystemDetail, sysResApplicationSystemEdit,
}