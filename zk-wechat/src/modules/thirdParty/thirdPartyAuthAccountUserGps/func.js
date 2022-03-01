/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cThirdPartyAuthAccountUserGpsIndex from "./index.js";
import mThirdPartyAuthAccountUserGps from "./model.js";
import cThirdPartyAuthAccountUserGpsDetail from "./detail.js";

const thirdPartyAuthAccountUserGpsIndex = { onEnter: undefined, component: cThirdPartyAuthAccountUserGpsIndex, models: [mThirdPartyAuthAccountUserGps] };
const thirdPartyAuthAccountUserGpsDetail = { onEnter: undefined, component: cThirdPartyAuthAccountUserGpsDetail, models: [mThirdPartyAuthAccountUserGps] };

export {
	thirdPartyAuthAccountUserGpsIndex, thirdPartyAuthAccountUserGpsDetail,
}