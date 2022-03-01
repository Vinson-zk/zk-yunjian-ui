/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cPayGroupIndex from "./index.js";
import mPayGroup from "./model.js";
import cPayGroupDetail from "./detail.js";
import cPayGroupEdit from "./edit.js";

const payGroupIndex = { onEnter: undefined, component: cPayGroupIndex, models: [mPayGroup] };
const payGroupDetail = { onEnter: undefined, component: cPayGroupDetail, models: [mPayGroup] };
const payGroupEdit = { onEnter: undefined, component: cPayGroupEdit, models: [mPayGroup] };

export {
	payGroupIndex, payGroupDetail, payGroupEdit,
}