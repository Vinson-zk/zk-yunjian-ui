/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cThirdPartyIndex from "./index.js";
import mThirdParty from "./model.js";
import cThirdPartyDetail from "./detail.js";
import cThirdPartyEdit from "./edit.js";

const thirdPartyIndex = { onEnter: undefined, component: cThirdPartyIndex, models: [mThirdParty] };
const thirdPartyDetail = { onEnter: undefined, component: cThirdPartyDetail, models: [mThirdParty] };
const thirdPartyEdit = { onEnter: undefined, component: cThirdPartyEdit, models: [mThirdParty] };

export {
	thirdPartyIndex, thirdPartyDetail, thirdPartyEdit,
}