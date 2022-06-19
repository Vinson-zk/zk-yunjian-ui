/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cMailTemplateIndex from "./index.js";
import mMailTemplate from "./model.js";
import cMailTemplateDetail from "./detail.js";
import cMailTemplateEdit from "./edit.js";

const mailTemplateIndex = { onEnter: undefined, component: cMailTemplateIndex, models: [mMailTemplate] };
const mailTemplateDetail = { onEnter: undefined, component: cMailTemplateDetail, models: [mMailTemplate] };
const mailTemplateEdit = { onEnter: undefined, component: cMailTemplateEdit, models: [mMailTemplate] };

export {
	mailTemplateIndex, mailTemplateDetail, mailTemplateEdit,
}