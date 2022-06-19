/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgCompanyIndex from "./index.js";
import mSysOrgCompanyAdmin from "./model.js";
import cSysOrgCompanyDetail from "./detail.js";
import cSysOrgCompanyEdit from "./edit.js";

const adminSysOrgCompanyIndex = { onEnter: undefined, component: cSysOrgCompanyIndex, models: [mSysOrgCompanyAdmin] };
const adminSysOrgCompanyDetail = { onEnter: undefined, component: cSysOrgCompanyDetail, models: [mSysOrgCompanyAdmin] };
const adminSysOrgCompanyEdit = { onEnter: undefined, component: cSysOrgCompanyEdit, models: [mSysOrgCompanyAdmin] };

export {
	adminSysOrgCompanyIndex, adminSysOrgCompanyDetail, adminSysOrgCompanyEdit,
}