/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cPayGetOrderIndex from "./index.js";
import mPayGetOrder from "./model.js";
import cPayGetOrderDetail from "./detail.js";

const payGetOrderIndex = { onEnter: undefined, component: cPayGetOrderIndex, models: [mPayGetOrder] };
const payGetOrderDetail = { onEnter: undefined, component: cPayGetOrderDetail, models: [mPayGetOrder] };

export {
	payGetOrderIndex, payGetOrderDetail,
}