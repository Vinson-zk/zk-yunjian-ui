/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgRoleIndex from "./index.js";
import mSysOrgRole from "./model.js";
import cSysOrgRoleDetail from "./detail.js";
import cSysOrgRoleEdit from "./edit.js";

const sysOrgRoleIndex = { onEnter: undefined, component: cSysOrgRoleIndex, models: [mSysOrgRole] };
const sysOrgRoleDetail = { onEnter: undefined, component: cSysOrgRoleDetail, models: [mSysOrgRole] };
const sysOrgRoleEdit = { onEnter: undefined, component: cSysOrgRoleEdit, models: [mSysOrgRole] };

export {
	sysOrgRoleIndex, sysOrgRoleDetail, sysOrgRoleEdit,
}