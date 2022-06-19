/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgDeptIndex from "./index.js";
import mSysOrgDeptAdmin from "./model.js";
import cSysOrgDeptDetail from "./detail.js";
import cSysOrgDeptEdit from "./edit.js";

const adminSysOrgDeptIndex = { onEnter: undefined, component: cSysOrgDeptIndex, models: [mSysOrgDeptAdmin] };
const adminSysOrgDeptDetail = { onEnter: undefined, component: cSysOrgDeptDetail, models: [mSysOrgDeptAdmin] };
const adminSysOrgDeptEdit = { onEnter: undefined, component: cSysOrgDeptEdit, models: [mSysOrgDeptAdmin] };

export {
	adminSysOrgDeptIndex, adminSysOrgDeptDetail, adminSysOrgDeptEdit,
}