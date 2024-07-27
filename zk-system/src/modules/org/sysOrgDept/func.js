/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:06:43
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 12:27:03
*/

import cSysOrgDeptIndex from "./index.js";
import mSysOrgDept from "./model.js";
import cSysOrgDeptDetail from "./detail.js";
import cSysOrgDeptEdit from "./edit.js";

const sysOrgDeptIndex = { onEnter: undefined, component: cSysOrgDeptIndex, models: [mSysOrgDept] };
const sysOrgDeptDetail = { onEnter: undefined, component: cSysOrgDeptDetail, models: [mSysOrgDept] };
const sysOrgDeptEdit = { onEnter: undefined, component: cSysOrgDeptEdit, models: [mSysOrgDept] };

export {
	sysOrgDeptIndex, sysOrgDeptDetail, sysOrgDeptEdit,
}

