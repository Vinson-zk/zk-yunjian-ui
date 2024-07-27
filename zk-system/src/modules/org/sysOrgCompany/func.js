/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:06:43
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 18:56:03
*/

/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgCompanyIndex from "./index.js";
import mSysOrgCompany from "./model.js";
import cSysOrgCompanyDetail from "./detail.js";
import cSysOrgCompanyEdit from "./edit.js";

const sysOrgCompanyIndex = { onEnter: undefined, component: cSysOrgCompanyIndex, models: [mSysOrgCompany] };
const sysOrgCompanyDetail = { onEnter: undefined, component: cSysOrgCompanyDetail, models: [mSysOrgCompany] };
const sysOrgCompanyEdit = { onEnter: undefined, component: cSysOrgCompanyEdit, models: [mSysOrgCompany] };

export {
	sysOrgCompanyIndex, 
	// sysOrgCompanyDetail, sysOrgCompanyEdit,
}

