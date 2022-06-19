/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cMailTypeIndex from "./index.js";
import mMailType from "./model.js";
import cMailTypeDetail from "./detail.js";
import cMailTypeEdit from "./edit.js";

const mailTypeIndex = { onEnter: undefined, component: cMailTypeIndex, models: [mMailType] };
const mailTypeDetail = { onEnter: undefined, component: cMailTypeDetail, models: [mMailType] };
const mailTypeEdit = { onEnter: undefined, component: cMailTypeEdit, models: [mMailType] };

export {
	mailTypeIndex, mailTypeDetail, mailTypeEdit,
}