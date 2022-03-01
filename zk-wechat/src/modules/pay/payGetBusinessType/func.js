/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cPayGetBusinessTypeIndex from "./index.js";
import mPayGetBusinessType from "./model.js";
import cPayGetBusinessTypeDetail from "./detail.js";
import cPayGetBusinessTypeEdit from "./edit.js";

const payGetBusinessTypeIndex = { onEnter: undefined, component: cPayGetBusinessTypeIndex, models: [mPayGetBusinessType] };
const payGetBusinessTypeDetail = { onEnter: undefined, component: cPayGetBusinessTypeDetail, models: [mPayGetBusinessType] };
const payGetBusinessTypeEdit = { onEnter: undefined, component: cPayGetBusinessTypeEdit, models: [mPayGetBusinessType] };

export {
	payGetBusinessTypeIndex, payGetBusinessTypeDetail, payGetBusinessTypeEdit,
}