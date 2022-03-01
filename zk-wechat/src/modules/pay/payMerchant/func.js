/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cPayMerchantIndex from "./index.js";
import mPayMerchant from "./model.js";
import cPayMerchantDetail from "./detail.js";
import cPayMerchantEdit from "./edit.js";

const payMerchantIndex = { onEnter: undefined, component: cPayMerchantIndex, models: [mPayMerchant] };
const payMerchantDetail = { onEnter: undefined, component: cPayMerchantDetail, models: [mPayMerchant] };
const payMerchantEdit = { onEnter: undefined, component: cPayMerchantEdit, models: [mPayMerchant] };

export {
	payMerchantIndex, payMerchantDetail, payMerchantEdit,
}