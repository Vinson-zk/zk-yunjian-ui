/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cMailSendHistoryIndex from "./index.js";
import mMailSendHistory from "./model.js";
import cMailSendHistoryDetail from "./detail.js";

const mailSendHistoryIndex = { onEnter: undefined, component: cMailSendHistoryIndex, models: [mMailSendHistory] };
const mailSendHistoryDetail = { onEnter: undefined, component: cMailSendHistoryDetail, models: [mMailSendHistory] };

export {
	mailSendHistoryIndex, mailSendHistoryDetail,
}