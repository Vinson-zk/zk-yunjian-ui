/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysOrgRankIndex from "./index.js";
import mSysOrgRank from "./model.js";
import cSysOrgRankDetail from "./detail.js";
import cSysOrgRankEdit from "./edit.js";

const sysOrgRankIndex = { onEnter: undefined, component: cSysOrgRankIndex, models: [mSysOrgRank] };
const sysOrgRankDetail = { onEnter: undefined, component: cSysOrgRankDetail, models: [mSysOrgRank] };
const sysOrgRankEdit = { onEnter: undefined, component: cSysOrgRankEdit, models: [mSysOrgRank] };

export {
	sysOrgRankIndex, sysOrgRankDetail, sysOrgRankEdit,
}