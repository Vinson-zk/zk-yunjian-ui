/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgUserIndex from "./index.js";
import mSysOrgUser from "./model.js";
import cSysOrgUserDetail from "./detail.js";
import cSysOrgUserEdit from "./edit.js";

const sysOrgUserIndex = { onEnter: undefined, component: cSysOrgUserIndex, models: [mSysOrgUser] };
const sysOrgUserDetail = { onEnter: undefined, component: cSysOrgUserDetail, models: [mSysOrgUser] };
const sysOrgUserEdit = { onEnter: undefined, component: cSysOrgUserEdit, models: [mSysOrgUser] };

export {
	sysOrgUserIndex, sysOrgUserDetail, sysOrgUserEdit,
}