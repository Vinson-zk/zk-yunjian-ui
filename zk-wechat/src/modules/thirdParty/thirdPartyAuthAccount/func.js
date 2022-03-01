/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cThirdPartyAuthAccountIndex from "./index.js";
import mThirdPartyAuthAccount from "./model.js";
import cThirdPartyAuthAccountDetail from "./detail.js";

const thirdPartyAuthAccountIndex = { onEnter: undefined, component: cThirdPartyAuthAccountIndex, models: [mThirdPartyAuthAccount] };
const thirdPartyAuthAccountDetail = { onEnter: undefined, component: cThirdPartyAuthAccountDetail, models: [mThirdPartyAuthAccount] };

export {
	thirdPartyAuthAccountIndex, thirdPartyAuthAccountDetail,
}