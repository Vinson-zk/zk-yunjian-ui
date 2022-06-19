/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cOfficialAccountsIndex from "./index.js";
import mOfficialAccounts from "./model.js";
import cOfficialAccountsDetail from "./detail.js";

const officialAccountsIndex = { onEnter: undefined, component: cOfficialAccountsIndex, models: [mOfficialAccounts] };
const officialAccountsDetail = { onEnter: undefined, component: cOfficialAccountsDetail, models: [mOfficialAccounts] };

export {
	officialAccountsIndex, officialAccountsDetail,
}