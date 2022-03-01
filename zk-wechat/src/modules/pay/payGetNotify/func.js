/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cPayGetNotifyIndex from "./index.js";
import mPayGetNotify from "./model.js";
import cPayGetNotifyDetail from "./detail.js";

const payGetNotifyIndex = { onEnter: undefined, component: cPayGetNotifyIndex, models: [mPayGetNotify] };
const payGetNotifyDetail = { onEnter: undefined, component: cPayGetNotifyDetail, models: [mPayGetNotify] };

export {
	payGetNotifyIndex, payGetNotifyDetail,
}