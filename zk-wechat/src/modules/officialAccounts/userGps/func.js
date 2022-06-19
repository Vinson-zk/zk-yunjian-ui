/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cOfficialAccountsUserGpsIndex from "./index.js";
import mOfficialAccountsUserGps from "./model.js";
import cOfficialAccountsUserGpsDetail from "./detail.js";

const officialAccountsUserGpsIndex = { onEnter: undefined, component: cOfficialAccountsUserGpsIndex, models: [mOfficialAccountsUserGps] };
const officialAccountsUserGpsDetail = { onEnter: undefined, component: cOfficialAccountsUserGpsDetail, models: [mOfficialAccountsUserGps] };

export {
	officialAccountsUserGpsIndex, officialAccountsUserGpsDetail,
}