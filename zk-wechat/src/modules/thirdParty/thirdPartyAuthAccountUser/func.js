/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cThirdPartyAuthAccountUserIndex from "./index.js";
import mThirdPartyAuthAccountUser from "./model.js";
import cThirdPartyAuthAccountUserDetail from "./detail.js";

const thirdPartyAuthAccountUserIndex = { onEnter: undefined, component: cThirdPartyAuthAccountUserIndex, models: [mThirdPartyAuthAccountUser] };
const thirdPartyAuthAccountUserDetail = { onEnter: undefined, component: cThirdPartyAuthAccountUserDetail, models: [mThirdPartyAuthAccountUser] };

export {
	thirdPartyAuthAccountUserIndex, thirdPartyAuthAccountUserDetail,
}