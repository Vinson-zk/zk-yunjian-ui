/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cOfficialAccountsUserIndex from "./index.js";
import mOfficialAccountsUser from "./model.js";
import cOfficialAccountsUserDetail from "./detail.js";

const officialAccountsUserIndex = { onEnter: undefined, component: cOfficialAccountsUserIndex, models: [mOfficialAccountsUser] };
const officialAccountsUserDetail = { onEnter: undefined, component: cOfficialAccountsUserDetail, models: [mOfficialAccountsUser] };

export {
	officialAccountsUserIndex, officialAccountsUserDetail,
}