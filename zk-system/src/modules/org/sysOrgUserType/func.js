/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgUserTypeIndex from "./index.js";
import mSysOrgUserType from "./model.js";
import cSysOrgUserTypeDetail from "./detail.js";
import cSysOrgUserTypeEdit from "./edit.js";

const sysOrgUserTypeIndex = { onEnter: undefined, component: cSysOrgUserTypeIndex, models: [mSysOrgUserType] };
const sysOrgUserTypeDetail = { onEnter: undefined, component: cSysOrgUserTypeDetail, models: [mSysOrgUserType] };
const sysOrgUserTypeEdit = { onEnter: undefined, component: cSysOrgUserTypeEdit, models: [mSysOrgUserType] };

export {
	sysOrgUserTypeIndex, sysOrgUserTypeDetail, sysOrgUserTypeEdit,
}