/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysResRequestChannelIndex from "./index.js";
import mSysResRequestChannel from "./model.js";
import cSysResRequestChannelDetail from "./detail.js";
import cSysResRequestChannelEdit from "./edit.js";

const sysResRequestChannelIndex = { onEnter: undefined, component: cSysResRequestChannelIndex, models: [mSysResRequestChannel] };
const sysResRequestChannelDetail = { onEnter: undefined, component: cSysResRequestChannelDetail, models: [mSysResRequestChannel] };
const sysResRequestChannelEdit = { onEnter: undefined, component: cSysResRequestChannelEdit, models: [mSysResRequestChannel] };

export {
	sysResRequestChannelIndex, sysResRequestChannelDetail, sysResRequestChannelEdit,
}